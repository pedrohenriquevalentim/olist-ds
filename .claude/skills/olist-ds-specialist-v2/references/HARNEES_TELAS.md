# Harness de Construção de Telas

**Versão:** 1.0  
**Última atualização:** 2026-06-05  
**Leia após:** `TEMPLATES_PRODUTO.md`  
**Leia antes de:** criar qualquer frame via `use_figma`

---

## O que é este arquivo

Um conjunto de **restrições executáveis e binárias** para a construção de telas no Figma.  
Não são sugestões — são contratos verificáveis antes de qualquer ação.

A diferença em relação ao `CHECKLIST_REVISAO.md`:
- O checklist revisa o que foi feito
- O harness **bloqueia** o que não pode ser feito, antes de começar

---

## Gate Obrigatório — Pré-construção

Execute este gate antes de criar qualquer frame. Se qualquer item falhar, **resolva antes de continuar**.

```
[ ] 1. Template identificado (erp | envios | conta-digital | hub)?
[ ] 2. Todas as zonas necessárias mapeadas pelo template?
[ ] 3. Padrão de página da Zona D (Content Area) identificado (Tabela | Form | Dashboard | Detalhe | Empty)?
[ ] 4. Componentes necessários têm componentKey válido nas libraries autorizadas?
[ ] 5. Nenhuma regra de limite por tela será violada (ver Seção 2)?
[ ] 6. Componentes ausentes identificados e marcados como "— custom" (ver Seção 4)?
```

→ Só avançar se TODOS os itens estão marcados.

---

## Seção 1 — Harness de Zona

Define o que pode e **não pode** entrar em cada zona do template.  
A coluna "Proibido" é exaustiva para os casos mais comuns — outros casos devem ser consultados com o usuário.

### Template: ERP (`viewport: 1588 × 832px`)

| Zona | Nome | Pode conter | Não pode conter |
|---|---|---|---|
| **A** | Novo Menu Global | `Menu ERP` (instância real, `stage` definido) | Qualquer outro componente. Nenhum elemento custom. |
| **B** | Top Bar | `Breadcrumb` (texto, sem componente DS), máx 1 `Button` primary, `Button` secondary ou icon ilimitados | Inputs, formulários, tabelas, cards, badges soltos, ilustrações |
| **C** | Page Header | `Heading` (1 único), `Input Search` (opcional), `Button` com ícone para filtros (sem label), `Tag` de filtro ativo | `Subheading`, cards de métrica, gráficos, tabelas, `Button` primary |
| **D** | Content Area | Um padrão de página (ver Seção 3): Tabela, Form, Dashboard, Detalhe, ou Empty State | Elementos de navegação (breadcrumb, sidebar items), CTAs primários fora do contexto do padrão |
| **E** | Paginação | Paginação numérica (prev / números / next), contador de resultados ("Mostrando 1-20 de 248") | Botões de ação, formulários, conteúdo editorial. **Zona E é opcional** — só aparece com tabelas de múltiplas páginas |

**Regras específicas ERP:**
- Gap entre zonas B-C-D-E: **0px**
- Fundo do container (zonas B–E): `--backgrounds/bg` (`#fcfbf8`)
- Zona A: fundo do componente `Menu ERP` — não alterar
- Breadcrumb na Zona B: texto puro com separador `/`, sem componente DS, cor `gray-500`

---

### Template: Envios | Hub | Conta Digital (`viewport: 1440 × 852px`)

