# Olist Design System — Especialista (v2.1)

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

Compatível com a especificação [DESIGN.md do Google Labs](https://github.com/google-labs-code/design.md).

## Por que funciona

A precisão de 90%+ na reutilização do design system vem de três decisões:

1. **Referências separadas** — cada dimensão do DS tem seu arquivo. O agente carrega só o necessário.
2. **Mapa de fontes** — cada regra aponta para o arquivo real no código. O agente confirma com evidência.
3. **SDD para Tela** — guia que traduz requisitos funcionais em decisões de UI concretas.

## Novidades v2.1 (2026-05-19)

### FileKeys do Figma embutidos no SKILL.md:
- **Prioridade 1:** `HeyN4w209HWh8rfpTDiwyf` — Foundations, Components & Icons Rebrand (TO-BE)
- **Prioridade 2:** `QJmwu6sR06xmyGAoBaXuEn` — Components Web (AS-IS)
- Funciona tanto no Claude.ai (ZIP) quanto no Claude Code (projeto local)
- Se `.claude/figma-config.json` existir no projeto, ele tem prioridade

### Novos arquivos:
- **`FIGMA_CONFIG.md`** — Guia de uso dos fileKeys e configuração do Figma
- **`SETUP.md`** — Guia de instalação para novos usuários
- **`figma-config.example.json`** — Template para configuração local (opcional)

### v2.0 (2026-05-04):
- **`GLOSSARIO_PAPEIS_TEXTO.md`** — Define como nomear cada tipo de texto (Heading, Label, Error, etc.)
- **`SDD_AVANCADO.md`** — Traduz seções técnicas do SDD (RNFs, DACI, Métricas, Rollout) em UI
- Incrementos em `TIPOGRAFIA.md`, `SDD_PARA_TELA.md`, `VISAO_GERAL.md`

## Estrutura

```
olist-ds-specialist/
├── SKILL.md                              # Papel, escopo, fluxo de decisão, fileKeys do Figma
├── DESIGN.md                             # Especificação Google Labs (cross-tool)
├── README.md                             # Este arquivo
├── SETUP.md                              # Guia de instalação
├── figma-config.example.json             # Template para configuração local (opcional)
└── references/
    ├── VISAO_GERAL.md                    # Sempre lido primeiro — mapa de navegação
    ├── FIGMA_CONFIG.md                   # Guia de uso dos fileKeys e configuração
    ├── CORES.md                          # Sistema de cores com regras
    ├── TIPOGRAFIA.md                     # Fontes, tamanhos, composições
    ├── GLOSSARIO_PAPEIS_TEXTO.md         # Definição dos 10 papéis de texto
    ├── ESPACAMENTO.md                    # Escala, grid, border-radius
    ├── COMPONENTES.md                    # Componentes com props (auto-gerado)
    ├── PADROES.md                        # Padrões de página
    ├── MAPA_FONTES.md                    # Mapa de arquivos (auto-gerado)
    ├── SDD_PARA_TELA.md                  # Tradução SDD → UI (10 passos)
    ├── SDD_AVANCADO.md                   # Tradução de seções técnicas do SDD
    └── CHECKLIST_REVISAO.md              # Checklist de revisão visual
```

## Fontes do Figma

A skill usa dois arquivos do Figma como fonte da verdade:

| Prioridade | Arquivo | FileKey |
|---|---|---|
| 1º (buscar primeiro) | Foundations, Components & Icons Rebrand (TO-BE) | `HeyN4w209HWh8rfpTDiwyf` |
| 2º (fallback) | Components Web (AS-IS) | `QJmwu6sR06xmyGAoBaXuEn` |

Estes fileKeys estão embutidos no SKILL.md e funcionam em qualquer contexto (Claude.ai ou Claude Code).

Para customizar (adicionar/remover arquivos), crie `.claude/figma-config.json` no projeto — ele tem prioridade sobre os fileKeys embutidos.

## Instalação

### Opção 1: Script automático (recomendado)

```bash
unzip olist-ds-kit.zip
cd olist-ds-kit
bash setup.sh
```

O script copia a skill, o figma-config.json e atualiza o .gitignore automaticamente.

### Opção 2: Claude Code (manual)

```bash
mkdir -p .claude/skills
cp -r olist-ds-specialist-v2/ .claude/skills/olist-ds-specialist/
```

### Opção 3: Claude.ai

1. Settings → Customize → Skills
2. Upload → selecionar o ZIP ou a pasta `olist-ds-specialist-v2/`
3. Ativar a skill

Na opção Claude.ai, os fileKeys do Figma já estão embutidos no SKILL.md — não precisa de configuração adicional.

### Opção 4: Compartilhada via Git

```bash
cp -r olist-ds-specialist-v2/ .claude/skills/olist-ds-specialist/
git add .claude/skills/
git commit -m "feat: skill corporativa do design system v2.1"
```

## Uso

### Básico (traduzir SDD em UI)
```
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR SDD AQUI]
```

### Avançado (SDDs com RNFs, DACI, Métricas)
```
Use $olist-ds-specialist para criar UI completa deste SDD,
incluindo decisões de RNFs, DACI e Métricas de Sucesso:
[COLAR SDD COMPLETO AQUI]
```

### Revisão de UI
```
Use $olist-ds-specialist para revisar se esta tela segue 
as regras do design system Olist:
[COLAR CÓDIGO OU SCREENSHOT]
```

### Figma (criação faseada com validação)
```
Use $olist-ds-specialist para criar UI completa no Figma:
[COLAR SDD AQUI OU ANEXAR ARQUIVO]
```

Claude vai:
1. Listar todas as telas identificadas e aguardar validação
2. Buscar componentes nos arquivos do Figma (TO-BE primeiro, AS-IS como fallback)
3. Criar tela por tela, aguardando feedback a cada entrega
4. Aplicar Auto Layout, tokens e nomenclatura semântica

## Auto-sync

A cada `npm run build`, os arquivos `COMPONENTES.md`, `MAPA_FONTES.md` e `VISAO_GERAL.md` são regenerados com o estado real do código.

A cada `npm run wiki`, o Wiki do projeto é atualizado com métricas, componentes e status atuais.

## Manutenção

- Atualizar `MAPA_FONTES.md` quando novos componentes forem criados (automático)
- Atualizar `CORES.md` e `TIPOGRAFIA.md` quando tokens mudarem
- Atualizar `GLOSSARIO_PAPEIS_TEXTO.md` se novos papéis de texto forem criados
- Atualizar fileKeys no SKILL.md se os arquivos do Figma mudarem
- Nunca promover comportamento inferido como padrão sem validar no código real

## Changelog

### v2.1 (2026-05-19)
- FileKeys do Figma embutidos no SKILL.md (funciona sem figma-config.json)
- Adicionado `FIGMA_CONFIG.md` (12º arquivo de referência)
- Adicionado `SETUP.md` (guia de instalação)
- Adicionado `figma-config.example.json` (template)
- Adicionado `setup.sh` (instalação automática)
- Adicionado `generate-wiki.mjs` (Wiki auto-gerado)
- Atualizado `sync-skill.mjs` para v2.1

### v2.0 (2026-05-04)
- Adicionado `GLOSSARIO_PAPEIS_TEXTO.md` (10 papéis de texto)
- Adicionado `SDD_AVANCADO.md` (RNFs, DACI, Métricas, Rollout, Observabilidade)
- Incrementado `SDD_PARA_TELA.md` (passos 8, 9, 10)
- Incrementado `TIPOGRAFIA.md` (mapeamento papéis → tokens)
- Incrementado `VISAO_GERAL.md` (mapa de navegação v2.0)

### v1.0 (2026-01-12)
- Release inicial com 9 arquivos de referência
