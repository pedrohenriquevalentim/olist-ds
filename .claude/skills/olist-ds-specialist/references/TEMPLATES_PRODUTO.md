# Templates de Página por Produto

**Versão:** 1.8  
**Última atualização:** 2026-08-25 (v1.8 — template unificado: Envios, Hub de Integração e Conta Digital (Internet Banking) passam a usar o mesmo template do ERP. Removido o segundo template. Todos os produtos agora mapeiam para o node ERP `8790:9484`.)  
**Fonte Figma:** `HeyN4w209HWh8rfpTDiwyf` — arquivo `design system (base)`, node raiz `8790:9475`

> **Nota:** os templates foram migrados para o arquivo `design system (base)` (`HeyN4w209HWh8rfpTDiwyf`, ver `figma-config.json`) — o arquivo anterior (`9pCeYLXBj1O0QPUiHANaqh`) foi esvaziado e não deve mais ser referenciado. O node raiz `8790:9475` foi verificado em 2026-08-24 via `get_metadata` e retorna conteúdo. Os sub-nodes específicos de ERP (`8063:3669`) e Envios/Hub/Conta Digital (`8063:20969`) usam IDs do arquivo antigo e precisam ser re-verificados no novo arquivo para obter os IDs corretos.

Antes de criar telas no Figma, identificar o PRODUTO no SDD/PRD e usar o template correspondente. As zonas descritas aqui refletem exatamente a estrutura definida no Figma.

---

## Sincronização com Figma

Os templates são mantidos no Figma como fonte da verdade:

- **Raiz:** node `8790:9475` (arquivo `HeyN4w209HWh8rfpTDiwyf`)
- **Template único (todos os produtos):** node `8790:9484`

Quando o usuário pedir "sincronizar templates" ou "atualizar templates":
1. Acessar Figma MCP → arquivo `HeyN4w209HWh8rfpTDiwyf`, node raiz `8790:9475`
2. Usar `get_design_context` para extrair zonas atualizadas
3. Atualizar este arquivo com as mudanças

---

## Como Identificar o Produto

Palavras-chave no SDD que indicam o produto:

| Produto | Palavras-chave |
|---|---|
| **ERP** | ERP, pedidos, produtos, estoque, cadastros, vendedores, embalagens, notas fiscais, catálogo |
| **Envios** | envios, frete, etiqueta, rastreio, transportadora, carteira de frete, créditos de frete |
| **Conta Digital** | conta digital, internet banking, saldo, extrato, transferência, Pix, boleto, pagamento |
| **Hub** | hub, integração, marketplace, canal de venda, sincronização |

> **Todos os produtos usam o mesmo template (ERP).** A identificação de produto serve apenas para escolher a variante correta do `Menu Global` (prop `produto`).

Se o SDD não especificar o produto: **perguntar ao usuário.**

---

## Template: ERP

**Figma node:** `8790:9484`  
**Viewport:** 1366 × 768px  
**Layout:** horizontal (Zona A + Container)

> **v1.5 — alinhado ao ERP Real ("Pagina média"):** viewport reduzido, header dividido em Top Bar + Título, Filter Bar separada do header, Zona D (Tabs) adicionada, Content Area reajustada.

