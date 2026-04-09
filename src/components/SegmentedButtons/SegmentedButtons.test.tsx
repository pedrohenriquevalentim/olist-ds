import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { SegmentedButtons } from './SegmentedButtons';

describe('SegmentedButtons', () => {
  it('renderiza o radiogroup com aria-label padrão', () => {
    render(<SegmentedButtons labelText="Período" />);
    expect(screen.getByRole('radiogroup', { name: 'Período' })).toBeInTheDocument();
  });

  it('usa ariaLabel personalizado quando fornecido', () => {
    render(<SegmentedButtons labelText="Período" ariaLabel="Selecione o período" />);
    expect(screen.getByRole('radiogroup', { name: 'Selecione o período' })).toBeInTheDocument();
  });

  it('renderiza 2 segmentos por padrão', () => {
    render(<SegmentedButtons />);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  it('renderiza 3 segmentos quando segments=3', () => {
    render(<SegmentedButtons segments={3} />);
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('segmento ativo tem aria-checked="true"', () => {
    render(<SegmentedButtons activeSegment={2} segments={2} segmentLabels={['Seg 1', 'Seg 2']} />);
    expect(screen.getByRole('radio', { name: 'Seg 2' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: 'Seg 1' })).toHaveAttribute('aria-checked', 'false');
  });

  it('segmentos inativos têm aria-checked="false"', () => {
    render(<SegmentedButtons activeSegment={1} segments={3} segmentLabels={['A', 'B', 'C']} />);
    expect(screen.getByRole('radio', { name: 'B' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: 'C' })).toHaveAttribute('aria-checked', 'false');
  });

  it('chama onChange ao clicar em segmento inativo', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedButtons
        activeSegment={1}
        segments={2}
        segmentLabels={['Opção 1', 'Opção 2']}
        onChange={onChange}
      />
    );
    await user.click(screen.getByRole('radio', { name: 'Opção 2' }));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('não chama onChange ao clicar no segmento já ativo', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedButtons
        activeSegment={1}
        segments={2}
        segmentLabels={['Opção 1', 'Opção 2']}
        onChange={onChange}
      />
    );
    await user.click(screen.getByRole('radio', { name: 'Opção 1' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('navega com ArrowRight entre segmentos', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedButtons
        activeSegment={1}
        segments={2}
        segmentLabels={['A', 'B']}
        onChange={onChange}
      />
    );
    screen.getByRole('radio', { name: 'A' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('navega com ArrowLeft entre segmentos', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedButtons
        activeSegment={2}
        segments={2}
        segmentLabels={['A', 'B']}
        onChange={onChange}
      />
    );
    screen.getByRole('radio', { name: 'B' }).focus();
    await user.keyboard('{ArrowLeft}');
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('exibe tooltip quando hasTooltip=true e labelPosition=vertical', () => {
    render(
      <SegmentedButtons labelPosition="vertical" hasTooltip />
    );
    expect(screen.getByRole('button', { name: 'Mais informações' })).toBeInTheDocument();
  });

  it('não exibe tooltip quando labelPosition=horizontal', () => {
    render(
      <SegmentedButtons labelPosition="horizontal" hasTooltip />
    );
    expect(screen.queryByRole('button', { name: 'Mais informações' })).not.toBeInTheDocument();
  });

  it('exibe o texto do label', () => {
    render(<SegmentedButtons labelText="Visualização" />);
    expect(screen.getByText('Visualização')).toBeInTheDocument();
  });

  it('usa labels personalizados para os segmentos', () => {
    render(<SegmentedButtons segments={3} segmentLabels={['Dia', 'Semana', 'Mês']} />);
    expect(screen.getByRole('radio', { name: 'Dia' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Semana' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Mês' })).toBeInTheDocument();
  });
});
