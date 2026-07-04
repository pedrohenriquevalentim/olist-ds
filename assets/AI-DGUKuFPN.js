import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,l as n,x as r}from"./blocks-CqACpwHc.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{t as a}from"./mdx-react-shim-ChJ3qiY4.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`AI`}),`
`,(0,c.jsx)(n.h1,{id:`ai-no-olist-design-system`,children:`AI no Olist Design System`}),`
`,(0,c.jsx)(n.p,{children:`O DS disponibiliza uma skill para Claude Code que cobre todo o trabalho de UI — desde a geração de componentes a partir do Figma até a criação de telas completas a partir de PRDs.`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`skill-disponível`,children:`Skill disponível`}),`
`,(0,c.jsx)(n.h3,{id:`olist-ds-specialist`,children:(0,c.jsx)(n.code,{children:`$olist-ds-specialist`})}),`
`,(0,c.jsx)(n.p,{children:`Especialista em Product Design e Frontend da Olist. Cobre criação de telas, geração de componentes React, prototipação no Figma e manutenção do próprio DS.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Quando acionar automaticamente:`}),` menção a interface Olist, design system, tokens, componentes, telas, layouts, SDD, PRD, protótipo, Figma, Storybook, copy, texto de botão, mensagem de erro, empty state, toast, label ou placeholder.`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`slash-commands`,children:`Slash Commands`}),`
`,(0,c.jsx)(n.p,{children:`Cada capacidade pode ser invocada explicitamente. O agente também aciona o caso correto automaticamente quando o contexto é reconhecido.`}),`
`,(0,c.jsxs)(n.p,{children:[`| Comando | Uso | Para quem |
|---|---|---|
| `,(0,c.jsx)(n.code,{children:`/ds-implementar`}),` | `,(0,c.jsx)(n.code,{children:`/ds-implementar <figma-url>`}),` | Dev de BU: converte tela Figma em JSX tipado usando componentes DS |
| `,(0,c.jsx)(n.code,{children:`/ds-tela`}),` | `,(0,c.jsx)(n.code,{children:`/ds-tela <sdd-ou-prd>`}),` | Dev de BU: gera tela React a partir de SDD/PRD |
| `,(0,c.jsx)(n.code,{children:`/ds-figma`}),` | `,(0,c.jsx)(n.code,{children:`/ds-figma <sdd-ou-prd>`}),` | Designer/Dev: cria telas no Figma com instâncias reais do DS |
| `,(0,c.jsx)(n.code,{children:`/ds-componente`}),` | `,(0,c.jsx)(n.code,{children:`/ds-componente <figma-url>`}),` | Mantenedor DS: gera novo componente DS completo (5 arquivos + docs Figma) |
| `,(0,c.jsx)(n.code,{children:`/ds-revisar`}),` | `,(0,c.jsx)(n.code,{children:`/ds-revisar`}),` + código ou screenshot | Qualquer dev: revisa tela/código contra padrões DS |
| `,(0,c.jsx)(n.code,{children:`/ds-sync`}),` | `,(0,c.jsx)(n.code,{children:`/ds-sync`}),` | Mantenedor DS: sincroniza inventário de componentes |`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`o-que-cada-comando-faz`,children:`O que cada comando faz`}),`
`,(0,c.jsxs)(n.h3,{id:`ds-implementar--figma-de-produto--jsx-com-componentes-ds`,children:[(0,c.jsx)(n.code,{children:`/ds-implementar`}),` — Figma de produto → JSX com componentes DS`]}),`
`,(0,c.jsx)(n.p,{children:`Para devs de BU que recebem uma tela do Figma e precisam implementá-la sem conhecer o inventário do DS de memória.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`/ds-implementar https://www.figma.com/design/...?node-id=...
`})}),`
`,(0,c.jsx)(n.p,{children:`O que acontece:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Lê a tela via Figma MCP e identifica cada elemento visual`}),`
`,(0,c.jsxs)(n.li,{children:[`Mapeia elementos → componentes DS disponíveis (`,(0,c.jsx)(n.code,{children:`Button`}),`, `,(0,c.jsx)(n.code,{children:`InputText`}),`, `,(0,c.jsx)(n.code,{children:`Chip`}),`…)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Busca as props reais de cada componente em `,(0,c.jsx)(n.code,{children:`COMPONENTES.md`})]}),`
`,(0,c.jsx)(n.li,{children:`Gera JSX com imports corretos, props tipadas e tokens de espaçamento`}),`
`,(0,c.jsx)(n.li,{children:`Sinaliza elementos sem equivalente DS com sugestão de token a usar`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsxs)(n.h3,{id:`ds-componente--figma-de-componente--novo-componente-ds`,children:[(0,c.jsx)(n.code,{children:`/ds-componente`}),` — Figma de componente → novo componente DS`]}),`
`,(0,c.jsx)(n.p,{children:`Para o mantenedor do DS que precisa implementar um novo componente a partir do design.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`/ds-componente https://www.figma.com/design/...?node-id=...
`})}),`
`,(0,c.jsx)(n.p,{children:`O que acontece:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Lê metadados, contexto de design e screenshot via Figma MCP`}),`
`,(0,c.jsxs)(n.li,{children:[`Gera 5 arquivos: `,(0,c.jsx)(n.code,{children:`.tsx`}),` · `,(0,c.jsx)(n.code,{children:`.module.css`}),` · `,(0,c.jsx)(n.code,{children:`.test.tsx`}),` · `,(0,c.jsx)(n.code,{children:`.stories.tsx`}),` · `,(0,c.jsx)(n.code,{children:`index.ts`})]}),`
`,(0,c.jsx)(n.li,{children:`Em paralelo, gera frame de docs no Figma (demo · props · anatomia · acessibilidade)`}),`
`,(0,c.jsx)(n.li,{children:`Valida contra screenshot antes de concluir`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsxs)(n.h3,{id:`ds-tela--sddprd--tela-react`,children:[(0,c.jsx)(n.code,{children:`/ds-tela`}),` — SDD/PRD → tela React`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`/ds-tela [cole o SDD ou PRD aqui]
`})}),`
`,(0,c.jsx)(n.p,{children:`Detecta automaticamente se o SDD é básico (só RFs) ou completo (com RNFs, DACI, Métricas, Rollout) e adapta o fluxo.`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsxs)(n.h3,{id:`ds-figma--sddprd--telas-no-figma`,children:[(0,c.jsx)(n.code,{children:`/ds-figma`}),` — SDD/PRD → telas no Figma`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`/ds-figma [cole o SDD ou PRD aqui]
`})}),`
`,(0,c.jsx)(n.p,{children:`Lista todas as telas antes de criar, aguarda validação e entrega tela por tela com instâncias reais dos componentes DS.`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsxs)(n.h3,{id:`ds-revisar--revisão-de-tela`,children:[(0,c.jsx)(n.code,{children:`/ds-revisar`}),` — Revisão de tela`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`/ds-revisar [cole o código ou arraste o screenshot]
`})}),`
`,(0,c.jsx)(n.p,{children:`Verifica: componentes DS corretos, tokens de cor/tipografia/espaçamento, acessibilidade (WCAG AA), UX Writing (tom, copy, labels).`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsxs)(n.h3,{id:`ds-sync--sincronizar-inventário`,children:[(0,c.jsx)(n.code,{children:`/ds-sync`}),` — Sincronizar inventário`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`/ds-sync
`})}),`
`,(0,c.jsx)(n.p,{children:`Busca componentes publicados nas libraries Figma por ordem de prioridade e atualiza o inventário da skill.`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`regras-que-a-skill-segue`,children:`Regras que a skill segue`}),`
`,(0,c.jsxs)(n.p,{children:[`| Regra | Detalhe |
|---|---|
| `,(0,c.jsx)(n.strong,{children:`Tokens`}),` | Usa exclusivamente `,(0,c.jsx)(n.code,{children:`var(--nome-do-token)`}),` de `,(0,c.jsx)(n.code,{children:`src/generated/variables.css`}),`. Nunca valores hardcoded |
| `,(0,c.jsx)(n.strong,{children:`Unidades`}),` | `,(0,c.jsx)(n.code,{children:`rem`}),`, nunca `,(0,c.jsx)(n.code,{children:`px`}),` |
| `,(0,c.jsx)(n.strong,{children:`Ícones`}),` | Usa o componente `,(0,c.jsx)(n.code,{children:`Icon`}),` do DS com `,(0,c.jsx)(n.code,{children:`color="currentColor"`}),`. Nunca instala pacotes externos |
| `,(0,c.jsx)(n.strong,{children:`Libraries Figma`}),` | Sempre filtra por `,(0,c.jsx)(n.code,{children:`searchPriority`}),` do `,(0,c.jsx)(n.code,{children:`figma-config.json`}),`. Nunca usa `,(0,c.jsx)(n.code,{children:`blockedLibraries`}),` |
| `,(0,c.jsx)(n.strong,{children:`Auto Layout`}),` | Toda criação no Figma usa Auto Layout. Nunca posicionamento absoluto |
| `,(0,c.jsx)(n.strong,{children:`Acessibilidade`}),` | Todo elemento interativo tem `,(0,c.jsx)(n.code,{children:`role`}),` + `,(0,c.jsx)(n.code,{children:`aria-label`}),`. Contraste mínimo 4.5:1 |`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`fora-do-escopo`,children:`Fora do escopo`}),`
`,(0,c.jsxs)(n.p,{children:[`A skill `,(0,c.jsx)(n.strong,{children:`não`}),` cobre: backend, APIs, banco de dados, autenticação, regras de negócio, gerenciamento de estado sem relação com UI, performance sem impacto visual.`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`como-invocar`,children:`Como invocar`}),`
`,(0,c.jsx)(n.p,{children:`Em qualquer sessão Claude Code dentro do repositório:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`/olist-ds-specialist
`})}),`
`,(0,c.jsx)(n.p,{children:`Ou simplesmente descreva a tarefa — a skill é acionada automaticamente quando o contexto é de UI/design system.`})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),n()}))();export{s as default};