#!/usr/bin/env node

/**
 * generate-wiki.mjs v1.0
 * 
 * Gera o Wiki do Design System automaticamente baseado no estado atual do projeto.
 * 
 * Lê:
 * - package.json (versão, scripts)
 * - src/components/ (lista de componentes)
 * - .claude/skills/ (arquivos da skill)
 * - .claude/figma-config.json (configuração Figma)
 * - scripts/ (scripts disponíveis)
 * 
 * Gera:
 * - wiki/WIKI.md (documentação completa)
 * 
 * Uso:
 *   npm run wiki
 *   ou
 *   node scripts/generate-wiki.mjs
 * 
 * Adicionar ao package.json:
 *   "wiki": "node scripts/generate-wiki.mjs",
 *   "postrelease": "npm run wiki"
 */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

const ROOT = process.cwd();
const WIKI_DIR = join(ROOT, 'wiki');
const WIKI_PATH = join(WIKI_DIR, 'WIKI.md');
const PKG_PATH = join(ROOT, 'package.json');
const COMPONENTS_DIR = join(ROOT, 'src', 'components');

// Descobre a pasta da skill dinamicamente (prefixo olist-ds-specialist)
function resolveSkillDir() {
  const base = join(ROOT, '.claude', 'skills');
  if (!existsSync(base)) return null;
  const entries = readdirSync(base).filter(
    name => name.startsWith('olist-ds-specialist') && statSync(join(base, name)).isDirectory()
  );
  const withSkillMd = entries.find(name => existsSync(join(base, name, 'SKILL.md')));
  return withSkillMd ? join(base, withSkillMd) : (entries[0] ? join(base, entries[0]) : null);
}

const SKILL_DIR = resolveSkillDir() ?? join(ROOT, '.claude', 'skills', 'olist-ds-specialist-v3.5');
const FIGMA_CONFIG_PATH = join(SKILL_DIR, 'figma-config.json');
const SCRIPTS_DIR = join(ROOT, 'scripts');
const ICONS_DIR = join(ROOT, 'src', 'assets', 'icons', 'svgs');

const TODAY = new Date().toISOString().split('T')[0];

console.log('📖 Gerando Wiki do Design System...\n');

// ============================================================================
// Helpers
// ============================================================================

function safeRead(path) {
  try { return readFileSync(path, 'utf-8'); } catch { return null; }
}

function safeReadJSON(path) {
  try { return JSON.parse(readFileSync(path, 'utf-8')); } catch { return null; }
}

function listDirs(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(name => statSync(join(dir, name)).isDirectory())
    .sort();
}

function listFiles(dir, ext) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(name => !ext || name.endsWith(ext))
    .sort();
}

function countFiles(dir, ext) {
  return listFiles(dir, ext).length;
}

// ============================================================================
// Data Collection
// ============================================================================

// Package info
const pkg = safeReadJSON(PKG_PATH) || {};
const version = pkg.version || '?.?.?';
const scripts = pkg.scripts || {};
const pkgName = pkg.name || 'olist-ds';

// Components
const components = listDirs(COMPONENTS_DIR);

// Skill files
const skillRootFiles = existsSync(SKILL_DIR)
  ? listFiles(SKILL_DIR).filter(f => !statSync(join(SKILL_DIR, f)).isDirectory() && f !== '.DS_Store')
  : [];
const skillRefDir = join(SKILL_DIR, 'references');
const skillRefFiles = listFiles(skillRefDir, '.md');
const skillVersion = (() => {
  const skillMd = safeRead(join(SKILL_DIR, 'SKILL.md'));
  if (!skillMd) return '?';
  const match = skillMd.match(/version:\s*([\d.]+)/);
  return match ? match[1] : '?';
})();

// Figma config
const figmaConfig = safeReadJSON(FIGMA_CONFIG_PATH);
const figmaLibraries = figmaConfig?.designSystem?.libraries || [];
const figmaFileKey = figmaLibraries[0]?.fileKey || figmaLibraries[0]?.libraryKey?.substring(0, 12) + '…' || 'NÃO CONFIGURADO';
const figmaAllowed = figmaConfig?.designSystem?.searchPriority || [];

