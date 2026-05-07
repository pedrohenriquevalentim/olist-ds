# Configuração do Figma — Fonte da Verdade

**Arquivo:** `.claude/figma-config.json`

---

## 📋 Propósito

Este arquivo define quais arquivos do Figma são a **fonte oficial** do Design System Olist.

**Regra crítica:** NUNCA busque componentes, tokens ou estilos em arquivos fora desta configuração.

---

## 🔍 Como Usar

### Antes de QUALQUER operação com Figma MCP:

1. **Ler `.claude/figma-config.json`**
2. **Extrair `allowedFiles`** — lista de fileKeys permitidos
3. **Extrair `blockedFiles`** — lista de fileKeys proibidos
4. **Extrair `searchPriority`** — ordem de busca

### Ao buscar componentes:

```typescript
// Exemplo de workflow correto:

// 1. Ler config
const config = JSON.parse(await readFile('.claude/figma-config.json'));
const allowedFiles = config.designSystem.allowedFiles;
const searchPriority = config.designSystem.searchPriority;

// 2. Buscar componentes APENAS nos arquivos permitidos
for (const fileKey of searchPriority) {
  const results = await search_design_system({
    query: "Button",
    fileKey: fileKey  // ⬅️ FILTRAR por fileKey
  });
  
  if (results.length > 0) {
    // Achou! Usar este
    return results[0];
  }
}

// 3. Se não achou em nenhum arquivo permitido
return null; // Componente não existe no DS oficial
```

---

## ⚠️ Regras Críticas

### ✅ SEMPRE:
1. Ler `.claude/figma-config.json` ANTES de usar `search_design_system`
2. Filtrar buscas por `fileKey` (usar apenas os de `allowedFiles`)
3. Respeitar ordem de `searchPriority` (buscar no primeiro, depois no segundo, etc.)
4. Se componente não for encontrado em `allowedFiles`, registrar em página "Notas"

### ❌ NUNCA:
1. Buscar em arquivos fora de `allowedFiles`
2. Usar componentes de arquivos em `blockedFiles` (mesmo que existam)
3. Usar `search_design_system` sem filtro de `fileKey`
4. Assumir que um arquivo está permitido sem verificar o config

---

## 📊 Estrutura do JSON

```json
{
  "designSystem": {
    "masterFile": {
      "name": "Design System - Components Web",
      "fileKey": "QJmwu6sR06xmyGAoBaXuEn",
      "description": "Componentes principais",
      "url": "https://www.figma.com/design/QJmwu6sR06xmyGAoBaXuEn/..."
    },
    "additionalFiles": [
      {
        "name": "Design System - Foundations",
        "fileKey": "ABC123XYZ456",
        "description": "Cores, tipografia, tokens",
        "url": "https://www.figma.com/design/ABC123XYZ456/..."
      }
    ],
    "allowedFiles": [
      "QJmwu6sR06xmyGAoBaXuEn",  // ⬅️ USAR APENAS ESTES
      "ABC123XYZ456"
    ],
    "blockedFiles": [
      "OLD_FILE_KEY"  // ⬅️ NUNCA USAR
    ],
    "searchPriority": [
      "QJmwu6sR06xmyGAoBaXuEn",  // ⬅️ BUSCAR NESTA ORDEM
      "ABC123XYZ456"
    ]
  }
}
```

---

## 🎯 Exemplos de Uso

### Exemplo 1: Buscar Button

```typescript
// ❌ ERRADO (busca em qualquer arquivo da org)
search_design_system({ query: "Button" });

// ✅ CORRETO (busca apenas em allowedFiles, na ordem de prioridade)
const config = JSON.parse(await readFile('.claude/figma-config.json'));

for (const fileKey of config.designSystem.searchPriority) {
  const results = await search_design_system({
    query: "Button",
    fileKey: fileKey
  });
  
  if (results.length > 0) {
    return results[0]; // Achou no primeiro arquivo permitido
  }
}
```

---

### Exemplo 2: Validar se arquivo é permitido

