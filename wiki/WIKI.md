# Olist Design System — Wiki

**Pacote:** `@pedrohenriquevalentim/olist-ds@1.0.73`  
**Skill:** v3.18  
**Última atualização:** 2026-08-29  
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
| Componentes | 14 |
| Ícones SVG | 550 |
| Arquivos da Skill | 23 |
| Arquivos Figma permitidos | 1 |
| Versão npm | 1.0.73 |
| Versão skill | 3.18 |

## Componentes

### Lista Completa (14)

- `Button` — `src/components/Button/`
- `ButtonIcon` — `src/components/ButtonIcon/`
- `Card` — `src/components/Card/`
- `Checkbox` — `src/components/Checkbox/`
- `Chip` — `src/components/Chip/`
- `Icon` — `src/components/Icon/`
- `InputPassword` — `src/components/InputPassword/`
- `InputSearch` — `src/components/InputSearch/`
- `InputSelect` — `src/components/InputSelect/`
- `InputText` — `src/components/InputText/`
- `ItensMenuGlobal` — `src/components/ItensMenuGlobal/`
- `Logo` — `src/components/Logo/`
- `MenuGlobal` — `src/components/MenuGlobal/`
- `ProdutosOlistIcons` — `src/components/ProdutosOlistIcons/`

### Status de Migração de Ícones

| Componente | Status |
|---|---|
| Button | ➖ Sem ícones |
| ButtonIcon | ➖ Sem ícones |
| Card | ➖ Sem ícones |
| Checkbox | ➖ Sem ícones |
| Chip | ➖ Sem ícones |
| Icon | ✅ Componente central |
| InputPassword | ➖ Sem ícones |
| InputSearch | ➖ Sem ícones |
| InputSelect | ➖ Sem ícones |
| InputText | ➖ Sem ícones |
| ItensMenuGlobal | ➖ Sem ícones |
| Logo | ➖ Sem ícones |
| MenuGlobal | ➖ Sem ícones |
| ProdutosOlistIcons | ➖ Sem ícones |

## Pipeline de Build e Release

### Fluxo do Release

