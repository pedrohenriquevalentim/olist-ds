/**
 * formats.mjs — formatos de saída custom do Style Dictionary.
 */

/**
 * Mesma regra de camelCase de tokenToJSName (build.mjs) / olist/name/js
 * (transforms.mjs), aplicada a UM segmento por vez em vez do path inteiro —
 * cada nível da árvore vira uma chave JS válida por si só.
 * "gray 0" -> "gray0" · "x1_75 14px" -> "x175" (mesma perda de "_" que o
 * resto do pipeline já tem, por consistência).
 */
function toCamelKey(rawKey) {
  return rawKey
    .split(/[\s-]+/)
    .map((part, i) => (i === 0 ? part.toLowerCase() : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

/** Um nó da árvore do Style Dictionary é folha de token quando tem `name`/`path` atribuídos pelo build. */
function isTokenLeaf(node) {
  return node !== null && typeof node === 'object' && 'value' in node && 'name' in node && 'path' in node;
}

function walk(node) {
  if (isTokenLeaf(node)) return node.value;
  const out = {};
  for (const [key, child] of Object.entries(node)) {
    out[toCamelKey(key)] = walk(child);
  }
  return out;
}

/**
 * css-in-js — objeto de tema aninhado (não flat), pronto pra usar em
 * `ThemeProvider` do styled-components/emotion ou em qualquer `css\`\`` que
 * espere um objeto JS. Valores já resolvidos (aliases substituídos, sem
 * `var()`/`{...}` cru) — diferente do CSS/Sass, aqui não faz sentido manter
 * referência simbólica, já que o consumo é direto em JS.
 */
export const cssInJsFormat = {
  name: 'olist/css-in-js',
  format: ({ dictionary }) => {
    const theme = walk(dictionary.tokens);
    return (
      `/**\n` +
      ` * Do not edit directly, this file was auto-generated.\n` +
      ` * Objeto de tema para uso em CSS-in-JS (styled-components, emotion, etc).\n` +
      ` */\n\n` +
      `export const theme = ${JSON.stringify(theme, null, 2)};\n\n` +
      `export default theme;\n`
    );
  },
};
