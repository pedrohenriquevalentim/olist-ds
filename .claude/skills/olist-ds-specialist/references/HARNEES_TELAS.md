# Harness de Construção de Telas

**Versão:** 2.0  
**Última atualização:** 2026-09-09  
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

## Seção 0 — Protocolo de Inicialização de Arquivo

Execute este protocolo **antes de qualquer outra etapa** quando o trabalho resultar em criação de frames no Figma.  
Nunca trabalhar em um arquivo pré-existente ou em branco sem garantir que foi inicializado corretamente — a falta de inicialização causa dois gaps silenciosos: `importComponentByKeyAsync` falha sem aviso e `get_variable_defs` retorna vazio, resultando em fills hardcoded.

### Passo 1 — Criar o arquivo

```
create_new_file → nome = jornada ou produto (ex: "ERP / Pedidos — Nova Jornada")
```

Nunca reutilizar arquivo de rascunho ou arquivo em branco pré-existente.

### Passo 2 — Configurar estrutura de páginas padrão

Criar as 3 páginas obrigatórias. A página **Cover** deve ser sempre montada com o layout oficial do rebrand Olist (componente `file cover` + overlay do designer), substituindo os campos dinâmicos antes de criar qualquer nó.

#### Campos dinâmicos — resolver antes de criar qualquer nó

| Campo | Regra de resolução |
|---|---|
| `NOME_USUARIO` | Primeiro nome do usuário que está operando o Claude, em CAIXA ALTA. Derivar do contexto da sessão (nome de exibição ou prefixo do e-mail da org). Se não detectável: `'DESIGNER'` |
| `NOME_PROJETO` | Título do projeto (SDD, PRD ou contexto da conversa). Aplicar title case. Se > 45 caracteres: truncar em 45 e adicionar `'...'` |
| `UNIDADE_NEGOCIO` | Produto detectado no contexto — mapeamento: `ERP` → `'ERP'` · `Envios` → `'Envios'` · `Hub` → `'Hub'` · `Conta Digital` → `'Conta Digital'` · `Ecommerce` → `'Ecommerce'` · `Agentes de IA` → `'Agentes de IA'` · `PDV` → `'PDV'`. Se não detectável: perguntar ao usuário antes de continuar |
| `STATUS` | Status mais pertinente para o contexto. Default para arquivo novo: `'Em exploração'`. Outros válidos: `'Em progresso'` · `'Em revisão'` · `'Aprovado'` |
| `ANO_ATUAL` | Ano corrente no formato `YYYY` — usar `new Date().getFullYear().toString()` |

#### Especificação visual do cover (referência: `HeyN4w209HWh8rfpTDiwyf` node `10942:33207`)

Frame raiz: `1920 × 960px` · fundo `#f2f0e8`

| Elemento | Tipo | Posição/Tamanho | Estilo |
|---|---|---|---|
| `file cover` | Componente DS | x=0 y=0 · 1920×960 | Instância real — ver abaixo |
| `{nome do projeto}` | Texto (dentro do componente) | Dentro do container central 1400px | Bold 116px · `#0a4ee4` · `font-feature-settings: 'ss03'` |
| `{unidade de negócio} \| {status}` | Texto (dentro do componente) | Abaixo do título | Medium 56px · `#001647` |
| `design team` (rodapé esquerda) | Texto (dentro do componente) | Bottom left | SemiBold 56px · `#001647` |
| `{ano atual}` (rodapé direita) | Texto (dentro do componente) | Bottom right | Regular 56px · `#001647` |
| Pill "DESIGN TEAM" | Dentro do componente (`_status`) | Tags row, left | Bg `#779e3d` · px 32 py 24 · cornerRadius 1000 · Medium 32px white · letterSpacing 4.8px uppercase |
| Pill `{NOME_USUARIO}` | Frame overlay `designer` | x=590 y=150 no frame raiz | Bg `#001647` · px 32 py 24 · cornerRadius 1000 · Medium 32px white · letterSpacing 4.8px uppercase |

#### Implementação (use_figma)

