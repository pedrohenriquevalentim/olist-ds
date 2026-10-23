# Olist Design System — Especialista (v3.25 · atualizado em 2026-10-23)

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

## 📌 Library de referência (decisão permanente desde 2026-07-03)

A [`design system (base)`](https://www.figma.com/design/HeyN4w209HWh8rfpTDiwyf/design-system) é a **única library de referência** para construção de telas, em `figma-config.json`/`searchPriority`. A hierarquia anterior (AI Components, ERP components, ERP recursos, ERP style guide, [design system] components web) foi descontinuada e está em `blockedLibraries` com os dados preservados. Histórico completo da decisão, incluindo checagem de cobertura contra o harness, em `decisions/ux-design/FLUXO_PRD_FIGMA.md`.

## Novidades v3.25 (2026-10-23)

- **Intenção `danger` em Button, Button Icon e Link (2026-10-22):** `type` = primary, secondary, tertiary (hierarquia) e `intent` = default, danger (significado), no mesmo vocabulário de Badge, Toast e Alert Bar. Button 144 → 216 variantes, Button Icon 48 → 72, Link 6 → 16. Secundário e terciário danger são novos; disabled ignora a intenção. Decisão em `decisions/ux-design/INTENCAO_ACOES.md`.
- **Link com `disabled`, `lead icon` e `action icon`:** o boolean `new page` foi renomeado para `action icon` (valores preservados); `lead icon` (esquerda, desligado por padrão) é novo.
- **Tokens da intenção:** semânticos `color-(text|shape)-(enabled|hover|pressed)-negative` e `color-background-(hover|pressed)-negative`; base `effects-(hover|pressed)-red-600-8|16` e `red-500-12|24`; componente `button-*-(secondary|tertiary)-danger-*`, `button-border-color-secondary-danger-*`, `link-*-danger-*`, `link-*-disabled`, `link-shape-color-hover`. Contraste de red 600: 4,75:1 sobre `surface-container`, 4,3:1 sobre `surface-system`.
- **Content Card (organismo, zonas C–F, 2026-10-22):** card com 4 slots (mídia, ação, corpo, rodapé) para compor átomos do DS; 45 variantes (`surface` padrão/sutil/destaque × `state` enabled/hover/focused/selected/disabled × `layout` vertical/horizontal/horizontal invertido); padding por override com 4 tokens; sombra de repouso `.shadow/.level 1` e hover `.level 2`; 14 composições de referência no Figma. Entra na Landing e no Dashboard (`templates/landing.json` e `dashboard.json`). Peça interna `.[base] media placeholder`.
- **`ilustracao` (moldura das ilustrações do brand, 2026-10-22):** `tamanho` (2xs 64 a xl 480) × `proporção` (4:3, 1:1, 16:9, 3:1) × `fundo` (nenhum, neutro, destaque, claro) + propriedade `ilustração` (INSTANCE_SWAP, 90 artes como valores preferidos). Peças internas `.[base] illustration` (60 cenas: 4 categorias × color/outline × cena × paleta base/recolor) e `.[base] illustration asset` (30 objetos), em prancheta 4:3. Outline acompanha o tema por tokens; color usa `fundo=claro` no escuro. Catálogo e regras em `references/ILUSTRACOES.md` e `references/ilustracoes-catalogo.json`.
- **Tokens novos:** famílias `content-card-*`, `media-placeholder-*` e `illustration-*`; degradê suave `color-background-gradient-soft-start|end` (claro blue 50 → cyan 50; escuro blue 800 → cyan 900), único degradê do DS; `shape-spacing-20px`; `menu-container-spacing-gap-item|indent` e `menu-menu-item-shape-color-hover|pressed` (Novo Menu Accordion); `product-launcher-tile-size-label-height` (rótulo de 2 linhas, tile de 98px) e `product-launcher-row-border-radius-icon-box`.
- **Registry:** `Content Card`, `Ilustracao` e `Menu Item` adicionados; `Menu Accordion` registrado como WIP (não publicado); `.[base] media placeholder`, `.[base] illustration` e `.[base] illustration asset` em `excludedInternal`; `syncDiff.sync_2026_10_23`. Library republicada em 2026-10-23 (00:22Z) e verificada por `search_design_system` e `use_figma`.
- **`CHECKLIST_REVISAO.md` seção 13** (intenção danger, ilustrações e Content Card) e linhas de UX Writing para ação danger e texto alternativo de ilustração.
- **`caso-5-construir.md`:** lições práticas da Plugin API (adicionar dimensão de variante renomeando, mover clones para o set, mapear tokens por nome, constraints SCALE em arte vetorial, converter raios/traços/texto em vetor, `outlineStroke` devolve o nó na página, slots e modo de tema forçado).
- **Button / Button Icon:** `type=danger` deixou de existir; o antigo danger é `type=primary` + `intent=danger` (sem mudança visual, instâncias migraram sozinhas). Tokens `button-(color|font-font-color)-danger-*` renomeados para `…-primary-danger-*`. No Button Icon, o glifo de secundário e terciário passou a usar o token de cor do texto (antes cor fixa no hover/pressed, sem tema escuro).
- **`HARNEES_TELAS.md` v3.1:** o primary danger conta para o limite de 1 primary por tela; variantes obrigatórias e contextos de Button, Link, `ilustracao` e Content Card; padrão Empty State usa a `ilustracao`.
- **Content Card deixa de ser organismo `planned`:** `ORGANISMOS.md` v1.1, `globals.md`, `TEMPLATES_PRODUTO.md` v2.1 e os JSONs de Landing e Dashboard.
- **`TOKEN_CATALOG.md`:** 1.537 variáveis (937 de componente); `scripts/generate-token-catalog.mjs` passou a catalogar `content-card`, `media-placeholder` e `illustration`. `scripts/sync-skill-meta.mjs` ganhou descrições dos novos arquivos.
- **`globals.md`:** invariantes 8 (hierarquia e intenção separadas) e 9 (ilustração só pela moldura), inventário e regras "Nunca" atualizados.
- **Degradês fortes (marca e profundo) e a superfície `marca` do Content Card:** avaliados e retirados por ficarem pesados; o layout "mídia de fundo" saiu junto (dependia da superfície marca). Variáveis `content card/color/*` correspondentes, `color/background/gradient/(marca|profundo|overlay)`, `effects/overlay/brand 0%` e os tokens escuros do `media placeholder` foram apagados.
- **React:** `Button` com `intent`, `Link` (não existe em React) e Content Card só entram quando o usuário pedir; `COMPONENTES.md` segue gerado só dos componentes React existentes.
- **Item de lista/menu com `intent`** (print "Estornar pagamento" em lista de ações) e **Alert Dialog** (`type=destructive`) ainda usam outro vocabulário.
- **Novo Menu Accordion (WIP):** `menu accordion` não publicado; `menu item` publicado mas não usar em telas. Decisão pendente sobre substituir ou não o `menu-global`.
- **Ilustrações:** confirmar com o brand os pares base/recolor atribuídos por posição (Finanças 01 e PDV 01, 03, 04 color); sem versão escura das cenas color; mídia horizontal do Content Card fixa em 96px (só objeto `xs`).
- **Content Card:** `card` editorial antigo mantido até a migração; sem átomos de timeline ou skeleton.
- **Ícone de 28px da linha do Product Launcher:** token ainda pendente.

## Novidades v3.24 (2026-10-20)

- **Organismos:** `Page Header`, `Notice Bar`, `Empty State`, `Dataset`, `Floating Action Bar`, `KPI Strip` e `Chart Card`, com keys, variantes e regras em `ORGANISMOS.md` e no registry (`kind: organism`, `allowedZones`).
- **Tabela v2 e peças:** `Table Row`, `Table Head Row`, `Table Cell`, `Table Head Cell`, `Table Toolbar`, `Status Pill`, `Column Manager`, `Column Item`.
- **Gráficos:** `Metric`, `Chart Bar`, `Chart Line`, `Chart Donut`, `Chart Legend`, `Chart Legend Item`, `Chart Tooltip`.
- **Outros:** `Product Switch` (uso exclusivo no Menu Global; o Product Launcher é peça interna), `Scrollbar`, `Modal`, `Progress Bar` (WIP).
- **8 templates por zonas** (Landing, Landing foco, Dashboard, List, Record, Settings, Wizard, Estados) com metadata em JSON, válidos para todos os produtos: ERP, Conta Digital, New Hub, E-commerce, Capital (Crédito), PDV, Envios e, no futuro, Checkout Admin. Matriz produto → `Menu Global` · `Produto=` → templates prováveis em `TEMPLATES_PRODUTO.md`.
- **Organismos planejados** (sinalizados com `*` nos templates): Content Card, Form Section, Section Rail, Summary Panel, Onboarding Checklist, Dashboard Toolbar, Hero, topo simples do Page Header, modo wizard do Floating Action Bar.
- **`Table`:** nova key `12ba612d280690ef4136a91d3396da8decc1c42f` (Tabela v2, variante `seleção`); a anterior (`00db8a69…`, `striped` × `caption`) saiu da library. Listagens usam o `Dataset`.
- **Escala de controles:** `size = big 40px · medium 36px · small 32px` no Button e Button Icon; inputs, Select, Dropdown, Context Switch, Segmented, Paginator, Tabs e List em 40px. `Checkbox` e `Radio Button` ganharam `size`.
- **`Dropdown`:** `type = single select | multi select` e borda em todos os estados.
- **`Context Switch`:** só o texto principal; a descrição aparece apenas nas listas.
- **`HARNEES_TELAS.md` v3.0:** Seção 1 reescrita (zonas globais A, B0, B, C–F, G, R e camadas); limites e contextos por organismo; gate usa produto + template + JSON.
- **Regras removidas:** alturas fixas de zona (116/72/48px), `#F1F0E8`/`#fcfbf8`, exigência de `size=small` na Zona C e label oculto do `input search` (a busca agora vive dentro do Dataset).
- **Correções de publicação:** `Modal` (slot sem uso removido), `Chart Legend Item` (propriedade `valor` duplicada renomeada) e `Table Toolbar` (set de variante única convertido em componente).
- **React:** `size`, tokens novos e `metadata.json` (com `allowedZones`) dos organismos só entram quando o usuário pedir; `COMPONENTES.md` segue gerado só dos 14 componentes React.
- **`Menu Global`:** sem variante `Produto` para PDV e Checkout Admin.
- **Organismos planejados** ainda não existem no Figma.
- Verificar após o `build:tokens` que o `variables.css` não use os 199 tokens podados.

## Novidades v3.23 (2026-10-16)

- **`.[base] calendar month`** (peça interna, nodeId `11829:662`): component set com `state` = enabled, hover, pressed, selected, disabled e propriedade de texto `label`. Compõe a seleção de meses (view=months) do `calendar`, no mesmo papel do `.[base] calendar day` para os dias.
- **16 variáveis `calendar/month/*`** em `03. component tokens` (altura, radius, padding, 5 fills, tipografia, 5 cores de texto), como alias dos mesmos alvos de `calendar/day/*`.
- **`Calendar`** no registry (keys `770014e4…` atual e `c4d9635b…` anterior; variantes view × week start × weekday format × state).
- **Views `months` (enabled e disabled) do `calendar`:** os 12 frames soltos de mês de cada view viraram instâncias de `.[base] calendar month`; Out segue selecionado na view enabled.
- Nenhum. Library publicada e verificada via `search_design_system` em 2026-10-15: as 16 variáveis `calendar/month/*` estão disponíveis (inclui `border radius/default` e `font/color/disabled`, que só apareceram após a segunda publicação). `.[base] calendar month` não é listado na busca por ser peça interna ('.'-prefixada), como o `.[base] calendar day`.

## Novidades v3.22 (2026-09-29)

- **Drawer componentKey:** era `null` — resolvido para `f466ce17b00d813e1a9e48fdbf4030980371e6c5`.
- **Loading** adicionado ao registry (key `0d32737ae3b73820a283a1453b7e85d9ffa5c669`, category: feedback) — estava no inventário do `globals.md` mas sem entry no registry.
- **Chart Bar Up / Bar Down / Bar Variation / Chart Pie** adicionados ao registry com seus componentKeys (category: data-visualization) — estavam no inventário mas sem componentKeys.
- **Update** (ícone individual, key `d6a0734de0d76ea39dd0adfc3e0a356e900bf663`) adicionado ao registry.
- **File Pie Chart** (ícone individual, key `39806c4ceeffa09ff8a020b656cfb528e60d6005`) adicionado ao registry.
- `totalComponents` atualizado: 63 → 71.
- **Modal** — busca `modal` retornou `card` mas não um component_set `modal`. Ainda WIP, componentKey: null.
- **Overlay** — não retornou em busca direta; pode ser sinônimo do Drawer ou não publicado.
- **Menu** (key `4a05e281...`) — variantsConfirmed: false, aguarda URL do Figma.

## Novidades v3.21 (2026-09-20)

- **Dispatcher + globals.md + cases/:** `SKILL.md` reescrito como dispatcher puro (75 linhas). Invariantes compartilhados extraídos para `globals.md` (123 linhas). Cada caso migrado para `cases/caso-N.md`. Sub-skills atualizadas para carregar só `globals.md` + arquivo do caso específico.
- **Ganho:** 65–75% de redução nas linhas carregadas por invocação — `/ds-tela` passa de 746 para 195 linhas, sem perda de conteúdo ou funcionalidade.

## Novidades v3.20 (2026-09-09)

- **Protocolo de Inicialização de Arquivo (Seção 0):** sempre criar arquivo novo, configurar 3 páginas (☀️ Bom dia · Cover · Telas), importar sentinels de componente (Button) e variável semântica da `design system (base)`, verificar via `get_libraries` + `get_variable_defs` antes de qualquer frame — resolve dois gaps silenciosos que causavam components não instanciados e fills hardcoded
- **Cover com layout oficial do rebrand Olist:** Passo 2 da Seção 0 monta o cover seguindo a spec do node `10942:33207` — fundo `#f2f0e8`, pill "DESIGN TEAM" `#779e3d`, 5 campos dinâmicos substituídos automaticamente (`{NOME DO USUÁRIO}` · `{nome do projeto}` · `{unidade de negócio}` · `{status}` · `{ano atual}`)
- **`references/METADATA_SCHEMA.md` criado:** skill auto-contida para o Caso 7 — schema do `NomeComponente.metadata.json` não depende mais do `CLAUDE.md` raiz do repositório `olist-ds`
- **`FIGMA_CONFIG.md`** e **`SKILL.md`** atualizados com Gate [0], regras 14/19 e PRÉ-FLIGHT do Caso 5

## Novidades v3.19 (2026-09-01)

- **Frame raiz:** `padding 8px` em todos os lados + `fills #F1F0E8` + `gap 8px` entre Zona A e Container
- **Container (Zonas B–F):** `cornerRadius 12px`
- **Zona B:** `topLeftRadius 12` · `topRightRadius 12` · bottom 0
- **Zona F:** `bottomLeftRadius 12` · `bottomRightRadius 12` · top 0
- **`TableCellExtended`** adicionado ao `component-registry.json` — componentKey `8ba1fe2c9d32e56a058c3946e17142223784c557`, variantes `role × type`, props `header text#10193:5` e `cell text#10193:6`, dimensões confirmadas, usage pattern documentado
- **Regras 11–18** adicionadas ao "Nunca Faça" do `SKILL.md`: clipsContent em zonas (11), strokes em zonas (12), button big/medium em B e C (13), label visível no input search (14), menu erp stage=* (15), tabela com primitivos (16), omitir padding 8px (17), #fcfbf8 no frame raiz (18)
- **`menu-global`** no registry: `note` e `erpLayoutRule` atualizados com regra `Produto=ERP` obrigatória na Zona A e resize correto (304×752px)
- **`Table`** no registry: `note` reescrita — proíbe instanciação direta; redireciona para `TableCellExtended`; marca `head` e `simple cell` como sub-peças internas
- **`TEMPLATES_PRODUTO.md`:** tabela de Zonas ERP, bloco "Regras ERP" e JSON de Estrutura de Layout atualizados com padding, gap, fills, cornerRadius por zona e TableCellExtended
- **Botões nas Zonas B e C:** `size=small` definido como padrão obrigatório
- **Zona E sem Zona F:** recebe `bottomLeftRadius: 12` e `bottomRightRadius: 12`
- Referência a `"menu erp"` removida do JSON de Estrutura de Layout → substituída por `"menu-global"` com componentKey e `Produto=ERP`
- `clipsContent: false` e `strokes: []` definidos como obrigatórios em todas as zonas (explicitados no checklist)

## Novidades v3.18 (2026-08-25)

- Arquivos da skill modificados: README.md, SKILL.md, component-registry.json, decisions/INDEX.md, decisions/ux-design/COMPONENTES_POR_ZONA.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, figma-config.json, references/COMPONENTES.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/TEMPLATES_PRODUTO.md

## Novidades v3.8 (2026-06-29)

- **Slash Commands:** 6 skills finas criadas em `.claude/skills/ds-*/` — `/ds-implementar`, `/ds-tela`, `/ds-figma`, `/ds-componente`, `/ds-revisar`, `/ds-sync` — cada uma delega ao caso correspondente da skill principal
- **Caso 8 (`/ds-implementar`):** novo fluxo para devs de BU converterem telas Figma em JSX tipado usando componentes DS, sem precisar conhecer o inventário de memória
- **Fluxo de Decisão:** roteamento explícito por slash command adicionado antes da detecção automática de intenção
- **`generate-wiki.mjs`:** seção "Como Usar" atualizada com tabela de slash commands
- **`package.json`:** `ship` corrigido para incluir `.storybook/`, `README.md` e `package.json` no `git add` _(removido posteriormente — fluxo migrado para `npm run release`)_

## Novidades v3.7 (2026-06-25)

- **Fluxo unificado Figma → código + docs:** Caso 7 adicionado ao `SKILL.md` — implementação de componente a partir de URL do Figma executa em paralelo geração de código (5 arquivos — agora 6 desde v3.15, que adicionou `metadata.json`) e geração de frame de docs no Figma (demo · props · anatomia · acessibilidade)
- `CLAUDE.md` atualizado: passo 10 na seção "Geração de Componentes" e nota de redirecionamento para `olist-ds-specialist` Caso 7
- Ramo "Criar componente" no Fluxo de Decisão expandido para cobrir o fluxo unificado

## Novidades v3.3 (2026-06-23)

- Criação da pasta `decisions/` com 10 arquivos de decisão organizados por tema
- `decisions/INDEX.md` criado como índice navegável

## Novidades v3.2 (2026-06-15)

- **UX Writing:** `UX_WRITING.md` adicionado como referência de copy e tom de voz
- Novo ramo no Fluxo de Decisão para "Criar ou revisar textos de UI"
- 4 Pilares de Conteúdo, 12 tipos de texto, diretrizes B2B/B2C

## Novidades v3.1 (2026-06-05)

- `HARNEES_TELAS.md` adicionado como gate pré-construção obrigatório no Figma

## Novidades v3.0 (2026-06-03)

- Canal de entrega migrado para `use_figma` direto com instâncias DS reais
- `figma-config.json` migrado de `fileKey` para `libraryKey`; AI Components como master

## Estrutura

```
olist-ds-specialist/
├── CHANGELOG.md               # Histórico de versões da skill
├── README.md                  # Este arquivo — visão geral e changelog
├── SETUP.md                   # Guia de instalação e configuração
├── SKILL.md                   # Instruções, workflow, regras e fluxo de decisão
├── component-registry.json    # Cache local de componentKeys por categoria
├── figma-config.json          # Libraries autorizadas (libraryKeys e searchPriority)
├── globals.md
├── decisions/
│   ├── CHANGELOG.md                # Histórico de decisões de design
│   ├── INDEX.md                    # Índice navegável de todas as decisões
│   ├── technical/
│   │   ├── ACESSIBILIDADE.md           # Decisões de acessibilidade (WCAG, ARIA, teclado)
│   │   ├── ASSETS_FIGMA.md             # Regras de uso de assets do Figma MCP
│   │   ├── COMPONENTES_REACT.md        # Convenções de componentes React
│   │   ├── ICONES.md                   # Uso de ícones via ReactNode e currentColor
│   │   └── TOKENS.md                   # Tokens CSS e variáveis de design
│   └── ux-design/
│       ├── COMPONENTES_POR_ZONA.md     # Componentes por zona dos templates (pontos em aberto)
│       ├── ESPACAMENTO_LAYOUT.md       # Grid de 4px, border-radius, espaçamento
│       ├── FLUXO_PRD_FIGMA.md          # Workflow PRD → Figma passo a passo
│       ├── ILUSTRACOES_E_CONTENT_CARD.md # Ilustrações do brand e Content Card com slots
│       ├── INTENCAO_ACOES.md           # Intenção (danger) em Button, Button Icon e Link
│       ├── PRINCIPIOS.md               # Princípios de design Olist
│       ├── TIPOGRAFIA.md               # Escala tipográfica e tokens
│       └── UX_WRITING.md               # Tom de voz, 4 pilares, diretrizes B2B/B2C
└── references/
    ├── CHECKLIST_REVISAO.md            # 13 categorias de revisão visual, acessibilidade, UX Writing, intenção danger, ilustrações e Content Card
    ├── COMPONENTES.md                  # Props e variantes de cada componente (auto-gerado)
    ├── CORES.md                        # Sistema de cores com regras de uso
    ├── ESPACAMENTO.md                  # Grid de 4px, border-radius, escala de espaçamento
    ├── FIGMA_CONFIG.md                 # libraryKeys, workflow de busca e import
    ├── GLOSSARIO_PAPEIS_TEXTO.md       # 10 papéis de texto (Heading, Label, Error, etc.)
    ├── GOVERNANCA_TOKENS.md            # Intenção de uso por família de token (purpose, useWhen, doNotUseWhen)
    ├── HARNEES_TELAS.md                # Gate pré-construção: restrições por zona, limites por componente
    ├── ICONES_CATALOGO.md              # Catálogo de ícones do DS
    ├── ILUSTRACOES.md                  # Moldura ilustracao, 60 cenas, 30 objetos, contextos de uso e regras do brand
    ├── MAPA_FONTES.md                  # Estrutura de pastas do repositório (auto-gerado)
    ├── METADATA_SCHEMA.md              # Schema do metadata.json de componente (Caso 7)
    ├── ORGANISMOS.md                   # Catálogo de organismos (Page Header, Dataset, Content Card…) e regras por zona
    ├── PADROES.md                      # 5 padrões de página (Tabela, Form, Dashboard, Detalhe, Config)
    ├── SDD_AVANCADO.md                 # RNFs, DACI, Métricas, Rollout, Observabilidade → UI
    ├── SDD_PARA_TELA.md                # 10 passos para traduzir SDD/PRD em decisões de UI
    ├── TEMPLATES_PRODUTO.md            # Zonas de layout por produto (ERP, Envios, Hub, CD)
    ├── TIPOGRAFIA.md                   # Tokens de tipografia (tamanho, peso, altura)
    ├── TOKEN_CATALOG.md                # Catálogo completo de tokens com valores claro/escuro (auto-gerado)
    ├── UX_WRITING.md                   # Tom de voz, 4 pilares, 12 tipos de texto, diretrizes B2B/B2C
    └── VISAO_GERAL.md                  # Mapa de navegação — leia sempre primeiro
```

> **Raiz:** 7 arquivo(s) · **Decisions:** 15 arquivo(s) · **Referências:** 21 arquivo(s) · **Total:** 43 arquivo(s) — atualizado em 2026-10-23 pelo `sync-skill-meta.mjs`
## Libraries do Figma (ordem de prioridade)

| # | Library | Conteúdo |
|---|---|---|
| 1 (master) | **design system (base)** | Única referência para construção de telas |

**Hierarquia anterior (descontinuada em 2026-07-03, dados preservados em `blockedLibraries`):** AI Components (Menu ERP atualizado, Button, ícones rebrand 24), ERP components, ERP recursos, ERP style guide, [design system] components web.

**libraryKeys completas:** ver `figma-config.json`.

## Instalação

### Claude Code (recomendado)
```bash
# A skill viaja com o repositório — só clonar já é suficiente
git clone <repo>
```

### Claude.ai web
```bash
cd .claude/skills && zip -r olist-ds-specialist.zip olist-ds-specialist/
```
Settings → Customize → Skills → Upload `olist-ds-specialist.zip`

## Uso

### Slash Commands (Claude Code CLI)

| Comando | Para quem | O que faz |
|---|---|---|
| `/ds-implementar <figma-url>` | Dev de BU | Converte tela Figma em JSX com componentes DS |
| `/ds-tela <sdd-ou-prd>` | Dev de BU | Gera tela React a partir de SDD/PRD |
| `/ds-figma <sdd-ou-prd>` | Designer/Dev | Cria telas no Figma com instâncias reais DS |
| `/ds-construir <figma-url ou descrição>` | Mantenedor DS | Cria ou evolui componentes no Figma com arquitetura correta de tokens |
| `/ds-componente <figma-url>` | Mantenedor DS | Gera novo componente DS completo (6 arquivos + docs) |
| `/ds-handoff <figma-url(s)>` | Qualquer dev | Gera manifesto Markdown de componentes DS usados numa jornada |
| `/ds-revisar` | Qualquer dev | Revisa tela/código contra padrões DS |
| `/ds-sync` | Mantenedor DS | Sincroniza inventário de componentes |

### Por descrição (Claude Code e Claude.ai)
```
Use $olist-ds-specialist para criar UI no Figma:
[SDD aqui]
```

## Changelog

### v3.25 (2026-10-23)
### component-registry.json + referências + decisões + scripts

**Arquivos modificados:** `component-registry.json`, `figma-config.json`, `globals.md`, `SKILL.md`, `references/{ORGANISMOS,HARNEES_TELAS,CHECKLIST_REVISAO,GOVERNANCA_TOKENS,CORES,ESPACAMENTO,UX_WRITING,TEMPLATES_PRODUTO,VISAO_GERAL,FIGMA_CONFIG}.md`, `references/templates/{landing,dashboard}.json`, `references/TOKEN_CATALOG.md` (regenerado), `cases/{caso-3-revisar,caso-4-figma,caso-5-construir}.md`, `decisions/{INDEX,CHANGELOG}.md`, `decisions/technical/{TOKENS,COMPONENTES_REACT,ACESSIBILIDADE}.md`, `decisions/ux-design/COMPONENTES_POR_ZONA.md`, `../../../scripts/{generate-token-catalog,sync-skill-meta}.mjs`
**Arquivos criados:** `references/ILUSTRACOES.md`, `references/ilustracoes-catalogo.json`, `decisions/ux-design/INTENCAO_ACOES.md`, `decisions/ux-design/ILUSTRACOES_E_CONTENT_CARD.md`

#### Added

- **Intenção `danger` em Button, Button Icon e Link (2026-10-22):** `type` = primary, secondary, tertiary (hierarquia) e `intent` = default, danger (significado), no mesmo vocabulário de Badge, Toast e Alert Bar. Button 144 → 216 variantes, Button Icon 48 → 72, Link 6 → 16. Secundário e terciário danger são novos; disabled ignora a intenção. Decisão em `decisions/ux-design/INTENCAO_ACOES.md`.
- **Link com `disabled`, `lead icon` e `action icon`:** o boolean `new page` foi renomeado para `action icon` (valores preservados); `lead icon` (esquerda, desligado por padrão) é novo.
- **Tokens da intenção:** semânticos `color-(text|shape)-(enabled|hover|pressed)-negative` e `color-background-(hover|pressed)-negative`; base `effects-(hover|pressed)-red-600-8|16` e `red-500-12|24`; componente `button-*-(secondary|tertiary)-danger-*`, `button-border-color-secondary-danger-*`, `link-*-danger-*`, `link-*-disabled`, `link-shape-color-hover`. Contraste de red 600: 4,75:1 sobre `surface-container`, 4,3:1 sobre `surface-system`.
- **Content Card (organismo, zonas C–F, 2026-10-22):** card com 4 slots (mídia, ação, corpo, rodapé) para compor átomos do DS; 45 variantes (`surface` padrão/sutil/destaque × `state` enabled/hover/focused/selected/disabled × `layout` vertical/horizontal/horizontal invertido); padding por override com 4 tokens; sombra de repouso `.shadow/.level 1` e hover `.level 2`; 14 composições de referência no Figma. Entra na Landing e no Dashboard (`templates/landing.json` e `dashboard.json`). Peça interna `.[base] media placeholder`.
- **`ilustracao` (moldura das ilustrações do brand, 2026-10-22):** `tamanho` (2xs 64 a xl 480) × `proporção` (4:3, 1:1, 16:9, 3:1) × `fundo` (nenhum, neutro, destaque, claro) + propriedade `ilustração` (INSTANCE_SWAP, 90 artes como valores preferidos). Peças internas `.[base] illustration` (60 cenas: 4 categorias × color/outline × cena × paleta base/recolor) e `.[base] illustration asset` (30 objetos), em prancheta 4:3. Outline acompanha o tema por tokens; color usa `fundo=claro` no escuro. Catálogo e regras em `references/ILUSTRACOES.md` e `references/ilustracoes-catalogo.json`.
- **Tokens novos:** famílias `content-card-*`, `media-placeholder-*` e `illustration-*`; degradê suave `color-background-gradient-soft-start|end` (claro blue 50 → cyan 50; escuro blue 800 → cyan 900), único degradê do DS; `shape-spacing-20px`; `menu-container-spacing-gap-item|indent` e `menu-menu-item-shape-color-hover|pressed` (Novo Menu Accordion); `product-launcher-tile-size-label-height` (rótulo de 2 linhas, tile de 98px) e `product-launcher-row-border-radius-icon-box`.
- **Registry:** `Content Card`, `Ilustracao` e `Menu Item` adicionados; `Menu Accordion` registrado como WIP (não publicado); `.[base] media placeholder`, `.[base] illustration` e `.[base] illustration asset` em `excludedInternal`; `syncDiff.sync_2026_10_23`. Library republicada em 2026-10-23 (00:22Z) e verificada por `search_design_system` e `use_figma`.
- **`CHECKLIST_REVISAO.md` seção 13** (intenção danger, ilustrações e Content Card) e linhas de UX Writing para ação danger e texto alternativo de ilustração.
- **`caso-5-construir.md`:** lições práticas da Plugin API (adicionar dimensão de variante renomeando, mover clones para o set, mapear tokens por nome, constraints SCALE em arte vetorial, converter raios/traços/texto em vetor, `outlineStroke` devolve o nó na página, slots e modo de tema forçado).

#### Changed

- **Button / Button Icon:** `type=danger` deixou de existir; o antigo danger é `type=primary` + `intent=danger` (sem mudança visual, instâncias migraram sozinhas). Tokens `button-(color|font-font-color)-danger-*` renomeados para `…-primary-danger-*`. No Button Icon, o glifo de secundário e terciário passou a usar o token de cor do texto (antes cor fixa no hover/pressed, sem tema escuro).
- **`HARNEES_TELAS.md` v3.1:** o primary danger conta para o limite de 1 primary por tela; variantes obrigatórias e contextos de Button, Link, `ilustracao` e Content Card; padrão Empty State usa a `ilustracao`.
- **Content Card deixa de ser organismo `planned`:** `ORGANISMOS.md` v1.1, `globals.md`, `TEMPLATES_PRODUTO.md` v2.1 e os JSONs de Landing e Dashboard.
- **`TOKEN_CATALOG.md`:** 1.537 variáveis (937 de componente); `scripts/generate-token-catalog.mjs` passou a catalogar `content-card`, `media-placeholder` e `illustration`. `scripts/sync-skill-meta.mjs` ganhou descrições dos novos arquivos.
- **`globals.md`:** invariantes 8 (hierarquia e intenção separadas) e 9 (ilustração só pela moldura), inventário e regras "Nunca" atualizados.

#### Removed

- **Degradês fortes (marca e profundo) e a superfície `marca` do Content Card:** avaliados e retirados por ficarem pesados; o layout "mídia de fundo" saiu junto (dependia da superfície marca). Variáveis `content card/color/*` correspondentes, `color/background/gradient/(marca|profundo|overlay)`, `effects/overlay/brand 0%` e os tokens escuros do `media placeholder` foram apagados.

#### Pendente

- **React:** `Button` com `intent`, `Link` (não existe em React) e Content Card só entram quando o usuário pedir; `COMPONENTES.md` segue gerado só dos componentes React existentes.
- **Item de lista/menu com `intent`** (print "Estornar pagamento" em lista de ações) e **Alert Dialog** (`type=destructive`) ainda usam outro vocabulário.
- **Novo Menu Accordion (WIP):** `menu accordion` não publicado; `menu item` publicado mas não usar em telas. Decisão pendente sobre substituir ou não o `menu-global`.
- **Ilustrações:** confirmar com o brand os pares base/recolor atribuídos por posição (Finanças 01 e PDV 01, 03, 04 color); sem versão escura das cenas color; mídia horizontal do Content Card fixa em 96px (só objeto `xs`).
- **Content Card:** `card` editorial antigo mantido até a migração; sem átomos de timeline ou skeleton.
- **Ícone de 28px da linha do Product Launcher:** token ainda pendente.

---

### v3.24 (2026-10-20)
### component-registry.json + globals.md + referências + figma-config.json

**Arquivos modificados:** `component-registry.json`, `figma-config.json`, `globals.md`, `references/TEMPLATES_PRODUTO.md`, `references/HARNEES_TELAS.md`, `references/VISAO_GERAL.md`, `references/PADROES.md`, `cases/caso-4-figma.md`, `decisions/INDEX.md`, `decisions/ux-design/COMPONENTES_POR_ZONA.md`
**Arquivos criados:** `references/ORGANISMOS.md`, `references/templates/{landing,landing-foco,dashboard,list,record,settings,wizard,estados}.json`

#### Added

- **Organismos:** `Page Header`, `Notice Bar`, `Empty State`, `Dataset`, `Floating Action Bar`, `KPI Strip` e `Chart Card`, com keys, variantes e regras em `ORGANISMOS.md` e no registry (`kind: organism`, `allowedZones`).
- **Tabela v2 e peças:** `Table Row`, `Table Head Row`, `Table Cell`, `Table Head Cell`, `Table Toolbar`, `Status Pill`, `Column Manager`, `Column Item`.
- **Gráficos:** `Metric`, `Chart Bar`, `Chart Line`, `Chart Donut`, `Chart Legend`, `Chart Legend Item`, `Chart Tooltip`.
- **Outros:** `Product Switch` (uso exclusivo no Menu Global; o Product Launcher é peça interna), `Scrollbar`, `Modal`, `Progress Bar` (WIP).
- **8 templates por zonas** (Landing, Landing foco, Dashboard, List, Record, Settings, Wizard, Estados) com metadata em JSON, válidos para todos os produtos: ERP, Conta Digital, New Hub, E-commerce, Capital (Crédito), PDV, Envios e, no futuro, Checkout Admin. Matriz produto → `Menu Global` · `Produto=` → templates prováveis em `TEMPLATES_PRODUTO.md`.
- **Organismos planejados** (sinalizados com `*` nos templates): Content Card, Form Section, Section Rail, Summary Panel, Onboarding Checklist, Dashboard Toolbar, Hero, topo simples do Page Header, modo wizard do Floating Action Bar.

#### Changed

- **`Table`:** nova key `12ba612d280690ef4136a91d3396da8decc1c42f` (Tabela v2, variante `seleção`); a anterior (`00db8a69…`, `striped` × `caption`) saiu da library. Listagens usam o `Dataset`.
- **Escala de controles:** `size = big 40px · medium 36px · small 32px` no Button e Button Icon; inputs, Select, Dropdown, Context Switch, Segmented, Paginator, Tabs e List em 40px. `Checkbox` e `Radio Button` ganharam `size`.
- **`Dropdown`:** `type = single select | multi select` e borda em todos os estados.
- **`Context Switch`:** só o texto principal; a descrição aparece apenas nas listas.
- **`HARNEES_TELAS.md` v3.0:** Seção 1 reescrita (zonas globais A, B0, B, C–F, G, R e camadas); limites e contextos por organismo; gate usa produto + template + JSON.
- **Regras removidas:** alturas fixas de zona (116/72/48px), `#F1F0E8`/`#fcfbf8`, exigência de `size=small` na Zona C e label oculto do `input search` (a busca agora vive dentro do Dataset).
- **Correções de publicação:** `Modal` (slot sem uso removido), `Chart Legend Item` (propriedade `valor` duplicada renomeada) e `Table Toolbar` (set de variante única convertido em componente).

#### Pendente

- **React:** `size`, tokens novos e `metadata.json` (com `allowedZones`) dos organismos só entram quando o usuário pedir; `COMPONENTES.md` segue gerado só dos 14 componentes React.
- **`Menu Global`:** sem variante `Produto` para PDV e Checkout Admin.
- **Organismos planejados** ainda não existem no Figma.
- Verificar após o `build:tokens` que o `variables.css` não use os 199 tokens podados.

---

### v3.23 (2026-10-16)
### component-registry.json + figma-config.json — `.[base] calendar month`

**Arquivos modificados:** `component-registry.json`, `figma-config.json`

#### Added

- **`.[base] calendar month`** (peça interna, nodeId `11829:662`): component set com `state` = enabled, hover, pressed, selected, disabled e propriedade de texto `label`. Compõe a seleção de meses (view=months) do `calendar`, no mesmo papel do `.[base] calendar day` para os dias.
- **16 variáveis `calendar/month/*`** em `03. component tokens` (altura, radius, padding, 5 fills, tipografia, 5 cores de texto), como alias dos mesmos alvos de `calendar/day/*`.
- **`Calendar`** no registry (keys `770014e4…` atual e `c4d9635b…` anterior; variantes view × week start × weekday format × state).

#### Changed

- **Views `months` (enabled e disabled) do `calendar`:** os 12 frames soltos de mês de cada view viraram instâncias de `.[base] calendar month`; Out segue selecionado na view enabled.

#### Pendente

- Nenhum. Library publicada e verificada via `search_design_system` em 2026-10-15: as 16 variáveis `calendar/month/*` estão disponíveis (inclui `border radius/default` e `font/color/disabled`, que só apareceram após a segunda publicação). `.[base] calendar month` não é listado na busca por ser peça interna ('.'-prefixada), como o `.[base] calendar day`.

---

### v3.22 (2026-09-29)
### component-registry.json + figma-config.json + globals.md — 2ª rodada de /ds-sync

**Arquivos modificados:** `component-registry.json`, `figma-config.json`, `globals.md`

#### Fixed

- **Drawer componentKey:** era `null` — resolvido para `f466ce17b00d813e1a9e48fdbf4030980371e6c5`.

#### Added

- **Loading** adicionado ao registry (key `0d32737ae3b73820a283a1453b7e85d9ffa5c669`, category: feedback) — estava no inventário do `globals.md` mas sem entry no registry.
- **Chart Bar Up / Bar Down / Bar Variation / Chart Pie** adicionados ao registry com seus componentKeys (category: data-visualization) — estavam no inventário mas sem componentKeys.
- **Update** (ícone individual, key `d6a0734de0d76ea39dd0adfc3e0a356e900bf663`) adicionado ao registry.
- **File Pie Chart** (ícone individual, key `39806c4ceeffa09ff8a020b656cfb528e60d6005`) adicionado ao registry.
- `totalComponents` atualizado: 63 → 71.

#### Gaps identificados

- **Modal** — busca `modal` retornou `card` mas não um component_set `modal`. Ainda WIP, componentKey: null.
- **Overlay** — não retornou em busca direta; pode ser sinônimo do Drawer ou não publicado.
- **Menu** (key `4a05e281...`) — variantsConfirmed: false, aguarda URL do Figma.

---

### v3.21 (2026-09-15)
- Versão 3.21

### v3.20 (2026-09-09)
- Protocolo de Inicialização de Arquivo (Seção 0) + cover rebrand Olist + `METADATA_SCHEMA.md` criado (Caso 7 auto-contido) — ver `CHANGELOG.md` para detalhes

### v3.19 (2026-09-01)
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

### v3.18 (2026-08-25)
- Arquivos da skill modificados: README.md, SKILL.md, component-registry.json, decisions/INDEX.md, decisions/ux-design/COMPONENTES_POR_ZONA.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, figma-config.json, references/COMPONENTES.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/TEMPLATES_PRODUTO.md

### v3.17 (2026-08-23)
- Versão 3.17

### v3.16 (2026-08-23)
- Versão 3.16

### v3.15 (2026-07-21)
- Versão 3.15

### v3.14 (2026-07-20)
- `/ds-sync`: inventário de componentes ressincronizado com a `design system (base)` — famílias Tabela, Gráfico (nova categoria "Data Visualization"), `Paginator`, `Badge`, `Sort`, `Reorder`, `Loading`, `Overlay`, `Cookie`, `Logout`, `Profile`, `Dashboard`, `List`, `Task List`, `Avatar`, `Card`
- "Text Area" renomeado para "Input Paragraph" (mesmo componente, nome real confirmado no Figma)
- Gap do `Paginator`/`Overlay` marcado como resolvido em `GOVERNANCA_TOKENS.md` — componentes já existem na library

### v3.13 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.12 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.11 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.10 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.9 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.8 (2026-06-29)
- Slash Commands: 6 skills finas (`ds-*`) + Caso 8 (`/ds-implementar`) + roteamento no Fluxo de Decisão

### v3.7 (2026-06-25)
- Fluxo unificado Figma → código + docs (Caso 7)

### v3.6 (2026-06-23)
- Sincronização geral após reestruturação interna

### v3.3 (2026-06-23)
- Pasta `decisions/` com 10 arquivos de decisão

### v3.2 (2026-06-15)
- UX Writing: protocolo, 4 pilares, 12 tipos de texto, B2B/B2C

### v3.1 (2026-06-05)
- HARNESS_TELAS.md como gate pré-construção obrigatório

### v3.0 (2026-06-03)
- Canal de entrega: `use_figma` direto; libraryKeys; AI Components como master

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md, SDD_AVANCADO.md, workflow faseado

### v1.0 (2026-01-12)
- Release inicial
