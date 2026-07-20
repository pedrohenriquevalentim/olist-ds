#!/usr/bin/env node

/**
 * release.mjs
 *
 * Rotina pra escolher qual pacote do workspace publicar (ou republicar):
 * @pedrohenriquevalentim/olist-ds (raiz) ou @pedrohenriquevalentim/design-tokens.
 *
 * NÃO publica nada diretamente (nem dá push na main, que é protegida —
 * exige PR + 2 status checks). Só faz o bump de versão, cria uma branch,
 * empurra e abre o PR. A publicação real no GitHub Packages acontece via
 * CI, automaticamente, quando o PR for mergeado na main (jobs "publish" e
 * "publish-tokens" em .github/workflows/pipeline.yml) — evita publicar de
 * uma máquina local com token pessoal, e evita repetir o erro de push
 * direto que o "npm run ship" bateu.
 *
 * Uso:
 *   npm run release                              # menu interativo
 *   node scripts/release.mjs olist-ds patch
 *   node scripts/release.mjs design-tokens minor
 */

import { execSync, execFileSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const PACKAGES = {
  'olist-ds': {
    dir: '.',
    name: '@pedrohenriquevalentim/olist-ds',
    tagPrefix: 'v',
  },
  'design-tokens': {
    dir: 'packages/design-tokens',
    name: '@pedrohenriquevalentim/design-tokens',
    tagPrefix: 'design-tokens-v',
  },
};

const BUMPS = ['patch', 'minor', 'major'];

function run(cmd, cwd = '.') {
  console.log(`$ ${cmd}`);
  return execSync(cmd, { cwd, stdio: 'inherit' });
}

function runCapture(cmd, cwd = '.') {
  return execSync(cmd, { cwd, encoding: 'utf-8' }).trim();
}

async function ask(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(question);
  rl.close();
  return answer.trim();
}

async function pickPackage() {
  console.log('\nQual pacote você quer publicar (ou republicar)?\n');
  const keys = Object.keys(PACKAGES);
  keys.forEach((k, i) => console.log(`  ${i + 1}. ${PACKAGES[k].name}`));
  const answer = await ask('\nNúmero: ');
  const key = keys[Number(answer) - 1];
  if (!key) {
    console.error('❌ Opção inválida.');
    process.exit(1);
  }
  return key;
}

async function pickBump() {
  const answer = await ask(`\nTipo de versão (${BUMPS.join('/')}) [patch]: `);
  return answer || 'patch';
}

// ============================================================================
// 1. Validações iniciais
// ============================================================================

const status = runCapture('git status --porcelain');
if (status) {
  console.error('❌ Você tem mudanças não commitadas. Commite ou descarte antes de rodar o release.\n');
  process.exit(1);
}

const currentBranch = runCapture('git branch --show-current');
if (currentBranch !== 'main') {
  console.error(`❌ Rode o release a partir da "main" (branch atual: "${currentBranch}").\n`);
  process.exit(1);
}

// ============================================================================
// 2. Escolher pacote e tipo de bump
// ============================================================================

const [, , argPackage, argBump] = process.argv;

const packageKey = argPackage && PACKAGES[argPackage] ? argPackage : await pickPackage();
const bump = (argBump || await pickBump()).toLowerCase();

if (!BUMPS.includes(bump)) {
  console.error(`❌ Tipo de versão inválido: "${bump}". Use ${BUMPS.join(', ')}.\n`);
  process.exit(1);
}

const pkg = PACKAGES[packageKey];

console.log(`\n🚀 Preparando release de ${pkg.name} (${bump})...\n`);

// ============================================================================
// 3. Build de sanidade antes de versionar
// ============================================================================

if (packageKey === 'olist-ds') {
  run('npm run pipeline');
} else {
  run('npm run build', pkg.dir);
}

// ============================================================================
// 4. Branch + bump de versão + tag
// ============================================================================

run('git fetch origin main');
run('git merge --ff-only origin/main');

run(
  `npm version ${bump} --tag-version-prefix=${pkg.tagPrefix} -m "chore(${packageKey}): release %s"`,
  pkg.dir
);
// Ler a versão nova direto do package.json (mais confiável que parsear
// stdout do "npm version", que pode imprimir avisos junto com a tag).
const pkgJsonPath = join(pkg.dir, 'package.json');
const newVersion = JSON.parse(readFileSync(pkgJsonPath, 'utf-8')).version;
const branchName = `release/${packageKey}-v${newVersion}`;

run(`git branch ${branchName}`);
run(`git reset --hard origin/main`);
run(`git checkout ${branchName}`);
run(`git push -u origin ${branchName}`);

// ============================================================================
// 5. Abrir PR
// ============================================================================

const prBody = `## Resumo

- Bump de versão (${bump}) de \`${pkg.name}\`: \`${newVersion}\`.
- Gerado por \`npm run release\`.

## Após o merge

O CI publica \`${pkg.name}\` automaticamente no GitHub Packages ao detectar o push na \`main\` (job correspondente em \`.github/workflows/pipeline.yml\`) — nenhum passo manual de publicação é necessário.

**Importante**: faça o merge com "Create a merge commit" (não squash/rebase), para que a tag \`${pkg.tagPrefix}${newVersion}\` continue apontando para um commit alcançável pela \`main\`.

🤖 Generated with [Claude Code](https://claude.com/claude-code)`;

// execFileSync (não execSync) — o corpo do PR tem crases de markdown, que
// a shell interpretaria como command substitution se passasse por "sh -c".
console.log('$ gh pr create ...');
execFileSync(
  'gh',
  ['pr', 'create', '--title', `chore(${packageKey}): release ${newVersion}`, '--body', prBody],
  { stdio: 'inherit' }
);

console.log(`\n✅ PR aberto para ${pkg.name} v${newVersion}. Aguarde os checks e mergeie com "Create a merge commit".\n`);
