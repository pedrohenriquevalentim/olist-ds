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
          'Campo de busca com borda pill e botão ícone de ação. Suporta label, texto de suporte e estado desabilitado.',
      },
    },
  },
  argTypes: {
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

const ControlledTemplate = (args: React.ComponentProps<typeof InputSearch>) => {
  const [value, setValue] = useState('');
  return <InputSearch {...args} value={value} onChange={setValue} />;
};

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    support: false,
  },
};

export const Estados: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>
      <InputSearch label="Enabled" placeholder="Placeholder text" value="" />
      <InputSearch label="Preenchido" placeholder="Placeholder text" value="Filled text" />
      <InputSearch label="Com suporte" placeholder="Placeholder text" support supportText="Texto de suporte" value="" />
      <InputSearch label="Desabilitado" placeholder="Placeholder text" isDisabled value="" />
    </div>
  ),
  parameters: { layout: 'padded' },
};
