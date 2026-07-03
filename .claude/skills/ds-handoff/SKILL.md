---
name: ds-handoff
description: Gera um manifesto em Markdown listando quais componentes do Olist Design System aparecem numa jornada do Figma (página, frame(s) ou componente(s)), para anexar numa descrição de PR ao time de desenvolvimento. Não gera código.
version: 1.0
---

# ds-handoff

Executa o **Caso 9** da skill `olist-ds-specialist`.

## O que fazer

O usuário forneceu um ou mais links do Figma representando uma jornada (página, frame(s) ou componente(s)). Gere um relatório em Markdown com os componentes DS usados — sem gerar código React.

## Passos obrigatórios

1. Carregar a skill principal: ler `.claude/skills/olist-ds-specialist/SKILL.md`
2. Executar o **Caso 9** dessa skill na íntegra

## Resumo do Caso 9

1. Extrair `fileKey` e `nodeId` de cada link recebido
2. `get_metadata` em cada um → identificar tipo do nó (PAGE, FRAME ou COMPONENT/COMPONENT_SET/INSTANCE) e resolver a lista de "telas" da jornada
3. Para cada tela: `get_design_context` → listar instâncias e comparar com `COMPONENTES.md`/`component-registry.json`
4. Agregar entre telas: deduplicar componentes usados (unindo variantes e telas onde aparecem); manter gaps por tela
5. Entregar Markdown com três seções: componentes DS utilizados, elementos sem equivalente DS, resumo numérico
6. Não gerar código, não commitar, não abrir PR — artefato é ad-hoc, só o bloco Markdown pronto para colar
