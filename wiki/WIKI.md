# Olist Design System — Wiki

**Pacote:** `@pedrohenriquevalentim/olist-ds`  
**Skill:** v2.2  
**Última atualização:** 2026-06-03  
**Gerado por:** `npm run wiki` (generate-wiki.mjs)

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Projeto](#arquitetura-do-projeto)
3. [Pipeline de Build e Release](#pipeline-de-build-e-release)
4. [Skill Claude — olist-ds-specialist](#skill-claude)
5. [Modo JSON — Plugin Figma](#modo-json)
6. [Fontes do Figma](#fontes-do-figma)
7. [Inventário de Componentes](#inventário-de-componentes)
8. [Templates por Produto](#templates-por-produto)
9. [Sistema de Ícones](#sistema-de-ícones)
10. [Plugins Figma](#plugins-figma)
11. [Scripts Disponíveis](#scripts-disponíveis)
12. [Instalação e Compartilhamento](#instalação-e-compartilhamento)
13. [Troubleshooting](#troubleshooting)
14. [Changelog](#changelog)

---

## Visão Geral

O Olist Design System é uma biblioteca de componentes React + TypeScript com pipeline automatizado que conecta Figma ao código. Inclui skill para Claude, geração de telas via JSON e plugins para Figma.

**Fontes do Figma:**
- **TO-BE:** `HeyN4w209HWh8rfpTDiwyf` — Foundations, Components & Icons Rebrand
- **AS-IS:** `QJmwu6sR06xmyGAoBaXuEn` — Components Web
- **Inventário:** `9pCeYLXBj1O0QPUiHANaqh` — AI Components DS Olist (componentes + templates)

---

## Arquitetura do Projeto

```
olist-ds/
├── src/
│   ├── components/              # Componentes React
│   ├── tokens/                  # Tokens do Figma (base, theme, tokens)
│   ├── generated/               # CSS/JS gerado a partir dos tokens
│   ├── screen-specs/            # JSONs para plugin Figma
│   └── assets/icons/svgs/       # SVGs centralizados
│
├── .claude/
│   ├── figma-config.json        # Config local (opcional, .gitignore)
│   └── skills/
│       └── olist-ds-specialist/ # Skill v2.2
│           ├── SKILL.md
│           ├── component-registry.json
│           ├── references/      # 14 arquivos
│           │   ├── TEMPLATES_PRODUTO.md
│           │   ├── screen-spec-schema.json
│           │   └── ... (12 outros)
│           └── figma-config.example.json
│
├── scripts/
│   ├── sync-skill.mjs           # Sincroniza skill com código
│   ├── sync-tokens.mjs          # Regenera src/generated/
│   ├── generate-wiki.mjs        # Gera este Wiki
│   └── ...
│
├── wiki/WIKI.md                 # Este arquivo
└── package.json
```

---

## Pipeline de Build e Release

```
npm run release
    │
    ├── 1. generate:all            (testes + stories via Gemini)
    ├── 2. build                   (compilação TypeScript)
    ├── 3. sync:tokens             (src/tokens → src/generated)
    ├── 4. sync:skill              (atualiza skill v2.2)
    ├── 5. npm version patch
    ├── 6. npm publish
    ├── 7. git push --follow-tags
    └── 8. wiki                    (postrelease — atualiza Wiki)
```

---

## Skill Claude

### Versão: v2.2

### Arquivos (19 total)

**Raiz (5):**
- `SKILL.md` — Instruções + fileKeys + inventário + templates
- `DESIGN.md` — Especificação Google Labs
- `README.md` — Documentação e setup
- `SETUP.md` — Guia de instalação
- `component-registry.json` — Inventário de 21 componentes com keys
- `figma-config.example.json` — Template para config local

**Referências (14):**
- `VISAO_GERAL.md` — Mapa de navegação
- `TEMPLATES_PRODUTO.md` — Zonas de layout por produto (ERP, Envios, Hub, CD)
- `screen-spec-schema.json` — Schema do JSON para plugin
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

### Fluxo de Decisão (7 modos)

| Modo | Quando | Custo |
|---|---|---|
| **JSON para plugin** | Criar telas (priorizar) | Baixo |
| **SDD básico** | Tela a partir de requisitos funcionais | Médio |
| **SDD completo** | Tela com RNFs, DACI, Métricas | Médio |
| **Criar componente** | Novo componente React | Médio |
| **Figma MCP** | Protótipo direto no Figma | Alto |
| **Revisar UI** | Checklist de qualidade | Baixo |
| **Sync registry** | Atualizar inventário | Baixo |

---

## Modo JSON

Pipeline alternativa que economiza créditos e dá mais controle ao designer.

### Fluxo

```
SDD/PRD
   ↓
Claude + Skill
   ├── Identifica produto (ERP, Envios, Hub, CD)
   ├── Consulta TEMPLATES_PRODUTO.md → zonas do layout
   ├── Consulta component-registry.json → componentes disponíveis
   ├── Consulta screen-spec-schema.json → formato do JSON
   ↓
screen-spec.json (editável pelo designer)
   ↓
Plugin "Screen Builder" no Figma
   ↓
Telas com componentes reais do DS
```

### Componentes Propostos

Quando o SDD precisa de um componente que não existe no inventário, Claude marca `"proposed": true` no JSON com especificação seguindo tokens/foundations. O plugin renderiza como placeholder amarelo tracejado para o designer avaliar.

---

## Fontes do Figma

| Prioridade | Arquivo | FileKey |
|---|---|---|
| 1º | Foundations, Components & Icons Rebrand (TO-BE) | `HeyN4w209HWh8rfpTDiwyf` |
| 2º | Components Web (AS-IS) | `QJmwu6sR06xmyGAoBaXuEn` |
| Inventário | AI Components DS Olist | `9pCeYLXBj1O0QPUiHANaqh` |

---

## Inventário de Componentes

**Fonte:** `9pCeYLXBj1O0QPUiHANaqh`, page `8042:48`

21 componentes em 6 categorias:

| Categoria | Componentes |
|---|---|
| Action | Button, Button Icon |
| Navigation | Link, Segmented Buttons |
| Input | Input Text, Text Area, Input E-mail, Input Search, Input Token, Input Password, Input Select, Input File, Checkbox, Radio Button, Dropdown, Toggle, Chip |
| Data Display | Tags |
| Feedback | Tooltip |
| Brand | Logo Olist, Produtos Olist Icons |

**Sincronização:** Pedir a Claude "sincronize o registry" ou rodar plugin "Registry Exporter" no Figma.

---

## Templates por Produto

**Fonte:** `9pCeYLXBj1O0QPUiHANaqh`, page `8063:818`

### ERP (node `8063:3669`)

| Zona | Nome | Dimensão |
|---|---|---|
| A | Novo Menu Global (sidebar) | 304px largura |
| B | Top Bar (breadcrumb + ações) | 68px altura |
| C | Page Header (heading + search + filtros) | 124px altura |
| D | Content Area | flex |
| E | Paginação (se necessário) | 80px altura |

Gap entre zonas: **0px**

### Envios / Hub / Conta Digital (node `8063:20969`)

| Zona | Nome | Dimensão |
|---|---|---|
| A | Novo Menu Global (sidebar) | 304px largura |
| B | Top Bar (ações) | 80px altura |
| C | Page Header + Subtitle | 68px altura |
| D | Content Area | flex |
| E | Sticky ou paginação | 80px altura |

Gap entre zonas: **24px**

**Sincronização:** Pedir a Claude "sincronize os templates" para atualizar a partir do Figma.

---

## Sistema de Ícones

```
src/components/Icon/     → Componente React
src/assets/icons/svgs/   → SVGs (24px, Outline, currentColor)
```

Validar migração: `npm run validate:icons`

---

## Plugins Figma

3 plugins disponíveis para o time:

| Plugin | Propósito | Quando Usar |
|---|---|---|
| **Screen Builder** | Recebe JSON → monta telas com componentes reais | Ao receber screen-spec.json do Claude |
| **Registry Exporter** | Extrai component keys da página de inventário | Quando criar/alterar componentes (backup) |
| **Token Exporter** | Extrai variáveis (tokens) do Figma | Quando mudar tokens |

### Screen Builder — Modo Incremental

Cada JSON colado no plugin **adiciona novas páginas** ao arquivo Figma. Nunca sobrescreve telas anteriores. Ideal para o fluxo faseado: Claude gera tela 1, designer valida, gera tela 2, etc.

### Sincronização Automática via Claude

O inventário de componentes e os templates podem ser sincronizados diretamente por Claude via Figma MCP, sem precisar rodar plugins manualmente:

- "Sincronize o registry" → atualiza component-registry.json
- "Sincronize os templates" → atualiza TEMPLATES_PRODUTO.md

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run build` | Compila componentes |
| `npm run storybook` | Abre Storybook local |
| `npm run sync:tokens` | src/tokens → src/generated (CSS, JS) |
| `npm run sync:skill` | Atualiza skill com código |
| `npm run sync:all` | sync:tokens + sync:skill |
| `npm run generate:all` | Gera testes e stories faltantes |
| `npm run validate:icons` | Valida migração de ícones |
| `npm run wiki` | Gera/atualiza este Wiki |
| `npm run release` | Pipeline completa |

---

## Instalação e Compartilhamento

### Via setup.sh (recomendado)

```bash
unzip olist-ds-kit.zip && cd olist-ds-kit && bash setup.sh
```

### Via Claude.ai (upload)

Settings → Customize → Skills → Upload pasta da skill. FileKeys do Figma já estão embutidos no SKILL.md.

### Plugins Figma

```
Extrair ZIP → Figma → Plugins → Development → Import plugin from manifest...
```

---

## Troubleshooting

### GEMINI_API_KEY não definida
```bash
echo 'GEMINI_API_KEY=sua-chave' > .env
```

### npm install ERESOLVE
```bash
npm install --save-dev PACOTE --legacy-peer-deps
```

### Plugin Figma com erro de sintaxe
Verificar que o code.js não usa optional chaining (`?.`) — Figma não suporta.

### Claude busca em arquivos errados do Figma
Verificar seção "Fontes do Figma" no SKILL.md ou `.claude/figma-config.json`.

---

## Changelog

### v2.2 (2026-06-03)
- **Modo JSON para plugin Figma** — fluxo econômico de créditos
- `component-registry.json` — 21 componentes mapeados com keys e variantes
- `screen-spec-schema.json` — schema do JSON para plugin
- `TEMPLATES_PRODUTO.md` — zonas de layout por produto (ERP, Envios, Hub, CD)
- Plugin **Screen Builder** — recebe JSON, monta telas, modo incremental
- Plugin **Registry Exporter** — exporta component keys do Figma
- Sincronização automática de registry e templates via Claude MCP
- Lógica de componentes propostos (`"proposed": true`)
- Skill agora com 14 arquivos de referência + component-registry.json

### v2.1 (2026-05-19)
- FileKeys do Figma embutidos no SKILL.md
- FIGMA_CONFIG.md como arquivo de referência
- setup.sh para instalação automática
- generate-wiki.mjs para Wiki auto-gerado

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md (10 papéis de texto)
- SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout)
- Workflow faseado no Figma
- Sistema de ícones centralizado

### v1.0 (2026-01-12)
- Versão inicial da skill

---

*Gerado automaticamente em 2026-06-03 por `generate-wiki.mjs`. Não edite manualmente.*
