import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NotificationStack } from './NotificationStack';
import { NotificationCard } from '../NotificationCard';
import { Icon } from '../Icon';

const pixIcon = <Icon name="money-in" size={24} color="currentColor" />;

const summaryCard = (
  <NotificationCard
    severity="positive"
    icon={pixIcon}
    product="Conta Digital"
    dateTime="26/10/2026 • 18h02"
    title="3 Pix recebidos hoje"
    value="+ R$ 274,16"
    valueDetail="3 transações • − R$ 1,05 de tarifas • R$ 273,11 líquidos na conta"
  />
);

const pixItems = (lastIsRead: boolean) => [
  <NotificationCard
    key="mariana"
    severity="positive"
    icon={pixIcon}
    product="Conta Digital"
    dateTime="26/10/2026 • 16h28"
    title="Pix recebido de Mariana Souza"
    value="+ R$ 208,26"
    valueDetail="− R$ 0,35 de tarifa • R$ 207,91 líquidos na conta"
  />,
  <NotificationCard
    key="carlos"
    severity="positive"
    icon={pixIcon}
    product="Conta Digital"
    dateTime="26/10/2026 • 15h40"
    title="Pix recebido de Carlos Lima"
    value="+ R$ 40,00"
    valueDetail="− R$ 0,35 de tarifa • R$ 39,65 líquidos na conta"
  />,
  <NotificationCard
    key="ana"
    severity="positive"
    icon={pixIcon}
    isRead={lastIsRead}
    product="Conta Digital"
    dateTime="26/10/2026 • 14h12"
    title="Pix recebido de Ana Prado"
    value="+ R$ 25,90"
    valueDetail="− R$ 0,35 de tarifa • R$ 25,55 líquidos na conta"
  />,
];

const meta = {
  title: 'Components/Display & Feedback/NotificationStack',
  component: NotificationStack,
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
          'Agrupa notificações do mesmo tipo (ex.: Pix recebidos) em um card-resumo empilhado que expande para a lista de `NotificationCard`. O estado de leitura do grupo (`unread` ou `mixed`) é derivado dos itens: se algum `NotificationCard` filho estiver com `isRead`, as camadas ganham tons neutros. O `summary` recebe automaticamente o link “mostrar todos” que expande o grupo.',
      },
    },
  },
  argTypes: {
    groupTitle: {
      control: 'text',
      description: 'Título do grupo, exibido no estado expandido e usado como nome acessível.',
    },
    summary: {
      control: false,
      description:
        'Card-resumo (`NotificationCard`) exibido no estado recolhido. Recebe o link de expandir automaticamente.',
    },
    children: {
      control: false,
      description: 'Os `NotificationCard` do grupo, exibidos quando expandido.',
    },
    isExpanded: {
      control: 'boolean',
      description: 'Controla o estado. Se omitido, o componente gerencia sozinho.',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Estado inicial quando não controlado.',
      table: { defaultValue: { summary: 'false' } },
    },
    onExpandedChange: { action: 'expansão alterada', description: 'Disparado ao expandir ou recolher.' },
    expandLabel: {
      control: 'text',
      description: 'Rótulo do link que expande o grupo.',
      table: { defaultValue: { summary: 'mostrar todos' } },
    },
    collapseLabel: {
      control: 'text',
      description: 'Rótulo do botão que recolhe o grupo.',
      table: { defaultValue: { summary: 'mostrar menos' } },
    },
  },
  args: {
    groupTitle: 'Pix recebidos hoje',
    summary: summaryCard,
    children: pixItems(false),
  },
} satisfies Meta<typeof NotificationStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecolhidoNaoLidas: Story = {};

export const ExpandidoNaoLidas: Story = {
  args: { defaultExpanded: true },
};

export const RecolhidoMisto: Story = {
  args: { children: pixItems(true) },
};

export const ExpandidoMisto: Story = {
  args: { defaultExpanded: true, children: pixItems(true) },
};
