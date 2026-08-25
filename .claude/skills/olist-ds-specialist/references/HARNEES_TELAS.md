# Harness de Construção de Telas

**Versão:** 1.4  
**Última atualização:** 2026-08-25  
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
[ ] 1. Template identificado (erp — único template para todos os produtos)?
[ ] 2. Todas as zonas necessárias mapeadas pelo template?
[ ] 3. Padrão de página da Zona D (Content Area) identificado (Tabela | Form | Dashboard | Detalhe | Empty)?
[ ] 4. Componentes necessários têm componentKey válido nas libraries autorizadas?
[ ] 4b. Nenhum componentKey escolhido veio de um resultado com name iniciado por "." (componente interno de construção — ver FIGMA_CONFIG.md)?
[ ] 5. Nenhuma regra de limite por tela será violada (ver Seção 2)?
[ ] 6. Componentes ausentes identificados e marcados como "— custom" (ver Seção 4)?
```

→ Só avançar se TODOS os itens estão marcados.

---

## Seção 1 — Harness de Zona

Define o que pode e **não pode** entrar em cada zona do template.  
A coluna "Proibido" é exaustiva para os casos mais comuns — outros casos devem ser consultados com o usuário.

### Template: ERP (`viewport: 1366 × 768px`)

| Zona | Nome | Altura | Pode conter | Não pode conter |
|---|---|---|---|---|
| **A** | Novo Menu Global | 304px largura | `Menu Global` (instância real, `produto` definido) | Qualquer outro componente. Nenhum elemento custom. |
| **B** | Top Bar + Título | 116px | `breadcrumb` (esquerda do nav header) + `button` secondary × N + `button` primary × 1 (action bar direita); abaixo: título H1 + subtítulo (text styles) | Inputs, formulários, tabelas, cards, badges soltos, ilustrações |
| **C** | Filter Bar | 72px | `input search` (460px fixo) + `button` secondary/tertiary × N como filtros rápidos | `tag` como filtro ativo nesta zona; `button` primary; `heading` |
| **D** | Tabs | 48px | `tabs` (componente DS real, instância) + `button` secondary (ação contextual) + `button icon` (toggle de modo) | `Segmented Buttons`, qualquer input, breadcrumb, CTAs primários. **Zona D é opcional** — incluir só quando houver sub-navegação |
| **E** | Content Area | 452px | Um padrão de página (ver Seção 3): Tabela, Form, Dashboard, Detalhe ou Empty State; `card`s dentro do padrão | Breadcrumb, elementos de navegação, CTAs primários soltos |
| **F** | Bottom Bar | 80px | `Paginator` + text styles para totais | Botões de ação, formulários, conteúdo editorial. **Zona F é opcional** — só aparece com tabelas de múltiplas páginas |

**Regras específicas ERP:**
- Gap entre zonas B–F: **0px** (container VERTICAL, gap: 0)
- Fundo (todas as zonas, A–F): `--backgrounds/bg` (`#fcfbf8`)
- Zona B é dividida internamente: `nav header` (47px) + gap 20px + `page title` (49px) = 116px total
- `breadcrumb` na Zona B: instância real do componente DS (`component-registry.json`) — nunca construir com texto solto
- `tabs` na Zona D: componente DS real (não `Segmented Buttons`) — confirmado no frame Figma `10170:11866`
- Total de alturas B+C+D+E+F: **768px** (com Zona A de 768px de altura, em layout horizontal)

---

## Seção 2 — Harness de Componente

Define limites quantitativos e contextos válidos para cada componente.

### Limites por Tela

| Componente | Máximo por tela | Regra |
|---|---|---|
| `Button` — variante primary | **1** | Hierarquia de CTA. Mais de 1 primary = falha crítica. |
| `Heading` (papel de texto) | **1** | Um único título de página por tela. |
| `Menu Global` | **1** | Sempre na Zona A. Nunca duplicar. |
| `Input Search` | **1** | Uma busca por tela. Zona C (Filter Bar). |
| `tabs` | **1** | Opcional. Zona D, sub-navegação. |
| `Breadcrumb` | **1** | Sempre na Zona B. |

