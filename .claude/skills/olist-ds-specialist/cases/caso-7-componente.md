# Caso 7 — Implementar Componente a partir de URL do Figma `/ds-componente`

> **Para mantenedores do DS** que precisam gerar um novo componente React completo para o repositório `olist-ds` a partir de uma URL do Figma. Output: 6 arquivos no `olist-ds` + frame de docs no Figma.

```
Usuário: "Implemente este componente: https://figma.com/design/FILE?node-id=X"

Você:
1. Extrair fileKey (entre /design/ e /) e nodeId (node-id=X, trocar - por :) da URL
2. get_metadata(fileKey, nodeId, depth=3) → mapear hierarquia de variantes
3. get_design_context(fileKey, nodeId) → extrair props, estados, tokens e código de referência
4. get_screenshot(fileKey, nodeId) → referência visual
5. Interpretar os dados acima:
   - Props: nomes, tipos (enum/boolean/string), valores, defaults
   - Estados: lista de variantes (ex: state=enabled, state=error…)
   - Visibility variants: props booleanas que geram sub-variantes
   - Partes anatômicas: elementos nomeados no MCP (label, input base, icon, support text…)

6. GERAR RASCUNHO DE `NomeComponente.metadata.json` (schema completo em `references/METADATA_SCHEMA.md`):
   purpose, useWhen, doNotUseWhen, pairsWith, note, variants, states, slots,
   tokens.new/tokens.existing, figma.fileKey/nodeId/componentKey. Preencha useWhen/doNotUseWhen
   a partir do nome, das variantes e do contexto do componente no Figma — se a intenção não
   estiver clara pelos dados do MCP, pergunte ao usuário em vez de supor.
   - `fileKey`/`nodeId`: extraídos diretamente da URL fornecida pelo usuário (já obtidos no
     passo 1) — são o nó real que acabou de ser lido via MCP, nunca precisam de suposição aqui.
   - `componentKey`: buscar em `component-registry.json` pelo nome do componente, se já
     existir uma entrada (componente publicado na library antes deste fluxo). Se não existir
     ainda (componente novo), deixar vazio — só é preenchido quando o componente for
     publicado na library e o registry for atualizado via `/ds-sync`.

7. **GATE — exibir o metadata.json completo e aguardar aprovação explícita do usuário.**
   Não prossiga para o passo 8 sem essa confirmação. É neste momento que o usuário ajusta
   useWhen/doNotUseWhen/pairsWith antes de qualquer código ou doc existir — inverter esta
   ordem (documentar antes do metadata) significa documentar por suposição.

8. PARALELO — com o metadata.json aprovado, executar os dois passos abaixo ao mesmo tempo:

   [A] GERAR CÓDIGO (6 arquivos — estrutura conforme `references/METADATA_SCHEMA.md`, regras conforme `decisions/technical/COMPONENTES_REACT.md`):
       - NomeComponente.tsx           (React + TypeScript)
       - NomeComponente.module.css    (CSS Modules + var(--tokens))
       - NomeComponente.test.tsx      (Vitest + RTL)
       - NomeComponente.stories.tsx   (Storybook v10)
       - NomeComponente.metadata.json (versão aprovada no passo 7, sem alterações)
       - index.ts                     (re-export componente + interface)
       Regras: apenas tokens de src/generated/variables.css, rem (nunca px),
       ícones como ReactNode, aria roles obrigatórios, teclado para interativos.
       Ao escolher entre tokens semânticos candidatos para o mesmo elemento
       (ex: cor de texto/fundo/borda por estado), consultar GOVERNANCA_TOKENS.md

   [B] GERAR DOCS NO FIGMA (frame "📄 Docs — NomeComponente"):
       - Criar frame dentro da MESMA section do componente original
       - Posicionar à direita do component set (x = componentX + componentWidth + 60)
       - Frame com Auto Layout VERTICAL, padding 40, gap 48, fundo branco, cornerRadius 16
       - Seção "demo":
           · Agrupar variantes por dimensão lógica (ex: "visibility on" / "visibility off")
           · Instanciar cada variante com createInstance() → organizar em rows horizontais
           · Label abaixo de cada instância com o nome do estado (12px Regular, muted)
       - Seção "props":
           · Tabela com colunas: prop · tipo · valores · obrigatório · default
           · Header com bg GRAY_BG (#ECE9DF), rows alternadas, border #E7E4DA
           · Larguras de coluna: 200 · 160 · 460 · 100 · 180
       - Seção "anatomia":
           · Instância do estado mais completo (preferencialmente focused/filled)
           · Cards em grid 2 colunas: badge azul numerado + nome + descrição da parte
           · Partes a cobrir: label, tooltip, input base, lead icon, texto/placeholder,
             toggle icon, support text (adaptar ao componente)
       - Seção "acessibilidade":
           · 3 grupos: "Roles e atributos ARIA" (azul) · "Navegação por teclado" (verde)
             · "Contraste e percepção" (âmbar)
           · Cada item: chip de código (bg GRAY_BG) + descrição em 13px Regular
       - placeholder = true nas seções enquanto constroem, false ao concluir cada uma
       - screenshot() após cada seção para validação incremental

9. Entregar código + confirmar que frame de docs foi criado no Figma com URL/nodeId
10. Informar ao usuário: rodar npm run release (cria branch, versiona e abre PR; CI publica no GitHub Packages após o merge)
```

**Nota sobre disponibilidade de instâncias:**
Se o componente ainda não estiver publicado na library, a seção "demo" do frame de docs
usará instâncias locais (do próprio arquivo). Após publicação, as instâncias atualizarão
automaticamente. Informar o usuário caso esta situação ocorra.

**Diferença do Caso 8:**
- Caso 7 (`/ds-componente`): cria um *novo componente para o DS* — output vai para o repositório `olist-ds`
- Caso 8 (`/ds-implementar`): implementa uma *tela de produto usando o DS* — output vai para o repositório da BU
