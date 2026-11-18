# Componentes — API Completa

**Auto-gerado por `npm run build`**
**Última atualização:** 2026-11-18
**Versão do pacote:** 1.0.84
**Versão da skill:** 3.25

---

Este arquivo contém a API completa de todos os componentes do design system.

## Componentes Disponíveis (16)

### Button

Ação primária de interação — dispara uma operação com efeito colateral (salvar, confirmar, navegar com ação associada, excluir).

**Quando usar:**
- Disparar uma operação que muda estado (salvar, confirmar, enviar, deletar)
- Ação principal, secundária ou terciária dentro de formulário, modal ou toolbar

**Quando NÃO usar:**
- Navegação pura sem efeito colateral — usar link/Anchor semântico
- Seleção entre opções mutuamente exclusivas — usar Segmented Buttons ou Radio
- Alternância de estado binário persistente — usar Checkbox ou Chip

**Combina com:** Icon

> **Nota:** leadIcon e actionIcon aceitam qualquer ReactNode, mas devem receber o Icon com color="currentColor" para herdar a cor em todos os estados.

**Props:**
```typescript
variant?: 'primary' | 'secondary' | 'tertiary';
size?: 'big' | 'medium' | 'small';
label?: string;
leadIcon?: React.ReactNode;
actionIcon?: React.ReactNode;
```

**Caminho:** `src/components/Button/`

---

### ButtonIcon

Botão de ação com apenas ícone, sem label. Variante compacta do Button para ações cujo ícone é suficientemente reconhecível no contexto.

**Quando usar:**
- A ação é universalmente reconhecível pelo ícone (fechar, editar, deletar, expandir)
- Espaço horizontal é limitado e o label seria redundante
- Dentro de toolbars, cards de lista, cabeçalhos de seção ou menus de contexto

**Quando NÃO usar:**
- A ação precisa de texto para ser compreendida — use Button com label
- É a ação principal da tela — prefira Button primary com label visível
- Há mais de 3 ButtonIcon consecutivos sem agrupamento visual claro — use um menu de ações

**Combina com:** Button, InputSearch, Card, Tooltip

> **Nota:** Sempre forneça aria-label descritivo — o ícone não é acessível por si só. O componente é 48×48px (área de toque), mas o círculo visual é menor; não reduza o elemento para caber em áreas menores.

**Props:**
```typescript
variant?: 'primary' | 'secondary' | 'tertiary';
icon: React.ReactNode;
```

**Caminho:** `src/components/ButtonIcon/`

---

### Card

Contêiner visual de conteúdo agrupado — apresenta informações relacionadas (mídia, título, texto, ações) em superfície elevada com cantos arredondados grandes.

**Quando usar:**
- Exibir um item de conteúdo como unidade visual coesa: produto, artigo, plano, notificação
- Agrupar mídia + título + texto + ações em contexto de listagem ou grid
- Fornecer um contêiner genérico com layout controlado para conteúdo personalizado (variant 'slot')

**Quando NÃO usar:**
- Destacar métricas ou KPIs isolados — usar Dashboard ou stat tile específico
- Exibir linhas de tabela — usar Table com Table Column
- Layout de largura total sem superfície elevada — usar seção/container plano

**Combina com:** Button, Tag, Badge, Avatar

> **Nota:** A variant 'slot' substitui toda a área de conteúdo por children livre; a mídia no topo continua disponível. Não existe 'Summary Card' separado — apenas este Card genérico (gap confirmado em 2026-07-02 via harnessCoverageCheck).

**Props:**
```typescript
content?: 'simple' | 'slot';
media?: React.ReactNode;
titleText?: string;
subtitle?: boolean;
subtitleText?: string;
paragraphText?: string;
caption?: boolean;
captionText?: string;
actions?: boolean;
secondaryButton?: boolean;
primaryLabel?: string;
secondaryLabel?: string;
onPrimaryAction?: () => void;
onSecondaryAction?: () => void;
```

