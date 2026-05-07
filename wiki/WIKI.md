# Olist Design System — Wiki

**Pacote:** `@pedrohenriquevalentim/olist-ds@1.0.7`  
**Skill:** v?  
**Última atualização:** 2026-05-07  
**Gerado por:** `npm run wiki` (generate-wiki.mjs)

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Componentes](#componentes)
3. [Pipeline de Build e Release](#pipeline-de-build-e-release)
4. [Skill Claude](#skill-claude)
5. [Sistema de Ícones](#sistema-de-ícones)
6. [Configuração do Figma](#configuração-do-figma)
7. [Scripts](#scripts)
8. [Compartilhamento](#compartilhamento)
9. [Troubleshooting](#troubleshooting)
10. [Changelog](#changelog)

---

## Visão Geral

O Olist Design System é uma biblioteca de componentes React + TypeScript publicada como `@pedrohenriquevalentim/olist-ds`.

Combina componentes React, Storybook, skill para Claude, integração com Figma via MCP e sistema de ícones centralizado.

**Números atuais:**

| Métrica | Valor |
|---|---|
| Componentes | 9 |
| Ícones SVG | 550 |
| Arquivos da Skill | 0 |
| Arquivos Figma permitidos | 2 |
| Versão npm | 1.0.7 |
| Versão skill | ? |

## Componentes

### Lista Completa (9)

- `Button` — `src/components/Button/`
- `Checkbox` — `src/components/Checkbox/`
- `Icon` — `src/components/Icon/`
- `Logo` — `src/components/Logo/`
- `MenuErp` — `src/components/MenuErp/`
- `MenuSidebar` — `src/components/MenuSidebar/`
- `RadioButton` — `src/components/RadioButton/`
- `SegmentedButtons` — `src/components/SegmentedButtons/`
- `Tag` — `src/components/Tag/`

### Status de Migração de Ícones

| Componente | Status |
|---|---|
| Button | ➖ Sem ícones |
| Checkbox | ➖ Sem ícones |
| Icon | ✅ Componente central |
| Logo | ➖ Sem ícones |
| MenuErp | ➖ Sem ícones |
| MenuSidebar | ➖ Sem ícones |
| RadioButton | ➖ Sem ícones |
| SegmentedButtons | ➖ Sem ícones |
| Tag | ➖ Sem ícones |

## Pipeline de Build e Release

### Fluxo do Release

```
npm run release
    │
    ├── 1. generate:all (testes + stories via Gemini)
    ├── 2. build (compilação TypeScript)
    ├── 3. sync:skill (atualiza skill v?)
    ├── 4. npm version patch (incrementa versão)
    ├── 5. npm publish (publica no registry)
    └── 6. git push --follow-tags
```

### Pré-requisitos

- `GEMINI_API_KEY` em `.env`
- `dotenv` instalado (`npm i -D dotenv --legacy-peer-deps`)
- Git working directory limpo

### Todos os Scripts

| Comando | Executa |
|---|---|
| `npm run validate:icons` | `node scripts/validate-icon-migration.mjs` |
| `npm run sync:skill` | `node scripts/sync-skill.mjs` |
| `npm run build:tokens` | `node config.mjs` |
| `npm run build` | `npm run build:tokens && node scripts/generate-index.mjs &...` |
| `npm run dev` | `vite` |
| `npm run generate:tests` | `node scripts/generate-tests.mjs --missing` |
| `npm run generate:tests:all` | `node scripts/generate-tests.mjs --all` |
| `npm run generate:stories` | `node scripts/generate-stories.mjs --missing` |
| `npm run generate:stories:all` | `node scripts/generate-stories.mjs --all` |
| `npm run generate:icons` | `node scripts/generate-icons.mjs` |
| `npm run generate:all` | `node scripts/generate-tests.mjs --missing && node scripts...` |
| `npm run test` | `vitest` |
| `npm run test:run` | `vitest run` |
| `npm run test:coverage` | `vitest run --coverage` |
| `npm run storybook` | `storybook dev -p 6006` |
| `npm run build-storybook` | `storybook build` |
| `npm run lint` | `eslint src/` |
| `npm run prepublishOnly` | `npm run build` |
| `npm run pipeline` | `npm run build:tokens && npm run generate:all && npm run t...` |
| `npm run mcp:figma` | `figma-mcp` |
| `npm run watch:tokens` | `style-dictionary build --watch` |
| `npm run pipeline:full` | `npm run build:tokens && npm run generate:all && npm run t...` |
| `npm run pipeline:publish` | `npm run pipeline:full && npm version patch && git add . &...` |
| `npm run release` | `npm run pipeline && npm run sync:skill && npm version pat...` |
| `npm run wiki` | `node scripts/generate-wiki.mjs` |
| `npm run postrelease` | `npm run wiki` |

## Skill Claude

### Versão: v?

**Localização:** `.claude/skills/olist-ds-specialist/`

### Arquivos da Skill (0 total)

**Raiz (0):**


**Referências (0):**


### Auto-gerados vs Manuais

**Auto-gerados** (por `npm run build`): COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md (parcial)

**Manuais** (não são sobrescritos): 

### Regras Críticas

1. Ler VISAO_GERAL.md primeiro
2. Ler `.claude/figma-config.json` ANTES de usar Figma MCP
3. Usar APENAS arquivos em `allowedFiles` (2 configurados)
4. Workflow faseado no Figma (tela por tela)

## Sistema de Ícones

### Arquitetura

```
src/components/Icon/     → Componente React
src/assets/icons/svgs/   → 550 SVGs (24px, Outline, currentColor)
```

### Uso

```tsx
import { Icon } from '@pedrohenriquevalentim/olist-ds';

<Icon name="check" size={20} />
<Icon name="chevron-right" size={16} color="var(--color-blue-500)" />
```

### Tamanhos

| Contexto | Tamanho |
|---|---|
| Botão small | 16px |
| Botão medium | 20px |
| Botão large | 24px |

### Validação

```bash
npm run validate:icons
# ✅ = migração completa
# ❌ = componentes pendentes
```

## Configuração do Figma

### Arquivo: `.claude/figma-config.json`

**Status:** ✅ Configurado
**FileKey principal:** `HeyN4w209HWh8rfpTDiwyf`
**Arquivos permitidos:** 2

1. `HeyN4w209HWh8rfpTDiwyf`
2. `QJmwu6sR06xmyGAoBaXuEn`

### Como Extrair fileKey

```
URL:     https://www.figma.com/design/ABC123/nome
FileKey: ABC123
```

### Setup

```bash
cp .claude/skills/olist-ds-specialist/figma-config.example.json .claude/figma-config.json
# Editar com seus fileKeys
echo '.claude/figma-config.json' >> .gitignore
```

## Scripts

### Disponíveis em `scripts/`

- `copy-css.mjs`
- `generate-icons.mjs`
- `generate-index.mjs`
- `generate-stories.mjs`
- `generate-tests.mjs`
- `generate-wiki.mjs`
- `sync-skill.mjs`
- `validate-icon-migration.mjs`

### Principais

| Script | Propósito | Quando Usar |
|---|---|---|
| `sync-skill.mjs` | Atualiza skill com código | Após mudar componentes |
| `validate-icon-migration.mjs` | Verifica URLs do Figma | Antes de release |
| `extract-icons-from-figma.mjs` | Exporta ícones do Figma | Ao adicionar ícones |
| `generate-wiki.mjs` | Gera este Wiki | Automaticamente no release |

## Compartilhamento

### O Que Compactar

```bash
cd .claude/skills
zip -r olist-ds-specialist-v?.zip olist-ds-specialist-v2/
```

### O Que NÃO Vai

- `.claude/figma-config.json` (específico do projeto)
- `.claude/settings.local.json`
- `.claude/worktrees/`
- `.env`

### Setup do Destinatário

```bash
# 1. Extrair e copiar skill
unzip olist-ds-specialist-v?.zip
cp -r olist-ds-specialist-v2/ .claude/skills/olist-ds-specialist/

# 2. Configurar Figma
cp .claude/skills/olist-ds-specialist/figma-config.example.json .claude/figma-config.json
# Editar com fileKeys próprios

# 3. Gitignore
echo '.claude/figma-config.json' >> .gitignore
```

## Troubleshooting

### GEMINI_API_KEY não definida

```bash
echo 'GEMINI_API_KEY=sua-chave' > .env
# Adicionar "import 'dotenv/config';" no topo dos scripts generate-*.mjs
```

### Git working directory not clean

```bash
git add . && git commit -m "chore: prepare release" && npm run release
```

### npm install ERESOLVE (Storybook v8 vs v10)

```bash
npm install --save-dev PACOTE --legacy-peer-deps
```

### Ícones não aparecem

1. SVGs existem em `src/assets/icons/svgs/`?
2. SVGs usam `currentColor`?
3. SVGs têm `viewBox` definido?

### Claude não respeita figma-config

1. `.claude/figma-config.json` existe?
2. `allowedFiles` tem fileKeys?
3. Skill v2.1 instalada?

## Changelog

### v2.1 (2026-05-07)
- figma-config.example.json na skill (compartilhável)
- FIGMA_CONFIG.md como 12º arquivo de referência
- Instrução para ler figma-config.json antes do Figma MCP
- sync-skill.mjs v2.1
- generate-wiki.mjs criado

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md (10 papéis de texto)
- SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout)
- Workflow faseado no Figma
- Sistema de ícones centralizado
- sync-skill.mjs para auto-geração
- validate-icon-migration.mjs

### v1.0
- Versão inicial da skill
- 8 arquivos de referência

---

*Gerado automaticamente em 2026-05-07 por `generate-wiki.mjs`. Não edite manualmente.*
