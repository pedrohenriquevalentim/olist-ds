# SDD Avançado — Tradução de Seções Técnicas para UI

**Propósito:** Ensinar como traduzir seções "não-óbvias" do SDD (requisitos não funcionais, DACI, métricas, rollout, observabilidade) em decisões concretas de UI.

---

## 1. Requisitos Não Funcionais (RNF) → UI

Requisitos não funcionais **afetam a UI**, mas de forma menos direta que requisitos funcionais. A skill precisa traduzi-los em padrões visuais.

### 1.1 Performance → UI

| RNF de Performance | Decisão de UI | Componente/Padrão |
|---|---|---|
| "Tabela deve carregar em < 2s" | Skeleton loader enquanto carrega | Placeholder skeleton (shimmer) |
| "Paginação obrigatória para listas > 100 itens" | Pagination no rodapé da tabela | Componente Pagination |
| "Lazy load de imagens" | Progressive image loading | `<img loading="lazy">` |
| "Debounce em busca (300ms)" | Feedback visual ao digitar | Input com spinner inline |
| "Cache de dados por 5 min" | Timestamp "Atualizado há X min" | Caption com tempo relativo |

**Exemplo de tradução:**

**SDD diz:**
> RNF-01: A lista de pedidos deve carregar em menos de 2 segundos. Para listas com mais de 100 itens, usar paginação.

**UI decision:**
- Estado **Carregando:** skeleton de 10 linhas de tabela
- Estado **Padrão:** tabela com dados reais
- Rodapé: Pagination (20 itens por página)
- Caption no topo: "Atualizado há 30 segundos" (link para forçar refresh)

---

### 1.2 Segurança → UI

| RNF de Segurança | Decisão de UI | Componente/Padrão |
|---|---|---|
| "Apenas admins podem aprovar" | Botão "Aprovar" desabilitado para não-admins | Button com `disabled={!isAdmin}` |
| "Log de auditoria obrigatório" | Link "Ver histórico de alterações" | Modal com timeline de ações |
| "2FA obrigatório" | Tela de verificação de código | Form com Input de 6 dígitos |
| "Sessão expira em 15 min" | Toast de aviso 2 min antes de expirar | Toast + countdown |
| "Máscara de dados sensíveis" | CPF exibido como `***.***.XXX-XX` | Função de mask no render |

**Exemplo de tradução:**

**SDD diz:**
> RNF-03: Apenas usuários com perfil "Gerente" ou "Admin" podem aprovar pedidos. Todas as aprovações devem ser registradas em log de auditoria.

**UI decision:**
- Botão "Aprovar Pedidos" aparece apenas se `role === 'Gerente' || role === 'Admin'`
- Link "Ver Histórico" ao lado do status do pedido (abre modal com log)
- Modal de log mostra: timestamp, usuário, ação, valor anterior/novo

---

### 1.3 Escalabilidade → UI

| RNF de Escalabilidade | Decisão de UI | Componente/Padrão |
|---|---|---|
| "Sistema suporta 10k pedidos/dia" | Nenhuma mudança de UI (backend concern) | — |
| "Dashboard atualiza a cada 30s" | Indicador "Atualizando..." + spinner | Caption com auto-refresh |
| "Exportação limitada a 10k linhas" | Aviso ao exportar grandes volumes | Modal de confirmação |

**Regra geral:** Se o RNF **não altera o comportamento visível**, não impacta UI. Se **limita ações do usuário**, exibir o limite claramente.

---

### 1.4 Compliance (LGPD, Auditoria) → UI

| RNF de Compliance | Decisão de UI | Componente/Padrão |
|---|---|---|
| "Opt-in para marketing obrigatório" | Checkbox "Aceito receber e-mails" (desmarcado por padrão) | Checkbox não pré-selecionado |
| "Direito ao esquecimento (LGPD)" | Botão "Excluir minha conta" nas Configurações | Button destrutivo + modal de confirmação |
| "Exportação de dados pessoais" | Link "Baixar meus dados" (gera JSON/CSV) | Button secondary + loading state |
| "Termo de uso obrigatório" | Modal de aceite no primeiro acesso | Modal com scroll obrigatório + checkbox |