```javascript
// ── RESOLVER CAMPOS DINÂMICOS ──────────────────────────────────────────────
const NOME_USUARIO    = '<PRIMEIRO_NOME_EM_CAIXA_ALTA>'; // ex: 'PEDRO'
const nomeRaw         = '<título do projeto>';
const NOME_PROJETO    = nomeRaw.length > 45
  ? nomeRaw.substring(0, 45).trim() + '...'
  : nomeRaw.replace(/\b\w/g, c => c.toUpperCase());
const UNIDADE_NEGOCIO = '<ERP | Envios | Hub | Conta Digital | Ecommerce | Agentes de IA | PDV>';
const STATUS          = 'Em exploração'; // default arquivo novo
const ANO_ATUAL       = new Date().getFullYear().toString();

// ── PÁGINAS ────────────────────────────────────────────────────────────────
figma.currentPage.name = '☀️ Bom dia';

const coverPage = figma.createPage();
coverPage.name = 'Cover';
figma.currentPage = coverPage;

// ── MONTAR COVER ──────────────────────────────────────────────────────────
await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: 'Bold' });
await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: 'Medium' });
await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: 'Regular' });
await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: 'SemiBold' });

// Tentativa 1: importar componente real 'file cover' da DS
let coverEl = null;
try {
  const res = await figma.teamLibrary.getAvailableSharedPluginDataAsync?.() ?? null;
  // Buscar via search_design_system (fora do plugin ctx — executar antes do use_figma)
  // componentKey do 'file cover' (nodeId 10942:33121 em HeyN4w209HWh8rfpTDiwyf)
  // Se componentKey disponível no component-registry.json, usar diretamente:
  //   const comp = await figma.importComponentByKeyAsync('<componentKey>');
  //   coverEl = comp.createInstance();
  //   coverEl.resize(1920, 960);
  //   coverEl.x = 0; coverEl.y = 0;
  //   coverPage.appendChild(coverEl);
} catch (_) { /* fallback abaixo */ }

if (!coverEl) {
  // Fallback: construir com primitivos seguindo a spec visual exata
  const coverFrame = figma.createFrame();
  coverFrame.name = 'file cover';
  coverFrame.resize(1920, 960);
  coverFrame.x = 0; coverFrame.y = 0;
  coverFrame.fills = [{ type: 'SOLID', color: { r: 0.949, g: 0.941, b: 0.910 } }]; // #f2f0e8
  coverFrame.layoutMode = 'NONE';
  coverPage.appendChild(coverFrame);

  // Container central 1400×640 (centrado em 1920×960 → x=260, y=160)
  const container = figma.createFrame();
  container.name = 'flexbox'; container.resize(1400, 640);
  container.x = 260; container.y = 160; container.fills = [];
  container.layoutMode = 'VERTICAL'; container.primaryAxisAlignItems = 'SPACE_BETWEEN';
  container.counterAxisAlignItems = 'MIN'; container.itemSpacing = 0;
  coverFrame.appendChild(container);

  // Tags row
  const tagsRow = figma.createFrame();
  tagsRow.name = 'tags'; tagsRow.layoutMode = 'HORIZONTAL';
  tagsRow.fills = []; tagsRow.primaryAxisSizingMode = 'AUTO';
  tagsRow.counterAxisSizingMode = 'AUTO'; tagsRow.itemSpacing = 24;
  tagsRow.counterAxisAlignItems = 'CENTER';
  container.appendChild(tagsRow);

  const pill1 = figma.createFrame(); // DESIGN TEAM
  pill1.name = '_status'; pill1.layoutMode = 'HORIZONTAL';
  pill1.fills = [{ type: 'SOLID', color: { r: 0.467, g: 0.620, b: 0.239 } }]; // #779e3d
  pill1.cornerRadius = 1000; pill1.paddingLeft = 32; pill1.paddingRight = 32;
  pill1.paddingTop = 24; pill1.paddingBottom = 24; pill1.counterAxisAlignItems = 'CENTER';
  pill1.primaryAxisSizingMode = 'AUTO'; pill1.counterAxisSizingMode = 'AUTO';
  tagsRow.appendChild(pill1);
  const t1 = figma.createText();
  t1.characters = 'DESIGN TEAM'; t1.fontName = { family: 'Plus Jakarta Sans', style: 'Medium' };
  t1.fontSize = 32; t1.letterSpacing = { value: 4.8, unit: 'PIXELS' };
  t1.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  pill1.appendChild(t1);

  // Initiative (nome do projeto + meta)
  const initiative = figma.createFrame();
  initiative.name = 'initiative'; initiative.fills = []; initiative.layoutMode = 'VERTICAL';
  initiative.itemSpacing = 32; initiative.counterAxisAlignItems = 'MIN';
  initiative.primaryAxisSizingMode = 'AUTO'; initiative.counterAxisSizingMode = 'FIXED';
  initiative.resize(1400, 100); // altura ajusta com HUG
  container.appendChild(initiative);

  const tProj = figma.createText();
  tProj.characters = NOME_PROJETO;
  tProj.fontName = { family: 'Plus Jakarta Sans', style: 'Bold' };
  tProj.fontSize = 116; tProj.textAutoResize = 'HEIGHT';
  tProj.fills = [{ type: 'SOLID', color: { r: 0.039, g: 0.306, b: 0.894 } }]; // #0a4ee4
  initiative.appendChild(tProj);
  tProj.layoutSizingHorizontal = 'FILL';

  const tMeta = figma.createText();
  tMeta.characters = `${UNIDADE_NEGOCIO} | ${STATUS}`;
  tMeta.fontName = { family: 'Plus Jakarta Sans', style: 'Medium' };
  tMeta.fontSize = 56; tMeta.textAutoResize = 'HEIGHT';
  tMeta.fills = [{ type: 'SOLID', color: { r: 0.000, g: 0.086, b: 0.278 } }]; // #001647
  initiative.appendChild(tMeta);
  tMeta.layoutSizingHorizontal = 'FILL';

  // Rodapé (design team | ano)
  const bottom = figma.createFrame();
  bottom.name = 'aditional'; bottom.layoutMode = 'HORIZONTAL';
  bottom.fills = []; bottom.primaryAxisAlignItems = 'SPACE_BETWEEN';
  bottom.counterAxisAlignItems = 'CENTER';
  bottom.primaryAxisSizingMode = 'FIXED'; bottom.resize(1400, 72);
  container.appendChild(bottom);

  const tTeam = figma.createText();
  tTeam.characters = 'design team'; tTeam.fontName = { family: 'Plus Jakarta Sans', style: 'SemiBold' };
  tTeam.fontSize = 56; tTeam.fills = [{ type: 'SOLID', color: { r: 0.000, g: 0.086, b: 0.278 } }];
  bottom.appendChild(tTeam);

  const tAno = figma.createText();
  tAno.characters = ANO_ATUAL; tAno.fontName = { family: 'Plus Jakarta Sans', style: 'Regular' };
  tAno.fontSize = 56; tAno.fills = [{ type: 'SOLID', color: { r: 0.000, g: 0.086, b: 0.278 } }];
  bottom.appendChild(tAno);

  coverEl = coverFrame;
}

// Substituir textos dinâmicos no componente importado (se aplicável)
if (coverEl && coverEl.type === 'INSTANCE') {
  const findTxt = (partial) => coverEl.findOne(n => n.type === 'TEXT' && n.characters.includes(partial));
  const tP = findTxt('{nome do projeto}'); if (tP) tP.characters = NOME_PROJETO;
  const tM = findTxt('{unidade de negócio}'); if (tM) tM.characters = `${UNIDADE_NEGOCIO} | ${STATUS}`;
  const tA = findTxt('{ano atual}'); if (tA) tA.characters = ANO_ATUAL;
}

// ── OVERLAY DO DESIGNER (pill dark navy com NOME_USUARIO) ─────────────────
// Posição x=590 y=150 dentro do frame raiz 1920×960 (conforme design original)
const designerFrame = figma.createFrame();
designerFrame.name = 'designer'; designerFrame.layoutMode = 'HORIZONTAL';
designerFrame.fills = [{ type: 'SOLID', color: { r: 0.000, g: 0.086, b: 0.278 } }]; // #001647
designerFrame.cornerRadius = 1000; designerFrame.paddingLeft = 32; designerFrame.paddingRight = 32;
designerFrame.paddingTop = 24; designerFrame.paddingBottom = 24;
designerFrame.counterAxisAlignItems = 'CENTER'; designerFrame.primaryAxisSizingMode = 'AUTO';
designerFrame.counterAxisSizingMode = 'AUTO'; designerFrame.x = 590; designerFrame.y = 150;
coverPage.appendChild(designerFrame); // overlay direto na página, sobre o frame do cover

const tUser = figma.createText();
tUser.characters = NOME_USUARIO; tUser.fontName = { family: 'Plus Jakarta Sans', style: 'Medium' };
tUser.fontSize = 32; tUser.letterSpacing = { value: 4.8, unit: 'PIXELS' };
tUser.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
designerFrame.appendChild(tUser);

// ── PÁGINA TELAS ──────────────────────────────────────────────────────────
const telasPage = figma.createPage();
telasPage.name = 'Telas';
```

