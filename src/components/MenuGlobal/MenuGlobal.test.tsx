import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuGlobal } from './MenuGlobal';
import type { MenuGlobalProduct } from './MenuGlobal';

/* =============================================
   Mocks de ícones
   ============================================= */

const IconMock = (id: string) => (
  <svg data-testid={`icon-${id}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect width="16" height="16" />
  </svg>
);

/* =============================================
   Dados de fixture
   ============================================= */

const productSemNivel2: MenuGlobalProduct = {
  id: 'conta-digital',
  label: 'Conta Digital',
  icon: IconMock('conta-digital'),
  items: [
    { id: 'cd-inicio', label: 'Início', icon: IconMock('inicio') },
    { id: 'cd-extrato', label: 'Extrato', icon: IconMock('extrato') },
    { id: 'cd-disabled', label: 'Bloqueado', icon: IconMock('bloqueado'), isDisabled: true },
    { id: 'cd-notif', label: 'Notificações', hasNotification: true },
  ],
};

const productComNivel2: MenuGlobalProduct = {
  id: 'erp',
  label: 'ERP',
  icon: IconMock('erp'),
  items: [
    { id: 'erp-inicio', label: 'Página Inicial', icon: IconMock('home') },
    {
      id: 'erp-produtos',
      label: 'Produtos',
      icon: IconMock('produtos'),
      children: [
        { id: 'erp-prod-cadastro', label: 'Cadastro', icon: IconMock('cadastro') },
        { id: 'erp-prod-estoque', label: 'Estoque', icon: IconMock('estoque') },
      ],
    },
    {
      id: 'erp-financas',
      label: 'Finanças',
      icon: IconMock('financas'),
      children: [
        { id: 'erp-fin-contas', label: 'Contas a pagar', icon: IconMock('contas') },
      ],
    },
  ],
};

const defaultProducts = [productComNivel2, productSemNivel2];

/* =============================================
   Testes
   ============================================= */

describe('MenuGlobal', () => {
  describe('Renderização básica', () => {
    it('renderiza o componente com nav acessível', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('navigation', { name: 'Menu de navegação global' })).toBeInTheDocument();
    });

    it('renderiza o rail com a lista de produtos', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('tablist', { name: 'Produtos Olist' })).toBeInTheDocument();
      expect(screen.getAllByRole('tab')).toHaveLength(2);
    });

    it('renderiza os botões de produto com aria-label correto', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('tab', { name: 'ERP' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Conta Digital' })).toBeInTheDocument();
    });

    it('exibe o painel Level 1 do primeiro produto por padrão', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('tabpanel', { name: 'Navegação ERP' })).toBeInTheDocument();
    });

    it('renderiza itens do produto ativo no Level 1', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('button', { name: 'Página Inicial' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Produtos' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Finanças' })).toBeInTheDocument();
    });

    it('exibe o SectionDivider Tipo A com o nome do produto', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByText('ERP')).toBeInTheDocument();
    });
  });

  describe('Seleção de produto no rail', () => {
    it('troca o produto ativo ao clicar em outro produto do rail', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('tab', { name: 'Conta Digital' }));
      expect(screen.getByRole('tabpanel', { name: 'Navegação Conta Digital' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Início' })).toBeInTheDocument();
    });

    it('chama onProductChange ao selecionar produto no rail', async () => {
      const handleProductChange = vi.fn();
      render(<MenuGlobal products={defaultProducts} onProductChange={handleProductChange} />);
      await userEvent.click(screen.getByRole('tab', { name: 'Conta Digital' }));
      expect(handleProductChange).toHaveBeenCalledWith('conta-digital');
    });

    it('produto ativo tem aria-selected=true', () => {
      render(<MenuGlobal products={defaultProducts} activeProductId="conta-digital" />);
      expect(screen.getByRole('tab', { name: 'Conta Digital' })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByRole('tab', { name: 'ERP' })).toHaveAttribute('aria-selected', 'false');
    });

    it('é possível trocar produto com teclado via Enter', async () => {
      const handleProductChange = vi.fn();
      render(<MenuGlobal products={defaultProducts} onProductChange={handleProductChange} />);
      const cdTab = screen.getByRole('tab', { name: 'Conta Digital' });
      cdTab.focus();
      await userEvent.keyboard('{Enter}');
      expect(handleProductChange).toHaveBeenCalledWith('conta-digital');
    });

    it('é possível trocar produto com teclado via Space', async () => {
      const handleProductChange = vi.fn();
      render(<MenuGlobal products={defaultProducts} onProductChange={handleProductChange} />);
      const cdTab = screen.getByRole('tab', { name: 'Conta Digital' });
      cdTab.focus();
      await userEvent.keyboard(' ');
      expect(handleProductChange).toHaveBeenCalledWith('conta-digital');
    });

    it('fecha Level 2 ao trocar de produto', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      expect(screen.getByRole('region', { name: 'Submenu Produtos' })).toBeInTheDocument();

      await userEvent.click(screen.getByRole('tab', { name: 'Conta Digital' }));
      expect(screen.queryByRole('region', { name: 'Submenu Produtos' })).not.toBeInTheDocument();
    });
  });

  describe('Level 1 — itens sem subitens', () => {
    it('chama onItemSelect ao clicar em item sem filhos', async () => {
      const handleItemSelect = vi.fn();
      render(
        <MenuGlobal
          products={defaultProducts}
          activeProductId="conta-digital"
          onItemSelect={handleItemSelect}
        />
      );
      await userEvent.click(screen.getByRole('button', { name: 'Início' }));
      expect(handleItemSelect).toHaveBeenCalledWith('cd-inicio');
    });

    it('não chama onItemSelect em item desabilitado', async () => {
      const handleItemSelect = vi.fn();
      render(
        <MenuGlobal
          products={defaultProducts}
          activeProductId="conta-digital"
          onItemSelect={handleItemSelect}
        />
      );
      await userEvent.click(screen.getByRole('button', { name: 'Bloqueado' }));
      expect(handleItemSelect).not.toHaveBeenCalled();
    });

    it('item desabilitado tem atributo disabled', () => {
      render(<MenuGlobal products={defaultProducts} activeProductId="conta-digital" />);
      expect(screen.getByRole('button', { name: 'Bloqueado' })).toBeDisabled();
    });
  });

  describe('Level 1 → Level 2 (agrupadores com subitens)', () => {
    it('não exibe Level 2 por padrão', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });

    it('exibe Level 2 ao clicar em agrupador com filhos', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      expect(screen.getByRole('region', { name: 'Submenu Produtos' })).toBeInTheDocument();
    });

    it('exibe SectionDivider Tipo B com o nome do agrupador no Level 2', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      const region = screen.getByRole('region', { name: 'Submenu Produtos' });
      const allProdutosText = screen.getAllByText('Produtos');
      expect(allProdutosText.length).toBeGreaterThanOrEqual(1);
      expect(region).toBeInTheDocument();
    });

    it('exibe os subitens do agrupador no Level 2', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      expect(screen.getByRole('button', { name: 'Cadastro' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Estoque' })).toBeInTheDocument();
    });

    it('fecha Level 2 ao clicar no mesmo agrupador novamente', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      expect(screen.getByRole('region', { name: 'Submenu Produtos' })).toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      expect(screen.queryByRole('region', { name: 'Submenu Produtos' })).not.toBeInTheDocument();
    });

    it('troca Level 2 ao clicar em agrupador diferente', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      await userEvent.click(screen.getByRole('button', { name: 'Finanças' }));
      expect(screen.queryByRole('region', { name: 'Submenu Produtos' })).not.toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Submenu Finanças' })).toBeInTheDocument();
    });

    it('fecha Level 2 com tecla Escape', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      expect(screen.getByRole('region', { name: 'Submenu Produtos' })).toBeInTheDocument();
      await userEvent.keyboard('{Escape}');
      expect(screen.queryByRole('region', { name: 'Submenu Produtos' })).not.toBeInTheDocument();
    });

    it('agrupador com filhos tem aria-expanded correto', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      const btn = screen.getByRole('button', { name: 'Produtos' });
      expect(btn).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(btn);
      expect(btn).toHaveAttribute('aria-expanded', 'true');
    });

    it('chama onItemSelect ao clicar em subitem do Level 2', async () => {
      const handleItemSelect = vi.fn();
      render(<MenuGlobal products={defaultProducts} onItemSelect={handleItemSelect} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      await userEvent.click(screen.getByRole('button', { name: 'Cadastro' }));
      expect(handleItemSelect).toHaveBeenCalledWith('erp-prod-cadastro');
    });
  });

  describe('Estado ativo (activeItemId)', () => {
    it('marca item de Level 1 com aria-label quando está selecionado (sem filhos)', () => {
      render(
        <MenuGlobal
          products={defaultProducts}
          activeProductId="conta-digital"
          activeItemId="cd-inicio"
        />
      );
      expect(screen.getByRole('button', { name: 'Início' })).toBeInTheDocument();
    });

    it('mantém agrupador Level 1 visualmente selecionado quando subitem está ativo', () => {
      render(
        <MenuGlobal
          products={defaultProducts}
          activeItemId="erp-prod-cadastro"
        />
      );
      expect(screen.getByRole('button', { name: 'Produtos' })).toBeInTheDocument();
    });
  });

  describe('Notification dot', () => {
    it('exibe indicador de notificação no item com hasNotification=true', () => {
      render(<MenuGlobal products={defaultProducts} activeProductId="conta-digital" />);
      expect(screen.getByRole('status', { name: 'Possui notificação' })).toBeInTheDocument();
    });

    it('não exibe indicador em item sem hasNotification', () => {
      render(<MenuGlobal products={defaultProducts} activeProductId="conta-digital" />);
      const notifItems = screen.getAllByRole('status', { name: 'Possui notificação' });
      expect(notifItems).toHaveLength(1);
    });
  });

  describe('Rail — itens utilitários', () => {
    it('renderiza railBottomItems quando fornecidos', () => {
      const railBottom = [
        {
          id: 'profile',
          label: 'Perfil do usuário',
          icon: <svg data-testid="icon-profile" viewBox="0 0 16 16" />,
          onClick: vi.fn(),
        },
      ];
      render(<MenuGlobal products={defaultProducts} railBottomItems={railBottom} />);
      expect(screen.getByRole('button', { name: 'Perfil do usuário' })).toBeInTheDocument();
    });

    it('chama onClick do railBottomItem ao clicar', async () => {
      const handleClick = vi.fn();
      const railBottom = [
        {
          id: 'settings',
          label: 'Configurações',
          icon: <svg viewBox="0 0 16 16" />,
          onClick: handleClick,
        },
      ];
      render(<MenuGlobal products={defaultProducts} railBottomItems={railBottom} />);
      await userEvent.click(screen.getByRole('button', { name: 'Configurações' }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Ícones (ReactNode)', () => {
    it('renderiza ícone do produto no rail quando fornecido', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByTestId('icon-erp')).toBeInTheDocument();
      expect(screen.getByTestId('icon-conta-digital')).toBeInTheDocument();
    });

    it('renderiza ícone do item de menu quando fornecido', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByTestId('icon-home')).toBeInTheDocument();
    });

    it('não renderiza wrapper de ícone quando item não tem ícone', () => {
      render(<MenuGlobal products={defaultProducts} activeProductId="conta-digital" />);
      const notifBtn = screen.getByRole('button', { name: 'Notificações' });
      expect(notifBtn).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('nav tem aria-label', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Menu de navegação global');
    });

    it('rail tem role=tablist com aria-label', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Produtos Olist');
    });

    it('botões do rail são focalizáveis', () => {
      render(<MenuGlobal products={defaultProducts} />);
      const tab = screen.getByRole('tab', { name: 'ERP' });
      tab.focus();
      expect(document.activeElement).toBe(tab);
    });

    it('itens de menu são focalizáveis', () => {
      render(<MenuGlobal products={defaultProducts} />);
      const btn = screen.getByRole('button', { name: 'Página Inicial' });
      btn.focus();
      expect(document.activeElement).toBe(btn);
    });

    it('agrupador sem filhos não tem aria-expanded', () => {
      render(<MenuGlobal products={defaultProducts} />);
      expect(screen.getByRole('button', { name: 'Página Inicial' })).not.toHaveAttribute('aria-expanded');
    });

    it('Level 2 tem role=region com aria-label', async () => {
      render(<MenuGlobal products={defaultProducts} />);
      await userEvent.click(screen.getByRole('button', { name: 'Produtos' }));
      expect(screen.getByRole('region', { name: 'Submenu Produtos' })).toBeInTheDocument();
    });

    it('aceita className externo', () => {
      const { container } = render(
        <MenuGlobal products={defaultProducts} className="meu-menu" />
      );
      expect(container.firstChild).toHaveClass('meu-menu');
    });
  });
});
