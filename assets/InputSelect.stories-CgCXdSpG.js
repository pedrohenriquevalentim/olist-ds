import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-DXN-684X.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as ee,t as te}from"./Checkbox-DudwLedI.js";var i,a,ne,re,ie,o,s,ae,oe,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,se,k,A,j=e((()=>{i=`_wrapper_19x84_5`,a=`_triggerContainer_19x84_13`,ne=`_labelRow_19x84_19`,re=`_labelText_19x84_26`,ie=`_labelDisabled_19x84_39`,o=`_tooltipIcon_19x84_43`,s=`_inputBase_19x84_62`,ae=`_stateFocused_19x84_100`,oe=`_stateFilled_19x84_106`,c=`_stateDisabled_19x84_111`,l=`_triggerContent_19x84_121`,u=`_placeholderText_19x84_129`,d=`_selectedText_19x84_141`,f=`_chipsContainer_19x84_160`,p=`_chip_19x84_160`,m=`_chipLabel_19x84_185`,h=`_chipRemove_19x84_191`,g=`_chevron_19x84_214`,_=`_listboxWrapper_19x84_237`,v=`_searchWrapper_19x84_251`,y=`_searchInput_19x84_256`,b=`_listbox_19x84_237`,x=`_listItem_19x84_294`,S=`_listItemDisabled_19x84_308`,C=`_listItemSelected_19x84_316`,w=`_listItemFocused_19x84_328`,T=`_listItemLabel_19x84_343`,E=`_checkboxWrapper_19x84_366`,D=`_checkIcon_19x84_376`,O=`_emptyMessage_19x84_394`,se=`_supportText_19x84_406`,k=`_supportDisabled_19x84_419`,A={wrapper:i,triggerContainer:a,labelRow:ne,labelText:re,labelDisabled:ie,tooltipIcon:o,inputBase:s,stateFocused:ae,stateFilled:oe,stateDisabled:c,triggerContent:l,placeholderText:u,selectedText:d,chipsContainer:f,chip:p,chipLabel:m,chipRemove:h,chevron:g,listboxWrapper:_,searchWrapper:v,searchInput:y,listbox:b,listItem:x,listItemDisabled:S,listItemSelected:C,listItemFocused:w,listItemLabel:T,checkboxWrapper:E,checkIcon:D,emptyMessage:O,supportText:se,supportDisabled:k}})),M=e((()=>{ee()})),N,P,ce,le,ue,F,de=e((()=>{N=t(n(),1),j(),M(),P=r(),ce=e=>e.selectType===`multi`||e.selectType===`multi-autocomplete`,le=e=>e.selectType===`autocomplete`||e.selectType===`multi-autocomplete`,ue=({label:e,onRemove:t,removeIcon:n,disabled:r})=>{let ee=(0,P.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,P.jsx)(`path`,{d:`M4 4l8 8M12 4l-8 8`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})});return(0,P.jsxs)(`span`,{className:A.chip,children:[(0,P.jsx)(`span`,{className:A.chipLabel,children:e}),!r&&(0,P.jsx)(`button`,{type:`button`,className:A.chipRemove,onClick:e=>{e.stopPropagation(),t()},"aria-label":`Remover ${e}`,tabIndex:-1,children:n??ee})]})},F=e=>{let{label:t,supportText:n,hasSupport:r=!0,hasTooltip:ee=!1,tooltipIcon:i,chevronIcon:a,checkIcon:ne,removeIcon:re,placeholder:ie=`Selecionar`,options:o=[],disabled:s=!1,id:ae,className:oe,"aria-label":c,"aria-labelledby":l,"aria-describedby":u}=e,d=(0,N.useId)(),f=ae??d,p=`${f}-label`,m=`${f}-listbox`,h=`${f}-support`,g=ce(e),_=le(e),[v,y]=(0,N.useState)(!1),[b,x]=(0,N.useState)(-1),[S,C]=(0,N.useState)(``),w=(0,N.useRef)(null),T=(0,N.useRef)(null),E=(0,N.useRef)(null),D=(()=>{if(g){let t=e.value;return Array.isArray(t)?t:[]}let t=e.value;return t?[t]:[]})(),O=_&&S?o.filter(e=>e.label.toLowerCase().includes(S.toLowerCase())):o,se=D.length>0,k=(0,N.useCallback)(()=>{s||(y(!0),x(-1),_&&setTimeout(()=>E.current?.focus(),0))},[s,_]),j=(0,N.useCallback)(()=>{y(!1),x(-1),C(``)},[]),M=(0,N.useCallback)(()=>{v?j():k()},[v,k,j]);(0,N.useEffect)(()=>{if(!v)return;let e=e=>{w.current&&!w.current.contains(e.target)&&j()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[v,j]);let F=(0,N.useCallback)(t=>{if(!t.disabled)if(g){let n=e.value??[],r=n.includes(t.value)?n.filter(e=>e!==t.value):[...n,t.value];e.onChange?.(r)}else e.onChange?.(t.value),j(),T.current?.focus()},[g,e,j]),de=(0,N.useCallback)(t=>{if(!g)return;let n=e.value??[];e.onChange?.(n.filter(e=>e!==t))},[g,e]),I=e=>{switch(e.key){case`Enter`:case` `:e.preventDefault(),v&&b>=0&&O[b]?F(O[b]):M();break;case`ArrowDown`:e.preventDefault(),v||k(),x(e=>Math.min(e+1,O.length-1));break;case`ArrowUp`:e.preventDefault(),v||k(),x(e=>Math.max(e-1,0));break;case`Escape`:e.preventDefault(),j();break}},L=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),x(e=>Math.min(e+1,O.length-1));break;case`ArrowUp`:e.preventDefault(),x(e=>Math.max(e-1,0));break;case`Enter`:e.preventDefault(),b>=0&&O[b]&&F(O[b]);break;case`Escape`:e.preventDefault(),j(),T.current?.focus();break}},R=g?null:o.find(t=>t.value===e.value)?.label??null,z=[A.inputBase,s?A.stateDisabled:``,v?A.stateFocused:se?A.stateFilled:``].filter(Boolean).join(` `),B=(0,P.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,P.jsx)(`path`,{d:v?`M12 10L8 6l-4 4`:`M4 6l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),V=(0,P.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,P.jsx)(`path`,{d:`M3 8l4 4 6-6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),H=(0,P.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,P.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,P.jsx)(`path`,{d:`M8 7v4M8 5.5v.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]});return(0,P.jsxs)(`div`,{ref:w,className:[A.wrapper,oe].filter(Boolean).join(` `),children:[t&&(0,P.jsxs)(`div`,{className:A.labelRow,children:[(0,P.jsx)(`label`,{id:p,htmlFor:f,className:[A.labelText,s?A.labelDisabled:``].filter(Boolean).join(` `),children:t}),ee&&(0,P.jsx)(`span`,{className:A.tooltipIcon,role:`img`,"aria-label":`Informação adicional`,children:i??H})]}),(0,P.jsxs)(`div`,{className:A.triggerContainer,children:[(0,P.jsxs)(`button`,{ref:T,id:f,type:`button`,role:`combobox`,"aria-haspopup":`listbox`,"aria-expanded":v,"aria-controls":v?m:void 0,"aria-labelledby":t?p:l,"aria-label":t?void 0:c,"aria-describedby":r&&n?h:u,"aria-disabled":s,disabled:s,className:z,onClick:M,onKeyDown:I,children:[(0,P.jsx)(`span`,{className:A.triggerContent,children:g&&D.length>0?(0,P.jsx)(`span`,{className:A.chipsContainer,children:D.map(e=>{let t=o.find(t=>t.value===e);return t?(0,P.jsx)(ue,{label:t.label,onRemove:()=>de(e),removeIcon:re,disabled:s},e):null})}):(0,P.jsx)(`span`,{className:R?A.selectedText:A.placeholderText,children:R??ie})}),(0,P.jsx)(`span`,{className:A.chevron,"aria-hidden":`true`,children:a??B})]}),v&&(0,P.jsxs)(`div`,{className:A.listboxWrapper,children:[_&&(0,P.jsx)(`div`,{className:A.searchWrapper,children:(0,P.jsx)(`input`,{ref:E,type:`text`,className:A.searchInput,placeholder:`Buscar...`,value:S,onChange:e=>{C(e.target.value),x(-1)},onKeyDown:L,"aria-label":`Buscar opções`,"aria-autocomplete":`list`,"aria-controls":m})}),(0,P.jsxs)(`ul`,{id:m,role:`listbox`,"aria-multiselectable":g,"aria-label":t??c??`Opções disponíveis`,className:A.listbox,onKeyDown:L,tabIndex:-1,children:[O.length===0&&(0,P.jsx)(`li`,{className:A.emptyMessage,role:`presentation`,children:`Nenhuma opção encontrada`}),O.map((e,t)=>{let n=D.includes(e.value),r=b===t;return(0,P.jsxs)(`li`,{id:`${m}-option-${e.value}`,role:`option`,"aria-selected":n,"aria-disabled":e.disabled,className:[A.listItem,n?A.listItemSelected:``,r?A.listItemFocused:``,e.disabled?A.listItemDisabled:``].filter(Boolean).join(` `),onClick:()=>F(e),onMouseEnter:()=>x(t),children:[(0,P.jsx)(`span`,{className:A.listItemLabel,children:e.label}),g?(0,P.jsx)(`span`,{className:A.checkboxWrapper,"aria-hidden":`true`,children:(0,P.jsx)(te,{checked:n,disabled:e.disabled,onChange:()=>{},tabIndex:-1})}):n&&(0,P.jsx)(`span`,{className:A.checkIcon,"aria-hidden":`true`,children:ne??V})]},e.value)})]})]})]}),r&&n&&(0,P.jsx)(`span`,{id:h,className:[A.supportText,s?A.supportDisabled:``].filter(Boolean).join(` `),children:n})]})},F.__docgenInfo={description:``,methods:[],displayName:`InputSelect`}})),I,L,R,z,B,V,H,U,fe,W,G,K,q,J,Y,X,Z,Q,$,pe;e((()=>{I=t(n(),1),de(),L=r(),R=(0,L.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,L.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,L.jsx)(`path`,{d:`M8 7v4M8 5.5v.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),z={Nenhum:void 0,"Ícone de informação (i)":R,"Ícone de aviso (!)":(0,L.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,L.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,L.jsx)(`path`,{d:`M8 11V8M8 5h.01`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})},B=[{value:`sp`,label:`São Paulo`},{value:`rj`,label:`Rio de Janeiro`},{value:`mg`,label:`Minas Gerais`},{value:`rs`,label:`Rio Grande do Sul`},{value:`ba`,label:`Bahia`},{value:`pr`,label:`Paraná`},{value:`sc`,label:`Santa Catarina`},{value:`go`,label:`Goiás`},{value:`pe`,label:`Pernambuco`},{value:`ce`,label:`Ceará`}],V=[{value:`eletronicos`,label:`Eletrônicos`},{value:`moda`,label:`Moda e Acessórios`},{value:`casa`,label:`Casa e Cozinha`},{value:`esportes`,label:`Esportes e Lazer`,disabled:!0},{value:`livros`,label:`Livros e Papelaria`},{value:`brinquedos`,label:`Brinquedos`,disabled:!0},{value:`beleza`,label:`Beleza e Cuidados Pessoais`},{value:`automotivo`,label:`Automotivo`},{value:`informatica`,label:`Informática`}],H=e=>{let[t,n]=I.useState(``);return(0,L.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,L.jsx)(F,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},U=e=>{let[t,n]=I.useState([]);return(0,L.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,L.jsx)(F,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},fe={title:`Components/InputSelect`,component:F,parameters:{layout:`padded`,docs:{description:{component:`Campo de seleção do Olist Design System. Suporta seleção simples, múltipla, autocomplete e multi autocomplete. Implementa padrão ARIA combobox/listbox com navegação completa por teclado (ArrowUp, ArrowDown, Enter, Escape, Space).`}}},tags:[`autodocs`],argTypes:{selectType:{control:`select`,options:[`single`,`multi`,`autocomplete`,`multi-autocomplete`],description:`Modo de seleção do componente.`,table:{defaultValue:{summary:`single`}}},label:{control:`text`,description:`Rótulo exibido acima do campo.`},placeholder:{control:`text`,description:`Texto exibido quando nenhuma opção está selecionada.`},supportText:{control:`text`,description:`Texto auxiliar exibido abaixo do campo.`},hasSupport:{control:`boolean`,description:`Controla a visibilidade do texto de suporte.`,table:{defaultValue:{summary:`true`}}},hasTooltip:{control:`boolean`,description:`Exibe ícone de tooltip ao lado do label.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Desabilita o campo impedindo qualquer interação.`,table:{defaultValue:{summary:`false`}}},tooltipIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de tooltip. Deve ser um SVG com currentColor.`},chevronIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de seta de abrir/fechar. Usa SVG interno por padrão.`},checkIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de seleção exibido nos itens escolhidos.`},removeIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de remoção nos chips do multi select.`},options:{control:!1,description:"Array de opções disponíveis: `{ value, label, disabled? }`."},value:{control:!1,description:"Valor controlado. `string` para single/autocomplete, `string[]` para multi."},onChange:{action:`onChange`,description:`Callback disparado ao selecionar ou remover uma opção.`}}},W={name:`Padrão (single select)`,render:e=>(0,L.jsx)(H,{...e}),args:{label:`Estado`,placeholder:`Selecione um estado`,supportText:`Selecione o estado de origem do pedido`,hasSupport:!0,options:B,selectType:`single`}},G={name:`Multi select`,render:e=>(0,L.jsx)(U,{...e}),args:{label:`Categorias`,placeholder:`Selecione as categorias`,supportText:`Você pode selecionar mais de uma categoria`,hasSupport:!0,selectType:`multi`,options:V},parameters:{docs:{description:{story:`Permite selecionar múltiplas opções. Os itens selecionados aparecem como chips dentro do trigger. Clique no "×" do chip ou na opção novamente para remover.`}}}},K={name:`Autocomplete (busca simples)`,render:e=>(0,L.jsx)(H,{...e}),args:{label:`Estado`,placeholder:`Busque e selecione`,hasSupport:!0,supportText:`Digite para filtrar as opções disponíveis`,selectType:`autocomplete`,options:B},parameters:{docs:{description:{story:`Abre um campo de busca ao abrir o dropdown. Filtra as opções em tempo real conforme o usuário digita.`}}}},q={name:`Multi autocomplete`,render:e=>(0,L.jsx)(U,{...e}),args:{label:`Estados de entrega`,placeholder:`Busque e selecione estados`,hasSupport:!0,supportText:`Digite para filtrar e selecione múltiplas opções`,selectType:`multi-autocomplete`,options:B},parameters:{docs:{description:{story:`Combina busca filtrada com seleção múltipla. Chips representam cada item selecionado.`}}}},J={name:`Com tooltip no label`,render:e=>(0,L.jsx)(H,{...e}),args:{label:`Estado de origem`,placeholder:`Selecione um estado`,hasTooltip:!0,tooltipIcon:R,hasSupport:!0,supportText:`O estado de onde o produto é despachado`,options:B,selectType:`single`}},Y={name:`Desabilitado`,args:{label:`Estado`,placeholder:`Campo indisponível`,supportText:`Este campo não está disponível no momento`,hasSupport:!0,disabled:!0,options:B,value:`sp`,selectType:`single`},parameters:{docs:{description:{story:`Estado desabilitado. Impede qualquer interação e aplica visual apagado. Pode exibir um valor pré-selecionado.`}}}},X={name:`Sem label (aria-label)`,render:e=>(0,L.jsx)(H,{...e}),args:{placeholder:`Selecione um estado`,"aria-label":`Estado de origem do pedido`,options:B,selectType:`single`},parameters:{docs:{description:{story:"Quando sem label visual, use `aria-label` para garantir acessibilidade ao leitor de tela."}}}},Z={name:`Com opções desabilitadas`,render:e=>(0,L.jsx)(H,{...e}),args:{label:`Categoria`,placeholder:`Selecione uma categoria`,hasSupport:!0,supportText:`Algumas categorias estão temporariamente indisponíveis`,options:V,selectType:`single`}},Q={name:`Multi select com valores pré-selecionados`,render:()=>{let[e,t]=I.useState([`sp`,`rj`,`pr`]);return(0,L.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,L.jsx)(F,{selectType:`multi`,label:`Estados selecionados`,options:B,value:e,onChange:t,hasSupport:!0,supportText:`Clique no × para remover um estado`})})}},$={name:`Todas as variantes`,render:()=>{let[e,t]=I.useState(``),[n,r]=I.useState([]);return(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,minHeight:`36rem`},children:[(0,L.jsx)(H,{label:`Single select`,placeholder:`Selecionar`,options:B,selectType:`single`,hasSupport:!0,supportText:`Seleção de item único`,value:e,onChange:t}),(0,L.jsx)(U,{label:`Multi select`,placeholder:`Selecionar múltiplos`,selectType:`multi`,options:V,hasSupport:!0,supportText:`Seleção múltipla com chips`,value:n,onChange:r}),(0,L.jsx)(H,{label:`Autocomplete`,placeholder:`Buscar e selecionar`,selectType:`autocomplete`,options:B,hasSupport:!0,supportText:`Com busca integrada`}),(0,L.jsx)(F,{label:`Desabilitado`,placeholder:`Campo desabilitado`,options:B,value:`sp`,disabled:!0,hasSupport:!0,supportText:`Indisponível no momento`,selectType:`single`})]})},parameters:{layout:`padded`}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Padrão (single select)',
  render: args => <SingleWrapper {...args} />,
  args: {
    label: 'Estado',
    placeholder: 'Selecione um estado',
    supportText: 'Selecione o estado de origem do pedido',
    hasSupport: true,
    options: mockEstados,
    selectType: 'single'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Multi select',
  render: args => <MultiWrapper {...args} />,
  args: {
    label: 'Categorias',
    placeholder: 'Selecione as categorias',
    supportText: 'Você pode selecionar mais de uma categoria',
    hasSupport: true,
    selectType: 'multi',
    options: mockCategorias
  },
  parameters: {
    docs: {
      description: {
        story: 'Permite selecionar múltiplas opções. Os itens selecionados aparecem como chips dentro do trigger. Clique no "×" do chip ou na opção novamente para remover.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Autocomplete (busca simples)',
  render: args => <SingleWrapper {...args} />,
  args: {
    label: 'Estado',
    placeholder: 'Busque e selecione',
    hasSupport: true,
    supportText: 'Digite para filtrar as opções disponíveis',
    selectType: 'autocomplete',
    options: mockEstados
  },
  parameters: {
    docs: {
      description: {
        story: 'Abre um campo de busca ao abrir o dropdown. Filtra as opções em tempo real conforme o usuário digita.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Multi autocomplete',
  render: args => <MultiWrapper {...args} />,
  args: {
    label: 'Estados de entrega',
    placeholder: 'Busque e selecione estados',
    hasSupport: true,
    supportText: 'Digite para filtrar e selecione múltiplas opções',
    selectType: 'multi-autocomplete',
    options: mockEstados
  },
  parameters: {
    docs: {
      description: {
        story: 'Combina busca filtrada com seleção múltipla. Chips representam cada item selecionado.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Com tooltip no label',
  render: args => <SingleWrapper {...args} />,
  args: {
    label: 'Estado de origem',
    placeholder: 'Selecione um estado',
    hasTooltip: true,
    tooltipIcon: TooltipIcon,
    hasSupport: true,
    supportText: 'O estado de onde o produto é despachado',
    options: mockEstados,
    selectType: 'single'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado',
  args: {
    label: 'Estado',
    placeholder: 'Campo indisponível',
    supportText: 'Este campo não está disponível no momento',
    hasSupport: true,
    disabled: true,
    options: mockEstados,
    value: 'sp',
    selectType: 'single'
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado. Impede qualquer interação e aplica visual apagado. Pode exibir um valor pré-selecionado.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Sem label (aria-label)',
  render: args => <SingleWrapper {...args} />,
  args: {
    placeholder: 'Selecione um estado',
    'aria-label': 'Estado de origem do pedido',
    options: mockEstados,
    selectType: 'single'
  },
  parameters: {
    docs: {
      description: {
        story: 'Quando sem label visual, use \`aria-label\` para garantir acessibilidade ao leitor de tela.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Com opções desabilitadas',
  render: args => <SingleWrapper {...args} />,
  args: {
    label: 'Categoria',
    placeholder: 'Selecione uma categoria',
    hasSupport: true,
    supportText: 'Algumas categorias estão temporariamente indisponíveis',
    options: mockCategorias,
    selectType: 'single'
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Multi select com valores pré-selecionados',
  render: () => {
    const [value, setValue] = React.useState<string[]>(['sp', 'rj', 'pr']);
    return <div style={{
      minHeight: '18rem'
    }}>
        <InputSelect selectType="multi" label="Estados selecionados" options={mockEstados} value={value} onChange={setValue} hasSupport supportText="Clique no × para remover um estado" />
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Todas as variantes',
  render: () => {
    const [single, setSingle] = React.useState('');
    const [multi, setMulti] = React.useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      minHeight: '36rem'
    }}>
        <SingleWrapper label="Single select" placeholder="Selecionar" options={mockEstados} selectType="single" hasSupport supportText="Seleção de item único" value={single} onChange={setSingle} />
        <MultiWrapper label="Multi select" placeholder="Selecionar múltiplos" selectType="multi" options={mockCategorias} hasSupport supportText="Seleção múltipla com chips" value={multi} onChange={setMulti} />
        <SingleWrapper label="Autocomplete" placeholder="Buscar e selecionar" selectType="autocomplete" options={mockEstados} hasSupport supportText="Com busca integrada" />
        <InputSelect label="Desabilitado" placeholder="Campo desabilitado" options={mockEstados} value="sp" disabled hasSupport supportText="Indisponível no momento" selectType="single" />
      </div>;
  },
  parameters: {
    layout: 'padded'
  }
}`,...$.parameters?.docs?.source}}},pe=[`Padrão`,`SeleçãoMúltipla`,`Autocomplete`,`MultiAutocomplete`,`ComTooltip`,`Desabilitado`,`SemLabel`,`ComOpçõesDesabilitadas`,`MultiComValoresSelecionados`,`TodasVariantes`]}))();export{K as Autocomplete,Z as ComOpçõesDesabilitadas,J as ComTooltip,Y as Desabilitado,q as MultiAutocomplete,Q as MultiComValoresSelecionados,W as Padrão,G as SeleçãoMúltipla,X as SemLabel,$ as TodasVariantes,pe as __namedExportsOrder,fe as default};