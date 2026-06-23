# Decisão UX/Design: Espaçamento, Grid e Estrutura de Telas

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist-v3.3/references/ESPACAMENTO.md`, `references/PADROES.md`, `references/TEMPLATES_PRODUTO.md`

---

## Decisão

Layout é construído sobre um grid de 4px. Todos os espaçamentos seguem a escala definida e toda tela usa Auto Layout no Figma — nunca posicionamento absoluto.

---

## Hierarquia de Espaçamento

Escala válida (em tokens): **4, 8, 12, 16, 24, 32, 40, 48, 64**

Não usar valores fora desta escala.

---

## Estrutura Padrão de Tela

| Zona | Especificação |
|---|---|
| Frame desktop | 1440 × 900 |
| Frame mobile | 375 × 812 |
| Sidebar | 280px largura |
| Content area | `flex-grow`, padding 24px ou 32px |
| Header | 64px altura |

---

## Padrões de Página (5 tipos)

Usar SEMPRE um destes padrões como base — não inventar layouts novos:

1. **Tabela de Dados** — lista com filtros, ações em lote e paginação
2. **Formulário** — criar/editar recurso (max-width 720px, seções com gap 32px)
3. **Dashboard** — cards de métricas (4 em linha, gap 16px) + gráficos
4. **Detalhe** — recurso único com tabs de sub-navegação
5. **Configurações** — seções de configuração agrupadas

Para ASCII diagrams e especificações detalhadas de cada padrão → `references/PADROES.md`

---

## Regras de Figma

- Auto Layout obrigatório — nunca posicionamento absoluto
- Definir `layoutSizing` APÓS `appendChild` (regra crítica da Figma Plugin API)
- `counterAxisAlignItems` aceita apenas: `MIN`, `MAX`, `CENTER`, `BASELINE`
- Nomear cada layer semanticamente: "HeaderContainer", "NavigationSidebar", "ContentArea"

---

## Border-radius

| Contexto | Valor |
|---|---|
| Padrão (cards, inputs, botões) | 8px |
| Elementos pequenos (badges, chips) | 4px |
| Pills (tags, avatars arredondados) | 9999px |

---

## Navegação

- **Breadcrumbs:** não usados no ERP Olist — usar seta de voltar
- **Tabs:** sub-navegação dentro da página. Para 2-3 opções, usar SegmentedButtons
- **Sidebar:** sempre presente via MenuSidebar; item ativo com fundo blue-50

---

## Referências na Skill

- Grid e regras de padding/margin completos → `references/ESPACAMENTO.md`
- 5 padrões de página com diagramas → `references/PADROES.md`
- Zonas de layout por produto (ERP, Envios, Hub, Conta Digital) → `references/TEMPLATES_PRODUTO.md`

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md e PADROES.md