**Caminho:** `src/components/Card/`

---

### Checkbox

Controle de seleção binária ou indeterminada — marca/desmarca uma opção de forma independente das demais.

**Quando usar:**
- Selecionar uma opção independente (não mutuamente exclusiva)
- Padrão 'selecionar todos' com estado indeterminado sobre uma lista parcialmente selecionada

**Quando NÃO usar:**
- Seleção mutuamente exclusiva entre opções — usar Radio
- Ação de filtro visualmente destacada — usar Chip

> **Nota:** isIndeterminate é aplicado via useEffect diretamente na propriedade DOM indeterminate — não existe atributo HTML nativo para isso.

**Props:**
```typescript
label?: string;
isIndeterminate?: boolean;
```

**Caminho:** `src/components/Checkbox/`

---

### Chip

Filtro ou tag selecionável — alterna um estado de seleção visualmente destacado, tipicamente em grupos.

**Quando usar:**
- Seleção múltipla de categorias, filtros ou atributos em um grupo
- Tag removível/selecionável dentro de outro componente (ex: chips do InputSelect multi)

**Quando NÃO usar:**
- Ação que dispara uma operação sem estado de seleção — usar Button
- Seleção binária simples fora de contexto de filtro/grupo — usar Checkbox

**Combina com:** Icon

> **Nota:** usa role="checkbox" + aria-checked, não aria-pressed — semântica de seleção, não de toggle de ação.

**Props:**
```typescript
label: string;
isSelected?: boolean;
isDisabled?: boolean;
onChange?: (isSelected: boolean) => void;
```

**Caminho:** `src/components/Chip/`

---

### Icon

Renderiza um ícone SVG inline do inventário do design system, com controle de tamanho e cor via props.

**Quando usar:**
- Qualquer ícone dentro de outro componente do DS (leadIcon, actionIcon, chevron etc.)
- Ícone standalone em conteúdo de produto, sempre com aria-label quando carregar significado

**Quando NÃO usar:**
- Logotipo da marca — usar Logo
- Ícone de produto na sidebar de navegação — usar ProdutosOlistIcons
- Ícone fora do inventário — não crie SVG solto no consumidor; adicione ao inventário do Icon primeiro

**Combina com:** Button, Chip, InputText, InputPassword, InputSearch, InputSelect

> **Nota:** o SVG interno já usa currentColor — a prop color funciona em todos os estados de hover/active/disabled do componente pai sem re-render do SVG.

**Props:**
```typescript
name: IconName;
size?: number;
color?: string;
className?: string;
'aria-label'?: string;
```

**Caminho:** `src/components/Icon/`

---

### InputPassword

Campo de senha com toggle de visibilidade, suportando ícone de lead, tooltip e estados de validação.

**Quando usar:**
- Campo de senha em formulários de login, cadastro ou alteração de senha

**Quando NÃO usar:**
- Campo de texto comum sem necessidade de ocultar valor — usar InputText
- Fluxo de cadastro/alteração de senha sem passar autoComplete="new-password" (o default é "current-password", pensado para login)

**Combina com:** Icon

> **Nota:** isPasswordVisible/onVisibilityToggle são opcionais — sem eles o componente gerencia a visibilidade internamente (uncontrolled).

**Props:**
```typescript
/** Texto do label acima do campo */
label?: string;
/** Placeholder exibido quando o campo está vazio */
placeholder?: string;
/** Ícone à esquerda dentro do campo */
leadIcon?: React.ReactNode;
/** Exibe o texto de suporte abaixo do campo */
hasSupport?: boolean;
/** Texto de suporte */
supportText?: string;
/** Exibe ícone de tooltip ao lado do label */
hasTooltip?: boolean;
/** Texto do tooltip */
tooltipText?: string;
/** Estado de sucesso — sobrepõe estilos de borda e suporte */
isSuccess?: boolean;
/** Estado de erro — sobrepõe estilos de borda e suporte */
isError?: boolean;
/** Desabilita o campo */
isDisabled?: boolean;
/** Visibilidade controlada externamente (senha visível = true) */
isPasswordVisible?: boolean;
/** Callback disparado ao alternar visibilidade */
onVisibilityToggle?: (isVisible: boolean) => void;
/** Valor controlado */
value?: string;
/** Callback disparado ao digitar */
onChange?: (value: string) => void;
className?: string;
```

