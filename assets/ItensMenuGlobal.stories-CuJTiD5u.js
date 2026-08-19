import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Y as n}from"./iframe-Bf3ANq8l.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{r as i,t as a}from"./Icon-ClDKza7S.js";import{t as ee}from"./Logo-DTDx1O2C.js";import{n as o,r as s,t as c}from"./MenuGlobal-Dg9tsl8G.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,te,k,A,j,M,N,P,ne=e((()=>{l=`_container_1vyla_9`,u=`_containerFlyout_1vyla_17`,d=`_singleScroll_1vyla_31`,f=`_panelsRow_1vyla_44`,p=`_painelPrimario_1vyla_52`,m=`_painelPrimarioAberto_1vyla_65`,h=`_logoArea_1vyla_77`,g=`_sisErpHeader_1vyla_88`,_=`_itemList_1vyla_100`,v=`_itemListRodape_1vyla_112`,y=`_menuItem_1vyla_123`,b=`_menuItemSelecionado_1vyla_159`,x=`_menuItemLabel_1vyla_172`,S=`_actionArea_1vyla_185`,C=`_fixarMenuRow_1vyla_195`,w=`_fixarMenuLabel_1vyla_202`,T=`_toggle_1vyla_212`,E=`_toggleLigado_1vyla_230`,D=`_toggleDot_1vyla_235`,O=`_painelSecundario_1vyla_254`,te=`_secundarioContent_1vyla_266`,k=`_sectionDivider_1vyla_276`,A=`_sectionDividerComVoltar_1vyla_285`,j=`_sectionDividerLabel_1vyla_290`,M=`_voltarBtn_1vyla_300`,N=`_itemListSecundario_1vyla_327`,P={container:l,containerFlyout:u,singleScroll:d,panelsRow:f,painelPrimario:p,painelPrimarioAberto:m,logoArea:h,sisErpHeader:g,itemList:_,itemListRodape:v,menuItem:y,menuItemSelecionado:b,menuItemLabel:x,actionArea:S,fixarMenuRow:C,fixarMenuLabel:w,toggle:T,toggleLigado:E,toggleDot:D,painelSecundario:O,secundarioContent:te,sectionDivider:k,sectionDividerComVoltar:A,sectionDividerLabel:j,voltarBtn:M,itemListSecundario:N}})),F,I,re,L,R,z,ie=e((()=>{F=t(n(),1),i(),s(),ne(),I=r(),re=[{key:`Vendas`,label:`Vendas`,icon:`shopping-cart`},{key:`Produtos`,label:`Produtos`,icon:`package`},{key:`Suprimentos`,label:`Suprimentos`,icon:`storage`},{key:`Servicos`,label:`Serviços`,icon:`services`},{key:`Financas`,label:`Finanças`,icon:`wallet`},{key:`Contatos`,label:`Contatos`,icon:`profile`},{key:`Relatorios`,label:`Relatórios`,icon:`chart-bar-up`}],L={Vendas:`Vendas`,Produtos:`Produtos`,Suprimentos:`Suprimentos`,Servicos:`Serviços`,Financas:`Finanças`,Contatos:`Contatos`,Relatorios:`Relatórios`},R={Vendas:[{titulo:`Vendas`,itens:[{label:`Propostas comerciais`,icon:`file-text`},{label:`Pedidos de venda`,icon:`shopping-cart`},{label:`Serviços do parceiro`,icon:`services`},{label:`PDV`,icon:`bip`},{label:`Nota fiscal (NF-e)`,icon:`file-nf`},{label:`Nota consumidor (NFC-e)`,icon:`file-nf`}]},{titulo:`Operação`,itens:[{label:`Separação`,icon:`package-check`},{label:`Expedição`,icon:`truck`},{label:`Devolução`,icon:`package-cancel`}]},{titulo:`Ecommerce`,itens:[{label:`Google Shopping`,icon:`shopping-bag`},{label:`Pedidos do ecommerce`,icon:`sales-oms`},{label:`Perguntas de pré-venda`,icon:`chat`},{label:`Pós-venda`,icon:`support`},{label:`Custos do ecommerce`,icon:`calculator`}]}],Produtos:[{titulo:`Catálogo`,itens:[{label:`Cadastro de produtos`,icon:`product-catalog`},{label:`Categorias`,icon:`apps`},{label:`Variações`,icon:`reorder`},{label:`Kits`,icon:`package`}]},{titulo:`Estoque`,itens:[{label:`Movimentações`,icon:`stock`},{label:`Inventário`,icon:`spreadsheet`},{label:`Transferências`,icon:`reorder`}]}],Suprimentos:[{titulo:`Compras`,itens:[{label:`Pedidos de compra`,icon:`file-check`},{label:`Cotações`,icon:`file-text`},{label:`Fornecedores`,icon:`wholesale`}]},{titulo:`Recebimento`,itens:[{label:`Notas de entrada`,icon:`file-import`},{label:`Conferência de mercadoria`,icon:`package-check`}]}],Servicos:[{titulo:`Contratos`,itens:[{label:`Ordens de serviço`,icon:`tool`},{label:`Contratos`,icon:`file-sign`},{label:`Garantias`,icon:`verified`}]},{titulo:`Agendamento`,itens:[{label:`Agenda técnica`,icon:`calendar`},{label:`Técnicos`,icon:`profile-manage`}]}],Financas:[{titulo:`Financeiro`,itens:[{label:`Contas a pagar`,icon:`invoice`},{label:`Contas a receber`,icon:`file-money`},{label:`Fluxo de caixa`,icon:`chart-bar-up`},{label:`Conciliação bancária`,icon:`bank`}]},{titulo:`Fiscal`,itens:[{label:`Emissão de NF-e`,icon:`file-nf`},{label:`Apuração de impostos`,icon:`calculator`}]}],Contatos:[{titulo:`Clientes`,itens:[{label:`Cadastro de clientes`,icon:`profile`},{label:`Histórico`,icon:`file-text`},{label:`Segmentação`,icon:`apps`}]},{titulo:`Fornecedores`,itens:[{label:`Cadastro de fornecedores`,icon:`profile-manage`},{label:`Avaliações`,icon:`star`}]}],Relatorios:[{titulo:`Vendas`,itens:[{label:`Relatório de vendas`,icon:`file-graph`},{label:`Performance de vendedores`,icon:`chart-bar-up`},{label:`Ranking de produtos`,icon:`trophy`}]},{titulo:`Financeiro`,itens:[{label:`DRE`,icon:`spreadsheet`},{label:`Margem de lucro`,icon:`chart-pie`}]},{titulo:`Estoque`,itens:[{label:`Giro de estoque`,icon:`chart-bar-variation`},{label:`Produtos sem giro`,icon:`alert-triangle`}]}]},z=({moduloAtivo:e=`Vendas`,estado:t,onModuloSelect:n,onFixarToggle:r,onVoltar:i,className:o})=>{let[s,c]=F.useState(e),[l,u]=F.useState(!1),[d,f]=F.useState(!0),[p,m]=F.useState(e);p!==e&&(m(e),c(e));let[h,g]=F.useState(t);h!==t&&t!==void 0&&(g(t),t===`fixo`&&(u(!0),f(!0)),t===`aberto`&&(u(!1),f(!0)),t===`fechado`&&(u(!1),f(!1)));let _=t??(l?`fixo`:d?`aberto`:`fechado`),v=e=>{c(e),l||f(!0),n?.(e)},y=()=>{let e=!l;u(e),e&&f(!0),r?.(e)},b=()=>{u(!1),f(!0),i?.()},x=R[s],S=L[s],C=_!==`fixo`,w=_===`aberto`||_===`fixo`;return(0,I.jsx)(`div`,{className:[P.container,_===`fixo`?``:P.containerFlyout,o].filter(Boolean).join(` `),"data-testid":`itens-menu-global`,children:(0,I.jsx)(`div`,{className:P.singleScroll,children:(0,I.jsxs)(`div`,{className:P.panelsRow,children:[C&&(0,I.jsxs)(`nav`,{className:[P.painelPrimario,_===`aberto`?P.painelPrimarioAberto:``].filter(Boolean).join(` `),"aria-label":`Módulos do ERP`,children:[(0,I.jsx)(`div`,{className:P.logoArea,children:(0,I.jsx)(ee,{size:`default`,style:{width:`var(--shape-spacing-128px)`,minWidth:`var(--shape-spacing-128px)`,maxWidth:`var(--shape-spacing-128px)`}})}),(0,I.jsx)(`div`,{className:P.sisErpHeader,"aria-hidden":`true`,children:`Sistema ERP`}),(0,I.jsx)(`ul`,{className:P.itemList,role:`menu`,"aria-label":`Módulos`,children:re.map(({key:e,label:t,icon:n})=>{let r=s===e;return(0,I.jsx)(`li`,{role:`none`,children:(0,I.jsxs)(`button`,{type:`button`,role:`menuitem`,"aria-current":r?`page`:void 0,className:[P.menuItem,r?P.menuItemSelecionado:``].filter(Boolean).join(` `),onClick:()=>v(e),children:[(0,I.jsx)(a,{name:n,size:16,color:`currentColor`,"aria-hidden":!0}),(0,I.jsx)(`span`,{className:P.menuItemLabel,children:t})]})},e)})}),(0,I.jsx)(`ul`,{className:P.itemListRodape,role:`menu`,"aria-label":`Configurações do sistema`,children:(0,I.jsx)(`li`,{role:`none`,children:(0,I.jsxs)(`button`,{type:`button`,role:`menuitem`,className:P.menuItem,children:[(0,I.jsx)(a,{name:`settings`,size:16,color:`currentColor`,"aria-hidden":!0}),(0,I.jsx)(`span`,{className:P.menuItemLabel,children:`Configurações`})]})})}),(0,I.jsx)(`div`,{className:P.actionArea,children:(0,I.jsxs)(`div`,{className:P.fixarMenuRow,children:[(0,I.jsx)(`span`,{className:P.fixarMenuLabel,children:`Fixar menu`}),(0,I.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":l,"aria-label":`Fixar menu`,className:[P.toggle,l?P.toggleLigado:``].filter(Boolean).join(` `),onClick:y,children:(0,I.jsx)(`span`,{className:P.toggleDot})})]})})]}),w&&(0,I.jsx)(`nav`,{className:P.painelSecundario,"aria-label":`Submenu ${S}`,children:(0,I.jsx)(`div`,{className:P.secundarioContent,children:x.map((e,t)=>(0,I.jsxs)(F.Fragment,{children:[(0,I.jsxs)(`div`,{className:[P.sectionDivider,t===0&&_===`fixo`?P.sectionDividerComVoltar:``].filter(Boolean).join(` `),children:[t===0&&_===`fixo`&&(0,I.jsx)(`button`,{type:`button`,className:P.voltarBtn,"aria-label":`Voltar ao menu principal`,onClick:b,children:(0,I.jsx)(a,{name:`arrow-left`,size:16,color:`currentColor`,"aria-hidden":!0})}),(0,I.jsx)(`span`,{className:P.sectionDividerLabel,children:e.titulo})]}),(0,I.jsx)(`ul`,{className:P.itemListSecundario,role:`menu`,"aria-label":e.titulo,children:e.itens.map(e=>(0,I.jsx)(`li`,{role:`none`,children:(0,I.jsxs)(`button`,{type:`button`,role:`menuitem`,className:P.menuItem,children:[(0,I.jsx)(a,{name:e.icon,size:16,color:`currentColor`,"aria-hidden":!0}),(0,I.jsx)(`span`,{className:P.menuItemLabel,children:e.label})]})},e.label))})]},e.titulo))})})]})})})},z.__docgenInfo={description:``,methods:[],displayName:`ItensMenuGlobal`,props:{moduloAtivo:{required:!1,tsType:{name:`union`,raw:`| 'Vendas'
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
| 'Relatorios'`,elements:[{name:`literal`,value:`'Vendas'`},{name:`literal`,value:`'Produtos'`},{name:`literal`,value:`'Suprimentos'`},{name:`literal`,value:`'Servicos'`},{name:`literal`,value:`'Financas'`},{name:`literal`,value:`'Contatos'`},{name:`literal`,value:`'Relatorios'`}]},name:`modulo`}],return:{name:`void`}}},description:`Callback acionado ao clicar em um módulo de 1º nível.`},onFixarToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fixado: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`fixado`}],return:{name:`void`}}},description:`Callback acionado ao alternar o toggle "Fixar menu".`},onVoltar:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback acionado ao clicar no botão voltar no estado fixo.`},className:{required:!1,tsType:{name:`string`},description:``}}}})),ae=e((()=>{o()})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,oe;e((()=>{n(),ie(),ae(),B=r(),V={title:`Navigation/ItensMenuGlobal`,component:z,parameters:{layout:`fullscreen`,backgrounds:{default:`claro`,values:[{name:`claro`,value:`#f5f3ed`},{name:`escuro`,value:`#0d1117`}]},docs:{description:{component:`Sub-componente do MenuGlobal. Exibe a navegação hierárquica do ERP (módulos de 1º nível + sub-itens) quando o produto "Sistema ERP" está ativo.`}}},decorators:[e=>(0,B.jsx)(`div`,{style:{height:`100vh`,display:`flex`,alignItems:`stretch`,position:`relative`},children:(0,B.jsx)(e,{})})],argTypes:{moduloAtivo:{control:`select`,options:[`Vendas`,`Produtos`,`Suprimentos`,`Servicos`,`Financas`,`Contatos`,`Relatorios`],description:`Módulo ERP ativo no painel primário`},estado:{control:`select`,options:[void 0,`fechado`,`aberto`,`fixo`],description:`Estado do painel lateral (controlado externamente)`},onModuloSelect:{action:`moduloSelecionado`},onFixarToggle:{action:`fixarAlterado`},onVoltar:{action:`voltou`}}},H={name:`Interativo — estado gerenciado pelo componente`,decorators:[e=>(0,B.jsx)(`div`,{style:{height:`100vh`,position:`relative`,background:`#f5f3ed`},children:(0,B.jsx)(e,{})})],args:{moduloAtivo:`Vendas`},parameters:{docs:{description:{story:`Modo flyout: primário e secundário abrem simultaneamente sobre a página. Use o toggle "Fixar menu" para entrar no estado fixo (encaixado no layout).`}}}},U={name:`Integrado com MenuGlobal`,render:()=>(0,B.jsxs)(`div`,{style:{display:`flex`,height:`100vh`},children:[(0,B.jsx)(c,{produtoSelecionado:`Sistema ERP`,avatarLabel:`PN`,companyLogoUrl:`https://www.nike.com.br/images/meta/open-graph-main-image.jpg`,panelAdjacenteAberto:!0}),(0,B.jsx)(`div`,{style:{position:`relative`,height:`100%`,display:`flex`,flexShrink:0},children:(0,B.jsx)(z,{moduloAtivo:`Vendas`})}),(0,B.jsx)(`div`,{style:{flex:1,background:`#f5f3ed`}})]}),parameters:{docs:{description:{story:`Integração real com o MenuGlobal: border-radius direito do menu zerado e painel interativo.`}}}},W={name:`Fechado — apenas painel primário`,args:{moduloAtivo:`Vendas`,estado:`fechado`}},G={name:`Aberto — primário + secundário`,args:{moduloAtivo:`Vendas`,estado:`aberto`}},K={name:`Fixo — apenas painel secundário com voltar`,args:{moduloAtivo:`Vendas`,estado:`fixo`}},q={name:`Módulo: Vendas (3 seções)`,args:{moduloAtivo:`Vendas`,estado:`aberto`}},J={name:`Módulo: Produtos`,args:{moduloAtivo:`Produtos`,estado:`aberto`}},Y={name:`Módulo: Suprimentos`,args:{moduloAtivo:`Suprimentos`,estado:`aberto`}},X={name:`Módulo: Serviços`,args:{moduloAtivo:`Servicos`,estado:`aberto`}},Z={name:`Módulo: Finanças`,args:{moduloAtivo:`Financas`,estado:`aberto`}},Q={name:`Módulo: Contatos`,args:{moduloAtivo:`Contatos`,estado:`aberto`}},$={name:`Módulo: Relatórios (3 seções)`,args:{moduloAtivo:`Relatorios`,estado:`aberto`}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Integrado com MenuGlobal',
  render: () => <div style={{
    display: 'flex',
    height: '100vh'
  }}>
      <MenuGlobal produtoSelecionado="Sistema ERP" avatarLabel="PN" companyLogoUrl="https://www.nike.com.br/images/meta/open-graph-main-image.jpg" panelAdjacenteAberto />
      {/*
        Wrapper de ancoragem: position:relative para o flyout se posicionar aqui (left:0).
        Em flyout (position:absolute), tem largura 0 e não empurra o conteúdo.
        Em fixo (flow normal), cresce para 248px, empurrando o conteúdo para a direita.
       */}
      <div style={{
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexShrink: 0
    }}>
        <ItensMenuGlobal moduloAtivo="Vendas" />
      </div>
      <div style={{
      flex: 1,
      background: '#f5f3ed'
    }} />
    </div>,
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
}`,...$.parameters?.docs?.source}}},oe=[`Interativo`,`ComMenuGlobal`,`Fechado`,`Aberto`,`Fixo`,`ModuloVendas`,`ModuloProdutos`,`ModuloSuprimentos`,`ModuloServicos`,`ModuloFinancas`,`ModuloContatos`,`ModuloRelatorios`]}))();export{G as Aberto,U as ComMenuGlobal,W as Fechado,K as Fixo,H as Interativo,Q as ModuloContatos,Z as ModuloFinancas,J as ModuloProdutos,$ as ModuloRelatorios,X as ModuloServicos,Y as ModuloSuprimentos,q as ModuloVendas,oe as __namedExportsOrder,V as default};