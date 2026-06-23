# Decisão Técnica: Gerenciamento de Ícones e Assets SVG

**Categoria:** Técnica
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist-v3.5/references/COMPONENTES.md`

---

## Decisão

Ícones são tratados como `React.ReactNode` e gerenciados exclusivamente via assets do Figma MCP ou do repositório. Nenhum pacote externo de ícones é instalado.

---

## Regras

### Props de ícone
- Sempre `React.ReactNode` — nunca `string`, `IconType` ou similar
- Renderizar condicionalmente no JSX

```tsx
// ✅ correto
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const Button = ({ icon, children, ...props }: ButtonProps) => (
  <button {...props}>
    {icon && <span className={styles.icon}>{icon}</span>}
    {children}
  </button>
);
```

### Cor dos ícones
- Nunca passar cor via prop para ícones
- Gerenciar cor pelo CSS pai usando `currentColor` nos SVGs
- Isso garante que hover, active e disabled funcionam automaticamente sem lógica extra

```css
/* ✅ no .module.css */
.icon svg {
  fill: currentColor;
  /* ou */
  stroke: currentColor;
}
```

### Fonte dos ícones
- Usar assets fornecidos pelo Figma MCP (`download_assets`)
- Se o MCP retornar URL `localhost` para um SVG, usar diretamente — nunca substituir por placeholder
- Armazenar em `src/assets/` ou inline como componente React em `src/components/ui/icons/`

### Declaração de tipo para `.svg`

O arquivo `src/css-modules.d.ts` deve conter:

```ts
declare module '*.svg' {
  const src: string;
  export default src;
}
```

Se não estiver lá, adicionar antes de usar `import foo from '*.svg'` — caso contrário o build falha com `TS2307`.

### Storybook
- Props de ícone: usar `argTypes` com `mapping` e `control: { type: 'select' }` para permitir seleção visual na UI do Storybook

---

## Referências na Skill

- Componentes com ícones existentes → `references/COMPONENTES.md`
- Workflow de download de assets do Figma → `figma-config.json` (buildWorkflow)

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
