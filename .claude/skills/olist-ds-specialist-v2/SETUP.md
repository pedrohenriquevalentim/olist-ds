# Setup — Olist DS Specialist Skill

Siga este guia para instalar e configurar a skill no seu projeto.

**Tempo estimado:** 5 minutos

---

## Pré-requisitos

- Projeto com código-fonte (React/TypeScript)
- Claude Code instalado ou acesso ao Claude.ai
- Acesso ao Figma com o Design System

---

## Passo 1: Extrair o ZIP

```bash
unzip olist-ds-specialist-v2.1.zip
```

Você verá a pasta `olist-ds-specialist-v2/` com todos os arquivos.

---

## Passo 2: Copiar skill para o projeto

```bash
mkdir -p .claude/skills
cp -r olist-ds-specialist-v2/ .claude/skills/olist-ds-specialist/
```

---

## Passo 3: Configurar fonte da verdade do Figma

### 3.1. Copiar template

```bash
cp .claude/skills/olist-ds-specialist/figma-config.json .claude/figma-config.json
```

### 3.2. Pegar seu fileKey do Figma

1. Abrir o arquivo do Design System no Figma
2. Copiar a URL da barra de endereço
3. O fileKey é a parte entre `/design/` e o próximo `/`:

```
https://www.figma.com/design/ABC123XYZ456/nome-do-arquivo
                              └─────┬─────┘
                                fileKey
```

### 3.3. Preencher o arquivo

Abrir `.claude/figma-config.json` no seu editor e substituir:

- `SUBSTITUA_PELO_SEU_FILE_KEY` → seu fileKey real
- `COLE_URL_COMPLETA_AQUI` → URL completa do Figma
- `NOME_DO_ARQUIVO` → nome do arquivo no Figma

Exemplo preenchido:

```json
{
  "designSystem": {
    "masterFile": {
      "name": "Design System - Components Web",
      "fileKey": "ABC123XYZ456",
      "description": "Componentes principais",
      "url": "https://www.figma.com/design/ABC123XYZ456/design-system"
    },
    "allowedFiles": [
      "ABC123XYZ456"
    ],
    "searchPriority": [
      "ABC123XYZ456"
    ]
  }
}
```

Se você tiver mais de um arquivo no Figma, adicione em `additionalFiles` e inclua todos os fileKeys em `allowedFiles` e `searchPriority`.

---

## Passo 4: Proteger dados sensíveis

```bash
echo '.claude/figma-config.json' >> .gitignore
```

Isso evita que seus fileKeys sejam commitados no repositório.

---

## Passo 5: Verificar instalação

### Estrutura esperada:

```
seu-projeto/
├── .claude/
│   ├── figma-config.json           ← Seus fileKeys (Passo 3)
│   └── skills/
│       └── olist-ds-specialist/    ← Skill (Passo 2)
│           ├── SKILL.md
│           ├── DESIGN.md
│           ├── README.md
│           ├── figma-config.json   ← Template (não editar)
│           └── references/
│               ├── VISAO_GERAL.md
│               ├── FIGMA_CONFIG.md
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
└── .gitignore                      ← Com .claude/figma-config.json
```

### Checklist rápido:

```bash
# Skill instalada?
ls .claude/skills/olist-ds-specialist/SKILL.md

# Config criado?
ls .claude/figma-config.json

# No .gitignore?
grep "figma-config" .gitignore
```

Os três comandos devem retornar resultado. Se algum falhar, revise o passo correspondente.

---

## Passo 6: Usar a skill

### No Claude Code (terminal):

```bash
cd seu-projeto
claude
```

Depois digite:

```
Use $olist-ds-specialist para criar uma tela de login no Figma
```

### No Claude.ai (navegador):

1. Abrir Claude.ai
2. Customize → Skills → Upload
3. Selecionar pasta `olist-ds-specialist/`
4. Ativar a skill
5. Usar normalmente em qualquer conversa

---

## Múltiplos Arquivos do Figma

Se o Design System está em mais de um arquivo no Figma, edite `.claude/figma-config.json`:

```json
{
  "designSystem": {
    "masterFile": {
      "name": "Components Web",
      "fileKey": "PRIMEIRO_FILE_KEY"
    },
    "additionalFiles": [
      {
        "name": "Foundations",
        "fileKey": "SEGUNDO_FILE_KEY",
        "description": "Cores, tipografia, tokens"
      },
      {
        "name": "Icons",
        "fileKey": "TERCEIRO_FILE_KEY",
        "description": "Biblioteca de ícones"
      }
    ],
    "allowedFiles": [
      "PRIMEIRO_FILE_KEY",
      "SEGUNDO_FILE_KEY",
      "TERCEIRO_FILE_KEY"
    ],
    "blockedFiles": [],
    "searchPriority": [
      "PRIMEIRO_FILE_KEY",
      "SEGUNDO_FILE_KEY",
      "TERCEIRO_FILE_KEY"
    ]
  }
}
```

A ordem em `searchPriority` define onde Claude busca primeiro. Se um componente existir em dois arquivos, o primeiro da lista tem prioridade.

---

## Problemas Comuns

### "Arquivo figma-config.json não encontrado"

Você está na raiz do projeto? Verifique com `pwd` e rode:

```bash
cp .claude/skills/olist-ds-specialist/figma-config.json .claude/figma-config.json
```

### Claude busca em arquivos errados do Figma

Verifique se `.claude/figma-config.json` tem os fileKeys corretos em `allowedFiles`.

### Skill não aparece no Claude Code

Verifique se a pasta está no caminho correto:

```bash
ls .claude/skills/olist-ds-specialist/SKILL.md
```

Se não existir, repita o Passo 2.

---

## Pronto!

A skill está instalada e configurada. Claude vai:

- Ler seus tokens de cores, tipografia e espaçamento
- Usar apenas os arquivos do Figma que você permitiu
- Seguir o glossário de nomenclatura da Olist
- Criar telas no Figma com workflow faseado
- Revisar consistência visual automaticamente

Dúvidas? Consulte o `README.md` dentro da skill para informações detalhadas.
