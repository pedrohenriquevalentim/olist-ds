import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-BwAwXKwU.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{r as ee,t as i}from"./Icon-CzgBgX1X.js";import{t as te}from"./Logo-1VTkMxPL.js";import{n as a,r as o,t as ne}from"./MenuGlobal-DSbCQlsE.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,re,ie,j,ae=e((()=>{s=`_container_1vyla_9`,c=`_containerFlyout_1vyla_17`,l=`_singleScroll_1vyla_31`,u=`_panelsRow_1vyla_44`,d=`_painelPrimario_1vyla_52`,f=`_painelPrimarioAberto_1vyla_65`,p=`_logoArea_1vyla_77`,m=`_sisErpHeader_1vyla_88`,h=`_itemList_1vyla_100`,g=`_itemListRodape_1vyla_112`,_=`_menuItem_1vyla_123`,v=`_menuItemSelecionado_1vyla_159`,y=`_menuItemLabel_1vyla_172`,b=`_actionArea_1vyla_185`,x=`_fixarMenuRow_1vyla_195`,S=`_fixarMenuLabel_1vyla_202`,C=`_toggle_1vyla_212`,w=`_toggleLigado_1vyla_230`,T=`_toggleDot_1vyla_235`,E=`_painelSecundario_1vyla_254`,D=`_secundarioContent_1vyla_266`,O=`_sectionDivider_1vyla_276`,k=`_sectionDividerComVoltar_1vyla_285`,A=`_sectionDividerLabel_1vyla_290`,re=`_voltarBtn_1vyla_300`,ie=`_itemListSecundario_1vyla_327`,j={container:s,containerFlyout:c,singleScroll:l,panelsRow:u,painelPrimario:d,painelPrimarioAberto:f,logoArea:p,sisErpHeader:m,itemList:h,itemListRodape:g,menuItem:_,menuItemSelecionado:v,menuItemLabel:y,actionArea:b,fixarMenuRow:x,fixarMenuLabel:S,toggle:C,toggleLigado:w,toggleDot:T,painelSecundario:E,secundarioContent:D,sectionDivider:O,sectionDividerComVoltar:k,sectionDividerLabel:A,voltarBtn:re,itemListSecundario:ie}})),M,N,P,F,I,L,oe=e((()=>{M=t(n(),1),ee(),o(),ae(),N=r(),P=[{key:`Vendas`,label:`Vendas`,icon:`shopping-cart`},{key:`Produtos`,label:`Produtos`,icon:`package`},{key:`Suprimentos`,label:`Suprimentos`,icon:`storage`},{key:`Servicos`,label:`Serviços`,icon:`services`},{key:`Financas`,label:`Finanças`,icon:`wallet`},{key:`Contatos`,label:`Contatos`,icon:`profile`},{key:`Relatorios`,label:`Relatórios`,icon:`chart-bar-up`}],F={Vendas:`Vendas`,Produtos:`Produtos`,Suprimentos:`Suprimentos`,Servicos:`Serviços`,Financas:`Finanças`,Contatos:`Contatos`,Relatorios:`Relatórios`},I={Vendas:[{titulo:`Vendas`,itens:[{label:`Propostas comerciais`,icon:`file-text`},{label:`Pedidos de venda`,icon:`shopping-cart`},{label:`Serviços do parceiro`,icon:`services`},{label:`PDV`,icon:`bip`},{label:`Nota fiscal (NF-e)`,icon:`file-nf`},{label:`Nota consumidor (NFC-e)`,icon:`file-nf`}]},{titulo:`Operação`,itens:[{label:`Separação`,icon:`package-check`},{label:`Expedição`,icon:`truck`},{label:`Devolução`,icon:`package-cancel`}]},{titulo:`Ecommerce`,itens:[{label:`Google Shopping`,icon:`shopping-bag`},{label:`Pedidos do ecommerce`,icon:`sales-oms`},{label:`Perguntas de pré-venda`,icon:`chat`},{label:`Pós-venda`,icon:`support`},{label:`Custos do ecommerce`,icon:`calculator`}]}],Produtos:[{titulo:`Catálogo`,itens:[{label:`Cadastro de produtos`,icon:`product-catalog`},{label:`Categorias`,icon:`apps`},{label:`Variações`,icon:`reorder`},{label:`Kits`,icon:`package`}]},{titulo:`Estoque`,itens:[{label:`Movimentações`,icon:`stock`},{label:`Inventário`,icon:`spreadsheet`},{label:`Transferências`,icon:`reorder`}]}],Suprimentos:[{titulo:`Compras`,itens:[{label:`Pedidos de compra`,icon:`file-check`},{label:`Cotações`,icon:`file-text`},{label:`Fornecedores`,icon:`wholesale`}]},{titulo:`Recebimento`,itens:[{label:`Notas de entrada`,icon:`file-import`},{label:`Conferência de mercadoria`,icon:`package-check`}]}],Servicos:[{titulo:`Contratos`,itens:[{label:`Ordens de serviço`,icon:`tool`},{label:`Contratos`,icon:`file-sign`},{label:`Garantias`,icon:`verified`}]},{titulo:`Agendamento`,itens:[{label:`Agenda técnica`,icon:`calendar`},{label:`Técnicos`,icon:`profile-manage`}]}],Financas:[{titulo:`Financeiro`,itens:[{label:`Contas a pagar`,icon:`invoice`},{label:`Contas a receber`,icon:`file-money`},{label:`Fluxo de caixa`,icon:`chart-bar-up`},{label:`Conciliação bancária`,icon:`bank`}]},{titulo:`Fiscal`,itens:[{label:`Emissão de NF-e`,icon:`file-nf`},{label:`Apuração de impostos`,icon:`calculator`}]}],Contatos:[{titulo:`Clientes`,itens:[{label:`Cadastro de clientes`,icon:`profile`},{label:`Histórico`,icon:`file-text`},{label:`Segmentação`,icon:`apps`}]},{titulo:`Fornecedores`,itens:[{label:`Cadastro de fornecedores`,icon:`profile-manage`},{label:`Avaliações`,icon:`star`}]}],Relatorios:[{titulo:`Vendas`,itens:[{label:`Relatório de vendas`,icon:`file-graph`},{label:`Performance de vendedores`,icon:`chart-bar-up`},{label:`Ranking de produtos`,icon:`trophy`}]},{titulo:`Financeiro`,itens:[{label:`DRE`,icon:`spreadsheet`},{label:`Margem de lucro`,icon:`chart-pie`}]},{titulo:`Estoque`,itens:[{label:`Giro de estoque`,icon:`chart-bar-variation`},{label:`Produtos sem giro`,icon:`alert-triangle`}]}]},L=({moduloAtivo:e=`Vendas`,estado:t,onModuloSelect:n,onFixarToggle:r,onVoltar:ee,className:a})=>{let[o,ne]=M.useState(e),[s,c]=M.useState(!1),[l,u]=M.useState(!0),[d,f]=M.useState(!1),p=t??(s?`fixo`:l?`aberto`:`fechado`),m=e=>{ne(e),d?(c(!0),u(!0),f(!1),r?.(!0)):s||u(!0),n?.(e)},h=()=>{let e=!s;c(e),f(!1),e&&u(!0),r?.(e)},g=()=>{c(!1),u(!0),f(!0),r?.(!1),ee?.()},_=I[o],v=F[o],y=p!==`fixo`,b=p===`aberto`||p===`fixo`;return(0,N.jsx)(`div`,{className:[j.container,p===`fixo`?``:j.containerFlyout,a].filter(Boolean).join(` `),"data-testid":`itens-menu-global`,children:(0,N.jsx)(`div`,{className:j.singleScroll,children:(0,N.jsxs)(`div`,{className:j.panelsRow,children:[y&&(0,N.jsxs)(`nav`,{className:[j.painelPrimario,p===`aberto`?j.painelPrimarioAberto:``].filter(Boolean).join(` `),"aria-label":`Módulos do ERP`,children:[(0,N.jsx)(`div`,{className:j.logoArea,children:(0,N.jsx)(te,{size:`default`,style:{width:`var(--shape-spacing-128px)`,minWidth:`var(--shape-spacing-128px)`,maxWidth:`var(--shape-spacing-128px)`}})}),(0,N.jsx)(`div`,{className:j.sisErpHeader,"aria-hidden":`true`,children:`Sistema ERP`}),(0,N.jsx)(`ul`,{className:j.itemList,role:`menu`,"aria-label":`Módulos`,children:P.map(({key:e,label:t,icon:n})=>{let r=o===e;return(0,N.jsx)(`li`,{role:`none`,children:(0,N.jsxs)(`button`,{type:`button`,role:`menuitem`,"aria-current":r?`page`:void 0,className:[j.menuItem,r?j.menuItemSelecionado:``].filter(Boolean).join(` `),onClick:()=>m(e),children:[(0,N.jsx)(i,{name:n,size:16,color:`currentColor`,"aria-hidden":!0}),(0,N.jsx)(`span`,{className:j.menuItemLabel,children:t})]})},e)})}),(0,N.jsx)(`ul`,{className:j.itemListRodape,role:`menu`,"aria-label":`Configurações do sistema`,children:(0,N.jsx)(`li`,{role:`none`,children:(0,N.jsxs)(`button`,{type:`button`,role:`menuitem`,className:j.menuItem,children:[(0,N.jsx)(i,{name:`settings`,size:16,color:`currentColor`,"aria-hidden":!0}),(0,N.jsx)(`span`,{className:j.menuItemLabel,children:`Configurações`})]})})}),(0,N.jsx)(`div`,{className:j.actionArea,children:(0,N.jsxs)(`div`,{className:j.fixarMenuRow,children:[(0,N.jsx)(`span`,{className:j.fixarMenuLabel,children:`Fixar menu`}),(0,N.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":s,"aria-label":`Fixar menu`,className:[j.toggle,s?j.toggleLigado:``].filter(Boolean).join(` `),onClick:h,children:(0,N.jsx)(`span`,{className:j.toggleDot})})]})})]}),b&&(0,N.jsx)(`nav`,{className:j.painelSecundario,"aria-label":`Submenu ${v}`,children:(0,N.jsx)(`div`,{className:j.secundarioContent,children:_.map((e,t)=>(0,N.jsxs)(M.Fragment,{children:[(0,N.jsxs)(`div`,{className:[j.sectionDivider,t===0&&p===`fixo`?j.sectionDividerComVoltar:``].filter(Boolean).join(` `),children:[t===0&&p===`fixo`&&(0,N.jsx)(`button`,{type:`button`,className:j.voltarBtn,"aria-label":`Voltar ao menu principal`,onClick:g,children:(0,N.jsx)(i,{name:`arrow-left`,size:16,color:`currentColor`,"aria-hidden":!0})}),(0,N.jsx)(`span`,{className:j.sectionDividerLabel,children:e.titulo})]}),(0,N.jsx)(`ul`,{className:j.itemListSecundario,role:`menu`,"aria-label":e.titulo,children:e.itens.map(e=>(0,N.jsx)(`li`,{role:`none`,children:(0,N.jsxs)(`button`,{type:`button`,role:`menuitem`,className:j.menuItem,children:[(0,N.jsx)(i,{name:e.icon,size:16,color:`currentColor`,"aria-hidden":!0}),(0,N.jsx)(`span`,{className:j.menuItemLabel,children:e.label})]})},e.label))})]},e.titulo))})})]})})})},L.__docgenInfo={description:``,methods:[],displayName:`ItensMenuGlobal`,props:{moduloAtivo:{required:!1,tsType:{name:`union`,raw:`| 'Vendas'
| 'Produtos'
| 'Suprimentos'
| 'Servicos'
| 'Financas'
| 'Contatos'
| 'Relatorios'`,elements:[{name:`literal`,value:`'Vendas'`},{name:`literal`,value:`'Produtos'`},{name:`literal`,value:`'Suprimentos'`},{name:`literal`,value:`'Servicos'`},{name:`literal`,value:`'Financas'`},{name:`literal`,value:`'Contatos'`},{name:`literal`,value:`'Relatorios'`}]},description:`Módulo ERP ativo — define a seleção no painel primário e o conteúdo do painel secundário.`,defaultValue:{value:`'Vendas'`,computed:!1}},estado:{required:!1,tsType:{name:`union`,raw:`'fechado' | 'aberto' | 'fixo'`,elements:[{name:`literal`,value:`'fechado'`},{name:`literal`,value:`'aberto'`},{name:`literal`,value:`'fixo'`}]},description:`Estado do painel lateral. Quando não fornecido, o componente gerencia internamente.`},onModuloSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(modulo: ModuloERP) => void`,signature:{arguments:[{type:{name:`union`,raw:`| 'Vendas'
| 'Produtos'
| 'Suprimentos'
| 'Servicos'
| 'Financas'
| 'Contatos'
| 'Relatorios'`,elements:[{name:`literal`,value:`'Vendas'`},{name:`literal`,value:`'Produtos'`},{name:`literal`,value:`'Suprimentos'`},{name:`literal`,value:`'Servicos'`},{name:`literal`,value:`'Financas'`},{name:`literal`,value:`'Contatos'`},{name:`literal`,value:`'Relatorios'`}]},name:`modulo`}],return:{name:`void`}}},description:`Callback acionado ao clicar em um módulo de 1º nível.`},onFixarToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fixado: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`fixado`}],return:{name:`void`}}},description:`Callback acionado ao alternar o toggle "Fixar menu".`},onVoltar:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback acionado ao clicar no botão voltar no estado fixo.`},className:{required:!1,tsType:{name:`string`},description:``}}}})),se=e((()=>{a()})),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ce;e((()=>{R=t(n(),1),oe(),se(),z=r(),B={title:`Navigation/ItensMenuGlobal`,component:L,parameters:{layout:`fullscreen`,backgrounds:{default:`claro`,values:[{name:`claro`,value:`#f5f3ed`},{name:`escuro`,value:`#0d1117`}]},docs:{description:{component:`Sub-componente do MenuGlobal. Exibe a navegação hierárquica do ERP (módulos de 1º nível + sub-itens) quando o produto "Sistema ERP" está ativo.`}}},decorators:[e=>(0,z.jsx)(`div`,{style:{height:`100vh`,display:`flex`,alignItems:`stretch`,position:`relative`},children:(0,z.jsx)(e,{})})],argTypes:{moduloAtivo:{control:`select`,options:[`Vendas`,`Produtos`,`Suprimentos`,`Servicos`,`Financas`,`Contatos`,`Relatorios`],description:`Módulo ERP ativo no painel primário`},estado:{control:`select`,options:[void 0,`fechado`,`aberto`,`fixo`],description:`Estado do painel lateral (controlado externamente)`},onModuloSelect:{action:`moduloSelecionado`},onFixarToggle:{action:`fixarAlterado`},onVoltar:{action:`voltou`}}},V={name:`Interativo — estado gerenciado pelo componente`,decorators:[e=>(0,z.jsx)(`div`,{style:{height:`100vh`,position:`relative`,background:`#f5f3ed`},children:(0,z.jsx)(e,{})})],args:{moduloAtivo:`Vendas`},parameters:{docs:{description:{story:`Modo flyout: primário e secundário abrem simultaneamente sobre a página. Use o toggle "Fixar menu" para entrar no estado fixo (encaixado no layout).`}}}},H=()=>{let[e,t]=R.useState(!1);return(0,z.jsxs)(`div`,{style:{display:`flex`,height:`100vh`},children:[(0,z.jsx)(ne,{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,panelAdjacenteAberto:!0,panelFixado:e}),(0,z.jsx)(`div`,{style:{position:`relative`,height:`100%`,display:`flex`,flexShrink:0},children:(0,z.jsx)(L,{moduloAtivo:`Vendas`,onFixarToggle:t})}),(0,z.jsx)(`div`,{style:{flex:1,background:`#f5f3ed`}})]})},U={name:`Integrado com MenuGlobal`,render:()=>(0,z.jsx)(H,{}),parameters:{docs:{description:{story:`Integração real com o MenuGlobal: border-radius direito do menu zerado e painel interativo.`}}}},W={name:`Fechado — apenas painel primário`,args:{moduloAtivo:`Vendas`,estado:`fechado`}},G={name:`Aberto — primário + secundário`,args:{moduloAtivo:`Vendas`,estado:`aberto`}},K={name:`Fixo — apenas painel secundário com voltar`,args:{moduloAtivo:`Vendas`,estado:`fixo`}},q={name:`Módulo: Vendas (3 seções)`,args:{moduloAtivo:`Vendas`,estado:`aberto`}},J={name:`Módulo: Produtos`,args:{moduloAtivo:`Produtos`,estado:`aberto`}},Y={name:`Módulo: Suprimentos`,args:{moduloAtivo:`Suprimentos`,estado:`aberto`}},X={name:`Módulo: Serviços`,args:{moduloAtivo:`Servicos`,estado:`aberto`}},Z={name:`Módulo: Finanças`,args:{moduloAtivo:`Financas`,estado:`aberto`}},Q={name:`Módulo: Contatos`,args:{moduloAtivo:`Contatos`,estado:`aberto`}},$={name:`Módulo: Relatórios (3 seções)`,args:{moduloAtivo:`Relatorios`,estado:`aberto`}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Interativo — estado gerenciado pelo componente',
  decorators: [Story => <div style={{
    height: '100vh',
    position: 'relative',
    background: '#f5f3ed'
  }}>
        <Story />
      </div>],
  args: {
    moduloAtivo: 'Vendas'
  },
  parameters: {
    docs: {
      description: {
        story: 'Modo flyout: primário e secundário abrem simultaneamente sobre a página. Use o toggle "Fixar menu" para entrar no estado fixo (encaixado no layout).'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Integrado com MenuGlobal',
  render: () => <ComMenuGlobalRender />,
  parameters: {
    docs: {
      description: {
        story: 'Integração real com o MenuGlobal: border-radius direito do menu zerado e painel interativo.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Fechado — apenas painel primário',
  args: {
    moduloAtivo: 'Vendas',
    estado: 'fechado'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Aberto — primário + secundário',
  args: {
    moduloAtivo: 'Vendas',
    estado: 'aberto'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Fixo — apenas painel secundário com voltar',
  args: {
    moduloAtivo: 'Vendas',
    estado: 'fixo'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Módulo: Vendas (3 seções)',
  args: {
    moduloAtivo: 'Vendas',
    estado: 'aberto'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Módulo: Produtos',
  args: {
    moduloAtivo: 'Produtos',
    estado: 'aberto'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Módulo: Suprimentos',
  args: {
    moduloAtivo: 'Suprimentos',
    estado: 'aberto'
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Módulo: Serviços',
  args: {
    moduloAtivo: 'Servicos',
    estado: 'aberto'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Módulo: Finanças',
  args: {
    moduloAtivo: 'Financas',
    estado: 'aberto'
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Módulo: Contatos',
  args: {
    moduloAtivo: 'Contatos',
    estado: 'aberto'
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Módulo: Relatórios (3 seções)',
  args: {
    moduloAtivo: 'Relatorios',
    estado: 'aberto'
  }
}`,...$.parameters?.docs?.source}}},ce=[`Interativo`,`ComMenuGlobal`,`Fechado`,`Aberto`,`Fixo`,`ModuloVendas`,`ModuloProdutos`,`ModuloSuprimentos`,`ModuloServicos`,`ModuloFinancas`,`ModuloContatos`,`ModuloRelatorios`]}))();export{G as Aberto,U as ComMenuGlobal,W as Fechado,K as Fixo,V as Interativo,Q as ModuloContatos,Z as ModuloFinancas,J as ModuloProdutos,$ as ModuloRelatorios,X as ModuloServicos,Y as ModuloSuprimentos,q as ModuloVendas,ce as __namedExportsOrder,B as default};