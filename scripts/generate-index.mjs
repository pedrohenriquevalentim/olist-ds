import { readdirSync, statSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const componentsDir = './src/components';
const indexPath = './src/index.ts';
const catalogPath = './src/catalog.ts';

const dirs = readdirSync(componentsDir)
  .filter(name => {
    const fullPath = join(componentsDir, name);
    if (!statSync(fullPath).isDirectory()) return false;
    const tsxFile = join(fullPath, `${name}.tsx`);
    return existsSync(tsxFile);
  });

// Gera src/index.ts
const indexLines = [
  '"use client";',
  '',
  '// Auto-generated — NÃO edite manualmente',
  '',
  ...dirs.map(name => `export { ${name} } from './components/${name}';`),
  '',
];
writeFileSync(indexPath, indexLines.join('\n'));

// Gera src/catalog.ts (lista de nomes dos componentes)
const catalogLines = [
  '// Auto-generated — NÃO edite manualmente',
  '',
  `export const componentNames = ${JSON.stringify(dirs, null, 2)} as const;`,
  '',
  'export type ComponentName = typeof componentNames[number];',
  '',
];
writeFileSync(catalogPath, catalogLines.join('\n'));

console.log(`✅ src/index.ts gerado com ${dirs.length} componentes:`);
dirs.forEach(name => console.log(`   - ${name}`));
console.log(`✅ src/catalog.ts gerado`);
