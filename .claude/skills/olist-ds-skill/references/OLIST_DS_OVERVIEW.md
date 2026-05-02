# Olist Design System — Overview

## Brand Identity

Olist is a B2B e-commerce platform for sellers. The visual language communicates efficiency, reliability, and professionalism. The interface is tool-first — sellers use it 8+ hours daily, so clarity and scannability take priority over decoration.

### Design Principles

1. **Clarity over aesthetics** — Every element serves a function. Remove anything that doesn't help the seller complete a task.
2. **Consistency over novelty** — Reuse existing components. A new pattern is a cost, not a feature.
3. **Density with hierarchy** — ERPs are data-heavy. Use typography weight, color, and spacing to create hierarchy, not empty space.
4. **Accessible by default** — WCAG AA minimum. 4.5:1 contrast. Keyboard navigable. Screen reader friendly.

### Visual Identity Summary

- **Font:** Plus Jakarta Sans (Google Fonts)
- **Color system:** Warm neutrals (gray palette based on #fcfbf8), blue primary (#0a4ee4)
- **Spacing:** 4px base grid, scale: 4, 8, 12, 16, 24, 32, 40, 48, 64
- **Border-radius:** 8px default, 4px small elements, 9999px pills
- **Shadows:** Subtle, using rgba(5,5,5) at low opacity
- **Layout:** Sidebar navigation (280px) + content area

### Quick Token Reference

```css
/* Use these exact variable names in CSS */
--color-gray-0: #fcfbf8;      /* page background */
--color-gray-900: #10100f;     /* primary text */
--color-gray-500: #827f73;     /* secondary text */
--color-gray-100: #e7e4da;     /* borders */
--color-blue-500: #0a4ee4;     /* primary action, links */
--color-red-500: #e64e36;      /* error, destructive */
--color-green-500: #779e3d;    /* success */
--color-yellow-500: #f0a028;   /* warning */
--font-family-jakarta: 'Plus Jakarta Sans';
--font-size-14px: 14px;        /* body default */
--font-weight-regular: 400;    /* body */
--font-weight-semibold: 600;   /* labels, headers */
--shape-spacing-16px: 16px;    /* default padding */
--shape-border-radius-8px: 8px; /* default radius */
```

### Existing Components

Before creating ANY new element, check if one of these exists (8 total):

- **Button**
- **Checkbox**
- **Logo**
- **MenuErp**
- **MenuSidebar**
- **RadioButton**
- **SegmentedButtons**
- **Tag**

For full component API, read `COMPONENTS.md`.
For file paths, read `SOURCE_MAP.md`.