### Contextos Válidos por Componente

| Componente | Zonas válidas | Zonas proibidas |
|---|---|---|
| `Button` primary | B (Zona B), E sticky (Zona F) | C, D (solto fora de form/modal) |
| `Button` secondary / icon | B, C (ícone apenas), D (dentro de padrão), E | A |
| `Tag` / `Badge` de status | Células de tabela (Zona D), Page Header (Zona C, filtro ativo) | Zonas A, B, E; flutuando fora de contexto |
| `Input Text`, `Input Search`, `Dropdown` | Zona C (ERP, busca), Zona D (dentro de form ou filtro de tabela) | Zonas A, B, E |
| `Checkbox`, `Radio Button` | Zona D (dentro de tabela ou formulário) | Zonas A, B, C, E |
| `tabs` (DS real) | Zona D — ERP (sub-navegação em abas) | Zonas A, B, C, E, F |
| `Tooltip` | Qualquer zona, associado a um elemento interativo | Flutuando sem âncora |
| `Logo Olist` | Zona A, embutido no `Menu Global` (todos os templates) | Zona B, C, D, E — nunca como elemento solto de zona |
| `Breadcrumb` | Zona B | Zonas A, C, D, E, F |

### Variantes Obrigatórias

| Componente | Variante obrigatória | Observação |
|---|---|---|
| `Menu Global` | `produto` deve ser definido | Reflete o produto: ERP, Conta Digital, Envios, Ecommerce, Agentes de IA, Minha Conta |
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
- `Segmented Buttons` em qualquer zona — usar `tabs` (componente DS real) na Zona D do ERP

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
| `vector` / `path` | ✅ para ícones do rebrand 24 | Apenas importar da library ativa em `searchPriority` (`design system (base)`) — nunca desenhar caminhos manualmente |

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

1. **Fills e strokes:** use valores RGB 0–1 de `CORES.md` → coluna "Figma RGB" ou `TOKEN_CATALOG.md` → Seção 1

   ```javascript
   // ✅ Fundo de card
   frame.fills = [{ type: 'SOLID', color: { r: 0.988, g: 0.984, b: 0.973 } }]; // gray-gray-0
   // ✅ Borda de input
   frame.strokes = [{ type: 'SOLID', color: { r: 0.686, g: 0.678, b: 0.635 } }]; // gray-gray-300
   // ✅ Stroke width
   frame.strokeWeight = 1;
   frame.strokeAlign = 'INSIDE';
   ```

2. **Tipografia:** somente tokens de `TIPOGRAFIA.md` com `Plus Jakarta Sans`. Carregue a fonte antes de editar:

   ```javascript
   await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: 'Regular' });
   textNode.fontName = { family: 'Plus Jakarta Sans', style: 'SemiBold' };
   textNode.fontSize = 14;
   textNode.lineHeight = { value: 20, unit: 'PIXELS' };
   ```

3. **Espaçamento:** somente múltiplos de 4px da escala de `ESPACAMENTO.md`
4. **Border-radius:** somente `4` (pequeno), `8` (padrão), `12` (card grande), `9999` (pill) — valores em pixels inteiros
5. **Nome do layer:** sufixo `— custom` obrigatório (ex: `Card/PlanCard — custom`)
6. **Documentação:** comentário no Figma com: nome do componente ausente, sugestão de criação no DS

> ⚠️ Na Figma Plugin API, **não existe `var(--token)`** — sempre use valores numéricos RGB. A coluna "Figma RGB" em `CORES.md` e em `TOKEN_CATALOG.md` → Seção 1 já entrega os valores prontos.

---

## Seção 5 — Regras de Layer e Nomenclatura

Nomes de layers são parte do harness — layers mal nomeados indicam construção incorreta.

