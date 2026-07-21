import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,c as n,l as r,n as i,r as a,x as o}from"./blocks-iUCz4Fjb.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{t as c}from"./mdx-react-shim-DdbLbv1q.js";import{Estados as l,Playground as u,Variantes as d,n as f,t as p}from"./InputSearch.stories-CAVuPfW2.js";function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{of:p}),`
`,(0,g.jsx)(r.h1,{id:`inputsearch`,children:`InputSearch`}),`
`,(0,g.jsxs)(r.p,{children:[`Campo de busca com borda pill. Duas variantes de ação: botão com texto (`,(0,g.jsx)(r.code,{children:`button`}),`) ou apenas ícone (`,(0,g.jsx)(r.code,{children:`button icon`}),`).`]}),`
`,(0,g.jsx)(r.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`import { InputSearch } from '@pedrohenriquevalentim/olist-ds';
`})}),`
`,(0,g.jsx)(r.h2,{id:`uso-básico`,children:`Uso básico`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const [value, setValue] = useState('');

<InputSearch
  action="button"
  label="Pesquisar pedido"
  placeholder="Digite o número do pedido"
  value={value}
  onChange={setValue}
  onSearch={() => console.log('buscar:', value)}
/>

{/* Variante compacta com ícone */}
<InputSearch
  action="button icon"
  placeholder="Buscar"
  value={value}
  onChange={setValue}
/>
`})}),`
`,(0,g.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t,{of:u}),`
`,(0,g.jsx)(r.h2,{id:`variantes`,children:`Variantes`}),`
`,(0,g.jsx)(r.p,{children:`Botão com texto vs. botão ícone.`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(r.h2,{id:`estados`,children:`Estados`}),`
`,(0,g.jsx)(r.p,{children:`Enabled, preenchido, com suporte e disabled.`}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(i,{of:p})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=s(),c(),r(),f()}))();export{h as default};