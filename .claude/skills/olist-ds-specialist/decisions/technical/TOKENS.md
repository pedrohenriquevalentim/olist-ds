# Decisão Técnica: Uso de Tokens CSS

**Categoria:** Técnica
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/CORES.md`, `TIPOGRAFIA.md`, `ESPACAMENTO.md`

---

## Decisão

Todos os valores de cor, espaçamento, tipografia e border-radius devem ser consumidos **exclusivamente** via variáveis CSS geradas em `src/generated/variables.css`.

---

## Regras

### O que fazer
- Usar `var(--nome-do-token)` para todos os valores de design
- Unidades em `rem` — nunca `px`
- Elementos de texto internos (`<label>`, helper text, placeholder, mensagem de erro) devem declarar `font-weight`, `font-size` e `line-height` explicitamente no `.module.css` via tokens

### O que não fazer
- Nunca usar valores hardcoded (ex: `color: #0a4ee4`, `padding: 16px`)
- Nunca confiar nos defaults do navegador para tipografia de elementos internos

### Tokens de referência rápida

```css
--color-gray-0: #fcfbf8;       /* fundo da página */
--color-gray-900: #10100f;     /* texto principal */
--color-gray-500: #827f73;     /* texto secundário */
--color-gray-100: #e7e4da;     /* bordas */
--color-blue-500: #0a4ee4;     /* ação primária, links */
--color-red-500: #e64e36;      /* erro, destrutivo */
--color-green-500: #779e3d;    /* sucesso */
--color-yellow-500: #f0a028;   /* alerta */
--font-family-jakarta: 'Plus Jakarta Sans';
--font-size-14px: 14px;
--font-weight-regular: 400;
--font-weight-semibold: 600;
--shape-spacing-16px: 16px;
--shape-border-radius-8px: 8px;
```

Para a lista completa de tokens, consulte `src/generated/variables.css`.

### Regenerar tokens

```bash
npm run build:tokens
```

---

## Contexto

Os tokens são gerados via Style Dictionary + @tokens-studio/sd-transforms a partir dos arquivos JSON do Figma. Usar os tokens garante que atualizações no Figma se propaguem automaticamente para o código sem necessidade de busca manual de valores.

---

## Referências na Skill

- Paleta completa de cores → `references/CORES.md`
- Escala tipográfica → `references/TIPOGRAFIA.md`
- Hierarquia de espaçamento → `references/ESPACAMENTO.md`

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
