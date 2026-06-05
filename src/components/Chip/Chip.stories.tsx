import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

export const Padrão: Story = {
  name: 'Padrão',
  args: {
    label: 'Categoria',
    isSelected: false,
  },
};

export const Selecionado: Story = {
  name: 'Selecionado',
  args: {
    label: 'Categoria',
    isSelected: true,
  },
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    label: 'Categoria',
    isDisabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado. Bloqueia cliques e eventos de teclado.',
      },
    },
  },
};

export const DesabilitadoSelecionado: Story = {
  name: 'Desabilitado e selecionado',
  args: {
    label: 'Categoria',
    isSelected: true,
    isDisabled: true,
  },
};

export const Interativo: Story = {
  name: 'Interativo (com estado)',
  render: () => {
    const [selecionado, setSelecionado] = useState(false);
    return (
      <Chip
        label={selecionado ? 'Selecionado' : 'Clique para selecionar'}
        isSelected={selecionado}
        onChange={setSelecionado}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo com estado gerenciado pelo componente pai. Clique para alternar.',
      },
    },
  },
};

export const TodosOsEstados: Story = {
  name: 'Todos os estados',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '12px', color: '#827f73', width: '140px' }}>Habilitado</span>
        <Chip label="Placeholder text" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '12px', color: '#827f73', width: '140px' }}>Selecionado</span>
        <Chip label="Placeholder text" isSelected />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '12px', color: '#827f73', width: '140px' }}>Desabilitado</span>
        <Chip label="Placeholder text" isDisabled />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Visão consolidada dos três estados principais do chip.',
      },
    },
  },
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
