import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,c as n,l as r,n as i,r as a,x as o}from"./blocks-CyRfGtt6.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{t as c}from"./mdx-react-shim-BMJVXjdf.js";import{Estados as l,Playground as u,n as d,t as f}from"./InputSearch.stories-Dfi78XUH.js";function p(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{of:f}),`
`,(0,h.jsx)(r.h1,{id:`inputsearch`,children:`InputSearch`}),`
`,(0,h.jsx)(r.p,{children:`Campo de busca com borda pill e botão ícone de ação.`}),`
`,(0,h.jsx)(r.h2,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-tsx`,children:`import { InputSearch } from '@pedrohenriquevalentim/olist-ds';
`})}),`
`,(0,h.jsx)(r.h2,{id:`uso-básico`,children:`Uso básico`}),`
`,(0,h.jsx)(r.pre,{children:(0,h.jsx)(r.code,{className:`language-tsx`,children:`const [value, setValue] = useState('');

<InputSearch
  label="Pesquisar pedido"
  placeholder="Digite o número do pedido"
  value={value}
  onChange={setValue}
  onSearch={() => console.log('buscar:', value)}
/>
`})}),`
`,(0,h.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t,{of:u}),`
`,(0,h.jsx)(r.h2,{id:`estados`,children:`Estados`}),`
`,(0,h.jsx)(r.p,{children:`Enabled, preenchido, com suporte e disabled.`}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(r.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsx)(i,{of:f})]})}function m(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=s(),c(),r(),d()}))();export{m as default};