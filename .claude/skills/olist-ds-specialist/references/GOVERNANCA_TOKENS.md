# Governança de Tokens Semânticos

> Complementa `CORES.md`, `TIPOGRAFIA.md` e `ESPACAMENTO.md`. Aqueles documentam
> **valores** (qual token resolve para qual cor/tamanho); este documenta
> **intenção de uso** — para orientar qual token semântico escolher entre
> vários candidatos plausíveis, não qual valor ele resolve.
>
> Inspirado na governança de tokens do Harness Design System (schema
> purpose/useWhen/doNotUseWhen/pairsWith), adaptado ao inventário real de
> `src/generated/variables.css`.

## Como um token semântico é formado

`--color-<família>-<estado>-<variante>`

- **família**: `background` | `border` | `text` | `shape` (conteúdo gráfico/ícone)
- **estado**: `enabled` `hover` `pressed` `selected` `focused` `filled` `disabled`
- **variante**: `neutral` `utility` `brand` `on-brand` `full-brand` `neutral-brand`

Tokens de componente (`--button-*`, `--tag-*`, `--menu-*`, `--list-*`,
`--input-base-*` etc.) não entram neste documento — eles já resolvem para
os tokens semânticos abaixo e são específicos de cada componente.

---

## Dimensão "estado"

| Estado | Quando se aplica |
|---|---|
| `enabled` | Estado de repouso, sem interação |
| `hover` | Ponteiro sobre o elemento |
| `pressed` | Durante o clique/toque |
| `selected` | Elemento marcado/ativo (ex: item de lista atual, tab ativa) |
| `focused` | Foco por teclado — **não confundir com `selected`** |
| `filled` | Campo com valor preenchido (inputs), distinto de `enabled` vazio |
| `disabled` | Não interativo |

**doNotUseWhen:** não use `selected` para indicar foco de teclado — use
`focused`. São dimensões diferentes e podem coexistir (um item pode estar
`selected` e `focused` ao mesmo tempo).

---

## Dimensão "variante"

| Variante | Quando se aplica |
|---|---|
| `neutral` | Superfície/controle padrão, sem cor de marca |
| `utility` | Elementos utilitários de baixa ênfase (scrollbar, containers de apoio) — **não é sinônimo de `neutral`** |
| `brand` | Elemento com cor de marca aplicada ao próprio elemento (texto/ícone azul) |
| `on-brand` | Elemento **sobre** um fundo de marca (ex: texto branco sobre botão azul) |
| `full-brand` | Fundo totalmente preenchido com cor de marca (ex: botão primário) |

**doNotUseWhen:** `utility` e `neutral` têm intensidades diferentes por
design (ex: `--color-background-hover-utility` é um overlay ~6x mais forte
que `--color-background-hover-neutral`). Trocar um pelo outro quebra a
hierarquia visual mesmo parecendo "a mesma cor cinza" no valor final.

---

## Família: `color-background-*`

- **purpose:** preenchimento de superfícies e controles interativos
- **useWhen:** fundo de card, container, botão, item de lista, campo de input
- **doNotUseWhen:** não use para cor de texto/ícone — isso é `color-text-*` ou `color-shape-*`
- **pairsWith:** o texto/ícone sobre um `background-*-full-brand` deve usar a
  contraparte `-on-brand` de `color-text-*`/`color-shape-*`, nunca `neutral`
- **note:** o subgrupo `feedback-*-colored` (fundo saturado) sempre pareia
  com texto `feedback-*-colored`; o subgrupo `feedback-*-subtle` (fundo
  claro) pareia com texto `feedback-*-subtle` da mesma categoria

## Família: `color-border-*`

- **purpose:** contorno de containers e controles
- **useWhen:** delimitar cards, inputs, botões secundários
- **doNotUseWhen:** não use `border-container-*` (`outside`/`inside`) em
  controles interativos — esse par é exclusivo de containers estáticos
  (cards, seções); controles usam `border-enabled-*`/`border-hover-*`/etc.
- **pairsWith:** `border-selected-default` pareia com
  `focus-border-color-default` quando o elemento também está em foco de teclado

## Família: `color-text-*`

- **purpose:** cor de texto
- **useWhen:** `container-title`/`container-label`/`container-text` para
  hierarquia estática (título > label > corpo); `enabled`/`hover`/`pressed`
  para texto de elementos interativos (botões, links, itens de lista)
- **doNotUseWhen:** não use `container-title` para texto dentro de um
  controle interativo (botão, chip) — use a variante de estado
  (`enabled`/`hover`/...) correspondente, mesmo que a cor final seja parecida
- **pairsWith:** ver regra de `on-brand` em `color-background-*`

## Família: `color-shape-*`

- **purpose:** cor de ícones e elementos gráficos (equivalente visual de
  `text-*`, mas para SVG/ícone)
- **useWhen:** sempre que o elemento for um ícone, não texto
- **doNotUseWhen:** não use `color-text-*` para colorir ícone (e vice-versa)
  mesmo quando o valor resolvido é idêntico hoje — são camadas semânticas
  diferentes e podem divergir em atualizações futuras do Figma
- **pairsWith:** `shape-*-<estado>-<variante>` deve sempre espelhar o
  `text-*-<estado>-<variante>` do mesmo componente (mesmo estado, mesma variante)

---

## Feedback (transversal a background/border/text/shape)

Categorias: `positive` `negative` `warning` `informative` `brand` `accent` `neutral`

- `*-colored`: fundo/texto saturado — uso em banners, tags de status, alertas de destaque
- `*-subtle`: fundo/texto de baixa saturação — uso em states inline discretos (ex: borda de input com erro)

**doNotUseWhen:** não misture `colored` de uma família com `subtle` de
outra no mesmo componente (ex: fundo `feedback-negative-colored` com texto
`feedback-warning-subtle`) — quebra o contrato de significado da cor de feedback.

---

## Quando usar este documento

- Gerando ou revisando `.module.css` de um componente (Caso 7) e há mais de
  um token semântico plausível para o mesmo valor visual
- Revisando uma tela (`ds-revisar`) e a cor está correta em pixel, mas o
  token escolhido é da família/estado errado
- Auditando consistência entre múltiplos componentes que deveriam
  compartilhar o mesmo par estado/variante
