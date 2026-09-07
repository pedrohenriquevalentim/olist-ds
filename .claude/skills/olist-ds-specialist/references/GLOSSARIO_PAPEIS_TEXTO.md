# Glossário de Papéis de Texto

**Propósito:** Definir EXATAMENTE como nomear cada tipo de texto na UI ao ler SDDs, PRDs ou especificações. Usar estes nomes garante consistência entre design, código e documentação.

---

## Os 10 Papéis de Texto

| Papel | Definição | Exemplo de uso | Tokens típicos |
|---|---|---|---|
| **Heading** | Título principal da tela. Apenas 1 por tela. | "Pedidos", "Configurações de Conta" | `--font-size-24px`, `--font-weight-bold`, `--color-gray-900` |
| **Subheading** | Texto de apoio logo abaixo do Heading. Contexto ou descrição curta. | "Gerencie todos os pedidos da sua loja" | `--font-size-14px`, `--font-weight-regular`, `--color-gray-500` |
| **Section Title** | Título de uma seção dentro da tela. Pode haver múltiplos. | "Filtros", "Pedidos Recentes", "Histórico" | `--font-size-16px`, `--font-weight-semibold`, `--color-gray-900` |
| **Body** | Parágrafo de conteúdo. Texto descritivo, instruções longas. | "Para alterar o status, selecione os pedidos..." | `--font-size-14px`, `--font-weight-regular`, `--color-gray-900` |
| **Label** | Rótulo de campo de formulário. Identifica o input. | "Nome do produto", "E-mail", "CPF" | `--font-size-14px`, `--font-weight-medium`, `--color-gray-700` |
| **Helper** | Texto auxiliar abaixo de um campo. Instrução ou dica. | "Digite apenas números", "Mínimo 8 caracteres" | `--font-size-12px`, `--font-weight-regular`, `--color-gray-500` |
| **Error** | Mensagem de erro de validação. Aparece quando campo está inválido. | "E-mail inválido", "Campo obrigatório" | `--font-size-12px`, `--font-weight-regular`, `--color-red-500` |
| **Caption** | Texto pequeno e secundário. Metadados, timestamps, legendas. | "Atualizado há 2 minutos", "12/04/2026 14:32" | `--font-size-12px`, `--font-weight-regular`, `--color-gray-500` |
| **CTA Label** | Texto dentro de botão primário ou secundário. Ação clara. | "Salvar", "Aprovar Pedidos", "Exportar CSV" | `--font-size-14px`, `--font-weight-semibold`, cor do botão |
| **Link** | Texto clicável inline. Sempre sublinhado ao hover. | "Ver detalhes", "Esqueci minha senha" | `--font-size-14px`, `--font-weight-regular`, `--color-blue-500` |

---

## Regras de Uso

### ✅ Faça:

1. **Use EXATAMENTE estes nomes** ao ler SDDs/PRDs
   - Se o SDD diz "Título da página mostra o nome do pedido" → traduzir como **Heading**
   - Se o SDD diz "Texto abaixo do título explica o fluxo" → traduzir como **Subheading**
   - Se o SDD diz "Mensagem de erro quando CPF inválido" → traduzir como **Error**

2. **Combine papéis com tokens corretos**
   - Heading sempre usa `24px` + `bold` + `gray-900`
   - Helper sempre usa `12px` + `regular` + `gray-500`
   - Error sempre usa `12px` + `regular` + `red-500`

3. **Documente o papel no código**
   ```tsx
   {/* Heading */}
   <h1 className={styles.heading}>Pedidos</h1>
   
   {/* Subheading */}
   <p className={styles.subheading}>Gerencie todos os pedidos</p>
   
   {/* Label */}
   <label className={styles.label}>Nome do produto</label>
   ```

4. **Máximo de 1 Heading por tela**
   - Se houver necessidade de mais títulos, usar **Section Title**

### ❌ Não faça:

1. **Inventar novos papéis**
   - ❌ "Main title", "Subtitle", "Field label" → use os nomes canônicos
   
2. **Usar papéis errados**
   - ❌ Usar **Body** para label de input → usar **Label**
   - ❌ Usar **Caption** para erro → usar **Error**
   - ❌ Usar **Heading** para título de seção → usar **Section Title**

3. **Misturar tokens de papéis diferentes**
   - ❌ Heading com `16px` → Heading é sempre `24px`
   - ❌ Error com `gray-500` → Error é sempre `red-500`

4. **Criar textos sem papel definido**
   - Todo texto na UI **DEVE** ter um papel associado

---

## Mapeamento SDD → Papel de Texto

| Frase típica no SDD | Papel correto | Exemplo |
|---|---|---|
| "Título da página" | **Heading** | "Pedidos" |
| "Descrição da página" | **Subheading** | "Gerencie seus pedidos" |
| "Título da seção" | **Section Title** | "Pedidos Aprovados" |
| "Texto explicativo" | **Body** | "Para aprovar, clique em..." |
| "Nome do campo" | **Label** | "E-mail" |
| "Instrução do campo" | **Helper** | "Digite apenas números" |
| "Mensagem de validação" | **Error** | "CPF inválido" |
| "Data de atualização" | **Caption** | "Atualizado às 14:32" |
| "Texto do botão" | **CTA Label** | "Salvar Alterações" |
| "Link de navegação" | **Link** | "Ver todos os pedidos" |

