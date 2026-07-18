import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{Y as r}from"./iframe-DikSea-c.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{r as a,t as o}from"./Icon-zItjDDht.js";var s,c,l,u,d,f,p,m,h,ee,te,g,_,v,y,ne,b,re,x,ie,S,C,w,T,E,ae,D,O,k,A,j,oe,M,N,P,se=t((()=>{s=`_wrapper_k3dk4_5`,c=`_triggerContainer_k3dk4_13`,l=`_labelRow_k3dk4_19`,u=`_labelText_k3dk4_26`,d=`_labelDisabled_k3dk4_39`,f=`_tooltipIcon_k3dk4_43`,p=`_inputBase_k3dk4_62`,m=`_stateDisabled_k3dk4_82`,h=`_stateFocused_k3dk4_100`,ee=`_stateFilled_k3dk4_106`,te=`_triggerContent_k3dk4_121`,g=`_placeholderText_k3dk4_129`,_=`_selectedText_k3dk4_141`,v=`_chipsContainer_k3dk4_162`,y=`_chip_k3dk4_162`,ne=`_chipLabel_k3dk4_187`,b=`_chipRemove_k3dk4_193`,re=`_chevron_k3dk4_216`,x=`_listboxWrapper_k3dk4_240`,ie=`_searchWrapper_k3dk4_254`,S=`_searchInput_k3dk4_259`,C=`_listbox_k3dk4_240`,w=`_listItem_k3dk4_297`,T=`_listItemDisabled_k3dk4_311`,E=`_listItemSelected_k3dk4_319`,ae=`_listItemFocused_k3dk4_331`,D=`_listItemLabel_k3dk4_346`,O=`_checkboxVisual_k3dk4_372`,k=`_checkboxVisualChecked_k3dk4_387`,A=`_checkboxVisualDisabled_k3dk4_393`,j=`_checkIcon_k3dk4_405`,oe=`_emptyMessage_k3dk4_423`,M=`_supportText_k3dk4_435`,N=`_supportDisabled_k3dk4_448`,P={wrapper:s,triggerContainer:c,labelRow:l,labelText:u,labelDisabled:d,tooltipIcon:f,inputBase:p,stateDisabled:m,stateFocused:h,stateFilled:ee,triggerContent:te,placeholderText:g,selectedText:_,chipsContainer:v,chip:y,chipLabel:ne,chipRemove:b,chevron:re,listboxWrapper:x,searchWrapper:ie,searchInput:S,listbox:C,listItem:w,listItemDisabled:T,listItemSelected:E,listItemFocused:ae,listItemLabel:D,checkboxVisual:O,checkboxVisualChecked:k,checkboxVisualDisabled:A,checkIcon:j,emptyMessage:oe,supportText:M,supportDisabled:N}})),F,I,ce,le,L,ue,de,R,fe=t((()=>{F=n(r(),1),se(),a(),I=i(),ce=e=>e.selectType===`multi`||e.selectType===`multi-autocomplete`,le=e=>e.selectType===`autocomplete`||e.selectType===`multi-autocomplete`,L=({label:e,onRemove:t,removeIcon:n,disabled:r})=>(0,I.jsxs)(`span`,{className:P.chip,children:[(0,I.jsx)(`span`,{className:P.chipLabel,children:e}),!r&&(0,I.jsx)(`button`,{type:`button`,className:P.chipRemove,onClick:e=>{e.stopPropagation(),t()},"aria-label":`Remover ${e}`,tabIndex:-1,children:n??(0,I.jsx)(o,{name:`close`,size:16,color:`currentColor`})})]}),ue=({triggerRef:e,inputId:t,listboxId:n,isOpen:r,disabled:i,isMulti:a,activeOptionId:s,className:c,labelId:l,ariaLabel:u,ariaLabelledBy:d,ariaDescribedBy:f,selectedValues:p,options:m,triggerLabel:h,placeholder:ee,chevronIcon:te,removeIcon:g,onToggle:_,onKeyDown:v,onRemoveChip:y})=>(0,I.jsxs)(`div`,{ref:e,id:t,role:`combobox`,tabIndex:i?-1:0,"aria-haspopup":`listbox`,"aria-expanded":r,"aria-controls":r?n:void 0,"aria-activedescendant":s,"aria-labelledby":l??d,"aria-label":l?void 0:u,"aria-describedby":f,"aria-disabled":i,className:c,onClick:_,onKeyDown:v,children:[(0,I.jsx)(`span`,{className:P.triggerContent,children:a&&p.length>0?(0,I.jsx)(`span`,{className:P.chipsContainer,children:p.map(e=>{let t=m.find(t=>t.value===e);return t?(0,I.jsx)(L,{label:t.label,onRemove:()=>y(e),removeIcon:g,disabled:i},e):null})}):(0,I.jsx)(`span`,{className:h?P.selectedText:P.placeholderText,children:h??ee})}),(0,I.jsx)(`span`,{className:P.chevron,"aria-hidden":`true`,children:te??(0,I.jsx)(o,{name:r?`chevron-top`:`chevron-down`,size:16,color:`currentColor`})})]}),de=({listboxId:e,isMulti:t,isAutocomplete:n,listboxLabel:r,activeOptionId:i,searchRef:a,searchQuery:s,filteredOptions:c,selectedValues:l,focusedIndex:u,checkIcon:d,onSearchChange:f,onKeyDown:p,onSelect:m,onFocusIndex:h})=>(0,I.jsxs)(`div`,{className:P.listboxWrapper,children:[n&&(0,I.jsx)(`div`,{className:P.searchWrapper,children:(0,I.jsx)(`input`,{ref:a,type:`text`,className:P.searchInput,placeholder:`Buscar...`,value:s,onChange:e=>f(e.target.value),onKeyDown:p,"aria-label":`Buscar opções`,"aria-autocomplete":`list`,"aria-controls":e,"aria-activedescendant":i})}),(0,I.jsxs)(`ul`,{id:e,role:`listbox`,"aria-multiselectable":t,"aria-label":r,className:P.listbox,onKeyDown:p,tabIndex:-1,children:[c.length===0&&(0,I.jsx)(`li`,{className:P.emptyMessage,role:`presentation`,children:`Nenhuma opção encontrada`}),c.map((n,r)=>{let i=l.includes(n.value),a=u===r;return(0,I.jsxs)(`li`,{id:`${e}-option-${r}`,role:`option`,"aria-selected":i,"aria-disabled":n.disabled,className:[P.listItem,i?P.listItemSelected:``,a?P.listItemFocused:``,n.disabled?P.listItemDisabled:``].filter(Boolean).join(` `),onClick:()=>m(n),onMouseEnter:()=>h(r),children:[(0,I.jsx)(`span`,{className:P.listItemLabel,children:n.label}),t?(0,I.jsx)(`span`,{className:[P.checkboxVisual,i?P.checkboxVisualChecked:``,n.disabled?P.checkboxVisualDisabled:``].filter(Boolean).join(` `),"aria-hidden":`true`,children:i&&(0,I.jsx)(o,{name:`check`,size:12,color:`currentColor`})}):i&&(0,I.jsx)(`span`,{className:P.checkIcon,"aria-hidden":`true`,children:d??(0,I.jsx)(o,{name:`check`,size:16,color:`currentColor`})})]},n.value)})]})]}),R=e=>{let{label:t,supportText:n,hasSupport:r=!0,hasTooltip:i=!1,tooltipIcon:a,chevronIcon:s,checkIcon:c,removeIcon:l,placeholder:u=`Selecionar`,options:d=[],disabled:f=!1,id:p,className:m,"aria-label":h,"aria-labelledby":ee,"aria-describedby":te}=e,g=ce(e)?e:void 0,_=ce(e)?void 0:e,v=g!==void 0,y=le(e),ne=(0,F.useId)(),b=p??ne,re=`${b}-label`,x=`${b}-listbox`,ie=`${b}-support`,[S,C]=(0,F.useState)(!1),[w,T]=(0,F.useState)(-1),[E,ae]=(0,F.useState)(``),D=(0,F.useRef)(null),O=(0,F.useRef)(null),k=(0,F.useRef)(null),A=g?g.value??[]:_?.value?[_.value]:[],j=y&&E?d.filter(e=>e.label.toLowerCase().includes(E.toLowerCase())):d,oe=A.length>0,M=(0,F.useCallback)(()=>{f||(C(!0),T(-1),y&&setTimeout(()=>k.current?.focus(),0))},[f,y]),N=(0,F.useCallback)(()=>{C(!1),T(-1),ae(``)},[]),se=(0,F.useCallback)(()=>{f||(S?N():M())},[f,S,M,N]);(0,F.useEffect)(()=>{if(!S)return;let e=e=>{D.current&&!D.current.contains(e.target)&&N()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[S,N]);let L=(0,F.useCallback)(e=>{if(!e.disabled)if(g){let t=g.value??[],n=t.includes(e.value)?t.filter(t=>t!==e.value):[...t,e.value];g.onChange?.(n)}else _&&(_.onChange?.(e.value),N(),O.current?.focus())},[g,_,N]),R=(0,F.useCallback)(e=>{if(!g)return;let t=g.value??[];g.onChange?.(t.filter(t=>t!==e))},[g]),fe=e=>{if(!f)switch(e.key){case`Enter`:case` `:e.preventDefault(),S&&w>=0&&j[w]?L(j[w]):se();break;case`ArrowDown`:e.preventDefault(),S||M(),T(e=>Math.min(e+1,j.length-1));break;case`ArrowUp`:e.preventDefault(),S||M(),T(e=>Math.max(e-1,0));break;case`Home`:if(!S)break;e.preventDefault(),T(0);break;case`End`:if(!S)break;e.preventDefault(),T(j.length-1);break;case`Backspace`:v&&A.length>0&&(e.preventDefault(),R(A[A.length-1]));break;case`Escape`:e.preventDefault(),N();break}},pe=e=>{switch(e.key){case`ArrowDown`:e.preventDefault(),T(e=>Math.min(e+1,j.length-1));break;case`ArrowUp`:e.preventDefault(),T(e=>Math.max(e-1,0));break;case`Enter`:e.preventDefault(),w>=0&&j[w]&&L(j[w]);break;case`Home`:case`End`:if(e.currentTarget===k.current)break;e.preventDefault(),T(e.key===`Home`?0:j.length-1);break;case`Escape`:e.preventDefault(),N(),O.current?.focus();break}},z=S&&w>=0&&j[w]?`${x}-option-${w}`:void 0;(0,F.useEffect)(()=>{if(!z)return;let e=document.getElementById(z);typeof e?.scrollIntoView==`function`&&e.scrollIntoView({block:`nearest`})},[z]);let B=_?d.find(e=>e.value===_.value)?.label??null:null,me=[P.inputBase,f?P.stateDisabled:``,S?P.stateFocused:oe?P.stateFilled:``].filter(Boolean).join(` `);return(0,I.jsxs)(`div`,{ref:D,className:[P.wrapper,m].filter(Boolean).join(` `),children:[t&&(0,I.jsxs)(`div`,{className:P.labelRow,children:[(0,I.jsx)(`label`,{id:re,htmlFor:b,className:[P.labelText,f?P.labelDisabled:``].filter(Boolean).join(` `),children:t}),i&&(0,I.jsx)(`span`,{className:P.tooltipIcon,role:`img`,"aria-label":`Informação adicional`,children:a??(0,I.jsx)(o,{name:`help-circle`,size:16,color:`currentColor`})})]}),(0,I.jsxs)(`div`,{className:P.triggerContainer,children:[(0,I.jsx)(ue,{triggerRef:O,inputId:b,listboxId:x,isOpen:S,disabled:f,isMulti:v,activeOptionId:z,className:me,labelId:t?re:void 0,ariaLabel:h,ariaLabelledBy:ee,ariaDescribedBy:r&&n?ie:te,selectedValues:A,options:d,triggerLabel:B,placeholder:u,chevronIcon:s,removeIcon:l,onToggle:se,onKeyDown:fe,onRemoveChip:R}),S&&(0,I.jsx)(de,{listboxId:x,isMulti:v,isAutocomplete:y,listboxLabel:t??h??`Opções disponíveis`,activeOptionId:z,searchRef:k,searchQuery:E,filteredOptions:j,selectedValues:A,focusedIndex:w,checkIcon:c,onSearchChange:e=>{ae(e),T(-1)},onKeyDown:pe,onSelect:L,onFocusIndex:T})]}),r&&n&&(0,I.jsx)(`span`,{id:ie,className:[P.supportText,f?P.supportDisabled:``].filter(Boolean).join(` `),children:n})]})},R.__docgenInfo={description:``,methods:[],displayName:`InputSelect`}})),pe=e({Autocomplete:()=>K,ComOpçõesDesabilitadas:()=>Z,ComTooltip:()=>J,Desabilitado:()=>Y,MultiAutocomplete:()=>q,MultiComValoresSelecionados:()=>Q,Playground:()=>W,SeleçãoMúltipla:()=>G,SemLabel:()=>X,TodasVariantes:()=>$,__namedExportsOrder:()=>ve,default:()=>_e}),z,B,me,V,H,he,U,ge,_e,W,G,K,q,J,Y,X,Z,Q,$,ve,ye=t((()=>{z=n(r(),1),fe(),B=i(),me=(0,B.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,B.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,B.jsx)(`path`,{d:`M8 7v4M8 5.5v.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),V={Nenhum:void 0,"Ícone de informação (i)":me,"Ícone de aviso (!)":(0,B.jsxs)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,B.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,B.jsx)(`path`,{d:`M8 11V8M8 5h.01`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})},H=[{value:`sp`,label:`São Paulo`},{value:`rj`,label:`Rio de Janeiro`},{value:`mg`,label:`Minas Gerais`},{value:`rs`,label:`Rio Grande do Sul`},{value:`ba`,label:`Bahia`},{value:`pr`,label:`Paraná`},{value:`sc`,label:`Santa Catarina`},{value:`go`,label:`Goiás`},{value:`pe`,label:`Pernambuco`},{value:`ce`,label:`Ceará`}],he=[{value:`eletronicos`,label:`Eletrônicos`},{value:`moda`,label:`Moda e Acessórios`},{value:`casa`,label:`Casa e Cozinha`},{value:`esportes`,label:`Esportes e Lazer`,disabled:!0},{value:`livros`,label:`Livros e Papelaria`},{value:`brinquedos`,label:`Brinquedos`,disabled:!0},{value:`beleza`,label:`Beleza e Cuidados Pessoais`},{value:`automotivo`,label:`Automotivo`},{value:`informatica`,label:`Informática`}],U=e=>{let[t,n]=z.useState(``);return(0,B.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,B.jsx)(R,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},ge=e=>{let[t,n]=z.useState([]);return(0,B.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,B.jsx)(R,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})},_e={title:`Components/InputSelect`,component:R,parameters:{layout:`padded`,docs:{description:{component:`Campo de seleção do Olist Design System. Suporta seleção simples, múltipla, autocomplete e multi autocomplete. Implementa padrão ARIA combobox/listbox com navegação completa por teclado (ArrowUp, ArrowDown, Enter, Escape, Space).`}}},argTypes:{selectType:{control:`select`,options:[`single`,`multi`,`autocomplete`,`multi-autocomplete`],description:`Modo de seleção do componente.`,table:{defaultValue:{summary:`single`}}},label:{control:`text`,description:`Rótulo exibido acima do campo.`},placeholder:{control:`text`,description:`Texto exibido quando nenhuma opção está selecionada.`},supportText:{control:`text`,description:`Texto auxiliar exibido abaixo do campo.`},hasSupport:{control:`boolean`,description:`Controla a visibilidade do texto de suporte.`,table:{defaultValue:{summary:`true`}}},hasTooltip:{control:`boolean`,description:`Exibe ícone de tooltip ao lado do label.`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Desabilita o campo impedindo qualquer interação.`,table:{defaultValue:{summary:`false`}}},tooltipIcon:{control:{type:`select`},options:Object.keys(V),mapping:V,description:`Ícone de tooltip. Deve ser um SVG com currentColor.`},chevronIcon:{control:{type:`select`},options:Object.keys(V),mapping:V,description:`Ícone de seta de abrir/fechar. Usa SVG interno por padrão.`},checkIcon:{control:{type:`select`},options:Object.keys(V),mapping:V,description:`Ícone de seleção exibido nos itens escolhidos.`},removeIcon:{control:{type:`select`},options:Object.keys(V),mapping:V,description:`Ícone de remoção nos chips do multi select.`},options:{control:!1,description:"Array de opções disponíveis: `{ value, label, disabled? }`."},value:{control:!1,description:"Valor controlado. `string` para single/autocomplete, `string[]` para multi."},onChange:{action:`onChange`,description:`Callback disparado ao selecionar ou remover uma opção.`}}},W={render:e=>(0,B.jsx)(U,{...e}),args:{label:`Estado`,placeholder:`Selecione um estado`,supportText:`Selecione o estado de origem do pedido`,hasSupport:!0,options:H,selectType:`single`}},G={name:`Multi select`,render:e=>(0,B.jsx)(ge,{...e}),args:{label:`Categorias`,placeholder:`Selecione as categorias`,supportText:`Você pode selecionar mais de uma categoria`,hasSupport:!0,selectType:`multi`,options:he},parameters:{docs:{description:{story:`Permite selecionar múltiplas opções. Os itens selecionados aparecem como chips dentro do trigger. Clique no "×" do chip ou na opção novamente para remover.`}}}},K={name:`Autocomplete (busca simples)`,render:e=>(0,B.jsx)(U,{...e}),args:{label:`Estado`,placeholder:`Busque e selecione`,hasSupport:!0,supportText:`Digite para filtrar as opções disponíveis`,selectType:`autocomplete`,options:H},parameters:{docs:{description:{story:`Abre um campo de busca ao abrir o dropdown. Filtra as opções em tempo real conforme o usuário digita.`}}}},q={name:`Multi autocomplete`,render:e=>(0,B.jsx)(ge,{...e}),args:{label:`Estados de entrega`,placeholder:`Busque e selecione estados`,hasSupport:!0,supportText:`Digite para filtrar e selecione múltiplas opções`,selectType:`multi-autocomplete`,options:H},parameters:{docs:{description:{story:`Combina busca filtrada com seleção múltipla. Chips representam cada item selecionado.`}}}},J={name:`Com tooltip no label`,render:e=>(0,B.jsx)(U,{...e}),args:{label:`Estado de origem`,placeholder:`Selecione um estado`,hasTooltip:!0,tooltipIcon:me,hasSupport:!0,supportText:`O estado de onde o produto é despachado`,options:H,selectType:`single`}},Y={name:`Desabilitado`,args:{label:`Estado`,placeholder:`Campo indisponível`,supportText:`Este campo não está disponível no momento`,hasSupport:!0,disabled:!0,options:H,value:`sp`,selectType:`single`},parameters:{docs:{description:{story:`Estado desabilitado. Impede qualquer interação e aplica visual apagado. Pode exibir um valor pré-selecionado.`}}}},X={name:`Sem label (aria-label)`,render:e=>(0,B.jsx)(U,{...e}),args:{placeholder:`Selecione um estado`,"aria-label":`Estado de origem do pedido`,options:H,selectType:`single`},parameters:{docs:{description:{story:"Quando sem label visual, use `aria-label` para garantir acessibilidade ao leitor de tela."}}}},Z={name:`Com opções desabilitadas`,render:e=>(0,B.jsx)(U,{...e}),args:{label:`Categoria`,placeholder:`Selecione uma categoria`,hasSupport:!0,supportText:`Algumas categorias estão temporariamente indisponíveis`,options:he,selectType:`single`}},Q={name:`Multi select com valores pré-selecionados`,render:()=>{let[e,t]=z.useState([`sp`,`rj`,`pr`]);return(0,B.jsx)(`div`,{style:{minHeight:`18rem`},children:(0,B.jsx)(R,{selectType:`multi`,label:`Estados selecionados`,options:H,value:e,onChange:t,hasSupport:!0,supportText:`Clique no × para remover um estado`})})}},$={name:`Todas as variantes`,render:()=>{let[e,t]=z.useState(``),[n,r]=z.useState([]);return(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2rem`,minHeight:`36rem`},children:[(0,B.jsx)(U,{label:`Single select`,placeholder:`Selecionar`,options:H,selectType:`single`,hasSupport:!0,supportText:`Seleção de item único`,value:e,onChange:t}),(0,B.jsx)(ge,{label:`Multi select`,placeholder:`Selecionar múltiplos`,selectType:`multi`,options:he,hasSupport:!0,supportText:`Seleção múltipla com chips`,value:n,onChange:r}),(0,B.jsx)(U,{label:`Autocomplete`,placeholder:`Buscar e selecionar`,selectType:`autocomplete`,options:H,hasSupport:!0,supportText:`Com busca integrada`}),(0,B.jsx)(R,{label:`Desabilitado`,placeholder:`Campo desabilitado`,options:H,value:`sp`,disabled:!0,hasSupport:!0,supportText:`Indisponível no momento`,selectType:`single`})]})},parameters:{layout:`padded`}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ve=[`Playground`,`SeleçãoMúltipla`,`Autocomplete`,`MultiAutocomplete`,`ComTooltip`,`Desabilitado`,`SemLabel`,`ComOpçõesDesabilitadas`,`MultiComValoresSelecionados`,`TodasVariantes`]}));ye();export{K as Autocomplete,Z as ComOpçõesDesabilitadas,J as ComTooltip,Y as Desabilitado,q as MultiAutocomplete,Q as MultiComValoresSelecionados,W as Playground,G as SeleçãoMúltipla,X as SemLabel,$ as TodasVariantes,ve as __namedExportsOrder,_e as default,ye as n,pe as t};