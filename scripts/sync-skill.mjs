#!/usr/bin/env node

/**
 * sync-skill.mjs v2.1
 * 
 * Sincroniza a skill corporativa olist-ds-specialist-v2 com o estado real do código.
 * 
 * Auto-gera:
 * - COMPONENTES.md (props, tokens, estados de cada componente)
 * - MAPA_FONTES.md (estrutura de pastas do repositório)
 * - VISAO_GERAL.md (atualiza lista de componentes)
 * 
 * Não toca em:
 * - CORES.md, TIPOGRAFIA.md, ESPACAMENTO.md (definidos manualmente)
 * - GLOSSARIO_PAPEIS_TEXTO.md (definido manualmente)
 * - FIGMA_CONFIG.md (definido manualmente) ← NOVO v2.1
 * - SDD_AVANCADO.md (definido manualmente)
 * - SDD_PARA_TELA.md, PADROES.md, CHECKLIST_REVISAO.md (definidos manualmente)
 * 
 * Changelog v2.1:
 * - Adicionado FIGMA_CONFIG.md à lista de arquivos de referência
 * - Atualizado contador: 11 → 12 arquivos total
 * 
 * Uso:
 *   npm run sync:skill
 *   ou
 *   node scripts/sync-skill.mjs
 */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'fs';
import { join, relative, extname } from 'path';

// Configuração
const ROOT_DIR = process.cwd();
const SKILL_DIR = join(ROOT_DIR, '.claude', 'skills', 'olist-ds-specialist-v2');
const REFERENCES_DIR = join(SKILL_DIR, 'references');
const COMPONENTS_DIR = join(ROOT_DIR, 'src', 'components');

// Versão da skill
const SKILL_VERSION = '2.1';  // ← atualizado
const UPDATE_DATE = new Date().toISOString().split('T')[0];

console.log('🔄 Sincronizando skill corporativa v2.1...\n');

// ============================================================================
// 1. Auto-gerar COMPONENTES.md
// ============================================================================

function extractComponentInfo(componentPath) {
  const indexPath = join(componentPath, 'index.tsx');
  const cssPath = join(componentPath, 'styles.module.css');
  
  let content = '';
  let props = [];
  let variants = [];
  
  if (existsSync(indexPath)) {
    content = readFileSync(indexPath, 'utf-8');
    
    // Extrair props da interface
    const propsMatch = content.match(/export interface \w+Props {([^}]+)}/s);
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
  
  return { props, variants };
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
      return statSync(path).isDirectory() && existsSync(join(path, 'index.tsx'));
    })
    .sort();
  
  let markdown = `# Componentes — API Completa

**Auto-gerado por \`npm run build\`**  
**Última atualização:** ${UPDATE_DATE}  
**Versão da skill:** ${SKILL_VERSION}

---

Este arquivo contém a API completa de todos os componentes do design system.

## Componentes Disponíveis (${components.length})

`;

  for (const componentName of components) {
    const componentPath = join(COMPONENTS_DIR, componentName);
    const { props, variants } = extractComponentInfo(componentPath);
    
    markdown += `### ${componentName}\n\n`;
    
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
      markdown += `│   ${isLast ? '    ' : '│   '}    ├── index.tsx\n`;
      markdown += `│   ${isLast ? '    ' : '│   '}    ├── styles.module.css\n`;
      markdown += `│   ${isLast ? '    ' : '│   '}    └── ${components[i]}.stories.tsx\n`;
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
      markdown += `- **${componentName}:** \`src/components/${componentName}/index.tsx\`\n`;
    }
  }
  
  writeFileSync(join(REFERENCES_DIR, 'MAPA_FONTES.md'), markdown, 'utf-8');
  console.log('✅ MAPA_FONTES.md gerado\n');
}

// ============================================================================
// 3. Atualizar VISAO_GERAL.md (apenas seção de componentes)
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
    
    const componentsList = components.join(', ');
    
    // Substituir linha de componentes existentes
    content = content.replace(
      /- Button, Checkbox.*$/m,
      `- ${componentsList}`
    );
  }
  
  // Atualizar contador de arquivos (11 → 12)
  content = content.replace(
    /## Arquivos de Referência \(11 total\)/,
    '## Arquivos de Referência (12 total)'
  );
  
  // Garantir que FIGMA_CONFIG.md está na tabela
  if (!content.includes('FIGMA_CONFIG.md')) {
    // Adicionar FIGMA_CONFIG.md depois de VISAO_GERAL.md
    content = content.replace(
      /\| \*\*VISAO_GERAL\.md\*\* \| Este arquivo — mapa de navegação \| Sempre primeiro \|/,
      `| **VISAO_GERAL.md** | Este arquivo — mapa de navegação | Sempre primeiro |
| **FIGMA_CONFIG.md** | Arquivos do Figma que são fonte da verdade | **ANTES** de usar \`search_design_system\` |`
    );
  }
  
  writeFileSync(visaoGeralPath, content, 'utf-8');
  console.log('✅ VISAO_GERAL.md atualizado\n');
}

// ============================================================================
// Executar tudo
// ============================================================================

try {
  generateComponentsMarkdown();
  generateMapaFontesMarkdown();
  updateVisaoGeralMarkdown();
  
  console.log('✅ Sincronização concluída!\n');
  console.log('Arquivos gerados:');
  console.log('  - .claude/skills/olist-ds-specialist-v2/references/COMPONENTES.md');
  console.log('  - .claude/skills/olist-ds-specialist-v2/references/MAPA_FONTES.md');
  console.log('  - .claude/skills/olist-ds-specialist-v2/references/VISAO_GERAL.md (atualizado)');
  console.log('');
} catch (error) {
  console.error('❌ Erro:', error.message);
  process.exit(1);
}
