import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from './InputPassword';

const meta: Meta<typeof InputPassword> = {
  title: 'Components/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
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
        lock: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
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

export const Default: Story = {
  name: 'Padrão',
};

export const ComIcone: Story = {
  name: 'Com ícone de lead',
  args: {
    leadIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
};

export const Sucesso: Story = {
  name: 'Estado: sucesso',
  args: {
    isSuccess: true,
    value: 'MinhaSenha123!',
    supportText: 'Senha válida',
  },
};

export const Erro: Story = {
  name: 'Estado: erro',
  args: {
    isError: true,
    value: 'abc',
    supportText: 'Senha muito curta, mínimo 8 caracteres',
  },
};

export const Desabilitado: Story = {
  name: 'Estado: desabilitado',
  args: {
    isDisabled: true,
    placeholder: 'Campo desabilitado',
  },
};

export const SenhaVisivel: Story = {
  name: 'Senha visível (controlado)',
  args: {
    isPasswordVisible: true,
    value: 'MinhaSenha123!',
  },
};

export const ComTooltip: Story = {
  name: 'Com tooltip no label',
  args: {
    hasTooltip: true,
    tooltipText: 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números',
  },
};

export const SemSuporte: Story = {
  name: 'Sem texto de suporte',
  args: {
    hasSupport: false,
    supportText: undefined,
  },
};
