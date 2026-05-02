# SDD to Screen — Translation Guide

How to read an SDD (Software Design Document) or PRD (Product Requirements Document) and translate it into UI decisions using the Olist design system.

## Step 1: Extract UI-relevant information

Read the SDD and extract ONLY these sections:

| SDD section | What to extract | UI decision |
|---|---|---|
| Problema | Who is the user? What are they trying to do? | Page type (list, form, dashboard, detail) |
| Requisitos funcionais | Data to display, actions available | Components needed, table columns, buttons |
| Requisitos de experiência | Layout preferences, navigation | Page pattern, sidebar presence, responsive |
| Critérios de aceite | Expected behaviors | States to design (success, error, empty, loading) |
| Escopo (fora) | What NOT to build | Boundaries — don't add features outside scope |

## Step 2: Map requirements to page pattern

| If the SDD mentions... | Use pattern |
|---|---|
| "Listar", "visualizar todos", "tabela" | Data Table Page |
| "Criar", "editar", "formulário", "cadastrar" | Form Page |
| "Dashboard", "métricas", "resumo", "KPIs" | Dashboard Page |
| "Detalhe", "visualizar pedido", "histórico" | Detail Page |
| "Configurar", "preferências" | Settings Page |

## Step 3: Map data to components

| SDD requirement | Component to use |
|---|---|
| "Lista de itens com filtros" | Table + filter bar + Pagination |
| "Status do pedido" | Badge (color-coded by status) |
| "Selecionar múltiplos itens" | Checkbox in table + bulk action bar |
| "Ação principal" | Button primary |
| "Ação secundária" | Button secondary |
| "Ação destrutiva (deletar)" | Button with red-500 variant |
| "Campo de texto" | Input text |
| "Selecionar opção" | Select dropdown |
| "Sim/não" | Checkbox or Toggle |
| "Escolher entre opções" | SegmentedButtons (2-4 options) or Select (5+) |
| "Buscar" | Input search (with icon) |
| "Filtrar por data" | Date picker (to be created) |
| "Menu lateral" | MenuSidebar (already exists) |
| "Expandir para ver detalhes" | Accordion or expandable table row |
| "Número grande" | Metric card (font-size 32px, bold) |
| "Gráfico" | Chart component (to be created) |

## Step 4: Define states

Every screen must have these states designed:

### Mandatory states

1. **Default** — page with real data, normal operation
2. **Loading** — skeleton placeholders where data will appear
3. **Empty** — no data to show (after filter or first access)
   - Illustration (optional)
   - Message: "Nenhum [item] encontrado"
   - Suggestion or action button
4. **Error** — data failed to load
   - Error icon
   - Message: "Não foi possível carregar os dados"
   - "Tentar novamente" button

### Conditional states (if SDD mentions)

5. **With selection** — items selected, bulk action bar visible
6. **Form validation** — inline errors on invalid fields
7. **Success** — confirmation after action (toast or redirect)
8. **Confirmation** — modal before destructive action ("Tem certeza?")

## Step 5: Check existing components

Before creating anything new, read `SOURCE_MAP.md` and check:

1. Does a component for this already exist in `src/components/`?
2. Can an existing component be extended with a new variant?
3. Does the token I need exist in `src/generated/variables.css`?

**If the component exists:** import and use it.
**If a variant is missing:** add the variant to the existing component.
**If the component doesn't exist:** create it following `COMPONENTS.md` rules.

## Step 6: Build the screen

### For React (code output):

```tsx
// Page component consuming existing DS components
import { MenuErp, Button, Checkbox } from '@pedrohenriquevalentim/olist-ds';
import styles from './PageName.module.css';

export const PageName: React.FC = () => {
  return (
    <MenuErp>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Page Title</h1>
          <Button variant="primary">Action</Button>
        </header>
        {/* ... */}
      </div>
    </MenuErp>
  );
};
```

### For Figma (design output):

1. Frame 1440x900
2. MenuSidebar on the left (280px)
3. Content area with proper padding (32px)
4. Use Figma Variables for all colors
5. Auto Layout everywhere
6. Name all layers semantically

## Step 7: Validate against SDD

After building, verify:

- [ ] Every requisito funcional has a corresponding UI element
- [ ] Every critério de aceite can be visually demonstrated
- [ ] Every state is designed (default, loading, empty, error)
- [ ] Only components from the DS are used (no custom elements)
- [ ] All text uses tokens (font-size, weight, color)
- [ ] All spacing follows the 4px grid
- [ ] Accessibility: all interactive elements have ARIA attributes
- [ ] Nothing outside the SDD scope was added

## Example: SDD → Screen decisions

**SDD excerpt:**
> O seller precisa visualizar todos os pedidos com status, filtrar por período
> e marcar pedidos como despachados em lote.

**Translation:**

| Requirement | Decision |
|---|---|
| "visualizar todos os pedidos" | Data Table Page pattern |
| "com status" | Badge component, color-coded per COLORS.md status map |
| "filtrar por período" | Date range filter in filter bar |
| "marcar como despachados em lote" | Checkbox in table + bulk action bar with Button primary |

**Components needed:**
- MenuErp (exists) — page shell
- Table (NOT built yet) — create in `src/components/Table/`
- Badge (NOT built yet) — create in `src/components/Badge/`
- Button (exists) — "Marcar como despachado"
- Checkbox (exists) — row selection
- Input search (NOT built yet) — for search filter
- Date picker (NOT built yet) — for period filter
- Pagination (NOT built yet) — for table footer

**States to design:**
1. Default: 8 rows with varied statuses
2. Loading: skeleton rows
3. Empty: "Nenhum pedido encontrado" + illustration
4. With selection: 3 rows checked, bulk action bar visible
5. Error: "Não foi possível carregar os pedidos" + retry
