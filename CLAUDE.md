# Olist Design System — Instruções para o Claude

## Sobre o Projeto
Design System da Olist. Componentes React + TypeScript com tokens vindos do Figma via Style Dictionary.

## Stack Obrigatória
- React 19 + TypeScript
- CSS Modules com variáveis CSS (design tokens)
- Vitest + Testing Library para testes
- Storybook 10 para documentação
- Style Dictionary + @tokens-studio/sd-transforms para tokens
- GitHub Packages para publicação NPM privado

## Tokens
- SEMPRE importe e use os tokens CSS de src/generated/variables.css
- SEMPRE use variáveis CSS: var(--color-gray-0), var(--font-family-base), etc.
- NUNCA use valores hardcoded para cores, espaçamentos ou fontes
- Unidades em rem, nunca px

## Estrutura de Cada Componente
Ao criar um componente, SEMPRE gere todos estes arquivos:

src/components/NomeComponente/
  ├── NomeComponente.tsx          # Componente React
  ├── NomeComponente.module.css   # Estilos com CSS Modules
  ├── NomeComponente.test.tsx     # Testes com Vitest
  ├── NomeComponente.stories.tsx  # Story do Storybook
  └── index.ts                    # Re-export

## Convenções
- Componentes como arrow functions com export nomeado
- Props tipadas com interface (não type) — exporte sempre a interface junto ao componente
- Nomes em PascalCase
- Descrições e stories em português
- Estenda atributos nativos HTML nas Props (ex: `ButtonHTMLAttributes<HTMLButtonElement>`)

## Geração de Componentes a partir do Figma

Quando receber um link do Figma para implementar como componente React, siga este fluxo obrigatório:

### 1. Leitura do Design (Figma MCP)
1. Chame `get_design_context` com o `nodeId` e `fileKey` extraídos da URL do Figma
2. Se a resposta for grande ou truncada, chame `get_metadata` primeiro para mapear a árvore de nós
3. Chame `get_screenshot` para ter referência visual
4. Baixe assets referenciados (imagens, SVGs) antes de implementar
5. Valide o resultado renderizado contra o screenshot antes de concluir

### 2. Tokens e Estilos
- Consuma EXCLUSIVAMENTE os tokens de `src/generated/variables.css` via `var(--nome-do-token)`
- NUNCA use valores hardcoded ou unidades em `px` — use `rem`
- Elementos de texto internos (`<label>`, helper text, placeholder, mensagem de erro) DEVEM ter classes CSS próprias no `.module.css` com `font-weight`, `font-size` e `line-height` explícitos via tokens — nunca confie nos defaults do navegador

### 3. Ícones
- Props de ícone devem usar EXCLUSIVAMENTE `React.ReactNode` — nunca instale pacotes externos
- NÃO passe cores via prop para ícones; gerencie cor pelo CSS pai usando `currentColor` nos SVGs (funciona automaticamente em hover, active, disabled)
- Renderize ícones condicionalmente no JSX

### 4. Variantes e Estados
- Replique TODAS as variantes visíveis no Figma (tamanho, cor, estado)
- Use CSS Modules com tokens para cada variante/estado

### 5. Componentes Complexos (Select, Dropdown, Autocomplete)
- Separe Trigger e Popover/List em responsabilidades distintas internamente (funções auxiliares ou sub-componentes no mesmo arquivo)
- Se houver variante `multiselect`, use Generics ou Union Types rigorosos para `value` e `onChange` (Array vs Elemento Único)
- Gerencie estado interno de visibilidade da lista
- Implemente click-outside para fechar a lista

### 6. Acessibilidade Avançada (W3C)
- Todo elemento interativo: `role` + `aria-label`
- Selects/Dropdowns: Trigger com `role="combobox"` ou `role="button"`, lista com `role="listbox"`, itens com `role="option"`
- Navegação por teclado OBRIGATÓRIA: `ArrowUp`, `ArrowDown` (navegar na lista), `Enter` (selecionar), `Escape` (fechar), `Space`
- Botões simples: `Enter` e `Space`
- Contraste mínimo 4.5:1

### 7. Testes (Vitest + RTL)
Cubra obrigatoriamente:
- Renderização básica
- Variantes principais
- Atributos ARIA
- Injeção correta de `ReactNode` (ícones)

