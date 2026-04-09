# Olist Design System

Sistema de design construído com um pipeline AI-First que conecta Figma, Claude, Gemini e Next.js para transformar decisões visuais em componentes React prontos para produção.

O projeto nasceu da necessidade de criar uma ponte confiável entre design e código. Em vez de traduzir manualmente cada componente do Figma para React, o pipeline usa inteligência artificial em cada etapa: Claude Opus lê os designs via MCP e gera componentes tipados, Gemini Pro cria testes automatizados, e o CI/CD publica tudo sem intervenção manual.

O resultado é um design system onde cada componente consome design tokens exportados diretamente do Figma, tem testes gerados por IA, documentação interativa no Storybook, e pode ser instalado como pacote NPM em qualquer projeto React ou Next.js.

---

## Arquitetura do Pipeline

```
FIGMA
│  Variables + Componentes visuais
│
├──→ Tokens Studio (plugin)
│    Exporta variáveis como JSON
│
├──→ Style Dictionary + sd-transforms
│    JSON → CSS Custom Properties (variables.css)
│
├──→ Claude Code + Figma MCP
│    Lê componente no Figma → Gera React + TypeScript + CSS Modules
│    Designer revisa e refina
│
├──→ Gemini Pro (API)
│    Lê código dos componentes → Gera testes (Vitest) e stories (Storybook)
│
├──→ Storybook
│    Documentação interativa com autodocs, foundations e catálogo visual
│
├──→ GitHub Actions (CI/CD)
│    Lint → Tokens → Testes → Storybook → Publicação NPM
│
└──→ Next.js (ambiente de consumo)
     Importa o pacote publicado e renderiza todos os componentes
```

---

## Stack

| Ferramenta | Versão | Função |
|---|---|---|
| React | 19 | Biblioteca de UI |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Bundler e dev server |
| Vitest | 4 | Testes unitários |
| Testing Library | 16 | Testes de componentes React |
| Storybook | 10 | Documentação interativa |
| Style Dictionary | 5 | Transformação de design tokens |
| @tokens-studio/sd-transforms | 2 | Ponte entre Tokens Studio e Style Dictionary |
| Claude Code | — | Geração de componentes via IA (Claude Opus 4.6) |
| Gemini Pro | — | Geração automática de testes e stories |
| Next.js | 16 | Ambiente de consumo e teste |
| GitHub Actions | — | CI/CD |
| GitHub Packages | — | Registro NPM privado |

---

## Pré-requisitos

Antes de clonar o projeto, instale:

### Node.js (v22+)

```bash
# macOS
brew install node

# Windows
winget install OpenJS.NodeJS.LTS

# Linux
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Git

```bash
# macOS
xcode-select --install

# Windows
winget install Git.Git

# Linux
sudo apt-get install git
```

### Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Requer uma conta Anthropic com acesso ao Claude Pro ou API key.

### Python 3.12+ (para scripts auxiliares)

```bash
# macOS
brew install python

# Windows
winget install Python.Python.3.12

