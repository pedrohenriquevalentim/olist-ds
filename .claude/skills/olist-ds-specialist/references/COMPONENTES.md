# Componentes — API Completa

**Auto-gerado por `npm run build`**
**Última atualização:** 2026-07-21
**Versão do pacote:** 1.0.66
**Versão da skill:** 3.15

---

Este arquivo contém a API completa de todos os componentes do design system.

## Componentes Disponíveis (10)

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
label?: string;
leadIcon?: React.ReactNode;
actionIcon?: React.ReactNode;
```

**Caminho:** `src/components/Button/`

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
/** Variante da ação ao lado direito do campo */
action?: 'button' | 'button icon';
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
/** Estado do ícone. 'active' representa o estado ativo/hover no menu. */
state?: 'default' | 'active';
/** Tema de cor. 'dark' é usado na sidebar (fundo escuro); 'light' em fundos claros. */
theme?: 'dark' | 'light';
className?: string;
'aria-label'?: string;
```

**Caminho:** `src/components/ProdutosOlistIcons/`

---

