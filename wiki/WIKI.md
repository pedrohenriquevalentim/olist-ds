# Olist Design System — Wiki

**Pacote:** `@pedrohenriquevalentim/olist-ds`  
**Skill:** v2.1  
**Última atualização:** 2026-05-19  
**Gerado por:** `npm run wiki` (generate-wiki.mjs)

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Projeto](#arquitetura-do-projeto)
3. [Pipeline de Build e Release](#pipeline-de-build-e-release)
4. [Skill Claude](#skill-claude)
5. [Fontes do Figma](#fontes-do-figma)
6. [Sistema de Ícones](#sistema-de-ícones)
7. [Scripts Disponíveis](#scripts-disponíveis)
8. [Instalação e Compartilhamento](#instalação-e-compartilhamento)
9. [Troubleshooting](#troubleshooting)
10. [Changelog](#changelog)

---

## Visão Geral

O Olist Design System é uma biblioteca de componentes React + TypeScript publicada via npm. Combina componentes React, Storybook, skill para Claude, integração com Figma via MCP e sistema de ícones centralizado.

**Fontes do Figma (embutidas no SKILL.md):**
- **TO-BE:** `HeyN4w209HWh8rfpTDiwyf` — Foundations, Components & Icons Rebrand
- **AS-IS:** `QJmwu6sR06xmyGAoBaXuEn` — Components Web

---

## Arquitetura do Projeto

```
olist-ds/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Button/
│   │   ├── Icon/            # Sistema centralizado de ícones
│   │   ├── MenuSidebar/
│   │   ├── MenuErp/
│   │   ├── Tag/
│   │   └── .../
│   ├── assets/
│   │   └── icons/svgs/      # SVGs dos ícones (currentColor)
│   └── index.ts             # Barrel exports
│
├── .claude/
│   ├── figma-config.json    # Configuração local do Figma (opcional, .gitignore)
│   └── skills/
│       └── olist-ds-specialist/   # Skill para Claude v2.1
│           ├── SKILL.md           # Inclui fileKeys do Figma embutidos
│           ├── DESIGN.md
│           ├── README.md
│           ├── SETUP.md
│           ├── figma-config.example.json
│           └── references/        # 12 arquivos de referência
│
├── scripts/
│   ├── sync-skill.mjs              # Sincroniza skill com código (v2.1)
│   ├── generate-tests.mjs          # Gera testes via Gemini API
│   ├── generate-stories.mjs        # Gera stories via Gemini API
│   ├── generate-wiki.mjs           # Gera este Wiki
│   ├── validate-icon-migration.mjs # Valida migração de ícones
│   └── extract-icons-from-figma.mjs# Extrai ícones do Figma
│
├── wiki/
│   └── WIKI.md              # Este arquivo (auto-gerado)
│
├── .env                     # GEMINI_API_KEY (não commitar)
├── package.json
└── .gitignore
```

---

## Pipeline de Build e Release

### Fluxo Completo

```
npm run release
    │
    ├── 1. npm run generate:all
    │       ├── generate-tests.mjs --missing   (Gemini API)
    │       └── generate-stories.mjs --missing  (Gemini API)
    │
    ├── 2. npm run build
    │       └── Compilação TypeScript + bundling
    │
    ├── 3. npm run sync:skill (v2.1)
    │       ├── Auto-gera COMPONENTES.md
    │       ├── Auto-gera MAPA_FONTES.md
    │       └── Atualiza VISAO_GERAL.md (12 arquivos)
    │
    ├── 4. npm version patch
    │       └── Requer Git working directory limpo
    │
    ├── 5. npm publish
    │       └── Publica no npm registry
    │
    ├── 6. git push --follow-tags
    │
    └── 7. npm run wiki (postrelease)
            └── Atualiza wiki/WIKI.md
```

### Pré-requisitos

| Requisito | Como Configurar |
|---|---|
| GEMINI_API_KEY | Criar `.env` com `GEMINI_API_KEY=sua-chave` |
| dotenv | `npm install --save-dev dotenv --legacy-peer-deps` |
| Git limpo | `git add . && git commit -m "..."` antes do release |

### Todos os Comandos

| Comando | Descrição |
|---|---|
| `npm run storybook` | Abre Storybook local |
| `npm run build` | Compila componentes |
| `npm run sync:skill` | Sincroniza skill com código |
| `npm run generate:all` | Gera testes e stories faltantes |
| `npm run release` | Pipeline completa |
| `npm run validate:icons` | Valida migração de ícones |
| `npm run wiki` | Gera/atualiza este Wiki |

---

## Skill Claude

### Versão: v2.1

Skill que ensina Claude a atuar como especialista em Product Design e Frontend da Olist.

### Arquivos (17 total)

**Raiz (5):**
- `SKILL.md` — Instruções principais + fileKeys do Figma embutidos
- `DESIGN.md` — Especificação Google Labs
- `README.md` — Documentação e setup
- `SETUP.md` — Guia de instalação
- `figma-config.example.json` — Template para configuração local

**Referências (12):**
- `VISAO_GERAL.md` — Mapa de navegação (ler primeiro)
- `FIGMA_CONFIG.md` — Guia de uso dos fileKeys
- `CORES.md` — Paleta de cores
- `TIPOGRAFIA.md` — Tokens de tipografia
- `GLOSSARIO_PAPEIS_TEXTO.md` — 10 papéis de texto
- `ESPACAMENTO.md` — Grid 4px, padding, margin
- `COMPONENTES.md` — Props e variantes (auto-gerado)
- `PADROES.md` — 5 padrões de página
- `SDD_PARA_TELA.md` — 10 passos SDD → UI
- `SDD_AVANCADO.md` — RNFs, DACI, Métricas
- `MAPA_FONTES.md` — Estrutura de pastas (auto-gerado)
- `CHECKLIST_REVISAO.md` — 9 categorias de revisão

### Auto-gerados vs Manuais

**Auto-gerados** (por `npm run build`): COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md (parcial)

**Manuais** (não sobrescritos): todos os outros 9 arquivos de referência

### Regras Críticas

**Sempre:**
1. Ler VISAO_GERAL.md primeiro
2. Buscar componentes no Figma usando fileKeys do SKILL.md (TO-BE primeiro, AS-IS como fallback)
3. Consultar GLOSSARIO_PAPEIS_TEXTO.md antes de nomear textos
4. Workflow faseado no Figma (tela por tela)

**Nunca:**
1. Buscar em arquivos do Figma fora dos permitidos
2. Inventar nomes de papéis de texto
3. Criar todas as telas de uma vez no Figma

---

## Fontes do Figma

### FileKeys Embutidos (SKILL.md)

| Prioridade | Arquivo | FileKey | Tipo |
|---|---|---|---|
| 1º | Foundations, Components & Icons Rebrand | `HeyN4w209HWh8rfpTDiwyf` | TO-BE (rebrand) |
| 2º | Components Web | `QJmwu6sR06xmyGAoBaXuEn` | AS-IS (atual) |

### Como Claude Usa

**Claude.ai (ZIP):** lê fileKeys direto do SKILL.md — funciona sem configuração.

**Claude Code (projeto):** se `.claude/figma-config.json` existir, usa ele (prioridade); senão, usa fileKeys do SKILL.md como fallback.

### Configuração Local (Opcional)

Para customizar arquivos permitidos no Claude Code:

```bash
cp .claude/skills/olist-ds-specialist/figma-config.example.json .claude/figma-config.json
# Editar com seus fileKeys
echo '.claude/figma-config.json' >> .gitignore
```

### Como Extrair fileKey

```
URL:     https://www.figma.com/design/ABC123/nome-do-arquivo
FileKey: ABC123
```

---

## Sistema de Ícones

### Arquitetura

```
src/components/Icon/     → Componente React (dangerouslySetInnerHTML)
src/assets/icons/svgs/   → SVGs (24px, Outline, currentColor)
```

### Uso

```tsx
import { Icon } from '@pedrohenriquevalentim/olist-ds';

<Icon name="check" size={20} />
<Icon name="chevron-right" size={16} color="var(--color-blue-500)" />
```

### Tamanhos por Contexto

| Contexto | Tamanho |
|---|---|
| Botão small | 16px |
| Botão medium | 20px |
| Botão large | 24px |

### Validação

```bash
npm run validate:icons
# ✅ = exit code 0 (migração completa)
# ❌ = exit code 1 (lista ações pendentes)
```

---

## Scripts Disponíveis

| Script | Propósito | Quando Usar |
|---|---|---|
| `sync-skill.mjs` (v2.1) | Atualiza skill com código | Após mudar componentes |
| `generate-wiki.mjs` | Gera este Wiki | Automaticamente no postrelease |
| `validate-icon-migration.mjs` | Verifica URLs do Figma | Antes de release |
| `extract-icons-from-figma.mjs` | Exporta ícones do Figma | Ao adicionar ícones |
| `generate-tests.mjs` | Gera testes via Gemini | No generate:all |
| `generate-stories.mjs` | Gera stories via Gemini | No generate:all |

---

## Instalação e Compartilhamento

### Para Novos Usuários (via ZIP + setup.sh)

```bash
unzip olist-ds-kit.zip
cd olist-ds-kit
bash setup.sh
```

### Para Claude.ai (via Upload)

1. Settings → Customize → Skills → Upload
2. Selecionar pasta `olist-ds-specialist-v2/` ou o ZIP
3. Ativar — fileKeys do Figma já estão no SKILL.md

### Compactar para Compartilhar

```bash
cd .claude/skills
zip -r olist-ds-specialist-v2.1.zip olist-ds-specialist-v2/
```

### O Que NÃO Compartilhar

- `.env` (chaves de API)
- `.claude/settings.local.json`
- `.claude/worktrees/`

---

## Troubleshooting

### GEMINI_API_KEY não definida

```bash
echo 'GEMINI_API_KEY=sua-chave' > .env
# Adicionar "import 'dotenv/config';" no topo dos scripts generate-*.mjs
```

### Git working directory not clean

```bash
git add . && git commit -m "chore: prepare release" && npm run release
```

### npm install ERESOLVE (Storybook v8 vs v10)

```bash
npm install --save-dev PACOTE --legacy-peer-deps
```

### Ícones não aparecem

1. SVGs existem em `src/assets/icons/svgs/`?
2. SVGs usam `currentColor`?
3. SVGs têm `viewBox` definido?

### Claude busca em arquivos errados do Figma

1. Verificar seção "Fontes do Figma" no SKILL.md
2. Se usando Claude Code, verificar `.claude/figma-config.json`

---

## Changelog

### v2.1 (2026-05-19)
- FileKeys do Figma embutidos no SKILL.md
- Funciona no Claude.ai sem configuração adicional
- FIGMA_CONFIG.md como 12º arquivo de referência
- SETUP.md e setup.sh para instalação automática
- generate-wiki.mjs para Wiki auto-gerado
- sync-skill.mjs v2.1

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md (10 papéis de texto)
- SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout)
- Workflow faseado no Figma
- Sistema de ícones centralizado
- sync-skill.mjs para auto-geração
- validate-icon-migration.mjs

### v1.0 (2026-01-12)
- Versão inicial da skill
- 8 arquivos de referência

---

*Gerado automaticamente em 2026-05-19 por `generate-wiki.mjs`. Não edite manualmente.*
