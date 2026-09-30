# Decisão Técnica: Uso de Tokens CSS

**Categoria:** Técnica
**Status:** Ativa
**Skill de referência:** `references/TOKEN_CATALOG.md`, `references/CORES.md`, `references/TIPOGRAFIA.md`, `references/ESPACAMENTO.md`

---

## Decisão

Todos os valores de cor, espaçamento, tipografia e border-radius devem ser consumidos via variáveis CSS. A fonte de verdade varia conforme o ambiente:

| Ambiente | Fonte primária |
|---|---|
| Com repo instalado | `src/generated/variables.css` |
| Sem repo (designer externo) | `references/TOKEN_CATALOG.md` ← **usar este** |

Nunca use `src/generated/variables.css` como referência sem antes verificar que o arquivo existe no ambiente. Em ambos os casos, os nomes e valores são idênticos.

---

## Dark Mode

O sistema suporta dark mode via tokens exportados do Figma em dois arquivos separados.

### Arquivos de tokens (pasta `packages/design-tokens/tokens/`)

| Arquivo | Conteúdo |
|---|---|
| `base.json` | Tokens primitivos (paleta completa, sem modo) |
| `theme.json` | Tokens semânticos por modo (`{ "Light": {...}, "Dark": {...} }`) |
| `tokens-light.json` | Merge flat: base + theme(Light) + components(Light) |
| `tokens-dark.json` | Merge flat: base + theme(Dark) + components(Dark) |
| `tokens-components.json` | Tokens de componente (opcional, separado) |

### CSS gerado (`src/generated/variables.css`)

```css
/* Light — padrão */
:root {
  --color-background-surface-container: #ffffff;
  /* ... */
}

/* Dark — segue preferência do sistema */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-surface-container: #111111;
    /* ... apenas tokens com valores diferentes no dark */
  }
}

/* Dark — override manual via JS */
[data-theme="dark"] {
  --color-background-surface-container: #111111;
  /* ... */
}

/* Força light quando sistema é dark mas usuário preferiu light */
[data-theme="light"] {
  --color-background-surface-container: #ffffff;
  /* ... */
}
```

### Ativar/desativar dark mode em React

```tsx
// Ativar dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Ativar light mode (sobrescreve preferência do sistema)
document.documentElement.setAttribute('data-theme', 'light');

// Remover override — volta a seguir o sistema
document.documentElement.removeAttribute('data-theme');
```

### Regra: tokens que funcionam em dark mode

Use **apenas tokens semânticos** (camada theme ou component) — eles têm valores diferentes por modo.  
Tokens **primitivos** (camada base) têm o mesmo valor em light e dark — use-os só quando não há semântico disponível.

```css
/* ✅ Correto — semântico, adapta ao modo */
color: var(--color-text-container-title);
background: var(--color-background-surface-container);

/* ⚠️ Cuidado — primitivo, idêntico em ambos os modos */
color: var(--color-gray-gray-900);
```

### JS tokens com dark mode

```ts
import { light, dark, tokens } from '@pedrohenriquevalentim/design-tokens';
// tokens === light (compatibilidade com código existente)
```

---

## Hierarquia de Tokens

O sistema tem três camadas — **use sempre a mais semântica disponível**:

```
Primitivos  → --color-gray-gray-0, --color-blue-blue-500
      ↓
Semânticos  → --color-background-surface-container, --color-text-container-title
      ↓
Componente  → --button-color-primary, --input-border-color-error
```

**Regra:** prefira sempre o token de componente. Se não existir, use o semântico. Primitivos são de uso raro (somente quando não há semântico equivalente).

---

## Nomes Corretos dos Tokens Primitivos de Cor

> ⚠️ Os primitivos têm segmento **duplicado** por artefato do Style Dictionary:

```css
/* ✅ CORRETO — com segmento duplicado */
--color-gray-gray-0: #fcfbf8;
--color-blue-blue-500: #0a4ee4;
--color-red-red-500: #e64e36;

/* ❌ ERRADO — sem duplicação (não existe no CSS) */
--color-gray-0: ...
--color-blue-500: ...
```

Todos os nomes corretos estão catalogados em `references/TOKEN_CATALOG.md` → Seção 1.

---

## Tokens Semânticos de Cor (os mais usados)

