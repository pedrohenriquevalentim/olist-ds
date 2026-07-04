# Olist Design System

Pipeline AI-First que conecta Figma, Claude e Gemini para transformar decisões visuais em componentes React prontos para produção — e transformar SDDs em protótipos no Figma automaticamente.

O design system é um pacote NPM privado (`@pedrohenriquevalentim/olist-ds`) publicado no GitHub Packages. Cada componente consome design tokens exportados do Figma, tem testes gerados por IA, documentação interativa no Storybook, e pode ser instalado em qualquer projeto React ou Next.js.

A skill integrada (`olist-ds-specialist`) permite criar telas a partir de SDDs e gerar documentação de componentes direto no Figma, usando o design system como base, via Claude.ai ou Claude Code.

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
│    Gera frames de documentação (📄 Docs) no Figma por componente
│
├──→ Gemini Pro (API)
│    Lê código dos componentes → gera testes (Vitest) e stories (Storybook)
│
├──→ Storybook
│    Documentação interativa com autodocs, foundations e catálogo visual
│
├──→ wiki/WIKI.md (auto-gerado)
│    Visão consolidada: componentes, ícones, skill, Figma — atualizada a cada ship
│
├──→ CI/CD (GitHub Actions)
│    Lint → Tokens → Testes → Storybook → Publicação NPM
│
├──→ Next.js (ambiente de consumo)
│    Importa o pacote publicado e renderiza todos os componentes
│
└──→ Skill corporativa (auto-sync)
     Atualiza documentação da skill a cada ship
     Auditoria automática semanal via scheduled task
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
     Gera frame 📄 Docs de cada componente no Figma (demo, props, anatomia, a11y)
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
| Claude Code | — | Geração de componentes via Figma MCP |
| Gemini Pro (API) | 2.5 | Geração automática de testes e stories |
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

<!-- AUTO:structure-start -->
```
olist-ds/
├── .github/workflows/pipeline.yml        # CI/CD
├── .claude/
│   ├── settings.json                     # Permissões e hooks do Claude Code
│   └── skills/olist-ds-specialist/       # Skill corporativa (v3.7)
│       ├── SKILL.md                      # Role, escopo, decision flow
│       ├── README.md                     # Visão geral e changelog da skill
│       ├── SETUP.md                      # Guia de instalação
│       ├── CHANGELOG.md                  # Histórico de versões da skill
│       ├── figma-config.json             # libraryKeys, searchPriority, blockedLibraries
│       ├── component-registry.json       # Cache de componentKeys por categoria
│       ├── decisions/                    # Architecture Decision Records
│       │   ├── INDEX.md
│       │   ├── CHANGELOG.md
│       │   ├── technical/               # Decisões técnicas (tokens, ícones, a11y, etc.)
│       │   └── ux-design/              # Decisões de UX (tipografia, espaçamento, fluxos)
│       └── references/
│           ├── VISAO_GERAL.md           # Mapa de navegação — leia sempre primeiro
│           ├── COMPONENTES.md           # Props e variantes de cada componente (auto-gerado)
│           ├── MAPA_FONTES.md           # Estrutura de pastas do repositório (auto-gerado)
│           ├── FIGMA_CONFIG.md          # Workflow de busca e import de componentes
│           ├── TEMPLATES_PRODUTO.md     # Zonas de layout por produto
│           ├── HARNEES_TELAS.md         # Gate pré-construção: restrições por zona
│           ├── CORES.md                 # Sistema de cores com regras de uso
│           ├── TIPOGRAFIA.md            # Tokens de tipografia
│           ├── ESPACAMENTO.md           # Grid de 4px, border-radius, escala
│           ├── GLOSSARIO_PAPEIS_TEXTO.md # 10 papéis de texto (Heading, Label, Error…)
│           ├── UX_WRITING.md            # Tom de voz, 4 pilares, 12 tipos de texto
│           ├── PADROES.md               # 5 padrões de página (Tabela, Form, Dashboard…)
│           ├── SDD_PARA_TELA.md         # 10 passos SDD → decisões de UI
│           ├── SDD_AVANCADO.md          # RNFs, DACI, Métricas, Rollout → UI
│           └── CHECKLIST_REVISAO.md     # Categorias de revisão visual e a11y
├── .storybook/
│   ├── main.ts                          # Paths + addons
│   ├── preview.ts                       # Autodocs + tokens + font decorator
│   ├── preview-head.html                # Google Fonts
│   ├── theme.ts                         # Branding Olist
│   └── manager.ts                       # Aplica tema
├── scripts/
│   ├── sync-tokens.mjs                  # JSON → CSS Custom Properties (tokens)
│   ├── sync-skill.mjs                   # Regenera COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md
│   ├── sync-skill-meta.mjs              # Atualiza versão, README e wiki da skill
│   ├── generate-wiki.mjs                # Gera wiki/WIKI.md consolidado
│   ├── generate-tests.mjs               # Gemini → .test.tsx
│   ├── generate-stories.mjs             # Gemini → .stories.tsx
│   ├── generate-index.mjs               # Gera src/index.ts + src/catalog.ts
│   ├── generate-icons.mjs               # Gera src/components/Icon com ícones do Figma
│   ├── copy-css.mjs                     # Copia .module.css para dist/
│   └── version-skill.mjs                # Bump de versão da skill
├── src/
│   ├── tokens/                          # JSON do Tokens Studio (DTCG)
│   │   ├── base.json
│   │   ├── theme.json
│   │   └── tokens.json
│   ├── generated/                       # Saída do Style Dictionary (não editar)
│   │   ├── variables.css
│   │   └── tokens.js
│   ├── components/                      # <!-- AUTO:component-count -->10<!-- /AUTO:component-count --> componentes
│   │   └── [ComponentName]/
│   │       ├── ComponentName.tsx
│   │       ├── ComponentName.module.css
│   │       ├── ComponentName.test.tsx
│   │       ├── ComponentName.stories.tsx
│   │       └── index.ts
│   ├── docs/                            # Páginas MDX do Storybook
│   │   ├── Introduction.mdx
│   │   └── foundations/
│   ├── index.ts                         # Auto-gerado
│   ├── catalog.ts                       # Auto-gerado
│   ├── css-modules.d.ts                 # Tipos para CSS Modules
│   └── test-setup.ts                    # Setup do Vitest
├── wiki/
│   └── WIKI.md                          # Wiki consolidado (auto-gerado)
├── CLAUDE.md                            # Instruções para Claude Code
├── eslint.config.mjs
├── tsconfig.json
├── vite.config.ts
└── package.json
```
<!-- AUTO:structure-end -->