| Zona | Nome | Pode conter | Não pode conter |
|---|---|---|---|
| **A** | Novo Menu Global | `Menu ERP` (instância real, `stage` definido) | Qualquer outro componente. Nenhum elemento custom. |
| **B** | Top Bar | Logo do produto (se aplicável), máx 1 `Button` primary, ações do produto (avatar, notificações) | Breadcrumb, inputs de busca, filtros |
| **C** | Page Header + Subtitle | `Heading` (1 único) + `Subheading` obrigatório (descrição da página) | `Input Search`, filtros, `Button` de qualquer tipo, badges |
| **D** | Content Area | `Summary Card` (opcional, antes do conteúdo principal), um padrão de página (Tabela, Form, Dashboard, Detalhe, Empty State), `Input Search` (dentro do padrão) | CTAs primários soltos fora do padrão, breadcrumb, elementos de navegação |
| **E** | Sticky ou Paginação | Barra fixa de ações de confirmação (máx 2 botões: 1 primary + 1 secondary) ou paginação numérica | Formulários completos, tabelas, conteúdo editorial. **Zona E é opcional** |

**Regras específicas Envios/Hub/Conta Digital:**
- Gap entre zonas B-C-D-E: **24px**
- `Subheading` na Zona C é **obrigatório** (diferença crítica em relação ao ERP)
- `Summary Card` (fundo azul claro) é opcional — aparece antes do conteúdo quando há métricas de resumo
- Zona A: mesmo componente `Menu ERP` do ERP, `stage` adequado ao produto

---

## Seção 2 — Harness de Componente

Define limites quantitativos e contextos válidos para cada componente.

### Limites por Tela

| Componente | Máximo por tela | Regra |
|---|---|---|
| `Button` — variante primary | **1** | Hierarquia de CTA. Mais de 1 primary = falha crítica. |
| `Heading` (papel de texto) | **1** | Um único título de página por tela. |
| `Menu ERP` | **1** | Sempre na Zona A. Nunca duplicar. |
| `Input Search` | **1** | Uma busca por tela. ERP: Zona C. Envios/Hub: Zona D. |
| `Summary Card` | **1** | Opcional. Apenas em Envios/Hub/Conta Digital, Zona D, antes do padrão. |

### Contextos Válidos por Componente

| Componente | Zonas válidas | Zonas proibidas |
|---|---|---|
| `Button` primary | B (ERP), B (Envios), E sticky | C, D (solto fora de form/modal) |
| `Button` secondary / icon | B, C (ícone apenas), D (dentro de padrão), E | A |
| `Tag` / `Badge` de status | Células de tabela (Zona D), Page Header (Zona C, filtro ativo) | Zonas A, B, E; flutuando fora de contexto |
| `Input Text`, `Input Search`, `Dropdown` | Zona C (ERP, busca), Zona D (dentro de form ou filtro de tabela) | Zonas A, B, E |
| `Checkbox`, `Radio Button` | Zona D (dentro de tabela ou formulário) | Zonas A, B, C, E |
| `Segmented Buttons` | Zona D (sub-navegação interna ao conteúdo) | Zona B, C, E |
| `Tooltip` | Qualquer zona, associado a um elemento interativo | Flutuando sem âncora |
| `Logo Olist` | Zona B (Envios/Hub/Conta Digital apenas) | ERP (sem logo na top bar), Zona D, E |

### Variantes Obrigatórias

| Componente | Variante obrigatória | Observação |
|---|---|---|
| `Menu ERP` | `stage` deve ser definido | Reflete o produto: ERP, Envios, Hub, Conta Digital |
| `Button` | `size` e `variant` sempre explícitos | Nunca usar defaults implícitos |
| `Tag` | `color` sempre mapeado ao status semântico | Ver `CORES.md` — Mapa de Cores para Status |

---

## Seção 3 — Harness de Padrão de Página (Zona D)

A Zona D deve sempre implementar um dos 5 padrões canônicos. Combinações fora desta lista requerem aprovação explícita do usuário.

