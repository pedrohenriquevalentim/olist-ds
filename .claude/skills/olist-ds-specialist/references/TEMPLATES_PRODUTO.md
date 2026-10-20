# Templates de Página

**Versão:** 2.0
**Última atualização:** 2026-10-20 (v2.0 — os templates deixam de ser telas desenhadas e passam a ser **placeholders de zonas**: cada template diz quais organismos entram em cada zona. Vale para todos os produtos. Substitui o template único ERP v1.8, com Zonas A–F de altura fixa.)
**Fonte Figma:** `HeyN4w209HWh8rfpTDiwyf` (`design system (base)`), página `📐 Templates · placeholders` (`12045:19`), section `Templates Produtos Olist` (`12053:77045`) e folha `Folha de especificação · Templates` (`12046:19`)
**Metadata legível por máquina:** `references/templates/<template>.json` (8 arquivos)

Antes de criar uma tela no Figma ou em React: (1) identifique o **produto**, (2) escolha o **template** pelo objetivo da tela, (3) preencha cada zona só com os organismos que ela aceita (`ORGANISMOS.md`).

---

## Modelo de zonas

Um template é um frame de **1366 × 768** com a sidebar à esquerda e uma coluna de conteúdo à direita. As zonas empilham na coluna; as camadas flutuam por cima.

| Zona | Nome | Papel | Obrigatória |
|---|---|---|---|
| **A** | Menu Global | Sidebar fixa, 304px, instância de `menu-global` com a prop `Produto` | sim (exceto Landing foco e Wizard) |
| **B0** | Aviso | `notice-bar` acima do título; renderiza só se houver aviso | condicional |
| **B** | Page Header | `page-header` (ou "topo simples" no Landing foco e no Wizard) | sim |
| **C–F** | Conteúdo | O organismo principal da página; no Dashboard e no Record é dividido em C, D, E | sim |
| **G** | Lateral | Âncoras ou resumo, só em Record e Wizard | opcional |
| **R** | Rodapé global | `notice-bar` de página inteira | condicional |
| camadas | Action Footer, Drawer + Overlay | Flutuam sobre o template e **não ocupam zona** | quando o fluxo exigir |

**Os ids de zona `C`–`F` são locais a cada template** (por exemplo, `D` é "Indicadores" no Dashboard e "Abas" no Record). Use sempre os ids do JSON do template.

### Geometria (tokens, nunca valores soltos)

| Elemento | Regra |
|---|---|
| Frame raiz | 1366 × 768 · padding e gap `shape/spacing/x1` (8px) · fill `color/background/surface/system` |
| Zona A | 304px de largura, altura total do frame menos o padding |
| Coluna de conteúdo | ocupa o restante · gap `shape/spacing/x1` entre zonas |
| Zonas de conteúdo | fill `color/background/surface/container` · raio `shape/border radius/x1_5` · sem stroke |
| Todo frame | `clipsContent: false` |
| Zonas condicionais | **não reservar espaço** quando o conteúdo estiver ausente |

> Alturas de zona antigas (Zona B 116px, C 72px, D 48px, F 72px) e o preenchimento `#F1F0E8` / `#fcfbf8` **foram removidos**: a altura vem do organismo (hug) e as cores, dos tokens semânticos.

---

## Os 8 templates

| Template | Quando usar | Zonas | Organismos principais | Camadas | Frame |
|---|---|---|---|---|---|
| **Landing** | Início do produto, atalhos e onboarding | A, B0, B, C–F, R | Page Header, Notice Bar, Content Card\*, Onboarding Checklist\* | — | `12045:22` |
| **Landing foco** | Tela sem menu para um objetivo (primeiro uso, ativação) | B (topo simples), C–F | Empty State (primeiro uso), Hero\* | — | `12045:72` |
| **Dashboard** | Indicadores e gráficos de um período | A, B0, B, C, D, E | KPI Strip, Chart Card, Dashboard Toolbar\* | — | `12045:93` |
| **List** | Coleção de registros com busca, filtros, seleção e paginação | A, B0, B, C–F, R | Dataset | Action Footer (seleção), Drawer + Overlay | `12045:146` |
| **Record** | Detalhe e edição de um registro | A, B0, B, D, C–F, G | Tabs, Form Section\*, Dataset, Section Rail\*, Summary Panel\* | Action Footer (alterações) | `12045:196` |
| **Settings** | Configurações com menu próprio | A (Configurações), B0, B, C–F | Form Section\* | Action Footer (alterações) | `12045:255` |
| **Wizard** | Criação guiada em etapas | B (topo simples), C, D–F, G | Stepper, Form Section\*, Summary Panel\* | Action Footer (Voltar/Avançar)\* | `12045:294` |
| **Estados** | Vazio, sem resultado, erro, sem permissão e sucesso | A, B0, B, C–F | Empty State | — | `12045:332` |

`*` = organismo ainda sem componente no Figma (ver "Organismos planejados" em `ORGANISMOS.md`). Sinalize a lacuna em vez de construir à mão.

