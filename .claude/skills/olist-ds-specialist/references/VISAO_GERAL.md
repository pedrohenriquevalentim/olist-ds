# Visão Geral — Navegação da Skill

**Leia este arquivo PRIMEIRO** sempre que trabalhar com o design system Olist. Ele é o mapa de navegação para todos os outros arquivos de referência.

---

## Identidade Visual

A Olist é uma plataforma B2B de e-commerce para sellers. A linguagem visual comunica eficiência, confiabilidade e profissionalismo. A interface é orientada a ferramenta — sellers usam 8+ horas por dia, então clareza e escaneabilidade têm prioridade sobre decoração.

### Princípios de Design

1. **Clareza acima de estética** — Todo elemento tem uma função. Remova o que não ajuda o seller a completar uma tarefa.
2. **Consistência acima de novidade** — Reutilize componentes existentes. Um padrão novo é um custo, não uma feature.
3. **Densidade com hierarquia** — ERPs são densos em dados. Use peso tipográfico, cor e espaçamento para criar hierarquia, não espaço vazio.
4. **Acessível por padrão** — WCAG AA mínimo. Contraste 4.5:1. Navegável por teclado. Compatível com leitor de tela.

### Resumo Visual

- **Fonte:** Plus Jakarta Sans (Google Fonts)
- **Cores:** Neutros quentes (cinza baseado em #fcfbf8), azul primário (#0a4ee4)
- **Espaçamento:** Grid de 4px, escala: 4, 8, 12, 16, 24, 32, 40, 48, 64
- **Border-radius:** 8px padrão, 4px elementos pequenos, 9999px pills
- **Sombras:** Sutis, usando rgba(5,5,5) em baixa opacidade
- **Layout:** Sidebar de navegação (280px) + área de conteúdo

### Referência Rápida de Tokens

> ⚠️ Nomes primitivos têm segmento **duplicado**: `--color-gray-gray-0`, não `--color-gray-0`.
> Prefira sempre os tokens semânticos abaixo — são os que os componentes reais usam.

```css
/* Fundos */
--color-background-surface-container: #fcfbf8;  /* fundo de cards e página */
--color-background-surface-system: #f2f0e8;     /* hover de linha de tabela */
--color-background-selected-neutral-brand: #e7edf8; /* item selecionado */

/* Texto */
--color-text-container-title: #10100f;   /* título principal */
--color-text-container-text: #403f3b;    /* texto de suporte */
--color-text-enabled-neutral: #615f56;   /* texto secundário, captions */
--color-text-enabled-brand: #043fbe;     /* links e ações de texto */
--color-text-disabled-default: #cecbc0;  /* texto desabilitado */

/* Bordas */
--color-border-container-outside: #e7e4da; /* borda de card/container */
--color-border-enabled-neutral: #afada2;   /* borda de input padrão */
--color-border-selected-default: #0a4ee4;  /* foco e selecionado */

/* Tipografia */
--font-family-jakarta: 'Plus Jakarta Sans';
--font-size-14px: 14px;
--font-weight-regular: 400;
--font-weight-600: 600;         /* semibold — alias --font-weight-semibold NÃO existe */

/* Espaçamento */
--shape-spacing-16px: 16px;
--shape-border-radius-8px: 8px;
```

Para o catálogo completo com todos os 1.194 tokens e valores Figma RGB → `TOKEN_CATALOG.md`.

### Componentes Existentes

Antes de criar QUALQUER elemento novo, verifique se um destes já existe:

- Button, ButtonIcon, Card, Checkbox, Chip, Icon, InputPassword, InputSearch, InputSelect, InputText, ItensMenuGlobal, Logo, MenuGlobal, ProdutosOlistIcons, Toggle _(stub incompleto — apenas module.css, sem tsx)_

Para API completa dos componentes, leia `COMPONENTES.md`.
Para caminhos dos arquivos, leia `MAPA_FONTES.md`.

---

## Quando Usar Cada Referência

### Sempre ler primeiro:
1. **Este arquivo (`VISAO_GERAL.md`)** — você está aqui agora

### Por tipo de tarefa:

#### Criando ou revisando componentes React:
1. `COMPONENTES.md` — props, tokens, estados de cada componente
2. `TOKEN_CATALOG.md` — catálogo completo de 1.194 tokens com nomes corretos e valores
3. `CORES.md` — paleta de cores com tokens semânticos e regras de uso
4. `TIPOGRAFIA.md` — tokens de tipografia (tamanho, peso, altura)
5. `GLOSSARIO_PAPEIS_TEXTO.md` —  como nomear cada tipo de texto (Heading, Label, Error, etc.)
6. `ESPACAMENTO.md` — grid de 4px e regras de padding/margin

#### Traduzindo SDD/PRD em decisões de UI:
1. `SDD_PARA_TELA.md` — 10 passos para traduzir SDD em telas
2. `GLOSSARIO_PAPEIS_TEXTO.md` —  mapear texto do SDD em papéis de texto
3. `SDD_AVANCADO.md` —  traduzir RNFs, DACI, Métricas, Rollout, Observabilidade
4. `PADROES.md` — 5 padrões de página (Tabela, Form, Dashboard, Detalhe, Configurações)

#### Criando telas/páginas completas (com ou sem repo):
1. `PADROES.md` — escolher o padrão de página correto
2. `SDD_PARA_TELA.md` — traduzir requisitos em componentes
3. `COMPONENTES.md` — verificar componentes disponíveis
4. `TOKEN_CATALOG.md` → Seção 1 — valores Figma RGB prontos para fills na Plugin API

#### Revisando qualidade de UI:
1. `CHECKLIST_REVISAO.md` — 9 categorias de revisão + UX Writing
2. `CORES.md` — verificar uso correto de cores
3. `TIPOGRAFIA.md` + `GLOSSARIO_PAPEIS_TEXTO.md` — verificar nomes e tokens de texto
4. `UX_WRITING.md` — verificar tom, copy e diretrizes de escrita

#### Criando ou revisando textos de UI (copy/UX Writing):
1. `UX_WRITING.md` — protocolo de triagem, 4 pilares, 12 tipos de texto, regras por tipo
2. `GLOSSARIO_PAPEIS_TEXTO.md` — papéis visuais de texto (Heading, Label, Error, etc.)

#### Navegando no código-fonte:
1. `MAPA_FONTES.md` — estrutura de pastas do repositório

---

## Arquivos de Referência (16 total)

| Arquivo | O que contém | Quando consultar |
|---|---|---|
| **VISAO_GERAL.md** | Este arquivo — mapa de navegação | Sempre primeiro |
| **FIGMA_CONFIG.md** | libraryKeys, componentKeys, workflow de busca e import | **ANTES** de usar `search_design_system` |
| **TEMPLATES_PRODUTO.md** | Zonas de layout por produto (ERP, Envios, Hub, Conta Digital) | **Antes de criar telas no Figma** |
| **HARNEES_TELAS.md** | Restrições executáveis por zona, gate pré-construção, limites de componentes | **ANTES** de criar qualquer frame no Figma |
| **CORES.md** | Paleta de cores, regras, DO/DON'T | Ao escolher cores |
| **TIPOGRAFIA.md** | Tokens de tipografia (tamanho, peso, altura) | Ao estilizar texto |
| **GLOSSARIO_PAPEIS_TEXTO.md** | Definição dos 10 papéis de texto (Heading, Label, etc.) | Ao nomear textos na UI |
| **UX_WRITING.md** | Protocolo de triagem, 4 pilares, 12 tipos de texto, tom B2B/B2C, abrasileiramento | Ao criar ou revisar qualquer copy de UI |
| **ESPACAMENTO.md** | Grid de 4px, padding, margin | Ao definir layout |
| **GOVERNANCA_TOKENS.md** | Intenção de uso por família de token (purpose, useWhen, doNotUseWhen) | Ao escolher entre tokens semânticos parecidos |
| **COMPONENTES.md** | Props, tokens, estados de cada componente | Ao usar/criar componentes |
| **PADROES.md** | 5 padrões de página com ASCII diagrams | Ao criar telas completas |
| **SDD_PARA_TELA.md** | 10 passos para traduzir SDD em UI | Ao ler SDD/PRD |
| **SDD_AVANCADO.md** | Traduzir seções avançadas do SDD (RNFs, DACI, Métricas, Rollout) | Ao ler SDDs complexos |
| **MAPA_FONTES.md** | Estrutura de pastas do repositório | Ao navegar no código |
| **CHECKLIST_REVISAO.md** | 9 categorias de revisão de qualidade + UX Writing | Ao revisar UI |

---

## Novidades (v3.16 — 2026-08-22)

### Novo slash command:
- **`/ds-construir`** — Cria ou evolui componentes no Figma seguindo arquitetura correta de tokens (base → theme → component). Abrange Caso 5 da skill. Fluxo termina no Figma — não gera código React.

### Novo arquivo obrigatório por componente:
- **`ComponentName.metadata.json`** — Gate de aprovação antes do código. Define `purpose`, `useWhen`, `doNotUseWhen`, `pairsWith`, `variants`, `states`, `slots`, `tokens` e `figma`. O total de arquivos por componente passa de 5 para **6**.

### Fluxo de release atualizado:
- `npm run release` cria branch `release/*`, faz bump de versão, abre PR — a publicação no GitHub Packages ocorre pelo CI após o merge. Não há mais `npm publish` direto nem `npm run ship`.

---

## Fluxo de Leitura Recomendado

### Para começar do zero:
```
VISAO_GERAL.md (este arquivo)
  ↓
CORES.md + TIPOGRAFIA.md + GLOSSARIO_PAPEIS_TEXTO.md + ESPACAMENTO.md
  ↓
COMPONENTES.md
  ↓
PADROES.md
```

### Para traduzir um SDD em UI:
```
SDD_PARA_TELA.md (passos 1-10)
  ↓
GLOSSARIO_PAPEIS_TEXTO.md (nomear textos)
  ↓
SDD_AVANCADO.md (se SDD tem RNFs, DACI, Métricas)
  ↓
PADROES.md (escolher padrão de página)
  ↓
COMPONENTES.md (verificar componentes)
```

### Para revisar qualidade:
```
CHECKLIST_REVISAO.md (9 categorias)
  ↓
CORES.md + TIPOGRAFIA.md + GLOSSARIO_PAPEIS_TEXTO.md + ESPACAMENTO.md
  ↓
COMPONENTES.md
```

---

## Princípios Fundamentais

1. **Progressive Disclosure:** Leia apenas o necessário para a tarefa atual
2. **Single Source of Truth:** Cada conceito está em apenas 1 arquivo
3. **Cross-References:** Todos os arquivos referenciam uns aos outros quando relevante
4. **Always Start Here:** Este arquivo (`VISAO_GERAL.md`) é o ponto de entrada obrigatório

---

## Regras de Uso da Skill

### ✅ Faça:
- Sempre leia `VISAO_GERAL.md` primeiro
- Consulte `GLOSSARIO_PAPEIS_TEXTO.md` **antes** de nomear textos na UI
- Consulte `SDD_AVANCADO.md` se o SDD tiver seções técnicas (RNFs, DACI, etc.)
- Use `MAPA_FONTES.md` para localizar arquivos no repositório
- Use `CHECKLIST_REVISAO.md` para validar qualidade

### ❌ Não faça:
- Pular a leitura de `VISAO_GERAL.md`
- Inventar nomes de papéis de texto fora de `GLOSSARIO_PAPEIS_TEXTO.md`
- Assumir que um componente não existe sem checar `COMPONENTES.md` e `MAPA_FONTES.md`
- Criar padrões de página fora dos 5 definidos em `PADROES.md`

---

**Última atualização:** 2026-08-22 (v3.16 — /ds-construir adicionado; metadata.json como 6º arquivo obrigatório; HARNEES_TELAS.md e GOVERNANCA_TOKENS.md adicionados à tabela de referências; fluxo de release via PR documentado)
