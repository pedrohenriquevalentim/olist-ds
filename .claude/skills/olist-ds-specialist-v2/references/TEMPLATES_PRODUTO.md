# Templates de Página por Produto

**Versão:** 1.1  
**Última atualização:** 2026-06-03  
**Fonte Figma:** `JAa7qFjKNJFOj9RJ7bmGU5` — Página "📐 Templates dos produtos - Inventário" (node `1:10998`)

Antes de gerar qualquer screen-spec.json, identificar o PRODUTO no SDD/PRD e usar o template correspondente. As zonas descritas aqui refletem exatamente a estrutura definida no Figma.

---

## Sincronização com Figma

Os templates são mantidos no Figma como fonte da verdade:

- **ERP:** node `1:11003`
- **Envios / Hub / Conta Digital:** node `1:11016`

Quando o usuário pedir "sincronizar templates" ou "atualizar templates":
1. Acessar Figma MCP → arquivo `JAa7qFjKNJFOj9RJ7bmGU5`, nodes acima
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

**Figma node:** `1:11003`  
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
│ │  Menu ERP │ ├──────────────────────────────────────────────┤ │
│ │           │ │                                              │ │
│ │  Sidebar  │ │  Zona D — Content Area              flex    │ │
│ │  fixa à   │ │  Tabela / Formulário / Cards / Dashboard     │ │
│ │  esquerda │ │                                              │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │           │ │  Zona E — Paginação (se necessário)  80px h │ │
│ └──────────┘ └──────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

### Zonas ERP

| Zona | Nome | Descrição | Dimensão |
|---|---|---|---|
| **A** | Menu ERP | Sidebar fixa à esquerda | 304px largura, 100% altura |
| **B** | Top Bar | Breadcrumb e demais ações | 100% largura, 68px altura |
| **C** | Page Header | Heading + Input de pesquisa + ações de filtros | 100% largura, 124px altura |
| **D** | Content Area | Área principal (tabela, form, cards, dashboard) | 100% largura, flex |
| **E** | Paginação | Paginação numérica (se necessário) | 100% largura, 80px altura |

### Regras ERP

- Gap entre zonas: **0px**
- Zona E é opcional
- Máximo 1 CTA primário na Zona B
- Largura do conteúdo: 1284px (1588 - 304)

### JSON ERP

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
        "component": "Menu ERP",
        "variant": { "stage": "0" },
        "width": 304
      },
      {
        "id": "container",
        "type": "frame",
        "direction": "vertical",
        "gap": 0,
        "children": [
          { "id": "zona-b", "type": "frame", "height": 68 },
          { "id": "zona-c", "type": "frame", "height": 124 },
          { "id": "zona-d", "type": "frame" },
          { "id": "zona-e", "type": "frame", "height": 80 }
        ]
      }
    ]
  }
}
```

---

## Template: Envios | Hub de Integração | Internet Banking (Conta Digital)

**Figma node:** `1:11016`  
**Viewport:** 1440 x 852px  
**Layout:** horizontal (Zona A + Main)

```
┌───────────────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────────────────────┐ │
│ │           │ │  Zona B — Top Bar                    80px h │ │
│ │           │ │  Ações                                       │ │
│ │  Zona A   │ ├──────────────────────────────────────────────┤ │
│ │  304px w  │ │  Zona C — Page Header + Subtitle     68px h │ │
│ │           │ ├──────────────────────────────────────────────┤ │
│ │  Menu ERP │ │                                              │ │
│ │           │ │  Zona D — Content Area              flex    │ │
│ │  Sidebar  │ │  Tabela / Cards / Lista / Empty State        │ │
│ │  fixa à   │ │                                              │ │
│ │  esquerda │ ├──────────────────────────────────────────────┤ │
│ │           │ │  Zona E — Sticky ou paginação        80px h │ │
│ └──────────┘ └──────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

### Zonas Envios / Hub / Conta Digital

| Zona | Nome | Descrição | Dimensão |
|---|---|---|---|
| **A** | Menu ERP | Sidebar fixa à esquerda (mesmo componente do ERP) | 304px largura, 100% altura |
| **B** | Top Bar | Ações do produto | 100% largura, 80px altura |
| **C** | Page Header + Subtitle | Heading + descrição da página | 100% largura, 68px altura |
| **D** | Content Area | Área principal | 100% largura, flex |
| **E** | Sticky ou paginação | Barra fixa inferior ou paginação | 100% largura, 80px altura |

### Regras Envios / Hub / Conta Digital

- Gap entre zonas: **24px**
- Zona C SEMPRE inclui subtitle
- Zona E é opcional
- Largura do conteúdo: 1136px (1440 - 304)

### JSON Envios / Hub / Conta Digital

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
        "component": "Menu ERP",
        "variant": { "stage": "0" },
        "width": 304
      },
      {
        "id": "main",
        "type": "frame",
        "direction": "vertical",
        "gap": 24,
        "children": [
          { "id": "zona-b", "type": "frame", "height": 80 },
          { "id": "zona-c", "type": "frame", "height": 68 },
          { "id": "zona-d", "type": "frame" },
          { "id": "zona-e", "type": "frame", "height": 80 }
        ]
      }
    ]
  }
}
```

---

## Diferenças entre Templates

| Aspecto | ERP | Envios / Hub / Conta Digital |
|---|---|---|
| **Viewport** | 1588 x 832 | 1440 x 852 |
| **Zona B** | 68px — Breadcrumb + ações | 80px — Ações do produto |
| **Zona C** | 124px — Heading + search + filtros | 68px — Heading + subtitle |
| **Gap entre zonas** | 0px | 24px |
| **Largura conteúdo** | 1284px | 1136px |

---

## Template Mapping no screen-spec.json

| template | Produtos | Figma node |
|---|---|---|
| `"erp"` | ERP | `1:11003` |
| `"envios"` | Envios | `1:11016` |
| `"conta-digital"` | Conta Digital | `1:11016` |
| `"hub"` | Hub de Integração | `1:11016` |

---

*Fonte da verdade: Figma arquivo `JAa7qFjKNJFOj9RJ7bmGU5`*
