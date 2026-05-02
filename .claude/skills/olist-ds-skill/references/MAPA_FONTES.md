# Mapa de Fontes (Source Map)

> Auto-gerado por sync-skill.mjs — NÃO edite manualmente.
> Última atualização: 2026-05-02

## Fontes de Tokens

| O quê | Caminho do arquivo |
|---|---|
| Tokens brutos do Figma | `src/tokens/base.json` |
| Variáveis CSS | `src/generated/variables.css` |
| Valores em JS | `src/generated/tokens.js` |
| Configuração Style Dictionary | `config.mjs` |

## Arquivos dos Componentes

| Componente | Código | Estilos | Testes | Stories |
|---|---|---|---|---|
| Button | `src/components/Button/Button.tsx` | `Button.module.css` | `Button.test.tsx` | `Button.stories.tsx` |
| Checkbox | `src/components/Checkbox/Checkbox.tsx` | `Checkbox.module.css` | `Checkbox.test.tsx` | `Checkbox.stories.tsx` |
| Logo | `src/components/Logo/Logo.tsx` | `Logo.module.css` | `Logo.test.tsx` | `Logo.stories.tsx` |
| MenuErp | `src/components/MenuErp/MenuErp.tsx` | `MenuErp.module.css` | `MenuErp.test.tsx` | `MenuErp.stories.tsx` |
| MenuSidebar | `src/components/MenuSidebar/MenuSidebar.tsx` | `MenuSidebar.module.css` | `MenuSidebar.test.tsx` | `MenuSidebar.stories.tsx` |
| RadioButton | `src/components/RadioButton/RadioButton.tsx` | `RadioButton.module.css` | `RadioButton.test.tsx` | `RadioButton.stories.tsx` |
| SegmentedButtons | `src/components/SegmentedButtons/SegmentedButtons.tsx` | `SegmentedButtons.module.css` | `SegmentedButtons.test.tsx` | `SegmentedButtons.stories.tsx` |
| Tag | `src/components/Tag/Tag.tsx` | `Tag.module.css` | `Tag.test.tsx` | `Tag.stories.tsx` |

## Arquivos Auto-gerados

| Arquivo | Gerado por |
|---|---|
| `src/index.ts` | `scripts/generate-index.mjs` |
| `src/catalog.ts` | `scripts/generate-index.mjs` |
| `src/generated/variables.css` | `config.mjs` |
| `src/generated/tokens.js` | `config.mjs` |
| `.claude/skills/.../COMPONENTES.md` | `scripts/sync-skill.mjs` |
| `.claude/skills/.../MAPA_FONTES.md` | `scripts/sync-skill.mjs` |

## Arquivos de Configuração

| Arquivo | Propósito |
|---|---|
| `config.mjs` | Style Dictionary + transforms customizados |
| `tsconfig.json` | TypeScript (rootDir: ./src, outDir: ./dist) |
| `vite.config.ts` | Vite + Vitest |
| `package.json` | Scripts, dependências, config NPM |
| `CLAUDE.md` | Instruções para o Claude Code |
| `DESIGN.md` | Especificação Google Labs |

## Scripts de Automação

| Script | Comando | O que faz |
|---|---|---|
| `generate-tests.mjs` | `npm run generate:tests` | Gemini → .test.tsx |
| `generate-stories.mjs` | `npm run generate:stories` | Gemini → .stories.tsx |
| `generate-index.mjs` | durante `npm run build` | Gera index.ts + catalog.ts |
| `copy-css.mjs` | durante `npm run build` | Copia .module.css para dist/ |
| `sync-skill.mjs` | durante `npm run build` | Atualiza esta skill |

## Como encontrar evidência para uma decisão de design

1. Verificar se um componente já trata o caso → `src/components/`
2. Verificar se o token existe → `src/generated/variables.css`
3. Verificar se existe padrão → olhar CSS dos componentes existentes
4. Se não existe evidência → criar seguindo COMPONENTES.md