### Passo 3 — Instanciar a design system (base)

Importar um componente sentinel e uma variável sentinel da library. O import é suficiente para subscrever a library no arquivo — não é necessário adicionar ao canvas.

```javascript
// Componente sentinel: Button (componentKey estável, sempre presente na DS)
const buttonKey = '7eeea8fba59887a3a224468fe8059d490733579e'; // Button — component-registry.json
await figma.importComponentByKeyAsync(buttonKey);

// Variável sentinel: token semântico de background (da design system (base))
// Key obtida via get_variable_defs no DS file (HeyN4w209HWh8rfpTDiwyf)
const varKey = 'b1c5fa26eed208b1b871333c5efafca1803c1239'; // color/background/surface/container
await figma.variables.importVariableByKeyAsync(varKey);
```

> Se a key do sentinel estiver desatualizada, o import lança erro. Neste caso, obter a key atual via `get_variable_defs` no arquivo da DS (`HeyN4w209HWh8rfpTDiwyf`) antes de repetir.

### Passo 4 — Verificar inicialização

```
get_libraries  → "design system (base)" deve aparecer como library ativa no arquivo
get_variable_defs → pelo menos uma coleção deve retornar resultados não-vazios
```

⛔ **BLOQUEANTE:** Se `get_libraries` não confirmar `design system (base)` como ativa — **não prosseguir**.  
Informar ao usuário: *"A library design system (base) não está acessível. Verifique se sua conta Figma tem acesso à library e tente novamente."*