### Componentes disponíveis

<!-- AUTO:component-list-start -->
Button, Checkbox, Chip, Icon, InputPassword, InputSearch, InputSelect, InputText, Logo, ProdutosOlistIcons
<!-- AUTO:component-list-end -->

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
npm run watch:tokens           # Modo watch
```

### Geração com IA

```bash
npm run generate:tests         # Gemini → testes faltantes
npm run generate:tests:all     # Regenera todos os testes
npm run generate:stories       # Gemini → stories faltantes
npm run generate:stories:all   # Regenera todas as stories
npm run generate:all           # Testes + stories faltantes
npm run generate:icons         # Regenera componente Icon a partir do Figma
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
npm run pipeline               # build:tokens + generate:all + tsc + test:run + build-storybook
```

### Sincronização de Skill e Docs

```bash
npm run sync:skill             # Regenera COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md, README (estrutura)
npm run sync:skill-meta        # Atualiza versão, título e wiki da skill
npm run wiki                   # Regenera wiki/WIKI.md
```

### Publicação

```bash
npm run ship
```

Executa o pipeline completo em sequência:

1. `sync:skill` — atualiza docs de componentes e README
2. `sync:skill-meta` — sincroniza versão e wiki da skill
3. `pipeline` — build:tokens + generate:all + tsc + test:run + build-storybook
4. `git add -A && git commit -m 'chore: release'`
5. `npm version patch` — incrementa versão (patch)
6. `git push origin HEAD --tags`

Para bump manual de versão minor/major:

```bash
npm run pipeline
npm version minor              # 1.0.x → 1.1.0 (novo componente)
npm version major              # 1.x.0 → 2.0.0 (breaking change)
git push && git push --tags
```

---

## Fluxo de Trabalho com Claude Code

### Configuração

```bash
claude mcp add figma-mcp --url https://mcp.figma.com/mcp
cd olist-ds
claude
```

### Criar componente a partir do Figma

**Via skill (recomendado):**
```
Use $olist-ds-specialist para implementar este componente:
https://www.figma.com/design/XXXX/YYYY?node-id=123:456
```

A skill lê o design, mapeia os tokens, gera os 5 arquivos obrigatórios (tsx, css, test, stories, index) e, ao final, cria automaticamente o frame `📄 Docs — NomeComponente` no Figma com demo, tabela de props, anatomia e guia de acessibilidade.

**Via prompt direto (sem skill):**
```
Leia o componente Figma neste link:
https://www.figma.com/design/XXXX/YYYY?node-id=123:456

