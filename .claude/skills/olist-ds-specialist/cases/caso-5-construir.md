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
