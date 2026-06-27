import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-DXN-684X.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";var i,a,o,s,c,l,u,d,f,p=e((()=>{i=`_wrapper_1whbv_7`,a=`_labelRow_1whbv_18`,o=`_label_1whbv_18`,s=`_tooltipWrapper_1whbv_50`,c=`_inputBase_1whbv_69`,l=`_leadIcon_1whbv_132`,u=`_input_1whbv_69`,d=`_supportText_1whbv_215`,f={wrapper:i,labelRow:a,label:o,tooltipWrapper:s,inputBase:c,leadIcon:l,input:u,supportText:d}}));function m(){return(0,g.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,g.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,g.jsx)(`path`,{d:`M8 7.25V11`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,g.jsx)(`circle`,{cx:`8`,cy:`5`,r:`0.75`,fill:`currentColor`})]})}var h,g,_,v=e((()=>{h=t(n(),1),p(),g=r(),_=({label:e,placeholder:t=`Placeholder text`,leadIcon:n,hasSupport:r=!1,supportText:i,hasTooltip:a=!1,tooltipText:o=`tooltip text`,isSuccess:s=!1,isError:c=!1,isDisabled:l=!1,value:u,onChange:d,className:p,id:_,...v})=>{let y=(0,h.useId)(),b=_??y,x=e=>{d?.(e.target.value)},S=l?`disabled`:c?`error`:s?`success`:`default`;return(0,g.jsxs)(`div`,{className:[f.wrapper,p].filter(Boolean).join(` `),"data-state":S,children:[e&&(0,g.jsxs)(`div`,{className:f.labelRow,children:[(0,g.jsx)(`label`,{htmlFor:b,className:f.label,children:e}),a&&(0,g.jsx)(`div`,{className:f.tooltipWrapper,role:`tooltip`,"aria-label":o,children:(0,g.jsx)(m,{})})]}),(0,g.jsxs)(`div`,{className:f.inputBase,children:[n&&(0,g.jsx)(`span`,{className:f.leadIcon,"aria-hidden":`true`,children:n}),(0,g.jsx)(`input`,{id:b,type:`text`,className:f.input,placeholder:t,value:u,onChange:x,disabled:l,"aria-label":e??t,"aria-invalid":c?!0:void 0,"aria-describedby":r&&i?`${b}-support`:void 0,...v})]}),r&&i&&(0,g.jsx)(`p`,{id:`${b}-support`,className:f.supportText,role:c?`alert`:void 0,children:i})]})},_.__docgenInfo={description:``,methods:[],displayName:`InputText`,props:{label:{required:!1,tsType:{name:`string`},description:`Texto do label acima do campo`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder exibido quando o campo está vazio`,defaultValue:{value:`'Placeholder text'`,computed:!1}},leadIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Ícone à esquerda dentro do campo`},hasSupport:{required:!1,tsType:{name:`boolean`},description:`Exibe o texto de suporte abaixo do campo`,defaultValue:{value:`false`,computed:!1}},supportText:{required:!1,tsType:{name:`string`},description:`Texto de suporte`},hasTooltip:{required:!1,tsType:{name:`boolean`},description:`Exibe ícone de tooltip ao lado do label`,defaultValue:{value:`false`,computed:!1}},tooltipText:{required:!1,tsType:{name:`string`},description:`Texto do tooltip`,defaultValue:{value:`'tooltip text'`,computed:!1}},isSuccess:{required:!1,tsType:{name:`boolean`},description:`Estado de sucesso — sobrepõe estilos de borda e suporte`,defaultValue:{value:`false`,computed:!1}},isError:{required:!1,tsType:{name:`boolean`},description:`Estado de erro — sobrepõe estilos de borda e suporte`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Desabilita o campo`,defaultValue:{value:`false`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Valor controlado`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback disparado ao digitar`},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{y=t(n(),1),v(),b=r(),x=()=>(0,b.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`rect`,{x:`1.5`,y:`3.5`,width:`13`,height:`9`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,b.jsx)(`path`,{d:`M1.5 5.5L8 9.5L14.5 5.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),S=()=>(0,b.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`circle`,{cx:`8`,cy:`5.5`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,b.jsx)(`path`,{d:`M2.5 13.5C2.5 11.015 5.015 9 8 9C10.985 9 13.5 11.015 13.5 13.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),C={title:`Componentes/InputText`,component:_,tags:[`autodocs`],parameters:{docs:{description:{component:`Campo de texto de linha única com suporte a label, ícone de lead, tooltip, texto de suporte e estados de validação (success, error, disabled).`}}},argTypes:{label:{control:`text`,description:`Texto do label acima do campo`},placeholder:{control:`text`,description:`Texto exibido quando o campo está vazio`},leadIcon:{control:{type:`select`},options:[`nenhum`,`email`,`usuario`],mapping:{nenhum:void 0,email:(0,b.jsx)(x,{}),usuario:(0,b.jsx)(S,{})},description:`Ícone à esquerda dentro do campo (ReactNode)`},hasSupport:{control:`boolean`,description:`Exibe o texto de suporte abaixo do campo`},supportText:{control:`text`,description:`Texto de suporte`},hasTooltip:{control:`boolean`,description:`Exibe o ícone de informação ao lado do label`},tooltipText:{control:`text`,description:`Conteúdo acessível do tooltip`},isSuccess:{control:`boolean`,description:`Estado de sucesso — destaca o campo em verde`},isError:{control:`boolean`,description:`Estado de erro — destaca o campo em vermelho`},isDisabled:{control:`boolean`,description:`Desabilita o campo`}}},w=e=>{let[t,n]=(0,y.useState)(``);return(0,b.jsx)(_,{...e,value:t,onChange:n})},T={name:`Padrão — Enabled`,render:e=>(0,b.jsx)(w,{...e}),args:{label:`Label text`,placeholder:`Placeholder text`,hasSupport:!0,supportText:`Support text`,isDisabled:!1,isError:!1,isSuccess:!1}},E={name:`Com ícone de lead`,render:e=>(0,b.jsx)(w,{...e}),args:{label:`E-mail`,placeholder:`seu@email.com`,leadIcon:(0,b.jsx)(x,{}),hasSupport:!1,isDisabled:!1}},D={name:`Com tooltip`,render:e=>(0,b.jsx)(w,{...e}),args:{label:`CNPJ`,placeholder:`00.000.000/0001-00`,hasTooltip:!0,tooltipText:`Informe o CNPJ sem pontuação`,hasSupport:!0,supportText:`Apenas números`,isDisabled:!1}},O={name:`Estado — Success`,args:{label:`Label text`,placeholder:`Placeholder text`,value:`Filled text`,isSuccess:!0,hasSupport:!0,supportText:`Valor válido`}},k={name:`Estado — Error`,args:{label:`Label text`,placeholder:`Placeholder text`,value:`Filled text`,isError:!0,hasSupport:!0,supportText:`Este campo é obrigatório`}},A={name:`Estado — Disabled`,args:{label:`Label text`,placeholder:`Placeholder text`,isDisabled:!0,hasSupport:!0,supportText:`Campo indisponível no momento`,value:``}},j={name:`Todos os estados`,render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`,maxWidth:`22.5rem`},children:[(0,b.jsx)(_,{label:`Enabled`,placeholder:`Placeholder text`,hasSupport:!0,supportText:`Support text`}),(0,b.jsx)(_,{label:`Preenchido`,placeholder:`Placeholder text`,value:`Filled text`,hasSupport:!0,supportText:`Support text`}),(0,b.jsx)(_,{label:`Success`,placeholder:`Placeholder text`,value:`Filled text`,isSuccess:!0,hasSupport:!0,supportText:`Valor confirmado`}),(0,b.jsx)(_,{label:`Error`,placeholder:`Placeholder text`,value:`Filled text`,isError:!0,hasSupport:!0,supportText:`Valor inválido`}),(0,b.jsx)(_,{label:`Disabled`,placeholder:`Placeholder text`,isDisabled:!0,hasSupport:!0,supportText:`Campo indisponível`}),(0,b.jsx)(_,{label:`Com ícone`,placeholder:`seu@email.com`,leadIcon:(0,b.jsx)(x,{}),hasSupport:!0,supportText:`Support text`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Padrão — Enabled',
  render: args => <ControlledTemplate {...args} />,
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    hasSupport: true,
    supportText: 'Support text',
    isDisabled: false,
    isError: false,
    isSuccess: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Com ícone de lead',
  render: args => <ControlledTemplate {...args} />,
  args: {
    label: 'E-mail',
    placeholder: 'seu@email.com',
    leadIcon: <EmailIcon />,
    hasSupport: false,
    isDisabled: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Com tooltip',
  render: args => <ControlledTemplate {...args} />,
  args: {
    label: 'CNPJ',
    placeholder: '00.000.000/0001-00',
    hasTooltip: true,
    tooltipText: 'Informe o CNPJ sem pontuação',
    hasSupport: true,
    supportText: 'Apenas números',
    isDisabled: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Estado — Success',
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    value: 'Filled text',
    isSuccess: true,
    hasSupport: true,
    supportText: 'Valor válido'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Estado — Error',
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    value: 'Filled text',
    isError: true,
    hasSupport: true,
    supportText: 'Este campo é obrigatório'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Estado — Disabled',
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    isDisabled: true,
    hasSupport: true,
    supportText: 'Campo indisponível no momento',
    value: ''
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Todos os estados',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '22.5rem'
  }}>
      <InputText label="Enabled" placeholder="Placeholder text" hasSupport supportText="Support text" />
      <InputText label="Preenchido" placeholder="Placeholder text" value="Filled text" hasSupport supportText="Support text" />
      <InputText label="Success" placeholder="Placeholder text" value="Filled text" isSuccess hasSupport supportText="Valor confirmado" />
      <InputText label="Error" placeholder="Placeholder text" value="Filled text" isError hasSupport supportText="Valor inválido" />
      <InputText label="Disabled" placeholder="Placeholder text" isDisabled hasSupport supportText="Campo indisponível" />
      <InputText label="Com ícone" placeholder="seu@email.com" leadIcon={<EmailIcon />} hasSupport supportText="Support text" />
    </div>
}`,...j.parameters?.docs?.source}}},M=[`Padrao`,`ComIcone`,`ComTooltip`,`Sucesso`,`Erro`,`Desabilitado`,`TodosEstados`]}))();export{E as ComIcone,D as ComTooltip,A as Desabilitado,k as Erro,T as Padrao,O as Sucesso,j as TodosEstados,M as __namedExportsOrder,C as default};