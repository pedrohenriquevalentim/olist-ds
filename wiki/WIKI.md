# Olist Design System — Wiki

**Pacote:** `@pedrohenriquevalentim/olist-ds@1.0.14`  
**Skill:** v3.0  
**Última atualização:** 2026-06-04  
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
| Arquivos da Skill | 19 |
| Arquivos Figma permitidos | 5 |
| Versão npm | 1.0.14 |
| Versão skill | 3.0 |

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
    ├── 3. sync:skill (atualiza skill v3.0)
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
| `npm run build:tokens` | `node scripts/sync-tokens.mjs` |
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

### Versão: v3.0

**Localização:** `.claude/skills/olist-ds-specialist-v2/`

### Arquivos da Skill (19 total)

**Raiz (6):**
- `CHANGELOG.md`
- `README.md`
- `SETUP.md`
- `SKILL.md`
- `component-registry.json`
- `figma-config.json`

**Referências (13):**
- `CHECKLIST_REVISAO.md`
- `COMPONENTES.md`
- `CORES.md`
- `ESPACAMENTO.md`
- `FIGMA_CONFIG.md`
- `GLOSSARIO_PAPEIS_TEXTO.md`
- `MAPA_FONTES.md`
- `PADROES.md`
- `SDD_AVANCADO.md`
- `SDD_PARA_TELA.md`
- `TEMPLATES_PRODUTO.md`
- `TIPOGRAFIA.md`
- `VISAO_GERAL.md`

### Auto-gerados vs Manuais

**Auto-gerados** (por `npm run build`): COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md (parcial)

**Manuais** (não são sobrescritos): CHECKLIST_REVISAO.md, CORES.md, ESPACAMENTO.md, FIGMA_CONFIG.md, GLOSSARIO_PAPEIS_TEXTO.md, PADROES.md, SDD_AVANCADO.md, SDD_PARA_TELA.md, TEMPLATES_PRODUTO.md, TIPOGRAFIA.md, VISAO_GERAL.md

### Regras Críticas v3.0

### ✅ Sempre Faça:

1. **Leia `VISAO_GERAL.md` primeiro** — é o mapa de navegação
2. **Leia `figma-config.json` antes de usar Figma MCP:**
   - Use `searchPriority` como `includeLibraryKeys` em todo `search_design_system`
   - Respeite a ordem: AI Components > ERP components > ERP recursos > ERP style guide > [DS] components web
   - Ignore resultados de `blockedLibraries`
