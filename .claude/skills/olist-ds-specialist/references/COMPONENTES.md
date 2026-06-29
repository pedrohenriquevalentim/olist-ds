# Componentes — API Completa

**Auto-gerado por `npm run build`**
**Última atualização:** 2026-06-29
**Versão do pacote:** 1.0.54
**Versão da skill:** 3.8

---

Este arquivo contém a API completa de todos os componentes do design system.

## Componentes Disponíveis (10)

### Button

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

**Props:**
```typescript
label?: string;
isIndeterminate?: boolean;
```

**Caminho:** `src/components/Checkbox/`

---

### Chip

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

**Props:**
```typescript
selectType?: 'single' | 'autocomplete';
value?: string;
onChange?: (value: string) => void;
```

**Caminho:** `src/components/InputSelect/`

---

### InputText

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

**Props:**
```typescript
/** Variante de tamanho do logo. */
size?: 'default' | 'simple' | 'symbol';
```

**Caminho:** `src/components/Logo/`

---

### ProdutosOlistIcons

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

