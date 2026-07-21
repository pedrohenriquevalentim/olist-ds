#!/usr/bin/env node

/**
 * sync-skill.mjs
 *
 * Sincroniza a skill corporativa olist-ds-specialist com o estado real do código.
 *
 * Auto-gera:
 * - COMPONENTES.md (props, tokens, estados de cada componente)
 * - MAPA_FONTES.md (estrutura de pastas do repositório)
 * - VISAO_GERAL.md (atualiza lista de componentes)
 *
 * Sincroniza em CLAUDE.md:
 * - Lista de libraries por prioridade (lida do figma-config.json)
 *
 * Não toca em:
 * - CORES.md, TIPOGRAFIA.md, ESPACAMENTO.md (definidos manualmente)
 * - GLOSSARIO_PAPEIS_TEXTO.md, FIGMA_CONFIG.md, SDD_AVANCADO.md (manuais)
 * - SDD_PARA_TELA.md, PADROES.md, CHECKLIST_REVISAO.md, TEMPLATES_PRODUTO.md (manuais)
 *
 * Uso:
 *   npm run sync:skill
 *   ou
 *   node scripts/sync-skill.mjs
 */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'fs';
import { join } from 'path';

// Configuração
const ROOT_DIR = process.cwd();

// Descobre a pasta da skill dinamicamente (prefixo olist-ds-specialist)
function resolveSkillDir() {
  const base = join(ROOT_DIR, '.claude', 'skills');
  if (!existsSync(base)) return null;
  const entries = readdirSync(base).filter(
    name => name.startsWith('olist-ds-specialist') && statSync(join(base, name)).isDirectory()
  );
  const withSkillMd = entries.find(name => existsSync(join(base, name, 'SKILL.md')));
  return withSkillMd ? join(base, withSkillMd) : (entries[0] ? join(base, entries[0]) : null);
}

const SKILL_DIR = resolveSkillDir() ?? join(ROOT_DIR, '.claude', 'skills', 'olist-ds-specialist');
const REFERENCES_DIR = join(SKILL_DIR, 'references');
const COMPONENTS_DIR = join(ROOT_DIR, 'src', 'components');
const FIGMA_CONFIG_PATH = join(SKILL_DIR, 'figma-config.json');
const CLAUDE_MD_PATH = join(ROOT_DIR, 'CLAUDE.md');

// Versão da skill — lida dinamicamente do SKILL.md
function readSkillVersion() {
  const skillMdPath = join(SKILL_DIR, 'SKILL.md');
  if (!existsSync(skillMdPath)) return '?';
  const content = readFileSync(skillMdPath, 'utf-8');
  const match = content.match(/^version:\s*([\d.]+)/m);
  return match ? match[1] : '?';
}

const SKILL_VERSION = readSkillVersion();
const UPDATE_DATE = new Date().toISOString().split('T')[0];

// Versão do pacote npm — lida do package.json
function readPackageVersion() {
  const pkgPath = join(ROOT_DIR, 'package.json');
  if (!existsSync(pkgPath)) return '?';
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    return pkg.version ?? '?';
  } catch {
    return '?';
  }
}

const PACKAGE_VERSION = readPackageVersion();

console.log(`🔄 Sincronizando skill corporativa v${SKILL_VERSION}...\n`);

// ============================================================================
// 1. Auto-gerar COMPONENTES.md
// ============================================================================

function extractComponentInfo(componentPath) {
  const componentName = componentPath.split('/').pop();
  // Suporta tanto index.tsx (componente inline) quanto NomeComponente.tsx (padrão atual)
  const indexPath = join(componentPath, 'index.tsx');
  const namedPath = join(componentPath, `${componentName}.tsx`);
  const sourcePath = existsSync(indexPath) ? indexPath : existsSync(namedPath) ? namedPath : null;
  // Suporta tanto styles.module.css quanto NomeComponente.module.css
  const cssPath = existsSync(join(componentPath, 'styles.module.css'))
    ? join(componentPath, 'styles.module.css')
    : join(componentPath, `${componentName}.module.css`);

  let content = '';
  let props = [];
  let variants = [];

  if (sourcePath) {
    content = readFileSync(sourcePath, 'utf-8');

    // Extrair props da interface (suporta "extends ...")
    const propsMatch = content.match(/export interface \w+Props(?:[^{]*)?\{([^}]+)\}/s);
    if (propsMatch) {
      const propsContent = propsMatch[1];
      const propLines = propsContent
        .split('\n')
        .filter(line => line.trim() && !line.trim().startsWith('//'))
        .map(line => line.trim());
      props = propLines;
    }

    // Extrair variantes de types
    const variantMatches = content.matchAll(/type \w+ = ["']([^"']+)["'](?: \| ["']([^"']+)["'])*/g);
    for (const match of variantMatches) {
      variants.push(match[0]);
    }
  }

  // Metadados de intenção (purpose/useWhen/doNotUseWhen/pairsWith/note), gerados e
  // aprovados pelo usuário no Caso 7 antes do código existir. Opcional: componentes
  // antigos, criados antes desta convenção, ainda não têm o arquivo.
  const metadataPath = join(componentPath, `${componentName}.metadata.json`);
  let metadata = null;
  if (existsSync(metadataPath)) {
    try {
      metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
    } catch {
      console.warn(`⚠️  ${componentName}.metadata.json inválido — ignorando.`);
    }
  }

  return { props, variants, metadata };
}

