import { cpSync, readdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const componentsDir = './src/components';
const distDir = './dist/components';

const dirs = readdirSync(componentsDir);

for (const dir of dirs) {
  const srcPath = join(componentsDir, dir);

  if (!statSync(srcPath).isDirectory()) continue;

  const destPath = join(distDir, dir);
  const files = readdirSync(srcPath);

  for (const file of files) {
    if (file.endsWith('.css')) {
      cpSync(join(srcPath, file), join(destPath, file));
      console.log(`  ✅ ${dir}/${file}`);
    }
  }
}

console.log('\n✅ CSS copiados para dist/');
