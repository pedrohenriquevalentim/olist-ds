import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido no chip.',
    },
    isSelected: {
      control: 'boolean',
      description: 'Define se o chip está selecionado (marcado).',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o chip, impedindo interações.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'alterado',
      description: 'Callback disparado ao alternar o estado do chip. Recebe o novo valor booleano.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Playground: Story = {
  args: {
    label: 'Categoria',
  },
};

export const Estados: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      {[
        { label: 'Habilitado', props: {} },
        { label: 'Selecionado', props: { isSelected: true } },
        { label: 'Desabilitado', props: { isDisabled: true } },
        { label: 'Desabilitado + selecionado', props: { isSelected: true, isDisabled: true } },
      ].map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#8f8d85', width: '168px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{label}</span>
          <Chip label="Placeholder text" {...props} />
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded' },
};

export const GrupoDeFiltros: Story = {
  name: 'Grupo de filtros',
  render: () => {
    const categorias = ['Eletrônicos', 'Roupas', 'Casa', 'Esportes', 'Livros'];
    const [selecionados, setSelecionados] = useState<string[]>(['Eletrônicos']);

    const toggle = (cat: string) => {
      setSelecionados((prev) =>
        prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
      );
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {categorias.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            isSelected={selecionados.includes(cat)}
            onChange={() => toggle(cat)}
          />
        ))}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Caso de uso típico: grupo de chips para seleção múltipla de filtros.',
      },
    },
  },
};
