# Governança de Tokens

> Complementa `CORES.md`, `TIPOGRAFIA.md` e `ESPACAMENTO.md`. Aqueles documentam
> **valores** (qual token resolve para qual cor/tamanho); este documenta
> **intenção de uso** — para orientar qual token escolher entre vários
> candidatos plausíveis, não qual valor ele resolve.
>
> Inspirado na governança de tokens do Harness Design System (schema
> purpose/useWhen/doNotUseWhen/pairsWith), adaptado ao inventário real de
> `src/generated/variables.css`.
>
> **Escopo:** cobertura geral — cor, tipografia, forma (espaçamento/raio/
> borda/tamanho/opacidade), efeitos, foco, ícone, marca e **todas** as
> famílias de tokens de componente (`button-*`, `tag-*`, `input-base-*`,
> `table-*` etc.). A versão anterior deste documento cobria só a camada de
> cor semântica — essa cobertura permanece (seção 2) e foi estendida.

## 0. Como ler este documento

Cada família de token traz até 5 campos:

- **purpose** — o que o token representa
- **useWhen** — cenário em que é a escolha certa
- **doNotUseWhen** — anti-padrão comum + alternativa correta
- **pairsWith** — outros tokens que devem mudar junto (mesmo estado/variante)
- **note** — pegadinha, bug conhecido ou observação que não é óbvia pelo nome

## 1. Camadas

`primitivo` (`color-gray-gray-500`, `font-size-14px`, `shape-spacing-16px`) →
`semântico` (`color-background-hover-neutral`, `text-label-font-size`) →
`componente` (`button-color-primary-enabled`, `chip-font-weight`)

**Regra geral:** nunca pule camada só porque "dá no mesmo valor". Resolva
sempre pela camada mais específica disponível — componente > semântico >
primitivo. Se você está implementando o componente `Chip`, use `chip-*`; só
recorra a `color-*` semântico se o Figma não expôs um token de componente
para aquele caso específico; só recorra ao primitivo (`color-gray-gray-*`)
se nem o semântico cobrir (raro, e normalmente sinal de gap a reportar).

---

## 2. Cor

### 2.1 Paleta primitiva

7 famílias: `gray` `blue` `cyan` `pink` `green` `red` `yellow`, 12 tons cada
(`0` a `950`). Valores e tabela FAÇA/NÃO FAÇA completas em `CORES.md`.

- **purpose:** banco de valores brutos de onde toda cor semântica é derivada
- **useWhen:** apenas ao definir um novo token semântico (você não deveria
  escrever `var(--color-blue-blue-500)` direto num `.module.css` de produto)
- **doNotUseWhen:** não use a paleta primitiva diretamente em componentes —
  sempre passe pela camada semântica (`color-background-*`, `color-text-*`
  etc.), mesmo que o valor pareça óbvio. Isso é o que permite o Figma trocar
  a cor da marca sem tocar em nenhum componente.
- **note:** `pink` é a única família sem entrada em `CORES.md` hoje — ela
  alimenta a categoria de feedback `accent` (ver 2.3) e o toggle de cor do
  Logo (`--logo-color-toggle-pink`). Vale adicionar a `CORES.md` se `accent`
  passar a ser usado com mais frequência.

### 2.2 Cor semântica — `color-background-*` / `color-border-*` / `color-text-*` / `color-shape-*`

#### Dimensão "estado"

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

#### Dimensão "variante"

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

#### Família: `color-background-*`

- **purpose:** preenchimento de superfícies e controles interativos
- **useWhen:** fundo de card, container, botão, item de lista, campo de input
- **doNotUseWhen:** não use para cor de texto/ícone — isso é `color-text-*` ou `color-shape-*`
- **pairsWith:** o texto/ícone sobre um `background-*-full-brand` deve usar a
  contraparte `-on-brand` de `color-text-*`/`color-shape-*`, nunca `neutral`
- **note:** o subgrupo `feedback-*-colored` (fundo saturado) sempre pareia
  com texto `feedback-*-colored`; o subgrupo `feedback-*-subtle` (fundo
  claro) pareia com texto `feedback-*-subtle` da mesma categoria

#### Família: `color-border-*`

- **purpose:** contorno de containers e controles
- **useWhen:** delimitar cards, inputs, botões secundários
- **doNotUseWhen:** não use `border-container-*` (`outside`/`inside`) em
  controles interativos — esse par é exclusivo de containers estáticos
  (cards, seções); controles usam `border-enabled-*`/`border-hover-*`/etc.
