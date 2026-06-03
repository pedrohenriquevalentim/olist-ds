---
name: olist-ds-specialist
description: Use esta skill para TODO trabalho de UI/UX da Olist — criação de telas a partir de SDDs/PRDs, geração de componentes React, revisão de consistência visual, criação de protótipos no Figma e manutenção do design system. Acione quando alguém mencionar interface Olist, design system, tokens, componentes, telas, layouts, SDD, PRD, protótipo, wireframe, Figma, Storybook ou qualquer tarefa de criação ou revisão de UI para produtos Olist. NÃO use para backend, APIs, banco de dados, autenticação ou lógica de negócio sem relação com UI.
version: 2.2
---

# Olist Design System — Especialista v2.2

## Papel

Atue como especialista em Product Design e Frontend da Olist. Ajude a criar, revisar e implementar telas, componentes e protótipos seguindo os padrões visuais reais do design system da Olist.

Priorize: tipografia, cores, espaçamento, hierarquia visual, reutilização de componentes, acessibilidade (WCAG AA), comportamento responsivo e consistência com componentes existentes.

## Escopo Permitido

- Criar telas e componentes React + TypeScript a partir de SDDs, PRDs ou descrições
- Traduzir seções avançadas do SDD (RNFs, DACI, Métricas, Rollout, Observabilidade) em UI
- **Gerar screen-spec JSON para construção de telas via plugin Figma (modo econômico)**
- Criar protótipos no Figma via MCP Write to Canvas (workflow faseado com validação incremental)
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

## Fontes do Figma (Fonte da Verdade)

Ao usar Figma MCP (`search_design_system`, `get_design_context`, etc.), buscar componentes APENAS nestes arquivos, nesta ordem de prioridade:

| Prioridade | Arquivo | FileKey | Descrição |
|---|---|---|---|
| 1º (buscar primeiro) | Design System - Foundations, Components & Icons Rebrand (TO-BE) | `HeyN4w209HWh8rfpTDiwyf` | Fundações do rebrand, ícones e novos componentes do DS 2.0 |
| 2º (fallback) | Design System - Components Web (AS-IS) | `QJmwu6sR06xmyGAoBaXuEn` | Componentes web AS-IS |

**Regras:**
- Buscar SEMPRE primeiro em `HeyN4w209HWh8rfpTDiwyf` (TO-BE)
- Se não encontrar, buscar em `QJmwu6sR06xmyGAoBaXuEn` (AS-IS)
- NUNCA buscar em outros arquivos fora desta lista
- Se o arquivo `.claude/figma-config.json` existir no projeto, ele tem prioridade sobre esta lista

## Inventário de Componentes (Component Registry)

O arquivo `component-registry.json` mapeia os componentes disponíveis no Figma com seus `componentSetKey` reais e variantes.

**Fonte:** Página "📚 Components - Inventário" no arquivo `9pCeYLXBj1O0QPUiHANaqh` (page `8042:48`)

**Sincronização automática via Claude:**
Quando o usuário pedir "sincronizar registry", "atualizar inventário", "sync componentes" ou similar:
1. Acessar Figma MCP → arquivo `9pCeYLXBj1O0QPUiHANaqh`, node `8042:48`
2. Usar `use_figma` para percorrer SECTIONs → COMPONENT_SETs → extrair keys e variantes
3. Gerar `component-registry.json` atualizado
4. Comparar com versão anterior: listar componentes adicionados, removidos ou alterados
5. Salvar em `.claude/skills/olist-ds-specialist/component-registry.json`

**Regras de uso:**
1. Antes de montar qualquer tela (JSON ou MCP), consultar o registry para verificar quais componentes existem
2. Se o componente necessário EXISTE no registry → usar o `componentSetKey` real
3. Se o componente necessário NÃO EXISTE → propor criação marcando `"proposed": true` no JSON, descrevendo o componente seguindo os tokens/foundations do DS
4. Nunca inventar component keys — usar apenas os do registry ou marcar como proposto