**Caminho:** `src/components/InputPassword/`

---

### InputSearch

Campo de busca com borda pill e ação de buscar embutida — botão com texto ou apenas ícone.

**Quando usar:**
- Busca textual dentro de uma tela ou de um componente de listagem/tabela
- Necessidade de disparar a busca tanto por clique quanto por Enter

**Quando NÃO usar:**
- Campo de texto genérico sem ação de busca — usar InputText
- Filtro por seleção de opções pré-definidas — usar InputSelect

**Combina com:** Icon

> **Nota:** onSearch já é disparado tanto pelo clique no botão quanto pelo Enter no input — não duplique o handler no consumidor.

**Props:**
```typescript
/** Texto do label acima do campo */
label?: string;
/** Placeholder exibido quando o campo está vazio */
placeholder?: string;
/** Exibe o texto de suporte abaixo do campo */
support?: boolean;
/** Texto de suporte */
supportText?: string;
/** Valor controlado do input */
value?: string;
/** Callback disparado ao digitar */
onChange?: (value: string) => void;
/** Callback disparado ao acionar a busca (botão ou Enter) */
onSearch?: (value: string) => void;
/** Desabilita o campo */
isDisabled?: boolean;
className?: string;
```

**Caminho:** `src/components/InputSearch/`

---

### InputSelect

Campo de seleção com quatro modos (single, multi, autocomplete, multi-autocomplete), implementando o padrão ARIA combobox/listbox com navegação completa por teclado.

**Quando usar:**
- Selecionar um ou mais valores de uma lista de opções, com ou sem busca
- Lista de opções grande o suficiente para justificar autocomplete

**Quando NÃO usar:**
- Poucas opções (~5) sempre visíveis e mutuamente exclusivas — usar Radio
- Seleção múltipla curta e sempre visível — usar grupo de Checkbox
- Campo de texto livre sem opções pré-definidas — usar InputText

**Combina com:** Icon, Chip

> **Nota:** selectType é um discriminated union (Single vs Multi) — value/onChange mudam de tipo (string vs string[]) conforme o modo; deixe o TypeScript inferir pelo selectType, não force cast manual.

**Props:**
```typescript
selectType?: 'single' | 'autocomplete';
value?: string;
onChange?: (value: string) => void;
```

**Caminho:** `src/components/InputSelect/`

---

### InputText

Campo de texto de linha única — label, ícone de lead, tooltip, texto de suporte e estados de validação.

**Quando usar:**
- Entrada de texto livre de linha única (nome, e-mail, campo genérico de formulário)

**Quando NÃO usar:**
- Campo de senha — usar InputPassword
- Campo com ação de busca embutida — usar InputSearch
- Seleção de opções pré-definidas — usar InputSelect

**Combina com:** Icon

**Props:**
```typescript
/** Texto do label acima do campo */
label?: string;
/** Placeholder exibido quando o campo está vazio */
placeholder?: string;
/** Ícone à esquerda dentro do campo */
leadIcon?: React.ReactNode;
/** Exibe o texto de suporte abaixo do campo */
hasSupport?: boolean;
/** Texto de suporte */
supportText?: string;
/** Exibe ícone de tooltip ao lado do label */
hasTooltip?: boolean;
/** Texto do tooltip */
tooltipText?: string;
/** Estado de sucesso — sobrepõe estilos de borda e suporte */
isSuccess?: boolean;
/** Estado de erro — sobrepõe estilos de borda e suporte */
isError?: boolean;
/** Desabilita o campo */
isDisabled?: boolean;
/** Valor controlado */
value?: string;
/** Callback disparado ao digitar */
onChange?: (value: string) => void;
className?: string;
```

