# Olist Design System

Pipeline AI-First que conecta Figma, Claude, Gemini e Next.js para transformar decisões visuais em componentes React prontos para produção — e transformar SDDs em protótipos no Figma automaticamente.

O design system é um pacote NPM privado (`@pedrohenriquevalentim/olist-ds`) publicado no GitHub Packages. Cada componente consome design tokens exportados do Figma, tem testes gerados por IA, documentação interativa no Storybook, e pode ser instalado em qualquer projeto React ou Next.js.

A skill integrada permite que crie telas a partir de SDDs usando o design system como base, via Claude.ai ou Claude Code.

---

## Arquitetura do Pipeline

```
FIGMA (source of truth)
│  Variables + Componentes visuais
│
├──→ Tokens Studio (plugin)
│    Exporta variáveis como JSON (formato DTCG)
│
├──→ Style Dictionary + sd-transforms
│    JSON → CSS Custom Properties (variables.css)
│    Transforms customizados: aspas em font-family, px em valores numéricos
│
├──→ Claude Code + Figma MCP
│    Lê componente no Figma → gera React + TypeScript + CSS Modules
│    Designer revisa e refina
│
├──→ Gemini Pro (API)
│    Lê código dos componentes → gera testes (Vitest) e stories (Storybook)
│
├──→ Storybook
│    Documentação interativa com autodocs, foundations e catálogo visual
│
├──→ CI/CD (GitHub Actions)
│    Lint → Tokens → Testes → Storybook → Publicação NPM
│
├──→ Next.js (ambiente de consumo)
│    Importa o pacote publicado e renderiza todos os componentes
│
└──→ Skill corporativa (auto-sync)
     Atualiza documentação da skill a cada build
     Disponível para toda a empresa via Claude.ai ou Claude Code
```

### Fluxo reverso (PRD → Figma)

```
SDD / PRD
│
├──→ Claude.ai + Conector Figma (sem terminal)
│    Cola o contexto de tokens + SDD → Claude cria telas no Figma
│
└──→ Claude Code + Figma MCP (via terminal)
     Lê SDD + consulta componentes existentes → gera telas no canvas
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
| Claude Code (Opus 4.6) | — | Geração de componentes via Figma MCP |
| Gemini Pro (API) | 2.5 | Geração automática de testes e stories |
| Next.js | 16 | Ambiente de consumo e teste |
| GitHub Actions | — | CI/CD |
| GitHub Packages | — | NPM privado |
| Plus Jakarta Sans | — | Fonte primária (Google Fonts) |

---

## Pré-requisitos

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

Requer conta Anthropic com acesso ao Claude Pro ou API key.

---

## Chaves de API

| Serviço | Onde obter | Variável de ambiente |
|---|---|---|
| Figma | Figma → Settings → Personal Access Tokens | Configurado no MCP |
| Gemini Pro | https://aistudio.google.com/apikey | `GEMINI_API_KEY` |
| GitHub | Settings → Developer settings → Personal access tokens | Token no `.npmrc` |

```bash
# Adicione ao ~/.zshrc
export GEMINI_API_KEY="sua-chave-gemini"
```

Token GitHub precisa dos escopos: `repo`, `write:packages`, `read:packages`, `workflow`.

---

## Instalação

```bash
git clone https://github.com/pedrohenriquevalentim/olist-ds.git
cd olist-ds
npm install
npm run build
```

---

## Estrutura do Projeto

```
olist-ds/
├── .github/workflows/pipeline.yml        # CI/CD
├── .claude/skills/olist-ds-skill/        # Skill corporativa (auto-sync)
│   ├── SKILL.md                          # Role, escopo, decision flow
│   ├── DESIGN.md                         # Google Labs spec (cross-tool)
│   └── references/
│       ├── OLIST_DS_OVERVIEW.md          # Brand, princípios, tokens rápidos
│       ├── COLORS.md                     # Sistema de cores com DO/DON'T
│       ├── TYPOGRAPHY.md                 # Fontes, tamanhos, composições
│       ├── SPACING.md                    # Escala, layout grid, border-radius
│       ├── COMPONENTS.md                 # Componentes com props (auto-gerado)
│       ├── PATTERNS.md                   # Padrões de página (table, form, dashboard)
│       ├── SOURCE_MAP.md                 # Mapa de arquivos (auto-gerado)
│       ├── SDD_TO_SCREEN.md             # Guia: SDD → decisões de UI
│       └── VISUAL_REVIEW_CHECKLIST.md   # Checklist de revisão visual
├── .storybook/
│   ├── main.ts                           # Paths + addons
│   ├── preview.ts                        # Autodocs + tokens + font decorator
│   ├── preview-head.html                 # Google Fonts
│   ├── theme.ts                          # Branding Olist
│   └── manager.ts                        # Aplica tema
├── scripts/
│   ├── generate-tests.mjs                # Gemini → .test.tsx
│   ├── generate-stories.mjs              # Gemini → .stories.tsx
│   ├── generate-index.mjs                # Gera index.ts + catalog.ts
│   ├── copy-css.mjs                      # Copia .module.css para dist/
│   └── sync-skill.mjs                    # Atualiza skill com estado atual do DS
├── src/
│   ├── tokens/base.json                  # JSON do Tokens Studio (DTCG)
│   ├── generated/                        # Saída do Style Dictionary (não editar)
│   │   ├── variables.css
│   │   └── tokens.js
│   ├── components/
│   │   └── [ComponentName]/
│   │       ├── ComponentName.tsx
│   │       ├── ComponentName.module.css
│   │       ├── ComponentName.test.tsx
│   │       ├── ComponentName.stories.tsx
│   │       └── index.ts
│   ├── docs/                             # Páginas MDX do Storybook
│   │   ├── Introduction.mdx
│   │   └── foundations/
│   ├── index.ts                          # Auto-gerado
│   ├── catalog.ts                        # Auto-gerado
│   ├── css-modules.d.ts                  # Tipos para CSS Modules
│   └── test-setup.ts                     # Setup do Vitest
├── CLAUDE.md                             # Instruções para Claude Code
├── DESIGN.md                             # Google Labs spec
├── config.mjs                            # Style Dictionary + transforms
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Comandos

