import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{Y as r}from"./iframe-DikSea-c.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";var a,o,s,c,l,u,d,f,p,m=t((()=>{a=`_wrapper_4b30j_7`,o=`_wrapperDisabled_4b30j_16`,s=`_boxArea_4b30j_24`,c=`_input_4b30j_49`,l=`_box_4b30j_24`,u=`_checkIcon_4b30j_131`,d=`_indeterminateIcon_4b30j_132`,f=`_labelText_4b30j_162`,p={wrapper:a,wrapperDisabled:o,boxArea:s,input:c,box:l,checkIcon:u,indeterminateIcon:d,labelText:f}})),h,g,_,v=t((()=>{h=n(r(),1),m(),g=i(),_=({label:e,isIndeterminate:t=!1,checked:n,disabled:r=!1,className:i,id:a,onChange:o,...s})=>{let c=(0,h.useId)(),l=a??c,u=(0,h.useRef)(null);return(0,h.useEffect)(()=>{u.current&&(u.current.indeterminate=t)},[t]),(0,g.jsxs)(`label`,{className:[p.wrapper,r?p.wrapperDisabled:void 0,i].filter(Boolean).join(` `),htmlFor:l,children:[(0,g.jsxs)(`span`,{className:p.boxArea,children:[(0,g.jsx)(`input`,{ref:u,type:`checkbox`,id:l,className:p.input,checked:n,disabled:r,onChange:o,"aria-checked":t?`mixed`:n,...s}),(0,g.jsxs)(`span`,{className:p.box,"aria-hidden":`true`,children:[(0,g.jsx)(`span`,{className:p.checkIcon,children:(0,g.jsx)(`svg`,{width:`11`,height:`9`,viewBox:`0 0 11 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,g.jsx)(`path`,{d:`M1 4.5L4 7.5L10 1`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,g.jsx)(`span`,{className:p.indeterminateIcon,children:(0,g.jsx)(`svg`,{width:`12`,height:`2`,viewBox:`0 0 12 2`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,g.jsx)(`path`,{d:`M1 1H11`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})})})]})]}),e!==void 0&&(0,g.jsx)(`span`,{className:p.labelText,children:e})]})},_.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`string`},description:``},isIndeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}})),y=e({Estados:()=>w,GrupoSelecionarTodos:()=>T,Playground:()=>C,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E,D=t((()=>{b=n(r(),1),v(),x=i(),S={title:`Components/Checkbox`,component:_,parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`Texto exibido ao lado da caixa de seleção.`},checked:{control:`boolean`,description:`Define se o checkbox está marcado (modo controlado).`,table:{defaultValue:{summary:`false`}}},isIndeterminate:{control:`boolean`,description:'Estado indeterminado (parcialmente selecionado). Define `input.indeterminate = true` e `aria-checked="mixed"` para leitores de tela.',table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Desabilita o checkbox, bloqueando interações e alterando a aparência visual.`,table:{defaultValue:{summary:`false`}}},onChange:{action:`alterado`,description:`Callback disparado ao alterar o estado do checkbox.`},id:{control:`text`,description:"ID do input nativo. Associado automaticamente ao `<label>` via `htmlFor`. Gerado com `useId()` quando omitido."}}},C={args:{label:`Label text`}},w={render:()=>{let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!0);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:[(0,x.jsx)(_,{label:`Desmarcado — enabled`,checked:e,onChange:e=>t(e.target.checked)}),(0,x.jsx)(_,{label:`Marcado — enabled`,checked:n,onChange:e=>r(e.target.checked)}),(0,x.jsx)(_,{label:`Indeterminado — enabled`,isIndeterminate:!0}),(0,x.jsx)(_,{label:`Desmarcado — disabled`,disabled:!0}),(0,x.jsx)(_,{label:`Marcado — disabled`,disabled:!0,checked:!0,onChange:()=>{}}),(0,x.jsx)(_,{label:`Indeterminado — disabled`,disabled:!0,isIndeterminate:!0})]})},parameters:{layout:`padded`}},T={name:`"Selecionar todos" com estado indeterminado`,render:()=>{let e=[{id:`pedidos`,label:`Pedidos`},{id:`produtos`,label:`Produtos`},{id:`estoque`,label:`Estoque`},{id:`financeiro`,label:`Financeiro`},{id:`relatorios`,label:`Relatórios`,disabled:!0}],[t,n]=(0,b.useState)(new Set([`pedidos`])),r=e.filter(e=>!e.disabled),i=r.every(e=>t.has(e.id)),a=r.every(e=>!t.has(e.id)),o=!i&&!a,s=()=>n(i?new Set:new Set(r.map(e=>e.id))),c=e=>n(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,x.jsxs)(`fieldset`,{style:{border:`none`,padding:0,margin:0},children:[(0,x.jsx)(`legend`,{style:{fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:`0.75rem`,fontWeight:600,color:`#827f73`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`4px`},children:`Módulos`}),(0,x.jsx)(_,{id:`todos`,label:`Selecionar todos`,checked:i,isIndeterminate:o,onChange:s}),(0,x.jsx)(`div`,{style:{paddingLeft:`1.5rem`,display:`flex`,flexDirection:`column`},children:e.map(e=>(0,x.jsx)(_,{id:e.id,label:e.label,checked:t.has(e.id),disabled:e.disabled,onChange:()=>c(e.id)},e.id))})]})},parameters:{layout:`padded`,docs:{description:{story:`Padrão "Selecionar todos" com estado indeterminado automático — extremamente comum em tabelas e listas do ERP Tiny.`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label text'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <Checkbox label="Desmarcado — enabled" checked={c1} onChange={e => setC1(e.target.checked)} />
        <Checkbox label="Marcado — enabled" checked={c2} onChange={e => setC2(e.target.checked)} />
        <Checkbox label="Indeterminado — enabled" isIndeterminate />
        <Checkbox label="Desmarcado — disabled" disabled />
        <Checkbox label="Marcado — disabled" disabled checked onChange={() => {}} />
        <Checkbox label="Indeterminado — disabled" disabled isIndeterminate />
      </div>;
  },
  parameters: {
    layout: 'padded'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '"Selecionar todos" com estado indeterminado',
  render: () => {
    const modulos = [{
      id: 'pedidos',
      label: 'Pedidos'
    }, {
      id: 'produtos',
      label: 'Produtos'
    }, {
      id: 'estoque',
      label: 'Estoque'
    }, {
      id: 'financeiro',
      label: 'Financeiro'
    }, {
      id: 'relatorios',
      label: 'Relatórios',
      disabled: true
    }];
    const [selecionados, setSelecionados] = useState<Set<string>>(new Set(['pedidos']));
    const ativados = modulos.filter(m => !m.disabled);
    const todosMarcados = ativados.every(m => selecionados.has(m.id));
    const nenhumMarcado = ativados.every(m => !selecionados.has(m.id));
    const indeterminate = !todosMarcados && !nenhumMarcado;
    const toggleTodos = () => setSelecionados(todosMarcados ? new Set() : new Set(ativados.map(m => m.id)));
    const toggleItem = (id: string) => setSelecionados(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
    return <fieldset style={{
      border: 'none',
      padding: 0,
      margin: 0
    }}>
        <legend style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#827f73',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '4px'
      }}>
          Módulos
        </legend>
        <Checkbox id="todos" label="Selecionar todos" checked={todosMarcados} isIndeterminate={indeterminate} onChange={toggleTodos} />
        <div style={{
        paddingLeft: '1.5rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
          {modulos.map(m => <Checkbox key={m.id} id={m.id} label={m.label} checked={selecionados.has(m.id)} disabled={m.disabled} onChange={() => toggleItem(m.id)} />)}
        </div>
      </fieldset>;
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Padrão "Selecionar todos" com estado indeterminado automático — extremamente comum em tabelas e listas do ERP Tiny.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Estados`,`GrupoSelecionarTodos`]}));D();export{w as Estados,T as GrupoSelecionarTodos,C as Playground,E as __namedExportsOrder,S as default,D as n,y as t};