**Caminho:** `src/components/InputText/`

---

### ItensMenuGlobal

Sub-componente do MenuGlobal que renderiza a barra lateral de navegação hierárquica do ERP. Exibe o painel primário com os módulos de 1º nível (Vendas, Produtos, Suprimentos, Serviços, Finanças, Contatos, Relatórios) e um painel secundário com os sub-itens do módulo ativo, organizados em seções. Ativo somente quando o produto selecionado no MenuGlobal for 'Sistema ERP'.

**Quando usar:**
- Dentro do MenuGlobal, quando o produto ativo for 'Sistema ERP'
- Como complemento à navegação global para expor a hierarquia de módulos ERP e seus sub-itens
- Quando o usuário quer fixar o submenu de um módulo (toggle 'Fixar menu' → estado fixo, somente painel secundário visível)

**Quando NÃO usar:**
- Fora do MenuGlobal ou de forma isolada — é um sub-componente, não uma navegação autônoma
- Quando o produto ativo não for 'Sistema ERP' — os demais produtos não têm este painel lateral
- Em layouts mobile ou responsivos — projetado exclusivamente para desktop (min 1440px)

**Combina com:** MenuGlobal, Icon, Toggle

> **Nota:** No estado 'fixo', o painel primário é ocultado e o secundário ocupa 248px com ícone de seta (back) + nome do módulo no cabeçalho — permite voltar ao painel primário. O conteúdo dos grupos e sub-itens é hardcoded nesta versão inicial, espelhando os módulos reais do ERP Olist.

**Props:**
```typescript
/** Módulo ERP ativo — define a seleção no painel primário e o conteúdo do painel secundário. */
moduloAtivo?: ModuloERP;
/** Estado do painel lateral. Quando não fornecido, o componente gerencia internamente. */
estado?: EstadoMenu;
/** Callback acionado ao clicar em um módulo de 1º nível. */
onModuloSelect?: (modulo: ModuloERP) => void;
/** Callback acionado ao alternar o toggle "Fixar menu". */
onFixarToggle?: (fixado: boolean) => void;
/** Callback acionado ao clicar no botão voltar no estado fixo. */
onVoltar?: () => void;
className?: string;
```

**Variantes:**
```typescript
type EstadoMenu = 'fechado' | 'aberto' | 'fixo'
```

**Caminho:** `src/components/ItensMenuGlobal/`

---

### Logo

Logotipo Olist em três variantes de tamanho/composição, usado para identificar a marca em telas e componentes de navegação.

**Quando usar:**
- Identificação de marca em telas principais (default)
- Headers compactos e barras de navegação estreitas (simple)
- Espaços muito reduzidos como favicon ou avatar (symbol)

**Quando NÃO usar:**
- Ícone de produto específico na sidebar — usar ProdutosOlistIcons
- Zona B (Top Bar) do harness ERP/Envios/Hub/Conta Digital — o logo já vem embutido no Menu Global, não duplicar (ver decisions/ux-design/COMPONENTES_POR_ZONA.md)

> **Nota:** renderiza como role="img" com aria-label — os SVGs internos são puramente decorativos (alt="").

**Props:**
```typescript
/** Variante de tamanho do logo. */
size?: 'default' | 'simple' | 'symbol';
```

**Caminho:** `src/components/Logo/`

---

### MenuGlobal

Sidebar de navegação global contraída (56px) da plataforma Olist. Exibe os ícones de todos os produtos disponíveis e as ações de conta do usuário, permitindo alternância rápida entre produtos sem expandir o menu.

**Quando usar:**
- Zona A do layout em qualquer produto Olist (ERP, Hub, PDV, Conta Digital, Envios, Ecommerce, Crédito, Agentes de IA)
- Sidebar no estado contraído (icon-only) — espaço horizontal limitado ou preferência do usuário pela visão compacta
- Sempre que houver necessidade de indicar qual produto está ativo via destaque visual no ícone correspondente

