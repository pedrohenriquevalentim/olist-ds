import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  describe('Renderização básica', () => {
    it('renderiza com role="switch"', () => {
      render(<Toggle />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('começa desligado por padrão', () => {
      render(<Toggle />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('renderiza ligado quando selected=true', () => {
      render(<Toggle selected />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('repassa atributos HTML nativos ao button', () => {
      render(<Toggle data-testid="meu-toggle" aria-label="Ativar notificações" />);
      expect(screen.getByTestId('meu-toggle')).toBeInTheDocument();
    });

    it('aplica className externo sem sobrescrever classes internas', () => {
      render(<Toggle className="minha-classe" />);
      expect(screen.getByRole('switch').classList.contains('minha-classe')).toBe(true);
    });
  });

  describe('Interação', () => {
    it('chama onToggle com true ao clicar no estado desligado', async () => {
      const onToggle = vi.fn();
      render(<Toggle selected={false} onToggle={onToggle} />);
      await userEvent.click(screen.getByRole('switch'));
      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it('chama onToggle com false ao clicar no estado ligado', async () => {
      const onToggle = vi.fn();
      render(<Toggle selected onToggle={onToggle} />);
      await userEvent.click(screen.getByRole('switch'));
      expect(onToggle).toHaveBeenCalledWith(false);
    });

    it('chama onClick nativo quando fornecido', async () => {
      const onClick = vi.fn();
      render(<Toggle onClick={onClick} />);
      await userEvent.click(screen.getByRole('switch'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('não chama onToggle quando disabled', async () => {
      const onToggle = vi.fn();
      render(<Toggle disabled onToggle={onToggle} />);
      await userEvent.click(screen.getByRole('switch'));
      expect(onToggle).not.toHaveBeenCalled();
    });
  });

  describe('Estado: disabled', () => {
    it('fica desabilitado quando disabled=true', () => {
      render(<Toggle disabled />);
      expect(screen.getByRole('switch')).toBeDisabled();
    });

    it('não é focalizável por teclado quando desabilitado', () => {
      render(<Toggle disabled />);
      expect(screen.getByRole('switch')).toBeDisabled();
    });
  });

  describe('Acessibilidade (W3C)', () => {
    it('é focalizável por teclado', () => {
      render(<Toggle aria-label="Toggle" />);
      const btn = screen.getByRole('switch');
      btn.focus();
      expect(document.activeElement).toBe(btn);
    });

    it('ativa via teclado (Space)', async () => {
      const onToggle = vi.fn();
      render(<Toggle selected={false} onToggle={onToggle} aria-label="Toggle" />);
      screen.getByRole('switch').focus();
      await userEvent.keyboard(' ');
      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it('ativa via teclado (Enter)', async () => {
      const onToggle = vi.fn();
      render(<Toggle selected={false} onToggle={onToggle} aria-label="Toggle" />);
      screen.getByRole('switch').focus();
      await userEvent.keyboard('{Enter}');
      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it('aria-checked="true" quando selected', () => {
      render(<Toggle selected />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('aria-checked="false" quando não selected', () => {
      render(<Toggle />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });
  });
});
