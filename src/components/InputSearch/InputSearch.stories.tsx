import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from './InputSearch';

const meta: Meta<typeof InputSearch> = {
  title: 'Components/InputSearch',
  component: InputSearch,

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

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    action: 'button',
    label: 'Label text',
    placeholder: 'Placeholder text',
    support: false,
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>
      <InputSearch action="button" label="Botão com texto" placeholder="Placeholder text" value="" />
      <InputSearch action="button icon" label="Botão ícone" placeholder="Placeholder text" value="" />
    </div>
  ),
  parameters: { layout: 'padded' },
};

export const Estados: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>
      <InputSearch action="button" label="Enabled" placeholder="Placeholder text" value="" />
      <InputSearch action="button" label="Preenchido" placeholder="Placeholder text" value="Filled text" />
      <InputSearch action="button" label="Com suporte" placeholder="Placeholder text" support supportText="Texto de suporte" value="" />
      <InputSearch action="button" label="Desabilitado" placeholder="Placeholder text" isDisabled value="" />
    </div>
  ),
  parameters: { layout: 'padded' },
};