**Quando NÃO usar:**
- Navegação interna dentro de um produto (seções e sub-páginas) — usar o painel secundário do ItensMenuGlobal
- Telas mobile sem adaptação responsiva (menu bottom-sheet ou hamburger são mais adequados)
- Menus de navegação ad-hoc sem relação com os produtos Olist — usar primitivos de layout direto

**Combina com:** ProdutosOlistIcons, Logo

> **Nota:** O `produtoSelecionado` aceita tanto produtos (mapeia para ProdutosOlistIcons state='active') quanto itens do rodapé ('Menu do Usuario', 'Notificacoes', 'Configuracoes', 'Central de Ajuda'). A versão expandida (248px com labels) é um componente separado. A prop `produtos` permite ocultar produtos não contratados pelo tenant.

**Props:**
```typescript
/** Lista de produtos a exibir. Padrão: todos os 8 produtos Olist. */
produtos?: ProdutoOlist[];
/** Produto ou funcionalidade atualmente ativa (controlado externamente). */
produtoSelecionado?: ProdutoSelecionado;
/** Monograma de até 2 caracteres exibido no círculo do usuário. */
avatarLabel?: string;
/** URL da foto do usuário (círculo superior, 32×32). */
avatarImageUrl?: string;
/** URL do logo da empresa (círculo inferior, 28×28, sobreposto 7px ao do usuário). */
companyLogoUrl?: string;
/** Monograma de até 2 caracteres para o logo da empresa quando companyLogoUrl não fornecida. */
companyLogoLabel?: string;
/** Exibe badge de notificação no ícone de sino. */
notificacoesPendentes?: boolean;
/** Callback disparado ao clicar em qualquer item de navegação. */
onNavigate?: (destino: ProdutoSelecionado) => void;
/** Zera o border-radius do lado direito quando há painel lateral adjacente (ex: ItensMenuGlobal). */
panelAdjacenteAberto?: boolean;
/** Quando o painel adjacente está fixado no layout (não flyout), o pill logo (N0) volta a ficar visível. */
panelFixado?: boolean;
className?: string;
```

**Caminho:** `src/components/MenuGlobal/`

---

### NotificationCard

Card de uma notificação da central de notificações (ERP e Conta Digital): mostra criticidade, origem, data, mensagem e ações, e indica se já foi lida.

**Quando usar:**
- Listar um evento individual na central de notificações (Pix recebido, boleto vencendo, falha de integração)
- A notificação precisa comunicar criticidade (informativa, positiva, atenção ou crítica) e estado de leitura
- O usuário precisa agir direto do card: ver detalhes, executar uma ação ou marcar como lida/dispensar

**Quando NÃO usar:**
- Feedback imediato após uma ação do usuário — usar Toast
- Aviso persistente no topo da página ou de uma seção — usar Alert Bar / Notice Bar
- Mensagem que bloqueia o fluxo e exige decisão — usar Alert Dialog ou Modal
- Várias notificações do mesmo tipo em sequência (ex.: vários Pix) — usar NotificationStack para agrupar
- Card genérico de conteúdo — usar Card ou Content Card

**Combina com:** NotificationStack (agrupa cards do mesmo tipo), ButtonIcon (gatilho do menu ⋯), Icon (ícone de criticidade, relógio do prazo), Bell (ponto de entrada da central)

> **Nota:** Lida vs. não lida é por fundo: não lida usa surface/container + ponto azul no ícone; lida usa surface/system e título em texto secundário. Barra lateral de 4px só em warning (yellow-500) e negative (red-500); as demais severidades não têm barra. O menu abre à esquerda do gatilho (240px) com 'Marcar como lida/não lida' (alterna conforme `read`) e 'Dispensar notificação'. O conteúdo reserva 44px à direita para o gatilho do menu.

