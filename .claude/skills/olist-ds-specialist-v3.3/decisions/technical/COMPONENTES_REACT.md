# Decisão Técnica: Convenções de Componentes React

**Categoria:** Técnica
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist-v3.3/references/COMPONENTES.md`, `references/MAPA_FONTES.md`

---

## Decisão

Todo componente do design system segue uma estrutura de arquivos padronizada e convenções de código fixas. Desvios geram inconsistência no Storybook e na publicação NPM.

---

## Estrutura de Arquivos Obrigatória

```
src/components/NomeComponente/
  ├── NomeComponente.tsx          # Componente React
  ├── NomeComponente.module.css   # Estilos com CSS Modules
  ├── NomeComponente.test.tsx     # Testes com Vitest + RTL
  ├── NomeComponente.stories.tsx  # Story do Storybook
  └── index.ts                    # Re-export
```

**Antes de criar**, verificar se o componente já existe em `src/components/` e na skill (`references/COMPONENTES.md`).

---

## Convenções de Código

### Declaração
- Arrow functions com export nomeado — nunca default export
- Nomes em PascalCase

```tsx
// ✅ correto
export const Button = ({ label, ...props }: ButtonProps) => { ... }

// ❌ errado
export default function button() { ... }
```

### Props
- Tipadas com `interface` (não `type`) — sempre exportar a interface junto ao componente
- Estender atributos nativos HTML correspondentes
- Boolean props com prefixo `is` / `has`

```tsx
// ✅ correto
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  hasError?: boolean;
  icon?: React.ReactNode;
}
```

### Variantes e Estados
- Replicar TODAS as variantes visíveis no Figma (tamanho, cor, estado)
- CSS Modules com tokens para cada variante/estado

### Componentes Complexos (Select, Dropdown, Autocomplete)
- Separar Trigger e Popover/List em responsabilidades distintas (funções auxiliares ou sub-componentes no mesmo arquivo)
- Multiselect: usar Generics ou Union Types rigorosos para `value` e `onChange`
- Gerenciar estado interno de visibilidade da lista
- Implementar click-outside para fechar a lista

---

## Testes Obrigatórios (Vitest + RTL)

Cobrir obrigatoriamente:
- Renderização básica
- Variantes principais
- Atributos ARIA
- Injeção correta de `ReactNode` (ícones)

```bash
npm run test:run
```

---

## Storybook (v10)

- Props de ícone: `argTypes` com `mapping` e `control: { type: 'select' }`
- Componentes com opções (Selects): mock robusto de dados na Story
- Todas as descrições e stories em **português**

```bash
npm run storybook
```

---

## Referências na Skill

- API completa dos componentes existentes → `references/COMPONENTES.md`
- Estrutura de pastas do repositório → `references/MAPA_FONTES.md`
- Checklist de revisão de qualidade → `references/CHECKLIST_REVISAO.md`

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