```
┌───────────────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────────────────────┐ │
│ │           │ │  Zona B — Top Bar + Título          120px h │ │
│ │           │ │  Nav Bar 47px: Breadcrumb + Ações            │ │
│ │           │ │  Título  53px: Heading + Subtitle            │ │
│ │  Zona A   │ ├──────────────────────────────────────────────┤ │
│ │  304px w  │ │  Zona C — Filter Bar                 54px h │ │
│ │           │ │  Input Search + Tags (filtros) + Link        │ │
│ │  menu-    │ ├──────────────────────────────────────────────┤ │
│ │  global   │ │  Zona D — Tabs                       48px h │ │
│ │  Produto= │ │  tabs DS real (sub-navegação)                │ │
│ │  ERP      │ ├──────────────────────────────────────────────┤ │
│ │           │ │                                              │ │
│ │  Sidebar  │ │  Zona E — Content Area              flex h  │ │
│ │  fixa à   │ │  TableCellExtended / Form / Cards /          │ │
│ │  esquerda │ │  Dashboard                                   │ │
│ │  752px h  │ │                                              │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │           │ │  Zona F — Bottom Bar                 72px h │ │
│ │           │ │  Paginator + Totais                          │ │
│ └──────────┘ └──────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

### Zonas ERP

| Zona | Nome | Descrição | Dimensão |
|---|---|---|---|
| **A** | Menu Global | Sidebar fixa à esquerda — componente `menu-global` com `Produto=ERP` | 304px largura, 752px altura (com padding 8px no frame raiz) |
| **B** | Top Bar + Título | Nav Bar (Breadcrumb + ações) + Título (Heading + Subtitle) | 100% largura, 116px altura |
| **C** | Filter Bar | Input Search + Botões de filtro rápido | 100% largura, 72px altura |
| **D** | Tabs | Sub-navegação em abas (`tabs` DS real) + ações de visualização | 100% largura, 48px altura |
| **E** | Content Area | Área principal (tabela, form, cards, dashboard) | 100% largura, flex altura |
| **F** | Bottom Bar | Paginação + totais | 100% largura, 72px altura |

### Regras ERP

**Convenções de layout obrigatórias (todas as telas ERP) — definidas em 2026-08-29:**

| Elemento | Regra |
|---|---|
| Frame raiz | `padding: 8px` em todos os lados · `fills: #F1F0E8` · `gap: 8px` entre Zona A e Container |
| Container (Zonas B–F) | `cornerRadius: 12px` · `fills: #fcfbf8` · `gap: 0` entre zonas |
| Zona B | `topLeftRadius: 12` · `topRightRadius: 12` · `bottomLeftRadius: 0` · `bottomRightRadius: 0` |
| Zona C | `cornerRadius: 0` · botões sempre `size=small` · label do `input search` oculto (`visible: false`) |
| Zona D | `cornerRadius: 0` |
| Zona E | `cornerRadius: 0` (ou `bottomLeft/bottomRight: 12` quando não há Zona F) |
| Zona F | `topLeftRadius: 0` · `topRightRadius: 0` · `bottomLeftRadius: 12` · `bottomRightRadius: 12` |
| Todas as zonas | `clipsContent: false` · `strokes: []` — nunca aplicar stroke diretamente em frame de zona |

**Demais regras:**

- Zona A: componente `menu-global` com `Produto=ERP` — NÃO usar `menu erp` (stage=*) que foi descontinuado
- Zona B: botões da action bar sempre `size=small` — nunca `big` ou `medium`
- Zona B é dividida internamente: `nav header` (47px) + gap (8px no itemSpacing) + `page title` (49px) = ~116px total
- Zona C: `input search` sem label visível (layer `"label"` com `visible = false` após `appendChild`)
- Zona D (Tabs) é opcional — usar apenas quando houver sub-navegação na página
- Zona F é opcional — só aparece quando há tabela com muitos itens; quando ausente, Zona E recebe `bottomLeft/bottomRight: 12`
- Zona E (padrão Tabela): usar `TableCellExtended` (`8ba1fe2c9d32e56a058c3946e17142223784c557`) — nunca frames primitivos nem `head`/`simple cell` isolados
- Padding lateral interno de todas as zonas: **25px** (content width efetiva 1012px dentro de 1038px de container)
- Máximo 1 CTA primário na Zona B (action bar)
- Zona D: usar o componente `tabs` do DS (confirmado no frame real 10170:11866) — **não usar `Segmented Buttons`**

### Componentes Recomendados por Zona — ERP

> Alinhado aos frames reais do Figma (nodes 10156:8272, 10170:9662, 10170:11866) em 2026-08-25. Zona A não entra aqui — é exclusiva do `Menu Global`. Itens marcados ⚠️ são percepção, não regra fechada — ver "Observações e Pontos em Aberto" ao final deste arquivo.

| Zona | Componentes recomendados |
|---|---|
| **B** — Top Bar + Título | `breadcrumb` + `button` (back, à esquerda do breadcrumb); action bar direita: `button` × até 3 + `dropdown` × 1; título via Text Style H1 + body text |
| **C** — Filter Bar | `input search` (460px fixo) + `button` × N como filtros rápidos (secondary/tertiary); **não usar `tag` como filtro ativo nesta zona** |
| **D** — Tabs | `tabs` (componente DS real, confirmado em frame 10170:11866) + `button` (ação secundária) + `button icon` (toggle de modo de visualização) |
| **E** — Content Area | `Table`, `Sort`, `Checkbox`, `Radio Button`, `Toggle`, `Chip`, `Dropdown`, `Input Text`/`Input Email`/`Input Search`/`Input Token`/`Input Password`/`Input File`/`Input Select`/`Input Paragraph`, `Card`, `Tooltip`, `Avatar` |
| **F** — Bottom Bar | `Paginator`, Text Styles para totais (sem componente dedicado) |

