# Olist Design System — Especialista (v3.6)

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

## Novidades v3.6 (2026-06-23)

- Arquivos da skill modificados: SKILL.md, CHANGELOG.md, README.md, SETUP.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md
- Outros arquivos: claude/skills/olist-ds-specialist-v3.5/CHANGELOG.md

## Novidades v3.5 (2026-06-23) 

- Sincronização geral de todos os arquivos da skill após reestruturação interna
- Todos os arquivos de `decisions/` e `references/` revisados e atualizados

## Novidades v3.4 (2026-06-23)

- Atualização incremental interna sem mudanças funcionais

## Novidades v3.3 (2026-06-23)

- Criação da pasta `decisions/` com 10 arquivos de decisão organizados por tema:
  - `technical/TOKENS.md` — regras de consumo de tokens CSS e unidades rem
  - `technical/COMPONENTES_REACT.md` — convenções de estrutura, props e testes
  - `technical/ICONES.md` — ReactNode, currentColor, sem pacotes externos
  - `technical/ACESSIBILIDADE.md` — roles ARIA, navegação por teclado, WCAG AA
  - `technical/ASSETS_FIGMA.md` — fluxo Figma MCP, identificadores, declaração SVG
  - `ux-design/PRINCIPIOS.md` — 4 princípios de design Olist e identidade visual
  - `ux-design/ESPACAMENTO_LAYOUT.md` — grid 4px, 5 padrões de página, estrutura de tela
  - `ux-design/TIPOGRAFIA.md` — escala tipográfica, 10 papéis de texto
  - `ux-design/FLUXO_PRD_FIGMA.md` — hierarquia de bibliotecas, busca e regras de build
  - `ux-design/UX_WRITING.md` — tom B2B, regras por tipo de texto
- `decisions/INDEX.md` criado como índice navegável
- `sync-skill-meta.mjs` atualizado para varrer `decisions/` ao renomear referências

## Novidades v3.2 (2026-06-15)

- **UX Writing:** `UX_WRITING.md` adicionado como referência de copy e tom de voz (fonte: skill CX Writing v2.0)
- Novo ramo no Fluxo de Decisão para "Criar ou revisar textos de UI"
- Seção 10 adicionada ao `CHECKLIST_REVISAO.md` com 18 itens de revisão de UX Writing
- Regra crítica 5 no `SKILL.md`: consultar `UX_WRITING.md` ao criar qualquer texto na UI
- `VISAO_GERAL.md` atualizado: 15 referências, nova entrada `UX_WRITING.md`, novo bloco de leitura para copy/UX Writing
- Protocolo de triagem obrigatório: componente → contexto → objetivo antes de qualquer copy
- 4 Pilares de Conteúdo como critério de validação (Conciso, Claro, Significativo, Dialógico)
- 12 tipos de texto mapeados com regras DO/DON'T, limites de caracteres e tokens visuais
- Diretrizes B2B (lojista) vs. B2C (consumidor) com linguagem e tom distintos
- Iniciativa de abrasileiramento documentada (sem hífen, termos técnicos contextualizados, sem termos internos externamente)
- Nomenclatura de produtos Olist (primeira menção + menções posteriores)
- Mapeamento SDD → tipo de texto para tradução de requisitos em copy
- `SKILL.md` atualizado para v3.2

## Novidades v3.1 (2026-06-05)

### Harness de construção de telas (`HARNESS_TELAS.md`):
- Gate pré-construção obrigatório com 6 itens binários — Claude só avança se todos aprovados
- Restrições binárias por zona (A–E) para ERP e Envios/Hub/Conta Digital
- Limites quantitativos por componente (ex: máx 1 `Button` primary por tela, máx 1 `Heading` por tela)
- Tabela de contextos válidos e proibidos por componente
- Harness de primitivos: define o que pode ser construído do zero e configuração obrigatória
- Padrão de nomenclatura de layers obrigatório com formato e exemplos
- Estados mínimos obrigatórios por padrão de página (Tabela, Form, Dashboard, Detalhe, Empty State)
- Regras específicas para skeleton loading
- Formato padronizado para reportar conflitos com o harness (Seção 8)
- `SKILL.md` atualizado para v3.1: harness integrado no fluxo de decisão, tabela de referências e Caso 4

## Novidades v3.0 (2026-06-03)

