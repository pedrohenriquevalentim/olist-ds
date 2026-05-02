# Componentes

## Componentes Disponíveis (8)

> Auto-gerado por sync-skill.mjs — NÃO edite manualmente.
> Última atualização: 2026-05-02

### Button

**Import:** `import { Button } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface ButtonProps {
  className?: string;
  /** Tipo visual do botão (conforme design). */
  type?: ButtonType;
  /** Estado visual do botão (conforme design). */
  state?: ButtonState;
  /** Posição do ícone (conforme variantes do design). */
  icon?: ButtonIcon;
  /** Exibe anel de foco (variante do design). */
  hasFocus?: boolean;
  /** Texto do botão. */
  label?: string;
  /** Texto de acessibilidade (se omitido, usa `label`). */
  ariaLabel?: string;
  /** Callback de clique. Não é chamado quando `state="disabled"`. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
```

**Tokens utilizados:** `--shape-size-32px`, `--shape-spacing-12px`, `--shape-border-radius-9999px`, `--font-family-jakarta`, `--font-size-12px`, `--font-line-height-16px`, `--font-weight-medium`, `--shape-spacing-4px`, `--shape-size-16px`, `--shape-border-width-2px`, `--color-blue-500`, `--color-blue-0`, `--color-none-transparent`, `--shape-border-width-1px`, `--color-gray-300` (+11 mais)

---

### Checkbox

**Import:** `import { Checkbox } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface CheckboxProps {
  /** Estado visual do checkbox (conforme variantes do design). */
  state?: CheckboxState;
  /** Se está marcado. */
  isChecked?: boolean;
  /** Se está no estado indeterminado (sobrepõe isChecked visualmente). */
  isIndeterminate?: boolean;
  /** Se exibe o texto do label ao lado do checkbox. */
  hasLabel?: boolean;
  /** Texto do label. */
  label?: string;
  /** ID do input para associar ao label via htmlFor. */
  id?: string;
  /** Callback de mudança. Não é chamado quando state="disabled". */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
```

**Tokens utilizados:** `--shape-spacing-4px`, `--shape-size-40px`, `--shape-border-radius-12px`, `--effects-hover-gray-900-4`, `--effects-pressed-gray-900-12`, `--shape-size-16px`, `--shape-border-radius-4px`, `--shape-border-width-2px`, `--color-gray-300`, `--color-gray-500`, `--color-gray-800`, `--color-gray-100`, `--color-blue-500`, `--effects-disabled-gray-900-8`, `--font-family-jakarta` (+5 mais)

---

### Logo

**Import:** `import { Logo } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface LogoProps {
  className?: string;
  /** Texto alternativo para leitores de tela. */
  alt?: string;
}
```

**Tokens utilizados:** `--shape-size-160px`

---

### MenuErp

**Import:** `import { MenuErp } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface MenuErpProps {
  className?: string;
  /** Estado expandido (248 px) ou contraído (56 px). */
  variant?: "expanded" | "contracted";
  /** Chave do item atualmente selecionado. */
  activeKey?: MenuErpItemKey | null;
  /** Iniciais exibidas no avatar do usuário. */
  userInitials?: string;
  /** Nome/título exibido ao lado do avatar (variante expandida). */
  userName?: string;
  /** Callback acionado ao clicar em qualquer item. */
  onSelect?: (key: MenuErpItemKey) => void;
  /** aria-label para o elemento &lt;nav&gt;. */
  ariaLabel?: string;
}
```

**Tokens utilizados:** `--shape-size-248px`, `--color-gray-0`, `--shape-border-radius-16px`, `--font-family-jakarta`, `--shape-size-56px`, `--shape-size-88px`, `--shape-spacing-8px`, `--shape-size-40px`, `--shape-spacing-12px`, `--shape-border-radius-8px`, `--color-gray-600`, `--color-gray-50`, `--color-gray-900`, `--color-gray-100`, `--shape-border-width-2px` (+19 mais)

---

### MenuSidebar

**Import:** `import { MenuSidebar } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface MenuSidebarProps {
  className?: string;
  /** Exibição expandida (ícone + rótulo) ou contraída (só ícone). */
  variant?: "expanded" | "contracted";
  /** Item ativo; "fechado" = nenhum painel aberto. */
  activeKey?: SidebarKey;
  /** Iniciais exibidas no avatar do usuário. */
  userInitials?: string;
  /** Label do botão de usuário. */
  userName?: string;
  /** Callback acionado ao selecionar qualquer item. */
  onSelect?: (key: SidebarKey) => void;
  /** Aria-label para o elemento nav. */
  ariaLabel?: string;
}
```