⛔ **BLOQUEANTE:** Se `get_variable_defs` retornar vazio após o import sentinel — **não prosseguir**.  
Primitivos custom não poderão ter tokens vinculados — qualquer fill ou stroke aplicado seria hardcoded, violando a regra imutável da Seção 4.

→ Só avançar para o Gate Obrigatório e a criação de frames com ambos os checks passando.

---

## Gate Obrigatório — Pré-construção

Execute este gate antes de criar qualquer frame. Se qualquer item falhar, **resolva antes de continuar**.

```
[ ] 0. Protocolo de Inicialização de Arquivo (Seção 0) concluído — arquivo criado, páginas configuradas (☀️ Bom dia · Cover · Telas), sentinel importado, get_libraries e get_variable_defs passando? **BLOQUEANTE**
[ ] 1. Template identificado (erp — único template para todos os produtos)?
[ ] 2. Todas as zonas necessárias mapeadas pelo template?
[ ] 3. Padrão de página da Zona D (Content Area) identificado (Tabela | Form | Dashboard | Detalhe | Empty)?
[ ] 4. Componentes necessários têm componentKey válido nas libraries autorizadas?
[ ] 4b. Nenhum componentKey escolhido veio de um resultado com name iniciado por "." (componente interno de construção — ver FIGMA_CONFIG.md)?
[ ] 5. Nenhuma regra de limite por tela será violada (ver Seção 2)?
[ ] 6. Componentes ausentes identificados e marcados como "— custom" (ver Seção 4)?
[ ] 7. **BLOQUEANTE — Tokens semânticos:** Para CADA primitivo custom, todos os fills, strokes e cores de texto estão mapeados a tokens SEMÂNTICOS (`--color-background-*`, `--color-text-*`, `--color-border-*`, `--color-shape-*`) — nunca a tokens primitivos (`--color-gray-gray-*`, `--color-blue-blue-*`)?
```

