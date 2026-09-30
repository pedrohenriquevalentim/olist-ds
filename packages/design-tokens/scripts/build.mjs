#!/usr/bin/env node

/**
 * build.mjs — pacote @pedrohenriquevalentim/design-tokens
 *
 * Lê os JSONs da pasta tokens/ (exportados do Figma via plugin)
 * e gera os arquivos consumíveis na pasta dist/
 *
 * Entrada:  tokens/base.json, tokens/theme.json,
 *           tokens/tokens-light.json, tokens/tokens-dark.json
 *           tokens/tokens-components.json  (opcional)
 *
 * Compatibilidade: se tokens-light.json não existir, lê tokens.json como fallback
 *
 * Saída:    dist/variables.css, dist/tokens.js, dist/tokens.json
 *           dist/tokens-dark.json  (apenas se dark tokens existirem)
 *
 * Dark mode CSS gerado:
 *   :root                           → light (padrão)
 *   @media (prefers-color-scheme)   → dark automático (sistema)
 *   [data-theme="dark"]             → dark manual (toggle JS)
 *   [data-theme="light"]            → força light quando sistema é dark
 *
 * Uso:
 *   npm run build --workspace=packages/design-tokens
 *   (ou, na raiz do repo: npm run build:tokens)
 */

import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const TOKENS_DIR = join(ROOT, 'tokens');
const GENERATED_DIR = join(ROOT, 'dist');
const TODAY = new Date().toISOString().split('T')[0];

console.log('🎨 Gerando tokens...\n');

// ============================================================================
// 1. Ler arquivos fonte
// ============================================================================

function readJSON(path) {
  try { return JSON.parse(readFileSync(path, 'utf-8')); }
  catch { return null; }
}

const baseTokens       = readJSON(join(TOKENS_DIR, 'base.json'));
const themeTokens      = readJSON(join(TOKENS_DIR, 'theme.json'));
const lightTokens      = readJSON(join(TOKENS_DIR, 'tokens-light.json'));
const darkTokens       = readJSON(join(TOKENS_DIR, 'tokens-dark.json'));
const componentTokens  = readJSON(join(TOKENS_DIR, 'tokens-components.json'));

// {} vazio = placeholder aguardando export do Figma; tratar como "sem dark mode"
const hasDarkMode = !!darkTokens && Object.keys(darkTokens).length > 0;

if (!lightTokens) {
  console.error('❌ tokens-light.json não encontrado em packages/design-tokens/tokens/\n');
  console.log('Para gerar os JSONs, use o plugin "Olist Token Exporter" no Figma:');
  console.log('  1. Abrir Figma → Plugins → Olist Token Exporter');
  console.log('  2. Clicar "Extrair Tokens"');
  console.log('  3. Baixar os arquivos para a pasta packages/design-tokens/tokens/');
  console.log('     Estrutura esperada: base.json, theme.json, tokens-light.json, tokens-dark.json');
  console.log('  4. Rodar npm run build:tokens na raiz do repositório novamente');
  process.exit(1);
}

const lightSource = lightTokens;

console.log(`📂 tokens/ encontrado:`);
if (baseTokens)      console.log(`   ✅ base.json`);
if (themeTokens)     console.log(`   ✅ theme.json`);
if (lightTokens)     console.log(`   ✅ tokens-light.json`);
if (darkTokens)      console.log(`   ✅ tokens-dark.json`);
if (componentTokens) console.log(`   ✅ tokens-components.json`);
if (hasDarkMode)     console.log(`\n   🌙 Dark mode ativo`);
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

// tokens-components.json é referência — os componentes já estão mesclados
// dentro de tokens-light.json e tokens-dark.json pelo plugin do Figma.
// Não mesclar aqui para evitar tokens duplicados.
// tokens-components.json: os caminhos no Figma têm a raiz "component/"
// (ex.: "component/button/size/height"), mas as variáveis CSS geradas omitem
// esse prefixo ("--button-size-height"). Extraímos a sub-árvore "component"
// para achatar sem ele — preservando compatibilidade com os .module.css existentes.
// Componentes também fazem aliases internos {components:globals/...} que
// precisam ser resolvidos usando o mesmo mapa sem prefixo.
let flatComponents = {};
if (componentTokens && Object.keys(componentTokens).length > 0) {
  const componentData = componentTokens.component || componentTokens;
  flatComponents = flattenObject(componentData);
  console.log(`   ℹ️  tokens-components.json: ${Object.keys(flatComponents).length} tokens de componente`);
}

