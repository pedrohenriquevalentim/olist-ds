# Checklist de Revisão Visual

Use este checklist ao revisar qualquer tela ou componente para consistência visual com o design system da Olist.

## 1. Tipografia

- [ ] Fonte usa `var(--font-family-base)` (Plus Jakarta Sans) em todos os lugares
- [ ] Nenhum tamanho fora da escala de tokens — use `var(--text-*-font-size)`, nunca valor fixo em px/rem
- [ ] Texto de corpo usa `var(--text-paragraph-font-size)` + `var(--font-weight-regular)` + `var(--color-text-container-text)`
- [ ] Headers usam `var(--font-weight-sbold)` ou `var(--font-weight-bold)` conforme papel semântico
- [ ] Texto secundário usa `var(--color-text-container-label)` — não `var(--color-text-disabled-default)` nem primitivo
- [ ] Headers de tabela usam `var(--table-head-font-size)` + `var(--table-head-font-weight)` + `var(--table-head-color)`
- [ ] Nenhum `text-transform: uppercase`
- [ ] Nenhum itálico para ênfase
- [ ] `line-height` sempre via token semântico correspondente ao `font-size` escolhido (ver `TIPOGRAFIA.md`)

## 2. Cores

- [ ] Nenhum valor hex hardcoded — todas as cores usam `var(--token-semântico)`
- [ ] Fundo de página usa `var(--color-background-surface-container)`, nunca hex fixo
- [ ] Ações primárias usam `var(--button-color-primary)` / `var(--color-background-enabled-full-brand)`
- [ ] Bordas de container usam `var(--color-border-container-outside)` (leve) ou `var(--color-border-container-inside)` (ênfase)
- [ ] Elementos desabilitados usam `var(--color-background-disabled-neutral)` + `var(--color-text-disabled-default)`
- [ ] Estados de erro: texto/borda via `var(--color-border-feedback-negative-subtle)` + fundo `var(--color-background-feedback-negative-subtle)`
- [ ] Estados de sucesso: `var(--color-border-feedback-positive-subtle)` + `var(--color-background-feedback-positive-subtle)`
- [ ] Badges de status seguem o mapa de cores em `CORES.md` (tokens `color-background-feedback-*`)
- [ ] Contraste passa WCAG 2.1 AA (4.5:1 mínimo para texto) em modo **claro e escuro**
- [ ] Token semântico é da família/estado corretos, não só do valor visual certo (ver `doNotUseWhen` em `GOVERNANCA_TOKENS.md`)

## 3. Espaçamento

- [ ] Todos os valores usam `var(--shape-spacing-*)` — nenhum valor fixo em px/rem
- [ ] Padding da área de conteúdo usa `var(--shape-spacing-24px)` ou `var(--shape-spacing-32px)`
- [ ] Gap entre seções usa `var(--shape-spacing-24px)` ou `var(--shape-spacing-32px)`
- [ ] Gap dentro de seções usa `var(--shape-spacing-16px)`
- [ ] Padding de card usa `var(--shape-spacing-16px)` (compacto) ou `var(--shape-spacing-24px)` (padrão)
- [ ] Nenhum valor fora da escala de 4px (não existem tokens para 5px, 7px, 13px)

## 4. Layout

- [ ] Sidebar tem 280px de largura (se presente)
- [ ] Área de conteúdo preenche a largura restante
- [ ] Auto Layout usado (sem posicionamento absoluto)
- [ ] Layers nomeados semanticamente (nunca "Frame 1", "Group 5")
- [ ] Responsivo: não quebra em 1280px de largura

## 5. Componentes

- [ ] Componentes existentes do DS são reutilizados (não recriados)
- [ ] Variantes de botão seguem o DS (primary/secondary/tertiary)
- [ ] Estilos de input seguem tokens do DS (borda, radius, padding, fonte)
- [ ] Nenhum componente existe fora da estrutura `src/components/`
- [ ] Novos componentes seguem as regras de COMPONENTES.md

## 6. Estados