```css
/* Fundos */
--color-background-surface-container  /* fundo de cards e página */
--color-background-surface-system     /* fundo de sistema (hover de linha) */
--color-background-enabled-neutral    /* fundo padrão de input */
--color-background-selected-neutral-brand  /* linha/item selecionado */
--color-background-feedback-negative-subtle  /* fundo de erro */
--color-background-feedback-positive-subtle  /* fundo de sucesso */

/* Texto */
--color-text-container-title          /* título principal */
--color-text-container-text           /* texto de suporte */
--color-text-enabled-neutral          /* label, texto secundário */
--color-text-disabled-default         /* texto desabilitado */

/* Bordas */
--color-border-container-outside      /* borda de card/container */
--color-border-enabled-neutral        /* borda de input padrão */
--color-border-selected-default       /* borda de foco/selecionado */
--color-border-feedback-negative-subtle  /* borda de erro */

/* Ícones e shapes */
--color-shape-enabled-neutral         /* ícone padrão */
--color-shape-enabled-brand           /* ícone de ação */
--color-shape-disabled-default        /* ícone desabilitado */
```

Lista completa → `references/TOKEN_CATALOG.md` → Seção 2.

---

## Regras para Código CSS/React

- Use `var(--nome-do-token)` — nunca valores hardcoded
- Unidades em `rem` — nunca `px`
- Elementos de texto internos (`<label>`, helper text, placeholder, mensagem de erro) devem declarar `font-weight`, `font-size` e `line-height` explicitamente no `.module.css` via tokens

## Regras para Figma Plugin API

Na Figma Plugin API **não existem variáveis CSS** — o binding de cor é feito via variável Figma, não via string CSS.

```javascript
// ✅ Correto — binding de variável semântica (mantém rastreabilidade no Figma)
const blueVar = await figma.variables.importVariableByKeyAsync(BLUE_500_VAR_KEY);
node.fills = [{
  type: 'SOLID',
  color: { r: 0.039, g: 0.306, b: 0.894 }, // valor de fallback apenas
  boundVariables: { color: { type: 'VARIABLE_ALIAS', id: blueVar.id } }
}];

// ❌ Inválido — variável CSS não funciona na Plugin API
node.fills = [{ type: 'SOLID', color: 'var(--color-blue-blue-500)' }];

// ❌ Proibido — RGB hardcoded sem binding perde rastreabilidade
//    (o Figma exibe hex solto; o modo claro/escuro não funciona)
node.fills = [{ type: 'SOLID', color: { r: 0.039, g: 0.306, b: 0.894 } }];
```

> **Regra (globals.md):** toda fill/stroke de frame ou componente DEVE usar
> `importVariableByKeyAsync` + `setBoundVariableForPaint`. RGB sem binding é
> proibido mesmo quando o valor numérico corresponde a um token semântico.

Tabela completa de keys de variável e hex → RGB 0-1 → `references/TOKEN_CATALOG.md` → Seção 1, colunas "Figma RGB" e "Variable Key".

---

## Regenerar tokens (com repo)

```bash
npm run build:tokens
```

---

## Referências na Skill

- **Catálogo completo (todos os 1.194 tokens)** → `references/TOKEN_CATALOG.md`
- Paleta de cores com exemplos de uso → `references/CORES.md`
- Escala tipográfica → `references/TIPOGRAFIA.md`
- Hierarquia de espaçamento → `references/ESPACAMENTO.md`
- Qual token semântico escolher (purpose/useWhen/doNotUseWhen) → `references/GOVERNANCA_TOKENS.md`

---

## Histórico

- 2026-09-30 v1.4 — Adicionado suporte a dark mode: nova estrutura de arquivos (tokens-light/dark.json), documentação do CSS gerado (`:root` + `@media` + `[data-theme]`), regras de uso de tokens semânticos vs primitivos em contexto dark, e exports JS `light`/`dark`.
- 2026-09-29 v1.3 — Corrigida contradição crítica no exemplo Figma Plugin API: RGB hardcoded **não é** a forma correta — é proibida. A abordagem correta é `importVariableByKeyAsync` + `setBoundVariableForPaint` com o RGB apenas como fallback no objeto paint. Alinhado com regra equivalente em globals.md.
- 2026-08-23 v1.2 — Corrigida contradição sobre hardcode hex (só proibido em CSS, necessário na Figma Plugin API). Adicionada hierarquia de três camadas, nomes corretos dos primitivos (segmento duplicado), referência ao TOKEN_CATALOG.md como fonte primária sem repo. Removida referência exclusiva a `src/generated/variables.css`.
- 2026-07-03 v1.1 — Adicionada referência a `GOVERNANCA_TOKENS.md`
- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
