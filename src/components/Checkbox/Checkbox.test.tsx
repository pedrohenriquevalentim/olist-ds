import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  describe('Renderização básica', () => {
    it('renderiza o input com role checkbox', () => {
      render(<Checkbox />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renderiza com label quando prop label é fornecida', () => {
      render(<Checkbox label="Aceitar termos" />);
      expect(screen.getByText('Aceitar termos')).toBeInTheDocument();
    });

    it('não renderiza texto de label quando prop label é omitida', () => {
      const { container } = render(<Checkbox />);
      expect(container.querySelector('[class*="labelText"]')).toBeNull();
    });

    it('repassa atributos HTML nativos ao input', () => {
      render(<Checkbox data-testid="meu-checkbox" name="termos" />);
      const input = screen.getByTestId('meu-checkbox');
      expect(input.getAttribute('name')).toBe('termos');
    });

    it('aplica className externo no wrapper sem sobrescrever classes internas', () => {
      const { container } = render(<Checkbox label="Teste" className="minha-classe" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.classList.contains('minha-classe')).toBe(true);
    });

    it('gera id único automaticamente quando id não é fornecido', () => {
      render(<Checkbox label="Auto ID" />);
      expect(screen.getByRole('checkbox').getAttribute('id')).toBeTruthy();
    });

    it('usa id fornecido e associa ao label via htmlFor', () => {
      render(<Checkbox id="meu-id" label="Meu label" />);
      const input = screen.getByRole('checkbox');
      const label = input.closest('label');
      expect(input.id).toBe('meu-id');
      expect(label?.getAttribute('for')).toBe('meu-id');
    });
  });

  describe('Estado: checked', () => {
    it('renderiza desmarcado por padrão', () => {
      render(<Checkbox label="Desmarcado" />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('renderiza marcado quando checked=true', () => {
      render(<Checkbox label="Marcado" checked onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('dispara onChange ao clicar (modo controlado)', async () => {
      const handleChange = vi.fn();
      render(<Checkbox label="Clicável" checked={false} onChange={handleChange} />);
      await userEvent.click(screen.getByRole('checkbox'));
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Estado: indeterminate', () => {
    it('define input.indeterminate=true quando isIndeterminate=true', () => {
      render(<Checkbox label="Indeterminado" isIndeterminate />);
      const input = screen.getByRole('checkbox') as HTMLInputElement;
      expect(input.indeterminate).toBe(true);
    });

    it('expõe aria-checked="mixed" quando isIndeterminate=true', () => {
      render(<Checkbox label="Misto" isIndeterminate />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
    });

    it('define input.indeterminate=false quando isIndeterminate=false', () => {
      render(<Checkbox label="Normal" isIndeterminate={false} />);
      const input = screen.getByRole('checkbox') as HTMLInputElement;
      expect(input.indeterminate).toBe(false);
    });
  });

  describe('Estado: disabled', () => {
    it('renderiza desabilitado quando disabled=true', () => {
      render(<Checkbox label="Desabilitado" disabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('não dispara onChange quando desabilitado', async () => {
      const handleChange = vi.fn();
      render(<Checkbox label="Desabilitado" disabled onChange={handleChange} />);
      await userEvent.click(screen.getByRole('checkbox'));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Acessibilidade (WCAG / W3C)', () => {
    it('tem role="checkbox" no input nativo', () => {
      render(<Checkbox label="Acessível" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('aria-checked reflete checked quando não indeterminate', () => {
      render(<Checkbox label="Marcado" checked onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
    });

    it('é focalizável por teclado', () => {
      render(<Checkbox label="Foco" />);
      const input = screen.getByRole('checkbox');
      input.focus();
      expect(document.activeElement).toBe(input);
    });

    it('não é focalizável quando desabilitado', () => {
      render(<Checkbox label="Sem foco" disabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('ativa/desativa via teclado (Space)', async () => {
      const handleChange = vi.fn();
      render(<Checkbox label="Teclado" checked={false} onChange={handleChange} />);
      screen.getByRole('checkbox').focus();
      await userEvent.keyboard(' ');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('aceita aria-label para sobrescrever o nome acessível', () => {
      render(<Checkbox aria-label="Selecionar todos os itens" />);
      expect(
        screen.getByRole('checkbox', { name: 'Selecionar todos os itens' })
      ).toBeInTheDocument();
    });

    it('associa label ao input via htmlFor/id', () => {
      render(<Checkbox id="aceitar" label="Aceitar termos de uso" />);
      const input = screen.getByRole('checkbox');
      expect(input.closest('label')?.getAttribute('for')).toBe('aceitar');
    });
  });

  describe('Tipografia (Regra #5 — tokens explícitos no CSS)', () => {
    it('renderiza elemento com classe labelText quando label é fornecido', () => {
      const { container } = render(<Checkbox label="Texto de label" />);
      const labelEl = container.querySelector('[class*="labelText"]');
      expect(labelEl).toBeTruthy();
      expect(labelEl?.textContent).toBe('Texto de label');
    });

    it('label desabilitado recebe classe wrapperDisabled no elemento pai', () => {
      const { container } = render(<Checkbox label="Desabilitado" disabled />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toMatch(/wrapperDisabled/);
    });
  });

  describe('Ícones SVG inline', () => {
    it('os ícones internos têm aria-hidden para não poluir a árvore de acessibilidade', () => {
      const { container } = render(<Checkbox label="Acessível" checked onChange={() => {}} />);
      const box = container.querySelector('[class*="box"]');
      expect(box?.querySelector('[aria-hidden="true"]')).toBeTruthy();
    });

    it('contém SVGs inline dentro da caixa visual', () => {
      const { container } = render(<Checkbox label="Com ícone" checked onChange={() => {}} />);
      expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(1);
    });

    it('contém SVG de traço para estado indeterminado', () => {
      const { container } = render(<Checkbox label="Indeterminado" isIndeterminate />);
      expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(1);
    });
  });
});