```
npm run release
    │
    ├── 1. Valida branch main sem mudanças pendentes
    ├── 2. npm run pipeline (sanity check: tokens + tests + storybook)
    ├── 3. sync:skill + sync:skill-meta (atualiza docs e wiki)
    ├── 4. Cria branch release/<pacote>-v<versão>
    ├── 5. npm version patch|minor|major (bump)
    ├── 6. git push branch + abre PR automaticamente
    └── 7. CI publica no GitHub Packages após o merge do PR
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
| `npm run build:tokens` | `npm run build --workspace=packages/design-tokens && node ...` |
| `npm run build:tokens:sd` | `npm run build:sd --workspace=packages/design-tokens` |
| `npm run clean` | `rm -rf dist` |
| `npm run build` | `npm run clean && npm run build:tokens && node scripts/gen...` |
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
| `npm run pipeline` | `npm run build:tokens && npm run generate:all && npm run l...` |
| `npm run version:skill` | `node scripts/version-skill.mjs` |
| `npm run release` | `node scripts/release.mjs` |
| `npm run mcp:figma` | `figma-mcp` |
| `npm run sync:skill-meta` | `node scripts/sync-skill-meta.mjs` |
| `npm run wiki` | `node scripts/generate-wiki.mjs` |
| `npm run postrelease` | `npm run wiki` |
| `npm run chromatic` | `npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN` |

## Skill Claude

### Versão: v3.18

**Localização:** `.claude/skills/olist-ds-specialist/`

### Arquivos da Skill (23 total)

**Raiz (6):**
- `CHANGELOG.md`
- `README.md`
- `SETUP.md`
- `SKILL.md`
- `component-registry.json`
- `figma-config.json`

**Referências (17):**
- `CHECKLIST_REVISAO.md`
- `COMPONENTES.md`
- `CORES.md`
- `ESPACAMENTO.md`
- `FIGMA_CONFIG.md`
- `GLOSSARIO_PAPEIS_TEXTO.md`
- `GOVERNANCA_TOKENS.md`
- `HARNEES_TELAS.md`
- `MAPA_FONTES.md`
- `PADROES.md`
- `SDD_AVANCADO.md`
- `SDD_PARA_TELA.md`
- `TEMPLATES_PRODUTO.md`
- `TIPOGRAFIA.md`
- `TOKEN_CATALOG.md`
- `UX_WRITING.md`
- `VISAO_GERAL.md`

### Auto-gerados vs Manuais

**Auto-gerados** (por `npm run build`): COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md (parcial)

**Manuais** (não são sobrescritos): CHECKLIST_REVISAO.md, CORES.md, ESPACAMENTO.md, FIGMA_CONFIG.md, GLOSSARIO_PAPEIS_TEXTO.md, GOVERNANCA_TOKENS.md, HARNEES_TELAS.md, PADROES.md, SDD_AVANCADO.md, SDD_PARA_TELA.md, TEMPLATES_PRODUTO.md, TIPOGRAFIA.md, TOKEN_CATALOG.md, UX_WRITING.md, VISAO_GERAL.md

### Como Usar — Slash Commands

| Comando | Para quem | O que faz |
|---|---|---|
| `/ds-tela <sdd-ou-prd>` | Dev de BU | gera tela React a partir de SDD/PRD usando componentes DS |
| `/ds-figma <sdd-ou-prd>` | Designer/Dev | cria telas no Figma com instâncias reais do DS |
| `/ds-construir <intenção-ou-figma-url>` | Mantenedor DS | cria ou evolui componente no Figma com arquitetura correta de tokens |
| `/ds-implementar <figma-url>` | Dev de BU | converte tela Figma em JSX tipado usando componentes DS |
| `/ds-handoff <figma-url(s)>` | Qualquer dev | gera manifesto Markdown de componentes DS usados numa jornada, para anexar em PR |
| `/ds-componente <figma-url>` | Mantenedor DS | gera novo componente DS completo (6 arquivos + docs Figma) |
| `/ds-revisar + código ou screenshot` | Qualquer dev | revisa tela/código contra padrões do DS |
| `/ds-sync` | Mantenedor DS | sincroniza inventário de componentes das libraries Figma |

**No Claude Code — exemplos:**
```
/ds-tela [COLAR O SDD]
/ds-figma [COLAR O SDD]
/ds-construir https://www.figma.com/design/XXXX/YYYY?node-id=123:456
/ds-implementar https://www.figma.com/design/XXXX/YYYY?node-id=123:456
```

**Ou invocar por descrição (detecção automática):**
```
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR O SDD]
```

**No Claude.ai (sem terminal):**
1. Settings → Connectors → Figma → Connect
2. Customize → Skills → Upload → selecionar pasta da skill
3. Iniciar conversa e usar um dos slash commands acima

### Regras Críticas v3.18

### ✅ Sempre Faça:

1. **Leia `VISAO_GERAL.md` primeiro** — é o mapa de navegação
2. **Leia `decisions/INDEX.md` logo em seguida** — contém decisões de produto ativas que têm precedência sobre defaults. Leia os arquivos específicos apontados pelo INDEX que se aplicam à tarefa atual.
3. **Leia `figma-config.json` antes de usar Figma MCP:**
   - Use `searchPriority` como `includeLibraryKeys` em todo `search_design_system`
   - `searchPriority` tem apenas `design system (base)` — única library de referência desde 2026-07-03 (hierarquia anterior de AI Components/ERP components/etc. foi descontinuada, dados preservados em `blockedLibraries`)
   - Ignore resultados de `blockedLibraries`
4. **Leia `HARNEES_TELAS.md` antes de criar qualquer frame no Figma:**
   - Execute o gate pré-construção (Seção 1) — só avance com todos os itens marcados
   - Verifique limites por tela (Seção 2) antes de instanciar componentes
   - Identifique o padrão da Zona D (Seção 3) antes de montar o conteúdo
   - Reporte conflitos com o harness antes de criar, nunca depois
5. **Consulte `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos**
   - Se o SDD diz "título da página" → use **Heading**
   - Se o SDD diz "mensagem de erro" → use **Error**
6. **Consulte `UX_WRITING.md` ao criar qualquer texto na UI:**
   - Execute o protocolo de triagem (componente → contexto → objetivo)
   - Valide contra Os 4 Pilares antes de finalizar qualquer copy
   - Use a tabela de mapeamento SDD → Tipo de Texto para traduzir requisitos em copy
