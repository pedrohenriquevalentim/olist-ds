import type { Meta, StoryObj } from '@storybook/react';
import { MenuGlobal } from './MenuGlobal';

const meta: Meta<typeof MenuGlobal> = {
  title: 'Navigation/MenuGlobal',
  component: MenuGlobal,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'claro',
      values: [
        { name: 'claro', value: '#f5f3ed' },
        { name: 'escuro', value: '#0d1117' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    produtoSelecionado: {
      control: 'select',
      options: [
        'Sistema ERP',
        'Hub de Integração',
        'Sistema PDV',
        'Conta Digital',
        'Envios',
        'Ecommerce',
        'Crédito',
        'Agentes de IA',
        'Menu do Usuario',
        'Notificacoes',
        'Configuracoes',
        'Central de Ajuda',
        undefined,
      ],
      description: 'Produto ou funcionalidade ativa',
    },
    avatarLabel: {
      control: 'text',
      description: 'Monograma de 2 caracteres do usuário (círculo superior 32×32)',
    },
    avatarImageUrl: {
      control: 'text',
      description: 'URL da foto do usuário (círculo superior 32×32)',
    },
    companyLogoUrl: {
      control: 'text',
      description: 'URL do logo da empresa (círculo inferior 28×28, sobreposto 7px)',
    },
    companyLogoLabel: {
      control: 'text',
      description: 'Monograma de 2 caracteres da empresa quando companyLogoUrl não fornecida',
    },
    notificacoesPendentes: {
      control: 'boolean',
      description: 'Exibe badge no ícone de notificações',
    },
    onNavigate: { action: 'navegou' },
  },
};

export default meta;
type Story = StoryObj<typeof MenuGlobal>;

export const Padrao: Story = {
  name: 'Padrão — sem seleção',
  args: {
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: false,
  },
};

export const ERPSelecionado: Story = {
  name: 'Sistema ERP selecionado',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
  },
};

export const HubSelecionado: Story = {
  name: 'Hub de Integração selecionado',
  args: {
    produtoSelecionado: 'Hub de Integração',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
  },
};

export const ComNotificacoes: Story = {
  name: 'Com notificações pendentes',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true,
  },
};

export const NotificacoesSelecionadas: Story = {
  name: 'Notificações selecionadas',
  args: {
    produtoSelecionado: 'Notificacoes',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true,
  },
};

export const AvatarComImagem: Story = {
  name: 'Avatar com imagem',
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    avatarImageUrl: 'https://i.pravatar.cc/32',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
  },
};

export const AvatarAnatomiaDual: Story = {
  name: 'Avatar — anatomia dual (usuário + empresa)',
  args: {
    produtoSelecionado: 'Menu do Usuario',
    avatarLabel: 'PV',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
  },
};

export const ListaPersonalizada: Story = {
  name: 'Lista reduzida de produtos',
  args: {
    produtos: ['Sistema ERP', 'Hub de Integração', 'Envios'],
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
  },
};

export const NoveDots: Story = {
  name: '9dots — viewport reduzido (overflow)',
  decorators: [
    (Story) => (
      <div style={{ height: '460px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    produtoSelecionado: 'Sistema ERP',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
    notificacoesPendentes: true,
  },
};

export const NoveDotsComProdutoSelecionadoNoOverflow: Story = {
  name: '9dots — produto selecionado está no overflow',
  decorators: [
    (Story) => (
      <div style={{ height: '460px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    produtoSelecionado: 'Agentes de IA',
    avatarLabel: 'PN',
    companyLogoUrl: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg',
  },
};
