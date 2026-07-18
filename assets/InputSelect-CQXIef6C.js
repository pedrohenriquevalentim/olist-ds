import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,c as n,l as r,n as i,r as a,x as o}from"./blocks-UziBC-5w.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{t as c}from"./mdx-react-shim-B2OHuP2w.js";import{Autocomplete as l,MultiAutocomplete as u,Playground as d,SeleçãoMúltipla as f,TodasVariantes as p,n as m,t as h}from"./InputSelect.stories-BPri-SQr.js";function g(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{of:h}),`
`,(0,v.jsx)(r.h1,{id:`inputselect`,children:`InputSelect`}),`
`,(0,v.jsxs)(r.p,{children:[`Campo de seleção com quatro modos: `,(0,v.jsx)(r.code,{children:`single`}),`, `,(0,v.jsx)(r.code,{children:`multi`}),`, `,(0,v.jsx)(r.code,{children:`autocomplete`}),` e `,(0,v.jsx)(r.code,{children:`multi-autocomplete`}),`. Implementa ARIA combobox/listbox com navegação completa por teclado.`]}),`
`,(0,v.jsx)(r.h2,{id:`import`,children:`Import`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-tsx`,children:`import { InputSelect } from '@pedrohenriquevalentim/olist-ds';
`})}),`
`,(0,v.jsx)(r.h2,{id:`uso-básico`,children:`Uso básico`}),`
`,(0,v.jsx)(r.pre,{children:(0,v.jsx)(r.code,{className:`language-tsx`,children:`{/* Seleção simples */}
const [value, setValue] = useState('');

<InputSelect
  selectType="single"
  label="Estado"
  placeholder="Selecione um estado"
  options={[
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de Janeiro' },
  ]}
  value={value}
  onChange={setValue}
/>

{/* Seleção múltipla */}
const [values, setValues] = useState<string[]>([]);

<InputSelect
  selectType="multi"
  label="Categorias"
  options={categorias}
  value={values}
  onChange={setValues}
/>
`})}),`
`,(0,v.jsx)(r.h2,{id:`navegação-por-teclado`,children:`Navegação por teclado`}),`
`,(0,v.jsxs)(r.p,{children:[`| Tecla | Ação |
|-------|------|
| `,(0,v.jsx)(r.code,{children:`↓`}),` / `,(0,v.jsx)(r.code,{children:`↑`}),` | Navegar entre opções |
| `,(0,v.jsx)(r.code,{children:`Enter`}),` | Selecionar opção focada |
| `,(0,v.jsx)(r.code,{children:`Escape`}),` | Fechar lista |
| `,(0,v.jsx)(r.code,{children:`Space`}),` | Abrir lista / selecionar |`]}),`
`,(0,v.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t,{of:d}),`
`,(0,v.jsx)(r.h2,{id:`multi-select`,children:`Multi select`}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(r.h2,{id:`autocomplete`,children:`Autocomplete`}),`
`,(0,v.jsx)(a,{of:l}),`
`,(0,v.jsx)(r.h2,{id:`multi-autocomplete`,children:`Multi autocomplete`}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(r.h2,{id:`todas-as-variantes`,children:`Todas as variantes`}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(r.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(i,{of:h})]})}function _(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=s(),c(),r(),m()}))();export{_ as default};