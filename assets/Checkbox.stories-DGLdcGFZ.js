import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{Y as r}from"./iframe-_8twg3EU.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{n as a,t as o}from"./Checkbox-_8s-S906.js";var s=e({Estados:()=>f,GrupoSelecionarTodos:()=>p,Playground:()=>d,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m,h=t((()=>{c=n(r(),1),a(),l=i(),u={title:`Components/Checkbox`,component:o,parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`Texto exibido ao lado da caixa de seleção.`},checked:{control:`boolean`,description:`Define se o checkbox está marcado (modo controlado).`,table:{defaultValue:{summary:`false`}}},isIndeterminate:{control:`boolean`,description:'Estado indeterminado (parcialmente selecionado). Define `input.indeterminate = true` e `aria-checked="mixed"` para leitores de tela.',table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Desabilita o checkbox, bloqueando interações e alterando a aparência visual.`,table:{defaultValue:{summary:`false`}}},onChange:{action:`alterado`,description:`Callback disparado ao alterar o estado do checkbox.`},id:{control:`text`,description:"ID do input nativo. Associado automaticamente ao `<label>` via `htmlFor`. Gerado com `useId()` quando omitido."}}},d={args:{label:`Label text`}},f={render:()=>{let[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:[(0,l.jsx)(o,{label:`Desmarcado — enabled`,checked:e,onChange:e=>t(e.target.checked)}),(0,l.jsx)(o,{label:`Marcado — enabled`,checked:n,onChange:e=>r(e.target.checked)}),(0,l.jsx)(o,{label:`Indeterminado — enabled`,isIndeterminate:!0}),(0,l.jsx)(o,{label:`Desmarcado — disabled`,disabled:!0}),(0,l.jsx)(o,{label:`Marcado — disabled`,disabled:!0,checked:!0,onChange:()=>{}}),(0,l.jsx)(o,{label:`Indeterminado — disabled`,disabled:!0,isIndeterminate:!0})]})},parameters:{layout:`padded`}},p={name:`"Selecionar todos" com estado indeterminado`,render:()=>{let e=[{id:`pedidos`,label:`Pedidos`},{id:`produtos`,label:`Produtos`},{id:`estoque`,label:`Estoque`},{id:`financeiro`,label:`Financeiro`},{id:`relatorios`,label:`Relatórios`,disabled:!0}],[t,n]=(0,c.useState)(new Set([`pedidos`])),r=e.filter(e=>!e.disabled),i=r.every(e=>t.has(e.id)),a=r.every(e=>!t.has(e.id)),s=!i&&!a,u=()=>n(i?new Set:new Set(r.map(e=>e.id))),d=e=>n(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,l.jsxs)(`fieldset`,{style:{border:`none`,padding:0,margin:0},children:[(0,l.jsx)(`legend`,{style:{fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:`0.75rem`,fontWeight:600,color:`#827f73`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`4px`},children:`Módulos`}),(0,l.jsx)(o,{id:`todos`,label:`Selecionar todos`,checked:i,isIndeterminate:s,onChange:u}),(0,l.jsx)(`div`,{style:{paddingLeft:`1.5rem`,display:`flex`,flexDirection:`column`},children:e.map(e=>(0,l.jsx)(o,{id:e.id,label:e.label,checked:t.has(e.id),disabled:e.disabled,onChange:()=>d(e.id)},e.id))})]})},parameters:{layout:`padded`,docs:{description:{story:`Padrão "Selecionar todos" com estado indeterminado automático — extremamente comum em tabelas e listas do ERP Tiny.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label text'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Estados`,`GrupoSelecionarTodos`]}));h();export{f as Estados,p as GrupoSelecionarTodos,d as Playground,m as __namedExportsOrder,u as default,h as n,s as t};