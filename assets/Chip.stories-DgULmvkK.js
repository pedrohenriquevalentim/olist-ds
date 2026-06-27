import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-DXN-684X.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";var i,a,o,s,c=e((()=>{i=`_chip_1h7bl_7`,a=`_checkIcon_1h7bl_121`,o=`_label_1h7bl_143`,s={chip:i,checkIcon:a,label:o}})),l,u,d,f=e((()=>{n(),c(),l=r(),u=()=>(0,l.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,l.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M13.187 3.650a.5.5 0 010 .721L6.354 11.82a.5.5 0 01-.708 0L2.146 8.255a.5.5 0 01.708-.722L6 10.735l6.48-7.085a.5.5 0 01.708 0z`,fill:`currentColor`})}),d=({label:e,isSelected:t=!1,isDisabled:n=!1,onChange:r,className:i,onClick:a,...o})=>(0,l.jsxs)(`button`,{type:`button`,role:`checkbox`,"aria-checked":t,"aria-label":e,"aria-disabled":n,disabled:n,"data-selected":t?`true`:void 0,className:[s.chip,i].filter(Boolean).join(` `),onClick:e=>{n||(r?.(!t),a?.(e))},...o,children:[t&&(0,l.jsx)(`span`,{className:s.checkIcon,"aria-hidden":`true`,children:(0,l.jsx)(u,{})}),(0,l.jsx)(`span`,{className:s.label,children:e})]}),d.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{label:{required:!0,tsType:{name:`string`},description:``},isSelected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isSelected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isSelected`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})),p,m,h,g,_,v,y,b,x,S,C;e((()=>{p=t(n(),1),f(),m=r(),h={title:`Components/Chip`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Texto exibido no chip.`},isSelected:{control:`boolean`,description:`Define se o chip está selecionado (marcado).`,table:{defaultValue:{summary:`false`}}},isDisabled:{control:`boolean`,description:`Desabilita o chip, impedindo interações.`,table:{defaultValue:{summary:`false`}}},onChange:{action:`alterado`,description:`Callback disparado ao alternar o estado do chip. Recebe o novo valor booleano.`}}},g={name:`Padrão`,args:{label:`Categoria`,isSelected:!1}},_={name:`Selecionado`,args:{label:`Categoria`,isSelected:!0}},v={name:`Desabilitado`,args:{label:`Categoria`,isDisabled:!0},parameters:{docs:{description:{story:`Estado desabilitado. Bloqueia cliques e eventos de teclado.`}}}},y={name:`Desabilitado e selecionado`,args:{label:`Categoria`,isSelected:!0,isDisabled:!0}},b={name:`Interativo (com estado)`,render:()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsx)(d,{label:e?`Selecionado`:`Clique para selecionar`,isSelected:e,onChange:t})},parameters:{docs:{description:{story:`Exemplo com estado gerenciado pelo componente pai. Clique para alternar.`}}}},x={name:`Todos os estados`,render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`flex-start`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:`#827f73`,width:`140px`},children:`Habilitado`}),(0,m.jsx)(d,{label:`Placeholder text`})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:`#827f73`,width:`140px`},children:`Selecionado`}),(0,m.jsx)(d,{label:`Placeholder text`,isSelected:!0})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:`#827f73`,width:`140px`},children:`Desabilitado`}),(0,m.jsx)(d,{label:`Placeholder text`,isDisabled:!0})]})]}),parameters:{layout:`padded`,docs:{description:{story:`Visão consolidada dos três estados principais do chip.`}}}},S={name:`Grupo de filtros`,render:()=>{let e=[`Eletrônicos`,`Roupas`,`Casa`,`Esportes`,`Livros`],[t,n]=(0,p.useState)([`Eletrônicos`]),r=e=>{n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,m.jsx)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:e.map(e=>(0,m.jsx)(d,{label:e,isSelected:t.includes(e),onChange:()=>r(e)},e))})},parameters:{layout:`padded`,docs:{description:{story:`Caso de uso típico: grupo de chips para seleção múltipla de filtros.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Padrão',
  args: {
    label: 'Categoria',
    isSelected: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Selecionado',
  args: {
    label: 'Categoria',
    isSelected: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado',
  args: {
    label: 'Categoria',
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado. Bloqueia cliques e eventos de teclado.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado e selecionado',
  args: {
    label: 'Categoria',
    isSelected: true,
    isDisabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Interativo (com estado)',
  render: () => {
    const [selecionado, setSelecionado] = useState(false);
    return <Chip label={selecionado ? 'Selecionado' : 'Clique para selecionar'} isSelected={selecionado} onChange={setSelecionado} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo com estado gerenciado pelo componente pai. Clique para alternar.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Todos os estados',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#827f73',
        width: '140px'
      }}>Habilitado</span>
        <Chip label="Placeholder text" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#827f73',
        width: '140px'
      }}>Selecionado</span>
        <Chip label="Placeholder text" isSelected />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#827f73',
        width: '140px'
      }}>Desabilitado</span>
        <Chip label="Placeholder text" isDisabled />
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Visão consolidada dos três estados principais do chip.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Grupo de filtros',
  render: () => {
    const categorias = ['Eletrônicos', 'Roupas', 'Casa', 'Esportes', 'Livros'];
    const [selecionados, setSelecionados] = useState<string[]>(['Eletrônicos']);
    const toggle = (cat: string) => {
      setSelecionados(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    };
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {categorias.map(cat => <Chip key={cat} label={cat} isSelected={selecionados.includes(cat)} onChange={() => toggle(cat)} />)}
      </div>;
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Caso de uso típico: grupo de chips para seleção múltipla de filtros.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Padrão`,`Selecionado`,`Desabilitado`,`DesabilitadoSelecionado`,`Interativo`,`TodosOsEstados`,`GrupoDeFiltros`]}))();export{v as Desabilitado,y as DesabilitadoSelecionado,S as GrupoDeFiltros,b as Interativo,g as Padrão,_ as Selecionado,x as TodosOsEstados,C as __namedExportsOrder,h as default};