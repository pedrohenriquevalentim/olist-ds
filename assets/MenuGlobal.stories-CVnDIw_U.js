import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./MenuGlobal-hzvC6Cwf.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),i=t(),a={title:`Navigation/MenuGlobal`,component:r,parameters:{layout:`fullscreen`,backgrounds:{default:`claro`,values:[{name:`claro`,value:`#f5f3ed`},{name:`escuro`,value:`#0d1117`}]}},decorators:[e=>(0,i.jsx)(`div`,{style:{height:`100vh`,display:`flex`},children:(0,i.jsx)(e,{})})],argTypes:{produtoSelecionado:{control:`select`,options:[`Sistema ERP`,`Hub de Integração`,`Sistema PDV`,`Conta Digital`,`Envios`,`Ecommerce`,`Crédito`,`Agentes de IA`,`Menu do Usuario`,`Notificacoes`,`Configuracoes`,`Central de Ajuda`,void 0],description:`Produto ou funcionalidade ativa`},avatarLabel:{control:`text`,description:`Monograma de 2 caracteres do usuário (círculo superior 32×32)`},avatarImageUrl:{control:`text`,description:`URL da foto do usuário (círculo superior 32×32)`},companyLogoUrl:{control:`text`,description:`URL do logo da empresa (círculo inferior 28×28, sobreposto 7px)`},companyLogoLabel:{control:`text`,description:`Monograma de 2 caracteres da empresa quando companyLogoUrl não fornecida`},notificacoesPendentes:{control:`boolean`,description:`Exibe badge no ícone de notificações`},onNavigate:{action:`navegou`}}},o={name:`Padrão — sem seleção`,args:{avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,notificacoesPendentes:!1}},s={name:`Sistema ERP selecionado`,args:{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},c={name:`Hub de Integração selecionado`,args:{produtoSelecionado:`Hub de Integração`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},l={name:`Com notificações pendentes`,args:{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,notificacoesPendentes:!0}},u={name:`Notificações selecionadas`,args:{produtoSelecionado:`Notificacoes`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,notificacoesPendentes:!0}},d={name:`Avatar com imagem`,args:{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,avatarImageUrl:`https://i.pravatar.cc/32`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},f={name:`Avatar — anatomia dual (usuário + empresa)`,args:{produtoSelecionado:`Menu do Usuario`,avatarLabel:`PV`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},p={name:`Lista reduzida de produtos`,args:{produtos:[`Sistema ERP`,`Hub de Integração`,`Envios`],produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},m={name:`9dots — viewport reduzido (overflow)`,decorators:[e=>(0,i.jsx)(`div`,{style:{height:`460px`,display:`flex`},children:(0,i.jsx)(e,{})})],args:{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,notificacoesPendentes:!0}},h={name:`9dots — produto selecionado está no overflow`,decorators:[e=>(0,i.jsx)(`div`,{style:{height:`460px`,display:`flex`},children:(0,i.jsx)(e,{})})],args:{produtoSelecionado:`Agentes de IA`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Padrão — sem seleção',
  args: {
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sistema ERP selecionado',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Hub de Integração selecionado',
  args: {
    produtoSelecionado: 'Hub de Integração',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Com notificações pendentes',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Notificações selecionadas',
  args: {
    produtoSelecionado: 'Notificacoes',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Avatar com imagem',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    avatarImageUrl: 'https://i.pravatar.cc/32',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Avatar — anatomia dual (usuário + empresa)',
  args: {
    produtoSelecionado: 'Menu do Usuario',
    avatarLabel: 'PV',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Lista reduzida de produtos',
  args: {
    produtos: ['Sistema ERP', 'Hub de Integração', 'Envios'],
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '9dots — viewport reduzido (overflow)',
  decorators: [Story => <div style={{
    height: '460px',
    display: 'flex'
  }}>
        <Story />
      </div>],
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '9dots — produto selecionado está no overflow',
  decorators: [Story => <div style={{
    height: '460px',
    display: 'flex'
  }}>
        <Story />
      </div>],
  args: {
    produtoSelecionado: 'Agentes de IA',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  }
}`,...h.parameters?.docs?.source}}},g=[`Padrao`,`ERPSelecionado`,`HubSelecionado`,`ComNotificacoes`,`NotificacoesSelecionadas`,`AvatarComImagem`,`AvatarAnatomiaDual`,`ListaPersonalizada`,`NoveDots`,`NoveDotsComProdutoSelecionadoNoOverflow`]}))();export{f as AvatarAnatomiaDual,d as AvatarComImagem,l as ComNotificacoes,s as ERPSelecionado,c as HubSelecionado,p as ListaPersonalizada,u as NotificacoesSelecionadas,m as NoveDots,h as NoveDotsComProdutoSelecionadoNoOverflow,o as Padrao,g as __namedExportsOrder,a as default};