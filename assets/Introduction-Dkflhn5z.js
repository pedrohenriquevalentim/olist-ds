import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,l as n,x as r}from"./blocks-iUCz4Fjb.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{t as a}from"./mdx-react-shim-DdbLbv1q.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Introduction`}),`
`,(0,c.jsx)(n.h1,{id:`olist-design-system`,children:`Olist Design System`}),`
`,(0,c.jsx)(n.p,{children:`Sistema de componentes React + TypeScript construído sobre design tokens exportados do Figma via Style Dictionary.`}),`
`,(0,c.jsx)(n.h2,{id:`instalação`,children:`Instalação`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @pedrohenriquevalentim/olist-ds
`})}),`
`,(0,c.jsx)(n.h2,{id:`uso-básico`,children:`Uso básico`}),`
`,(0,c.jsxs)(n.p,{children:[`Importe os tokens CSS globalmente `,(0,c.jsx)(n.strong,{children:`uma vez`}),` na raiz da aplicação:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import '@pedrohenriquevalentim/olist-ds/dist/variables.css';
`})}),`
`,(0,c.jsx)(n.p,{children:`Em seguida, importe os componentes onde precisar:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Button, Chip, Icon } from '@pedrohenriquevalentim/olist-ds';
`})}),`
`,(0,c.jsx)(n.h2,{id:`componentes-disponíveis`,children:`Componentes disponíveis`}),`
`,(0,c.jsxs)(n.p,{children:[`| Componente | Categoria | Descrição |
|---|---|---|
| `,(0,c.jsx)(n.code,{children:`Button`}),` | Action | Botão com variantes primary, secondary e tertiary; lead icon e action icon opcionais |
| `,(0,c.jsx)(n.code,{children:`Checkbox`}),` | Input | Caixa de seleção com rótulo, estado indeterminado e estado de erro |
| `,(0,c.jsx)(n.code,{children:`Chip`}),` | Input / Filter | Tag interativa para filtros e seleção múltipla, com estado selecionado |
| `,(0,c.jsx)(n.code,{children:`Icon`}),` | Brand | Ícones do design system (548 ícones, rebrand 24px) |
| `,(0,c.jsx)(n.code,{children:`InputPassword`}),` | Input | Campo de senha com toggle de visibilidade, suporte a sucesso/erro |
| `,(0,c.jsx)(n.code,{children:`InputSearch`}),` | Input | Campo de busca com botão de ação (texto ou ícone) |
| `,(0,c.jsx)(n.code,{children:`InputSelect`}),` | Input | Campo de seleção com suporte a busca, single/multi select e autocomplete |
| `,(0,c.jsx)(n.code,{children:`InputText`}),` | Input | Campo de texto com label, ícone opcional e estados de sucesso/erro |
| `,(0,c.jsx)(n.code,{children:`Logo`}),` | Brand | Logotipo Olist em variantes de tamanho (default, simple, symbol) e cor |
| `,(0,c.jsx)(n.code,{children:`ProdutosOlistIcons`}),` | Brand | Ícones dos 8 produtos Olist (incl. Agentes de IA) com estados e temas |`]}),`
`,(0,c.jsx)(n.h2,{id:`foundations`,children:`Foundations`}),`
`,(0,c.jsxs)(n.p,{children:[`| Seção | O que documenta |
|---|---|
| `,(0,c.jsx)(n.strong,{children:`Colors`}),` | Paleta completa com tokens primitivos e semânticos |
| `,(0,c.jsx)(n.strong,{children:`Typography`}),` | Escala de tamanhos, pesos, alturas de linha e papéis de texto |
| `,(0,c.jsx)(n.strong,{children:`Spacing`}),` | Grid de 4px, espaçamentos, border-radius e espessuras de borda |`]}),`
`,(0,c.jsx)(n.h2,{id:`princípios`,children:`Princípios`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Consistência`}),` — Todos os componentes consomem exclusivamente design tokens do Figma`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Acessibilidade`}),` — WCAG 2.1 AA em todos os componentes interativos`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Composição`}),` — Componentes pequenos que se combinam em telas complexas`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Clareza`}),` — Interface orientada a ferramenta; sellers usam 8h/dia, clareza > decoração`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),n()}))();export{s as default};