### Diagramação Interna das Zonas — ERP

> Medidas extraídas dos frames reais do Figma em 2026-08-25. Padding lateral interno de todas as zonas: **25px** (content width efetiva = 1012px dentro de 1062px de container).

#### Zona B — Top Bar + Título (116px) · node `10156:8272`

```
┌─────────────────────────────────────── 1062px ──────────────────────────────────────┐
│  25px │                         nav header · 47px                          │  25px  │
│       │ [button-back] [breadcrumb ────────] [──── space ────] [btn btn btn dropdown] │
│  25px │                         gap · 20px                                 │  25px  │
│       │                         page title · 49px                          │        │
│       │ [H1 Título da página                                              ] │        │
│       │ [description text                                                 ] │        │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

- `nav header` (47px): `breadcrumb` à esquerda + `action bar` à direita (`button` × até 3 + `dropdown` × 1, gap 8px entre itens)
- `page title` (49px, y=67): título H1 + description text abaixo; hidden: `tag` de feedback (BETA etc.)
- Gap entre nav header e page title: **20px** (y do container de título = 67px)

#### Zona C — Filter Bar (72px) · node `10170:9662`

```
┌─────────────────────────────────────── 1062px ──────────────────────────────────────┐
│  25px │ [input search ──── 460px ────]  8px  [btn btn btn btn──107px──]    │  25px  │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

- `input search`: largura fixa **460px**, altura **72px** (campo + label — altura natural do componente DS)
- Gap entre input e grupo de botões: **8px**
- Grupo de filtros: `button` × 3 (64px cada, gap 8px) + `button` largo (107px) para filtros com label
- **Não usar `tag` componente aqui** — os filtros rápidos são `button` (secondary/tertiary)

#### Zona D — Tabs (48px) · node `10170:11866`

