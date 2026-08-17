# Boas Práticas — Design Tokens do Olist Design System

**Fonte:** Análise do arquivo Figma `design-system (base)` — `HeyN4w209HWh8rfpTDiwyf`  
**Data:** 2026-07-22  
**Versão do DS:** `@pedrohenriquevalentim/olist-ds@1.0.66`

---

## Índice

1. [Arquitetura em Três Camadas](#1-arquitetura-em-três-camadas)
2. [Regras por Camada](#2-regras-por-camada)
3. [Boas Práticas para Designers](#3-boas-práticas-para-designers)
4. [Boas Práticas para Desenvolvedores](#4-boas-práticas-para-desenvolvedores)
5. [Boas Práticas para Mantenedores do DS](#5-boas-práticas-para-mantenedores-do-ds)
6. [Convenções de Nomenclatura](#6-convenções-de-nomenclatura)
7. [O Que Nunca Fazer](#7-o-que-nunca-fazer)
8. [Fluxo de Trabalho por Cenário](#8-fluxo-de-trabalho-por-cenário)
9. [Checklist de Revisão](#9-checklist-de-revisão)

---

## 1. Arquitetura em Três Camadas

O sistema de tokens da Olist segue uma arquitetura hierárquica de três camadas, mais uma auxiliar para prototipagem:

```
┌──────────────────────────────────────────────────────┐
│  03. component tokens   (Camada de Componente)       │
│  678 tokens · 1 modo · 30 componentes mapeados       │
│  Aponta para: 02. theme tokens                       │
└──────────────────────────────────────────────────────┘
          ↑ aliases para
┌──────────────────────────────────────────────────────┐
│  02. theme tokens       (Camada Semântica)           │
│  250 tokens · 2 modos: light / dark                  │
│  Aponta para: 01. base tokens                        │
└──────────────────────────────────────────────────────┘
          ↑ aliases para
┌──────────────────────────────────────────────────────┐
│  01. base tokens        (Camada Primitiva)           │
│  231 tokens · 1 modo: base                           │
│  Valores brutos: hex, números, strings               │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  04. prototype variables  (Auxiliar — Figma only)    │
│  19 tokens · uso exclusivo em protótipos interativos │
└──────────────────────────────────────────────────────┘
```

### Princípio fundamental

> **A troca de tema (light/dark) é resolvida exclusivamente na camada 02.** As camadas 01 e 03 são agnósticas ao tema — os componentes nunca precisam saber qual modo está ativo.

---

## 2. Regras por Camada

### `01. base tokens` — Camada Primitiva

**O que é:** paleta de valores brutos. Nenhum contexto semântico — apenas "quais valores existem no sistema."

**Conteúdo:**

| Categoria | Tokens | Tipos |
|---|---|---|
| `color` | 85 | COLOR — 7 paletas (gray, blue, cyan, green, red, yellow, pink) com steps 0–950 |
| `shape` | 78 | FLOAT — border-radius, border-width, sizes, spacing |
| `effects` | 35 | COLOR/FLOAT — sombras, blur, overlay, estados interativos (hover/pressed/drag/disabled) |
| `font` | 33 | STRING/FLOAT — família, tamanhos (10–64px), pesos (200–800), line-heights (12–72px) |

**Regras:**
- Base tokens definem o universo de possibilidades. Eles **nunca** devem ser aplicados diretamente em componentes.
- Quando precisar de uma cor, a resposta certa não é "qual hex?" mas "qual papel semântico?"
- Os base tokens são o teto do sistema — qualquer valor que não existe aqui não pode ser usado.

---

### `02. theme tokens` — Camada Semântica

**O que é:** nomeia a *intenção* de uso e resolve o tema. É aqui que `light` e `dark` divergem.

**Estrutura de nomenclatura:** `color / grupo / estado / variante`

**Grupos de cor disponíveis:**

| Grupo | Estados mapeados |
|---|---|
| `background` | surface, container, enabled, hover, pressed, selected, disabled, feedback |
| `border` | container, enabled, hover, pressed, selected, disabled |
| `text` | container (title, text, label, on brand), enabled, feedback |
| `shape` | content, enabled, hover, pressed, selected, disabled |

**Como o dual-mode funciona:**

```
color/background/surface/system
  light → color/gray/gray 50  (#f2f0e8)
  dark  → color/gray/gray 950 (#050505)

color/border/enabled/neutral
  light → color/gray/gray 300 (#afada2)
  dark  → color/gray/gray 600 (#615f56)

effects/shadow/level 1
  light → effects/shadow/4%   (rgba preto 4%)
  dark  → effects/shadow/80%  (rgba preto 80%)
```

**Regras:**
- Para qualquer elemento de UI sem token de componente dedicado, use tokens desta camada.
- Sempre leia o nome, não o valor resolvido — `color/background/hover/neutral` e `color/background/enabled/neutral` podem ter valores similares em light, mas semânticas completamente diferentes.
- Nunca escolha um token semântico só porque ele resolve para o hex que você quer. Respeite a intenção declarada no nome.

---

### `03. component tokens` — Camada de Componente

**O que é:** tokens isolados por componente. Cada componente tem seu namespace e referencia exclusivamente tokens da camada 02.

**Componentes com tokens dedicados (30 total):**

```
button · input · menu · dropdown · checkbox · radio button
chip · tabs · segmented button · paginator · list · table
link · toggle · badge · tooltip · avatar · icon · shadow
text · logo · card · drawer · breadcrumb · context switch
scrollbar · overlay · focus · globals · flags
```

**Exemplos de aliasing real:**

```
text/heading/color        → color/text/container/title     (02)
text/paragraph/color      → color/text/container/text      (02)
icon/color/default        → color/shape/content/default    (02)
menu/container/color      → color/background/surface/container (02)
shadow/color/level 1      → effects/shadow/level 1         (02)
avatar/color/bg           → color/background/surface/brand 01 (02)
button/* (51 tokens)      → color/background/*/*, color/border/*/* (02)
```

**Regras:**
- Se existe um token de componente para o que você está fazendo, use-o. Sempre.
- Tokens de componente nunca devem apontar para base tokens diretamente — somente para tokens semânticos (02).
- Ao criar um novo componente, seu primeiro passo é mapear quais tokens de 02 você vai consumir, antes de criar qualquer token em 03.

---

### `04. prototype variables` — Auxiliar

**O que é:** variáveis de estado para prototipagem interativa no Figma. Não têm função no código.

**Regra única:** estes tokens **nunca** devem ser consumidos em código. São exclusivos do Figma para demonstração de interações.

---

## 3. Boas Práticas para Designers

### Regra de ouro

> **Sempre aplique o token da camada mais específica disponível.**
> 
> `03. component tokens` → `02. theme tokens` → nunca aplique `01. base tokens` diretamente.

### Ao escolher cores

**Faça:**
- Procure primeiro em `03. component tokens` pelo nome do componente que está trabalhando
- Se não existir token de componente, use `02. theme tokens → color/background/*`, `color/text/*` ou `color/border/*`
- Selecione pelo **estado** correto: `enabled`, `hover`, `pressed`, `selected`, `disabled`

**Não faça:**
- Não aplique `01. base tokens` diretamente em componentes (ex: `color/blue/blue 500`)
- Não use um token de hover onde o estado é enabled — mesmo que o hex seja parecido
- Não invente cores fora da paleta

### Ao trabalhar com feedback visual

O sistema tem variantes de feedback em `color/background/feedback/`:
- `positive/colored` → verde (sucesso)
- `negative/colored` → vermelho (erro)
- `warning/colored` → amarelo (atenção)
- `informative/colored` → ciano (informação)
- `brand/colored` → azul (marca)
- `accent/colored` → pink (destaque)

Sempre use estes tokens para feedback — nunca cores brutas da paleta.

### Ao criar protótipos interativos

Use exclusivamente a collection `04. prototype variables`. Nunca misture variáveis de protótipo com tokens de design real.

### Ao revisar consistência

Verifique se o token aplicado corresponde ao estado visual exibido:
- Elemento em repouso → `enabled`
- Ao passar o mouse → `hover`
- Ao clicar → `pressed`
- Elemento marcado → `selected`
- Elemento inativo → `disabled`

---

## 4. Boas Práticas para Desenvolvedores

### Como consumir tokens no código

Os tokens são exportados via Style Dictionary para `src/generated/variables.css`. Sempre use variáveis CSS — nunca hardcode valores.

**Correto:**
```css
.meu-componente {
  background-color: var(--color-background-enabled-neutral);
  color: var(--color-text-container-text);
  border: 1px solid var(--color-border-enabled-neutral);
  border-radius: var(--shape-border-radius-8px);
}
```

**Errado:**
```css
.meu-componente {
  background-color: #fcfbf8;  /* hardcoded — jamais */
  color: #615f56;             /* hardcoded — jamais */
}
```

### Correspondência entre camadas Figma e código

| Camada Figma | Variável CSS gerada | Quando usar |
|---|---|---|
| `03. component tokens` | `var(--button-bg-enabled)` | Sempre que existir para o componente |
| `02. theme tokens` | `var(--color-background-enabled-neutral)` | Para elementos sem token de componente |
| `01. base tokens` | `var(--color-blue-blue-500)` | Nunca diretamente em componentes |

### Implementando dark mode

O dark mode é resolvido pela camada 02 via alternância de modo no Figma. No código, isso se traduz em trocar a classe de tema no elemento raiz — os tokens filhos se resolvem automaticamente.

```css
/* tokens/variables.css gerado — Light (padrão) */
:root {
  --color-background-surface-system: #f2f0e8;
  --color-text-container-title: #10100f;
}

/* Dark mode */
[data-theme="dark"] {
  --color-background-surface-system: #050505;
  --color-text-container-title: #fcfbf8;
}
```

Nunca escreva condicionais de tema no CSS de componentes — deixe os tokens fazerem isso.

### Ao implementar um componente do zero

1. Verifique se já existem tokens em `03. component tokens` para ele
2. Se sim, use-os. Se não, use tokens de `02. theme tokens`
3. Mapeie cada propriedade visual para um token (cor, borda, raio, tipografia, sombra)
4. Nunca use valores de `01. base tokens` diretamente

### Tipografia

Os tamanhos canônicos são: `10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64px`  
Os pesos canônicos são: `200, 300, 400, 500, 600, 700, 800`  
A família primária é: `Plus Jakarta Sans`

Sempre use os tokens — nunca defina tamanho ou peso manualmente.

```css
/* Correto */
.titulo {
  font-family: var(--font-family-jakarta);
  font-size: var(--font-size-24px);
  font-weight: var(--font-weight-700);
  line-height: var(--font-line-height-32px);
}
```

### Sombras e elevação

O sistema tem três níveis de sombra disponíveis via `02. theme tokens`:
- `effects/shadow/contact` — elevação zero, apenas definição de borda
- `effects/shadow/level 1` — elevação baixa (dropdowns, cards)
- `effects/shadow/level 2` — elevação alta (modais, dialogs)

No dark mode, as sombras têm opacidade drasticamente maior (80–88%) para compensar a inversão do contraste — isso é resolvido automaticamente pelos tokens.

---

## 5. Boas Práticas para Mantenedores do DS

### Ao adicionar uma nova cor à paleta

1. Crie os steps em `01. base tokens → color/[família]/[step]` seguindo o padrão 0–950
2. Crie os aliases semânticos correspondentes em `02. theme tokens` com valores para `light` e `dark`
3. Crie tokens de componente em `03` se necessário, apontando para 02
4. **Nunca** crie um alias que pule camadas (componente → primitivo direto)

### Ao criar um novo papel semântico

Siga o fluxo obrigatório:

```
01. Identifique a cor base necessária em 01. base tokens
     ↓
02. Crie o token semântico em 02. theme tokens
    - Defina o alias para light
    - Defina o alias para dark
    - Nomeie pela intenção: color/background/[estado]/[variante]
     ↓
03. Se necessário, crie token de componente em 03. component tokens
    - Aponte para o token semântico criado em 02
    - Nunca aponte direto para 01
```

### Ao implementar dark mode para um novo token

Garanta que ambos os modos tenham aliases definidos em `02`. Um token sem alias de dark vai herdar o valor de light, gerando inconsistência visual.

### Ao criar tokens de novo componente

Estrutura recomendada em `03. component tokens`:

```
[componente]/color/[estado]          → color/background/[estado]/[variante]  (02)
[componente]/border/color/[estado]   → color/border/[estado]/[variante]      (02)
[componente]/text/color/[estado]     → color/text/[estado]/[variante]        (02)
[componente]/shape/[propriedade]     → shape/border-radius/[valor]           (01 ou 02)
[componente]/shadow/[nível]          → effects/shadow/[nível]                (02)
```

### Ponto de atenção: `ALL_SCOPES` na camada 01

A maioria dos tokens de `01. base tokens` está com `ALL_SCOPES`, o que polui todos os property pickers do Figma (qualquer cor de base aparece nas opções de texto, borda e fundo simultaneamente).

**Recomendação:** revisar e aplicar scopes específicos:
- Cores → `FRAME_FILL`, `SHAPE_FILL`, `TEXT_FILL`, `STROKE_COLOR`
- Font size → `FONT_SIZE`
- Font weight → `FONT_WEIGHT`
- Line height → `LINE_HEIGHT`
- Border radius → `CORNER_RADIUS`
- Border width → `STROKE_FLOAT`
- Sizes → `WIDTH_HEIGHT`
- Effects → `EFFECT_COLOR`, `EFFECT_FLOAT`

### Ponto de atenção: separadores no nome dos tokens

A collection `04. prototype variables` usa backslash (`\`) como separador em alguns paths (ex: `menu\notifications/...`), misturando com o separador padrão `/`. Isso pode gerar comportamento inconsistente ao exportar via Style Dictionary.

**Recomendação:** padronizar todos os paths usando apenas `/`.

---

## 6. Convenções de Nomenclatura

### Padrão geral

```
categoria / grupo / estado / variante
```

### Exemplos reais do arquivo

| Token | Leitura |
|---|---|
| `color/background/hover/neutral` | cor · de fundo · no estado hover · variante neutra |
| `color/border/selected/default` | cor · de borda · no estado selecionado · variante default |
| `color/text/container/title` | cor · de texto · dentro de container · papel título |
| `button/bg/enabled` | botão · cor de fundo · estado habilitado |
| `effects/shadow/level 1` | efeitos · sombra · nível 1 de elevação |
| `shape/border-radius/8px` | forma · raio de borda · valor 8px |
| `font/size/16px` | fonte · tamanho · 16px |

### Nomenclatura de estados

| Estado | Token | Quando usar |
|---|---|---|
| `enabled` | Estado padrão ativo | Elemento interativo em repouso |
| `hover` | Cursor sobre o elemento | Feedback visual de foco com mouse |
| `pressed` | Durante o clique | Feedback de ação em andamento |
| `selected` | Elemento marcado/ativo | Seleção persistente (tab ativa, item de menu) |
| `disabled` | Elemento inativo | Ação não disponível no contexto |
| `focused` | Foco por teclado | Navegação sem mouse (acessibilidade) |

### Nomenclatura de grupos de cor

| Grupo | Uso correto |
|---|---|
| `background` | Fundos de containers, cards, botões, superfícies |
| `border` | Bordas, divisores, outlines |
| `text` | Qualquer conteúdo textual |
| `shape` | Ícones, ilustrações, elementos vetoriais |

---

## 7. O Que Nunca Fazer

### Para todos os perfis

| Proibido | Por quê | Como corrigir |
|---|---|---|
| Aplicar `01. base tokens` diretamente em componentes | Remove a capacidade de theming e cria dependências frágeis | Use sempre tokens de 02 ou 03 |
| Hardcodar hex values no código ou no Figma | Desvincula o valor do sistema e quebra o dark mode | Use a variável CSS ou token Figma correspondente |
| Escolher token pelo valor resolvido e não pela semântica | Dois tokens com mesmo hex hoje podem divergir com mudanças de paleta | Leia o nome — ele define a intenção |
| Criar tokens de componente apontando direto para 01 | Pula a camada semântica, quebrando o fluxo de theming | Intermedie sempre por 02 |
| Usar tokens de `04` (prototype variables) em código | São variáveis de estado de protótipo, sem relação com tokens de design real | Ignore esta collection no contexto de desenvolvimento |

### Para designers

| Proibido | Por quê |
|---|---|
| Criar frame com cor fora do sistema de tokens | Cria inconsistência e não herda dark mode |
| Usar `color/blue/blue 500` em texto de erro | O token certo é `color/background/feedback/negative/colored` |
| Misturar tokens de estados diferentes | `hover` e `enabled` têm semânticas distintas mesmo com hex similar |

### Para desenvolvedores

| Proibido | Por quê |
|---|---|
| Condicionais de tema em CSS de componente (`if darkMode: color: #050505`) | O dark mode deve ser resolvido pelos tokens, não pela lógica do componente |
| Sobrescrever variável CSS de token com valor fixo | Quebra a cadeia de theming para aquele elemento |
| Usar `font-size: 15px` | Não existe no sistema — use `16px` ou `14px` |

### Para mantenedores

| Proibido | Por quê |
|---|---|
| Criar token sem definir ambos os modos (light e dark) | Causa herança silenciosa de valor incorreto no dark mode |
| Deletar base tokens sem verificar aliases | Pode quebrar dezenas de tokens semânticos e de componente em cascata |
| Criar alias que pula camadas (03 → 01) | Isola o componente do sistema de theming |
| Usar `ALL_SCOPES` em novos tokens | Polui os pickers com opções irrelevantes |

---

## 8. Fluxo de Trabalho por Cenário

### Cenário 1: Criar novo estado visual em um componente existente

```
1. Abrir collection 03. component tokens
2. Localizar o namespace do componente (ex: button/)
3. Verificar se já existe token para o estado desejado
4. Se não existe:
   a. Identificar o token semântico correspondente em 02. theme tokens
   b. Criar alias em 03 apontando para 02
5. Aplicar o novo token no componente no Figma
6. Atualizar a variável CSS correspondente no código
```

### Cenário 2: Implementar dark mode em elemento sem token de componente

```
1. Identificar qual token de 02. theme tokens se aplica ao papel do elemento
   (fundo? texto? borda?)
2. Verificar se ambos os modos (light e dark) estão definidos no token
3. Aplicar o token — o dark mode será resolvido automaticamente
4. Nunca criar CSS condicional de tema no componente
```

### Cenário 3: Adicionar novo componente ao Design System

```
Designer:
1. Mapear todos os estados e variantes visuais do componente
2. Para cada propriedade visual, identificar o token semântico (02) correspondente
3. Criar tokens em 03. component tokens apontando para 02
4. Aplicar os tokens nas instâncias do componente no Figma

Desenvolvedor:
1. Confirmar que o Style Dictionary gerou as variáveis CSS correspondentes
2. Implementar o componente usando as variáveis CSS
3. Verificar comportamento em light e dark mode
```

### Cenário 4: Revisar consistência de tokens em tela existente

```
1. Selecionar cada elemento interativo na tela
2. Verificar se o token aplicado corresponde ao estado visual
3. Verificar se o token pertence à camada correta (03 > 02, nunca 01)
4. Verificar se existe token de dark mode definido para o token usado
5. Confirmar que nenhum valor está hardcoded (hex direto sem token)
```

---

## 9. Checklist de Revisão

### Para designers (antes de entregar uma tela)

- [ ] Todos os elementos usam tokens do Design System (sem hex hardcoded)
- [ ] Elementos interativos usam tokens da camada 03 quando existem para aquele componente
- [ ] Elementos sem token de componente usam tokens da camada 02
- [ ] Nenhum elemento usa tokens da camada 01 diretamente
- [ ] Estados interativos (hover, pressed, selected, disabled) estão com os tokens corretos
- [ ] Cores de feedback usam os tokens `color/background/feedback/*`
- [ ] Sombras usam os tokens `effects/shadow/*` da camada 02
- [ ] Tipografia usa os tokens de `font/*` definidos no sistema
- [ ] A tela foi revisada nas variantes light e dark

### Para desenvolvedores (antes de abrir PR)

- [ ] Nenhum valor hardcoded de cor, tipografia, espaçamento ou sombra no CSS
- [ ] Todas as variáveis CSS usam o prefixo correto gerado pelo Style Dictionary
- [ ] O componente funciona corretamente em dark mode sem condicionais de tema
- [ ] Tokens de componente (03) foram priorizados sobre tokens semânticos (02)
- [ ] Nenhum token de protótipo (04) foi consumido no código
- [ ] Line-height e font-size usam apenas os valores canônicos do sistema

### Para mantenedores (antes de publicar novos tokens)

- [ ] Novos tokens têm ambos os modos definidos (light e dark)
- [ ] Aliases de componente (03) apontam para semânticos (02), nunca para primitivos (01)
- [ ] Novos tokens têm scopes específicos — sem `ALL_SCOPES` em tokens primitivos
- [ ] Nenhum token existente foi deletado sem verificar os aliases dependentes
- [ ] Nomenclatura segue o padrão `categoria/grupo/estado/variante`
- [ ] Separadores de path são exclusivamente `/` (sem backslash)
- [ ] Style Dictionary foi recompilado e as variáveis CSS foram atualizadas

---

*Documento gerado a partir de análise direta das collections do arquivo Figma `design-system (base)` via Figma MCP.*  
*Para atualizar, reexecutar a análise sobre o arquivo `HeyN4w209HWh8rfpTDiwyf` e revisar as seções afetadas.*
