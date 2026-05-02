---
version: alpha
name: Olist Design System
description: B2B e-commerce ERP platform. Warm neutrals, blue primary, data-dense layouts optimized for 8+ hour daily use.
colors:
  primary: "#0a4ee4"
  secondary: "#827f73"
  tertiary: "#489999"
  neutral: "#10100f"
  background: "#fcfbf8"
  surface: "#f2f0e8"
  border: "#e7e4da"
  error: "#e64e36"
  success: "#779e3d"
  warning: "#f0a028"
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 30px
  body:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
---

## Overview

Olist is a B2B e-commerce platform serving sellers across Brazil. The interface is an ERP used 8+ hours daily, prioritizing clarity, scannability, and efficiency over visual novelty.

The design language uses warm neutrals as a foundation (gray palette rooted in #fcfbf8, not pure white) with a single blue accent for interactive elements. Every visual decision optimizes for: readability at dense data scales, consistent component reuse, and WCAG AA accessibility compliance.

## Colors

The palette balances warmth with professionalism. The warm gray prevents eye strain during extended use.

- **Primary (#0a4ee4):** All interactive elements — buttons, links, selected states, active indicators. Never decorative.
- **Neutral (#10100f):** Primary text color. Deep warm black, not pure black.
- **Secondary (#827f73):** Supporting text — captions, helper text, timestamps. Minimum contrast usage.
- **Background (#fcfbf8):** Page background. Warm off-white, never pure white.
- **Surface (#f2f0e8):** Hover backgrounds, alternate table rows, secondary surfaces.
- **Border (#e7e4da):** All borders and dividers. 1px default width.
- **Error (#e64e36):** Error messages, destructive actions, cancelled status.
- **Success (#779e3d):** Success confirmations, positive status, shipped orders.
- **Warning (#f0a028):** Warning alerts, pending status, attention needed.

## Typography

Plus Jakarta Sans is the sole typeface. Its geometric construction provides clarity at small sizes while remaining warm at display sizes.

- **Headlines** use bold (700) weight for maximum hierarchy separation.
- **Body text** defaults to 14px regular — optimized for ERP data density.
- **Labels** use medium (500) weight — distinguishable from body without shouting.
- **Buttons** use semibold (600) — interactive elements need visual weight.
- **Captions** at 12px serve helper text and table headers.

Never use italic for emphasis. Never use text-transform: uppercase.

## Layout & Spacing

The spacing system is built on a 4px base grid. All values are multiples of 4.

- **Page layout:** Sidebar (280px fixed) + fluid content area.
- **Content padding:** 24px or 32px depending on density needs.
- **Section separation:** 24px between related sections, 32px between major sections.
- **Component gaps:** 8px (tight), 12px (default), 16px (loose).
- **Card padding:** 16px (compact data cards) or 24px (content cards).

## Components

Existing components that must be reused (never recreated):

- **Button:** Three variants (primary, secondary, tertiary). Three sizes (sm/md/lg). Always use for actions.
- **Checkbox:** Supports checked, unchecked, indeterminate. Used in table row selection.
- **MenuSidebar:** 280px navigation sidebar. Active item uses blue-50 background.
- **SegmentedButtons:** Toggle between 2-4 options. Alternative to tabs for short option sets.

## Do's and Don'ts

**Do:**
- Use CSS Custom Properties for all visual values
- Start every page with the Data Table Page pattern (most common)
- Design all four states: default, loading, empty, error
- Use 14px as default text size
- Put primary action button top-right of page header

**Don't:**
- Use pure white (#ffffff) as background — use gray-0 (#fcfbf8)
- Use pure black (#000000) for text — use gray-900 (#10100f)
- Create new components without checking existing ones first
- Use more than one accent color on the same page
- Add decorative elements that don't serve a functional purpose
