# Olist Design System — Visão Geral

## Identidade Visual

A Olist é uma plataforma B2B de e-commerce para sellers. A linguagem visual comunica eficiência, confiabilidade e profissionalismo. A interface é orientada a ferramenta — sellers usam 8+ horas por dia, então clareza e escaneabilidade têm prioridade sobre decoração.

### Princípios de Design

1. **Clareza acima de estética** — Todo elemento tem uma função. Remova o que não ajuda o seller a completar uma tarefa.
2. **Consistência acima de novidade** — Reutilize componentes existentes. Um padrão novo é um custo, não uma feature.
3. **Densidade com hierarquia** — ERPs são densos em dados. Use peso tipográfico, cor e espaçamento para criar hierarquia, não espaço vazio.
4. **Acessível por padrão** — WCAG AA mínimo. Contraste 4.5:1. Navegável por teclado. Compatível com leitor de tela.

### Resumo Visual

- **Fonte:** Plus Jakarta Sans (Google Fonts)
- **Cores:** Neutros quentes (cinza baseado em #fcfbf8), azul primário (#0a4ee4)
- **Espaçamento:** Grid de 4px, escala: 4, 8, 12, 16, 24, 32, 40, 48, 64
- **Border-radius:** 8px padrão, 4px elementos pequenos, 9999px pills
- **Sombras:** Sutis, usando rgba(5,5,5) em baixa opacidade
- **Layout:** Sidebar de navegação (280px) + área de conteúdo

### Referência Rápida de Tokens

```css
--color-gray-0: #fcfbf8;      /* fundo da página */
--color-gray-900: #10100f;     /* texto principal */
--color-gray-500: #827f73;     /* texto secundário */
--color-gray-100: #e7e4da;     /* bordas */
--color-blue-500: #0a4ee4;     /* ação primária, links */
--color-red-500: #e64e36;      /* erro, destrutivo */
--color-green-500: #779e3d;    /* sucesso */
--color-yellow-500: #f0a028;   /* alerta */
--font-family-jakarta: 'Plus Jakarta Sans';
--font-size-14px: 14px;        /* corpo padrão */
--font-weight-regular: 400;    /* corpo */
--font-weight-semibold: 600;   /* labels, headers */
--shape-spacing-16px: 16px;    /* padding padrão */
--shape-border-radius-8px: 8px; /* radius padrão */
```

### Componentes Existentes

Antes de criar QUALQUER elemento novo, verifique se um destes já existe (8 total):

- **Button**
- **Checkbox**
- **Logo**
- **MenuErp**
- **MenuSidebar**
- **RadioButton**
- **SegmentedButtons**
- **Tag**

Para API completa dos componentes, leia `COMPONENTES.md`.
Para caminhos dos arquivos, leia `MAPA_FONTES.md`.
