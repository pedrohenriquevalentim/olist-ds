import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

/* ============================
   Ícones de exemplo para Storybook
   ============================ */

const PlusIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ArrowRightIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DownloadIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 3v7m0 0L5.5 7.5M8 10l2.5-2.5M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrashIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 4h10M6 4V3h4v1M5 4v9h6V4H5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconOptions: Record<string, React.ReactNode> = {
  Nenhum: undefined,
  'Adicionar (+)': PlusIcon,
  'Seta direita (→)': ArrowRightIcon,
  'Baixar (↓)': DownloadIcon,
  'Excluir (🗑)': TrashIcon,
};

/* ============================
   Meta
   ============================ */

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Define a hierarquia visual do botão.',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto exibido no botão. Substituído por `children` quando fornecido.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão impedindo interações.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    leadIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone exibido à esquerda do rótulo. Deve ser um SVG com `currentColor`.',
    },
    actionIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone exibido à direita do rótulo. Deve ser um SVG com `currentColor`.',
    },
    onClick: {
      action: 'clicado',
      description: 'Callback disparado ao clicar no botão.',
    },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ============================
   Stories
   ============================ */

export const Padrão: Story = {
  name: 'Padrão',
  args: {
    label: 'Confirmar',
    variant: 'primary',
  },
};

export const Primário: Story = {
  args: {
    label: 'Salvar alterações',
    variant: 'primary',
    leadIcon: PlusIcon,
  },
};

export const Secundário: Story = {
  args: {
    label: 'Cancelar',
    variant: 'secondary',
  },
};

export const Terciário: Story = {
  args: {
    label: 'Ver detalhes',
    variant: 'tertiary',
    actionIcon: ArrowRightIcon,
  },
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    label: 'Indisponível',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado. Bloqueia cliques e eventos de teclado.',
      },
    },
  },
};

export const ComÍconeLead: Story = {
  name: 'Com ícone à esquerda (lead)',
  args: {
    label: 'Adicionar item',
    variant: 'primary',
    leadIcon: PlusIcon,
  },
};

export const ComÍconeAction: Story = {
  name: 'Com ícone à direita (action)',
  args: {
    label: 'Próximo',
    variant: 'primary',
    actionIcon: ArrowRightIcon,
  },
};

export const ComDoisÍcones: Story = {
  name: 'Com dois ícones',
  args: {
    label: 'Baixar relatório',
    variant: 'secondary',
    leadIcon: DownloadIcon,
    actionIcon: ArrowRightIcon,
  },
};

export const TodasVariantes: Story = {
  name: 'Todas as variantes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '12px', color: '#827f73', width: '80px' }}>Primary</span>
        <Button variant="primary" label="Habilitado" leadIcon={PlusIcon} />
        <Button variant="primary" label="Desabilitado" leadIcon={PlusIcon} disabled />
        <Button variant="primary" label="Sem ícone" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '12px', color: '#827f73', width: '80px' }}>Secondary</span>
        <Button variant="secondary" label="Habilitado" leadIcon={PlusIcon} />
        <Button variant="secondary" label="Desabilitado" leadIcon={PlusIcon} disabled />
        <Button variant="secondary" label="Sem ícone" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '12px', color: '#827f73', width: '80px' }}>Tertiary</span>
        <Button variant="tertiary" label="Habilitado" leadIcon={PlusIcon} />
        <Button variant="tertiary" label="Desabilitado" leadIcon={PlusIcon} disabled />
        <Button variant="tertiary" label="Sem ícone" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const PosicionamentoÍcones: Story = {
  name: 'Posicionamento de ícones',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary" label="Lead icon" leadIcon={PlusIcon} />
      <Button variant="primary" label="Action icon" actionIcon={ArrowRightIcon} />
      <Button variant="primary" label="Ambos" leadIcon={DownloadIcon} actionIcon={ArrowRightIcon} />
      <Button variant="primary" label="Sem ícone" />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