7. **Leia `SDD_AVANCADO.md` se o SDD tiver:**
   - Requisitos Não Funcionais (RNF), DACI, Métricas, Rollout, Observabilidade
8. **Use os passos 1-10 de `SDD_PARA_TELA.md`** ao traduzir SDDs completos
9. **No Figma, sempre use workflow faseado:**
   - Liste todas as telas ANTES de criar → aguarde validação
   - Crie tela por tela com `use_figma`, aguardando feedback a cada entrega
10. **Sempre defina `layoutSizing` APÓS `appendChild`** (regra crítica da Figma Plugin API)
11. **Valores válidos de `counterAxisAlignItems`:** `MIN` `MAX` `CENTER` `BASELINE` (sem STRETCH, sem END)
12. **Consulte `GOVERNANCA_TOKENS.md` ao escolher entre tokens semânticos parecidos** (mesma cor final, famílias/estados diferentes) — não escolha só pelo valor resolvido
13. **No Caso 7, gere e obtenha aprovação do `NomeComponente.metadata.json` ANTES de gerar código ou docs** — é a fonte mais estruturada sobre o componente; documentar antes dele é documentar por suposição

### ❌ Nunca Faça:

1. **Buscar componentes sem filtrar por `includeLibraryKeys`**
2. **Usar libraries de `blockedLibraries`** mesmo que apareçam em buscas
3. **Construir elementos UI do zero** quando o componente DS existe (Button, Tag, Menu Global, etc.)
4. **Inventar nomes de papéis de texto** fora de `GLOSSARIO_PAPEIS_TEXTO.md`
5. **Ignorar RNFs** — eles afetam UI (skeleton loaders, permissões, etc.)
6. **Usar o plugin Figma intermediário** — o canal de entrega é sempre `use_figma` direto
7. **Criar todas as telas de uma vez** — sempre use workflow faseado (tela por tela)
8. **Hardcodar cores, fontes ou espaçamentos** — sempre usar tokens DS
9. **Escolher token semântico só pelo valor final resolvido** — respeite `doNotUseWhen` de `GOVERNANCA_TOKENS.md` mesmo quando duas famílias resolvem para a mesma cor hoje
10. **Gerar código ou docs do Caso 7 sem antes exibir o `metadata.json` completo e obter aprovação explícita do usuário** — sem esse gate, o agente preenche lacunas de intenção (useWhen/doNotUseWhen) por suposição, e o erro se propaga para código e Figma em escala
11. **Aplicar `clipsContent: true` em frames de zona** — todas as zonas ERP devem ter `clipsContent: false`
12. **Aplicar `strokes` diretamente em frames de zona** — `strokes: []` é obrigatório em todas as zonas; bordas visuais entre zonas vêm do design, não de strokes de frame
13. **Usar botão `size=big` ou `size=medium` nas Zonas B e C** — `size=small` é o único tamanho permitido nessas zonas
14. **Exibir o label do `input search` na Zona C** — o layer `"label"` deve ter `visible = false` após `appendChild`
15. **Instanciar `menu erp` com `stage=*`** — o componente "Menu ERP" foi descontinuado em 2026-07-03; usar exclusivamente `menu-global` com `Produto=ERP` na Zona A
16. **Montar tabelas com frames primitivos ou sub-componentes isolados** (`head`, `simple cell`) — usar `TableCellExtended` (`8ba1fe2c9d32e56a058c3946e17142223784c557`) como unidade construtiva obrigatória na Zona E
17. **Omitir `padding: 8px` no frame raiz ERP** — o frame raiz (`1366×768`) deve ter `padding: 8px` em todos os lados e `gap: 8px` entre Zona A e Container
18. **Usar `#fcfbf8` como `fills` do frame raiz** — o frame raiz tem `fills: #F1F0E8`; `#fcfbf8` é o fundo do Container (Zonas B–F)

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
**Libraries configuradas:** 1
**searchPriority entries:** 1

### Libraries por Prioridade

| Prioridade | Library | Descrição |
|---|---|---|
| 1 | **design system (base)** | Adotada em 2026-07-03 como única referência para construção de telas (decisão permanente, substitui a hierarquia anterior de 6 libraries) |

### Blocked Libraries