**Exemplo de tradução:**

**SDD diz:**
> RNF-08: Sistema deve permitir exportação de todos os dados pessoais do usuário (LGPD Art. 18).

**UI decision:**
- Página **Configurações** > seção **Privacidade**
- Button "Baixar meus dados" (secondary)
- Ao clicar: loading state + toast "Preparando arquivo..."
- Download automático de ZIP com JSON/CSV

---

## 2. DACI (Stakeholders) → UI

O modelo DACI define **quem faz o quê**. Diferentes personas podem precisar de **views diferentes** da mesma informação.

### 2.1 Mapeamento DACI → Personas de UI

| Papel DACI | Persona de UI | O que vê | Exemplo |
|---|---|---|---|
| **Driver** | Executor | Formulários, ações principais | Seller vê "Cadastrar Produto" |
| **Approver** | Aprovador | Dashboards de aprovação, filas | Gerente vê "Pedidos Pendentes de Aprovação" |
| **Contributor** | Colaborador | Notificações, comentários | Designer vê "Comentários no layout" |
| **Informed** | Observador | Relatórios, histórico | CFO vê "Relatório Financeiro Mensal" |

**Exemplo de tradução:**

**SDD diz:**
> DACI:
> - Driver: Seller (cadastra promoções)
> - Approver: Gerente Comercial (aprova promoções)
> - Contributor: Designer (revisa banners)
> - Informed: Marketing (recebe notificação de nova promoção)

**UI decisions:**

| Persona | Tela | Componentes |
|---|---|---|
| **Seller** | "Criar Promoção" | Form com Input, DatePicker, Button "Enviar para Aprovação" |
| **Gerente** | "Aprovar Promoções" | Table com Badge de status, Button "Aprovar" / "Rejeitar" |
| **Designer** | "Revisar Banners" | Galeria de imagens, campo de comentários, Button "Solicitar Ajustes" |
| **Marketing** | "Histórico de Promoções" | Table read-only, filtros por período, Button "Exportar CSV" |

---

## 3. Métricas de Sucesso → UI Observável

Métricas de sucesso do SDD devem ser **visíveis na UI** sempre que possível.

### 3.1 Tipos de Métricas e Como Exibir

| Tipo de Métrica | Como exibir na UI | Componente |
|---|---|---|
| **Tempo médio** | Card de métrica no dashboard | `32px` + `bold` + Caption "últimos 7 dias" |
| **Taxa de conversão** | ProgressBar com % | ProgressBar + Caption "Meta: 80%" |
| **Volume de transações** | Gráfico de linha temporal | Chart (library externa ou SVG) |
| **NPS / Satisfação** | Badge de score + histórico | Badge + Link "Ver detalhes" |
| **Adoção de feature** | % de usuários ativos | Card + Caption "de 1.243 usuários" |

**Exemplo de tradução:**

**SDD diz:**
> Métrica de Sucesso:
> - Reduzir tempo médio de aprovação de pedidos de 4h para 2h
> - Aumentar taxa de aprovação no primeiro envio de 60% para 75%

**UI decision:**
- Dashboard com 2 cards de métrica:
  1. **Tempo Médio de Aprovação:** `2h 15min` (verde se < 2h, amarelo se 2-4h, vermelho se > 4h)
  2. **Taxa de Aprovação (1º Envio):** `72%` com ProgressBar (meta: 75%)
- Caption abaixo: "Últimos 30 dias"
- Link "Ver histórico completo" (abre gráfico de linha)

---

### 3.2 Métricas Operacionais vs Estratégicas

| Tipo | Onde exibir | Público |
|---|---|---|
| **Operacional** (dia a dia) | Dashboard da tela principal | Drivers (executores) |
| **Estratégica** (OKRs) | Dashboard executivo separado | Approvers, Informed |

**Exemplo:**
- **Operacional:** "Pedidos processados hoje: 234"
- **Estratégica:** "Meta trimestral de GMV: 75% atingida"

---

