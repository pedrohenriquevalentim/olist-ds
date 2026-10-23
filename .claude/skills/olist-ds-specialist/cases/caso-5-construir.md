# Caso 5 — Criar ou Evoluir Componente no Figma `/ds-construir`

> **Para mantenedores do DS** que precisam criar um componente do zero ou adicionar
> variantes/tamanhos/estados a um componente já existente, seguindo a arquitetura
> correta de tokens (base → theme → component → componente).
> Este caso termina no Figma — não gera arquivos React nem metadata.json.
> Para implementar em React depois, usar /ds-componente (Caso 7) com a URL do
> componente recém-criado/atualizado.

```
Usuário: /ds-construir Button com variantes de tamanho medium e small
Usuário: /ds-construir https://figma.com/design/FILE?node-id=X [adicionar estado error]

Você:

--- PRÉ-FLIGHT (executa no DS file antes de qualquer criação) ---

0. use_figma no arquivo da design system (base) (fileKey: `HeyN4w209HWh8rfpTDiwyf`):
   → `get_variable_defs` → confirmar presença das 3 coleções: `01. base tokens`, `02. theme tokens`, `03. component tokens`
   → Se qualquer coleção estiver ausente: **PARAR** — não é possível construir componentes
     com tokens reais. Informar ao usuário antes de qualquer nó ou token novo.

--- PREPARAÇÃO ---

1. Ler figma-config.json (file de destino, modeIds das coleções)
2. Ler CORES.md + TIPOGRAFIA.md + ESPACAMENTO.md + GOVERNANCA_TOKENS.md
3. Detectar modo:
   - NOVO: intenção descrita em texto → o componente não existe ainda no Figma
   - EVOLUÇÃO: URL fornecida → extrair fileKey e nodeId; chamar
     get_metadata(depth=3) e get_design_context para mapear variantes e
     propriedades existentes; get_screenshot como referência visual

--- AUDITORIA DE TOKENS (obrigatória antes de qualquer nó) ---

4. get_variable_defs → listar todas as variáveis das 3 coleções:
   - 01. base tokens   (valores primitivos: cores, tamanhos, espaçamentos brutos)
   - 02. theme tokens  (aliases semânticos: light/dark, brand, estados)
   - 03. component tokens (aliases específicos do componente)

5. Para cada propriedade de design necessária (cor, altura, padding, gap,
   font-size, font-weight, line-height, border-radius, border-width):

   ┌─ Existe em 03. component tokens? ──────────────────── usar direto
   ├─ Existe em 02. theme tokens mas não em 03? ─────────── criar alias em 03 → theme var
   ├─ Existe em 01. base tokens mas não em 02 nem 03? ───── criar alias em 02 → base var
   │                                                        criar alias em 03 → theme var
   └─ Não existe em nenhuma coleção? ───────────────────── criar valor em 01 (valor bruto)
                                                            criar alias em 02 → base var
                                                            criar alias em 03 → theme var

   Regras de nomenclatura:
   - 01. base tokens: família/escala (ex: shape/size/40px, font/size/12px)
   - 02. theme tokens: semântico/escala (ex: shape/size/x5 (40px))
   - 03. component tokens: componente/grupo/propriedade
     (ex: button/size/height-medium)

   Regras de bind de variáveis na Figma Plugin API:
   - Fills/strokes: dentro do objeto paint como
     { type:'SOLID', color:{...}, boundVariables:{ color:{ type:'VARIABLE_ALIAS', id:var.id } } }
     NUNCA via node.setBoundVariable('fills', var) — lança erro silencioso
   - Layout (height, padding*, gap, cornerRadius): via node.setBoundVariable(field, var)
   - Tipografia: criar text style com figma.createTextStyle() e aplicar via
     node.textStyleId = style.id; bind de fontSize/fontWeight/lineHeight/fontFamily
     via style.setBoundVariable(field, var)
   - Antes de resize(): limpar node.minHeight = null e node.maxHeight = null

--- GATE 1 (obrigatório) ---

6. Exibir plano de tokens em tabela:
   | Propriedade | Token 03 | Referência 02 | Referência 01 | Ação |
   |-------------|----------|---------------|---------------|------|
   | altura medium | button/size/height-medium | shape/size/x5 (40px) | shape/size/40px | criar alias |
   | ...          | ...      | ...           | ...           | reutilizar |

   Aguardar aprovação explícita antes de prosseguir para construção.

--- CONSTRUÇÃO NO FIGMA ---

7. Modo NOVO — criar component set:
   a. Definir todas as dimensões de variante (ex: variant, size, state, icon)
   b. Criar cada variante como componente filho com Auto Layout
   c. Aplicar fills/strokes via boundVariables no objeto paint
   d. Aplicar layout props via setBoundVariable (paddingLeft, paddingRight,
      paddingTop, paddingBottom, itemSpacing, minHeight desativado)
   e. Aplicar tipografia via textStyleId com variáveis bound na style
   f. Adicionar ao component set com figma.combineAsVariants()

   Modo EVOLUÇÃO — estender component set existente:
   a. Localizar o component set via nodeId
   b. Clonar uma variante existente como base para cada nova variante
   c. Ajustar: limpar minHeight/maxHeight antes de resize(); rebindar
      variáveis nos nós ajustados (não herdar valores primitivos do clone)
   d. Adicionar nova dimensão de variante ao component set se necessário

8. Organizar grade de variantes:
   - Colunas: dimensão com mais variações visuais (ex: variant=primary/secondary/tertiary)
   - Linhas: demais dimensões em ordem lógica (ex: size → icon mode → state)
   - Gap entre colunas: 40px; gap entre linhas: 40px

--- GATE 2 (obrigatório) ---

9. get_screenshot → exibir ao usuário
   Confirmar: nenhum valor primitivo hardcoded nos nós
   (toda propriedade de cor/tamanho/tipografia tem variável bound)
   Aguardar confirmação do usuário

--- ENTREGA ---

10. Informar:
    - Tokens criados (nome, coleção, valor/alias)
    - Variantes adicionadas/criadas
    - Próximos passos sugeridos:
      · Publicar variáveis na library (Assets panel → Publish changes)
      · Se o componente for novo: usar /ds-componente (Caso 7) para gerar o código React
      · Se for evolução de existente: atualizar props no código React do repositório olist-ds
```