### Workflow use_figma (canal único de entrega):
- Remoção do workflow de plugin JSON intermediário — `use_figma` como canal único
- Telas construídas diretamente no Figma via `use_figma` MCP com instâncias reais de componentes DS
- `search_design_system` com `includeLibraryKeys` filtra às 5 libraries autorizadas
- `importComponentSetByKeyAsync` traz componentes reais (Menu ERP, Button, Tags, etc.)
- Workflow faseado: tela por tela com screenshot + feedback a cada entrega
- Caso de uso 5: componente não existe no inventário → construir com primitivos + documentar
- Caso de uso 6: sincronizar inventário de componentes

### Libraries como fonte da verdade:
- `figma-config.json` agora usa `libraryKey` (formato `lk-...`) em vez de `fileKey`
- **AI Components** como library master com preferência absoluta sobre ERP components
- 5 libraries em ordem de prioridade; 3 libraries bloqueadas
- `search_design_system` sempre filtrado por `searchPriority`
- TEMPLATES_PRODUTO.md adicionado (zonas de layout por produto: ERP, Envios, Hub, Conta Digital)

### Regras da Figma Plugin API documentadas:
- `layoutSizing` definido após `appendChild`
- Valores válidos de `counterAxisAlignItems`: MIN MAX CENTER BASELINE
- Textos em cards: `textAutoResize='HEIGHT'` + `layoutSizingHorizontal='FILL'`

## Novidades v2.1 (2026-05-07)

- `figma-config.example.json` adicionado à skill (compartilhável sem credenciais)
- `FIGMA_CONFIG.md` como 12º arquivo de referência
- Instrução para ler `figma-config.json` antes de qualquer chamada ao Figma MCP
- `sync-skill.mjs` atualizado para v2.1
- `generate-wiki.mjs` criado

## Novidades v2.0 (2026-05-04)

- `GLOSSARIO_PAPEIS_TEXTO.md` — 10 papéis de texto (Heading, Label, Error, etc.)
- `SDD_AVANCADO.md` — RNFs, DACI, Métricas, Rollout e Observabilidade → UI
- Workflow faseado no Figma (tela por tela com feedback)
- Sistema de ícones centralizado via `currentColor`
- `sync-skill.mjs` para auto-geração de referências
- `validate-icon-migration.mjs` para validação de migração

## Novidades v1.0

- Versão inicial da skill com 8 arquivos de referência

## Estrutura

```
olist-ds-specialist-v3.6/
├── CHANGELOG.md               # Histórico de versões da skill
├── README.md                  # Este arquivo — visão geral e changelog
├── SETUP.md                   # Guia de instalação e configuração
├── SKILL.md                   # Instruções, workflow, regras e fluxo de decisão
├── component-registry.json    # Cache local de componentKeys por categoria
├── figma-config.json          # Libraries autorizadas (libraryKeys e searchPriority)
└── references/
    ├── CHECKLIST_REVISAO.md            # 10 categorias de revisão visual, acessibilidade e UX Writing
    ├── COMPONENTES.md                  # Props e variantes de cada componente (auto-gerado)
    ├── CORES.md                        # Sistema de cores com regras de uso
    ├── ESPACAMENTO.md                  # Grid de 4px, border-radius, escala de espaçamento
    ├── FIGMA_CONFIG.md                 # libraryKeys, workflow de busca e import
    ├── GLOSSARIO_PAPEIS_TEXTO.md       # 10 papéis de texto (Heading, Label, Error, etc.)
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

> **Raiz:** 6 arquivo(s) · **Referências:** 15 arquivo(s) · **Total:** 21 arquivo(s) — atualizado automaticamente pelo `sync-skill-meta.mjs`

```
olist-ds-specialist-v3.6/
├── CHANGELOG.md               # Histórico de versões da skill
├── README.md                  # Este arquivo — visão geral e changelog
├── SETUP.md                   # Guia de instalação e configuração
├── SKILL.md                   # Instruções, workflow, regras e fluxo de decisão
├── component-registry.json    # Cache local de componentKeys por categoria
├── figma-config.json          # Libraries autorizadas (libraryKeys e searchPriority)
└── references/
    ├── CHECKLIST_REVISAO.md            # 10 categorias de revisão visual, acessibilidade e UX Writing
    ├── COMPONENTES.md                  # Props e variantes de cada componente (auto-gerado)
    ├── CORES.md                        # Sistema de cores com regras de uso
    ├── ESPACAMENTO.md                  # Grid de 4px, border-radius, escala de espaçamento
    ├── FIGMA_CONFIG.md                 # libraryKeys, workflow de busca e import
    ├── GLOSSARIO_PAPEIS_TEXTO.md       # 10 papéis de texto (Heading, Label, Error, etc.)
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