- **Design System - Components Web (AS-IS)** — Arquivo AS-IS descontinuado como referência direta. Substituído pela library [design system] components web via libraryKey.
- **AI Components** — Bloqueada permanentemente desde 2026-07-03 — design system (base) adotada como única referência para construção de telas. Era a library master antes dessa decisão. Dados preservados (fileKey/libraryKey) para eventual reversão futura.
- **ERP components** — Bloqueada permanentemente desde 2026-07-03 — ver motivo em 'AI Components' acima.
- **ERP recursos** — Bloqueada permanentemente desde 2026-07-03 — ver motivo em 'AI Components' acima.
- **ERP style guide** — Bloqueada permanentemente desde 2026-07-03 — ver motivo em 'AI Components' acima.
- **[design system] components web** — Bloqueada permanentemente desde 2026-07-03 — ver motivo em 'AI Components' acima.

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
- `copy-tokens.mjs`
- `generate-icons.mjs`
- `generate-index.mjs`
- `generate-stories.mjs`
- `generate-tests.mjs`
- `generate-wiki.mjs`
- `release.mjs`
- `sync-skill-meta.mjs`
- `sync-skill.mjs`
- `validate-icon-migration.mjs`
- `version-skill.mjs`

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
zip -r olist-ds-specialist.zip olist-ds-specialist/
```

### O Que NÃO Vai

- `.claude/figma-config.json` (específico do projeto)
- `.claude/settings.local.json`
- `.claude/worktrees/`
- `.env`

### Setup do Destinatário

```bash
# 1. Extrair e copiar skill
unzip olist-ds-specialist.zip
cp -r olist-ds-specialist/ .claude/skills/olist-ds-specialist/

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
2. `searchPriority` tem os libraryKeys corretos?
3. Skill v3.18 instalada?
4. O prompt inclui instrução para ler `figma-config.json` antes do Figma MCP?

## Changelog

## v3.19 (2026-08-29)

### Convenções de layout ERP — definidas e registradas

**Arquivos modificados:** `references/TEMPLATES_PRODUTO.md`, `component-registry.json`, `SKILL.md`

#### Added
- **Frame raiz:** `padding 8px` em todos os lados + `fills #F1F0E8` + `gap 8px` entre Zona A e Container
- **Container (Zonas B–F):** `cornerRadius 12px`
- **Zona B:** `topLeftRadius 12` · `topRightRadius 12` · bottom 0
- **Zona F:** `bottomLeftRadius 12` · `bottomRightRadius 12` · top 0
- **`TableCellExtended`** adicionado ao `component-registry.json` — componentKey `8ba1fe2c9d32e56a058c3946e17142223784c557`, variantes `role × type`, props `header text#10193:5` e `cell text#10193:6`, dimensões confirmadas, usage pattern documentado
- **Regras 11–18** adicionadas ao "Nunca Faça" do `SKILL.md`: clipsContent em zonas (11), strokes em zonas (12), button big/medium em B e C (13), label visível no input search (14), menu erp stage=* (15), tabela com primitivos (16), omitir padding 8px (17), #fcfbf8 no frame raiz (18)

#### Changed
- **`menu-global`** no registry: `note` e `erpLayoutRule` atualizados com regra `Produto=ERP` obrigatória na Zona A e resize correto (304×752px)
- **`Table`** no registry: `note` reescrita — proíbe instanciação direta; redireciona para `TableCellExtended`; marca `head` e `simple cell` como sub-peças internas
- **`TEMPLATES_PRODUTO.md`:** tabela de Zonas ERP, bloco "Regras ERP" e JSON de Estrutura de Layout atualizados com padding, gap, fills, cornerRadius por zona e TableCellExtended
- **Botões nas Zonas B e C:** `size=small` definido como padrão obrigatório
- **Zona E sem Zona F:** recebe `bottomLeftRadius: 12` e `bottomRightRadius: 12`

#### Fixed
- Referência a `"menu erp"` removida do JSON de Estrutura de Layout → substituída por `"menu-global"` com componentKey e `Produto=ERP`
- `clipsContent: false` e `strokes: []` definidos como obrigatórios em todas as zonas (explicitados no checklist)

---

## v3.18 (2026-08-25)
- Arquivos da skill modificados: README.md, SKILL.md, component-registry.json, decisions/INDEX.md, decisions/ux-design/COMPONENTES_POR_ZONA.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, figma-config.json, references/COMPONENTES.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/TEMPLATES_PRODUTO.md

