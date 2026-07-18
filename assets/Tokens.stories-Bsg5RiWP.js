import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-BucJN-JR.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";function i({color:e,children:t}){return(0,c.jsx)(`span`,{style:{background:e,color:`#fff`,fontSize:10,fontWeight:700,padding:`2px 7px`,borderRadius:9999,display:`inline-block`,letterSpacing:`0.04em`},children:t})}function a(){return(0,c.jsx)(`span`,{style:{color:`#afada2`,margin:`0 6px`,fontSize:14},children:`→`})}function o({rows:e}){let[t,n]=(0,s.useState)(``),r=t?e.filter(e=>e.token.includes(t)||e.description.toLowerCase().includes(t.toLowerCase())):e;return(0,c.jsxs)(`div`,{style:{marginBottom:40},children:[e.length>8&&(0,c.jsx)(`input`,{type:`text`,placeholder:`Filtrar tokens…`,value:t,onChange:e=>n(e.target.value),style:{border:`1px solid #afada2`,borderRadius:9999,padding:`6px 12px`,fontSize:13,fontFamily:`inherit`,color:`#10100f`,background:`#fcfbf8`,outline:`none`,marginBottom:12,width:260}}),(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:12},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{style:{background:`#f2f0e8`},children:[(0,c.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 12px`,color:`#403f3b`,fontWeight:600,borderBottom:`1px solid #e7e4da`,width:`38%`},children:`Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 12px`,color:`#403f3b`,fontWeight:600,borderBottom:`1px solid #e7e4da`,width:`32%`},children:`Referencia`}),(0,c.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 12px`,color:`#403f3b`,fontWeight:600,borderBottom:`1px solid #e7e4da`},children:`Descrição`})]})}),(0,c.jsx)(`tbody`,{children:r.map(({token:e,resolves:t,description:n})=>(0,c.jsxs)(`tr`,{style:{borderBottom:`1px solid #f2f0e8`},children:[(0,c.jsx)(`td`,{style:{padding:`8px 12px`,verticalAlign:`top`},children:(0,c.jsx)(`code`,{style:{fontSize:11,color:`#0a4ee4`,background:`#e7edf8`,padding:`2px 5px`,borderRadius:4},children:e})}),(0,c.jsx)(`td`,{style:{padding:`8px 12px`,verticalAlign:`top`},children:(0,c.jsx)(`code`,{style:{fontSize:11,color:`#615f56`},children:t})}),(0,c.jsx)(`td`,{style:{padding:`8px 12px`,color:`#615f56`,verticalAlign:`top`,lineHeight:1.4},children:n})]},e))})]}),r.length===0&&(0,c.jsxs)(`p`,{style:{fontSize:13,color:`#918e83`,padding:`8px 12px`},children:[`Nenhum resultado para "`,t,`".`]})]})}var s,c,l,u,d,f,p,m,h,g;e((()=>{s=t(n(),1),c=r(),l={title:`Foundations/Tokens`,parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`hidden`}}}},u=[{token:`--text-heading-h1-font-size`,resolves:`--font-size-x7-56px`,description:`H1 — display de página`},{token:`--text-heading-h2-font-size`,resolves:`--font-size-x6-48px`,description:`H2`},{token:`--text-heading-h3-font-size`,resolves:`--font-size-x5-40px`,description:`H3`},{token:`--text-heading-h4-font-size`,resolves:`--font-size-x4-32px`,description:`H4`},{token:`--text-heading-h5-font-size`,resolves:`--font-size-x3-24px`,description:`H5 — título de card / modal`},{token:`--text-paragraph-font-size`,resolves:`--font-size-x2-16px`,description:`Corpo de texto padrão`},{token:`--text-description-size`,resolves:`--font-size-x175-14px`,description:`Células de tabela, inputs`},{token:`--text-caption-font-size`,resolves:`--font-size-x15-12px`,description:`Captions, helper text, badges`},{token:`--text-label-font-size`,resolves:`--font-size-x175-14px`,description:`Labels de formulário`},{token:`--text-support-text-font-size`,resolves:`--font-size-x15-12px`,description:`Texto de suporte abaixo de inputs`},{token:`--text-heading-font-weight`,resolves:`--font-weight-sbold`,description:`Peso de todos os headings (600)`},{token:`--text-label-font-weight`,resolves:`--font-weight-sbold`,description:`Peso de labels (600)`},{token:`--text-paragraph-font-weight`,resolves:`--font-weight-regular`,description:`Peso de parágrafo (400)`}],d=[{token:`--button-size-height`,resolves:`--shape-size-x6-48px`,description:`Altura do botão`},{token:`--button-color-primary-enabled`,resolves:`--color-background-enabled-full-brand`,description:`Fundo primary enabled`},{token:`--button-color-primary-hover`,resolves:`--color-background-hover-full-brand`,description:`Fundo primary hover`},{token:`--button-color-primary-pressed`,resolves:`--color-background-pressed-full-brand`,description:`Fundo primary pressed`},{token:`--button-border-radius-pill`,resolves:`--shape-border-radius-pill-9999px`,description:`Raio de borda (pill)`},{token:`--button-font-size`,resolves:`--font-size-x175-14px`,description:`Tamanho do texto`},{token:`--button-font-weight`,resolves:`--font-weight-medium`,description:`Peso do texto`},{token:`--button-spacing-padding`,resolves:`--shape-spacing-x2-16px`,description:`Padding horizontal`},{token:`--button-spacing-gap`,resolves:`--shape-spacing-x1-8px`,description:`Gap ícone–texto`}],f=[{token:`--input-base-size-input-height`,resolves:`--shape-size-x6-48px`,description:`Altura do input`},{token:`--input-base-border-radius-default`,resolves:`--shape-border-radius-x15-12px`,description:`Raio de borda`},{token:`--input-base-border-color-enabled`,resolves:`--color-border-enabled-neutral`,description:`Borda enabled`},{token:`--input-base-border-color-hover`,resolves:`--color-border-hover-neutral`,description:`Borda hover`},{token:`--input-base-border-color-focused`,resolves:`--focus-border-color-default`,description:`Borda focus (azul)`},{token:`--input-base-border-color-error`,resolves:`--color-border-feedback-negative-subtle`,description:`Borda estado erro`},{token:`--input-base-border-color-success`,resolves:`--color-border-feedback-positive-subtle`,description:`Borda estado sucesso`},{token:`--input-base-border-width-focused`,resolves:`--focus-border-width-default`,description:`Espessura borda focus (2px)`}],p=[{token:`--shadow-blur-contact`,resolves:`--effects-blur-light-4px`,description:`Sombra de contato — elemento "pousado"`},{token:`--shadow-blur-level-1`,resolves:`--effects-blur-medium-8px`,description:`Elevação 1 — cards, dropdowns`},{token:`--shadow-blur-level-2`,resolves:`--effects-blur-strong-16px`,description:`Elevação 2 — modais, popovers`},{token:`--shadow-blur-level-3`,resolves:`--effects-blur-harsh-32px`,description:`Elevação 3 — overlays pesados`},{token:`--shadow-color-level-1`,resolves:`--effects-shadow-4`,description:`Cor da sombra nível 1 (rgba 4%)`},{token:`--shadow-color-level-2`,resolves:`--effects-shadow-8`,description:`Cor da sombra nível 2 (rgba 8%)`},{token:`--shadow-color-level-3`,resolves:`--effects-shadow-16`,description:`Cor da sombra nível 3 (rgba 16%)`}],m={name:`Hierarquia de tokens`,render:()=>(0,c.jsxs)(`div`,{style:{padding:`40px 48px`,fontFamily:`Plus Jakarta Sans, sans-serif`,maxWidth:1100},children:[(0,c.jsx)(`h1`,{style:{fontSize:32,fontWeight:700,color:`#10100f`,margin:`0 0 8px`},children:`Tokens & Theming`}),(0,c.jsx)(`p`,{style:{fontSize:15,color:`#615f56`,margin:`0 0 40px`,lineHeight:1.6},children:`Os tokens seguem uma hierarquia de três camadas. Componentes só consomem tokens de componente; nunca referenciam primitivos diretamente.`}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:0,marginBottom:48,overflowX:`auto`},children:[{level:`1 — Primitivos`,badge:`#918e83`,color:`#f2f0e8`,border:`#e7e4da`,items:[`--color-blue-blue-500`,`--color-gray-gray-900`,`--shape-spacing-16px`,`--font-size-14px`,`--font-weight-regular`,`--shape-border-radius-8px`],note:`Valores brutos. Nunca use diretamente em componentes.`},{level:`2 — Semânticos`,badge:`#0a4ee4`,color:`#e7edf8`,border:`#a1b9ed`,items:[`--color-background-enabled-full-brand`,`--color-text-container-label`,`--color-border-enabled-neutral`,`--color-shape-content-default`,`--text-label-font-size`,`--text-label-font-weight`],note:`Intenção de uso. Referenciam primitivos.`},{level:`3 — Componentes`,badge:`#779e3d`,color:`#ecf3e2`,border:`#afcb86`,items:[`--button-color-primary-enabled`,`--button-font-size`,`--input-base-border-radius-default`,`--input-base-border-color-focused`,`--chip-border-radius-pill`,`--tag-font-weight`],note:`Específicos por componente. Referenciam semânticos.`}].map((e,t)=>(0,c.jsxs)(s.Fragment,{children:[t>0&&(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,padding:`0 8px`,flexShrink:0},children:(0,c.jsx)(`div`,{style:{fontSize:24,color:`#afada2`},children:`→`})}),(0,c.jsxs)(`div`,{style:{background:e.color,border:`1px solid ${e.border}`,borderRadius:12,padding:`20px 20px 16px`,minWidth:240,flex:`0 0 240px`},children:[(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:12},children:(0,c.jsx)(i,{color:e.badge,children:e.level})}),e.items.map(t=>(0,c.jsx)(`div`,{style:{fontSize:11,fontFamily:`monospace`,color:`#403f3b`,padding:`3px 0`,borderBottom:`1px solid ${e.border}`},children:t},t)),(0,c.jsx)(`p`,{style:{fontSize:11,color:`#827f73`,margin:`10px 0 0`,lineHeight:1.4},children:e.note})]})]},e.level))}),(0,c.jsxs)(`div`,{style:{background:`#fcfbf8`,border:`1px solid #e7e4da`,borderRadius:12,padding:24,marginBottom:48},children:[(0,c.jsx)(`h2`,{style:{fontSize:16,fontWeight:700,color:`#10100f`,margin:`0 0 16px`},children:`Exemplo — Botão primário`}),[{comp:`--button-color-primary-enabled`,sem:`--color-background-enabled-full-brand`,prim:`--color-blue-blue-500`,hex:`#0a4ee4`},{comp:`--button-font-size`,sem:`(direto)`,prim:`--font-size-x175-14px → --font-size-14px`,hex:`14px`},{comp:`--button-border-radius-pill`,sem:`(direto)`,prim:`--shape-border-radius-pill-9999px → 9999px`,hex:`9999px`}].map(({comp:e,sem:t,prim:n,hex:r})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,marginBottom:10,flexWrap:`wrap`},children:[(0,c.jsx)(`code`,{style:{fontSize:11,color:`#0a4ee4`,background:`#e7edf8`,padding:`3px 6px`,borderRadius:4},children:e}),(0,c.jsx)(a,{}),t!==`(direto)`&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`code`,{style:{fontSize:11,color:`#615f56`,background:`#f2f0e8`,padding:`3px 6px`,borderRadius:4},children:t}),(0,c.jsx)(a,{})]}),(0,c.jsx)(`code`,{style:{fontSize:11,color:`#918e83`,background:`#f2f0e8`,padding:`3px 6px`,borderRadius:4},children:n}),(0,c.jsx)(a,{}),(0,c.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:`#403f3b`},children:r})]},e))]}),(0,c.jsx)(`h2`,{style:{fontSize:20,fontWeight:700,color:`#10100f`,margin:`0 0 16px`},children:`Tokens de texto`}),(0,c.jsx)(o,{rows:u}),(0,c.jsx)(`h2`,{style:{fontSize:20,fontWeight:700,color:`#10100f`,margin:`0 0 16px`},children:`Tokens de botão`}),(0,c.jsx)(o,{rows:d}),(0,c.jsx)(`h2`,{style:{fontSize:20,fontWeight:700,color:`#10100f`,margin:`0 0 16px`},children:`Tokens de input`}),(0,c.jsx)(o,{rows:f}),(0,c.jsx)(`h2`,{style:{fontSize:20,fontWeight:700,color:`#10100f`,margin:`0 0 16px`},children:`Tokens de sombra`}),(0,c.jsx)(o,{rows:p}),(0,c.jsxs)(`div`,{style:{marginTop:48,padding:24,background:`#fff8e7`,border:`1px solid #f6d4a2`,borderRadius:12},children:[(0,c.jsx)(`h3`,{style:{fontSize:14,fontWeight:700,color:`#65410b`,margin:`0 0 8px`},children:`Regra de ouro`}),(0,c.jsxs)(`p`,{style:{fontSize:13,color:`#935f10`,margin:0,lineHeight:1.6},children:[`Ao criar um componente, consuma `,(0,c.jsx)(`strong`,{children:`tokens de componente`}),` quando existirem, tokens `,(0,c.jsx)(`strong`,{children:`semânticos`}),` como fallback. Nunca use tokens primitivos (`,(0,c.jsx)(`code`,{children:`--color-blue-blue-500`}),`) diretamente no CSS de um componente. Isso garante que futuras alterações de tema sejam aplicadas automaticamente.`]})]})]})},h={name:`Sombra & Elevação`,render:()=>(0,c.jsxs)(`div`,{style:{padding:`40px 48px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:[(0,c.jsx)(`h1`,{style:{fontSize:32,fontWeight:700,color:`#10100f`,margin:`0 0 8px`},children:`Sombra & Elevação`}),(0,c.jsx)(`p`,{style:{fontSize:15,color:`#615f56`,margin:`0 0 40px`,lineHeight:1.6},children:`4 níveis de elevação. Sombras são compostas por distância + blur + cor (rgba do cinza mais escuro).`}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`,alignItems:`flex-start`},children:[{label:`Contact`,token:`--shadow-blur-contact`,css:`0 2px 4px rgba(5,5,5,0.08)`,usage:`Elemento "pousado" — botões, cards hover`},{label:`Level 1`,token:`--shadow-blur-level-1`,css:`0 4px 8px rgba(5,5,5,0.04)`,usage:`Cards em repouso, list popovers`},{label:`Level 2`,token:`--shadow-blur-level-2`,css:`0 8px 16px rgba(5,5,5,0.08)`,usage:`Dropdowns, tooltips, modais`},{label:`Level 3`,token:`--shadow-blur-level-3`,css:`0 16px 32px rgba(5,5,5,0.16)`,usage:`Overlays pesados, drawers`}].map(({label:e,token:t,css:n,usage:r})=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`center`},children:[(0,c.jsx)(`div`,{style:{width:140,height:90,background:`#fdfdfc`,borderRadius:12,boxShadow:n,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,c.jsx)(`span`,{style:{fontSize:12,fontWeight:700,color:`#403f3b`},children:e})}),(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(`code`,{style:{fontSize:11,color:`#615f56`,display:`block`},children:t}),(0,c.jsx)(`span`,{style:{fontSize:11,color:`#918e83`,marginTop:4,display:`block`,maxWidth:140,lineHeight:1.4},children:r})]})]},e))})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Hierarquia de tokens',
  render: () => <div style={{
    padding: '40px 48px',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    maxWidth: 1100
  }}>
      <h1 style={{
      fontSize: 32,
      fontWeight: 700,
      color: '#10100f',
      margin: '0 0 8px'
    }}>Tokens & Theming</h1>
      <p style={{
      fontSize: 15,
      color: '#615f56',
      margin: '0 0 40px',
      lineHeight: 1.6
    }}>
        Os tokens seguem uma hierarquia de três camadas. Componentes só consomem tokens de componente;
        nunca referenciam primitivos diretamente.
      </p>

      {/* Diagrama visual */}
      <div style={{
      display: 'flex',
      gap: 0,
      marginBottom: 48,
      overflowX: 'auto'
    }}>
        {[{
        level: '1 — Primitivos',
        badge: '#918e83',
        color: '#f2f0e8',
        border: '#e7e4da',
        items: ['--color-blue-blue-500', '--color-gray-gray-900', '--shape-spacing-16px', '--font-size-14px', '--font-weight-regular', '--shape-border-radius-8px'],
        note: 'Valores brutos. Nunca use diretamente em componentes.'
      }, {
        level: '2 — Semânticos',
        badge: '#0a4ee4',
        color: '#e7edf8',
        border: '#a1b9ed',
        items: ['--color-background-enabled-full-brand', '--color-text-container-label', '--color-border-enabled-neutral', '--color-shape-content-default', '--text-label-font-size', '--text-label-font-weight'],
        note: 'Intenção de uso. Referenciam primitivos.'
      }, {
        level: '3 — Componentes',
        badge: '#779e3d',
        color: '#ecf3e2',
        border: '#afcb86',
        items: ['--button-color-primary-enabled', '--button-font-size', '--input-base-border-radius-default', '--input-base-border-color-focused', '--chip-border-radius-pill', '--tag-font-weight'],
        note: 'Específicos por componente. Referenciam semânticos.'
      }].map((col, i) => <React.Fragment key={col.level}>
            {i > 0 && <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
          flexShrink: 0
        }}>
                <div style={{
            fontSize: 24,
            color: '#afada2'
          }}>→</div>
              </div>}
            <div style={{
          background: col.color,
          border: \`1px solid \${col.border}\`,
          borderRadius: 12,
          padding: '20px 20px 16px',
          minWidth: 240,
          flex: '0 0 240px'
        }}>
              <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12
          }}>
                <Badge color={col.badge}>{col.level}</Badge>
              </div>
              {col.items.map(item => <div key={item} style={{
            fontSize: 11,
            fontFamily: 'monospace',
            color: '#403f3b',
            padding: '3px 0',
            borderBottom: \`1px solid \${col.border}\`
          }}>
                  {item}
                </div>)}
              <p style={{
            fontSize: 11,
            color: '#827f73',
            margin: '10px 0 0',
            lineHeight: 1.4
          }}>{col.note}</p>
            </div>
          </React.Fragment>)}
      </div>

      {/* Exemplo de cadeia */}
      <div style={{
      background: '#fcfbf8',
      border: '1px solid #e7e4da',
      borderRadius: 12,
      padding: 24,
      marginBottom: 48
    }}>
        <h2 style={{
        fontSize: 16,
        fontWeight: 700,
        color: '#10100f',
        margin: '0 0 16px'
      }}>Exemplo — Botão primário</h2>
        {[{
        comp: '--button-color-primary-enabled',
        sem: '--color-background-enabled-full-brand',
        prim: '--color-blue-blue-500',
        hex: '#0a4ee4'
      }, {
        comp: '--button-font-size',
        sem: '(direto)',
        prim: '--font-size-x175-14px → --font-size-14px',
        hex: '14px'
      }, {
        comp: '--button-border-radius-pill',
        sem: '(direto)',
        prim: '--shape-border-radius-pill-9999px → 9999px',
        hex: '9999px'
      }].map(({
        comp,
        sem,
        prim,
        hex
      }) => <div key={comp} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        marginBottom: 10,
        flexWrap: 'wrap'
      }}>
            <code style={{
          fontSize: 11,
          color: '#0a4ee4',
          background: '#e7edf8',
          padding: '3px 6px',
          borderRadius: 4
        }}>{comp}</code>
            <HierarchyArrow />
            {sem !== '(direto)' && <><code style={{
            fontSize: 11,
            color: '#615f56',
            background: '#f2f0e8',
            padding: '3px 6px',
            borderRadius: 4
          }}>{sem}</code><HierarchyArrow /></>}
            <code style={{
          fontSize: 11,
          color: '#918e83',
          background: '#f2f0e8',
          padding: '3px 6px',
          borderRadius: 4
        }}>{prim}</code>
            <HierarchyArrow />
            <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#403f3b'
        }}>{hex}</span>
          </div>)}
      </div>

      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#10100f',
      margin: '0 0 16px'
    }}>Tokens de texto</h2>
      <TokenTable rows={textTokens} />

      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#10100f',
      margin: '0 0 16px'
    }}>Tokens de botão</h2>
      <TokenTable rows={buttonTokens} />

      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#10100f',
      margin: '0 0 16px'
    }}>Tokens de input</h2>
      <TokenTable rows={inputTokens} />

      <h2 style={{
      fontSize: 20,
      fontWeight: 700,
      color: '#10100f',
      margin: '0 0 16px'
    }}>Tokens de sombra</h2>
      <TokenTable rows={shadowTokens} />

      <div style={{
      marginTop: 48,
      padding: 24,
      background: '#fff8e7',
      border: '1px solid #f6d4a2',
      borderRadius: 12
    }}>
        <h3 style={{
        fontSize: 14,
        fontWeight: 700,
        color: '#65410b',
        margin: '0 0 8px'
      }}>Regra de ouro</h3>
        <p style={{
        fontSize: 13,
        color: '#935f10',
        margin: 0,
        lineHeight: 1.6
      }}>
          Ao criar um componente, consuma <strong>tokens de componente</strong> quando existirem, tokens <strong>semânticos</strong> como fallback.
          Nunca use tokens primitivos (<code>--color-blue-blue-500</code>) diretamente no CSS de um componente.
          Isso garante que futuras alterações de tema sejam aplicadas automaticamente.
        </p>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Sombra & Elevação',
  render: () => <div style={{
    padding: '40px 48px',
    fontFamily: 'Plus Jakarta Sans, sans-serif'
  }}>
      <h1 style={{
      fontSize: 32,
      fontWeight: 700,
      color: '#10100f',
      margin: '0 0 8px'
    }}>Sombra & Elevação</h1>
      <p style={{
      fontSize: 15,
      color: '#615f56',
      margin: '0 0 40px',
      lineHeight: 1.6
    }}>
        4 níveis de elevação. Sombras são compostas por distância + blur + cor (rgba do cinza mais escuro).
      </p>

      <div style={{
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }}>
        {[{
        label: 'Contact',
        token: '--shadow-blur-contact',
        css: '0 2px 4px rgba(5,5,5,0.08)',
        usage: 'Elemento "pousado" — botões, cards hover'
      }, {
        label: 'Level 1',
        token: '--shadow-blur-level-1',
        css: '0 4px 8px rgba(5,5,5,0.04)',
        usage: 'Cards em repouso, list popovers'
      }, {
        label: 'Level 2',
        token: '--shadow-blur-level-2',
        css: '0 8px 16px rgba(5,5,5,0.08)',
        usage: 'Dropdowns, tooltips, modais'
      }, {
        label: 'Level 3',
        token: '--shadow-blur-level-3',
        css: '0 16px 32px rgba(5,5,5,0.16)',
        usage: 'Overlays pesados, drawers'
      }].map(({
        label,
        token,
        css,
        usage
      }) => <div key={label} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'center'
      }}>
            <div style={{
          width: 140,
          height: 90,
          background: '#fdfdfc',
          borderRadius: 12,
          boxShadow: css,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
              <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#403f3b'
          }}>{label}</span>
            </div>
            <div style={{
          textAlign: 'center'
        }}>
              <code style={{
            fontSize: 11,
            color: '#615f56',
            display: 'block'
          }}>{token}</code>
              <span style={{
            fontSize: 11,
            color: '#918e83',
            marginTop: 4,
            display: 'block',
            maxWidth: 140,
            lineHeight: 1.4
          }}>{usage}</span>
            </div>
          </div>)}
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Hierarquia`,`SombraEElevacao`]}))();export{m as Hierarquia,h as SombraEElevacao,g as __namedExportsOrder,l as default};