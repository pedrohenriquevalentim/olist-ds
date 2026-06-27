import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-DXN-684X.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./Checkbox-DudwLedI.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Checkbox`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Texto exibido ao lado da caixa de seleção.`},checked:{control:`boolean`,description:`Define se o checkbox está marcado (modo controlado).`,table:{defaultValue:{summary:`false`}}},isIndeterminate:{control:`boolean`,description:'Estado indeterminado (parcialmente selecionado). Define `input.indeterminate = true` e `aria-checked="mixed"` para leitores de tela.',table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Desabilita o checkbox, bloqueando interações e alterando a aparência visual.`,table:{defaultValue:{summary:`false`}}},onChange:{action:`alterado`,description:`Callback disparado ao alterar o estado do checkbox.`},id:{control:`text`,description:"ID do input nativo. Associado automaticamente ao `<label>` via `htmlFor`. Gerado com `useId()` quando omitido."}}},l={name:`Padrão`,args:{label:`Label text`}},u={name:`Marcado`,render:e=>{let[t,n]=(0,o.useState)(!0);return(0,s.jsx)(a,{...e,label:`Opção selecionada`,checked:t,onChange:e=>n(e.target.checked)})},parameters:{docs:{description:{story:"Estado marcado. O ícone de check branco aparece sobre o fundo azul primário (`--checkbox-color-selected`)."}}}},d={name:`Indeterminado`,args:{label:`Seleção parcial`,isIndeterminate:!0},parameters:{docs:{description:{story:'Estado indeterminado — usado tipicamente em "Selecionar todos" quando apenas parte dos itens da lista está selecionada. Define `aria-checked="mixed"` para tecnologias assistivas.'}}}},f={name:`Desabilitado`,args:{label:`Opção indisponível`,disabled:!0},parameters:{docs:{description:{story:"Estado desabilitado. Cursor `not-allowed`, borda e label em cinza (`--checkbox-border-color-disabled`, `--text-label-color-disabled`)."}}}},p={name:`Desabilitado + marcado`,render:()=>(0,s.jsx)(a,{label:`Obrigatório (somente leitura)`,disabled:!0,checked:!0,onChange:()=>{}}),parameters:{docs:{description:{story:`Valor pré-marcado que o usuário não pode alterar — ex.: campo obrigatório ou permissão concedida por padrão.`}}}},m={name:`Desabilitado + indeterminado`,args:{label:`Seleção parcial bloqueada`,disabled:!0,isIndeterminate:!0},parameters:{docs:{description:{story:"Estado desabilitado com valor indeterminado. Fundo usa `--checkbox-color-disabled` e ícone herda `--checkbox-shape-color-disabled`."}}}},h={name:`Sem label (somente checkbox)`,args:{"aria-label":`Selecionar item`},parameters:{docs:{description:{story:"Checkbox sem label visível. Use `aria-label` para garantir nome acessível quando o contexto visual já identifica o campo."}}}},g={name:`Controlado (toggle interativo)`,render:()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(a,{label:e?`Marcado ✓`:`Desmarcado`,checked:e,onChange:e=>t(e.target.checked)})},parameters:{docs:{description:{story:`Exemplo de uso controlado com estado React. Clique para alternar entre marcado e desmarcado.`}}}},_={name:`Todos os estados`,render:()=>{let[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!0);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0`},children:[(0,s.jsx)(a,{label:`Desmarcado — enabled`,checked:e,onChange:e=>t(e.target.checked)}),(0,s.jsx)(a,{label:`Marcado — enabled`,checked:n,onChange:e=>r(e.target.checked)}),(0,s.jsx)(a,{label:`Indeterminado — enabled`,isIndeterminate:!0}),(0,s.jsx)(a,{label:`Desmarcado — disabled`,disabled:!0}),(0,s.jsx)(a,{label:`Marcado — disabled`,disabled:!0,checked:!0,onChange:()=>{}}),(0,s.jsx)(a,{label:`Indeterminado — disabled`,disabled:!0,isIndeterminate:!0})]})},parameters:{layout:`padded`,docs:{description:{story:`Todos os estados definidos no Design System: enabled × (unchecked, checked, indeterminate) e disabled × (unchecked, checked, indeterminate).`}}}},v={name:`"Selecionar todos" com estado indeterminado`,render:()=>{let e=[{id:`pedidos`,label:`Pedidos`},{id:`produtos`,label:`Produtos`},{id:`estoque`,label:`Estoque`},{id:`financeiro`,label:`Financeiro`},{id:`relatorios`,label:`Relatórios`,disabled:!0}],[t,n]=(0,o.useState)(new Set([`pedidos`])),r=e.filter(e=>!e.disabled),i=r.every(e=>t.has(e.id)),c=r.every(e=>!t.has(e.id)),l=!i&&!c,u=()=>n(i?new Set:new Set(r.map(e=>e.id))),d=e=>n(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,s.jsxs)(`fieldset`,{style:{border:`none`,padding:0,margin:0},children:[(0,s.jsx)(`legend`,{style:{fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:`0.75rem`,fontWeight:600,color:`#827f73`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:`4px`},children:`Módulos`}),(0,s.jsx)(a,{id:`todos`,label:`Selecionar todos`,checked:i,isIndeterminate:l,onChange:u}),(0,s.jsx)(`div`,{style:{paddingLeft:`1.5rem`,display:`flex`,flexDirection:`column`},children:e.map(e=>(0,s.jsx)(a,{id:e.id,label:e.label,checked:t.has(e.id),disabled:e.disabled,onChange:()=>d(e.id)},e.id))})]})},parameters:{layout:`padded`,docs:{description:{story:`Padrão "Selecionar todos" com estado indeterminado automático — extremamente comum em tabelas e listas do ERP Tiny.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Padrão',
  args: {
    label: 'Label text'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Marcado',
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Checkbox {...args} label="Opção selecionada" checked={checked} onChange={e => setChecked(e.target.checked)} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado marcado. O ícone de check branco aparece sobre o fundo azul primário (\`--checkbox-color-selected\`).'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Indeterminado',
  args: {
    label: 'Seleção parcial',
    isIndeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado indeterminado — usado tipicamente em "Selecionar todos" quando apenas parte dos itens da lista está selecionada. Define \`aria-checked="mixed"\` para tecnologias assistivas.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado',
  args: {
    label: 'Opção indisponível',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado. Cursor \`not-allowed\`, borda e label em cinza (\`--checkbox-border-color-disabled\`, \`--text-label-color-disabled\`).'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado + marcado',
  render: () => <Checkbox label="Obrigatório (somente leitura)" disabled checked onChange={() => {}} />,
  parameters: {
    docs: {
      description: {
        story: 'Valor pré-marcado que o usuário não pode alterar — ex.: campo obrigatório ou permissão concedida por padrão.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado + indeterminado',
  args: {
    label: 'Seleção parcial bloqueada',
    disabled: true,
    isIndeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado com valor indeterminado. Fundo usa \`--checkbox-color-disabled\` e ícone herda \`--checkbox-shape-color-disabled\`.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Sem label (somente checkbox)',
  args: {
    'aria-label': 'Selecionar item'
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox sem label visível. Use \`aria-label\` para garantir nome acessível quando o contexto visual já identifica o campo.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Controlado (toggle interativo)',
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox label={checked ? 'Marcado ✓' : 'Desmarcado'} checked={checked} onChange={e => setChecked(e.target.checked)} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso controlado com estado React. Clique para alternar entre marcado e desmarcado.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Todos os estados',
  render: () => {
    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
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
    layout: 'padded',
    docs: {
      description: {
        story: 'Todos os estados definidos no Design System: enabled × (unchecked, checked, indeterminate) e disabled × (unchecked, checked, indeterminate).'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Padrão`,`Marcado`,`Indeterminado`,`Desabilitado`,`DesabilitadoMarcado`,`DesabilitadoIndeterminado`,`SemLabel`,`Controlado`,`TodosOsEstados`,`GrupoSelecionarTodos`]}))();export{g as Controlado,f as Desabilitado,m as DesabilitadoIndeterminado,p as DesabilitadoMarcado,v as GrupoSelecionarTodos,d as Indeterminado,u as Marcado,l as Padrão,h as SemLabel,_ as TodosOsEstados,y as __namedExportsOrder,c as default};