---

## Casos Especiais

### 1. Headers de Tabela
- **Não são um papel específico** — considere como **Section Title** de cada coluna
- Sempre usar: `12px` + `semibold` + `gray-600`

### 2. Badges de Status
- **Não são texto puro** — são componentes com texto embutido
- O texto dentro do Badge segue as regras do componente Badge (não um papel isolado)

### 3. Placeholder de Input
- **Não é um papel** — é atributo HTML `placeholder`
- Usar tokens de **Helper** (`12px` + `regular` + `gray-400`)

### 4. Toast/Notification
- **Título do toast:** considerar como **Section Title**
- **Corpo do toast:** considerar como **Body**

---

## Padrões Funcionais de UX Text (complementar aos Papéis Visuais)

> Os 10 papéis acima respondem **"que token tipográfico este texto usa?"**. Mas ao ler um SDD,
> muitas vezes a pergunta que vem primeiro é funcional — **"que tipo de situação de UX este texto
> resolve?"** — e essa situação normalmente é composta por *mais de um papel* trabalhando junto.
> Esta seção mapeia os padrões funcionais mais comuns (com base em Podmajersky, *Strategic
> Writing for UX*, 2ª ed. — síntese própria, sem reprodução do texto original) aos papéis visuais
> que os compõem, para fechar a lacuna entre "o que o SDD pede" e "como nomear cada peça".

| Padrão funcional | O que resolve | Papéis visuais que o compõem |
|---|---|---|
| **Empty State** | Explica por que uma área está vazia e oferece uma ação para resolver | Heading ou Section Title (mensagem principal) + Body (explicação) + CTA Label (ação) |
| **Confirmation Message** | Confirma que uma ação foi concluída com sucesso | Section Title (ex: título do toast) + Body (detalhe da confirmação) |
| **Notification** | Avisa sobre um evento assíncrono (fora do fluxo ativo da pessoa) | Section Title (assunto) + Body (detalhe) + Link ou CTA Label (ação, quando houver) |
| **Controls** (toggles, checkboxes, radios, dropdowns) | Identifica uma opção configurável e seu estado | Label (nome da opção) + Helper (explicação do efeito, quando necessário) |
| **Transitional Text** | Acompanha estados de espera/carregamento | Body ou Caption, conforme o peso visual do momento de espera |
| **Text Input Fields** | Guia o preenchimento de um campo | Label + Helper (instrução) + Error (validação) — os três papéis já existentes, mas sempre usados **juntos** nesse padrão, nunca isolados |
| **Titles** | Nomeia uma tela, seção ou bloco de conteúdo | Heading (tela) ou Section Title (bloco/seção) |
| **Buttons and Menus** | Aciona uma ação ou abre um conjunto de opções | CTA Label (botão) — itens de menu seguem o mesmo token de CTA Label quando acionáveis, ou de Link quando são navegação |
| **Descriptions** | Explica o propósito de uma tela, seção ou funcionalidade | Subheading (nível de tela) ou Body (nível de seção/componente) |
| **Errors** | Já coberto como papel isolado — ver linha **Error** na tabela principal | Error |
| **Labels** | Já coberto como papel isolado — ver linha **Label** na tabela principal | Label |

