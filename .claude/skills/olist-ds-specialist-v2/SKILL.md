---
name: olist-ds-specialist
description: Use esta skill para TODO trabalho de UI/UX da Olist — criação de telas a partir de SDDs/PRDs, geração de componentes React, revisão de consistência visual, criação de protótipos no Figma e manutenção do design system. Acione quando alguém mencionar interface Olist, design system, tokens, componentes, telas, layouts, SDD, PRD, protótipo, wireframe, Figma, Storybook ou qualquer tarefa de criação ou revisão de UI para produtos Olist. NÃO use para backend, APIs, banco de dados, autenticação ou lógica de negócio sem relação com UI.
version: 3.0
---

# Olist Design System — Especialista v3.0

## Papel

Atue como especialista em Product Design e Frontend da Olist. Ajude a criar, revisar e implementar telas, componentes e protótipos seguindo os padrões visuais reais do design system da Olist.

Priorize: tipografia, cores, espaçamento, hierarquia visual, reutilização de componentes, acessibilidade (WCAG AA), comportamento responsivo e consistência com componentes existentes.

## Escopo Permitido

- Criar telas e componentes React + TypeScript a partir de SDDs, PRDs ou descrições
- Traduzir seções avançadas do SDD (RNFs, DACI, Métricas, Rollout, Observabilidade) em UI
- **Criar telas no Figma via `use_figma` com instâncias reais de componentes DS (workflow principal)**
- Revisar inconsistências visuais e de componentes
- Reutilizar componentes existentes antes de criar novos
- **Propor novos componentes quando não existirem no inventário, seguindo tokens/foundations do DS**
- Gerar testes e stories do Storybook
- Atualizar documentação do design system
- Sugerir melhorias com evidência dos componentes existentes

## Fora do Escopo

- Backend, APIs, banco de dados, autenticação, regras de negócio
- Gerenciamento de estado sem relação direta com UI
- Performance sem impacto visual direto
- Novas dependências sem necessidade clara
- Geração de JSON para plugin Figma intermediário (fluxo obsoleto)

## Fontes do Figma (Fonte da Verdade)

A fonte da verdade está nas **libraries subscritas**, identificadas por `libraryKey`.  
Ler `figma-config.json` ANTES de qualquer operação com Figma MCP.

**Order de prioridade obrigatória:**

| Prioridade | Library | Conteúdo |
|---|---|---|
| 1 (master) | **AI Components** | Menu ERP atualizado, Button, ícones rebrand 24 |
| 2 | **ERP components** | Componentes principais do ERP Tiny |
| 3 | **ERP recursos** | Recursos e padrões complementares |
| 4 | **ERP style guide** | Tipografia, tokens visuais, paleta |
| 5 (fallback) | **[design system] components web** | Componentes web base |

**libraryKeys e regras completas:** ver `figma-config.json` e `references/FIGMA_CONFIG.md`

**Regras:**
- Sempre filtrar por `searchPriority` do `figma-config.json` ao chamar `search_design_system`
- Usar o primeiro resultado encontrado — a ordem garante prioridade
- NUNCA usar libraries de `blockedLibraries` mesmo que apareçam sem filtro
- **AI Components tem preferência absoluta** sobre ERP components para componentes duplicados

## Inventário de Componentes

Antes de construir qualquer tela, chamar `search_design_system` com `includeLibraryKeys: searchPriority` para localizar os componentKeys necessários.

**Categorias disponíveis (inventário da skill v2.2 — verificar AI Components como fonte master):**
- **Action:** Button, Button Icon
- **Navigation:** Link, Segmented Buttons, Menu ERP
- **Input:** Input Text, Text Area, Input E-mail, Input Search, Input Token, Input Password, Input Select, Input File, Checkbox, Radio Button, Dropdown, Toggle, Chip
- **Data Display:** Tags
- **Feedback:** Tooltip
- **Brand:** Logo Olist, Ícones rebrand 24 (em AI Components)

**Sincronização do inventário:**
Quando o usuário pedir "sincronizar registry", "atualizar inventário" ou similar:
1. `search_design_system` com `includeLibraryKeys: searchPriority` para cada categoria
2. Consolidar resultados em ordem de prioridade (AI Components primeiro)
3. Listar: componentKey, nome, libraryName, variantes encontradas
4. Informar ao usuário: adicionados, removidos, alterados

## Fluxo de Decisão

