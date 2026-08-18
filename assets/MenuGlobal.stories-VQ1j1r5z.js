import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-DM8GrSjJ.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{r as i,t as a}from"./Icon-B1K3iYX6.js";import{n as o,t as s}from"./Logo-CQ1T8J2Q.js";import{n as c,t as ee}from"./ProdutosOlistIcons-bYjowUFE.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{l=`_container_1k05c_5`,u=`_logoArea_1k05c_17`,d=`_divider_1k05c_31`,f=`_productList_1k05c_42`,p=`_menuItemContent_1k05c_70`,m=`_animPulse_1k05c_77`,h=`_menuItemBtn_1k05c_88`,g=`_itemSelected_1k05c_85`,_=`_iconBtn_1k05c_138`,v=`_notificationDot_1k05c_147`,y=`_userSection_1k05c_160`,b=`_userList_1k05c_169`,x=`_avatarBtn_1k05c_187`,S=`_avatarProfile_1k05c_199`,C=`_avatarInitials_1k05c_207`,w=`_avatarImage_1k05c_208`,T=`_companyLogo_1k05c_247`,E=`_companyLogoImage_1k05c_263`,D=`_companyLogoInitials_1k05c_270`,O=`_tooltipContainer_1k05c_290`,k=`_tooltipArrow_1k05c_320`,A=`_tooltipLabel_1k05c_329`,j={container:l,logoArea:u,divider:d,productList:f,menuItemContent:p,animPulse:m,"highlight-pulse":`_highlight-pulse_1k05c_1`,menuItemBtn:h,itemSelected:g,iconBtn:_,notificationDot:v,userSection:y,userList:b,avatarBtn:x,avatarProfile:S,avatarInitials:C,avatarImage:w,companyLogo:T,companyLogoImage:E,companyLogoInitials:D,tooltipContainer:O,tooltipArrow:k,tooltipLabel:A}})),N=e((()=>{c()})),P=e((()=>{o()})),F,I,L,R,z,B,V,H=e((()=>{F=t(n(),1),M(),N(),i(),P(),I=r(),L=[`Sistema ERP`,`Hub de Integração`,`Sistema PDV`,`Conta Digital`,`Envios`,`Ecommerce`,`Crédito`,`Agentes de IA`],R={"Sistema ERP":`Sistema ERP`,"Hub de Integração":`Hub de Integração`,"Sistema PDV":`Sistema PDV`,"Conta Digital":`Conta Digital`,Envios:`Envios`,Ecommerce:`Ecommerce`,Crédito:`Crédito`,"Agentes de IA":`Agentes de IA`},z={"Menu do Usuario":`Menu do usuário`,Notificacoes:`Notificações`,Configuracoes:`Configurações`,"Central de Ajuda":`Central de Ajuda`},B=e=>(R[e]??z[e])||e,V=({produtos:e=L,produtoSelecionado:t,avatarLabel:n=`PN`,avatarImageUrl:r,companyLogoUrl:i,companyLogoLabel:o,notificacoesPendentes:c=!1,onNavigate:l,className:u})=>{let[d,f]=F.useState(t),[p,m]=F.useState(t);p!==t&&(m(t),f(t));let[h,g]=F.useState(null),[_,v]=F.useState(null),y=e=>{f(e),l?.(e)},b=e=>d===e,x=e=>({onMouseEnter:()=>{g(e),b(e)||v(e)},onMouseLeave:()=>g(null)}),S=!!(i||o),C=h===`Notificacoes`||b(`Notificacoes`)?`bell-fill`:`bell`,w=h===`Central de Ajuda`||b(`Central de Ajuda`)?`help-circle-fill`:`help-circle`;return(0,I.jsxs)(`nav`,{className:[j.container,u].filter(Boolean).join(` `),"aria-label":`Navegação global`,children:[(0,I.jsx)(`div`,{className:j.logoArea,children:(0,I.jsx)(s,{size:`symbol`})}),(0,I.jsx)(`hr`,{className:j.divider,"aria-hidden":`true`}),(0,I.jsx)(`ul`,{className:j.productList,role:`menu`,"aria-label":`Produtos`,children:e.map(e=>{let t=b(e),n=h===e;return(0,I.jsx)(`li`,{role:`none`,children:(0,I.jsxs)(`button`,{type:`button`,role:`menuitem`,"aria-label":R[e],"aria-current":t?`page`:void 0,className:j.menuItemBtn,onClick:()=>y(e),...x(e),children:[(0,I.jsx)(`span`,{className:[j.menuItemContent,_===e?j.animPulse:``].filter(Boolean).join(` `),onAnimationEnd:()=>v(null),children:(0,I.jsx)(ee,{product:e,state:t?`active`:`default`,hovered:n&&!t,theme:`dark`,"aria-hidden":!0})}),(0,I.jsxs)(`span`,{className:j.tooltipContainer,"aria-hidden":`true`,children:[(0,I.jsx)(`span`,{className:j.tooltipArrow}),(0,I.jsx)(`span`,{className:j.tooltipLabel,children:B(e)})]})]})},e)})}),(0,I.jsx)(`hr`,{className:j.divider,"aria-hidden":`true`}),(0,I.jsx)(`div`,{className:j.userSection,children:(0,I.jsxs)(`ul`,{role:`menu`,"aria-label":`Configurações do usuário`,className:j.userList,children:[(0,I.jsx)(`li`,{role:`none`,children:(0,I.jsxs)(`button`,{type:`button`,role:`menuitem`,"aria-label":`Menu do usuário`,"aria-current":b(`Menu do Usuario`)?`page`:void 0,className:[j.menuItemBtn,j.avatarBtn,b(`Menu do Usuario`)?j.itemSelected:``].filter(Boolean).join(` `),onClick:()=>y(`Menu do Usuario`),...x(`Menu do Usuario`),children:[(0,I.jsx)(`span`,{className:[j.menuItemContent,_===`Menu do Usuario`?j.animPulse:``].filter(Boolean).join(` `),onAnimationEnd:()=>v(null),children:S?(0,I.jsxs)(`span`,{className:j.avatarProfile,children:[r?(0,I.jsx)(`img`,{src:r,alt:``,className:j.avatarImage}):(0,I.jsx)(`span`,{className:j.avatarInitials,"aria-hidden":`true`,children:n.slice(0,2).toUpperCase()}),(0,I.jsx)(`span`,{className:j.companyLogo,children:i?(0,I.jsx)(`img`,{src:i,alt:``,className:j.companyLogoImage}):(0,I.jsx)(`span`,{className:j.companyLogoInitials,"aria-hidden":`true`,children:(o??``).slice(0,2).toUpperCase()})})]}):r?(0,I.jsx)(`img`,{src:r,alt:``,className:j.avatarImage}):(0,I.jsx)(`span`,{className:j.avatarInitials,"aria-hidden":`true`,children:n.slice(0,2).toUpperCase()})}),(0,I.jsxs)(`span`,{className:j.tooltipContainer,"aria-hidden":`true`,children:[(0,I.jsx)(`span`,{className:j.tooltipArrow}),(0,I.jsx)(`span`,{className:j.tooltipLabel,children:z[`Menu do Usuario`]})]})]})}),(0,I.jsx)(`li`,{role:`none`,children:(0,I.jsxs)(`button`,{type:`button`,role:`menuitem`,"aria-label":c?`Notificações (pendentes)`:`Notificações`,"aria-current":b(`Notificacoes`)?`page`:void 0,className:[j.menuItemBtn,j.iconBtn,b(`Notificacoes`)?j.itemSelected:``].filter(Boolean).join(` `),onClick:()=>y(`Notificacoes`),...x(`Notificacoes`),children:[(0,I.jsxs)(`span`,{className:[j.menuItemContent,_===`Notificacoes`?j.animPulse:``].filter(Boolean).join(` `),onAnimationEnd:()=>v(null),children:[(0,I.jsx)(a,{name:C,size:16,color:`currentColor`,"aria-hidden":!0}),c&&(0,I.jsx)(`span`,{className:j.notificationDot,"aria-hidden":`true`})]}),(0,I.jsxs)(`span`,{className:j.tooltipContainer,"aria-hidden":`true`,children:[(0,I.jsx)(`span`,{className:j.tooltipArrow}),(0,I.jsx)(`span`,{className:j.tooltipLabel,children:z.Notificacoes})]})]})}),(0,I.jsx)(`li`,{role:`none`,children:(0,I.jsxs)(`button`,{type:`button`,role:`menuitem`,"aria-label":`Central de Ajuda`,"aria-current":b(`Central de Ajuda`)?`page`:void 0,className:[j.menuItemBtn,j.iconBtn,b(`Central de Ajuda`)?j.itemSelected:``].filter(Boolean).join(` `),onClick:()=>y(`Central de Ajuda`),...x(`Central de Ajuda`),children:[(0,I.jsx)(`span`,{className:[j.menuItemContent,_===`Central de Ajuda`?j.animPulse:``].filter(Boolean).join(` `),onAnimationEnd:()=>v(null),children:(0,I.jsx)(a,{name:w,size:16,color:`currentColor`,"aria-hidden":!0})}),(0,I.jsxs)(`span`,{className:j.tooltipContainer,"aria-hidden":`true`,children:[(0,I.jsx)(`span`,{className:j.tooltipArrow}),(0,I.jsx)(`span`,{className:j.tooltipLabel,children:z[`Central de Ajuda`]})]})]})})]})})]})},V.__docgenInfo={description:``,methods:[],displayName:`MenuGlobal`,props:{produtos:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| 'Conta Digital'
| 'Crédito'
| 'Agentes de IA'
| 'Ecommerce'
| 'Sistema ERP'
| 'Envios'
| 'Sistema PDV'
| 'Hub de Integração'`,elements:[{name:`literal`,value:`'Conta Digital'`},{name:`literal`,value:`'Crédito'`},{name:`literal`,value:`'Agentes de IA'`},{name:`literal`,value:`'Ecommerce'`},{name:`literal`,value:`'Sistema ERP'`},{name:`literal`,value:`'Envios'`},{name:`literal`,value:`'Sistema PDV'`},{name:`literal`,value:`'Hub de Integração'`}]}],raw:`ProdutoOlist[]`},description:`Lista de produtos a exibir. Padrão: todos os 8 produtos Olist.`,defaultValue:{value:`[
  'Sistema ERP',
  'Hub de Integração',
  'Sistema PDV',
  'Conta Digital',
  'Envios',
  'Ecommerce',
  'Crédito',
  'Agentes de IA',
]`,computed:!1}},produtoSelecionado:{required:!1,tsType:{name:`union`,raw:`| ProdutoOlist
| 'Menu do Usuario'
| 'Notificacoes'
| 'Configuracoes'
| 'Central de Ajuda'`,elements:[{name:`union`,raw:`| 'Conta Digital'
| 'Crédito'
| 'Agentes de IA'
| 'Ecommerce'
| 'Sistema ERP'
| 'Envios'
| 'Sistema PDV'
| 'Hub de Integração'`,elements:[{name:`literal`,value:`'Conta Digital'`},{name:`literal`,value:`'Crédito'`},{name:`literal`,value:`'Agentes de IA'`},{name:`literal`,value:`'Ecommerce'`},{name:`literal`,value:`'Sistema ERP'`},{name:`literal`,value:`'Envios'`},{name:`literal`,value:`'Sistema PDV'`},{name:`literal`,value:`'Hub de Integração'`}]},{name:`literal`,value:`'Menu do Usuario'`},{name:`literal`,value:`'Notificacoes'`},{name:`literal`,value:`'Configuracoes'`},{name:`literal`,value:`'Central de Ajuda'`}]},description:`Produto ou funcionalidade atualmente ativa (controlado externamente).`},avatarLabel:{required:!1,tsType:{name:`string`},description:`Monograma de até 2 caracteres exibido no círculo do usuário.`,defaultValue:{value:`'PN'`,computed:!1}},avatarImageUrl:{required:!1,tsType:{name:`string`},description:`URL da foto do usuário (círculo superior, 32×32).`},companyLogoUrl:{required:!1,tsType:{name:`string`},description:`URL do logo da empresa (círculo inferior, 28×28, sobreposto 7px ao do usuário).`},companyLogoLabel:{required:!1,tsType:{name:`string`},description:`Monograma de até 2 caracteres para o logo da empresa quando companyLogoUrl não fornecida.`},notificacoesPendentes:{required:!1,tsType:{name:`boolean`},description:`Exibe badge de notificação no ícone de sino.`,defaultValue:{value:`false`,computed:!1}},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(destino: ProdutoSelecionado) => void`,signature:{arguments:[{type:{name:`union`,raw:`| ProdutoOlist
| 'Menu do Usuario'
| 'Notificacoes'
| 'Configuracoes'
| 'Central de Ajuda'`,elements:[{name:`union`,raw:`| 'Conta Digital'
| 'Crédito'
| 'Agentes de IA'
| 'Ecommerce'
| 'Sistema ERP'
| 'Envios'
| 'Sistema PDV'
| 'Hub de Integração'`,elements:[{name:`literal`,value:`'Conta Digital'`},{name:`literal`,value:`'Crédito'`},{name:`literal`,value:`'Agentes de IA'`},{name:`literal`,value:`'Ecommerce'`},{name:`literal`,value:`'Sistema ERP'`},{name:`literal`,value:`'Envios'`},{name:`literal`,value:`'Sistema PDV'`},{name:`literal`,value:`'Hub de Integração'`}]},{name:`literal`,value:`'Menu do Usuario'`},{name:`literal`,value:`'Notificacoes'`},{name:`literal`,value:`'Configuracoes'`},{name:`literal`,value:`'Central de Ajuda'`}]},name:`destino`}],return:{name:`void`}}},description:`Callback disparado ao clicar em qualquer item de navegação.`},className:{required:!1,tsType:{name:`string`},description:``}}}})),U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{H(),U=r(),W={title:`Navigation/MenuGlobal`,component:V,parameters:{layout:`fullscreen`,backgrounds:{default:`claro`,values:[{name:`claro`,value:`#f5f3ed`},{name:`escuro`,value:`#0d1117`}]}},decorators:[e=>(0,U.jsx)(`div`,{style:{height:`100vh`,display:`flex`},children:(0,U.jsx)(e,{})})],argTypes:{produtoSelecionado:{control:`select`,options:[`Sistema ERP`,`Hub de Integração`,`Sistema PDV`,`Conta Digital`,`Envios`,`Ecommerce`,`Crédito`,`Agentes de IA`,`Menu do Usuario`,`Notificacoes`,`Configuracoes`,`Central de Ajuda`,void 0],description:`Produto ou funcionalidade ativa`},avatarLabel:{control:`text`,description:`Monograma de 2 caracteres do usuário (círculo superior 32×32)`},avatarImageUrl:{control:`text`,description:`URL da foto do usuário (círculo superior 32×32)`},companyLogoUrl:{control:`text`,description:`URL do logo da empresa (círculo inferior 28×28, sobreposto 7px)`},companyLogoLabel:{control:`text`,description:`Monograma de 2 caracteres da empresa quando companyLogoUrl não fornecida`},notificacoesPendentes:{control:`boolean`,description:`Exibe badge no ícone de notificações`},onNavigate:{action:`navegou`}}},G={name:`Padrão — sem seleção`,args:{avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,notificacoesPendentes:!1}},K={name:`Sistema ERP selecionado`,args:{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},q={name:`Hub de Integração selecionado`,args:{produtoSelecionado:`Hub de Integração`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},J={name:`Com notificações pendentes`,args:{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,notificacoesPendentes:!0}},Y={name:`Notificações selecionadas`,args:{produtoSelecionado:`Notificacoes`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,notificacoesPendentes:!0}},X={name:`Avatar com imagem`,args:{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,avatarImageUrl:`https://i.pravatar.cc/32`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},Z={name:`Avatar — anatomia dual (usuário + empresa)`,args:{produtoSelecionado:`Menu do Usuario`,avatarLabel:`PV`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},Q={name:`Lista reduzida de produtos`,args:{produtos:[`Sistema ERP`,`Hub de Integração`,`Envios`],produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Padrão — sem seleção',
  args: {
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: false
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Sistema ERP selecionado',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Hub de Integração selecionado',
  args: {
    produtoSelecionado: 'Hub de Integração',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Com notificações pendentes',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Notificações selecionadas',
  args: {
    produtoSelecionado: 'Notificacoes',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Avatar com imagem',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    avatarImageUrl: 'https://i.pravatar.cc/32',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Avatar — anatomia dual (usuário + empresa)',
  args: {
    produtoSelecionado: 'Menu do Usuario',
    avatarLabel: 'PV',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Lista reduzida de produtos',
  args: {
    produtos: ['Sistema ERP', 'Hub de Integração', 'Envios'],
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...Q.parameters?.docs?.source}}},$=[`Padrao`,`ERPSelecionado`,`HubSelecionado`,`ComNotificacoes`,`NotificacoesSelecionadas`,`AvatarComImagem`,`AvatarAnatomiaDual`,`ListaPersonalizada`]}))();export{Z as AvatarAnatomiaDual,X as AvatarComImagem,J as ComNotificacoes,K as ERPSelecionado,q as HubSelecionado,Q as ListaPersonalizada,Y as NotificacoesSelecionadas,G as Padrao,$ as __namedExportsOrder,W as default};