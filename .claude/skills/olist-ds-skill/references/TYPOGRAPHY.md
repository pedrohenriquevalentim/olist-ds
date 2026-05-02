# Typography

## Font Family

| Token | Value | Usage |
|---|---|---|
| `--font-family-jakarta` | 'Plus Jakarta Sans' | **All UI text**. Headers, body, labels, buttons, inputs |
| `--font-family-arial` | 'Arial' | Fallback only. Never specify directly |

### Loading

In Storybook: loaded via `preview-head.html` (Google Fonts link).
In Next.js: loaded via `next/font/google` with `variable: "--font-family-jakarta"`.
In standalone: add Google Fonts link in HTML head.

Weights loaded: 200, 300, 400, 500, 600, 700, 800.

## Font Size Scale

| Token | Value | Typical usage |
|---|---|---|
| `--font-size-10px` | 10px | Micro labels, badges, fine print |
| `--font-size-12px` | 12px | Captions, helper text, table headers, timestamps |
| `--font-size-14px` | 14px | **Default body text**, table cells, input values |
| `--font-size-16px` | 16px | Section headers, emphasized body, input labels |
| `--font-size-20px` | 20px | Page sub-headers, card titles |
| `--font-size-24px` | 24px | Page titles, modal headers |
| `--font-size-32px` | 32px | Dashboard metrics, hero numbers |
| `--font-size-40px` | 40px | Large display numbers (rare) |
| `--font-size-48px` | 48px | Marketing headers (rare in ERP) |

## Font Weight Scale

| Token | Value | Usage |
|---|---|---|
| `--font-weight-extra-light` | 200 | Decorative only (avoid in ERP) |
| `--font-weight-light` | 300 | Large display numbers |
| `--font-weight-regular` | 400 | **Default body text**, descriptions, table cells |
| `--font-weight-medium` | 500 | Input labels, form labels, subtle emphasis |
| `--font-weight-semibold` | 600 | **Headers, button text, table headers, badges** |
| `--font-weight-bold` | 700 | Page titles, strong emphasis, metrics |
| `--font-weight-extra-bold` | 800 | Marketing only (avoid in ERP) |

## Line Height Scale

| Token | Value | When to use |
|---|---|---|
| `--font-line-height-16px` | 16px | 10px and 12px font sizes |
| `--font-line-height-18px` | 18px | 12px font size with more breathing room |
| `--font-line-height-20px` | 20px | 14px font size (default body) |
| `--font-line-height-24px` | 24px | 16px font size |
| `--font-line-height-30px` | 30px | 20px font size |
| `--font-line-height-32px` | 32px | 24px font size |
| `--font-line-height-40px` | 40px | 32px font size |

## Typography Compositions

These are the standard text styles used across the ERP:

```css
/* Page title */
.page-title {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-24px);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-32px);
  color: var(--color-gray-900);
}

/* Section header */
.section-header {
  font-size: var(--font-size-16px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-24px);
  color: var(--color-gray-900);
}

/* Body text (default) */
.body {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-900);
}

/* Caption / helper text */
.caption {
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-16px);
  color: var(--color-gray-500);
}

/* Table header */
.table-header {
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-16px);
  color: var(--color-gray-600);
  text-transform: none; /* never uppercase in Olist */
}

/* Button text */
.button-text {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-20px);
}

/* Input value */
.input-value {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-900);
}

/* Input label */
.input-label {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-700);
}

/* Badge */
.badge {
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-16px);
}

/* Metric number (dashboard) */
.metric {
  font-size: var(--font-size-32px);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-40px);
  color: var(--color-gray-900);
}
```

## Do's and Don'ts

- ✅ Use 14px as default body size — it's the ERP standard
- ✅ Use semibold (600) for interactive elements and headers
- ✅ Use gray-500 for secondary/support text
- ✅ Pair font sizes with their matching line-heights from the scale
- ❌ Never use text-transform: uppercase (not part of Olist's identity)
- ❌ Never use font sizes outside the token scale
- ❌ Never use italic for emphasis (use font-weight instead)
- ❌ Never mix font families within the same interface