**Tokens utilizados:** `--shape-size-320px`, `--shape-size-224px`, `--shape-border-radius-16px`, `--font-family-jakarta`, `--shape-size-248px`, `--color-gray-0`, `--shape-size-56px`, `--shape-spacing-4px`, `--shape-size-32px`, `--shape-spacing-8px`, `--shape-size-40px`, `--shape-spacing-12px`, `--shape-border-radius-8px`, `--color-gray-50`, `--shape-border-width-2px` (+24 mais)

---

### RadioButton

**Import:** `import { RadioButton } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface RadioButtonProps {
  /** Estado visual do radio button (conforme variantes do design). */
  state?: RadioButtonState;
  /** Se está selecionado. */
  isChecked?: boolean;
  /** Se exibe o texto do label ao lado do radio. */
  hasLabel?: boolean;
  /** Texto do label. */
  label?: string;
  /** Nome do grupo de radio buttons. */
  name?: string;
  /** Valor do radio button. */
  value?: string;
  /** ID do input para associar ao label via htmlFor. */
  id?: string;
  /** Callback de mudança. Não é chamado quando state="disabled". */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
```

**Tokens utilizados:** `--shape-spacing-4px`, `--shape-size-40px`, `--shape-border-radius-12px`, `--effects-hover-gray-900-4`, `--effects-pressed-gray-900-12`, `--shape-size-16px`, `--shape-border-radius-9999px`, `--shape-border-width-2px`, `--color-gray-300`, `--color-gray-500`, `--color-gray-800`, `--color-gray-100`, `--color-blue-500`, `--effects-disabled-gray-900-8`, `--shape-size-8px` (+7 mais)

---

### SegmentedButtons

**Import:** `import { SegmentedButtons } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface SegmentedButtonsProps {
  /** Number of segments displayed in the control. */
  segments?: 2 | 3;
  /** 1-indexed segment that is currently active. */
  activeSegment?: 1 | 2 | 3;
  /** Positions the label beside the control (horizontal) or above it (vertical). */
  labelPosition?: 'horizontal' | 'vertical';
  /** Text shown in the label area. */
  labelText?: string;
  /**
   * Display label for each segment (index 0 = segment 1).
   * Defaults to "placeholder Text" for any unspecified entries.
   */
  segmentLabels?: string[];
  /**
   * Show an info icon next to the label.
   * Only visible when `labelPosition` is "vertical".
   */
  hasTooltip?: boolean;
  /** Called with the 1-indexed segment number when the user selects a segment. */
  onChange?: (segment: 1 | 2 | 3) => void;
  /** Additional CSS class applied to the root element. */
  className?: string;
  /** Accessible label for the radio group. Defaults to `labelText`. */
  ariaLabel?: string;
}
```

**Tokens utilizados:** `--shape-spacing-8px`, `--shape-size-16px`, `--font-family-jakarta`, `--font-size-14px`, `--font-weight-semibold`, `--font-line-height-16px`, `--color-gray-900`, `--shape-border-width-2px`, `--color-blue-500`, `--shape-spacing-4px`, `--shape-size-40px`, `--shape-border-width-1px`, `--color-gray-50`, `--shape-border-radius-9999px`, `--shape-size-32px` (+8 mais)

---

### Tag

**Import:** `import { Tag } from '@pedrohenriquevalentim/olist-ds';`

**Arquivos:** tsx ✅ css ✅ test ✅ story ✅

**Props:**
```tsx
interface TagProps {
  className?: string;
  /** Contexto visual do tag (conforme design). */
  context?: TagContext;
  /** Texto exibido no tag. */
  label?: string;
}
```

**Tokens utilizados:** `--shape-size-24px`, `--shape-spacing-4px`, `--shape-spacing-8px`, `--shape-border-radius-9999px`, `--font-family-jakarta`, `--font-size-12px`, `--font-line-height-12px`, `--font-weight-medium`, `--shape-size-16px`, `--color-gray-700`, `--color-gray-0`, `--color-pink-700`, `--color-pink-0`, `--color-blue-700`, `--color-blue-0` (+8 mais)

---

## Regras de Criação de Componentes

Ao construir um novo componente:

1. Criar em `src/components/NomeComponente/` com todos os arquivos (tsx, css, test, stories, index)
2. Usar APENAS tokens de `src/generated/variables.css`
3. Export nomeado (não default)
4. Props tipadas com `interface`
5. Incluir todos os estados: padrão, hover, foco, ativo, desabilitado
6. Adicionar atributos ARIA para acessibilidade
7. Usar CSS Modules (`.module.css`)
8. Após criação, rodar `npm run build` para atualizar esta skill automaticamente
