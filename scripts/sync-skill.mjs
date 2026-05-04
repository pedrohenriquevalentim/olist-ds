#!/usr/bin/env node

/**
 * sync-skill.mjs v2.0
 * 
 * Sincroniza a skill corporativa olist-ds-specialist com o estado real do código.
 * 
 * Auto-gera:
 * - COMPONENTES.md (props, tokens, estados de cada componente)
 * - MAPA_FONTES.md (estrutura de pastas do repositório)
 * - VISAO_GERAL.md (atualiza lista de componentes)
 * 
 * Não toca em:
 * - CORES.md, TIPOGRAFIA.md, ESPACAMENTO.md (definidos manualmente)
 * - GLOSSARIO_PAPEIS_TEXTO.md (definido manualmente)
 * - SDD_AVANCADO.md (definido manualmente)
 * - SDD_PARA_TELA.md, PADROES.md, CHECKLIST_REVISAO.md (definidos manualmente)
 * 
 * Uso:
 *   npm run sync:skill
 *   ou
 *   node scripts/sync-skill.mjs
 */

import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, relative, extname } from 'path';

// Configuração
const ROOT_DIR = process.cwd();
const SKILL_DIR = join(ROOT_DIR, '.claude', 'skills', 'olist-ds-specialist-v2');
const REFERENCES_DIR = join(SKILL_DIR, 'references');
const COMPONENTS_DIR = join(ROOT_DIR, 'src', 'components');

// Versão da skill
const SKILL_VERSION = '2.0';
const UPDATE_DATE = new Date().toISOString().split('T')[0];

console.log('🔄 Sincronizando skill corporativa v2.0...\n');

// ============================================================================
// 1. Auto-gerar COMPONENTES.md
// ============================================================================

function extractComponentInfo(componentPath) {
  const indexPath = join(componentPath, 'index.tsx');
  const cssPath = join(componentPath, 'styles.module.css');
  
  let content = '';
  let props = [];
  let variants = [];
  let states = [];
  
  try {
    content = readFileSync(indexPath, 'utf-8');
  } catch {
    return null;
  }
  
  // Extrair nome do componente
  const componentName = componentPath.split('/').pop();
  
  // Extrair props da interface
  const propsMatch = content.match(/interface\s+\w+Props\s*{([^}]+)}/s);
  if (propsMatch) {
    const propsContent = propsMatch[1];
    props = propsContent
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('//') && !line.startsWith('*'))
      .map(line => {
        const match = line.match(/(\w+)(\?)?\s*:\s*([^;]+)/);
        if (match) {
          const [, name, optional, type] = match;
          return {
            name,
            optional: !!optional,
            type: type.trim()
          };
        }
        return null;
      })
      .filter(Boolean);
  }
  
  // Extrair variants (se tiver prop variant)
  const variantProp = props.find(p => p.name === 'variant');
  if (variantProp) {
    const match = variantProp.type.match(/'([^']+)'/g);
    if (match) {
      variants = match.map(v => v.replace(/'/g, ''));
    }
  }
  
  // Extrair estados (disabled, error, loading, etc.)
  const stateProps = props.filter(p => 
    ['disabled', 'error', 'loading', 'active', 'checked', 'selected', 'expanded'].includes(p.name)
  );
  states = stateProps.map(p => p.name);
  
  // Extrair tokens usados (do CSS)
  let tokens = [];
  try {
    const cssContent = readFileSync(cssPath, 'utf-8');
    const tokenMatches = cssContent.match(/var\(--[\w-]+\)/g);
    if (tokenMatches) {
      tokens = [...new Set(tokenMatches.map(t => t.replace(/var\(|\)/g, '')))].sort();
    }
  } catch {
    // Sem CSS Module, tudo bem
  }
  
  return {
    name: componentName,
    props,
    variants,
    states,
    tokens
  };
}

