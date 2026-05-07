import type { Meta, StoryObj } from '@storybook/react';
import { Icon, availableIcons } from './index';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: availableIcons,
      description: 'Nome do ícone (kebab-case). Sufixo `-fill` para variante preenchida.',
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
      description: 'Tamanho em px (largura e altura).',
    },
    color: {
      control: 'color',
      description: 'Cor do ícone (CSS color).',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: availableIcons[0],
    size: 24,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '24px',
        padding: '24px',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      }}
    >
      {availableIcons.map((iconName) => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '16px',
            border: '1px solid #e7e4da',
            borderRadius: '8px',
            background: '#fdfdfc',
          }}
        >
          <Icon name={iconName} size={32} />
          <span
            style={{
              fontSize: '11px',
              color: '#8f8d85',
              textAlign: 'center',
              wordBreak: 'break-word',
              lineHeight: 1.3,
            }}
          >
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      {[16, 20, 24, 32, 48, 64].map((size) => (
        <div
          key={size}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <Icon name={availableIcons[0]} size={size} />
          <span style={{ fontSize: '12px', color: '#8f8d85' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      {['#2064F3', '#54B6B6', '#93B95B', '#F0B356', '#ED6E5A', '#B95B95'].map((color) => (
        <Icon key={color} name={availableIcons[0]} size={32} color={color} />
      ))}
    </div>
  ),
};
