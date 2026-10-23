# Organismos — Catálogo

**Versão:** 1.1
**Última atualização:** 2026-10-23
**Fonte Figma:** arquivo `HeyN4w209HWh8rfpTDiwyf` (`design system (base)`), páginas `🧩 …` (inclui `🧩 Content Card`, `12148:19`), `📊 Gráficos (átomos)` e `Table`
**Leia junto com:** `TEMPLATES_PRODUTO.md` (onde cada organismo entra) · `component-registry.json` (keys)

Organismo é uma composição de átomos e moléculas do DS que resolve uma parte inteira da página. **Em uma tela, use o organismo inteiro: nunca remonte a composição com frames ou instâncias soltas.** Para cada organismo, a coluna "Zonas" diz em qual zona de template ele pode entrar (ver `references/templates/*.json`).

> Peças `.[base]` e as peças internas de cada organismo (por exemplo `column item`, `table cell`) não são instanciadas direto em telas.

---

## Catálogo

| Organismo | Key | Tipo | Variantes / props | Zonas |
|---|---|---|---|---|
| **Page Header** | `cbce5fdc2d2fc66eaeb60c434ce0aa92aa3c91a7` | component | booleanos: voltar, utilitários, ação terciária/secundária/primária, mais ações, badge, seletor de canal, descrição, link, grupo de ações · texto: título, texto da descrição | B |
| **Notice Bar** | `f20b1f8f20865a89c7209717dc0c49a42851a4a3` | set | `intent` (brand, informative, neutral, success, error, warning) × `action` (none, link, button) × `dismiss` (on, off) | B0, R, inline em C–F |
| **Empty State** | `93cfc128201d0ff2ffc489e895e4203d38616f44` | set | `tipo` (vazio, sem resultado, erro, sem permissão, sucesso, primeiro uso, educativo) | C–F |
| **Dataset** | `45d3b3490b104e8be47379e46b8ef35badcae43a` | set | `estado` (conteúdo, com seleção, sem resultado, erro, colunas, primeiro uso, carregando) | C–F do List |
| **Floating Action Bar** | `b40093eefe9b803f9a9d8b4218e77b905db3c2f2` | set | `mode` (seleção, alterações) | camada (rodapé) |
| **KPI Strip** | `4a5a0b9dc0f028a14a83f5849a7c43fcf71d63c9` | set | `métricas` (3, 4, 6) | D do Dashboard |
| **Chart Card** | `2e12c5f525d7c096f390840f88374eda982089b4` | set | `estado` (conteúdo, sem dados) · slot `gráfico` (INSTANCE_SWAP) · booleanos período, legenda, link | E do Dashboard |
| **Content Card** | `10e329f752fa7c913e8a41efb0b3e9e2f9df5332` | set | `surface` (padrão, sutil, destaque) × `state` (enabled, hover, focused, selected, disabled) × `layout` (vertical, horizontal, horizontal invertido) · slots `mídia`, `ação`, `corpo`, `rodapé` · booleanos mostrar cabeçalho, descrição, mídia, ação, corpo, rodapé, divisor · texto: título, descrição | C–F (Landing, Dashboard) |
| **Product Switch** | `fa8572014d38eb2e6998c300f0069e7bc8f55c61` | set | `state` (enabled, hover, pressed, focused) | só dentro do Menu Global |

### Composição interna (átomos usados)

| Organismo | Compõe |
|---|---|
| Dataset | `table toolbar` + `table` + `paginator` + `empty state` (sem resultado, erro, primeiro uso) |
| table toolbar | `input search` (preenche o espaço livre, mínimo 280px) + 2 `dropdown` (ordenação `single select`, filtros `multi select`) + `button icon` de colunas (abre o `column manager`) + linha de `status pill` |
| table | `table head row` (`modo` = colunas, seleção) + N `table row` (`estado`, `tamanho`; `seleção` e `ação` opcionais) com `table cell` (`tipo`) |
| KPI Strip | N `metric` separadas por divisores |
| Chart Card | `metric`, `chart bar` / `chart line` / `chart donut` (troca por instância), `chart legend`, `chart tooltip` |
| Content Card | slots que recebem átomos do DS: mídia (`ilustracao`, imagem ou `.[base] media placeholder`), ação (`button icon`, `link`), corpo (`metric`, `badge`, `progress bar`, `checkbox`, `radio button`, `input text`, `table`…), rodapé (`button` secundário e primário, small) |
| Product Switch | abre o Product Launcher (`.[base] product launcher`, interno) |

