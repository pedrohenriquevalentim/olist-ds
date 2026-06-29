import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputPassword } from './InputPassword';
import { Icon } from '../Icon';

const meta: Meta<typeof InputPassword> = {
  title: 'Components/InputPassword',
  component: InputPassword,

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Campo de texto para entrada segura de senhas, com toggle de visibilidade e suporte a estados de validação.',
      },
    },
  },
  argTypes: {
    leadIcon: {
      control: { type: 'select' },
      options: ['none', 'lock'],
      mapping: {
        none: undefined,
        lock: <Icon name="lock" size={16} color="currentColor" />,
      },
      description: 'Ícone opcional à esquerda do campo',
    },
    isSuccess: { control: 'boolean' },
    isError: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    hasSupport: { control: 'boolean' },
    hasTooltip: { control: 'boolean' },
    isPasswordVisible: { control: 'boolean' },
  },
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    hasSupport: true,
    supportText: 'Mínimo 8 caracteres',
    hasTooltip: false,
    isSuccess: false,
    isError: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Playground: Story = {};

export const Estados: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '22.5rem' }}>
      <InputPassword label="Enabled" placeholder="Placeholder text" hasSupport supportText="Mínimo 8 caracteres" />
      <InputPassword label="Preenchido" placeholder="Placeholder text" value="MinhaSenha123!" hasSupport supportText="Mínimo 8 caracteres" />
      <InputPassword label="Senha visível" placeholder="Placeholder text" value="MinhaSenha123!" isPasswordVisible hasSupport supportText="Mínimo 8 caracteres" />
      <InputPassword label="Success" placeholder="Placeholder text" value="MinhaSenha123!" isSuccess hasSupport supportText="Senha válida" />
      <InputPassword label="Error" placeholder="Placeholder text" value="abc" isError hasSupport supportText="Senha muito curta, mínimo 8 caracteres" />
      <InputPassword label="Disabled" placeholder="Campo desabilitado" isDisabled hasSupport supportText="Mínimo 8 caracteres" />
    </div>
  ),
  parameters: { layout: 'padded' },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '22.5rem' }}>
      <InputPassword label="Sem extras" placeholder="Placeholder text" hasSupport={false} />
      <InputPassword label="Com ícone" placeholder="Placeholder text" leadIcon={<Icon name="lock" size={16} color="currentColor" />} hasSupport supportText="Mínimo 8 caracteres" />
      <InputPassword label="Com tooltip" placeholder="Placeholder text" hasTooltip tooltipText="A senha deve ter no mínimo 8 caracteres" hasSupport supportText="Mínimo 8 caracteres" />
    </div>
  ),
  parameters: { layout: 'padded' },
};