let flatLight;
try {
  flatLight = flattenObject(lightSource);
  // Mesclar componentes após o light source — sem risco de duplicata pois
  // tokens-light.json não inclui a collection de componentes
  Object.assign(flatLight, flatComponents);
} catch (err) {
  console.error(`❌ ${err.message}\n`);
  process.exit(1);
}

let flatDark = null;
if (hasDarkMode) {
  try {
    flatDark = flattenObject(darkTokens);
    Object.assign(flatDark, flatComponents);
  } catch (err) {
    console.error(`❌ (dark mode) ${err.message}\n`);
    process.exit(1);
  }
}

const tokenCount = Object.keys(flatLight).length;

// ============================================================================
// 2.1 Validar aliases entre collections
// ============================================================================

function firstModeObject(nested) {
  if (!nested) return {};
  const firstKey = Object.keys(nested)[0];
  return firstKey ? nested[firstKey] : {};
}

const flatBase = flattenObject(baseTokens || {});
const flatTheme = flattenObject(firstModeObject(themeTokens));
// O mapa de components usa o mesmo flatComponents (sem prefixo "component/")
// para que aliases {components:globals/font/weight/label} sejam encontrados
const COLLECTION_MAPS = { base: flatBase, theme: flatTheme, components: flatComponents };

const ALIAS_PATTERN = /^\{([a-z]+):(.+)\}$/;

function validateAliases(flat, label) {
  const broken = [];
  for (const [key, value] of Object.entries(flat)) {
    if (typeof value !== 'string') continue;
    const match = value.match(ALIAS_PATTERN);
    if (!match) continue;
    const [, tag, refName] = match;
    const map = COLLECTION_MAPS[tag];
    if (map && !(refName in map)) {
      broken.push(`   "${key}" → "{${tag}:${refName}}" (não existe na collection "${tag}")`);
    }
  }
  return broken;
}

const brokenLight = validateAliases(flatLight, 'light');
const brokenDark  = flatDark ? validateAliases(flatDark, 'dark') : [];
const brokenAliases = [...brokenLight, ...brokenDark];

if (brokenAliases.length > 0) {
  console.error(`❌ ${brokenAliases.length} alias(es) quebrado(s):\n`);
  console.error(brokenAliases.join('\n') + '\n');
  console.error(
    '   A variável referenciada foi renomeada ou removida no Figma sem atualizar\n' +
    '   quem aponta pra ela. Corrija no Figma antes de reexportar.\n'
  );
  process.exit(1);
}

// ============================================================================
// 3. Calcular dark overrides (diff light vs dark)
// ============================================================================

// Apenas os tokens que diferem entre light e dark vão nos blocos de override.
// Tokens idênticos nos dois modos não precisam ser repetidos no CSS dark.
function computeDarkOverrides(light, dark) {
  const overrides = {};
  for (const [key, val] of Object.entries(dark)) {
    if (light[key] !== val) overrides[key] = val;
  }
  return overrides;
}

const darkOverrides = flatDark ? computeDarkOverrides(flatLight, flatDark) : null;

// ============================================================================
// 4. Gerar CSS variables
// ============================================================================

function tokenToCSSVar(tokenPath) {
  return '--' + tokenPath
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

const UNITLESS_PREFIXES = ['font/weight', 'shape/opacity'];
function isUnitless(tokenPath) {
  const normalized = tokenPath.toLowerCase();
  return UNITLESS_PREFIXES.some((prefix) => normalized.startsWith(prefix));
}

function pxToRem(value) {
  if (value === 0) return '0';
  return `${value / 16}rem`;
}

function tokenDeclarations(flat, indent = '  ') {
  let out = '';
  for (const [key, value] of Object.entries(flat)) {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      const taggedMatch = value.match(ALIAS_PATTERN);
      const refName = taggedMatch ? taggedMatch[2] : value.slice(1, -1);
      out += `${indent}${tokenToCSSVar(key)}: var(${tokenToCSSVar(refName)});\n`;
    } else if (typeof value === 'number') {
      const cssValue = isUnitless(key) ? value : pxToRem(value);
      out += `${indent}${tokenToCSSVar(key)}: ${cssValue};\n`;
    } else {
      out += `${indent}${tokenToCSSVar(key)}: ${value};\n`;
    }
  }
  return out;
}

