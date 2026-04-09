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
- Props tipadas com interface (não type)
- Nomes em PascalCase
- Descriçõese stories em português

## Acessibilidade
- Todo elemento interativo deve ter role e aria-label
- Botões devem funcionar com Enter e Space
- Contraste mínimo 4.5:1

## Assets do Figma MCP
- Se o MCP retornar URL localhost para imagem/SVG, use diretamente
- NÃO instale pacotes de ícones, use os assets do Figma
- NÃO crie placeholders se uma URL de asset for fornecida

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
1.ld:tokens
2. npm run test:run
3. npm run build-storybook
4. git add . && git commit -m "feat: descricao"
5. npm version patch
6. git push && git push --tags
