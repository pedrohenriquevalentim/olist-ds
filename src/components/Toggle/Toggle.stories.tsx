import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Estado ligado/desligado (controlado externamente).',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o toggle, bloqueando interações.',
      table: { defaultValue: { summary: 'false' } },
    },
    onToggle: {
      action: 'alternado',
      description: 'Callback disparado ao clicar. Recebe o próximo estado booleano.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {
  args: {
    selected: false,
    disabled: false,
  },
};

export const Estados: Story = {
  name: 'Todos os estados',
  render: () => {
    const [s1, setS1] = useState(false);
    const [s2, setS2] = useState(true);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Toggle selected={s1} onToggle={setS1} aria-label="Desligado — enabled" />
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem' }}>Desligado — enabled</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Toggle selected={s2} onToggle={setS2} aria-label="Ligado — enabled" />
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem' }}>Ligado — enabled</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Toggle disabled aria-label="Desligado — disabled" />
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem' }}>Desligado — disabled</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Toggle selected disabled aria-label="Ligado — disabled" />
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem' }}>Ligado — disabled</span>
        </div>
      </div>
    );
  },
  parameters: { layout: 'padded' },
};

export const CasoDeUso: Story = {
  name: 'Caso de uso — configurações',
  render: () => {
    const [notif, setNotif] = useState(true);
    const [email, setEmail] = useState(false);
    const [sms, setSms] = useState(false);

    const linha = (label: string, value: boolean, setter: (v: boolean) => void, disabled = false) => (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 0',
        borderBottom: '1px solid #e7e4da',
        gap: '2rem',
        minWidth: '20rem',
      }}>
        <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem', color: disabled ? '#afada2' : '#201f1d' }}>
          {label}
        </span>
        <Toggle selected={value} onToggle={setter} disabled={disabled} aria-label={label} />
      </div>
    );

    return (
      <div>
        {linha('Notificações push', notif, setNotif)}
        {linha('Notificações por e-mail', email, setEmail)}
        {linha('Notificações por SMS', sms, setSms, true)}
      </div>
    );
  },
  parameters: { layout: 'padded' },
};