→ Só avançar se TODOS os itens estão marcados.

---

## Seção 1 — Harness de Zona

Define o que pode e **não pode** entrar em cada zona do template.  
A coluna "Proibido" é exaustiva para os casos mais comuns — outros casos devem ser consultados com o usuário.

### Template: ERP (`viewport: 1366 × 768px`)

| Zona | Nome | Altura | Pode conter | Não pode conter |
|---|---|---|---|---|
| **A** | Menu Global | 304px largura, 752px altura | `menu-global` com `Produto=ERP` (instância real) | Qualquer outro componente. NÃO usar `menu erp` com `stage=*` (descontinuado). |
| **B** | Top Bar + Título | 116px | `breadcrumb` (esquerda do nav header) + `button` secondary × N + `button` primary × 1 (action bar direita, `size=small`); abaixo: título H1 + subtítulo (text styles) | Inputs, formulários, tabelas, cards, badges soltos, ilustrações; `button size=big` ou `size=medium` |
| **C** | Filter Bar | 72px | `input search` (460px fixo, label oculto) + `button` secondary/tertiary × N `size=small` como filtros rápidos | `tag` como filtro ativo nesta zona; `button` primary; `heading`; label visível no input search |
| **D** | Tabs | 48px | `tabs` (componente DS real, instância) + `button` secondary (ação contextual) + `button icon` (toggle de modo) | `Segmented Buttons`, qualquer input, breadcrumb, CTAs primários. **Zona D é opcional** — incluir só quando houver sub-navegação |
| **E** | Content Area | flex | Um padrão de página (ver Seção 3): Tabela (`TableCellExtended`), Form, Dashboard, Detalhe ou Empty State; `card`s dentro do padrão | Breadcrumb, elementos de navegação, CTAs primários soltos; frames primitivos no lugar de `TableCellExtended` |
| **F** | Bottom Bar | 72px | `Paginator` + text styles para totais | Botões de ação, formulários, conteúdo editorial. **Zona F é opcional** — só aparece com tabelas de múltiplas páginas |

**Regras específicas ERP (atualizadas 2026-08-29):**
- Frame raiz (`1366×768`): `padding: 8px` em todos os lados · `fills: #F1F0E8` · `gap: 8px` entre Zona A e Container
- Container (Zonas B–F): `cornerRadius: 12px` · `fills: #fcfbf8` · gap `0` entre zonas
- Zona B: `topLeftRadius: 12` · `topRightRadius: 12` · bottom radii: `0`
- Zona F: `bottomLeftRadius: 12` · `bottomRightRadius: 12` · top radii: `0`; quando ausente, Zona E recebe `bottomLeft/bottomRight: 12`
- Todas as zonas: `clipsContent: false` · `strokes: []`
- Zona A: componente `menu-global` com `Produto=ERP`, resize para `304×752px`
- Zona B é dividida internamente: `nav header` (47px) + `page title` (49px) = 116px total; botões sempre `size=small`
- Zona C: `input search` com layer `"label"` setado `visible = false` após `appendChild`; botões sempre `size=small`
- `breadcrumb` na Zona B: instância real do componente DS (`component-registry.json`) — nunca construir com texto solto
- `tabs` na Zona D: componente DS real (não `Segmented Buttons`) — confirmado no frame Figma `10170:11866`
- Zona E (tabela): usar `TableCellExtended` (`8ba1fe2c9d32e56a058c3946e17142223784c557`) — nunca `head`/`simple cell` isolados ou frames primitivos

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

