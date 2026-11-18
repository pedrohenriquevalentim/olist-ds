import{i as e}from"./preload-helper-CxWOkEOm.js";import{lt as t}from"./iframe-X7OoriH5.js";import{t as n}from"./jsx-runtime-CvrI17ha.js";import{t as r}from"./Button-D380ls4Q.js";import{r as i,t as a}from"./Icon-WWeWEuV2.js";import{t as o}from"./Button-VX9zuPqs.js";import{n as s,t as c}from"./NotificationCard-CbCoAR3w.js";var l,u,d,f=e((()=>{l=`_menuSpace_47xlg_4`,u=`_list_47xlg_9`,d={menuSpace:l,list:u}})),p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{t(),s(),i(),o(),f(),p=n(),m={"padrão da severidade":void 0,"money-in":(0,p.jsx)(a,{name:`money-in`,size:24,color:`currentColor`}),bell:(0,p.jsx)(a,{name:`bell`,size:24,color:`currentColor`}),"alert-circle":(0,p.jsx)(a,{name:`alert-circle`,size:24,color:`currentColor`})},h={title:`Components/Display & Feedback/NotificationCard`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,backgrounds:{default:`claro`,options:{claro:{name:`Claro`,value:`#fcfbf8`},escuro:{name:`Escuro`,value:`#10100f`}}},docs:{description:{component:"Card de uma notificação da central de notificações (ERP e Conta Digital). Comunica criticidade, origem, data, mensagem e ações, e indica se já foi lida. Para várias notificações do mesmo tipo, use o `NotificationStack`."}}},argTypes:{severity:{control:`select`,options:[`informative`,`positive`,`warning`,`negative`],description:"Criticidade da notificação. Define a cor e o ícone padrão do tile. `warning` e `negative` ganham barra lateral de 4px.",table:{defaultValue:{summary:`informative`}}},isRead:{control:`boolean`,description:`Estado de leitura. Não lida: fundo claro e ponto azul. Lida: fundo de superfície do sistema e sem ponto.`,table:{defaultValue:{summary:`false`}}},icon:{control:{type:`select`},options:Object.keys(m),mapping:m,description:"Ícone da criticidade (ReactNode). Se omitido, usa o ícone padrão da severidade. A cor vem do CSS pai via `currentColor`."},product:{control:`text`,description:`Nome do produto de origem.`},user:{control:`text`,description:`Nome do usuário que originou o evento.`},dateTime:{control:`text`,description:`Data e hora já formatadas.`},title:{control:`text`,description:`Título da notificação.`},body:{control:`text`,description:`Descrição do que aconteceu e o que fazer.`},value:{control:`text`,description:`Valor monetário em destaque.`},valueDetail:{control:`text`,description:`Legenda do valor (tarifas, líquido).`},deadline:{control:`text`,description:`Prazo exibido em tag neutra com ícone de relógio.`},status:{control:`text`,description:`Rótulo de status, à direita da linha de topo.`},linkLabel:{control:`text`,description:`Texto do link de ação.`},linkHref:{control:`text`,description:`Destino do link de ação.`},actions:{control:!1,description:`Slot de ações adicionais, como um botão secundário.`},menuItems:{control:`object`,description:`Itens do menu ⋯. Padrão: “Marcar como lida/não lida” e “Dispensar notificação”.`},isMenuOpen:{control:`boolean`,description:`Controla a abertura do menu. Se omitido, o card gerencia o estado.`},onMenuOpenChange:{action:`menu alterado`,description:`Disparado ao abrir ou fechar o menu.`},onToggleRead:{action:`leitura alternada`,description:`Item “Marcar como lida/não lida”.`},onDismiss:{action:`dispensada`,description:`Item “Dispensar notificação”.`},onLinkClick:{action:`link clicado`,description:`Clique no link de ação.`},menuLabel:{control:`text`,description:`Rótulo acessível do gatilho e do menu.`,table:{defaultValue:{summary:`Mais opções da notificação`}}}},args:{severity:`informative`,isRead:!1,product:`Conta Digital`,dateTime:`26/10/2026 • 09h12`,title:`Título da notificação`,body:`Descrição que diz o que aconteceu e o que fazer.`,linkLabel:`ver detalhes`}},g={},_={args:{isRead:!0}},v={args:{severity:`positive`,icon:m[`money-in`],title:`Pix recebido de Mariana Souza`,body:void 0,value:`+ R$ 208,26`,valueDetail:`− R$ 0,35 de tarifa • R$ 207,91 líquidos na conta`,linkLabel:void 0}},y={args:{severity:`warning`,title:`Boleto vence em 3 dias`,body:`Pague até o vencimento para evitar multa e juros.`,deadline:`vence em 07/11/2026`,status:`pendente`}},b={args:{severity:`negative`,title:`Falha na integração com o marketplace`,body:`Os pedidos novos não estão sendo importados. Reconecte a integração.`,linkLabel:`reconectar`}},x={args:{...b.args,isRead:!0}},S={args:{user:`· Carlos Lima`,actions:(0,p.jsx)(r,{variant:`secondary`,label:`Aprovar`})}},C={args:{isMenuOpen:!0},decorators:[e=>(0,p.jsx)(`div`,{className:d.menuSpace,children:(0,p.jsx)(e,{})})]},w={render:e=>(0,p.jsxs)(`div`,{className:d.list,children:[(0,p.jsx)(c,{...e,severity:`informative`}),(0,p.jsx)(c,{...e,severity:`positive`}),(0,p.jsx)(c,{...e,severity:`warning`}),(0,p.jsx)(c,{...e,severity:`negative`}),(0,p.jsx)(c,{...e,severity:`informative`,isRead:!0}),(0,p.jsx)(c,{...e,severity:`positive`,isRead:!0}),(0,p.jsx)(c,{...e,severity:`warning`,isRead:!0}),(0,p.jsx)(c,{...e,severity:`negative`,isRead:!0})]})},T=[`Padrao`,`Lida`,`Positiva`,`Atencao`,`Critica`,`CriticaLida`,`ComUsuarioEBotao`,`MenuAberto`,`TodasAsSeveridades`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isRead: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'positive',
    icon: iconOptions['money-in'],
    title: 'Pix recebido de Mariana Souza',
    body: undefined,
    value: '+ R$ 208,26',
    valueDetail: '− R$ 0,35 de tarifa • R$ 207,91 líquidos na conta',
    linkLabel: undefined
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Boleto vence em 3 dias',
    body: 'Pague até o vencimento para evitar multa e juros.',
    deadline: 'vence em 07/11/2026',
    status: 'pendente'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'negative',
    title: 'Falha na integração com o marketplace',
    body: 'Os pedidos novos não estão sendo importados. Reconecte a integração.',
    linkLabel: 'reconectar'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critica.args,
    isRead: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    user: '· Carlos Lima',
    actions: <Button variant="secondary" label="Aprovar" />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isMenuOpen: true
  },
  decorators: [Story => <div className={storyStyles.menuSpace}>
        <Story />
      </div>]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className={storyStyles.list}>
      <NotificationCard {...args} severity="informative" />
      <NotificationCard {...args} severity="positive" />
      <NotificationCard {...args} severity="warning" />
      <NotificationCard {...args} severity="negative" />
      <NotificationCard {...args} severity="informative" isRead />
      <NotificationCard {...args} severity="positive" isRead />
      <NotificationCard {...args} severity="warning" isRead />
      <NotificationCard {...args} severity="negative" isRead />
    </div>
}`,...w.parameters?.docs?.source}}}}))();export{y as Atencao,S as ComUsuarioEBotao,b as Critica,x as CriticaLida,_ as Lida,C as MenuAberto,g as Padrao,v as Positiva,w as TodasAsSeveridades,T as __namedExportsOrder,h as default};