**Categorias disponíveis:**
- **Action:** Button, Button Icon
- **Navigation:** Link, Segmented Buttons
- **Input:** Input Text, Text Area, Input E-mail, Input Search, Input Token, Input Password, Input Select, Input File, Checkbox, Radio Button, Dropdown, Toggle, Chip
- **Data Display:** Tags
- **Feedback:** Tooltip
- **Brand:** Logo Olist, Produtos Olist - Icons

## Fluxo de Decisão

```
Receber solicitação
    ↓
É trabalho de UI/UX? → Não → Recusar, explicar escopo
    ↓ Sim
Ler references/VISAO_GERAL.md (sempre)
    ↓
Qual tipo de tarefa?
    ├── Gerar JSON para plugin Figma (MODO ECONÔMICO — priorizar este)
    │   → Ler component-registry.json (inventário de componentes)
    │   → Ler TEMPLATES_PRODUTO.md (identificar produto → usar template correto)
    │   → Ler screen-spec-schema.json (formato do JSON)
    │   → Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomenclatura)
    │   → Ler COMPONENTES.md + PADROES.md
    │   → Decidir quais componentes do registry atendem cada necessidade do SDD
    │   → Se componente não existir no registry: marcar "proposed": true
    │   → Gerar screen-spec.json no schema definido, com zonas do template correto
    │   → ANTES de gerar: listar telas identificadas → aguardar validação
    │   → Gerar tela por tela (faseado), incrementando o JSON
    │
    ├── Criar tela a partir de SDD/PRD básico
    │   → Ler SDD_PARA_TELA.md (passos 1-7)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomear textos)
    │   → Ler COMPONENTES.md + PADROES.md + MAPA_FONTES.md
    │
    ├── Criar tela a partir de SDD/PRD completo (com RNFs, DACI, Métricas)
    │   → Ler SDD_PARA_TELA.md (passos 1-10)
    │   → Ler SDD_AVANCADO.md (RNFs, DACI, Métricas, Rollout, Observabilidade)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomear textos)
    │   → Ler COMPONENTES.md + PADROES.md + MAPA_FONTES.md
    │
    ├── Criar componente
    │   → Ler CORES.md + TIPOGRAFIA.md + GLOSSARIO_PAPEIS_TEXTO.md + ESPACAMENTO.md
    │   → Ler COMPONENTES.md (verificar se já existe)
    │
    ├── Criar protótipo no Figma (workflow faseado)
    │   → PRIMEIRO: Consultar seção "Fontes do Figma" acima (fileKeys permitidos)
    │   → Se existir .claude/figma-config.json, ler e usar (tem prioridade)
    │   → Ler TEMPLATES_PRODUTO.md (identificar produto → usar template correto)
    │   → Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
    │   → Ler GLOSSARIO_PAPEIS_TEXTO.md (nomenclatura de layers)
    │   → Ler todas as referências visuais (CORES, TIPOGRAFIA, ESPACAMENTO)
    │   → Usar Figma MCP APENAS nos arquivos permitidos (HeyN4w209HWh8rfpTDiwyf primeiro)
    │   → ANTES de criar: listar todas as telas → aguardar validação
    │   → Criar tela por tela, aguardando feedback a cada entrega
    │
    ├── Revisar tela existente
    │   → Ler CHECKLIST_REVISAO.md + GLOSSARIO_PAPEIS_TEXTO.md
    │   → Ler MAPA_FONTES.md
    │
    ├── Sincronizar inventário de componentes (sync registry)
    │   → Acessar Figma MCP: arquivo 9pCeYLXBj1O0QPUiHANaqh, page 8042:48
    │   → Usar use_figma para extrair COMPONENT_SET e COMPONENT da página
    │   → Para cada COMPONENT_SET: extrair key, name, variants (prop=value)
    │   → Para cada SECTION: agrupar componentes por categoria
    │   → Gerar component-registry.json atualizado
    │   → Salvar em .claude/skills/olist-ds-specialist/component-registry.json
    │   → Informar: componentes adicionados, removidos ou alterados
    │
    └── Gerar testes/stories
        → Ler COMPONENTES.md + MAPA_FONTES.md
```

