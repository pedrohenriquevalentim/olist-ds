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
      <div style={{ height: '100vh', display: 'flex', alignItems: 'stretch', position: 'relative' }}>
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

/* ── Primary / Interativo (estado interno — primeiro na seção Docs) ────────────── */

export const Interativo: Story = {
  name: 'Interativo — estado gerenciado pelo componente',
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', position: 'relative', background: '#f5f3ed' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    moduloAtivo: 'Vendas',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modo flyout: primário e secundário abrem simultaneamente sobre a página. Use o toggle "Fixar menu" para entrar no estado fixo (encaixado no layout).',
      },
    },
  },
};

/* ── Uso integrado com MenuGlobal ────────────────────────────────────────────── */

const ComMenuGlobalRender = () => {
  const [fixado, setFixado] = React.useState(false);
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <MenuGlobal
        produtoSelecionado="Sistema ERP"
        avatarLabel="PN"
        companyLogoUrl="https://www.nike.com.br/images/meta/open-graph-main-image.jpg"
        panelAdjacenteAberto
        panelFixado={fixado}
      />
      {/*
        Wrapper de ancoragem: position:relative para o flyout se posicionar aqui (left:0).
        Em flyout (position:absolute), tem largura 0 e não empurra o conteúdo.
        Em fixo (flow normal), cresce para 248px, empurrando o conteúdo para a direita.
      */}
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexShrink: 0 }}>
        <ItensMenuGlobal moduloAtivo="Vendas" onFixarToggle={setFixado} />
      </div>
      <div style={{ flex: 1, background: '#f5f3ed' }} />
    </div>
  );
};

export const ComMenuGlobal: Story = {
  name: 'Integrado com MenuGlobal',
  render: () => <ComMenuGlobalRender />,
  parameters: {
    docs: {
      description: {
        story:
          'Integração real com o MenuGlobal: border-radius direito do menu zerado e painel interativo.',
      },
    },
  },
};

/* ── Estados estáticos ────────────────────────────────────────────────────────── */

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
