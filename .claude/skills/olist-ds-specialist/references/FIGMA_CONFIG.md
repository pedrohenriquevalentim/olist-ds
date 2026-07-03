# Configuração do Figma — Fonte da Verdade

**Arquivo:** `figma-config.json`  
**Versão:** 3.0 — baseada em libraryKeys

---

## Os Três Identificadores do Figma

Antes de qualquer operação, entender a diferença:

| Identificador | Formato | Onde aparece | Usado para |
|---|---|---|---|
| **libraryKey** | `lk-abc123...` | Resposta de `get_libraries` e `search_design_system` | Filtrar `search_design_system`, definir prioridade |
| **fileKey** | `ABC123XYZ` | URL do Figma (`/design/:fileKey/`) | Referência, inspeção via `get_metadata` |
| **componentKey** | `9a3bf4...` | Resposta de `search_design_system` | `importComponentByKeyAsync` / `importComponentSetByKeyAsync` |

---

## Libraries Autorizadas (em ordem de prioridade)

> **📌 Decisão permanente (desde 2026-07-03):** a tabela abaixo é a hierarquia **anterior, descontinuada**. A única library ativa em `searchPriority` hoje é `design system (base)`; as 5 abaixo estão em `blockedLibraries` (ver seção "Libraries Bloqueadas"), com dados preservados para eventual reversão futura.

| # | Library | libraryKey (abreviado) |
|---|---|---|
| 1 | AI Components (master) | `lk-e52b27fe...` |
| 2 | ERP components | `lk-831bcbe7...` |
| 3 | ERP recursos | `lk-f95b9869...` |
| 4 | ERP style guide | `lk-798aabd3...` |
| 5 | [design system] components web | `lk-89f0ba0d...` |

**libraryKeys completas:** ver campo `searchPriority` em `figma-config.json`.

---

## Hierarquia de Decisão para Cada Elemento UI

Antes de criar qualquer elemento no Figma, percorrer esta ordem **sem exceção**:

```
1. Existe nas libraries?
   └─ search_design_system(nome, includeLibraryKeys: searchPriority)
       ├─ SIM → importar instância real → usar mesmo que override seja imperfeito
       └─ NÃO → ir para 2

2. Não existe na library de searchPriority (design system (base))?
   └─ Criar primitivo com tokens DS
       ├─ fills: cores de CORES.md
       ├─ typography: Plus Jakarta Sans + TIPOGRAFIA.md
       ├─ spacing: grid 4px de ESPACAMENTO.md
       └─ Nomear como custom: "NomeDoElemento — custom: não encontrado no DS"
          e documentar para o designer criar o componente faltante
```

**Regra inviolável:** Componente DS com label placeholder > primitivo com label correto.
O componente real garante tokens, handoff e versionamento. O primitivo não.

---



### Padrão obrigatório — sempre com `includeLibraryKeys`:

```javascript
// Ler o config para pegar a searchPriority
const config = JSON.parse(readFile('figma-config.json'));
const priority = config.designSystem.searchPriority;

// Buscar filtrando pela library autorizada (design system (base))
const results = await search_design_system({
  fileKey: "rwQoESynmdscKMVuonWBto",  // arquivo de trabalho atual
  query: "Button",
  includeLibraryKeys: priority         // ← OBRIGATÓRIO
});

// O primeiro resultado já é o de maior prioridade
const component = results.components[0];
// component.componentKey → usar em importComponentSetByKeyAsync
// component.libraryName  → confirmar qual library retornou
```

### ❌ Nunca buscar sem filtro:
```javascript
// ERRADO — retorna componentes de qualquer library, incluindo bloqueadas
search_design_system({ query: "Button" });
```

---

## Como Importar e Instanciar Componentes

### Para `component_set` (componente com variantes):
```javascript
// 1. Importar o set completo
const compSet = await figma.importComponentSetByKeyAsync(component.componentKey);

// 2. Encontrar a variante correta por keywords no nome
function findVariant(compSet, keywords) {
  for (const child of compSet.children) {
    const name = child.name.toLowerCase();
    if (keywords.every(k => name.includes(k.toLowerCase()))) return child;
  }
  return compSet.defaultVariant ?? compSet.children[0];
}

const variant = findVariant(compSet, ['primary']); // ou ['secondary'], ['01'], etc.

// 3. Criar instância e inserir no frame pai ANTES de definir sizing
parent.appendChild(instance = variant.createInstance());
instance.layoutSizingHorizontal = 'FILL'; // ← APÓS appendChild
```

### Para `component` simples:
```javascript
const comp = await figma.importComponentByKeyAsync(component.componentKey);
const instance = comp.createInstance();
parent.appendChild(instance);
instance.layoutSizingVertical = 'FILL'; // ← APÓS appendChild
```

### Override de texto em instância:
```javascript
// Carregar a fonte ANTES de editar
await figma.loadFontAsync({ family: 'Plus Jakarta Sans', style: 'Medium' });

// Encontrar o nó de texto correto pelo nome do frame pai
const labelFrame = instance.findOne(n => n.name === 'label' && n.type !== 'TEXT');
const textNode = labelFrame?.findOne(n => n.type === 'TEXT');
if (textNode) {
  await figma.loadFontAsync(textNode.fontName);
  textNode.characters = 'Selecionar Plano';
}
```

