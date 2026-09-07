# Decisão UX/Design: Tom de Voz e UX Writing

**Categoria:** UX/Design
**Status:** Ativa
**Skill de referência:** `.claude/skills/olist-ds-specialist/references/UX_WRITING.md`, `references/GLOSSARIO_PAPEIS_TEXTO.md`

---

## Decisão

Todo texto de UI (copy, labels, mensagens de erro, empty states, CTAs) segue as diretrizes de UX Writing da Olist. O tom é B2B — direto, profissional e orientado à tarefa do lojista (evitar "seller" em qualquer texto voltado ao usuário final).

---

## Tom de Voz

- **Direto:** vai ao ponto, sem rodeios — o lojista tem pressa para resolver problemas.
- **Semi-formal e humanizado:** equilibra a seriedade do B2B com empatia de parceria — nunca corporativo frio, nunca casual demais.
- **Orientado à tarefa:** cada texto ajuda o lojista a completar uma ação ou entender o próximo passo.
- **Positivo, sem sensacionalismo:** apresenta benefício e otimismo, mas sem promessa excessiva ("A Olist vai impulsionar suas vendas", não "você vai vender muito mais").
- **Abrasileirado:** português do Brasil, não de Portugal.

Conceito-guia da marca: toda comunicação é uma **"troca que impulsiona"** — precisa ser clara, gerar impacto e trazer um novo ponto de vista para o lojista.

> **Nota conceitual — Voz vs. Tom:** os cinco atributos acima descrevem a **voz** da Olist — o
> conjunto de características que se mantém consistente em toda a experiência e faz a marca ser
> reconhecível, independentemente da tela. O **tom** é a variação dessa mesma voz conforme o
> contexto: um erro crítico, uma celebração de meta batida e um lembrete de rotina soam
> diferentes entre si, mas devem ser reconhecíveis como a mesma marca. Ao escrever para um
> contexto novo, a pergunta não é "que tom uso?" isoladamente, mas "como a voz da Olist (os 5
> atributos acima) se expressa neste contexto específico?". *(síntese própria a partir de
> Podmajersky,* Strategic Writing for UX*, 2E — ver Framework aplicado ao final deste documento)*

---

## Os 4 Pilares de Conteúdo

Toda mensagem é validada contra estes 4 critérios antes de publicar:

| Pilar | Significa | Exemplo |
|---|---|---|
| **Conciso** | Remover palavras desnecessárias | "Verifique sua conexão e tente novamente" |
| **Claro** | Linguagem do usuário, nunca jargão técnico | "CPF inválido. Digite apenas números" (não "Erro 422") |
| **Significativo** | Vocabulário consistente com a marca, cada palavra com propósito | "Seu cupom foi ativado. Está pronto para impulsionar suas vendas" |
| **Dialógico** | Sempre indicar o próximo passo | "Nenhum pedido encontrado. Criar seu primeiro pedido?" |

> **Como aplicar os 4 Pilares na prática — ciclo de revisão em ordem:** ao revisar um texto que
> já existe (não um rascunho novo), é mais eficaz passar pelos pilares em uma ordem específica em
> vez de tentar os quatro ao mesmo tempo:
> 1. **Significativo primeiro** — antes de cortar qualquer palavra, confirme o que o texto
>    *precisa* fazer pela pessoa e pela Olist. É normal o texto crescer nesta etapa, porque
>    você está garantindo que nada essencial ficou de fora.
> 2. **Conciso** — corte tudo que não serve a esse propósito.
> 3. **Dialógico** — depois de cortado, confirme que ainda sobrou espaço para indicar o próximo
>    passo; um texto cortado demais pode virar só um aviso sem direção.
> 4. **Claro** — checagem final: uma pessoa que nunca viu esse texto entenderia exatamente o que
>    fazer e por quê?
>
> *(síntese própria adaptada do ciclo de edição em 4 fases — Propositado, Conciso,
> Conversacional, Claro — de Podmajersky,* Strategic Writing for UX*, 2E)*

---

## Regras por Tipo de Texto

Consultar `references/UX_WRITING.md` para as 12 categorias completas. Regras-chave:

| Tipo | Regra |
|---|---|
| Botões (CTA) | Verbo no infinitivo + objeto — "Salvar pedido", não "Salvar" genérico quando há ambiguidade. Ver regra de **case por superfície** abaixo — é a atualização mais importante desta versão. |
| Mensagens de erro | Descrever o problema + orientar a solução — nunca só "Erro". Se a causa for externa (Receita Federal, bancos, transportadoras), evitar linguagem de culpa ("atualize seu cadastro", não "corrija seus dados") |
| Empty states | Explicar por que está vazio + oferecer ação para resolver |
| Labels de campo | Substantivo conciso — nunca verbo ou instrução ("CPF do vendedor", não "Insira seu CPF") |
| Toasts de sucesso | Confirmar o que aconteceu, sem festividade excessiva de e-commerce B2C — "Pedido salvo", não "Oba! Pedido salvo 🎉" |
| Placeholders | Exemplo real do formato esperado — nunca só "Digite aqui" |

### Aprofundamento — Mensagens de Erro

A regra da tabela acima ("descrever o problema + orientar a solução") pode ser desdobrada em
três verificações práticas ao revisar qualquer erro:

1. **Nunca culpe o lojista.** Prefira instruir a insultar: "Digite seu CPF" em vez de "Você não
   digitou o CPF"; "Digite um CEP válido" em vez de "Este CEP é inválido".
2. **Seja específico sobre a solução**, não apenas sobre o problema. "O produto foi movido ou
   excluído" não ajuda — diga o que fazer a seguir (buscar novamente, ver histórico, contatar
   suporte).
3. **Humor só em erros de baixo impacto** (ex: página não encontrada), nunca em erros que
   bloqueiam uma tarefa fiscal, financeira ou de pedido — nesses casos, o lojista quer resolver,
   não sorrir.

*(síntese própria a partir de Tham, Howard & Verhulsdonck,* UX Writing: Designing
User-Centered Content*, Cap. 9 — ver Framework aplicado ao final deste documento)*

### Aprofundamento — Formulários e Labels

Complementa a regra de Labels da tabela acima quando o texto faz parte de um formulário maior:

- **Reduza o número de campos visíveis.** Não peça informação redundante (ex: endereço de
  cobrança igual ao de entrega); esconda campos opcionais por padrão e ofereça expandir se
  necessário.
- **Priorize autofill/preenchimento automático** sempre que a plataforma permitir, para campos
  rotineiros (nome, e-mail, CNPJ já cadastrado).
- **O rótulo deve deixar claro o que é obrigatório vs. opcional** antes mesmo de a pessoa errar —
  isso evita boa parte dos erros de preenchimento, que não são uma atividade natural para
  ninguém.

*(síntese própria a partir de Tham, Howard & Verhulsdonck,* UX Writing: Designing
User-Centered Content*, Cap. 9)*

---

## Case de CTA por Superfície — ⚠️ atualização

O padrão de capitalização do texto de botão **não é único em todo o Ecossistema da Olist** — varia conforme a superfície:

| Superfície | Padrão de case | Exemplo |
|---|---|---|
| **Sistema ERP da Olist** e demais produtos do ecossistema da Olist | **Tudo minúsculo** — nenhuma letra maiúscula, nem a primeira | "salvar pedido", "excluir permanentemente", "adicionar produto" |
| **Sites institucionais e Landing Pages (LPs) da Olist** | **Primeira letra maiúscula, restante minúsculo** (sentence case) — este padrão é **exclusivo** desse contexto, não deve ser replicado no ERP | "Salvar pedido", "Fale com um especialista" |

Antes desta atualização, a documentação indicava lowercase genérico para CTAs sem diferenciar por superfície. A regra correta é: **lowercase total é o padrão do ERP**; a variação com inicial maiúscula pertence somente a sites e LPs (superfícies de marketing/institucional), nunca a produto.

Ao revisar ou propor um CTA, a primeira pergunta é sempre: "essa tela é ERP (produto) ou site/LP (institucional)?" — a resposta define o case antes de qualquer outra regra de conteúdo.

---

## Regras Gerais de Estilo

- **Maiúsculas:** fora da regra de CTA acima, use maiúsculas apenas em títulos de página, nomes próprios e primeira palavra após ponto final. Sentence case em labels, helpers e erros.
- **Depois de dois-pontos (":"):** sempre letra minúscula.
- **Pontuação:** sem ponto final em labels, helpers, CTAs, placeholders, toasts e badges; com ponto final em erros completos, modais e avisos críticos.
- **Abrasileiramento:** sem hífen em "ecommerce", "email" e "ebook". "Seller" é termo interno — nunca aparece em comunicação externa (usar "você", "lojista" ou "parceiro").
- **Números:** numeral sempre ("100 produtos"), valores monetários com símbolo ("R$ 1.000,00"), datas em formato local ("12/04/2026").
- **Emoji:** bem-vindo com moderação, máximo 1-2 por mensagem. Nunca em labels, erros, CTAs ou breadcrumbs.
- **Sensacionalismo:** evitar promessas excessivas ("Revolucione seu ecommerce!") — preferir afirmação sóbria e otimista ("Otimize sua gestão de estoque").