Gere o componente React seguindo as instruções do CLAUDE.md.
Depois rode npm run test:run para validar.
```

### Criar tela a partir de SDD

```
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR O SDD]
```

### Pipeline completo via prompt

```
Preciso que você:
1. Use $olist-ds-specialist para implementar o componente: [LINK]
2. Rode npm run test:run — se falhar, corrija e rode novamente
3. Rode npm run ship
```

---

## Skill Corporativa

A skill `olist-ds-specialist` (<!-- AUTO:skill-version-start -->v3.11<!-- AUTO:skill-version-end -->) permite que qualquer pessoa da empresa crie telas a partir de SDDs, implemente componentes React do DS e gere documentação no Figma — com precisão consistente.

### Capacidades

- **Figma → React** — lê componente no Figma, gera tsx + css + test + stories + index
- **PRD/SDD → Figma** — lê SDD, consulta libraries do DS, monta telas com instâncias reais
- **Docs no Figma** — gera frame `📄 Docs — NomeComponente` com demo, props, anatomia e a11y
- **Decisões documentadas** — `decisions/` com Architecture Decision Records (técnicos e UX)

### Por que atinge alta precisão

1. **Referências separadas** — cada dimensão do design system tem seu arquivo (cores, tipografia, componentes, espaçamento, papéis de texto, padrões de página). O agente carrega só o necessário.
2. **Source Map** — `MAPA_FONTES.md` aponta para o arquivo real de cada componente. O agente não inventa — confirma com evidência.
3. **SDD to Screen** — `SDD_PARA_TELA.md` e `SDD_AVANCADO.md` traduzem requisitos funcionais em decisões de UI concretas.
4. **figma-config.json** — fonte única de verdade para libraries autorizadas, com `searchPriority` e `blockedLibraries`.

### Como usar

**No Claude Code — implementar componente a partir do Figma:**
```
Use $olist-ds-specialist para implementar este componente:
https://www.figma.com/design/XXXX/YYYY?node-id=123:456
```

**No Claude Code — criar tela a partir de SDD:**
```
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR O SDD]
```

**No Claude.ai (sem terminal):**
1. Settings → Connectors → Figma → Connect
2. Customize → Skills → Upload → selecionar pasta `olist-ds-specialist`
3. Iniciar conversa e colar o SDD ou link do Figma

### Auto-sync

A cada `npm run ship`, os arquivos a seguir são regenerados automaticamente:

| Arquivo | Gerado por |
|---|---|
| `references/COMPONENTES.md` | `sync-skill.mjs` |
| `references/MAPA_FONTES.md` | `sync-skill.mjs` |
| `references/VISAO_GERAL.md` | `sync-skill.mjs` |
| `README.md` (seções marcadas) | `sync-skill.mjs` |
| `skill/README.md` | `sync-skill-meta.mjs` |
| `wiki/WIKI.md` | `generate-wiki.mjs` |

Para sincronizar manualmente sem publicar:

```bash
npm run sync:skill && npm run sync:skill-meta && npm run wiki
```

### Auditoria automática

Um scheduled task (`olist-ds-audit`) executa semanalmente via Claude Code e:

- Verifica integridade de arquivos por componente
- Confirma que todas as referências da skill estão atualizadas
- Corrige versões defasadas nas docs automaticamente
- Reporta qualquer item que não pôde ser corrigido sem intervenção humana

---

## Design Tokens

### Origem

Definidos no Figma com **Tokens Studio** (v2.11.4). Exportados como JSON (DTCG) para `src/tokens/`.

### Transformação

```bash
npm run build:tokens
```

O `scripts/sync-tokens.mjs` usa Style Dictionary + `@tokens-studio/sd-transforms` com transforms customizados:
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

1. Claude Code lê o componente no Figma via skill e gera os 5 arquivos
2. A skill gera automaticamente o frame `📄 Docs` no Figma
3. `npm run test:run` — valida
4. `npm run storybook` — visualiza
5. `npm run ship` — sincroniza docs, versiona e publica

---

## Acesso para Times

| Método | Instala algo? | Terminal? | Para quem |
|---|---|---|---|
| Claude Code + MCP | Sim | Sim | Devs, designers técnicos |
| Claude.ai + Conector Figma | Não | Não | PMs, designers, CS |
| Claude.ai + Skill upload | Não | Não | Qualquer pessoa |

---

## Licença

Projeto proprietário — uso restrito à equipe Olist.
