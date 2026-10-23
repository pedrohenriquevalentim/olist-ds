# Ilustrações — Catálogo e Regras de Uso

**Versão:** 1.0
**Última atualização:** 2026-10-23
**Fonte Figma:** arquivo `HeyN4w209HWh8rfpTDiwyf` (`design system (base)`), página `Ilustrações` (`12174:49314`) e folha `Folha de especificação · Illustration` (`12175:65258`)
**Arte original:** arquivo do time de brand "Rebranding — Ilustrações" (`5bFhA4BecmKS8M2wNN1bqf`)
**Metadata legível por máquina:** `references/ilustracoes-catalogo.json` (60 cenas e 30 objetos, com variante e key)
**Leia junto com:** `ORGANISMOS.md` (Content Card, Empty State) · `GOVERNANCA_TOKENS.md` (família `illustration-*`) · `CHECKLIST_REVISAO.md` (seção 13)

As ilustrações do brand entram nas telas por **um único componente público: a moldura `ilustracao`**. Ela resolve tamanho, proporção, fundo e troca de arte; as artes são peças internas `.[base]`. **Em uma tela, use sempre a moldura: nunca instancie a arte direto, nunca recorte, redimensione ou recolora uma ilustração à mão.**

---

## 1. Estrutura

| Peça | Nome no Figma | Key | Papel |
|---|---|---|---|
| Moldura (pública) | `ilustracao` (sem acento: nome escolhido pelo mantenedor) | `a0281dd6a727a0f8e64baac00bcea4789dab7ff3` | Encaixa a arte no espaço: `tamanho` × `proporção` × `fundo` + propriedade `ilustração` (INSTANCE_SWAP) |
| Cenas (interna) | `.[base] illustration` | `28c7d1b4bfd599a9c39fe766b8f0c25fc89713a3` | 60 cenas: `categoria` × `estilo` × `cena` × `paleta` |
| Objetos (interna) | `.[base] illustration asset` | `a46e3ed6bcc9cecf1b3562272357e0ac5477a694` | 30 objetos soltos: `objeto` |

- Toda arte vive numa **prancheta 4:3** (480×360), ajustada ao espaço sem cortar (contain), alinhada embaixo nas cenas e centralizada nos objetos. Por isso qualquer arte troca por outra sem quebrar o encaixe.
- Peças `.[base]` não aparecem na busca (`search_design_system`) e não são instâncias válidas em telas (ver `globals.md`, filtro `.[base]`). Procure por `ilustracao`.
- As artes são vetores com `constraints = SCALE` em todos os descendentes; raios, traços e texto foram convertidos em vetor para escalar sem distorcer. **Nunca desfaça isso ao editar uma arte** (ver `cases/caso-5-construir.md`).

## 2. Propriedades da moldura

| Propriedade | Valores | Observação |
|---|---|---|
| `tamanho` | `2xs` 64 · `xs` 96 · `sm` 160 · `md` 240 · `lg` 360 · `xl` 480 (largura em px) | Tokens `illustration/size/*` (no CSS, em `rem`). A altura segue a proporção. Não há tamanho livre: precisando de outro, é gap (novo token) |
| `proporção` | `4:3` · `1:1` · `16:9` · `3:1` (banner) | A arte se ajusta ao espaço (contain); o frame não corta a arte |
| `fundo` | `nenhum` · `neutro` · `destaque` · `claro` | `neutro` = `color/background/surface/container` (acompanha o tema); `destaque` = degradê suave blue 50 → cyan 50 (escuro: blue 800 → cyan 900); `claro` = superfície clara **fixa**, mesmo no tema escuro |
| `ilustração` | INSTANCE_SWAP | 90 artes como valores preferidos |

Padding interno (só com fundo): `2xs` 4px · `xs` e `sm` 8px · `md`, `lg`, `xl` 16px. Raio do fundo: 12px (`illustration/border radius/default`).

## 3. Cenas

Quatro categorias do brand, cada uma em `color` e `outline`:

