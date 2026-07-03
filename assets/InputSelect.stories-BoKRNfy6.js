import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{Y as r}from"./iframe-Bpirv9YA.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{r as ee,t as a}from"./Icon-CkAn69Wa.js";import{n as te,t as ne}from"./Checkbox-lX0oAXHr.js";var re,o,ie,s,c,ae,oe,l,se,ce,le,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{re=`_wrapper_19x84_5`,o=`_triggerContainer_19x84_13`,ie=`_labelRow_19x84_19`,s=`_labelText_19x84_26`,c=`_labelDisabled_19x84_39`,ae=`_tooltipIcon_19x84_43`,oe=`_inputBase_19x84_62`,l=`_stateFocused_19x84_100`,se=`_stateFilled_19x84_106`,ce=`_stateDisabled_19x84_111`,le=`_triggerContent_19x84_121`,u=`_placeholderText_19x84_129`,d=`_selectedText_19x84_141`,f=`_chipsContainer_19x84_160`,p=`_chip_19x84_160`,m=`_chipLabel_19x84_185`,h=`_chipRemove_19x84_191`,g=`_chevron_19x84_214`,_=`_listboxWrapper_19x84_237`,v=`_searchWrapper_19x84_251`,y=`_searchInput_19x84_256`,b=`_listbox_19x84_237`,x=`_listItem_19x84_294`,S=`_listItemDisabled_19x84_308`,C=`_listItemSelected_19x84_316`,w=`_listItemFocused_19x84_328`,T=`_listItemLabel_19x84_343`,E=`_checkboxWrapper_19x84_366`,D=`_checkIcon_19x84_376`,O=`_emptyMessage_19x84_394`,k=`_supportText_19x84_406`,A=`_supportDisabled_19x84_419`,j={wrapper:re,triggerContainer:o,labelRow:ie,labelText:s,labelDisabled:c,tooltipIcon:ae,inputBase:oe,stateFocused:l,stateFilled:se,stateDisabled:ce,triggerContent:le,placeholderText:u,selectedText:d,chipsContainer:f,chip:p,chipLabel:m,chipRemove:h,chevron:g,listboxWrapper:_,searchWrapper:v,searchInput:y,listbox:b,listItem:x,listItemDisabled:S,listItemSelected:C,listItemFocused:w,listItemLabel:T,checkboxWrapper:E,checkIcon:D,emptyMessage:O,supportText:k,supportDisabled:A}})),ue=t((()=>{te()})),N,P,de,fe,pe,F,me=t((()=>{N=n(r(),1),M(),ue(),ee(),P=i(),de=e=>e.selectType===`multi`||e.selectType===`multi-autocomplete`,fe=e=>e.selectType===`autocomplete`||e.selectType===`multi-autocomplete`,pe=({label:e,onRemove:t,removeIcon:n,disabled:r})=>{let i=(0,P.jsx)(a,{name:`close`,size:16,color:`currentColor`});return(0,P.jsxs)(`span`,{className:j.chip,children:[(0,P.jsx)(`span`,{className:j.chipLabel,children:e}),!r&&(0,P.jsx)(`span`,{role:`button`,className:j.chipRemove,onClick:e=>{e.stopPropagation(),t()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.stopPropagation(),t())},"aria-label":`Remover ${e}`,tabIndex:-1,children:n??i})]})},F=e=>{let{label:t,supportText:n,hasSupport:r=!0,hasTooltip:i=!1,tooltipIcon:ee,chevronIcon:te,checkIcon:re,removeIcon:o,placeholder:ie=`Selecionar`,options:s=[],disabled:c=!1,id:ae,className:oe,"aria-label":l,"aria-labelledby":se,"aria-describedby":ce}=e,le=(0,N.useId)(),u=ae??le,d=`${u}-label`,f=`${u}-listbox`,p=`${u}-support`,m=de(e),h=fe(e),[g,_]=(0,N.useState)(!1),[v,y]=(0,N.useState)(-1),[b,x]=(0,N.useState)(``),S=(0,N.useRef)(null),C=(0,N.useRef)(null),w=(0,N.useRef)(null),T=(()=>{if(m){let t=e.value;return Array.isArray(t)?t:[]}let t=e.value;return t?[t]:[]})(),E=h&&b?s.filter(e=>e.label.toLowerCase().includes(b.toLowerCase())):s,D=T.length>0,O=(0,N.useCallback)(()=>{c||(_(!0),y(-1),h&&setTimeout(()=>w.current?.focus(),0))},[c,h]),k=(0,N.useCallback)(()=>{_(!1),y(-1),x(``)},[]),A=(0,N.useCallback)(()=>{g?k():O()},[g,O,k]);(0,N.useEffect)(()=>{if(!g)return;let e=e=>{S.current&&!S.current.contains(e.target)&&k()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[g,k]);let M=(0,N.useCallback)(t=>{if(!t.disabled)if(m){let n=e.value??[],r=n.includes(t.value)?n.filter(e=>e!==t.value):[...n,t.value];e.onChange?.(r)}else e.onChange?.(t.value),k(),C.current?.focus()},[m,e,k]),ue=(0,N.useCallback)(t=>{if(!m)return;let n=e.value??[];e.onChange?.(n.filter(e=>e!==t))},[m,e]),F=e=>{switch(e.key){case`Enter`:case` `:e.preventDefault(),g&&v>=0&&E[v]?M(E[v]):A();break;case`ArrowDown`:e.preventDefault(),g||O(),y(e=>Math.min(e+1,E.length-1));break;case`ArrowUp`:e.preventDefault(),g||O(),y(e=>Math.max(e-1,0));break;case`Escape`:e.preventDefault(),k();break}},me=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),y(e=>Math.min(e+1,E.length-1));break;case`ArrowUp`:e.preventDefault(),y(e=>Math.max(e-1,0));break;case`Enter`:e.preventDefault(),v>=0&&E[v]&&M(E[v]);break;case`Escape`:e.preventDefault(),k(),C.current?.focus();break}},he=m?null:s.find(t=>t.value===e.value)?.label??null,I=[j.inputBase,c?j.stateDisabled:``,g?j.stateFocused:D?j.stateFilled:``].filter(Boolean).join(` `),L=(0,P.jsx)(a,{name:g?`chevron-top`:`chevron-down`,size:16,color:`currentColor`}),R=(0,P.jsx)(a,{name:`check`,size:16,color:`currentColor`}),z=(0,P.jsx)(a,{name:`help-circle`,size:16,color:`currentColor`});return(0,P.jsxs)(`div`,{ref:S,className:[j.wrapper,oe].filter(Boolean).join(` `),children:[t&&(0,P.jsxs)(`div`,{className:j.labelRow,children:[(0,P.jsx)(`label`,{id:d,htmlFor:u,className:[j.labelText,c?j.labelDisabled:``].filter(Boolean).join(` `),children:t}),i&&(0,P.jsx)(`span`,{className:j.tooltipIcon,role:`img`,"aria-label":`Informação adicional`,children:ee??z})]}),(0,P.jsxs)(`div`,{className:j.triggerContainer,children:[(0,P.jsxs)(`button`,{ref:C,id:u,type:`button`,role:`combobox`,"aria-haspopup":`listbox`,"aria-expanded":g,"aria-controls":g?f:void 0,"aria-labelledby":t?d:se,"aria-label":t?void 0:l,"aria-describedby":r&&n?p:ce,"aria-disabled":c,disabled:c,className:I,onClick:A,onKeyDown:F,children:[(0,P.jsx)(`span`,{className:j.triggerContent,children:m&&T.length>0?(0,P.jsx)(`span`,{className:j.chipsContainer,children:T.map(e=>{let t=s.find(t=>t.value===e);return t?(0,P.jsx)(pe,{label:t.label,onRemove:()=>ue(e),removeIcon:o,disabled:c},e):null})}):(0,P.jsx)(`span`,{className:he?j.selectedText:j.placeholderText,children:he??ie})}),(0,P.jsx)(`span`,{className:j.chevron,"aria-hidden":`true`,children:te??L})]}),g&&(0,P.jsxs)(`div`,{className:j.listboxWrapper,children:[h&&(0,P.jsx)(`div`,{className:j.searchWrapper,children:(0,P.jsx)(`input`,{ref:w,type:`text`,className:j.searchInput,placeholder:`Buscar...`,value:b,onChange:e=>{x(e.target.value),y(-1)},onKeyDown:me,"aria-label":`Buscar opções`,"aria-autocomplete":`list`,"aria-controls":f})}),(0,P.jsxs)(`ul`,{id:f,role:`listbox`,"aria-multiselectable":m,"aria-label":t??l??`Opções disponíveis`,className:j.listbox,onKeyDown:me,tabIndex:-1,children:[E.length===0&&(0,P.jsx)(`li`,{className:j.emptyMessage,role:`presentation`,children:`Nenhuma opção encontrada`}),E.map((e,t)=>{let n=T.includes(e.value),r=v===t;return(0,P.jsxs)(`li`,{id:`${f}-option-${e.value}`,role:`option`,"aria-selected":n,"aria-disabled":e.disabled,className:[j.listItem,n?j.listItemSelected:``,r?j.listItemFocused:``,e.disabled?j.listItemDisabled:``].filter(Boolean).join(` `),onClick:()=>M(e),onMouseEnter:()=>y(t),children:[(0,P.jsx)(`span`,{className:j.listItemLabel,children:e.label}),m?(0,P.jsx)(`span`,{className:j.checkboxWrapper,"aria-hidden":`true`,children:(0,P.jsx)(ne,{checked:n,disabled:e.disabled,onChange:()=>{},tabIndex:-1})}):n&&(0,P.jsx)(`span`,{className:j.checkIcon,"aria-hidden":`true`,children:re??R})]},e.value)})]})]})]}),r&&n&&(0,P.jsx)(`span`,{id:p,className:[j.supportText,c?j.supportDisabled:``].filter(Boolean).join(` `),children:n})]})},F.__docgenInfo={description:``,methods:[],displayName:`InputSelect`}})),he=e({Autocomplete:()=>K,ComOpçõesDesabilitadas:()=>Z,ComTooltip:()=>J,Desabilitado:()=>Y,MultiAutocomplete:()=>q,MultiComValoresSelecionados:()=>Q,Playground:()=>W,SeleçãoMúltipla:()=>G,SemLabel:()=>X,TodasVariantes:()=>$,__namedExportsOrder:()=>_e,default:()=>ge}),I,L,R,z,B,V,H,U,ge,W,G,K,q,J,Y,X,Z,Q,$,_e,ve=t((()=>{I=n(r(),1),me(),L=i(),R=(0,L.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,L.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,L.jsx)(`path`,{d:`M8 7v4M8 5.5v.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),z={Nenhum:void 0,"Ícone de informação (i)":R,"Ícone de aviso (!)":(0,L.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,L.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,L.jsx)(`path`,{d:`M8 11V8M8 5h.01`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})},B=[{value:`sp`,label:`São Paulo`},{value:`rj`,label:`Rio de Janeiro`},{value:`mg`,label:`Minas Gerais`},{value:`rs`,label:`Rio Grande do Sul`},{value:`ba`,label:`Bahia`},{value:`pr`,label:`Paraná`},{value:`sc`,label:`Santa Catarina`},{value:`go`,label:`Goiás`},{value:`pe`,label:`Pernambuco`},{value:`ce`,label:`Ceará`}],V=[{value:`eletronicos`,label:`Eletrônicos`},{value:`moda`,label:`Moda e Acessórios`},{value:`casa`,label:`Casa e Cozinha`},{value:`esportes`,label:`Esportes e Lazer`,disabled:!0},{value:`livros`,label:`Livros e Papelaria`},{value:`brinquedos`,label:`Brinquedos`,disabled:!0},{value:`beleza`,label:`Beleza e Cuidados Pessoais`},{value:`automotivo`,label:`Automotivo`},{value:`informatica`,label:`Informática`}],H=e=>{let[t,n]=I.useState(``);return(0,L.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,L.jsx)(F,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},U=e=>{let[t,n]=I.useState([]);return(0,L.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,L.jsx)(F,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},ge={title:`Components/InputSelect`,component:F,parameters:{layout:`padded`,docs:{description:{component:`Campo de seleção do Olist Design System. Suporta seleção simples, múltipla, autocomplete e multi autocomplete. Implementa padrão ARIA combobox/listbox com navegação completa por teclado (ArrowUp, ArrowDown, Enter, Escape, Space).`}}},argTypes:{selectType:{control:`select`,options:[`single`,`multi`,`autocomplete`,`multi-autocomplete`],description:`Modo de seleção do componente.`,table:{defaultValue:{summary:`single`}}},label:{control:`text`,description:`Rótulo exibido acima do campo.`},placeholder:{control:`text`,description:`Texto exibido quando nenhuma opção está selecionada.`},supportText:{control:`text`,description:`Texto auxiliar exibido abaixo do campo.`},hasSupport:{control:`boolean`,description:`Controla a visibilidade do texto de suporte.`,table:{defaultValue:{summary:`true`}}},hasTooltip:{control:`boolean`,description:`Exibe ícone de tooltip ao lado do label.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Desabilita o campo impedindo qualquer interação.`,table:{defaultValue:{summary:`false`}}},tooltipIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de tooltip. Deve ser um SVG com currentColor.`},chevronIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de seta de abrir/fechar. Usa SVG interno por padrão.`},checkIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de seleção exibido nos itens escolhidos.`},removeIcon:{control:{type:`select`},options:Object.keys(z),mapping:z,description:`Ícone de remoção nos chips do multi select.`},options:{control:!1,description:"Array de opções disponíveis: `{ value, label, disabled? }`."},value:{control:!1,description:"Valor controlado. `string` para single/autocomplete, `string[]` para multi."},onChange:{action:`onChange`,description:`Callback disparado ao selecionar ou remover uma opção.`}}},W={render:e=>(0,L.jsx)(H,{...e}),args:{label:`Estado`,placeholder:`Selecione um estado`,supportText:`Selecione o estado de origem do pedido`,hasSupport:!0,options:B,selectType:`single`}},G={name:`Multi select`,render:e=>(0,L.jsx)(U,{...e}),args:{label:`Categorias`,placeholder:`Selecione as categorias`,supportText:`Você pode selecionar mais de uma categoria`,hasSupport:!0,selectType:`multi`,options:V},parameters:{docs:{description:{story:`Permite selecionar múltiplas opções. Os itens selecionados aparecem como chips dentro do trigger. Clique no "×" do chip ou na opção novamente para remover.`}}}},K={name:`Autocomplete (busca simples)`,render:e=>(0,L.jsx)(H,{...e}),args:{label:`Estado`,placeholder:`Busque e selecione`,hasSupport:!0,supportText:`Digite para filtrar as opções disponíveis`,selectType:`autocomplete`,options:B},parameters:{docs:{description:{story:`Abre um campo de busca ao abrir o dropdown. Filtra as opções em tempo real conforme o usuário digita.`}}}},q={name:`Multi autocomplete`,render:e=>(0,L.jsx)(U,{...e}),args:{label:`Estados de entrega`,placeholder:`Busque e selecione estados`,hasSupport:!0,supportText:`Digite para filtrar e selecione múltiplas opções`,selectType:`multi-autocomplete`,options:B},parameters:{docs:{description:{story:`Combina busca filtrada com seleção múltipla. Chips representam cada item selecionado.`}}}},J={name:`Com tooltip no label`,render:e=>(0,L.jsx)(H,{...e}),args:{label:`Estado de origem`,placeholder:`Selecione um estado`,hasTooltip:!0,tooltipIcon:R,hasSupport:!0,supportText:`O estado de onde o produto é despachado`,options:B,selectType:`single`}},Y={name:`Desabilitado`,args:{label:`Estado`,placeholder:`Campo indisponível`,supportText:`Este campo não está disponível no momento`,hasSupport:!0,disabled:!0,options:B,value:`sp`,selectType:`single`},parameters:{docs:{description:{story:`Estado desabilitado. Impede qualquer interação e aplica visual apagado. Pode exibir um valor pré-selecionado.`}}}},X={name:`Sem label (aria-label)`,render:e=>(0,L.jsx)(H,{...e}),args:{placeholder:`Selecione um estado`,"aria-label":`Estado de origem do pedido`,options:B,selectType:`single`},parameters:{docs:{description:{story:"Quando sem label visual, use `aria-label` para garantir acessibilidade ao leitor de tela."}}}},Z={name:`Com opções desabilitadas`,render:e=>(0,L.jsx)(H,{...e}),args:{label:`Categoria`,placeholder:`Selecione uma categoria`,hasSupport:!0,supportText:`Algumas categorias estão temporariamente indisponíveis`,options:V,selectType:`single`}},Q={name:`Multi select com valores pré-selecionados`,render:()=>{let[e,t]=I.useState([`sp`,`rj`,`pr`]);return(0,L.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,L.jsx)(F,{selectType:`multi`,label:`Estados selecionados`,options:B,value:e,onChange:t,hasSupport:!0,supportText:`Clique no × para remover um estado`})})}},$={name:`Todas as variantes`,render:()=>{let[e,t]=I.useState(``),[n,r]=I.useState([]);return(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,minHeight:`36rem`},children:[(0,L.jsx)(H,{label:`Single select`,placeholder:`Selecionar`,options:B,selectType:`single`,hasSupport:!0,supportText:`Seleção de item único`,value:e,onChange:t}),(0,L.jsx)(U,{label:`Multi select`,placeholder:`Selecionar múltiplos`,selectType:`multi`,options:V,hasSupport:!0,supportText:`Seleção múltipla com chips`,value:n,onChange:r}),(0,L.jsx)(H,{label:`Autocomplete`,placeholder:`Buscar e selecionar`,selectType:`autocomplete`,options:B,hasSupport:!0,supportText:`Com busca integrada`}),(0,L.jsx)(F,{label:`Desabilitado`,placeholder:`Campo desabilitado`,options:B,value:`sp`,disabled:!0,hasSupport:!0,supportText:`Indisponível no momento`,selectType:`single`})]})},parameters:{layout:`padded`}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},_e=[`Playground`,`SeleçãoMúltipla`,`Autocomplete`,`MultiAutocomplete`,`ComTooltip`,`Desabilitado`,`SemLabel`,`ComOpçõesDesabilitadas`,`MultiComValoresSelecionados`,`TodasVariantes`]}));ve();export{K as Autocomplete,Z as ComOpçõesDesabilitadas,J as ComTooltip,Y as Desabilitado,q as MultiAutocomplete,Q as MultiComValoresSelecionados,W as Playground,G as SeleçãoMúltipla,X as SemLabel,$ as TodasVariantes,_e as __namedExportsOrder,ge as default,ve as n,he as t};