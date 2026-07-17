import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,l as n,x as r}from"./blocks-Bz0jTjli.js";import{t as i}from"./jsx-runtime-DqZldVDK.js";import{t as a}from"./mdx-react-shim-Dh_PP0HM.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/Typography`}),`
`,(0,c.jsx)(n.h1,{id:`tipografia`,children:`Tipografia`}),`
`,(0,c.jsxs)(n.p,{children:[`A fonte primária é `,(0,c.jsx)(n.strong,{children:`Plus Jakarta Sans`}),`, carregada via Google Fonts. Todos os valores são definidos como tokens em `,(0,c.jsx)(n.code,{children:`src/generated/variables.css`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Regra:`}),` nunca use valores de fonte, peso ou altura hardcoded. Use sempre `,(0,c.jsx)(n.code,{children:`var(--nome-do-token)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`família-tipográfica`,children:`Família tipográfica`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Valor | Uso |
|---|---|---|
| `,(0,c.jsx)(n.code,{children:`--font-family-jakarta`}),` | Plus Jakarta Sans | `,(0,c.jsx)(n.strong,{children:`Toda a UI`}),` — títulos, corpo, labels, botões, inputs |
| `,(0,c.jsx)(n.code,{children:`--font-family-arial`}),` | Arial | Fallback apenas — nunca especificar diretamente |`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`escala-de-tamanhos`,children:`Escala de tamanhos`}),`
`,`
`,(0,c.jsx)(l,{token:`--font-size-10px`,size:`10px`,usage:`Micro labels, badges, letras miúdas`}),`
`,(0,c.jsx)(l,{token:`--font-size-12px`,size:`12px`,usage:`Captions, helper text, headers de tabela, timestamps`}),`
`,(0,c.jsx)(l,{token:`--font-size-14px`,size:`14px`,usage:`⭐ Texto corpo padrão do ERP — células, valores de input`}),`
`,(0,c.jsx)(l,{token:`--font-size-16px`,size:`16px`,usage:`Headers de seção, corpo enfatizado, labels de input`}),`
`,(0,c.jsx)(l,{token:`--font-size-20px`,size:`20px`,usage:`Sub-headers de página, títulos de card`}),`
`,(0,c.jsx)(l,{token:`--font-size-24px`,size:`24px`,usage:`Títulos de página, headers de modal`}),`
`,(0,c.jsx)(l,{token:`--font-size-32px`,size:`32px`,usage:`Métricas de dashboard, números destaque`}),`
`,(0,c.jsx)(l,{token:`--font-size-40px`,size:`40px`,usage:`Números grandes de exibição (raro)`}),`
`,(0,c.jsx)(l,{token:`--font-size-48px`,size:`48px`,usage:`Headers de marketing (raro no ERP)`}),`
`,(0,c.jsx)(l,{token:`--font-size-56px`,size:`56px`,usage:`Display — uso excepcional`}),`
`,(0,c.jsx)(l,{token:`--font-size-64px`,size:`64px`,usage:`Display — uso excepcional`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`pesos`,children:`Pesos`}),`
`,`
`,(0,c.jsx)(u,{token:`--font-weight-extra-light`,weight:200,label:`Extra Light`,usage:`Apenas decorativo — evitar no ERP`}),`
`,(0,c.jsx)(u,{token:`--font-weight-light`,weight:300,label:`Light`,usage:`Números grandes de exibição`}),`
`,(0,c.jsx)(u,{token:`--font-weight-regular`,weight:400,label:`Regular`,usage:`⭐ Corpo padrão, descrições, células de tabela`}),`
`,(0,c.jsx)(u,{token:`--font-weight-medium`,weight:500,label:`Medium`,usage:`Labels de input, labels de formulário, ênfase sutil`}),`
`,(0,c.jsx)(u,{token:`--font-weight-semibold`,weight:600,label:`Semibold`,usage:`⭐ Headers, texto de botão, headers de tabela, badges`}),`
`,(0,c.jsx)(u,{token:`--font-weight-bold`,weight:700,label:`Bold`,usage:`Títulos de página, ênfase forte, métricas`}),`
`,(0,c.jsx)(u,{token:`--font-weight-extra-bold`,weight:800,label:`Extra Bold`,usage:`Apenas marketing — evitar no ERP`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`alturas-de-linha`,children:`Alturas de linha`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Valor | Usar com tamanho |
|---|---|---|
| `,(0,c.jsx)(n.code,{children:`--font-line-height-12px`}),` | 12px | 10px e 12px (compacto) |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-14px`}),` | 14px | 12px (alternativo) |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-16px`}),` | 16px | 12px (mais espaço) |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-18px`}),` | 18px | 12px com respiro extra |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-20px`}),` | 20px | ⭐ 14px — corpo padrão |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-24px`}),` | 24px | 16px |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-30px`}),` | 30px | 20px |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-32px`}),` | 32px | 24px |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-40px`}),` | 40px | 32px |
| `,(0,c.jsx)(n.code,{children:`--font-line-height-48px`}),` | 48px | 40px |`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`papéis-de-texto`,children:`Papéis de texto`}),`
`,(0,c.jsxs)(n.p,{children:[`Cada elemento de texto na UI tem um `,(0,c.jsx)(n.strong,{children:`papel semântico`}),`. Use as combinações abaixo como ponto de partida — nunca confie nos defaults do navegador.`]}),`
`,`
`,(0,c.jsx)(d,{role:`Heading`,size:24,weight:700,lineHeight:32,cssClass:`.heading`,usage:`Título principal da tela`}),`
`,(0,c.jsx)(d,{role:`Subheading`,size:14,weight:400,lineHeight:20,color:`#827f73`,cssClass:`.subheading`,usage:`Texto de apoio abaixo do Heading`}),`
`,(0,c.jsx)(d,{role:`Section Title`,size:16,weight:600,lineHeight:24,cssClass:`.sectionTitle`,usage:`Título de seção ou grupo`}),`
`,(0,c.jsx)(d,{role:`Body`,size:14,weight:400,lineHeight:20,cssClass:`.body`,usage:`Parágrafo de conteúdo`}),`
`,(0,c.jsx)(d,{role:`Label`,size:14,weight:500,lineHeight:20,color:`#403f3b`,cssClass:`.label`,usage:`Rótulo de campo de formulário`}),`
`,(0,c.jsx)(d,{role:`Helper`,size:12,weight:400,lineHeight:16,color:`#827f73`,cssClass:`.helper`,usage:`Texto auxiliar abaixo de campos`}),`
`,(0,c.jsx)(d,{role:`Error`,size:12,weight:400,lineHeight:16,color:`#e64e36`,cssClass:`.error`,usage:`Mensagem de erro de validação`}),`
`,(0,c.jsx)(d,{role:`Caption`,size:12,weight:400,lineHeight:16,color:`#827f73`,cssClass:`.caption`,usage:`Timestamps, metadados, rodapés`}),`
`,(0,c.jsx)(d,{role:`CTA Label`,size:14,weight:600,lineHeight:20,color:`#0a4ee4`,cssClass:`.ctaLabel`,usage:`Texto dentro de botão`}),`
`,(0,c.jsx)(d,{role:`Link`,size:14,weight:400,lineHeight:20,color:`#0a4ee4`,cssClass:`.link`,usage:`Texto clicável inline`}),`
`,(0,c.jsx)(n.h3,{id:`casos-especiais`,children:`Casos especiais`}),`
`,(0,c.jsxs)(n.p,{children:[`| Elemento | Tamanho | Peso | Altura | Cor |
|---|---|---|---|---|
| Header de tabela | 12px | semibold (600) | 16px | `,(0,c.jsx)(n.code,{children:`--color-gray-gray-600`}),` |
| Badge / Tag | 12px | semibold (600) | 16px | (cor do badge) |
| Métrica (dashboard) | 32px | bold (700) | 40px | `,(0,c.jsx)(n.code,{children:`--color-gray-gray-900`}),` |
| Placeholder de input | 12px | regular (400) | 16px | `,(0,c.jsx)(n.code,{children:`--color-gray-gray-400`}),` |`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`exemplo-de-código`,children:`Exemplo de código`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.heading {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-24px);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-32px);
  color: var(--color-gray-gray-900);
}

.body {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-gray-900);
}

.label {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-14px);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-20px);
  color: var(--color-gray-gray-700);
}

.error {
  font-family: var(--font-family-jakarta), sans-serif;
  font-size: var(--font-size-12px);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-16px);
  color: var(--color-red-red-500);
}
`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c,l,u,d;e((()=>{c=i(),a(),n(),l=({token:e,size:t,usage:n})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:16,padding:`10px 0`,borderBottom:`1px solid #f0ece0`},children:[(0,c.jsxs)(`span`,{style:{fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:t,lineHeight:1.2,minWidth:280,color:`#10100f`},children:[`Aa — `,t]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,c.jsx)(`code`,{style:{fontSize:12,color:`#403f3b`},children:e}),(0,c.jsx)(`span`,{style:{fontSize:11,color:`#827f73`},children:n})]})]}),u=({token:e,weight:t,label:n,usage:r})=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,padding:`8px 0`,borderBottom:`1px solid #f0ece0`},children:[(0,c.jsx)(`span`,{style:{fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:20,fontWeight:t,minWidth:200,color:`#10100f`},children:`Plus Jakarta Sans`}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,c.jsx)(`code`,{style:{fontSize:12,color:`#403f3b`},children:e}),(0,c.jsxs)(`span`,{style:{fontSize:11,color:`#827f73`},children:[t,` — `,n,r?` · ${r}`:``]})]})]}),d=({role:e,size:t,weight:n,lineHeight:r,color:i,cssClass:a,usage:o})=>(0,c.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`140px 1fr 2fr`,gap:16,alignItems:`center`,padding:`10px 0`,borderBottom:`1px solid #f0ece0`},children:[(0,c.jsx)(`span`,{style:{fontFamily:`Plus Jakarta Sans, sans-serif`,fontSize:t,fontWeight:n,lineHeight:r+`px`,color:i||`#10100f`},children:e}),(0,c.jsx)(`code`,{style:{fontSize:11,color:`#403f3b`},children:a}),(0,c.jsxs)(`span`,{style:{fontSize:11,color:`#827f73`},children:[t,`px / `,n,` / lh `,r,`px — `,o]})]})}))();export{d as RoleRow,l as SizeRow,u as WeightRow,s as default};