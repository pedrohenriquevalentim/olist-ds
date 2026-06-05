import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'simple', 'symbol'],
      description: `
        Variante de tamanho do logo Olist:
        - **default** — logo completo com círculo laranja (160px mín.)
        - **simple** — logo sem o círculo, redimensionável entre 80–152px
        - **symbol** — apenas o ícone do toggle (16–48px, quadrado)
      `,
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'Rótulo acessível para leitores de tela.',
      table: {
        defaultValue: { summary: 'Logo Olist' },
      },
    },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

/* ============================
   Stories
   ============================ */

export const Padrão: Story = {
  name: 'Padrão (default)',
  args: {
    size: 'default',
  },
};

export const Simples: Story = {
  name: 'Simples (simple)',
  args: {
    size: 'simple',
  },
  parameters: {
    docs: {
      description: {
        story: 'Versão sem o círculo laranja. Redimensionável entre 80px e 152px de largura.',
      },
    },
  },
};

export const Símbolo: Story = {
  name: 'Símbolo (symbol)',
  args: {
    size: 'symbol',
  },
  parameters: {
    docs: {
      description: {
        story: 'Apenas o ícone do toggle. Ideal para favicons, avatares ou espaços reduzidos.',
      },
    },
  },
};

export const TodasVariantes: Story = {
  name: 'Todas as variantes',
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        padding: '32px',
        background: '#f2f0e8',
        borderRadius: '8px',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Logo size="default" />
        <span style={{ fontSize: '11px', color: '#827f73', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Logo size="simple" />
        <span style={{ fontSize: '11px', color: '#827f73', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>simple</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Logo size="symbol" />
        <span style={{ fontSize: '11px', color: '#827f73', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>symbol</span>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todas as três variantes lado a lado para comparação.',
      },
    },
  },
};

export const SobreFundoEscuro: Story = {
  name: 'Sobre fundo escuro',
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        padding: '32px',
        background: '#001647',
        borderRadius: '8px',
        flexWrap: 'wrap',
      }}
    >
      <Logo size="default" aria-label="Logo Olist — fundo escuro" />
      <Logo size="simple" aria-label="Logo Olist simples — fundo escuro" />
      <Logo size="symbol" aria-label="Símbolo Olist — fundo escuro" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Exibe as variantes sobre fundo navy para verificar contraste. Nota: os assets podem precisar de versões invertidas para fundos escuros.',
      },
    },
  },
};

export const SímboloEscalável: Story = {
  name: 'Símbolo em múltiplos tamanhos',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', padding: '16px' }}>
      {([16, 24, 32, 40, 48] as const).map((size) => (
        <div
          key={size}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <Logo
            size="symbol"
            aria-label={`Símbolo Olist ${size}px`}
            style={{ width: size, height: size, minWidth: size, minHeight: size, maxWidth: size, maxHeight: size }}
          />
          <span style={{ fontSize: '11px', color: '#827f73', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {size}px
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'O símbolo escala de 16px (mínimo) a 48px (máximo padrão). É possível sobrescrever via `style`.',
      },
    },
  },
};
