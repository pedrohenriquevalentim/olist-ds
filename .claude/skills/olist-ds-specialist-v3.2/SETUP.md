# Setup — Olist DS Specialist Skill v3.0

Siga este guia para instalar e configurar a skill no seu projeto.

**Tempo estimado:** 5 minutos

---

## Pré-requisitos

- Projeto com código-fonte (React/TypeScript)
- Claude Code instalado ou acesso ao Claude.ai
- Acesso ao Figma com o Design System Olist

---

## Passo 1: Extrair o ZIP

```bash
unzip olist-ds-specialist-v3.zip
```

Você verá a pasta `olist-ds-specialist/` com todos os arquivos.

---

## Passo 2: Copiar skill para o projeto

```bash
mkdir -p .claude/skills
cp -r olist-ds-specialist/ .claude/skills/olist-ds-specialist/
```

---

## Passo 3: Configurar as libraries do Figma

O `figma-config.json` já vem com as **libraryKeys** das 5 libraries autorizadas da Olist.  
Na maioria dos casos, **não é necessário editar nada** — as libraryKeys são estáveis e já estão configuradas.

### Verificar o arquivo:

```bash
cat .claude/skills/olist-ds-specialist/figma-config.json
```

Confirme que `searchPriority` tem 5 entradas começando com `lk-`.

### Sobre os identificadores:

| Tipo | Formato | Para que serve |
|---|---|---|
| `libraryKey` | `lk-abc123...` | Filtrar `search_design_system` — **é o que importa** |
| `fileKey` | `ABC123XYZ` | Referência de arquivo (extraído da URL do Figma) |
| `componentKey` | `9a3bf4...` | Importar componente via `importComponentByKeyAsync` |

### Se precisar adicionar uma nova library:

1. Abrir o arquivo do Figma no browser
2. Abrir Claude e perguntar: `"Qual o libraryKey da library X?"` → Claude usa `get_libraries` para buscar
3. Adicionar em `libraries` e `searchPriority` no `figma-config.json`, na posição correta de prioridade

---

## Passo 4: Proteger dados sensíveis

```bash
echo '.claude/figma-config.json' >> .gitignore
```

> As `libraryKeys` são identificadores de organização — evite commitar.

---

## Passo 5: Verificar instalação

### Estrutura esperada:

```
seu-projeto/
├── .claude/
│   └── skills/
│       └── olist-ds-specialist/
│           ├── SKILL.md
│           ├── README.md
│           ├── SETUP.md
│           ├── figma-config.json       ← Libraries autorizadas (libraryKeys)
│           └── references/
│               ├── VISAO_GERAL.md
│               ├── FIGMA_CONFIG.md
│               ├── TEMPLATES_PRODUTO.md
│               ├── CORES.md
│               ├── TIPOGRAFIA.md
│               ├── GLOSSARIO_PAPEIS_TEXTO.md
│               ├── ESPACAMENTO.md
│               ├── COMPONENTES.md
│               ├── PADROES.md
│               ├── SDD_PARA_TELA.md
│               ├── SDD_AVANCADO.md
│               ├── MAPA_FONTES.md
│               └── CHECKLIST_REVISAO.md
└── .gitignore
```

### Checklist rápido:

```bash
# Skill instalada?
ls .claude/skills/olist-ds-specialist/SKILL.md

# Config com libraryKeys?
grep "lk-" .claude/skills/olist-ds-specialist/figma-config.json | head -3
```

Ambos devem retornar resultado. Se algum falhar, revise o passo correspondente.

---

## Passo 6: Usar a skill

### No Claude Code (terminal):

```bash
cd seu-projeto
claude
```

Depois digite:

```
Use $olist-ds-specialist para criar a tela de upgrade de planos no Figma
```

### No Claude.ai (navegador):

1. Abrir Claude.ai
2. Customize → Skills → Upload
3. Selecionar pasta `olist-ds-specialist/`
4. Ativar a skill
5. Usar normalmente em qualquer conversa

---

## Como a busca de componentes funciona

Claude sempre filtra pelas libraries autorizadas, em ordem de prioridade:

```
AI Components (master) → ERP components → ERP recursos → ERP style guide → [DS] components web
```

Ao pedir "crie a tela X no Figma", Claude automaticamente:
1. Busca `Button`, `Menu ERP`, `Tags` etc. nas libraries acima
2. Importa as instâncias reais com `importComponentByKeyAsync`
3. Constrói o frame via `use_figma` com tokens e fills reais do DS
4. Retorna screenshot + link do Figma para validação

---

## Problemas Comuns

### Claude busca em libraries erradas

Verifique se `searchPriority` em `figma-config.json` tem as 5 libraryKeys corretas (começando com `lk-`).

### Componente não encontrado em nenhuma library

Claude constrói o elemento com primitivos seguindo os tokens do DS e documenta para o designer criar o componente faltante.

### Skill não aparece no Claude Code

Verifique se a pasta está no caminho correto:

```bash
ls .claude/skills/olist-ds-specialist/SKILL.md
```

Se não existir, repita o Passo 2.

---

## Pronto!

A skill está instalada. Claude vai:

- Buscar componentes apenas nas 5 libraries autorizadas
- Usar instâncias reais do DS (não primitivos manuais)
- Seguir o glossário de nomenclatura da Olist
- Criar telas no Figma com workflow faseado (tela por tela)
- Revisar consistência visual automaticamente

Dúvidas? Consulte o `README.md` para informações detalhadas.
