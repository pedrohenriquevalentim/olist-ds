import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotificationStack } from './NotificationStack';
import { NotificationCard } from '../NotificationCard';

const summary = (
  <NotificationCard
    severity="positive"
    product="Conta Digital"
    dateTime="26/10/2026 • 18h02"
    title="3 Pix recebidos hoje"
    value="+ R$ 274,16"
  />
);

const renderStack = (props: Partial<React.ComponentProps<typeof NotificationStack>> = {}, readFlags = [false, false]) =>
  render(
    <NotificationStack groupTitle="Pix recebidos hoje" summary={summary} {...props}>
      {readFlags.map((isRead, index) => (
        <NotificationCard
          key={index}
          severity="positive"
          isRead={isRead}
          dateTime="26/10/2026 • 16h28"
          title={`Pix recebido ${index + 1}`}
        />
      ))}
    </NotificationStack>,
  );

describe('NotificationStack', () => {
  describe('Renderização básica', () => {
    it('recolhido: exibe o resumo e esconde os itens', () => {
      renderStack();
      expect(screen.getByText('3 Pix recebidos hoje')).toBeInTheDocument();
      expect(screen.queryByText('Pix recebido 1')).not.toBeInTheDocument();
    });

    it('recolhido: renderiza as duas camadas atrás do resumo', () => {
      renderStack();
      expect(screen.getAllByTestId('stack-layer')).toHaveLength(2);
    });

    it('expandido: exibe cabeçalho, itens e linha-guia', () => {
      renderStack({ defaultExpanded: true });
      expect(screen.getByRole('heading', { name: 'Pix recebidos hoje' })).toBeInTheDocument();
      expect(screen.getByText('Pix recebido 1')).toBeInTheDocument();
      expect(screen.getByText('Pix recebido 2')).toBeInTheDocument();
      expect(screen.getByTestId('stack-guide')).toBeInTheDocument();
      expect(screen.queryByText('3 Pix recebidos hoje')).not.toBeInTheDocument();
    });
  });

  describe('Variantes', () => {
    it('leitura unread quando nenhum item foi lido', () => {
      const { container } = renderStack();
      expect(container.firstElementChild?.className).toContain('unread');
    });

    it('leitura mixed quando há item lido', () => {
      const { container } = renderStack({}, [false, true]);
      expect(container.firstElementChild?.className).toContain('mixed');
    });

    it('aplica a classe do estado', () => {
      const { container, rerender } = renderStack();
      expect(container.firstElementChild?.className).toContain('collapsed');
      rerender(
        <NotificationStack groupTitle="Pix recebidos hoje" summary={summary} isExpanded>
          <NotificationCard dateTime="x" title="Item" />
        </NotificationStack>,
      );
      expect(container.firstElementChild?.className).toContain('expanded');
    });
  });

  describe('Interação', () => {
    it('"mostrar todos" expande o grupo', async () => {
      renderStack();
      await userEvent.click(screen.getByRole('button', { name: 'mostrar todos' }));
      expect(screen.getByText('Pix recebido 1')).toBeInTheDocument();
    });

    it('"mostrar menos" recolhe o grupo', async () => {
      renderStack({ defaultExpanded: true });
      await userEvent.click(screen.getByRole('button', { name: 'mostrar menos' }));
      expect(screen.getByText('3 Pix recebidos hoje')).toBeInTheDocument();
      expect(screen.queryByText('Pix recebido 1')).not.toBeInTheDocument();
    });

    it('chama onExpandedChange com o novo estado', async () => {
      const onExpandedChange = vi.fn();
      renderStack({ onExpandedChange });
      await userEvent.click(screen.getByRole('button', { name: 'mostrar todos' }));
      expect(onExpandedChange).toHaveBeenCalledWith(true);
    });

    it('modo controlado não muda sozinho', async () => {
      const onExpandedChange = vi.fn();
      renderStack({ isExpanded: false, onExpandedChange });
      await userEvent.click(screen.getByRole('button', { name: 'mostrar todos' }));
      expect(onExpandedChange).toHaveBeenCalledWith(true);
      expect(screen.queryByText('Pix recebido 1')).not.toBeInTheDocument();
    });

    it('aceita rótulos customizados', () => {
      renderStack({ defaultExpanded: true, collapseLabel: 'recolher' });
      expect(screen.getByRole('button', { name: 'recolher' })).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('é um grupo nomeado pelo título', () => {
      renderStack();
      expect(screen.getByRole('group', { name: 'Pix recebidos hoje' })).toBeInTheDocument();
    });

    it('botão de recolher expõe aria-expanded e aria-controls', () => {
      renderStack({ defaultExpanded: true });
      const toggle = screen.getByRole('button', { name: 'mostrar menos' });
      expect(toggle).toHaveAttribute('aria-expanded', 'true');
      expect(toggle).toHaveAttribute('aria-controls');
    });

    it('camadas decorativas ficam ocultas para leitores de tela', () => {
      renderStack();
      screen.getAllByTestId('stack-layer').forEach((layer) =>
        expect(layer).toHaveAttribute('aria-hidden', 'true'),
      );
    });

    it('o botão de expandir é acionável por teclado', async () => {
      renderStack();
      screen.getByRole('button', { name: 'mostrar todos' }).focus();
      await userEvent.keyboard('{Enter}');
      expect(screen.getByText('Pix recebido 1')).toBeInTheDocument();
    });
  });
});
