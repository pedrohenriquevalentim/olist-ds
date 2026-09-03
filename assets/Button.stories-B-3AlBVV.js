import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-BwAwXKwU.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./Button-Ea9x2esp.js";import{r as o,t as s}from"./Icon-CzgBgX1X.js";var c=e({Anatomia:()=>y,Icones:()=>b,Playground:()=>p,Tamanhos:()=>m,Variantes:()=>h,__namedExportsOrder:()=>x,default:()=>f});function l({n:e,category:t}){let{color:n}=_[t];return(0,u.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:18,height:18,borderRadius:`50%`,background:n,color:`#fff`,fontSize:10,fontWeight:700,fontFamily:g,flexShrink:0,userSelect:`none`},children:e})}var u,d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{n(),i(),o(),u=r(),d={Nenhum:void 0,add:(0,u.jsx)(s,{name:`add`,size:16,color:`currentColor`}),"arrow-right":(0,u.jsx)(s,{name:`arrow-right`,size:16,color:`currentColor`}),"arrow-down":(0,u.jsx)(s,{name:`arrow-down`,size:16,color:`currentColor`}),cancel:(0,u.jsx)(s,{name:`cancel`,size:16,color:`currentColor`})},f={title:`Components/Button`,component:a,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`],description:`Define a hierarquia visual do botão.`,table:{defaultValue:{summary:`primary`}}},size:{control:`select`,options:[`big`,`medium`,`small`],description:`Define o tamanho do botão (altura, padding e tipografia).`,table:{defaultValue:{summary:`big`}}},label:{control:`text`,description:"Texto exibido no botão. Substituído por `children` quando fornecido."},disabled:{control:`boolean`,description:`Desabilita o botão impedindo interações.`,table:{defaultValue:{summary:`false`}}},leadIcon:{control:{type:`select`},options:Object.keys(d),mapping:d,description:"Ícone exibido à esquerda do rótulo. Deve ser um SVG com `currentColor`."},actionIcon:{control:{type:`select`},options:Object.keys(d),mapping:d,description:"Ícone exibido à direita do rótulo. Deve ser um SVG com `currentColor`."},onClick:{action:`clicado`,description:`Callback disparado ao clicar no botão.`},children:{table:{disable:!0}}}},p={args:{label:`Confirmar`,variant:`primary`,size:`big`}},m={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[`big`,`medium`,`small`].map(e=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,u.jsx)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`,width:`60px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:e}),(0,u.jsx)(a,{size:e,label:`Confirmar`,leadIcon:(0,u.jsx)(s,{name:`add`,size:e===`small`?12:16,color:`currentColor`})}),(0,u.jsx)(a,{size:e,variant:`secondary`,label:`Confirmar`}),(0,u.jsx)(a,{size:e,variant:`tertiary`,label:`Confirmar`})]},e))}),parameters:{layout:`padded`,docs:{description:{story:`Comparação dos três tamanhos (big 48px, medium 40px, small 32px) nas variantes primary, secondary e tertiary.`}}}},h={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[`primary`,`secondary`,`tertiary`].map(e=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,u.jsx)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`,width:`72px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:e}),(0,u.jsx)(a,{variant:e,label:`Confirmar`,leadIcon:(0,u.jsx)(s,{name:`add`,size:16,color:`currentColor`})}),(0,u.jsx)(a,{variant:e,label:`Confirmar`,leadIcon:(0,u.jsx)(s,{name:`add`,size:16,color:`currentColor`}),disabled:!0}),(0,u.jsx)(a,{variant:e,label:`Confirmar`})]},e))}),parameters:{layout:`padded`,docs:{description:{story:`Todas as variantes (primary, secondary, tertiary) nos estados habilitado, desabilitado e sem ícone.`}}}},g=`"Plus Jakarta Sans", system-ui, sans-serif`,_={background:{color:`#2064F3`,label:`Background`},text:{color:`#ED6E5A`,label:`Texto`},shape:{color:`#B95B95`,label:`Shape`},spacing:{color:`#F0B356`,label:`Espaçamento`},typography:{color:`#54B6B6`,label:`Tipografia`}},v=[{n:1,category:`background`,token:`--button-color-primary-enabled`,value:`--color-background-enabled-full-brand`},{n:2,category:`text`,token:`--button-font-font-color-primary-enabled`,value:`--color-text-enabled-on-brand`},{n:3,category:`shape`,token:`--button-border-radius-pill`,value:`--shape-border-radius-pill-9999px`},{n:4,category:`spacing`,token:`--button-size-height`,value:`--shape-size-x6-48px`},{n:5,category:`spacing`,token:`--button-spacing-padding`,value:`--shape-spacing-x2-16px`},{n:6,category:`spacing`,token:`--button-spacing-gap`,value:`--shape-spacing-x1-8px`},{n:7,category:`typography`,token:`--button-font-size`,value:`--font-size-x175-14px`},{n:8,category:`typography`,token:`--button-font-weight`,value:`--font-weight-medium (500)`}],y={render:()=>(0,u.jsxs)(`div`,{style:{fontFamily:g,padding:`32px 24px`,maxWidth:720},children:[(0,u.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#f7f6f2`,borderRadius:12,padding:`40px 32px`,marginBottom:32},children:(0,u.jsxs)(`div`,{style:{position:`relative`,display:`inline-flex`},children:[(0,u.jsx)(a,{variant:`primary`,label:`Confirmar`,leadIcon:(0,u.jsx)(s,{name:`add`,size:16,color:`currentColor`})}),(0,u.jsx)(`span`,{style:{position:`absolute`,top:-10,right:-10},children:(0,u.jsx)(l,{n:1,category:`background`})}),(0,u.jsx)(`span`,{style:{position:`absolute`,top:`50%`,right:-10,transform:`translateY(-50%)`},children:(0,u.jsx)(l,{n:2,category:`text`})}),(0,u.jsx)(`span`,{style:{position:`absolute`,bottom:-10,right:-10},children:(0,u.jsx)(l,{n:3,category:`shape`})}),(0,u.jsx)(`span`,{style:{position:`absolute`,bottom:-10,left:-10},children:(0,u.jsx)(l,{n:4,category:`spacing`})}),(0,u.jsx)(`span`,{style:{position:`absolute`,top:-10,left:-10},children:(0,u.jsx)(l,{n:5,category:`spacing`})}),(0,u.jsx)(`span`,{style:{position:`absolute`,bottom:-24,left:`50%`,transform:`translateX(-50%)`},children:(0,u.jsx)(l,{n:6,category:`spacing`})})]})}),(0,u.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,marginBottom:20},children:Object.entries(_).map(([e,{color:t,label:n}])=>(0,u.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontSize:11,color:`#3e3e3d`,fontFamily:g},children:[(0,u.jsx)(`span`,{style:{width:10,height:10,borderRadius:`50%`,background:t,flexShrink:0}}),n]},e))}),(0,u.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:12},children:[(0,u.jsx)(`thead`,{children:(0,u.jsx)(`tr`,{style:{borderBottom:`2px solid #e7e4da`},children:[`#`,`Token de componente`,`Referência semântica`].map(e=>(0,u.jsx)(`th`,{style:{textAlign:`left`,padding:`6px 10px`,fontSize:10,fontWeight:700,color:`#8f8d85`,textTransform:`uppercase`,letterSpacing:`0.06em`,fontFamily:g},children:e},e))})}),(0,u.jsx)(`tbody`,{children:v.map(({n:e,category:t,token:n,value:r})=>(0,u.jsxs)(`tr`,{style:{borderBottom:`1px solid #f0ede4`},children:[(0,u.jsx)(`td`,{style:{padding:`8px 10px`,width:32},children:(0,u.jsx)(l,{n:e,category:t})}),(0,u.jsx)(`td`,{style:{padding:`8px 10px`},children:(0,u.jsx)(`code`,{style:{fontSize:11,background:`#f2f0e8`,color:`#120c10`,padding:`2px 6px`,borderRadius:4,fontFamily:`monospace`},children:n})}),(0,u.jsx)(`td`,{style:{padding:`8px 10px`,color:`#8f8d85`,fontFamily:`monospace`,fontSize:11},children:r})]},n))})]})]}),parameters:{layout:`padded`,docs:{description:{story:`Tokens CSS do Button primary. Badges numerados identificam cada parte do componente; a tabela mapeia token de componente → referência semântica.`}}}},b={name:`Ícones`,render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[{label:`Lead icon`,leadIcon:(0,u.jsx)(s,{name:`add`,size:16,color:`currentColor`})},{label:`Action icon`,actionIcon:(0,u.jsx)(s,{name:`arrow-right`,size:16,color:`currentColor`})},{label:`Lead + action`,leadIcon:(0,u.jsx)(s,{name:`arrow-down`,size:16,color:`currentColor`}),actionIcon:(0,u.jsx)(s,{name:`arrow-right`,size:16,color:`currentColor`})},{label:`Sem ícone`}].map(({label:e,...t})=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,u.jsx)(`span`,{style:{fontSize:`12px`,color:`#8f8d85`,width:`100px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:e}),(0,u.jsx)(a,{variant:`primary`,label:e,...t})]},e))}),parameters:{layout:`padded`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Confirmar',
    variant: 'primary',
    size: 'big'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      {(['big', 'medium', 'small'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#8f8d85',
        width: '60px',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>
            {size}
          </span>
          <Button size={size} label="Confirmar" leadIcon={<Icon name="add" size={size === 'small' ? 12 : 16} color="currentColor" />} />
          <Button size={size} variant="secondary" label="Confirmar" />
          <Button size={size} variant="tertiary" label="Confirmar" />
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparação dos três tamanhos (big 48px, medium 40px, small 32px) nas variantes primary, secondary e tertiary.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Tamanhos`,`Variantes`,`Anatomia`,`Icones`]}));S();export{y as Anatomia,b as Icones,p as Playground,m as Tamanhos,h as Variantes,x as __namedExportsOrder,f as default,S as n,c as t};