- **pairsWith:** `border-selected-default` pareia com
  `focus-border-color-default` quando o elemento também está em foco de teclado

#### Família: `color-text-*`

- **purpose:** cor de texto
- **useWhen:** `container-title`/`container-label`/`container-text` para
  hierarquia estática (título > label > corpo); `enabled`/`hover`/`pressed`
  para texto de elementos interativos (botões, links, itens de lista)
- **doNotUseWhen:** não use `container-title` para texto dentro de um
  controle interativo (botão, chip) — use a variante de estado
  (`enabled`/`hover`/...) correspondente, mesmo que a cor final seja parecida
- **pairsWith:** ver regra de `on-brand` em `color-background-*`

#### Família: `color-shape-*`

- **purpose:** cor de ícones e elementos gráficos (equivalente visual de
  `text-*`, mas para SVG/ícone)
- **useWhen:** sempre que o elemento for um ícone, não texto
- **doNotUseWhen:** não use `color-text-*` para colorir ícone (e vice-versa)
  mesmo quando o valor resolvido é idêntico hoje — são camadas semânticas
  diferentes e podem divergir em atualizações futuras do Figma
- **pairsWith:** `shape-*-<estado>-<variante>` deve sempre espelhar o
  `text-*-<estado>-<variante>` do mesmo componente (mesmo estado, mesma variante)

### 2.3 Feedback (transversal a background/border/text/shape)

| Categoria | Cor-base | Semântica |
|---|---|---|
| `positive` | green | sucesso, confirmação, conclusão |
| `negative` | red | erro, destrutivo, falha |
| `warning` | yellow | atenção, risco, pendência |
| `informative` | cyan | informação neutra, dica |
| `brand` | blue | mensagem de identidade/produto (ex: novidade, dica de onboarding) — **não é o mesmo que "ação primária"** |
| `accent` | pink | destaque de recurso premium/especial, baixo uso hoje |
| `neutral` | gray | status genérico sem valência positiva/negativa/de alerta |

- `*-colored`: fundo/texto saturado — uso em banners, tags de status, alertas de destaque
- `*-subtle`: fundo/texto de baixa saturação — uso em states inline discretos (ex: borda de input com erro)

**doNotUseWhen:** não misture `colored` de uma família com `subtle` de
outra no mesmo componente (ex: fundo `feedback-negative-colored` com texto
`feedback-warning-subtle`) — quebra o contrato de significado da cor de feedback.
Não use `brand` (feedback) quando a intenção é "ação primária" — isso é
`color-background-enabled-full-brand`, uma família diferente.

---

## 3. Tipografia

### 3.1 `font-family-*`

- **purpose:** fonte da interface
- **useWhen:** `font-family-base` (Plus Jakarta Sans) em **todo** texto de produto
- **doNotUseWhen:** não referencie `font-family-system` (Arial) — é fallback
  técnico, nunca escolha de design
- **pairsWith:** sempre declare um fallback genérico no CSS
  (`var(--font-family-base), sans-serif`), o token não inclui fallback

### 3.2 `font-size-*` (primitivo) e `text-*-font-size` (semântico)

- **purpose:** escala de tamanho de texto, 10px a 64px
- **useWhen:** ao estilizar um papel de texto já catalogado em
  `GLOSSARIO_PAPEIS_TEXTO.md`, use o token semântico do papel
  (`text-label-font-size`, `text-heading-h1-font-size`...), não o primitivo
  (`font-size-14px`) direto — mesmo quando o valor é idêntico
- **doNotUseWhen:** não invente combinações de tamanho fora da escala nomeada
- **pairsWith:** todo `font-size` deve vir acompanhado do `line-height`
  correspondente da mesma linha semântica (ver 3.4)

### 3.3 `font-weight-*`

A escala primitiva tem 7 pesos, com aliases semânticos de nome mais curto:

| Peso | Primitivo | Alias semântico |
|---|---|---|
| 200 | `extra-light` | `xlight` |
| 300 | `light` | `light` |
| 400 | `regular` | `regular` |
| 500 | `medium` | `medium` |
| 600 | `semibold` | `sbold` |
| 700 | `bold` | `bold` |
| 800 | `extra-bold` | `xbold` |

- **purpose:** peso de fonte
- **useWhen:** use o alias semântico (`--font-weight-regular`,
  `--font-weight-sbold`, etc.) — não o número primitivo direto
  (`--font-weight-400`) — mesmo quando o valor final é idêntico