function generateComponentsMarkdown() {
  console.log('📝 Gerando COMPONENTES.md...');
  
  if (!existsSync(COMPONENTS_DIR)) {
    console.log('⚠️  Diretório src/components não encontrado. Pulando...');
    return;
  }
  
  const components = readdirSync(COMPONENTS_DIR)
    .filter(name => {
      const path = join(COMPONENTS_DIR, name);
      return (
        statSync(path).isDirectory() &&
        (existsSync(join(path, 'index.tsx')) || existsSync(join(path, `${name}.tsx`)))
      );
    })
    .sort();
  
  let markdown = `# Componentes — API Completa

**Auto-gerado por \`npm run build\`**
**Última atualização:** ${UPDATE_DATE}
**Versão do pacote:** ${PACKAGE_VERSION}
**Versão da skill:** ${SKILL_VERSION}

---

Este arquivo contém a API completa de todos os componentes do design system.

## Componentes Disponíveis (${components.length})

`;

  for (const componentName of components) {
    const componentPath = join(COMPONENTS_DIR, componentName);
    const { props, variants, metadata } = extractComponentInfo(componentPath);

    markdown += `### ${componentName}\n\n`;

    if (metadata?.purpose) {
      markdown += `${metadata.purpose}\n\n`;
    }

    if (metadata?.useWhen?.length > 0) {
      markdown += `**Quando usar:**\n`;
      markdown += metadata.useWhen.map(item => `- ${item}`).join('\n');
      markdown += `\n\n`;
    }

    if (metadata?.doNotUseWhen?.length > 0) {
      markdown += `**Quando NÃO usar:**\n`;
      markdown += metadata.doNotUseWhen.map(item => `- ${item}`).join('\n');
      markdown += `\n\n`;
    }

    if (metadata?.pairsWith?.length > 0) {
      markdown += `**Combina com:** ${metadata.pairsWith.join(', ')}\n\n`;
    }

    if (metadata?.note) {
      markdown += `> **Nota:** ${metadata.note}\n\n`;
    }

    if (props.length > 0) {
      markdown += `**Props:**\n\`\`\`typescript\n`;
      markdown += props.join('\n');
      markdown += `\n\`\`\`\n\n`;
    }
    
    if (variants.length > 0) {
      markdown += `**Variantes:**\n\`\`\`typescript\n`;
      markdown += variants.join('\n');
      markdown += `\n\`\`\`\n\n`;
    }
    
    markdown += `**Caminho:** \`src/components/${componentName}/\`\n\n`;
    markdown += `---\n\n`;
  }
  
  writeFileSync(join(REFERENCES_DIR, 'COMPONENTES.md'), markdown, 'utf-8');
  console.log(`✅ COMPONENTES.md gerado (${components.length} componentes)\n`);
}

// ============================================================================
// 2. Auto-gerar MAPA_FONTES.md
// ============================================================================

