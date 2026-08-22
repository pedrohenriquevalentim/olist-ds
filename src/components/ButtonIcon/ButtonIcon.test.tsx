import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonIcon } from './ButtonIcon';

const IconMock = (
  <svg data-testid="icon-mock" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

describe('ButtonIcon', () => {
  describe('Renderização básica', () => {
    it('renderiza o botão com role="button"', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Adicionar" />);
      expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();
    });

    it('renderiza o ícone fornecido', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Adicionar" />);
      expect(screen.getByTestId('icon-mock')).toBeInTheDocument();
    });

    it('o wrapper do ícone tem aria-hidden para acessibilidade', () => {
      const { container } = render(<ButtonIcon icon={IconMock} aria-label="Adicionar" />);
      const wrapper = container.querySelector('[aria-hidden="true"]');
      expect(wrapper).toBeInTheDocument();
    });

    it('repassa atributos HTML nativos corretamente', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Adicionar" data-testid="meu-btn" type="submit" />);
      const btn = screen.getByTestId('meu-btn');
      expect(btn.getAttribute('type')).toBe('submit');
    });

    it('aplica className externo sem sobrescrever classes do componente', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Adicionar" className="extra" />);
      const btn = screen.getByRole('button');
      expect(btn.classList.contains('extra')).toBe(true);
      expect(btn.classList.contains('buttonIcon')).toBe(true);
    });
  });

  describe('Variantes', () => {
    it('aplica a classe "primary" por padrão', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Ação" />);
      expect(screen.getByRole('button').classList.contains('primary')).toBe(true);
    });

    it('aplica a classe "secondary" quando variant="secondary"', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Ação" variant="secondary" />);
      expect(screen.getByRole('button').classList.contains('secondary')).toBe(true);
    });

    it('aplica a classe "tertiary" quando variant="tertiary"', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Ação" variant="tertiary" />);
      expect(screen.getByRole('button').classList.contains('tertiary')).toBe(true);
    });
  });

  describe('Estado desabilitado', () => {
    it('renderiza com atributo disabled quando disabled=true', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Desabilitado" disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('não dispara onClick quando desabilitado', async () => {
      const handleClick = vi.fn();
      render(<ButtonIcon icon={IconMock} aria-label="Desabilitado" disabled onClick={handleClick} />);
      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Interação', () => {
    it('chama onClick ao ser clicado', async () => {
      const handleClick = vi.fn();
      render(<ButtonIcon icon={IconMock} aria-label="Clique" onClick={handleClick} />);
      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('é ativável por teclado via Enter', async () => {
      const handleClick = vi.fn();
      render(<ButtonIcon icon={IconMock} aria-label="Teclado" onClick={handleClick} />);
      screen.getByRole('button').focus();
      await userEvent.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('é ativável por teclado via Space', async () => {
      const handleClick = vi.fn();
      render(<ButtonIcon icon={IconMock} aria-label="Teclado" onClick={handleClick} />);
      screen.getByRole('button').focus();
      await userEvent.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Acessibilidade', () => {
    it('aria-label é obrigatório e identifica o botão', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Fechar modal" />);
      expect(screen.getByRole('button', { name: 'Fechar modal' })).toBeInTheDocument();
    });

    it('é focalizável por teclado', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Foco" />);
      const btn = screen.getByRole('button');
      btn.focus();
      expect(document.activeElement).toBe(btn);
    });

    it('não é focalizável quando desabilitado', () => {
      render(<ButtonIcon icon={IconMock} aria-label="Desabilitado" disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });
});