function generateComponentesMd() {
  console.log('📝 Gerando COMPONENTES.md...');
  
  const components = [];
  
  try {
    const dirs = readdirSync(COMPONENTS_DIR, { withFileTypes: true });
    
    for (const dir of dirs) {
      if (!dir.isDirectory()) continue;
      
      const componentPath = join(COMPONENTS_DIR, dir.name);
      const info = extractComponentInfo(componentPath);
      
      if (info) {
        components.push(info);
      }
    }
  } catch (error) {
    console.error('❌ Erro ao ler diretório de componentes:', error.message);
    return;
  }
  
  components.sort((a, b) => a.name.localeCompare(b.name));
  
  // Gerar markdown
  let md = `# Componentes Disponíveis

**Auto-gerado em ${UPDATE_DATE}** — Não edite manualmente. Este arquivo é gerado por \`npm run sync:skill\`.

Total de componentes: **${components.length}**

---

`;

  for (const comp of components) {
    md += `## ${comp.name}\n\n`;
    md += `**Localização:** \`src/components/${comp.name}/\`\n\n`;
    
    // Props
    if (comp.props.length > 0) {
      md += `### Props\n\n`;
      md += `| Prop | Tipo | Obrigatório | Descrição |\n`;
      md += `|---|---|---|---|\n`;
      
      for (const prop of comp.props) {
        const required = prop.optional ? '❌' : '✅';
        const type = prop.type.replace(/\|/g, '\\|'); // Escape pipes
        md += `| \`${prop.name}\` | \`${type}\` | ${required} | |\n`;
      }
      md += `\n`;
    }
    
    // Variants
    if (comp.variants.length > 0) {
      md += `### Variantes\n\n`;
      for (const variant of comp.variants) {
        md += `- \`${variant}\`\n`;
      }
      md += `\n`;
    }
    
    // Estados
    if (comp.states.length > 0) {
      md += `### Estados\n\n`;
      for (const state of comp.states) {
        md += `- \`${state}\`\n`;
      }
      md += `\n`;
    }
    
    // Tokens
    if (comp.tokens.length > 0) {
      md += `### Tokens Usados\n\n`;
      md += '```css\n';
      for (const token of comp.tokens) {
        md += `${token}\n`;
      }
      md += '```\n\n';
    }
    
    // Exemplo de uso
    md += `### Exemplo\n\n`;
    md += '```tsx\n';
    md += `import { ${comp.name} } from '@pedrohenriquevalentim/olist-ds';\n\n`;
    
    if (comp.variants.length > 0) {
      md += `<${comp.name} variant="${comp.variants[0]}">\n`;
    } else {
      md += `<${comp.name}>\n`;
    }
    
    if (comp.name === 'Button') {
      md += `  Click me\n`;
    } else if (comp.name === 'Checkbox' || comp.name === 'RadioButton') {
      md += `  Label text\n`;
    }
    
    md += `</${comp.name}>\n`;
    md += '```\n\n';
    
    md += `---\n\n`;
  }
  
  // Footer
  md += `## Convenções\n\n`;
  md += `- **Props obrigatórias** marcadas com ✅\n`;
  md += `- **Props opcionais** marcadas com ❌\n`;
  md += `- **Variants** definem aparência visual (primary, secondary, etc.)\n`;
  md += `- **Estados** definem comportamento interativo (disabled, error, etc.)\n`;
  md += `- **Tokens** são CSS variables do design system\n\n`;
  md += `---\n\n`;
  md += `**Referência cruzada:**\n`;
  md += `- \`CORES.md\` — tokens de cor\n`;
  md += `- \`TIPOGRAFIA.md\` — tokens de tipografia\n`;
  md += `- \`ESPACAMENTO.md\` — tokens de espaçamento\n`;
  md += `- \`PADROES.md\` — como combinar componentes em páginas\n`;
  
  try {
    writeFileSync(join(REFERENCES_DIR, 'COMPONENTES.md'), md, 'utf-8');
    console.log(`✅ COMPONENTES.md atualizado (${components.length} componentes)\n`);
  } catch (error) {
    console.error('❌ Erro ao escrever COMPONENTES.md:', error.message);
  }
}

// ============================================================================
// 2. Auto-gerar MAPA_FONTES.md
// ============================================================================

