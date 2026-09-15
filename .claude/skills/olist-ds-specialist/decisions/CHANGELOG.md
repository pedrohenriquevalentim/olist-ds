# Changelog — Decisões de Design de Produto

Histórico de atualizações sincronizado com a skill `olist-ds-specialist`.
Atualizado automaticamente pelo `sync-skill-meta.mjs` a cada `npm run ship`.

## v3.21 (2026-09-15)

> Skill atualizada para v3.21. Referências sincronizadas automaticamente.

## v3.20 (2026-09-15)

> Skill atualizada para v3.20. Referências sincronizadas automaticamente.


### Protocolo de Inicialização de Arquivo + Cover Rebrand Olist + Skill auto-contida para Caso 7

**Arquivos modificados:** `SKILL.md`, `references/HARNEES_TELAS.md`, `references/FIGMA_CONFIG.md`  
**Arquivo criado:** `references/METADATA_SCHEMA.md`

#### Added
- **Seção 0 — Protocolo de Inicialização de Arquivo** em `HARNEES_TELAS.md` (v1.6 → v2.0): 4 passos obrigatórios antes de qualquer frame — `create_new_file`, configuração das 3 páginas padrão, import de sentinels (Button + variável semântica), verificação via `get_libraries` + `get_variable_defs`
- **Layout oficial do cover** (referência `HeyN4w209HWh8rfpTDiwyf` node `10942:33207`): 1920×960px, fundo `#f2f0e8`, 5 campos dinâmicos com resolução automática — `{NOME DO USUÁRIO}` (primeiro nome do operador, CAIXA ALTA), `{nome do projeto}` (title case, máx 45 chars), `{unidade de negócio}` (detectado do contexto), `{status}` (default "Em exploração"), `{ano atual}` (YYYY). Pill "DESIGN TEAM" verde `#779e3d`, pill do designer dark navy `#001647` em x=590 y=150
- **`references/METADATA_SCHEMA.md`** (novo): schema completo do `NomeComponente.metadata.json` para o Caso 7 (`/ds-componente`) — elimina dependência do `CLAUDE.md` raiz do repositório `olist-ds`; skill passa a ser auto-contida para geração de componentes
- **Gate Obrigatório item [0]** em `HARNEES_TELAS.md`: "Protocolo de Inicialização (Seção 0) concluído — arquivo criado, páginas configuradas, sentinel importado, `get_libraries` e `get_variable_defs` passando?" — **BLOQUEANTE**
- **`FIGMA_CONFIG.md`** checklist: 2 novos itens — validação de `libraryKey` via `get_libraries` e confirmação de `get_variable_defs` pós-sentinel
- **`SKILL.md`** "Sempre Faça" item 14: executar Protocolo de Inicialização antes de qualquer `use_figma`
- **`SKILL.md`** "Nunca Faça" item 19: criar frames sem protocolo de inicialização concluído
- **`SKILL.md`** Caso 5 PRÉ-FLIGHT: `get_variable_defs` no arquivo DS confirma 3 coleções antes de criar tokens

#### Changed
- **Caso 4**: passo 8 (inicialização) adicionado; passos renumerados 9–11; fallback distingue "library inacessível" (PARAR) de "componente genuinamente ausente" (usar primitivos)
- **Caso 7** referência de schema: `CLAUDE.md` raiz → `references/METADATA_SCHEMA.md` + `decisions/technical/COMPONENTES_REACT.md`
- **`HARNEES_TELAS.md`** Passo 2 reescrito com spec visual completa do cover: tabela de campos dinâmicos, tabela de elementos, implementação com caminho primário (componente DS real) + fallback (primitivos com spec exata)

#### Fixed
- **Gap crítico silencioso 1**: `importComponentByKeyAsync` falhava sem erro em arquivos novos/sem library subscrita — resolvido por sentinel obrigatório no Passo 3 da Seção 0
- **Gap crítico silencioso 2**: `get_variable_defs` retornava vazio em arquivos novos, resultando em fills hardcoded em vez de tokens DS — resolvido pela verificação bloqueante no Passo 4

---

## v3.19 (2026-09-01)

> Skill atualizada para v3.19. Referências sincronizadas automaticamente.


### Convenções de layout ERP — definidas e registradas

**Arquivos modificados:** `references/TEMPLATES_PRODUTO.md`, `component-registry.json`, `SKILL.md`

#### Added
- **Frame raiz:** `padding 8px` em todos os lados + `fills #F1F0E8` + `gap 8px` entre Zona A e Container
- **Container (Zonas B–F):** `cornerRadius 12px`
- **Zona B:** `topLeftRadius 12` · `topRightRadius 12` · bottom 0
- **Zona F:** `bottomLeftRadius 12` · `bottomRightRadius 12` · top 0
- **`TableCellExtended`** adicionado ao `component-registry.json` — componentKey `8ba1fe2c9d32e56a058c3946e17142223784c557`, variantes `role × type`, props `header text#10193:5` e `cell text#10193:6`, dimensões confirmadas, usage pattern documentado
- **Regras 11–18** adicionadas ao "Nunca Faça" do `SKILL.md`: clipsContent em zonas (11), strokes em zonas (12), button big/medium em B e C (13), label visível no input search (14), menu erp stage=* (15), tabela com primitivos (16), omitir padding 8px (17), #fcfbf8 no frame raiz (18)

#### Changed
- **`menu-global`** no registry: `note` e `erpLayoutRule` atualizados com regra `Produto=ERP` obrigatória na Zona A e resize correto (304×752px)
- **`Table`** no registry: `note` reescrita — proíbe instanciação direta; redireciona para `TableCellExtended`; marca `head` e `simple cell` como sub-peças internas
- **`TEMPLATES_PRODUTO.md`:** tabela de Zonas ERP, bloco "Regras ERP" e JSON de Estrutura de Layout atualizados com padding, gap, fills, cornerRadius por zona e TableCellExtended
- **Botões nas Zonas B e C:** `size=small` definido como padrão obrigatório
- **Zona E sem Zona F:** recebe `bottomLeftRadius: 12` e `bottomRightRadius: 12`

#### Fixed
- Referência a `"menu erp"` removida do JSON de Estrutura de Layout → substituída por `"menu-global"` com componentKey e `Produto=ERP`
- `clipsContent: false` e `strokes: []` definidos como obrigatórios em todas as zonas (explicitados no checklist)

---

## v3.18 (2026-08-25)

> Skill atualizada para v3.18. Referências sincronizadas automaticamente.

- Arquivos da skill modificados: README.md, SKILL.md, component-registry.json, decisions/INDEX.md, decisions/ux-design/COMPONENTES_POR_ZONA.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, figma-config.json, references/COMPONENTES.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/TEMPLATES_PRODUTO.md

## v3.17 (2026-08-23)

> Skill atualizada para v3.17. Referências sincronizadas automaticamente.

## v3.16 (2026-08-23)

> Skill atualizada para v3.16. Referências sincronizadas automaticamente.

## v3.15 (2026-07-21)

> Skill atualizada para v3.15. Referências sincronizadas automaticamente.

## v3.14 (2026-07-20)

> Skill atualizada para v3.14. Referências sincronizadas automaticamente.

## v3.13 (2026-07-04)

> Skill atualizada para v3.13. Referências sincronizadas automaticamente.

## v3.12 (2026-07-04)

> Skill atualizada para v3.12. Referências sincronizadas automaticamente.

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
