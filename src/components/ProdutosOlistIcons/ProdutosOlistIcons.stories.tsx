import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProdutosOlistIcons } from './ProdutosOlistIcons';
import type { ProdutoOlist } from './ProdutosOlistIcons';

// Decorator que aplica fundo escuro quando theme="dark" e claro quando theme="light"
const withThemeBackground: Meta<typeof ProdutosOlistIcons>['decorators'] = [
  (Story, context) => {
    const isDark = context.args.theme === 'dark';
    return (
      <div
        style={{
          padding: 24,
          borderRadius: 8,
          background: isDark ? '#1c1c1c' : '#f2f0e8',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s ease',
        }}
      >
        <Story />
      </div>
    );
  },
];

const TODOS_OS_PRODUTOS: ProdutoOlist[] = [
  'Conta Digital',
  'Crédito',
  'Agentes de IA',
  'Ecommerce',
  'Sistema ERP',
  'Envios',
  'Sistema PDV',
  'Hub de Integração',
];

const meta: Meta<typeof ProdutosOlistIcons> = {
  title: 'Components/ProdutosOlistIcons',
  component: ProdutosOlistIcons,
  decorators: withThemeBackground,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    product: {
      control: 'select',
      options: TODOS_OS_PRODUTOS,
      description: 'Produto Olist representado pelo ícone.',
    },
    state: {
      control: 'radio',
      options: ['default', 'active'],
      description:
        'Estado do ícone. "active" exibe o gradiente azul→teal no tema dark (estado ativo/hover no menu).',
      table: { defaultValue: { summary: 'default' } },
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description:
        'Tema de cor. "dark" é usado na sidebar escura; "light" em fundos claros.',
      table: { defaultValue: { summary: 'dark' } },
    },
    'aria-label': {
      control: 'text',
      description: 'Rótulo acessível customizado. Por padrão usa o nome do produto.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProdutosOlistIcons>;

export const Playground: Story = {
  args: {
    product: 'Conta Digital',
    state: 'default',
    theme: 'dark',
  },
};

export const AtivoComGradiente: Story = {
  name: 'Ativo com gradiente (dark)',
  args: {
    product: 'Conta Digital',
    state: 'active',
    theme: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Estado ativo no tema dark. Exibe o gradiente azul (#0a4ee4) → teal (#8dd7d7) na pílula.',
      },
    },
  },
};

export const TemaClaro: Story = {
  name: 'Tema claro',
  args: {
    product: 'Conta Digital',
    state: 'default',
    theme: 'light',
  },
};

const COL_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
};
const LABEL_STYLE: React.CSSProperties = { fontSize: 10, color: '#827f73', textAlign: 'center' };
const PRODUCT_LABEL_STYLE: React.CSSProperties = {
  fontSize: 10,
  color: '#fff',
  width: 80,
  textAlign: 'right',
  paddingRight: 8,
  fontFamily: 'Plus Jakarta Sans, sans-serif',
};
const PRODUCT_LABEL_LIGHT_STYLE: React.CSSProperties = {
  ...PRODUCT_LABEL_STYLE,
  color: '#615f56',
};

export const TodosOsProdutos: Story = {
  name: 'Todos os produtos — dark',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 24, background: '#1c1c1c', borderRadius: 12 }}>
      <div style={{ display: 'flex', gap: 8, marginLeft: 96 }}>
        {(['default', 'active'] as const).map((s) => (
          <div key={s} style={{ ...COL_STYLE, width: 36 }}>
            <span style={LABEL_STYLE}>{s}</span>
          </div>
        ))}
      </div>
      {TODOS_OS_PRODUTOS.map((product) => (
        <div key={product} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={PRODUCT_LABEL_STYLE}>{product}</span>
          {(['default', 'active'] as const).map((s) => (
            <ProdutosOlistIcons key={s} product={product} state={s} theme="dark" />
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todos os produtos Olist nos estados default e active no tema dark.',
      },
    },
  },
};

export const TodosOsProdutosLight: Story = {
  name: 'Todos os produtos — light',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 24, background: '#f2f0e8', borderRadius: 12 }}>
      <div style={{ display: 'flex', gap: 8, marginLeft: 96 }}>
        {(['default', 'active'] as const).map((s) => (
          <div key={s} style={{ ...COL_STYLE, width: 36 }}>
            <span style={{ ...LABEL_STYLE, color: '#827f73' }}>{s}</span>
          </div>
        ))}
      </div>
      {TODOS_OS_PRODUTOS.map((product) => (
        <div key={product} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={PRODUCT_LABEL_LIGHT_STYLE}>{product}</span>
          {(['default', 'active'] as const).map((s) => (
            <ProdutosOlistIcons key={s} product={product} state={s} theme="light" />
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todos os produtos Olist nos estados default e active no tema light.',
      },
    },
  },
};

export const ComparacaoTemas: Story = {
  name: 'Comparação dark vs light',
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ background: '#1c1c1c', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ color: '#827f73', fontSize: 11, marginBottom: 4 }}>Dark</span>
        {TODOS_OS_PRODUTOS.map((p) => (
          <div key={p} style={{ display: 'flex', gap: 8 }}>
            <ProdutosOlistIcons product={p} state="default" theme="dark" />
            <ProdutosOlistIcons product={p} state="active" theme="dark" />
          </div>
        ))}
      </div>
      <div style={{ background: '#f2f0e8', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ color: '#827f73', fontSize: 11, marginBottom: 4 }}>Light</span>
        {TODOS_OS_PRODUTOS.map((p) => (
          <div key={p} style={{ display: 'flex', gap: 8 }}>
            <ProdutosOlistIcons product={p} state="default" theme="light" />
            <ProdutosOlistIcons product={p} state="active" theme="light" />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparação lado a lado dos 8 produtos nos dois temas (dark e light), estados default e active.',
      },
    },
  },
};
