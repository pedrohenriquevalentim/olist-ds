#!/usr/bin/env node
/**
 * Gera src/components/Icon/index.tsx a partir dos SVGs em src/assets/icons/svgs/
 * Convenção de nomes: *-off.svg → chave "name" | *-on.svg → chave "name-fill"
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const SVG_DIR = resolve('src/assets/icons/svgs');
const OUT_FILE = resolve('src/components/Icon/index.tsx');

const files = readdirSync(SVG_DIR).sort();
const entries = [];

for (const filename of files) {
  if (!filename.endsWith('.svg')) continue;

  const base = filename.slice(0, -4); // remove .svg

  let iconName, isFill;
  if (base.endsWith('-off')) {
    iconName = base.slice(0, -4).trim();
    isFill = false;
  } else if (base.endsWith('-on')) {
    iconName = base.slice(0, -3).trim();
    isFill = true;
  } else {
    continue; // ignora arquivos fora da convenção (ex: file-nf-off-1.svg)
  }

  if (!iconName) continue;

  const key = isFill ? `${iconName}-fill` : iconName;
  const svgContent = readFileSync(join(SVG_DIR, filename), 'utf-8')
    .replace(/\n/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  entries.push({ key, svgContent });
}

// Remove duplicatas mantendo a primeira ocorrência
const seen = new Set();
const unique = entries.filter(e => {
  if (seen.has(e.key)) return false;
  seen.add(e.key);
  return true;
});

unique.sort((a, b) => a.key.localeCompare(b.key));

const iconEntries = unique
  .map(({ key, svgContent }) => `  '${key}': \`${svgContent}\`,`)
  .join('\n');

const allKeys = unique.map(e => `  | '${e.key}'`).join('\n');

const output = `import React from 'react';
import styles from './styles.module.css';

// Auto-generated — execute \`npm run generate:icons\` para regenerar
const icons: Record<string, string> = {
${iconEntries}
};

export type IconName =
${allKeys};

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  'aria-label'?: string;
}

export const Icon = ({
  name,
  size = 20,
  className = '',
  color,
  'aria-label': ariaLabel,
}: IconProps) => {
  const svgContent = icons[name];

  if (!svgContent) {
    console.warn(\`Icon "\${name}" not found\`);
    return null;
  }

  return (
    <span
      className={\`\${styles.icon} \${className}\`.trim()}
      style={{
        width: size,
        height: size,
        color: color,
      }}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export const availableIcons = Object.keys(icons).sort() as IconName[];
`;

writeFileSync(OUT_FILE, output);
console.log(`✅ Icon/index.tsx gerado com ${unique.length} ícones`);
