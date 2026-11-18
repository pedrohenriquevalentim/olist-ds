import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NotificationCard } from './NotificationCard';
import { Icon } from '../Icon';
import { Button } from '../Button';
import storyStyles from './NotificationCard.stories.module.css';

const iconOptions: Record<string, React.ReactNode> = {
  'padrão da severidade': undefined,
  'money-in': <Icon name="money-in" size={24} color="currentColor" />,
  bell: <Icon name="bell" size={24} color="currentColor" />,
  'alert-circle': <Icon name="alert-circle" size={24} color="currentColor" />,
};

const meta = {
  title: 'Components/Display & Feedback/NotificationCard',
  component: NotificationCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'claro',
      options: {
        claro: { name: 'Claro', value: '#fcfbf8' },
        escuro: { name: 'Escuro', value: '#10100f' },
      },
    },
    docs: {
      description: {
        component:
          'Card de uma notificação da central de notificações (ERP e Conta Digital). Comunica criticidade, origem, data, mensagem e ações, e indica se já foi lida. Para várias notificações do mesmo tipo, use o `NotificationStack`.',
      },
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['informative', 'positive', 'warning', 'negative'],
      description:
        'Criticidade da notificação. Define a cor e o ícone padrão do tile. `warning` e `negative` ganham barra lateral de 4px.',
      table: { defaultValue: { summary: 'informative' } },
    },
    isRead: {
      control: 'boolean',
      description:
        'Estado de leitura. Não lida: fundo claro e ponto azul. Lida: fundo de superfície do sistema e sem ponto.',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description:
        'Ícone da criticidade (ReactNode). Se omitido, usa o ícone padrão da severidade. A cor vem do CSS pai via `currentColor`.',
    },
    product: { control: 'text', description: 'Nome do produto de origem.' },
    user: { control: 'text', description: 'Nome do usuário que originou o evento.' },
    dateTime: { control: 'text', description: 'Data e hora já formatadas.' },
    title: { control: 'text', description: 'Título da notificação.' },
    body: { control: 'text', description: 'Descrição do que aconteceu e o que fazer.' },
    value: { control: 'text', description: 'Valor monetário em destaque.' },
    valueDetail: { control: 'text', description: 'Legenda do valor (tarifas, líquido).' },
    deadline: { control: 'text', description: 'Prazo exibido em tag neutra com ícone de relógio.' },
    status: { control: 'text', description: 'Rótulo de status, à direita da linha de topo.' },
    linkLabel: { control: 'text', description: 'Texto do link de ação.' },
    linkHref: { control: 'text', description: 'Destino do link de ação.' },
    actions: { control: false, description: 'Slot de ações adicionais, como um botão secundário.' },
    menuItems: {
      control: 'object',
      description:
        'Itens do menu ⋯. Padrão: “Marcar como lida/não lida” e “Dispensar notificação”.',
    },
    isMenuOpen: {
      control: 'boolean',
      description: 'Controla a abertura do menu. Se omitido, o card gerencia o estado.',
    },
    onMenuOpenChange: { action: 'menu alterado', description: 'Disparado ao abrir ou fechar o menu.' },
    onToggleRead: { action: 'leitura alternada', description: 'Item “Marcar como lida/não lida”.' },
    onDismiss: { action: 'dispensada', description: 'Item “Dispensar notificação”.' },
    onLinkClick: { action: 'link clicado', description: 'Clique no link de ação.' },
    menuLabel: {
      control: 'text',
      description: 'Rótulo acessível do gatilho e do menu.',
      table: { defaultValue: { summary: 'Mais opções da notificação' } },
    },
  },
  args: {
    severity: 'informative',
    isRead: false,
    product: 'Conta Digital',
    dateTime: '26/10/2026 • 09h12',
    title: 'Título da notificação',
    body: 'Descrição que diz o que aconteceu e o que fazer.',
    linkLabel: 'ver detalhes',
  },
} satisfies Meta<typeof NotificationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const Lida: Story = {
  args: { isRead: true },
};

export const Positiva: Story = {
  args: {
    severity: 'positive',
    icon: iconOptions['money-in'],
    title: 'Pix recebido de Mariana Souza',
    body: undefined,
    value: '+ R$ 208,26',
    valueDetail: '− R$ 0,35 de tarifa • R$ 207,91 líquidos na conta',
    linkLabel: undefined,
  },
};

export const Atencao: Story = {
  args: {
    severity: 'warning',
    title: 'Boleto vence em 3 dias',
    body: 'Pague até o vencimento para evitar multa e juros.',
    deadline: 'vence em 07/11/2026',
    status: 'pendente',
  },
};

export const Critica: Story = {
  args: {
    severity: 'negative',
    title: 'Falha na integração com o marketplace',
    body: 'Os pedidos novos não estão sendo importados. Reconecte a integração.',
    linkLabel: 'reconectar',
  },
};

export const CriticaLida: Story = {
  args: { ...Critica.args, isRead: true },
};

export const ComUsuarioEBotao: Story = {
  args: {
    user: '· Carlos Lima',
    actions: <Button variant="secondary" label="Aprovar" />,
  },
};

export const MenuAberto: Story = {
  args: { isMenuOpen: true },
  decorators: [
    (Story) => (
      <div className={storyStyles.menuSpace}>
        <Story />
      </div>
    ),
  ],
};

export const TodasAsSeveridades: Story = {
  render: (args) => (
    <div className={storyStyles.list}>
      <NotificationCard {...args} severity="informative" />
      <NotificationCard {...args} severity="positive" />
      <NotificationCard {...args} severity="warning" />
      <NotificationCard {...args} severity="negative" />
      <NotificationCard {...args} severity="informative" isRead />
      <NotificationCard {...args} severity="positive" isRead />
      <NotificationCard {...args} severity="warning" isRead />
      <NotificationCard {...args} severity="negative" isRead />
    </div>
  ),
};
