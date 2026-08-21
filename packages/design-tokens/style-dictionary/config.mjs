#!/usr/bin/env node
/**
 * config.mjs — pipeline Style Dictionary do pacote @pedrohenriquevalentim/design-tokens.
 *
 * Roda em paralelo ao scripts/build.mjs (npm run build:tokens), NÃO o substitui.
 * Saída em dist-sd/, separada de dist/, pra comparar as duas antes de decidir
 * se um dia isso vira o pipeline padrão.
 *
 * Uso:
 *   node style-dictionary/config.mjs
 *   (ou, na raiz do repo: npm run build:tokens:sd)
 */

import StyleDictionary from 'style-dictionary';
import { olistTokensParser } from './parser.mjs';
import { remTransform, cssNameTransform, scssNameTransform, jsNameTransform } from './transforms.mjs';
import { cssInJsFormat } from './formats.mjs';

StyleDictionary.registerParser(olistTokensParser);
StyleDictionary.registerTransform(remTransform);
StyleDictionary.registerTransform(cssNameTransform);
StyleDictionary.registerTransform(scssNameTransform);
StyleDictionary.registerTransform(jsNameTransform);
StyleDictionary.registerFormat(cssInJsFormat);

const sd = new StyleDictionary({
  source: ['tokens/tokens.json'],
  parsers: ['olist-tokens-json'],
  platforms: {
    css: {
      transforms: ['olist/size/rem', 'olist/name/css'],
      buildPath: 'dist-sd/',
      files: [{ destination: 'variables.css', format: 'css/variables', options: { outputReferences: true } }],
    },
    scss: {
      transforms: ['olist/size/rem', 'olist/name/scss'],
      buildPath: 'dist-sd/',
      files: [{ destination: '_variables.scss', format: 'scss/variables', options: { outputReferences: true } }],
    },
    js: {
      transforms: ['olist/name/js'],
      buildPath: 'dist-sd/',
      files: [{ destination: 'tokens.js', format: 'javascript/es6' }],
    },
    cssInJs: {
      // 'olist/name/js' aqui não é usado pelo format (que monta a árvore
      // aninhada e faz o camelCase por nível sozinho, ver formats.mjs) — só
      // dá um `token.name` único pro Style Dictionary, evitando o aviso de
      // "colisão" que ele emite quando várias folhas com paths diferentes
      // compartilham o último segmento (ex.: vários "*.neutral").
      transforms: ['olist/size/rem', 'olist/name/js'],
      buildPath: 'dist-sd/',
      files: [{ destination: 'theme.js', format: 'olist/css-in-js' }],
    },
  },
});

await sd.buildAllPlatforms();
