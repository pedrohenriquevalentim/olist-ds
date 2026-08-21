/**
 * transforms.mjs — transforms custom pra reproduzir, via Style Dictionary,
 * as mesmas regras que scripts/build.mjs aplica na mão hoje:
 *  - px -> rem (exceto categorias unitless: peso de fonte, opacidade)
 *  - nome de variável CSS: "family/sub/name" -> "--family-sub-name"
 */

// Mesma lista de build.mjs: categorias cujo número não representa pixels.
const UNITLESS_PREFIXES = ['font/weight', 'shape/opacity'];

function isUnitless(path) {
  const normalized = path.join('/').toLowerCase();
  return UNITLESS_PREFIXES.some((prefix) => normalized.startsWith(prefix));
}

function pxToRem(value) {
  if (value === 0) return '0';
  return `${value / 16}rem`;
}

/** Converte number -> rem para CSS/Sass, preservando unitless (peso, opacidade). */
export const remTransform = {
  name: 'olist/size/rem',
  type: 'value',
  filter: (token) => typeof token.value === 'number',
  transform: (token) => (isUnitless(token.path) ? token.value : pxToRem(token.value)),
};

/**
 * Nome de variável idêntico ao gerado por build.mjs (tokenToCSSVar), SEM o "--"
 * — o format `css/variables` do próprio Style Dictionary já adiciona esse prefixo.
 */
export const cssNameTransform = {
  name: 'olist/name/css',
  type: 'name',
  transform: (token) =>
    token.path
      .join('/')
      .replace(/\//g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .toLowerCase(),
};

/** Nome de variável Sass, mesma regra sem o "--" (SD já adiciona "$"). */
export const scssNameTransform = {
  name: 'olist/name/scss',
  type: 'name',
  transform: (token) =>
    token.path
      .join('/')
      .replace(/\//g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .toLowerCase(),
};

/** Nome de export JS, mesma regra de build.mjs (tokenToJSName): camelCase. */
export const jsNameTransform = {
  name: 'olist/name/js',
  type: 'name',
  transform: (token) =>
    token.path
      .join('/')
      .split(/[\s/-]+/)
      .map((part, i) =>
        i === 0 ? part.toLowerCase() : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase(),
      )
      .join('')
      .replace(/[^a-zA-Z0-9]/g, ''),
};
