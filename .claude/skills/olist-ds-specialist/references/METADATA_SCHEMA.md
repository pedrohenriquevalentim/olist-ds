# Schema — NomeComponente.metadata.json

**Versão:** 1.0  
**Última atualização:** 2026-09-09  
**Referenciado por:** `SKILL.md` Caso 7 (passo 6) · `decisions/technical/COMPONENTES_REACT.md`

---

## O que é este arquivo

Schema completo do arquivo `NomeComponente.metadata.json` gerado no Caso 7 (`/ds-componente`).  
Deve ser lido **antes** de gerar o rascunho de metadata — é a fonte de verdade da estrutura, não o `CLAUDE.md` do repositório.

O metadata é a camada semântica do componente: documenta **intenção de uso**, não apenas estrutura.  
Sem ele, qualquer documentação gerada preenche lacunas por suposição — o erro se propaga para código e Figma.

---

## Schema Completo

```json
{
  "name": "NomeComponente",
  "version": "0.0.1",
  "purpose": "Uma frase descrevendo o que este componente faz e para qual problema foi criado.",

  "useWhen": [
    "O usuário precisa realizar a ação X",
    "O contexto é Y e existe uma hierarquia de escolha clara",
    "A tela tem espaço suficiente para exibir o label completo"
  ],

  "doNotUseWhen": [
    "O espaço disponível é menor que N px (usar ButtonIcon nesse caso)",
    "A ação é destrutiva sem confirmação — usar Dialog de confirmação antes",
    "Já existe um Button primary na mesma tela — hierarquia de CTA quebra"
  ],

  "pairsWith": [
    "InputText (formulários)",
    "Dialog (ações de confirmação)",
    "Toast (feedback pós-ação)"
  ],

  "note": "Observação opcional sobre comportamento não-óbvio, workaround ou restrição histórica.",

  "variants": {
    "type": ["primary", "secondary", "tertiary"],
    "size": ["big", "medium", "small"],
    "state": ["enabled", "hover", "pressed", "disabled", "loading"]
  },

  "states": {
    "enabled": "Estado padrão — ação disponível para o usuário.",
    "hover": "Cursor sobre o componente — feedback visual de interatividade.",
    "pressed": "Momento do clique — feedback de ativação.",
    "disabled": "Ação indisponível no contexto atual — não remover da UI, manter visível.",
    "loading": "Ação em andamento — spinner substitui label, botão fica não-clicável."
  },

  "slots": {
    "leadIcon": {
      "type": "ReactNode",
      "required": false,
      "description": "Ícone à esquerda do label. Usar <Icon name=\"...\" /> — nunca pacote externo."
    },
    "label": {
      "type": "string",
      "required": true,
      "description": "Texto do botão. Seguir UX_WRITING.md — CTA conciso, verbo no infinitivo."
    },
    "trailIcon": {
      "type": "ReactNode",
      "required": false,
      "description": "Ícone à direita do label. Usar apenas para indicar expansão (dropdown) ou navegação externa."
    }
  },

  "tokens": {
    "new": [],
    "existing": [
      "color/background/action/primary/enabled",
      "color/background/action/primary/hover",
      "color/text/action/primary/enabled",
      "shape/size/height/medium",
      "shape/radius/button"
    ]
  },

  "figma": {
    "fileKey": "HeyN4w209HWh8rfpTDiwyf",
    "nodeId": "",
    "componentKey": ""
  }
}
```

---

## Guia de preenchimento por campo

### `purpose`
Uma frase. Responde: *"O que este componente faz e por que existe?"*  
Não descreva a implementação — descreva o problema que resolve.

### `useWhen` / `doNotUseWhen`
Listas de contextos de uso. Baseie-se em:
- Nome do componente e variantes retornadas pelo Figma MCP
- Onde o componente aparece nas telas da `design system (base)`
- Discussão com o usuário quando a intenção não estiver clara nos dados do MCP

⛔ Nunca preencher por suposição. Se não estiver claro, perguntar ao usuário antes de gerar o metadata.

### `pairsWith`
Componentes frequentemente usados junto a este. Use nomes exatos do `COMPONENTES.md`.

### `variants`
Mapeie as propriedades do component set no Figma. Os nomes de propriedade devem bater exatamente com os retornados por `get_design_context` — são case-sensitive na Plugin API.

### `states`
Um por estado de variante. Descreva o comportamento, não o visual.

### `slots`
Props que recebem conteúdo renderizável (`ReactNode`, `string`, `number`).  
Cada slot tem: `type`, `required`, `description`.

### `tokens.new`
Tokens que serão criados para este componente (ainda não existem no DS).  
Formato: `"componente/grupo/propriedade"` (camada 03. component tokens).

### `tokens.existing`
Tokens semânticos que o componente **reutiliza** (já existem na camada 02. theme tokens).  
Consultar `TOKEN_CATALOG.md` e `GOVERNANCA_TOKENS.md` para escolher o token correto.

### `figma.fileKey`
Sempre `HeyN4w209HWh8rfpTDiwyf` para componentes da `design system (base)`.

### `figma.nodeId`
Extraído da URL fornecida pelo usuário no Caso 7 (passo 1).  
Formato: `"XXXX:YYYY"` (trocar `-` por `:` na URL).  
Nunca supor — vem diretamente da URL do usuário.

### `figma.componentKey`
Buscar em `component-registry.json` pelo nome do componente, se já existir entrada publicada.  
Se o componente for novo (ainda não publicado na library): deixar `""` — só preencher após publicação e `/ds-sync`.

---

## Estrutura de arquivos do componente (6 arquivos)

O `metadata.json` é o sexto arquivo gerado no Caso 7. Os 6 juntos formam a unidade completa:

```
src/components/NomeComponente/
├── NomeComponente.tsx            # React + TypeScript
├── NomeComponente.module.css     # CSS Modules com var(--tokens)
├── NomeComponente.test.tsx       # Vitest + RTL
├── NomeComponente.stories.tsx    # Storybook v10
├── NomeComponente.metadata.json  # este schema (versão aprovada no Gate do passo 7)
└── index.ts                      # re-export componente + interface principal
```

**Regras dos 6 arquivos:**
- `tsx`: apenas tokens de `src/generated/variables.css`; `rem` (nunca `px`); ícones como `ReactNode`; roles ARIA obrigatórios; teclado para interativos
- `module.css`: `var(--token)` para cada propriedade; sem hex hardcoded
- `test.tsx`: testar todos os estados listados em `states`; não mockar comportamentos reais do componente
- `stories.tsx`: uma story por variante principal; controles para todas as props
- `metadata.json`: versão exatamente como aprovada no Gate — sem alterações após aprovação
- `index.ts`: `export { default as NomeComponente } from './NomeComponente'; export type { NomeComponenteProps } from './NomeComponente';`

---

**Criado em:** 2026-09-09  
**Motivação:** eliminar dependência do `CLAUDE.md` raiz do repositório `olist-ds` para o schema do metadata — a skill passa a ser auto-contida para o Caso 7.
