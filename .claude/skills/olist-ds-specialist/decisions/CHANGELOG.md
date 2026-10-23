# Changelog — Decisões de Design de Produto

Histórico de atualizações sincronizado com a skill `olist-ds-specialist`.
Atualizado automaticamente pelo `sync-skill-meta.mjs` a cada `npm run ship`.

## v3.25 (2026-10-23)

> Skill atualizada para v3.25. Referências sincronizadas automaticamente.

 — Content Card, ilustrações e intenção (danger)

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

## v3.24 (2026-10-20)

> Skill atualizada para v3.24. Referências sincronizadas automaticamente.

 — organismos, templates por zonas e componentes novos

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

## v3.23 (2026-10-16)

> Skill atualizada para v3.23. Referências sincronizadas automaticamente.

 — calendar month

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

## v3.22 (2026-09-29)

> Skill atualizada para v3.22. Referências sincronizadas automaticamente.

 — 2ª rodada

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

## v3.21 (2026-09-15)

> Skill atualizada para v3.21. Referências sincronizadas automaticamente.

## v3.20 (2026-09-15)

> Skill atualizada para v3.20. Referências sincronizadas automaticamente.


### Protocolo de Inicialização de Arquivo + Cover Rebrand Olist + Skill auto-contida para Caso 7

**Arquivos modificados:** `SKILL.md`, `references/HARNEES_TELAS.md`, `references/FIGMA_CONFIG.md`  
**Arquivo criado:** `references/METADATA_SCHEMA.md`

#### Added
- **Seção 0 — Protocolo de Inicialização de Arquivo** em `HARNEES_TELAS.md` (v1.6 → v2.0): 4 passos obrigatórios antes de qualquer frame — `create_new_file`, configuração das 3 páginas padrão, import de sentinels (Button + variável semântica), verificação via `get_libraries` + `get_variable_defs`
- **Layout oficial do cover** (referência `HeyN4w209HWh8rfpTDiwyf` node `10942:33207`): 1920×960px, fundo `#f2f0e8`, 5 campos dinâmicos com resolução automática — `{NOME DO USUÁRIO}` (primeiro nome do operador, CAIXA ALTA), `{nome do projeto}` (title case, máx 45 chars), `{unidade de negócio}` (detectado do contexto), `{status}` (default "Em exploração"), `{ano atual}` (YYYY). Pill "DESIGN TEAM" verde `#779e3d`, pill do designer dark navy `#001647` em x=590 y=150
- **`references/METADATA_SCHEMA.md`** (novo): schema completo do `NomeComponente.metadata.json` para o Caso 7 (`/ds-componente`) — elimina dependência do `CLAUDE.md` raiz do repositório `olist-ds`; skill passa a ser auto-contida para geração de componentes
- **Gate Obrigatório item [0]** em `HARNEES_TELAS.md`: "Protocolo de Inicialização (Seção 0) concluído — arquivo criado, páginas configuradas, sentinel importado, `get_libraries` e `get_variable_defs` passando?" — **BLOQUEANTE**
- **`FIGMA_CONFIG.md`** checklist: 2 novos itens — validação de `libraryKey` via `get_libraries` e confirmação de `get_variable_defs` pós-sentinel
- **`SKILL.md`** "Sempre Faça" item 14: executar Protocolo de Inicialização antes de qualquer `use_figma`
- **`SKILL.md`** "Nunca Faça" item 19: criar frames sem protocolo de inicialização concluído
- **`SKILL.md`** Caso 5 PRÉ-FLIGHT: `get_variable_defs` no arquivo DS confirma 3 coleções antes de criar tokens

#### Changed
- **Caso 4**: passo 8 (inicialização) adicionado; passos renumerados 9–11; fallback distingue "library inacessível" (PARAR) de "componente genuinamente ausente" (usar primitivos)
- **Caso 7** referência de schema: `CLAUDE.md` raiz → `references/METADATA_SCHEMA.md` + `decisions/technical/COMPONENTES_REACT.md`
- **`HARNEES_TELAS.md`** Passo 2 reescrito com spec visual completa do cover: tabela de campos dinâmicos, tabela de elementos, implementação com caminho primário (componente DS real) + fallback (primitivos com spec exata)