1. **Fills e strokes — REGRA IMUTÁVEL: vincule a variável semântica via `importVariableByKeyAsync` + `setBoundVariableForPaint`. NUNCA use raw RGB como fill final.**

   Passar apenas um valor RGB resolve o visual mas deixa o fill sem binding — o Figma mostra o hex solto, sem rastreabilidade de token. O padrão correto é sempre importar e vincular:

   ```javascript
   // ✅ CORRETO — importar variável da library e vincular ao fill/stroke
   const varContainer = await figma.variables.importVariableByKeyAsync(
     'b1c5fa26eed208b1b871333c5efafca1803c1239' // color/background/surface/container
   );
   const newFill = figma.variables.setBoundVariableForPaint(
     { type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, // base necessária — será sobrescrita pelo binding
     'color',
     varContainer
   );
   frame.fills = [newFill]; // Figma mostrará "color/background/surface/container", não o hex

   // ✅ CORRETO — para strokes
   const varBorder = await figma.variables.importVariableByKeyAsync(
     '21a14f571453de1e135556f877bf837f59a52f01' // color/border/container/outside
   );
   const newStroke = figma.variables.setBoundVariableForPaint(node.strokes[0], 'color', varBorder);
   node.strokes = [newStroke];

   // ❌ ERRADO — raw RGB sem binding (visual OK, sem rastreabilidade de token)
   // frame.fills = [{ type: 'SOLID', color: { r: 0.988, g: 0.984, b: 0.973 } }]; ← PROIBIDO
   // ❌ ERRADO — RGB de token primitivo
   // frame.fills = [{ type: 'SOLID', color: {...} }]; // color-gray-gray-0 ← PROIBIDO
   ```

   > **Hierarquia obrigatória:** semântico → componente. Primitivos são a camada mais baixa da arquitetura de tokens — eles existem apenas para construir os semânticos. Usar RGB solto (mesmo do token semântico) sem binding é equivalente a hardcodar um hex — não há rastreabilidade.

   ### Como obter a key de qualquer variável semântica

   Nunca hardcode keys — elas podem mudar. Sempre busque no DS file em runtime com um `use_figma` prévio:

   ```javascript
   // Passo 1: use_figma no DS file (HeyN4w209HWh8rfpTDiwyf) — buscar keys dos tokens necessários
   const allVars = await figma.variables.getLocalVariablesAsync('COLOR');
   const needed = ['color/background/surface/container', 'color/text/container/title']; // exemplo
   return allVars
     .filter(v => needed.includes(v.name))
     .map(v => ({ name: v.name, key: v.key }));
   ```

   ```javascript
   // Passo 2: use_figma no arquivo alvo — importar e vincular com as keys obtidas no passo 1
   const v = await figma.variables.importVariableByKeyAsync('<key-do-passo-1>');
   const newFill = figma.variables.setBoundVariableForPaint(baseFill, 'color', v);
   node.fills = [newFill];
   ```

   O catálogo completo de tokens com nomes e estrutura está em `TOKEN_CATALOG.md` — use-o para identificar qual token semântico aplicar a cada elemento antes de buscar a key.

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

> ⚠️ Na Figma Plugin API, **não existe `var(--token)`** — use `importVariableByKeyAsync` + `setBoundVariableForPaint`. Raw RGB é proibido como fill final em componentes custom, mesmo que o valor seja o correto do token semântico.

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

