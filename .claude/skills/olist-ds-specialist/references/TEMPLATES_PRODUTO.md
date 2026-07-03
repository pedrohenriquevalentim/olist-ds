# Templates de Página por Produto

**Versão:** 1.3  
**Última atualização:** 2026-07-03 (v1.3 — adicionada seção "Componentes Recomendados por Zona" por template, com base no inventário confirmado em `component-registry.json`; pontos em aberto documentados separadamente)  
**Fonte Figma:** `9pCeYLXBj1O0QPUiHANaqh` — Página "📐 Templates dos produtos - Inventário" (node `8063:818`)

> **Nota:** este arquivo Figma é **diferente** da library de componentes `design system (base)` (`HeyN4w209HWh8rfpTDiwyf`, ver `figma-config.json`). Os templates aqui são wireframes de estrutura/zona (frames com labels de texto, não componentes publicados) — verificado em 2026-07-03 via `get_metadata` direto nos nodes: `8063:818`, `8063:3669` e `8063:20969` continuam válidos e as dimensões batem exatamente com o documentado abaixo. Não há necessidade de migrar este conteúdo para a `design system (base)` — são artefatos de tipos diferentes (wireframe de layout vs. component library).

Antes de criar telas no Figma, identificar o PRODUTO no SDD/PRD e usar o template correspondente. As zonas descritas aqui refletem exatamente a estrutura definida no Figma.

---

## Sincronização com Figma

Os templates são mantidos no Figma como fonte da verdade:

- **ERP:** node `8063:3669`
- **Envios / Hub / Conta Digital:** node `8063:20969`

Quando o usuário pedir "sincronizar templates" ou "atualizar templates":
1. Acessar Figma MCP → arquivo `9pCeYLXBj1O0QPUiHANaqh`, nodes acima
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

Se o SDD não especificar o produto: **perguntar ao usuário.**

---

## Template: ERP

**Figma node:** `8063:3669`  
**Viewport:** 1588 x 832px  
**Layout:** horizontal (Zona A + Container)

```
┌───────────────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────────────────────┐ │
│ │           │ │  Zona B — Top Bar                    68px h │ │
│ │           │ │  Com Breadcrumb e demais ações               │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │  Zona A   │ │  Zona C — Page Header               124px h │ │
│ │  304px w  │ │  Heading + Input de pesquisa e                │ │
│ │           │ │  ações de Filtros                             │ │
│ │  Novo     │ ├──────────────────────────────────────────────┤ │
│ │  Menu     │ │                                              │ │
│ │  Global   │ │  Zona D — Content Area              560px h │ │
│ │           │ │                                              │ │
│ │  Sidebar  │ │  Tabela / Formulário / Cards /               │ │
│ │  fixa à   │ │  Dashboard                                   │ │
│ │  esquerda │ │                                              │ │
│ │           │ │                                              │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │           │ │  Zona E — Paginação (se necessário)  80px h │ │
│ └──────────┘ └──────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

### Zonas ERP

| Zona | Nome | Descrição | Dimensão |
|---|---|---|---|
| **A** | Novo Menu Global | Sidebar fixa à esquerda | 304px largura, 100% altura |
| **B** | Top Bar | Breadcrumb e demais ações | 100% largura, 68px altura |
| **C** | Page Header | Heading + Input de pesquisa + ações de filtros | 100% largura, 124px altura |
| **D** | Content Area | Área principal (tabela, form, cards, dashboard) | 100% largura, flex (preenche restante) |
| **E** | Paginação | Paginação numérica (se necessário) | 100% largura, 80px altura |

### Regras ERP

- Container (Zona B-E) não tem gap entre zonas (gap: 0)
- Fundo do Container: `--backgrounds/bg` (`#fcfbf8`)
- Zona A: fundo neutro (`#d9d9d9` no wireframe)
- Zona E é opcional — só aparece quando há tabela com muitos itens
- Máximo 1 CTA primário na Zona B (Top Bar)

### Componentes Recomendados por Zona — ERP

> Baseado no inventário confirmado em `component-registry.json` (63 componentes, pós-republicação de 2026-07-03). Zona A não entra aqui — é exclusiva do `Menu Global` (ver Regras acima). Itens marcados ⚠️ são percepção, não regra fechada — ver "Observações e Pontos em Aberto" ao final deste arquivo.