// Icons
const iconCount = countFiles(ICONS_DIR, '.svg');

// Scripts
const availableScripts = listFiles(SCRIPTS_DIR, '.mjs');

// Icon migration status
function getIconMigrationStatus() {
  const status = {};
  for (const comp of components) {
    const indexPath = join(COMPONENTS_DIR, comp, 'index.tsx');
    const content = safeRead(indexPath) || '';
    const hasFigmaUrl = /figma\.com\/api\/mcp/.test(content);
    const hasIconImport = /import.*Icon.*from.*Icon/.test(content);
    
    if (comp === 'Icon') {
      status[comp] = '✅ Componente central';
    } else if (hasFigmaUrl && !hasIconImport) {
      status[comp] = '❌ URLs do Figma (pendente)';
    } else if (hasFigmaUrl && hasIconImport) {
      status[comp] = '⚠️ Parcialmente migrado';
    } else if (hasIconImport) {
      status[comp] = '✅ Migrado';
    } else {
      status[comp] = '➖ Sem ícones';
    }
  }
  return status;
}

const iconMigration = getIconMigrationStatus();

console.log(`📦 Pacote: ${pkgName}@${version}`);
console.log(`🧩 Componentes: ${components.length}`);
console.log(`🎨 Ícones: ${iconCount}`);
console.log(`📋 Skill: v${skillVersion} (${skillRefFiles.length} referências)`);
console.log(`🔗 Figma: ${figmaAllowed.length} arquivo(s) permitido(s)\n`);

// ============================================================================
// Wiki Generation
// ============================================================================

let wiki = '';

function section(title, content) {
  wiki += `\n## ${title}\n\n${content}\n`;
}

function h3(title, content) {
  wiki += `\n### ${title}\n\n${content}\n`;
}

// Header
wiki += `# Olist Design System — Wiki

**Pacote:** \`${pkgName}@${version}\`  
**Skill:** v${skillVersion}  
**Última atualização:** ${TODAY}  
**Gerado por:** \`npm run wiki\` (generate-wiki.mjs)

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Componentes](#componentes)
3. [Pipeline de Build e Release](#pipeline-de-build-e-release)
4. [Skill Claude](#skill-claude)
5. [Sistema de Ícones](#sistema-de-ícones)
6. [Configuração do Figma](#configuração-do-figma)
7. [Scripts](#scripts)
8. [Compartilhamento](#compartilhamento)
9. [Troubleshooting](#troubleshooting)
10. [Changelog](#changelog)

---
`;

// Visão Geral
section('Visão Geral', `O Olist Design System é uma biblioteca de componentes React + TypeScript publicada como \`${pkgName}\`.

Combina componentes React, Storybook, skill para Claude, integração com Figma via MCP e sistema de ícones centralizado.

**Números atuais:**

| Métrica | Valor |
|---|---|
| Componentes | ${components.length} |
| Ícones SVG | ${iconCount} |
| Arquivos da Skill | ${skillRootFiles.length + skillRefFiles.length} |
| Arquivos Figma permitidos | ${figmaAllowed.length} |
| Versão npm | ${version} |
| Versão skill | ${skillVersion} |`);

// Componentes
section('Componentes', `### Lista Completa (${components.length})

${components.map(c => `- \`${c}\` — \`src/components/${c}/\``).join('\n')}

### Status de Migração de Ícones

| Componente | Status |
|---|---|
${Object.entries(iconMigration).map(([c, s]) => `| ${c} | ${s} |`).join('\n')}`);

// Pipeline
const scriptsList = Object.entries(scripts)
  .map(([name, cmd]) => `| \`npm run ${name}\` | \`${cmd.length > 60 ? cmd.substring(0, 57) + '...' : cmd}\` |`)
  .join('\n');

section('Pipeline de Build e Release', `### Fluxo do Release

\`\`\`
npm run release
    │
    ├── 1. generate:all (testes + stories via Gemini)
    ├── 2. build (compilação TypeScript)
    ├── 3. sync:skill (atualiza skill v${skillVersion})
    ├── 4. npm version patch (incrementa versão)
    ├── 5. npm publish (publica no registry)
    └── 6. git push --follow-tags
\`\`\`

### Pré-requisitos

- \`GEMINI_API_KEY\` em \`.env\`
- \`dotenv\` instalado (\`npm i -D dotenv --legacy-peer-deps\`)
- Git working directory limpo

### Todos os Scripts

| Comando | Executa |
|---|---|
${scriptsList}`);