## 4. Plano de Rollout → Feature Flags e Avisos

Rollout gradual de features **precisa de UI**.

### 4.1 Estratégias de Rollout → UI

| Estratégia de Rollout | Decisão de UI | Componente/Padrão |
|---|---|---|
| **Feature flag (A/B test)** | Badge "Beta" ao lado do botão | Badge variant "blue" |
| **Rollout gradual (10% → 50% → 100%)** | Banner "Novo! Esta feature está em teste" | Banner no topo da página |
| **Canary release** | Toggle "Ativar nova versão" em Configurações | Toggle + Caption "Versão experimental" |
| **Whitelist de usuários** | Nenhuma UI (backend decide) | — |
| **Opt-in** | Checkbox "Testar nova interface" | Checkbox + modal de confirmação |

**Exemplo de tradução:**

**SDD diz:**
> Plano de Rollout:
> - Fase 1: 10% dos sellers (feature flag)
> - Fase 2: 50% após validação
> - Fase 3: 100% após 2 semanas estáveis

**UI decision:**
- Badge "Beta" ao lado do botão "Calculadora de Transição"
- Banner no topo: "⚠️ Esta é uma versão de teste. [Enviar feedback]"
- Se usuário NÃO está no grupo: botão aparece desabilitado com Tooltip "Em breve para todos"

---

### 4.2 Deprecação de Features

| Status de Deprecação | Decisão de UI | Exemplo |
|---|---|---|
| **Anúncio (30 dias antes)** | Banner de aviso | "⚠️ Este recurso será removido em 30 dias. [Migrar agora]" |
| **Última semana** | Banner vermelho | "🚨 Último aviso: recurso será removido em 7 dias" |
| **Removido** | Redirect automático para nova tela | Página 410 Gone com link para alternativa |

---

## 5. Observabilidade → Logs e Debug na UI

Observabilidade **pode** ter UI em alguns casos.

### 5.1 Quando Expor Logs na UI

| Cenário | Decisão de UI | Componente |
|---|---|---|
| **Log de auditoria** | Modal "Histórico de Alterações" | Timeline com timestamps + avatares |
| **Debug mode para suporte** | Toggle "Modo Debug" em Configurações | Toggle + console overlay |
| **Health check de integrações** | Card de status (verde/amarelo/vermelho) | Badge + Caption "Última verificação: há 2 min" |
| **Logs de erro visíveis ao usuário** | Toast de erro com ID rastreável | Toast + Caption "Código: ERR-12345" |

**Exemplo de tradução:**

**SDD diz:**
> Observabilidade:
> - Dashboard de health das integrações (Mercado Livre, B2W, etc.)
> - Logs de erro devem incluir trace ID para suporte

**UI decision:**
- Página **Configurações > Integrações**
- Cards com status de cada integração:
  - ✅ Verde: "Ativo"
  - ⚠️ Amarelo: "Latência alta"
  - 🔴 Vermelho: "Falha" + link "Ver detalhes"
- Ao clicar "Ver detalhes": modal com últimos 10 logs
- Se erro acontece: Toast com mensagem + Caption "ID: ERR-12345 (copiar)"

---

### 5.2 Alertas e SLOs

| Tipo de Alerta | Onde exibir | Para quem |
|---|---|---|
| **Alerta crítico (sistema fora)** | Banner vermelho no topo | Todos os usuários |
| **Alerta de degradação** | Banner amarelo | Apenas admins |
| **SLO próximo de estourar** | Dashboard interno | Apenas time de Eng |

**Regra:** Usuários finais **não veem** alertas de infraestrutura, apenas impactos diretos ("Sistema temporariamente indisponível").

---

## 6. Glossário do SDD → Labels de UI

A seção **Glossário** do SDD define termos de domínio. Esses termos **viram labels** na UI.

### 6.1 Como Usar o Glossário

**SDD diz:**
> Glossário:
> - **GMV:** Gross Merchandise Volume (valor bruto de mercadorias)
> - **Storage:** Espaço de armazenamento no fulfillment
> - **SKU:** Stock Keeping Unit (unidade de estoque)