function buildFileTree(dir, prefix = '', relativePath = '') {
  let tree = '';
  
  const entries = readdirSync(dir, { withFileTypes: true });
  const filtered = entries.filter(entry => {
    const name = entry.name;
    // Ignorar
    if (name.startsWith('.')) return false;
    if (name === 'node_modules') return false;
    if (name === 'dist') return false;
    if (name === 'coverage') return false;
    if (name === 'storybook-static') return false;
    return true;
  });
  
  filtered.sort((a, b) => {
    // Pastas primeiro
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });
  
  filtered.forEach((entry, index) => {
    const isLast = index === filtered.length - 1;
    const connector = isLast ? '└──' : '├──';
    const name = entry.name;
    const newRelativePath = relativePath ? `${relativePath}/${name}` : name;
    
    if (entry.isDirectory()) {
      tree += `${prefix}${connector} ${name}/\n`;
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      tree += buildFileTree(join(dir, name), newPrefix, newRelativePath);
    } else {
      tree += `${prefix}${connector} ${name}\n`;
    }
  });
  
  return tree;
}

function generateMapaFontesMd() {
  console.log('📝 Gerando MAPA_FONTES.md...');
  
  let md = `# Mapa de Fontes — Estrutura do Repositório

**Auto-gerado em ${UPDATE_DATE}** — Não edite manualmente. Este arquivo é gerado por \`npm run sync:skill\`.

Este arquivo documenta a estrutura de pastas do projeto \`olist-ds\` para facilitar navegação no código.

---

## Estrutura Principal

\`\`\`
olist-ds/
${buildFileTree(ROOT_DIR)}
\`\`\`

---

## Pastas Importantes

### \`src/\`
Código-fonte principal do design system.

- **\`components/\`** — Componentes React (Button, Checkbox, etc.)
  - Cada componente tem sua pasta com: \`index.tsx\`, \`styles.module.css\`, \`*.test.tsx\`, \`*.stories.tsx\`
- **\`tokens/\`** — Tokens de design (cores, tipografia, espaçamento)
  - \`base.json\` — Export do Tokens Studio (formato DTCG)
- **\`generated/\`** — Arquivos auto-gerados pelo Style Dictionary
  - \`variables.css\` — CSS Variables
  - \`tokens.js\` — Tokens JS para uso programático
- **\`docs/\`** — Documentação do Storybook (Foundations)
- **\`index.ts\`** — Barrel export de todos os componentes

### \`scripts/\`
Scripts de automação.

- \`generate-tests.mjs\` — Gera testes via Gemini Pro 2.5
- \`generate-stories.mjs\` — Gera stories via Gemini Pro 2.5
- \`generate-index.mjs\` — Auto-gera \`src/index.ts\` e \`src/catalog.ts\`
- \`copy-css.mjs\` — Copia CSS para dist (Next.js)
- \`sync-skill.mjs\` — **Este script** — Sincroniza skill corporativa

### \`.claude/skills/olist-ds-specialist/\`
Skill corporativa PT-BR para Claude Code e Claude.ai.

- \`SKILL.md\` — Papel, escopo, fluxo de decisão
- \`DESIGN.md\` — Especificação Google Labs (cross-tool)
- \`references/\` — 11 arquivos de referência (VISAO_GERAL.md, CORES.md, etc.)

### \`.storybook/\`
Configuração do Storybook.

- \`main.ts\` — Config principal (addons, stories)
- \`preview.ts\` — Config de preview (decorators, globals)
- \`preview-head.html\` — Carregamento de fonte (Plus Jakarta Sans)
- \`manager.ts\` — Customização do tema

---

## Arquivos de Configuração

| Arquivo | Propósito |
|---|---|
| \`package.json\` | Dependências, scripts, metadados do pacote |
| \`tsconfig.json\` | Configuração TypeScript |
| \`vite.config.ts\` | Configuração Vite (build) |
| \`vitest.config.ts\` | Configuração Vitest (testes) |
| \`config.mjs\` | Configuração Style Dictionary (tokens → CSS) |
| \`.npmrc\` | Configuração NPM (registry GitHub Packages) |
| \`playwright.config.ts\` | Configuração Playwright (E2E tests) |

---

## Fluxo de Build

1. **Tokens:** \`src/tokens/base.json\` → Style Dictionary → \`src/generated/variables.css\`
2. **Componentes:** \`src/components/*\` → TypeScript → \`dist/*.js\`
3. **Skill:** \`npm run sync:skill\` → atualiza \`COMPONENTES.md\`, \`MAPA_FONTES.md\`
4. **Stories:** \`scripts/generate-stories.mjs\` → \`*.stories.tsx\` via Gemini
5. **Testes:** \`scripts/generate-tests.mjs\` → \`*.test.tsx\` via Gemini
6. **Publish:** \`npm run release\` → version bump → publish → git tags

---

**Referência cruzada:**
- \`COMPONENTES.md\` — lista de componentes com props
- \`VISAO_GERAL.md\` — mapa de navegação da skill
`;

  try {
    writeFileSync(join(REFERENCES_DIR, 'MAPA_FONTES.md'), md, 'utf-8');
    console.log(`✅ MAPA_FONTES.md atualizado\n`);
  } catch (error) {
    console.error('❌ Erro ao escrever MAPA_FONTES.md:', error.message);
  }
}

