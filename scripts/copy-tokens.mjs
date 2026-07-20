#!/usr/bin/env node

/**
 * copy-tokens.mjs
 *
 * Copia o output já buildado do pacote workspace
 * @pedrohenriquevalentim/design-tokens (packages/design-tokens/dist/)
 * para src/generated/, preservando os mesmos 3 arquivos/caminhos que
 * scripts/sync-tokens.mjs gerava localmente antes da extração do pacote.
 *
 * Pré-requisito: packages/design-tokens/dist/ já ter sido gerado — o
 * script "build:tokens" da raiz roda isso automaticamente antes de chamar
 * este arquivo (ver package.json).
 *
 * Este script NÃO gera tokens — só copia. A geração real (incluindo a
 * validação de aliases entre collections do Figma) vive em
 * packages/design-tokens/scripts/build.mjs.
 *
 * Uso:
 *   npm run build:tokens
 */

import { cpSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const SOURCE_DIR = join(ROOT, 'packages', 'design-tokens', 'dist');
const GENERATED_DIR = join(ROOT, 'src', 'generated');

const FILES = ['variables.css', 'tokens.js', 'tokens.json'];

if (!existsSync(SOURCE_DIR)) {
  console.error(`❌ ${SOURCE_DIR} não existe.`);
  console.error('   Rode "npm run build --workspace=packages/design-tokens" antes,');
  console.error('   ou use "npm run build:tokens" na raiz (já faz isso automaticamente).');
  process.exit(1);
}

mkdirSync(GENERATED_DIR, { recursive: true });

for (const file of FILES) {
  const from = join(SOURCE_DIR, file);
  if (!existsSync(from)) {
    console.error(`❌ ${from} não encontrado — o build do pacote de tokens pode ter falhado.`);
    process.exit(1);
  }
  cpSync(from, join(GENERATED_DIR, file));
  console.log(`✅ src/generated/${file} (copiado de packages/design-tokens/dist/${file})`);
}

console.log('\n🎉 Tokens copiados do workspace @pedrohenriquevalentim/design-tokens.\n');
