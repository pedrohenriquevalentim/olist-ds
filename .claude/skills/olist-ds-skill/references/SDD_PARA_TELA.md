# SDD para Tela — Guia de Tradução

Como ler um SDD (Software Design Document) ou PRD (Product Requirements Document) e traduzir em decisões de UI usando o design system da Olist.

## Passo 1: Extrair informações relevantes para UI

| Seção do SDD | O que extrair | Decisão de UI |
|---|---|---|
| Problema | Quem é o usuário? O que está tentando fazer? | Tipo de página (lista, form, dashboard, detalhe) |
| Requisitos funcionais | Dados a exibir, ações disponíveis | Componentes necessários, colunas, botões |
| Requisitos de experiência | Preferências de layout, navegação | Padrão de página, sidebar, responsivo |
| Critérios de aceite | Comportamentos esperados | Estados a desenhar (sucesso, erro, vazio) |
| Escopo (fora) | O que NÃO construir | Limites — não adicionar features fora do escopo |

## Passo 2: Mapear requisitos ao padrão de página

| Se o SDD menciona... | Usar padrão |
|---|---|
| "Listar", "visualizar todos", "tabela" | Página de Tabela de Dados |
| "Criar", "editar", "formulário", "cadastrar" | Página de Formulário |
| "Dashboard", "métricas", "resumo", "KPIs" | Página de Dashboard |
| "Detalhe", "visualizar pedido", "histórico" | Página de Detalhe |
| "Configurar", "preferências" | Página de Configurações |

## Passo 3: Mapear dados a componentes

| Requisito do SDD | Componente a usar |
|---|---|
| "Lista de itens com filtros" | Table + barra de filtros + Paginação |
| "Status do pedido" | Badge (cores por status) |
| "Selecionar múltiplos itens" | Checkbox na tabela + barra de ação em lote |
| "Ação principal" | Button primary |
| "Ação secundária" | Button secondary |
| "Ação destrutiva (deletar)" | Button com variante red-500 |
| "Campo de texto" | Input text |
| "Selecionar opção" | Select dropdown |
| "Sim/não" | Checkbox ou Toggle |
| "Escolher entre opções" | SegmentedButtons (2-4) ou Select (5+) |
| "Buscar" | Input search (com ícone) |
| "Filtrar por data" | Date picker |
| "Menu lateral" | MenuSidebar (já existe) |
| "Expandir para ver detalhes" | Accordion ou linha de tabela expansível |
| "Número grande" | Card de métrica (32px, bold) |

## Passo 4: Definir estados

Toda tela DEVE ter estes estados:

### Obrigatórios

1. **Padrão** — página com dados reais, operação normal
2. **Carregando** — placeholders skeleton onde dados aparecerão
3. **Vazio** — sem dados (após filtro ou primeiro acesso)
   - Mensagem: "Nenhum [item] encontrado"
   - Sugestão ou botão de ação
4. **Erro** — falha ao carregar dados
   - Mensagem: "Não foi possível carregar os dados"
   - Botão "Tentar novamente"

### Condicionais (se o SDD mencionar)

5. **Com seleção** — itens selecionados, barra de ação em lote visível
6. **Validação de formulário** — erros inline nos campos inválidos
7. **Sucesso** — confirmação após ação (toast ou redirect)
8. **Confirmação** — modal antes de ação destrutiva ("Tem certeza?")

## Passo 5: Verificar componentes existentes

Antes de criar qualquer coisa, leia `MAPA_FONTES.md` e verifique:

1. O componente já existe em `src/components/`?
2. Um componente existente pode ser estendido com nova variante?
3. O token necessário existe em `src/generated/variables.css`?

**Se existe:** importe e use.
**Se falta uma variante:** adicione ao componente existente.
**Se não existe:** crie seguindo as regras de `COMPONENTES.md`.

## Passo 6: Construir a tela

### Para React (saída em código):

```tsx
import { MenuErp, Button, Checkbox } from '@pedrohenriquevalentim/olist-ds';
import styles from './NomePagina.module.css';

export const NomePagina: React.FC = () => {
  return (
    <MenuErp>
      <div className={styles.conteudo}>
        <header className={styles.header}>
          <h1 className={styles.titulo}>Título da Página</h1>
          <Button variant="primary">Ação</Button>
        </header>
      </div>
    </MenuErp>
  );
};
```

### Para Figma (saída em design):

1. Frame 1440x900
2. MenuSidebar à esquerda (280px)
3. Área de conteúdo com padding correto (32px)
4. Variables do Figma para todas as cores
5. Auto Layout em tudo
6. Nomear todos os layers semanticamente

## Passo 7: Validar contra o SDD

Após construir, verificar:

- [ ] Todo requisito funcional tem um elemento de UI correspondente
- [ ] Todo critério de aceite pode ser demonstrado visualmente
- [ ] Todos os estados foram desenhados (padrão, carregando, vazio, erro)
- [ ] Apenas componentes do DS foram usados
- [ ] Todo texto usa tokens (tamanho, peso, cor)
- [ ] Todo espaçamento segue o grid de 4px
- [ ] Acessibilidade: todos elementos interativos têm atributos ARIA
- [ ] Nada fora do escopo do SDD foi adicionado

## Exemplo: SDD → Decisões de tela

**Trecho do SDD:**
> O seller precisa visualizar todos os pedidos com status, filtrar por período
> e marcar pedidos como despachados em lote.

**Tradução:**

| Requisito | Decisão |
|---|---|
| "visualizar todos os pedidos" | Padrão Página de Tabela de Dados |
| "com status" | Componente Badge, cores conforme mapa de CORES.md |
| "filtrar por período" | Filtro de intervalo de datas na barra de filtros |
| "marcar como despachados em lote" | Checkbox na tabela + barra de ação com Button primary |
