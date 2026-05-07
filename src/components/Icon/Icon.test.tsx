import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icon, availableIcons } from './index';

describe('Icon', () => {
  it('renderiza o primeiro ícone disponível', () => {
    const { container } = render(<Icon name={availableIcons[0]} />);
    const wrapper = container.querySelector('span');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.querySelector('svg')).toBeTruthy();
  });

  it('aplica o tamanho via prop size', () => {
    const { container } = render(<Icon name={availableIcons[0]} size={32} />);
    const wrapper = container.querySelector('span') as HTMLSpanElement;
    expect(wrapper.style.width).toBe('32px');
    expect(wrapper.style.height).toBe('32px');
  });

  it('aplica a cor via prop color', () => {
    const { container } = render(<Icon name={availableIcons[0]} color="#2064F3" />);
    const wrapper = container.querySelector('span') as HTMLSpanElement;
    expect(wrapper.style.color).toBe('rgb(32, 100, 243)');
  });

  it('expõe role e aria-label quando aria-label é fornecido', () => {
    render(<Icon name={availableIcons[0]} aria-label="Ícone de teste" />);
    const img = screen.getByRole('img', { name: 'Ícone de teste' });
    expect(img).toBeInTheDocument();
  });

  it('marca como aria-hidden quando aria-label não é fornecido', () => {
    const { container } = render(<Icon name={availableIcons[0]} />);
    const wrapper = container.querySelector('span') as HTMLSpanElement;
    expect(wrapper.getAttribute('aria-hidden')).toBe('true');
  });

  it('retorna null para ícone inexistente', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    // @ts-expect-error testing invalid name
    const { container } = render(<Icon name="ICONE_INEXISTENTE" />);
    expect(container.firstChild).toBeNull();
    warn.mockRestore();
  });

  it('expõe lista availableIcons', () => {
    expect(Array.isArray(availableIcons)).toBe(true);
    expect(availableIcons.length).toBeGreaterThan(0);
  });
});