#### Fixed
- **Gap crítico silencioso 1**: `importComponentByKeyAsync` falhava sem erro em arquivos novos/sem library subscrita — resolvido por sentinel obrigatório no Passo 3 da Seção 0
- **Gap crítico silencioso 2**: `get_variable_defs` retornava vazio em arquivos novos, resultando em fills hardcoded em vez de tokens DS — resolvido pela verificação bloqueante no Passo 4

---

## v3.19 (2026-09-01)

> Skill atualizada para v3.19. Referências sincronizadas automaticamente.


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

> Skill atualizada para v3.18. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: README.md, SKILL.md, component-registry.json, decisions/INDEX.md, decisions/ux-design/COMPONENTES_POR_ZONA.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, figma-config.json, references/COMPONENTES.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/TEMPLATES_PRODUTO.md

## v3.17 (2026-08-23)

> Skill atualizada para v3.17. Referências sincronizadas automaticamente.

## v3.16 (2026-08-23)

> Skill atualizada para v3.16. Referências sincronizadas automaticamente.

## v3.15 (2026-07-21)

> Skill atualizada para v3.15. Referências sincronizadas automaticamente.

## v3.14 (2026-07-20)

> Skill atualizada para v3.14. Referências sincronizadas automaticamente.

## v3.13 (2026-07-04)

> Skill atualizada para v3.13. Referências sincronizadas automaticamente.

## v3.12 (2026-07-04)

> Skill atualizada para v3.12. Referências sincronizadas automaticamente.

## v3.11 (2026-07-04)

> Skill atualizada para v3.11. Referências sincronizadas automaticamente.

## v3.10 (2026-07-02)

> Skill atualizada para v3.10. Referências sincronizadas automaticamente.

## v3.9 (2026-07-02)

> Skill atualizada para v3.9. Referências sincronizadas automaticamente.

## v3.8 (2026-06-29)

> Skill atualizada para v3.8. Referências sincronizadas automaticamente.

## v3.7 (2026-06-26)

> Skill atualizada para v3.7. Referências sincronizadas automaticamente.

## v3.6 (2026-06-23)

> Skill atualizada para v3.6. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: SKILL.md, CHANGELOG.md, README.md, SETUP.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md
- Outros arquivos: claude/skills/olist-ds-specialist/CHANGELOG.md

## v3.5 (2026-06-23)

> Skill atualizada para v3.5. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: CHANGELOG.md, README.md, SETUP.md, SKILL.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md

## v3.4 (2026-06-23)

> Skill atualizada para v3.4. Referências sincronizadas automaticamente.

- Arquivos da skill modificados:

## v3.3 (2026-06-23)

> Skill atualizada para v3.3. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: README.md
- Decisões de design atualizadas: decisions/CHANGELOG.md
- Outros arquivos: claude/decisions/INDEX.md

## v3.2 (2026-06-23)

> Criação da pasta `.claude/decisions/` — decisões extraídas do CLAUDE.md e organizadas em arquivos separados por tema.

- Estrutura inicial criada com 5 decisões técnicas e 5 decisões de UX/Design
- `technical/TOKENS.md` — regras de consumo de tokens CSS e unidades rem
- `technical/COMPONENTES_REACT.md` — convenções de estrutura, props e testes
- `technical/ICONES.md` — ReactNode, currentColor, sem pacotes externos
- `technical/ACESSIBILIDADE.md` — roles ARIA, navegação por teclado, WCAG AA
- `technical/ASSETS_FIGMA.md` — fluxo Figma MCP, identificadores, declaração SVG
- `ux-design/PRINCIPIOS.md` — 4 princípios de design Olist e identidade visual
- `ux-design/ESPACAMENTO_LAYOUT.md` — grid 4px, 5 padrões de página, estrutura de tela
- `ux-design/TIPOGRAFIA.md` — escala tipográfica, 10 papéis de texto
- `ux-design/FLUXO_PRD_FIGMA.md` — hierarquia de bibliotecas, busca e regras de build
- `ux-design/UX_WRITING.md` — tom B2B, regras por tipo de texto
- Cada arquivo referencia os arquivos da skill que governam os detalhes completos
- Seção `## Histórico` em cada arquivo para versionamento incremental
- `sync-skill-meta.mjs` atualizado para varrer `.claude/decisions/` ao renomear referências
