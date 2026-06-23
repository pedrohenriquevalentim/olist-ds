# Decisão Técnica: Assets via Figma MCP

**Categoria:** Técnica
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist-v3.2/figma-config.json`, `references/FIGMA_CONFIG.md`

---

## Decisão

Assets (imagens, SVGs) devem ser obtidos diretamente via Figma MCP (`download_assets`) e usados como fornecidos — nunca substituídos por placeholders nem dependentes de pacotes externos.

---

## Fluxo obrigatório ao implementar um componente a partir do Figma

1. Chamar `get_design_context` com o `nodeId` e `fileKey` extraídos da URL do Figma
2. Se a resposta for grande ou truncada, chamar `get_metadata` primeiro para mapear a árvore de nós
3. Chamar `get_screenshot` para referência visual
4. Baixar assets referenciados (`download_assets`) antes de iniciar a implementação
5. Validar o resultado renderizado contra o screenshot antes de concluir

---

## Regras

- Se o MCP retornar URL `localhost` para imagem ou SVG, usar diretamente como `src`
- Nunca criar placeholders quando uma URL de asset for fornecida
- Nunca instalar pacotes externos de ícones — usar os assets do Figma
- Armazenar assets baixados em `src/assets/`
- SVGs inline vão em `src/components/ui/icons/` como componentes React

### Declaração de módulo TypeScript para SVG

```ts
// src/css-modules.d.ts
declare module '*.svg' {
  const src: string;
  export default src;
}
```

Verificar se existe antes de importar `.svg` como módulo — sem ela o build falha com `TS2307`.

---

## Identificadores Figma MCP

| Identificador | Formato | Onde usar |
|---|---|---|
| `fileKey` | string da URL do Figma | `get_metadata`, `get_design_context` |
| `libraryKey` | `lk-...` | `search_design_system`, `importComponentByKeyAsync` |
| `componentKey` | retornado pelo `search_design_system` | `importComponentByKeyAsync` |

---

## Referências na Skill

- Workflow completo de busca e import → `figma-config.json` (seção `buildWorkflow`)
- Configuração de libraries e libraryKeys → `figma-config.json` (seção `libraries`)
- Regras de busca com filtro → `references/FIGMA_CONFIG.md`

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md