3. **Consulte `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos**
   - Se o SDD diz "título da página" → use **Heading**
   - Se o SDD diz "mensagem de erro" → use **Error**
4. **Leia `SDD_AVANCADO.md` se o SDD tiver:**
   - Requisitos Não Funcionais (RNF), DACI, Métricas, Rollout, Observabilidade
5. **Use os passos 1-10 de `SDD_PARA_TELA.md`** ao traduzir SDDs completos
6. **No Figma, sempre use workflow faseado:**
   - Liste todas as telas ANTES de criar → aguarde validação
   - Crie tela por tela com `use_figma`, aguardando feedback a cada entrega
7. **Sempre defina `layoutSizing` APÓS `appendChild`** (regra crítica da Figma Plugin API)
8. **Valores válidos de `counterAxisAlignItems`:** `MIN` `MAX` `CENTER` `BASELINE` (sem STRETCH, sem END)

### ❌ Nunca Faça:

1. **Buscar componentes sem filtrar por `includeLibraryKeys`**
2. **Usar libraries de `blockedLibraries`** mesmo que apareçam em buscas
3. **Construir elementos UI do zero** quando o componente DS existe (Button, Tag, Menu ERP, etc.)
4. **Inventar nomes de papéis de texto** fora de `GLOSSARIO_PAPEIS_TEXTO.md`
5. **Ignorar RNFs** — eles afetam UI (skeleton loaders, permissões, etc.)
6. **Usar o plugin Figma intermediário** — o canal de entrega é sempre `use_figma` direto
7. **Criar todas as telas de uma vez** — sempre use workflow faseado (tela por tela)
8. **Hardcodar cores, fontes ou espaçamentos** — sempre usar tokens DS

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
**Libraries configuradas:** 5
**searchPriority entries:** 5

### Libraries por Prioridade

| Prioridade | Library | Descrição |
|---|---|---|
| 1 | **AI Components** | Library master — Menu ERP atualizado, Button, ícones rebrand 24 |
| 2 | **ERP components** | Componentes principais do ERP Tiny (button common, menu do erp, tag card, inputs, etc) |
| 3 | **ERP recursos** | Recursos complementares do ERP — ilustrações, padrões específicos de produto |
| 4 | **ERP style guide** | Style guide do ERP — tipografia, espaçamentos, tokens visuais, paleta |
| 5 | **[design system] components web** | Componentes web base do DS |

### Blocked Libraries

- **design system (base)** — Base genérica supersedida pela AI Components e ERP components. Ignorar mesmo se aparecer em buscas sem filtro.
- **Design System - Fondations, Components & Icons Rebrand (TO-BE)** — Arquivo TO-BE descontinuado como referência de busca. Conteúdo migrado para AI Components.
- **Design System - Components Web (AS-IS)** — Arquivo AS-IS descontinuado como referência direta. Substituído pela library [design system] components web via libraryKey.

### Como Extrair fileKey

```
URL:     https://www.figma.com/design/ABC123/nome
FileKey: ABC123
```

### Setup

```bash
cp .claude/skills/olist-ds-specialist-v2/figma-config.example.json .claude/figma-config.json
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
- `sync-tokens.mjs`
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
zip -r olist-ds-specialist-v3.0.zip olist-ds-specialist-v2/
```

### O Que NÃO Vai

- `.claude/figma-config.json` (específico do projeto)
- `.claude/settings.local.json`
- `.claude/worktrees/`
- `.env`

### Setup do Destinatário

```bash
# 1. Extrair e copiar skill
unzip olist-ds-specialist-v3.0.zip
cp -r olist-ds-specialist-v2/ .claude/skills/olist-ds-specialist-v2/

# 2. Configurar Figma
cp .claude/skills/olist-ds-specialist-v2/figma-config.example.json .claude/figma-config.json
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
2. `searchPriority` tem os libraryKeys corretos?
3. Skill v3.0 instalada?
4. O prompt inclui instrução para ler `figma-config.json` antes do Figma MCP?

## Changelog

## v3.0 (2026-06-03)
- Remoção do workflow de plugin JSON intermediário — `use_figma` como canal único
- **AI Components** como library master com preferência absoluta sobre ERP components
- `libraryKeys` + `searchPriority` + `blockedLibraries` como fonte da verdade no figma-config.json
- TEMPLATES_PRODUTO.md adicionado (zonas de layout por produto: ERP, Envios, Hub, Conta Digital)
- Regras da Figma Plugin API documentadas (`layoutSizing`, `counterAxisAlignItems`, fonts, etc.)
- Caso de uso 5: componente não existe no inventário → construir com primitivos + documentar
- Caso de uso 6: sincronizar inventário de componentes

## v2.1 (2026-05-07)
- figma-config.example.json na skill (compartilhável)
- FIGMA_CONFIG.md como 12º arquivo de referência
- Instrução para ler figma-config.json antes do Figma MCP
- sync-skill.mjs v2.1
- generate-wiki.mjs criado

## v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md (10 papéis de texto)
- SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout)
- Workflow faseado no Figma
- Sistema de ícones centralizado
- sync-skill.mjs para auto-geração
- validate-icon-migration.mjs

## v1.0
- Versão inicial da skill
- 8 arquivos de referência

---

*Gerado automaticamente em 2026-06-04 por `generate-wiki.mjs`. Não edite manualmente.*
