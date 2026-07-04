#!/usr/bin/env node

/**
 * sync-tokens.mjs v1.0
 * 
 * Lê os JSONs da pasta src/tokens/ (exportados do Figma via plugin)
 * e gera os arquivos consumíveis na pasta src/generated/
 * 
 * Entrada:  src/tokens/base.json, src/tokens/theme.json, src/tokens/tokens.json
 * Saída:    src/generated/variables.css, src/generated/tokens.js, src/generated/tokens.json
 * 
 * Uso:
 *   npm run sync:tokens
 */

import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const TOKENS_DIR = join(ROOT, 'src', 'tokens');
const GENERATED_DIR = join(ROOT, 'src', 'generated');
const TODAY = new Date().toISOString().split('T')[0];

console.log('🎨 Gerando tokens...\n');

// ============================================================================
// 1. Ler arquivos fonte
// ============================================================================

function readJSON(path) {
  try { return JSON.parse(readFileSync(path, 'utf-8')); }
  catch { return null; }
}

const baseTokens = readJSON(join(TOKENS_DIR, 'base.json'));
const themeTokens = readJSON(join(TOKENS_DIR, 'theme.json'));
const allTokens = readJSON(join(TOKENS_DIR, 'tokens.json'));

if (!baseTokens && !themeTokens && !allTokens) {
  console.error('❌ Nenhum arquivo encontrado em src/tokens/\n');
  console.log('Para gerar os JSONs, use o plugin "Olist Token Exporter" no Figma:');
  console.log('  1. Abrir Figma → Plugins → Olist Token Exporter');
  console.log('  2. Clicar "Extrair Tokens"');
  console.log('  3. Baixar os 3 arquivos para a pasta src/tokens/');
  console.log('  4. Rodar npm run sync:tokens novamente');
  process.exit(1);
}

// Combinar tudo se tokens.json não existir
const tokens = allTokens || { ...(baseTokens || {}), ...(themeTokens || {}) };

console.log(`📂 src/tokens/ encontrado:`);
if (baseTokens) console.log(`   ✅ base.json`);
if (themeTokens) console.log(`   ✅ theme.json`);
if (allTokens) console.log(`   ✅ tokens.json`);
console.log('');

// ============================================================================
// 2. Achatar tokens (nested → flat)
// ============================================================================

const isSelfAlias = (value, fullKey) =>
  typeof value === 'string' && value === `{${fullKey}}`;

function flattenObject(obj, prefix = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}/${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, fullKey, result);
    } else {
      if (Object.prototype.hasOwnProperty.call(result, fullKey) && result[fullKey] !== value) {
        // Caso benigno: alias que referencia o próprio caminho (ex.: theme
        // token "font/weight/light" → "{font/weight/light}" do primitivo).
        // Resolver para o valor concreto é o que o alias significa — mantê-lo
        // geraria `--x: var(--x)`, que é inválido em CSS.
        if (isSelfAlias(value, fullKey)) {
          console.warn(`⚠️  Alias auto-referente ignorado: "${fullKey}" mantém ${JSON.stringify(result[fullKey])}`);
          continue;
        }
        if (isSelfAlias(result[fullKey], fullKey)) {
          console.warn(`⚠️  Alias auto-referente substituído: "${fullKey}" passa a ${JSON.stringify(value)}`);
          result[fullKey] = value;
          continue;
        }
        throw new Error(
          `Token duplicado: "${fullKey}" já resolvia para ${JSON.stringify(result[fullKey])} e foi sobrescrito por ${JSON.stringify(value)}.\n` +
          `   Isso normalmente indica uma colisão de nomes entre collections do Figma\n` +
          `   (ex.: um alias em "02. theme tokens" com o mesmo nome de um primitivo em "01. base tokens").\n` +
          `   Corrija o nome da variável no Figma antes de reexportar — não sobrescreva este erro.`
        );
      }
      result[fullKey] = value;
    }
  }
  return result;
}

let flatTokens;
try {
  flatTokens = flattenObject(tokens);
} catch (err) {
  console.error(`❌ ${err.message}\n`);
  process.exit(1);
}
const tokenCount = Object.keys(flatTokens).length;