- **doNotUseWhen:** não invente peso fora da escala de 7 valores
- **note (histórico):** entre 2026-06-xx e 2026-07-18 os aliases `light`/
  `regular`/`medium`/`bold` ficaram com referência circular no CSS gerado
  (colisão de nomes entre a collection `02. theme tokens` e um rename na
  `01. base tokens` que não foi propagado corretamente pelo plugin de
  exportação). Corrigido em 2026-07-18: o plugin "Olist Token Exporter"
  agora marca aliases entre collections com a origem (`{theme:...}` /
  `{base:...}` / `{components:...}`) e `scripts/sync-tokens.mjs` valida
  essas referências no build, falhando com erro claro se algo ficar órfão
  de novo. Se algum `.module.css` ainda tiver fallback numérico hardcoded
  com comentário "bug de referência circular" (`Button`, `Chip`,
  `InputText`, `InputSearch`, `InputPassword`, `InputSelect`), o fallback
  não é mais necessário, mas também não é nocivo — pode ser removido na
  próxima vez que esses arquivos forem tocados.
- **pairsWith:** nenhum cuidado especial adicional — todos os 7 pesos
  resolvem pela camada semântica normalmente.

### 3.4 `font-line-height-*`

- **purpose:** altura de linha
- **useWhen:** sempre pareado com o `font-size` da mesma linha semântica
  (ver tabela em `TIPOGRAFIA.md`)
- **doNotUseWhen:** não escolha altura de linha isolada do tamanho — line-height
  desproporcional quebra o ritmo vertical do texto

### 3.5 Papéis semânticos (`text-heading-*`, `text-paragraph-*`, `text-description-*`, `text-caption-*`, `text-label-*`, `text-support-text-*`, `text-placeholder-text-*`)

- **purpose:** composição pronta de tamanho + peso + altura + cor para um
  papel de texto específico
- **useWhen:** ver mapeamento completo em `GLOSSARIO_PAPEIS_TEXTO.md`
  (Heading/Subheading/Body/Label/Helper/Error/Caption/CTA/Link)
- **doNotUseWhen:** `text-label-*` (peso `sbold`, 14px) e
  `text-description-*` (peso `regular`, 14px) têm o mesmo tamanho e cor
  base — só o peso diferencia label de campo vs. corpo de texto. Trocar um
  pelo outro é o erro mais comum de confusão nesta camada.
- **pairsWith:** `text-support-text-color-confirmed` (verde) e
  `-color-error` (vermelho) substituem `-color-enabled` quando o campo tem
  validação; nunca combine `support-text` de sucesso com borda de input de erro

---

## 4. Forma (`shape-*`)

### 4.1 Espaçamento (`shape-spacing-*`)

- **purpose:** gaps e paddings, base 4px
- **useWhen:** ver tabela de uso comum em `ESPACAMENTO.md`
- **doNotUseWhen:** não use valores fora da escala (múltiplos de 4)
- **note:** a escala vai de `0px` a `200px` — acima de `64px` é raro fora de
  layout de página inteira (margens de topo/rodapé), não de componente

### 4.2 Border radius (`shape-border-radius-*`)

- **purpose:** arredondamento de cantos
- **useWhen:** `8px` é o padrão de componente (botão, input); `12px`–`16px`
  para containers maiores (card, modal, tabela); `9999px` (pill) exclusivo
  de elementos circulares/cápsula (avatar, chip, tag, breadcrumb não usa)
- **doNotUseWhen:** não use `0px` em elemento interativo — reservado a
  elementos propositalmente quadrados
- **pairsWith:** se o container tem `border-radius`, o conteúdo interno que
  toca a borda (imagem, primeira/última célula de tabela) deve usar um
  raio compatível para não vazar quina reta dentro de canto arredondado

### 4.3 Espessura de borda (`shape-border-width-*`)

- **purpose:** espessura de contorno
- **useWhen:** `1px` é padrão; `2px` reservado a foco/seleção/ênfase; `4px`
  a barras de destaque lateral (linha selecionada)
- **doNotUseWhen:** não use `2px`/`4px` como borda "mais bonita" sem que o
  elemento esteja de fato em estado de foco/seleção/ênfase — a espessura
  maior é um sinal de estado, não estética
- **pairsWith:** `focus-border-width-default` (2px) sempre acompanha
  `focus-border-color-default`

### 4.4 Tamanho (`shape-size-*`)

- **purpose:** dimensões de componente (altura de input/botão, tamanho de
  ícone/avatar, largura de sidebar)
- **useWhen:** escolha pela função (altura de controle, lado de ícone),
  não pelo valor em si
- **doNotUseWhen:** não confunda com `shape-spacing-*` — `size` é dimensão
  de um elemento; `spacing` é distância entre elementos
