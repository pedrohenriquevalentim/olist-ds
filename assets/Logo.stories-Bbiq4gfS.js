import{i as e}from"./preload-helper-CT_b8DTk.js";import{Y as t}from"./iframe-DXN-684X.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";var r,i,a,o,s,c,l,u,d,f,p,m,h=e((()=>{r=`_logo_hj923_7`,i=`_simple_hj923_27`,a=`_symbol_hj923_35`,o=`_inner_hj923_49`,s=`_fullInner_hj923_57`,c=`_squareInner_hj923_62`,l=`_toggleWrapper_hj923_78`,u=`_wordmarkWrapper_hj923_88`,d=`_circleWrapper_hj923_97`,f=`_symbolWrapper_hj923_106`,p=`_asset_hj923_119`,m={logo:r,default:`_default_hj923_19`,simple:i,symbol:a,inner:o,fullInner:s,squareInner:c,toggleWrapper:l,wordmarkWrapper:u,circleWrapper:d,symbolWrapper:f,asset:p}})),g,_,v,y=e((()=>{t(),h(),g=n(),_={default:{toggle:`https://www.figma.com/api/mcp/asset/88ed73b1-739b-4c5b-8324-5d845c8e609d`,circle:`https://www.figma.com/api/mcp/asset/b1744796-008f-4d3c-8b1a-6727e9ec10a4`,wordmark:`https://www.figma.com/api/mcp/asset/4762f43a-ab33-4a5a-93bc-f969ecf839ff`},simple:{toggle:`https://www.figma.com/api/mcp/asset/bf4e94b6-6b76-425b-8e87-00a300d0f8ce`,wordmark:`https://www.figma.com/api/mcp/asset/1cc37aa2-026e-4df8-bdf8-1cbb24c82550`},symbol:{toggle:`https://www.figma.com/api/mcp/asset/ffb39bed-c2bf-4e59-a694-d9fac1143cb4`,circle:`https://www.figma.com/api/mcp/asset/36ccb7a0-59de-42ec-9108-9d6fbc067285`}},v=({size:e=`default`,className:t,"aria-label":n=`Logo Olist`,...r})=>{let i=e===`symbol`;return(0,g.jsx)(`div`,{role:`img`,"aria-label":n,className:[m.logo,m[e],t].filter(Boolean).join(` `),...r,children:(0,g.jsxs)(`div`,{className:[m.inner,i?m.squareInner:m.fullInner].join(` `),children:[!i&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:m.toggleWrapper,children:[(0,g.jsx)(`img`,{alt:``,className:m.asset,src:e==="default"?_.default.toggle:_.simple.toggle}),e==="default"&&(0,g.jsx)(`div`,{className:m.circleWrapper,children:(0,g.jsx)(`img`,{alt:``,className:m.asset,src:_.default.circle})})]}),(0,g.jsx)(`div`,{className:m.wordmarkWrapper,children:(0,g.jsx)(`img`,{alt:``,className:m.asset,src:e==="default"?_.default.wordmark:_.simple.wordmark})})]}),i&&(0,g.jsxs)(`div`,{className:m.symbolWrapper,children:[(0,g.jsx)(`img`,{alt:``,className:m.asset,src:_.symbol.toggle}),(0,g.jsx)(`div`,{className:m.circleWrapper,children:(0,g.jsx)(`img`,{alt:``,className:m.asset,src:_.symbol.circle})})]})]})})},v.__docgenInfo={description:``,methods:[],displayName:`Logo`,props:{size:{required:!1,tsType:{name:`union`,raw:`'default' | 'simple' | 'symbol'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'simple'`},{name:`literal`,value:`'symbol'`}]},description:`Variante de tamanho do logo.`,defaultValue:{value:`'default'`,computed:!1}},"aria-label":{defaultValue:{value:`'Logo Olist'`,computed:!1},required:!1}}}})),b,x,S,C,w,T,E,D,O;e((()=>{y(),b=n(),x={title:`Components/Logo`,component:v,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`default`,`simple`,`symbol`],description:`
        Variante de tamanho do logo Olist:
        - **default** — logo completo com círculo laranja (160px mín.)
        - **simple** — logo sem o círculo, redimensionável entre 80–152px
        - **symbol** — apenas o ícone do toggle (16–48px, quadrado)
      `,table:{defaultValue:{summary:`default`}}},"aria-label":{control:`text`,description:`Rótulo acessível para leitores de tela.`,table:{defaultValue:{summary:`Logo Olist`}}},className:{table:{disable:!0}}}},S={name:`Padrão (default)`,args:{size:`default`}},C={name:`Simples (simple)`,args:{size:`simple`},parameters:{docs:{description:{story:`Versão sem o círculo laranja. Redimensionável entre 80px e 152px de largura.`}}}},w={name:`Símbolo (symbol)`,args:{size:`symbol`},parameters:{docs:{description:{story:`Apenas o ícone do toggle. Ideal para favicons, avatares ou espaços reduzidos.`}}}},T={name:`Todas as variantes`,render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`40px`,padding:`32px`,background:`#f2f0e8`,borderRadius:`8px`,flexWrap:`wrap`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,b.jsx)(v,{size:`default`}),(0,b.jsx)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:`default`})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,b.jsx)(v,{size:`simple`}),(0,b.jsx)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:`simple`})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,b.jsx)(v,{size:`symbol`}),(0,b.jsx)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:`symbol`})]})]}),parameters:{layout:`padded`,docs:{description:{story:`Todas as três variantes lado a lado para comparação.`}}}},E={name:`Sobre fundo escuro`,render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`,padding:`32px`,background:`#001647`,borderRadius:`8px`,flexWrap:`wrap`},children:[(0,b.jsx)(v,{size:`default`,"aria-label":`Logo Olist — fundo escuro`}),(0,b.jsx)(v,{size:`simple`,"aria-label":`Logo Olist simples — fundo escuro`}),(0,b.jsx)(v,{size:`symbol`,"aria-label":`Símbolo Olist — fundo escuro`})]}),parameters:{layout:`padded`,docs:{description:{story:`Exibe as variantes sobre fundo navy para verificar contraste. Nota: os assets podem precisar de versões invertidas para fundos escuros.`}}}},D={name:`Símbolo em múltiplos tamanhos`,render:()=>(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:`24px`,padding:`16px`},children:[16,24,32,40,48].map(e=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,b.jsx)(v,{size:`symbol`,"aria-label":`Símbolo Olist ${e}px`,style:{width:e,height:e,minWidth:e,minHeight:e,maxWidth:e,maxHeight:e}}),(0,b.jsxs)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:[e,`px`]})]},e))}),parameters:{layout:`padded`,docs:{description:{story:"O símbolo escala de 16px (mínimo) a 48px (máximo padrão). É possível sobrescrever via `style`."}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Padrão (default)',
  args: {
    size: 'default'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Simples (simple)',
  args: {
    size: 'simple'
  },
  parameters: {
    docs: {
      description: {
        story: 'Versão sem o círculo laranja. Redimensionável entre 80px e 152px de largura.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Símbolo (symbol)',
  args: {
    size: 'symbol'
  },
  parameters: {
    docs: {
      description: {
        story: 'Apenas o ícone do toggle. Ideal para favicons, avatares ou espaços reduzidos.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Todas as variantes',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    padding: '32px',
    background: '#f2f0e8',
    borderRadius: '8px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    }}>
        <Logo size="default" />
        <span style={{
        fontSize: '11px',
        color: '#827f73',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>default</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    }}>
        <Logo size="simple" />
        <span style={{
        fontSize: '11px',
        color: '#827f73',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>simple</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    }}>
        <Logo size="symbol" />
        <span style={{
        fontSize: '11px',
        color: '#827f73',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>symbol</span>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todas as três variantes lado a lado para comparação.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Sobre fundo escuro',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    padding: '32px',
    background: '#001647',
    borderRadius: '8px',
    flexWrap: 'wrap'
  }}>
      <Logo size="default" aria-label="Logo Olist — fundo escuro" />
      <Logo size="simple" aria-label="Logo Olist simples — fundo escuro" />
      <Logo size="symbol" aria-label="Símbolo Olist — fundo escuro" />
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Exibe as variantes sobre fundo navy para verificar contraste. Nota: os assets podem precisar de versões invertidas para fundos escuros.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Símbolo em múltiplos tamanhos',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: '24px',
    padding: '16px'
  }}>
      {([16, 24, 32, 40, 48] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Logo size="symbol" aria-label={\`Símbolo Olist \${size}px\`} style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size
      }} />
          <span style={{
        fontSize: '11px',
        color: '#827f73',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>
            {size}px
          </span>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'O símbolo escala de 16px (mínimo) a 48px (máximo padrão). É possível sobrescrever via \`style\`.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Padrão`,`Simples`,`Símbolo`,`TodasVariantes`,`SobreFundoEscuro`,`SímboloEscalável`]}))();export{S as Padrão,C as Simples,E as SobreFundoEscuro,w as Símbolo,D as SímboloEscalável,T as TodasVariantes,O as __namedExportsOrder,x as default};