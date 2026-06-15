#!/usr/bin/env node

/**
 * sync-skill-meta.mjs
 *
 * Sincroniza metadados da skill após mudanças de versão:
 *   1. Descobre a pasta atual da skill em .claude/skills/ (glob por prefixo)
 *   2. Lê a versão do SKILL.md (frontmatter `version:`)
 *   3. Se a pasta não corresponde à versão → renomeia a pasta
 *   4. Atualiza todas as referências ao nome antigo da pasta nos arquivos do projeto
 *   5. Atualiza o hook em .claude/settings.json com o novo path
 *   6. Atualiza README.md da skill (título + entrada de changelog)
 *   7. Regenera wiki/WIKI.md via generate-wiki.mjs
 *
 * Disparado automaticamente por:
 *   - npm run build
 *   - npm run release
 *   - Hook PostToolUse do Claude Code (ao editar SKILL.md ou CHANGELOG.md)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, renameSync, statSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SKILLS_BASE = join(ROOT, '.claude', 'skills');
const SKILL_PREFIX = 'olist-ds-specialist';

// ── 1. Descobre a pasta atual da skill ──────────────────────────────────────

function resolveSkillDir() {
  if (!existsSync(SKILLS_BASE)) return null;
  const entries = readdirSync(SKILLS_BASE).filter(
    name => name.startsWith(SKILL_PREFIX) && statSync(join(SKILLS_BASE, name)).isDirectory()
  );
  if (entries.length === 0) return null;
  // Preferência: pasta que contém SKILL.md
  const withSkillMd = entries.find(name => existsSync(join(SKILLS_BASE, name, 'SKILL.md')));
  return join(SKILLS_BASE, withSkillMd ?? entries[0]);
}

// ── 2. Lê a versão do SKILL.md ──────────────────────────────────────────────

function readSkillVersion(skillDir) {
  const skillMd = join(skillDir, 'SKILL.md');
  if (!existsSync(skillMd)) {
    console.error('❌ SKILL.md não encontrado:', skillMd);
    process.exit(1);
  }
  const content = readFileSync(skillMd, 'utf-8');
  const match = content.match(/^version:\s*([\d.]+)/m);
  if (!match) {
    console.error('❌ Campo `version:` não encontrado no frontmatter do SKILL.md');
    process.exit(1);
  }
  return match[1];
}

// ── 3. Renomeia a pasta da skill ─────────────────────────────────────────────

function renameSkillDir(oldDir, newName) {
  const newDir = join(SKILLS_BASE, newName);
  if (oldDir === newDir) return oldDir;
  renameSync(oldDir, newDir);
  console.log(`   📁 Pasta renomeada: ${basename(oldDir)} → ${newName}`);
  return newDir;
}

// ── 4. Atualiza referências ao nome da pasta em arquivos do projeto ──────────

const FILES_WITH_SKILL_REF = [
  'scripts/sync-skill.mjs',
  'scripts/generate-wiki.mjs',
  'scripts/sync-skill-meta.mjs',
  '.claude/settings.json',
  'CLAUDE.md',
  'README.md',
  'wiki/WIKI.md',
];

function updateReferencesInFile(filePath, oldName, newName) {
  if (!existsSync(filePath)) return false;
  const original = readFileSync(filePath, 'utf-8');
  // Escapa caracteres especiais do nome antigo para uso em regex
  const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const updated = original.replace(new RegExp(escaped, 'g'), newName);
  if (updated === original) return false;
  writeFileSync(filePath, updated, 'utf-8');
  return true;
}

function updateAllReferences(oldName, newName) {
  if (oldName === newName) return;
  console.log(`\n   🔗 Atualizando referências: "${oldName}" → "${newName}"`);
  for (const rel of FILES_WITH_SKILL_REF) {
    const abs = join(ROOT, rel);
    const changed = updateReferencesInFile(abs, oldName, newName);
    if (changed) console.log(`      ✓ ${rel}`);
  }
  // Também atualiza referências dentro dos próprios arquivos da skill
  const skillDir = join(SKILLS_BASE, newName);
  updateSkillInternalRefs(skillDir, oldName, newName);
}

function updateSkillInternalRefs(skillDir, oldName, newName) {
  if (!existsSync(skillDir)) return;
  const walk = (dir) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) { walk(full); continue; }
      if (!entry.endsWith('.md') && !entry.endsWith('.json')) continue;
      updateReferencesInFile(full, oldName, newName);
    }
  };
  walk(skillDir);
}

// ── 5. Lê o README e a versão dele ──────────────────────────────────────────

function readReadmeVersion(readmePath) {
  if (!existsSync(readmePath)) return null;
  const content = readFileSync(readmePath, 'utf-8');
  const match = content.match(/Especialista \(v([\d.]+)\)/);
  return match ? match[1] : null;
}

// ── 6. Atualiza o README.md ──────────────────────────────────────────────────

function readChangelogForVersion(changelogPath, version) {
  if (!existsSync(changelogPath)) return null;
  const content = readFileSync(changelogPath, 'utf-8');
  const pattern = new RegExp(`## v${version.replace('.', '\\.')}[\\s\\S]*?(?=\\n## v|$)`);
  const match = content.match(pattern);
  return match ? match[0].trim() : null;
}

function buildNovidadesSection(version, date, changelogBlock) {
  const bullets = changelogBlock
    .split('\n')
    .filter(l => l.startsWith('- '))
    .map(l => l.trim())
    .join('\n');
  return `## Novidades v${version} (${date})\n\n${bullets}`;
}

function buildChangelogEntry(version, date, changelogBlock) {
  if (!changelogBlock) return `### v${version} (${date})\n- Versão ${version}`;
  const bullets = changelogBlock.replace(/^## v[\d.]+[^\n]*\n/, '').trim();
  return `### v${version} (${date})\n${bullets}`;
}

function updateReadme(readmePath, changelogPath, newVersion) {
  let content = readFileSync(readmePath, 'utf-8');
  const today = new Date().toISOString().split('T')[0];

  content = content.replace(
    /# Olist Design System — Especialista \(v[\d.]+\)/,
    `# Olist Design System — Especialista (v${newVersion})`
  );

  const changelogBlock = readChangelogForVersion(changelogPath, newVersion);

  if (changelogBlock) {
    const novidades = buildNovidadesSection(newVersion, today, changelogBlock);
    const insertBefore = /^## Novidades v[\d.]+|^## Estrutura/m;
    if (insertBefore.test(content)) {
      content = content.replace(insertBefore, `${novidades}\n\n$&`);
    }
  }

  const changelogEntry = buildChangelogEntry(newVersion, today, changelogBlock);
  const changelogHeaderRe = /^## Changelog\n/m;
  if (changelogHeaderRe.test(content) && !content.includes(`### v${newVersion}`)) {
    content = content.replace(changelogHeaderRe, `## Changelog\n\n${changelogEntry}\n`);
  }

  writeFileSync(readmePath, content, 'utf-8');
}

// ── 7. Regenera o Wiki ───────────────────────────────────────────────────────

function regenerateWiki() {
  const wikiScript = join(ROOT, 'scripts', 'generate-wiki.mjs');
  if (!existsSync(wikiScript)) {
    console.warn('⚠️  generate-wiki.mjs não encontrado — pulando geração do Wiki.');
    return;
  }
  try {
    execSync(`node "${wikiScript}"`, { cwd: ROOT, stdio: 'inherit' });
  } catch (e) {
    console.error('❌ Erro ao gerar Wiki:', e.message);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

console.log('\n🔄 sync-skill-meta');

// 1. Descobre pasta atual
const currentSkillDir = resolveSkillDir();
if (!currentSkillDir) {
  console.error('❌ Nenhuma pasta de skill encontrada em .claude/skills/');
  process.exit(1);
}
const currentDirName = basename(currentSkillDir);

// 2. Lê a versão do SKILL.md
const skillVersion = readSkillVersion(currentSkillDir);
const expectedDirName = `${SKILL_PREFIX}-v${skillVersion}`;

console.log(`   Pasta atual   : ${currentDirName}`);
console.log(`   Versão skill  : v${skillVersion}`);
console.log(`   Pasta esperada: ${expectedDirName}`);

// 3. Renomeia a pasta se necessário e atualiza referências
let skillDir = currentSkillDir;
if (currentDirName !== expectedDirName) {
  skillDir = renameSkillDir(currentSkillDir, expectedDirName);
  updateAllReferences(currentDirName, expectedDirName);
} else {
  console.log(`   ✅ Pasta já está no nome correto`);
}

// 4. Atualiza README.md
const readmePath = join(skillDir, 'README.md');
const changelogPath = join(skillDir, 'CHANGELOG.md');
const readmeVersion = readReadmeVersion(readmePath);

console.log(`\n   README versão atual: v${readmeVersion ?? '(não encontrada)'}`);

if (skillVersion !== readmeVersion) {
  console.log(`   📝 Atualizando README de v${readmeVersion} → v${skillVersion}...`);
  updateReadme(readmePath, changelogPath, skillVersion);
  console.log(`   ✅ README.md atualizado para v${skillVersion}`);
} else {
  console.log(`   ✅ README já está na versão v${skillVersion}`);
}

// 5. Regenera Wiki
console.log('');
regenerateWiki();

console.log('\n✅ sync-skill-meta concluído.\n');
