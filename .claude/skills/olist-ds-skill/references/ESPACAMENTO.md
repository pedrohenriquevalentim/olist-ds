# Espaçamento e Layout

## Escala de Espaçamento

Unidade base: 4px. Todo espaçamento deve ser múltiplo de 4.

| Token | Valor | Uso comum |
|---|---|---|
| `--shape-spacing-4px` | 4px | Gap ícone-texto inline, padding vertical de badge |
| `--shape-spacing-8px` | 8px | Padding compacto, gaps pequenos, checkbox-label |
| `--shape-spacing-12px` | 12px | Padding horizontal de input, gaps internos de card |
| `--shape-spacing-16px` | 16px | **Padding padrão**, gaps de seção, padding de card |
| `--shape-spacing-24px` | 24px | Separação de seções, padding grande de card |
| `--shape-spacing-32px` | 32px | Separação de nível de página, entre seções maiores |
| `--shape-spacing-40px` | 40px | Margens topo/base da página |
| `--shape-spacing-48px` | 48px | Divisões entre seções maiores |
| `--shape-spacing-64px` | 64px | Respiro de nível de página (raro) |

## Escala de Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--shape-border-radius-0px` | 0 | Elementos quadrados (nunca para interativos) |
| `--shape-border-radius-4px` | 4px | Botões pequenos (SM), badges, chips |
| `--shape-border-radius-8px` | 8px | **Padrão**: botões, inputs, cards, modais |
| `--shape-border-radius-12px` | 12px | Cards grandes, containers |
| `--shape-border-radius-16px` | 16px | Containers de modal, cards proeminentes |
| `--shape-border-radius-9999px` | 9999px | Pills, tags, avatares circulares |

## Espessura de Borda

| Token | Valor | Uso |
|---|---|---|
| `--shape-border-width-1px` | 1px | **Bordas padrão**: inputs, cards, divisores |
| `--shape-border-width-2px` | 2px | Anéis de foco, estados ativos, ênfase |
| `--shape-border-width-4px` | 4px | Borda lateral em linhas selecionadas |

## Escala de Tamanho (dimensões de componente)

| Token | Valor | Uso típico |
|---|---|---|
| `--shape-size-24px` | 24px | Ícone pequeno, avatar pequeno |
| `--shape-size-32px` | 32px | Input altura SM, botão de ícone SM |
| `--shape-size-40px` | 40px | Input altura MD, botão altura MD |
| `--shape-size-48px` | 48px | Input altura LG, botão altura LG, linha de tabela |
| `--shape-size-56px` | 56px | Linha de tabela confortável |
| `--shape-size-64px` | 64px | Altura do header |
| `--shape-size-280px` | 280px | Largura da sidebar |

## Padrão de Layout da Página

```
┌────────────────────────────────────────────────────────┐
│                    Header (64px)                        │
├──────────┬─────────────────────────────────────────────┤
│          │                                             │
│ Sidebar  │            Área de Conteúdo                 │
│ (280px)  │         padding: 24px-32px                  │
│          │                                             │
│          │  ┌─────────────────────────────────────┐    │
│          │  │  Título + Ações (24px abaixo)        │    │
│          │  ├─────────────────────────────────────┤    │
│          │  │  Barra de filtros (16px abaixo)      │    │
│          │  ├─────────────────────────────────────┤    │
│          │  │  Conteúdo (tabela/cards/formulário)   │    │
│          │  ├─────────────────────────────────────┤    │
│          │  │  Paginação (16px acima)               │    │
│          │  └─────────────────────────────────────┘    │
│          │                                             │
└──────────┴─────────────────────────────────────────────┘
```

## Regras de Espaçamento

```css
/* Área de conteúdo da página */
.conteudo-pagina { padding: var(--shape-spacing-32px); }

/* Espaço entre título e conteúdo */
.titulo-para-conteudo { margin-bottom: var(--shape-spacing-24px); }

/* Espaço entre filtros e tabela */
.filtros-para-tabela { margin-bottom: var(--shape-spacing-16px); }

/* Padding interno de card */
.card { padding: var(--shape-spacing-16px); }           /* compacto */
.card-largo { padding: var(--shape-spacing-24px); }     /* padrão */

/* Gap entre elementos em linha */
.gap-apertado { gap: var(--shape-spacing-8px); }
.gap-padrao { gap: var(--shape-spacing-12px); }
.gap-largo { gap: var(--shape-spacing-16px); }

/* Gap entre seções empilhadas */
.gap-secao { gap: var(--shape-spacing-24px); }
.gap-secao-maior { gap: var(--shape-spacing-32px); }
```

## Regras

- ✅ Sempre use tokens de espaçamento — nunca valores arbitrários
- ✅ Use 16px como padrão quando estiver em dúvida
- ✅ Padding da área de conteúdo: 24px ou 32px
- ✅ Largura da sidebar: sempre 280px
- ❌ Nunca use valores ímpares (5px, 7px, 13px)
- ❌ Nunca use espaçamento abaixo de 4px
- ❌ Nunca mude a largura da sidebar por página
