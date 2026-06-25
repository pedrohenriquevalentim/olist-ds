# Prompt de Auditoria — Olist Design System

> Execute este prompt sempre que houver dúvida sobre o estado da documentação, após criar componentes, ou quando o `npm run ship` parecer incompleto.
> Para rodar: copie o bloco abaixo e cole como mensagem no Claude Code.

---

## PROMPT DE AUDITORIA COMPLETA DO DESIGN SYSTEM

```
Você é o guardião do Olist Design System. Execute uma auditoria completa e corrija tudo que estiver desatualizado. Siga cada etapa na ordem.

---

## ETAPA 1 — Inventário de Mudanças no Repo

1. Execute `git log --oneline -20` para ver os últimos commits.
2. Execute `git diff HEAD~1 --name-only` para ver os arquivos alterados no último commit.
3. Execute `git status` para ver alterações não commitadas.
4. Liste mentalmente:
   - Quais componentes em src/components/ foram criados, modificados ou removidos?
   - Algum arquivo de skill (.claude/skills/olist-ds-specialist/) foi modificado?
   - O figma-config.json foi alterado?
   - O SKILL.md teve mudança de versão?
   - Scripts em scripts/ foram modificados?

---

## ETAPA 2 — Auditoria de Componentes vs Documentação

Para cada pasta em `src/components/`:

1. Verifique se existe: `.tsx`, `.module.css`, `.test.tsx`, `.stories.tsx`, `index.ts`
   - Se algum arquivo estiver faltando: crie-o seguindo as convenções do CLAUDE.md.

2. Verifique se `references/COMPONENTES.md` lista o componente com:
   - Nome correto
   - Props documentadas
   - Estados/variantes corretos
   - Se desatualizado: execute `npm run sync:skill` para regenerar.

3. Verifique se `references/MAPA_FONTES.md` reflete a estrutura atual de pastas.
   - Se desatualizado: execute `npm run sync:skill`.

4. Verifique se `references/VISAO_GERAL.md` lista o componente.
   - Se desatualizado: execute `npm run sync:skill`.

---

## ETAPA 3 — Auditoria da Estrutura da Skill

1. Leia `.claude/skills/olist-ds-specialist/README.md`.
   - Confirme que a seção `## Estrutura` reflete os arquivos reais da skill.
   - Confirme que há UMA ÚNICA seção `## Estrutura` (sem duplicatas).
   - Se desatualizado: execute `node scripts/sync-skill-meta.mjs`.

2. Leia `wiki/WIKI.md` (primeiras 50 linhas).
   - Confirme que a versão do pacote e a lista de componentes estão atuais.
   - Se desatualizado: execute `npm run wiki`.

3. Confirme que o `CLAUDE.md` raiz lista as libraries do Figma na ordem correta:
   - AI Components (prioridade 1)
   - ERP components (prioridade 2)
   - ERP recursos (prioridade 3)
   - ERP style guide (prioridade 4)
   - [design system] components web (prioridade 5)
   - Se desatualizado: execute `npm run sync:skill`.

---

## ETAPA 4 — Auditoria das Libraries do Figma

1. Leia `.claude/skills/olist-ds-specialist/figma-config.json`.
2. Para cada library em `searchPriority`, verifique se:
   - O `libraryKey` está presente e completo.
   - A `description` está correta e atual.
   - Não há libraries novas que deveriam ser adicionadas.
   - Não há libraries obsoletas que deveriam ir para `blockedLibraries`.
3. Se o `figma-config.json` precisar de ajuste: edite diretamente e depois execute `npm run sync:skill` para propagar para o CLAUDE.md.

> ATENÇÃO: não é possível verificar automaticamente se há novos componentes nas libraries Figma sem chamar o MCP. Se o usuário mencionar que foi adicionado algo novo no Figma, use `search_design_system` com `includeLibraryKeys: searchPriority` para confirmar. Documente qualquer novo componente encontrado em `references/FIGMA_CONFIG.md`.

---

## ETAPA 5 — Auditoria do Script `npm run ship`

Execute mentalmente o fluxo do ship e confirme que cada passo produz os efeitos esperados:

```
npm run sync:skill-meta   → renomeia pasta se versão mudou, regenera README da skill, regenera wiki/WIKI.md
npm run pipeline          → build:tokens + generate:all + tsc + test:run + build-storybook
git add -A                → inclui todas as mudanças
git commit                → commit automático "chore: release"
npm version patch         → bump de versão no package.json
git push origin HEAD --tags → push com tags
```

Verifique se algum destes itens está FALTANDO no ship:

- [ ] `sync:skill-meta` está chamando `buildStructureSection()` que inclui `decisions/`?
  - Confirme lendo as primeiras 80 linhas de `scripts/sync-skill-meta.mjs`.