**Versão:** 2.0  
**Criado em:** 2026-06-05  
**Atualizado em:** 2026-07-04 (2) — Zona B do template Envios/Hub/Conta Digital deixa de permitir "Logo do produto": o logo já é exibido na Zona A via `Menu Global`, e sua duplicação na Zona B foi removida da coluna "Pode conter" e movida para "Não pode conter". A linha `Logo Olist` em "Contextos Válidos por Componente" (Seção 2) foi corrigida para refletir que o logo só existe embutido no `Menu Global` (Zona A, todos os templates), nunca como elemento solto de zona.  
**Atualizado em:** 2026-07-04 — Zona B (ERP): `Breadcrumb` passa a ser a instância real do componente DS (não mais "texto puro, sem componente"), resolvendo o ponto em aberto #1 de `decisions/ux-design/COMPONENTES_POR_ZONA.md`. Zona C: proibição de `Button` generalizada para qualquer variante com label (antes só "primary"), mantendo o botão de ícone de filtro permitido. Zona D: `conteúdo editorial` e `Card`s avulsos passam a ser permitidos, mantendo `Breadcrumb` e demais elementos de navegação proibidos. Regra de fundo unificada para todas as zonas (A–E), removendo a exceção antes registrada para a Zona A. Seção 2 ganhou linhas de `Breadcrumb` em "Limites por Tela" e "Contextos Válidos por Componente".  
**Atualizado em:** 2026-07-03 — `Menu ERP` (variante `stage=X`) substituído por `Menu Global` (variante `produto=X`), confirmado após republicação da library. Ver `component-registry.json` para o componentKey e a lista completa de produtos.  
**Atualizado em:** 2026-08-25 (v1.3) — Template ERP: viewport corrigido `1588×832` → `1366×768`; zonas reestruturadas de A–E para A–F alinhando ao `TEMPLATES_PRODUTO.md` v1.7 (Zona C=72px Filter Bar, Zona D=48px Tabs, Zona E=452px Content, Zona F=80px Bottom Bar); `Segmented Buttons` removido de todos os contextos válidos e substituído por `tabs` DS real (confirmado em 2026-08-25, frame `10170:11866`); adicionada linha de `tabs` nos Limites por Tela.
**Atualizado em:** 2026-08-29 (v1.5) — Convenções de layout ERP formalizadas: frame raiz `padding: 8px` + `fills: #F1F0E8` + `gap: 8px`; `cornerRadius` por zona (B topo, F base, demais 0); `clipsContent: false` e `strokes: []` obrigatórios em todas as zonas; Zona E altura alterada de `452px` para `flex`; Zona F altura corrigida de `80px` para `72px`; `TableCellExtended` (`8ba1fe2c...`) definido como unidade construtiva obrigatória para tabelas; Zona A renomeada de "Novo Menu Global" para "Menu Global" com regra `Produto=ERP` explicitada; botões nas Zonas B e C passam a exigir `size=small`; label do `input search` da Zona C deve ter `visible = false`.  
**Atualizado em:** 2026-08-25 (v1.4) — Template unificado: seção "Template: Envios | Hub | Conta Digital" removida. Todos os produtos (ERP, Envios, Hub, Conta Digital) passam a usar exclusivamente o template ERP. Gate item 1 simplificado. Seção 2 simplificada: removida linha de `Summary Card`, ajustados contextos de `Input Search`, `Breadcrumb` e `Button primary` para refletir template único.  
**Atualizado em:** 2026-09-02 (v1.7) — Seção 4 reescrita: padrão de fill/stroke passa a exigir `importVariableByKeyAsync` + `setBoundVariableForPaint` — raw RGB proibido mesmo que correto (fill sem binding não rastreia token no Figma). Tabela de keys das 10 variáveis semânticas mais usadas em customs adicionada. Nota final atualizada.
**Atualizado em:** 2026-09-02 (v1.6) — Gate item 7 adicionado (BLOQUEANTE: fills/strokes de custom components devem referenciar tokens SEMÂNTICOS, nunca primitivos). Seção 4 reescrita: exemplos de código corrigidos para referenciar tokens semânticos; adicionada hierarquia obrigatória semântico → componente com explicação de por que primitivos são proibidos diretamente em telas/customs. Nota final da seção reforçada com "O Figma RGB DEVE vir do token semântico".  
**Atualizado em:** 2026-09-09 (v2.0) — Seção 0 adicionada: Protocolo de Inicialização de Arquivo. Antes de qualquer frame, o agente cria um arquivo novo via `create_new_file`, configura as páginas padrão (☀️ Bom dia · Cover · Telas), importa o sentinel de componente (Button — `7eeea8fba59887a3a224468fe8059d490733579e`) e o sentinel de variável (`b1c5fa26eed208b1b871333c5efafca1803c1239` — `color/background/surface/container`) da `design system (base)`, e verifica via `get_libraries` + `get_variable_defs` antes de prosseguir. Gate Obrigatório recebe item [0] (BLOQUEANTE) confirmando que a Seção 0 foi executada. O protocolo elimina estruturalmente o gap de library não-subscrita e de `get_variable_defs` retornando vazio — causa das duas falhas mais silenciosas do workflow Figma.  
**Próxima revisão sugerida:** após 10 telas geradas com o harness ativo — coletar violações recorrentes e adicionar à Seção 2 (Limites por Componente) e Seção 3 (Padrões proibidos emergentes)
