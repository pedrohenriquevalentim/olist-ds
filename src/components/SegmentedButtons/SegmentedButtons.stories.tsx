import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SegmentedButtons } from './SegmentedButtons';

const meta: Meta<typeof SegmentedButtons> = {
  title: 'components/SegmentedButtons',
  component: SegmentedButtons,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    segments: { control: 'radio', options: [2, 3] },
    activeSegment: { control: 'radio', options: [1, 2, 3] },
    labelPosition: { control: 'radio', options: ['horizontal', 'vertical'] },
    hasTooltip: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedButtons>;

export const Playground: Story = {
  args: {
    segments: 2,
    activeSegment: 1,
    labelPosition: 'horizontal',
    labelText: 'Label text',
    segmentLabels: ['placeholder Text', 'placeholder Text'],
    hasTooltip: false,
  },
};

/** Demonstra o controle interativo com estado gerenciado pelo React. */
export const Interativo: Story = {
  render: (args) => {
    const [active, setActive] = useState<1 | 2 | 3>(1);
    return (
      <SegmentedButtons
        {...args}
        activeSegment={active}
        onChange={setActive}
      />
    );
  },
  args: {
    segments: 2,
    labelText: 'Período',
    segmentLabels: ['Mensal', 'Anual'],
  },
};

/** Todas as combinações de segmentos × posição do label × segmento ativo. */
export const TodasAsVariantes: Story = {
  render: () => {
    const positions = ['horizontal', 'vertical'] as const;
    const segmentCounts = [2, 3] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {positions.map((pos) => (
          <div key={pos} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <strong style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#615f56' }}>
              Label {pos}
            </strong>
            {segmentCounts.map((count) => {
              const actives = count === 2 ? ([1, 2] as const) : ([1, 2, 3] as const);
              return (
                <div key={count} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {actives.map((active) => (
                    <SegmentedButtons
                      key={`${pos}-${count}-${active}`}
                      segments={count}
                      activeSegment={active}
                      labelPosition={pos}
                      labelText="Label text"
                      segmentLabels={
                        count === 2
                          ? ['placeholder Text', 'placeholder Text']
                          : ['placeholder Text', 'placeholder Text', 'placeholder Text']
                      }
                    />
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  },
};

/** Variante com tooltip visível (só aparece quando labelPosition=vertical). */
export const ComTooltip: Story = {
  args: {
    segments: 2,
    activeSegment: 1,
    labelPosition: 'vertical',
    labelText: 'Período',
    segmentLabels: ['Mensal', 'Anual'],
    hasTooltip: true,
  },
};

/** Três segmentos com labels customizados. */
export const TresSegmentos: Story = {
  render: () => {
    const [active, setActive] = useState<1 | 2 | 3>(1);
    return (
      <SegmentedButtons
        segments={3}
        activeSegment={active}
        onChange={setActive}
        labelText="Visualização"
        segmentLabels={['Dia', 'Semana', 'Mês']}
      />
    );
  },
};