| Zona | Componentes recomendados |
|---|---|
| **B** — Top Bar | `Breadcrumb` ⚠️ (harness histórico assume texto puro, mas hoje existe componente real), `Button` (primary, máx 1), `Button Icon` |
| **C** — Page Header | `Input Search`, `Button Icon` (filtro), `Tag` ou `Badge` ⚠️ (filtro ativo) — Heading é Text Style, não componente |
| **D** — Content Area | `Table`, `Sort`, `Checkbox`, `Radio Button`, `Toggle`, `Chip`, `Dropdown`, `Input Text`/`Input Email`/`Input Search`/`Input Token`/`Input Password`/`Input File`/`Input Select`/`Input Paragraph`, `Card`, `Segmented Buttons` ou `Tabs` ⚠️ (sub-navegação, escolha em aberto), `Tooltip`, `Avatar` |
| **E** — Paginação | `Paginator` |

### Estrutura de Layout — ERP (referência para use_figma)

```json
{
  "template": "erp",
  "layout": {
    "direction": "horizontal",
    "gap": 0,
    "children": [
      {
        "id": "zona-a",
        "type": "component",
        "component": "Menu Global",
        "variant": { "produto": "ERP" },
        "width": 304
      },
      {
        "id": "container",
        "type": "frame",
        "direction": "vertical",
        "gap": 0,
        "children": [
          { "id": "zona-b", "type": "frame", "height": 68, "..." : "Top Bar" },
          { "id": "zona-c", "type": "frame", "height": 124, "..." : "Page Header" },
          { "id": "zona-d", "type": "frame", "..." : "Content Area" },
          { "id": "zona-e", "type": "frame", "height": 80, "..." : "Paginação" }
        ]
      }
    ]
  }
}
```

---

## Template: Envios | Hub de Integração | Internet Banking (Conta Digital)

**Figma node:** `8063:20969`  
**Viewport:** 1440 x 852px  
**Layout:** horizontal (Zona A + Main)

