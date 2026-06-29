import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-_8twg3EU.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{r as i,t as a}from"./Icon-Bmt46ORM.js";var o,s,c,l,u,d,f,p=t((()=>{o=`_button_1j9l3_7`,s=`_primary_1j9l3_45`,c=`_secondary_1j9l3_77`,l=`_tertiary_1j9l3_107`,u=`_iconWrapper_1j9l3_131`,d=`_label_1j9l3_151`,f={button:o,primary:s,secondary:c,tertiary:l,iconWrapper:u,label:d}})),m,h,g=t((()=>{n(),p(),m=r(),h=({variant:e=`primary`,label:t,leadIcon:n,actionIcon:r,children:i,disabled:a=!1,className:o,...s})=>{let c=i??t;return(0,m.jsxs)(`button`,{className:[f.button,f[e],o].filter(Boolean).join(` `),disabled:a,...s,children:[n&&(0,m.jsx)(`span`,{className:f.iconWrapper,"aria-hidden":`true`,children:n}),c&&(0,m.jsx)(`span`,{className:f.label,children:c}),r&&(0,m.jsx)(`span`,{className:f.iconWrapper,"aria-hidden":`true`,children:r})]})},h.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},leadIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actionIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),_=e({Anatomia:()=>D,Icones:()=>O,Playground:()=>S,Variantes:()=>C,__namedExportsOrder:()=>k,default:()=>x});function v({n:e,category:t}){let{color:n}=T[t];return(0,y.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:18,height:18,borderRadius:`50%`,background:n,color:`#fff`,fontSize:10,fontWeight:700,fontFamily:w,flexShrink:0,userSelect:`none`},children:e})}var y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{n(),g(),i(),y=r(),b={Nenhum:void 0,add:(0,y.jsx)(a,{name:`add`,size:16,color:`currentColor`}),"arrow-right":(0,y.jsx)(a,{name:`arrow-right`,size:16,color:`currentColor`}),"arrow-down":(0,y.jsx)(a,{name:`arrow-down`,size:16,color:`currentColor`}),cancel:(0,y.jsx)(a,{name:`cancel`,size:16,color:`currentColor`})},x={title:`Components/Button`,component:h,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`],description:`Define a hierarquia visual do botão.`,table:{defaultValue:{summary:`primary`}}},label:{control:`text`,description:"Texto exibido no botão. Substituído por `children` quando fornecido."},disabled:{control:`boolean`,description:`Desabilita o botão impedindo interações.`,table:{defaultValue:{summary:`false`}}},leadIcon:{control:{type:`select`},options:Object.keys(b),mapping:b,description:"Ícone exibido à esquerda do rótulo. Deve ser um SVG com `currentColor`."},actionIcon:{control:{type:`select`},options:Object.keys(b),mapping:b,description:"Ícone exibido à direita do rótulo. Deve ser um SVG com `currentColor`."},onClick:{action:`clicado`,description:`Callback disparado ao clicar no botão.`},children:{table:{disable:!0}}}},S={args:{label:`Confirmar`,variant:`primary`}},C={render:()=>(0,y.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[`primary`,`secondary`,`tertiary`].map(e=>(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,y.jsx)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`,width:`72px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:e}),(0,y.jsx)(h,{variant:e,label:`Confirmar`,leadIcon:(0,y.jsx)(a,{name:`add`,size:16,color:`currentColor`})}),(0,y.jsx)(h,{variant:e,label:`Confirmar`,leadIcon:(0,y.jsx)(a,{name:`add`,size:16,color:`currentColor`}),disabled:!0}),(0,y.jsx)(h,{variant:e,label:`Confirmar`})]},e))}),parameters:{layout:`padded`,docs:{description:{story:`Todas as variantes (primary, secondary, tertiary) nos estados habilitado, desabilitado e sem ícone.`}}}},w=`"Plus Jakarta Sans", system-ui, sans-serif`,T={background:{color:`#2064F3`,label:`Background`},text:{color:`#ED6E5A`,label:`Texto`},shape:{color:`#B95B95`,label:`Shape`},spacing:{color:`#F0B356`,label:`Espaçamento`},typography:{color:`#54B6B6`,label:`Tipografia`}},E=[{n:1,category:`background`,token:`--button-color-primary-enabled`,value:`--color-background-enabled-full-brand`},{n:2,category:`text`,token:`--button-font-font-color-primary-enabled`,value:`--color-text-enabled-on-brand`},{n:3,category:`shape`,token:`--button-border-radius-pill`,value:`--shape-border-radius-pill-9999px`},{n:4,category:`spacing`,token:`--button-size-height`,value:`--shape-size-x4-32px`},{n:5,category:`spacing`,token:`--button-spacing-padding`,value:`--shape-spacing-x15-12px`},{n:6,category:`spacing`,token:`--button-spacing-gap`,value:`--shape-spacing-x05-4px`},{n:7,category:`typography`,token:`--button-font-size`,value:`--font-size-x15-12px`},{n:8,category:`typography`,token:`--button-font-weight`,value:`--font-weight-medium (500)`}],D={render:()=>(0,y.jsxs)(`div`,{style:{fontFamily:w,padding:`32px 24px`,maxWidth:720},children:[(0,y.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#f7f6f2`,borderRadius:12,padding:`40px 32px`,marginBottom:32},children:(0,y.jsxs)(`div`,{style:{position:`relative`,display:`inline-flex`},children:[(0,y.jsx)(h,{variant:`primary`,label:`Confirmar`,leadIcon:(0,y.jsx)(a,{name:`add`,size:16,color:`currentColor`})}),(0,y.jsx)(`span`,{style:{position:`absolute`,top:-10,right:-10},children:(0,y.jsx)(v,{n:1,category:`background`})}),(0,y.jsx)(`span`,{style:{position:`absolute`,top:`50%`,right:-10,transform:`translateY(-50%)`},children:(0,y.jsx)(v,{n:2,category:`text`})}),(0,y.jsx)(`span`,{style:{position:`absolute`,bottom:-10,right:-10},children:(0,y.jsx)(v,{n:3,category:`shape`})}),(0,y.jsx)(`span`,{style:{position:`absolute`,bottom:-10,left:-10},children:(0,y.jsx)(v,{n:4,category:`spacing`})}),(0,y.jsx)(`span`,{style:{position:`absolute`,top:-10,left:-10},children:(0,y.jsx)(v,{n:5,category:`spacing`})}),(0,y.jsx)(`span`,{style:{position:`absolute`,bottom:-24,left:`50%`,transform:`translateX(-50%)`},children:(0,y.jsx)(v,{n:6,category:`spacing`})})]})}),(0,y.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,marginBottom:20},children:Object.entries(T).map(([e,{color:t,label:n}])=>(0,y.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontSize:11,color:`#3e3e3d`,fontFamily:w},children:[(0,y.jsx)(`span`,{style:{width:10,height:10,borderRadius:`50%`,background:t,flexShrink:0}}),n]},e))}),(0,y.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:12},children:[(0,y.jsx)(`thead`,{children:(0,y.jsx)(`tr`,{style:{borderBottom:`2px solid #e7e4da`},children:[`#`,`Token de componente`,`Referência semântica`].map(e=>(0,y.jsx)(`th`,{style:{textAlign:`left`,padding:`6px 10px`,fontSize:10,fontWeight:700,color:`#8f8d85`,textTransform:`uppercase`,letterSpacing:`0.06em`,fontFamily:w},children:e},e))})}),(0,y.jsx)(`tbody`,{children:E.map(({n:e,category:t,token:n,value:r})=>(0,y.jsxs)(`tr`,{style:{borderBottom:`1px solid #f0ede4`},children:[(0,y.jsx)(`td`,{style:{padding:`8px 10px`,width:32},children:(0,y.jsx)(v,{n:e,category:t})}),(0,y.jsx)(`td`,{style:{padding:`8px 10px`},children:(0,y.jsx)(`code`,{style:{fontSize:11,background:`#f2f0e8`,color:`#120c10`,padding:`2px 6px`,borderRadius:4,fontFamily:`monospace`},children:n})}),(0,y.jsx)(`td`,{style:{padding:`8px 10px`,color:`#8f8d85`,fontFamily:`monospace`,fontSize:11},children:r})]},n))})]})]}),parameters:{layout:`padded`,docs:{description:{story:`Tokens CSS do Button primary. Badges numerados identificam cada parte do componente; a tabela mapeia token de componente → referência semântica.`}}}},O={name:`Ícones`,render:()=>(0,y.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[{label:`Lead icon`,leadIcon:(0,y.jsx)(a,{name:`add`,size:16,color:`currentColor`})},{label:`Action icon`,actionIcon:(0,y.jsx)(a,{name:`arrow-right`,size:16,color:`currentColor`})},{label:`Lead + action`,leadIcon:(0,y.jsx)(a,{name:`arrow-down`,size:16,color:`currentColor`}),actionIcon:(0,y.jsx)(a,{name:`arrow-right`,size:16,color:`currentColor`})},{label:`Sem ícone`}].map(({label:e,...t})=>(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,y.jsx)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`,width:`100px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:e}),(0,y.jsx)(h,{variant:`primary`,label:e,...t})]},e))}),parameters:{layout:`padded`}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Confirmar',
    variant: 'primary'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      {(['primary', 'secondary', 'tertiary'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#8f8d85',
        width: '72px',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>
            {variant}
          </span>
          <Button variant={variant} label="Confirmar" leadIcon={<Icon name="add" size={16} color="currentColor" />} />
          <Button variant={variant} label="Confirmar" leadIcon={<Icon name="add" size={16} color="currentColor" />} disabled />
          <Button variant={variant} label="Confirmar" />
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todas as variantes (primary, secondary, tertiary) nos estados habilitado, desabilitado e sem ícone.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: FONT,
    padding: '32px 24px',
    maxWidth: 720
  }}>

      {/* ---- diagrama: botão com badges sobrepostos ---- */}
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f7f6f2',
      borderRadius: 12,
      padding: '40px 32px',
      marginBottom: 32
    }}>
        <div style={{
        position: 'relative',
        display: 'inline-flex'
      }}>
          <Button variant="primary" label="Confirmar" leadIcon={<Icon name="add" size={16} color="currentColor" />} />

          {/* 1 — background (topo-direita) */}
          <span style={{
          position: 'absolute',
          top: -10,
          right: -10
        }}>
            <Badge n={1} category="background" />
          </span>

          {/* 2 — text color (centro-direita) */}
          <span style={{
          position: 'absolute',
          top: '50%',
          right: -10,
          transform: 'translateY(-50%)'
        }}>
            <Badge n={2} category="text" />
          </span>

          {/* 3 — border-radius (baixo-direita) */}
          <span style={{
          position: 'absolute',
          bottom: -10,
          right: -10
        }}>
            <Badge n={3} category="shape" />
          </span>

          {/* 4 — height (baixo-esquerda) */}
          <span style={{
          position: 'absolute',
          bottom: -10,
          left: -10
        }}>
            <Badge n={4} category="spacing" />
          </span>

          {/* 5 — padding (topo-esquerda) */}
          <span style={{
          position: 'absolute',
          top: -10,
          left: -10
        }}>
            <Badge n={5} category="spacing" />
          </span>

          {/* 6 — gap (centro, abaixo) */}
          <span style={{
          position: 'absolute',
          bottom: -24,
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
            <Badge n={6} category="spacing" />
          </span>
        </div>
      </div>

      {/* ---- categorias ---- */}
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 20
    }}>
        {Object.entries(CATEGORIES).map(([key, {
        color,
        label
      }]) => <span key={key} style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 11,
        color: '#3e3e3d',
        fontFamily: FONT
      }}>
            <span style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: color,
          flexShrink: 0
        }} />
            {label}
          </span>)}
      </div>

      {/* ---- tabela de tokens ---- */}
      <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #e7e4da'
        }}>
            {['#', 'Token de componente', 'Referência semântica'].map(h => <th key={h} style={{
            textAlign: 'left',
            padding: '6px 10px',
            fontSize: 10,
            fontWeight: 700,
            color: '#8f8d85',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontFamily: FONT
          }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {TOKENS.map(({
          n,
          category,
          token,
          value
        }) => <tr key={token} style={{
          borderBottom: '1px solid #f0ede4'
        }}>
              <td style={{
            padding: '8px 10px',
            width: 32
          }}>
                <Badge n={n} category={category} />
              </td>
              <td style={{
            padding: '8px 10px'
          }}>
                <code style={{
              fontSize: 11,
              background: '#f2f0e8',
              color: '#120c10',
              padding: '2px 6px',
              borderRadius: 4,
              fontFamily: 'monospace'
            }}>
                  {token}
                </code>
              </td>
              <td style={{
            padding: '8px 10px',
            color: '#8f8d85',
            fontFamily: 'monospace',
            fontSize: 11
          }}>
                {value}
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Tokens CSS do Button primary. Badges numerados identificam cada parte do componente; a tabela mapeia token de componente → referência semântica.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Ícones',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {[{
      label: 'Lead icon',
      leadIcon: <Icon name="add" size={16} color="currentColor" />
    }, {
      label: 'Action icon',
      actionIcon: <Icon name="arrow-right" size={16} color="currentColor" />
    }, {
      label: 'Lead + action',
      leadIcon: <Icon name="arrow-down" size={16} color="currentColor" />,
      actionIcon: <Icon name="arrow-right" size={16} color="currentColor" />
    }, {
      label: 'Sem ícone'
    }].map(({
      label,
      ...props
    }) => <div key={label} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#8f8d85',
        width: '100px',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>{label}</span>
          <Button variant="primary" label={label} {...props} />
        </div>)}
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`Variantes`,`Anatomia`,`Icones`]}));A();export{D as Anatomia,O as Icones,S as Playground,C as Variantes,k as __namedExportsOrder,x as default,A as n,_ as t};