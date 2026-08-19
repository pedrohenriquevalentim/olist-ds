import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-BuoKzIWo.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ProdutosOlistIcons-DQEuh_Gi.js";var o=e({AtivoComGradiente:()=>f,ComparacaoTemas:()=>b,Playground:()=>d,TemaClaro:()=>p,TodosOsProdutos:()=>v,TodosOsProdutosLight:()=>y,__namedExportsOrder:()=>x,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{n(),i(),s=r(),c=[(e,t)=>(0,s.jsx)(`div`,{style:{padding:24,borderRadius:8,background:t.args.theme===`dark`?`#1c1c1c`:`#f2f0e8`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,transition:`background 0.2s ease`},children:(0,s.jsx)(e,{})})],l=[`Conta Digital`,`Crédito`,`Agentes de IA`,`Ecommerce`,`Sistema ERP`,`Envios`,`Sistema PDV`,`Hub de Integração`],u={title:`Components/ProdutosOlistIcons`,component:a,decorators:c,parameters:{layout:`centered`},argTypes:{product:{control:`select`,options:l,description:`Produto Olist representado pelo ícone.`},state:{control:`radio`,options:[`default`,`active`],description:`Estado do ícone. "active" exibe o gradiente azul→teal no tema dark (estado ativo/hover no menu).`,table:{defaultValue:{summary:`default`}}},theme:{control:`radio`,options:[`dark`,`light`],description:`Tema de cor. "dark" é usado na sidebar escura; "light" em fundos claros.`,table:{defaultValue:{summary:`dark`}}},"aria-label":{control:`text`,description:`Rótulo acessível customizado. Por padrão usa o nome do produto.`}}},d={args:{product:`Conta Digital`,state:`default`,theme:`dark`}},f={name:`Ativo com gradiente (dark)`,args:{product:`Conta Digital`,state:`active`,theme:`dark`},parameters:{docs:{description:{story:`Estado ativo no tema dark. Exibe o gradiente azul (#0a4ee4) → teal (#8dd7d7) na pílula.`}}}},p={name:`Tema claro`,args:{product:`Conta Digital`,state:`default`,theme:`light`}},m={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},h={fontSize:10,color:`#827f73`,textAlign:`center`},g={fontSize:10,color:`#fff`,width:80,textAlign:`right`,paddingRight:8,fontFamily:`Plus Jakarta Sans, sans-serif`},_={...g,color:`#615f56`},v={name:`Todos os produtos — dark`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:24,background:`#1c1c1c`,borderRadius:12},children:[(0,s.jsx)(`div`,{style:{display:`flex`,gap:8,marginLeft:96},children:[`default`,`active`].map(e=>(0,s.jsx)(`div`,{style:{...m,width:36},children:(0,s.jsx)(`span`,{style:h,children:e})},e))}),l.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,s.jsx)(`span`,{style:g,children:e}),[`default`,`active`].map(t=>(0,s.jsx)(a,{product:e,state:t,theme:`dark`},t))]},e))]}),parameters:{layout:`padded`,docs:{description:{story:`Todos os produtos Olist nos estados default e active no tema dark.`}}}},y={name:`Todos os produtos — light`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:24,background:`#f2f0e8`,borderRadius:12},children:[(0,s.jsx)(`div`,{style:{display:`flex`,gap:8,marginLeft:96},children:[`default`,`active`].map(e=>(0,s.jsx)(`div`,{style:{...m,width:36},children:(0,s.jsx)(`span`,{style:{...h,color:`#827f73`},children:e})},e))}),l.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,s.jsx)(`span`,{style:_,children:e}),[`default`,`active`].map(t=>(0,s.jsx)(a,{product:e,state:t,theme:`light`},t))]},e))]}),parameters:{layout:`padded`,docs:{description:{story:`Todos os produtos Olist nos estados default e active no tema light.`}}}},b={name:`Comparação dark vs light`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,s.jsxs)(`div`,{style:{background:`#1c1c1c`,borderRadius:12,padding:16,display:`flex`,flexDirection:`column`,gap:8},children:[(0,s.jsx)(`span`,{style:{color:`#827f73`,fontSize:11,marginBottom:4},children:`Dark`}),l.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,s.jsx)(a,{product:e,state:`default`,theme:`dark`}),(0,s.jsx)(a,{product:e,state:`active`,theme:`dark`})]},e))]}),(0,s.jsxs)(`div`,{style:{background:`#f2f0e8`,borderRadius:12,padding:16,display:`flex`,flexDirection:`column`,gap:8},children:[(0,s.jsx)(`span`,{style:{color:`#827f73`,fontSize:11,marginBottom:4},children:`Light`}),l.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,s.jsx)(a,{product:e,state:`default`,theme:`light`}),(0,s.jsx)(a,{product:e,state:`active`,theme:`light`})]},e))]})]}),parameters:{layout:`padded`,docs:{description:{story:`Comparação lado a lado dos 8 produtos nos dois temas (dark e light), estados default e active.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    product: 'Conta Digital',
    state: 'default',
    theme: 'dark'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Ativo com gradiente (dark)',
  args: {
    product: 'Conta Digital',
    state: 'active',
    theme: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado ativo no tema dark. Exibe o gradiente azul (#0a4ee4) → teal (#8dd7d7) na pílula.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Tema claro',
  args: {
    product: 'Conta Digital',
    state: 'default',
    theme: 'light'
  }
}`,...p.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Todos os produtos — dark',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 24,
    background: '#1c1c1c',
    borderRadius: 12
  }}>
      <div style={{
      display: 'flex',
      gap: 8,
      marginLeft: 96
    }}>
        {(['default', 'active'] as const).map(s => <div key={s} style={{
        ...COL_STYLE,
        width: 36
      }}>
            <span style={LABEL_STYLE}>{s}</span>
          </div>)}
      </div>
      {TODOS_OS_PRODUTOS.map(product => <div key={product} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
          <span style={PRODUCT_LABEL_STYLE}>{product}</span>
          {(['default', 'active'] as const).map(s => <ProdutosOlistIcons key={s} product={product} state={s} theme="dark" />)}
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todos os produtos Olist nos estados default e active no tema dark.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Todos os produtos — light',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 24,
    background: '#f2f0e8',
    borderRadius: 12
  }}>
      <div style={{
      display: 'flex',
      gap: 8,
      marginLeft: 96
    }}>
        {(['default', 'active'] as const).map(s => <div key={s} style={{
        ...COL_STYLE,
        width: 36
      }}>
            <span style={{
          ...LABEL_STYLE,
          color: '#827f73'
        }}>{s}</span>
          </div>)}
      </div>
      {TODOS_OS_PRODUTOS.map(product => <div key={product} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
          <span style={PRODUCT_LABEL_LIGHT_STYLE}>{product}</span>
          {(['default', 'active'] as const).map(s => <ProdutosOlistIcons key={s} product={product} state={s} theme="light" />)}
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todos os produtos Olist nos estados default e active no tema light.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Comparação dark vs light',
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <div style={{
      background: '#1c1c1c',
      borderRadius: 12,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={{
        color: '#827f73',
        fontSize: 11,
        marginBottom: 4
      }}>Dark</span>
        {TODOS_OS_PRODUTOS.map(p => <div key={p} style={{
        display: 'flex',
        gap: 8
      }}>
            <ProdutosOlistIcons product={p} state="default" theme="dark" />
            <ProdutosOlistIcons product={p} state="active" theme="dark" />
          </div>)}
      </div>
      <div style={{
      background: '#f2f0e8',
      borderRadius: 12,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={{
        color: '#827f73',
        fontSize: 11,
        marginBottom: 4
      }}>Light</span>
        {TODOS_OS_PRODUTOS.map(p => <div key={p} style={{
        display: 'flex',
        gap: 8
      }}>
            <ProdutosOlistIcons product={p} state="default" theme="light" />
            <ProdutosOlistIcons product={p} state="active" theme="light" />
          </div>)}
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparação lado a lado dos 8 produtos nos dois temas (dark e light), estados default e active.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`AtivoComGradiente`,`TemaClaro`,`TodosOsProdutos`,`TodosOsProdutosLight`,`ComparacaoTemas`]}));S();export{f as AtivoComGradiente,b as ComparacaoTemas,d as Playground,p as TemaClaro,v as TodosOsProdutos,y as TodosOsProdutosLight,x as __namedExportsOrder,u as default,S as n,o as t};