# Linux
sudo apt-get install python3 python3-pip
```

---

## Chaves de API necessárias

| Serviço | Onde obter | Variável de ambiente |
|---|---|---|
| Figma | Figma → Settings → Personal Access Tokens | Token configurado no MCP |
| Gemini Pro | https://aistudio.google.com/apikey | `GEMINI_API_KEY` |
| GitHub | Settings → Developer settings → Personal access tokens | Token no `.npmrc` |

### Configurar variáveis de ambiente

```bash
# Adicione ao ~/.zshrc ou ~/.bashrc
export GEMINI_API_KEY="sua-chave-gemini"
```

---

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/pedrohenriquevalentim/olist-ds.git
cd olist-ds
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Gere os design tokens

```bash
npm run build:tokens
```

Isso lê os JSONs em `src/tokens/` e gera `src/generated/variables.css` com todas as CSS Custom Properties.

### 4. Verifique a instalação

```bash
npm run build
```

Se compilar sem erros, o ambiente está pronto.

---

## Estrutura do Projeto

```
olist-ds/
├── .github/
│   └── workflows/
│       └── pipeline.yml              # CI/CD (lint → test → storybook → publish)
├── .storybook/
│   ├── main.ts                       # Configuração do Storybook
│   ├── preview.ts                    # Tokens CSS + ordenação do menu
│   ├── preview-head.html             # Google Fonts (Plus Jakarta Sans)
│   ├── manager.ts                    # Tema visual personalizado
│   └── theme.ts                      # Cores e branding Olist
├── scripts/
│   ├── generate-tests.mjs            # Gera testes via Gemini Pro
│   ├── generate-stories.mjs          # Gera stories via Gemini Pro
│   ├── generate-index.mjs            # Gera src/index.ts + src/catalog.ts
│   └── copy-css.mjs                  # Copia CSS Modules para dist/
├── src/
│   ├── tokens/                       # JSONs exportados do Figma (Tokens Studio)
│   │   └── base.json
│   ├── generated/                    # Saída do Style Dictionary (não editar)
│   │   ├── variables.css
│   │   └── tokens.js
│   ├── components/                   # Componentes React
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.test.tsx       # Gerado pelo Gemini
│   │   │   ├── Button.stories.tsx    # Gerado pelo Gemini
│   │   │   └── index.ts
│   │   ├── MenuErp/
│   │   ├── Checkbox/
│   │   └── ...
│   ├── docs/                         # Páginas MDX do Storybook
│   │   ├── Introduction.mdx
│   │   └── foundations/
│   │       ├── Colors.mdx
│   │       ├── Typography.mdx
│   │       └── Spacing.mdx
│   ├── index.ts                      # Exportações (auto-gerado)
│   ├── catalog.ts                    # Lista de componentes (auto-gerado)
│   ├── css-modules.d.ts              # Declaração de tipos para CSS Modules
│   └── test-setup.ts                 # Setup do Vitest
├── CLAUDE.md                         # Instruções para o Claude Code
├── config.mjs                        # Configuração do Style Dictionary
├── tsconfig.json
├── vite.config.ts
├── package.json
└── .npmrc
```

---

## Comandos

### Desenvolvimento

```bash
npm run dev                  # Servidor de desenvolvimento (Vite)
npm run storybook            # Storybook em http://localhost:6006
```

### Tokens

```bash
npm run build:tokens         # Gera CSS vars a partir dos JSONs do Figma
```

### Geração com IA

```bash
npm run generate:tests       # Gera testes (apenas componentes sem teste)
npm run generate:tests:all   # Regenera testes de todos os componentes
npm run generate:stories     # Gera stories (apenas componentes sem story)
npm run generate:stories:all # Regenera stories de todos os componentes
npm run generate:all         # Gera testes + stories faltantes
```

### Testes

```bash
npm test                     # Vitest em modo watch
npm run test:run             # Roda uma vez e encerra
npm run test:coverage        # Com relatório de cobertura
```

### Build e Publicação

```bash
npm run build                # Tokens + index.ts + TypeScript + CSS
npm run build-storybook      # Build estático do Storybook
npm run pipeline             # Tudo em sequência: tokens → tests → stories → storybook
npm version patch            # Incrementa versão (1.0.1 → 1.0.2)
npm publish                  # Publica no GitHub Packages
```

---

## Fluxo de Trabalho com Claude Code

### Configuração inicial

```bash
# Configure o modelo
claude config set model claude-opus-4-6

# Conecte o MCP do Figma
claude mcp add figma-mcp --url https://mcp.figma.com/mcp

# Inicie o Claude Code na pasta do projeto
cd olist-ds
claude
```

### Criar um componente a partir do Figma

No prompt do Claude Code:

```
Leia o componente Figma neste link: [COLE O LINK]
1. Gere um componente React + TypeScript que:
  - Use os design tokens do meu arquivo src/generated/variables.css
  - Inclua todas as variantes visíveis no design
  - Adicione atributos ARIA de acessibilidade
  - Siga o padrão dos componentes em src/components/
  - Considere todos os arquivos nessa geração (tsx, css, test, stories, index)
2. Rode npm run build:tokens
3. Rode npm run test:run — se falhar, corrija e rode novamente
4. Rode npm run build-storybook
5. Exporte o componente no src/index.ts
6. Faça git add, commit e push
```

O Claude Code:
1. Lê o design via MCP do Figma
2. Gera todos os arquivos do componente consumindo tokens CSS
3. Roda os testes automaticamente
4. Corrige se houver falhas
5. Cria o Storybook
6. Exporta o componente dentro de src/index.ts
7. Faz o git add, commit e push

---

## Geração Automática com Gemini

O pipeline usa a API do Gemini Pro para gerar testes unitários e stories do Storybook automaticamente.

### Como funciona

1. O script lê cada arquivo `.tsx` em `src/components/`
2. Envia o código-fonte para a API do Gemini Pro
3. O Gemini analisa props, variantes e interações
4. Retorna um arquivo `.test.tsx` ou `.stories.tsx` completo
5. O script salva na pasta do componente

### Executar

```bash
# Variável de ambiente obrigatória
export GEMINI_API_KEY="sua-chave"

# Gera apenas os faltantes
npm run generate:all

