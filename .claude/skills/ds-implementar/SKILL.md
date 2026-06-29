---
name: ds-implementar
description: Converte uma tela do Figma em JSX React tipado usando os componentes do Olist Design System. Para devs de BU que recebem um link do Figma e precisam implementar a tela sem conhecer o inventário do DS de memória.
version: 1.0
---

# ds-implementar

Executa o **Caso 8** da skill `olist-ds-specialist`.

## O que fazer

O usuário forneceu uma URL do Figma de uma tela de produto. Gere o código React para essa tela usando os componentes do Olist Design System.

## Passos obrigatórios

1. Carregar a skill principal: ler `.claude/skills/olist-ds-specialist/SKILL.md`
2. Executar o **Caso 8** dessa skill na íntegra

## Resumo do Caso 8

1. Extrair `fileKey` e `nodeId` da URL
2. `get_metadata` → mapear estrutura da tela
3. `get_design_context` → identificar elementos visuais
4. `get_screenshot` → referência visual
5. Buscar `COMPONENTES.md` do GitHub para obter props reais:
   `https://raw.githubusercontent.com/pedrohenriquevalentim/olist-ds/main/.claude/skills/olist-ds-specialist/references/COMPONENTES.md`
6. Para cada elemento: mapear para componente DS ou HTML semântico + tokens CSS
7. Gerar componente React com imports de `@pedrohenriquevalentim/olist-ds`
8. Entregar: código + lista de componentes DS usados + elementos sem equivalente DS
