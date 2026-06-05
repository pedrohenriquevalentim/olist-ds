import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  describe('Renderização básica', () => {
    it('renderiza sem erros com props padrão', () => {
      const { container } = render(<Logo />);
      expect(container.firstChild).toBeTruthy();
    });

    it('aplica className externo sem remover classes do componente', () => {
      const { container } = render(<Logo className="minha-classe" />);
      const el = container.firstChild as HTMLElement;
      expect(el.classList.contains('minha-classe')).toBe(true);
      expect(el.classList.contains('logo')).toBe(true);
    });

    it('repassa atributos HTML nativos ao container', () => {
      render(<Logo data-testid="logo-olist" />);
      expect(screen.getByTestId('logo-olist')).toBeInTheDocument();
    });
  });

  describe('Variante: default', () => {
    it('aplica a classe "default" quando size="default"', () => {
      const { container } = render(<Logo size="default" />);
      expect((container.firstChild as HTMLElement).classList.contains('default')).toBe(true);
    });

    it('aplica "default" quando size não é fornecido', () => {
      const { container } = render(<Logo />);
      expect((container.firstChild as HTMLElement).classList.contains('default')).toBe(true);
    });

    it('renderiza 3 imagens: toggle, círculo e wordmark', () => {
      const { container } = render(<Logo size="default" />);
      expect(container.querySelectorAll('img')).toHaveLength(3);
    });

    it('inclui o wrapper do círculo laranja', () => {
      const { container } = render(<Logo size="default" />);
      expect(container.querySelector('.circleWrapper')).toBeInTheDocument();
    });

    it('inclui o wrapper do toggle e do wordmark', () => {
      const { container } = render(<Logo size="default" />);
      expect(container.querySelector('.toggleWrapper')).toBeInTheDocument();
      expect(container.querySelector('.wordmarkWrapper')).toBeInTheDocument();
    });
  });

  describe('Variante: simple', () => {
    it('aplica a classe "simple" quando size="simple"', () => {
      const { container } = render(<Logo size="simple" />);
      expect((container.firstChild as HTMLElement).classList.contains('simple')).toBe(true);
    });

    it('renderiza apenas 2 imagens: toggle e wordmark, sem círculo', () => {
      const { container } = render(<Logo size="simple" />);
      expect(container.querySelectorAll('img')).toHaveLength(2);
    });

    it('não renderiza o wrapper do círculo laranja', () => {
      const { container } = render(<Logo size="simple" />);
      expect(container.querySelector('.circleWrapper')).not.toBeInTheDocument();
    });

    it('inclui toggle e wordmark', () => {
      const { container } = render(<Logo size="simple" />);
      expect(container.querySelector('.toggleWrapper')).toBeInTheDocument();
      expect(container.querySelector('.wordmarkWrapper')).toBeInTheDocument();
    });
  });

  describe('Variante: symbol', () => {
    it('aplica a classe "symbol" quando size="symbol"', () => {
      const { container } = render(<Logo size="symbol" />);
      expect((container.firstChild as HTMLElement).classList.contains('symbol')).toBe(true);
    });

    it('renderiza 2 imagens: toggle+base e círculo', () => {
      const { container } = render(<Logo size="symbol" />);
      expect(container.querySelectorAll('img')).toHaveLength(2);
    });

    it('inclui o wrapper do símbolo', () => {
      const { container } = render(<Logo size="symbol" />);
      expect(container.querySelector('.symbolWrapper')).toBeInTheDocument();
    });

    it('inclui o círculo dentro do wrapper do símbolo', () => {
      const { container } = render(<Logo size="symbol" />);
      const symbolWrapper = container.querySelector('.symbolWrapper');
      expect(symbolWrapper?.querySelector('.circleWrapper')).toBeInTheDocument();
    });

    it('não renderiza o wordmark', () => {
      const { container } = render(<Logo size="symbol" />);
      expect(container.querySelector('.wordmarkWrapper')).not.toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('tem role="img"', () => {
      render(<Logo />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('tem aria-label padrão "Logo Olist"', () => {
      render(<Logo />);
      expect(screen.getByRole('img', { name: 'Logo Olist' })).toBeInTheDocument();
    });

    it('aceita aria-label personalizado', () => {
      render(<Logo aria-label="Logotipo da empresa" />);
      expect(screen.getByRole('img', { name: 'Logotipo da empresa' })).toBeInTheDocument();
    });

    it('imagens internas têm alt="" (decorativas)', () => {
      const { container } = render(<Logo size="default" />);
      const imgs = container.querySelectorAll('img');
      imgs.forEach((img) => {
        expect(img.getAttribute('alt')).toBe('');
      });
    });
  });

  describe('Inner container', () => {
    it('usa fullInner para variantes default e simple', () => {
      const { container: d } = render(<Logo size="default" />);
      const { container: s } = render(<Logo size="simple" />);
      expect(d.querySelector('.fullInner')).toBeInTheDocument();
      expect(s.querySelector('.fullInner')).toBeInTheDocument();
    });

    it('usa squareInner para a variante symbol', () => {
      const { container } = render(<Logo size="symbol" />);
      expect(container.querySelector('.squareInner')).toBeInTheDocument();
    });
  });
});
