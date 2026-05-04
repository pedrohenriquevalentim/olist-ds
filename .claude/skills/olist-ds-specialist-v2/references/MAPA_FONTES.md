# Mapa de Fontes — Estrutura do Repositório

**Auto-gerado em 2026-05-04** — Não edite manualmente. Este arquivo é gerado por `npm run sync:skill`.

Este arquivo documenta a estrutura de pastas do projeto `olist-ds` para facilitar navegação no código.

---

## Estrutura Principal

```
olist-ds/
├── scripts/
│   ├── copy-css.mjs
│   ├── generate-index.mjs
│   ├── generate-stories.mjs
│   ├── generate-tests.mjs
│   └── sync-skill.mjs
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.module.css
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Checkbox/
│   │   │   ├── Checkbox.module.css
│   │   │   ├── Checkbox.stories.tsx
│   │   │   ├── Checkbox.test.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   └── index.ts
│   │   ├── Logo/
│   │   │   ├── index.ts
│   │   │   ├── Logo.module.css
│   │   │   ├── Logo.stories.tsx
│   │   │   ├── Logo.test.tsx
│   │   │   └── Logo.tsx
│   │   ├── MenuErp/
│   │   │   ├── index.ts
│   │   │   ├── MenuErp.module.css
│   │   │   ├── MenuErp.stories.tsx
│   │   │   ├── MenuErp.test.tsx
│   │   │   └── MenuErp.tsx
│   │   ├── MenuSidebar/
│   │   │   ├── index.ts
│   │   │   ├── MenuSidebar.module.css
│   │   │   ├── MenuSidebar.stories.tsx
│   │   │   ├── MenuSidebar.test.tsx
│   │   │   └── MenuSidebar.tsx
│   │   ├── RadioButton/
│   │   │   ├── index.ts
│   │   │   ├── RadioButton.module.css
│   │   │   ├── RadioButton.stories.tsx
│   │   │   ├── RadioButton.test.tsx
│   │   │   └── RadioButton.tsx
│   │   ├── SegmentedButtons/
│   │   │   ├── index.ts
│   │   │   ├── SegmentedButtons.module.css
│   │   │   ├── SegmentedButtons.stories.tsx
│   │   │   ├── SegmentedButtons.test.tsx
│   │   │   └── SegmentedButtons.tsx
│   │   └── Tag/
│   │       ├── index.ts
│   │       ├── Tag.module.css
│   │       ├── Tag.stories.tsx
│   │       ├── Tag.test.tsx
│   │       └── Tag.tsx
│   ├── docs/
│   │   ├── Collors.mdx
│   │   ├── Introduction.mdx
│   │   └── Typography.mdx
│   ├── generated/
│   │   ├── tokens.js
│   │   ├── tokens.json
│   │   └── variables.css
│   ├── tokens/
│   │   ├── base.json
│   │   ├── theme.json
│   │   └── tokens.json
│   ├── catalog.ts
│   ├── css-modules.d.ts
│   ├── index.ts
│   └── test-setup.ts
├── CLAUDE.md
├── config-json.OLD
├── config.mjs
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── vitest.shims.d.ts

```

---

## Pastas Importantes

### `src/`
Código-fonte principal do design system.

- **`components/`** — Componentes React (Button, Checkbox, etc.)
  - Cada componente tem sua pasta com: `index.tsx`, `styles.module.css`, `*.test.tsx`, `*.stories.tsx`
- **`tokens/`** — Tokens de design (cores, tipografia, espaçamento)
  - `base.json` — Export do Tokens Studio (formato DTCG)
- **`generated/`** — Arquivos auto-gerados pelo Style Dictionary
  - `variables.css` — CSS Variables
  - `tokens.js` — Tokens JS para uso programático
- **`docs/`** — Documentação do Storybook (Foundations)
- **`index.ts`** — Barrel export de todos os componentes

### `scripts/`
Scripts de automação.

- `generate-tests.mjs` — Gera testes via Gemini Pro 2.5
- `generate-stories.mjs` — Gera stories via Gemini Pro 2.5
- `generate-index.mjs` — Auto-gera `src/index.ts` e `src/catalog.ts`
- `copy-css.mjs` — Copia CSS para dist (Next.js)
- `sync-skill.mjs` — **Este script** — Sincroniza skill corporativa

### `.claude/skills/olist-ds-specialist/`
Skill corporativa PT-BR para Claude Code e Claude.ai.

- `SKILL.md` — Papel, escopo, fluxo de decisão
- `DESIGN.md` — Especificação Google Labs (cross-tool)
- `references/` — 11 arquivos de referência (VISAO_GERAL.md, CORES.md, etc.)

### `.storybook/`
Configuração do Storybook.

- `main.ts` — Config principal (addons, stories)
- `preview.ts` — Config de preview (decorators, globals)
- `preview-head.html` — Carregamento de fonte (Plus Jakarta Sans)
- `manager.ts` — Customização do tema

---

## Arquivos de Configuração

| Arquivo | Propósito |
|---|---|
| `package.json` | Dependências, scripts, metadados do pacote |
| `tsconfig.json` | Configuração TypeScript |
| `vite.config.ts` | Configuração Vite (build) |
| `vitest.config.ts` | Configuração Vitest (testes) |
| `config.mjs` | Configuração Style Dictionary (tokens → CSS) |
| `.npmrc` | Configuração NPM (registry GitHub Packages) |
| `playwright.config.ts` | Configuração Playwright (E2E tests) |

---

## Fluxo de Build

1. **Tokens:** `src/tokens/base.json` → Style Dictionary → `src/generated/variables.css`
2. **Componentes:** `src/components/*` → TypeScript → `dist/*.js`
3. **Skill:** `npm run sync:skill` → atualiza `COMPONENTES.md`, `MAPA_FONTES.md`
4. **Stories:** `scripts/generate-stories.mjs` → `*.stories.tsx` via Gemini
5. **Testes:** `scripts/generate-tests.mjs` → `*.test.tsx` via Gemini
6. **Publish:** `npm run release` → version bump → publish → git tags

---

**Referência cruzada:**
- `COMPONENTES.md` — lista de componentes com props
- `VISAO_GERAL.md` — mapa de navegação da skill
