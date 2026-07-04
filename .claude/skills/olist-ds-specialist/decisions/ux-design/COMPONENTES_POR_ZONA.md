# Decisão UX/Design: Componentes por Zona nos Templates de Produto

**Categoria:** UX/Design
**Status:** Parcialmente resolvida — item 1 confirmado em 2026-07-04, itens 2-5 seguem pendentes
**Skill de referência:** `references/TEMPLATES_PRODUTO.md`, `references/HARNEES_TELAS.md`, `component-registry.json`

---

## Contexto

Após a republicação da library `design system (base)` em 2026-07-03 (ver `decisions/ux-design/FLUXO_PRD_FIGMA.md`), o inventário de componentes (`component-registry.json`) foi revalidado e cresceu de 22 para 63 componentes. Ao mapear quais componentes reais se encaixam em cada zona dos templates de produto (`references/TEMPLATES_PRODUTO.md`), surgiram ambiguidades que não existiam antes — componentes novos ou renomeados cujo uso pretendido não está confirmado.

Este arquivo existe para que essas perguntas não se percam entre sessões. **Nenhum item aqui é regra** — são candidatos observados, aguardando validação do time de design antes de virarem parte do harness (`HARNEES_TELAS.md`) ou dos templates (`TEMPLATES_PRODUTO.md`).

---

## Pontos em Aberto

### 1. `Breadcrumb`: texto puro ou componente real? ✅ Resolvido em 2026-07-04

- **O que se sabia:** `HARNEES_TELAS.md` (Zona B do template ERP) assumia "texto puro, sem componente DS, cor `gray-500`". A `design system (base)` tinha um `Breadcrumb` component_set publicado, sem uso confirmado.
- **Resolução:** confirmado que o `Breadcrumb` component_set da `design system (base)` é a instância a ser usada na Zona B do template ERP — substitui o texto puro. `HARNEES_TELAS.md` (Seção 1 e Seção 2), `TEMPLATES_PRODUTO.md`, `PADROES.md` e `decisions/ux-design/ESPACAMENTO_LAYOUT.md` atualizados para refletir a instância real.

### 2. `Tag` vs `Badge`: mesma função ou usos distintos?

- **O que se sabe:** ambos existem na library desde a republicação. `Tag` já era documentado (status semântico com cor mapeada). `Badge` é novo, propósito não confirmado.
- **Impacto se não resolvido:** risco de escolher o componente errado ao implementar filtro ativo (Zona C, ERP) ou indicador de notificação (Zona B, Envios/Hub/Conta Digital) — os dois viram "candidatos" hoje em `TEMPLATES_PRODUTO.md`.
- **Como resolver:** perguntar ao time de design a diferença de propósito (ex: `Tag` = status semântico de linha/registro; `Badge` = contador numérico sobre ícone?).

### 3. `Segmented Buttons` vs `Tabs`: qual usar para sub-navegação?

- **O que se sabe:** `HARNEES_TELAS.md` (Seção 2, Contextos Válidos) só menciona `Segmented Buttons` para sub-navegação na Zona D. A library agora também tem um componente `Tabs` (assetType `component`, não `component_set` — sugere um componente mais simples/sem variantes).
- **Impacto se não resolvido:** padrão "Detalhe" (Seção 3 do harness) pode ser implementado de duas formas diferentes por telas distintas, quebrando consistência.
- **Como resolver:** perguntar ao time de design se `Tabs` substitui `Segmented Buttons` nesse contexto ou se são usados em situações diferentes (ex: `Tabs` para navegação entre seções de uma página, `Segmented Buttons` para alternar visualização de uma mesma lista).

### 4. `Context Switch`: propósito não confirmado

- **O que se sabe:** componente novo, nome sugere troca de contexto/workspace. Hipótese: usado na Zona B (Top Bar) dos templates Envios/Hub/Conta Digital, junto a `Avatar` (o `Logo` não fica na Zona B — já é exibido na Zona A via `Menu Global`, confirmado em 2026-07-04).
- **Impacto se não resolvido:** nenhum uso documentado — fica fora do harness até ter contexto.
- **Como resolver:** perguntar ao time de design o que é e onde se aplica.

### 5. `Menu Global`: variante `produto` cobre todos os contextos?

- **O que se sabe:** confirmado com 6 variantes (`ERP`, `Conta Digital`, `Envios`, `Ecommerce`, `Agentes de IA`, `Minha Conta`). O harness histórico falava em "ERP, Envios, Hub, Conta Digital" (4 produtos) — `Hub` não aparece como variante própria, e `Ecommerce`/`Agentes de IA`/`Minha Conta` não estavam no vocabulário anterior.
- **Impacto se não resolvido:** ao construir uma tela de "Hub de Integração", não fica claro qual variante de `produto` usar.
- **Como resolver:** perguntar ao time de design qual variante do `Menu Global` corresponde ao Hub de Integração (provavelmente uma das 6 existentes, mapeamento não é 1:1 óbvio).

---

## Como aplicar enquanto pendente

- Ao construir uma tela que dependa de um destes pontos, **usar a opção mais conservadora** (a que já era documentada antes da republicação) e **reportar ao usuário** a ambiguidade, seguindo o formato da Seção 8 do `HARNEES_TELAS.md` ("Violações e Como Reportar").
- Não escolher silenciosamente entre as opções em disputa (ex: não decidir sozinho entre `Tag` e `Badge`) — perguntar.

---

## Referências

- Tabelas "Componentes Recomendados por Zona" (por template) → `references/TEMPLATES_PRODUTO.md`
- Regras de zona e limites por componente → `references/HARNEES_TELAS.md`
- Inventário completo com componentKeys → `component-registry.json`
- Decisão de library única e checagem de cobertura do harness → `decisions/ux-design/FLUXO_PRD_FIGMA.md`

---

## Histórico

- 2026-07-04 v1.2 — Confirmado que a Zona B (Top Bar) dos templates Envios/Hub/Conta Digital **não exibe o logo do produto** — o logo já faz parte do componente `Menu Global` na Zona A. `HARNEES_TELAS.md` e `TEMPLATES_PRODUTO.md` corrigidos (removido `Logo` das colunas "Pode conter"/"Componentes Recomendados" da Zona B); hipótese do item 4 (`Context Switch`) ajustada para não mencionar mais `Logo` como vizinho de zona.
- 2026-07-04 v1.1 — Item 1 (`Breadcrumb`) resolvido: passa a ser a instância real do componente DS na Zona B do ERP. Itens 2-5 seguem pendentes.
- 2026-07-03 v1.0 — Decisão criada a partir da análise de componentes por zona pós-republicação da library.