function generateMapaFontesMarkdown() {
  console.log('📝 Gerando MAPA_FONTES.md...');
  
  let markdown = `# Mapa de Fontes — Estrutura do Repositório

**Auto-gerado por \`npm run build\`**  
**Última atualização:** ${UPDATE_DATE}  
**Versão da skill:** ${SKILL_VERSION}

---

## Estrutura de Pastas

\`\`\`
src/
├── components/
`;

  if (existsSync(COMPONENTS_DIR)) {
    const components = readdirSync(COMPONENTS_DIR)
      .filter(name => statSync(join(COMPONENTS_DIR, name)).isDirectory())
      .sort();
    
    for (let i = 0; i < components.length; i++) {
      const isLast = i === components.length - 1;
      const prefix = isLast ? '└──' : '├──';
      markdown += `│   ${prefix} ${components[i]}/\n`;
      const indent = `│   ${isLast ? '    ' : '│   '}    `;
      const compDir = join(COMPONENTS_DIR, components[i]);
      const files = readdirSync(compDir)
        .filter(f => !statSync(join(compDir, f)).isDirectory())
        .sort();
      for (let j = 0; j < files.length; j++) {
        const fileLast = j === files.length - 1;
        markdown += `${indent}${fileLast ? '└──' : '├──'} ${files[j]}\n`;
      }
    }
  }

  markdown += `├── assets/
│   └── icons/
└── index.ts
\`\`\`

---

## Componentes por Caminho

`;

  if (existsSync(COMPONENTS_DIR)) {
    const components = readdirSync(COMPONENTS_DIR)
      .filter(name => statSync(join(COMPONENTS_DIR, name)).isDirectory())
      .sort();

    for (const componentName of components) {
      const compDir = join(COMPONENTS_DIR, componentName);
      const mainFile = readdirSync(compDir).find(f => f === `${componentName}.tsx`) ?? 'index.tsx';
      markdown += `- **${componentName}:** \`src/components/${componentName}/${mainFile}\`\n`;
    }
  }
  
  writeFileSync(join(REFERENCES_DIR, 'MAPA_FONTES.md'), markdown, 'utf-8');
  console.log('✅ MAPA_FONTES.md gerado\n');
}

// ============================================================================
// 3. Atualizar VISAO_GERAL.md (apenas lista de componentes e data)
// ============================================================================

function updateVisaoGeralMarkdown() {
  console.log('📝 Atualizando VISAO_GERAL.md...');

  const visaoGeralPath = join(REFERENCES_DIR, 'VISAO_GERAL.md');

  if (!existsSync(visaoGeralPath)) {
    console.log('⚠️  VISAO_GERAL.md não encontrado. Pulando...');
    return;
  }

  let content = readFileSync(visaoGeralPath, 'utf-8');

  // Atualizar lista de componentes
  if (existsSync(COMPONENTS_DIR)) {
    const components = readdirSync(COMPONENTS_DIR)
      .filter(name => statSync(join(COMPONENTS_DIR, name)).isDirectory())
      .sort();

    content = content.replace(
      /^- Button, Checkbox.*$/m,
      `- ${components.join(', ')}`
    );
  }

  writeFileSync(visaoGeralPath, content, 'utf-8');
  console.log('✅ VISAO_GERAL.md atualizado\n');
}

// ============================================================================
// 4. Sincronizar prioridade de libraries no CLAUDE.md
// ============================================================================