| Categoria | Cenas color | Cenas outline | Para quê |
|---|---|---|---|
| `logística` | 01 a 05 (base + recolor) | 01, 01b, 02 a 05 | Envios, entregas, estoque, expedição |
| `finanças` | 01 a 05 (base + recolor) | 01 a 05 | Conta Digital, Pix, boleto, cobrança, segurança, Capital |
| `seller` | 01 a 06 (base + recolor) | 01 a 06 | ERP, catálogo, loja, onboarding do seller |
| `pdv-buyer` | 01 a 04 (base + recolor; 02 só base) | 01 a 04 | PDV, balcão, venda presencial, comprador |

Cenas identificadas (as demais estão no catálogo JSON e na página do Figma):

| Cena | Conteúdo |
|---|---|
| `logística 01` | Caminhão de entrega com personagem carregando caixa |
| `logística 02` | Entregador na porta com caixa e campainha |
| `logística 03` | Entregador de moto com mapa no celular |
| `logística 04` | Estoque com carrinho e prateleiras |
| `logística 05` | Estantes com dois operadores e caixas |
| `finanças 01` | Pessoa diante de janelas com código de barras e cifrão (boleto/nota) |
| `finanças 02` | Celular com cadeado e moeda (segurança) |
| `finanças 03` | Celular com QR code (Pix) |
| `pdv-buyer 01` | Balcão de loja com maquininha e cartão |
| `pdv-buyer 02` | Pessoa no computador com gato e planta (só base) |
| `pdv-buyer 03` | Dois clientes com sacolas na vitrine |
| `pdv-buyer 04` | Cliente na arara de roupas com planta |

**Paleta (`paleta`):** `base` é a cor original do brand; `recolor` é a mesma cena com cores trocadas (ex.: calça verde → vermelha) para variar sem mudar o assunto. Cenas `outline` só têm `base`. `01b` é a segunda versão da Logística outline 01 (círculo na porta do caminhão), não uma paleta.

> Os pares base/recolor sem "Recolor" no nome do brand (Finanças 01 e PDV 01, 03 e 04 color) foram atribuídos pela posição no arquivo (esquerda = base). Confirmar com o brand.

## 4. Objetos

30 objetos em 1:1 (prancheta 4:3 com o objeto centralizado): `headset`, `chaleira`, `furadeira`, `ventilador`, `webcam`, `secador`, `maquininha`, `whey`, `garrafa`, `luz`, `gato`, `câmera`, `abajur`, `atendimento`, `impressora`, `caixa`, `pneu`, `guarda-chuva`, `caneca`, `caixa aberta`, `computador`, `cabides`, `controle`, `pia`, `ferro de passar`, `moeda`, `lupa`, `balão`, `cartão`, `calculadora`.

Dois brilhos decorativos do arquivo do brand não entraram. Use os objetos em espaços pequenos (miniatura de lista, card compacto, empty state discreto); em espaços médios e grandes, use uma cena.

## 5. Qual ilustração usar em cada contexto

| Contexto | Arte | `tamanho` | `proporção` | `fundo` |
|---|---|---|---|---|
| Empty State, onboarding, erro, sucesso | Cena da categoria do produto | `md` | `4:3` | `nenhum` |
| Topo de Content Card vertical | Cena | `lg` | `16:9` | `destaque` |
| Content Card horizontal (mídia fixa de 96px) | Objeto | `xs` | `1:1` | `nenhum` |
| Miniatura em lista | Objeto | `2xs` | `1:1` | `neutro` |
| Banner largo | Cena | conforme o espaço | `3:1` | `nenhum` ou `destaque` |
| Tela inteira de primeiro uso (Landing foco) | Cena | `xl` | `4:3` | `nenhum` |

- **Categoria por produto:** logística → Envios; finanças → Conta Digital e Capital; seller → ERP, New Hub e E-commerce; pdv-buyer → PDV.
- **Estilo:** `color` é o padrão; `outline` para superfícies densas ou quando a tela já tem muita cor. Use um estilo por tela.
- **Uma ilustração por tela como foco.** Duas competindo: escolha uma.
- **Content Card horizontal:** só cabe objeto `xs` 1:1 (a mídia é fixa em 96px e a largura não aceita override). Cenas pedem o layout vertical.