Ao mapear um SDD que descreve uma situação funcional (ex: "tela vazia com CTA para criar o
primeiro pedido"), primeiro identifique o **padrão funcional** na tabela acima, depois decomponha
nos **papéis visuais** correspondentes — isso evita tanto inventar um papel novo quanto atribuir
o papel errado a uma peça do padrão.

---

## Diretrizes de Escrita por Papel (complementar aos tokens)

> Esta seção não define tokens — define **como escrever bem** dentro de cada papel, uma vez que
> ele já foi corretamente atribuído. Síntese própria a partir de Tham, Howard & Verhulsdonck,
> *UX Writing: Designing User-Centered Content* (Cap. 9). Em conflito com as regras de tom/estilo
> da Olist em `UX_WRITING.md`, **as regras da Olist têm prioridade**.

- **Error:** nunca culpar a pessoa pelo erro ("Digite seu CPF", não "Você esqueceu o CPF"); usar
  linguagem neutra ou positiva ("Digite um CEP válido", não "CEP inválido"); ser específico sobre
  como resolver, não só descrever o problema.
- **Label:** priorizar clareza sobre criatividade — um rótulo bom é entendido sem precisar de um
  Helper de apoio; quando o campo for opcional, isso deve ficar visualmente claro (não é papel do
  texto do Label resolver isso sozinho, mas o texto não deve mascarar a obrigatoriedade).
- **Helper:** usar para reduzir erros *antes* que aconteçam (formato esperado, exemplo real) —
  não para repetir o que o Label já disse.
- **CTA Label:** um bom CTA Label descreve a ação, não o estado do sistema — "Salvar produto",
  não "Enviando...", que é um estado de Transitional Text, não de CTA Label.

---

## Microcopy vs. Microconteúdo

> Nota conceitual (síntese própria a partir de Tham, Howard & Verhulsdonck, *UX Writing*): todos
> os 10 papéis deste glossário são exemplos de **microcopy** — textos curtos de interface.
> **Microconteúdo** é um conceito relacionado, mas diferente: é a versão resumida de um conteúdo
> originalmente longo (ex: transformar um parágrafo de política de frete em 3 bullets dentro de
> um tooltip). Ao decompor um SDD que pede para "resumir" ou "simplificar" um texto longo para a
> UI, o resultado normalmente vira **Body** (se for um bloco corrido) ou uma lista dentro de um
> **Body**, nunca um papel novo — mas vale nomear explicitamente essa transformação como
> "microconteúdo" na documentação da tela, para deixar claro que o conteúdo completo existe em
> outro lugar (ex: um link "Ver política completa").

---

## Exemplo Completo: Tela de Cadastro de Produto

```tsx
import { Button, Input } from '@pedrohenriquevalentim/olist-ds';
import styles from './CadastroProduto.module.css';

export const CadastroProduto = () => {
  return (
    <div className={styles.container}>
      {/* Heading */}
      <h1 className={styles.heading}>Cadastrar Produto</h1>
      
      {/* Subheading */}
      <p className={styles.subheading}>
        Preencha os dados abaixo para adicionar um novo produto
      </p>
      
      {/* Section Title */}
      <h2 className={styles.sectionTitle}>Informações Básicas</h2>
      
      <div className={styles.campo}>
        {/* Label */}
        <label htmlFor="nome" className={styles.label}>
          Nome do produto
        </label>
        
        {/* Input (não é papel de texto) */}
        <Input id="nome" placeholder="Ex: Camiseta Básica" />
        
        {/* Helper */}
        <span className={styles.helper}>
          Máximo 100 caracteres
        </span>
      </div>
      
      <div className={styles.campo}>
        <label htmlFor="preco" className={styles.label}>
          Preço
        </label>
        <Input id="preco" type="number" error />
        
        {/* Error */}
        <span className={styles.error}>
          Preço deve ser maior que zero
        </span>
      </div>
      
      {/* Caption */}
      <p className={styles.caption}>
        Última atualização: 04/05/2026 às 15:42
      </p>
      
      {/* CTA Label (dentro de Button) */}
      <Button variant="primary">Salvar Produto</Button>
      
      {/* Link */}
      <a href="/produtos" className={styles.link}>
        Voltar para lista de produtos
      </a>
    </div>
  );
};
```

---

## Checklist de Revisão

Ao revisar uma tela ou componente, verificar:

- [ ] Todo texto tem um papel de texto atribuído
- [ ] Heading existe e é único na tela
- [ ] Labels de formulário usam o papel **Label** (não Body)
- [ ] Erros de validação usam o papel **Error** (não Helper)
- [ ] Timestamps/metadados usam o papel **Caption**
- [ ] Botões usam o papel **CTA Label**
- [ ] Links inline usam o papel **Link** (não CTA Label)
- [ ] Tokens usados estão corretos para cada papel
- [ ] Nenhum texto foi deixado sem classificação
- [ ] Se o texto faz parte de um padrão funcional (Empty State, Confirmation, Notification,
      Text Input Field), todos os papéis que compõem esse padrão foram atribuídos — não só o
      papel mais óbvio
- [ ] Erros seguem as diretrizes de escrita da seção "Diretrizes de Escrita por Papel" (sem
      culpar a pessoa, linguagem neutra/positiva, específico sobre a solução)

---

**Referência cruzada:**
- `TIPOGRAFIA.md` — tokens de tipografia (tamanho, peso, altura)
- `SDD_PARA_TELA.md` — como mapear requisitos do SDD em papéis de texto
- `COMPONENTES.md` — componentes que usam esses papéis
- `UX_WRITING.md` — tom de voz, 4 pilares e regras de conteúdo por tipo de texto

---

## Histórico

- 2026-09-04 v1.1 — Adicionadas três seções complementares aos papéis tipográficos originais,
  com base em sínteses próprias de referências técnicas de UX Writing (não reprodução dos textos
  originais, que são obras protegidas por direitos autorais): "Padrões Funcionais de UX Text"
  (mapeamento dos 10 papéis visuais aos padrões funcionais de Podmajersky — Empty State,
  Confirmation Message, Notification, Controls, Transitional Text, Text Input Fields, Titles,
  Buttons and Menus, Descriptions), "Diretrizes de Escrita por Papel" (boas práticas de redação
  para Error, Label, Helper e CTA Label, de Tham, Howard & Verhulsdonck) e "Microcopy vs.
  Microconteúdo" (distinção conceitual, mesma fonte). Checklist de revisão ampliado com dois
  itens novos. Nenhum papel, token ou regra original foi removido ou alterado — apenas
  complementado.