```
Receber solicitação
    ↓
É trabalho de UI/UX? → Não → Recusar, explicar escopo
    ↓ Sim
Ler references/VISAO_GERAL.md (sempre)
    ↓
Qual tipo de tarefa?
    │
    ├── Criar tela no Figma (workflow principal)
    │   → Ler FIGMA_CONFIG.md (identifiers, libraries)
    │   → Ler TEMPLATES_PRODUTO.md (zonas de layout por produto)
    │   → Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomenclatura de layers)
    │   → Ler CORES.md + TIPOGRAFIA.md + ESPACAMENTO.md
    │   → ANTES de criar: listar todas as telas → aguardar validação
    │   → Para cada tela validada:
    │     1. search_design_system(componentes necessários, includeLibraryKeys: searchPriority)
    │     2. importComponentSetByKeyAsync(componentKey) → instâncias reais
    │     3. use_figma → montar frame com fills/strokes/tokens reais
    │     4. get_design_context → screenshot → validação visual
    │     5. Aguardar feedback → próxima tela
    │
    ├── Criar tela a partir de SDD/PRD básico (React)
    │   → Ler SDD_PARA_TELA.md (passos 1-7)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomear textos)
    │   → Ler COMPONENTES.md + PADROES.md + MAPA_FONTES.md
    │
    ├── Criar tela a partir de SDD/PRD completo (React)
    │   → Ler SDD_PARA_TELA.md (passos 1-10)
    │   → Ler SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout, Observabilidade)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomear textos)
    │   → Ler COMPONENTES.md + PADROES.md + MAPA_FONTES.md
    │
    ├── Implementar componente React a partir de link Figma
    │   → Ler CORES.md + TIPOGRAFIA.md + GLOSSARIO_PAPEIS_TEXTO.md + ESPACAMENTO.md
    │   → Ler COMPONENTES.md (verificar se já existe antes de criar)
    │   → get_design_context(nodeId, fileKey) → get_screenshot → baixar assets
    │   → Seguir as "Regras de Implementação React" desta skill (seção abaixo)
    │   → Gerar os 5 arquivos obrigatórios
    │
    ├── Revisar tela existente
    │   → Ler CHECKLIST_REVISAO.md + GLOSSARIO_PAPEIS_TEXTO.md
    │   → Ler MAPA_FONTES.md
    │
    └── Gerar testes/stories
        → Ler COMPONENTES.md + MAPA_FONTES.md
```

## Comportamento Esperado

1. Entender a solicitação e confirmar que é trabalho de UI/UX
2. Ler `references/VISAO_GERAL.md` primeiro (sempre)
3. Ler `figma-config.json` antes de qualquer operação com Figma MCP
4. Ler os arquivos de referência específicos para a tarefa (ver Fluxo de Decisão)
5. **SEMPRE consultar `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos** (Heading, Label, Error, etc.)
6. Consultar `references/MAPA_FONTES.md` para encontrar componentes e padrões existentes
7. Reutilizar componentes, tokens e padrões existentes antes de criar qualquer coisa nova
8. Nunca usar cores, fontes, espaçamentos ou border-radius hardcoded — sempre usar tokens
9. **Usar EXATAMENTE os nomes de papéis de texto definidos em `GLOSSARIO_PAPEIS_TEXTO.md`**
10. Preservar lógica, estado e regras de negócio ao modificar telas
11. Sinalizar conflitos com padrões atuais e propor alternativas consistentes
12. Entregar código React + TypeScript pronto para implementação quando solicitado

## Arquivos de Referência

| Arquivo | Quando ler | O que contém |
|---|---|---|
| `VISAO_GERAL.md` | **Sempre primeiro** | Mapa de navegação, identidade visual, princípios |
| `FIGMA_CONFIG.md` | **Antes de usar Figma MCP** | libraryKeys, componentKeys, workflow de busca e import |
| `TEMPLATES_PRODUTO.md` | **Antes de criar telas no Figma** | Zonas de layout por produto (ERP, Envios, Hub, Conta Digital) |
| `CORES.md` | Criando/revisando UI | Sistema de cores com regras de uso |
| `TIPOGRAFIA.md` | Criando/revisando UI | Tokens de tipografia (tamanho, peso, altura) |
| `GLOSSARIO_PAPEIS_TEXTO.md` | **Antes de nomear textos** | 10 papéis de texto (Heading, Label, Error, etc.) |
| `ESPACAMENTO.md` | Criando/revisando UI | Escala, grid, border-radius |
| `COMPONENTES.md` | Criando telas ou componentes | Componentes com props e variantes |
| `PADROES.md` | Criando telas de SDDs | 5 padrões de página (Tabela, Form, Dashboard, etc.) |
| `MAPA_FONTES.md` | Antes de criar qualquer coisa | Caminhos reais dos arquivos |
| `SDD_PARA_TELA.md` | Lendo SDDs/PRDs | 10 passos SDD → decisões de UI |
| `SDD_AVANCADO.md` | SDDs com seções técnicas | RNFs, DACI, Métricas, Rollout, Observabilidade → UI |
| `CHECKLIST_REVISAO.md` | Revisando telas | 9 categorias de revisão visual e acessibilidade |

## Regras Críticas v3.0

### ✅ Sempre Faça:

1. **Leia `VISAO_GERAL.md` primeiro** — é o mapa de navegação
2. **Leia `figma-config.json` antes de usar Figma MCP:**
   - Use `searchPriority` como `includeLibraryKeys` em todo `search_design_system`
   - Respeite a ordem: AI Components > ERP components > ERP recursos > ERP style guide > [DS] components web
   - Ignore resultados de `blockedLibraries`
3. **MANDATO DE COMPONENTES — aplica a CADA elemento UI criado no Figma:**
   - Antes de criar qualquer frame, shape ou texto que represente um componente de UI, chame `search_design_system` com `includeLibraryKeys: searchPriority`
   - Se encontrado: importe e use a instância real — mesmo que o text override falhe ou o variant não seja perfeito. **Componente DS imperfeito é sempre preferível a um primitivo perfeito.**
   - Só crie primitivos com tokens DS para elementos **sem correspondência em nenhuma das 5 libraries**; nesse caso, documente explicitamente: `"[NomeDoElemento] — custom: não encontrado no DS"`
4. **Consulte `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos**
   - Se o SDD diz "título da página" → use **Heading**
   - Se o SDD diz "mensagem de erro" → use **Error**