## 6. Regras do brand

- Priorize 3 a 4 cores no máximo na composição.
- Evite azul, amarelo e verde juntos; use o amarelo em um único destaque.
- Elementos em segundo plano ficam em baixa opacidade (por exemplo 70%) para dar foco à ação.
- Prefira os personagens na cor base; use a `recolor` para variar.
- No outline, personagem com fundo quando sobreposto a outros objetos; atenção às tangentes.
- O brand autoriza "quebrar" as ilustrações em partes quando o espaço pedir (fora do componente, com aprovação do brand).

## 7. Tema claro e escuro

- **Outline:** traço no token `illustration/color/stroke` (alias `color/text/enabled/brand`: azul `#043fbe` no claro e `#6791ea` no escuro) e máscara em `illustration/color/mask` (alias `color/background/surface/system`). Acompanha o tema. A máscara combina com fundo `nenhum` ou `claro`; em `neutro` tem um tom ligeiramente diferente.
- **Color:** mantém a paleta do brand (sem tokens). No tema escuro o navy some: use `fundo=claro`.
- O token `illustration/color/background claro` aponta para `surface/system` (que escurece no tema escuro); a variante `fundo=claro` sobrescreve o modo do tema para claro. Em código, `claro` precisa fixar o tema claro no container.

## 8. Tokens

`illustration/size/2xs|xs|sm|md|lg|xl` · `illustration/spacing/padding xsmall|small|default` · `illustration/border radius/default` · `illustration/color/background neutro|claro` · `illustration/color/gradient start|end` · `illustration/color/stroke` · `illustration/color/mask`. Valores resolvidos em `TOKEN_CATALOG.md` (família `illustration`). Os tokens `media placeholder/*` pertencem ao `.[base] media placeholder` (placeholder de imagem/ilustração do slot de mídia do Content Card).

## 9. Acessibilidade

- Ilustração **decorativa**: `alt=""` e `aria-hidden="true"`.
- Ilustração que **transmite informação** (erro, sucesso): `alt` curto e objetivo, e o texto da tela repete a mensagem.
- Nunca coloque o único texto de uma instrução dentro da imagem.
- Respeite `prefers-reduced-motion` se a ilustração vier animada.

## 10. Quando não usar

- Ação ou rótulo dentro de botões, inputs e menus: use `Icon`.
- Ícone de produto: use `Product Icon`.
- Dados e gráficos: use Chart Card; a ilustração não substitui a informação.
- Ilustração em tela densa de tabela ou formulário: ela serve a estados vazios e a destaques, não decora.

## 11. Usando no Figma (`use_figma`)

1. Importe o set público `ilustracao` pela key (`importComponentSetByKeyAsync`) e crie a instância da variante `tamanho=…, proporção=…, fundo=…`.
2. Para trocar a arte, use a propriedade `ilustração` na instância (UI) ou `instância-interna.swapComponent(arte)`. As keys das artes estão em `ilustracoes-catalogo.json`; como as peças `.[base]` não são publicadas como asset, o import delas fora do arquivo da library pode falhar: nesse caso mantenha a arte padrão e sinalize o gap.
3. **A instância interna da arte tem tamanho fixo por variante:** escolha a variante `tamanho`/`proporção` certa em vez de redimensionar a instância (overrides de tamanho da arte são ignorados).
4. Em slots (Content Card, Empty State): apague os filhos do slot e adicione a instância da moldura. O Empty State não tem slot de ilustração: destaque a instância, esconda o tile do ícone e insira a moldura (aviso ao usuário).

## 12. Lacunas conhecidas

- Content Card horizontal tem mídia fixa de 96px (só objeto xs 1:1).
- Cenas `color` não têm versão para tema escuro (use `fundo=claro`).
- Só existem os seis tamanhos por token; tamanho livre exige token novo.
- Pares base/recolor atribuídos por posição (Finanças 01 e PDV 01, 03, 04): confirmar com o brand.
- Sem versão React: o componente existe só no Figma.