function generateCSS(flatL, overrides) {
  let css = `/* Auto-generated by @pedrohenriquevalentim/design-tokens — NÃO EDITAR */\n`;
  css += `/* Última atualização: ${TODAY} */\n`;
  css += `/* Fonte: packages/design-tokens/tokens/ (exportado do Figma via plugin) */\n\n`;

  // Light mode (padrão)
  css += `:root {\n`;
  css += tokenDeclarations(flatL);
  css += `}\n`;

  if (overrides && Object.keys(overrides).length > 0) {
    const darkDecls = tokenDeclarations(overrides);

    // Sistema: segue preferência do OS
    css += `\n@media (prefers-color-scheme: dark) {\n`;
    css += `  :root {\n`;
    css += tokenDeclarations(overrides, '    ');
    css += `  }\n`;
    css += `}\n`;

    // Override manual via atributo (toggle JS)
    css += `\n[data-theme="dark"] {\n`;
    css += darkDecls;
    css += `}\n`;

    // Força light quando sistema é dark mas usuário preferiu light
    css += `\n[data-theme="light"] {\n`;
    css += tokenDeclarations(flatL);
    css += `}\n`;
  }

  return css;
}

// ============================================================================
// 5. Gerar JS exports
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

function generateJS(flatL, flatD) {
  let js = `// Auto-generated by @pedrohenriquevalentim/design-tokens — NÃO EDITAR\n`;
  js += `// Última atualização: ${TODAY}\n`;
  js += `// Fonte: packages/design-tokens/tokens/ (exportado do Figma via plugin)\n\n`;

  const lightEntries = [];

  for (const [key, value] of Object.entries(flatL)) {
    const name = tokenToJSName(key);
    const jsValue = typeof value === 'string' ? `"${value}"` : value;
    js += `export const ${name} = ${jsValue};\n`;
    lightEntries.push({ name, jsValue });
  }

  // Objeto light (mesmo shape de antes — compatibilidade)
  js += `\nexport const light = {\n`;
  for (const { name, jsValue } of lightEntries) {
    js += `  ${name}: ${jsValue},\n`;
  }
  js += `};\n`;

  // Objeto dark (se existir)
  if (flatD) {
    js += `\nexport const dark = {\n`;
    for (const [key, value] of Object.entries(flatD)) {
      const name = tokenToJSName(key);
      const jsValue = typeof value === 'string' ? `"${value}"` : value;
      js += `  ${name}: ${jsValue},\n`;
    }
    js += `};\n`;
  }

  // tokens = light (compatibilidade com código existente que importa `tokens`)
  js += `\nexport const tokens = light;\n`;
  js += `\nexport default tokens;\n`;

  return js;
}

// ============================================================================
// 6. Escrever arquivos
// ============================================================================

mkdirSync(GENERATED_DIR, { recursive: true });

// dist/tokens.json (flat light — compatibilidade com consumers existentes)
writeFileSync(join(GENERATED_DIR, 'tokens.json'), JSON.stringify(flatLight, null, 2), 'utf-8');
console.log(`✅ dist/tokens.json (${tokenCount} tokens, light mode)`);

// dist/tokens-dark.json (flat dark — apenas se dark tokens existirem)
if (flatDark) {
  writeFileSync(join(GENERATED_DIR, 'tokens-dark.json'), JSON.stringify(flatDark, null, 2), 'utf-8');
  const darkCount = Object.keys(flatDark).length;
  const overrideCount = darkOverrides ? Object.keys(darkOverrides).length : 0;
  console.log(`✅ dist/tokens-dark.json (${darkCount} tokens, ${overrideCount} overrides vs light)`);
}

// dist/variables.css
const css = generateCSS(flatLight, darkOverrides);
writeFileSync(join(GENERATED_DIR, 'variables.css'), css, 'utf-8');
const cssVarCount = (css.match(/--/g) || []).length;
console.log(`✅ dist/variables.css (${cssVarCount} declarações${hasDarkMode ? ', light + dark mode' : ''})`);

// dist/tokens.js
const js = generateJS(flatLight, flatDark);
writeFileSync(join(GENERATED_DIR, 'tokens.js'), js, 'utf-8');
console.log(`✅ dist/tokens.js${flatDark ? ' (exports: light, dark, tokens)' : ''}`);

console.log(`\n🎉 Concluído! ${tokenCount} tokens sincronizados. (${TODAY})\n`);
