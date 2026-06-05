import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProdutosOlistIcons } from './ProdutosOlistIcons';
import type { ProdutoOlist } from './ProdutosOlistIcons';

const ALL_PRODUCTS: ProdutoOlist[] = [
  'Conta Digital',
  'Crédito',
  'Agentes de IA',
  'Ecommerce',
  'Sistema ERP',
  'Envios',
  'Sistema PDV',
  'Hub de Integração',
];

describe('ProdutosOlistIcons', () => {
  describe('Renderização básica', () => {
    it('renderiza sem erros com as props padrão', () => {
      render(<ProdutosOlistIcons product="Conta Digital" />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('aplica aria-label padrão com o nome do produto', () => {
      render(<ProdutosOlistIcons product="Sistema ERP" />);
      expect(screen.getByRole('img', { name: 'Sistema ERP' })).toBeInTheDocument();
    });

    it('aceita aria-label customizado', () => {
      render(<ProdutosOlistIcons product="Envios" aria-label="Módulo de envios e logística" />);
      expect(screen.getByRole('img', { name: 'Módulo de envios e logística' })).toBeInTheDocument();
    });

    it('aplica className externo', () => {
      render(<ProdutosOlistIcons product="Crédito" className="minha-classe" />);
      expect(screen.getByRole('img').classList.contains('minha-classe')).toBe(true);
    });
  });

  describe('Atributos de estado e tema', () => {
    it('define data-state="default" por padrão', () => {
      render(<ProdutosOlistIcons product="Ecommerce" />);
      expect(screen.getByRole('img')).toHaveAttribute('data-state', 'default');
    });

    it('define data-state="active" quando state="active"', () => {
      render(<ProdutosOlistIcons product="Ecommerce" state="active" />);
      expect(screen.getByRole('img')).toHaveAttribute('data-state', 'active');
    });

    it('define data-theme="dark" por padrão', () => {
      render(<ProdutosOlistIcons product="Envios" />);
      expect(screen.getByRole('img')).toHaveAttribute('data-theme', 'dark');
    });

    it('define data-theme="light" quando theme="light"', () => {
      render(<ProdutosOlistIcons product="Envios" theme="light" />);
      expect(screen.getByRole('img')).toHaveAttribute('data-theme', 'light');
    });
  });

  describe('Todos os produtos renderizam sem erros', () => {
    ALL_PRODUCTS.forEach((product) => {
      it(`renderiza "${product}" em todos os 4 estados/temas`, () => {
        const { unmount } = render(<ProdutosOlistIcons product={product} state="default" theme="dark" />);
        expect(screen.getByRole('img')).toBeInTheDocument();
        unmount();

        const { unmount: u2 } = render(<ProdutosOlistIcons product={product} state="active" theme="dark" />);
        expect(screen.getByRole('img')).toBeInTheDocument();
        u2();

        const { unmount: u3 } = render(<ProdutosOlistIcons product={product} state="default" theme="light" />);
        expect(screen.getByRole('img')).toBeInTheDocument();
        u3();

        render(<ProdutosOlistIcons product={product} state="active" theme="light" />);
        expect(screen.getByRole('img')).toBeInTheDocument();
      });
    });
  });

  describe('Gradiente no estado active + dark', () => {
    it('aplica a classe pillActiveGradient no estado active + dark', () => {
      render(<ProdutosOlistIcons product="Conta Digital" state="active" theme="dark" />);
      const el = screen.getByRole('img');
      expect(el.classList.contains('pillActiveGradient')).toBe(true);
    });

    it('não aplica pillActiveGradient no estado default + dark', () => {
      render(<ProdutosOlistIcons product="Conta Digital" state="default" theme="dark" />);
      const el = screen.getByRole('img');
      expect(el.classList.contains('pillActiveGradient')).toBe(false);
    });

    it('não aplica pillActiveGradient no tema light independente do estado', () => {
      render(<ProdutosOlistIcons product="Conta Digital" state="active" theme="light" />);
      const el = screen.getByRole('img');
      expect(el.classList.contains('pillActiveGradient')).toBe(false);
    });
  });

  describe('Acessibilidade', () => {
    it('tem role="img" em todos os produtos', () => {
      ALL_PRODUCTS.forEach((product) => {
        const { unmount } = render(<ProdutosOlistIcons product={product} />);
        expect(screen.getByRole('img')).toBeInTheDocument();
        unmount();
      });
    });

    it('imagens internas têm alt="" (decorativas)', () => {
      const { container } = render(<ProdutosOlistIcons product="Sistema ERP" />);
      const imgs = container.querySelectorAll('img');
      imgs.forEach((img) => {
        expect(img.getAttribute('alt')).toBe('');
      });
    });
  });
});
