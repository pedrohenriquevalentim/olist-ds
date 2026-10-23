# Decisão Técnica: Acessibilidade (W3C / WCAG AA)

**Categoria:** Técnica
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/CHECKLIST_REVISAO.md`

---

## Decisão

Todo componente interativo deve atender ao mínimo **WCAG 2.1 AA**. Acessibilidade não é opcional — é critério de aceite. Isso inclui verificação nos modos **claro e escuro**: o contraste mínimo de 4.5:1 deve ser satisfeito nas duas paletas de cor.

---

## Regras

### Elementos interativos
- Sempre definir `role` + `aria-label` (ou texto visível equivalente)
- Contraste mínimo 4.5:1 em modo claro **e** escuro (WCAG 2.1 AA SC 1.4.3)

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

### Intenção, ilustração e card
- `intent=danger`: a cor nunca é o único sinal; o rótulo diz a ação e ações irreversíveis pedem confirmação. Texto danger vazado exige 4,5:1 (red 600 sobre `surface/container` = 4,75:1; sobre `surface/system` = 4,3:1: evitar)
- Ilustração decorativa: `alt=""` e `aria-hidden="true"`; informativa: `alt` curto sem "imagem de"; o texto da tela repete a mensagem
- Content Card clicável: um único elemento interativo (link ou button); selecionável com `role="radio"`/`"checkbox"` e `aria-checked`; desabilitado com `aria-disabled` e fora da ordem de foco

### HTML semântico
- Usar `<nav>`, `<main>`, `<section>`, `<article>` nos componentes de layout
- Nunca usar `<div>` onde um elemento semântico existe

### Testes de acessibilidade
Cobrir obrigatoriamente nos testes:
- Presença dos atributos ARIA corretos
- Navegação por teclado nos componentes de lista/dropdown

---

## Referências na Skill

- Checklist completo de revisão (13 categorias) → `references/CHECKLIST_REVISAO.md`
- Visão geral dos princípios → `references/VISAO_GERAL.md` (seção "Acessível por padrão")

---

## Histórico

- 2026-10-23 v1.1 — Regras de intenção danger, ilustração e Content Card.
- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
