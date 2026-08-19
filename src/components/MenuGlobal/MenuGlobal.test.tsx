import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MenuGlobal } from './MenuGlobal';
import type { ProdutoOlist } from '../ProdutosOlistIcons';

// ResizeObserver não existe em jsdom — mock que captura o callback para disparo manual
let resizeCallback: (() => void) | null = null;
vi.stubGlobal('ResizeObserver', class {
  constructor(cb: () => void) { resizeCallback = cb; }
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
});

beforeEach(() => { resizeCallback = null; });

describe('MenuGlobal', () => {
  it('renderiza todos os 8 produtos por padrão', () => {
    render(<MenuGlobal />);
    expect(screen.getByRole('menuitem', { name: 'Sistema ERP' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Hub de Integração' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Sistema PDV' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Conta Digital' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Envios' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Ecommerce' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Crédito' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Agentes de IA' })).toBeInTheDocument();
  });

  it('renderiza apenas os produtos passados via prop', () => {
    const produtos: ProdutoOlist[] = ['Sistema ERP', 'Envios'];
    render(<MenuGlobal produtos={produtos} />);
    expect(screen.getByRole('menuitem', { name: 'Sistema ERP' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Envios' })).toBeInTheDocument();
    expect(screen.queryByRole('menuitem', { name: 'Conta Digital' })).not.toBeInTheDocument();
  });

  it('renderiza os 3 itens do rodapé', () => {
    render(<MenuGlobal />);
    expect(screen.getByRole('menuitem', { name: 'Menu do usuário' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Notificações' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Central de Ajuda' })).toBeInTheDocument();
  });

  it('marca aria-current no produto selecionado', () => {
    render(<MenuGlobal produtoSelecionado="Sistema ERP" />);
    expect(screen.getByRole('menuitem', { name: 'Sistema ERP' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('menuitem', { name: 'Envios' })).not.toHaveAttribute('aria-current');
  });

  it('marca aria-current no item de rodapé selecionado', () => {
    render(<MenuGlobal produtoSelecionado="Notificacoes" />);
    expect(screen.getByRole('menuitem', { name: 'Notificações' })).toHaveAttribute('aria-current', 'page');
  });

  it('exibe badge de notificação quando notificacoesPendentes=true', () => {
    render(<MenuGlobal notificacoesPendentes />);
    expect(screen.getByRole('menuitem', { name: 'Notificações (pendentes)' })).toBeInTheDocument();
  });

  it('não exibe badge de notificação por padrão', () => {
    render(<MenuGlobal />);
    expect(screen.getByRole('menuitem', { name: 'Notificações' })).toBeInTheDocument();
    expect(screen.queryByRole('menuitem', { name: 'Notificações (pendentes)' })).not.toBeInTheDocument();
  });

  it('exibe monograma de avatarLabel', () => {
    render(<MenuGlobal avatarLabel="AB" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('trunca avatarLabel para 2 caracteres', () => {
    render(<MenuGlobal avatarLabel="ABCDE" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('exibe imagem de avatar quando avatarImageUrl é fornecida', () => {
    render(<MenuGlobal avatarImageUrl="https://example.com/avatar.png" />);
    const avatarBtn = screen.getByRole('menuitem', { name: 'Menu do usuário' });
    const img = avatarBtn.querySelector('img');
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.png');
  });

  it('chama onNavigate ao clicar em produto', async () => {
    const onNavigate = vi.fn();
    render(<MenuGlobal onNavigate={onNavigate} />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Sistema ERP' }));
    expect(onNavigate).toHaveBeenCalledWith('Sistema ERP');
  });

  it('chama onNavigate ao clicar em item de rodapé', async () => {
    const onNavigate = vi.fn();
    render(<MenuGlobal onNavigate={onNavigate} />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Central de Ajuda' }));
    expect(onNavigate).toHaveBeenCalledWith('Central de Ajuda');
  });

  it('tem landmark nav com aria-label adequado', () => {
    render(<MenuGlobal />);
    expect(screen.getByRole('navigation', { name: 'Navegação global' })).toBeInTheDocument();
  });

  it('listas de produtos e usuário têm role menu com aria-label', () => {
    render(<MenuGlobal />);
    expect(screen.getByRole('menu', { name: 'Produtos' })).toBeInTheDocument();
    expect(screen.getByRole('menu', { name: 'Configurações do usuário' })).toBeInTheDocument();
  });

  it('aceita className customizado', () => {
    render(<MenuGlobal className="custom-class" />);
    expect(screen.getByRole('navigation')).toHaveClass('custom-class');
  });

  it('aplica classe containerComPanel quando panelAdjacenteAberto=true', () => {
    render(<MenuGlobal panelAdjacenteAberto />);
    // A classe CSS module tem nome hasheado; verificamos via atributo aria + presença de classe extra
    const nav = screen.getByRole('navigation', { name: 'Navegação global' });
    // Deve ter mais de uma classe (container + containerComPanel)
    expect(nav.className.split(' ').length).toBeGreaterThan(1);
  });

  it('exibe logo da empresa quando companyLogoUrl é fornecida', () => {
    render(<MenuGlobal companyLogoUrl="https://example.com/logo.png" />);
    const avatarBtn = screen.getByRole('menuitem', { name: 'Menu do usuário' });
    const imgs = avatarBtn.querySelectorAll('img');
    const logoImg = Array.from(imgs).find((img) => img.getAttribute('src') === 'https://example.com/logo.png');
    expect(logoImg).toBeInTheDocument();
  });

  it('exibe monograma da empresa quando companyLogoLabel é fornecida', () => {
    render(<MenuGlobal companyLogoLabel="OL" />);
    expect(screen.getByText('OL')).toBeInTheDocument();
  });

  it('não exibe logo da empresa quando nem companyLogoUrl nem companyLogoLabel são fornecidas', () => {
    render(<MenuGlobal avatarLabel="PN" />);
    const avatarBtn = screen.getByRole('menuitem', { name: 'Menu do usuário' });
    // Apenas o círculo do usuário deve estar presente (sem .avatarProfile)
    expect(avatarBtn.querySelectorAll('img')).toHaveLength(0);
    expect(screen.getByText('PN')).toBeInTheDocument();
  });

  describe('9dots — overflow de produtos', () => {
    const renderComOverflow = async (alturaPixels: number, extra?: Parameters<typeof MenuGlobal>[0]) => {
      // Mock clientHeight ANTES do render para que o ResizeObserver já leia o valor correto
      Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
        configurable: true,
        get() {
          return this.getAttribute('aria-label') === 'Produtos' ? alturaPixels : 0;
        },
      });
      const result = render(<MenuGlobal {...extra} />);
      // Dispara o callback do ResizeObserver capturado pelo mock
      await act(async () => { resizeCallback?.(); });
      return result;
    };

    it('não exibe botão 9dots quando listHeight=0 (estado inicial)', () => {
      render(<MenuGlobal />);
      expect(screen.queryByRole('menuitem', { name: 'Soluções Olist' })).not.toBeInTheDocument();
    });

    it('exibe botão 9dots quando a altura não comporta todos os produtos', async () => {
      // 300px → maxVisible = floor((300-16-80+8)/52) = floor(212/52) = 4
      // hasOverflow=true (8 produtos > 4), exibe 3 produtos + 1 slot 9dots
      await renderComOverflow(300);
      expect(screen.getByRole('menuitem', { name: 'Soluções Olist' })).toBeInTheDocument();
    });

    it('não exibe botão 9dots quando a altura comporta todos os produtos', async () => {
      // 700px → maxVisible = floor((700-16-80+8)/52) = floor(612/52) = 11 ≥ 8 produtos
      await renderComOverflow(700);
      expect(screen.queryByRole('menuitem', { name: 'Soluções Olist' })).not.toBeInTheDocument();
    });

    it('oculta produtos do overflow da lista principal', async () => {
      // 300px → visibleCount=3, produto índice 3 (Conta Digital) deve sumir da lista
      await renderComOverflow(300);
      expect(screen.queryByRole('menuitem', { name: 'Conta Digital' })).not.toBeInTheDocument();
    });

    it('abre flyout ao clicar no botão 9dots e exibe produtos do overflow', async () => {
      const user = userEvent.setup();
      await renderComOverflow(300);
      await user.click(screen.getByRole('menuitem', { name: 'Soluções Olist' }));
      // Produtos do overflow devem aparecer no flyout
      expect(screen.getByRole('dialog', { name: 'Soluções Olist' })).toBeInTheDocument();
    });

    it('marca 9dots como aria-current=page quando o flyout está aberto', async () => {
      const user = userEvent.setup();
      await renderComOverflow(300);
      const btn = screen.getByRole('menuitem', { name: 'Soluções Olist' });
      await user.click(btn);
      expect(btn).toHaveAttribute('aria-current', 'page');
    });

    it('remove aria-current do 9dots quando o flyout é fechado', async () => {
      const user = userEvent.setup();
      await renderComOverflow(300);
      const btn = screen.getByRole('menuitem', { name: 'Soluções Olist' });
      await user.click(btn); // abre
      await user.click(btn); // fecha
      expect(btn).not.toHaveAttribute('aria-current');
    });

    it('fecha flyout ao clicar novamente no botão 9dots', async () => {
      const user = userEvent.setup();
      await renderComOverflow(300);
      const btn = screen.getByRole('menuitem', { name: 'Soluções Olist' });
      await user.click(btn);
      await user.click(btn);
      expect(screen.queryByRole('dialog', { name: 'Soluções Olist' })).not.toBeInTheDocument();
    });

    it('fecha flyout ao pressionar Escape', async () => {
      const user = userEvent.setup();
      await renderComOverflow(300);
      await user.click(screen.getByRole('menuitem', { name: 'Soluções Olist' }));
      await user.keyboard('{Escape}');
      expect(screen.queryByRole('dialog', { name: 'Soluções Olist' })).not.toBeInTheDocument();
    });

    it('marca 9dots como aria-current=page quando produto do overflow está ativo', async () => {
      // Conta Digital (índice 3) fica no overflow com 300px; se está selecionado, 9dots tem aria-current
      await renderComOverflow(300, { produtoSelecionado: 'Conta Digital' });
      expect(screen.getByRole('menuitem', { name: 'Soluções Olist' })).toHaveAttribute('aria-current', 'page');
    });

    it('chama onNavigate ao clicar em produto no flyout', async () => {
      const onNavigate = vi.fn();
      const user = userEvent.setup();
      await renderComOverflow(300, { onNavigate });
      await user.click(screen.getByRole('menuitem', { name: 'Soluções Olist' }));
      // Clica no primeiro produto do overflow (Conta Digital, índice 3)
      await user.click(screen.getByRole('menuitem', { name: 'Conta Digital' }));
      expect(onNavigate).toHaveBeenCalledWith('Conta Digital');
    });
  });
});
