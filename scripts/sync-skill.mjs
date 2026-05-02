// scripts/sync-skill.mjs
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const COMPONENTS_DIR = './src/components';
const SKILL_DIR = './.claude/skills/olist-ds-skill';
const VARIABLES_PATH = './src/generated/variables.css';

// ─── 1. Atualiza COMPONENTES.md ───────────────────────────

function syncComponents() {
  const dirs = readdirSync(COMPONENTS_DIR)
    .filter(name => {
      const fullPath = join(COMPONENTS_DIR, name);
      if (!statSync(fullPath).isDirectory()) return false;
      return existsSync(join(fullPath, `${name}.tsx`));
    });

  const components = dirs.map(name => {
    const tsxPath = join(COMPONENTS_DIR, name, `${name}.tsx`);
    const cssPath = join(COMPONENTS_DIR, name, `${name}.module.css`);
    const source = readFileSync(tsxPath, 'utf-8');

    // Extrai interface de props
    const propsMatch = source.match(/interface\s+(\w+Props)\s*\{([^}]+)\}/s);
    const propsBlock = propsMatch ? propsMatch[0] : 'Props não encontradas';

    // Extrai variantes de props (ex: 'primary' | 'secondary')
    const variants = [];
    const variantMatches = source.matchAll(/'([^']+)'/g);
    for (const m of variantMatches) {
      if (!variants.includes(m[1]) && m[1].length < 30) {
        variants.push(m[1]);
      }
    }

    // Verifica quais arquivos existem
    const hasTest = existsSync(join(COMPONENTS_DIR, name, `${name}.test.tsx`));
    const hasStory = existsSync(join(COMPONENTS_DIR, name, `${name}.stories.tsx`));
    const hasCss = existsSync(cssPath);

    // Extrai tokens CSS usados
    let tokensUsed = [];
    if (hasCss) {
      const css = readFileSync(cssPath, 'utf-8');
      const tokenMatches = css.matchAll(/var\(--([^)]+)\)/g);
      for (const m of tokenMatches) {
        if (!tokensUsed.includes(m[1])) {
          tokensUsed.push(m[1]);
        }
      }
    }

    return { name, propsBlock, variants, hasTest, hasStory, hasCss, tokensUsed };
  });

  // Gera o markdown
  let md = `# Componentes\n\n`;
  md += `## Componentes Disponíveis (${components.length})\n\n`;
  md += `> Auto-gerado por sync-skill.mjs — NÃO edite manualmente.\n`;
  md += `> Última atualização: ${new Date().toISOString().split('T')[0]}\n\n`;

  for (const comp of components) {
    md += `### ${comp.name}\n\n`;
    md += `**Import:** \`import { ${comp.name} } from '@pedrohenriquevalentim/olist-ds';\`\n\n`;
    md += `**Arquivos:** `;
    md += `tsx ✅ `;
    md += comp.hasCss ? `css ✅ ` : `css ❌ `;
    md += comp.hasTest ? `test ✅ ` : `test ❌ `;
    md += comp.hasStory ? `story ✅` : `story ❌`;
    md += `\n\n`;

    md += `**Props:**\n\`\`\`tsx\n${comp.propsBlock}\n\`\`\`\n\n`;

    if (comp.tokensUsed.length > 0) {
      md += `**Tokens utilizados:** `;
      md += comp.tokensUsed.slice(0, 15).map(t => `\`--${t}\``).join(', ');
      if (comp.tokensUsed.length > 15) md += ` (+${comp.tokensUsed.length - 15} mais)`;
      md += `\n\n`;
    }

    md += `---\n\n`;
  }

  // Seção de regras de criação
  md += `## Regras de Criação de Componentes\n\n`;
  md += `Ao construir um novo componente:\n\n`;
  md += `1. Criar em \`src/components/NomeComponente/\` com todos os arquivos (tsx, css, test, stories, index)\n`;
  md += `2. Usar APENAS tokens de \`src/generated/variables.css\`\n`;
  md += `3. Export nomeado (não default)\n`;
  md += `4. Props tipadas com \`interface\`\n`;
  md += `5. Incluir todos os estados: padrão, hover, foco, ativo, desabilitado\n`;
  md += `6. Adicionar atributos ARIA para acessibilidade\n`;
  md += `7. Usar CSS Modules (\`.module.css\`)\n`;
  md += `8. Após criação, rodar \`npm run build\` para atualizar esta skill automaticamente\n`;

  writeFileSync(join(SKILL_DIR, 'references', 'COMPONENTES.md'), md);
  console.log(`  ✅ COMPONENTES.md — ${components.length} componentes`);

  return components;
}

// ─── 2. Atualiza MAPA_FONTES.md ──────────────────────────

