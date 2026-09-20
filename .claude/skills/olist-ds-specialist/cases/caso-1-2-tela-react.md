# Casos 1 e 2 — Tela React a partir de SDD/PRD

> **Para devs de BU** que recebem um SDD/PRD e precisam gerar uma tela React usando componentes do DS.
> Output: código React para o repositório da BU — não para o `olist-ds`.

## Detecção automática

- SDD tem RNFs, DACI, Métricas, Rollout ou Observabilidade? → **Caso 2**
- SDD tem apenas Requisitos Funcionais? → **Caso 1**

---

## Caso 1: SDD básico — tela React

```
1. Ler VISAO_GERAL.md
2. Ler SDD_PARA_TELA.md (passos 1-7)
3. Ler GLOSSARIO_PAPEIS_TEXTO.md
4. Ler COMPONENTES.md + PADROES.md
5. Criar tela React com componentes do DS
6. Nomear textos usando papéis corretos (Heading, Label, etc.)
```

---

## Caso 2: SDD completo — tela React

```
1. Ler VISAO_GERAL.md
2. Ler SDD_PARA_TELA.md (passos 1-10)
3. Ler SDD_AVANCADO.md
4. Ler GLOSSARIO_PAPEIS_TEXTO.md
5. Traduzir RNFs em skeleton loaders, permissões
6. Traduzir DACI em views diferentes por persona
7. Traduzir Métricas em cards de dashboard
8. Traduzir Rollout em badges "Beta"
9. Usar termos do Glossário do SDD como labels
10. Criar tela React completa
```

---

## Regras de Geração de Código React

- Imports: `import { Button, InputText } from '@pedrohenriquevalentim/olist-ds'`
- Props tipadas conforme interfaces reais do COMPONENTES.md (fonte: GitHub, ver globals.md)
- Tokens de espaçamento via `var(--token)` para elementos sem componente DS
- Ícones via `<Icon name="..." size={N} color="currentColor" />`
- Nenhum valor hardcoded de cor, fonte ou espaçamento
- Acessibilidade: `aria-label` em elementos interativos sem label visível
