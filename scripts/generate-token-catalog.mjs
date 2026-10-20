#!/usr/bin/env node

/**
 * generate-token-catalog.mjs
 *
 * Gera `references/TOKEN_CATALOG.md` da skill a partir de `src/generated/variables.css`
 * (saída do `npm run build:tokens`). Resolve as cadeias `var(--x)` no tema claro e no
 * tema escuro (`@media (prefers-color-scheme: dark)`).
 *
 * Uso: node scripts/generate-token-catalog.mjs   (chamado por `npm run sync:skill`)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const CSS_PATH = join(ROOT, 'src', 'generated', 'variables.css');
const SKILLS_BASE = join(ROOT, '.claude', 'skills');

function resolveSkillDir() {
  const dir = readdirSync(SKILLS_BASE).find(
    (n) => n.startsWith('olist-ds-specialist') && statSync(join(SKILLS_BASE, n)).isDirectory(),
  );
  return dir ? join(SKILLS_BASE, dir) : null;
}

if (!existsSync(CSS_PATH)) {
  console.log('⚠️  src/generated/variables.css não encontrado — rode `npm run build:tokens`. TOKEN_CATALOG não gerado.');
  process.exit(0);
}
const skillDir = resolveSkillDir();
if (!skillDir) {
  console.log('⚠️  Pasta da skill não encontrada — TOKEN_CATALOG não gerado.');
  process.exit(0);
}

// ── Parse ────────────────────────────────────────────────────────────────────

const css = readFileSync(CSS_PATH, 'utf-8');
const darkStart = css.indexOf('@media (prefers-color-scheme: dark)');
const lightCss = darkStart === -1 ? css : css.slice(0, darkStart);
// O bloco escuro termina no primeiro `}` na coluna 0 depois do @media (o arquivo ainda traz
// blocos `.dark`/`.light` depois dele, que não entram aqui).
const darkEnd = darkStart === -1 ? -1 : css.indexOf('\n}\n', darkStart);
const darkCss = darkStart === -1 ? '' : css.slice(darkStart, darkEnd === -1 ? undefined : darkEnd + 3);

const parseVars = (src) => {
  const map = new Map();
  for (const m of src.matchAll(/^\s*(--[\w-]+):\s*([^;]+);/gm)) map.set(m[1], m[2].trim());
  return map;
};
const light = parseVars(lightCss);
const darkOverrides = parseVars(darkCss);
const dark = new Map([...light, ...darkOverrides]);

const resolve = (map, name, depth = 0) => {
  let v = map.get(name);
  if (v === undefined || depth > 12) return v;
  const m = v.match(/^var\((--[\w-]+)\)$/);
  return m ? resolve(map, m[1], depth + 1) : v;
};

// ── Utilitários ──────────────────────────────────────────────────────────────

const isColor = (v) => typeof v === 'string' && /^(#|rgba?\()/i.test(v);
const rgbOf = (hex) => {
  const h = hex.replace('#', '');
  if (h.length !== 6) return null;
  const n = (i) => (parseInt(h.slice(i, i + 2), 16) / 255).toFixed(3);
  return `{r:${n(0)}, g:${n(2)}, b:${n(4)}}`;
};
const code = (s) => '`' + s + '`';

const row = (name) => {
  const l = resolve(light, name);
  const d = resolve(dark, name);
  const dd = d !== l && isColor(d) ? code(d) : '—';
  return `| ${code(name)} | ${code(l)} | ${dd} |`;
};
const rowPlain = (name) => `| ${code(name)} | ${code(resolve(light, name))} |`;
const table = (names, withDark) =>
  names.length === 0
    ? '_Sem tokens nesta seção._\n'
    : withDark
      ? ['| Token | Valor (claro) | Valor (escuro) |', '|---|---|---|', ...names.map(row)].join('\n') + '\n'
      : ['| Token | Valor |', '|---|---|', ...names.map(rowPlain)].join('\n') + '\n';

const names = [...light.keys()];
const by = (re) => names.filter((n) => re.test(n));

// ── Famílias de componente ───────────────────────────────────────────────────

const SHARED = /^--(color|effects|font|shape|text|globals|focus)-/;
const FAMILIES = [
  'segmented-button', 'radio-button', 'context-switch', 'floating-action-bar', 'product-switch',
  'product-launcher', 'progress-bar', 'alert-bar', 'alert-dialog', 'column-manager', 'status-pill',
  'menu', 'button', 'input', 'chip', 'badges', 'card', 'tabs', 'checkbox', 'toggle', 'link',
  'dropdown', 'tooltip', 'breadcrumb', 'paginator', 'table', 'avatar', 'accordion', 'drawer',
  'list', 'logo', 'icon', 'scrollbar', 'overlay', 'shadow', 'flags', 'modal', 'calendar', 'toast',
  'stepper', 'chart',
].sort((a, b) => b.length - a.length);
const familyOf = (n) => FAMILIES.find((f) => n.startsWith(`--${f}-`));
const componentNames = names.filter((n) => !SHARED.test(n) && familyOf(n));
// `chart-*` de componente (não confundir com `color-chart-*`, que é semântico)

// ── Seções ───────────────────────────────────────────────────────────────────

const today = new Date().toISOString().slice(0, 10);
const out = [];
out.push('# TOKEN_CATALOG — Catálogo Completo de Tokens', '');
out.push(`> Auto-gerado por \`node scripts/generate-token-catalog.mjs\` (chamado por \`npm run sync:skill\`) a partir de \`src/generated/variables.css\`. Última geração: ${today}.`);
out.push('> **ATENÇÃO:** Nomes primitivos têm segmento duplicado (ex: `--color-gray-gray-0`). Tokens semânticos são os corretos para uso em componentes.');
out.push('> Valores resolvidos no tema claro; a coluna "escuro" aparece quando o valor muda em `prefers-color-scheme: dark`.', '', '---', '');

out.push('## 1. Cores Primitivas', '', 'Use apenas quando não existir token semântico equivalente. Para Figma Plugin API, use a coluna "Figma RGB".', '');
for (const fam of ['gray', 'blue', 'cyan', 'pink', 'green', 'red', 'yellow']) {
  const ns = by(new RegExp(`^--color-${fam}-${fam}-`));
  out.push(`### ${fam[0].toUpperCase()}${fam.slice(1)}`, '', '| Token | Hex | Figma RGB (0–1) |', '|---|---|---|');
  for (const n of ns) {
    const v = resolve(light, n);
    out.push(`| ${code(n)} | ${code(v)} | ${code(rgbOf(v) ?? '—')} |`);
  }
  out.push('');
}
const productRamps = by(/^--color-product-/);
out.push('### Rampas de produto', '', 'Base das cores por produto (`erp`, `hub`, `pdv`, `conta`, `envios`, `ia`, `ecom`, `credito`). **Nunca use direto:** consuma os semânticos `--color-(background|border)-(hover|selected)-product-*` e `--color-text-selected-product-*`.', '');
out.push('| Token | Hex |', '|---|---|', ...productRamps.map((n) => `| ${code(n)} | ${code(resolve(light, n))} |`), '', '---', '');

out.push('## 2. Tokens Semânticos de Cor', '', '**Estes são os tokens corretos para uso em componentes.** Referenciam os primitivos acima e podem ser inspecionados no CSS.', '');
for (const [title, re] of [
  ['color-background-*', /^--color-background-/],
  ['color-text-*', /^--color-text-/],
  ['color-border-*', /^--color-border-/],
  ['color-shape-*', /^--color-shape-/],
  ['color-logo-*', /^--color-logo-/],
  ['color-chart-*', /^--color-chart-/],
  ['color-none-*', /^--color-none-/],
]) {
  out.push(`### ${title}`, '', table(by(re), true));
}
out.push('---', '');

out.push('## 3. Effects', '', table(by(/^--effects-/), true), '---', '');

out.push('## 4. Shape — Espaçamento, Border Radius, Tamanho', '');
out.push('### Espaçamento', '', table(by(/^--shape-spacing-/), false));
out.push('### Border Radius', '', table(by(/^--shape-border-radius-/), false));
out.push('### Espessura de Borda', '', table(by(/^--shape-border-width-/), false));
out.push('### Tamanho de Componente', '', table(by(/^--shape-size-/), false));
out.push('### Opacidade', '', table(by(/^--shape-opacity-/), false), '---', '');

out.push('## 5. Tipografia', '');
out.push('### Família', '', table(by(/^--font-family-/), false));
out.push('### Tamanho', '', table(by(/^--font-size-/), false));
out.push('### Peso', '', table(by(/^--font-weight-/), false));
out.push('### Line Height', '', table(by(/^--font-line-height-/), false), '---', '');

out.push('## 6. Text Styles Semânticos', '', table(by(/^--text-/), true), '---', '');

out.push('## 7. Globals', '', 'Escala de controles: `--globals-size-interaction` (big), `--globals-size-inside-interaction` (medium) e `--globals-size-smallest` (small).', '', table(by(/^--globals-/), false), '---', '');

out.push('## 8. Tokens de Componente', '', 'Tokens específicos de cada componente. Prefira tokens semânticos de cor (Seção 2) para fills e strokes.', '');
const order = [...new Set(componentNames.map(familyOf))];
for (const fam of order) {
  const ns = componentNames.filter((n) => familyOf(n) === fam);
  const withDark = ns.some((n) => resolve(light, n) !== resolve(dark, n) && isColor(resolve(dark, n)));
  out.push(`### ${fam}`, '', table(ns, withDark));
}
const focus = by(/^--focus-/);
if (focus.length) out.push('### focus', '', table(focus, true));

writeFileSync(join(skillDir, 'references', 'TOKEN_CATALOG.md'), out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n', 'utf-8');
console.log(`✅ TOKEN_CATALOG.md gerado (${names.length} variáveis; ${componentNames.length} de componente).`);
