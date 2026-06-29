import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{Y as r}from"./iframe-_8twg3EU.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{r as a,t as o}from"./Icon-Bmt46ORM.js";var s,c,l,u,d=t((()=>{s=`_chip_1h7bl_7`,c=`_checkIcon_1h7bl_121`,l=`_label_1h7bl_143`,u={chip:s,checkIcon:c,label:l}})),f,p,m=t((()=>{r(),d(),a(),f=i(),p=({label:e,isSelected:t=!1,isDisabled:n=!1,onChange:r,className:i,onClick:a,...s})=>(0,f.jsxs)(`button`,{type:`button`,role:`checkbox`,"aria-checked":t,"aria-label":e,"aria-disabled":n,disabled:n,"data-selected":t?`true`:void 0,className:[u.chip,i].filter(Boolean).join(` `),onClick:e=>{n||(r?.(!t),a?.(e))},...s,children:[t&&(0,f.jsx)(`span`,{className:u.checkIcon,"aria-hidden":`true`,children:(0,f.jsx)(o,{name:`check`,size:16,color:`currentColor`})}),(0,f.jsx)(`span`,{className:u.label,children:e})]}),p.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{label:{required:!0,tsType:{name:`string`},description:``},isSelected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isSelected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isSelected`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})),h=e({Estados:()=>b,GrupoDeFiltros:()=>x,Playground:()=>y,__namedExportsOrder:()=>S,default:()=>v}),g,_,v,y,b,x,S,C=t((()=>{g=n(r(),1),m(),_=i(),v={title:`Components/Chip`,component:p,parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`Texto exibido no chip.`},isSelected:{control:`boolean`,description:`Define se o chip está selecionado (marcado).`,table:{defaultValue:{summary:`false`}}},isDisabled:{control:`boolean`,description:`Desabilita o chip, impedindo interações.`,table:{defaultValue:{summary:`false`}}},onChange:{action:`alterado`,description:`Callback disparado ao alternar o estado do chip. Recebe o novo valor booleano.`}}},y={args:{label:`Categoria`}},b={render:()=>(0,_.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`flex-start`},children:[{label:`Habilitado`,props:{}},{label:`Selecionado`,props:{isSelected:!0}},{label:`Desabilitado`,props:{isDisabled:!0}},{label:`Desabilitado + selecionado`,props:{isSelected:!0,isDisabled:!0}}].map(({label:e,props:t})=>(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,_.jsx)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`,width:`168px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:e}),(0,_.jsx)(p,{label:`Placeholder text`,...t})]},e))}),parameters:{layout:`padded`}},x={name:`Grupo de filtros`,render:()=>{let e=[`Eletrônicos`,`Roupas`,`Casa`,`Esportes`,`Livros`],[t,n]=(0,g.useState)([`Eletrônicos`]),r=e=>{n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,_.jsx)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:e.map(e=>(0,_.jsx)(p,{label:e,isSelected:t.includes(e),onChange:()=>r(e)},e))})},parameters:{layout:`padded`,docs:{description:{story:`Caso de uso típico: grupo de chips para seleção múltipla de filtros.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Categoria'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      {[{
      label: 'Habilitado',
      props: {}
    }, {
      label: 'Selecionado',
      props: {
        isSelected: true
      }
    }, {
      label: 'Desabilitado',
      props: {
        isDisabled: true
      }
    }, {
      label: 'Desabilitado + selecionado',
      props: {
        isSelected: true,
        isDisabled: true
      }
    }].map(({
      label,
      props
    }) => <div key={label} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#8f8d85',
        width: '168px',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>{label}</span>
          <Chip label="Placeholder text" {...props} />
        </div>)}
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Estados`,`GrupoDeFiltros`]}));C();export{b as Estados,x as GrupoDeFiltros,y as Playground,S as __namedExportsOrder,v as default,C as n,h as t};