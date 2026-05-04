# Cores

## Arquitetura de Cores

Três camadas: **primitivo** (valores brutos) → **semântico** (significado) → **componente** (uso).
Sempre use variáveis CSS. Nunca hardcode valores hex.

## Paleta Neutra (Cinza)

Cinzas com subtom quente (bege). São a base da interface.

| Token | Hex | Uso | FAÇA | NÃO FAÇA |
|---|---|---|---|---|
| `--color-gray-0` | #fcfbf8 | Fundo da página, fundo de cards | Use como superfície padrão | Usar branco puro (#fff) |
| `--color-gray-50` | #f2f0e8 | Hover, linhas alternadas de tabela | Use para diferenciação sutil | Usar para texto |
| `--color-gray-100` | #e7e4da | Bordas, divisores, separadores | Use bordas de 1px | Usar como fundo |
| `--color-gray-200` | #cecbc0 | Bordas fortes, header de tabela | Use para ênfase em bordas | Usar para texto |
| `--color-gray-300` | #afada2 | Texto desabilitado, ícones placeholder | Use apenas para estados disabled | Usar para conteúdo legível |
| `--color-gray-400` | #918e83 | Ícones inativos, placeholder de input | Use para ícones secundários | Usar para texto corpo |
| `--color-gray-500` | #827f73 | Texto secundário, captions, helper text | Use para conteúdo de suporte | Usar para texto principal |
| `--color-gray-600` | #615f56 | Texto terciário, labels sutis | Use para labels discretos | Evitar em texto longo |
| `--color-gray-700` | #403f3b | Labels, labels de input, headers de form | Use para labels de formulário | Usar para texto corpo |
| `--color-gray-900` | #10100f | Texto principal, títulos, corpo | Cor padrão de texto | Usar como fundo |

## Paleta da Marca (Azul)

Azul é a cor de ação primária. Sinaliza interatividade.

| Token | Hex | Uso |
|---|---|---|
| `--color-blue-0` | #f8f9fc | Fundo de hover em linhas interativas |
| `--color-blue-50` | #e7edf8 | Fundo de seleção/ativo |
| `--color-blue-100` | #d6dff5 | Selecionado + hover |
| `--color-blue-500` | #0a4ee4 | **Ações primárias**: botões, links, indicadores ativos |
| `--color-blue-600` | #043fbe | Estado hover em botões primários |
| `--color-blue-700` | #002d8f | Estado pressed/ativo em botões primários |

### Regras de Uso

```css
/* ✅ Botão primário */
.botao-primario {
  background: var(--color-blue-500);  /* padrão */
  /* hover: var(--color-blue-600) */
  /* ativo: var(--color-blue-700) */
}

/* ✅ Link */
.link { color: var(--color-blue-500); }

/* ✅ Linha selecionada */
.linha-selecionada { background: var(--color-blue-50); }

/* ❌ NUNCA use azul para fundos decorativos */
/* ❌ NUNCA use azul para texto que não é link */
```

## Paleta de Feedback

| Token | Hex | Semântico | Label do badge | Uso |
|---|---|---|---|---|
| `--color-red-500` | #e64e36 | Erro, destrutivo, cancelado | "Cancelado" | Mensagens de erro, botões de deletar |
| `--color-red-0` | #fef7f5 | Fundo de erro | — | Fundo de linha/card com erro |
| `--color-green-500` | #779e3d | Sucesso, positivo, despachado | "Despachado" | Mensagens de sucesso |
| `--color-green-0` | #fafcf8 | Fundo de sucesso | — | Fundo de linha/card com sucesso |
| `--color-yellow-500` | #f0a028 | Alerta, pendente, atenção | "Pendente" | Alertas, status pendente |
| `--color-yellow-0` | #fefbf6 | Fundo de alerta | — | Fundo de linha/card com alerta |
| `--color-cyan-500` | #489999 | Info, status neutro | "Em análise" | Badges informativos |

### Mapa de Cores para Status (Badges)

```
Pendente     → fundo: --color-yellow-50, texto: --color-yellow-600
Aprovado     → fundo: --color-blue-50,   texto: --color-blue-600
Despachado   → fundo: --color-green-50,  texto: --color-green-600
Cancelado    → fundo: --color-red-50,    texto: --color-red-600
Em análise   → fundo: --color-cyan-50,   texto: --color-cyan-600
```

## Cores de Estados Interativos

| Token | Valor | Uso |
|---|---|---|
| `--effects-hover-gray-900-4` | rgba(31,31,30, 0.04) | Hover sutil em elementos neutros |
| `--effects-hover-brand-0-8` | rgba(10,78,228, 0.08) | Hover em elementos da marca |
| `--effects-pressed-gray-900-12` | rgba(31,31,30, 0.12) | Press/ativo em elementos neutros |
| `--effects-pressed-brand-500-16` | rgba(10,78,228, 0.16) | Press/ativo em elementos da marca |
| `--effects-disabled-gray-900-8` | rgba(126,125,119, 0.08) | Fundo de elemento desabilitado |

## Sombras

| Token | Valor | Uso |
|---|---|---|
| `--effects-shadow-4` | rgba(5,5,5, 0.04) | Cards, elevação sutil |
| `--effects-shadow-8` | rgba(5,5,5, 0.08) | Dropdowns, popovers |
| `--effects-shadow-16` | rgba(5,5,5, 0.16) | Modais, diálogos |
| `--effects-shadow-80` | rgba(5,5,5, 0.80) | Overlays, backdrops |

## Regras de Contraste

- Texto corpo em fundo gray-0: usar gray-900 (ratio 15:1 ✅)
- Texto secundário em gray-0: usar gray-500 (ratio 4.6:1 ✅ passa AA por pouco)
- Botão primário: texto branco em blue-500 (ratio 5.2:1 ✅)
- Nunca use gray-300 ou mais claro para texto legível (falha AA)
- Nunca use texto blue-500 em fundo blue-50 (ratio 3.8:1 ❌ falha)
