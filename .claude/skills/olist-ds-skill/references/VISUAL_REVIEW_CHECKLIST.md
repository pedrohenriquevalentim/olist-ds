# Visual Review Checklist

Use this checklist when reviewing any screen or component for visual consistency with the Olist design system.

## 1. Typography

- [ ] Font is Plus Jakarta Sans everywhere (`var(--font-family-jakarta)`)
- [ ] No font outside the token scale (10, 12, 14, 16, 20, 24, 32, 40, 48)
- [ ] Body text is 14px regular gray-900
- [ ] Headers use semibold (600) or bold (700)
- [ ] Secondary text uses gray-500 (not gray-400 or lighter)
- [ ] Table headers use 12px semibold gray-600
- [ ] No text-transform: uppercase used
- [ ] No italic used for emphasis
- [ ] Line-heights match the scale (each font-size has a matching line-height)

## 2. Colors

- [ ] No hardcoded hex values — all colors use CSS variables
- [ ] Page background is gray-0 (#fcfbf8), not white (#fff)
- [ ] Primary actions use blue-500
- [ ] Borders use gray-100 (light) or gray-200 (emphasis)
- [ ] Disabled elements use gray-300 text + disabled background token
- [ ] Error states use red-500 text/border + red-0 background
- [ ] Success states use green-500 + green-0 background
- [ ] Status badges follow the color map in COLORS.md
- [ ] Contrast ratio passes WCAG AA (4.5:1 minimum for text)

## 3. Spacing

- [ ] All spacing values are multiples of 4px
- [ ] Page content padding is 24px or 32px
- [ ] Gap between sections is 24px or 32px
- [ ] Gap within sections is 16px
- [ ] Card padding is 16px (compact) or 24px (default)
- [ ] No arbitrary pixel values (5px, 7px, 13px, etc.)

## 4. Layout

- [ ] Sidebar is 280px width (if present)
- [ ] Content area fills remaining width
- [ ] Auto Layout used (no absolute positioning)
- [ ] Layers named semantically (not "Frame 1", "Group 5")
- [ ] Responsive: doesn't break at 1280px width

## 5. Components

- [ ] Existing DS components are reused (not recreated)
- [ ] Button variants match DS (primary/secondary/tertiary)
- [ ] Input styles match DS tokens (border, radius, padding, font)
- [ ] No component exists outside the `src/components/` structure
- [ ] New components follow the creation rules in COMPONENTS.md

## 6. States

- [ ] Default state exists
- [ ] Loading state exists (skeleton placeholders)
- [ ] Empty state exists (message + optional action)
- [ ] Error state exists (message + retry)
- [ ] Hover states use correct tokens (effects-hover-*)
- [ ] Focus states have visible 2px blue-500 outline
- [ ] Disabled states use gray-300 text + reduced opacity
- [ ] Active/pressed states use correct tokens (effects-pressed-*)

## 7. Accessibility

- [ ] All interactive elements have role and aria-label
- [ ] Images have alt text
- [ ] Color is not the only way to convey information (icon + color for status)
- [ ] Focus order is logical (follows visual order)
- [ ] Touch targets are minimum 44x44px
- [ ] Buttons work with Enter and Space keys
- [ ] Forms have labels associated with inputs
- [ ] Error messages are associated via aria-describedby

## 8. Border Radius

- [ ] Default elements use 8px radius
- [ ] Small elements (badges, chips) use 4px
- [ ] Pill shapes use 9999px
- [ ] Consistent within the same component (no mixed radii)

## 9. Shadows

- [ ] Cards use shadow-4 (subtle)
- [ ] Dropdowns/popovers use shadow-8
- [ ] Modals use shadow-16
- [ ] Overlays use shadow-80 backdrop
- [ ] No custom shadow values

## Severity Levels

| Level | Meaning | Action |
|---|---|---|
| 🔴 Critical | Hardcoded color, wrong font, accessibility failure | Must fix before merge |
| 🟡 Warning | Wrong spacing value, missing state | Should fix before merge |
| 🟢 Suggestion | Could improve hierarchy, better component choice | Fix in next iteration |
