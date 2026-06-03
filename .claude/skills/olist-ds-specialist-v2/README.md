# Olist Design System — Especialista (v2.2)

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

Compatível com a especificação [DESIGN.md do Google Labs](https://github.com/google-labs-code/design.md).

## Novidades v2.2 (2026-06-03)

### Modo JSON para plugin Figma (econômico):
- Claude gera `screen-spec.json` em vez de criar direto no Figma
- Plugin **Screen Builder** monta telas com componentes reais do DS
- Modo incremental: cada JSON adiciona telas, nunca sobrescreve
- Designer revisa JSON antes de construir — mais controle

### Inventário de componentes:
- `component-registry.json` com 21 componentes mapeados
- Keys e variantes extraídos da página do Figma
- Sincronização automática: pedir "sincronize o registry" ao Claude

### Templates por produto:
- `TEMPLATES_PRODUTO.md` com zonas de layout (A-E) por produto
- ERP: sidebar 304px + breadcrumb + search/filtros + content + paginação
- Envios/Hub/Conta Digital: sidebar 304px + top bar + header+subtitle + content + sticky
- Fonte da verdade no Figma, sincronizável via Claude

### Componentes propostos:
- Se o SDD precisa de componente que não existe, Claude marca `"proposed": true`
- Plugin renderiza como placeholder visual para o designer avaliar

## Estrutura

```
olist-ds-specialist/
├── SKILL.md                           # Instruções, fileKeys, inventário, templates
├── DESIGN.md                          # Especificação Google Labs
├── README.md                          # Este arquivo
├── SETUP.md                           # Guia de instalação
├── component-registry.json            # 21 componentes com keys e variantes
├── figma-config.example.json          # Template para config local
└── references/
    ├── VISAO_GERAL.md                 # Mapa de navegação
    ├── TEMPLATES_PRODUTO.md           # Zonas de layout por produto
    ├── screen-spec-schema.json        # Schema do JSON para plugin
    ├── FIGMA_CONFIG.md                # Guia dos fileKeys
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

## Fontes do Figma

| Prioridade | Arquivo | FileKey |
|---|---|---|
| 1º | Foundations, Components & Icons Rebrand (TO-BE) | `HeyN4w209HWh8rfpTDiwyf` |
| 2º | Components Web (AS-IS) | `QJmwu6sR06xmyGAoBaXuEn` |
| Inventário | AI Components DS Olist | `9pCeYLXBj1O0QPUiHANaqh` |

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
Settings → Customize → Skills → Upload pasta. FileKeys já estão embutidos no SKILL.md.

## Uso

### Modo JSON (econômico — priorizar)
```
Gere o JSON para o plugin Figma desta tela:
[SDD aqui]
```
Claude gera `screen-spec.json` → designer revisa → cola no plugin Screen Builder → telas montadas.

### Modo direto (React)
```
Use $olist-ds-specialist para criar a tela deste SDD:
[SDD aqui]
```

### Modo Figma MCP
```
Use $olist-ds-specialist para criar UI no Figma:
[SDD aqui]
```

### Sincronizar inventário
```
Sincronize o registry de componentes
```

### Sincronizar templates
```
Sincronize os templates de produto
```

## Plugins Figma

| Plugin | Propósito |
|---|---|
| **Screen Builder** | Recebe JSON → monta telas com componentes reais |
| **Registry Exporter** | Exporta component keys (backup offline) |
| **Token Exporter** | Exporta tokens/variáveis |

## Auto-sync

A cada `npm run build`: COMPONENTES.md, MAPA_FONTES.md e VISAO_GERAL.md são regenerados.
A cada `npm run sync:tokens`: src/generated/ é regenerado a partir de src/tokens/.
A cada `npm run wiki`: Wiki do projeto é atualizado.

## Changelog

### v2.2 (2026-06-03)
- Modo JSON para plugin Figma (econômico)
- component-registry.json (21 componentes mapeados)
- screen-spec-schema.json (schema do JSON)
- TEMPLATES_PRODUTO.md (zonas de layout por produto)
- Plugin Screen Builder (incremental)
- Plugin Registry Exporter
- Sincronização automática via Claude MCP
- Componentes propostos (`"proposed": true`)
- 14 arquivos de referência

### v2.1 (2026-05-19)
- FileKeys embutidos no SKILL.md
- FIGMA_CONFIG.md, SETUP.md, setup.sh
- generate-wiki.mjs

### v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md, SDD_AVANCADO.md
- Workflow faseado no Figma
- Sistema de ícones centralizado

### v1.0 (2026-01-12)
- Release inicial
