import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-_8twg3EU.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,r as a,t as o}from"./Icon-Bmt46ORM.js";function s({name:e}){let[t,n]=(0,c.useState)(!1);function r(){navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>n(!1),1500)})}return(0,l.jsxs)(`button`,{onClick:r,title:`Copiar "${e}"`,style:{all:`unset`,cursor:`pointer`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:`16px 8px 12px`,borderRadius:10,border:`1px solid #e7e4da`,background:t?`#e7edf8`:`#fdfdfc`,transition:`background 0.15s, border-color 0.15s, transform 0.1s`},onMouseEnter:e=>{t||(e.currentTarget.style.background=`#f2f0e8`,e.currentTarget.style.borderColor=`#afada2`,e.currentTarget.style.transform=`translateY(-1px)`)},onMouseLeave:e=>{t||(e.currentTarget.style.background=`#fdfdfc`,e.currentTarget.style.borderColor=`#e7e4da`,e.currentTarget.style.transform=``)},children:[(0,l.jsx)(o,{name:e,size:24,color:`var(--color-gray-gray-800, #201f1d)`}),(0,l.jsx)(`span`,{style:{fontSize:10,fontFamily:`monospace`,color:t?`#0a4ee4`:`#615f56`,textAlign:`center`,wordBreak:`break-all`,lineHeight:1.35,maxWidth:100},children:t?`✓ copiado`:e})]})}var c,l,u,d,f,p;e((()=>{c=t(n(),1),a(),l=r(),u={title:`Foundations/Icons`,parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`hidden`}}}},d={name:`Ícones`,render:()=>{let[e,t]=(0,c.useState)(``),n=i.filter(t=>t.includes(e.toLowerCase().trim()));return(0,l.jsxs)(`div`,{style:{padding:`40px 48px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:[(0,l.jsx)(`h1`,{style:{fontSize:32,fontWeight:700,color:`#10100f`,margin:`0 0 8px`},children:`Ícones`}),(0,l.jsxs)(`p`,{style:{fontSize:15,color:`#615f56`,margin:`0 0 28px`,lineHeight:1.6},children:[i.length,` ícones disponíveis. Clique em qualquer ícone para copiar o `,(0,l.jsx)(`code`,{style:{background:`#f2f0e8`,padding:`2px 6px`,borderRadius:4,fontSize:13},children:`name`}),` para o clipboard. Sufixo `,(0,l.jsx)(`code`,{style:{background:`#f2f0e8`,padding:`2px 6px`,borderRadius:4,fontSize:13},children:`-fill`}),` indica variante preenchida.`]}),(0,l.jsxs)(`div`,{style:{position:`relative`,marginBottom:28,maxWidth:400},children:[(0,l.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,style:{position:`absolute`,left:12,top:`50%`,transform:`translateY(-50%)`,pointerEvents:`none`},children:(0,l.jsx)(`path`,{d:`M11 3a8 8 0 1 0 0 16A8 8 0 0 0 11 3zm-9 8a9 9 0 1 1 16.32 5.26l4.22 4.22a1 1 0 0 1-1.42 1.42l-4.22-4.22A9 9 0 0 1 2 11z`,fill:`#918e83`})}),(0,l.jsx)(`input`,{type:`text`,placeholder:`Buscar ícone…`,value:e,onChange:e=>t(e.target.value),style:{width:`100%`,boxSizing:`border-box`,padding:`10px 12px 10px 36px`,border:`1px solid #afada2`,borderRadius:9999,fontSize:14,fontFamily:`Plus Jakarta Sans, sans-serif`,color:`#10100f`,background:`#fcfbf8`,outline:`none`},onFocus:e=>{e.target.style.borderColor=`#0a4ee4`,e.target.style.boxShadow=`0 0 0 2px rgba(10,78,228,0.15)`},onBlur:e=>{e.target.style.borderColor=`#afada2`,e.target.style.boxShadow=`none`}})]}),n.length===0?(0,l.jsxs)(`p`,{style:{color:`#827f73`,fontSize:14},children:[`Nenhum ícone encontrado para "`,e,`".`]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`p`,{style:{fontSize:12,color:`#918e83`,margin:`0 0 16px`},children:[n.length,` `,n.length===1?`ícone encontrado`:`ícones encontrados`]}),(0,l.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:10},children:n.map(e=>(0,l.jsx)(s,{name:e},e))})]})]})}},f={name:`Tamanhos`,render:()=>(0,l.jsxs)(`div`,{style:{padding:`40px 48px`,fontFamily:`Plus Jakarta Sans, sans-serif`},children:[(0,l.jsx)(`h1`,{style:{fontSize:32,fontWeight:700,color:`#10100f`,margin:`0 0 8px`},children:`Tamanhos de ícone`}),(0,l.jsx)(`p`,{style:{fontSize:15,color:`#615f56`,margin:`0 0 40px`,lineHeight:1.6},children:`Três tamanhos semânticos definidos em tokens. Use o tamanho correto por contexto — nunca valores arbitrários.`}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:64,alignItems:`flex-end`,flexWrap:`wrap`},children:[{size:16,token:`--icon-size-small`,label:`Small`,usage:`Inline em texto, badge, input compacto`},{size:24,token:`--icon-size-medium`,label:`Medium`,usage:`⭐ Padrão — botões, menus, listas`},{size:32,token:`--icon-size-large`,label:`Large`,usage:`Destaque, hero icons, empty states`}].map(({size:e,token:t,label:n,usage:r})=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12},children:[(0,l.jsx)(o,{name:i[0],size:e,color:`var(--color-blue-blue-500, #0a4ee4)`}),(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`#10100f`},children:n}),(0,l.jsx)(`code`,{style:{fontSize:11,color:`#615f56`,display:`block`,marginTop:2},children:t}),(0,l.jsxs)(`div`,{style:{fontSize:11,color:`#918e83`,marginTop:2},children:[e,`px`]}),(0,l.jsx)(`div`,{style:{fontSize:11,color:`#615f56`,marginTop:4,maxWidth:140,lineHeight:1.4},children:r})]})]},e))}),(0,l.jsxs)(`div`,{style:{marginTop:48,borderTop:`1px solid #e7e4da`,paddingTop:32},children:[(0,l.jsx)(`h2`,{style:{fontSize:18,fontWeight:700,color:`#10100f`,margin:`0 0 16px`},children:`Cores por contexto`}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[{color:`var(--color-shape-content-default, #10100f)`,label:`Default`,note:`--icon-color-default`},{color:`var(--color-shape-content-on-brand, #fcfbf8)`,label:`On brand`,note:`--icon-color-onbrand`,bg:`#0a4ee4`},{color:`var(--color-shape-enabled-neutral, #615f56)`,label:`Neutral enabled`,note:``},{color:`var(--color-shape-disabled-default, #cecbc0)`,label:`Disabled`,note:``},{color:`var(--color-blue-blue-500, #0a4ee4)`,label:`Brand`,note:``},{color:`var(--color-green-green-500, #779e3d)`,label:`Success`,note:``},{color:`var(--color-red-red-500, #e64e36)`,label:`Error`,note:``},{color:`var(--color-yellow-yellow-500, #f0a028)`,label:`Warning`,note:``}].map(({color:e,label:t,note:n,bg:r})=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,l.jsx)(`div`,{style:{background:r||`#f2f0e8`,padding:12,borderRadius:10,border:`1px solid #e7e4da`},children:(0,l.jsx)(o,{name:i[0],size:24,color:e})}),(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(`div`,{style:{fontSize:12,fontWeight:600,color:`#10100f`},children:t}),n&&(0,l.jsx)(`code`,{style:{fontSize:10,color:`#918e83`,display:`block`},children:n})]})]},t))})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Ícones',
  render: () => {
    const [search, setSearch] = useState('');
    const filtered = availableIcons.filter(n => n.includes(search.toLowerCase().trim()));
    return <div style={{
      padding: '40px 48px',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }}>
        <h1 style={{
        fontSize: 32,
        fontWeight: 700,
        color: '#10100f',
        margin: '0 0 8px'
      }}>Ícones</h1>
        <p style={{
        fontSize: 15,
        color: '#615f56',
        margin: '0 0 28px',
        lineHeight: 1.6
      }}>
          {availableIcons.length} ícones disponíveis. Clique em qualquer ícone para copiar o <code style={{
          background: '#f2f0e8',
          padding: '2px 6px',
          borderRadius: 4,
          fontSize: 13
        }}>name</code> para o clipboard.
          Sufixo <code style={{
          background: '#f2f0e8',
          padding: '2px 6px',
          borderRadius: 4,
          fontSize: 13
        }}>-fill</code> indica variante preenchida.
        </p>

        <div style={{
        position: 'relative',
        marginBottom: 28,
        maxWidth: 400
      }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{
          position: 'absolute',
          left: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}>
            <path d="M11 3a8 8 0 1 0 0 16A8 8 0 0 0 11 3zm-9 8a9 9 0 1 1 16.32 5.26l4.22 4.22a1 1 0 0 1-1.42 1.42l-4.22-4.22A9 9 0 0 1 2 11z" fill="#918e83" />
          </svg>
          <input type="text" placeholder="Buscar ícone…" value={search} onChange={e => setSearch(e.target.value)} style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '10px 12px 10px 36px',
          border: '1px solid #afada2',
          borderRadius: 9999,
          fontSize: 14,
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          color: '#10100f',
          background: '#fcfbf8',
          outline: 'none'
        }} onFocus={e => {
          e.target.style.borderColor = '#0a4ee4';
          e.target.style.boxShadow = '0 0 0 2px rgba(10,78,228,0.15)';
        }} onBlur={e => {
          e.target.style.borderColor = '#afada2';
          e.target.style.boxShadow = 'none';
        }} />
        </div>

        {filtered.length === 0 ? <p style={{
        color: '#827f73',
        fontSize: 14
      }}>Nenhum ícone encontrado para "{search}".</p> : <>
            <p style={{
          fontSize: 12,
          color: '#918e83',
          margin: '0 0 16px'
        }}>
              {filtered.length} {filtered.length === 1 ? 'ícone encontrado' : 'ícones encontrados'}
            </p>
            <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 10
        }}>
              {filtered.map(name => <IconCard key={name} name={name} />)}
            </div>
          </>}
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Tamanhos',
  render: () => <div style={{
    padding: '40px 48px',
    fontFamily: 'Plus Jakarta Sans, sans-serif'
  }}>
      <h1 style={{
      fontSize: 32,
      fontWeight: 700,
      color: '#10100f',
      margin: '0 0 8px'
    }}>Tamanhos de ícone</h1>
      <p style={{
      fontSize: 15,
      color: '#615f56',
      margin: '0 0 40px',
      lineHeight: 1.6
    }}>
        Três tamanhos semânticos definidos em tokens. Use o tamanho correto por contexto — nunca valores arbitrários.
      </p>

      <div style={{
      display: 'flex',
      gap: 64,
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }}>
        {[{
        size: 16,
        token: '--icon-size-small',
        label: 'Small',
        usage: 'Inline em texto, badge, input compacto'
      }, {
        size: 24,
        token: '--icon-size-medium',
        label: 'Medium',
        usage: '⭐ Padrão — botões, menus, listas'
      }, {
        size: 32,
        token: '--icon-size-large',
        label: 'Large',
        usage: 'Destaque, hero icons, empty states'
      }].map(({
        size,
        token,
        label,
        usage
      }) => <div key={size} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}>
            <Icon name={availableIcons[0]} size={size} color="var(--color-blue-blue-500, #0a4ee4)" />
            <div style={{
          textAlign: 'center'
        }}>
              <div style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#10100f'
          }}>{label}</div>
              <code style={{
            fontSize: 11,
            color: '#615f56',
            display: 'block',
            marginTop: 2
          }}>{token}</code>
              <div style={{
            fontSize: 11,
            color: '#918e83',
            marginTop: 2
          }}>{size}px</div>
              <div style={{
            fontSize: 11,
            color: '#615f56',
            marginTop: 4,
            maxWidth: 140,
            lineHeight: 1.4
          }}>{usage}</div>
            </div>
          </div>)}
      </div>

      <div style={{
      marginTop: 48,
      borderTop: '1px solid #e7e4da',
      paddingTop: 32
    }}>
        <h2 style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#10100f',
        margin: '0 0 16px'
      }}>Cores por contexto</h2>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          {[{
          color: 'var(--color-shape-content-default, #10100f)',
          label: 'Default',
          note: '--icon-color-default'
        }, {
          color: 'var(--color-shape-content-on-brand, #fcfbf8)',
          label: 'On brand',
          note: '--icon-color-onbrand',
          bg: '#0a4ee4'
        }, {
          color: 'var(--color-shape-enabled-neutral, #615f56)',
          label: 'Neutral enabled',
          note: ''
        }, {
          color: 'var(--color-shape-disabled-default, #cecbc0)',
          label: 'Disabled',
          note: ''
        }, {
          color: 'var(--color-blue-blue-500, #0a4ee4)',
          label: 'Brand',
          note: ''
        }, {
          color: 'var(--color-green-green-500, #779e3d)',
          label: 'Success',
          note: ''
        }, {
          color: 'var(--color-red-red-500, #e64e36)',
          label: 'Error',
          note: ''
        }, {
          color: 'var(--color-yellow-yellow-500, #f0a028)',
          label: 'Warning',
          note: ''
        }].map(({
          color,
          label,
          note,
          bg
        }) => <div key={label} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <div style={{
            background: bg || '#f2f0e8',
            padding: 12,
            borderRadius: 10,
            border: '1px solid #e7e4da'
          }}>
                <Icon name={availableIcons[0]} size={24} color={color} />
              </div>
              <div style={{
            textAlign: 'center'
          }}>
                <div style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#10100f'
            }}>{label}</div>
                {note && <code style={{
              fontSize: 10,
              color: '#918e83',
              display: 'block'
            }}>{note}</code>}
              </div>
            </div>)}
        </div>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Icones`,`Tamanhos`]}))();export{d as Icones,f as Tamanhos,p as __namedExportsOrder,u as default};