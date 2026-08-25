## v3.18 (2026-08-25)
- Arquivos da skill modificados: README.md, SKILL.md, component-registry.json, decisions/INDEX.md, decisions/ux-design/COMPONENTES_POR_ZONA.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, figma-config.json, references/COMPONENTES.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/TEMPLATES_PRODUTO.md

## v3.17 (2026-08-23)
- **TOKEN_CATALOG.md criado:** catálogo completo de 1.194 tokens CSS com valores e Figma RGB 0–1 para uso direto na Plugin API. Deve ser regenerado com `npm run sync:skill` quando o CSS mudar.
- **component-registry.json:** 55 de 64 componentes com `variantsConfirmed: true` (antes: 17). Todas as propriedades Figma confirmadas via `get_metadata` com 25 URLs de página. Dois novos componentes adicionados: Drawer e Modal (WIP).
- **CORES.md reescrito:** nomes primitivos corrigidos (`--color-gray-gray-0`, não `--color-gray-0`); tokens semânticos (`--color-background-*`, `--color-text-*`, `--color-border-*`, `--color-shape-*`) adicionados como seção principal; nova seção "Uso em Figma Plugin API" com sintaxe correta de fills (RGB 0–1).
- **TOKENS.md (decisions/technical) reescrito:** hierarquia 3 camadas (Primitivo → Semântico → Componente), tabela "com repo vs sem repo", nomes corretos vs incorretos.
- **Correções de token em 6 arquivos:** `--font-weight-semibold` → `--font-weight-600` (alias não existe no CSS); cores primitivas corrigidas para nomes reais.
- **HARNEES_TELAS.md:** sintaxe Figma Plugin API documentada para fills, strokes e loadFontAsync.

## v3.16 (2026-08-22)
- **Caso 5 (`/ds-construir`):** novo caso de uso e slash command para criar ou evoluir componentes no Figma com arquitetura correta de tokens. Fluxo token-first: auditoria via `get_variable_defs`, decision tree base→theme→component, Gate 1 (plano de tokens para aprovação), construção com Auto Layout e bind de variáveis, Gate 2 (screenshot). Suporta modo NOVO (intenção textual) e modo EVOLUÇÃO (URL Figma). Termina no Figma — não gera código React.
- Pasta `.claude/skills/ds-construir/` criada com `SKILL.md` wrapper delegando ao Caso 5
- Caso 4 atualizado: nota de fallback no passo 9 referencia `/ds-construir` quando componente não existe no inventário
- Fluxo de Decisão e tabela de Slash Commands atualizados com `/ds-construir`

## v3.15 (2026-08-19)
- **Caso 7 (`/ds-componente`):** passa a gerar `NomeComponente.metadata.json` como sexto arquivo obrigatório (purpose/useWhen/doNotUseWhen/pairsWith/note/variants/states/slots/tokens/figma), com gate obrigatório de aprovação do usuário antes de código e docs
- Campo `componentKey` adicionado ao bloco `figma` do schema de metadata (identificador do componente publicado na library, diferente de `fileKey`/`nodeId`)
- `CLAUDE.md` raiz atualizado: seção "Estrutura de Cada Componente" e seção 9 "Saída Esperada"
- Regras críticas 13 ("Sempre Faça") e 10 ("Nunca Faça") adicionadas
- 10 componentes retroativos atualizados com `fileKey`/`componentKey` reais de `component-registry.json`

## v3.14 (2026-07-20)
- `/ds-sync`: inventário de componentes ressincronizado com a `design system (base)` — famílias Tabela, Gráfico (nova categoria "Data Visualization"), `Paginator`, `Badge`, `Sort`, `Reorder`, `Loading`, `Overlay`, `Cookie`, `Logout`, `Profile`, `Dashboard`, `List`, `Task List`, `Avatar`, `Card`
- "Text Area" renomeado para "Input Paragraph" (mesmo componente, nome real confirmado no Figma)
- Gap do `Paginator`/`Overlay` marcado como resolvido em `GOVERNANCA_TOKENS.md` — componentes já existem na library

## v3.13 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.12 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.11 (2026-07-04)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.10 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.9 (2026-07-02)
- Sincronização de versão (sem mudanças funcionais documentadas)

## v3.8 (2026-06-29)
- **Slash Commands:** 6 skills finas criadas em `.claude/skills/ds-*/` — `/ds-implementar`, `/ds-tela`, `/ds-figma`, `/ds-componente`, `/ds-revisar`, `/ds-sync` — cada uma delega ao caso correspondente da skill principal
- **Caso 8 (`/ds-implementar`):** novo fluxo para devs de BU converterem telas Figma em JSX tipado usando componentes DS, sem precisar conhecer o inventário de memória
- **Fluxo de Decisão:** roteamento explícito por slash command adicionado antes da detecção automática de intenção
- **`generate-wiki.mjs`:** seção "Como Usar" atualizada com tabela de slash commands
- **`package.json`:** `ship` corrigido para incluir `.storybook/`, `README.md` e `package.json` no `git add` _(npm run ship foi removido posteriormente; fluxo migrado para npm run release)_

## v3.7 (2026-06-25)
- **Fluxo unificado Figma → código + docs:** Caso 7 adicionado ao `SKILL.md` — implementação de componente a partir de URL do Figma executa em paralelo geração de código (5 arquivos — agora 6 desde v3.15, que adicionou metadata.json) e geração de frame de docs no Figma (demo · props · anatomia · acessibilidade)
- `CLAUDE.md` atualizado: passo 10 na seção "Geração de Componentes" e nota de redirecionamento para `olist-ds-specialist` Caso 7
- `decisions/technical/COMPONENTES_REACT.md` atualizado: seção "Documentação no Figma" adicionada
- Ramo "Criar componente" no Fluxo de Decisão expandido para cobrir o fluxo unificado

