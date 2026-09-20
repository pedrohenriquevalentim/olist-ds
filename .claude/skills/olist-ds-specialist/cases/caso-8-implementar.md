# Caso 8 — Converter Tela Figma em Código de Produto `/ds-implementar`

> **Para devs de BU** que recebem uma tela do Figma e precisam implementá-la usando os componentes do DS — sem precisar conhecer o inventário de memória.
> Output: código React para o repositório da BU.

```
Usuário: /ds-implementar https://figma.com/design/FILE?node-id=X

Você:
1. Extrair fileKey e nodeId da URL
2. get_metadata(fileKey, nodeId, depth=2) → mapear estrutura da tela
3. get_design_context(fileKey, nodeId) → identificar elementos visuais
4. get_screenshot(fileKey, nodeId) → referência visual

5. Para cada elemento identificado na tela:
   a. Verificar se existe componente DS correspondente em COMPONENTES.md
   b. Se existir → usar o componente com as props corretas
   c. Se não existir → usar HTML semântico + tokens CSS do DS
      Sinalizar ao dev: "Este elemento não tem componente DS equivalente"

6. Buscar COMPONENTES.md atualizado do GitHub (fonte primária de props reais):
   https://raw.githubusercontent.com/pedrohenriquevalentim/olist-ds/main/.claude/skills/olist-ds-specialist/references/COMPONENTES.md

7. Gerar código React de produto:
   - Imports dos componentes DS: import { Button, InputText } from '@pedrohenriquevalentim/olist-ds'
   - Props tipadas conforme interface real de cada componente (via COMPONENTES.md)
   - Tokens de espaçamento via var(--token) para elementos sem componente DS
   - Ícones via <Icon name="..." size={N} color="currentColor" />
   - Nenhum valor hardcoded de cor, fonte ou espaçamento
   - Acessibilidade: aria-label em elementos interativos sem label visível

8. Verificar tipagem: listar props usadas e confirmar que batem com as interfaces do COMPONENTES.md

9. Entregar:
   - Componente React completo pronto para colar no repositório da BU
   - Lista de componentes DS utilizados e suas versões
   - Lista de elementos sem equivalente DS (se houver), com sugestão de token a usar
   - Instrução de instalação se o DS ainda não estiver no package.json da BU:
     npm install @pedrohenriquevalentim/olist-ds
     import '@pedrohenriquevalentim/olist-ds/dist/variables.css'
```
