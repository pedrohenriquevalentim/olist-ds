# Olist Design System Specialist

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

Inspirada na abordagem do [Pacy Design](https://github.com/lebrunhari/pacy_design) (progressive disclosure com referências separadas) e compatível com a especificação [DESIGN.md do Google Labs](https://github.com/google-labs-code/design.md).

## Por que funciona

A precisão de 90%+ na reutilização do design system vem de três decisões estruturais:

1. **Referências separadas** — em vez de um markdown gigante, cada dimensão do design system tem seu próprio arquivo (cores, tipografia, espaçamento, componentes). O agente carrega apenas o que precisa para a tarefa.

2. **Source Map** — cada regra de design aponta para o arquivo real no código. O agente não inventa padrões — ele confirma com evidência do que já existe.

3. **SDD to Screen** — um guia de tradução que ensina o agente a ler um SDD e transformar requisitos funcionais em decisões de UI concretas (qual componente, qual padrão de página, quais estados).

## Estrutura

```
olist-ds-skill/
├── SKILL.md                              # Skill principal — role, escopo, decision flow
├── DESIGN.md                             # Google DESIGN.md spec (cross-tool compatible)
├── README.md                             # Este arquivo
├── references/
│   ├── OLIST_DS_OVERVIEW.md              # Sempre lido primeiro — brand, princípios, tokens rápidos
│   ├── COLORS.md                         # Sistema de cores completo com usage rules
│   ├── TYPOGRAPHY.md                     # Font families, sizes, weights, compositions
│   ├── SPACING.md                        # Escala de espaçamento, layout grid, border-radius
│   ├── COMPONENTS.md                     # Componentes existentes com props e visual specs
│   ├── PATTERNS.md                       # Padrões de página (table, form, dashboard, detail)
│   ├── SOURCE_MAP.md                     # Mapeamento de cada arquivo no codebase
│   ├── SDD_TO_SCREEN.md                  # Como traduzir SDD → decisões de UI
│   └── VISUAL_REVIEW_CHECKLIST.md        # Checklist de revisão visual + acessibilidade
└── agents/
    └── (reservado para futuras configurações de agente)
```

## Instalação

### No Claude Code (terminal)

```bash
# Skill pessoal (todos os projetos)
mkdir -p ~/.claude/skills
cp -r olist-ds-skill ~/.claude/skills/

# Skill no projeto (compartilhada via Git)
cp -r olist-ds-skill .claude/skills/
git add .claude/skills/
git commit -m "feat: adiciona skill do design system"
```

### No Claude.ai (interface web)

1. Settings → Capabilities → ativar Code execution
2. Customize → Skills → Upload Skill
3. Selecionar a pasta `olist-ds-skill`

### DESIGN.md (qualquer ferramenta)

Copie `DESIGN.md` para a raiz de qualquer projeto. Funciona com Claude Code, Cursor, GitHub Copilot, Stitch, e qualquer ferramenta que suporte a especificação.

## Uso

### Criar tela a partir de SDD

```
Use $olist-ds-specialist para criar a tela descrita neste SDD:

[COLAR O SDD]
```

### Criar componente

```
Use $olist-ds-specialist para criar o componente Accordion 
seguindo os padrões do design system.
```

### Revisar tela existente

```
Use $olist-ds-specialist para revisar esta tela no Figma:
[LINK DO FIGMA]
```

### Criar protótipo no Figma

```
Use $olist-ds-specialist para criar um protótipo no Figma 
a partir deste PRD:

[COLAR O PRD]
```

## Manutenção

- Manter toda documentação em português e inglês
- Atualizar `SOURCE_MAP.md` quando novos componentes forem criados
- Atualizar `COMPONENTS.md` quando componentes forem adicionados ao DS
- Atualizar `COLORS.md` e `TYPOGRAPHY.md` quando tokens mudarem
- Nunca promover comportamento inferido como padrão sem validar no código real
- Sempre usar caminhos relativos ao projeto (`src/components/...`)
