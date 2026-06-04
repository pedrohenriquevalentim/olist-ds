# Olist Design System — Especialista (v3.0)

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

## Novidades v3.0 (2026-06-03)

### Workflow use_figma (canal único de entrega):
- Telas construídas diretamente no Figma via `use_figma` MCP com instâncias reais de componentes DS
- `search_design_system` com `includeLibraryKeys` filtra às 5 libraries autorizadas
- `importComponentSetByKeyAsync` traz componentes reais (Menu ERP, Button, Tags, etc.)
- Workflow faseado: tela por tela com screenshot + feedback a cada entrega

### Libraries como fonte da verdade:
- `figma-config.json` agora usa `libraryKey` (formato `lk-...`) em vez de `fileKey`
- AI Components é o novo master — Menu ERP atualizado + ícones rebrand 24
- 5 libraries em ordem de prioridade; 3 libraries bloqueadas
- `search_design_system` sempre filtrado por `searchPriority`

### Regras da Figma Plugin API documentadas:
- `layoutSizing` definido após `appendChild`
- Valores válidos de `counterAxisAlignItems`: MIN MAX CENTER BASELINE
- Textos em cards: `textAutoResize='HEIGHT'` + `layoutSizingHorizontal='FILL'`

## Estrutura

```
olist-ds-specialist/
├── SKILL.md                           # Instruções, workflow, regras v3.0
├── README.md                          # Este arquivo
├── SETUP.md                           # Guia de instalação
├── figma-config.json                  # Libraries autorizadas (libraryKeys)
└── references/
    ├── VISAO_GERAL.md                 # Mapa de navegação
    ├── FIGMA_CONFIG.md                # libraryKeys, workflow de busca e import
    ├── TEMPLATES_PRODUTO.md           # Zonas de layout por produto (ERP, Envios, Hub, CD)
    ├── CORES.md                       # Sistema de cores
    ├── TIPOGRAFIA.md                  # Tokens de tipografia
    ├── GLOSSARIO_PAPEIS_TEXTO.md      # 10 papéis de texto
    ├── ESPACAMENTO.md                 # Grid, border-radius
    ├── COMPONENTES.md                 # Props e variantes (auto-gerado)
    ├── PADROES.md                     # Padrões de página
    ├── MAPA_FONTES.md                 # Estrutura de pastas (auto-gerado)
    ├── SDD_PARA_TELA.md               # 10 passos SDD → UI
    ├── SDD_AVANCADO.md                # RNFs, DACI, Métricas
    └── CHECKLIST_REVISAO.md           # 9 categorias de revisão
```

## Libraries do Figma (ordem de prioridade)

| # | Library | Conteúdo |
|---|---|---|
| 1 (master) | **AI Components** | Menu ERP atualizado, Button, ícones rebrand 24 |
| 2 | **ERP components** | Componentes principais do ERP Tiny |
| 3 | **ERP recursos** | Recursos e padrões complementares |
| 4 | **ERP style guide** | Tipografia, tokens, paleta |
| 5 (fallback) | **[design system] components web** | Componentes web base |

**libraryKeys completas:** ver `figma-config.json`.

## Instalação

### Opção 1: Script automático
```bash
unzip olist-ds-kit.zip && cd olist-ds-kit && bash setup.sh
```

### Opção 2: Claude Code
```bash
mkdir -p .claude/skills
cp -r olist-ds-specialist/ .claude/skills/olist-ds-specialist/
```

### Opção 3: Claude.ai
Settings → Customize → Skills → Upload pasta.

## Uso

### Criar tela no Figma (workflow principal)
```
Use $olist-ds-specialist para criar UI no Figma:
[SDD aqui]
```
Claude busca componentes nas libraries autorizadas → importa instâncias reais → constrói via `use_figma` → retorna screenshot + link.

### Criar tela React
```
Use $olist-ds-specialist para criar a tela deste SDD:
[SDD aqui]
```

### Revisar UI existente
```
Use $olist-ds-specialist para revisar esta tela:
[código ou screenshot]
```

### Sincronizar inventário de componentes
```
Sincronize o registry de componentes
```

## Changelog

### v3.0 (2026-06-03)
- **Canal de entrega:** `use_figma` direto com instâncias DS reais (plugin intermediário descontinuado)
- **Libraries:** `figma-config.json` migrado de `fileKey` para `libraryKey`; AI Components como master
- **Busca:** `search_design_system` sempre com `includeLibraryKeys: searchPriority`
- **Regras Figma Plugin API:** documentadas em SKILL.md (layoutSizing, counterAxisAlignItems, etc.)
- Removido: `screen-spec-schema.json`, plugin Screen Builder, modo JSON econômico
- 13 arquivos de referência ativos

### v2.2 (2026-06-03)
- Modo JSON para plugin Figma (econômico)
- component-registry.json, screen-spec-schema.json
- TEMPLATES_PRODUTO.md (zonas de layout por produto)

### v2.1 (2026-05-19)
- FIGMA_CONFIG.md, SETUP.md

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md, SDD_AVANCADO.md
- Workflow faseado no Figma

### v1.0 (2026-01-12)
- Release inicial