- **note:** a escala é a mesma numericamente até 320px, mas os nomes de
  variável (`size` vs `spacing`) carregam intenção diferente — trocar um
  pelo outro no CSS funciona por acaso hoje, mas comunica errado

### 4.5 Opacidade (`shape-opacity-*`)

- **purpose:** escala de opacidade nomeada (`none` `subtle` `half` `strong` `full`)
- **useWhen:** estados de transição/disabled que precisam de opacidade
  fixa e nomeada, não um número arbitrário
- **doNotUseWhen:** não use para simular estado `disabled` de cor — isso já
  tem token de cor dedicado (`color-background-disabled-*`,
  `color-text-disabled-default`); opacidade é para casos como
  loading/skeleton, não para o padrão disabled de formulário

---

## 5. Efeitos (`effects-*`)

- **purpose:** overlays de interação (`hover`/`pressed`/`drag`/`disabled`),
  sombra (`shadow`), desfoque (`blur`) e distância de sombra (`distance`)
- **useWhen:** **nunca direto** — esses são tokens primitivos consumidos
  pela camada semântica (`color-background-hover-neutral` já resolve para
  `effects-hover-gray-900-4`, por exemplo). Consuma sempre via `color-*`.
- **doNotUseWhen:** não referencie `--effects-hover-*`/`--effects-pressed-*`
  direto num componente novo — se não existe um `color-background-*`
  semântico para o caso, isso é gap a reportar, não motivo para pular a camada
- **pairsWith:** níveis de sombra (`shadow-level-1/2/3`) mapeiam elevação:
  `level-1` = cards, `level-2` = dropdown/popover, `level-3` = modal/diálogo
  — não pule nível (ex: modal com sombra de card)
- **note:** `effects-shadow-80/88/96` (rgba muito escuro) são para
  backdrop/overlay de modal, não para sombra de elemento — fácil de
  confundir com os níveis de elevação por estarem na mesma família
- **note:** `--overlay-color-default` (resolve para `--effects-overlay-40`,
  rgba(5,5,5,0.40)) é o token dedicado de backdrop de modal/drawer — prefira
  esse em vez de `--effects-shadow-80/88/96` quando o caso for
  especificamente um overlay de fundo, não uma sombra de elevação

---

## 6. Foco (`focus-*`)

- **purpose:** anel de foco de teclado, único em toda a interface
- **useWhen:** todo elemento interativo focável deve usar
  `focus-border-width-default` + `focus-border-color-default` no
  `:focus-visible`
- **doNotUseWhen:** não crie um anel de foco customizado por componente —
  a consistência do anel é o que torna a navegação por teclado previsível
- **pairsWith:** `focus-border-color-default` referencia
  `color-border-selected-default` (mesmo azul de seleção) — não troque por
  outra cor "só para esse componente"

---

## 7. Ícone (`icon-*`)

- **purpose:** tamanho e cor padrão de ícones fora de um componente específico
- **useWhen:** `icon-size-small/medium/large` (16/24/32px) para ícones
  soltos em texto, toolbar, listas; `icon-color-default` /
  `icon-color-onbrand` seguem a mesma lógica de `color-shape-*` (2.2)
- **doNotUseWhen:** componentes com ícone próprio (botão, input, chip,
  tag) já definem tamanho/cor de ícone nos seus próprios tokens
  (`button-shape-color-*` etc.) — não sobreponha com `icon-*` genérico
  dentro desses componentes

---

## 8. Marca (`logo-*`)

- **purpose:** dimensões mínimas/máximas e paleta de cor do logo por variante
- **useWhen:** `logo-size-min/max-default|simple|symbol` define os limites
  de cada variante (`default`/`simple`/`symbol` no componente `Logo`);
  `logo-color-toggle-*` são as cores alternativas do símbolo (usadas em
  contextos coloridos ou monocromáticos)
- **doNotUseWhen:** não redimensione o logo abaixo de `logo-size-min-*` —
  os mínimos existem para legibilidade do símbolo, não são sugestão

---

## 9. Tokens de componente

Cada família abaixo já resolve para os tokens semânticos das seções 2–7 —
use-os como estão; não "desmonte" um token de componente para recompor a
partir de tokens semânticos soltos.

