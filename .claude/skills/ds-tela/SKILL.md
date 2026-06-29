---
name: ds-tela
description: Gera uma tela React a partir de um SDD ou PRD usando os componentes do Olist Design System. Detecta automaticamente se o documento é básico (só RFs) ou completo (com RNFs, DACI, Métricas, Rollout).
version: 1.0
---

# ds-tela

Executa o **Caso 1** ou **Caso 2** da skill `olist-ds-specialist` (auto-detecta).

## O que fazer

O usuário colou um SDD ou PRD. Gere a tela React correspondente usando componentes do DS.

## Passos obrigatórios

1. Carregar a skill principal: ler `.claude/skills/olist-ds-specialist/SKILL.md`
2. Detectar profundidade do documento:
   - Tem RNFs, DACI, Métricas ou Rollout? → executar **Caso 2**
   - Apenas Requisitos Funcionais? → executar **Caso 1**
3. Executar o caso correspondente na íntegra