### Desenvolvimento

```bash
npm run dev                    # Vite dev server (porta 5173)
npm run storybook              # Storybook (porta 6006)
```

### Tokens

```bash
npm run build:tokens           # JSON → CSS Custom Properties
```

### Geração com IA

```bash
npm run generate:tests         # Gemini → testes faltantes
npm run generate:tests:all     # Regenera todos os testes
npm run generate:stories       # Gemini → stories faltantes
npm run generate:stories:all   # Regenera todas as stories
npm run generate:all           # Testes + stories faltantes
```

### Testes

```bash
npm test                       # Vitest watch mode
npm run test:run               # Roda uma vez
npm run test:coverage          # Com relatório de cobertura
```

### Build

```bash
npm run build                  # Tokens + index + TypeScript + CSS + sync skill
npm run build-storybook        # Build estático do Storybook
npm run pipeline               # Build + generate + test + storybook
```

### Publicação

```bash
npm run release                # Pipeline + version patch + publish + push
```

Executa em sequência:

1. Gera tokens CSS
2. Gera testes e stories faltantes (Gemini)
3. Roda todos os testes
4. Builda o Storybook
5. Compila TypeScript + gera index.ts + copia CSS
6. Sincroniza a skill corporativa
7. Incrementa versão (patch)
8. Publica no GitHub Packages
9. Push do código e das tags

### Controle manual de versão

```bash
npm run pipeline
npm version minor              # 1.0.5 → 1.1.0 (novo componente)
npm version major              # 1.1.0 → 2.0.0 (breaking change)
npm publish
git push && git push --tags
```

### Skill

```bash
npm run sync:skill             # Atualiza skill com estado atual do DS
```

---

## Fluxo de Trabalho com Claude Code

### Configuração

```bash
claude config set model claude-opus-4-6
claude mcp add figma-mcp --url https://mcp.figma.com/mcp
cd olist-ds
claude
```

### Criar componente a partir do Figma

```
Leia o componente Figma neste link:
https://www.figma.com/design/XXXX/YYYY?node-id=123:456

Gere o componente React completo seguindo as instruções do CLAUDE.md.
Inclua o .tsx, .module.css, .test.tsx, .stories.tsx e index.ts.
Depois rode npm run test:run para validar.
```

### Pipeline completo via prompt

