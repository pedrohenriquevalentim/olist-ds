#!/usr/bin/env node

/**
 * sync-skill-meta.mjs
 *
 * Sincroniza metadados da skill após mudanças de versão:
 *   1. Lê versão atual do SKILL.md (frontmatter `version:`)
 *   2. Atualiza README.md da skill (título + entrada de changelog)
 *   3. Regenera wiki/WIKI.md via generate-wiki.mjs
 *
 * Uso:
 *   node scripts/sync-skill-meta.mjs
 *
 * Disparado automaticamente pelo hook PostToolUse do Claude Code
 * sempre que SKILL.md ou CHANGELOG.md da skill são editados.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SKILL_DIR = join(ROOT, '.claude', 'skills', 'olist-ds-specialist-v2');
const SKILL_MD = join(SKILL_DIR, 'SKILL.md');
const CHANGELOG_MD = join(SKILL_DIR, 'CHANGELOG.md');
const README_MD = join(SKILL_DIR, 'README.md');

// ── 1. Lê a versão do SKILL.md ──────────────────────────────────────────────

function readSkillVersion() {
  if (!existsSync(SKILL_MD)) {
    console.error('❌ SKILL.md não encontrado:', SKILL_MD);
    process.exit(1);
  }
  const content = readFileSync(SKILL_MD, 'utf-8');
  const match = content.match(/^version:\s*([\d.]+)/m);
  if (!match) {
    console.error('❌ Campo `version:` não encontrado no frontmatter do SKILL.md');
    process.exit(1);
  }
  return match[1];
}

// ── 2. Lê a versão atual do README.md ───────────────────────────────────────

function readReadmeVersion() {
  if (!existsSync(README_MD)) return null;
  const content = readFileSync(README_MD, 'utf-8');
  const match = content.match(/Especialista \(v([\d.]+)\)/);
  return match ? match[1] : null;
}

// ── 3. Lê o changelog da versão no CHANGELOG.md ─────────────────────────────

function readChangelogForVersion(version) {
  if (!existsSync(CHANGELOG_MD)) return null;
  const content = readFileSync(CHANGELOG_MD, 'utf-8');
  // Captura o bloco do ## vX.Y (até o próximo ## vX.Y ou fim do arquivo)
  const pattern = new RegExp(`## v${version.replace('.', '\\.')}[\\s\\S]*?(?=\\n## v|$)`);
  const match = content.match(pattern);
  return match ? match[0].trim() : null;
}

// ── 4. Atualiza o README.md ──────────────────────────────────────────────────

function updateReadme(newVersion, oldVersion) {
  let content = readFileSync(README_MD, 'utf-8');
  const today = new Date().toISOString().split('T')[0];

  // 4a. Atualiza o título
  content = content.replace(
    /# Olist Design System — Especialista \(v[\d.]+\)/,
    `# Olist Design System — Especialista (v${newVersion})`
  );

  // 4b. Adiciona nova seção de novidades logo após o título/descrição
  const changelogBlock = readChangelogForVersion(newVersion);
  const novidades = changelogBlock
    ? buildNovidadesSection(newVersion, today, changelogBlock)
    : null;

  if (novidades) {
    // Insere ANTES do primeiro bloco "## Novidades" existente (ou antes de "## Estrutura")
    const insertBefore = /^## Novidades v[\d.]+|^## Estrutura/m;
    if (insertBefore.test(content)) {
      content = content.replace(insertBefore, `${novidades}\n\n$&`);
    }
  }

  // 4c. Atualiza a linha do changelog dentro de "## Changelog" (referências à versão antiga)
  content = content.replace(
    /### v[\d.]+ \(\d{4}-\d{2}-\d{2}\)\n- \*\*Harness:\*\* `HARNESS_TELAS/,
    (m) => m // mantém entradas antigas intactas
  );

  // 4d. Adiciona entrada no ## Changelog se ainda não existir
  const changelogEntry = buildChangelogEntry(newVersion, today, changelogBlock);
  const changelogHeaderRe = /^## Changelog\n/m;
  if (changelogHeaderRe.test(content) && !content.includes(`### v${newVersion}`)) {
    content = content.replace(changelogHeaderRe, `## Changelog\n\n${changelogEntry}\n`);
  }

  writeFileSync(README_MD, content, 'utf-8');
}

function buildNovidadesSection(version, date, changelogBlock) {
  // Extrai os bullet points do changelog (linhas que começam com "- ")
  const bullets = changelogBlock
    .split('\n')
    .filter(l => l.startsWith('- '))
    .map(l => l.trim())
    .join('\n');

  return `## Novidades v${version} (${date})\n\n${bullets}`;
}

function buildChangelogEntry(version, date, changelogBlock) {
  if (!changelogBlock) {
    return `### v${version} (${date})\n- Versão ${version}`;
  }
  // Remove o header "## vX.Y (data)" e usa os bullets
  const bullets = changelogBlock
    .replace(/^## v[\d.]+[^\n]*\n/, '')
    .trim();
  return `### v${version} (${date})\n${bullets}`;
}

// ── 5. Regenera o Wiki ───────────────────────────────────────────────────────

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

const skillVersion = readSkillVersion();
const readmeVersion = readReadmeVersion();

console.log(`\n🔄 sync-skill-meta`);
console.log(`   Versão do SKILL.md : v${skillVersion}`);
console.log(`   Versão do README.md: v${readmeVersion ?? '(não encontrada)'}`);

if (skillVersion === readmeVersion) {
  console.log(`   ✅ README já está na versão v${skillVersion} — regenerando Wiki.\n`);
} else {
  console.log(`   📝 Atualizando README de v${readmeVersion} → v${skillVersion}...\n`);
  updateReadme(skillVersion, readmeVersion);
  console.log(`   ✅ README.md atualizado para v${skillVersion}`);
}

regenerateWiki();

console.log('\n✅ sync-skill-meta concluído.\n');