- [ ] `replaceStructureBlock()` usa regex sem flag `m` no `$`?
  - Confirme que a regex é `/## Estrutura[\s\S]*?(?=\n## [A-ZÀ-Ú])/` (sem flag `m`).
- [ ] `generate-wiki.mjs` está sendo chamado dentro de `sync-skill-meta.mjs`?
  - Confirme que `regenerateWiki()` é chamado no final do script.
- [ ] `sync:skill` (que gera COMPONENTES.md, MAPA_FONTES.md, VISAO_GERAL.md) está sendo chamado?
  - Confirme que o ship começa com `npm run sync:skill && npm run sync:skill-meta && ...`
- [ ] `updateLastModified()` está sendo chamada no Main, antes de atualizar o README?
  - Confirme que há `updateLastModified(skillDir, today)` antes do bloco "Atualiza README.md".
- [ ] `updateSkillMdTitle()` recebe três argumentos `(skillDir, version, date)`?
  - Confirme que o H1 do SKILL.md fica no formato `v3.6 · 2026-06-25`.

---

## ETAPA 6 — Verificação de Versão e lastModified

1. Leia o campo `lastModified:` do frontmatter de `SKILL.md`:
   ```
   grep "lastModified" .claude/skills/olist-ds-specialist/SKILL.md
   ```

2. Compare com a data de hoje. Se estiver desatualizado:
   - Execute `node scripts/sync-skill-meta.mjs`
   - Isso atualizará `lastModified`, o H1 do SKILL.md, o título do README e a wiki.

3. Confirme que o H1 do README da skill contém a data:
   ```
   head -1 .claude/skills/olist-ds-specialist/README.md
   ```
   Deve ser no formato: `# Olist Design System — Especialista (v3.6 · atualizado em YYYY-MM-DD)`

4. Confirme que o H1 do SKILL.md contém a data:
   ```
   grep "^# Olist" .claude/skills/olist-ds-specialist/SKILL.md
   ```
   Deve ser no formato: `# Olist Design System — Especialista v3.6 · YYYY-MM-DD`

5. Confirme que a wiki reflete a data de atualização correta:
   ```
   head -6 wiki/WIKI.md
   ```

Se qualquer um dos três estiver desatualizado: execute `node scripts/sync-skill-meta.mjs` e depois `npm run wiki`.

---

## ETAPA 7 — Relatório Final

Após verificar tudo, responda com uma tabela assim:

| Item | Status | Ação tomada |
|------|--------|-------------|
| Componentes com arquivos completos | ✅ / ⚠️ | ... |
| COMPONENTES.md atualizado | ✅ / ⚠️ | ... |
| MAPA_FONTES.mds atualizado | ✅ / ⚠️ | ... |
| VISAO_GERAL.md atualizado | ✅ / ⚠️ | ... |
| README da skill — seção Estrutura | ✅ / ⚠️ | ... |
| wiki/WIKI.md atualizado | ✅ / ⚠️ | ... |
| CLAUDE.md com libraries corretas | ✅ / ⚠️ | ... |
| figma-config.json consistente | ✅ / ⚠️ | ... |
| Script ship cobre todas as atualizações | ✅ / ⚠️ | ... |
| SKILL.md — campo lastModified atualizado | ✅ / ⚠️ | ... |
| SKILL.md — H1 com versão · data | ✅ / ⚠️ | ... |
| README da skill — título com data | ✅ / ⚠️ | ... |

Se houver qualquer ⚠️ que não pôde ser resolvido automaticamente, liste o que falta e por quê.
```

---

## QUANDO USAR ESTE PROMPT

| Situação | Usar? |
|----------|-------|
| Após criar um novo componente em `src/components/` | ✅ Sempre |
| Após modificar arquivos da skill (decisions/, references/) | ✅ Sempre |
| Após modificar `figma-config.json` | ✅ Sempre |
| Após `npm run ship` apresentar erro | ✅ Sempre |
| Antes de abrir um PR importante | ✅ Recomendado |
| Quando o README da skill parecer errado | ✅ Sempre |
| Quando a wiki/WIKI.md parecer desatualizada | ✅ Sempre |
| Rotina semanal de manutenção | ✅ Recomendado |

---

## OBSERVAÇÃO SOBRE O FIGMA

As libraries do Figma só podem ser auditadas via MCP (`search_design_system`). O script `ship` não faz essa verificação automaticamente porque exige conexão com a API do Figma.

Para verificar novos componentes no Figma manualmente, peça ao Claude:
> "Verifique se há novos componentes ou atualizações nas libraries do Figma listadas no figma-config.json e compare com o que está documentado em references/COMPONENTES.md"