// ============================================================================
// 3. Gerar CSS variables
// ============================================================================

function tokenToCSSVar(tokenPath) {
  return '--' + tokenPath
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

// Categorias cujo valor numérico não representa pixels (peso de fonte é
// unitless; opacidade é percentual) — adicionar unidade quebraria a propriedade CSS.
const UNITLESS_PREFIXES = ['font/weight', 'shape/opacity'];
function isUnitless(tokenPath) {
  const normalized = tokenPath.toLowerCase();
  return UNITLESS_PREFIXES.some((prefix) => normalized.startsWith(prefix));
}

// O Figma exporta valores em px; o design system usa rem (regra do projeto:
// "unidades em rem, nunca px") para respeitar o font-size configurado pelo
// usuário. Base 16px = 1rem.
function pxToRem(value) {
  if (value === 0) return '0';
  return `${value / 16}rem`;
}

function generateCSS(flat) {
  let css = `/* Auto-generated by sync-tokens.mjs — NÃO EDITAR */\n`;
  css += `/* Última atualização: ${TODAY} */\n`;
  css += `/* Fonte: src/tokens/ (exportado do Figma via plugin) */\n\n`;
  css += `:root {\n`;

  for (const [key, value] of Object.entries(flat)) {
    // Pular aliases (referências) — resolver para valor real se possível
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      const refName = value.slice(1, -1);
      const refKey = tokenToCSSVar(refName);
      css += `  ${tokenToCSSVar(key)}: var(${refKey});\n`;
    } else if (typeof value === 'number') {
      const cssValue = isUnitless(key) ? value : pxToRem(value);
      css += `  ${tokenToCSSVar(key)}: ${cssValue};\n`;
    } else {
      css += `  ${tokenToCSSVar(key)}: ${value};\n`;
    }
  }

  css += `}\n`;
  return css;
}

// ============================================================================
// 4. Gerar JS exports
// ============================================================================

function tokenToJSName(tokenPath) {
  return tokenPath
    .split(/[\/\s-]+/)
    .map((part, i) => i === 0
      ? part.toLowerCase()
      : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

function generateJS(flat) {
  let js = `// Auto-generated by sync-tokens.mjs — NÃO EDITAR\n`;
  js += `// Última atualização: ${TODAY}\n`;
  js += `// Fonte: src/tokens/ (exportado do Figma via plugin)\n\n`;

  const entries = [];

  for (const [key, value] of Object.entries(flat)) {
    const name = tokenToJSName(key);
    const jsValue = typeof value === 'string' ? `"${value}"` : value;
    js += `export const ${name} = ${jsValue};\n`;
    entries.push({ name, jsValue });
  }

  js += `\nexport const tokens = {\n`;
  for (const { name, jsValue } of entries) {
    js += `  ${name}: ${jsValue},\n`;
  }
  js += `};\n`;

  js += `\nexport default tokens;\n`;

  return js;
}

// ============================================================================
// 5. Escrever arquivos
// ============================================================================

mkdirSync(GENERATED_DIR, { recursive: true });

// src/generated/tokens.json (flat)
writeFileSync(join(GENERATED_DIR, 'tokens.json'), JSON.stringify(flatTokens, null, 2), 'utf-8');
console.log(`✅ src/generated/tokens.json (${tokenCount} tokens)`);

// src/generated/variables.css
const css = generateCSS(flatTokens);
writeFileSync(join(GENERATED_DIR, 'variables.css'), css, 'utf-8');
const cssVarCount = (css.match(/--/g) || []).length;
console.log(`✅ src/generated/variables.css (${cssVarCount} variáveis)`);

// src/generated/tokens.js
const js = generateJS(flatTokens);
writeFileSync(join(GENERATED_DIR, 'tokens.js'), js, 'utf-8');
console.log(`✅ src/generated/tokens.js`);

console.log(`\n🎉 Concluído! ${tokenCount} tokens sincronizados. (${TODAY})\n`);
