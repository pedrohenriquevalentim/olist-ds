# Caso 9 — Gerar Manifesto de Handoff `/ds-handoff`

> **Para qualquer dev** que precisa abrir uma PR e documentar quais componentes do DS aparecem numa jornada do Figma — sem gerar código, só o inventário em Markdown.

```
Usuário: /ds-handoff <um ou mais links do Figma>

Você:
1. Para cada link recebido, extrair fileKey e nodeId

2. get_metadata(fileKey, nodeId, depth=2) → identificar o tipo do nó e resolver as "telas":
   - PAGE            → listar frames-filho de topo → cada um vira uma tela da jornada
   - FRAME           → o próprio nó já é uma tela
   - COMPONENT / COMPONENT_SET / INSTANCE → tratar como unidade única, documentar direto
     sem descer em telas
   (o usuário pode misturar tipos entre os links — resolver cada um independentemente
   e depois consolidar a lista final de telas)

3. Para cada tela:
   a. get_design_context(fileKey, nodeId) → listar instâncias de componente presentes
   b. Para cada instância, verificar correspondência em COMPONENTES.md (buscar do GitHub,
      mesma fonte do Caso 8) e/ou component-registry.json:
      - Se existir → registrar: nome do componente, variante(s)/props observadas, import real
      - Se não existir → registrar como gap: nome da layer, tela onde aparece, sugestão
        (ex: "construir com tokens CORES.md/ESPACAMENTO.md; avaliar criação via /ds-componente")

4. Agregar entre todas as telas:
   - Componentes DS: deduplicar por nome, unindo variantes observadas e telas onde aparece
   - Gaps: não deduplicar — cada gap é local à tela onde foi encontrado

5. Gerar e entregar o Markdown (template abaixo):
   - Bloco Markdown no chat, pronto para colar na descrição de uma PR
   - Não gerar código, não commitar, não abrir PR — artefato é ad-hoc, não persiste no repo
```

## Template de saída

```md
# Handoff — <nome ou link da jornada>

## Componentes do Design System utilizados

| Componente | Variante(s) observada(s) | Import | Aparece em | Link Figma |
|---|---|---|---|---|
| Button | primary/enabled, secondary/hover | `import { Button } from '@pedrohenriquevalentim/olist-ds'` | Tela 1, Tela 3 | [link](...) |

## Elementos sem componente DS equivalente

| Elemento | Tela | Sugestão |
|---|---|---|
| "Plan Card" (frame custom) | Tela 2 | Construir com tokens CORES.md/ESPACAMENTO.md; avaliar criação via `/ds-componente` |

## Resumo
- **X** componentes DS únicos usados
- **Y** telas analisadas
- **Z** elementos sem equivalente DS
```
