# Olist Design System — Especialista (v3.15 · atualizado em 2026-07-21)

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

## 📌 Library de referência (decisão permanente desde 2026-07-03)

A [`design system (base)`](https://www.figma.com/design/HeyN4w209HWh8rfpTDiwyf/design-system) é a **única library de referência** para construção de telas, em `figma-config.json`/`searchPriority`. A hierarquia anterior (AI Components, ERP components, ERP recursos, ERP style guide, [design system] components web) foi descontinuada e está em `blockedLibraries` com os dados preservados. Histórico completo da decisão, incluindo checagem de cobertura contra o harness, em `decisions/ux-design/FLUXO_PRD_FIGMA.md`.

## Novidades v3.8 (2026-06-29)

- **Slash Commands:** 6 skills finas criadas em `.claude/skills/ds-*/` — `/ds-implementar`, `/ds-tela`, `/ds-figma`, `/ds-componente`, `/ds-revisar`, `/ds-sync` — cada uma delega ao caso correspondente da skill principal
- **Caso 8 (`/ds-implementar`):** novo fluxo para devs de BU converterem telas Figma em JSX tipado usando componentes DS, sem precisar conhecer o inventário de memória
- **Fluxo de Decisão:** roteamento explícito por slash command adicionado antes da detecção automática de intenção
- **`generate-wiki.mjs`:** seção "Como Usar" atualizada com tabela de slash commands
- **`package.json`:** `ship` corrigido para incluir `.storybook/`, `README.md` e `package.json` no `git add`

## Novidades v3.7 (2026-06-25)

- **Fluxo unificado Figma → código + docs:** Caso 7 adicionado ao `SKILL.md` — implementação de componente a partir de URL do Figma executa em paralelo geração de código (5 arquivos) e geração de frame de docs no Figma (demo · props · anatomia · acessibilidade)
- `CLAUDE.md` atualizado: passo 10 na seção "Geração de Componentes" e nota de redirecionamento para `olist-ds-specialist` Caso 7
- Ramo "Criar componente" no Fluxo de Decisão expandido para cobrir o fluxo unificado

## Novidades v3.3 (2026-06-23)

- Criação da pasta `decisions/` com 10 arquivos de decisão organizados por tema
- `decisions/INDEX.md` criado como índice navegável

## Novidades v3.2 (2026-06-15)

- **UX Writing:** `UX_WRITING.md` adicionado como referência de copy e tom de voz
- Novo ramo no Fluxo de Decisão para "Criar ou revisar textos de UI"
- 4 Pilares de Conteúdo, 12 tipos de texto, diretrizes B2B/B2C

## Novidades v3.1 (2026-06-05)

- `HARNESS_TELAS.md` adicionado como gate pré-construção obrigatório no Figma

## Novidades v3.0 (2026-06-03)

- Canal de entrega migrado para `use_figma` direto com instâncias DS reais
- `figma-config.json` migrado de `fileKey` para `libraryKey`; AI Components como master

## Estrutura

```
olist-ds-specialist/
├── CHANGELOG.md               # Histórico de versões da skill
├── README.md                  # Este arquivo — visão geral e changelog
├── SETUP.md                   # Guia de instalação e configuração
├── SKILL.md                   # Instruções, workflow, regras e fluxo de decisão
├── component-registry.json    # Cache local de componentKeys por categoria
├── figma-config.json          # Libraries autorizadas (libraryKeys e searchPriority)
├── decisions/
│   ├── CHANGELOG.md                # Histórico de decisões de design
│   ├── INDEX.md                    # Índice navegável de todas as decisões
│   ├── technical/
│   │   ├── ACESSIBILIDADE.md           # Decisões de acessibilidade (WCAG, ARIA, teclado)
│   │   ├── ASSETS_FIGMA.md             # Regras de uso de assets do Figma MCP
│   │   ├── COMPONENTES_REACT.md        # Convenções de componentes React
│   │   ├── ICONES.md                   # Uso de ícones via ReactNode e currentColor
│   │   └── TOKENS.md                   # Tokens CSS e variáveis de design
│   └── ux-design/
│       ├── COMPONENTES_POR_ZONA.md
│       ├── ESPACAMENTO_LAYOUT.md       # Grid de 4px, border-radius, espaçamento
│       ├── FLUXO_PRD_FIGMA.md          # Workflow PRD → Figma passo a passo
│       ├── PRINCIPIOS.md               # Princípios de design Olist
│       ├── TIPOGRAFIA.md               # Escala tipográfica e tokens
│       └── UX_WRITING.md               # Tom de voz, 4 pilares, diretrizes B2B/B2C
└── references/
    ├── CHECKLIST_REVISAO.md            # 10 categorias de revisão visual, acessibilidade e UX Writing
    ├── COMPONENTES.md                  # Props e variantes de cada componente (auto-gerado)
    ├── CORES.md                        # Sistema de cores com regras de uso
    ├── ESPACAMENTO.md                  # Grid de 4px, border-radius, escala de espaçamento
    ├── FIGMA_CONFIG.md                 # libraryKeys, workflow de busca e import
    ├── GLOSSARIO_PAPEIS_TEXTO.md       # 10 papéis de texto (Heading, Label, Error, etc.)
    ├── GOVERNANCA_TOKENS.md
    ├── HARNEES_TELAS.md                # Gate pré-construção: restrições por zona, limites por componente
    ├── MAPA_FONTES.md                  # Estrutura de pastas do repositório (auto-gerado)
    ├── PADROES.md                      # 5 padrões de página (Tabela, Form, Dashboard, Detalhe, Config)
    ├── SDD_AVANCADO.md                 # RNFs, DACI, Métricas, Rollout, Observabilidade → UI
    ├── SDD_PARA_TELA.md                # 10 passos para traduzir SDD/PRD em decisões de UI
    ├── TEMPLATES_PRODUTO.md            # Zonas de layout por produto (ERP, Envios, Hub, CD)
    ├── TIPOGRAFIA.md                   # Tokens de tipografia (tamanho, peso, altura)
    ├── UX_WRITING.md                   # Tom de voz, 4 pilares, 12 tipos de texto, diretrizes B2B/B2C
    └── VISAO_GERAL.md                  # Mapa de navegação — leia sempre primeiro
```

> **Raiz:** 6 arquivo(s) · **Decisions:** 13 arquivo(s) · **Referências:** 16 arquivo(s) · **Total:** 35 arquivo(s) — atualizado em 2026-07-21 pelo `sync-skill-meta.mjs`
## Libraries do Figma (ordem de prioridade)

| # | Library | Conteúdo |
|---|---|---|
| 1 (master) | **design system (base)** | Única referência para construção de telas |

**Hierarquia anterior (descontinuada em 2026-07-03, dados preservados em `blockedLibraries`):** AI Components (Menu ERP atualizado, Button, ícones rebrand 24), ERP components, ERP recursos, ERP style guide, [design system] components web.

**libraryKeys completas:** ver `figma-config.json`.

## Instalação

### Claude Code (recomendado)
```bash
# A skill viaja com o repositório — só clonar já é suficiente
git clone <repo>
```

### Claude.ai web
```bash
cd .claude/skills && zip -r olist-ds-specialist.zip olist-ds-specialist/
```
Settings → Customize → Skills → Upload `olist-ds-specialist.zip`

## Uso

### Slash Commands (Claude Code CLI)

| Comando | Para quem | O que faz |
|---|---|---|
| `/ds-implementar <figma-url>` | Dev de BU | Converte tela Figma em JSX com componentes DS |
| `/ds-tela <sdd-ou-prd>` | Dev de BU | Gera tela React a partir de SDD/PRD |
| `/ds-figma <sdd-ou-prd>` | Designer/Dev | Cria telas no Figma com instâncias reais DS |
| `/ds-componente <figma-url>` | Mantenedor DS | Gera novo componente DS completo (5 arquivos + docs) |
| `/ds-revisar` | Qualquer dev | Revisa tela/código contra padrões DS |
| `/ds-sync` | Mantenedor DS | Sincroniza inventário de componentes |

### Por descrição (Claude Code e Claude.ai)
```
Use $olist-ds-specialist para criar UI no Figma:
[SDD aqui]
```

## Changelog

### v3.15 (2026-07-21)
- Versão 3.15

### v3.14 (2026-07-20)
- `/ds-sync`: inventário de componentes ressincronizado com a `design system (base)` — famílias Tabela, Gráfico (nova categoria "Data Visualization"), `Paginator`, `Badge`, `Sort`, `Reorder`, `Loading`, `Overlay`, `Cookie`, `Logout`, `Profile`, `Dashboard`, `List`, `Task List`, `Avatar`, `Card`
- "Text Area" renomeado para "Input Paragraph" (mesmo componente, nome real confirmado no Figma)
- Gap do `Paginator`/`Overlay` marcado como resolvido em `GOVERNANCA_TOKENS.md` — componentes já existem na library

### v3.13 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.12 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.11 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.10 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.9 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

### v3.8 (2026-06-29)
- Slash Commands: 6 skills finas (`ds-*`) + Caso 8 (`/ds-implementar`) + roteamento no Fluxo de Decisão

### v3.7 (2026-06-25)
- Fluxo unificado Figma → código + docs (Caso 7)

### v3.6 (2026-06-23)
- Sincronização geral após reestruturação interna

### v3.3 (2026-06-23)
- Pasta `decisions/` com 10 arquivos de decisão

### v3.2 (2026-06-15)
- UX Writing: protocolo, 4 pilares, 12 tipos de texto, B2B/B2C

### v3.1 (2026-06-05)
- HARNESS_TELAS.md como gate pré-construção obrigatório

### v3.0 (2026-06-03)
- Canal de entrega: `use_figma` direto; libraryKeys; AI Components como master

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md, SDD_AVANCADO.md, workflow faseado

### v1.0 (2026-01-12)
- Release inicial
