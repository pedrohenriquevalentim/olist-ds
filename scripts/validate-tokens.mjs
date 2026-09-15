#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const COMPONENTS_DIR = join(process.cwd(), 'src', 'components');
const VARIABLES_FILE = join(process.cwd(), 'src', 'generated', 'variables.css');

function collectCssFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...collectCssFiles(full));
    else if (entry.endsWith('.module.css')) files.push(full);
  }
  return files;
}

const variablesCss = readFileSync(VARIABLES_FILE, 'utf8');
const defined = new Set(
  [...variablesCss.matchAll(/^\s{2}(--[a-z0-9-]+):/gm)].map(m => m[1])
);

const errors = [];
for (const file of collectCssFiles(COMPONENTS_DIR)) {
  const content = readFileSync(file, 'utf8');
  const used = [...content.matchAll(/var\((--[a-z0-9-]+)\)/g)].map(m => m[1]);
  const missing = [...new Set(used)].filter(t => !defined.has(t));
  if (missing.length > 0) errors.push({ file: file.replace(process.cwd() + '/', ''), missing });
}

if (errors.length === 0) {
  console.log('✓ Todos os tokens CSS estão definidos em variables.css');
  process.exit(0);
}

console.error('✗ Tokens usados mas não definidos em variables.css:\n');
for (const { file, missing } of errors) {
  console.error(`  ${file}`);
  for (const token of missing) console.error(`    ${token}`);
}
process.exit(1);
