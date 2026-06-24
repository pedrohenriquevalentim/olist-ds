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

---

**Referência cruzada:**
- `TIPOGRAFIA.md` — tokens de tipografia (tamanho, peso, altura)
- `SDD_PARA_TELA.md` — como mapear requisitos do SDD em papéis de texto
- `COMPONENTES.md` — componentes que usam esses papéis
