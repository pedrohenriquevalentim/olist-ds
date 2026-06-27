import{i as e}from"./preload-helper-CT_b8DTk.js";import{Y as t}from"./iframe-DXN-684X.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";var r,i,a,o,s,c,l,u=e((()=>{r=`_button_1j9l3_7`,i=`_primary_1j9l3_45`,a=`_secondary_1j9l3_77`,o=`_tertiary_1j9l3_107`,s=`_iconWrapper_1j9l3_131`,c=`_label_1j9l3_151`,l={button:r,primary:i,secondary:a,tertiary:o,iconWrapper:s,label:c}})),d,f,p=e((()=>{t(),u(),d=n(),f=({variant:e=`primary`,label:t,leadIcon:n,actionIcon:r,children:i,disabled:a=!1,className:o,...s})=>{let c=i??t;return(0,d.jsxs)(`button`,{className:[l.button,l[e],o].filter(Boolean).join(` `),disabled:a,...s,children:[n&&(0,d.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:n}),c&&(0,d.jsx)(`span`,{className:l.label,children:c}),r&&(0,d.jsx)(`span`,{className:l.iconWrapper,"aria-hidden":`true`,children:r})]})},f.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},leadIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actionIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{t(),p(),m=n(),h=(0,m.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),g=(0,m.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M6 4l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),_=(0,m.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M8 3v7m0 0L5.5 7.5M8 10l2.5-2.5M3 13h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),v={Nenhum:void 0,"Adicionar (+)":h,"Seta direita (→)":g,"Baixar (↓)":_,"Excluir (🗑)":(0,m.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M3 4h10M6 4V3h4v1M5 4v9h6V4H5z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})},y={title:`Components/Button`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`],description:`Define a hierarquia visual do botão.`,table:{defaultValue:{summary:`primary`}}},label:{control:`text`,description:"Texto exibido no botão. Substituído por `children` quando fornecido."},disabled:{control:`boolean`,description:`Desabilita o botão impedindo interações.`,table:{defaultValue:{summary:`false`}}},leadIcon:{control:{type:`select`},options:Object.keys(v),mapping:v,description:"Ícone exibido à esquerda do rótulo. Deve ser um SVG com `currentColor`."},actionIcon:{control:{type:`select`},options:Object.keys(v),mapping:v,description:"Ícone exibido à direita do rótulo. Deve ser um SVG com `currentColor`."},onClick:{action:`clicado`,description:`Callback disparado ao clicar no botão.`},children:{table:{disable:!0}}}},b={name:`Padrão`,args:{label:`Confirmar`,variant:`primary`}},x={args:{label:`Salvar alterações`,variant:`primary`,leadIcon:h}},S={args:{label:`Cancelar`,variant:`secondary`}},C={args:{label:`Ver detalhes`,variant:`tertiary`,actionIcon:g}},w={name:`Desabilitado`,args:{label:`Indisponível`,disabled:!0},parameters:{docs:{description:{story:`Estado desabilitado. Bloqueia cliques e eventos de teclado.`}}}},T={name:`Com ícone à esquerda (lead)`,args:{label:`Adicionar item`,variant:`primary`,leadIcon:h}},E={name:`Com ícone à direita (action)`,args:{label:`Próximo`,variant:`primary`,actionIcon:g}},D={name:`Com dois ícones`,args:{label:`Baixar relatório`,variant:`secondary`,leadIcon:_,actionIcon:g}},O={name:`Todas as variantes`,render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:`#827f73`,width:`80px`},children:`Primary`}),(0,m.jsx)(f,{variant:`primary`,label:`Habilitado`,leadIcon:h}),(0,m.jsx)(f,{variant:`primary`,label:`Desabilitado`,leadIcon:h,disabled:!0}),(0,m.jsx)(f,{variant:`primary`,label:`Sem ícone`})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:`#827f73`,width:`80px`},children:`Secondary`}),(0,m.jsx)(f,{variant:`secondary`,label:`Habilitado`,leadIcon:h}),(0,m.jsx)(f,{variant:`secondary`,label:`Desabilitado`,leadIcon:h,disabled:!0}),(0,m.jsx)(f,{variant:`secondary`,label:`Sem ícone`})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:`#827f73`,width:`80px`},children:`Tertiary`}),(0,m.jsx)(f,{variant:`tertiary`,label:`Habilitado`,leadIcon:h}),(0,m.jsx)(f,{variant:`tertiary`,label:`Desabilitado`,leadIcon:h,disabled:!0}),(0,m.jsx)(f,{variant:`tertiary`,label:`Sem ícone`})]})]}),parameters:{layout:`padded`}},k={name:`Posicionamento de ícones`,render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,m.jsx)(f,{variant:`primary`,label:`Lead icon`,leadIcon:h}),(0,m.jsx)(f,{variant:`primary`,label:`Action icon`,actionIcon:g}),(0,m.jsx)(f,{variant:`primary`,label:`Ambos`,leadIcon:_,actionIcon:g}),(0,m.jsx)(f,{variant:`primary`,label:`Sem ícone`})]}),parameters:{layout:`padded`}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Padrão',
  args: {
    label: 'Confirmar',
    variant: 'primary'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Salvar alterações',
    variant: 'primary',
    leadIcon: PlusIcon
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Cancelar',
    variant: 'secondary'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ver detalhes',
    variant: 'tertiary',
    actionIcon: ArrowRightIcon
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado',
  args: {
    label: 'Indisponível',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado. Bloqueia cliques e eventos de teclado.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Com ícone à esquerda (lead)',
  args: {
    label: 'Adicionar item',
    variant: 'primary',
    leadIcon: PlusIcon
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Com ícone à direita (action)',
  args: {
    label: 'Próximo',
    variant: 'primary',
    actionIcon: ArrowRightIcon
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Com dois ícones',
  args: {
    label: 'Baixar relatório',
    variant: 'secondary',
    leadIcon: DownloadIcon,
    actionIcon: ArrowRightIcon
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Todas as variantes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#827f73',
        width: '80px'
      }}>Primary</span>
        <Button variant="primary" label="Habilitado" leadIcon={PlusIcon} />
        <Button variant="primary" label="Desabilitado" leadIcon={PlusIcon} disabled />
        <Button variant="primary" label="Sem ícone" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#827f73',
        width: '80px'
      }}>Secondary</span>
        <Button variant="secondary" label="Habilitado" leadIcon={PlusIcon} />
        <Button variant="secondary" label="Desabilitado" leadIcon={PlusIcon} disabled />
        <Button variant="secondary" label="Sem ícone" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#827f73',
        width: '80px'
      }}>Tertiary</span>
        <Button variant="tertiary" label="Habilitado" leadIcon={PlusIcon} />
        <Button variant="tertiary" label="Desabilitado" leadIcon={PlusIcon} disabled />
        <Button variant="tertiary" label="Sem ícone" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Posicionamento de ícones',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" label="Lead icon" leadIcon={PlusIcon} />
      <Button variant="primary" label="Action icon" actionIcon={ArrowRightIcon} />
      <Button variant="primary" label="Ambos" leadIcon={DownloadIcon} actionIcon={ArrowRightIcon} />
      <Button variant="primary" label="Sem ícone" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...k.parameters?.docs?.source}}},A=[`Padrão`,`Primário`,`Secundário`,`Terciário`,`Desabilitado`,`ComÍconeLead`,`ComÍconeAction`,`ComDoisÍcones`,`TodasVariantes`,`PosicionamentoÍcones`]}))();export{D as ComDoisÍcones,E as ComÍconeAction,T as ComÍconeLead,w as Desabilitado,b as Padrão,k as PosicionamentoÍcones,x as Primário,S as Secundário,C as Terciário,O as TodasVariantes,A as __namedExportsOrder,y as default};