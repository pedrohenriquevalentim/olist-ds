# Componentes — API Completa

**Auto-gerado por `npm run build`**
**Última atualização:** 2026-06-18
**Versão do pacote:** 1.0.22
**Versão da skill:** 3.2

---

Este arquivo contém a API completa de todos os componentes do design system.

## Componentes Disponíveis (7)

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

### InputSelect

**Props:**
```typescript
selectType?: 'single' | 'autocomplete';
value?: string;
onChange?: (value: string) => void;
```

**Caminho:** `src/components/InputSelect/`

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

