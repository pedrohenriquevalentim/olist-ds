import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{n as r,r as i,t as a}from"./Icon-D6882k7c.js";var o=e({AllIcons:()=>u,Colors:()=>f,Playground:()=>l,Sizes:()=>d,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p,m=t((()=>{i(),s=n(),c={title:`Components/Icon`,component:a,parameters:{layout:`centered`},argTypes:{name:{control:`select`,options:r,description:"Nome do ícone (kebab-case). Sufixo `-fill` para variante preenchida."},size:{control:{type:`range`,min:12,max:64,step:4},description:`Tamanho em px (largura e altura).`},color:{control:`color`,description:`Cor do ícone (CSS color).`}}},l={args:{name:r[0],size:24}},u={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`24px`,padding:`24px`,fontFamily:`"Plus Jakarta Sans", system-ui, sans-serif`},children:r.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,padding:`16px`,border:`1px solid #e7e4da`,borderRadius:`8px`,background:`#fdfdfc`},children:[(0,s.jsx)(a,{name:e,size:32}),(0,s.jsx)(`span`,{style:{fontSize:`11px`,color:`#8f8d85`,textAlign:`center`,wordBreak:`break-word`,lineHeight:1.3},children:e})]},e))}),parameters:{layout:`fullscreen`}},d={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`},children:[16,20,24,32,48,64].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,s.jsx)(a,{name:r[0],size:e}),(0,s.jsxs)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`},children:[e,`px`]})]},e))})},f={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`},children:[`#2064F3`,`#54B6B6`,`#93B95B`,`#F0B356`,`#ED6E5A`,`#B95B95`].map(e=>(0,s.jsx)(a,{name:r[0],size:32,color:e},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: availableIcons[0],
    size: 24
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '24px',
    padding: '24px',
    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif'
  }}>
      {availableIcons.map(iconName => <div key={iconName} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      padding: '16px',
      border: '1px solid #e7e4da',
      borderRadius: '8px',
      background: '#fdfdfc'
    }}>
          <Icon name={iconName} size={32} />
          <span style={{
        fontSize: '11px',
        color: '#8f8d85',
        textAlign: 'center',
        wordBreak: 'break-word',
        lineHeight: 1.3
      }}>
            {iconName}
          </span>
        </div>)}
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  }}>
      {[16, 20, 24, 32, 48, 64].map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Icon name={availableIcons[0]} size={size} />
          <span style={{
        fontSize: '12px',
        color: '#8f8d85'
      }}>{size}px</span>
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  }}>
      {['#2064F3', '#54B6B6', '#93B95B', '#F0B356', '#ED6E5A', '#B95B95'].map(color => <Icon key={color} name={availableIcons[0]} size={32} color={color} />)}
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`AllIcons`,`Sizes`,`Colors`]}));m();export{u as AllIcons,f as Colors,l as Playground,d as Sizes,p as __namedExportsOrder,c as default,m as n,o as t};