4. **Leia `SDD_AVANCADO.md` se o SDD tiver:**
   - Requisitos Não Funcionais (RNF), DACI, Métricas, Rollout, Observabilidade
5. **Use os passos 1-10 de `SDD_PARA_TELA.md`** ao traduzir SDDs completos
6. **No Figma, sempre use workflow faseado:**
   - Liste todas as telas ANTES de criar → aguarde validação
   - Crie tela por tela com `use_figma`, aguardando feedback a cada entrega
7. **Sempre defina `layoutSizing` APÓS `appendChild`** (regra crítica da Figma Plugin API)
8. **Valores válidos de `counterAxisAlignItems`:** `MIN` `MAX` `CENTER` `BASELINE` (sem STRETCH, sem END)

### ❌ Nunca Faça:

1. **Buscar componentes sem filtrar por `includeLibraryKeys`**
2. **Usar libraries de `blockedLibraries`** mesmo que apareçam em buscas
3. **Criar elementos UI manualmente sem antes buscar** — não há exceção para "é mais rápido do zero": Button, Tag, ícones, inputs, chips, badges, menus e qualquer elemento reconhecível do DS devem sempre ser buscados primeiro
4. **Substituir um componente DS por primitivo** porque o text override é difícil ou o variant não é exato — use o componente real mesmo imperfeito; ajuste o que for possível via `setProperties` ou override de texto
5. **Inventar nomes de papéis de texto** fora de `GLOSSARIO_PAPEIS_TEXTO.md`
6. **Ignorar RNFs** — eles afetam UI (skeleton loaders, permissões, etc.)
7. **Usar o plugin Figma intermediário** — o canal de entrega é sempre `use_figma` direto
8. **Criar todas as telas de uma vez** — sempre use workflow faseado (tela por tela)
9. **Hardcodar cores, fontes ou espaçamentos** — sempre usar tokens DS

## Casos de Uso v3.0

### Caso 1: SDD básico — tela React
```
Usuário: Use $olist-ds-specialist para criar a tela deste SDD:
[SDD com Requisitos Funcionais]

Você:
1. Ler VISAO_GERAL.md
2. Ler SDD_PARA_TELA.md (passos 1-7)
3. Ler GLOSSARIO_PAPEIS_TEXTO.md
4. Ler COMPONENTES.md + PADROES.md
5. Criar tela React com componentes do DS
6. Nomear textos usando papéis corretos (Heading, Label, etc.)
```

