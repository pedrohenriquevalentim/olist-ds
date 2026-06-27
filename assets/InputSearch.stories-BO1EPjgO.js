import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-DXN-684X.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";var i,a,o,s,c,l,u,d,f,p,m,h,g=e((()=>{i=`_wrapper_1bqe0_7`,a=`_label_1bqe0_18`,o=`_labelDisabled_1bqe0_31`,s=`_inputBase_1bqe0_39`,c=`_input_1bqe0_39`,l=`_actionButton_1bqe0_116`,u=`_actionButtonLabel_1bqe0_164`,d=`_actionButtonIcon_1bqe0_172`,f=`_iconWrapper_1bqe0_209`,p=`_supportText_1bqe0_229`,m=`_supportTextDisabled_1bqe0_242`,h={wrapper:i,label:a,labelDisabled:o,inputBase:s,input:c,actionButton:l,actionButtonLabel:u,actionButtonIcon:d,iconWrapper:f,supportText:p,supportTextDisabled:m}}));function _(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M10.5 10.5L13.5 13.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}var v,y,b,x=e((()=>{v=t(n(),1),g(),y=r(),b=({action:e=`button`,label:t,placeholder:n=`Buscar`,support:r=!1,supportText:i,value:a=``,onChange:o,onSearch:s,isDisabled:c=!1,className:l})=>{let u=(0,v.useId)(),d=e=>{o?.(e.target.value)},f=e=>{e.key===`Enter`&&s?.(a)},p=()=>{s?.(a)};return(0,y.jsxs)(`div`,{className:[h.wrapper,l].filter(Boolean).join(` `),children:[t&&(0,y.jsx)(`label`,{htmlFor:u,className:[h.label,c?h.labelDisabled:``].filter(Boolean).join(` `),children:t}),(0,y.jsxs)(`div`,{className:h.inputBase,children:[(0,y.jsx)(`input`,{id:u,type:`search`,className:h.input,placeholder:n,value:a,onChange:d,onKeyDown:f,disabled:c,"aria-label":t??n,autoComplete:`off`}),e===`button`&&(0,y.jsxs)(`button`,{type:`button`,className:h.actionButton,onClick:p,disabled:c,"aria-label":`Buscar`,children:[(0,y.jsx)(`span`,{className:h.actionButtonLabel,children:`buscar`}),(0,y.jsx)(`span`,{className:h.iconWrapper,"aria-hidden":`true`,children:(0,y.jsx)(_,{})})]}),e===`button icon`&&(0,y.jsx)(`button`,{type:`button`,className:h.actionButtonIcon,onClick:p,disabled:c,"aria-label":`Buscar`,children:(0,y.jsx)(`span`,{className:h.iconWrapper,"aria-hidden":`true`,children:(0,y.jsx)(_,{})})})]}),r&&i&&(0,y.jsx)(`p`,{className:[h.supportText,c?h.supportTextDisabled:``].filter(Boolean).join(` `),children:i})]})},b.__docgenInfo={description:``,methods:[],displayName:`InputSearch`,props:{action:{required:!1,tsType:{name:`union`,raw:`'button' | 'button icon'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'button icon'`}]},description:`Variante da ação ao lado direito do campo`,defaultValue:{value:`'button'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Texto do label acima do campo`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder exibido quando o campo está vazio`,defaultValue:{value:`'Buscar'`,computed:!1}},support:{required:!1,tsType:{name:`boolean`},description:`Exibe o texto de suporte abaixo do campo`,defaultValue:{value:`false`,computed:!1}},supportText:{required:!1,tsType:{name:`string`},description:`Texto de suporte`},value:{required:!1,tsType:{name:`string`},description:`Valor controlado do input`,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback disparado ao digitar`},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback disparado ao acionar a busca (botão ou Enter)`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Desabilita o campo`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{S=t(n(),1),x(),C=r(),w={title:`Componentes/InputSearch`,component:b,tags:[`autodocs`],parameters:{docs:{description:{component:`Campo de busca com borda pill e duas variantes de ação: botão com texto ou botão ícone. Suporta label, texto de suporte e estado desabilitado.`}}},argTypes:{action:{control:{type:`select`},options:[`button`,`button icon`],description:`Variante do botão de ação à direita do campo`},label:{control:`text`,description:`Texto do label acima do campo`},placeholder:{control:`text`,description:`Texto exibido quando o campo está vazio`},support:{control:`boolean`,description:`Exibe o texto de suporte abaixo do campo`},supportText:{control:`text`,description:`Texto de suporte`},isDisabled:{control:`boolean`,description:`Desabilita o campo e o botão de ação`}}},T=e=>{let[t,n]=(0,S.useState)(``);return(0,C.jsx)(b,{...e,value:t,onChange:n})},E={name:`Padrão — Botão com texto`,render:e=>(0,C.jsx)(T,{...e}),args:{action:`button`,label:`Label text`,placeholder:`Placeholder text`,support:!1,supportText:`Support text`,isDisabled:!1}},D={name:`Variante — Botão ícone`,render:e=>(0,C.jsx)(T,{...e}),args:{action:`button icon`,label:`Label text`,placeholder:`Placeholder text`,support:!1,isDisabled:!1}},O={name:`Com texto de suporte`,render:e=>(0,C.jsx)(T,{...e}),args:{action:`button`,label:`Pesquisar pedido`,placeholder:`Digite o número do pedido`,support:!0,supportText:`Exemplo: #123456`,isDisabled:!1}},k={name:`Estado desabilitado`,args:{action:`button`,label:`Label text`,placeholder:`Placeholder text`,isDisabled:!0,support:!0,supportText:`Campo indisponível no momento`,value:``}},A={name:`Estado preenchido`,args:{action:`button`,label:`Label text`,placeholder:`Placeholder text`,value:`Filled text`,isDisabled:!1}},j={name:`Sem label`,render:e=>(0,C.jsx)(T,{...e}),args:{action:`button`,placeholder:`Buscar produtos`,isDisabled:!1}},M={name:`Todas as variantes`,render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`360px`},children:[(0,C.jsx)(b,{action:`button`,label:`Botão com texto — enabled`,placeholder:`Placeholder text`,value:``}),(0,C.jsx)(b,{action:`button icon`,label:`Botão ícone — enabled`,placeholder:`Placeholder text`,value:``}),(0,C.jsx)(b,{action:`button`,label:`Preenchido`,placeholder:`Placeholder text`,value:`Filled text`}),(0,C.jsx)(b,{action:`button`,label:`Desabilitado`,placeholder:`Placeholder text`,isDisabled:!0,value:``}),(0,C.jsx)(b,{action:`button`,label:`Com suporte`,placeholder:`Placeholder text`,support:!0,supportText:`Texto de suporte`,value:``})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Padrão — Botão com texto',
  render: args => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    support: false,
    supportText: 'Support text',
    isDisabled: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Variante — Botão ícone',
  render: args => <ControlledTemplate {...args} />,
  args: {
    action: 'button icon',
    label: 'Label text',
    placeholder: 'Placeholder text',
    support: false,
    isDisabled: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Com texto de suporte',
  render: args => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    label: 'Pesquisar pedido',
    placeholder: 'Digite o número do pedido',
    support: true,
    supportText: 'Exemplo: #123456',
    isDisabled: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Estado desabilitado',
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    isDisabled: true,
    support: true,
    supportText: 'Campo indisponível no momento',
    value: ''
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Estado preenchido',
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    value: 'Filled text',
    isDisabled: false
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Sem label',
  render: args => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    placeholder: 'Buscar produtos',
    isDisabled: false
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Todas as variantes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '360px'
  }}>
      <InputSearch action="button" label="Botão com texto — enabled" placeholder="Placeholder text" value="" />
      <InputSearch action="button icon" label="Botão ícone — enabled" placeholder="Placeholder text" value="" />
      <InputSearch action="button" label="Preenchido" placeholder="Placeholder text" value="Filled text" />
      <InputSearch action="button" label="Desabilitado" placeholder="Placeholder text" isDisabled value="" />
      <InputSearch action="button" label="Com suporte" placeholder="Placeholder text" support supportText="Texto de suporte" value="" />
    </div>
}`,...M.parameters?.docs?.source}}},N=[`Padrao`,`BotaoIcone`,`ComTextoSuporte`,`Desabilitado`,`Preenchido`,`SemLabel`,`TodasVariantes`]}))();export{D as BotaoIcone,O as ComTextoSuporte,k as Desabilitado,E as Padrao,A as Preenchido,j as SemLabel,M as TodasVariantes,N as __namedExportsOrder,w as default};