# Decisão UX/Design: Workflow PRD → Figma

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/SDD_PARA_TELA.md`, `references/SDD_AVANCADO.md`, `figma-config.json`

---

## Decisão

A tradução de PRDs/SDDs em telas Figma segue um workflow com ordem obrigatória de leitura e hierarquia fixa de bibliotecas. Nenhuma tela é criada sem validação prévia da lista de telas identificadas.

---

## Ordem de Leitura Obrigatória

1. Ler o PRD/SDD completo
2. Ler `references/VISAO_GERAL.md` (sempre primeiro)
3. Ler `figma-config.json` **antes** de qualquer operação com Figma MCP
4. Identificar componentes necessários consultando as libraries
5. Listar TODAS as telas identificadas e aguardar validação
6. Criar tela por tela com `use_figma`, aguardando feedback a cada entrega

---

## Hierarquia de Bibliotecas (ordem obrigatória)

**Decisão permanente (desde 2026-07-03):** a `design system (base)` ([link](https://www.figma.com/design/HeyN4w209HWh8rfpTDiwyf/design-system)) é a **única library de referência** para construção de telas.

| Prioridade | Library | Quando usar |
|---|---|---|
| 1 | **design system (base)** | Única referência para construção de telas |

**Hierarquia anterior (descontinuada, mantida apenas em `blockedLibraries` para referência histórica):**

| Prioridade | Library | Quando usar |
|---|---|---|
| 1 | **AI Components** | Era a preferência absoluta antes desta decisão |
| 2 | **ERP components** | Usada se não encontrado na AI Components |
| 3 | **ERP recursos** | Ilustrações, padrões específicos de produto |
| 4 | **ERP style guide** | Tipografia, espaçamentos, tokens visuais |
| 5 | **[design system] components web** | Fallback final da hierarquia anterior |

**Libraries bloqueadas permanentemente** (ignorar mesmo se aparecerem em buscas):
- `Design System - Components Web (AS-IS)` — descontinuado
- `AI Components`, `ERP components`, `ERP recursos`, `ERP style guide`, `[design system] components web` — substituídas pela design system (base) em 2026-07-03

Os `libraryKey`s e `blockedLibraries` estão em `figma-config.json`.

---

## Por que a design system (base) foi adotada

**Contexto:** a `design system (base)` foi desbloqueada em 2026-07-02 — antes disso era o mesmo conteúdo do arquivo bloqueado "Design System - Fondations, Components & Icons Rebrand (TO-BE)". Foi avaliada em paralelo com a hierarquia anterior (AI Components e demais) e adotada como referência única em 2026-07-03.

**Checagem de cobertura contra o harness (2026-07-02):** consulta real (`search_design_system`, uma query por requisito) da `design system (base)` contra cada exigência do `HARNEES_TELAS.md`. Resultado: cobertura quase completa — Menu ERP, Button(+Icon), Radio Button, Segmented Buttons, Link, Tag (+ desktop/mobile/more/delivery), Tooltip, Logo (+ cores do rebrand), Icon (genérico + ~15 ícones individuais), Input Search, Input Text, Dropdown, Checkbox, Avatar, Card genérico, Breadcrumb e Heading/Subheading (via Text Styles `text/H1`–`H5`) confirmados presentes. **Gap conhecido:** nenhuma variante dedicada de `Summary Card` (fundo azul) — apenas `card` genérico. Ver `figma-config.json` → `harnessCoverageCheck` e o aviso correspondente em `HARNEES_TELAS.md`.

**Caso a decisão precise ser revertida no futuro:** mover as 5 entradas de `blockedLibraries` de volta para `libraries`/`searchPriority` em `figma-config.json`, restaurando a ordem original de `priority`, e atualizar as anotações neste arquivo e no `CLAUDE.md`.

---

## Busca de Componentes

```
search_design_system(query, includeLibraryKeys: searchPriority)
```

- Sempre passar `includeLibraryKeys` com os valores de `searchPriority` do `figma-config.json`
- **Descartar antes de escolher:** qualquer resultado cujo `name` comece com `.` (ponto) — são componentes internos usados para construir um component set (ex: `.menu erp/stage14`, `.[base] single select list`), nunca uma instância válida. Ver `figma-config.json` → `excludedComponentNamePatterns`.
- Do que sobrar, usar o **primeiro resultado** — a ordem da lista garante a prioridade correta
- Nunca construir do zero o que já existe no DS

---

## Regras de Construção no Figma

- Usar instâncias reais de componentes do DS — não construir do zero
- Auto Layout obrigatório (nunca posicionamento absoluto)
- `layoutSizing` definido APÓS `appendChild` (regra crítica da Figma Plugin API)
- Nomear cada layer semanticamente: "HeaderContainer", "NavigationSidebar", "ContentArea"
- Hierarquia de espaçamento: 4, 8, 12, 16, 24, 32, 40, 48, 64
- Border-radius: 8px padrão, 4px pequeno, 9999px pill
- Fonte primária: Plus Jakarta Sans

---

## Para SDDs com Seções Avançadas

Se o SDD contiver RNFs, DACI, Métricas de Sucesso, Plano de Rollout ou Observabilidade, consultar `references/SDD_AVANCADO.md` para traduzir essas seções em UI (feature flags, banners de aviso, cards de métrica, health checks visíveis etc.).

---

## Referências na Skill

- 10 passos para traduzir SDD em telas → `references/SDD_PARA_TELA.md`
- Seções técnicas de SDD (RNFs, DACI, Métricas, Rollout) → `references/SDD_AVANCADO.md`
- libraryKeys e workflow de import → `figma-config.json`
- Zonas de layout por produto → `references/TEMPLATES_PRODUTO.md`

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
- 2026-07-02 v2.0 — Avaliação em paralelo (branch `test-ds-base-only`): design system (base) testada como library única, comparada com a hierarquia anterior (AI Components e demais).
- 2026-07-02 v2.1 — Checagem de cobertura da design system (base) contra o `HARNEES_TELAS.md` (cobertura quase completa, gap em Summary Card). Regra permanente adicionada: descartar resultados de `search_design_system` com `name` iniciado por `.` — são componentes internos de construção de component set, não instâncias válidas. Ver `figma-config.json` → `excludedComponentNamePatterns` e `harnessCoverageCheck`.
- 2026-07-03 v3.0 — **Decisão definitiva:** design system (base) adotada como única library de referência para construção de telas. AI Components, ERP components, ERP recursos, ERP style guide e [design system] components web bloqueadas permanentemente em `figma-config.json` (dados preservados para eventual reversão).