---

## Boas Práticas por Componente In-App

Fonte: documentação Appcues (ferramenta de publicação usada para essas mensagens). Válido para
qualquer texto de comunicação in-app, sempre combinado com os 4 Pilares e as Regras Gerais de
Estilo acima.

| Componente | Boas práticas de conteúdo |
|---|---|
| **Slideout** | Título até 45 caracteres, descrição até 2 linhas. CTA claro e direto ("Experimentar", "Avaliar", "Agendar", "Participar", "Responder"). Emoji só ao final do texto, com cautela. Em pesquisas, prefira múltipla escolha rápida (até 5 opções). |
| **Modal** | Título em uma linha, com verbo de ação ("Ativar", "Configurar", "Revisar") — evitar genéricos como "Atenção" ou "Importante". Descrição curta e escaneável, até 3 linhas. CTA sempre verbo no infinitivo ("Ativar rastreio"), nunca genérico ("OK", "Sim", "Quero"). Se não houver X para fechar, inclua opção secundária ("Fechar" ou "Deixar para depois"). |
| **Checklist** | Comece com frase de boas-vindas que destaque o benefício do checklist. Máximo 5 itens, começando por uma tarefa fácil ou já concluída. Articule o benefício junto com a ação (ex: "Configure os dados fiscais para emitir notas sem erros"). |
| **Launchpad** | Nomeie com clareza o que a pessoa vai encontrar (ex: "Emissão de Notas"). Priorize dúvidas/tickets recorrentes de Suporte com linguagem positiva (não "Corrija os erros no preenchimento de NCMs", sim "Como aprimorar as sugestões do Sugestor de NCM"). Títulos priorizando a ação ("Como emitir nota fiscal"). Máximo ~7 conteúdos ativos, atualizados mensalmente. |
| **Banner** | Nunca cubra botões ou atrapalhe ações importantes da página. Evite excesso de informação — priorize clareza. |
| **Tooltip** | Frase única, até 120 caracteres, no máximo 2 linhas. Linguagem natural, respondendo apenas uma pergunta por vez ("o que é isso?", "por que importa?" ou "como funciona?"). Evite interrogações, exclamações ou reticências. Nunca repita o texto que já está no botão, campo ou componente. |
| **Pin/Hotspot** | Máximo 3-4 por flow/tour. Frases curtas, até 80 caracteres, começando com verbo de ação/convite ("Explore", "Veja", "Teste", "Saiba", "Ative"). Direto e instigante, sem excesso de mistério. |

> **Nota — Launchpad e organização de ajuda:** ao priorizar quais dúvidas viram conteúdo do
> Launchpad, vale usar o mesmo critério de agrupamento recomendado para guias de ajuda em geral:
> ordenar por frequência real de chamados/tickets primeiro, depois por categoria funcional, e só
> então por nível de complexidade (básico vs. avançado). Isso evita publicar conteúdo sobre
> dúvidas raras enquanto dúvidas recorrentes ficam sem resposta. *(síntese própria a partir de
> Tham, Howard & Verhulsdonck,* UX Writing*, Cap. 9)*

---

## Papéis de Texto (interface com GLOSSARIO)

O nome do papel de texto define o token tipográfico e o tratamento visual.
Consultar `references/GLOSSARIO_PAPEIS_TEXTO.md` para o mapeamento completo dos 10 papéis:

Heading, Subheading, Section Title, Body, Label, Helper, Error, Caption, CTA Label, Link

---

## Nomenclatura de Produtos

Estrutura correta: **nome do produto + "da" + Olist** (ex: "Sistema ERP da Olist", "Crédito da Olist"). Primeira menção com nome completo; menções posteriores podem usar a forma abreviada ("ERP", "Crédito"). Exceção: "Sistema PDV" nunca deve ser abreviado para só "PDV", pois isolado tem significado próprio. Para o conjunto de produtos, usar "Ecossistema da Olist" (E maiúsculo).

---

## Referências na Skill