| Padrão | Quando usar | Estados obrigatórios |
|---|---|---|
| **Tabela de Dados** | Listagem de recursos com filtros e ações | Padrão, Carregando (skeleton), Vazio, Erro, Com seleção |
| **Formulário** | Criar ou editar um recurso | Vazio (criar), Preenchido (editar), Erros de validação, Enviando (loading) |
| **Dashboard** | Visão geral de métricas | Padrão, Carregando (skeleton de cards), Sem dados |
| **Detalhe** | Visualizar um recurso único com tabs | Padrão, Carregando, Erro de carregamento |
| **Empty State** | Tela inteira sem conteúdo ainda | Ilustração + Heading + Subheading + 1 CTA |

**Proibido na Zona D:**
- Layout livre sem padrão canônico
- Mistura de padrões (ex: tabela + formulário lado a lado sem modal/drawer)
- Tabs de sub-navegação diretamente na Zona D sem usar `Segmented Buttons` do DS

---

## Seção 4 — Harness de Primitivos

Quando um componente não existe no inventário DS, o Claude pode construir com primitivos `use_figma` — mas apenas seguindo estas regras.

### O que é permitido construir com primitivos

| Primitivo | Permitido | Configuração obrigatória |
|---|---|---|
| `frame` | ✅ | Auto Layout ativado, `layoutMode` = `HORIZONTAL` ou `VERTICAL` |
| `rectangle` / `rect` | ✅ | `fills` usando tokens DS (`CORES.md`), `cornerRadius` da escala DS |
| `text` | ✅ | `loadFontAsync` antes de editar, fonte `Plus Jakarta Sans`, tokens de `TIPOGRAFIA.md` |
| `line` / `divisor` | ✅ | `stroke` = `--color-gray-100` (1px), sem `fill` |
| `vector` / `path` | ✅ para ícones do rebrand 24 | Apenas importar de `AI Components` — nunca desenhar caminhos manualmente |

### O que é proibido construir com primitivos

| Primitivo | Proibido | Motivo |
|---|---|---|
| `ellipse` / `circle` | ❌ como container de conteúdo | Não existe no vocabulário visual do DS |
| `group` | ❌ no lugar de `frame` | Groups não suportam Auto Layout |
| `polygon` / `star` | ❌ | Não faz parte do vocabulário visual do DS |
| Qualquer shape | ❌ com cor hex hardcoded | Sempre usar variáveis CSS de token |
| `text` com border-radius | ❌ sem container | Badges e Tags são componentes DS — nunca simular com texto arredondado |

### Regras de primitivos para componente custom

Quando construir um componente custom (Caso 5 do SKILL.md):

1. **Fills:** somente cores de `CORES.md`
2. **Tipografia:** somente tokens de `TIPOGRAFIA.md` com `Plus Jakarta Sans`
3. **Espaçamento:** somente múltiplos de 4px da escala de `ESPACAMENTO.md`
4. **Border-radius:** somente `4px` (pequeno), `8px` (padrão), `12px` (card grande), `9999px` (pill)
5. **Nome do layer:** sufixo `— custom` obrigatório (ex: `Card/PlanCard — custom`)
6. **Documentação:** comentário no Figma com: nome do componente ausente, sugestão de criação no DS

---

## Seção 5 — Regras de Layer e Nomenclatura

Nomes de layers são parte do harness — layers mal nomeados indicam construção incorreta.

### Padrão de nomenclatura obrigatório

| Tipo de layer | Formato | Exemplo |
|---|---|---|
| Frame de template | `[Produto]/[NomeTela]` | `ERP/Pedidos — Lista` |
| Zona | `Zona [Letra] — [Nome]` | `Zona C — Page Header` |
| Instância de componente DS | Nome exato do componente | `Button`, `Menu ERP`, `Tag` |
| Componente custom | `[Categoria]/[Nome] — custom` | `Card/SummaryCard — custom` |
| Frame de padrão | `Padrão/[Tipo]` | `Padrão/Tabela`, `Padrão/Form` |
| Texto (papel de texto) | `[Papel]: [conteúdo curto]` | `Heading: Pedidos`, `Label: Nome do produto` |

### Proibido em nomes de layer

