import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ItensMenuGlobal } from './ItensMenuGlobal';
import { MenuGlobal } from '../MenuGlobal';

const meta: Meta<typeof ItensMenuGlobal> = {
  title: 'Navigation/ItensMenuGlobal',
  component: ItensMenuGlobal,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'claro',
      values: [
        { name: 'claro', value: '#f5f3ed' },
        { name: 'escuro', value: '#0d1117' },
      ],
    },
    docs: {
      description: {
        component:
          'Sub-componente do MenuGlobal. Exibe a navegação hierárquica do ERP (módulos de 1º nível + sub-itens) quando o produto "Sistema ERP" está ativo.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'stretch' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    moduloAtivo: {
      control: 'select',
      options: ['Vendas', 'Produtos', 'Suprimentos', 'Servicos', 'Financas', 'Contatos', 'Relatorios'],
      description: 'Módulo ERP ativo no painel primário',
    },
    estado: {
      control: 'select',
      options: [undefined, 'fechado', 'aberto', 'fixo'],
      description: 'Estado do painel lateral (controlado externamente)',
    },
    onModuloSelect: { action: 'moduloSelecionado' },
    onFixarToggle: { action: 'fixarAlterado' },
    onVoltar: { action: 'voltou' },
  },
};

export default meta;
type Story = StoryObj<typeof ItensMenuGlobal>;

/* ── Estados do painel ────────────────────────────────────────────────────────── */

export const Fechado: Story = {
  name: 'Fechado — apenas painel primário',
  args: {
    moduloAtivo: 'Vendas',
    estado: 'fechado',
  },
};

export const Aberto: Story = {
  name: 'Aberto — primário + secundário',
  args: {
    moduloAtivo: 'Vendas',
    estado: 'aberto',
  },
};

export const Fixo: Story = {
  name: 'Fixo — apenas painel secundário com voltar',
  args: {
    moduloAtivo: 'Vendas',
    estado: 'fixo',
  },
};

/* ── Módulos ─────────────────────────────────────────────────────────────────── */

export const ModuloVendas: Story = {
  name: 'Módulo: Vendas (3 seções)',
  args: { moduloAtivo: 'Vendas', estado: 'aberto' },
};

export const ModuloProdutos: Story = {
  name: 'Módulo: Produtos',
  args: { moduloAtivo: 'Produtos', estado: 'aberto' },
};

export const ModuloSuprimentos: Story = {
  name: 'Módulo: Suprimentos',
  args: { moduloAtivo: 'Suprimentos', estado: 'aberto' },
};

export const ModuloServicos: Story = {
  name: 'Módulo: Serviços',
  args: { moduloAtivo: 'Servicos', estado: 'aberto' },
};

export const ModuloFinancas: Story = {
  name: 'Módulo: Finanças',
  args: { moduloAtivo: 'Financas', estado: 'aberto' },
};

export const ModuloContatos: Story = {
  name: 'Módulo: Contatos',
  args: { moduloAtivo: 'Contatos', estado: 'aberto' },
};

export const ModuloRelatorios: Story = {
  name: 'Módulo: Relatórios (3 seções)',
  args: { moduloAtivo: 'Relatorios', estado: 'aberto' },
};

/* ── Interativo (estado interno) ─────────────────────────────────────────────── */

export const Interativo: Story = {
  name: 'Interativo — estado gerenciado pelo componente',
  args: {
    moduloAtivo: 'Vendas',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Sem a prop `estado`, o componente gerencia internamente: clique em um módulo para abrir o painel secundário, use o toggle para fixar.',
      },
    },
  },
};

/* ── Uso integrado com MenuGlobal ────────────────────────────────────────────── */

export const ComMenuGlobal: Story = {
  name: 'Integrado com MenuGlobal',
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <MenuGlobal produtoSelecionado="Sistema ERP" avatarLabel="PN" />
      <ItensMenuGlobal moduloAtivo="Vendas" estado="aberto" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'ItensMenuGlobal posicionado imediatamente após o MenuGlobal — uso real em telas ERP.',
      },
    },
  },
};