```typescript
function isFileAllowed(fileKey: string): boolean {
  const config = JSON.parse(readFileSync('.claude/figma-config.json'));
  return config.designSystem.allowedFiles.includes(fileKey);
}

function isFileBlocked(fileKey: string): boolean {
  const config = JSON.parse(readFileSync('.claude/figma-config.json'));
  return config.designSystem.blockedFiles.includes(fileKey);
}

// Uso:
if (isFileBlocked(someFileKey)) {
  console.warn(`Arquivo ${someFileKey} está bloqueado. Não usar.`);
  return null;
}

if (!isFileAllowed(someFileKey)) {
  console.warn(`Arquivo ${someFileKey} não está na lista de permitidos.`);
  return null;
}
```

---

### Exemplo 3: Registrar componentes não encontrados

```typescript
const notFoundComponents = [];

const config = JSON.parse(await readFile('.claude/figma-config.json'));

for (const componentName of ["Button", "Card", "Modal"]) {
  let found = false;
  
  for (const fileKey of config.designSystem.searchPriority) {
    const results = await search_design_system({
      query: componentName,
      fileKey: fileKey
    });
    
    if (results.length > 0) {
      found = true;
      break;
    }
  }
  
  if (!found) {
    notFoundComponents.push(componentName);
  }
}

// Registrar na página "Notas" do Figma
if (notFoundComponents.length > 0) {
  createNotesPage({
    title: "Componentes Faltantes no DS Master",
    content: `
      Os seguintes componentes não foram encontrados nos arquivos permitidos:
      ${notFoundComponents.map(c => `- ${c}`).join('\n')}
      
      Arquivos pesquisados:
      ${config.designSystem.allowedFiles.map(f => `- ${f}`).join('\n')}
    `
  });
}
```

---

## 🚨 Tratamento de Erros

### Se `.claude/figma-config.json` não existir:

```typescript
if (!existsSync('.claude/figma-config.json')) {
  throw new Error(
    'Arquivo .claude/figma-config.json não encontrado. ' +
    'Configure a fonte da verdade do Design System antes de continuar.'
  );
}
```

### Se allowedFiles estiver vazio:

```typescript
const config = JSON.parse(await readFile('.claude/figma-config.json'));

if (!config.designSystem.allowedFiles || config.designSystem.allowedFiles.length === 0) {
  throw new Error(
    'Nenhum arquivo permitido em .claude/figma-config.json. ' +
    'Configure allowedFiles antes de buscar componentes.'
  );
}
```

---

## 📝 Checklist de Validação

Antes de usar Figma MCP, verificar:

- [ ] `.claude/figma-config.json` existe
- [ ] `allowedFiles` tem pelo menos 1 fileKey
- [ ] `searchPriority` está definido
- [ ] Todos os fileKeys em `searchPriority` também estão em `allowedFiles`
- [ ] `blockedFiles` não está em `allowedFiles` (sem conflito)

---

## 🎯 Comportamento Esperado

### Cenário 1: Componente existe no primeiro arquivo permitido
**Resultado:** Usar esse componente, não buscar nos outros

### Cenário 2: Componente não existe no primeiro, mas existe no segundo
**Resultado:** Usar do segundo arquivo

### Cenário 3: Componente existe apenas em arquivo bloqueado
**Resultado:** Não usar. Registrar em "Notas" como componente faltante

### Cenário 4: Componente existe em arquivo fora de allowedFiles
**Resultado:** Não usar. Registrar em "Notas" como componente faltante

### Cenário 5: Componente existe em múltiplos arquivos permitidos
**Resultado:** Usar do primeiro (conforme searchPriority)

---

## 🔄 Atualização do Config

Se o usuário pedir para adicionar/remover arquivos:

1. Ler `.claude/figma-config.json`
2. Modificar `allowedFiles`, `blockedFiles` ou `searchPriority`
3. Salvar de volta
4. Confirmar mudanças com o usuário

**Nunca modificar sem confirmação do usuário.**

---

## 📚 Referências

- README.md → Seção "Figma (com telas faseadas)"
- GUIA-MULTIPLOS-ARQUIVOS-FIGMA.md → Como configurar múltiplos arquivos
- PROMPT-FIGMA-COM-FONTE-VERDADE.md → Prompt com fileKey configurado

---

**Data de criação:** 2026-05-07  
**Última atualização:** 2026-05-07  
**Versão da skill:** 2.1
