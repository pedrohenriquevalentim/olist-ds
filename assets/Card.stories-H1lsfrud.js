import{i as e}from"./preload-helper-CT_b8DTk.js";import{Y as t}from"./iframe-BwAwXKwU.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{n as r,t as i}from"./Button-Ea9x2esp.js";var a,o,s,c,l,u,d,f,p,m,h,g=e((()=>{a=`_card_1boi9_3`,o=`_media_1boi9_14`,s=`_content_1boi9_28`,c=`_titleSection_1boi9_38`,l=`_title_1boi9_38`,u=`_subtitle_1boi9_57`,d=`_paragraph_1boi9_68`,f=`_caption_1boi9_79`,p=`_actions_1boi9_90`,m=`_slot_1boi9_98`,h={card:a,media:o,content:s,titleSection:c,title:l,subtitle:u,paragraph:d,caption:f,actions:p,slot:m}})),_=e((()=>{r()})),v,y,b=e((()=>{t(),g(),_(),v=n(),y=({content:e=`simple`,media:t,titleText:n=`Card Title`,subtitle:r=!0,subtitleText:a=`Subtitle text`,paragraphText:o,caption:s=!1,captionText:c,actions:l=!1,secondaryButton:u=!1,primaryLabel:d=`Ação principal`,secondaryLabel:f=`Ação secundária`,onPrimaryAction:p,onSecondaryAction:m,children:g,className:_,...y})=>(0,v.jsxs)(`div`,{className:[h.card,_].filter(Boolean).join(` `),...y,children:[t&&(0,v.jsx)(`div`,{className:h.media,"aria-hidden":`true`,children:t}),e===`simple`&&(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsxs)(`div`,{className:h.titleSection,children:[(0,v.jsx)(`p`,{className:h.title,children:n}),r&&(0,v.jsx)(`p`,{className:h.subtitle,children:a})]}),o&&(0,v.jsx)(`p`,{className:h.paragraph,children:o}),s&&c&&(0,v.jsx)(`p`,{className:h.caption,children:c}),l&&(0,v.jsxs)(`div`,{className:h.actions,children:[u&&(0,v.jsx)(i,{variant:`secondary`,label:f,onClick:m}),(0,v.jsx)(i,{variant:`primary`,label:d,onClick:p})]})]}),e===`slot`&&(0,v.jsx)(`div`,{className:h.slot,children:g})]}),y.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{content:{required:!1,tsType:{name:`union`,raw:`'simple' | 'slot'`,elements:[{name:`literal`,value:`'simple'`},{name:`literal`,value:`'slot'`}]},description:``,defaultValue:{value:`'simple'`,computed:!1}},media:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},titleText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Card Title'`,computed:!1}},subtitle:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},subtitleText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Subtitle text'`,computed:!1}},paragraphText:{required:!1,tsType:{name:`string`},description:``},caption:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},captionText:{required:!1,tsType:{name:`string`},description:``},actions:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},secondaryButton:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},primaryLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Ação principal'`,computed:!1}},secondaryLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Ação secundária'`,computed:!1}},onPrimaryAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSecondaryAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),x,S,C,w,T,E,D,O,k;e((()=>{t(),b(),x=n(),S={title:`Components/Card`,component:y,parameters:{layout:`centered`},argTypes:{content:{control:{type:`select`},options:[`simple`,`slot`],description:`Define a variante de conteúdo do card.`,table:{defaultValue:{summary:`simple`}}},titleText:{control:`text`,description:`Texto do título principal (H3).`},subtitle:{control:`boolean`,description:`Exibe ou oculta o subtítulo.`,table:{defaultValue:{summary:`true`}}},subtitleText:{control:`text`,description:`Texto do subtítulo (H5).`},paragraphText:{control:`text`,description:`Texto do parágrafo descritivo.`},caption:{control:`boolean`,description:`Exibe ou oculta a legenda.`,table:{defaultValue:{summary:`false`}}},captionText:{control:`text`,description:`Texto da legenda (caption).`},actions:{control:`boolean`,description:`Exibe ou oculta a área de ações com botões.`,table:{defaultValue:{summary:`false`}}},secondaryButton:{control:`boolean`,description:`Exibe o botão secundário na área de ações.`,table:{defaultValue:{summary:`false`}}},primaryLabel:{control:`text`,description:`Rótulo do botão de ação primária.`},secondaryLabel:{control:`text`,description:`Rótulo do botão de ação secundária.`}}},C=(0,x.jsx)(`img`,{src:`https://placehold.co/480x200/e8e5de/8f8d85?text=Media`,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}}),w={args:{content:`simple`,titleText:`Card Title`,subtitle:!0,subtitleText:`Subtitle text`,paragraphText:`Este é um parágrafo de texto que descreve o conteúdo do card. Ele usa o estilo de texto parágrafo e o token de cor de texto de contêiner adequado.`,caption:!0,captionText:`Esta é uma legenda de texto que descreve o conteúdo do card com mais detalhes complementares.`,actions:!0,secondaryButton:!0,primaryLabel:`Ação principal`,secondaryLabel:`Ação secundária`,media:C}},T={name:`Sem mídia`,args:{titleText:`Card sem mídia`,subtitleText:`Subtítulo do card`,paragraphText:`Conteúdo do card sem a área de imagem no topo.`,actions:!0,primaryLabel:`Confirmar`}},E={name:`Com mídia e ações`,args:{titleText:`Card com mídia`,subtitleText:`Subtítulo do card`,paragraphText:`Conteúdo do card com imagem no topo para destacar o item visualmente.`,media:C,actions:!0,secondaryButton:!0,primaryLabel:`Ver detalhes`,secondaryLabel:`Ignorar`}},D={name:`Variante: slot`,args:{content:`slot`,media:C},render:e=>(0,x.jsx)(y,{...e,children:(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,padding:`2rem`,fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:`0.875rem`,color:`#8f8d85`},children:`Conteúdo customizado via children`})}),parameters:{docs:{description:{story:`Variant slot: substitui toda a área de conteúdo por children livre. Ideal para cards com layout totalmente personalizado.`}}}},O={name:`Grade de cards`,render:()=>(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 30rem)`,gap:`1.5rem`,alignItems:`start`},children:[(0,x.jsx)(y,{titleText:`Plano Starter`,subtitleText:`Ideal para começar`,paragraphText:`Acesse os recursos essenciais para gerenciar sua operação com eficiência.`,media:C,actions:!0,primaryLabel:`Assinar plano`}),(0,x.jsx)(y,{titleText:`Plano Pro`,subtitleText:`Para quem escala`,paragraphText:`Recursos avançados, integrações e suporte dedicado para sua empresa crescer.`,media:C,caption:!0,captionText:`Mais popular entre lojistas com mais de 500 pedidos/mês.`,actions:!0,secondaryButton:!0,primaryLabel:`Assinar plano`,secondaryLabel:`Comparar planos`})]}),parameters:{layout:`padded`}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'simple',
    titleText: 'Card Title',
    subtitle: true,
    subtitleText: 'Subtitle text',
    paragraphText: 'Este é um parágrafo de texto que descreve o conteúdo do card. Ele usa o estilo de texto parágrafo e o token de cor de texto de contêiner adequado.',
    caption: true,
    captionText: 'Esta é uma legenda de texto que descreve o conteúdo do card com mais detalhes complementares.',
    actions: true,
    secondaryButton: true,
    primaryLabel: 'Ação principal',
    secondaryLabel: 'Ação secundária',
    media: PLACEHOLDER_MEDIA
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Sem mídia',
  args: {
    titleText: 'Card sem mídia',
    subtitleText: 'Subtítulo do card',
    paragraphText: 'Conteúdo do card sem a área de imagem no topo.',
    actions: true,
    primaryLabel: 'Confirmar'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Com mídia e ações',
  args: {
    titleText: 'Card com mídia',
    subtitleText: 'Subtítulo do card',
    paragraphText: 'Conteúdo do card com imagem no topo para destacar o item visualmente.',
    media: PLACEHOLDER_MEDIA,
    actions: true,
    secondaryButton: true,
    primaryLabel: 'Ver detalhes',
    secondaryLabel: 'Ignorar'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Variante: slot',
  args: {
    content: 'slot',
    media: PLACEHOLDER_MEDIA
  },
  render: args => <Card {...args}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '2rem',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '0.875rem',
      color: '#8f8d85'
    }}>
        Conteúdo customizado via children
      </div>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Variant slot: substitui toda a área de conteúdo por children livre. Ideal para cards com layout totalmente personalizado.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Grade de cards',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 30rem)',
    gap: '1.5rem',
    alignItems: 'start'
  }}>
      <Card titleText="Plano Starter" subtitleText="Ideal para começar" paragraphText="Acesse os recursos essenciais para gerenciar sua operação com eficiência." media={PLACEHOLDER_MEDIA} actions primaryLabel="Assinar plano" />
      <Card titleText="Plano Pro" subtitleText="Para quem escala" paragraphText="Recursos avançados, integrações e suporte dedicado para sua empresa crescer." media={PLACEHOLDER_MEDIA} caption captionText="Mais popular entre lojistas com mais de 500 pedidos/mês." actions secondaryButton primaryLabel="Assinar plano" secondaryLabel="Comparar planos" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`SemMidia`,`ComMidiaEAcoes`,`VarianteSlot`,`GradeDeCards`]}))();export{E as ComMidiaEAcoes,O as GradeDeCards,w as Playground,T as SemMidia,D as VarianteSlot,k as __namedExportsOrder,S as default};