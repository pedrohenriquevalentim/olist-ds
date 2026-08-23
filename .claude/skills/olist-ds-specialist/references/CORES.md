# Cores

> Para o catálogo completo com todos os 1.194 tokens, use `TOKEN_CATALOG.md`.
> Este arquivo cobre os tokens de cor mais usados com orientação de uso.

---

## Arquitetura de Cores

Três camadas: **primitivo** (valores brutos) → **semântico** (significado) → **componente** (uso).

**Sempre prefira o token mais semântico disponível.** Tokens semânticos de cor começam com `--color-background-*`, `--color-text-*`, `--color-border-*`, `--color-shape-*`.

> ⚠️ **Nomes primitivos têm segmento duplicado** (artefato do Style Dictionary):
> - ✅ Correto: `--color-gray-gray-0`, `--color-blue-blue-500`
> - ❌ Errado (não existe): `--color-gray-0`, `--color-blue-500`

---

## Tokens Semânticos de Cor (use estes no código)

### Fundos (`--color-background-*`)

| Token | Valor resolvido | Uso |
|---|---|---|
| `--color-background-surface-container` | `#fcfbf8` | Fundo de cards, página, modais |
| `--color-background-surface-system` | `#f2f0e8` | Hover de linha de tabela, fundo de sistema |
| `--color-background-surface-brand-01` | `#0a4ee4` | Fundo de elemento de marca (botão primary) |
| `--color-background-enabled-neutral` | `#fcfbf8` | Fundo padrão de input habilitado |
| `--color-background-enabled-utility` | `#cecbc0` | Fundo de elemento utilitário |
| `--color-background-selected-neutral-brand` | `#e7edf8` | Linha ou item selecionado |
| `--color-background-selected-full-brand` | `#0a4ee4` | Fundo de seleção de marca cheia |
| `--color-background-feedback-positive-colored` | `#779e3d` | Badge/chip sucesso colorido |
| `--color-background-feedback-positive-subtle` | `#e3edd4` | Fundo sutil de sucesso |
| `--color-background-feedback-negative-colored` | `#e64e36` | Badge/chip erro colorido |
| `--color-background-feedback-negative-subtle` | `#fbcdc6` | Fundo sutil de erro |
| `--color-background-feedback-warning-colored` | `#f0a028` | Badge/chip alerta colorido |
| `--color-background-feedback-warning-subtle` | `#f9e5c7` | Fundo sutil de alerta |
| `--color-background-feedback-informative-colored` | `#2f5555` | Badge/chip informativo colorido |
| `--color-background-feedback-informative-subtle` | `#bdefef` | Fundo sutil informativo |
| `--color-background-feedback-neutral-colored` | `#403f3b` | Badge/chip neutro colorido |
| `--color-background-feedback-neutral-subtle` | `#e7e4da` | Fundo sutil neutro |
| `--color-background-utility-neutral` | `#e7e4da` | Fundo de elemento utilitário neutro |
| `--color-background-utility-unread` | `#f8f9fc` | Indicador de não-lido |
| `--color-background-disabled-default` | `rgba(126,125,119,0.08)` | Fundo de elemento desabilitado |

### Texto (`--color-text-*`)

| Token | Valor resolvido | Uso |
|---|---|---|
| `--color-text-container-title` | `#10100f` | Títulos e headings |
| `--color-text-container-label` | `#10100f` | Labels de formulário |
| `--color-text-container-text` | `#403f3b` | Texto de suporte e descrição |
| `--color-text-container-on-brand` | `#fcfbf8` | Texto sobre fundo de marca |
| `--color-text-enabled-neutral` | `#615f56` | Texto secundário, caption |
| `--color-text-enabled-brand` | `#043fbe` | Link, texto de ação |
| `--color-text-hover-neutral` | `#10100f` | Texto em hover |
| `--color-text-hover-brand` | `#002d8f` | Link em hover |
| `--color-text-selected-neutral` | `#043fbe` | Texto de item selecionado |
| `--color-text-feedback-positive-subtle` | `#425822` | Texto de mensagem de sucesso |
| `--color-text-feedback-negative-subtle` | `#842d1f` | Texto de mensagem de erro |
| `--color-text-feedback-warning-subtle` | `#8f5c10` | Texto de mensagem de alerta |
| `--color-text-disabled-default` | `#cecbc0` | Texto desabilitado |

### Bordas (`--color-border-*`)

