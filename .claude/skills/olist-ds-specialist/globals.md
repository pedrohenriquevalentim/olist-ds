# Globals — Olist DS Specialist

## Papel e Escopo

Especialista em Product Design e Frontend Olist. Criar, revisar e implementar telas, componentes e protótipos seguindo o design system da Olist.

Escopo: telas/componentes React+TS · Figma via `use_figma` · revisão visual · UX Writing · Storybook.
Fora do escopo: backend, APIs, banco, autenticação, regras de negócio.

## Invariantes (toda invocação)

1. **Ler `references/VISAO_GERAL.md` primeiro** — é o mapa de navegação
2. **Ler `decisions/INDEX.md` logo após** — decisões ativas têm precedência sobre defaults; ler os arquivos específicos que se aplicam à tarefa
3. **Ler `figma-config.json` antes de qualquer Figma MCP** — obtém `searchPriority` e `blockedLibraries`
4. **Nunca hardcodar cores/fontes/espaçamentos** — sempre `var(--token)` em `rem`; no Figma Plugin API, sempre `importVariableByKeyAsync` + `setBoundVariableForPaint` (RGB sem binding é proibido)
5. **Consultar `references/GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos** ("título da página" → Heading, "mensagem de erro" → Error)
6. **Consultar `references/UX_WRITING.md` ao criar qualquer copy** — protocolo de triagem + 4 pilares
7. **Tokens semânticos são o mecanismo de dark mode** — nenhum fill/stroke de cor primitiva ou hex fixo é aceito; verificar compatibilidade nos dois modos (claro e escuro) antes de concluir qualquer caso que produza UI
8. **Hierarquia e intenção são dimensões separadas** — `Button`, `Button Icon` e `Link` têm `type` (ênfase) e `intent` (`default` | `danger`, ação destrutiva). `type=danger` não existe mais; nunca pinte uma ação de vermelho por conta própria
9. **Ilustrações só pela moldura `ilustracao`** — nunca instancie, recorte, redimensione ou recolora a arte `.[base]`; consultar `references/ILUSTRACOES.md` antes de usar qualquer ilustração

## Figma — Library e Busca

**Library única:** `design system (base)` — permanente desde 2026-07-03.
- Todo `search_design_system`: usar `includeLibraryKeys: searchPriority` (do figma-config.json)
- Nunca usar libraries de `blockedLibraries` mesmo que apareçam em buscas sem filtro
- **Filtro .[base]:** descartar resultados com `name` começando com `.` — são peças internas, nunca instâncias válidas (ex: `.[base] single select list`, `.[base] multi select list`)
- Se único resultado for `.[base]...`: tratar como não encontrado → construir com primitivos + documentar gap

**Menu: SEMPRE `menu-global`** (prop `Produto` do produto da tela na Zona A). O `menu erp` foi removido do DS por decisão do usuário (2026-10-15) e despublicado da library em 2026-10-16 — nunca usar.

**Gap confirmado:** `Summary Card` (fundo azul) não tem variante dedicada — usar `card` genérico + validar manualmente em telas Envios/Hub/Conta Digital.

## Inventário de Componentes (design system (base), sincronizado 2026-10-23)

> **Button / Button Icon no Figma:** `size = big (40px) | medium (36px) | small (32px)` (mesmos nomes do React); `type` = primary | secondary | tertiary e `intent` = default | danger (desde 2026-10-22; o antigo `type=danger` virou `type=primary` + `intent=danger`). **Link** tem `type` (paragraph | description), `intent`, `state` com `disabled`, e os booleanos `lead icon` e `action icon`. Inputs, Select, Dropdown, Context Switch, Segmented, Paginator, Tabs e List têm altura de 40px; Toggle, Chip, Badge, Tooltip e Avatar ficam em 32px.
> **Dropdown** tem `type = single select | multi select` e borda em todos os estados.

- **Action:** Button, Button Icon
- **Navigation:** Link, Segmented Buttons, menu-global (+ Product Switch, uso exclusivo no menu), Context Switch, Tabs, Breadcrumb, Paginator, Logout, Stepper, Accordion
- **Input:** Input Text, Input Paragraph, Input E-mail, Input Search, Input Token, Input Password, Input Select, Input File, Input Date, Checkbox, Radio Button, Dropdown, Toggle, Chip, Calendar (+ calendar/single)
- **Data Display:** Tags (+ tag-desktop/mobile/more/delivery), Badge, Table v2 (set `table`, variante `seleção`; peças `table row`, `table head row`, `table cell`, `table head cell`), Table Toolbar, Status Pill, Column Manager, List, Task List, Dashboard, Sort, Reorder, Avatar, Profile, Card, Credit Card, ID Card, Invoice, Inbox
- **Data Visualization:** Metric, Chart Bar, Chart Line, Chart Donut, Chart Legend, Chart Legend Item, Chart Tooltip (+ ícones Chart Bar Up/Down/Variation e Chart Pie)
- **Organismos (zonas dos templates):** Page Header, Notice Bar, Empty State, Dataset, Floating Action Bar, KPI Strip, Chart Card, **Content Card** (4 slots; superfícies padrão/sutil/destaque) — catálogo e regras em `references/ORGANISMOS.md`
- **Menu Accordion (WIP, não usar em telas):** `menu item` (publicado) e `menu accordion` (não publicado) pertencem ao Novo Menu Accordion; o menu das telas continua sendo o `menu-global`.
- **Feedback:** Tooltip, Toast, Alert Dialog, Modal, Progress Bar (WIP), Scrollbar, Loading, Alert Bar (intents: brand/informative/neutral/success/error/warning), Cookie, Bell, Money Notification Overlay (componente `overlay` publicado separado do Drawer — confirmado em 2026-10-16)
- **Brand:** Logo Olist, Ícones rebrand 24, **Ilustração** (`ilustracao`, moldura das ilustrações do brand: 60 cenas e 30 objetos em peças `.[base]`; catálogo em `references/ILUSTRACOES.md`)

⚠️ **Dark mode — pendente de exportação:** A collection `02. theme tokens` contém modo Dark no Figma, mas a API MCP não expõe os valores por modo. Para ativar dark mode no repositório, usar o plugin de exportação de tokens para gerar `html.dark { ... }` em `src/generated/variables.css`.

⚠️ **Tabelas e listagens (atualizado em 2026-10-20):** o set `table` agora é a **Tabela v2** (key `12ba612d280690ef4136a91d3396da8decc1c42f`, variante `seleção`), que substituiu o set `striped` × `caption` (key `00db8a69…`, fora da library). Para **listagens** use o organismo `dataset` inteiro (toolbar + tabela + paginação + estados). Use `table` sozinha só dentro de um Record. Peças como `table row`, `table cell` e `column manager` pertencem à tabela e não entram soltas em telas. Nunca use `TableCellExtended`, `Head` ou `Simple Cell` (não são mais publicados) nem células `.[base]` isoladas.

## Templates e Organismos (v2 — 2026-10-20)

- Os templates são **8 placeholders de zonas** (Landing, Landing foco, Dashboard, List, Record, Settings, Wizard, Estados), válidos para **todos os produtos** (ERP, Conta Digital, New Hub, E-commerce, Capital/Crédito, PDV, Envios e, no futuro, Checkout Admin). O produto só escolhe a variante do `Menu Global` e a paleta.
- Fluxo: produto → template (`references/TEMPLATES_PRODUTO.md`) → JSON do template (`references/templates/<id>.json`) → preencher cada zona só com os organismos permitidos (`references/ORGANISMOS.md`).
- Organismos marcados `planned` (Form Section, Section Rail, Summary Panel, Onboarding Checklist, Dashboard Toolbar, Hero, topo simples do Page Header, modo wizard do Floating Action Bar) **não existem**: sinalizar como lacuna, nunca construir à mão.
- **Produto sem variante no `Menu Global` (PDV, Checkout Admin):** não inventar a variante; usar a mais próxima, avisar e registrar o gap.

## Fonte dos Componentes React (Casos 1, 2, 8)

Buscar via `WebFetch` antes de gerar código React:
```
https://raw.githubusercontent.com/pedrohenriquevalentim/olist-ds/main/.claude/skills/olist-ds-specialist/references/COMPONENTES.md
```
Fallback: `references/COMPONENTES.md` local.
- Só usar componentes listados — nunca inventar
- Respeitar props exatas (nomes, tipos, valores do TypeScript)
- Imports de `src/components/NomeComponente`
- Ícones via `<Icon name="..." />` — nunca instalar pacotes externos

## Arquivos de Referência

| Arquivo | Quando ler |
|---|---|
| `references/VISAO_GERAL.md` | **Sempre primeiro** |
| `figma-config.json` + `references/FIGMA_CONFIG.md` | Antes de usar Figma MCP |
| `references/TEMPLATES_PRODUTO.md` + `references/templates/<id>.json` | Antes de criar telas (escolher template e zonas) |
| `references/ORGANISMOS.md` | Antes de preencher uma zona de template (inclui Content Card) |
| `references/ILUSTRACOES.md` + `references/ilustracoes-catalogo.json` | Antes de usar qualquer ilustração (moldura `ilustracao`) |
| `references/HARNEES_TELAS.md` | Antes de qualquer frame no Figma |
| `references/GLOSSARIO_PAPEIS_TEXTO.md` | Antes de nomear textos |
| `references/COMPONENTES.md` | Criando telas ou componentes React |
| `references/PADROES.md` | Criando telas de SDDs |
| `references/GOVERNANCA_TOKENS.md` | Escolhendo entre tokens semânticos parecidos |
| `references/CORES.md` / `TIPOGRAFIA.md` / `ESPACAMENTO.md` | Criando/revisando UI |
| `references/MAPA_FONTES.md` | Antes de criar qualquer coisa nova |
| `references/SDD_PARA_TELA.md` | Traduzindo SDDs/PRDs |
| `references/SDD_AVANCADO.md` | SDDs com RNFs, DACI, Métricas, Rollout |
| `references/UX_WRITING.md` | Criando ou revisando copy |
| `references/CHECKLIST_REVISAO.md` | Revisando telas |
| `references/METADATA_SCHEMA.md` | Gerando metadata.json (Caso 7) |
| `decisions/INDEX.md` | **Logo após VISAO_GERAL.md** |
| `decisions/technical/COMPONENTES_REACT.md` | Criando componentes React |
| `decisions/technical/TOKENS.md` | Regras de consumo de tokens |
| `decisions/technical/ICONES.md` | Usando ícones |
| `decisions/technical/ACESSIBILIDADE.md` | Elementos interativos |
| `decisions/technical/ASSETS_FIGMA.md` | Assets do Figma MCP |
| `decisions/ux-design/PRINCIPIOS.md` | Qualquer tarefa de UI |
| `decisions/ux-design/ESPACAMENTO_LAYOUT.md` | Definindo layout |
| `decisions/ux-design/TIPOGRAFIA.md` | Estilizando texto |
| `decisions/ux-design/FLUXO_PRD_FIGMA.md` | Traduzindo PRD em Figma |

## Figma Plugin API — Erros Comuns

| Regra | Correto | Errado |
|---|---|---|
| `layoutSizing` | Definir APÓS `appendChild` | Definir antes de inserir no pai |
| `counterAxisAlignItems` | `MIN` `MAX` `CENTER` `BASELINE` | `STRETCH` `END` |
| `primaryAxisAlignItems` | `MIN` `MAX` `CENTER` `SPACE_BETWEEN` | qualquer outro valor |
| Textos em cards | `textAutoResize='HEIGHT'` + `layoutSizingHorizontal='FILL'` | Texto com width fixo |
| Cards igual-altura | Grid `FIXED` + cards `FIXED` + `SPACE_BETWEEN` | `counterAxisAlignItems='STRETCH'` |
| Fonts | `await loadFontAsync` ANTES de editar texto | Editar sem carregar fonte |
| Spacer FILL | Só se card pai tiver altura `FIXED` | FILL dentro de card com HUG |
| `clipsContent` | **Sempre `false`** em todo frame — sem exceção | `true` corta componentes e estados de foco/hover |
| Espaçamento entre filhos | `itemSpacing` com múltiplo de 4px | Frame vazio como spacer entre elementos |
| Fills/strokes de qualquer frame | `importVariableByKeyAsync` + `setBoundVariableForPaint` com token semântico | RGB hardcoded mesmo que o valor seja "correto" |

## Regras Críticas

### Sempre:
- Workflow Figma faseado: listar TODAS as telas → validar → criar uma a uma aguardando feedback
- `GOVERNANCA_TOKENS.md` ao escolher entre tokens semânticos (não escolher só pelo valor resolvido)
- `SDD_AVANCADO.md` se o SDD tiver RNFs, DACI, Métricas, Rollout, Observabilidade
- `layoutSizing` APÓS `appendChild` — regra crítica da Figma Plugin API
- Protocolo de Inicialização de Arquivo (HARNEES_TELAS.md Seção 0) antes de qualquer `use_figma` que crie frames

### Nunca:
- Buscar componentes sem `includeLibraryKeys: searchPriority`
- Usar libraries de `blockedLibraries`
- Construir do zero o que já existe no DS (Button, Tag, Menu Global, Content Card, ilustrações, etc.)
- Inventar papéis de texto fora de `GLOSSARIO_PAPEIS_TEXTO.md`
- Usar plugin Figma intermediário — sempre `use_figma` direto
- Criar todas as telas de uma vez — sempre workflow faseado
- Hardcodar cores, fontes ou espaçamentos
- Escolher token semântico só pelo valor final — respeitar `doNotUseWhen` de `GOVERNANCA_TOKENS.md`
- **`clipsContent: true` em qualquer frame** — regra universal, não só zonas ERP; sempre `clipsContent: false`
- `strokes` diretamente em frames de zona (strokes: [])
- Mais de 1 ação primária no Page Header
- Instanciar `menu erp` em qualquer variante (removido — usar sempre `menu-global`)
- Usar `type=danger` em Button/Button Icon (não existe mais): ação destrutiva é `intent=danger`; nunca simular danger com cor solta, RGB ou token de feedback
- Instanciar `menu accordion` ou `menu item` (WIP) em telas
- Usar a arte `.[base] illustration` / `.[base] illustration asset` direto, ou recortar, redimensionar e recolorir uma ilustração: use a `ilustracao`
- Colocar card dentro de Content Card; montar card próprio com frames soltos quando o Content Card atende
- Montar tabelas ou listagens com células/frames isolados — usar o `dataset` (listagem) ou o set `table` (dentro de um Record)
- Remontar um organismo (Page Header, Dataset, KPI Strip, Chart Card…) com frames ou instâncias soltas
- Instanciar um organismo `planned` como se existisse
- Colocar um organismo em zona que não o aceita (ver `references/templates/<id>.json`)
- Omitir o padding e o gap `shape/spacing/x1` (8px) no frame raiz do template
- Hex solto como fill do frame raiz: use `color/background/surface/system` (raiz) e `color/background/surface/container` (zonas)
- No Caso 7: gerar código/docs sem exibir `metadata.json` completo e obter aprovação explícita
- **Criar frames vazios para adicionar espaçamento** — usar `itemSpacing` com múltiplo de 4px na propriedade `gap` do Auto Layout pai
- **RGB hardcoded em fills/strokes de qualquer frame ou primitivo** — mesmo que o valor numérico corresponda a um token semântico, a fill DEVE usar `importVariableByKeyAsync` + `setBoundVariableForPaint`; sem binding o Figma mostra hex solto e perde rastreabilidade
- **Exibir aviso de "library não subscrita" ao usuário** antes de tentar o sentinel import — ao detectar library ausente em `get_libraries`, silenciosamente executar o Protocolo de Inicialização (Seção 0, Passo 3 do `HARNEES_TELAS.md`); só reportar erro se o próprio import sentinel falhar
