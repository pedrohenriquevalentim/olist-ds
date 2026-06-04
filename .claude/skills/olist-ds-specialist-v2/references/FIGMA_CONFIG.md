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

| # | Library | libraryKey (abreviado) |
|---|---|---|
| 1 | AI Components (master) | `lk-e52b27fe...` |
| 2 | ERP components | `lk-831bcbe7...` |
| 3 | ERP recursos | `lk-f95b9869...` |
| 4 | ERP style guide | `lk-798aabd3...` |
| 5 | [design system] components web | `lk-89f0ba0d...` |

**libraryKeys completas:** ver campo `searchPriority` em `figma-config.json`.

---

## Como Buscar Componentes

### Padrão obrigatório — sempre com `includeLibraryKeys`:

```javascript
// Ler o config para pegar a searchPriority
const config = JSON.parse(readFile('figma-config.json'));
const priority = config.designSystem.searchPriority;

// Buscar filtrando pelas 5 libraries autorizadas
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
2. Usar o primeiro resultado — a ordem do array garante a prioridade correta
3. Verificar `libraryName` no resultado para confirmar de qual library veio
4. Definir `layoutSizing` APÓS `appendChild` ao frame pai
5. Carregar fonts com `loadFontAsync` antes de editar texto em instâncias

### ❌ Nunca:
1. Chamar `search_design_system` sem `includeLibraryKeys`
2. Usar componentes de `blockedLibraries` mesmo que apareçam sem filtro
3. Construir Button, Tag, Menu ERP etc. manualmente quando existem no DS
4. Definir `layoutSizingVertical/Horizontal` antes de `appendChild`

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

| Library | Motivo |
|---|---|
| `design system` (base) | Supersedida por AI Components e ERP components |
| `HeyN4w209HWh8rfpTDiwyf` (TO-BE antigo) | Conteúdo migrado para AI Components |
| `QJmwu6sR06xmyGAoBaXuEn` (AS-IS antigo) | Substituído por [design system] components web via libraryKey |

---

## Checklist Antes de Usar Figma MCP

- [ ] `figma-config.json` existe e tem `searchPriority` com 5 libraryKeys
- [ ] `search_design_system` será chamado com `includeLibraryKeys: searchPriority`
- [ ] Nenhum resultado de `blockedLibraries` será usado
- [ ] Fonts carregadas antes de editar texto em instâncias
- [ ] `layoutSizing` definido após `appendChild`

---

**Data de criação:** 2026-05-07
**Última atualização:** 2026-06-03
**Versão:** 3.0 — migrado de fileKey para libraryKey como identificador primário