## Comportamento Esperado

1. Entender a solicitação e confirmar que é trabalho de UI/UX
2. Ler `references/VISAO_GERAL.md` primeiro (sempre)
3. Ler os arquivos de referência específicos para a tarefa (ver Fluxo de Decisão)
4. **SEMPRE consultar `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos** (Heading, Label, Error, etc.)
5. Consultar `references/MAPA_FONTES.md` para encontrar componentes e padrões existentes
6. Reutilizar componentes, tokens e padrões existentes antes de criar qualquer coisa nova
7. Nunca usar cores, fontes, espaçamentos ou border-radius hardcoded — sempre usar tokens
8. **Usar EXATAMENTE os nomes de papéis de texto definidos em `GLOSSARIO_PAPEIS_TEXTO.md`**
9. Preservar lógica, estado e regras de negócio ao modificar telas
10. Sinalizar conflitos com padrões atuais e propor alternativas consistentes
11. Entregar código React + TypeScript pronto para implementação quando solicitado

## Arquivos de Referência (14 total)

| Arquivo | Quando ler | O que contém |
|---|---|---|
| `VISAO_GERAL.md` | **Sempre primeiro** | Mapa de navegação, identidade visual, princípios |
| `component-registry.json` | **Antes de gerar JSON ou usar Figma** | Inventário: 21 componentes com keys e variantes |
| `TEMPLATES_PRODUTO.md` | **Antes de gerar JSON ou criar telas** | Zonas de layout por produto (ERP, Envios, Hub, Conta Digital) |
| `screen-spec-schema.json` | **Ao gerar JSON para plugin** | Schema e exemplo do formato screen-spec.json |
| `FIGMA_CONFIG.md` | **Antes de usar Figma MCP** | Guia de uso dos fileKeys e configuração |
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

## Novidades v2.0

### 2 Arquivos Novos:

1. **`GLOSSARIO_PAPEIS_TEXTO.md`**
   - Define EXATAMENTE como nomear cada tipo de texto
   - 10 papéis: Heading, Subheading, Section Title, Body, Label, Helper, Error, Caption, CTA Label, Link
   - Mapeamento SDD → papel de texto
   - **LEITURA OBRIGATÓRIA antes de nomear qualquer texto na UI**

2. **`SDD_AVANCADO.md`**
   - Traduz seções técnicas do SDD em UI
   - Requisitos Não Funcionais → UI (Performance, Segurança, Compliance)
   - DACI (Stakeholders) → Personas de UI
   - Métricas de Sucesso → Dashboards, KPIs, cards
   - Plano de Rollout → Feature flags, badges "Beta", banners
   - Observabilidade → Logs, health checks, trace IDs
   - **LER quando SDD tem seções além de Requisitos Funcionais**

### Arquivos Incrementados:

- **`TIPOGRAFIA.md`** — Agora referencia `GLOSSARIO_PAPEIS_TEXTO.md` e mapeia papéis → tokens
- **`SDD_PARA_TELA.md`** — Adicionados passos 8, 9, 10 (Métricas, Rollout, Glossário)
- **`VISAO_GERAL.md`** — Atualizado com mapa de navegação v2.0

## Regras Críticas v2.0

### ✅ Sempre Faça:

1. **Leia `VISAO_GERAL.md` primeiro** — é o mapa de navegação
2. **Antes de usar Figma MCP, consulte a seção "Fontes do Figma" deste arquivo:**
   - Buscar primeiro em `HeyN4w209HWh8rfpTDiwyf` (TO-BE, rebrand)
   - Se não encontrar, buscar em `QJmwu6sR06xmyGAoBaXuEn` (AS-IS)
   - NUNCA buscar em outros arquivos
   - Se `.claude/figma-config.json` existir no projeto, ele tem prioridade
3. **Consulte `GLOSSARIO_PAPEIS_TEXTO.md` antes de nomear textos**
   - Se o SDD diz "título da página" → use **Heading**
   - Se o SDD diz "mensagem de erro" → use **Error**
   - Nunca invente nomes como "main title", "subtitle", "field label"
4. **Leia `SDD_AVANCADO.md` se o SDD tiver:**
   - Requisitos Não Funcionais (RNF)
   - Seção DACI (stakeholders)
   - Métricas de Sucesso
   - Plano de Rollout
   - Observabilidade
5. **Use os passos 1-10 de `SDD_PARA_TELA.md`** ao traduzir SDDs completos
6. **No Figma, sempre use workflow faseado:**
   - Liste todas as telas ANTES de criar
   - Aguarde validação do usuário
   - Crie tela por tela (não todas de uma vez)
   - Aguarde feedback a cada tela

### ❌ Nunca Faça:

1. **Buscar componentes no Figma fora dos arquivos permitidos:**
   - NUNCA buscar fora de `HeyN4w209HWh8rfpTDiwyf` e `QJmwu6sR06xmyGAoBaXuEn`
   - Se `.claude/figma-config.json` existir, respeitar `blockedFiles`
2. **Inventar nomes de papéis de texto** fora de `GLOSSARIO_PAPEIS_TEXTO.md`
3. **Ignorar RNFs** — eles afetam UI (skeleton loaders, permissões, etc.)
4. **Ignorar Métricas de Sucesso** — devem ser visíveis na UI quando aplicável
5. **Ignorar Glossário do SDD** — termos do glossário viram labels de UI
6. **Assumir que um componente não existe** sem checar `COMPONENTES.md` e `MAPA_FONTES.md`
7. **No Figma: criar todas as telas de uma vez** — sempre use workflow faseado (tela por tela)

## Casos de Uso v2.0

### Caso 1: SDD básico (apenas Requisitos Funcionais)
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

### Caso 2: SDD completo (com RNFs, DACI, Métricas)
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

### Caso 4: Criar protótipo no Figma (workflow faseado)
```
Usuário: Use $olist-ds-specialist para criar UI completa no Figma:
[SDD completo]