// Skill — Regras Críticas extraídas do SKILL.md
function extractRegrasCriticas() {
  const skillMd = safeRead(join(SKILL_DIR, 'SKILL.md'));
  if (!skillMd) return '_Não foi possível ler SKILL.md_';
  // Extrai o bloco entre "## Regras Críticas" e a próxima seção "## "
  const match = skillMd.match(/## Regras Críticas[\s\S]*?(?=\n## )/);
  if (!match) return '_Seção Regras Críticas não encontrada no SKILL.md_';
  // Remove o título (já estará no h3) e retorna o conteúdo
  return match[0].replace(/^## Regras Críticas[^\n]*\n/, '').trim();
}

// Skill — Changelog lido do CHANGELOG.md da skill
function readChangelog() {
  const changelogPath = join(SKILL_DIR, 'CHANGELOG.md');
  const content = safeRead(changelogPath);
  if (!content) return '_Nenhum changelog encontrado. Crie `.claude/skills/olist-ds-specialist-v3.5/CHANGELOG.md`._';
  return content.trim();
}

section('Skill Claude', `### Versão: v${skillVersion}

**Localização:** \`.claude/skills/${basename(SKILL_DIR)}/\`

### Arquivos da Skill (${skillRootFiles.length + skillRefFiles.length} total)

**Raiz (${skillRootFiles.length}):**
${skillRootFiles.map(f => `- \`${f}\``).join('\n')}

**Referências (${skillRefFiles.length}):**
${skillRefFiles.map(f => `- \`${f}\``).join('\n')}

### Auto-gerados vs Manuais

**Auto-gerados** (por \`npm run build\`): COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md (parcial)

**Manuais** (não são sobrescritos): ${skillRefFiles.filter(f => !['COMPONENTES.md', 'MAPA_FONTES.md'].includes(f)).join(', ')}

### Como Usar

**No Claude Code — implementar componente a partir do Figma:**
\`\`\`
Use $olist-ds-specialist para implementar este componente:
https://www.figma.com/design/XXXX/YYYY?node-id=123:456
\`\`\`

**No Claude Code — criar tela a partir de SDD:**
\`\`\`
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR O SDD]
\`\`\`

**No Claude.ai (sem terminal):**
1. Settings → Connectors → Figma → Connect
2. Customize → Skills → Upload → selecionar pasta da skill
3. Iniciar conversa e colar o SDD ou link do Figma

### Regras Críticas v${skillVersion}

${extractRegrasCriticas()}`);

// Ícones
section('Sistema de Ícones', `### Arquitetura

\`\`\`
src/components/Icon/     → Componente React
src/assets/icons/svgs/   → ${iconCount} SVGs (24px, Outline, currentColor)
\`\`\`

### Uso

\`\`\`tsx
import { Icon } from '${pkgName}';

<Icon name="check" size={20} />
<Icon name="chevron-right" size={16} color="var(--color-blue-500)" />
\`\`\`

### Tamanhos

| Contexto | Tamanho |
|---|---|
| Botão small | 16px |
| Botão medium | 20px |
| Botão large | 24px |

### Validação

\`\`\`bash
npm run validate:icons
# ✅ = migração completa
# ❌ = componentes pendentes
\`\`\``);

// Figma
const librariesTable = figmaLibraries.length > 0
  ? `| Prioridade | Library | Descrição |\n|---|---|---|\n` +
    figmaLibraries.map(lib =>
      `| ${lib.priority} | **${lib.name}** | ${lib.description?.split('.')[0] || ''} |`
    ).join('\n')
  : '_Nenhuma library configurada_';

section('Configuração do Figma', `### Arquivo: \`.claude/figma-config.json\`

**Status:** ${figmaConfig ? '✅ Configurado' : '❌ Não encontrado'}
**Libraries configuradas:** ${figmaLibraries.length}
**searchPriority entries:** ${figmaAllowed.length}

### Libraries por Prioridade

${librariesTable}

### Blocked Libraries

${figmaConfig?.designSystem?.blockedLibraries?.map(b => `- **${b.name}** — ${b.reason}`).join('\n') || '_Nenhuma_'}

### Como Extrair fileKey

\`\`\`
URL:     https://www.figma.com/design/ABC123/nome
FileKey: ABC123
\`\`\`

### Setup

\`\`\`bash
cp .claude/skills/olist-ds-specialist-v3.5/figma-config.example.json .claude/figma-config.json
# Editar com seus fileKeys
echo '.claude/figma-config.json' >> .gitignore
\`\`\``);

// Scripts
section('Scripts', `### Disponíveis em \`scripts/\`

${availableScripts.map(s => `- \`${s}\``).join('\n')}

