# Decisão UX/Design: Workflow PRD → Figma

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist-v3.3/references/SDD_PARA_TELA.md`, `references/SDD_AVANCADO.md`, `figma-config.json`

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

| Prioridade | Library | Quando usar |
|---|---|---|
| 1 | **AI Components** | Preferência absoluta — sempre verificar primeiro |
| 2 | **ERP components** | Se não encontrado na AI Components |
| 3 | **ERP recursos** | Ilustrações, padrões específicos de produto |
| 4 | **ERP style guide** | Tipografia, espaçamentos, tokens visuais |
| 5 | **[design system] components web** | Fallback final — só se não existir nas anteriores |

**Libraries bloqueadas** (ignorar mesmo se aparecerem em buscas):
- `design system (base)` — supersedida pela AI Components
- `Design System - Fondations, Components & Icons Rebrand (TO-BE)` — descontinuado
- `Design System - Components Web (AS-IS)` — descontinuado

Os `libraryKey`s e `blockedLibraries` estão em `figma-config.json`.

---

## Busca de Componentes

```
search_design_system(query, includeLibraryKeys: searchPriority)
```

- Sempre passar `includeLibraryKeys` com os valores de `searchPriority` do `figma-config.json`
- Usar o **primeiro resultado** — a ordem da lista garante a prioridade correta
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