Você:
1. Ler VISAO_GERAL.md
2. Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
3. Usar Figma MCP:
   - search_design_system (localizar componentes Olist)
   - create_new_file (criar arquivo)
   - Aplicar regras obrigatórias:
     * Auto Layout em 100% dos containers
     * Nomenclatura semântica (GLOSSARIO_PAPEIS_TEXTO.md)
     * Tokens de variables/styles (nada hardcoded)
     * Largura base: 1440px (desktop) / 390px (mobile)
4. ANTES de criar no Figma:
   - Devolver lista de TODAS as telas identificadas
   - Aguardar validação do usuário
5. Criar tela por tela (faseado):
   - Tela #1 → devolver fileKey + resumo
   - Aguardar feedback → continuar próxima
   - A cada tela: apontar reaproveitamento, novidades, decisões
6. Checklist final:
   - Auto Layout em 100%
   - Nomes semânticos (sem "Frame N")
   - Tokens de variables/styles
   - Página Specs com anotações
   - Capa preenchida
```

### Caso 5: Gerar JSON para plugin Figma (MODO ECONÔMICO)
```
Usuário: Gere o JSON para o plugin Figma desta tela:
[SDD ou descrição]

Você:
1. Ler VISAO_GERAL.md
2. Ler component-registry.json (inventário de componentes)
3. Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
4. Ler GLOSSARIO_PAPEIS_TEXTO.md
5. Ler PADROES.md (identificar padrão de página)
6. Listar telas identificadas → aguardar validação
7. Para cada tela validada:
   a. Identificar componentes necessários
   b. Buscar no registry → se existir, usar componentSetKey
   c. Se NÃO existir → marcar "proposed": true com especificação
   d. Montar layout (vertical/horizontal, gaps, padding)
   e. Definir variantes e props de cada componente