### Padrão de nomenclatura obrigatório

| Tipo de layer | Formato | Exemplo |
|---|---|---|
| Frame de template | `[Produto]/[NomeTela]` | `ERP/Pedidos — Lista` |
| Zona | `Zona [Letra] — [Nome]` | `Zona C — Page Header` |
| Instância de componente DS | Nome exato do componente | `Button`, `Menu Global`, `Tag` |
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
| Componentes recomendados por zona (por template) | `TEMPLATES_PRODUTO.md` → seção "Componentes Recomendados por Zona" |
| componentKeys e libraries | `FIGMA_CONFIG.md` |
| Tokens de cor para primitivos custom | `CORES.md` |
| Tokens de tipografia para texto custom | `TIPOGRAFIA.md` |
| Tokens de espaçamento | `ESPACAMENTO.md` |
| Papéis de texto e nomenclatura | `GLOSSARIO_PAPEIS_TEXTO.md` |
| Padrões de página detalhados | `PADROES.md` |
| Checklist pós-construção | `CHECKLIST_REVISAO.md` |

---

**Versão:** 1.4  
**Criado em:** 2026-06-05  
**Atualizado em:** 2026-07-04 (2) — Zona B do template Envios/Hub/Conta Digital deixa de permitir "Logo do produto": o logo já é exibido na Zona A via `Menu Global`, e sua duplicação na Zona B foi removida da coluna "Pode conter" e movida para "Não pode conter". A linha `Logo Olist` em "Contextos Válidos por Componente" (Seção 2) foi corrigida para refletir que o logo só existe embutido no `Menu Global` (Zona A, todos os templates), nunca como elemento solto de zona.  
**Atualizado em:** 2026-07-04 — Zona B (ERP): `Breadcrumb` passa a ser a instância real do componente DS (não mais "texto puro, sem componente"), resolvendo o ponto em aberto #1 de `decisions/ux-design/COMPONENTES_POR_ZONA.md`. Zona C: proibição de `Button` generalizada para qualquer variante com label (antes só "primary"), mantendo o botão de ícone de filtro permitido. Zona D: `conteúdo editorial` e `Card`s avulsos passam a ser permitidos, mantendo `Breadcrumb` e demais elementos de navegação proibidos. Regra de fundo unificada para todas as zonas (A–E), removendo a exceção antes registrada para a Zona A. Seção 2 ganhou linhas de `Breadcrumb` em "Limites por Tela" e "Contextos Válidos por Componente".  
**Atualizado em:** 2026-07-03 — `Menu ERP` (variante `stage=X`) substituído por `Menu Global` (variante `produto=X`), confirmado após republicação da library. Ver `component-registry.json` para o componentKey e a lista completa de produtos.  
**Atualizado em:** 2026-08-25 (v1.3) — Template ERP: viewport corrigido `1588×832` → `1366×768`; zonas reestruturadas de A–E para A–F alinhando ao `TEMPLATES_PRODUTO.md` v1.7 (Zona C=72px Filter Bar, Zona D=48px Tabs, Zona E=452px Content, Zona F=80px Bottom Bar); `Segmented Buttons` removido de todos os contextos válidos e substituído por `tabs` DS real (confirmado em 2026-08-25, frame `10170:11866`); adicionada linha de `tabs` nos Limites por Tela.  
**Atualizado em:** 2026-08-25 (v1.4) — Template unificado: seção "Template: Envios | Hub | Conta Digital" removida. Todos os produtos (ERP, Envios, Hub, Conta Digital) passam a usar exclusivamente o template ERP. Gate item 1 simplificado. Seção 2 simplificada: removida linha de `Summary Card`, ajustados contextos de `Input Search`, `Breadcrumb` e `Button primary` para refletir template único.  
**Próxima revisão sugerida:** após 10 telas geradas com o harness ativo — coletar violações recorrentes e adicionar à Seção 2 (Limites por Componente) e Seção 3 (Padrões proibidos emergentes)
