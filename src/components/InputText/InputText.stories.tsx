import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1.5 5.5L8 9.5L14.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 13.5C2.5 11.015 5.015 9 8 9C10.985 9 13.5 11.015 13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const meta: Meta<typeof InputText> = {
  title: 'Componentes/InputText',
  component: InputText,
  tags: ['autodocs'],
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
      options: ['nenhum', 'email', 'usuario'],
      mapping: {
        nenhum: undefined,
        email: <EmailIcon />,
        usuario: <UserIcon />,
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

export const Padrao: Story = {
  name: 'Padrão — Enabled',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    hasSupport: true,
    supportText: 'Support text',
    isDisabled: false,
    isError: false,
    isSuccess: false,
  },
};

export const ComIcone: Story = {
  name: 'Com ícone de lead',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: 'E-mail',
    placeholder: 'seu@email.com',
    leadIcon: <EmailIcon />,
    hasSupport: false,
    isDisabled: false,
  },
};

export const ComTooltip: Story = {
  name: 'Com tooltip',
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: 'CNPJ',
    placeholder: '00.000.000/0001-00',
    hasTooltip: true,
    tooltipText: 'Informe o CNPJ sem pontuação',
    hasSupport: true,
    supportText: 'Apenas números',
    isDisabled: false,
  },
};

export const Sucesso: Story = {
  name: 'Estado — Success',
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    value: 'Filled text',
    isSuccess: true,
    hasSupport: true,
    supportText: 'Valor válido',
  },
};

export const Erro: Story = {
  name: 'Estado — Error',
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    value: 'Filled text',
    isError: true,
    hasSupport: true,
    supportText: 'Este campo é obrigatório',
  },
};

export const Desabilitado: Story = {
  name: 'Estado — Disabled',
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    isDisabled: true,
    hasSupport: true,
    supportText: 'Campo indisponível no momento',
    value: '',
  },
};

export const TodosEstados: Story = {
  name: 'Todos os estados',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '22.5rem' }}>
      <InputText label="Enabled" placeholder="Placeholder text" hasSupport supportText="Support text" />
      <InputText label="Preenchido" placeholder="Placeholder text" value="Filled text" hasSupport supportText="Support text" />
      <InputText label="Success" placeholder="Placeholder text" value="Filled text" isSuccess hasSupport supportText="Valor confirmado" />
      <InputText label="Error" placeholder="Placeholder text" value="Filled text" isError hasSupport supportText="Valor inválido" />
      <InputText label="Disabled" placeholder="Placeholder text" isDisabled hasSupport supportText="Campo indisponível" />
      <InputText label="Com ícone" placeholder="seu@email.com" leadIcon={<EmailIcon />} hasSupport supportText="Support text" />
    </div>
  ),
};
