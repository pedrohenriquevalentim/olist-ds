import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

/* ============================
   Meta
   ============================ */

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido ao lado da caixa de seleção.',
    },
    checked: {
      control: 'boolean',
      description: 'Define se o checkbox está marcado (modo controlado).',
      table: { defaultValue: { summary: 'false' } },
    },
    isIndeterminate: {
      control: 'boolean',
      description:
        'Estado indeterminado (parcialmente selecionado). Define `input.indeterminate = true` e `aria-checked="mixed"` para leitores de tela.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o checkbox, bloqueando interações e alterando a aparência visual.',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: {
      action: 'alterado',
      description: 'Callback disparado ao alterar o estado do checkbox.',
    },
    id: {
      control: 'text',
      description:
        'ID do input nativo. Associado automaticamente ao `<label>` via `htmlFor`. Gerado com `useId()` quando omitido.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/* ============================
   Stories
   ============================ */

export const Playground: Story = {
  args: {
    label: 'Label text',
  },
};

export const Estados: Story = {
  render: () => {
    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(true);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <Checkbox label="Desmarcado — enabled" checked={c1} onChange={(e) => setC1(e.target.checked)} />
        <Checkbox label="Marcado — enabled" checked={c2} onChange={(e) => setC2(e.target.checked)} />
        <Checkbox label="Indeterminado — enabled" isIndeterminate />
        <Checkbox label="Desmarcado — disabled" disabled />
        <Checkbox label="Marcado — disabled" disabled checked onChange={() => {}} />
        <Checkbox label="Indeterminado — disabled" disabled isIndeterminate />
      </div>
    );
  },
  parameters: { layout: 'padded' },
};

export const GrupoSelecionarTodos: Story = {
  name: '"Selecionar todos" com estado indeterminado',
  render: () => {
    const modulos = [
      { id: 'pedidos',    label: 'Pedidos' },
      { id: 'produtos',   label: 'Produtos' },
      { id: 'estoque',    label: 'Estoque' },
      { id: 'financeiro', label: 'Financeiro' },
      { id: 'relatorios', label: 'Relatórios', disabled: true },
    ];

    const [selecionados, setSelecionados] = useState<Set<string>>(new Set(['pedidos']));

    const ativados = modulos.filter((m) => !m.disabled);
    const todosMarcados = ativados.every((m) => selecionados.has(m.id));
    const nenhumMarcado = ativados.every((m) => !selecionados.has(m.id));
    const indeterminate = !todosMarcados && !nenhumMarcado;

    const toggleTodos = () =>
      setSelecionados(todosMarcados ? new Set() : new Set(ativados.map((m) => m.id)));

    const toggleItem = (id: string) =>
      setSelecionados((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });

    return (
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#827f73',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '4px',
          }}
        >
          Módulos
        </legend>
        <Checkbox
          id="todos"
          label="Selecionar todos"
          checked={todosMarcados}
          isIndeterminate={indeterminate}
          onChange={toggleTodos}
        />
        <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          {modulos.map((m) => (
            <Checkbox
              key={m.id}
              id={m.id}
              label={m.label}
              checked={selecionados.has(m.id)}
              disabled={m.disabled}
              onChange={() => toggleItem(m.id)}
            />
          ))}
        </div>
      </fieldset>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Padrão "Selecionar todos" com estado indeterminado automático — extremamente comum em tabelas e listas do ERP Tiny.',
      },
    },
  },
};
