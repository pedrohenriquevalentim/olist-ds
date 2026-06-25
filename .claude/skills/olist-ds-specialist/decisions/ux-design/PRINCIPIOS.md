# Decisão UX/Design: Princípios de Design da Olist

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/VISAO_GERAL.md`

---

## Contexto

A Olist é uma plataforma B2B de e-commerce para sellers. A interface é orientada a ferramenta — sellers usam 8+ horas por dia. Clareza e escaneabilidade têm prioridade sobre decoração.

---

## Princípios

### 1. Clareza acima de estética
Todo elemento tem uma função. Remover o que não ajuda o seller a completar uma tarefa.

### 2. Consistência acima de novidade
Reutilizar componentes existentes. Um padrão novo é um custo, não uma feature.
- Sempre verificar `references/COMPONENTES.md` antes de criar qualquer elemento novo
- Componentes existentes: Button, Checkbox, Chip, Icon, InputSelect, Logo, ProdutosOlistIcons

### 3. Densidade com hierarquia
ERPs são densos em dados. Usar peso tipográfico, cor e espaçamento para criar hierarquia — não espaço vazio.

### 4. Acessível por padrão
WCAG AA mínimo. Contraste 4.5:1. Navegável por teclado. Compatível com leitor de tela.
→ Ver `technical/ACESSIBILIDADE.md` para regras técnicas.

---

## Identidade Visual (resumo)

| Elemento | Valor |
|---|---|
| Fonte | Plus Jakarta Sans (Google Fonts) |
| Cor primária | `--color-blue-500: #0a4ee4` |
| Cor de fundo | `--color-gray-0: #fcfbf8` (neutros quentes) |
| Espaçamento | Grid de 4px |
| Border-radius | 8px padrão, 4px pequenos, 9999px pills |
| Sombras | Sutis — `rgba(5,5,5)` em baixa opacidade |

---

## Referências na Skill

- Visão completa com princípios e referência rápida de tokens → `references/VISAO_GERAL.md`
- Fluxo de leitura recomendado para cada tipo de tarefa → `references/VISAO_GERAL.md` (seção "Quando Usar Cada Referência")

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md e VISAO_GERAL.md