| Token | Valor resolvido | Uso |
|---|---|---|
| `--color-border-container-outside` | `#e7e4da` | Borda de card, container, tabela |
| `--color-border-container-inside` | `#f2f0e8` | Borda interna de container |
| `--color-border-enabled-neutral` | `#afada2` | Borda de input padrão |
| `--color-border-hover-neutral` | `#827f73` | Borda de input em hover |
| `--color-border-pressed-neutral` | `#201f1d` | Borda de input em pressed |
| `--color-border-filled-neutral` | `#10100f` | Borda de input preenchido |
| `--color-border-selected-default` | `#0a4ee4` | Borda de foco e selecionado |
| `--color-border-feedback-negative-subtle` | `#5a1f16` | Borda de campo com erro |
| `--color-border-feedback-positive-subtle` | `#273414` | Borda de campo com sucesso |
| `--color-border-disabled-default` | `#e7e4da` | Borda de campo desabilitado |

### Ícones e Shapes (`--color-shape-*`)

| Token | Valor resolvido | Uso |
|---|---|---|
| `--color-shape-content-default` | `#10100f` | Ícone de conteúdo principal |
| `--color-shape-enabled-neutral` | `#615f56` | Ícone padrão |
| `--color-shape-enabled-brand` | `#043fbe` | Ícone de ação/marca |
| `--color-shape-hover-neutral` | `#10100f` | Ícone em hover |
| `--color-shape-selected-neutral` | `#043fbe` | Ícone selecionado |
| `--color-shape-disabled-default` | `#cecbc0` | Ícone desabilitado |
| `--color-shape-feedback-negative-subtle` | `#842d1f` | Ícone de erro |
| `--color-shape-feedback-positive-subtle` | `#425822` | Ícone de sucesso |
| `--color-shape-feedback-warning-subtle` | `#8f5c10` | Ícone de alerta |

---

## Paleta Primitiva de Referência

Use primitivos apenas quando não existe token semântico equivalente. **Atenção ao segmento duplicado.**

### Cinza (neutros quentes)

| Token | Hex | Figma RGB (0–1) | Uso típico |
|---|---|---|---|
| `--color-gray-gray-0` | `#fcfbf8` | `{r:0.988, g:0.984, b:0.973}` | Fundo da página |
| `--color-gray-gray-50` | `#f2f0e8` | `{r:0.949, g:0.941, b:0.910}` | Hover de linha |
| `--color-gray-gray-100` | `#e7e4da` | `{r:0.906, g:0.894, b:0.855}` | Bordas, divisores |
| `--color-gray-gray-200` | `#cecbc0` | `{r:0.808, g:0.796, b:0.753}` | Bordas fortes |
| `--color-gray-gray-300` | `#afada2` | `{r:0.686, g:0.678, b:0.635}` | Texto desabilitado |
| `--color-gray-gray-400` | `#918e83` | `{r:0.569, g:0.557, b:0.514}` | Placeholder |
| `--color-gray-gray-500` | `#827f73` | `{r:0.510, g:0.498, b:0.451}` | Texto secundário |
| `--color-gray-gray-600` | `#615f56` | `{r:0.380, g:0.373, b:0.337}` | Labels |
| `--color-gray-gray-700` | `#403f3b` | `{r:0.251, g:0.247, b:0.231}` | Texto de suporte |
| `--color-gray-gray-900` | `#10100f` | `{r:0.063, g:0.063, b:0.059}` | Texto principal |

### Azul (marca e ação)

| Token | Hex | Figma RGB (0–1) | Uso típico |
|---|---|---|---|
| `--color-blue-blue-0` | `#f8f9fc` | `{r:0.973, g:0.976, b:0.988}` | Fundo de hover em linha interativa |
| `--color-blue-blue-50` | `#e7edf8` | `{r:0.906, g:0.929, b:0.973}` | Linha/item selecionado |
| `--color-blue-blue-100` | `#d6dff5` | `{r:0.839, g:0.875, b:0.961}` | Selecionado + hover |
| `--color-blue-blue-500` | `#0a4ee4` | `{r:0.039, g:0.306, b:0.894}` | Ações primárias |
| `--color-blue-blue-600` | `#043fbe` | `{r:0.016, g:0.247, b:0.745}` | Hover em botão primário |
| `--color-blue-blue-700` | `#002d8f` | `{r:0.000, g:0.176, b:0.561}` | Pressed/ativo |

### Feedback

