import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,c as n,l as r,n as i,r as a,x as o}from"./blocks-CzqJ4Ix7.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{t as c}from"./mdx-react-shim-DNggcVzC.js";import{Estados as l,Playground as u,Variantes as d,n as f,t as p}from"./InputText.stories-DT01LHbS.js";function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{of:p}),`
`,(0,g.jsx)(r.h1,{id:`inputtext`,children:`InputText`}),`
`,(0,g.jsx)(r.p,{children:`Campo de texto de linha única. Suporta label, ícone de lead, tooltip, texto de suporte e estados de validação.`}),`
`,(0,g.jsx)(r.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`import { InputText } from '@pedrohenriquevalentim/olist-ds';
`})}),`
`,(0,g.jsx)(r.h2,{id:`uso-básico`,children:`Uso básico`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const [value, setValue] = useState('');

<InputText
  label="E-mail"
  placeholder="seu@email.com"
  value={value}
  onChange={setValue}
  hasSupport
  supportText="Use seu e-mail corporativo"
/>

{/* Com estado de erro */}
<InputText
  label="E-mail"
  value={value}
  onChange={setValue}
  isError
  hasSupport
  supportText="E-mail inválido"
/>
`})}),`
`,(0,g.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t,{of:u}),`
`,(0,g.jsx)(r.h2,{id:`estados`,children:`Estados`}),`
`,(0,g.jsx)(r.p,{children:`Enabled, preenchido, success, error e disabled.`}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`variantes`,children:`Variantes`}),`
`,(0,g.jsx)(r.p,{children:`Com ícone de lead, com tooltip e combinações.`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(r.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(i,{of:p})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=s(),c(),r(),f()}))();export{h as default};