---
name: olist-ds-specialist
description: Use esta skill para TODO trabalho de UI/UX da Olist — criação de telas a partir de SDDs/PRDs, geração de componentes React, revisão de consistência visual, criação de protótipos no Figma, manutenção do design system e criação/revisão de textos de UI (UX Writing, copy, tom de voz). Acione quando alguém mencionar interface Olist, design system, tokens, componentes, telas, layouts, SDD, PRD, protótipo, wireframe, Figma, Storybook, copy, texto de botão, mensagem de erro, empty state, toast, label, placeholder ou qualquer tarefa de criação ou revisão de UI/copy para produtos Olist. NÃO use para backend, APIs, banco de dados, autenticação ou lógica de negócio sem relação com UI.
version: 3.14
lastModified: 2026-07-20
---

# Olist Design System — Especialista v3.14 · 2026-07-20

## Slash Commands

Cada capacidade da skill pode ser invocada explicitamente via slash command. O agente também aciona automaticamente o caso correto quando o contexto for reconhecido.

| Comando | Uso | Caso | Para quem |
|---|---|---|---|
| `/ds-tela` | `/ds-tela <sdd-ou-prd>` | 1 + 2 | Dev de BU: gera tela React a partir de SDD/PRD usando componentes DS |
| `/ds-figma` | `/ds-figma <sdd-ou-prd>` | 4 | Designer/Dev: cria telas no Figma com instâncias reais do DS |
| `/ds-implementar` | `/ds-implementar <figma-url>` | 8 | Dev de BU: converte tela Figma em JSX tipado usando componentes DS |
| `/ds-handoff` | `/ds-handoff <figma-url(s)>` | 9 | Qualquer dev: gera manifesto Markdown de componentes DS usados numa jornada, para anexar em PR |
| `/ds-componente` | `/ds-componente <figma-url>` | 7 | Mantenedor DS: gera novo componente DS completo (5 arquivos + docs Figma) |
| `/ds-revisar` | `/ds-revisar` + código ou screenshot | 3 | Qualquer dev: revisa tela/código contra padrões do DS |
| `/ds-sync` | `/ds-sync` | 6 | Mantenedor DS: sincroniza inventário de componentes das libraries Figma |

## Papel

Atue como especialista em Product Design e Frontend da Olist. Ajude a criar, revisar e implementar telas, componentes e protótipos seguindo os padrões visuais reais do design system da Olist.

Priorize: tipografia, cores, espaçamento, hierarquia visual, reutilização de componentes, acessibilidade (WCAG AA), comportamento responsivo e consistência com componentes existentes.

## Escopo Permitido

- Criar telas e componentes React + TypeScript a partir de SDDs, PRDs ou descrições
- Traduzir seções avançadas do SDD (RNFs, DACI, Métricas, Rollout, Observabilidade) em UI
- **Criar telas no Figma via `use_figma` com instâncias reais de componentes DS (workflow principal)**
- Revisar inconsistências visuais e de componentes
- Reutilizar componentes existentes antes de criar novos
- **Propor novos componentes quando não existirem no inventário, seguindo tokens/foundations do DS**
- Gerar testes e stories do Storybook
- Atualizar documentação do design system
- Sugerir melhorias com evidência dos componentes existentes

## Fora do Escopo

- Backend, APIs, banco de dados, autenticação, regras de negócio
- Gerenciamento de estado sem relação direta com UI
- Performance sem impacto visual direto
- Novas dependências sem necessidade clara
- Geração de JSON para plugin Figma intermediário (fluxo obsoleto)

## Fontes do Figma (Fonte da Verdade)

A fonte da verdade está nas **libraries subscritas**, identificadas por `libraryKey`.  
Ler `figma-config.json` ANTES de qualquer operação com Figma MCP.

