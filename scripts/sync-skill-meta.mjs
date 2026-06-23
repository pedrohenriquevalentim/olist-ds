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
  // Atualiza referências dentro de toda a pasta da skill (inclui decisions/)
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

// ── 4e. Atualiza o H1 title dentro do próprio SKILL.md ──────────────────────

function updateSkillMdTitle(skillDir, version) {
  const skillMdPath = join(skillDir, 'SKILL.md');
  if (!existsSync(skillMdPath)) return;
  let content = readFileSync(skillMdPath, 'utf-8');
  const updated = content.replace(
    /^(# Olist Design System — Especialista) v[\d.]+/m,
    `$1 v${version}`
  );
  if (updated === content) return;
  writeFileSync(skillMdPath, updated, 'utf-8');
  console.log(`   ✅ SKILL.md — H1 title atualizado para v${version}`);
}

// ── 5. Lê o README e a versão dele ──────────────────────────────────────────

function readReadmeVersion(readmePath) {
  if (!existsSync(readmePath)) return null;
  const content = readFileSync(readmePath, 'utf-8');
  const match = content.match(/Especialista \(v([\d.]+)\)/);
  return match ? match[1] : null;
}

// ── 5b. Gera a seção ## Estrutura dinamicamente ──────────────────────────────

// Descrições conhecidas para cada arquivo da skill
const FILE_DESCRIPTIONS = {
  // Raiz
  'SKILL.md':               'Instruções, workflow, regras e fluxo de decisão',
  'README.md':              'Este arquivo — visão geral e changelog',
  'SETUP.md':               'Guia de instalação e configuração',
  'CHANGELOG.md':           'Histórico de versões da skill',
  'figma-config.json':      'Libraries autorizadas (libraryKeys e searchPriority)',
  'component-registry.json':'Cache local de componentKeys por categoria',
  // References
  'VISAO_GERAL.md':         'Mapa de navegação — leia sempre primeiro',
  'FIGMA_CONFIG.md':        'libraryKeys, workflow de busca e import',
  'TEMPLATES_PRODUTO.md':   'Zonas de layout por produto (ERP, Envios, Hub, CD)',
  'HARNEES_TELAS.md':       'Gate pré-construção: restrições por zona, limites por componente',
  'HARNESS_TELAS.md':       'Gate pré-construção: restrições por zona, limites por componente',
  'CORES.md':               'Sistema de cores com regras de uso',
  'TIPOGRAFIA.md':          'Tokens de tipografia (tamanho, peso, altura)',
  'GLOSSARIO_PAPEIS_TEXTO.md': '10 papéis de texto (Heading, Label, Error, etc.)',
  'UX_WRITING.md':          'Tom de voz, 4 pilares, 12 tipos de texto, diretrizes B2B/B2C',
  'ESPACAMENTO.md':         'Grid de 4px, border-radius, escala de espaçamento',
  'COMPONENTES.md':         'Props e variantes de cada componente (auto-gerado)',
  'PADROES.md':             '5 padrões de página (Tabela, Form, Dashboard, Detalhe, Config)',
  'MAPA_FONTES.md':         'Estrutura de pastas do repositório (auto-gerado)',
  'SDD_PARA_TELA.md':       '10 passos para traduzir SDD/PRD em decisões de UI',
  'SDD_AVANCADO.md':        'RNFs, DACI, Métricas, Rollout, Observabilidade → UI',
  'CHECKLIST_REVISAO.md':   '10 categorias de revisão visual, acessibilidade e UX Writing',
};

function buildStructureSection(skillDir, dirName, version) {
  const refsDir = join(skillDir, 'references');

  // Arquivos raiz (excluindo pasta references e .DS_Store)
  const rootFiles = readdirSync(skillDir)
    .filter(f => !statSync(join(skillDir, f)).isDirectory() && f !== '.DS_Store')
    .sort();

  // Arquivos de referências
  const refFiles = existsSync(refsDir)
    ? readdirSync(refsDir).filter(f => f.endsWith('.md')).sort()
    : [];

  const descOf = (name) => FILE_DESCRIPTIONS[name] ?? '';

  // Monta árvore ASCII
  const rootLines = rootFiles.map((f, i) => {
    const isLast = i === rootFiles.length - 1 && refFiles.length === 0;
    const prefix = isLast ? '└──' : '├──';
    const desc = descOf(f);
    return `${prefix} ${f}${desc ? `                           `.slice(f.length) + `# ${desc}` : ''}`;
  });

  const refLines = refFiles.map((f, i) => {
    const isLast = i === refFiles.length - 1;
    const prefix = isLast ? '    └──' : '    ├──';
    const desc = descOf(f);
    return `${prefix} ${f}${desc ? `                                `.slice(f.length) + `# ${desc}` : ''}`;
  });

  const tree = [
    `${dirName}/`,
    ...rootLines,
    ...(refFiles.length > 0 ? [`└── references/`, ...refLines] : []),
  ].join('\n');

  return `## Estrutura

\`\`\`
${tree}
\`\`\`

> **Raiz:** ${rootFiles.length} arquivo(s) · **Referências:** ${refFiles.length} arquivo(s) · **Total:** ${rootFiles.length + refFiles.length} arquivo(s) — atualizado automaticamente pelo \`sync-skill-meta.mjs\``;
}

function replaceStructureBlock(content, skillDir, dirName, version) {
  const newSection = buildStructureSection(skillDir, dirName, version);
  const structureRe = /^## Estrutura[\s\S]*?(?=\n## |\n---\n|$)/m;
  if (structureRe.test(content)) return content.replace(structureRe, newSection);
  return content.replace(/^## Libraries/m, `${newSection}\n\n## Libraries`);
}

function updateReadmeStructure(readmePath, skillDir, dirName, version) {
  if (!existsSync(readmePath)) return;
  const content = replaceStructureBlock(readFileSync(readmePath, 'utf-8'), skillDir, dirName, version);
  writeFileSync(readmePath, content, 'utf-8');
}

function updateSetupMd(setupPath, skillDir, dirName, version) {
  if (!existsSync(setupPath)) return;
  let content = readFileSync(setupPath, 'utf-8');

  // 1. Atualiza título com versão atual
  content = content.replace(
    /# Setup — Olist DS Specialist Skill v[\d.]+/,
    `# Setup — Olist DS Specialist Skill v${version}`
  );

  // 2. Substitui todas as ocorrências do nome genérico ou versionado pelo nome atual
  // Usa \d+(?:\.\d+)* para não capturar o ponto final antes de .zip
  content = content.replace(/olist-ds-specialist-v\d+(?:\.\d+)*\.zip/g, `${dirName}.zip`);
  content = content.replace(/olist-ds-specialist-v\d+(?:\.\d+)*/g, dirName);
  content = content.replace(/olist-ds-specialist(?!-v)/g, dirName);

  // 3. Substitui a estrutura esperada (bloco entre "### Estrutura esperada:" e o próximo "###" ou "---")
  const setupStructureRe = /### Estrutura esperada:[\s\S]*?(?=\n### |\n---\n)/m;
  if (setupStructureRe.test(content)) {
    const refsDir = join(skillDir, 'references');
    const refFiles = existsSync(refsDir)
      ? readdirSync(refsDir).filter(f => f.endsWith('.md')).sort()
      : [];
    const refLines = refFiles.map((f, i) =>
      `│               ${i === refFiles.length - 1 ? '└──' : '├──'} ${f}`
    ).join('\n');

    const newBlock = `### Estrutura esperada:

\`\`\`
seu-projeto/
├── .claude/
│   └── skills/
│       └── ${dirName}/
│           ├── SKILL.md
│           ├── README.md
│           ├── SETUP.md
│           ├── CHANGELOG.md
│           ├── component-registry.json
│           ├── figma-config.json
│           └── references/
${refLines}
└── .gitignore
\`\`\`

`;
    content = content.replace(setupStructureRe, newBlock);
  }

  // 4. Corrige os comandos de checklist que referenciam o nome da pasta
  content = content.replace(
    /ls \.claude\/skills\/[^/\s]+\/SKILL\.md/g,
    `ls .claude/skills/${dirName}/SKILL.md`
  );
  content = content.replace(
    /grep "lk-" \.claude\/skills\/[^/\s]+\/figma-config\.json/g,
    `grep "lk-" .claude/skills/${dirName}/figma-config.json`
  );

  writeFileSync(setupPath, content, 'utf-8');
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

// ── 7b. Atualiza INDEX.md e CHANGELOG.md em decisions/ (dentro da skill) ────

function updateDecisionsIndex(decisionsDir, skillVersion, today) {
  const indexPath = join(decisionsDir, 'INDEX.md');
  if (!existsSync(indexPath)) return;
  let content = readFileSync(indexPath, 'utf-8');
  // Atualiza linha "Última atualização"
  content = content.replace(
    /\*\*Última atualização:\*\*.*/,
    `**Última atualização:** ${today} — skill v${skillVersion}`
  );
  writeFileSync(indexPath, content, 'utf-8');
  console.log(`   ✅ decisions/INDEX.md — data atualizada`);
}

function updateDecisionsChangelog(decisionsDir, skillDir, skillVersion, today) {
  const changelogPath = join(decisionsDir, 'CHANGELOG.md');
  const skillChangelogPath = join(skillDir, 'CHANGELOG.md');

  // Lê bloco da versão atual no CHANGELOG da skill
  let skillEntry = '';
  if (existsSync(skillChangelogPath)) {
    const skillCl = readFileSync(skillChangelogPath, 'utf-8');
    const pattern = new RegExp(`## v${skillVersion.replace('.', '\\.')}[\\s\\S]*?(?=\\n## v|$)`);
    const match = skillCl.match(pattern);
    if (match) skillEntry = match[0].trim();
  }

  let content = existsSync(changelogPath) ? readFileSync(changelogPath, 'utf-8') : '';

  // Não duplica se a versão já estiver registrada
  if (content.includes(`## v${skillVersion}`)) return;

  const entry = skillEntry
    ? `## v${skillVersion} (${today})\n\n> Skill atualizada para v${skillVersion}. Referências sincronizadas automaticamente.\n\n${skillEntry.replace(/^## v[\d.]+ \([^)]+\)\n?/, '')}\n`
    : `## v${skillVersion} (${today})\n\n> Skill atualizada para v${skillVersion}. Referências sincronizadas automaticamente.\n`;

  if (!content) {
    content = `# Changelog — Decisões de Design de Produto\n\nHistórico de atualizações sincronizado com a skill \`olist-ds-specialist\`.\n\n${entry}`;
  } else {
    // Insere após o cabeçalho (primeira linha de ##)
    content = content.replace(/^(# [^\n]+\n[\s\S]*?)(\n## v)/, `$1\n${entry}\n## v`);
  }

  writeFileSync(changelogPath, content, 'utf-8');
  console.log(`   ✅ decisions/CHANGELOG.md — entrada v${skillVersion} adicionada`);
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

// 4b. Atualiza seção ## Estrutura com lista real de arquivos
updateReadmeStructure(readmePath, skillDir, expectedDirName, skillVersion);
console.log(`   ✅ README.md — seção Estrutura regenerada`);

// 4c. Atualiza SETUP.md (versão, caminhos e estrutura esperada)
const setupPath = join(skillDir, 'SETUP.md');
updateSetupMd(setupPath, skillDir, expectedDirName, skillVersion);
console.log(`   ✅ SETUP.md — versão, caminhos e estrutura atualizados`);

// 4d-title. Atualiza o H1 title dentro do próprio SKILL.md
updateSkillMdTitle(skillDir, skillVersion);

// 4d. Atualiza decisions/ (INDEX.md e CHANGELOG.md) — dentro da skill
const decisionsDir = join(skillDir, 'decisions');
const today = new Date().toISOString().split('T')[0];
if (existsSync(decisionsDir)) {
  updateDecisionsIndex(decisionsDir, skillVersion, today);
  updateDecisionsChangelog(decisionsDir, skillDir, skillVersion, today);
} else {
  console.log(`   ℹ️  decisions/ não encontrado dentro da skill — pulando`);
}

// 5. Regenera Wiki
console.log('');
regenerateWiki();

console.log('\n✅ sync-skill-meta concluído.\n');
