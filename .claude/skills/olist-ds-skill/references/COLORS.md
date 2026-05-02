# Colors

## Color Architecture

Three layers: **primitive** (raw values) → **semantic** (meaning) → **component** (usage).
Always use CSS variables. Never hardcode hex values.

## Neutral Palette (Gray)

Warm-toned grays based on a beige undertone. These are the backbone of the interface.

| Token | Hex | Usage | DO | DON'T |
|---|---|---|---|---|
| `--color-gray-0` | #fcfbf8 | Page background, card background | Use as default surface | Use pure white (#fff) |
| `--color-gray-50` | #f2f0e8 | Hover backgrounds, alternate table rows, secondary surfaces | Use for subtle differentiation | Use for text |
| `--color-gray-100` | #e7e4da | Borders, dividers, separators | Use 1px borders | Use for backgrounds |
| `--color-gray-200` | #cecbc0 | Strong borders, header bottom borders | Use for visual emphasis on borders | Use for text |
| `--color-gray-300` | #afada2 | Disabled text, placeholder icons | Use for disabled states only | Use for readable content |
| `--color-gray-400` | #918e83 | Inactive icons, placeholder text | Use for secondary icons | Use for body text |
| `--color-gray-500` | #827f73 | Secondary text, captions, helper text | Use for supporting content | Use for primary text |
| `--color-gray-600` | #615f56 | Tertiary text, subtle labels | Use for low-emphasis labels | Avoid for long-form text |
| `--color-gray-700` | #403f3b | Labels, input labels, form headers | Use for form labels | Use for body text |
| `--color-gray-800` | #201f1d | Strong emphasis text | Use sparingly for emphasis | Use instead of gray-900 |
| `--color-gray-900` | #10100f | Primary text, headings, body text | Default text color | Use for backgrounds |
| `--color-gray-950` | #050505 | Maximum contrast text (rare) | Only for extreme contrast needs | Use as default text |

## Brand Palette (Blue)

Blue is the primary action color. It signals interactivity.

| Token | Hex | Usage |
|---|---|---|
| `--color-blue-0` | #f8f9fc | Hover backgrounds on interactive rows |
| `--color-blue-50` | #e7edf8 | Selected/active backgrounds, light highlight |
| `--color-blue-100` | #d6dff5 | Selected + hover state |
| `--color-blue-500` | #0a4ee4 | **Primary actions**: buttons, links, active indicators |
| `--color-blue-600` | #043fbe | Hover state on primary buttons |
| `--color-blue-700` | #002d8f | Pressed/active state on primary buttons |

### Usage Rules

```css
/* ✅ Primary button */
.button-primary {
  background: var(--color-blue-500);  /* default */
  /* hover: var(--color-blue-600) */
  /* active: var(--color-blue-700) */
}

/* ✅ Link */
.link { color: var(--color-blue-500); }

/* ✅ Selected row */
.row-selected { background: var(--color-blue-50); }

/* ❌ NEVER use blue for decorative backgrounds */
/* ❌ NEVER use blue for text that isn't a link */
```

## Feedback Palette

| Token | Hex | Semantic | Badge label | Usage |
|---|---|---|---|---|
| `--color-red-500` | #e64e36 | Error, destructive, cancelled | "Cancelado" | Error messages, delete buttons, error borders |
| `--color-red-0` | #fef7f5 | Error background | — | Error state row/card background |
| `--color-green-500` | #779e3d | Success, positive, shipped | "Despachado" | Success messages, confirmation |
| `--color-green-0` | #fafcf8 | Success background | — | Success state row/card background |
| `--color-yellow-500` | #f0a028 | Warning, pending, attention | "Pendente" | Warning alerts, pending status |
| `--color-yellow-0` | #fefbf6 | Warning background | — | Warning state row/card background |
| `--color-cyan-500` | #489999 | Info, neutral status | "Em análise" | Informational badges |

### Status Badge Color Map

```
Pendente     → background: --color-yellow-50, text: --color-yellow-600
Aprovado     → background: --color-blue-50,   text: --color-blue-600
Despachado   → background: --color-green-50,  text: --color-green-600
Cancelado    → background: --color-red-50,    text: --color-red-600
Em análise   → background: --color-cyan-50,   text: --color-cyan-600
```

## Interactive State Colors

| Token | Value | Usage |
|---|---|---|
| `--effects-hover-gray-900-4` | rgba(31,31,30, 0.04) | Subtle hover on neutral elements |
| `--effects-hover-brand-0-8` | rgba(10,78,228, 0.08) | Hover on brand-colored elements |
| `--effects-pressed-gray-900-12` | rgba(31,31,30, 0.12) | Press/active on neutral elements |
| `--effects-pressed-brand-500-16` | rgba(10,78,228, 0.16) | Press/active on brand elements |
| `--effects-disabled-gray-900-8` | rgba(126,125,119, 0.08) | Disabled element background |

## Shadow System

| Token | Value | Usage |
|---|---|---|
| `--effects-shadow-4` | rgba(5,5,5, 0.04) | Cards, subtle elevation |
| `--effects-shadow-8` | rgba(5,5,5, 0.08) | Dropdowns, popovers |
| `--effects-shadow-16` | rgba(5,5,5, 0.16) | Modals, dialogs |
| `--effects-shadow-80` | rgba(5,5,5, 0.80) | Overlays, backdrops |

## Contrast Rules

- Body text on gray-0 background: use gray-900 (ratio 15:1 ✅)
- Secondary text on gray-0: use gray-500 (ratio 4.6:1 ✅ barely passes AA)
- Primary button: white text on blue-500 (ratio 5.2:1 ✅)
- Never use gray-300 or lighter for readable text (fails AA)
- Never use blue-500 text on blue-50 background (ratio 3.8:1 ❌ fails)