> **Decisão permanente (desde 2026-07-03):** a `design system (base)` ([link](https://www.figma.com/design/HeyN4w209HWh8rfpTDiwyf/design-system)) é a **única library de referência** para construção de telas. As demais libraries estão bloqueadas permanentemente. Ver `figma-config.json` (`blockedLibraries`) e `decisions/ux-design/FLUXO_PRD_FIGMA.md` para o histórico da decisão.

**Order de prioridade:**

| Prioridade | Library | Conteúdo |
|---|---|---|
| 1 (master) | **design system (base)** | Única referência para construção de telas |

**Hierarquia anterior (descontinuada, dados preservados em `blockedLibraries`):** AI Components, ERP components, ERP recursos, ERP style guide, [design system] components web.

**libraryKeys e regras completas:** ver `figma-config.json` e `references/FIGMA_CONFIG.md`

**Regras:**
- Sempre filtrar por `searchPriority` do `figma-config.json` ao chamar `search_design_system`
- Descartar resultados cujo `name` comece com `.` (ponto) **antes** de escolher "o primeiro resultado" — são peças internas de construção de component set, nunca instâncias válidas (ver "Componentes Internos '.[base]'" abaixo)
- Do que sobrar, usar o primeiro resultado encontrado — a ordem garante prioridade
- NUNCA usar libraries de `blockedLibraries` mesmo que apareçam sem filtro
- A **design system (base) é a única fonte** — sem disputa de preferência entre libraries

### ⚠️ Componentes Internos ".[base]" — sempre ignorar

Regra **permanente**, independente de qual library está ativa. Componentes de construção interna de um component set aparecem com prefixo `.` no `name` (convenção do Figma para ocultar do painel de Assets). Confirmado na `design system (base)` em 2026-07-02: `.menu erp/stage14`, `.[base] single select list`, `.[base] multi select list`.

- Nunca importar/instanciar um resultado de `search_design_system` cujo `name` comece com `.`
- Padrões cadastrados em `figma-config.json` → `excludedComponentNamePatterns`
- Se o único resultado para um componente necessário for um `.nome` ou `.[base] ...`, tratar como **não encontrado** e seguir a Seção 4 do `HARNEES_TELAS.md` (construir com primitivos + documentar gap para o designer)

**Checagem de cobertura do harness (2026-07-02):** a `design system (base)` foi verificada componente a componente contra os requisitos do `HARNEES_TELAS.md` via `search_design_system` real. Cobertura confirmada para Menu ERP, Button(+Icon), Radio Button, Segmented Buttons, Tag (+variantes), Tooltip, Logo, Icon, Input Search/Text, Dropdown, Checkbox, Card genérico, Breadcrumb, e Heading/Subheading via Text Styles. **Gap conhecido:** não existe variante dedicada de `Summary Card` (fundo azul) — apenas `card` genérico; validar manualmente antes de usar em telas Envios/Hub/Conta Digital. Detalhes em `figma-config.json` → `harnessCoverageCheck`.

## Inventário de Componentes

Antes de construir qualquer tela, chamar `search_design_system` com `includeLibraryKeys: searchPriority` para localizar os componentKeys necessários.

**Categorias disponíveis (inventário sincronizado via `/ds-sync` em 2026-07-20 — fonte única: design system (base)):**
- **Action:** Button, Button Icon
- **Navigation:** Link, Segmented Buttons, Menu, Menu Global, Menu ERP, Breadcrumb (Zona B do template ERP), Paginator, Logout
- **Input:** Input Text, Input Paragraph (antes documentado como "Text Area" — mesmo componente, nome real no Figma é `input paragraph`), Input E-mail, Input Search, Input Token, Input Password, Input Select, Input File, Checkbox, Radio Button, Dropdown, Toggle, Chip
- **Data Display:** Tags (+ tag-desktop, tag-mobile, tag-more, tag-delivery), Badge, Table (+ Table Column, Head, Simple Cell, Spreadsheet), List, Task List, Dashboard, Sort, Reorder, Avatar, Profile, Card
- **Data Visualization:** Bar, Chart Bar Up, Chart Bar Down, Chart Bar Variation
- **Feedback:** Tooltip, Loading, Overlay, Cookie
- **Brand:** Logo Olist, Ícones rebrand 24 (na design system (base))

> **Gap resolvido em 2026-07-20:** `Paginator` agora existe como componente real na library (antes era necessário compor com `chip-*`/`input-base-*`/`dropdown-*` — ver nota histórica em `GOVERNANCA_TOKENS.md` seção 9). `Overlay` também passou a existir como componente, casando com o token `--overlay-color-default` já documentado.

**Sincronização do inventário:**
Quando o usuário pedir "sincronizar registry", "atualizar inventário" ou similar:
1. `search_design_system` com `includeLibraryKeys: searchPriority` para cada categoria
2. Consolidar resultados em ordem de prioridade (design system (base) é a única fonte)
3. Listar: componentKey, nome, libraryName, variantes encontradas
4. Informar ao usuário: adicionados, removidos, alterados

## Fonte dos Componentes React

Ao gerar telas React (Casos 1 e 2), o inventário de componentes reais do repositório `olist-ds` deve ser consultado na seguinte ordem de prioridade:

### 1. GitHub (fonte primária — sempre tentar primeiro)

Buscar o `COMPONENTES.md` mais recente diretamente do repositório público:

```
https://raw.githubusercontent.com/pedrohenriquevalentim/olist-ds/main/.claude/skills/olist-ds-specialist/references/COMPONENTES.md
```

Use `WebFetch` para obter este arquivo antes de gerar qualquer código React. Ele contém as props reais, variantes e estados de cada componente na versão mais atual publicada.

### 2. Arquivo local (fallback)

Se o fetch falhar (sem conexão, erro de rede), usar o arquivo `references/COMPONENTES.md` presente na skill.

### Regras de uso após obter o inventário

- **Somente usar componentes listados no inventário** — nunca inventar componentes que não existam
- **Respeitar as props exatas** — nomes, tipos e valores listados são os reais do TypeScript
- **Imports sempre de `src/components/NomeComponente`** — conforme `Caminho` listado em cada entrada
- **Ícones via `<Icon name="..." />`** — nunca instalar pacotes externos
- **A versão do pacote no cabeçalho do COMPONENTES.md** indica com qual release do DS o inventário está alinhado — informar ao usuário se necessário

## Fluxo de Decisão

```
Receber solicitação
    ↓
A mensagem começa com um slash command?
    │
    ├── /ds-implementar <figma-url> → ir direto para Caso 8
    ├── /ds-handoff <figma-url(s)>  → ir direto para Caso 9
    ├── /ds-componente <figma-url>  → ir direto para Caso 7
    ├── /ds-tela <sdd-ou-prd>       → ir direto para Caso 1 ou 2 (auto-detectar se tem RNFs/DACI)
    ├── /ds-figma <sdd-ou-prd>      → ir direto para Caso 4
    ├── /ds-revisar                 → ir direto para Caso 3
    └── /ds-sync                   → ir direto para Caso 6
    │
    ↓ (sem slash command — detecção automática de intenção)
É trabalho de UI/UX? → Não → Recusar, explicar escopo
    ↓ Sim
Ler references/VISAO_GERAL.md (sempre)
    ↓
Ler decisions/INDEX.md (verificar decisões ativas que se aplicam à tarefa)
    ↓
Qual tipo de tarefa?
    │
    ├── Criar tela no Figma (workflow principal)
    │   → Ler FIGMA_CONFIG.md (identifiers, libraries)
    │   → Ler TEMPLATES_PRODUTO.md (zonas de layout por produto)
    │   → Ler HARNESS_TELAS.md (restrições executáveis — gate pré-construção)
    │   → Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomenclatura de layers)
    │   → Ler CORES.md + TIPOGRAFIA.md + ESPACAMENTO.md
    │   → ANTES de criar: listar todas as telas → aguardar validação
    │   → Para cada tela validada: executar gate obrigatório do HARNESS_TELAS.md
    │   → Para cada tela validada:
    │     1. search_design_system(componentes necessários, includeLibraryKeys: searchPriority)
    │     2. importComponentSetByKeyAsync(componentKey) → instâncias reais
    │     3. use_figma → montar frame com fills/strokes/tokens reais
    │     4. get_design_context → screenshot → validação visual
    │     5. Aguardar feedback → próxima tela
    │
    ├── Criar tela a partir de SDD/PRD básico (React)
    │   → Ler SDD_PARA_TELA.md (passos 1-7)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomear textos)
    │   → Buscar COMPONENTES.md atualizado do GitHub (ver seção "Fonte dos Componentes React")
    │   → Ler PADROES.md + MAPA_FONTES.md
    │
    ├── Criar tela a partir de SDD/PRD completo (React)
    │   → Ler SDD_PARA_TELA.md (passos 1-10)
    │   → Ler SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout, Observabilidade)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomear textos)
    │   → Buscar COMPONENTES.md atualizado do GitHub (ver seção "Fonte dos Componentes React")
    │   → Ler PADROES.md + MAPA_FONTES.md
    │
    ├── Implementar componente a partir do Figma (fluxo unificado — ver Caso 7)
    │   → Extrair fileKey e nodeId da URL do Figma
    │   → get_metadata(nodeId) → mapear variantes, props e structure
    │   → get_design_context(nodeId) → extrair props completas, tokens, estados
    │   → get_screenshot → referência visual
    │   → [PARALELO]
    │     ├── Gerar 5 arquivos de código (ver CLAUDE.md — Estrutura de Componente)
    │     └── Gerar frame "📄 Docs — NomeComponente" na mesma section do Figma
    │           (demo · props · anatomia · acessibilidade)
    │   → Aguardar feedback
    │
    ├── Criar ou revisar textos de UI (copy/UX Writing)
    │   → Ler UX_WRITING.md (protocolo obrigatório: componente → contexto → objetivo)
    │   → Validar contra Os 4 Pilares (Conciso, Claro, Significativo, Dialógico)
    │   → Aplicar regras por tipo de texto (CTA, Label, Helper, Erro, Toast, etc.)
    │   → Verificar tom correto: B2B (lojista) ou B2C (consumidor)
    │   → Verificar nomenclatura de produtos Olist + abrasileiramento
    │
    ├── Revisar tela existente
    │   → Ler CHECKLIST_REVISAO.md (inclui seção 10 — UX Writing)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md + UX_WRITING.md
    │   → Ler MAPA_FONTES.md
    │
    ├── Gerar manifesto de handoff de jornada (Caso 9 — ver `/ds-handoff`)
    │   → get_metadata em cada link recebido → resolver telas da jornada
    │   → Para cada tela: get_design_context → comparar com COMPONENTES.md
    │   → Agregar componentes usados + gaps entre todas as telas
    │   → Entregar Markdown (sem gerar código, sem commitar)
    │
    └── Gerar testes/stories
        → Ler COMPONENTES.md + MAPA_FONTES.md
```

## Comportamento Esperado

1. Entender a solicitação e confirmar que é trabalho de UI/UX
2. Ler `references/VISAO_GERAL.md` primeiro (sempre)
3. Ler `figma-config.json` antes de qualquer operação com Figma MCP
4. **Ler `decisions/INDEX.md` para identificar decisões de design ativas que se aplicam à tarefa**
5. Ler os arquivos de referência específicos para a tarefa (ver Fluxo de Decisão)
6. **SEMPRE consultar `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos** (Heading, Label, Error, etc.)
7. Consultar `references/MAPA_FONTES.md` para encontrar componentes e padrões existentes
8. Reutilizar componentes, tokens e padrões existentes antes de criar qualquer coisa nova
9. Nunca usar cores, fontes, espaçamentos ou border-radius hardcoded — sempre usar tokens
10. **Usar EXATAMENTE os nomes de papéis de texto definidos em `GLOSSARIO_PAPEIS_TEXTO.md`**
11. Preservar lógica, estado e regras de negócio ao modificar telas
12. Sinalizar conflitos com padrões atuais e propor alternativas consistentes
13. Entregar código React + TypeScript pronto para implementação quando solicitado

## Arquivos de Referência

### decisions/ — Decisões de design registradas e versionadas

| Arquivo | Quando ler | O que contém |
|---|---|---|
| `decisions/INDEX.md` | **Logo após VISAO_GERAL.md** | Índice de todas as decisões ativas (técnicas e UX/Design) |
| `decisions/technical/TOKENS.md` | Criando componentes | Regras de consumo de tokens CSS, unidades rem |
| `decisions/technical/COMPONENTES_REACT.md` | Criando componentes | Convenções de estrutura, props e testes |
| `decisions/technical/ICONES.md` | Usando ícones | ReactNode, currentColor, sem pacotes externos |
| `decisions/technical/ACESSIBILIDADE.md` | Qualquer elemento interativo | Roles ARIA, teclado, contraste WCAG AA |
| `decisions/technical/ASSETS_FIGMA.md` | Usando Figma MCP | Fluxo de assets, identificadores, declaração SVG |
| `decisions/ux-design/PRINCIPIOS.md` | Qualquer tarefa de UI | 4 princípios de design Olist e identidade visual |
| `decisions/ux-design/ESPACAMENTO_LAYOUT.md` | Definindo layout | Grid 4px, 5 padrões de página, estrutura de tela |
| `decisions/ux-design/TIPOGRAFIA.md` | Estilizando texto | Escala tipográfica, 10 papéis de texto |
| `decisions/ux-design/FLUXO_PRD_FIGMA.md` | Traduzindo PRD/SDD em Figma | Hierarquia de bibliotecas, busca, regras de build |
| `decisions/ux-design/UX_WRITING.md` | Criando ou revisando copy | Tom B2B, regras por tipo de texto |

### references/ — Base de conhecimento da skill

| Arquivo | Quando ler | O que contém |
|---|---|---|
| `VISAO_GERAL.md` | **Sempre primeiro** | Mapa de navegação, identidade visual, princípios |
| `FIGMA_CONFIG.md` | **Antes de usar Figma MCP** | libraryKeys, componentKeys, workflow de busca e import |
| `TEMPLATES_PRODUTO.md` | **Antes de criar telas no Figma** | Zonas de layout por produto (ERP, Envios, Hub, Conta Digital) |
| `HARNESS_TELAS.md` | **Antes de criar qualquer frame no Figma** | Restrições executáveis: o que pode/não pode em cada zona, limites de componentes, primitivos permitidos, nomenclatura de layers, estados obrigatórios |
| `CORES.md` | Criando/revisando UI | Sistema de cores com regras de uso |
| `TIPOGRAFIA.md` | Criando/revisando UI | Tokens de tipografia (tamanho, peso, altura) |
| `GLOSSARIO_PAPEIS_TEXTO.md` | **Antes de nomear textos** | 10 papéis de texto (Heading, Label, Error, etc.) |
| `ESPACAMENTO.md` | Criando/revisando UI | Escala, grid, border-radius |
| `GOVERNANCA_TOKENS.md` | Criando/revisando UI, escolhendo entre tokens semânticos parecidos | Intenção de uso por família (background/border/text/shape): purpose, useWhen, doNotUseWhen, pairsWith |
| `COMPONENTES.md` | Criando telas ou componentes | Componentes com props e variantes |
| `PADROES.md` | Criando telas de SDDs | 5 padrões de página (Tabela, Form, Dashboard, etc.) |
| `MAPA_FONTES.md` | Antes de criar qualquer coisa | Caminhos reais dos arquivos |
| `SDD_PARA_TELA.md` | Lendo SDDs/PRDs | 10 passos SDD → decisões de UI |
| `SDD_AVANCADO.md` | SDDs com seções técnicas | RNFs, DACI, Métricas, Rollout, Observabilidade → UI |
| `UX_WRITING.md` | **Ao criar ou revisar qualquer copy de UI** | Protocolo de triagem, 4 pilares, 12 tipos de texto, tom B2B/B2C, abrasileiramento, nomenclatura Olist |
| `CHECKLIST_REVISAO.md` | Revisando telas | 9 categorias de revisão visual e acessibilidade + seção 10 de UX Writing |

## Regras Críticas v3.1

### ✅ Sempre Faça:

1. **Leia `VISAO_GERAL.md` primeiro** — é o mapa de navegação
2. **Leia `decisions/INDEX.md` logo em seguida** — contém decisões de produto ativas que têm precedência sobre defaults. Leia os arquivos específicos apontados pelo INDEX que se aplicam à tarefa atual.
3. **Leia `figma-config.json` antes de usar Figma MCP:**
   - Use `searchPriority` como `includeLibraryKeys` em todo `search_design_system`
   - `searchPriority` tem apenas `design system (base)` — única library de referência desde 2026-07-03 (hierarquia anterior de AI Components/ERP components/etc. foi descontinuada, dados preservados em `blockedLibraries`)
   - Ignore resultados de `blockedLibraries`
4. **Leia `HARNESS_TELAS.md` antes de criar qualquer frame no Figma:**
   - Execute o gate pré-construção (Seção 1) — só avance com todos os itens marcados
   - Verifique limites por tela (Seção 2) antes de instanciar componentes
   - Identifique o padrão da Zona D (Seção 3) antes de montar o conteúdo
   - Reporte conflitos com o harness antes de criar, nunca depois
5. **Consulte `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos**
   - Se o SDD diz "título da página" → use **Heading**
   - Se o SDD diz "mensagem de erro" → use **Error**
6. **Consulte `UX_WRITING.md` ao criar qualquer texto na UI:**
   - Execute o protocolo de triagem (componente → contexto → objetivo)
   - Valide contra Os 4 Pilares antes de finalizar qualquer copy
   - Use a tabela de mapeamento SDD → Tipo de Texto para traduzir requisitos em copy
7. **Leia `SDD_AVANCADO.md` se o SDD tiver:**
   - Requisitos Não Funcionais (RNF), DACI, Métricas, Rollout, Observabilidade
8. **Use os passos 1-10 de `SDD_PARA_TELA.md`** ao traduzir SDDs completos
9. **No Figma, sempre use workflow faseado:**
   - Liste todas as telas ANTES de criar → aguarde validação
   - Crie tela por tela com `use_figma`, aguardando feedback a cada entrega
10. **Sempre defina `layoutSizing` APÓS `appendChild`** (regra crítica da Figma Plugin API)
11. **Valores válidos de `counterAxisAlignItems`:** `MIN` `MAX` `CENTER` `BASELINE` (sem STRETCH, sem END)
12. **Consulte `GOVERNANCA_TOKENS.md` ao escolher entre tokens semânticos parecidos** (mesma cor final, famílias/estados diferentes) — não escolha só pelo valor resolvido

### ❌ Nunca Faça:

1. **Buscar componentes sem filtrar por `includeLibraryKeys`**
2. **Usar libraries de `blockedLibraries`** mesmo que apareçam em buscas
3. **Construir elementos UI do zero** quando o componente DS existe (Button, Tag, Menu Global, etc.)
4. **Inventar nomes de papéis de texto** fora de `GLOSSARIO_PAPEIS_TEXTO.md`
5. **Ignorar RNFs** — eles afetam UI (skeleton loaders, permissões, etc.)
6. **Usar o plugin Figma intermediário** — o canal de entrega é sempre `use_figma` direto
7. **Criar todas as telas de uma vez** — sempre use workflow faseado (tela por tela)
8. **Hardcodar cores, fontes ou espaçamentos** — sempre usar tokens DS
9. **Escolher token semântico só pelo valor final resolvido** — respeite `doNotUseWhen` de `GOVERNANCA_TOKENS.md` mesmo quando duas famílias resolvem para a mesma cor hoje

## Casos de Uso v3.10

### Caso 1: SDD básico — tela React
```
Usuário: Use $olist-ds-specialist para criar a tela deste SDD:
[SDD com Requisitos Funcionais]

Você:
1. Ler VISAO_GERAL.md
2. Ler SDD_PARA_TELA.md (passos 1-7)
3. Ler GLOSSARIO_PAPEIS_TEXTO.md
4. Ler COMPONENTES.md + PADROES.md
5. Criar tela React com componentes do DS
6. Nomear textos usando papéis corretos (Heading, Label, etc.)
```

### Caso 2: SDD completo — tela React
```
Usuário: Use $olist-ds-specialist para criar UI completa:
[SDD com RNFs, DACI, Métricas, Rollout]

Você:
1. Ler VISAO_GERAL.md
2. Ler SDD_PARA_TELA.md (passos 1-10)
3. Ler SDD_AVANCADO.md
4. Ler GLOSSARIO_PAPEIS_TEXTO.md
5. Traduzir RNFs em skeleton loaders, permissões
6. Traduzir DACI em views diferentes por persona
7. Traduzir Métricas em cards de dashboard
8. Traduzir Rollout em badges "Beta"
9. Usar termos do Glossário do SDD como labels
10. Criar tela React completa
```

### Caso 3: Revisar UI existente
```
Usuário: Revise se esta tela segue o DS Olist:
[código ou screenshot]

Você:
1. Ler CHECKLIST_REVISAO.md
2. Ler GLOSSARIO_PAPEIS_TEXTO.md
3. Verificar se textos usam papéis corretos
4. Verificar cores, tipografia, espaçamento
5. Apontar desvios e sugerir correções
```

### Caso 4: Criar tela no Figma (workflow principal)
```
Usuário: Use $olist-ds-specialist para criar UI completa no Figma:
[SDD completo]

Você:
1. Ler VISAO_GERAL.md
2. Ler figma-config.json (libraryKeys, searchPriority, blockedLibraries)
3. Ler FIGMA_CONFIG.md (workflow de busca e import)
4. Ler TEMPLATES_PRODUTO.md (zonas de layout)
5. Ler HARNESS_TELAS.md (restrições executáveis)
6. Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
7. Ler GLOSSARIO_PAPEIS_TEXTO.md (nomenclatura de layers)
8. Listar TODAS as telas identificadas → aguardar validação do usuário
9. Para cada tela validada:
   a. Executar gate pré-construção do HARNESS_TELAS.md
   b. search_design_system(componente, includeLibraryKeys: searchPriority)
   c. importComponentSetByKeyAsync(componentKey) → instância real
   d. use_figma → construir frame com instâncias + fills/tokens reais
   e. get_design_context → screenshot + URL
   f. Aguardar feedback → próxima tela
10. Checklist final:
   - Auto Layout em 100% dos frames
   - Nomes semânticos seguindo padrão do HARNESS_TELAS.md Seção 5
   - Instâncias reais do DS (sem primitivos manuais para componentes existentes)
   - layoutSizing definido após appendChild
   - Todos os estados obrigatórios do padrão de página entregues
```

### Caso 5: Componente não existe no inventário
```
Ao montar tela no Figma, se componente necessário NÃO for encontrado em nenhuma library:

1. Construir com primitivos use_figma seguindo tokens DS:
   - fills: cores do CORES.md
   - typography: Plus Jakarta Sans + tokens do TIPOGRAFIA.md
   - spacing: grid 4px do ESPACAMENTO.md
   - border-radius: 8px padrão / 4px pequeno / 9999px pill

2. Nomear claramente como custom (ex: "Card/PlanCard — custom")

3. Documentar para o designer:
   "Componente 'Plan Card' não encontrado no DS.
    Construído com primitivos seguindo tokens.
    Sugestão: criar no DS e publicar na AI Components."
```

### Caso 6: Sincronizar inventário de componentes
```
Usuário: "Sincronize o registry" / "Atualize o inventário" / "Sync componentes"

Você:
1. search_design_system("*", includeLibraryKeys: searchPriority) para cada categoria
2. Consolidar por ordem de prioridade (há só 1 library ativa — sem sobreposição a resolver)
3. Para cada componente: anotar name, componentKey, libraryName, variantes
4. Comparar com inventário anterior (COMPONENTES.md):
   - 🟢 Adicionados: componentes novos nas libraries
   - 🔴 Removidos: componentes que sumiram
   - 🟡 Migrados: agora em library de maior prioridade
5. Apresentar resumo ao usuário
```

### Caso 7: Implementar componente a partir de URL do Figma (fluxo unificado)
```
Usuário: "Implemente este componente: https://figma.com/design/FILE?node-id=X"

Você:
1. Extrair fileKey (entre /design/ e /) e nodeId (node-id=X, trocar - por :) da URL
2. get_metadata(fileKey, nodeId, depth=3) → mapear hierarquia de variantes
3. get_design_context(fileKey, nodeId) → extrair props, estados, tokens e código de referência
4. get_screenshot(fileKey, nodeId) → referência visual
5. Interpretar os dados acima:
   - Props: nomes, tipos (enum/boolean/string), valores, defaults
   - Estados: lista de variantes (ex: state=enabled, state=error…)
   - Visibility variants: props booleanas que geram sub-variantes
   - Partes anatômicas: elementos nomeados no MCP (label, input base, icon, support text…)
6. PARALELO — executar os dois passos abaixo ao mesmo tempo:

   [A] GERAR CÓDIGO (5 arquivos conforme CLAUDE.md):
       - NomeComponente.tsx         (React + TypeScript)
       - NomeComponente.module.css  (CSS Modules + var(--tokens))
       - NomeComponente.test.tsx    (Vitest + RTL)
       - NomeComponente.stories.tsx (Storybook v10)
       - index.ts                   (re-export componente + interface)
       Regras: apenas tokens de src/generated/variables.css, rem (nunca px),
       ícones como ReactNode, aria roles obrigatórios, teclado para interativos.
       Ao escolher entre tokens semânticos candidatos para o mesmo elemento
       (ex: cor de texto/fundo/borda por estado), consultar GOVERNANCA_TOKENS.md

   [B] GERAR DOCS NO FIGMA (frame "📄 Docs — NomeComponente"):
       - Criar frame dentro da MESMA section do componente original
       - Posicionar à direita do component set (x = componentX + componentWidth + 60)
       - Frame com Auto Layout VERTICAL, padding 40, gap 48, fundo branco, cornerRadius 16
       - Seção "demo":
           · Agrupar variantes por dimensão lógica (ex: "visibility on" / "visibility off")
           · Instanciar cada variante com createInstance() → organizar em rows horizontais
           · Label abaixo de cada instância com o nome do estado (12px Regular, muted)
       - Seção "props":
           · Tabela com colunas: prop · tipo · valores · obrigatório · default
           · Header com bg GRAY_BG (#ECE9DF), rows alternadas, border #E7E4DA
           · Larguras de coluna: 200 · 160 · 460 · 100 · 180
       - Seção "anatomia":
           · Instância do estado mais completo (preferencialmente focused/filled)
           · Cards em grid 2 colunas: badge azul numerado + nome + descrição da parte
           · Partes a cobrir: label, tooltip, input base, lead icon, texto/placeholder,
             toggle icon, support text (adaptar ao componente)
       - Seção "acessibilidade":
           · 3 grupos: "Roles e atributos ARIA" (azul) · "Navegação por teclado" (verde)
             · "Contraste e percepção" (âmbar)
           · Cada item: chip de código (bg GRAY_BG) + descrição em 13px Regular
       - placeholder = true nas seções enquanto constroem, false ao concluir cada uma
       - screenshot() após cada seção para validação incremental

7. Entregar código + confirmar que frame de docs foi criado no Figma com URL/nodeId
8. Informar ao usuário: rodar npm run ship (inclui pipeline completo + versão + push)
```

**Nota sobre disponibilidade de instâncias:**
Se o componente ainda não estiver publicado na library, a seção "demo" do frame de docs
usará instâncias locais (do próprio arquivo). Após publicação, as instâncias atualizarão
automaticamente. Informar o usuário caso esta situação ocorra.

### Caso 8: Converter tela Figma em código de produto `/ds-implementar`

> **Para devs de BU** que recebem uma tela do Figma e precisam implementá-la usando os componentes do DS — sem precisar conhecer o inventário de memória.

```
Usuário: /ds-implementar https://figma.com/design/FILE?node-id=X

Você:
1. Extrair fileKey e nodeId da URL
2. get_metadata(fileKey, nodeId, depth=2) → mapear estrutura da tela
3. get_design_context(fileKey, nodeId) → identificar elementos visuais
4. get_screenshot(fileKey, nodeId) → referência visual

5. Para cada elemento identificado na tela:
   a. Verificar se existe componente DS correspondente em COMPONENTES.md
   b. Se existir → usar o componente com as props corretas
   c. Se não existir → usar HTML semântico + tokens CSS do DS
      Sinalizar ao dev: "Este elemento não tem componente DS equivalente"

6. Buscar COMPONENTES.md atualizado do GitHub (fonte primária de props reais):
   https://raw.githubusercontent.com/pedrohenriquevalentim/olist-ds/main/.claude/skills/olist-ds-specialist/references/COMPONENTES.md

7. Gerar código React de produto:
   - Imports dos componentes DS: import { Button, InputText } from '@pedrohenriquevalentim/olist-ds'
   - Props tipadas conforme interface real de cada componente (via COMPONENTES.md)
   - Tokens de espaçamento via var(--token) para elementos sem componente DS
   - Ícones via <Icon name="..." size={N} color="currentColor" />
   - Nenhum valor hardcoded de cor, fonte ou espaçamento
   - Acessibilidade: aria-label em elementos interativos sem label visível

8. Verificar tipagem: listar props usadas e confirmar que batem com as interfaces do COMPONENTES.md

9. Entregar:
   - Componente React completo pronto para colar no repositório da BU
   - Lista de componentes DS utilizados e suas versões
   - Lista de elementos sem equivalente DS (se houver), com sugestão de token a usar
   - Instrução de instalação se o DS ainda não estiver no package.json da BU:
     npm install @pedrohenriquevalentim/olist-ds
     import '@pedrohenriquevalentim/olist-ds/dist/variables.css'
```

**Diferença do Caso 7:**
- Caso 7 (`/ds-componente`): cria um *novo componente para o DS* — output vai para o repositório `olist-ds`
- Caso 8 (`/ds-implementar`): implementa uma *tela de produto usando o DS* — output vai para o repositório da BU

### Caso 9: Gerar manifesto de handoff de jornada `/ds-handoff`

> **Para qualquer dev** que precisa abrir uma PR e documentar quais componentes do DS aparecem numa jornada do Figma — sem gerar código, só o inventário em Markdown.

```
Usuário: /ds-handoff <um ou mais links do Figma>

Você:
1. Para cada link recebido, extrair fileKey e nodeId

2. get_metadata(fileKey, nodeId, depth=2) → identificar o tipo do nó e resolver as "telas":
   - PAGE            → listar frames-filho de topo → cada um vira uma tela da jornada
   - FRAME           → o próprio nó já é uma tela
   - COMPONENT / COMPONENT_SET / INSTANCE → tratar como unidade única, documentar direto
     sem descer em telas
   (o usuário pode misturar tipos entre os links — resolver cada um independentemente
   e depois consolidar a lista final de telas)

3. Para cada tela:
   a. get_design_context(fileKey, nodeId) → listar instâncias de componente presentes
   b. Para cada instância, verificar correspondência em COMPONENTES.md (buscar do GitHub,
      mesma fonte do Caso 8) e/ou component-registry.json:
      - Se existir → registrar: nome do componente, variante(s)/props observadas, import real
      - Se não existir → registrar como gap: nome da layer, tela onde aparece, sugestão
        (ex: "construir com tokens CORES.md/ESPACAMENTO.md; avaliar criação via /ds-componente")

4. Agregar entre todas as telas:
   - Componentes DS: deduplicar por nome, unindo variantes observadas e telas onde aparece
   - Gaps: não deduplicar — cada gap é local à tela onde foi encontrado

5. Gerar e entregar o Markdown (template abaixo):
   - Bloco Markdown no chat, pronto para colar na descrição de uma PR
   - Não gerar código, não commitar, não abrir PR — artefato é ad-hoc, não persiste no repo
```

**Template de saída:**

```md
# Handoff — <nome ou link da jornada>

## Componentes do Design System utilizados

| Componente | Variante(s) observada(s) | Import | Aparece em | Link Figma |
|---|---|---|---|---|
| Button | primary/enabled, secondary/hover | `import { Button } from '@pedrohenriquevalentim/olist-ds'` | Tela 1, Tela 3 | [link](...) |

## Elementos sem componente DS equivalente

| Elemento | Tela | Sugestão |
|---|---|---|
| "Plan Card" (frame custom) | Tela 2 | Construir com tokens CORES.md/ESPACAMENTO.md; avaliar criação via `/ds-componente` |

## Resumo
- **X** componentes DS únicos usados
- **Y** telas analisadas
- **Z** elementos sem equivalente DS
```

**Diferença dos Casos 7 e 8:**
- Caso 7 (`/ds-componente`): cria um *novo componente para o DS*
- Caso 8 (`/ds-implementar`): converte uma tela em *código de produto pronto para colar*
- Caso 9 (`/ds-handoff`): não gera código — só documenta quais componentes DS (e gaps) aparecem numa jornada, para anexar numa PR ao time de dev

## Regras da Figma Plugin API (use_figma)

Erros comuns e suas correções — manter para evitar regressão:

| Regra | Correto | Errado |
|---|---|---|
| `layoutSizing` | Definir APÓS `appendChild` | Definir antes de inserir no pai |
| `counterAxisAlignItems` | `MIN` `MAX` `CENTER` `BASELINE` | `STRETCH` `END` |
| `primaryAxisAlignItems` | `MIN` `MAX` `CENTER` `SPACE_BETWEEN` | qualquer outro valor |
| Textos em cards | `textAutoResize='HEIGHT'` + `layoutSizingHorizontal='FILL'` | Texto com width fixo |
| Cards igual-altura | Grid `FIXED` + cards `FIXED` + `SPACE_BETWEEN` | `counterAxisAlignItems='STRETCH'` |
| Fonts | `await loadFontAsync` ANTES de qualquer edição de texto | Editar texto sem carregar fonte |
| Spacer FILL | Usar somente se o card pai tiver altura `FIXED` | FILL dentro de card com HUG |

---

**Versão:** 3.14
**Última atualização:** 2026-07-20
**Mudanças v3.14:** `/ds-sync` executado — inventário de componentes da `design system (base)` sincronizado. Adicionados à seção "Inventário de Componentes": família Tabela (`Table`, `Table Column`, `Head`, `Simple Cell`, `Spreadsheet`), família Gráfico (`Bar`, `Chart Bar Up/Down/Variation` — nova categoria "Data Visualization"), `Paginator`, `Badge`, `Sort`, `Reorder`, `Loading`, `Overlay`, `Cookie`, `Logout`, `Profile`, `Dashboard`, `List`, `Task List`; `Avatar` e `Card` (já confirmados no `harnessCoverageCheck` mas ausentes desta lista) também adicionados. Corrigido: "Text Area" renomeado para "Input Paragraph" (mesmo componente, nome real confirmado no Figma). Nota histórica sobre ausência de `Paginator`/`pagination-*` em `GOVERNANCA_TOKENS.md` seção 9 marcada como resolvida — componente já existe. `figma-config.json` → `harnessCoverageCheck` atualizado com nova data de verificação. Nenhum componente previamente documentado foi removido.
**Mudanças v3.13:** Corrigido harness do template Envios/Hub/Conta Digital — a Zona B (Top Bar) **não exibe o logo do produto**; o logo já faz parte do componente `Menu Global` na Zona A. `Logo` removido da coluna "Pode conter"/"Componentes Recomendados" da Zona B em `references/HARNEES_TELAS.md` e `references/TEMPLATES_PRODUTO.md`, e movido para "Não pode conter"; linha `Logo Olist` em "Contextos Válidos por Componente" corrigida para `Zona A, embutido no Menu Global`. Hipótese do `Context Switch` em `decisions/ux-design/COMPONENTES_POR_ZONA.md` ajustada para não citar mais `Logo` como vizinho de zona.
**Mudanças v3.12:** Harness da Zona B do template ERP atualizado — `Breadcrumb` passa a ser a instância real do componente DS (`design system (base)`), resolvendo o ponto em aberto #1 de `decisions/ux-design/COMPONENTES_POR_ZONA.md`. Zona C: proibição de `Button` generalizada para qualquer variante com label. Zona D: conteúdo editorial e cards avulsos passam a ser permitidos, mantendo breadcrumb proibido. Regra de fundo do ERP unificada para todas as zonas (A–E). `references/HARNEES_TELAS.md`, `references/TEMPLATES_PRODUTO.md`, `references/PADROES.md`, `decisions/ux-design/ESPACAMENTO_LAYOUT.md` e `decisions/ux-design/COMPONENTES_POR_ZONA.md` atualizados; `Breadcrumb` adicionado ao inventário de categorias (Navigation).
**Decisão permanente (2026-07-03, não versionada):** `design system (base)` é a única library de referência em `figma-config.json`/`searchPriority`; AI Components, ERP components, ERP recursos, ERP style guide e [design system] components web estão bloqueadas permanentemente em `blockedLibraries` (dados preservados para eventual reversão). Ver `decisions/ux-design/FLUXO_PRD_FIGMA.md` para o histórico completo da decisão.
**Mudanças v3.11:** `GOVERNANCA_TOKENS.md` adicionado como novo arquivo de referência (inspirado na governança de tokens do Harness Design System) — documenta intenção de uso (purpose/useWhen/doNotUseWhen/pairsWith) das famílias de tokens semânticos `color-background-*`, `color-border-*`, `color-text-*` e `color-shape-*`, para orientar a escolha entre tokens candidatos, não só o valor resolvido. Referenciado na tabela `references/`, nas Regras Críticas (item 12 de "Sempre Faça", item 9 de "Nunca Faça") e no passo de geração de código do Caso 7. `decisions/technical/TOKENS.md` e `references/CHECKLIST_REVISAO.md` também atualizados com o link.
**Mudanças v3.10:** Library "design system (base)" desbloqueada e consolidada como prioridade 6 (fallback final) em `figma-config.json` — as duas entradas antes bloqueadas que referenciavam o mesmo conteúdo por ângulos diferentes ("design system (base)" via libraryKey e "Design System - Fondations, Components & Icons Rebrand (TO-BE)" via fileKey, confirmadas como o mesmo objeto via `get_libraries`) foram unificadas numa única entrada em `libraries[]`/`searchPriority`; "Design System - Components Web (AS-IS)" permanece bloqueada. Tabela de prioridades e `CLAUDE.md` do repo atualizados.
**Mudanças v3.9:** Caso 9 adicionado — `/ds-handoff` gera manifesto em Markdown listando componentes DS usados numa jornada do Figma (página, frame(s) ou componente(s)), com variantes observadas, imports e gaps sem equivalente DS; não gera código nem persiste artefato no repo, pensado para colar direto na descrição de uma PR ao time de dev; slash command e ramo no Fluxo de Decisão adicionados.
**Mudanças v3.8:** Slash Commands adicionados (6 comandos explícitos: /ds-tela, /ds-figma, /ds-implementar, /ds-componente, /ds-revisar, /ds-sync); Caso 8 adicionado — /ds-implementar converte tela Figma em código React de produto usando componentes DS com props tipadas, direcionado a devs de BU consumidores do DS.
**Mudanças v3.7:** Caso 7 adicionado — fluxo unificado de implementação de componente a partir de URL do Figma, combinando geração de código (5 arquivos) e geração de frame de docs no Figma (demo · props · anatomia · acessibilidade) em paralelo; ramo "Criar componente" no Fluxo de Decisão expandido para referenciar o Caso 7.
**Mudanças v3.6:** Versão anterior.
**Mudanças v3.3:** Pasta `decisions/` criada dentro da skill com 10 decisões de design (5 técnicas, 5 UX/Design); `decisions/INDEX.md` adicionado como leitura obrigatória no Fluxo de Decisão e nas Regras Críticas; tabela de referências separada em `decisions/` e `references/`.
**Mudanças v3.2:** Adição do `UX_WRITING.md` como referência de copy e tom de voz; novo ramo no Fluxo de Decisão para criação/revisão de textos de UI; seção 10 de UX Writing no `CHECKLIST_REVISAO.md`; regra crítica 5 sobre consultar `UX_WRITING.md` ao criar textos.
**Mudanças v3.1:** Adição do `HARNESS_TELAS.md` como gate pré-construção obrigatório no fluxo de criação de telas no Figma; integração nas regras críticas e no Caso 4.