**Modos (não são frames novos):** List → com Drawer e worklist · Record → âncoras e abas · Estados → um por tipo de `empty state`.

### Escolhendo o template

| A tela é… | Template |
|---|---|
| Página inicial do produto | Landing |
| Primeiro acesso ou ativação, sem menu | Landing foco |
| Painel de métricas | Dashboard |
| Lista de pedidos, produtos, etiquetas, extrato, parcelas | List |
| Detalhe/edição de um registro | Record |
| Preferências, integrações, dados da conta | Settings |
| Fluxo com várias etapas (nova etiqueta, transferência, solicitação de crédito, conectar canal) | Wizard |
| Tela de vazio, erro, sem permissão ou sucesso | Estados |

Se nenhum encaixar, **pergunte ao usuário** antes de inventar um template.

---

## Todos os produtos usam os mesmos templates

O produto **não muda a estrutura**: só escolhe a variante do `Menu Global` (prop `Produto`) e a paleta de cor do produto (Product Switch / Product Launcher).

| Produto | `Menu Global` · `Produto=` | Palavras-chave no SDD | Templates mais prováveis |
|---|---|---|---|
| **ERP** | `ERP` | ERP, pedidos, produtos, estoque, cadastros, vendedores, embalagens, notas fiscais, catálogo | List, Record, Dashboard, Settings, Wizard |
| **Conta Digital** | `Conta Digital` | conta digital, internet banking, saldo, extrato, transferência, Pix, boleto, pagamento | Dashboard (saldo), List (extrato), Wizard (transferência, Pix), Record (comprovante) |
| **New Hub** | `HUB` | hub, integração, marketplace, canal de venda, sincronização | List (canais e integrações), Wizard (conectar canal), Settings |
| **E-commerce** | `Ecommerce` | loja, vitrine, checkout da loja, pedidos online, catálogo online | Dashboard (vendas), List (pedidos), Settings |
| **Capital (Crédito)** | `Crédito` | crédito, capital de giro, empréstimo, antecipação, parcelas, contrato | Landing (oferta), Wizard (solicitação), Record (contrato), List (parcelas) |
| **PDV** | **sem variante no Menu Global (a confirmar)** | PDV, caixa, venda no balcão, abertura e fechamento de caixa | Landing foco (abertura de caixa), List (vendas), Wizard (fechamento) |
| **Envios** | `Envios` | envios, frete, etiqueta, rastreio, transportadora, carteira de frete, créditos de frete | List (etiquetas), Wizard (cotação e nova etiqueta), Record (rastreio) |
| **Checkout Admin** *(futuro)* | **sem variante e sem cor definidas** | checkout, link de pagamento, meios de pagamento | a definir; usar os mesmos templates |
| Agentes de IA | `Agentes de IA` | agente, IA, assistente | Dashboard, Settings |

- A coluna "Templates mais prováveis" é **sugestão por tipo de tela, não regra.**
- **Produto sem variante** (PDV, Checkout Admin): não invente a variante. Use a mais próxima, avise o usuário e registre o gap; a variante nova entra no `Menu Global` e na paleta do Product Launcher antes de a tela ser considerada pronta.
- **Capital** é o nome de negócio da vertical de crédito; no Figma a variante chama-se `Crédito`.
- Se o SDD não especificar o produto: **pergunte ao usuário.**

---

## Regra para Claude

1. Ler o SDD → identificar o **produto** (palavras-chave) → escolher a variante do `Menu Global`.
2. Escolher o **template** pelo objetivo da tela (tabela acima) e abrir `references/templates/<template>.json`.
3. Preencher **zona a zona** só com os organismos de `allowed`; o que está em `planned` ainda não existe e deve ser sinalizado como lacuna.
4. Respeitar os limites do JSON (`max`, `required`, `conditional`): Page Header 1 · Dataset 1 · KPI Strip 1 · Notice Bar 1 por slot · 1 ação primária por tela.
5. Zonas condicionais (B0, R) e camadas só entram quando o fluxo exigir.
6. Construir no Figma seguindo `HARNEES_TELAS.md`; nunca remontar um organismo com primitivos.
7. Se o produto ou o template não estiver claro: **perguntar ao usuário.**

## Sincronização com Figma

Os placeholders são a fonte da verdade da estrutura. Quando o usuário pedir "sincronizar templates":
1. Abrir a página `12045:19` (arquivo `HeyN4w209HWh8rfpTDiwyf`) e a folha `12046:19` via `get_metadata`.
2. Comparar zonas, chips (organismos aceitos) e camadas com os JSONs de `references/templates/`.
3. Atualizar JSONs e este arquivo; os `*` somem quando o organismo passar a existir (e `planned` vira `allowed`).

> Os 3 exemplos reais que existiam (List com seleção, Record com abas, Dashboard) e os componentes base do menu de Configurações **não estavam mais no arquivo em 2026-10-20** (verificado via Figma MCP). Não os referencie.

---

*Fonte da verdade: Figma arquivo `HeyN4w209HWh8rfpTDiwyf`, página `📐 Templates · placeholders` (`12045:19`).*
