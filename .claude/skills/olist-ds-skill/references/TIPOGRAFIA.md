# Tipografia

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

## Composições Tipográficas

Estilos de texto padrão usados no ERP:

```css
/* Título da página */
.titulo-pagina {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-24px);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-32px);
  color: var(--color-gray-900);
}

/* Header de seção */
.header-secao {
  font-size: var(--font-size-16px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-24px);
  color: var(--color-gray-900);
}

/* Texto corpo (padrão) */
.corpo {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-900);
}

/* Caption / helper text */
.caption {
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-16px);
  color: var(--color-gray-500);
}

/* Header de tabela */
.header-tabela {
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-16px);
  color: var(--color-gray-600);
  text-transform: none; /* nunca uppercase na Olist */
}

/* Texto de botão */
.texto-botao {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-20px);
}

/* Label de input */
.label-input {
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-700);
}

/* Badge */
.badge {
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-16px);
}

/* Número de métrica (dashboard) */
.metrica {
  font-size: var(--font-size-32px);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-40px);
  color: var(--color-gray-900);
}
```

## Regras

- ✅ Use 14px como tamanho padrão de corpo — é o padrão do ERP
- ✅ Use semibold (600) para elementos interativos e headers
- ✅ Use gray-500 para texto secundário/suporte
- ✅ Combine cada tamanho com a altura de linha correspondente
- ❌ Nunca use text-transform: uppercase (não faz parte da identidade Olist)
- ❌ Nunca use tamanhos fora da escala de tokens
- ❌ Nunca use itálico para ênfase (use font-weight)
- ❌ Nunca misture famílias tipográficas na mesma interface
