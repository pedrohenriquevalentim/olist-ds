import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { Icon } from '../Icon';

const iconOptions: Record<string, React.ReactNode> = {
  Nenhum: undefined,
  'add': <Icon name="add" size={16} color="currentColor" />,
  'arrow-right': <Icon name="arrow-right" size={16} color="currentColor" />,
  'arrow-down': <Icon name="arrow-down" size={16} color="currentColor" />,
  'cancel': <Icon name="cancel" size={16} color="currentColor" />,
};

/* ============================
   Meta
   ============================ */

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
    label: {
      control: 'text',
      description: 'Texto exibido no botão. Substituído por `children` quando fornecido.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão impedindo interações.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    leadIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone exibido à esquerda do rótulo. Deve ser um SVG com `currentColor`.',
    },
    actionIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone exibido à direita do rótulo. Deve ser um SVG com `currentColor`.',
    },
    onClick: {
      action: 'clicado',
      description: 'Callback disparado ao clicar no botão.',
    },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ============================
   Stories
   ============================ */

export const Playground: Story = {
  args: {
    label: 'Confirmar',
    variant: 'primary',
  },
};

export const Variantes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['primary', 'secondary', 'tertiary'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#8f8d85', width: '72px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {variant}
          </span>
          <Button variant={variant} label="Confirmar" leadIcon={<Icon name="add" size={16} color="currentColor" />} />
          <Button variant={variant} label="Confirmar" leadIcon={<Icon name="add" size={16} color="currentColor" />} disabled />
          <Button variant={variant} label="Confirmar" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: { description: { story: 'Todas as variantes (primary, secondary, tertiary) nos estados habilitado, desabilitado e sem ícone.' } },
  },
};

/* ============================
   Helpers de anatomia
   ============================ */

const FONT = '"Plus Jakarta Sans", system-ui, sans-serif';

const CATEGORIES: Record<string, { color: string; label: string }> = {
  background: { color: '#2064F3', label: 'Background' },
  text:       { color: '#ED6E5A', label: 'Texto'      },
  shape:      { color: '#B95B95', label: 'Shape'      },
  spacing:    { color: '#F0B356', label: 'Espaçamento' },
  typography: { color: '#54B6B6', label: 'Tipografia'  },
};

function Badge({ n, category }: { n: number; category: string }) {
  const { color } = CATEGORIES[category];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 18, height: 18, borderRadius: '50%',
      background: color, color: '#fff',
      fontSize: 10, fontWeight: 700, fontFamily: FONT,
      flexShrink: 0, userSelect: 'none',
    }}>
      {n}
    </span>
  );
}

const TOKENS = [
  { n: 1, category: 'background', token: '--button-color-primary-enabled',           value: '--color-background-enabled-full-brand' },
  { n: 2, category: 'text',       token: '--button-font-font-color-primary-enabled',  value: '--color-text-enabled-on-brand'         },
  { n: 3, category: 'shape',      token: '--button-border-radius-pill',               value: '--shape-border-radius-pill-9999px'     },
  { n: 4, category: 'spacing',    token: '--button-size-height',                      value: '--shape-size-x4-32px'                  },
  { n: 5, category: 'spacing',    token: '--button-spacing-padding',                  value: '--shape-spacing-x15-12px'              },
  { n: 6, category: 'spacing',    token: '--button-spacing-gap',                      value: '--shape-spacing-x05-4px'               },
  { n: 7, category: 'typography', token: '--button-font-size',                        value: '--font-size-x15-12px'                  },
  { n: 8, category: 'typography', token: '--button-font-weight',                      value: '--font-weight-medium (500)'            },
];

export const Anatomia: Story = {
  render: () => (
    <div style={{ fontFamily: FONT, padding: '32px 24px', maxWidth: 720 }}>

      {/* ---- diagrama: botão com badges sobrepostos ---- */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#f7f6f2', borderRadius: 12, padding: '40px 32px', marginBottom: 32,
      }}>
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <Button
            variant="primary"
            label="Confirmar"
            leadIcon={<Icon name="add" size={16} color="currentColor" />}
          />

          {/* 1 — background (topo-direita) */}
          <span style={{ position: 'absolute', top: -10, right: -10 }}>
            <Badge n={1} category="background" />
          </span>

          {/* 2 — text color (centro-direita) */}
          <span style={{ position: 'absolute', top: '50%', right: -10, transform: 'translateY(-50%)' }}>
            <Badge n={2} category="text" />
          </span>

          {/* 3 — border-radius (baixo-direita) */}
          <span style={{ position: 'absolute', bottom: -10, right: -10 }}>
            <Badge n={3} category="shape" />
          </span>

          {/* 4 — height (baixo-esquerda) */}
          <span style={{ position: 'absolute', bottom: -10, left: -10 }}>
            <Badge n={4} category="spacing" />
          </span>

          {/* 5 — padding (topo-esquerda) */}
          <span style={{ position: 'absolute', top: -10, left: -10 }}>
            <Badge n={5} category="spacing" />
          </span>

          {/* 6 — gap (centro, abaixo) */}
          <span style={{ position: 'absolute', bottom: -24, left: '50%', transform: 'translateX(-50%)' }}>
            <Badge n={6} category="spacing" />
          </span>
        </div>
      </div>

      {/* ---- categorias ---- */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        {Object.entries(CATEGORIES).map(([key, { color, label }]) => (
          <span key={key} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 11, color: '#3e3e3d', fontFamily: FONT,
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
            {label}
          </span>
        ))}
      </div>

      {/* ---- tabela de tokens ---- */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e7e4da' }}>
            {['#', 'Token de componente', 'Referência semântica'].map((h) => (
              <th key={h} style={{
                textAlign: 'left', padding: '6px 10px',
                fontSize: 10, fontWeight: 700, color: '#8f8d85',
                textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: FONT,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TOKENS.map(({ n, category, token, value }) => (
            <tr key={token} style={{ borderBottom: '1px solid #f0ede4' }}>
              <td style={{ padding: '8px 10px', width: 32 }}>
                <Badge n={n} category={category} />
              </td>
              <td style={{ padding: '8px 10px' }}>
                <code style={{
                  fontSize: 11, background: '#f2f0e8', color: '#120c10',
                  padding: '2px 6px', borderRadius: 4, fontFamily: 'monospace',
                }}>
                  {token}
                </code>
              </td>
              <td style={{ padding: '8px 10px', color: '#8f8d85', fontFamily: 'monospace', fontSize: 11 }}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: { description: { story: 'Tokens CSS do Button primary. Badges numerados identificam cada parte do componente; a tabela mapeia token de componente → referência semântica.' } },
  },
};

export const Icones: Story = {
  name: 'Ícones',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {[
        { label: 'Lead icon', leadIcon: <Icon name="add" size={16} color="currentColor" /> },
        { label: 'Action icon', actionIcon: <Icon name="arrow-right" size={16} color="currentColor" /> },
        { label: 'Lead + action', leadIcon: <Icon name="arrow-down" size={16} color="currentColor" />, actionIcon: <Icon name="arrow-right" size={16} color="currentColor" /> },
        { label: 'Sem ícone' },
      ].map(({ label, ...props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#8f8d85', width: '100px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{label}</span>
          <Button variant="primary" label={label} {...props} />
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded' },
};
