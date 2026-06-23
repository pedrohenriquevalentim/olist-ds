#!/usr/bin/env node

/**
 * version-skill.mjs
 *
 * Detecta mudanças em .claude/skills/ ou .claude/decisions/ via git
 * e faz bump automático de patch na versão do SKILL.md.
 *
 * O sync-skill-meta.mjs (já chamado no build) cuida do resto:
 *   - renomeia a pasta da skill
 *   - atualiza todas as referências nos arquivos do projeto
 *   - atualiza README.md, SETUP.md, CHANGELOG.md, wiki
 *
 * Uso:
 *   npm run version:skill
 *   ou diretamente: node scripts/version-skill.mjs
 *
 * Flags:
 *   --minor   faz bump de minor em vez de patch
 *   --dry-run imprime o que faria, sem alterar arquivos
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const SKILLS_BASE = join(ROOT, '.claude', 'skills');
const SKILL_PREFIX = 'olist-ds-specialist';

const isDryRun = process.argv.includes('--dry-run');
const bumpMinor = process.argv.includes('--minor');

// ── Utilitários ──────────────────────────────────────────────────────────────

function resolveSkillDir() {
  if (!existsSync(SKILLS_BASE)) return null;
  const entries = readdirSync(SKILLS_BASE).filter(
    name => name.startsWith(SKILL_PREFIX) && statSync(join(SKILLS_BASE, name)).isDirectory()
  );
  const withSkillMd = entries.find(name => existsSync(join(SKILLS_BASE, name, 'SKILL.md')));
  return withSkillMd ? join(SKILLS_BASE, withSkillMd) : (entries[0] ? join(SKILLS_BASE, entries[0]) : null);
}

function readVersion(skillMdPath) {
  const content = readFileSync(skillMdPath, 'utf-8');
  const match = content.match(/^version:\s*([\d.]+)/m);
  if (!match) {
    console.error('❌ Campo `version:` não encontrado no frontmatter do SKILL.md');
    process.exit(1);
  }
  return match[1];
}

function bumpVersion(version, minor) {
  const [major, minorNum, patch] = version.split('.').map(Number);
  if (minor) return `${major}.${minorNum + 1}`;
  if (patch !== undefined) return `${major}.${minorNum}.${patch + 1}`;
  // versão no formato X.Y (sem patch) → incrementa Y
  return `${major}.${minorNum + 1}`;
}

function writeVersion(skillMdPath, oldVersion, newVersion) {
  const content = readFileSync(skillMdPath, 'utf-8');
  const updated = content.replace(
    /^(version:\s*)[\d.]+/m,
    `$1${newVersion}`
  );
  writeFileSync(skillMdPath, updated, 'utf-8');
}

// ── Detecção de mudanças via git ─────────────────────────────────────────────

function detectSkillChanges(skillDir) {
  const skillDirName = basename(skillDir);

  // Caminhos a monitorar (relativos à raiz) — decisions/ fica dentro da skill
  const watchPaths = [
    `.claude/skills/${skillDirName}`,
  ].filter(p => existsSync(join(ROOT, p)));

  if (watchPaths.length === 0) return { hasChanges: false, files: [] };

  // 1. Mudanças staged e não-staged (arquivos rastreados)
  // 2. Arquivos novos não-rastreados (untracked)
  let changedFiles = [];
  try {
    const statusOutput = execSync(
      `git status --porcelain -- ${watchPaths.map(p => `"${p}"`).join(' ')}`,
      { cwd: ROOT, encoding: 'utf-8' }
    ).trim();

    if (statusOutput) {
      changedFiles = statusOutput
        .split('\n')
        .filter(Boolean)
        .map(line => line.slice(3).trim()); // remove status code (XY + espaço)
    }
  } catch {
    // git não disponível ou fora de repo — assume que não há mudanças
    return { hasChanges: false, files: [] };
  }

  // 3. Mudanças entre o último tag e HEAD (commits já feitos mas não taggeados)
  let tagChangedFiles = [];
  try {
    const lastTag = execSync('git describe --tags --abbrev=0 2>/dev/null || echo ""', {
      cwd: ROOT, encoding: 'utf-8', shell: true,
    }).trim();

    if (lastTag) {
      const diffOutput = execSync(
        `git diff "${lastTag}" HEAD --name-only -- ${watchPaths.map(p => `"${p}"`).join(' ')}`,
        { cwd: ROOT, encoding: 'utf-8' }
      ).trim();
      if (diffOutput) {
        tagChangedFiles = diffOutput.split('\n').filter(Boolean);
      }
    }
  } catch {
    // silencioso — fallback para só status
  }

  const allFiles = [...new Set([...changedFiles, ...tagChangedFiles])];
  return { hasChanges: allFiles.length > 0, files: allFiles };
}

// ── Atualiza CHANGELOG.md da skill ───────────────────────────────────────────

function updateSkillChangelog(skillDir, oldVersion, newVersion, changedFiles) {
  const changelogPath = join(skillDir, 'CHANGELOG.md');
  const today = new Date().toISOString().split('T')[0];

  // Agrupa arquivos por área
  const skillFiles = changedFiles.filter(f => f.includes('.claude/skills/')).map(f => f.replace(/.*\.claude\/skills\/[^/]+\//, ''));
  const decisionsFiles = changedFiles.filter(f => f.includes('.claude/decisions/')).map(f => f.replace(/.*\.claude\/decisions\//, 'decisions/'));
  const otherFiles = changedFiles.filter(f => !f.includes('.claude/'));

  const bullets = [];
  if (skillFiles.length > 0) bullets.push(`- Arquivos da skill modificados: ${skillFiles.join(', ')}`);
  if (decisionsFiles.length > 0) bullets.push(`- Decisões de design atualizadas: ${decisionsFiles.join(', ')}`);
  if (otherFiles.length > 0) bullets.push(`- Outros arquivos: ${otherFiles.join(', ')}`);

  const entry = `## v${newVersion} (${today})\n${bullets.join('\n')}\n`;

  let content = existsSync(changelogPath) ? readFileSync(changelogPath, 'utf-8') : '';
  if (content.includes(`## v${newVersion}`)) return; // já existe

  // Insere no topo (após eventual header)
  const headerRe = /^(## v)/m;
  if (headerRe.test(content)) {
    content = content.replace(headerRe, `${entry}\n## v`);
  } else {
    content = `${entry}\n${content}`;
  }

  if (!isDryRun) writeFileSync(changelogPath, content, 'utf-8');
}

// ── Main ─────────────────────────────────────────────────────────────────────

console.log('\n🔍 version-skill — verificando mudanças na skill...\n');

const skillDir = resolveSkillDir();
if (!skillDir) {
  console.error('❌ Nenhuma pasta de skill encontrada em .claude/skills/');
  process.exit(1);
}

const skillMdPath = join(skillDir, 'SKILL.md');
const currentVersion = readVersion(skillMdPath);
const { hasChanges, files } = detectSkillChanges(skillDir);

console.log(`   Skill atual : ${basename(skillDir)}`);
console.log(`   Versão atual: v${currentVersion}`);

if (!hasChanges) {
  console.log('   ✅ Nenhuma mudança detectada na skill — versão mantida.\n');
  process.exit(0);
}

console.log(`   📝 Mudanças detectadas (${files.length} arquivo(s)):`);
files.forEach(f => console.log(`      - ${f}`));

const newVersion = bumpVersion(currentVersion, bumpMinor);
const bumpType = bumpMinor ? 'minor' : 'patch';
console.log(`\n   🔼 Bump ${bumpType}: v${currentVersion} → v${newVersion}`);

if (isDryRun) {
  console.log('\n   ⚡ DRY RUN — nenhum arquivo foi alterado.\n');
  process.exit(0);
}

// 1. Atualiza version: no SKILL.md
writeVersion(skillMdPath, currentVersion, newVersion);
console.log(`   ✅ SKILL.md — version: ${newVersion}`);

// 2. Atualiza CHANGELOG.md da skill
updateSkillChangelog(skillDir, currentVersion, newVersion, files);
console.log(`   ✅ CHANGELOG.md da skill — entrada v${newVersion} adicionada`);

console.log('\n   ▶ sync-skill-meta vai renomear a pasta e atualizar todas as referências.\n');
