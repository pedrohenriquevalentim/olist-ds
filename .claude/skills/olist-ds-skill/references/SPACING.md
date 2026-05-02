# Spacing & Layout

## Spacing Scale

Base unit: 4px. All spacing must be a multiple of 4.

| Token | Value | Common usage |
|---|---|---|
| `--shape-spacing-0px` | 0 | No spacing |
| `--shape-spacing-4px` | 4px | Inline icon-to-text gap, badge padding vertical |
| `--shape-spacing-8px` | 8px | Compact padding, small gaps, checkbox-to-label |
| `--shape-spacing-12px` | 12px | Input padding horizontal, card inner gaps |
| `--shape-spacing-16px` | 16px | **Default padding**, section gaps, card padding |
| `--shape-spacing-24px` | 24px | Section separation, large card padding |
| `--shape-spacing-32px` | 32px | Page-level separation, between major sections |
| `--shape-spacing-40px` | 40px | Page top/bottom margins |
| `--shape-spacing-48px` | 48px | Major section divides |
| `--shape-spacing-64px` | 64px | Page-level breathing room (rare) |

## Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--shape-border-radius-0px` | 0 | Square elements (never used for interactive) |
| `--shape-border-radius-2px` | 2px | Inner elements, small checkboxes |
| `--shape-border-radius-4px` | 4px | Small buttons (SM), badges, chips |
| `--shape-border-radius-8px` | 8px | **Default**: buttons, inputs, cards, modals |
| `--shape-border-radius-12px` | 12px | Large cards, containers |
| `--shape-border-radius-16px` | 16px | Modal containers, prominent cards |
| `--shape-border-radius-9999px` | 9999px | Pills, tags, avatar circles |

## Border Width

| Token | Value | Usage |
|---|---|---|
| `--shape-border-width-0px` | 0 | No border |
| `--shape-border-width-1px` | 1px | **Default borders**: inputs, cards, dividers |
| `--shape-border-width-2px` | 2px | Focus rings, active states, emphasis |
| `--shape-border-width-4px` | 4px | Left-border on selected rows or sections |

## Size Scale (component dimensions)

| Token | Value | Typical usage |
|---|---|---|
| `--shape-size-24px` | 24px | Icon size (small), avatar small |
| `--shape-size-32px` | 32px | Input height SM, icon button SM |
| `--shape-size-40px` | 40px | Input height MD, button height MD |
| `--shape-size-48px` | 48px | Input height LG, button height LG, table row |
| `--shape-size-56px` | 56px | Table row comfortable |
| `--shape-size-64px` | 64px | Header height |
| `--shape-size-280px` | 280px | Sidebar width |

## Page Layout Pattern

```
┌────────────────────────────────────────────────────────┐
│                    Header (64px)                        │
├──────────┬─────────────────────────────────────────────┤
│          │                                             │
│ Sidebar  │            Content Area                     │
│ (280px)  │         padding: 24px-32px                  │
│          │                                             │
│          │  ┌─────────────────────────────────────┐    │
│          │  │  Page Title + Actions (24px bottom)  │    │
│          │  ├─────────────────────────────────────┤    │
│          │  │  Filters bar (16px bottom)           │    │
│          │  ├─────────────────────────────────────┤    │
│          │  │  Content (table/cards/form)           │    │
│          │  ├─────────────────────────────────────┤    │
│          │  │  Pagination (16px top)               │    │
│          │  └─────────────────────────────────────┘    │
│          │                                             │
└──────────┴─────────────────────────────────────────────┘
```

## Spacing Rules

```css
/* Page content area */
.page-content {
  padding: var(--shape-spacing-32px);
}

/* Space between page title and content */
.title-to-content {
  margin-bottom: var(--shape-spacing-24px);
}

/* Space between filter bar and table */
.filter-to-table {
  margin-bottom: var(--shape-spacing-16px);
}

/* Card internal padding */
.card {
  padding: var(--shape-spacing-16px);           /* compact */
  padding: var(--shape-spacing-24px);           /* default */
}

/* Gap between elements in a row */
.row-gap {
  gap: var(--shape-spacing-8px);                /* tight */
  gap: var(--shape-spacing-12px);               /* default */
  gap: var(--shape-spacing-16px);               /* loose */
}

/* Gap between stacked sections */
.section-gap {
  gap: var(--shape-spacing-24px);               /* default */
  gap: var(--shape-spacing-32px);               /* major */
}
```

## Do's and Don'ts

- ✅ Always use spacing tokens — never arbitrary pixel values
- ✅ Use 16px as your default when unsure
- ✅ Content area padding: 24px or 32px
- ✅ Sidebar width: always 280px
- ❌ Never use odd pixel values (5px, 7px, 13px)
- ❌ Never use spacing below 4px
- ❌ Never change sidebar width per page
