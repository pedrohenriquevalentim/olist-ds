import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,c as n,l as r,n as i,r as a,x as o}from"./blocks-CzqJ4Ix7.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{t as c}from"./mdx-react-shim-DNggcVzC.js";import{Estados as l,GrupoSelecionarTodos as u,Playground as d,n as f,t as p}from"./Checkbox.stories-DGLdcGFZ.js";function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{of:p}),`
`,(0,g.jsx)(r.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,g.jsx)(r.p,{children:`Controle de seleção binária ou indeterminada. Use para permitir que o usuário marque ou desmarque uma opção de forma independente.`}),`
`,(0,g.jsx)(r.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`import { Checkbox } from '@pedrohenriquevalentim/olist-ds';
`})}),`
`,(0,g.jsx)(r.h2,{id:`uso-básico`,children:`Uso básico`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const [checked, setChecked] = useState(false);

<Checkbox
  label="Aceitar termos de uso"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

{/* Estado indeterminado — para "Selecionar todos" parcial */}
<Checkbox
  label="Selecionar todos"
  checked={false}
  isIndeterminate
  onChange={toggleTodos}
/>
`})}),`
`,(0,g.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(r.h2,{id:`estados`,children:`Estados`}),`
`,(0,g.jsx)(r.p,{children:`Enabled × (unchecked, checked, indeterminate) e disabled × (unchecked, checked, indeterminate).`}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`caso-de-uso--selecionar-todos`,children:`Caso de uso — Selecionar todos`}),`
`,(0,g.jsx)(r.p,{children:`Padrão comum em tabelas: o checkbox pai entra no estado indeterminado quando apenas parte dos filhos está selecionada.`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(r.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(i,{of:p})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=s(),c(),r(),f()}))();export{h as default};