# Ou individualmente
npm run generate:tests
npm run generate:stories
```

---

## Design Tokens

### Origem

Os tokens são definidos no Figma usando o plugin **Tokens Studio** e exportados como JSON para `src/tokens/base.json`.

### Transformação

O Style Dictionary com `@tokens-studio/sd-transforms` converte o JSON em CSS Custom Properties:

```bash
npm run build:tokens
```

### Saída

`src/generated/variables.css`:

```css
:root {
  --color-blue-500: #0a4ee4;
  --color-gray-0: #fcfbf8;
  --font-family-jakarta: 'Plus Jakarta Sans';
  --font-size-16px: 16px;
  --shape-spacing-16px: 16px;
  --shape-border-radius-8px: 8px;
  /* ... */
}
```

### Uso nos componentes

```css
/* ✅ Correto — usa token */
.button {
  background: var(--color-blue-500);
  border-radius: var(--shape-border-radius-8px);
  padding: var(--shape-spacing-8px) var(--shape-spacing-16px);
  font-family: var(--font-family-jakarta), sans-serif;
}

/* ❌ Errado — valor hardcoded */
.button {
  background: #0a4ee4;
  border-radius: 8px;
}
```

---

## Storybook

### Executar localmente

```bash
npm run storybook
```

Abre em `http://localhost:6006`.

### Estrutura do Storybook

```
📄 Introduction
📁 Foundations
   ├── Colors
   ├── Typography
   └── Spacing
📁 Components
   ├── Button
   ├── Checkbox
   ├── MenuErp
   └── ...
```

### Adicionar páginas de documentação

Crie arquivos `.mdx` em `src/docs/`:

```mdx
import { Meta } from 'storybook/blocks';

<Meta title="Foundations/NomeDaPagina" />

# Título

Conteúdo em Markdown com suporte a JSX.
```

---

## Ambiente de Consumo (Next.js)

Um projeto Next.js separado serve como ambiente real de teste dos componentes.

### Setup

```bash
npx create-next-app@latest olist-ds-next
cd olist-ds-next

# Configure o registro privado
echo "@pedrohenriquevalentim:registry=https://npm.pkg.github.com" > .npmrc

# Instale o design system
npm install @pedrohenriquevalentim/olist-ds

# Ou instale localmente (para desenvolvimento)
npm install ../olist-ds
```

### Configurar o layout

`app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@pedrohenriquevalentim/olist-ds/src/generated/variables.css";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-family-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Olist Design System",
  description: "Ambiente de consumo e teste do Design System",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Importar componentes

```tsx
import { Button, MenuErp } from '@pedrohenriquevalentim/olist-ds';
```

O catálogo de componentes (`src/catalog.ts`) permite renderizar todos automaticamente sem editar a página manualmente a cada novo componente.

---

## CI/CD

O pipeline roda automaticamente a cada push para `main`:

```
Push → Lint → Build Tokens → Gerar Testes (Gemini) → Rodar Testes
  → Build Storybook → Deploy GitHub Pages → Publicar GitHub Packages
```

### Secrets necessários no GitHub

No repositório → Settings → Secrets and variables → Actions:

| Secret | Valor |
|---|---|
| `GEMINI_API_KEY` | Chave da API do Google AI Studio |

O `GITHUB_TOKEN` é gerado automaticamente pelo GitHub Actions.

### Publicar manualmente

```bash
npm version patch    # 1.0.1 → 1.0.2
npm publish
git push && git push --tags
```

---

## Criar um Novo Componente (Checklist)

1. **No Claude Code**, peça para ler o componente no Figma e gerar os arquivos
2. Verifique que foram criados:
   - `src/components/Nome/Nome.tsx`
   - `src/components/Nome/Nome.module.css`
   - `src/components/Nome/index.ts`
3. Rode `npm run generate:all` para gerar teste e story via Gemini
4. Rode `npm run test:run` para validar
5. Rode `npm run storybook` para visualizar
6. Rode `npm run build` — o componente entra automaticamente no `index.ts` e `catalog.ts`
7. Publique: `npm version patch && npm publish`
8. No Next.js: `npm install ../olist-ds` — componente aparece no catálogo

---

## Convenções

### Estrutura de cada componente

```
src/components/NomeComponente/
├── NomeComponente.tsx          # Componente React
├── NomeComponente.module.css   # Estilos com CSS Modules
├── NomeComponente.test.tsx     # Testes (Vitest + Testing Library)
├── NomeComponente.stories.tsx  # Story (Storybook CSF3)
└── index.ts                    # Re-export
```

### Código

- Componentes como arrow functions com export nomeado
- Props tipadas com `interface`
- Nomes de arquivos e componentes em PascalCase
- Unidades em `rem` nos tokens, nunca `px` hardcoded
- Descrições de testes e stories em português

### Acessibilidade

- Todo elemento interativo tem `role` e `aria-label`
- Botões funcionam com Enter e Space
- Contraste mínimo 4.5:1 (WCAG AA)
- Imagens têm `alt`

### Tokens

- Usar exclusivamente variáveis CSS de `src/generated/variables.css`
- Nunca valores hardcoded para cores, espaçamentos, fontes ou bordas
- Formato: `var(--color-blue-500)`, `var(--shape-spacing-16px)`

---

## Licença

Projeto proprietário — uso restrito à equipe Olist.
