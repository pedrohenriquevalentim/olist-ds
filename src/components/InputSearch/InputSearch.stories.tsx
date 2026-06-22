import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from './InputSearch';

const meta: Meta<typeof InputSearch> = {
  title: 'Componentes/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de busca com borda pill e duas variantes de ação: botão com texto ou botão ícone. Suporta label, texto de suporte e estado desabilitado.',
      },
    },
  },
  argTypes: {
    action: {
      control: { type: 'select' },
      options: ['button', 'button icon'],
      description: 'Variante do botão de ação à direita do campo',
    },
    label: {
      control: 'text',
      description: 'Texto do label acima do campo',
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando o campo está vazio',
    },
    support: {
      control: 'boolean',
      description: 'Exibe o texto de suporte abaixo do campo',
    },
    supportText: {
      control: 'text',
      description: 'Texto de suporte',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o campo e o botão de ação',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

/* ============================
   Controlado — padrão
   ============================ */

const ControlledTemplate = (args: React.ComponentProps<typeof InputSearch>) => {
  const [value, setValue] = useState('');
  return <InputSearch {...args} value={value} onChange={setValue} />;
};

export const Padrao: Story = {
  name: 'Padrão — Botão com texto',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    support: false,
    supportText: 'Support text',
    isDisabled: false,
  },
};

export const BotaoIcone: Story = {
  name: 'Variante — Botão ícone',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    action: 'button icon',
    label: 'Label text',
    placeholder: 'Placeholder text',
    support: false,
    isDisabled: false,
  },
};

export const ComTextoSuporte: Story = {
  name: 'Com texto de suporte',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    label: 'Pesquisar pedido',
    placeholder: 'Digite o número do pedido',
    support: true,
    supportText: 'Exemplo: #123456',
    isDisabled: false,
  },
};

export const Desabilitado: Story = {
  name: 'Estado desabilitado',
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    isDisabled: true,
    support: true,
    supportText: 'Campo indisponível no momento',
    value: '',
  },
};

export const Preenchido: Story = {
  name: 'Estado preenchido',
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    value: 'Filled text',
    isDisabled: false,
  },
};

export const SemLabel: Story = {
  name: 'Sem label',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    placeholder: 'Buscar produtos',
    isDisabled: false,
  },
};

export const TodasVariantes: Story = {
  name: 'Todas as variantes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>
      <InputSearch action="button" label="Botão com texto — enabled" placeholder="Placeholder text" value="" />
      <InputSearch action="button icon" label="Botão ícone — enabled" placeholder="Placeholder text" value="" />
      <InputSearch action="button" label="Preenchido" placeholder="Placeholder text" value="Filled text" />
      <InputSearch action="button" label="Desabilitado" placeholder="Placeholder text" isDisabled value="" />
      <InputSearch
        action="button"
        label="Com suporte"
        placeholder="Placeholder text"
        support
        supportText="Texto de suporte"
        value=""
      />
    </div>
  ),
};
