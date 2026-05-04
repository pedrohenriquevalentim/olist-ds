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

```css
--color-gray-0: #fcfbf8;      /* fundo da página */
--color-gray-900: #10100f;     /* texto principal */
--color-gray-500: #827f73;     /* texto secundário */
--color-gray-100: #e7e4da;     /* bordas */
--color-blue-500: #0a4ee4;     /* ação primária, links */
--color-red-500: #e64e36;      /* erro, destrutivo */
--color-green-500: #779e3d;    /* sucesso */
--color-yellow-500: #f0a028;   /* alerta */
--font-family-jakarta: 'Plus Jakarta Sans';
--font-size-14px: 14px;        /* corpo padrão */
--font-weight-regular: 400;    /* corpo */
--font-weight-semibold: 600;   /* labels, headers */
--shape-spacing-16px: 16px;    /* padding padrão */
--shape-border-radius-8px: 8px; /* radius padrão */
```

### Componentes Existentes

Antes de criar QUALQUER elemento novo, verifique se um destes já existe:

- Button, Checkbox, Logo, MenuErp, MenuSidebar, RadioButton, SegmentedButtons, Tag

Para API completa dos componentes, leia `COMPONENTES.md`.
Para caminhos dos arquivos, leia `MAPA_FONTES.md`.

---

## Quando Usar Cada Referência

### Sempre ler primeiro:
1. **Este arquivo (`VISAO_GERAL.md`)** — você está aqui agora

### Por tipo de tarefa:

#### Criando ou revisando componentes React:
1. `COMPONENTES.md` — props, tokens, estados de cada componente
2. `CORES.md` — paleta de cores e regras de uso
3. `TIPOGRAFIA.md` — tokens de tipografia (tamanho, peso, altura)
4. `GLOSSARIO_PAPEIS_TEXTO.md` — **NOVO** — como nomear cada tipo de texto (Heading, Label, Error, etc.)
5. `ESPACAMENTO.md` — grid de 4px e regras de padding/margin

#### Traduzindo SDD/PRD em decisões de UI:
1. `SDD_PARA_TELA.md` — 10 passos para traduzir SDD em telas
2. `GLOSSARIO_PAPEIS_TEXTO.md` — **NOVO** — mapear texto do SDD em papéis de texto
3. `SDD_AVANCADO.md` — **NOVO** — traduzir RNFs, DACI, Métricas, Rollout, Observabilidade
4. `PADROES.md` — 5 padrões de página (Tabela, Form, Dashboard, Detalhe, Configurações)

#### Criando telas/páginas completas:
1. `PADROES.md` — escolher o padrão de página correto
2. `SDD_PARA_TELA.md` — traduzir requisitos em componentes
3. `COMPONENTES.md` — verificar componentes disponíveis

#### Revisando qualidade de UI:
1. `CHECKLIST_REVISAO.md` — 9 categorias de revisão
2. `CORES.md` — verificar uso correto de cores
3. `TIPOGRAFIA.md` + `GLOSSARIO_PAPEIS_TEXTO.md` — verificar nomes e tokens de texto

#### Navegando no código-fonte:
1. `MAPA_FONTES.md` — estrutura de pastas do repositório

---

## Arquivos de Referência (11 total)

| Arquivo | O que contém | Quando consultar |
|---|---|---|
| **VISAO_GERAL.md** | Este arquivo — mapa de navegação | Sempre primeiro |
| **CORES.md** | Paleta de cores, regras, DO/DON'T | Ao escolher cores |
| **TIPOGRAFIA.md** | Tokens de tipografia (tamanho, peso, altura) | Ao estilizar texto |
| **GLOSSARIO_PAPEIS_TEXTO.md** | **NOVO** — Definição dos 10 papéis de texto (Heading, Label, etc.) | Ao nomear textos na UI |
| **ESPACAMENTO.md** | Grid de 4px, padding, margin | Ao definir layout |
| **COMPONENTES.md** | Props, tokens, estados de cada componente | Ao usar/criar componentes |
| **PADROES.md** | 5 padrões de página com ASCII diagrams | Ao criar telas completas |
| **SDD_PARA_TELA.md** | 10 passos para traduzir SDD em UI | Ao ler SDD/PRD |
| **SDD_AVANCADO.md** | **NOVO** — Traduzir seções avançadas do SDD (RNFs, DACI, Métricas, Rollout) | Ao ler SDDs complexos |
| **MAPA_FONTES.md** | Estrutura de pastas do repositório | Ao navegar no código |
| **CHECKLIST_REVISAO.md** | 9 categorias de revisão de qualidade | Ao revisar UI |

---

## Novidades (v2.0 — 2026-05-04)

### Arquivos Novos:
1. **`GLOSSARIO_PAPEIS_TEXTO.md`** — Define exatamente como nomear cada tipo de texto na UI
   - 10 papéis: Heading, Subheading, Section Title, Body, Label, Helper, Error, Caption, CTA Label, Link
   - Mapeamento SDD → papel de texto
   - Tokens corretos para cada papel

2. **`SDD_AVANCADO.md`** — Tradução de seções técnicas do SDD para UI
   - Requisitos Não Funcionais → UI (Performance, Segurança, Compliance)
   - DACI (Stakeholders) → Personas de UI
   - Métricas de Sucesso → UI observável (cards, gráficos, badges)
   - Plano de Rollout → Feature flags, banners de aviso
   - Observabilidade → Logs, health checks, trace IDs
   - Glossário do SDD → Labels de UI

### Arquivos Incrementados:
1. **`TIPOGRAFIA.md`** — Agora referencia `GLOSSARIO_PAPEIS_TEXTO.md` e mapeia papéis → tokens
2. **`SDD_PARA_TELA.md`** — Adicionados Passos 8, 9 e 10:
   - Passo 8: Traduzir Métricas de Sucesso
   - Passo 9: Mapear Plano de Rollout
   - Passo 10: Usar Glossário do SDD

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

**Última atualização:** 2026-05-04 (v2.0 — adição de GLOSSARIO_PAPEIS_TEXTO.md e SDD_AVANCADO.md)
