import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';
import { Icon } from '../Icon';

const meta: Meta<typeof InputText> = {
  title: 'Components/InputText',
  component: InputText,

  parameters: {
    docs: {
      description: {
        component:
          'Campo de texto de linha única com suporte a label, ícone de lead, tooltip, texto de suporte e estados de validação (success, error, disabled).',
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
    leadIcon: {
      control: { type: 'select' },
      options: ['nenhum', 'mail', 'profile'],
      mapping: {
        nenhum: undefined,
        mail: <Icon name="mail" size={16} color="currentColor" />,
        profile: <Icon name="profile" size={16} color="currentColor" />,
      },
      description: 'Ícone à esquerda dentro do campo (ReactNode)',
    },
    hasSupport: {
      control: 'boolean',
      description: 'Exibe o texto de suporte abaixo do campo',
    },
    supportText: {
      control: 'text',
      description: 'Texto de suporte',
    },
    hasTooltip: {
      control: 'boolean',
      description: 'Exibe o ícone de informação ao lado do label',
    },
    tooltipText: {
      control: 'text',
      description: 'Conteúdo acessível do tooltip',
    },
    isSuccess: {
      control: 'boolean',
      description: 'Estado de sucesso — destaca o campo em verde',
    },
    isError: {
      control: 'boolean',
      description: 'Estado de erro — destaca o campo em vermelho',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o campo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputText>;

const ControlledTemplate = (args: React.ComponentProps<typeof InputText>) => {
  const [value, setValue] = useState('');
  return <InputText {...args} value={value} onChange={setValue} />;
};

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    hasSupport: true,
    supportText: 'Support text',
  },
};

export const Estados: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '22.5rem' }}>
      <InputText label="Enabled" placeholder="Placeholder text" hasSupport supportText="Support text" />
      <InputText label="Preenchido" placeholder="Placeholder text" value="Filled text" hasSupport supportText="Support text" />
      <InputText label="Success" placeholder="Placeholder text" value="Filled text" isSuccess hasSupport supportText="Valor confirmado" />
      <InputText label="Error" placeholder="Placeholder text" value="Filled text" isError hasSupport supportText="Valor inválido" />
      <InputText label="Disabled" placeholder="Placeholder text" isDisabled hasSupport supportText="Campo indisponível" />
    </div>
  ),
  parameters: { layout: 'padded' },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '22.5rem' }}>
      <InputText label="Sem extras" placeholder="Placeholder text" />
      <InputText label="Com ícone" placeholder="seu@email.com" leadIcon={<Icon name="mail" size={16} color="currentColor" />} hasSupport supportText="Support text" />
      <InputText label="Com tooltip" placeholder="Placeholder text" hasTooltip tooltipText="Informe o CNPJ sem pontuação" hasSupport supportText="Support text" />
      <InputText label="Com ícone e tooltip" placeholder="Placeholder text" leadIcon={<Icon name="profile" size={16} color="currentColor" />} hasTooltip tooltipText="Informação adicional" hasSupport supportText="Support text" />
    </div>
  ),
  parameters: { layout: 'padded' },
};