function syncClaudeMd() {
  console.log('📝 Sincronizando CLAUDE.md...');

  if (!existsSync(CLAUDE_MD_PATH)) {
    console.log('⚠️  CLAUDE.md não encontrado. Pulando...');
    return;
  }

  if (!existsSync(FIGMA_CONFIG_PATH)) {
    console.log('⚠️  figma-config.json não encontrado. Pulando CLAUDE.md...');
    return;
  }

  let figmaConfig;
  try {
    figmaConfig = JSON.parse(readFileSync(FIGMA_CONFIG_PATH, 'utf-8'));
  } catch {
    console.log('⚠️  Erro ao ler figma-config.json. Pulando CLAUDE.md...');
    return;
  }

  const libraries = figmaConfig?.designSystem?.libraries || [];
  if (libraries.length === 0) {
    console.log('⚠️  Nenhuma library no figma-config.json. Pulando CLAUDE.md...');
    return;
  }
  const blocked = figmaConfig?.designSystem?.blockedLibraries || [];

  // Dois formatos de bloco, dependendo de quantas libraries estão ativas:
  // uma única library ativa (modo atual, desde 2026-07-03) vira uma frase
  // "library de referência"; várias ativas voltam ao formato antigo de
  // "libraries na ordem de prioridade". Os dois regex abaixo cobrem ambos,
  // pra sync nunca ficar mudo silenciosamente quando o modo mudar de novo.
  let newBlock;
  if (libraries.length === 1) {
    const lib = libraries[0];
    const note = lib.claudeMdNote || lib.description || '';
    // Entradas marcadas como duplicata (ex.: arquivo AS-IS já coberto por
    // outra entrada) não entram na frase pro leitor — ver "duplicateOf" em
    // figma-config.json.
    const blockedNames = blocked
      .filter(b => !b.omitFromClaudeMdNote)
      .map(b => b.name)
      .join(', ');
    newBlock =
      `4. Identifique os componentes do design system necessários consultando a library de referência:\n` +
      `   - **${lib.name}** ([link](${lib.url})) — ${note}\n` +
      (blockedNames
        ? `\n   > As demais libraries (${blockedNames}) estão bloqueadas permanentemente em \`blockedLibraries\`. Ver \`figma-config.json\`.`
        : '');
  } else {
    const libraryLines = libraries
      .map(lib => `   - **${lib.name}**${lib.priority === 1 ? ' (master — preferência absoluta)' : ''}`)
      .join('\n');
    newBlock =
      `4. Identifique os componentes do design system necessários consultando as libraries na ordem de prioridade:\n${libraryLines}`;
  }

  let content = readFileSync(CLAUDE_MD_PATH, 'utf-8');

  // Aceita os dois formatos de cabeçalho ao localizar o bloco a substituir,
  // já que o formato atual no arquivo pode não bater com o que vamos gerar
  // (ex.: arquivo ainda no formato plural, config já reduzida a 1 library).
  const pattern = /4\. Identifique os componentes do design system necessários consultando (?:a library de referência|as libraries na ordem de prioridade):[\s\S]*?(?=\n5\.)/;
  if (!pattern.test(content)) {
    console.warn('⚠️  CLAUDE.md sincronizado parcialmente: padrão do passo 4 não encontrado. O arquivo pode ter sido editado manualmente.');
    return;
  }

  content = content.replace(pattern, newBlock);

  writeFileSync(CLAUDE_MD_PATH, content, 'utf-8');
  console.log('✅ CLAUDE.md sincronizado (libraries atualizadas)\n');
}

// ============================================================================
// 5. Atualiza seções auto-geráveis do README.md raiz
// ============================================================================

function syncReadmeMd() {
  const readmePath = join(ROOT_DIR, 'README.md');
  if (!existsSync(readmePath)) {
    console.warn('⚠️  README.md não encontrado. Pulando...');
    return;
  }

  const componentDirs = readdirSync(COMPONENTS_DIR)
    .filter(f => statSync(join(COMPONENTS_DIR, f)).isDirectory())
    .sort();

  let content = readFileSync(readmePath, 'utf-8');
  const original = content;

  // Atualiza contagem de componentes inline na estrutura de pastas
  content = content.replace(
    /<!-- AUTO:component-count -->[\s\S]*?<!-- \/AUTO:component-count -->/,
    `<!-- AUTO:component-count -->${componentDirs.length}<!-- /AUTO:component-count -->`
  );

  // Atualiza lista de componentes
  const componentList = componentDirs.join(', ');
  content = content.replace(
    /<!-- AUTO:component-list-start -->[\s\S]*?<!-- AUTO:component-list-end -->/,
    `<!-- AUTO:component-list-start -->\n${componentList}\n<!-- AUTO:component-list-end -->`
  );

  // Atualiza versão da skill
  content = content.replace(
    /<!-- AUTO:skill-version-start -->[\s\S]*?<!-- AUTO:skill-version-end -->/,
    `<!-- AUTO:skill-version-start -->v${SKILL_VERSION}<!-- AUTO:skill-version-end -->`
  );

  if (content !== original) {
    writeFileSync(readmePath, content, 'utf-8');
    console.log('✅ README.md atualizado (componentes e versão da skill)\n');
  } else {
    console.log('✅ README.md já está atualizado\n');
  }
}

// ============================================================================
// Executar tudo
// ============================================================================

try {
  generateComponentsMarkdown();
  generateMapaFontesMarkdown();
  updateVisaoGeralMarkdown();
  syncClaudeMd();
  syncReadmeMd();

  console.log('✅ Sincronização concluída!\n');
  const skillDirName = SKILL_DIR.split('/').pop();
  console.log('Arquivos gerados:');
  console.log(`  - .claude/skills/${skillDirName}/references/COMPONENTES.md`);
  console.log(`  - .claude/skills/${skillDirName}/references/MAPA_FONTES.md`);
  console.log(`  - .claude/skills/${skillDirName}/references/VISAO_GERAL.md (atualizado)`);
  console.log('  - CLAUDE.md (libraries sincronizadas)');
  console.log('  - README.md (componentes e versão da skill)');
  console.log('');
} catch (error) {
  console.error('❌ Erro:', error.message);
  process.exit(1);
}