```
┌───────────────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────────────────────┐ │
│ │           │ │  Zona B — Top Bar                    80px h │ │
│ │           │ │  Ações                                       │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │  Zona A   │ │  Zona C — Page Header + Subtitle     68px h │ │
│ │  304px w  │ │                                              │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │  Novo     │ │                                              │ │
│ │  Menu     │ │  Zona D — Content Area              flex    │ │
│ │  Global   │ │                                              │ │
│ │           │ │  Tabela / Cards / Lista /                    │ │
│ │  Sidebar  │ │  Empty State / Summary Card                  │ │
│ │  fixa à   │ │                                              │ │
│ │  esquerda │ │                                              │ │
│ │           │ │                                              │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │           │ │  Zona E — Sticky ou paginação        80px h │ │
│ └──────────┘ └──────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

### Zonas Envios / Hub / Conta Digital

| Zona | Nome | Descrição | Dimensão |
|---|---|---|---|
| **A** | Novo Menu Global | Sidebar fixa à esquerda (mesmo componente do ERP) | 304px largura, 100% altura |
| **B** | Top Bar | Ações do produto (logo, CTA, carrinho, avatar) | 100% largura, 80px altura |
| **C** | Page Header + Subtitle | Heading + descrição da página | 100% largura, 68px altura |
| **D** | Content Area | Área principal (tabela, cards, lista, empty state, summary card) | 100% largura, flex (preenche restante) |
| **E** | Sticky ou paginação | Barra fixa inferior ou paginação | 100% largura, 80px altura |

### Regras Envios / Hub / Conta Digital

- Container (Main) tem gap de **24px** entre zonas
- Zona C SEMPRE inclui subtitle (descrição da página abaixo do heading)
- Zona D pode conter Summary Card (fundo azul claro) antes do conteúdo principal
- Zona E é opcional — "sticky" para ações de confirmação ou paginação
- A Zona A usa o componente **Menu Global** do inventário (304px), com variante `produto` adequada ao contexto (ex: `Envios`, `Conta Digital`, `Ecommerce`)

### Componentes Recomendados por Zona — Envios / Hub / Conta Digital

> Baseado no inventário confirmado em `component-registry.json`. Zona A não entra aqui — é exclusiva do `Menu Global`. Itens marcados ⚠️ são percepção, não regra fechada — ver "Observações e Pontos em Aberto" ao final deste arquivo.

| Zona | Componentes recomendados |
|---|---|
| **B** — Top Bar | `Logo`, `Button` (primary, máx 1), `Avatar`, `Badge` ⚠️ (contador de notificação, inferência), `Context Switch` ⚠️ (propósito não confirmado) |
| **C** — Page Header + Subtitle | Nenhum — Heading e Subheading são Text Styles, não componentes |
| **D** — Content Area | `Card` (para "Summary Card" — gap conhecido, sem variante dedicada), mesmo conjunto de Form/Tabela/Dashboard da Zona D do ERP, `Input Search` (aqui, dentro do padrão — não solto como no ERP) |
| **E** — Sticky ou Paginação | `Button` primary + `Button` secondary (máx 2, modo sticky) ou `Paginator` |

### Estrutura de Layout — Envios / Hub / Conta Digital (referência para use_figma)

```json
{
  "template": "envios",
  "layout": {
    "direction": "horizontal",
    "gap": 0,
    "children": [
      {
        "id": "zona-a",
        "type": "component",
        "component": "Menu Global",
        "variant": { "produto": "Envios" },
        "width": 304
      },
      {
        "id": "main",
        "type": "frame",
        "direction": "vertical",
        "gap": 24,
        "children": [
          { "id": "zona-b", "type": "frame", "height": 80, "..." : "Top Bar" },
          { "id": "zona-c", "type": "frame", "height": 68, "..." : "Page Header + Subtitle" },
          { "id": "zona-d", "type": "frame", "..." : "Content Area" },
          { "id": "zona-e", "type": "frame", "height": 80, "..." : "Sticky ou paginação" }
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

- **`Breadcrumb`:** o harness (`HARNEES_TELAS.md`) assume "texto puro, sem componente DS" na Zona B do ERP. Hoje existe um `Breadcrumb` component_set real na `design system (base)`. Vale decidir se passa a usar a instância real.
- **`Tag` vs `Badge`:** a library tem os dois desde a republicação. Não está claro se são intercambiáveis ou se cada um tem um uso específico (ex: `Tag` para status semântico, `Badge` para contador numérico). Documentado como "ou" nas tabelas acima até esclarecer.
- **`Segmented Buttons` vs `Tabs`:** ambos parecem cobrir sub-navegação dentro da Zona D (padrão Detalhe). O harness só menciona `Segmented Buttons`; `Tabs` é mais novo no inventário. Confirmar qual é o pretendido antes de padronizar.
- **`Context Switch`:** componente novo, propósito não confirmado — nome sugere troca de contexto/workspace, hipótese de uso na Zona B (Top Bar) dos templates Envios/Hub/Conta Digital, mas isso é inferência, não fato verificado.
- **`Tooltip` e `Cookie`:** não pertencem a nenhuma zona específica — são overlays (Tooltip ancorado a qualquer elemento interativo; Cookie provavelmente banner de página inteira).
- **`Sort`:** provavelmente acoplado ao cabeçalho de coluna da `Table`, não uma peça solta de zona — não incluído como item independente nas tabelas acima por esse motivo, mas fica registrado aqui como parte do padrão Tabela.

---

## Diferenças entre Templates

| Aspecto | ERP | Envios / Hub / Conta Digital |
|---|---|---|
| **Zona A (Sidebar)** | Novo Menu Global (304px) | Novo Menu Global (304px) — IGUAL |
| **Zona B (Top Bar)** | 68px — Breadcrumb + ações | 80px — Ações do produto |
| **Zona C (Header)** | 124px — Heading + pesquisa + filtros | 68px — Heading + subtitle |
| **Zona D (Content)** | flex — conteúdo principal | flex — conteúdo principal |
| **Zona E (Bottom)** | 80px — Paginação numérica | 80px — Sticky ou paginação |
| **Gap entre zonas** | 0px | 24px |
| **Breadcrumb** | Sim (Zona B) | Não |
| **Subtitle na página** | Não | Sim (Zona C) |
| **Input de pesquisa** | Zona C (junto ao header) | Zona D (dentro do content) |

---

## Identificador de Template

> Referência interna — usado para identificar o template correto ao planejar a tela antes de construir via `use_figma`.

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
| `"erp"` | ERP | `8063:3669` |
| `"envios"` | Envios | `8063:20969` |
| `"conta-digital"` | Conta Digital (Internet Banking) | `8063:20969` |
| `"hub"` | Hub de Integração | `8063:20969` |

`"envios"`, `"conta-digital"` e `"hub"` compartilham o mesmo template.

---

## Regra para Claude

1. Ler o SDD → identificar produto (pelas palavras-chave)
2. Consultar este arquivo → usar o template correto com as zonas definidas
3. Construir o frame no Figma respeitando a hierarquia de zonas (A → B → C → D → E) via use_figma
4. Respeitar gaps: 0px para ERP, 24px para Envios/Hub/Conta Digital
5. Zona E é opcional — incluir apenas quando fizer sentido (tabela com paginação, ações fixas)
6. Se o SDD não especificar o produto → **perguntar ao usuário**
7. Nunca misturar zonas de templates diferentes

---

*Fonte da verdade: Figma arquivo `9pCeYLXBj1O0QPUiHANaqh`, página "📐 Templates dos produtos - Inventário"*