- [ ] Estado padrão existe
- [ ] Estado de carregamento existe (placeholders skeleton)
- [ ] Estado vazio existe (mensagem + ação opcional)
- [ ] Estado de erro existe (mensagem + tentar novamente)
- [ ] Estados de hover usam `var(--color-background-hover-*)` (não `effects-hover-*` diretamente)
- [ ] Estados de foco têm outline via `var(--focus-border-width-default)` + `var(--focus-border-color-default)` no `:focus-visible`
- [ ] Estados desabilitados usam `var(--color-background-disabled-neutral)` + `var(--color-text-disabled-default)` — sem opacidade arbitrária
- [ ] Estados ativos/pressed usam `var(--color-background-pressed-*)` (não `effects-pressed-*` diretamente)

## 7. Acessibilidade

- [ ] Todos elementos interativos têm role e aria-label
- [ ] Imagens têm alt text
- [ ] Cor não é o único meio de transmitir informação (ícone + cor para status)
- [ ] Ordem de foco é lógica (segue ordem visual)
- [ ] Áreas de toque têm mínimo 44x44px
- [ ] Botões funcionam com Enter e Space
- [ ] Formulários têm labels associados aos inputs
- [ ] Mensagens de erro associadas via aria-describedby

## 8. Border Radius

- [ ] Elementos padrão usam 8px
- [ ] Elementos pequenos (badges, chips) usam 4px
- [ ] Formas pill usam 9999px
- [ ] Consistente dentro do mesmo componente (sem radii misturados)

## 9. Sombras

- [ ] Cards usam shadow-4 (sutil)
- [ ] Dropdowns/popovers usam shadow-8
- [ ] Modais usam shadow-16
- [ ] Overlays usam shadow-80 no backdrop
- [ ] Nenhum valor de sombra customizado

## 10. UX Writing

- [ ] Copy validado contra os **4 Pilares**: Conciso, Claro, Significativo, Dialógico
- [ ] Tom correto para o contexto: B2B (lojista) ou B2C (consumidor)?
- [ ] CTAs com verbo + objeto ("Salvar Produto", não "OK" ou "Sim")
- [ ] Labels de campo são substantivos, não instruções ("CPF do vendedor", não "Insira seu CPF")
- [ ] Helper text direto e curto (máx 80 caracteres)
- [ ] Erros informam problema + solução ("CPF inválido. Use apenas números.")
- [ ] Empty states oferecem ação ("Nenhum pedido. Criar seu primeiro?")
- [ ] Modais destrutivos explicam consequências + têm CTA claro ("Excluir Permanentemente")
- [ ] Toasts são breves e claros (máx 60 caracteres no título)
- [ ] Sentence case em tudo (exceto títulos de página e nomes próprios)
- [ ] Sem ponto final em labels, helpers, CTAs, placeholders e badges
- [ ] Nomenclatura de produtos Olist correta ("Sistema ERP da Olist" na 1ª menção)
- [ ] Sem "seller" externamente → "você", "lojista", "parceiro"
- [ ] Sem hífen: "ecommerce", "email", "ebook"
- [ ] Termos técnicos em inglês contextualizados em português
- [ ] Valores monetários com símbolo (R$ 1.000,00)
- [ ] Datas em formato local (12/04/2026)
- [ ] Emoji: máx 1-2 por mensagem, nunca em labels/erros/CTAs/breadcrumbs

**Consulte `UX_WRITING.md` para regras completas por tipo de texto.**

## 11. Modo Escuro

- [ ] Todos os fills/strokes usam tokens semânticos — nenhum hex fixo (tokens semânticos resolvem automaticamente em dark mode)
- [ ] Contraste 4.5:1 verificado também com o tema escuro ativo (WCAG 2.1 AA SC 1.4.3)
- [ ] Nenhum valor de cor hardcoded no CSS ou na Figma Plugin API (nem em fallback)
- [ ] Componentes testados visualmente nos dois modos antes do merge

## Níveis de Severidade

| Nível | Significado | Ação |
|---|---|---|
| 🔴 Crítico | Cor hardcoded, fonte errada, falha de acessibilidade | Corrigir antes do merge |
| 🟡 Alerta | Espaçamento errado, estado faltando | Deve corrigir antes do merge |
| 🟢 Sugestão | Hierarquia poderia melhorar, escolha de componente | Corrigir na próxima iteração |
