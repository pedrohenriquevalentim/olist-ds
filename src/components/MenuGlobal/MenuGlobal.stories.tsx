import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { MenuGlobal } from './MenuGlobal';
import type { MenuGlobalProduct, MenuGlobalRailItem } from './MenuGlobal';

/* =============================================
   Ícones de exemplo para Storybook
   ============================================= */

const IconErp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.8" />
    <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.5" />
    <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.5" />
    <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.3" />
  </svg>
);

const IconContaDigital = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.86 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="currentColor" />
  </svg>
);

const IconEnvios = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor" />
  </svg>
);

const IconEcommerce = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H16c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0020.5 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
  </svg>
);

const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L1 7v8h5v-5h4v5h5V7L8 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconBox = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L1 4v8l7 3 7-3V4L8 1zM1 4l7 3 7-3M8 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const IconChart = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12h3V7H1v5zM6 12h3V4H6v8zM11 12h3V1h-3v11zM1 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7a3 3 0 100-6 3 3 0 000 6zM1 15v-1a5 5 0 0110 0v1M13 8a3 3 0 010 5.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSettings = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1v1M8 14v1M1 8h1M14 8h1M2.93 2.93l.71.71M12.36 12.36l.71.71M2.93 13.07l.71-.71M12.36 3.64l.71-.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconProfile = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 14c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconFinance = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 6h14" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconSupplies = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L2 4v4c0 3.55 2.58 6.86 6 7.67C11.42 14.86 14 11.55 14 8V4L8 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* =============================================
   Dados completos de menu
   ============================================= */

const produtosErp: MenuGlobalProduct = {
  id: 'erp',
  label: 'ERP',
  icon: <IconErp />,
  items: [
    { id: 'erp-inicio', label: 'Página Inicial', icon: <IconHome /> },
    {
      id: 'erp-produtos',
      label: 'Produtos',
      icon: <IconBox />,
      children: [
        { id: 'erp-prod-cadastro', label: 'Cadastro de produtos' },
        { id: 'erp-prod-estoque', label: 'Gestão de estoque' },
        { id: 'erp-prod-precificacao', label: 'Precificação' },
        { id: 'erp-prod-kits', label: 'Kits e composições' },
      ],
    },
    {
      id: 'erp-suprimentos',
      label: 'Suprimentos',
      icon: <IconSupplies />,
      children: [
        { id: 'erp-sup-pedidos', label: 'Pedidos de compra' },
        { id: 'erp-sup-fornecedores', label: 'Fornecedores' },
        { id: 'erp-sup-entrada', label: 'Entrada de notas' },
      ],
    },
    {
      id: 'erp-financas',
      label: 'Finanças',
      icon: <IconFinance />,
      children: [
        { id: 'erp-fin-contas-pagar', label: 'Contas a pagar' },
        { id: 'erp-fin-contas-receber', label: 'Contas a receber' },
        { id: 'erp-fin-fluxo', label: 'Fluxo de caixa' },
        { id: 'erp-fin-dre', label: 'DRE' },
      ],
    },
    {
      id: 'erp-contatos',
      label: 'Contatos',
      icon: <IconUsers />,
      children: [
        { id: 'erp-cont-clientes', label: 'Clientes' },
        { id: 'erp-cont-vendedores', label: 'Vendedores' },
      ],
    },
    {
      id: 'erp-relatorios',
      label: 'Relatórios',
      icon: <IconChart />,
      children: [
        { id: 'erp-rel-vendas', label: 'Relatório de vendas' },
        { id: 'erp-rel-estoque', label: 'Relatório de estoque' },
        { id: 'erp-rel-fiscal', label: 'Relatório fiscal' },
      ],
    },
  ],
};

const produtosContaDigital: MenuGlobalProduct = {
  id: 'conta-digital',
  label: 'Conta Digital',
  icon: <IconContaDigital />,
  items: [
    { id: 'cd-inicio', label: 'Início', icon: <IconHome /> },
    { id: 'cd-extrato', label: 'Extrato', icon: <IconChart /> },
    { id: 'cd-transferencias', label: 'Transferências', icon: <IconFinance /> },
    { id: 'cd-boletos', label: 'Boletos', icon: <IconBox />, hasNotification: true },
  ],
};

const produtosEnvios: MenuGlobalProduct = {
  id: 'envios',
  label: 'Envios',
  icon: <IconEnvios />,
  items: [
    { id: 'env-inicio', label: 'Início', icon: <IconHome /> },
    { id: 'env-pedidos', label: 'Pedidos', icon: <IconBox /> },
    { id: 'env-etiquetas', label: 'Etiquetas', icon: <IconChart /> },
    { id: 'env-transportadoras', label: 'Transportadoras', icon: <IconUsers /> },
    { id: 'env-relatorios', label: 'Relatórios', icon: <IconChart /> },
  ],
};

const produtosEcommerce: MenuGlobalProduct = {
  id: 'ecommerce',
  label: 'Ecommerce',
  icon: <IconEcommerce />,
  items: [
    { id: 'ec-inicio', label: 'Página Inicial', icon: <IconHome /> },
    {
      id: 'ec-produtos',
      label: 'Produtos',
      icon: <IconBox />,
      children: [
        { id: 'ec-prod-cadastro', label: 'Cadastro' },
        { id: 'ec-prod-categorias', label: 'Categorias' },
        { id: 'ec-prod-variacoes', label: 'Variações' },
      ],
    },
    {
      id: 'ec-clientes',
      label: 'Clientes',
      icon: <IconUsers />,
      children: [
        { id: 'ec-cli-lista', label: 'Lista de clientes' },
        { id: 'ec-cli-grupos', label: 'Grupos' },
      ],
    },
    {
      id: 'ec-relatorios',
      label: 'Relatórios',
      icon: <IconChart />,
      children: [
        { id: 'ec-rel-vendas', label: 'Vendas' },
        { id: 'ec-rel-abandono', label: 'Abandono de carrinho' },
      ],
    },
  ],
};