### Principais

| Script | Propósito | Quando Usar |
|---|---|---|
| \`sync-skill.mjs\` | Atualiza skill com código | Após mudar componentes |
| \`validate-icon-migration.mjs\` | Verifica URLs do Figma | Antes de release |
| \`extract-icons-from-figma.mjs\` | Exporta ícones do Figma | Ao adicionar ícones |
| \`generate-wiki.mjs\` | Gera este Wiki | Automaticamente no release |`);

// Compartilhamento
section('Compartilhamento', `### O Que Compactar

\`\`\`bash
cd .claude/skills
zip -r olist-ds-specialist-v${skillVersion}.zip olist-ds-specialist-v3.5/
\`\`\`

### O Que NÃO Vai

- \`.claude/figma-config.json\` (específico do projeto)
- \`.claude/settings.local.json\`
- \`.claude/worktrees/\`
- \`.env\`

### Setup do Destinatário

\`\`\`bash
# 1. Extrair e copiar skill
unzip olist-ds-specialist-v${skillVersion}.zip
cp -r olist-ds-specialist-v3.5/ .claude/skills/olist-ds-specialist-v3.5/

# 2. Configurar Figma
cp .claude/skills/olist-ds-specialist-v3.5/figma-config.example.json .claude/figma-config.json
# Editar com fileKeys próprios

# 3. Gitignore
echo '.claude/figma-config.json' >> .gitignore
\`\`\``);

// Troubleshooting
section('Troubleshooting', `### GEMINI_API_KEY não definida

\`\`\`bash
echo 'GEMINI_API_KEY=sua-chave' > .env
# Adicionar "import 'dotenv/config';" no topo dos scripts generate-*.mjs
\`\`\`

### Git working directory not clean

\`\`\`bash
git add . && git commit -m "chore: prepare release" && npm run release
\`\`\`

### npm install ERESOLVE (Storybook v8 vs v10)

\`\`\`bash
npm install --save-dev PACOTE --legacy-peer-deps
\`\`\`

### Ícones não aparecem

1. SVGs existem em \`src/assets/icons/svgs/\`?
2. SVGs usam \`currentColor\`?
3. SVGs têm \`viewBox\` definido?

### Claude não respeita figma-config

1. \`.claude/figma-config.json\` existe?
2. \`searchPriority\` tem os libraryKeys corretos?
3. Skill v${skillVersion} instalada?
4. O prompt inclui instrução para ler \`figma-config.json\` antes do Figma MCP?`);

// Changelog — lido do CHANGELOG.md da skill
section('Changelog', readChangelog());

// Footer
wiki += `\n---\n\n*Gerado automaticamente em ${TODAY} por \`generate-wiki.mjs\`. Não edite manualmente.*\n`;

// ============================================================================
// Write
// ============================================================================

mkdirSync(WIKI_DIR, { recursive: true });
writeFileSync(WIKI_PATH, wiki, 'utf-8');

console.log(`✅ Wiki gerado: wiki/WIKI.md`);
console.log(`   ${wiki.split('\n').length} linhas`);
console.log(`   ${Math.round(wiki.length / 1024)}KB\n`);
console.log('💡 Para atualizar automaticamente a cada release, adicione ao package.json:');
console.log('   "wiki": "node scripts/generate-wiki.mjs"');
console.log('   "postrelease": "npm run wiki"');
