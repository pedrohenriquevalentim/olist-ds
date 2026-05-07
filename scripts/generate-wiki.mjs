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
import { join } from 'path';

const ROOT = process.cwd();
const WIKI_DIR = join(ROOT, 'wiki');
const WIKI_PATH = join(WIKI_DIR, 'WIKI.md');
const PKG_PATH = join(ROOT, 'package.json');
const COMPONENTS_DIR = join(ROOT, 'src', 'components');
const SKILL_DIR = join(ROOT, '.claude', 'skills', 'olist-ds-specialist');
const FIGMA_CONFIG_PATH = join(ROOT, '.claude', 'figma-config.json');
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
  ? listFiles(SKILL_DIR).filter(f => !statSync(join(SKILL_DIR, f)).isDirectory())
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
const figmaFileKey = figmaConfig?.designSystem?.masterFile?.fileKey || 'NÃO CONFIGURADO';
const figmaAllowed = figmaConfig?.designSystem?.allowedFiles || [];

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

// Skill
section('Skill Claude', `### Versão: v${skillVersion}

**Localização:** \`.claude/skills/olist-ds-specialist/\`

### Arquivos da Skill (${skillRootFiles.length + skillRefFiles.length} total)

**Raiz (${skillRootFiles.length}):**
${skillRootFiles.map(f => `- \`${f}\``).join('\n')}

**Referências (${skillRefFiles.length}):**
${skillRefFiles.map(f => `- \`${f}\``).join('\n')}

### Auto-gerados vs Manuais

**Auto-gerados** (por \`npm run build\`): COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md (parcial)

**Manuais** (não são sobrescritos): ${skillRefFiles.filter(f => !['COMPONENTES.md', 'MAPA_FONTES.md'].includes(f)).join(', ')}

### Regras Críticas

1. Ler VISAO_GERAL.md primeiro
2. Ler \`.claude/figma-config.json\` ANTES de usar Figma MCP
3. Usar APENAS arquivos em \`allowedFiles\` (${figmaAllowed.length} configurados)
4. Workflow faseado no Figma (tela por tela)`);

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
section('Configuração do Figma', `### Arquivo: \`.claude/figma-config.json\`

**Status:** ${figmaConfig ? '✅ Configurado' : '❌ Não encontrado'}
**FileKey principal:** \`${figmaFileKey}\`
**Arquivos permitidos:** ${figmaAllowed.length}

${figmaAllowed.length > 0 ? figmaAllowed.map((fk, i) => `${i + 1}. \`${fk}\``).join('\n') : '_Nenhum arquivo configurado_'}

### Como Extrair fileKey

\`\`\`
URL:     https://www.figma.com/design/ABC123/nome
FileKey: ABC123
\`\`\`

### Setup

\`\`\`bash
cp .claude/skills/olist-ds-specialist/figma-config.example.json .claude/figma-config.json
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
zip -r olist-ds-specialist-v${skillVersion}.zip olist-ds-specialist-v2/
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
cp -r olist-ds-specialist-v2/ .claude/skills/olist-ds-specialist/

# 2. Configurar Figma
cp .claude/skills/olist-ds-specialist/figma-config.example.json .claude/figma-config.json
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
2. \`allowedFiles\` tem fileKeys?
3. Skill v2.1 instalada?`);

// Changelog
section('Changelog', `### v2.1 (2026-05-07)
- figma-config.example.json na skill (compartilhável)
- FIGMA_CONFIG.md como 12º arquivo de referência
- Instrução para ler figma-config.json antes do Figma MCP
- sync-skill.mjs v2.1
- generate-wiki.mjs criado

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md (10 papéis de texto)
- SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout)
- Workflow faseado no Figma
- Sistema de ícones centralizado
- sync-skill.mjs para auto-geração
- validate-icon-migration.mjs

### v1.0
- Versão inicial da skill
- 8 arquivos de referência`);

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