## v3.6 (2026-06-23)
- Arquivos da skill modificados: SKILL.md, CHANGELOG.md, README.md, SETUP.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md
- Outros arquivos: claude/skills/olist-ds-specialist/CHANGELOG.md

## v3.5 (2026-06-23)
- Arquivos da skill modificados: CHANGELOG.md, README.md, SETUP.md, SKILL.md, component-registry.json, decisions/CHANGELOG.md, decisions/INDEX.md, decisions/technical/ACESSIBILIDADE.md, decisions/technical/ASSETS_FIGMA.md, decisions/technical/COMPONENTES_REACT.md, decisions/technical/ICONES.md, decisions/technical/TOKENS.md, decisions/ux-design/ESPACAMENTO_LAYOUT.md, decisions/ux-design/FLUXO_PRD_FIGMA.md, decisions/ux-design/PRINCIPIOS.md, decisions/ux-design/TIPOGRAFIA.md, decisions/ux-design/UX_WRITING.md, figma-config.json, references/CHECKLIST_REVISAO.md, references/COMPONENTES.md, references/CORES.md, references/ESPACAMENTO.md, references/FIGMA_CONFIG.md, references/GLOSSARIO_PAPEIS_TEXTO.md, references/HARNEES_TELAS.md, references/MAPA_FONTES.md, references/PADROES.md, references/SDD_AVANCADO.md, references/SDD_PARA_TELA.md, references/TEMPLATES_PRODUTO.md, references/TIPOGRAFIA.md, references/UX_WRITING.md, references/VISAO_GERAL.md

## v3.4 (2026-06-23)
- Arquivos da skill modificados: 

## v3.3 (2026-06-23)
- Arquivos da skill modificados: README.md
- Decisões de design atualizadas: decisions/CHANGELOG.md
- Outros arquivos: claude/decisions/INDEX.md

## v3.2 (2026-06-15)
- **UX Writing:** `UX_WRITING.md` adicionado como referência de copy e tom de voz (fonte: skill CX Writing v2.0)
- Novo ramo no Fluxo de Decisão para "Criar ou revisar textos de UI"
- Seção 10 adicionada ao `CHECKLIST_REVISAO.md` com 18 itens de revisão de UX Writing
- Regra crítica 5 no `SKILL.md`: consultar `UX_WRITING.md` ao criar qualquer texto na UI
- `VISAO_GERAL.md` atualizado: 15 referências, nova entrada `UX_WRITING.md`, novo bloco de leitura para copy/UX Writing
- Protocolo de triagem obrigatório: componente → contexto → objetivo antes de qualquer copy
- 4 Pilares de Conteúdo como critério de validação (Conciso, Claro, Significativo, Dialógico)
- 12 tipos de texto mapeados com regras DO/DON'T, limites de caracteres e tokens visuais
- Diretrizes B2B (lojista) vs. B2C (consumidor) com linguagem e tom distintos
- Iniciativa de abrasileiramento documentada (sem hífen, termos técnicos contextualizados, sem termos internos externamente)
- Nomenclatura de produtos Olist (primeira menção + menções posteriores)
- Mapeamento SDD → tipo de texto para tradução de requisitos em copy
- `SKILL.md` atualizado para v3.2

## v3.1 (2026-06-05)
- **Harness:** `HARNEES_TELAS.md` adicionado como gate pré-construção obrigatório no fluxo Figma
- Gate com 6 itens binários — o Claude só avança para criação de frames se todos forem marcados
- Restrições de zona por template (ERP e Envios/Hub/Conta Digital): colunas "Pode conter" e "Não pode conter" para cada zona A–E
- Limites quantitativos por componente (ex: máx 1 `Button` primary por tela, máx 1 `Heading` por tela)
- Tabela de contextos válidos e proibidos por componente
- Harness de primitivos: define o que pode ser construído do zero e configuração obrigatória de cada primitivo
- Padrão de nomenclatura de layers obrigatório com formato e exemplos
- Estados mínimos obrigatórios por padrão de página (Tabela, Form, Dashboard, Detalhe, Empty State)
- Regras específicas para skeleton loading
- Formato padronizado para reportar conflitos com o harness (Seção 8)
- `SKILL.md` atualizado para v3.1: harness integrado no fluxo de decisão, tabela de referências e Caso 4

## v3.0 (2026-06-03)
- Remoção do workflow de plugin JSON intermediário — `use_figma` como canal único
- **AI Components** como library master com preferência absoluta sobre ERP components
- `libraryKeys` + `searchPriority` + `blockedLibraries` como fonte da verdade no figma-config.json
- TEMPLATES_PRODUTO.md adicionado (zonas de layout por produto: ERP, Envios, Hub, Conta Digital)
- Regras da Figma Plugin API documentadas (`layoutSizing`, `counterAxisAlignItems`, fonts, etc.)
- Caso de uso 5: componente não existe no inventário → construir com primitivos + documentar
- Caso de uso 6: sincronizar inventário de componentes

## v2.1 (2026-05-07)
- figma-config.example.json na skill (compartilhável)
- FIGMA_CONFIG.md como 12º arquivo de referência
- Instrução para ler figma-config.json antes do Figma MCP
- sync-skill.mjs v2.1
- generate-wiki.mjs criado

## v2.0 (2026-05-04)
- GLOSSARIO_PAPEIS_TEXTO.md (10 papéis de texto)
- SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout)
- Workflow faseado no Figma
- Sistema de ícones centralizado
- sync-skill.mjs para auto-geração
- validate-icon-migration.mjs

## v1.0
- Versão inicial da skill
- 8 arquivos de referência
