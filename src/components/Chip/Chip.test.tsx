import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from './Chip';

describe('Chip', () => {
  describe('Renderização básica', () => {
    it('renderiza com o label fornecido', () => {
      render(<Chip label="Categoria" />);
      expect(screen.getByRole('checkbox', { name: 'Categoria' })).toBeInTheDocument();
    });

    it('renderiza com estado desmarcado por padrão', () => {
      render(<Chip label="Filtro" />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
    });

    it('aplica className externo sem sobrescrever classes do componente', () => {
      render(<Chip label="Chip" className="minha-classe" />);
      const el = screen.getByRole('checkbox');
      expect(el.classList.contains('minha-classe')).toBe(true);
      expect(el.classList.contains('chip')).toBe(true);
    });

    it('repassa atributos HTML nativos corretamente', () => {
      render(<Chip label="Chip" data-testid="meu-chip" />);
      expect(screen.getByTestId('meu-chip')).toBeInTheDocument();
    });
  });

  describe('Estado selecionado', () => {
    it('renderiza aria-checked="true" quando isSelected=true', () => {
      render(<Chip label="Filtro" isSelected />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
    });

    it('exibe ícone de check quando selecionado', () => {
      const { container } = render(<Chip label="Filtro" isSelected />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('não exibe ícone de check quando não selecionado', () => {
      const { container } = render(<Chip label="Filtro" isSelected={false} />);
      const svg = container.querySelector('svg');
      expect(svg).not.toBeInTheDocument();
    });

    it('define data-selected="true" quando selecionado', () => {
      render(<Chip label="Filtro" isSelected />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-selected', 'true');
    });

    it('não define data-selected quando não selecionado', () => {
      render(<Chip label="Filtro" />);
      expect(screen.getByRole('checkbox')).not.toHaveAttribute('data-selected');
    });
  });

  describe('Estado desabilitado', () => {
    it('renderiza com atributo disabled quando isDisabled=true', () => {
      render(<Chip label="Chip" isDisabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('define aria-disabled="true" quando desabilitado', () => {
      render(<Chip label="Chip" isDisabled />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-disabled', 'true');
    });

    it('não chama onChange quando desabilitado e clicado', async () => {
      const handleChange = vi.fn();
      render(<Chip label="Chip" isDisabled onChange={handleChange} />);
      await userEvent.click(screen.getByRole('checkbox'));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Interação', () => {
    it('chama onChange com true ao clicar em chip não selecionado', async () => {
      const handleChange = vi.fn();
      render(<Chip label="Filtro" isSelected={false} onChange={handleChange} />);
      await userEvent.click(screen.getByRole('checkbox'));
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('chama onChange com false ao clicar em chip selecionado', async () => {
      const handleChange = vi.fn();
      render(<Chip label="Filtro" isSelected onChange={handleChange} />);
      await userEvent.click(screen.getByRole('checkbox'));
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('é ativável por teclado via Enter', async () => {
      const handleChange = vi.fn();
      render(<Chip label="Filtro" onChange={handleChange} />);
      screen.getByRole('checkbox').focus();
      await userEvent.keyboard('{Enter}');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('é ativável por teclado via Space', async () => {
      const handleChange = vi.fn();
      render(<Chip label="Filtro" onChange={handleChange} />);
      screen.getByRole('checkbox').focus();
      await userEvent.keyboard(' ');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('encaminha onClick junto com onChange', async () => {
      const handleChange = vi.fn();
      const handleClick = vi.fn();
      render(<Chip label="Filtro" onChange={handleChange} onClick={handleClick} />);
      await userEvent.click(screen.getByRole('checkbox'));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Acessibilidade', () => {
    it('tem role="checkbox"', () => {
      render(<Chip label="Acessível" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('tem aria-label com o texto do label', () => {
      render(<Chip label="Status ativo" />);
      expect(screen.getByRole('checkbox', { name: 'Status ativo' })).toBeInTheDocument();
    });

    it('é focalizável por teclado', () => {
      render(<Chip label="Foco" />);
      const el = screen.getByRole('checkbox');
      el.focus();
      expect(document.activeElement).toBe(el);
    });

    it('não é focalizável quando desabilitado', () => {
      render(<Chip label="Desabilitado" isDisabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });
  });
});