---

## Regras por organismo

### Page Header (zona B)
- **Usar quando:** toda tela com menu. 1 por tela, abaixo do aviso (B0) quando existir.
- **Não usar:** como cabeçalho de seção ou card; para topo sem breadcrumb use a variante "topo simples" (planejada; hoje: `voltar` ligado e sem utilitários).
- Sem logo do produto ou da Olist. Utilitários (notificações, empresa) só em produtos que os usam. **Máx. 1 ação primária.**

### Notice Bar (zonas B0, R e inline)
- **Usar quando:** a página tem um aviso de contexto (cobrança, instabilidade, novidade). Renderizar só quando a condição for verdadeira; máx. 1 por slot; dispensar sempre com X.
- **Não usar:** para erro de campo (Input `error`) nem para confirmação momentânea (Toast).
- Baseado no Alert Bar: edite o texto no Alert Bar interno.

### Empty State (zona C–F e dentro do Dataset)
- **Usar quando:** uma área não tem conteúdo (vazio, sem resultado de filtro, erro, sem permissão, sucesso, primeiro uso, educativo).
- **Não usar:** para loading (use o estado `carregando` do Dataset ou skeleton).
- 1 ação primária no máximo; texto segue `UX_WRITING.md`.

### Dataset (zona C–F do List)
- **Usar quando:** listar uma coleção com busca, ordenação, filtros, status, seleção e paginação.
- **Não usar:** para tabela simples dentro de um Record (use `table`) nem para listas curtas (use `list`).
- **Ordenação** vive no dropdown da toolbar (não no `column manager`); **filtros** são um dropdown de seleção múltipla; o `column manager` cuida só de filtro rápido e visibilidade/ordem das colunas.
- Sem stroke e sem padding lateral: o respiro vem da zona. É hug: a paginação fica sob a tabela, não no rodapé da página.
- Estados `sem resultado` e `erro` trocam a tabela pelo Empty State; `com seleção` transforma o cabeçalho na barra de ações em massa e aciona o Floating Action Bar (`mode=seleção`).

### Floating Action Bar (camada)
- **Usar quando:** `mode=seleção` com ≥1 item marcado (List); `mode=alterações` na 1ª edição de formulário (Record, Settings).
- Fica acima do rodapé, centralizada, horizontal; sobrepõe o conteúdo sem empurrar o layout. Um modo `wizard` (Voltar/Avançar) está planejado.

### KPI Strip e Chart Card (Dashboard)
- **KPI Strip:** 3, 4 ou 6 `metric` em um card com borda; `métricas=4` usa `disposição=empilhada`.
- **Chart Card:** troque a instância do slot `gráfico` por `chart bar`, `chart line` ou `chart donut`; sempre acompanhar de `chart legend` (nunca depender só da cor). Cores das séries: `chart/series/color-1..6` (tema claro e escuro).
- Exceções registradas ao harness: `chart line` usa vetores e `chart donut` usa elipse com arco; ambos vinculados a tokens.

