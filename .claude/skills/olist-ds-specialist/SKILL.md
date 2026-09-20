---
name: olist-ds-specialist
description: Use esta skill para TODO trabalho de UI/UX da Olist — criação de telas a partir de SDDs/PRDs, geração de componentes React, revisão de consistência visual, criação de protótipos no Figma, manutenção do design system e criação/revisão de textos de UI (UX Writing, copy, tom de voz). Acione quando alguém mencionar interface Olist, design system, tokens, componentes, telas, layouts, SDD, PRD, protótipo, wireframe, Figma, Storybook, copy, texto de botão, mensagem de erro, empty state, toast, label, placeholder ou qualquer tarefa de criação ou revisão de UI/copy para produtos Olist. NÃO use para backend, APIs, banco de dados, autenticação ou lógica de negócio sem relação com UI.
version: 3.21
lastModified: 2026-09-20
---

# Olist DS Specialist — Dispatcher v3.21

## Slash Commands

| Comando | Uso | Caso | Para quem |
|---|---|---|---|
| `/ds-tela` | `/ds-tela <sdd-ou-prd>` | 1 + 2 | Dev de BU: gera tela React a partir de SDD/PRD |
| `/ds-figma` | `/ds-figma <sdd-ou-prd>` | 4 | Designer/Dev: cria telas no Figma com instâncias reais do DS |
| `/ds-construir` | `/ds-construir <intenção-ou-figma-url>` | 5 | Mantenedor DS: cria ou evolui componente no Figma |
| `/ds-implementar` | `/ds-implementar <figma-url>` | 8 | Dev de BU: converte tela Figma em JSX tipado |
| `/ds-handoff` | `/ds-handoff <figma-url(s)>` | 9 | Qualquer dev: gera manifesto Markdown de handoff para PR |
| `/ds-componente` | `/ds-componente <figma-url>` | 7 | Mantenedor DS: gera componente DS completo (6 arquivos + docs Figma) |
| `/ds-revisar` | `/ds-revisar` + código ou screenshot | 3 | Qualquer dev: revisa tela/código contra padrões do DS |
| `/ds-sync` | `/ds-sync` | 6 | Mantenedor DS: sincroniza inventário de componentes das libraries Figma |

## Fluxo de Decisão

```
Receber solicitação
    ↓
Slash command presente?
    ├── /ds-implementar → Caso 8
    ├── /ds-handoff     → Caso 9
    ├── /ds-componente  → Caso 7
    ├── /ds-construir   → Caso 5
    ├── /ds-tela        → Caso 1 ou 2 (auto-detectar RNFs/DACI)
    ├── /ds-figma       → Caso 4
    ├── /ds-revisar     → Caso 3
    └── /ds-sync        → Caso 6
    ↓ (sem slash command — detecção automática)
É trabalho de UI/UX? → Não → Recusar, explicar escopo
    ↓ Sim
Qual tipo de tarefa?
    ├── Criar ou evoluir componente no Figma  → Caso 5
    ├── Criar tela no Figma                   → Caso 4
    ├── Criar tela React (SDD básico)         → Caso 1
    ├── Criar tela React (SDD completo)       → Caso 2
    ├── Implementar componente do Figma       → Caso 7
    ├── Converter tela Figma em código        → Caso 8
    ├── Criar ou revisar textos de UI         → UX_WRITING.md (contexto dos Casos 1–4)
    ├── Revisar tela existente                → Caso 3
    ├── Gerar manifesto de handoff            → Caso 9
    └── Gerar testes/stories                  → COMPONENTES.md + MAPA_FONTES.md
```

## Como Executar

Para qualquer caso detectado:

1. Ler `globals.md` — invariantes, regras de library, inventário e referências compartilhadas
2. Ler o arquivo do caso correspondente em `cases/`
3. Executar os passos do caso na íntegra

| Caso | Arquivo |
|---|---|
| 1, 2 (tela React) | `cases/caso-1-2-tela-react.md` |
| 3 (revisar) | `cases/caso-3-revisar.md` |
| 4 (Figma) | `cases/caso-4-figma.md` |
| 5 (construir) | `cases/caso-5-construir.md` |
| 6 (sync) | `cases/caso-6-sync.md` |
| 7 (componente) | `cases/caso-7-componente.md` |
| 8 (implementar) | `cases/caso-8-implementar.md` |
| 9 (handoff) | `cases/caso-9-handoff.md` |

---

**Versão:** 3.21 · **Última atualização:** 2026-09-15
**Changelog:** ver `CHANGELOG.md`
