# Checklist de Revisão Visual

Use este checklist ao revisar qualquer tela ou componente para consistência visual com o design system da Olist.

## 1. Tipografia

- [ ] Fonte é Plus Jakarta Sans em todos os lugares
- [ ] Nenhum tamanho fora da escala de tokens (10, 12, 14, 16, 20, 24, 32, 40, 48)
- [ ] Texto corpo é 14px regular gray-900
- [ ] Headers usam semibold (600) ou bold (700)
- [ ] Texto secundário usa gray-500 (não gray-400 ou mais claro)
- [ ] Headers de tabela usam 12px semibold gray-600
- [ ] Nenhum text-transform: uppercase
- [ ] Nenhum itálico para ênfase
- [ ] Alturas de linha correspondem à escala

## 2. Cores

- [ ] Nenhum valor hex hardcoded — todas as cores usam variáveis CSS
- [ ] Fundo da página é gray-0 (#fcfbf8), não branco (#fff)
- [ ] Ações primárias usam blue-500
- [ ] Bordas usam gray-100 (leve) ou gray-200 (ênfase)
- [ ] Elementos desabilitados usam gray-300 + token de fundo disabled
- [ ] Estados de erro usam red-500 texto/borda + red-0 fundo
- [ ] Estados de sucesso usam green-500 + green-0 fundo
- [ ] Badges de status seguem o mapa de cores em CORES.md
- [ ] Contraste passa WCAG AA (4.5:1 mínimo para texto)

## 3. Espaçamento

- [ ] Todos os valores são múltiplos de 4px
- [ ] Padding da área de conteúdo é 24px ou 32px
- [ ] Gap entre seções é 24px ou 32px
- [ ] Gap dentro de seções é 16px
- [ ] Padding de card é 16px (compacto) ou 24px (padrão)
- [ ] Nenhum valor arbitrário (5px, 7px, 13px)

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
- [ ] Estados de hover usam tokens corretos (effects-hover-*)
- [ ] Estados de foco têm outline 2px blue-500 visível
- [ ] Estados desabilitados usam gray-300 + opacidade reduzida
- [ ] Estados ativos/pressed usam tokens corretos (effects-pressed-*)

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

## Níveis de Severidade

| Nível | Significado | Ação |
|---|---|---|
| 🔴 Crítico | Cor hardcoded, fonte errada, falha de acessibilidade | Corrigir antes do merge |
| 🟡 Alerta | Espaçamento errado, estado faltando | Deve corrigir antes do merge |
| 🟢 Sugestão | Hierarquia poderia melhorar, escolha de componente | Corrigir na próxima iteração |
