import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,l as n,x as r}from"./blocks-iUCz4Fjb.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{t as a}from"./mdx-react-shim-DdbLbv1q.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/Spacing`}),`
`,(0,c.jsx)(n.h1,{id:`espaçamento`,children:`Espaçamento`}),`
`,(0,c.jsxs)(n.p,{children:[`Todos os espaçamentos seguem um `,(0,c.jsx)(n.strong,{children:`grid de 4px`}),`. Todo valor deve ser múltiplo de 4. Tokens disponíveis em `,(0,c.jsx)(n.code,{children:`src/generated/variables.css`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Regra:`}),` nunca use valores arbitrários (5px, 7px, 13px). Use sempre `,(0,c.jsx)(n.code,{children:`var(--shape-spacing-*)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`escala-de-espaçamento`,children:`Escala de espaçamento`}),`
`,`
`,(0,c.jsx)(l,{token:`--shape-spacing-4px`,value:4,usage:`Gap ícone-texto inline, padding vertical de badge`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-8px`,value:8,usage:`Padding compacto, gaps pequenos, checkbox–label`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-12px`,value:12,usage:`Padding horizontal de input, gaps internos de card`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-16px`,value:16,usage:`⭐ Padding padrão, gaps de seção, padding de card compacto`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-24px`,value:24,usage:`⭐ Padding de card padrão, separação de seções`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-32px`,value:32,usage:`⭐ Padding da área de conteúdo da página, entre seções maiores`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-40px`,value:40,usage:`Margens topo/base da página`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-48px`,value:48,usage:`Divisões entre seções maiores`}),`
`,(0,c.jsx)(l,{token:`--shape-spacing-64px`,value:64,usage:`Respiro de nível de página (raro)`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`padrão-de-layout`,children:`Padrão de layout`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`┌────────────────────────────────────────────────┐
│              Header (64px altura)               │
├──────────┬─────────────────────────────────────┤
│          │                                     │
│ Sidebar  │          Área de Conteúdo            │
│ (280px)  │       padding: 24px ou 32px          │
│          │                                     │
│          │  ┌─────────────────────────────┐    │
│          │  │  Título + Ações             │    │
│          │  │  (gap: 24px abaixo)         │    │
│          │  ├─────────────────────────────┤    │
│          │  │  Filtros                    │    │
│          │  │  (gap: 16px abaixo)         │    │
│          │  ├─────────────────────────────┤    │
│          │  │  Tabela / Cards / Form      │    │
│          │  └─────────────────────────────┘    │
│          │                                     │
└──────────┴─────────────────────────────────────┘
`})}),`
`,(0,c.jsx)(n.h3,{id:`tokens-de-layout-fixos`,children:`Tokens de layout fixos`}),`
`,(0,c.jsxs)(n.p,{children:[`| Elemento | Token | Valor |
|---|---|---|
| Largura da sidebar | `,(0,c.jsx)(n.code,{children:`--shape-size-280px`}),` | 280px |
| Altura do header | `,(0,c.jsx)(n.code,{children:`--shape-size-64px`}),` | 64px |
| Padding área de conteúdo | `,(0,c.jsx)(n.code,{children:`--shape-spacing-24px`}),` ou `,(0,c.jsx)(n.code,{children:`--shape-spacing-32px`}),` | 24–32px |
| Altura de linha de tabela | `,(0,c.jsx)(n.code,{children:`--shape-size-48px`}),` ou `,(0,c.jsx)(n.code,{children:`--shape-size-56px`}),` | 48–56px |
| Altura de input/botão | `,(0,c.jsx)(n.code,{children:`--shape-size-48px`}),` | 48px |
| Altura de chip/tag | `,(0,c.jsx)(n.code,{children:`--shape-size-32px`}),` | 32px |`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`border-radius`,children:`Border Radius`}),`
`,`
`,(0,c.jsx)(u,{token:`--shape-border-radius-0px`,value:`0px`,label:`Elementos quadrados (nunca para interativos)`}),`
`,(0,c.jsx)(u,{token:`--shape-border-radius-4px`,value:`4px`,label:`Botões SM, badges, chips`}),`
`,(0,c.jsx)(u,{token:`--shape-border-radius-8px`,value:`8px`,label:`⭐ Padrão — botões, inputs, cards, modais`}),`
`,(0,c.jsx)(u,{token:`--shape-border-radius-12px`,value:`12px`,label:`Cards grandes, containers`}),`
`,(0,c.jsx)(u,{token:`--shape-border-radius-16px`,value:`16px`,label:`Containers de modal, cards proeminentes`}),`
`,(0,c.jsx)(u,{token:`--shape-border-radius-9999px`,value:`9999px`,label:`⭐ Pills — tags, chips, avatares circulares`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`espessura-de-borda`,children:`Espessura de borda`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Valor | Uso |
|---|---|---|
| `,(0,c.jsx)(n.code,{children:`--shape-border-width-1px`}),` | 1px | ⭐ Bordas padrão — inputs, cards, divisores |
| `,(0,c.jsx)(n.code,{children:`--shape-border-width-2px`}),` | 2px | Anéis de foco, estados ativos, ênfase |
| `,(0,c.jsx)(n.code,{children:`--shape-border-width-4px`}),` | 4px | Borda lateral em linhas selecionadas |`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`exemplo-de-código`,children:`Exemplo de código`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* Área de conteúdo da página */
.conteudoPagina {
  padding: var(--shape-spacing-32px);
}

/* Card padrão */
.card {
  padding: var(--shape-spacing-24px);
  border-radius: var(--shape-border-radius-8px);
  border: var(--shape-border-width-1px) solid var(--color-gray-gray-100);
}

/* Gap entre elementos em linha */
.row {
  display: flex;
  gap: var(--shape-spacing-12px);
}

/* Pill / Tag */
.pill {
  padding: var(--shape-spacing-4px) var(--shape-spacing-8px);
  border-radius: var(--shape-border-radius-9999px);
}
`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c,l,u;e((()=>{c=i(),a(),n(),l=({token:e,value:t,usage:n})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,padding:`6px 0`,borderBottom:`1px solid #f0ece0`},children:[(0,c.jsx)(`div`,{style:{width:t,height:20,background:`#0a4ee4`,borderRadius:2,flexShrink:0,minWidth:4}}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:1,flex:1},children:[(0,c.jsx)(`code`,{style:{fontSize:12,color:`#403f3b`},children:e}),(0,c.jsxs)(`span`,{style:{fontSize:11,color:`#827f73`},children:[t,`px`,n?` — ${n}`:``]})]})]}),u=({token:e,value:t,label:n})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,padding:`8px 0`,borderBottom:`1px solid #f0ece0`},children:[(0,c.jsx)(`div`,{style:{width:48,height:32,background:`#0a4ee4`,borderRadius:t,flexShrink:0,opacity:.85}}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,c.jsx)(`code`,{style:{fontSize:12,color:`#403f3b`},children:e}),(0,c.jsxs)(`span`,{style:{fontSize:11,color:`#827f73`},children:[t,` — `,n]})]})]})}))();export{u as RadiusRow,l as SpacingRow,s as default};