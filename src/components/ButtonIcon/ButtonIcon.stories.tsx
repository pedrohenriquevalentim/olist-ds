import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonIcon } from './ButtonIcon';
import { Icon } from '../Icon';

const iconOptions: Record<string, React.ReactNode> = {
  'add': <Icon name="add" size={16} color="currentColor" />,
  'cancel': <Icon name="cancel" size={16} color="currentColor" />,
  'arrow-right': <Icon name="arrow-right" size={16} color="currentColor" />,
  'arrow-down': <Icon name="arrow-down" size={16} color="currentColor" />,
};

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Define a hierarquia visual do botão.',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone exibido no centro do botão. Deve ser um SVG com `currentColor`.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão impedindo interações.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicado',
      description: 'Callback disparado ao clicar no botão.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Playground: Story = {
  args: {
    variant: 'primary',
    icon: <Icon name="add" size={16} color="currentColor" />,
    'aria-label': 'Adicionar',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      {(['primary', 'secondary', 'tertiary'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#8f8d85', width: '72px' }}>{variant}</span>
          <ButtonIcon
            variant={variant}
            icon={<Icon name="add" size={16} color="currentColor" />}
            aria-label="Adicionar"
          />
          <ButtonIcon
            variant={variant}
            icon={<Icon name="add" size={16} color="currentColor" />}
            aria-label="Adicionar (desabilitado)"
            disabled
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todas as variantes (primary, secondary, tertiary) nos estados habilitado e desabilitado.',
      },
    },
  },
};

export const Icones: Story = {
  name: 'Ícones',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '16px' }}>
      {Object.entries(iconOptions).map(([name, icon]) => (
        <ButtonIcon key={name} variant="tertiary" icon={icon} aria-label={name} />
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Exemplos de ícones disponíveis usados com a variante tertiary.',
      },
    },
  },
};