```
Preciso que você:
1. Leia o componente Figma neste link: [LINK]
2. Gere todos os arquivos (tsx, css, test, stories, index)
3. Rode npm run build:tokens
4. Rode npm run test:run — se falhar, corrija e rode novamente
5. Rode npm run build-storybook
6. Faça git add, commit e push
```

---

## Skill Corporativa

A skill permite que qualquer pessoa da empresa crie telas a partir de SDDs usando o design system. Ela se auto-atualiza a cada `npm run build`.

### Por que atinge 90%+ de precisão

1. **Referências separadas** — cada dimensão do design system tem seu arquivo (cores, tipografia, componentes). O agente carrega só o necessário.
2. **Source Map** — cada regra aponta para o arquivo real no código. O agente não inventa — confirma com evidência.
3. **SDD to Screen** — guia de tradução que transforma requisitos funcionais em decisões de UI concretas.

Inspirada na abordagem do [Pacy Design](https://github.com/lebrunhari/pacy_design) e compatível com a especificação [DESIGN.md do Google Labs](https://github.com/google-labs-code/design.md).

### Como usar

**No Claude Code:**
```
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR O SDD]
```

**No Claude.ai (sem terminal):**
1. Settings → Connectors → Figma → Connect
2. Customize → Skills → Upload → selecionar pasta da skill
3. Iniciar conversa e colar o SDD

### Auto-sync

A cada `npm run build`, os arquivos `COMPONENTS.md`, `SOURCE_MAP.md` e `OLIST_DS_OVERVIEW.md` são regenerados pelo script `sync-skill.mjs` com o estado real do codebase. Para atualizar no Claude.ai, re-upload da pasta da skill.

---

## Design Tokens

### Origem

Definidos no Figma com **Tokens Studio** (v2.11.4). Exportados como JSON (DTCG) para `src/tokens/base.json`.

### Transformação

```bash
npm run build:tokens
```

O `config.mjs` usa Style Dictionary + `@tokens-studio/sd-transforms` com transforms customizados:
- **custom/font-family-quote** — adiciona aspas em nomes com espaço
- **custom/px-unit** — converte números para px (exceto opacity e font-weight)

### Uso

```css
/* ✅ Correto */
.button {
  background: var(--color-blue-500);
  border-radius: var(--shape-border-radius-8px);
  font-family: var(--font-family-jakarta), sans-serif;
}

/* ❌ Errado */
.button {
  background: #0a4ee4;
  border-radius: 8px;
}
```

---

## Storybook

```bash
npm run storybook    # http://localhost:6006
```

```
📄 Introduction
📁 Foundations (Colors, Typography, Spacing)
📁 Components (autodocs)
```

---

## Ambiente de Consumo (Next.js)

```bash
npx create-next-app@latest olist-ds-next
cd olist-ds-next
npm install ../olist-ds        # local
# ou
npm install @pedrohenriquevalentim/olist-ds   # GitHub Packages
```

O `page.tsx` usa `catalog.ts` para renderizar todos os componentes automaticamente. Novos componentes aparecem sem editar código.

---

## CI/CD

Pipeline no GitHub Actions:

```
Push → Lint → Tokens → Testes (Gemini) → Rodar Testes
  → Storybook → GitHub Pages → GitHub Packages
```

Secret necessário: `GEMINI_API_KEY` (repositório → Settings → Secrets → Actions).

---

## Criar Novo Componente (Checklist)

1. Claude Code lê o componente no Figma e gera os arquivos
2. `npm run generate:all` — testes e stories via Gemini
3. `npm run test:run` — valida
4. `npm run storybook` — visualiza
5. `npm run release` — builda, sincroniza skill, versiona, publica
6. No Next.js: `npm install ../olist-ds` — componente aparece no catálogo

---

## Acesso para Times

| Método | Instala algo? | Terminal? | Para quem |
|---|---|---|---|
| Claude Code + MCP | Sim | Sim | Devs, designers técnicos |
| Claude.ai + Conector Figma | Não | Não | PMs, designers, CS |
| Claude.ai + Skill upload | Não | Não | Qualquer pessoa |
| DESIGN.md no projeto | Não | Não | Qualquer ferramenta AI |

---

## Licença

Projeto proprietário — uso restrito à equipe Olist.