const allProducts = [produtosErp, produtosContaDigital, produtosEnvios, produtosEcommerce];

const railBottomItems: MenuGlobalRailItem[] = [
  { id: 'settings', label: 'Configurações', icon: <IconSettings /> },
  { id: 'profile', label: 'Perfil do usuário', icon: <IconProfile /> },
];

/* =============================================
   Meta
   ============================================= */

const meta: Meta<typeof MenuGlobal> = {
  title: 'Components/MenuGlobal',
  component: MenuGlobal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Menu de navegação global da plataforma Olist com 3 níveis hierárquicos:
- **Nível 0 (Rail):** Barra lateral estreita (56px) com navy background — seleção de produto
- **Nível 1 (Agrupadores):** Painel de 248px com lista de seções do produto selecionado
- **Nível 2 (Side Menu):** Painel de 248px com subitens do agrupador selecionado (quando aplicável)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    activeProductId: {
      control: 'select',
      options: ['erp', 'conta-digital', 'envios', 'ecommerce'],
      description: 'ID do produto ativo no rail.',
    },
    activeItemId: {
      control: 'text',
      description: 'ID do item de menu selecionado.',
    },
    onProductChange: {
      action: 'produto alterado',
      description: 'Callback disparado ao selecionar produto no rail.',
    },
    onItemSelect: {
      action: 'item selecionado',
      description: 'Callback disparado ao selecionar item de menu.',
    },
    products: { table: { disable: true } },
    railBottomItems: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'stretch', padding: '16px', backgroundColor: '#e7e4da' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MenuGlobal>;

/* =============================================
   Stories
   ============================================= */

export const Padrão: Story = {
  name: 'Padrão — ERP (Nível 1)',
  args: {
    products: allProducts,
    activeProductId: 'erp',
    activeItemId: 'erp-inicio',
    railBottomItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado padrão com ERP selecionado e "Página Inicial" ativa. Nível 1 visível, Nível 2 fechado.',
      },
    },
  },
};

export const ComNivel2Aberto: Story = {
  name: 'Com Nível 2 aberto — ERP Produtos',
  render: () => {
    const [activeItem, setActiveItem] = React.useState('erp-prod-cadastro');
    return (
      <MenuGlobal
        products={allProducts}
        activeProductId="erp"
        activeItemId={activeItem}
        railBottomItems={railBottomItems}
        onItemSelect={setActiveItem}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'ERP com o agrupador "Produtos" expandido, mostrando o Nível 2 com subitens.',
      },
    },
  },
};

export const ContaDigital: Story = {
  name: 'Conta Digital — sem Nível 2',
  args: {
    products: allProducts,
    activeProductId: 'conta-digital',
    activeItemId: 'cd-inicio',
    railBottomItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Conta Digital não possui Nível 2. Todos os itens navegam diretamente ao clicar.',
      },
    },
  },
};

export const Envios: Story = {
  name: 'Envios — sem Nível 2',
  args: {
    products: allProducts,
    activeProductId: 'envios',
    activeItemId: 'env-pedidos',
    railBottomItems,
  },
};

export const Ecommerce: Story = {
  name: 'Ecommerce — com Nível 2',
  args: {
    products: allProducts,
    activeProductId: 'ecommerce',
    activeItemId: 'ec-inicio',
    railBottomItems,
  },
};

export const Interativo: Story = {
  name: 'Interativo — troca de produto e seleção de item',
  render: () => {
    const [activeProductId, setActiveProductId] = React.useState('erp');
    const [activeItemId, setActiveItemId] = React.useState('erp-inicio');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: '#f2f0e8',
            borderRadius: '8px',
            fontSize: '12px',
            color: '#615f56',
          }}
        >
          <span>Produto: <strong>{activeProductId}</strong></span>
          <span>|</span>
          <span>Item: <strong>{activeItemId}</strong></span>
        </div>
        <MenuGlobal
          products={allProducts}
          activeProductId={activeProductId}
          activeItemId={activeItemId}
          railBottomItems={railBottomItems}
          onProductChange={(id) => {
            setActiveProductId(id);
            setActiveItemId('');
          }}
          onItemSelect={setActiveItemId}
        />
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Versão totalmente controlada. Clique nos produtos do rail e nos itens do menu para navegar.',
      },
    },
  },
};

export const SemItensUtilitários: Story = {
  name: 'Sem itens utilitários no rail',
  args: {
    products: allProducts,
    activeProductId: 'erp',
    activeItemId: 'erp-inicio',
  },
  parameters: {
    docs: {
      description: {
        story: 'Rail sem itens utilitários na parte inferior (sem configurações ou perfil).',
      },
    },
  },
};

export const ComNotificacao: Story = {
  name: 'Com badge de notificação',
  args: {
    products: allProducts,
    activeProductId: 'conta-digital',
    activeItemId: 'cd-inicio',
    railBottomItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'O item "Boletos" em Conta Digital possui o indicador de notificação ativo.',
      },
    },
  },
};
