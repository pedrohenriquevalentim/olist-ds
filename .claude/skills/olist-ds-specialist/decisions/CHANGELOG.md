# Changelog — Decisões de Design de Produto

Histórico de atualizações sincronizado com a skill `olist-ds-specialist`.
Atualizado automaticamente pelo `sync-skill-meta.mjs` a cada `npm run ship`.

## v3.11 (2026-07-04)

> Skill atualizada para v3.11. Referências sincronizadas automaticamente.

## v3.10 (2026-07-02)

> Skill atualizada para v3.10. Referências sincronizadas automaticamente.

## v3.9 (2026-07-02)

> Skill atualizada para v3.9. Referências sincronizadas automaticamente.

## v3.8 (2026-06-29)

> Skill atualizada para v3.8. Referências sincronizadas automaticamente.

## v3.7 (2026-06-26)

> Skill atualizada para v3.7. Referências sincronizadas automaticamente.

## v3.6 (2026-06-23)

> Skill atualizada para v3.6. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: SKILL.md, CHANGELOG.md, README.md, SETUP.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md
- Outros arquivos: claude/skills/olist-ds-specialist/CHANGELOG.md

## v3.5 (2026-06-23)

> Skill atualizada para v3.5. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: CHANGELOG.md, README.md, SETUP.md, SKILL.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md

## v3.4 (2026-06-23)

> Skill atualizada para v3.4. Referências sincronizadas automaticamente.

- Arquivos da skill modificados:

## v3.3 (2026-06-23)

> Skill atualizada para v3.3. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: README.md
- Decisões de design atualizadas: decisions/CHANGELOG.md
- Outros arquivos: claude/decisions/INDEX.md

## v3.2 (2026-06-23)

> Criação da pasta `.claude/decisions/` — decisões extraídas do CLAUDE.md e organizadas em arquivos separados por tema.

- Estrutura inicial criada com 5 decisões técnicas e 5 decisões de UX/Design
- `technical/TOKENS.md` — regras de consumo de tokens CSS e unidades rem
- `technical/COMPONENTES_REACT.md` — convenções de estrutura, props e testes
- `technical/ICONES.md` — ReactNode, currentColor, sem pacotes externos
- `technical/ACESSIBILIDADE.md` — roles ARIA, navegação por teclado, WCAG AA
- `technical/ASSETS_FIGMA.md` — fluxo Figma MCP, identificadores, declaração SVG
- `ux-design/PRINCIPIOS.md` — 4 princípios de design Olist e identidade visual
- `ux-design/ESPACAMENTO_LAYOUT.md` — grid 4px, 5 padrões de página, estrutura de tela
- `ux-design/TIPOGRAFIA.md` — escala tipográfica, 10 papéis de texto
- `ux-design/FLUXO_PRD_FIGMA.md` — hierarquia de bibliotecas, busca e regras de build
- `ux-design/UX_WRITING.md` — tom B2B, regras por tipo de texto
- Cada arquivo referencia os arquivos da skill que governam os detalhes completos
- Seção `## Histórico` em cada arquivo para versionamento incremental
- `sync-skill-meta.mjs` atualizado para varrer `.claude/decisions/` ao renomear referências
