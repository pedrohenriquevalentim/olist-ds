# Tipografia

**⚠️ IMPORTANTE:** Para entender **como nomear cada tipo de texto** (Heading, Label, Error, etc.), leia primeiro `GLOSSARIO_PAPEIS_TEXTO.md`. Este arquivo define apenas os **tokens visuais** (tamanho, peso, altura).

---

## Família Tipográfica

| Token | Valor | Uso |
|---|---|---|
| `--font-family-jakarta` | 'Plus Jakarta Sans' | **Todo texto da UI**. Títulos, corpo, labels, botões, inputs |
| `--font-family-arial` | 'Arial' | Apenas fallback. Nunca especificar diretamente |

### Carregamento

No Storybook: via `preview-head.html` (link do Google Fonts).
No Next.js: via `next/font/google` com `variable: "--font-family-jakarta"`.

Pesos carregados: 200, 300, 400, 500, 600, 700, 800.

## Escala de Tamanhos

| Token | Valor | Uso típico |
|---|---|---|
| `--font-size-10px` | 10px | Micro labels, badges, letras miúdas |
| `--font-size-12px` | 12px | Captions, helper text, headers de tabela, timestamps |
| `--font-size-14px` | 14px | **Texto corpo padrão**, células de tabela, valores de input |
| `--font-size-16px` | 16px | Headers de seção, corpo enfatizado, labels de input |
| `--font-size-20px` | 20px | Sub-headers de página, títulos de card |
| `--font-size-24px` | 24px | Títulos de página, headers de modal |
| `--font-size-32px` | 32px | Métricas de dashboard, números destaque |
| `--font-size-40px` | 40px | Números grandes de exibição (raro) |
| `--font-size-48px` | 48px | Headers de marketing (raro no ERP) |

## Escala de Pesos

| Token | Valor | Uso |
|---|---|---|
| `--font-weight-extra-light` | 200 | Apenas decorativo (evitar no ERP) |
| `--font-weight-light` | 300 | Números grandes de exibição |
| `--font-weight-regular` | 400 | **Texto corpo padrão**, descrições, células de tabela |
| `--font-weight-medium` | 500 | Labels de input, labels de formulário, ênfase sutil |
| `--font-weight-semibold` | 600 | **Headers, texto de botão, headers de tabela, badges** |
| `--font-weight-bold` | 700 | Títulos de página, ênfase forte, métricas |
| `--font-weight-extra-bold` | 800 | Apenas marketing (evitar no ERP) |

## Escala de Altura de Linha

| Token | Valor | Quando usar |
|---|---|---|
| `--font-line-height-16px` | 16px | Tamanhos 10px e 12px |
| `--font-line-height-18px` | 18px | 12px com mais respiro |
| `--font-line-height-20px` | 20px | 14px (corpo padrão) |
| `--font-line-height-24px` | 24px | 16px |
| `--font-line-height-30px` | 30px | 20px |
| `--font-line-height-32px` | 32px | 24px |
| `--font-line-height-40px` | 40px | 32px |

## Mapeamento: Papéis de Texto → Tokens

Cada papel de texto (definido em `GLOSSARIO_PAPEIS_TEXTO.md`) tem uma combinação padrão de tokens. Use estas composições como ponto de partida.

| Papel | Tamanho | Peso | Altura | Cor | Classe CSS sugerida |
|---|---|---|---|---|---|
| **Heading** | `24px` | `bold` (700) | `32px` | `gray-900` | `.heading` |
| **Subheading** | `14px` | `regular` (400) | `20px` | `gray-500` | `.subheading` |
| **Section Title** | `16px` | `semibold` (600) | `24px` | `gray-900` | `.sectionTitle` |
| **Body** | `14px` | `regular` (400) | `20px` | `gray-900` | `.body` |
| **Label** | `14px` | `medium` (500) | `20px` | `gray-700` | `.label` |
| **Helper** | `12px` | `regular` (400) | `16px` | `gray-500` | `.helper` |
| **Error** | `12px` | `regular` (400) | `16px` | `red-500` | `.error` |
| **Caption** | `12px` | `regular` (400) | `16px` | `gray-500` | `.caption` |
| **CTA Label** | `14px` | `semibold` (600) | `20px` | (cor do botão) | `.ctaLabel` |
| **Link** | `14px` | `regular` (400) | `20px` | `blue-500` | `.link` |

### Casos Especiais

- **Header de Tabela:** `12px` + `semibold` (600) + `16px` + `gray-600`
- **Badge:** `12px` + `semibold` (600) + `16px` + (cor do badge)
- **Métrica (Dashboard):** `32px` + `bold` (700) + `40px` + `gray-900`
- **Placeholder de Input:** `12px` + `regular` (400) + `16px` + `gray-400`

---

## Exemplo de Código

```css
/* Heading — título principal da tela */
.heading {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-24px);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-32px);
  color: var(--color-gray-900);
}

/* Subheading — texto de apoio abaixo do Heading */
.subheading {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-500);
}

/* Section Title — título de seção */
.sectionTitle {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-16px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-24px);
  color: var(--color-gray-900);
}

/* Body — parágrafo de conteúdo */
.body {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-900);
}

/* Label — rótulo de campo de formulário */
.label {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-700);
}

/* Helper — texto auxiliar abaixo de campo */
.helper {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-16px);
  color: var(--color-gray-500);
}

/* Error — mensagem de erro de validação */
.error {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-16px);
  color: var(--color-red-500);
}

/* Caption — texto secundário (timestamps, metadados) */
.caption {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-16px);
  color: var(--color-gray-500);
}

/* CTA Label — texto dentro de botão */
.ctaLabel {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-20px);
  /* cor herdada do botão */
}

/* Link — texto clicável inline */
.link {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-20px);
  color: var(--color-blue-500);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
```

## Regras

- ✅ Use 14px como tamanho padrão de corpo — é o padrão do ERP
- ✅ Use semibold (600) para elementos interativos e headers
- ✅ Use gray-500 para texto secundário/suporte
- ✅ Combine cada tamanho com a altura de linha correspondente
- ✅ **Sempre nomeie o texto usando os papéis de `GLOSSARIO_PAPEIS_TEXTO.md`** (não invente nomes)
- ❌ Nunca use text-transform: uppercase (não faz parte da identidade Olist)
- ❌ Nunca use tamanhos fora da escala de tokens
- ❌ Nunca use itálico para ênfase (use font-weight)
- ❌ Nunca misture famílias tipográficas na mesma interface

---

**Referência cruzada:**
- `GLOSSARIO_PAPEIS_TEXTO.md` — definição semântica de cada papel de texto
- `CORES.md` — paleta de cores para texto
- `SDD_PARA_TELA.md` — como mapear requisitos em papéis de texto
