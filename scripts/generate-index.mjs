import { readdirSync, statSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const componentsDir = './src/components';
const indexPath = './src/index.ts';
const catalogPath = './src/catalog.ts';

const dirs = readdirSync(componentsDir)
  .filter(name => {
    const fullPath = join(componentsDir, name);
    if (!statSync(fullPath).isDirectory()) return false;
    // Convenção Nome/Nome.tsx, ou componente baseado em index.tsx
    // (ex.: Icon, cujo arquivo é auto-gerado por generate-icons.mjs)
    return (
      existsSync(join(fullPath, `${name}.tsx`)) ||
      existsSync(join(fullPath, 'index.tsx'))
    );
  });

// Gera src/index.ts
const indexLines = [
  '"use client";',
  '',
  '// Auto-generated — NÃO edite manualmente',
  '',
  // `export *` re-exporta o componente E as interfaces de Props do index de
  // cada componente — o campo "exports" do package.json bloqueia deep-imports,
  // então a raiz é o único caminho dos tipos para o consumidor.
  ...dirs.map(name => `export * from './components/${name}';`),
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