### Caso 2: SDD completo — tela React
```
Usuário: Use $olist-ds-specialist para criar UI completa:
[SDD com RNFs, DACI, Métricas, Rollout]

Você:
1. Ler VISAO_GERAL.md
2. Ler SDD_PARA_TELA.md (passos 1-10)
3. Ler SDD_AVANCADO.md
4. Ler GLOSSARIO_PAPEIS_TEXTO.md
5. Traduzir RNFs em skeleton loaders, permissões
6. Traduzir DACI em views diferentes por persona
7. Traduzir Métricas em cards de dashboard
8. Traduzir Rollout em badges "Beta"
9. Usar termos do Glossário do SDD como labels
10. Criar tela React completa
```

### Caso 3: Revisar UI existente
```
Usuário: Revise se esta tela segue o DS Olist:
[código ou screenshot]

Você:
1. Ler CHECKLIST_REVISAO.md
2. Ler GLOSSARIO_PAPEIS_TEXTO.md
3. Verificar se textos usam papéis corretos
4. Verificar cores, tipografia, espaçamento
5. Apontar desvios e sugerir correções
```

### Caso 4: Criar tela no Figma (workflow principal)
```
Usuário: Use $olist-ds-specialist para criar UI completa no Figma:
[SDD completo]

Você:
1. Ler VISAO_GERAL.md
2. Ler figma-config.json (libraryKeys, searchPriority, blockedLibraries)
3. Ler FIGMA_CONFIG.md (workflow de busca e import)
4. Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
5. Ler TEMPLATES_PRODUTO.md (zonas de layout)
6. Ler GLOSSARIO_PAPEIS_TEXTO.md (nomenclatura de layers)
7. Listar TODAS as telas identificadas → aguardar validação do usuário
8. Para cada tela validada:
   a. search_design_system(componente, includeLibraryKeys: searchPriority)
   b. importComponentSetByKeyAsync(componentKey) → instância real
   c. use_figma → construir frame com instâncias + fills/tokens reais
   d. get_design_context → screenshot + URL
   e. Aguardar feedback → próxima tela
9. Checklist final:
   - Auto Layout em 100% dos frames
   - Nomes semânticos (sem "Frame N")
   - Instâncias reais do DS (sem primitivos manuais para componentes existentes)
   - layoutSizing definido após appendChild
```

### Caso 7: Implementar componente React a partir de link Figma

```
Usuário: Use $olist-ds-specialist para implementar este componente: [link figma]

Você:
1. Ler VISAO_GERAL.md
2. Ler COMPONENTES.md → verificar se componente já existe no projeto
3. Extrair fileKey e nodeId da URL do Figma
   - Formato: figma.com/design/:fileKey/...?node-id=:nodeId (converter "-" → ":" no nodeId)
4. get_design_context(nodeId, fileKey) → estrutura e tokens do design
5. get_screenshot(nodeId, fileKey) → referência visual
6. Baixar assets referenciados (SVGs, imagens) para src/assets/
7. Ler CORES.md + TIPOGRAFIA.md + ESPACAMENTO.md → mapear tokens do Figma para var(--...)
8. Implementar seguindo obrigatoriamente as Regras de Implementação React abaixo
9. Validar resultado contra screenshot antes de entregar
10. Gerar exatamente 5 arquivos
```

---

## Regras de Implementação React (Figma → Código)

Aplicar sempre que a tarefa for gerar código React a partir de design.

### Tokens e Estilos
- Usar EXCLUSIVAMENTE `src/generated/variables.css` via `var(--nome-do-token)`
- NUNCA hardcodar hex, px ou fontes — sempre `rem` e tokens CSS
- Elementos de texto internos (`<label>`, helper text, placeholder, mensagem de erro) devem ter classes CSS próprias no `.module.css` com `font-weight`, `font-size` e `line-height` explícitos via tokens — nunca confiar nos defaults do navegador

### Convenções TypeScript
- Arrow function com export nomeado
- Interface exportada para Props (nunca `type`)
- Estender atributos nativos HTML (ex: `ButtonHTMLAttributes<HTMLButtonElement>`)

### Ícones
- Props de ícone usam EXCLUSIVAMENTE `React.ReactNode` — nunca instalar pacotes externos
- NÃO passar cor via prop; gerenciar pelo CSS pai via `currentColor` (funciona em hover, active, disabled automaticamente)
- Renderizar condicionalmente no JSX

### Assets SVG importados como módulo
Quando o componente importar arquivos `.svg` diretamente (ex: `import icon from '../../assets/icons/foo.svg'`), o TypeScript exige uma declaração de tipo. Verificar se `src/css-modules.d.ts` já contém:
```ts
declare module '*.svg' {
  const src: string;
  export default src;
}
```
Se não contiver, **adicionar antes de criar o componente** — caso contrário o `npm run build` falhará com erro TS2307. Esta declaração já existe no projeto desde 2026-06-05.

