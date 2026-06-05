## v3.1 (2026-06-05)
- **Harness:** `HARNESS_TELAS.md` adicionado como gate pré-construção obrigatório no fluxo Figma
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
