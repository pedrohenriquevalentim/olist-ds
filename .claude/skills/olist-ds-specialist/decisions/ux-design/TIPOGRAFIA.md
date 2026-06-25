# Decisão UX/Design: Tipografia e Papéis de Texto

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/TIPOGRAFIA.md`, `references/GLOSSARIO_PAPEIS_TEXTO.md`

---

## Decisão

A escala tipográfica é fixa e os papéis de texto são nomeados de forma padronizada. Nunca usar tamanhos fora da escala nem nomes de papéis fora do glossário.

---

## Fonte

**Plus Jakarta Sans** — fonte primária em todos os produtos Olist.

```css
font-family: var(--font-family-jakarta); /* 'Plus Jakarta Sans' */
```

---

## Escala Tipográfica (tokens)

| Token | Tamanho | Peso | Uso típico |
|---|---|---|---|
| `--font-size-32px` | 32px | 700 | Títulos de página (h1) |
| `--font-size-24px` | 24px | 600 | Subtítulos de seção |
| `--font-size-18px` | 18px | 600 | Headings de card |
| `--font-size-16px` | 16px | 400 | Corpo de texto, inputs |
| `--font-size-14px` | 14px | 400 | Corpo padrão (mais comum) |
| `--font-size-12px` | 12px | 400 | Captions, helper text |

Pesos válidos:
- `--font-weight-regular: 400`
- `--font-weight-medium: 500`
- `--font-weight-semibold: 600`
- `--font-weight-bold: 700`

---

## Papéis de Texto (10 tipos)

Consultar `references/GLOSSARIO_PAPEIS_TEXTO.md` para mapeamento completo. Resumo:

| Papel | Descrição |
|---|---|
| Heading | Título principal da página ou seção |
| Subheading | Título secundário |
| Section Title | Agrupador dentro de formulários/cards |
| Body | Conteúdo corrido |
| Label | Rótulo de campo de formulário |
| Helper | Texto de apoio abaixo de um campo |
| Error | Mensagem de erro de validação |
| Caption | Texto auxiliar, legenda |
| CTA Label | Texto de botão de ação |
| Link | Texto de link navegável |

**Regra:** nunca inventar nomes fora deste glossário — consultar `GLOSSARIO_PAPEIS_TEXTO.md`.

---

## Regra de Elementos Internos

Elementos de texto internos a componentes (`<label>`, helper text, placeholder, mensagem de erro) devem declarar `font-weight`, `font-size` e `line-height` explicitamente no `.module.css` via tokens. Nunca confiar nos defaults do navegador.

```css
/* ✅ correto */
.label {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  color: var(--color-gray-900);
}
```

---

## Referências na Skill

- Tokens completos de tipografia → `references/TIPOGRAFIA.md`
- Definição e mapeamento de papéis de texto → `references/GLOSSARIO_PAPEIS_TEXTO.md`

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md e TIPOGRAFIA.md