| Família | purpose | useWhen | doNotUseWhen |
|---|---|---|---|
| `button-*` | 3 variantes (primary/secondary/tertiary) × 4 estados | Botões de ação | Não use `button-*` para link — isso é `link-*` |
| `segmented-button-*` | Grupo de opções exclusivas (2–3) | Sub-navegação, toggle de visualização | Não use para mais de ~4 opções — nesse caso é `Dropdown` ou `Tabs` |
| `avatar-*` | Círculo de identificação de usuário | Foto/iniciais de pessoa | Não use para ícone de produto — isso é `Product Icon` |
| `tag-*` | Rótulo de status (pill, 1 categoria de feedback) | Status de pedido, badge de estado | Não use para ação clicável — tag não é botão |
| `tooltip-*` | Texto de apoio contextual on-hover/focus | Explicar ícone/rótulo ambíguo | Não use para conteúdo essencial — tooltip pode não ser lido (acessibilidade) |
| `list-*` (`list-list-item-*`) | Lista vertical de itens selecionáveis | Menu de opções, lista de navegação | Não use para tabela de dados — isso é `table-*` |
| `scrollbar-*` | Barra de rolagem customizada | Containers com overflow controlado | Não sobrescreva a scrollbar nativa fora de containers internos da UI |
| `menu-*` (`container`/`menu-item`/`notification-dot`/`section-divider`) | Navegação global (sidebar) | Menu principal do produto | Não confundir `menu-item` com `list-list-item` — são famílias e componentes diferentes mesmo parecendo iguais |
| `input-base-*` (+ `input-token-*`, `input-paragraph-*`, `input-search-border-radius`, `input-file-input-height`) | Campo de formulário | Todo input de texto/número/arquivo | Cada especialização (`search`, `file`, `paragraph`) sobrescreve só o que muda (ex: `input-search-border-radius` é pill, o resto herda de `input-base-*`) — não redeclare o restante do zero |
| `checkbox-*` | Seleção múltipla | Marcar 0-N itens | Não use para seleção única exclusiva — isso é `radio-button-*` |
| `radio-button-*` | Seleção única exclusiva | Marcar 1 de N itens | Não use para toggle on/off — isso é `toggle-*` |
| `table-*` (`table-cell-*`, `table-head-*`) | Dado tabular | Listagem de registros com colunas | Header (`table-head-*`) e célula (`table-cell-*`) têm tokens de borda distintos — não aplique borda de header na célula |
| `link-*` | Texto clicável inline | Navegação dentro de frase/parágrafo | Não use para CTA de botão — isso é `button-*` mesmo com aparência de link |
| `dropdown-*` | Seletor com lista suspensa | Substituir `Input Select` quando o padrão visual é mais compacto (sem borda de input completa) | Não confundir com `input-base` variante select — são dois componentes Figma diferentes, escolha pelo contexto visual pedido no design |
| `toggle-*` | Interruptor on/off imediato (sem confirmação) | Configuração binária com efeito instantâneo | Não use quando a ação precisa de confirmação — nesse caso é `checkbox-*` + botão de salvar |
| `chip-*` | Filtro selecionável, removível ou não | Barra de filtros, seleção múltipla compacta | Não use para status — isso é `tag-*` (chip é acionável, tag é informativo) |
| `breadcrumb-*` | Trilha de navegação hierárquica | Zona B (top bar) do template ERP, indicando profundidade | **Note:** o link é `font-weight-bold` (700) e o item atual é `font-weight-regular` (400) — inversão em relação à maioria dos DS (que deixam o atual em destaque) |
| `flags-*` | Indicador pequeno de bandeira/idioma | Seletor de idioma/país | Família pequena (3 tokens) — se precisar de mais estados, é gap a reportar, não a improvisar |

**Sobre `Paginator` e filtros:** não existem tokens `pagination-*` nem
`filter-*` dedicados no arquivo — o padrão correto (usado no protótipo de
tabela com filtros/paginação já demonstrado nesta conversa) é compor a
partir de `chip-*` (filtros), `input-base-*`/`dropdown-*` (busca/seleção de
período) e da escala genérica `shape-size-*`/`shape-spacing-*` (botões de
página). O mesmo vale para `alert-*`, que não existe: compõe-se a partir de
`color-background/text/border-feedback-*-subtle` (seção 2.3).

---

## 10. Quando usar este documento

- Gerando ou revisando `.module.css` de um componente (Caso 7) e há mais de
  um token plausível para o mesmo valor visual
- Revisando uma tela (`ds-revisar`) e a cor/tipografia está correta em
  pixel, mas o token escolhido é da família/estado errado
- Auditando consistência entre múltiplos componentes que deveriam
  compartilhar o mesmo par estado/variante
- Decidindo se um `font-weight` precisa de fallback numérico explícito
  (seção 3.3) antes do Figma corrigir a colisão de nomes na origem