- Protocolo de triagem, 4 pilares, 12 tipos de texto → `references/UX_WRITING.md`
- Papéis visuais de texto e mapeamento SDD → `references/GLOSSARIO_PAPEIS_TEXTO.md`
- Checklist de revisão de copy → `references/CHECKLIST_REVISAO.md`
- Boas práticas por componente in-app (Slideout, Modal, Checklist, Launchpad, Banner, Tooltip,
  Pin/Hotspot), fonte Appcues → `references/componentes-in-app.md`

---

## Framework Aplicado — Síntese Própria de Referências Externas

> Os dois blocos abaixo resumem, em texto próprio, conceitos de duas referências técnicas de
> UX Writing usadas para embasar as notas conceituais inseridas neste documento (marcadas acima
> com *"síntese própria"*). Não são reproduções dos livros originais, que são obras protegidas
> por direitos autorais — servem como pano de fundo teórico. Em qualquer conflito com as
> decisões e regras da Olist acima, **as regras da Olist têm prioridade**.

**Voz vs. Tom e o Voice Chart** (Podmajersky, *Strategic Writing for UX*, 2ª ed.): a voz é o
conjunto de características de escolha de palavras consistente em toda a experiência; o tom é a
variação contextual dessa mesma voz. Uma ferramenta prática para documentar isso é o *voice
chart*: colunas = princípios/atributos do produto (na Olist, os 5 atributos da seção "Tom de
Voz" acima poderiam virar colunas), linhas = 6 aspectos de escrita a definir por atributo —
Conceitos, Vocabulário, Verbosidade, Gramática, Pontuação, Capitalização. Isso ajudaria a tornar
explícito, por exemplo, como "Direto" se traduz em vocabulário e verbosidade de forma diferente
de "Positivo, sem sensacionalismo" — hoje essa diferenciação existe de forma implícita nas regras
gerais de estilo, mas não está documentada atributo a atributo.

**Edição em quatro fases e gêneros práticos** (Tham, Howard & Verhulsdonck, *UX Writing:
Designing User-Centered Content*): o ciclo Propositado → Conciso → Conversacional → Claro é a
base da adaptação feita na seção "Como aplicar os 4 Pilares na prática" acima. O mesmo livro
também documenta boas práticas por gênero de conteúdo (erros, formulários, onboarding, tooltips,
guias de ajuda), usadas para enriquecer as seções "Aprofundamento — Mensagens de Erro",
"Aprofundamento — Formulários e Labels" e a nota sobre Launchpad acima.

---

## Histórico

- 2026-06-23 v1.0 — Decisão inicial extraída do CLAUDE.md e UX_WRITING.md
- 2026-09-04 v1.1 — Consolidação dos parâmetros de UX Writing definidos com a skill de referência (4 pilares, tom semi-formal humanizado, regras de estilo, abrasileiramento, nomenclatura de produtos, papéis de texto). Correção crítica: o case lowercase de CTA é o padrão do **Sistema ERP** (tudo minúsculo); a variação com inicial maiúscula é **exclusiva de sites institucionais e LPs**, não do ERP — a documentação anterior não fazia essa distinção por superfície.
- 2026-09-04 v1.2 — Adicionada a seção "Boas Práticas por Componente In-App" (Slideout, Modal, Checklist, Launchpad, Banner, Tooltip, Pin/Hotspot), consolidada a partir da referência Appcues da skill.
- 2026-09-04 v1.3 — Complementado com sínteses próprias de duas referências técnicas de UX Writing: nota conceitual de Voz vs. Tom e menção ao voice chart (Podmajersky, *Strategic Writing for UX*, 2E); ciclo prático de aplicação dos 4 Pilares em ordem, aprofundamento de regras de mensagens de erro e formulários/labels, e nota sobre priorização de conteúdo do Launchpad (Tham, Howard & Verhulsdonck, *UX Writing: Designing User-Centered Content*). Nova seção "Framework Aplicado" ao final, resumindo as fontes. Nenhuma regra ou decisão original foi removida ou substituída — apenas complementada.
- 2026-09-04 v1.4 — Ajuste na tabela "Case de CTA por Superfície": a superfície antes descrita como "Sistema ERP da Olist (e demais produtos do ERP)" passa a ser "Sistema ERP da Olist e demais produtos do ecossistema da Olist" — o lowercase total de CTA não se limita ao ERP em si, mas se estende a todos os produtos do ecossistema (fora de sites institucionais e LPs).
