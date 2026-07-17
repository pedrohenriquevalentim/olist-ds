import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{Y as r}from"./iframe-BWUjP1Js.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{r as a,t as o}from"./Icon-BOKpAe1Z.js";var s,c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{s=`_wrapper_1mi52_7`,c=`_label_1mi52_18`,l=`_labelDisabled_1mi52_31`,u=`_inputBase_1mi52_39`,d=`_input_1mi52_39`,f=`_actionButton_1mi52_117`,p=`_actionButtonLabel_1mi52_165`,m=`_actionButtonIcon_1mi52_173`,h=`_iconWrapper_1mi52_210`,g=`_supportText_1mi52_230`,_=`_supportTextDisabled_1mi52_244`,v={wrapper:s,label:c,labelDisabled:l,inputBase:u,input:d,actionButton:f,actionButtonLabel:p,actionButtonIcon:m,iconWrapper:h,supportText:g,supportTextDisabled:_}})),b,x,S,C=t((()=>{b=n(r(),1),y(),a(),x=i(),S=({action:e=`button`,label:t,placeholder:n=`Buscar`,support:r=!1,supportText:i,value:a=``,onChange:s,onSearch:c,isDisabled:l=!1,className:u})=>{let d=(0,b.useId)(),f=e=>{s?.(e.target.value)},p=e=>{e.key===`Enter`&&c?.(a)},m=()=>{c?.(a)};return(0,x.jsxs)(`div`,{className:[v.wrapper,u].filter(Boolean).join(` `),children:[t&&(0,x.jsx)(`label`,{htmlFor:d,className:[v.label,l?v.labelDisabled:``].filter(Boolean).join(` `),children:t}),(0,x.jsxs)(`div`,{className:v.inputBase,children:[(0,x.jsx)(`input`,{id:d,type:`search`,className:v.input,placeholder:n,value:a,onChange:f,onKeyDown:p,disabled:l,"aria-label":t??n,autoComplete:`off`}),e===`button`&&(0,x.jsxs)(`button`,{type:`button`,className:v.actionButton,onClick:m,disabled:l,"aria-label":`Buscar`,children:[(0,x.jsx)(`span`,{className:v.actionButtonLabel,children:`buscar`}),(0,x.jsx)(`span`,{className:v.iconWrapper,"aria-hidden":`true`,children:(0,x.jsx)(o,{name:`search`,size:16,color:`currentColor`})})]}),e===`button icon`&&(0,x.jsx)(`button`,{type:`button`,className:v.actionButtonIcon,onClick:m,disabled:l,"aria-label":`Buscar`,children:(0,x.jsx)(`span`,{className:v.iconWrapper,"aria-hidden":`true`,children:(0,x.jsx)(o,{name:`search`,size:16,color:`currentColor`})})})]}),r&&i&&(0,x.jsx)(`p`,{className:[v.supportText,l?v.supportTextDisabled:``].filter(Boolean).join(` `),children:i})]})},S.__docgenInfo={description:``,methods:[],displayName:`InputSearch`,props:{action:{required:!1,tsType:{name:`union`,raw:`'button' | 'button icon'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'button icon'`}]},description:`Variante da ação ao lado direito do campo`,defaultValue:{value:`'button'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Texto do label acima do campo`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder exibido quando o campo está vazio`,defaultValue:{value:`'Buscar'`,computed:!1}},support:{required:!1,tsType:{name:`boolean`},description:`Exibe o texto de suporte abaixo do campo`,defaultValue:{value:`false`,computed:!1}},supportText:{required:!1,tsType:{name:`string`},description:`Texto de suporte`},value:{required:!1,tsType:{name:`string`},description:`Valor controlado do input`,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback disparado ao digitar`},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback disparado ao acionar a busca (botão ou Enter)`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Desabilita o campo`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),w=e({Estados:()=>j,Playground:()=>k,Variantes:()=>A,__namedExportsOrder:()=>M,default:()=>D}),T,E,D,O,k,A,j,M,N=t((()=>{T=n(r(),1),C(),E=i(),D={title:`Components/InputSearch`,component:S,parameters:{docs:{description:{component:`Campo de busca com borda pill e duas variantes de ação: botão com texto ou botão ícone. Suporta label, texto de suporte e estado desabilitado.`}}},argTypes:{action:{control:{type:`select`},options:[`button`,`button icon`],description:`Variante do botão de ação à direita do campo`},label:{control:`text`,description:`Texto do label acima do campo`},placeholder:{control:`text`,description:`Texto exibido quando o campo está vazio`},support:{control:`boolean`,description:`Exibe o texto de suporte abaixo do campo`},supportText:{control:`text`,description:`Texto de suporte`},isDisabled:{control:`boolean`,description:`Desabilita o campo e o botão de ação`}}},O=e=>{let[t,n]=(0,T.useState)(``);return(0,E.jsx)(S,{...e,value:t,onChange:n})},k={name:`Playground`,render:e=>(0,E.jsx)(O,{...e}),args:{action:`button`,label:`Label text`,placeholder:`Placeholder text`,support:!1}},A={render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`360px`},children:[(0,E.jsx)(S,{action:`button`,label:`Botão com texto`,placeholder:`Placeholder text`,value:``}),(0,E.jsx)(S,{action:`button icon`,label:`Botão ícone`,placeholder:`Placeholder text`,value:``})]}),parameters:{layout:`padded`}},j={render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`360px`},children:[(0,E.jsx)(S,{action:`button`,label:`Enabled`,placeholder:`Placeholder text`,value:``}),(0,E.jsx)(S,{action:`button`,label:`Preenchido`,placeholder:`Placeholder text`,value:`Filled text`}),(0,E.jsx)(S,{action:`button`,label:`Com suporte`,placeholder:`Placeholder text`,support:!0,supportText:`Texto de suporte`,value:``}),(0,E.jsx)(S,{action:`button`,label:`Desabilitado`,placeholder:`Placeholder text`,isDisabled:!0,value:``})]}),parameters:{layout:`padded`}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    support: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '360px'
  }}>
      <InputSearch action="button" label="Botão com texto" placeholder="Placeholder text" value="" />
      <InputSearch action="button icon" label="Botão ícone" placeholder="Placeholder text" value="" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '360px'
  }}>
      <InputSearch action="button" label="Enabled" placeholder="Placeholder text" value="" />
      <InputSearch action="button" label="Preenchido" placeholder="Placeholder text" value="Filled text" />
      <InputSearch action="button" label="Com suporte" placeholder="Placeholder text" support supportText="Texto de suporte" value="" />
      <InputSearch action="button" label="Desabilitado" placeholder="Placeholder text" isDisabled value="" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`Variantes`,`Estados`]}));N();export{j as Estados,k as Playground,A as Variantes,M as __namedExportsOrder,D as default,N as n,w as t};