## Lições práticas da Figma Plugin API (2026-10)

Registradas na construção do Content Card, da `ilustracao` e do `intent` do Button/Link. Valem para qualquer Caso 5.

**Nomenclatura e estrutura**
- **Um componente público por conjunto e peças internas `.[base]`.** A arte ou a peça que ninguém deve instanciar fora do componente-mãe vira `.[base] nome`; o componente público é o que o time usa (ex.: `ilustracao` consome `.[base] illustration` e `.[base] illustration asset`). Peças `.[base]` não aparecem na busca nem são publicadas como asset.
- **Hierarquia e significado são dimensões diferentes.** `type` = ênfase (primary, secondary, tertiary) e `intent` = significado (default, danger), no mesmo vocabulário de Badge, Toast e Alert Bar (`intent`). Não misture significado dentro de `type`.
- Calcule o total de variantes antes de construir (ex.: 3 types × 2 intents × 4 states × 3 sizes × 3 ícones = 216).

**Adicionar uma dimensão de variante sem quebrar instâncias**
- **Renomeie as variantes existentes** inserindo `prop=valor` no nome (ex.: `type=danger, state=…` → `type=primary, intent=danger, state=…`). Os ids e as instâncias são preservados e os overrides seguem. Não recrie os componentes.
- `node.clone()` de uma variante cria o clone **na página**, não no set: mova com `set.appendChild(clone)` e reorganize a grade (x/y) depois.
- Ao clonar variantes para uma nova intenção, **mapeie os tokens pelo nome** (`button/color/secondary hover` → `button/color/secondary danger hover`), criando o alias no componente apontando para o semântico certo (`…/neutral` → `…/negative`). Nós dentro de instâncias aninhadas (glifo de ícone) podem ter cor fixa ou token diferente: confira e ligue ao token de texto.
- Renomear uma propriedade booleana (ex.: `new page` → `action icon`) com `editComponentProperty(chave, { name })` preserva os valores nas instâncias; criar outra e apagar a antiga os perde.
- Variáveis renomeadas em `03. component tokens` mantêm as ligações dos nós (renomeie em vez de recriar).

**Slots**
- `figma.createSlot` não existe: clone um nó SLOT de um componente existente. O slot volta a ser FRAME se não houver propriedade SLOT e referência na mesma execução.
- Em instância, apague os filhos do slot e use `slot.appendChild(...)` para colocar conteúdo. **Trocar a variante da instância reseta os overrides e o conteúdo dos slots.** Instância criada antes de um override de modo de tema também não o herda: recrie a instância.
- Largura de um frame ligada a variável não aceita override via API em instância; mover um nó para dentro de uma instância só é permitido em slots (`Cannot move node`).

**Arte vetorial que escala**
- Para a arte acompanhar o redimensionamento de uma instância: `constraints = SCALE` em **todos** os descendentes (também dentro de grupos e frames aninhados). Sem isso, partes não escalam e a arte aparece cortada.
- Raios de canto, espessura de traço e texto **não** escalam por constraints: converta RETÂNGULOS com raio (`figma.flatten`), texto (`figma.flatten`) e traços (`node.outlineStroke()`) em vetor antes. `outlineStroke()` devolve o novo nó **na página**, não ao lado do original: recoloque com `appendChild` no pai do nó original e ajuste x/y (use o x/y do original menos metade da diferença de largura/altura). Confira que nenhum nó ficou solto na página.
- O tamanho de uma instância interna é fixo por variante: crie as variantes de tamanho/proporção em vez de redimensionar a instância interna.
- Combine pranchetas de proporções diferentes numa **prancheta única** (aqui 4:3) para que a troca de arte por INSTANCE_SWAP não distorça.

**Modo de tema forçado (ex.: fundo que não muda no escuro)**
- `variante.setExplicitVariableModeForCollection(coleção, modo)` em um componente de variante vale para instâncias novas e para troca de variante em instâncias novas; use `fundo=claro` para fixar o tema claro numa superfície.

**Operação e verificação**
- Um `use_figma` que falha reverte tudo (rollback): corrija o erro e execute o script inteiro de novo.
- `get_screenshot` costuma devolver o estado anterior após edições: confira a geometria e use `node.screenshot()` dentro do `use_figma` para o visual.
- Carregue as fontes de todos os text styles (`loadFontAsync`) antes de alterar `textDecoration`, `characters` ou `textAutoResize`.
- `getPublishStatusAsync()` devolve `UNPUBLISHED` para peças `.[base]`: é o esperado.
- Para clonar nós entre arquivos não há API: peça ao usuário para colar as frames no arquivo de destino e construa a partir delas.