## v3.17 (2026-08-23)
- **TOKEN_CATALOG.md criado:** catálogo completo de 1.194 tokens CSS com valores e Figma RGB 0–1 para uso direto na Plugin API. Deve ser regenerado com `npm run sync:skill` quando o CSS mudar.
- **component-registry.json:** 55 de 64 componentes com `variantsConfirmed: true` (antes: 17). Todas as propriedades Figma confirmadas via `get_metadata` com 25 URLs de página. Dois novos componentes adicionados: Drawer e Modal (WIP).
- **CORES.md reescrito:** nomes primitivos corrigidos (`--color-gray-gray-0`, não `--color-gray-0`); tokens semânticos (`--color-background-*`, `--color-text-*`, `--color-border-*`, `--color-shape-*`) adicionados como seção principal; nova seção "Uso em Figma Plugin API" com sintaxe correta de fills (RGB 0–1).
- **TOKENS.md (decisions/technical) reescrito:** hierarquia 3 camadas (Primitivo → Semântico → Componente), tabela "com repo vs sem repo", nomes corretos vs incorretos.
- **Correções de token em 6 arquivos:** `--font-weight-semibold` → `--font-weight-600` (alias não existe no CSS); cores primitivas corrigidas para nomes reais.
- **HARNEES_TELAS.md:** sintaxe Figma Plugin API documentada para fills, strokes e loadFontAsync.

## v3.16 (2026-08-22)
- **Caso 5 (`/ds-construir`):** novo caso de uso e slash command para criar ou evoluir componentes no Figma com arquitetura correta de tokens. Fluxo token-first: auditoria via `get_variable_defs`, decision tree base→theme→component, Gate 1 (plano de tokens para aprovação), construção com Auto Layout e bind de variáveis, Gate 2 (screenshot). Suporta modo NOVO (intenção textual) e modo EVOLUÇÃO (URL Figma). Termina no Figma — não gera código React.
- Pasta `.claude/skills/ds-construir/` criada com `SKILL.md` wrapper delegando ao Caso 5
- Caso 4 atualizado: nota de fallback no passo 9 referencia `/ds-construir` quando componente não existe no inventário
- Fluxo de Decisão e tabela de Slash Commands atualizados com `/ds-construir`

## v3.15 (2026-08-19)
- **Caso 7 (`/ds-componente`):** passa a gerar `NomeComponente.metadata.json` como sexto arquivo obrigatório (purpose/useWhen/doNotUseWhen/pairsWith/note/variants/states/slots/tokens/figma), com gate obrigatório de aprovação do usuário antes de código e docs
- Campo `componentKey` adicionado ao bloco `figma` do schema de metadata (identificador do componente publicado na library, diferente de `fileKey`/`nodeId`)
- `CLAUDE.md` raiz atualizado: seção "Estrutura de Cada Componente" e seção 9 "Saída Esperada"
- Regras críticas 13 ("Sempre Faça") e 10 ("Nunca Faça") adicionadas
- 10 componentes retroativos atualizados com `fileKey`/`componentKey` reais de `component-registry.json`

## v3.14 (2026-07-20)
- `/ds-sync`: inventário de componentes ressincronizado com a `design system (base)` — famílias Tabela, Gráfico (nova categoria "Data Visualization"), `Paginator`, `Badge`, `Sort`, `Reorder`, `Loading`, `Overlay`, `Cookie`, `Logout`, `Profile`, `Dashboard`, `List`, `Task List`, `Avatar`, `Card`
- "Text Area" renomeado para "Input Paragraph" (mesmo componente, nome real confirmado no Figma)
- Gap do `Paginator`/`Overlay` marcado como resolvido em `GOVERNANCA_TOKENS.md` — componentes já existem na library

## v3.13 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.12 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.11 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.10 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.9 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.8 (2026-06-29)
- **Slash Commands:** 6 skills finas criadas em `.claude/skills/ds-*/` — `/ds-implementar`, `/ds-tela`, `/ds-figma`, `/ds-componente`, `/ds-revisar`, `/ds-sync` — cada uma delega ao caso correspondente da skill principal
- **Caso 8 (`/ds-implementar`):** novo fluxo para devs de BU converterem telas Figma em JSX tipado usando componentes DS, sem precisar conhecer o inventário de memória
- **Fluxo de Decisão:** roteamento explícito por slash command adicionado antes da detecção automática de intenção
- **`generate-wiki.mjs`:** seção "Como Usar" atualizada com tabela de slash commands
- **`package.json`:** `ship` corrigido para incluir `.storybook/`, `README.md` e `package.json` no `git add` _(npm run ship foi removido posteriormente; fluxo migrado para npm run release)_

