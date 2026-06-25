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

// ── 4e. Lê e atualiza lastModified + H1 title dentro do SKILL.md ────────────

function readLastModified(skillDir) {
  const skillMdPath = join(skillDir, 'SKILL.md');
  if (!existsSync(skillMdPath)) return null;
  const content = readFileSync(skillMdPath, 'utf-8');
  const match = content.match(/^lastModified:\s*(.+)/m);
  return match ? match[1].trim() : null;
}

function updateLastModified(skillDir, date) {
  const skillMdPath = join(skillDir, 'SKILL.md');
  if (!existsSync(skillMdPath)) return;
  let content = readFileSync(skillMdPath, 'utf-8');
  if (/^lastModified:/m.test(content)) {
    const updated = content.replace(/^lastModified:.*/m, `lastModified: ${date}`);
    if (updated === content) return; // já está atualizado
    writeFileSync(skillMdPath, updated, 'utf-8');
  } else {
    // Insere após o campo version:
    const updated = content.replace(/^(version:.*)$/m, `$1\nlastModified: ${date}`);
    writeFileSync(skillMdPath, updated, 'utf-8');
  }
  console.log(`   ✅ SKILL.md — lastModified atualizado para ${date}`);
}

function updateSkillMdTitle(skillDir, version, date) {
  const skillMdPath = join(skillDir, 'SKILL.md');
  if (!existsSync(skillMdPath)) return;
  let content = readFileSync(skillMdPath, 'utf-8');
  // Atualiza H1: "v3.6" ou "v3.6 · 2026-06-25"
  const updated = content.replace(
    /^(# Olist Design System — Especialista) v[\d.]+(?:\s·\s[\d-]+)?/m,
    `$1 v${version} · ${date}`
  );
  if (updated === content) return;
  writeFileSync(skillMdPath, updated, 'utf-8');
  console.log(`   ✅ SKILL.md — H1 title atualizado para v${version} · ${date}`);
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

// Descrições de subpastas de decisions/
const DECISIONS_DESCRIPTIONS = {
  'CHANGELOG.md':          'Histórico de decisões de design',
  'INDEX.md':              'Índice navegável de todas as decisões',
  // technical/
  'ACESSIBILIDADE.md':     'Decisões de acessibilidade (WCAG, ARIA, teclado)',
  'ASSETS_FIGMA.md':       'Regras de uso de assets do Figma MCP',
  'COMPONENTES_REACT.md':  'Convenções de componentes React',
  'ICONES.md':             'Uso de ícones via ReactNode e currentColor',
  'TOKENS.md':             'Tokens CSS e variáveis de design',
  // ux-design/
  'ESPACAMENTO_LAYOUT.md': 'Grid de 4px, border-radius, espaçamento',
  'FLUXO_PRD_FIGMA.md':    'Workflow PRD → Figma passo a passo',
  'PRINCIPIOS.md':         'Princípios de design Olist',
  'TIPOGRAFIA.md':         'Escala tipográfica e tokens',
  'UX_WRITING.md':         'Tom de voz, 4 pilares, diretrizes B2B/B2C',
};

function buildStructureSection(skillDir, dirName, version) {
  const refsDir = join(skillDir, 'references');
  const decisionsDir = join(skillDir, 'decisions');

  // Arquivos raiz (excluindo subpastas e .DS_Store)
  const rootFiles = readdirSync(skillDir)
    .filter(f => !statSync(join(skillDir, f)).isDirectory() && f !== '.DS_Store')
    .sort();

  // Arquivos de referências
  const refFiles = existsSync(refsDir)
    ? readdirSync(refsDir).filter(f => f.endsWith('.md')).sort()
    : [];

  // decisions/ e suas subpastas
  let decisionsLines = [];
  let decisionsFileCount = 0;
  if (existsSync(decisionsDir)) {
    const decRootFiles = readdirSync(decisionsDir)
      .filter(f => !statSync(join(decisionsDir, f)).isDirectory() && f !== '.DS_Store')
      .sort();
    const decSubDirs = readdirSync(decisionsDir)
      .filter(f => statSync(join(decisionsDir, f)).isDirectory() && f !== '.DS_Store')
      .sort();

    const totalDecEntries = decRootFiles.length + decSubDirs.length;
    const pad = (name, width = 28) => name + ' '.repeat(Math.max(1, width - name.length));
    decRootFiles.forEach((f, i) => {
      const isLast = i === decRootFiles.length - 1 && decSubDirs.length === 0;
      const prefix = isLast ? '│   └──' : '│   ├──';
      const desc = DECISIONS_DESCRIPTIONS[f] ?? FILE_DESCRIPTIONS[f] ?? '';
      decisionsLines.push(`${prefix} ${desc ? pad(f) + '# ' + desc : f}`);
      decisionsFileCount++;
    });
    decSubDirs.forEach((sub, si) => {
      const isLastSub = si === decSubDirs.length - 1;
      const subPrefix = isLastSub ? '│   └──' : '│   ├──';
      decisionsLines.push(`${subPrefix} ${sub}/`);
      const subFiles = readdirSync(join(decisionsDir, sub))
        .filter(f => f !== '.DS_Store').sort();
      subFiles.forEach((f, fi) => {
        const isLastFile = fi === subFiles.length - 1;
        const filePrefix = isLastSub
          ? (isLastFile ? '│       └──' : '│       ├──')
          : (isLastFile ? '│   │   └──' : '│   │   ├──');
        const desc = DECISIONS_DESCRIPTIONS[f] ?? '';
        decisionsLines.push(`${filePrefix} ${desc ? pad(f) + '# ' + desc : f}`);
        decisionsFileCount++;
      });
    });
  }

  const hasDecisions = decisionsLines.length > 0;
  const hasRefs = refFiles.length > 0;
  const descOf = (name) => FILE_DESCRIPTIONS[name] ?? '';

  // Linhas raiz
  const rootLines = rootFiles.map((f, i) => {
    const isLast = i === rootFiles.length - 1 && !hasDecisions && !hasRefs;
    const prefix = isLast ? '└──' : '├──';
    const desc = descOf(f);
    return `${prefix} ${f}${desc ? `                           `.slice(f.length) + `# ${desc}` : ''}`;
  });

  // Linhas references/
  const refLines = refFiles.map((f, i) => {
    const isLast = i === refFiles.length - 1;
    const prefix = isLast ? '    └──' : '    ├──';
    const desc = descOf(f);
    return `${prefix} ${f}${desc ? `                                `.slice(f.length) + `# ${desc}` : ''}`;
  });

  const treeLines = [
    `${dirName}/`,
    ...rootLines,
    ...(hasDecisions ? [`├── decisions/`, ...decisionsLines] : []),
    ...(hasRefs ? [`└── references/`, ...refLines] : []),
  ];

  const totalFiles = rootFiles.length + decisionsFileCount + refFiles.length;
  const modDate = new Date().toISOString().split('T')[0];
  const summary = hasDecisions
    ? `**Raiz:** ${rootFiles.length} arquivo(s) · **Decisions:** ${decisionsFileCount} arquivo(s) · **Referências:** ${refFiles.length} arquivo(s) · **Total:** ${totalFiles} arquivo(s) — atualizado em ${modDate} pelo \`sync-skill-meta.mjs\``
    : `**Raiz:** ${rootFiles.length} arquivo(s) · **Referências:** ${refFiles.length} arquivo(s) · **Total:** ${totalFiles} arquivo(s) — atualizado em ${modDate} pelo \`sync-skill-meta.mjs\``;

  return `## Estrutura

\`\`\`
${treeLines.join('\n')}
\`\`\`

> ${summary}`;
}

function replaceStructureBlock(content, skillDir, dirName, version) {
  const newSection = buildStructureSection(skillDir, dirName, version);
  // Captura desde "## Estrutura" até a próxima seção "## " (sem flag m para $ não casar fim-de-linha)
  const structureRe = /## Estrutura[\s\S]*?(?=\n## [A-ZÀ-Ú])/;
  if (structureRe.test(content)) return content.replace(structureRe, newSection);
  return content.replace(/## Libraries/m, `${newSection}\n\n## Libraries`);
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

function updateReadme(readmePath, changelogPath, newVersion, lastModified) {
  let content = readFileSync(readmePath, 'utf-8');
  const today = new Date().toISOString().split('T')[0];
  const modLabel = lastModified ? ` · atualizado em ${lastModified}` : '';

  content = content.replace(
    /# Olist Design System — Especialista \(v[\d.]+(?:\s·\s[^)]+)?\)/,
    `# Olist Design System — Especialista (v${newVersion}${modLabel})`
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
const expectedDirName = SKILL_PREFIX; // nome fixo sem sufixo de versão

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

const today = new Date().toISOString().split('T')[0];

// 4a. Atualiza lastModified no SKILL.md e propaga a data
updateLastModified(skillDir, today);
const lastModified = today;

// 4. Atualiza README.md
const readmePath = join(skillDir, 'README.md');
const changelogPath = join(skillDir, 'CHANGELOG.md');
const readmeVersion = readReadmeVersion(readmePath);

console.log(`\n   README versão atual: v${readmeVersion ?? '(não encontrada)'}`);

if (skillVersion !== readmeVersion) {
  console.log(`   📝 Atualizando README de v${readmeVersion} → v${skillVersion}...`);
  updateReadme(readmePath, changelogPath, skillVersion, lastModified);
  console.log(`   ✅ README.md atualizado para v${skillVersion}`);
} else {
  // Mesmo sem mudança de versão, atualiza a data no título do README
  let content = readFileSync(readmePath, 'utf-8');
  const modLabel = ` · atualizado em ${lastModified}`;
  const updatedTitle = content.replace(
    /# Olist Design System — Especialista \(v[\d.]+(?:\s·\s[^)]+)?\)/,
    `# Olist Design System — Especialista (v${skillVersion}${modLabel})`
  );
  if (updatedTitle !== content) writeFileSync(readmePath, updatedTitle, 'utf-8');
  console.log(`   ✅ README já está na versão v${skillVersion} · atualizado em ${lastModified}`);
}

// 4b. Atualiza seção ## Estrutura com lista real de arquivos
updateReadmeStructure(readmePath, skillDir, expectedDirName, skillVersion);
console.log(`   ✅ README.md — seção Estrutura regenerada`);

// 4c. Atualiza SETUP.md (versão, caminhos e estrutura esperada)
const setupPath = join(skillDir, 'SETUP.md');
updateSetupMd(setupPath, skillDir, expectedDirName, skillVersion);
console.log(`   ✅ SETUP.md — versão, caminhos e estrutura atualizados`);

// 4d-title. Atualiza o H1 title dentro do próprio SKILL.md (v3.6 · 2026-06-25)
updateSkillMdTitle(skillDir, skillVersion, lastModified);

// 4d. Atualiza decisions/ (INDEX.md e CHANGELOG.md) — dentro da skill
const decisionsDir = join(skillDir, 'decisions');
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