```
┌─────────────────────────────────────── 1062px ──────────────────────────────────────┐
│  25px │ [tabs ──────────── 572px ──────────]  8px  [btn · 63px]  [btn-icon · 32px]  │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

- `tabs`: componente DS real (**não** `Segmented Buttons`), largura 572px
- Gap entre tabs e ações da direita: **8px**
- `button` (63px): ação contextual (ex: filtro de período)
- `button icon` (32px): toggle de modo de visualização (lista/grid)

### Estrutura de Layout — ERP (referência para use_figma)

```json
{
  "template": "erp",
  "figmaNode": "8790:9484",
  "viewport": "1366x768",
  "paddingLateral": 25,
  "contentWidth": 1012,
  "frameRaiz": {
    "padding": 8,
    "fills": "#F1F0E8",
    "gap": 8,
    "note": "padding 8px todos os lados; gap 8px entre Zona A e Container"
  },
  "layout": {
    "direction": "horizontal",
    "children": [
      {
        "id": "zona-a",
        "type": "component",
        "component": "menu-global",
        "componentKey": "c76f80e6de1b8c4bd100b60329f3d68d28653e68",
        "prop": "Produto=ERP",
        "width": 304,
        "height": 752,
        "note": "altura = 768 - 8(top) - 8(bottom) = 752px"
      },
      {
        "id": "container",
        "type": "frame",
        "direction": "vertical",
        "gap": 0,
        "width": 1038,
        "height": 752,
        "fills": "#fcfbf8",
        "cornerRadius": 12,
        "note": "largura = 1366 - 8(left) - 8(right) - 304(menu) - 8(gap) = 1038px",
        "children": [
          {
            "id": "zona-b", "height": 116, "label": "Top Bar + Título",
            "topLeftRadius": 12, "topRightRadius": 12,
            "bottomLeftRadius": 0, "bottomRightRadius": 0,
            "children": [
              { "id": "nav-header", "height": 47, "content": "breadcrumb + action-bar (botões size=small)" },
              { "id": "page-title", "height": 49, "content": "H1 + description" }
            ]
          },
          {
            "id": "zona-c", "height": 72, "label": "Filter Bar", "cornerRadius": 0,
            "content": "input-search(460px, label oculto) + gap(8px) + button×N(size=small)"
          },
          {
            "id": "zona-d", "height": 48, "label": "Tabs (opcional)", "cornerRadius": 0,
            "content": "tabs(572px) + gap(8px) + button + button-icon"
          },
          {
            "id": "zona-e", "label": "Content Area", "cornerRadius": 0,
            "tableComponent": "TableCellExtended (8ba1fe2c...)",
            "note": "cornerRadius bottom 12px quando Zona F ausente"
          },
          {
            "id": "zona-f", "height": 72, "label": "Bottom Bar (opcional)",
            "topLeftRadius": 0, "topRightRadius": 0,
            "bottomLeftRadius": 12, "bottomRightRadius": 12,
            "content": "Paginator + totais"
          }
        ]
      }
    ]
  }
}
```

---

## Observações e Pontos em Aberto (componentes por zona)

Percepção registrada em 2026-07-03, ainda **não confirmada com o time de design** — não tratar como regra do harness até validação.

> Formalizado como decisão pendente em `decisions/ux-design/COMPONENTES_POR_ZONA.md` (com contexto, impacto e como resolver cada item) — leia lá antes de decidir sozinho entre as opções em disputa.
>
> **`Breadcrumb` resolvido em 2026-07-04:** passa a ser a instância real do componente DS na Zona B do ERP — removido desta lista. Ver `HARNEES_TELAS.md` e `decisions/ux-design/COMPONENTES_POR_ZONA.md`.

- **`Tag` vs `Badge`:** a library tem os dois desde a republicação. Não está claro se são intercambiáveis ou se cada um tem um uso específico (ex: `Tag` para status semântico, `Badge` para contador numérico). Documentado como "ou" nas tabelas acima até esclarecer.
- ~~**`Segmented Buttons` vs `Tabs` (Zona D ERP):**~~ **Resolvido em 2026-08-25:** o componente `tabs` existe no DS e foi confirmado no frame real `10170:11866` (instance name="tabs"). Usar `tabs` diretamente na Zona D — remover qualquer referência a `Segmented Buttons` como aproximação.
- **`Context Switch`:** componente novo, propósito não confirmado — nome sugere troca de contexto/workspace, mas uso e zona não foram validados com o time de design.
- **`Tooltip` e `Cookie`:** não pertencem a nenhuma zona específica — são overlays (Tooltip ancorado a qualquer elemento interativo; Cookie provavelmente banner de página inteira).
- **`Sort`:** provavelmente acoplado ao cabeçalho de coluna da `Table`, não uma peça solta de zona — não incluído como item independente nas tabelas acima por esse motivo, mas fica registrado aqui como parte do padrão Tabela.

---

## Identificador de Template

> Referência interna — usado para identificar o template correto ao planejar a tela antes de construir via `use_figma`. Todos os produtos usam o mesmo template ERP.

```json
{
  "project": {
    "name": "Gestão de Estoque",
    "product": "erp",
    "template": "erp"
  }
}
```

### Valores possíveis:

| template | Produtos | Figma node |
|---|---|---|
| `"erp"` | ERP, Envios, Conta Digital (Internet Banking), Hub de Integração | `8790:9484` |

> A variante do `Menu Global` (prop `produto`) ainda varia por produto: `ERP`, `Envios`, `Conta Digital`, `Ecommerce`, `Agentes de IA`, `Minha Conta`.

---

## Regra para Claude

1. Ler o SDD → identificar produto (pelas palavras-chave) → escolher a variante correta do `Menu Global`
2. Todos os produtos usam o **template ERP** (Zonas A → B → C → D → E → F)
3. Construir o frame no Figma respeitando a hierarquia de zonas via `use_figma`
4. Gap entre zonas: **0px** (único padrão)
5. Zonas D e F são opcionais — incluir apenas quando fizer sentido
6. Se o SDD não especificar o produto → **perguntar ao usuário**

---

*Fonte da verdade: Figma arquivo `HeyN4w209HWh8rfpTDiwyf` (`design system (base)`), node raiz `8790:9475`*