### Content Card (zonas C–F)
- **Usar quando:** agrupar um conteúdo relacionado com título, ação e rodapé (dashboards e páginas de detalhe); card selecionável (escolha entre opções, com Radio); oferta, venda cruzada ou produto; checklist de onboarding; estado vazio contido em uma área.
- **Não usar:** gráfico com período e legenda (use o Chart Card); tabela ou lista longa sozinha (use `table`/`dataset` direto, sem card); aviso ou erro (Notice Bar, Alert Bar, Toast); **card dentro de card** (use divisor ou agrupamento).
- **Composição:** o card é a moldura; o conteúdo vem dos átomos do DS colocados nos slots. Nunca remonte o card com frames soltos nem desenhe átomos próprios dentro dele. O card editorial antigo (`card`) agora é só uma composição (mídia, textos e dois botões) e continua no DS até a migração.
- **Superfícies:** `padrão` (container), `sutil` (system) e `destaque` (degradê suave blue 50 → cyan 50; escuro blue 800 → cyan 900). **Não existe superfície escura de marca nem botão "inverso".** Texto e átomos acompanham o tema.
- **Estados:** `hover` sobe a sombra de nível 1 para o 2; `focused` usa o anel de foco do DS; `selected` usa borda de 2px (`content-card-border-width-selected`); `disabled` atenua conteúdo e remove a sombra.
- **Layouts:** `vertical` (mídia no topo), `horizontal` e `horizontal invertido` (mídia nas laterais). **A mídia horizontal é fixa em 96px** (`content-card-size-media-width`) e a largura não aceita override: use só objeto `xs` 1:1 da `ilustracao`; cenas pedem o layout vertical.
- **Padding:** por override de instância com um destes quatro tokens: `none` (mídia até a borda), `compact` (12px, listas densas), `default` (16px) e `comfortable` (24px, campanhas e estados vazios). Não há variante de padding.
- **Acessibilidade:** card clicável vira um único elemento interativo (link ou button) e os controles internos não competem com ele; selecionável usa `role="radio"`/`"checkbox"` com `aria-checked`; `disabled` usa `aria-disabled` e não recebe foco; imagem de mídia exige alternativa textual ou marcação decorativa.
- **Ao trocar a variante de uma instância, os overrides de texto e o conteúdo dos slots são resetados:** reaplique.
- **Composições de referência** (Figma, página `🧩 Content Card`): A–C ação e cabeçalho (menu, Metric, Badge), D–E indicadores e progresso, G–I tabela, formulário e Input, J checklist de onboarding (Progress Bar, Checkbox), K selecionável (Radio, Badge), L produto Olist (Product Icon, horizontal), M destaque (oferta de antecipação), N estado vazio (Empty State), O editorial (mídia, textos, dois botões).
- Lacunas: sem átomos de timeline ou skeleton para estado de carregamento.

### Product Switch
- **Uso exclusivo** na composição do Menu Global. Abre o Product Launcher (hero do produto ativo, tiles dos contratados e linhas "Conhecer" dos não ativados). Altura 52px. Não instanciar fora do menu.

---

## Organismos planejados (ainda sem componente no Figma)

Aparecem como `*` nos placeholders de template. Não construir à mão numa tela: sinalize a lacuna ("— custom") conforme `HARNEES_TELAS.md` Seção 4.

| Planejado | Zona | Observação |
|---|---|---|
| Form Section | C–F (Record, Settings, Wizard) | Seção de formulário, coluna até 800px |
| Section Rail | G (Record) | Âncoras das seções |
| Summary Panel | G (Record, Wizard) | Resumo lateral |
| Onboarding Checklist | C–F (Landing) | Passos de ativação |
| Dashboard Toolbar | C (Dashboard) | Período e filtros globais |
| Hero | C–F (Landing foco) | Bloco de ativação |
| Page Header — topo simples | B (Landing foco, Wizard) | Variante sem breadcrumb |
| Floating Action Bar — `mode=wizard` | camada (Wizard) | Voltar/Avançar |

---

## Metadata de organismo

Cada organismo ganha, quando for implementado no React, o campo `allowedZones` no `.metadata.json` (ver `METADATA_SCHEMA.md`): Page Header → `["B"]`; Notice Bar → `["B0","R","C-F"]`; Dataset → `["C-F"]`; Content Card → `["C-F"]`; KPI Strip → `["D"]`; Chart Card → `["E"]`; Floating Action Bar → `["camada"]`.
