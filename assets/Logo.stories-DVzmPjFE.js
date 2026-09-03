import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{n as r,t as i}from"./Logo-1VTkMxPL.js";var a=e({Playground:()=>c,Simples:()=>l,SobreFundoEscuro:()=>f,Símbolo:()=>u,SímboloEscalável:()=>p,TodasVariantes:()=>d,__namedExportsOrder:()=>m,default:()=>s}),o,s,c,l,u,d,f,p,m,h=t((()=>{r(),o=n(),s={title:`Components/Logo`,component:i,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`default`,`simple`,`symbol`],description:`
        Variante de tamanho do logo Olist:
        - **default** — logo completo com círculo laranja (160px mín.)
        - **simple** — logo sem o círculo, redimensionável entre 80–152px
        - **symbol** — apenas o ícone do toggle (16–48px, quadrado)
      `,table:{defaultValue:{summary:`default`}}},"aria-label":{control:`text`,description:`Rótulo acessível para leitores de tela.`,table:{defaultValue:{summary:`Logo Olist`}}},className:{table:{disable:!0}}}},c={args:{size:`default`}},l={name:`Simples (simple)`,args:{size:`simple`},parameters:{docs:{description:{story:`Versão sem o círculo laranja. Redimensionável entre 80px e 152px de largura.`}}}},u={name:`Símbolo (symbol)`,args:{size:`symbol`},parameters:{docs:{description:{story:`Apenas o ícone do toggle. Ideal para favicons, avatares ou espaços reduzidos.`}}}},d={name:`Todas as variantes`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`40px`,padding:`32px`,background:`#f2f0e8`,borderRadius:`8px`,flexWrap:`wrap`},children:[(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,o.jsx)(i,{size:`default`}),(0,o.jsx)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:`default`})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,o.jsx)(i,{size:`simple`}),(0,o.jsx)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:`simple`})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,o.jsx)(i,{size:`symbol`}),(0,o.jsx)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:`symbol`})]})]}),parameters:{layout:`padded`,docs:{description:{story:`Todas as três variantes lado a lado para comparação.`}}}},f={name:`Sobre fundo escuro`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`,padding:`32px`,background:`#001647`,borderRadius:`8px`,flexWrap:`wrap`},children:[(0,o.jsx)(i,{size:`default`,"aria-label":`Logo Olist — fundo escuro`}),(0,o.jsx)(i,{size:`simple`,"aria-label":`Logo Olist simples — fundo escuro`}),(0,o.jsx)(i,{size:`symbol`,"aria-label":`Símbolo Olist — fundo escuro`})]}),parameters:{layout:`padded`,docs:{description:{story:`Exibe as variantes sobre fundo navy para verificar contraste. Nota: os assets podem precisar de versões invertidas para fundos escuros.`}}}},p={name:`Símbolo em múltiplos tamanhos`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:`24px`,padding:`16px`},children:[16,24,32,40,48].map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,o.jsx)(i,{size:`symbol`,"aria-label":`Símbolo Olist ${e}px`,style:{width:e,height:e,minWidth:e,minHeight:e,maxWidth:e,maxHeight:e}}),(0,o.jsxs)(`span`,{style:{fontSize:`11px`,color:`#827f73`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:[e,`px`]})]},e))}),parameters:{layout:`padded`,docs:{description:{story:"O símbolo escala de 16px (mínimo) a 48px (máximo padrão). É possível sobrescrever via `style`."}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Simples`,`Símbolo`,`TodasVariantes`,`SobreFundoEscuro`,`SímboloEscalável`]}));h();export{c as Playground,l as Simples,f as SobreFundoEscuro,u as Símbolo,p as SímboloEscalável,d as TodasVariantes,m as __namedExportsOrder,s as default,h as n,a as t};