# Padrões de Página

Layouts comuns usados nos produtos ERP da Olist. Use como ponto de partida ao construir telas a partir de SDDs.

## Padrão: Página de Tabela de Dados

Tipo de página mais comum. Lista dados com filtros, ações e paginação.

```
┌─ MenuErp ─────────────────────────────────────────────────┐
│ ┌─ Sidebar ─┐ ┌─ Conteúdo ─────────────────────────────┐  │
│ │           │ │                                         │  │
│ │ Navegação │ │  Título da Página        [+ Novo] [⋮]  │  │
│ │           │ │                                         │  │
│ │           │ │  ┌─ Filtros ─────────────────────────┐  │  │
│ │           │ │  │ [Buscar...] [Status ▼] [Data ▼]   │  │  │
│ │           │ │  └───────────────────────────────────┘  │  │
│ │           │ │                                         │  │
│ │           │ │  ┌─ Tabela ──────────────────────────┐  │  │
│ │           │ │  │ ☐ Col A ↕ │ Col B │ Status │ Ações│  │  │
│ │           │ │  │ ☐ dado    │ dado  │ Badge  │ •••  │  │  │
│ │           │ │  │ ☐ dado    │ dado  │ Badge  │ •••  │  │  │
│ │           │ │  └───────────────────────────────────┘  │  │
│ │           │ │                                         │  │
│ │           │ │  Mostrando 1-20 de 248    < 1 2 3 >    │  │
│ └───────────┘ └─────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Estados obrigatórios:**
1. Padrão (com dados)
2. Carregando (linhas skeleton)
3. Vazio (ilustração + "Nenhum resultado encontrado" + ação)
4. Erro (mensagem + botão "Tentar novamente")
5. Com seleção (checkboxes marcados, barra de ação em lote visível)

## Padrão: Página de Formulário

Criar ou editar um recurso.

```
┌─ Conteúdo ────────────────────────────────────────────┐
│                                                       │
│  ← Voltar    Editar [Nome do Recurso]                 │
│                                                       │
│  ┌─ Seção "Dados gerais" ────────────────────────┐   │
│  │  Label          [Valor do input           ]    │   │
│  │  Label          [Valor do input           ]    │   │
│  │  Label          [Select ▼                 ]    │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  ┌─ Seção "Endereço" ───────────────────────────┐    │
│  │  CEP [________]   Cidade [________________]   │    │
│  │  Rua [____________________]  Nº [____]        │    │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│                          [Cancelar]  [Salvar]         │
└───────────────────────────────────────────────────────┘
```

**Especificações:**
- Largura máxima do formulário: 720px
- Gap entre seções: 32px
- Gap entre inputs dentro da seção: 16px
- Inputs em duas colunas: CSS grid com gap 16px
- Botões de ação: alinhados à direita, primário à direita
- Seta de voltar: topo esquerdo, volta para a lista

**Estados obrigatórios:**
1. Formulário vazio (modo criar)
2. Formulário preenchido (modo editar)
3. Erros de validação (inline abaixo de cada campo)
4. Enviando (botão em estado loading)

## Padrão: Página de Dashboard

Visão geral de métricas com gráficos.

```
┌─ Conteúdo ────────────────────────────────────────────┐
│                                                       │
│  Dashboard              [Período: Últimos 30 dias ▼] │
│                                                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ R$ 45k  │ │ 234     │ │ R$ 192  │ │ 2.3%    │   │
│  │ Vendas  │ │ Pedidos │ │ Ticket  │ │ Cancel. │   │
│  │ ↑ 12%   │ │ ↑ 8%    │ │ ↓ 3%   │ │ ↓ 0.5%  │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
│                                                       │
│  ┌─ Gráfico ─────────────────────────────────────┐   │
│  │  [Gráfico de barras/linhas — vendas por dia]   │   │
│  └────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────┘
```

**Especificações do card de métrica:**
- 4 cards em linha (CSS grid, gap 16px)
- Padding: 24px, border-radius 8px, borda 1px gray-100
- Valor: 32px bold, label: 14px gray-500
- Tendência: green-500 (positivo), red-500 (negativo)

## Padrão: Página de Detalhe

Visualizar um recurso único com tabs.

```
┌─ Conteúdo ────────────────────────────────────────────┐
│                                                       │
│  ← Voltar    Pedido #12345           [Editar] [⋮]   │
│              Badge: Aprovado                          │
│                                                       │
│  ┌─ Tabs ─────────────────────────────────────────┐  │
│  │ [Resumo] [Itens] [Histórico] [Notas]           │  │
│  ├────────────────────────────────────────────────┤  │
│  │  Conteúdo da tab                                │  │
│  └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘
```

## Padrões de Navegação

**Breadcrumbs:** não usados no ERP Olist. Usar seta de voltar.
**Tabs:** para sub-navegação dentro da página. Usar SegmentedButtons para 2-3 opções.
**Sidebar:** sempre presente via MenuSidebar. Item ativo destacado com fundo blue-50.