// ============================================================================
// 3. Atualizar VISAO_GERAL.md (apenas lista de componentes)
// ============================================================================

function updateVisaoGeralMd() {
  console.log('📝 Atualizando VISAO_GERAL.md...');
  
  const visaoGeralPath = join(REFERENCES_DIR, 'VISAO_GERAL.md');
  let content = '';
  
  try {
    content = readFileSync(visaoGeralPath, 'utf-8');
  } catch (error) {
    console.error('❌ Erro ao ler VISAO_GERAL.md:', error.message);
    return;
  }
  
  // Extrair lista de componentes do diretório
  const components = [];
  try {
    const dirs = readdirSync(COMPONENTS_DIR, { withFileTypes: true });
    for (const dir of dirs) {
      if (dir.isDirectory()) {
        components.push(dir.name);
      }
    }
  } catch (error) {
    console.error('❌ Erro ao ler componentes:', error.message);
    return;
  }
  
  components.sort();
  
  // Substituir seção de componentes existentes
  const componentsList = components.join(', ');
  const regex = /Antes de criar QUALQUER elemento novo, verifique se um destes já existe:[\s\S]*?Para API completa/;
  const replacement = `Antes de criar QUALQUER elemento novo, verifique se um destes já existe:

- ${componentsList}

Para API completa`;
  
  content = content.replace(regex, replacement);
  
  // Atualizar data de atualização
  content = content.replace(
    /\*\*Última atualização:\*\* \d{4}-\d{2}-\d{2}/,
    `**Última atualização:** ${UPDATE_DATE}`
  );
  
  try {
    writeFileSync(visaoGeralPath, content, 'utf-8');
    console.log(`✅ VISAO_GERAL.md atualizado (${components.length} componentes)\n`);
  } catch (error) {
    console.error('❌ Erro ao escrever VISAO_GERAL.md:', error.message);
  }
}

// ============================================================================
// Main
// ============================================================================

function main() {
  // Verificar se skill existe
  try {
    statSync(SKILL_DIR);
  } catch {
    console.error(`❌ Skill não encontrada em: ${SKILL_DIR}`);
    console.log('💡 Execute primeiro: mkdir -p .claude/skills/olist-ds-specialist-v2\n');
    process.exit(1);
  }
  
  // Gerar arquivos
  generateComponentesMd();
  generateMapaFontesMd();
  updateVisaoGeralMd();
  
  console.log('✅ Skill sincronizada com sucesso!');
  console.log(`📦 Skill v${SKILL_VERSION} — ${UPDATE_DATE}\n`);
  console.log('📝 Arquivos atualizados:');
  console.log('   - COMPONENTES.md');
  console.log('   - MAPA_FONTES.md');
  console.log('   - VISAO_GERAL.md (lista de componentes)');
  console.log('\n💡 Arquivos manuais NÃO tocados:');
  console.log('   - CORES.md, TIPOGRAFIA.md, ESPACAMENTO.md');
  console.log('   - GLOSSARIO_PAPEIS_TEXTO.md (v2.0)');
  console.log('   - SDD_AVANCADO.md (v2.0)');
  console.log('   - SDD_PARA_TELA.md, PADROES.md, CHECKLIST_REVISAO.md');
}

main();