function syncSourceMap(components) {
  let md = `# Mapa de Fontes (Source Map)\n\n`;
  md += `> Auto-gerado por sync-skill.mjs — NÃO edite manualmente.\n`;
  md += `> Última atualização: ${new Date().toISOString().split('T')[0]}\n\n`;

  md += `## Fontes de Tokens\n\n`;
  md += `| O quê | Caminho do arquivo |\n|---|---|\n`;
  md += `| Tokens brutos do Figma | \`src/tokens/base.json\` |\n`;
  md += `| Variáveis CSS | \`src/generated/variables.css\` |\n`;
  md += `| Valores em JS | \`src/generated/tokens.js\` |\n`;
  md += `| Configuração Style Dictionary | \`config.mjs\` |\n\n`;

  md += `## Arquivos dos Componentes\n\n`;
  md += `| Componente | Código | Estilos | Testes | Stories |\n`;
  md += `|---|---|---|---|---|\n`;

  for (const comp of components) {
    const base = `src/components/${comp.name}`;
    md += `| ${comp.name} `;
    md += `| \`${base}/${comp.name}.tsx\` `;
    md += comp.hasCss ? `| \`${comp.name}.module.css\` ` : `| ❌ `;
    md += comp.hasTest ? `| \`${comp.name}.test.tsx\` ` : `| ❌ `;
    md += comp.hasStory ? `| \`${comp.name}.stories.tsx\` ` : `| ❌ `;
    md += `|\n`;
  }

  md += `\n## Arquivos Auto-gerados\n\n`;
  md += `| Arquivo | Gerado por |\n|---|---|\n`;
  md += `| \`src/index.ts\` | \`scripts/generate-index.mjs\` |\n`;
  md += `| \`src/catalog.ts\` | \`scripts/generate-index.mjs\` |\n`;
  md += `| \`src/generated/variables.css\` | \`config.mjs\` |\n`;
  md += `| \`src/generated/tokens.js\` | \`config.mjs\` |\n`;
  md += `| \`.claude/skills/.../COMPONENTES.md\` | \`scripts/sync-skill.mjs\` |\n`;
  md += `| \`.claude/skills/.../MAPA_FONTES.md\` | \`scripts/sync-skill.mjs\` |\n`;

  md += `\n## Arquivos de Configuração\n\n`;
  md += `| Arquivo | Propósito |\n|---|---|\n`;
  md += `| \`config.mjs\` | Style Dictionary + transforms customizados |\n`;
  md += `| \`tsconfig.json\` | TypeScript (rootDir: ./src, outDir: ./dist) |\n`;
  md += `| \`vite.config.ts\` | Vite + Vitest |\n`;
  md += `| \`package.json\` | Scripts, dependências, config NPM |\n`;
  md += `| \`CLAUDE.md\` | Instruções para o Claude Code |\n`;
  md += `| \`DESIGN.md\` | Especificação Google Labs |\n`;

  md += `\n## Scripts de Automação\n\n`;
  md += `| Script | Comando | O que faz |\n|---|---|---|\n`;
  md += `| \`generate-tests.mjs\` | \`npm run generate:tests\` | Gemini → .test.tsx |\n`;
  md += `| \`generate-stories.mjs\` | \`npm run generate:stories\` | Gemini → .stories.tsx |\n`;
  md += `| \`generate-index.mjs\` | durante \`npm run build\` | Gera index.ts + catalog.ts |\n`;
  md += `| \`copy-css.mjs\` | durante \`npm run build\` | Copia .module.css para dist/ |\n`;
  md += `| \`sync-skill.mjs\` | durante \`npm run build\` | Atualiza esta skill |\n`;

  md += `\n## Como encontrar evidência para uma decisão de design\n\n`;
  md += `1. Verificar se um componente já trata o caso → \`src/components/\`\n`;
  md += `2. Verificar se o token existe → \`src/generated/variables.css\`\n`;
  md += `3. Verificar se existe padrão → olhar CSS dos componentes existentes\n`;
  md += `4. Se não existe evidência → criar seguindo COMPONENTES.md\n`;

  writeFileSync(join(SKILL_DIR, 'references', 'MAPA_FONTES.md'), md);
  console.log(`  ✅ MAPA_FONTES.md — ${components.length} componentes mapeados`);
}

// ─── 3. Atualiza VISAO_GERAL.md (lista de componentes) ───

function syncOverview(components) {
  const overviewPath = join(SKILL_DIR, 'references', 'VISAO_GERAL.md');
  let md = readFileSync(overviewPath, 'utf-8');

  const componentList = components.map(c => `- **${c.name}**`).join('\n');
  const marker = '### Componentes Existentes';
  const markerEnd = 'Para API completa';

  const startIdx = md.indexOf(marker);
  const endIdx = md.indexOf(markerEnd);

  if (startIdx !== -1 && endIdx !== -1) {
    const before = md.substring(0, startIdx);
    const after = md.substring(endIdx);

    md = before;
    md += `### Componentes Existentes\n\n`;
    md += `Antes de criar QUALQUER elemento novo, verifique se um destes já existe (${components.length} total):\n\n`;
    md += componentList + '\n\n';
    md += after;

    writeFileSync(overviewPath, md);
    console.log(`  ✅ VISAO_GERAL.md — lista de componentes atualizada`);
  } else {
    console.log(`  ⚠️ VISAO_GERAL.md — marcadores não encontrados, pulando atualização`);
  }
}

// ─── 4. Verifica pacote da skill ──────────────────────────

function verifyPackage() {
  const files = [];
  function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
      } else {
        files.push(full);
      }
    }
  }
  walk(SKILL_DIR);
  console.log(`  ✅ Pacote da skill verificado (${files.length} arquivos)`);
}

// ─── EXECUÇÃO ─────────────────────────────────────────────

console.log('\n🔄 Sincronizando skill com o design system...\n');

const components = syncComponents();
syncSourceMap(components);
syncOverview(components);
verifyPackage();

console.log(`\n✅ Skill sincronizada! ${components.length} componentes documentados.`);
console.log(`   Para atualizar no Claude.ai, faça upload de .claude/skills/olist-ds-skill/\n`);
