# Decisão UX/Design: Ilustrações do brand e Content Card

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/ILUSTRACOES.md`, `references/ORGANISMOS.md` (Content Card), `component-registry.json`

---

## Contexto

O time de brand entregou ilustrações em 4 categorias (logística, finanças, seller, pdv-buyer), cada uma em `color` e `outline`, mais 30 objetos soltos. Cada squad recortava e escalava as artes do seu jeito. Em paralelo, o card editorial do DS só resolvia um caso (imagem, título, texto, botões) e os times montavam cards próprios.

## Decisões

### Ilustração
1. **Um componente público: `ilustracao`** (nome sem acento, escolhido pelo mantenedor). Artes são peças internas `.[base] illustration` (60 cenas) e `.[base] illustration asset` (30 objetos).
2. **Prancheta única 4:3** para todas as artes, ajustada ao espaço sem cortar; assim a troca de arte (INSTANCE_SWAP) nunca distorce.
3. **Moldura com `tamanho` (2xs a xl por token), `proporção` (4:3, 1:1, 16:9, 3:1) e `fundo` (nenhum, neutro, destaque, claro).**
4. **Paleta:** `base` e `recolor`. Pares sem "Recolor" no nome do brand foram atribuídos pela posição no arquivo (confirmar com o brand).
5. **Tema:** outline acompanha o tema por tokens (`illustration/color/stroke` e `mask`); color mantém a paleta do brand e, no escuro, usa `fundo=claro`.
6. **Degradês fortes** avaliados no Content Card (marca e profundo) foram **removidos** por ficarem pesados; sobrou só o degradê suave `destaque`.
7. Regras do brand registradas: 3 a 4 cores, sem azul + amarelo + verde juntos, fundos em baixa opacidade, personagem na cor base.

### Content Card
1. Card com **4 slots** (mídia, ação, corpo, rodapé) para compor átomos reais do DS; o card editorial passa a ser uma composição.
2. **Superfícies:** padrão, sutil, destaque. **Estados:** enabled, hover, focused, selected, disabled. **Layouts:** vertical, horizontal, horizontal invertido.
3. **Sombra** de repouso (`.shadow/.level 1`) e mais expressiva no hover (`.level 2`), sem agressividade.
4. **Padding** por override de instância com 4 tokens (none, compact, default, comfortable).
5. O `card` antigo permanece até a migração; depois pode ser descontinuado.
6. Não aninhar card em card; gráfico com legenda é o Chart Card.

## Limitações conhecidas

- A mídia dos layouts horizontais é fixa em 96px (só objeto `xs` 1:1).
- Sem versão escura das cenas color; sem tamanho livre de moldura; sem átomos de timeline/skeleton.
- Sem versão React de nenhum dos dois.

## Histórico

- 2026-10-22 v1.0 — Content Card e `ilustracao` construídos no Figma; Content Card com 45 variantes (3 × 5 × 3) e moldura com 96.
