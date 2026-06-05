import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

const LeadIconMock = (
  <svg data-testid="lead-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ActionIconMock = (
  <svg data-testid="action-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

describe('Button', () => {
  describe('Renderização básica', () => {
    it('renderiza com label padrão via prop', () => {
      render(<Button label="Confirmar" />);
      expect(screen.getByRole('button', { name: 'Confirmar' })).toBeInTheDocument();
    });

    it('renderiza com texto via children', () => {
      render(<Button>Salvar</Button>);
      expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument();
    });

    it('children sobrepõe label quando ambos fornecidos', () => {
      render(<Button label="Label Prop">Children Text</Button>);
      expect(screen.getByRole('button', { name: 'Children Text' })).toBeInTheDocument();
      expect(screen.queryByText('Label Prop')).not.toBeInTheDocument();
    });

    it('aplica className externo sem sobrescrever classes do componente', () => {
      render(<Button label="Botão" className="minha-classe" />);
      const btn = screen.getByRole('button');
      expect(btn.classList.contains('minha-classe')).toBe(true);
      expect(btn.classList.contains('button')).toBe(true);
    });

    it('repassa atributos HTML nativos corretamente', () => {
      render(<Button label="Botão" data-testid="meu-botao" type="submit" />);
      const btn = screen.getByTestId('meu-botao');
      expect(btn.getAttribute('type')).toBe('submit');
    });
  });

  describe('Variantes', () => {
    it('aplica a classe "primary" por padrão', () => {
      render(<Button label="Primário" />);
      expect(screen.getByRole('button').classList.contains('primary')).toBe(true);
    });

    it('aplica a classe "secondary" quando variant="secondary"', () => {
      render(<Button label="Secundário" variant="secondary" />);
      expect(screen.getByRole('button').classList.contains('secondary')).toBe(true);
    });

    it('aplica a classe "tertiary" quando variant="tertiary"', () => {
      render(<Button label="Terciário" variant="tertiary" />);
      expect(screen.getByRole('button').classList.contains('tertiary')).toBe(true);
    });
  });

  describe('Estado desabilitado', () => {
    it('renderiza com atributo disabled quando disabled=true', () => {
      render(<Button label="Desabilitado" disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('não dispara onClick quando desabilitado', async () => {
      const handleClick = vi.fn();
      render(<Button label="Desabilitado" disabled onClick={handleClick} />);
      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Interação', () => {
    it('chama onClick ao ser clicado', async () => {
      const handleClick = vi.fn();
      render(<Button label="Clique" onClick={handleClick} />);
      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('é ativável por teclado via Enter', async () => {
      const handleClick = vi.fn();
      render(<Button label="Teclado" onClick={handleClick} />);
      screen.getByRole('button').focus();
      await userEvent.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('é ativável por teclado via Space', async () => {
      const handleClick = vi.fn();
      render(<Button label="Teclado" onClick={handleClick} />);
      screen.getByRole('button').focus();
      await userEvent.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Ícones (ReactNode)', () => {
    it('renderiza leadIcon quando fornecido', () => {
      render(<Button label="Com ícone" leadIcon={LeadIconMock} />);
      expect(screen.getByTestId('lead-icon')).toBeInTheDocument();
    });

    it('renderiza actionIcon quando fornecido', () => {
      render(<Button label="Com ícone" actionIcon={ActionIconMock} />);
      expect(screen.getByTestId('action-icon')).toBeInTheDocument();
    });

    it('renderiza leadIcon e actionIcon simultaneamente', () => {
      render(<Button label="Dois ícones" leadIcon={LeadIconMock} actionIcon={ActionIconMock} />);
      expect(screen.getByTestId('lead-icon')).toBeInTheDocument();
      expect(screen.getByTestId('action-icon')).toBeInTheDocument();
    });

    it('não renderiza wrapper de ícone quando leadIcon não é fornecido', () => {
      const { container } = render(<Button label="Sem ícone" />);
      const wrappers = container.querySelectorAll('.iconWrapper');
      expect(wrappers.length).toBe(0);
    });

    it('wrappers de ícone têm aria-hidden para acessibilidade', () => {
      const { container } = render(
        <Button label="Com ícone" leadIcon={LeadIconMock} actionIcon={ActionIconMock} />
      );
      const wrappers = container.querySelectorAll('[aria-hidden="true"]');
      expect(wrappers.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Acessibilidade', () => {
    it('tem role="button" implícito', () => {
      render(<Button label="Acessível" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('aceita aria-label para sobrescrever nome acessível', () => {
      render(<Button label="X" aria-label="Fechar modal" />);
      expect(screen.getByRole('button', { name: 'Fechar modal' })).toBeInTheDocument();
    });

    it('é focalizável por teclado', () => {
      render(<Button label="Foco" />);
      const btn = screen.getByRole('button');
      btn.focus();
      expect(document.activeElement).toBe(btn);
    });

    it('não é focalizável quando desabilitado', () => {
      render(<Button label="Desabilitado" disabled />);
      const btn = screen.getByRole('button');
      expect(btn).toBeDisabled();
    });
  });
});
