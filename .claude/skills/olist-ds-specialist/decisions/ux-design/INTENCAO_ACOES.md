# Decisão UX/Design: Intenção (danger) em Button, Button Icon e Link

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/GOVERNANCA_TOKENS.md` (seção 2.5), `references/HARNEES_TELAS.md` (Seção 2), `references/CHECKLIST_REVISAO.md` (seção 13), `component-registry.json`

---

## Contexto

Um designer de produto precisou de **botão secundário vermelho** (ex.: "Cancelar NFC-e" ao lado de "Voltar", "Estornar pagamento" abaixo do primário) e de **link com ícone à esquerda em vermelho**. O DS só tinha `type=danger`, que misturava significado (destrutivo) com hierarquia (preenchido) e não existia para secundário, terciário nem Link.

## Decisão

1. **Duas dimensões independentes.** `type` = hierarquia (`primary`, `secondary`, `tertiary`); `intent` = significado (`default`, `danger`). Vale para `Button`, `Button Icon` e `Link`.
2. **Nome da propriedade: `intent`**, o mesmo de Badge, Toast, Alert Bar e Notice Bar. **Valor: `danger`** (ação destrutiva), não `error` (estado de erro). Nos tokens de cor o termo continua `negative`.
3. **Migração sem mudança visual:** `type=danger` virou `type=primary` + `intent=danger`. Tokens `button/color|font color/danger *` foram renomeados para `… primary danger *`.
4. **Disabled ignora a intenção** (danger desabilitado igual ao neutro).
5. **Link** ganhou `intent`, estado `disabled` (sem sublinhado), `lead icon` (esquerda) e `action icon` (direita, ligado por padrão; substitui o boolean `new page`).
6. **Itens de lista/menu com ação vermelha** (lista de ações com divisor) são outro componente: devem receber `intent` em etapa futura. O Link serve a ação isolada.

## Regras de uso

- `intent=danger` só em ação **destrutiva ou irreversível**; ação comum "que precisa de destaque" não vira danger.
- O rótulo diz a ação e o objeto ("Cancelar NFC-e", "Estornar pagamento"); ação irreversível pede confirmação (Alert Dialog ou modal) e o botão de saída é um terciário neutro ("Voltar"). A cor nunca é o único sinal.
- O primary danger **conta** para o limite de 1 primary por tela.
- Contraste do texto danger vazado: red 600 sobre `surface/container` 4,75:1; sobre `surface/system` 4,3:1 (abaixo de 4,5:1: mova o botão para `container` ou documente). No escuro, red 500 dá 5:1.

## Tokens

Semânticos: `color-(text|shape)-(enabled|hover|pressed)-negative` (claro red 600 / 700 / 800; escuro red 500 / 400 / 300) e `color-background-(hover|pressed)-negative` (tint de red 600 a 8% e 16%; escuro red 500 a 12% e 24%). Componente: `button-*-(secondary|tertiary)-danger-*`, `button-border-color-secondary-danger-*`, `link-*-danger-*`, `link-*-disabled`, `link-shape-color-hover`.

## Pendente

- React: `Button` ainda não tem `intent` nem danger; `Link` não existe em React.
- Item de lista/menu com `intent`; Alert Dialog (`type=destructive`) ainda usa outro vocabulário.

## Histórico

- 2026-10-22 v1.0 — Modelo `type` + `intent` aprovado e aplicado no Figma (Button 216 variantes, Button Icon 72, Link 16).