### 8. Storybook (v10)
- Props de ícone: `argTypes` com `mapping` e `control: { type: 'select' }`
- Componentes com opções (Selects): forneça mock robusto de dados na Story
- Todas as descrições e stories em português

### 9. Saída Esperada
Gere EXATAMENTE cinco arquivos em blocos de código separados:
- `NomeComponente.tsx`
- `NomeComponente.module.css`
- `NomeComponente.test.tsx`
- `NomeComponente.stories.tsx`
- `index.ts` (re-export do componente e da interface)

Consulte os componentes em `src/components/` como referência de padrão antes de implementar.

## Assets do Figma MCP
- Se o MCP retornar URL localhost para imagem/SVG, use diretamente
- NÃO instale pacotes de ícones, use os assets do Figma
- NÃO crie placeholders se uma URL de asset for fornecida
- Ao importar arquivos `.svg` como módulos TypeScript, a declaração de tipo já existe em `src/css-modules.d.ts`:
  ```ts
  declare module '*.svg' {
    const src: string;
    export default src;
  }
  ```
  Se não estiver lá, adicione antes de usar `import foo from '*.svg'` — caso contrário o `npm run build` falhará com TS2307.

## Comandos Disponíveis
- npm run build:tokens     → gera variáveis CSS a partir dos tokens JSON
- npm run dev              → servidor de desenvolvimento
- npm run test:run         → roda testes uma vez
- npm run storybook        → abre o Storybook
- npm run build-storybook  → build do Storybook
- npm run build            → compila tokens + TypeScript
- npm run pipeline         → build:tokens + generate:all + test:run + build-storybook
- npm run lint             → verifica qualidade do código

## Fluxo de Publicação
Após criar/alterar componentes:
1. npm run build:tokens
2. npm run test:run
3. npm run build-storybook
4. git add . && git commit -m "feat: descricao"
5. npm version patch
6. git push && git push --tags

## Fluxo Reverso: PRD → Figma

Use a skill `$olist-ds-specialist` para este fluxo. As regras abaixo são um resumo — a skill contém o workflow completo.

### Ao receber um PRD ou solicitação de tela:

1. Leia o PRD/briefing completo
2. Leia `.claude/skills/olist-ds-specialist-v3.5/references/VISAO_GERAL.md` (sempre primeiro)
3. Leia `.claude/skills/olist-ds-specialist-v3.5/figma-config.json` ANTES de qualquer operação com Figma MCP
4. Identifique os componentes do design system necessários consultando as libraries na ordem de prioridade:
   - **AI Components** (master — preferência absoluta)
   - **ERP components**
   - **ERP recursos**
   - **ERP style guide**
   - **[design system] components web**
5. Use `search_design_system` sempre com `includeLibraryKeys: searchPriority` (do figma-config.json)
6. Liste TODAS as telas identificadas e aguarde validação antes de criar
7. Crie tela por tela com `use_figma`, aguardando feedback a cada entrega

### Regras para geração de telas:
- SEMPRE leia `figma-config.json` para obter `searchPriority` e `blockedLibraries` antes de buscar componentes
- NUNCA use libraries de `blockedLibraries` mesmo que apareçam em buscas
- SEMPRE use instâncias reais de componentes do DS — não construa do zero o que já existe
- SEMPRE use Auto Layout (nunca posicionamento absoluto)
- Defina `layoutSizing` APÓS `appendChild` (regra crítica da Figma Plugin API)
- `counterAxisAlignItems` aceita apenas: `MIN` `MAX` `CENTER` `BASELINE`
- Nomeie cada layer semanticamente: "HeaderContainer", "NavigationSidebar", "ContentArea"
- Siga a hierarquia de espaçamento: 4, 8, 12, 16, 24, 32, 40, 48, 64
- Use os border-radius definidos nos tokens (8px padrão, 4px pequeno, 9999px pill)
- Fonte primária: Plus Jakarta Sans

### Estrutura padrão de uma tela:
- Frame principal: 1440x900 (desktop) ou 375x812 (mobile)
- Sidebar: 280px largura quando aplicável
- Content area: flex-grow com padding 24px ou 32px
- Header: altura 64px quando aplicável