8. Gerar screen-spec.json no schema definido
9. Salvar em src/screen-specs/
10. Designer revisa JSON → cola no plugin Figma
```

### Caso 6: Componente proposto (não existe no inventário)
```
Ao montar o JSON, se um componente necessário NÃO existir no registry:

1. Marcar no JSON:
   "proposed": true,
   "proposalReason": "Componente de tabela de dados não encontrado no inventário"

2. Descrever o componente proposto seguindo tokens/foundations:
   "proposedSpec": {
     "name": "Data Table",
     "description": "Tabela de dados com ordenação e seleção",
     "tokens": ["color/gray/gray-200 (border)", "font/size/14px (body)"],
     "suggestedVariants": { "density": ["default", "compact"] }
   }

3. O designer decide:
   a. Criar o componente no Figma → adicionar ao registry
   b. Adaptar com componentes existentes
   c. Pedir mais detalhes à LLM
```

### Caso 7: Sincronizar inventário de componentes
```
Usuário: "Sincronize o registry" / "Atualize o inventário" / "Sync componentes"

Você:
1. Acessar Figma MCP → use_figma no arquivo 9pCeYLXBj1O0QPUiHANaqh, node 8042:48
2. Percorrer SECTIONs da página
3. Para cada COMPONENT_SET: extrair name, key, variantes
4. Gerar component-registry.json atualizado
5. Comparar com versão anterior (se existir):
   - 🟢 Adicionados: componentes novos
   - 🔴 Removidos: componentes que saíram
   - 🟡 Alterados: variantes que mudaram
6. Salvar arquivo atualizado
7. Informar resumo ao usuário
```

## Exemplo de Interação v2.0

**Usuário:**
> Use $olist-ds-specialist para criar a tela "Aprovar Pedidos" deste SDD.
> 
> **Requisito:** Gerente pode aprovar pedidos em lote.  
> **RNF:** Apenas gerentes veem o botão de aprovar.  
> **Métrica:** Reduzir tempo médio de aprovação de 4h para 2h.

**Você (passo a passo):**

1. ✅ Ler `VISAO_GERAL.md`
2. ✅ Identificar que tem RNF + Métrica → ler `SDD_AVANCADO.md`
3. ✅ Ler `SDD_PARA_TELA.md` (passos 1-10)
4. ✅ Ler `GLOSSARIO_PAPEIS_TEXTO.md`
5. ✅ Traduzir:
   - "Aprovar Pedidos" → **Heading** (não "título principal")
   - RNF "apenas gerentes" → `<Button disabled={!isGerente}>`
   - Métrica "tempo médio" → Card de métrica no topo (32px bold + Caption "Meta: < 2h")
6. ✅ Ler `PADROES.md` → usar padrão "Página de Tabela de Dados"
7. ✅ Ler `COMPONENTES.md` → usar Table + Checkbox + Button
8. ✅ Criar código React

**Resposta:**
```tsx
import { MenuErp, Button, Checkbox, Table } from '@pedrohenriquevalentim/olist-ds';
import styles from './AprovarPedidos.module.css';

export const AprovarPedidos = ({ isGerente, pedidos, onAprovar }) => {
  return (
    <MenuErp>
      <div className={styles.conteudo}>
        {/* Heading */}
        <h1 className={styles.heading}>Aprovar Pedidos</h1>
        
        {/* Métrica de Sucesso */}
        <div className={styles.metrica}>
          <span className={styles.numero}>2h 15min</span>
          <span className={styles.caption}>Meta: &lt; 2h | Últimos 30 dias</span>
        </div>
        
        {/* Tabela */}
        <Table data={pedidos} />
        
        {/* RNF: apenas gerentes */}
        <Button 
          variant="primary" 
          disabled={!isGerente}
          onClick={onAprovar}
        >
          Aprovar Selecionados
        </Button>
      </div>
    </MenuErp>
  );
};
```

---

**Versão:** 2.2  
**Última atualização:** 2026-06-03