**Props:**
```typescript
severity?: NotificationSeverity;
isRead?: boolean;
icon?: React.ReactNode;
product?: string;
user?: string;
dateTime: string;
title: string;
body?: React.ReactNode;
value?: string;
valueDetail?: string;
deadline?: string;
status?: string;
linkLabel?: string;
linkHref?: string;
onLinkClick?: React.MouseEventHandler<HTMLElement>;
actions?: React.ReactNode;
menuItems?: NotificationCardMenuItem[];
isMenuOpen?: boolean;
onMenuOpenChange?: (isOpen: boolean) => void;
onToggleRead?: () => void;
onDismiss?: () => void;
menuLabel?: string;
```

**Variantes:**
```typescript
type NotificationSeverity = 'informative' | 'positive' | 'warning' | 'negative'
```

**Caminho:** `src/components/NotificationCard/`

---

### NotificationStack

Agrupa notificações do mesmo tipo (ex.: Pix recebidos) em um card-resumo empilhado que expande para a lista de cards individuais.

**Quando usar:**
- Várias notificações do mesmo tipo chegam em sequência e poluiriam a central (Pix recebidos no dia)
- O usuário precisa do resumo (quantidade, total, tarifas) antes de abrir o detalhe
- A central precisa indicar se o grupo tem itens ainda não lidos

**Quando NÃO usar:**
- Há apenas uma notificação — usar NotificationCard direto
- As notificações são de tipos diferentes ou criticidades diferentes — listar cada uma como NotificationCard
- Agrupar por data, não por tipo — usar cabeçalho de seção da lista
- Conteúdo agrupado que não é notificação — usar Accordion

**Combina com:** NotificationCard (itens do grupo expandido), Link (mostrar todos / mostrar menos)

> **Nota:** Recolhido: card-resumo com duas camadas atrás (a mais larga na frente), 16px de respiro inferior. Expandido: cabeçalho com título do grupo + 'mostrar menos', cards recuados 36px com linha-guia vertical de 2px. `leitura=mixed` pinta as camadas atrás com tons de neutro/surface-system e o último card como lido. No DS, a variante `mixed` depende de os itens carregarem seu próprio estado de leitura.

**Props:**
```typescript
groupTitle: string;
summary: React.ReactElement<NotificationCardProps>;
children: React.ReactNode;
isExpanded?: boolean;
defaultExpanded?: boolean;
onExpandedChange?: (isExpanded: boolean) => void;
expandLabel?: string;
collapseLabel?: string;
```

**Caminho:** `src/components/NotificationStack/`

---

### ProdutosOlistIcons

Ícone de produto Olist (Conta Digital, Crédito, Ecommerce, Sistema ERP, Envios, Sistema PDV, Hub de Integração, Agentes de IA) para uso na sidebar de navegação.

**Quando usar:**
- Identificar visualmente um produto Olist na sidebar de navegação (Menu Global)
- Estado ativo/hover de um item de menu (state="active")

**Quando NÃO usar:**
- Ícone genérico de UI (ação, status, navegação) — usar Icon
- Logotipo da marca Olist — usar Logo

> **Nota:** cada produto tem composição própria de camadas SVG (1 a 3 imagens sobrepostas) — não é um set intercambiável como o Icon; novo produto exige mapear os assets certos por state × theme.

**Props:**
```typescript
product: ProdutoOlist;
/** Estado do ícone. 'active' exibe assets brilhantes + gradiente de fundo (dark). */
state?: 'default' | 'active';
/** Tema de cor. 'dark' é usado na sidebar (fundo escuro); 'light' em fundos claros. */
theme?: 'dark' | 'light';
/** Exibe os assets "active" (brilhantes) sem aplicar o gradiente de fundo. Usar no hover do menu. */
hovered?: boolean;
className?: string;
'aria-label'?: string;
```

**Caminho:** `src/components/ProdutosOlistIcons/`

---

