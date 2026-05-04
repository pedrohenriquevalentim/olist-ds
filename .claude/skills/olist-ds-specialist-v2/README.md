# Olist Design System — Especialista (v2.0)

Skill corporativa para criação de telas, componentes e protótipos a partir de SDDs/PRDs usando o design system da Olist.

Compatível com a especificação [DESIGN.md do Google Labs](https://github.com/google-labs-code/design.md).

## Por que funciona

A precisão de 90%+ na reutilização do design system vem de três decisões:

1. **Referências separadas** — cada dimensão do DS tem seu arquivo. O agente carrega só o necessário.
2. **Mapa de fontes** — cada regra aponta para o arquivo real no código. O agente confirma com evidência.
3. **SDD para Tela** — guia que traduz requisitos funcionais em decisões de UI concretas.

## Novidades v2.0 (2026-05-04)

### Arquivos Novos:
- **`GLOSSARIO_PAPEIS_TEXTO.md`** — Define exatamente como nomear cada tipo de texto (Heading, Label, Error, etc.)
- **`SDD_AVANCADO.md`** — Traduz seções técnicas do SDD (RNFs, DACI, Métricas, Rollout, Observabilidade) em UI

### Arquivos Incrementados:
- **`TIPOGRAFIA.md`** — Agora referencia `GLOSSARIO_PAPEIS_TEXTO.md` e mapeia papéis → tokens
- **`SDD_PARA_TELA.md`** — Adicionados Passos 8, 9 e 10 (Métricas, Rollout, Glossário)
- **`VISAO_GERAL.md`** — Atualizado com mapa de navegação v2.0

## Estrutura

```
olist-ds-specialist/
├── SKILL.md                              # Papel, escopo, fluxo de decisão
├── DESIGN.md                             # Especificação Google Labs (cross-tool)
└── references/
    ├── VISAO_GERAL.md                    # Sempre lido primeiro — mapa de navegação
    ├── CORES.md                          # Sistema de cores com regras
    ├── TIPOGRAFIA.md                     # Fontes, tamanhos, composições
    ├── GLOSSARIO_PAPEIS_TEXTO.md         # 🆕 Definição dos 10 papéis de texto
    ├── ESPACAMENTO.md                    # Escala, grid, border-radius
    ├── COMPONENTES.md                    # Componentes com props (auto-gerado)
    ├── PADROES.md                        # Padrões de página
    ├── MAPA_FONTES.md                    # Mapa de arquivos (auto-gerado)
    ├── SDD_PARA_TELA.md                  # Tradução SDD → UI (10 passos)
    ├── SDD_AVANCADO.md                   # 🆕 Tradução de seções técnicas do SDD
    └── CHECKLIST_REVISAO.md              # Checklist de revisão visual
```

## Instalação

### No Claude Code

```bash
mkdir -p ~/.claude/skills
cp -r olist-ds-specialist ~/.claude/skills/
```

### No projeto (compartilhada via Git)

```bash
cp -r olist-ds-specialist .claude/skills/
git add .claude/skills/
git commit -m "feat: skill corporativa do design system v2.0"
```

### No Claude.ai

Customize → Skills → Upload → selecionar pasta

## Uso

### Básico (traduzir SDD em UI)
```
Use $olist-ds-specialist para criar a tela deste SDD:
[COLAR SDD AQUI]
```
*Ou anexar arquivo .md/.pdf do SDD*

### Avançado (SDDs com RNFs, DACI, Métricas)
```
Use $olist-ds-specialist para criar UI completa deste SDD,
incluindo decisões de RNFs, DACI e Métricas de Sucesso:
[COLAR SDD COMPLETO AQUI]
```
*Ou anexar arquivo .md/.pdf do SDD*

### Revisão de UI
```
Use $olist-ds-specialist para revisar se esta tela segue 
as regras do design system Olist:
[COLAR CÓDIGO OU SCREENSHOT]
```

### Figma (criação faseada com validação)
```
## Contexto
Use $olist-ds-specialist para criar UI completa deste SDD:
[COLAR SDD AQUI OU ANEXAR ARQUIVO]

## Design System
1. Use `search_design_system` para localizar componentes, variáveis de cor, tipografia e espaçamento existentes da Olist.

2. NÃO recrie componentes que já existem — use `importComponentByKey` e crie instâncias. Se faltar algo, registre na página "Notas".

3. Todas as cores, tipografia, raio e espaçamentos devem vir de variables/styles. Nada hardcoded.

## Estrutura do arquivo Figma
- Crie um novo arquivo com `create_new_file`, nome: "Olist — [ERP/Seller/Admin] — <Fluxo> — v0.1".
  - Exemplo: "Olist — ERP — Aprovação de Pedidos — v0.1"
- Páginas:
  - Cover (capa com título, autor, data, status)
  - Flow — <nome do fluxo> (telas em ordem narrativa, da esq. p/ dir.)
  - Specs (anotações, decisões e dúvidas para o designer)

## Regras de construção — todas obrigatórias
1. Auto layout em TODOS os frames e containers (inclusive seções internas). `layoutMode` nunca pode ser "NONE" exceto em ícones/ilustrações.

2. Defina explicitamente para cada frame: `primaryAxisSizingMode`, `counterAxisSizingMode`, `itemSpacing`, `paddingLeft/Right/Top/Bottom`, `layoutAlign` e `layoutSizingHorizontal/Vertical` (HUG/FILL/FIXED).

3. Espaçamentos somente da escala de tokens (4/8/12/16/24/32/48...).

4. Constraints e resizing coerentes: containers que devem esticar usam FILL; conteúdo que abraça usa HUG.

5. Use grids de 8pt e largura base de 1440px (desktop) / 390px (mobile).

## Nomenclatura semântica de layers
Use sempre nomes descritivos, nunca "Frame 123" ou "Rectangle 5".
Padrão:
- Tela: "Screen / <Fluxo> / <Nome> / <Estado>"
  - ex.: "Screen / Onboarding / Step 2 / Default"
- Seção: "Section / <Função>" — ex.: "Section / Header"
- Container: "Container / <Propósito>" — ex.: "Container / Form Fields"
- Instância: "<Nome do componente do DS>" (preserve o nome original)
- Texto: "<Papel>: <trecho>" (papéis definidos em GLOSSARIO_PAPEIS_TEXTO.md)
  - ex.: "Heading: Bem-vindo de volta", "Error: E-mail inválido"
- Ícone: "Icon / <nome semântico>" — ex.: "Icon / Chevron Right"

## Modo de execução
1. Primeiro, leia o SDD inteiro e me devolva:
   - Lista numerada de TODAS as telas e estados que você identificou
   - Ordem sugerida de construção (qual faz sentido vir primeiro)
   - NÃO crie nada no Figma ainda. Aguarde meu OK.

2. Após meu OK, crie o arquivo Figma com `create_new_file` e construa APENAS a tela #1 da lista. Devolva o `fileKey` e um resumo do que foi feito.

3. Aguarde meu feedback. Quando eu disser "seguir para a próxima", continue com a tela seguinte NO MESMO arquivo (use o fileKey), reaproveitando containers, tokens e padrões que já estabelecemos.

4. A cada tela entregue, aponte:
   - O que reaproveitou da(s) anterior(es)
   - O que é novo
   - Decisões de design que você tomou e quer que eu valide

## Checklist final — execute antes de devolver
- [ ] Toda tela tem Auto Layout em 100% dos containers
- [ ] Nenhum nome genérico ("Frame N", "Group", "Rectangle") sobrou
- [ ] Todos os tokens (cor/tipo/espaço/raio) vêm de variables/styles
- [ ] Página Specs tem anotações de decisões e pontos para o designer revisar
- [ ] Capa preenchida com título, autor, data, status

Comece confirmando o que entendeu do SDD e quais componentes do DS
encontrou antes de gerar — quero validar antes da execução.
```

## Auto-sync

A cada `npm run build`, os arquivos `COMPONENTES.md`, `MAPA_FONTES.md` e `VISAO_GERAL.md` são regenerados com o estado real do código.

## Manutenção

- Atualizar `MAPA_FONTES.md` quando novos componentes forem criados (automático)
- Atualizar `CORES.md` e `TIPOGRAFIA.md` quando tokens mudarem
- Atualizar `GLOSSARIO_PAPEIS_TEXTO.md` se novos papéis de texto forem criados
- Nunca promover comportamento inferido como padrão sem validar no código real

## Changelog

### v2.0 (2026-05-04)
- Adicionado `GLOSSARIO_PAPEIS_TEXTO.md` (10 papéis de texto)
- Adicionado `SDD_AVANCADO.md` (RNFs, DACI, Métricas, Rollout, Observabilidade)
- Incrementado `SDD_PARA_TELA.md` (passos 8, 9, 10)
- Incrementado `TIPOGRAFIA.md` (mapeamento papéis → tokens)
- Incrementado `VISAO_GERAL.md` (mapa de navegação v2.0)

### v1.0 (2026-01-12)
- Release inicial com 9 arquivos de referência