**UI decision:**
- Ao exibir GMV no dashboard: usar **exatamente** "GMV" (não "Valor Bruto" ou "Faturamento")
- Incluir Tooltip ao hover: "Gross Merchandise Volume"
- Se precisar de sigla + nome completo: "GMV (Gross Merchandise Volume)"

### 6.2 Quando Traduzir vs Manter Sigla

| Termo | Decisão | Justificativa |
|---|---|---|
| **GMV** | Manter sigla + tooltip | Termo consolidado no mercado |
| **SKU** | Manter sigla + tooltip | Jargão universal |
| **Storage** | Manter em inglês | Termo interno da Olist |
| **Fulfillment** | Manter em inglês | Não há tradução consagrada |
| **Seller** | Manter em inglês | Evitar "vendedor" (ambíguo) |

**Regra geral:** Se o glossário do SDD define um termo, **não invente um rótulo diferente**. Use exatamente o termo do glossário.

---

## 7. Checklist: SDD Avançado → UI

Ao ler um SDD, verificar se as seções avançadas foram traduzidas:

### Requisitos Não Funcionais
- [ ] RNFs de performance viraram skeleton loaders, paginação, ou timestamps?
- [ ] RNFs de segurança viraram permissões de UI (botões desabilitados, masking)?
- [ ] RNFs de compliance viraram opt-ins, exports de dados, ou termos de uso?

### DACI
- [ ] Cada papel DACI tem uma view de UI correspondente?
- [ ] Drivers têm formulários e ações?
- [ ] Approvers têm dashboards de aprovação?
- [ ] Informed têm relatórios exportáveis?

### Métricas de Sucesso
- [ ] Métricas operacionais aparecem no dashboard principal?
- [ ] Métricas estratégicas aparecem em dashboard executivo?
- [ ] Todas as métricas têm baseline + meta visível?

### Plano de Rollout
- [ ] Feature flags viraram badges "Beta" ou banners de aviso?
- [ ] Rollout gradual tem indicador visual de "novo"?
- [ ] Deprecação tem banner de aviso com contagem regressiva?

### Observabilidade
- [ ] Logs de auditoria têm UI (modal de histórico)?
- [ ] Erros incluem trace ID visível ao usuário?
- [ ] Health checks de integrações têm cards de status?

### Glossário
- [ ] Todos os termos do glossário do SDD foram usados como labels?
- [ ] Siglas têm tooltips explicativos?
- [ ] Nenhum rótulo foi inventado fora do glossário?

---

## Exemplo Completo: SDD → UI Avançado

**SDD diz:**

> **RNF-02:** Apenas usuários com perfil "Gerente" podem aprovar pedidos.  
> **RNF-05:** Log de auditoria obrigatório para todas as aprovações.  
> **Métrica de Sucesso:** Reduzir tempo médio de aprovação de 4h para 2h.  
> **Rollout:** Feature flag para 10% dos usuários inicialmente.  
> **Glossário:**
> - **Pedido:** Order no sistema legado
> - **Aprovação:** Ação de marcar pedido como "Approved"

**UI decisions:**

1. **Botão "Aprovar Pedidos":**
   - Aparece apenas se `role === 'Gerente'`
   - Badge "Beta" ao lado (feature flag ativa)
   
2. **Link "Ver Histórico de Aprovações":**
   - Abre modal com timeline (log de auditoria)
   - Mostra: timestamp, usuário, ação

3. **Card de métrica no topo:**
   - "Tempo Médio de Aprovação: **2h 15min**"
   - ProgressBar: verde (meta atingida)
   - Caption: "Meta: < 2h | Últimos 30 dias"

4. **Labels:**
   - Usar "Pedido" (não "Order")
   - Usar "Aprovação" (não "Approval")

---

**Referência cruzada:**
- `SDD_PARA_TELA.md` — passos básicos de tradução SDD → UI
- `GLOSSARIO_PAPEIS_TEXTO.md` — papéis de texto na UI
- `COMPONENTES.md` — componentes disponíveis
- `PADROES.md` — padrões de página