> **Raiz:** 6 arquivo(s) · **Referências:** 15 arquivo(s) · **Total:** 21 arquivo(s) — atualizado automaticamente pelo `sync-skill-meta.mjs`

```
olist-ds-specialist-v3.6/
├── CHANGELOG.md               # Histórico de versões da skill
├── README.md                  # Este arquivo — visão geral e changelog
├── SETUP.md                   # Guia de instalação e configuração
├── SKILL.md                   # Instruções, workflow, regras e fluxo de decisão
├── component-registry.json    # Cache local de componentKeys por categoria
├── figma-config.json          # Libraries autorizadas (libraryKeys e searchPriority)
└── references/
    ├── CHECKLIST_REVISAO.md            # 10 categorias de revisão visual, acessibilidade e UX Writing
    ├── COMPONENTES.md                  # Props e variantes de cada componente (auto-gerado)
    ├── CORES.md                        # Sistema de cores com regras de uso
    ├── ESPACAMENTO.md                  # Grid de 4px, border-radius, escala de espaçamento
    ├── FIGMA_CONFIG.md                 # libraryKeys, workflow de busca e import
    ├── GLOSSARIO_PAPEIS_TEXTO.md       # 10 papéis de texto (Heading, Label, Error, etc.)
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

> **Raiz:** 6 arquivo(s) · **Referências:** 15 arquivo(s) · **Total:** 21 arquivo(s) — atualizado automaticamente pelo `sync-skill-meta.mjs`

```
olist-ds-specialist-v3.6/
├── CHANGELOG.md               # Histórico de versões da skill
├── README.md                  # Este arquivo — visão geral e changelog
├── SETUP.md                   # Guia de instalação e configuração
├── SKILL.md                   # Instruções, workflow, regras e fluxo de decisão
├── component-registry.json    # Cache local de componentKeys por categoria
├── figma-config.json          # Libraries autorizadas (libraryKeys e searchPriority)
├── decisions/
│   ├── CHANGELOG.md           # Histórico de decisões de design
│   ├── INDEX.md               # Índice navegável de todas as decisões
│   ├── technical/
│   │   ├── ACESSIBILIDADE.md  # Decisões de acessibilidade (WCAG, ARIA, teclado)
│   │   ├── ASSETS_FIGMA.md    # Regras de uso de assets do Figma MCP
│   │   ├── COMPONENTES_REACT.md # Convenções de componentes React
│   │   ├── ICONES.md          # Uso de ícones via ReactNode e currentColor
│   │   └── TOKENS.md          # Tokens CSS e variáveis de design
│   └── ux-design/
│       ├── ESPACAMENTO_LAYOUT.md # Grid de 4px, border-radius, espaçamento
│       ├── FLUXO_PRD_FIGMA.md    # Workflow PRD → Figma passo a passo
│       ├── PRINCIPIOS.md         # Princípios de design Olist
│       ├── TIPOGRAFIA.md         # Escala tipográfica e tokens
│       └── UX_WRITING.md         # Tom de voz, 4 pilares, diretrizes B2B/B2C
└── references/
    ├── CHECKLIST_REVISAO.md            # 10 categorias de revisão visual, acessibilidade e UX Writing
    ├── COMPONENTES.md                  # Props e variantes de cada componente (auto-gerado)
    ├── CORES.md                        # Sistema de cores com regras de uso
    ├── ESPACAMENTO.md                  # Grid de 4px, border-radius, escala de espaçamento
    ├── FIGMA_CONFIG.md                 # libraryKeys, workflow de busca e import
    ├── GLOSSARIO_PAPEIS_TEXTO.md       # 10 papéis de texto (Heading, Label, Error, etc.)
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

> **Raiz:** 6 arquivo(s) · **Decisions:** 7 arquivo(s) · **Referências:** 15 arquivo(s) · **Total:** 28 arquivo(s)

## Libraries do Figma (ordem de prioridade)

| # | Library | Conteúdo |
|---|---|---|
| 1 (master) | **AI Components** | Menu ERP atualizado, Button, ícones rebrand 24 |
| 2 | **ERP components** | Componentes principais do ERP Tiny |
| 3 | **ERP recursos** | Recursos e padrões complementares |
| 4 | **ERP style guide** | Tipografia, tokens, paleta |
| 5 (fallback) | **[design system] components web** | Componentes web base |