| Token | Hex | Figma RGB (0–1) | Semântico |
|---|---|---|---|
| `--color-red-red-500` | `#e64e36` | `{r:0.902, g:0.306, b:0.212}` | Erro, destrutivo |
| `--color-red-red-0` | `#fef7f5` | `{r:0.996, g:0.969, b:0.961}` | Fundo de erro |
| `--color-green-green-500` | `#779e3d` | `{r:0.467, g:0.620, b:0.239}` | Sucesso |
| `--color-green-green-0` | `#fafcf8` | `{r:0.980, g:0.988, b:0.973}` | Fundo de sucesso |
| `--color-yellow-yellow-500` | `#f0a028` | `{r:0.941, g:0.627, b:0.157}` | Alerta, pendente |
| `--color-yellow-yellow-0` | `#fefbf6` | `{r:0.996, g:0.984, b:0.965}` | Fundo de alerta |
| `--color-cyan-cyan-500` | `#489999` | `{r:0.282, g:0.600, b:0.600}` | Informativo |

---

## Effects (interação e elevação)

| Token | Valor | Uso |
|---|---|---|
| `--effects-hover-gray-9004` | `rgba(31,31,30, 0.04)` | Hover sutil em elementos neutros |
| `--effects-hover-brand-08` | `rgba(10,78,228, 0.08)` | Hover em elementos da marca |
| `--effects-pressed-gray-90012` | `rgba(31,31,30, 0.12)` | Press em elementos neutros |
| `--effects-pressed-brand-50016` | `rgba(10,78,228, 0.16)` | Press em elementos da marca |
| `--effects-disabled-gray-0` | `rgba(126,125,119, 0.08)` | Fundo de elemento desabilitado |
| `--effects-shadow-4` | `rgba(5,5,5, 0.04)` | Elevação sutil (cards) |
| `--effects-shadow-8` | `rgba(5,5,5, 0.08)` | Dropdowns, popovers |
| `--effects-shadow-16` | `rgba(5,5,5, 0.16)` | Modais, diálogos |
| `--effects-shadow-80` | `rgba(5,5,5, 0.80)` | Overlays, backdrops |

---

## Uso em Figma Plugin API

Na Figma Plugin API, variáveis CSS não existem — use valores numéricos RGB (0–1).

```javascript
// ✅ Definir fill de fundo de card
frame.fills = [{ type: 'SOLID', color: { r: 0.988, g: 0.984, b: 0.973 } }]; // --color-gray-gray-0

// ✅ Definir cor de botão primário
button.fills = [{ type: 'SOLID', color: { r: 0.039, g: 0.306, b: 0.894 } }]; // --color-blue-blue-500

// ✅ Definir cor de borda
input.strokes = [{ type: 'SOLID', color: { r: 0.686, g: 0.678, b: 0.635 } }]; // --color-gray-gray-300

// ✅ Definir cor de texto
textNode.fills = [{ type: 'SOLID', color: { r: 0.063, g: 0.063, b: 0.059 } }]; // --color-gray-gray-900
```

A coluna "Figma RGB" nas tabelas acima já fornece os valores prontos. Para cores não listadas aqui, consulte `TOKEN_CATALOG.md` → Seção 1.

---

## Mapa de Cores para Status (Badges)

```
Pendente     → fundo: --color-background-feedback-warning-subtle  (#f9e5c7)
               texto: --color-text-feedback-warning-subtle         (#8f5c10)
Aprovado     → fundo: --color-background-selected-neutral-brand   (#e7edf8)
               texto: --color-text-selected-neutral                (#043fbe)
Despachado   → fundo: --color-background-feedback-positive-subtle (#e3edd4)
               texto: --color-text-feedback-positive-subtle        (#425822)
Cancelado    → fundo: --color-background-feedback-negative-subtle  (#fbcdc6)
               texto: --color-text-feedback-negative-subtle        (#842d1f)
Em análise   → fundo: --color-background-feedback-informative-subtle (#bdefef)
               texto: --color-text-feedback-informative-subtle     (#2f5555)
```

---

## Regras de Contraste

- Texto corpo em fundo `gray-gray-0`: usar `gray-gray-900` (ratio 15:1 ✅)
- Texto secundário em `gray-gray-0`: usar `gray-gray-600` via semântico (ratio ~4.8:1 ✅ AA)
- Botão primário: texto branco em `blue-blue-500` (ratio 5.2:1 ✅)
- Nunca use `gray-gray-300` ou mais claro para texto legível (falha AA)
