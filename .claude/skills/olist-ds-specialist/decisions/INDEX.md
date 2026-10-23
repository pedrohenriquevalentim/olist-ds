# Decisões de Design de Produto — Olist Design System

Ponto de entrada para todas as decisões de produto registradas neste projeto.
Cada decisão referencia o arquivo da skill que governa os detalhes completos.

**Skill principal:** `.claude/skills/olist-ds-specialist/`
**Referência mestra:** `.claude/skills/olist-ds-specialist/references/VISAO_GERAL.md`

---

## Decisões Técnicas

| Arquivo | Tema | Skill de referência |
|---|---|---|
| [technical/TOKENS.md](technical/TOKENS.md) | Uso de tokens CSS — regras de consumo | `references/CORES.md`, `references/TIPOGRAFIA.md`, `references/ESPACAMENTO.md` |
| [technical/COMPONENTES_REACT.md](technical/COMPONENTES_REACT.md) | Convenções de componentes React | `references/COMPONENTES.md`, `references/MAPA_FONTES.md` |
| [technical/ICONES.md](technical/ICONES.md) | Gerenciamento de ícones e assets SVG | `references/COMPONENTES.md`, **`references/ICONES_CATALOGO.md`** |
| [technical/ACESSIBILIDADE.md](technical/ACESSIBILIDADE.md) | Regras de acessibilidade (W3C/WCAG) | `references/CHECKLIST_REVISAO.md` |
| [technical/ASSETS_FIGMA.md](technical/ASSETS_FIGMA.md) | Assets via Figma MCP | `references/FIGMA_CONFIG.md`, `figma-config.json` |

## Decisões de UX / Design

| Arquivo | Tema | Skill de referência |
|---|---|---|
| [ux-design/PRINCIPIOS.md](ux-design/PRINCIPIOS.md) | Princípios de design da Olist | `references/VISAO_GERAL.md` |
| [ux-design/ESPACAMENTO_LAYOUT.md](ux-design/ESPACAMENTO_LAYOUT.md) | Grid, espaçamento e estrutura de telas | `references/ESPACAMENTO.md`, `references/PADROES.md`, `references/TEMPLATES_PRODUTO.md` |
| [ux-design/TIPOGRAFIA.md](ux-design/TIPOGRAFIA.md) | Escala tipográfica e papéis de texto | `references/TIPOGRAFIA.md`, `references/GLOSSARIO_PAPEIS_TEXTO.md` |
| [ux-design/FLUXO_PRD_FIGMA.md](ux-design/FLUXO_PRD_FIGMA.md) | Workflow PRD → Figma e hierarquia de bibliotecas | `references/SDD_PARA_TELA.md`, `references/SDD_AVANCADO.md`, `figma-config.json` |
| [ux-design/UX_WRITING.md](ux-design/UX_WRITING.md) | Tom de voz, copy e regras de escrita | `references/UX_WRITING.md`, `references/GLOSSARIO_PAPEIS_TEXTO.md` |
| [ux-design/COMPONENTES_POR_ZONA.md](ux-design/COMPONENTES_POR_ZONA.md) | **Pendente** — ambiguidades de componente por zona pós-republicação (Tag vs Badge, Segmented Buttons vs Tabs, etc.) | `references/TEMPLATES_PRODUTO.md`, `references/HARNEES_TELAS.md`, `component-registry.json` |
| [ux-design/INTENCAO_ACOES.md](ux-design/INTENCAO_ACOES.md) | Intenção (`intent` default/danger) em Button, Button Icon e Link; `type=danger` virou `type=primary` + `intent=danger` | `references/GOVERNANCA_TOKENS.md` (2.5), `references/HARNEES_TELAS.md`, `references/CHECKLIST_REVISAO.md` |
| [ux-design/ILUSTRACOES_E_CONTENT_CARD.md](ux-design/ILUSTRACOES_E_CONTENT_CARD.md) | Ilustrações do brand (`ilustracao`) e Content Card com slots | `references/ILUSTRACOES.md`, `references/ORGANISMOS.md` |
| **2026-10-23 — Skill v3.25** | Content Card e `ilustracao` entram no DS; `intent` em Button, Button Icon e Link; novos tokens e referência `ILUSTRACOES.md` | `references/VISAO_GERAL.md` |
| **2026-10-20 — Templates por zonas e organismos** | Os templates deixam de ser telas desenhadas: 8 placeholders de zonas para todos os produtos, com organismos permitidos por zona (`references/TEMPLATES_PRODUTO.md` v2.0, `references/templates/*.json`, `references/ORGANISMOS.md`). Substitui o template único ERP. | `references/TEMPLATES_PRODUTO.md` |
| **2026-08-25 — Template único** (superado em 2026-10-20) | Envios, Hub de Integração e Conta Digital (Internet Banking) passam a usar o template ERP. Removido segundo template (viewport 1440×852, gap 24px, Zonas A–E sem Filter Bar). `TEMPLATES_PRODUTO.md` v1.8 · `HARNEES_TELAS.md` v1.4. | `references/TEMPLATES_PRODUTO.md`, `references/HARNEES_TELAS.md` |

---

## Como versionar

Cada arquivo de decisão tem um cabeçalho `## Histórico` ao final.
Ao alterar uma decisão, registre ali: data, o que mudou e por quê.

Exemplo:
```
## Histórico
- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
- 2026-07-01 v1.1 — Adicionado: unidades em rem obrigatórias também em border-radius
```

---

**Última atualização:** 2026-10-23 — skill v3.25
