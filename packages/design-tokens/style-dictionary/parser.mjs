/**
 * parser.mjs — parser custom do Style Dictionary pra ler o token.json exportado
 * pelo plugin "Olist Token Exporter" (mesma fonte que scripts/build.mjs usa).
 *
 * Por que precisa de parser custom:
 * Style Dictionary espera folhas no formato `{ value, type }` (ou `$value`/`$type`
 * no padrão DTCG) e referências como `{grupo.caminho}`. Nosso export do Figma é
 * flat, sem wrapper `value`, com alias `{tag:grupo/caminho}` (dois-pontos + barra).
 * Este parser converte um formato pro outro sem alterar o arquivo fonte.
 *
 * A lógica de achatamento (flattenObject) é uma cópia adaptada da mesma função
 * em scripts/build.mjs — mantida separada por ora pra não arriscar o pipeline
 * já em produção (npm run build:tokens). Ver nota em style-dictionary/config.mjs.
 */

// Alias com coleção marcada: "{base:color/gray/gray 0}" ou "{theme:shape/spacing/x1 (8px)}"
const TAGGED_ALIAS_PATTERN = /^\{([a-z]+):(.+)\}$/;
// Alias legado sem tag: "{font/weight/light}"
const BARE_ALIAS_PATTERN = /^\{(.+)\}$/;

const isSelfAlias = (value, fullKey) =>
  typeof value === 'string' && value === `{${fullKey}}`;

/**
 * Achata um objeto aninhado em `{ "a/b/c": valor }`, igual ao build.mjs.
 * Mantida com o mesmo comportamento de detecção de duplicata/auto-alias pra
 * garantir paridade com a saída que já está em produção.
 */
export function flattenTokens(obj, prefix = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}/${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      flattenTokens(value, fullKey, result);
    } else {
      if (Object.prototype.hasOwnProperty.call(result, fullKey) && result[fullKey] !== value) {
        if (isSelfAlias(value, fullKey)) continue;
        if (isSelfAlias(result[fullKey], fullKey)) {
          result[fullKey] = value;
          continue;
        }
        throw new Error(
          `Token duplicado durante parse do Style Dictionary: "${fullKey}" já resolvia para ` +
            `${JSON.stringify(result[fullKey])} e foi sobrescrito por ${JSON.stringify(value)}.`,
        );
      }
      result[fullKey] = value;
    }
  }
  return result;
}

/**
 * Limpa um segmento de path pra ficar seguro como parte de uma regex e como
 * chave de árvore — mesma classe de caracteres que tokenToCSSVar/tokenToJSName
 * já removem no build.mjs (mantém alfanumérico, espaço e traço).
 *
 * Necessário porque o Style Dictionary monta a regex de outputReferences com
 * `path.join('\\.')` SEM escapar os segmentos — um nome como "x1 (1px)" vira
 * grupo de captura não-escapado e a referência nunca dá match no valor literal
 * "(1px)". Sanitizando aqui (na árvore e nos aliases, de forma consistente)
 * evita esse bug rio acima, sem mudar o nome final da variável (que já passava
 * pelo mesmo strip em build.mjs).
 */
function sanitizeSegment(segment) {
  return segment.replace(/[^a-zA-Z0-9\s-]/g, '').trim();
}

/**
 * Reescreve um alias do formato do plugin pra sintaxe nativa do Style Dictionary.
 * "{base:color/gray/gray 0}" -> "{color.gray.gray 0}"
 * "{font/weight/light}"      -> "{font.weight.light}"
 * Um valor que não é alias (cor literal, número, string comum) volta inalterado.
 */
export function rewriteAlias(value) {
  if (typeof value !== 'string') return value;

  const tagged = value.match(TAGGED_ALIAS_PATTERN);
  if (tagged) {
    const [, , refPath] = tagged;
    return `{${refPath.split('/').map(sanitizeSegment).join('.')}}`;
  }

  const bare = value.match(BARE_ALIAS_PATTERN);
  // Só trata como alias se o conteúdo parecer um caminho de token (tem "/"
  // ou é uma única palavra sem espaço) — evita confundir com valores legítimos
  // que por acaso usem chaves, se algum dia existirem.
  if (bare && /^[\w./() %-]+$/i.test(bare[1])) {
    return `{${bare[1].split('/').map(sanitizeSegment).join('.')}}`;
  }

  return value;
}

/** Monta a árvore aninhada que o Style Dictionary espera a partir do dict flat. */
function toTokenTree(flatTokens) {
  const tree = {};
  for (const [flatKey, rawValue] of Object.entries(flatTokens)) {
    const segments = flatKey.split('/').map(sanitizeSegment);
    let node = tree;
    segments.forEach((segment, i) => {
      if (i === segments.length - 1) {
        node[segment] = { value: rewriteAlias(rawValue) };
      } else {
        node[segment] = node[segment] || {};
        node = node[segment];
      }
    });
  }
  return tree;
}

export const olistTokensParser = {
  name: 'olist-tokens-json',
  pattern: /tokens[\\/]tokens\.json$/,
  parser({ contents }) {
    const raw = JSON.parse(contents);
    const flat = flattenTokens(raw);
    return toTokenTree(flat);
  },
};
