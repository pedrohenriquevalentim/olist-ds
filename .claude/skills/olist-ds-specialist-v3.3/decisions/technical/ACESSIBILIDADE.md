# Decisão Técnica: Acessibilidade (W3C / WCAG AA)

**Categoria:** Técnica
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist-v3.3/references/CHECKLIST_REVISAO.md`

---

## Decisão

Todo componente interativo deve atender ao mínimo WCAG AA. Acessibilidade não é opcional — é critério de aceite.

---

## Regras

### Elementos interativos
- Sempre definir `role` + `aria-label` (ou texto visível equivalente)
- Contraste mínimo 4.5:1

### Roles semânticos para componentes complexos

| Componente | Trigger | Lista/Popover | Item |
|---|---|---|---|
| Select / Dropdown | `role="combobox"` ou `role="button"` | `role="listbox"` | `role="option"` |
| Menu contextual | `role="button"` | `role="menu"` | `role="menuitem"` |

### Navegação por teclado — obrigatória

| Componente | Teclas |
|---|---|
| Botão simples | `Enter`, `Space` |
| Select / Dropdown | `ArrowUp` / `ArrowDown` (navegar), `Enter` (selecionar), `Escape` (fechar), `Space` (abrir/selecionar) |
| Modal / Dialog | `Escape` (fechar), foco aprisionado dentro enquanto aberto |

### HTML semântico
- Usar `<nav>`, `<main>`, `<section>`, `<article>` nos componentes de layout
- Nunca usar `<div>` onde um elemento semântico existe

### Testes de acessibilidade
Cobrir obrigatoriamente nos testes:
- Presença dos atributos ARIA corretos
- Navegação por teclado nos componentes de lista/dropdown

---

## Referências na Skill

- Checklist completo de revisão (9 categorias) → `references/CHECKLIST_REVISAO.md`
- Visão geral dos princípios → `references/VISAO_GERAL.md` (seção "Acessível por padrão")

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
