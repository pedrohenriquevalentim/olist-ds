import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotificationCard } from './NotificationCard';

const baseProps = {
  dateTime: '26/10/2026 • 09h12',
  title: 'Título da notificação',
};

describe('NotificationCard', () => {
  describe('Renderização básica', () => {
    it('renderiza título, data e produto', () => {
      render(<NotificationCard {...baseProps} product="Conta Digital" />);
      expect(screen.getByText('Título da notificação')).toBeInTheDocument();
      expect(screen.getByText('26/10/2026 • 09h12')).toBeInTheDocument();
      expect(screen.getByText('Conta Digital')).toBeInTheDocument();
    });

    it('renderiza como article', () => {
      render(<NotificationCard {...baseProps} />);
      expect(screen.getByRole('article')).toBeInTheDocument();
    });

    it('renderiza corpo, usuário e status quando informados', () => {
      render(
        <NotificationCard
          {...baseProps}
          body="Descrição da notificação"
          user="· Maria Silva"
          status="pendente"
        />,
      );
      expect(screen.getByText('Descrição da notificação')).toBeInTheDocument();
      expect(screen.getByText('· Maria Silva')).toBeInTheDocument();
      expect(screen.getByText('pendente')).toBeInTheDocument();
    });

    it('renderiza valor e detalhe do valor', () => {
      render(<NotificationCard {...baseProps} value="+ R$ 208,26" valueDetail="− R$ 0,35 de tarifa" />);
      expect(screen.getByText('+ R$ 208,26')).toBeInTheDocument();
      expect(screen.getByText('− R$ 0,35 de tarifa')).toBeInTheDocument();
    });

    it('renderiza o prazo', () => {
      render(<NotificationCard {...baseProps} deadline="vence em 07/11/2026" />);
      expect(screen.getByText('vence em 07/11/2026')).toBeInTheDocument();
    });

    it('não renderiza blocos opcionais quando omitidos', () => {
      render(<NotificationCard {...baseProps} />);
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });

  describe('Variantes', () => {
    it.each(['informative', 'positive', 'warning', 'negative'] as const)(
      'aplica a classe da severidade %s',
      (severity) => {
        render(<NotificationCard {...baseProps} severity={severity} />);
        expect(screen.getByRole('article').className).toContain(severity);
      },
    );

    it('não lida exibe o ponto azul', () => {
      render(<NotificationCard {...baseProps} />);
      expect(screen.getByTestId('unread-dot')).toBeInTheDocument();
      expect(screen.getByRole('article').className).toContain('unread');
    });

    it('lida não exibe o ponto azul', () => {
      render(<NotificationCard {...baseProps} isRead />);
      expect(screen.queryByTestId('unread-dot')).not.toBeInTheDocument();
      expect(screen.getByRole('article').className).toContain('read');
    });
  });

  describe('Ícones (ReactNode)', () => {
    it('injeta o ícone customizado no lugar do padrão', () => {
      render(
        <NotificationCard
          {...baseProps}
          icon={<svg data-testid="custom-icon" viewBox="0 0 24 24" />}
        />,
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('ícone fica oculto para leitores de tela', () => {
      const { container } = render(<NotificationCard {...baseProps} />);
      expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });
  });

  describe('Link e ações', () => {
    it('com linkHref renderiza um link e dispara onLinkClick', async () => {
      const onLinkClick = vi.fn((event) => event.preventDefault());
      render(
        <NotificationCard
          {...baseProps}
          linkLabel="ver detalhes"
          linkHref="#detalhes"
          onLinkClick={onLinkClick}
        />,
      );
      await userEvent.click(screen.getByRole('link', { name: 'ver detalhes' }));
      expect(onLinkClick).toHaveBeenCalledTimes(1);
    });

    it('sem linkHref renderiza um botão (ação, não navegação)', async () => {
      const onLinkClick = vi.fn();
      render(<NotificationCard {...baseProps} linkLabel="mostrar todos" onLinkClick={onLinkClick} />);
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name: 'mostrar todos' }));
      expect(onLinkClick).toHaveBeenCalledTimes(1);
    });

    it('renderiza o slot de ações', () => {
      render(<NotificationCard {...baseProps} actions={<button type="button">Pagar</button>} />);
      expect(screen.getByRole('button', { name: 'Pagar' })).toBeInTheDocument();
    });
  });

  describe('Menu e acessibilidade', () => {
    it('gatilho tem aria-label, aria-haspopup e aria-expanded=false', () => {
      render(<NotificationCard {...baseProps} />);
      const trigger = screen.getByRole('button', { name: 'Mais opções da notificação' });
      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('abre o menu com role="menu" e itens role="menuitem"', async () => {
      render(<NotificationCard {...baseProps} />);
      await userEvent.click(screen.getByRole('button', { name: 'Mais opções da notificação' }));
      expect(screen.getByRole('menu')).toBeInTheDocument();
      expect(screen.getAllByRole('menuitem')).toHaveLength(2);
      expect(screen.getByRole('button', { name: 'Mais opções da notificação' })).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('item de leitura alterna conforme isRead', async () => {
      const { rerender } = render(<NotificationCard {...baseProps} isMenuOpen />);
      expect(screen.getByRole('menuitem', { name: 'Marcar como lida' })).toBeInTheDocument();
      rerender(<NotificationCard {...baseProps} isRead isMenuOpen />);
      expect(screen.getByRole('menuitem', { name: 'Marcar como não lida' })).toBeInTheDocument();
    });

    it('dispara onToggleRead e fecha o menu', async () => {
      const onToggleRead = vi.fn();
      render(<NotificationCard {...baseProps} onToggleRead={onToggleRead} />);
      await userEvent.click(screen.getByRole('button', { name: 'Mais opções da notificação' }));
      await userEvent.click(screen.getByRole('menuitem', { name: 'Marcar como lida' }));
      expect(onToggleRead).toHaveBeenCalledTimes(1);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('dispara onDismiss', async () => {
      const onDismiss = vi.fn();
      render(<NotificationCard {...baseProps} onDismiss={onDismiss} />);
      await userEvent.click(screen.getByRole('button', { name: 'Mais opções da notificação' }));
      await userEvent.click(screen.getByRole('menuitem', { name: 'Dispensar notificação' }));
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it('aceita itens de menu customizados', async () => {
      const onSelect = vi.fn();
      render(
        <NotificationCard
          {...baseProps}
          isMenuOpen
          menuItems={[{ id: 'a', label: 'Arquivar', onSelect }]}
        />,
      );
      await userEvent.click(screen.getByRole('menuitem', { name: 'Arquivar' }));
      expect(onSelect).toHaveBeenCalledTimes(1);
    });

    it('Escape fecha o menu', async () => {
      render(<NotificationCard {...baseProps} />);
      const trigger = screen.getByRole('button', { name: 'Mais opções da notificação' });
      await userEvent.click(trigger);
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{Escape}');
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('ArrowDown no gatilho abre o menu e foca o primeiro item', async () => {
      render(<NotificationCard {...baseProps} />);
      screen.getByRole('button', { name: 'Mais opções da notificação' }).focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('menu')).toBeInTheDocument();
      const first = await screen.findByRole('menuitem', { name: 'Marcar como lida' });
      await waitFor(() => expect(first).toHaveFocus());
    });

    it('ArrowDown navega entre os itens do menu', async () => {
      render(<NotificationCard {...baseProps} />);
      screen.getByRole('button', { name: 'Mais opções da notificação' }).focus();
      await userEvent.keyboard('{ArrowDown}');
      const first = await screen.findByRole('menuitem', { name: 'Marcar como lida' });
      await waitFor(() => expect(first).toHaveFocus());
      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('menuitem', { name: 'Dispensar notificação' })).toHaveFocus();
    });

    it('clique fora fecha o menu', async () => {
      render(
        <div>
          <button type="button">fora</button>
          <NotificationCard {...baseProps} />
        </div>,
      );
      await userEvent.click(screen.getByRole('button', { name: 'Mais opções da notificação' }));
      await userEvent.click(screen.getByRole('button', { name: 'fora' }));
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('chama onMenuOpenChange', async () => {
      const onMenuOpenChange = vi.fn();
      render(<NotificationCard {...baseProps} onMenuOpenChange={onMenuOpenChange} />);
      await userEvent.click(screen.getByRole('button', { name: 'Mais opções da notificação' }));
      expect(onMenuOpenChange).toHaveBeenCalledWith(true);
    });
  });
});
