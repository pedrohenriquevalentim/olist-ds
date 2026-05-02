# Page Patterns

Common page layouts used across Olist ERP products. Use these as starting points when building screens from SDDs.

## Pattern: Data Table Page

Most common page type. Lists data with filters, actions, and pagination.

```
┌─ MenuErp ─────────────────────────────────────────────────┐
│ ┌─ Sidebar ─┐ ┌─ Content ──────────────────────────────┐  │
│ │           │ │                                         │  │
│ │ Nav items │ │  Page Title              [+ New] [⋮]   │  │
│ │           │ │                                         │  │
│ │           │ │  ┌─ Filters ─────────────────────────┐  │  │
│ │           │ │  │ [Search...] [Status ▼] [Date ▼]   │  │  │
│ │           │ │  └───────────────────────────────────┘  │  │
│ │           │ │                                         │  │
│ │           │ │  ┌─ Table ───────────────────────────┐  │  │
│ │           │ │  │ ☐ Col A ↕ │ Col B │ Status │ Ações│  │  │
│ │           │ │  │ ☐ data    │ data  │ Badge  │ •••  │  │  │
│ │           │ │  │ ☐ data    │ data  │ Badge  │ •••  │  │  │
│ │           │ │  │ ☐ data    │ data  │ Badge  │ •••  │  │  │
│ │           │ │  └───────────────────────────────────┘  │  │
│ │           │ │                                         │  │
│ │           │ │  Mostrando 1-20 de 248    < 1 2 3 >    │  │
│ │           │ │                                         │  │
│ │           │ └─────────────────────────────────────────┘  │
│ └───────────┘                                              │
└────────────────────────────────────────────────────────────┘
```

**Required states:**
1. Default (with data)
2. Loading (skeleton rows)
3. Empty (illustration + "Nenhum resultado encontrado" + action)
4. Error (error message + retry button)
5. With selection (checkbox selected, bulk action bar visible)

## Pattern: Form Page

Create or edit a resource.

```
┌─ Content ────────────────────────────────────────────┐
│                                                       │
│  ← Voltar    Edit [Resource Name]                     │
│                                                       │
│  ┌─ Section "Dados gerais" ───────────────────────┐  │
│  │  Label          [Input value              ]     │  │
│  │  Label          [Input value              ]     │  │
│  │  Label          [Select ▼                 ]     │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ Section "Endereço" ──────────────────────────┐   │
│  │  CEP [________]   Cidade [________________]    │  │
│  │  Rua [____________________]  Nº [____]         │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│                          [Cancelar]  [Salvar]         │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Specs:**
- Form max-width: 720px (centered or left-aligned)
- Section gap: 32px
- Input gap within section: 16px
- Two-column inputs: use CSS grid with 16px gap
- Action buttons: right-aligned, primary right, secondary left
- Back arrow: top-left, links to list page

**Required states:**
1. Empty form (create mode)
2. Pre-filled form (edit mode)
3. Validation errors (inline under each field)
4. Submitting (button loading state)
5. Success (redirect to list or show toast)

## Pattern: Dashboard Page

Metrics overview with charts.

```
┌─ Content ────────────────────────────────────────────┐
│                                                       │
│  Dashboard              [Período: Últimos 30 dias ▼] │
│                                                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ R$ 45k  │ │ 234     │ │ R$ 192  │ │ 2.3%    │   │
│  │ Vendas  │ │ Pedidos │ │ Ticket  │ │ Cancel. │   │
│  │ ↑ 12%   │ │ ↑ 8%    │ │ ↓ 3%   │ │ ↓ 0.5%  │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
│                                                       │
│  ┌─ Chart ────────────────────────────────────────┐  │
│  │                                                 │  │
│  │  [Bar/Line chart - vendas por dia]              │  │
│  │                                                 │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ Recent Orders ────────────────────────────────┐  │
│  │  Mini table with latest 5 orders                │  │
│  └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘
```

**Metric card specs:**
- 4 cards in a row (CSS grid, gap 16px)
- Card padding: 24px
- Metric value: font-size 32px, font-weight bold
- Metric label: font-size 14px, color gray-500
- Trend indicator: green-500 (up positive), red-500 (down negative)
- Border-radius: 8px
- Border: 1px gray-100

## Pattern: Detail Page

View a single resource with tabs.

```
┌─ Content ────────────────────────────────────────────┐
│                                                       │
│  ← Voltar    Pedido #12345           [Editar] [⋮]   │
│              Badge: Aprovado                          │
│                                                       │
│  ┌─ Tabs ─────────────────────────────────────────┐  │
│  │ [Resumo] [Itens] [Histórico] [Notas]           │  │
│  ├────────────────────────────────────────────────┤  │
│  │                                                 │  │
│  │  Tab content area                               │  │
│  │                                                 │  │
│  └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘
```

## Pattern: Settings Page

Grouped settings with toggles and inputs.

```
┌─ Content ────────────────────────────────────────────┐
│                                                       │
│  Configurações                                        │
│                                                       │
│  ┌─ Section "Notificações" ──────────────────────┐   │
│  │  Email de novos pedidos        [Toggle ON ]    │   │
│  │  Email de cancelamentos        [Toggle OFF]    │   │
│  │  Resumo diário                 [Toggle ON ]    │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  ┌─ Section "Integrações" ───────────────────────┐   │
│  │  API Key    [••••••••••]  [Regenerar]          │   │
│  │  Webhook    [https://...]  [Testar]            │   │
│  └────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────┘
```

## Navigation Patterns

**Breadcrumbs:** not used in Olist ERP. Use back arrow instead.
**Tabs:** for sub-navigation within a page. Use SegmentedButtons for 2-3 options.
**Sidebar:** always present via MenuSidebar. Active item highlighted with blue-50 bg.
