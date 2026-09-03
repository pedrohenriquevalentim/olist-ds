import{i as e}from"./preload-helper-CT_b8DTk.js";import{Y as t}from"./iframe-BwAwXKwU.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{r,t as i}from"./Icon-CzgBgX1X.js";import{n as a,t as o}from"./ButtonIcon-Bane-IHQ.js";var s,c,l,u,d,f,p;e((()=>{t(),a(),r(),s=n(),c={add:(0,s.jsx)(i,{name:`add`,size:16,color:`currentColor`}),cancel:(0,s.jsx)(i,{name:`cancel`,size:16,color:`currentColor`}),"arrow-right":(0,s.jsx)(i,{name:`arrow-right`,size:16,color:`currentColor`}),"arrow-down":(0,s.jsx)(i,{name:`arrow-down`,size:16,color:`currentColor`})},l={title:`Components/ButtonIcon`,component:o,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`],description:`Define a hierarquia visual do botão.`,table:{defaultValue:{summary:`primary`}}},icon:{control:{type:`select`},options:Object.keys(c),mapping:c,description:"Ícone exibido no centro do botão. Deve ser um SVG com `currentColor`."},disabled:{control:`boolean`,description:`Desabilita o botão impedindo interações.`,table:{defaultValue:{summary:`false`}}},onClick:{action:`clicado`,description:`Callback disparado ao clicar no botão.`}}},u={args:{variant:`primary`,icon:(0,s.jsx)(i,{name:`add`,size:16,color:`currentColor`}),"aria-label":`Adicionar`}},d={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,fontFamily:`"Plus Jakarta Sans", sans-serif`},children:[`primary`,`secondary`,`tertiary`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,s.jsx)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`,width:`72px`},children:e}),(0,s.jsx)(o,{variant:e,icon:(0,s.jsx)(i,{name:`add`,size:16,color:`currentColor`}),"aria-label":`Adicionar`}),(0,s.jsx)(o,{variant:e,icon:(0,s.jsx)(i,{name:`add`,size:16,color:`currentColor`}),"aria-label":`Adicionar (desabilitado)`,disabled:!0})]},e))}),parameters:{layout:`padded`,docs:{description:{story:`Todas as variantes (primary, secondary, tertiary) nos estados habilitado e desabilitado.`}}}},f={name:`Ícones`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,padding:`16px`},children:Object.entries(c).map(([e,t])=>(0,s.jsx)(o,{variant:`tertiary`,icon:t,"aria-label":e},e))}),parameters:{layout:`padded`,docs:{description:{story:`Exemplos de ícones disponíveis usados com a variante tertiary.`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Icon name="add" size={16} color="currentColor" />,
    'aria-label': 'Adicionar'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    fontFamily: '"Plus Jakarta Sans", sans-serif'
  }}>
      {(['primary', 'secondary', 'tertiary'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#8f8d85',
        width: '72px'
      }}>{variant}</span>
          <ButtonIcon variant={variant} icon={<Icon name="add" size={16} color="currentColor" />} aria-label="Adicionar" />
          <ButtonIcon variant={variant} icon={<Icon name="add" size={16} color="currentColor" />} aria-label="Adicionar (desabilitado)" disabled />
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todas as variantes (primary, secondary, tertiary) nos estados habilitado e desabilitado.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Ícones',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '16px'
  }}>
      {Object.entries(iconOptions).map(([name, icon]) => <ButtonIcon key={name} variant="tertiary" icon={icon} aria-label={name} />)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Exemplos de ícones disponíveis usados com a variante tertiary.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Variantes`,`Icones`]}))();export{f as Icones,u as Playground,d as Variantes,p as __namedExportsOrder,l as default};