---

## Workflow Completo: SDD → Figma

```
1. Ler figma-config.json → extrair searchPriority e blockedLibraries
   ↓
2. Para cada componente necessário na tela:
   search_design_system(nome, includeLibraryKeys: searchPriority)
   → pegar componentKey do primeiro resultado
   ↓
3. importComponentSetByKeyAsync(componentKey) → findVariant → createInstance()
   ↓
4. use_figma:
   - Criar frame pai com Auto Layout
   - appendChild(instance) → depois definir layoutSizing
   - Criar primitivos só para elementos sem componente no DS
   ↓
5. get_design_context → screenshot + validação visual
   ↓
6. Iterar com feedback
```

---

## Regras Críticas

### ✅ Sempre:
1. Passar `includeLibraryKeys: searchPriority` em todo `search_design_system`
2. Descartar resultados com `name` iniciado por `.` (componentes internos de construção — ver seção "Componentes Internos '.[base]'" abaixo)
3. Do que sobrar, usar o primeiro resultado — a ordem do array garante a prioridade correta
4. Verificar `libraryName` no resultado para confirmar de qual library veio
5. Definir `layoutSizing` APÓS `appendChild` ao frame pai
6. Carregar fonts com `loadFontAsync` antes de editar texto em instâncias

### ❌ Nunca:
1. Chamar `search_design_system` sem `includeLibraryKeys`
2. Usar componentes de `blockedLibraries` mesmo que apareçam sem filtro
3. Importar/instanciar um componente cujo `name` comece com `.` (ex: `.[base] single select list`, `.menu erp/stage14`) — são peças internas, nunca resultados válidos
4. Construir Button, Tag, Menu Global etc. manualmente quando existem no DS
5. Definir `layoutSizingVertical/Horizontal` antes de `appendChild`

---

## Componentes Internos ".[base]" — Sempre Ignorar

Regra **permanente**, válida para qualquer library ativa (não é específica do teste de library master).

O Figma oculta do painel de Assets qualquer componente cujo nome comece com `.` (ponto). Esse é o padrão usado para as peças que **constroem** um component set publicado — nunca são o resultado que se deve importar.

**Confirmado na `design system (base)` em 2026-07-02** (verificação real via `search_design_system`):

| name retornado | filePath | O que é |
|---|---|---|
| `.menu erp/stage14` | `components/_menu erp/stage14` | Variante interna usada para montar o component_set público `menu erp` |
| `.[base] single select list` | `components/__base_ single select list` | Bloco de construção interno do `dropdown` |
| `.[base] multi select list` | `components/__base_ multi select list` | Bloco de construção interno de listas multi-seleção |

**Regra de filtro:** ao processar o array `components` retornado por `search_design_system`, remover qualquer entrada cujo `name` dê match em `^\.` **antes** de escolher "o primeiro resultado" da lista (regra "Sempre #3" acima). O padrão está cadastrado em `figma-config.json` → `excludedComponentNamePatterns`.

Se, depois do filtro, não sobrar nenhum resultado para um componente necessário, tratar como **não encontrado no DS** e seguir a Seção 4 do `HARNEES_TELAS.md` (primitivos + documentar gap).

---

## Valores Válidos da Figma Plugin API

```javascript
// counterAxisAlignItems — VÁLIDOS:
'MIN' | 'MAX' | 'CENTER' | 'BASELINE'
// ❌ INVÁLIDOS: 'STRETCH', 'END'

// primaryAxisAlignItems — VÁLIDOS:
'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'

// layoutSizingHorizontal / layoutSizingVertical — VÁLIDOS:
'FIXED' | 'HUG' | 'FILL'
```

---

## Libraries Bloqueadas

Ignorar mesmo que apareçam em buscas sem filtro:

**Bloqueada permanentemente:**

| Library | Motivo |
|---|---|
| `QJmwu6sR06xmyGAoBaXuEn` (Design System - Components Web AS-IS) | Substituído por [design system] components web via libraryKey |

**Bloqueadas permanentemente desde 2026-07-03 (descontinuadas em favor da design system (base)):**

| Library | Motivo |
|---|---|
| AI Components | Era a master; substituída pela design system (base) como única referência |
| ERP components | Descontinuada — dados preservados (era prioridade 2) |
| ERP recursos | Descontinuada — dados preservados (era prioridade 3) |
| ERP style guide | Descontinuada — dados preservados (era prioridade 4) |
| [design system] components web | Descontinuada — dados preservados (era prioridade 5) |

> Nota: `design system (base)` **não está bloqueada** — foi desbloqueada em 2026-07-02 e adotada como única library ativa em 2026-07-03. Este arquivo chegou a listá-la como bloqueada numa versão anterior; corrigido.

---

## Checklist Antes de Usar Figma MCP

- [ ] `figma-config.json` existe e tem `searchPriority` preenchido (1 libraryKey: design system (base))
- [ ] `search_design_system` será chamado com `includeLibraryKeys: searchPriority`
- [ ] Nenhum resultado de `blockedLibraries` será usado
- [ ] Fonts carregadas antes de editar texto em instâncias
- [ ] `layoutSizing` definido após `appendChild`

---

**Data de criação:** 2026-05-07
**Última atualização:** 2026-06-03
**Versão:** 3.0 — migrado de fileKey para libraryKey como identificador primário