- `Frame 1`, `Frame 2`, `Group 3` — nomes gerados automaticamente pelo Figma
- `Rectangle`, `Ellipse`, `Vector` — nomes de primitivo sem contexto
- Nomes em inglês misturados sem padrão (ex: `TopBar container`, `content area`)
- Emojis em nomes de layer produtivo (permitido apenas em páginas de documentação)

---

## Seção 6 — Harness de Estados

Todo padrão de página deve implementar os estados obrigatórios **antes** de ser considerado entregue.

### Estados por padrão

| Padrão | Estados mínimos obrigatórios | Estados opcionais |
|---|---|---|
| Tabela | Padrão, Skeleton loading, Vazio, Erro | Com seleção múltipla, Filtro ativo |
| Formulário | Modo criar (vazio), Modo editar (preenchido), Validação com erros, Enviando | Sucesso inline, Confirmação de saída |
| Dashboard | Padrão com dados, Skeleton loading | Sem dados no período |
| Detalhe | Padrão, Skeleton loading, Erro de carregamento | Tab vazia, Modo edição inline |
| Empty State | Estado único (sem variações) | — |

### Skeleton loading — regras

- Skeleton usa `--color-gray-50` como base e `--color-gray-100` como shimmer
- Forma do skeleton deve corresponder ao shape do conteúdo real (linha de texto = retângulo de mesma altura, card = retângulo de mesma proporção)
- Nunca usar spinner girando como substituto de skeleton em layouts de dados
- Spinner é permitido apenas para ações pontuais (ex: botão de salvar em loading)

---

## Seção 7 — O que o Harness não cobre

Este harness cobre a construção de telas via `use_figma`. Ele **não se aplica** a:

- Geração de código React (coberto por `SDD_PARA_TELA.md` e `COMPONENTES.md`)
- Revisão de telas existentes (coberto por `CHECKLIST_REVISAO.md`)
- Criação de componentes novos no DS (fora do escopo da skill — deve ser sinalizado ao designer responsável)
- Animações, transições e micro-interações (não suportados via `use_figma`)

---

## Seção 8 — Violações e Como Reportar

Quando uma regra deste harness não puder ser cumprida (ex: o SDD exige um layout que não existe nos padrões canônicos), o Claude deve:

1. **Não criar o frame** antes de resolver o conflito
2. **Reportar ao usuário** com:
   - Qual regra está sendo violada
   - Por que o SDD/PRD exige isso
   - Duas alternativas dentro do harness (se existirem)
   - Pergunta direta: "Devo criar um padrão custom ou adaptar o requisito ao padrão existente?"
3. **Só avançar** com instrução explícita do usuário

Formato de reporte:

```
⚠️ Harness: [nome da regra]
Conflito: [descrição do conflito]
Alternativa A: [dentro do harness]
Alternativa B: [dentro do harness]
Alternativa C: [custom, fora do harness — requer aprovação]
Como prefere prosseguir?
```

---

## Referência Cruzada

| Se precisar de | Leia |
|---|---|
| Dimensões e zonas dos templates | `TEMPLATES_PRODUTO.md` |
| componentKeys e libraries | `FIGMA_CONFIG.md` |
| Tokens de cor para primitivos custom | `CORES.md` |
| Tokens de tipografia para texto custom | `TIPOGRAFIA.md` |
| Tokens de espaçamento | `ESPACAMENTO.md` |
| Papéis de texto e nomenclatura | `GLOSSARIO_PAPEIS_TEXTO.md` |
| Padrões de página detalhados | `PADROES.md` |
| Checklist pós-construção | `CHECKLIST_REVISAO.md` |

---

**Versão:** 1.0  
**Criado em:** 2026-06-05  
**Próxima revisão sugerida:** após 10 telas geradas com o harness ativo — coletar violações recorrentes e adicionar à Seção 2 (Limites por Componente) e Seção 3 (Padrões proibidos emergentes)