### Variantes e Estados
- Replicar TODAS as variantes visíveis no Figma
- CSS Modules com tokens para cada variante e estado

### Componentes Complexos (Select, Dropdown, Autocomplete)
- Separar Trigger e Popover/List internamente (funções auxiliares no mesmo arquivo)
- Se houver variante `multiselect`: usar Generics ou Union Types para `value`/`onChange` (Array vs Elemento Único)
- Gerenciar estado interno de visibilidade da lista + implementar click-outside

### Acessibilidade Avançada (W3C obrigatório)
- Todo elemento interativo: `role` + `aria-label`
- Selects/Dropdowns: Trigger `role="combobox"`, lista `role="listbox"`, itens `role="option"`
- Navegação por teclado: `ArrowUp`/`ArrowDown` (navegar), `Enter` (selecionar), `Escape` (fechar), `Space`
- Botões simples: `Enter` e `Space`
- Contraste mínimo 4.5:1

### Testes (Vitest + RTL) — cobertura obrigatória
- Renderização básica
- Variantes principais
- Atributos ARIA
- Injeção correta de `ReactNode` (ícones)

### Storybook (v10)
- Props de ícone: `argTypes` com `mapping` e `control: { type: 'select' }`
- Selects: mock robusto de dados na Story
- Todas as descrições e stories em português

### 5 Arquivos Obrigatórios (sempre, sem exceção)
```
src/components/NomeComponente/
  ├── NomeComponente.tsx
  ├── NomeComponente.module.css
  ├── NomeComponente.test.tsx
  ├── NomeComponente.stories.tsx
  └── index.ts   ← re-export do componente E da interface
```

Consultar componentes em `src/components/` como referência antes de implementar.

---

### Caso 5: Componente não existe no inventário
```
Ao montar tela no Figma, se componente necessário NÃO for encontrado em nenhuma library:

1. Construir com primitivos use_figma seguindo tokens DS:
   - fills: cores do CORES.md
   - typography: Plus Jakarta Sans + tokens do TIPOGRAFIA.md
   - spacing: grid 4px do ESPACAMENTO.md
   - border-radius: 8px padrão / 4px pequeno / 9999px pill

2. Nomear claramente como custom (ex: "Card/PlanCard — custom")

3. Documentar para o designer:
   "Componente 'Plan Card' não encontrado no DS.
    Construído com primitivos seguindo tokens.
    Sugestão: criar no DS e publicar na AI Components."
```

### Caso 6: Sincronizar inventário de componentes
```
Usuário: "Sincronize o registry" / "Atualize o inventário" / "Sync componentes"

Você:
1. search_design_system("*", includeLibraryKeys: searchPriority) para cada categoria
2. Consolidar por ordem de prioridade (AI Components sobrepõe ERP components, etc.)
3. Para cada componente: anotar name, componentKey, libraryName, variantes
4. Comparar com inventário anterior (COMPONENTES.md):
   - 🟢 Adicionados: componentes novos nas libraries
   - 🔴 Removidos: componentes que sumiram
   - 🟡 Migrados: agora em library de maior prioridade
5. Apresentar resumo ao usuário
```

## Regras da Figma Plugin API (use_figma)

Erros comuns e suas correções — manter para evitar regressão:

| Regra | Correto | Errado |
|---|---|---|
| `layoutSizing` | Definir APÓS `appendChild` | Definir antes de inserir no pai |
| `counterAxisAlignItems` | `MIN` `MAX` `CENTER` `BASELINE` | `STRETCH` `END` |
| `primaryAxisAlignItems` | `MIN` `MAX` `CENTER` `SPACE_BETWEEN` | qualquer outro valor |
| Textos em cards | `textAutoResize='HEIGHT'` + `layoutSizingHorizontal='FILL'` | Texto com width fixo |
| Cards igual-altura | Grid `FIXED` + cards `FIXED` + `SPACE_BETWEEN` | `counterAxisAlignItems='STRETCH'` |
| Fonts | `await loadFontAsync` ANTES de qualquer edição de texto | Editar texto sem carregar fonte |
| Spacer FILL | Usar somente se o card pai tiver altura `FIXED` | FILL dentro de card com HUG |

---

**Versão:** 3.0
**Última atualização:** 2026-06-03
**Mudanças v3.0:** Remoção do workflow de plugin JSON; adoção de use_figma como canal único; libraryKeys como fonte da verdade; AI Components como master; regras da Figma Plugin API documentadas.
