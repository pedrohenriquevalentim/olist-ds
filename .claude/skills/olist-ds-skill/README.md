# Olist Design System — Especialista

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

Inspirada na abordagem do [Pacy Design](https://github.com/lebrunhari/pacy_design) (progressive disclosure com referências separadas) e compatível com a especificação [DESIGN.md do Google Labs](https://github.com/google-labs-code/design.md).

## Por que funciona

A precisão de 90%+ na reutilização do design system vem de três decisões:

1. **Referências separadas** — cada dimensão do DS tem seu arquivo. O agente carrega só o necessário.
2. **Mapa de fontes** — cada regra aponta para o arquivo real no código. O agente confirma com evidência.
3. **SDD para Tela** — guia que traduz requisitos funcionais em decisões de UI concretas.

## Estrutura

```
olist-ds-skill/
├── SKILL.md                              # Papel, escopo, fluxo de decisão
├── DESIGN.md                             # Especificação Google Labs (cross-tool)
└── references/
    ├── VISAO_GERAL.md                    # Sempre lido primeiro
    ├── CORES.md                          # Sistema de cores com regras
    ├── TIPOGRAFIA.md                     # Fontes, tamanhos, composições
    ├── ESPACAMENTO.md                    # Escala, grid, border-radius
    ├── COMPONENTES.md                    # Componentes com props (auto-gerado)
    ├── PADROES.md                        # Padrões de página
    ├── MAPA_FONTES.md                    # Mapa de arquivos (auto-gerado)
    ├── SDD_PARA_TELA.md                  # Tradução SDD → UI
    └── CHECKLIST_REVISAO.md              # Checklist de revisão visual
```

## Instalação

### No Claude Code

```bash
mkdir -p ~/.claude/skills
cp -r olist-ds-skill ~/.claude/skills/
```

### No projeto (compartilhada via Git)

```bash
cp -r olist-ds-skill .claude/skills/
git add .claude/skills/
git commit -m "feat: skill corporativa do design system"
```

### No Claude.ai

Customize → Skills → Upload → selecionar pasta

## Uso

```
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR O SDD]
```

## Auto-sync

A cada `npm run build`, os arquivos COMPONENTES.md, MAPA_FONTES.md e VISAO_GERAL.md são regenerados com o estado real do código.

## Manutenção

- Atualizar MAPA_FONTES.md quando novos componentes forem criados (automático)
- Atualizar CORES.md e TIPOGRAFIA.md quando tokens mudarem
- Nunca promover comportamento inferido como padrão sem validar no código real