## v3.7 (2026-06-25)
- **Fluxo unificado Figma → código + docs:** Caso 7 adicionado ao `SKILL.md` — implementação de componente a partir de URL do Figma executa em paralelo geração de código (5 arquivos — agora 6 desde v3.15, que adicionou metadata.json) e geração de frame de docs no Figma (demo · props · anatomia · acessibilidade)
- `CLAUDE.md` atualizado: passo 10 na seção "Geração de Componentes" e nota de redirecionamento para `olist-ds-specialist` Caso 7
- `decisions/technical/COMPONENTES_REACT.md` atualizado: seção "Documentação no Figma" adicionada
- Ramo "Criar componente" no Fluxo de Decisão expandido para cobrir o fluxo unificado

## v3.6 (2026-06-23)
- Arquivos da skill modificados: SKILL.md, CHANGELOG.md, README.md, SETUP.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md
- Outros arquivos: claude/skills/olist-ds-specialist/CHANGELOG.md

## v3.5 (2026-06-23)
- Arquivos da skill modificados: CHANGELOG.md, README.md, SETUP.md, SKILL.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md

## v3.4 (2026-06-23)
- Arquivos da skill modificados: 

## v3.3 (2026-06-23)
- Arquivos da skill modificados: README.md
- Decisões de design atualizadas: decisions/CHANGELOG.md
- Outros arquivos: claude/decisions/INDEX.md

## v3.2 (2026-06-15)
- **UX Writing:** `UX_WRITING.md` adicionado como referência de copy e tom de voz (fonte: skill CX Writing v2.0)
- Novo ramo no Fluxo de Decisão para "Criar ou revisar textos de UI"
- Seção 10 adicionada ao `CHECKLIST_REVISAO.md` com 18 itens de revisão de UX Writing
- Regra crítica 5 no `SKILL.md`: consultar `UX_WRITING.md` ao criar qualquer texto na UI
- `VISAO_GERAL.md` atualizado: 15 referências, nova entrada `UX_WRITING.md`, novo bloco de leitura para copy/UX Writing
- Protocolo de triagem obrigatório: componente → contexto → objetivo antes de qualquer copy
- 4 Pilares de Conteúdo como critério de validação (Conciso, Claro, Significativo, Dialógico)
- 12 tipos de texto mapeados com regras DO/DON'T, limites de caracteres e tokens visuais
- Diretrizes B2B (lojista) vs. B2C (consumidor) com linguagem e tom distintos
- Iniciativa de abrasileiramento documentada (sem hífen, termos técnicos contextualizados, sem termos internos externamente)
- Nomenclatura de produtos Olist (primeira menção + menções posteriores)
- Mapeamento SDD → tipo de texto para tradução de requisitos em copy
- `SKILL.md` atualizado para v3.2

## v3.1 (2026-06-05)
- **Harness:** `HARNEES_TELAS.md` adicionado como gate pré-construção obrigatório no fluxo Figma
- Gate com 6 itens binários — o Claude só avança para criação de frames se todos forem marcados
- Restrições de zona por template (ERP e Envios/Hub/Conta Digital): colunas "Pode conter" e "Não pode conter" para cada zona A–E
- Limites quantitativos por componente (ex: máx 1 `Button` primary por tela, máx 1 `Heading` por tela)
- Tabela de contextos válidos e proibidos por componente
- Harness de primitivos: define o que pode ser construído do zero e configuração obrigatória de cada primitivo
- Padrão de nomenclatura de layers obrigatório com formato e exemplos
- Estados mínimos obrigatórios por padrão de página (Tabela, Form, Dashboard, Detalhe, Empty State)
- Regras específicas para skeleton loading
- Formato padronizado para reportar conflitos com o harness (Seção 8)
- `SKILL.md` atualizado para v3.1: harness integrado no fluxo de decisão, tabela de referências e Caso 4

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

*Gerado automaticamente em 2026-08-29 por `generate-wiki.mjs`. Não edite manualmente.*