**libraryKeys completas:** ver `figma-config.json`.

## Instalação

### Opção 1: Script automático
```bash
unzip olist-ds-kit.zip && cd olist-ds-kit && bash setup.sh
```

### Opção 2: Claude Code
```bash
mkdir -p .claude/skills
cp -r olist-ds-specialist/ .claude/skills/olist-ds-specialist/
```

### Opção 3: Claude.ai
Settings → Customize → Skills → Upload pasta.

## Uso

### Criar tela no Figma (workflow principal)
```
Use $olist-ds-specialist para criar UI no Figma:
[SDD aqui]
```
Claude executa o gate do harness → busca componentes nas libraries autorizadas → importa instâncias reais → constrói via `use_figma` → retorna screenshot + link.

### Criar tela React
```
Use $olist-ds-specialist para criar a tela deste SDD:
[SDD aqui]
```

### Revisar UI existente
```
Use $olist-ds-specialist para revisar esta tela:
[código ou screenshot]
```

### Sincronizar inventário de componentes
```
Sincronize o registry de componentes
```

## Changelog

### v3.6 (2026-06-23)
- Arquivos da skill modificados: SKILL.md, CHANGELOG.md, README.md, SETUP.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md
- Outros arquivos: claude/skills/olist-ds-specialist-v3.5/CHANGELOG.md

### v3.5 (2026-06-23)
- Arquivos da skill modificados: CHANGELOG.md, README.md, SETUP.md, SKILL.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md

### v3.4 (2026-06-23)
- Arquivos da skill modificados:

### v3.3 (2026-06-23)
- Arquivos da skill modificados: README.md
- Decisões de design atualizadas: decisions/CHANGELOG.md
- Outros arquivos: claude/decisions/INDEX.md

### v3.2 (2026-06-15)
- **UX Writing:** `UX_WRITING.md` adicionado como referência de copy e tom de voz (fonte: skill CX Writing v2.0)
- Novo ramo no Fluxo de Decisão para "Criar ou revisar textos de UI"
- Seção 10 adicionada ao `CHECKLIST_REVISAO.md` com 18 itens de revisão de UX Writing
- Regra crítica 5 no `SKILL.md`: consultar `UX_WRITING.md` ao criar qualquer texto na UI
- `VISAO_GERAL.md` atualizado: 15 referências, nova entrada `UX_WRITING.md`, novo bloco de leitura para copy/UX Writing
- Protocolo de triagem obrigatório: componente → contexto → objetivo antes de qualquer copy
- 4 Pilares de Conteúdo como critério de validação (Conciso, Claro, Significativo, Dialógico)
- 12 tipos de texto mapeados com regras DO/DON'T, limites de caracteres e tokens visuais
- Diretrizes B2B (lojista) vs. B2C (consumidor) com linguagem e tom distintos
- Iniciativa de abrasileiramento documentada (sem hífen, termos técnicos contextualizados, sem termos internos externamente)
- Nomenclatura de produtos Olist (primeira menção + menções posteriores)
- Mapeamento SDD → tipo de texto para tradução de requisitos em copy
- `SKILL.md` atualizado para v3.2

### v3.1 (2026-06-05)
- **Harness:** `HARNESS_TELAS.md` adicionado como gate pré-construção obrigatório no Figma
- Gate com 6 itens binários executados antes de qualquer frame
- Restrições de zona, componente, primitivo, nomenclatura e estados por padrão de página
- 14 arquivos de referência ativos

### v3.0 (2026-06-03)
- **Canal de entrega:** `use_figma` direto com instâncias DS reais (plugin intermediário descontinuado)
- **Libraries:** `figma-config.json` migrado de `fileKey` para `libraryKey`; AI Components como master
- **Busca:** `search_design_system` sempre com `includeLibraryKeys: searchPriority`
- **Regras Figma Plugin API:** documentadas em SKILL.md (layoutSizing, counterAxisAlignItems, etc.)
- Removido: `screen-spec-schema.json`, plugin Screen Builder, modo JSON econômico
- 13 arquivos de referência ativos

### v2.2 (2026-06-03)
- Modo JSON para plugin Figma (econômico)
- component-registry.json, screen-spec-schema.json
- TEMPLATES_PRODUTO.md (zonas de layout por produto)

### v2.1 (2026-05-19)
- FIGMA_CONFIG.md, SETUP.md

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md, SDD_AVANCADO.md
- Workflow faseado no Figma

### v1.0 (2026-01-12)
- Release inicial
