import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card', () => {
  describe('Renderização básica', () => {
    it('renderiza com o título fornecido', () => {
      render(<Card titleText="Meu Card" />);
      expect(screen.getByText('Meu Card')).toBeInTheDocument();
    });

    it('aplica className externo sem sobrescrever classes do componente', () => {
      const { container } = render(<Card className="custom" />);
      expect(container.firstChild).toHaveClass('custom');
    });

    it('repassa atributos HTML nativos corretamente', () => {
      render(<Card data-testid="meu-card" />);
      expect(screen.getByTestId('meu-card')).toBeInTheDocument();
    });
  });

  describe('Variant: simple', () => {
    it('exibe o título', () => {
      render(<Card content="simple" titleText="Título do Card" />);
      expect(screen.getByText('Título do Card')).toBeInTheDocument();
    });

    it('exibe subtitle quando subtitle=true', () => {
      render(<Card subtitle subtitleText="Subtítulo" />);
      expect(screen.getByText('Subtítulo')).toBeInTheDocument();
    });

    it('não exibe subtitle quando subtitle=false', () => {
      render(<Card subtitle={false} subtitleText="Subtítulo" />);
      expect(screen.queryByText('Subtítulo')).not.toBeInTheDocument();
    });

    it('exibe parágrafo quando paragraphText fornecido', () => {
      render(<Card paragraphText="Texto descritivo" />);
      expect(screen.getByText('Texto descritivo')).toBeInTheDocument();
    });

    it('não exibe parágrafo quando paragraphText ausente', () => {
      render(<Card titleText="Sem parágrafo" />);
      expect(screen.queryByText('Texto descritivo')).not.toBeInTheDocument();
    });

    it('exibe caption quando caption=true e captionText fornecido', () => {
      render(<Card caption captionText="Legenda do card" />);
      expect(screen.getByText('Legenda do card')).toBeInTheDocument();
    });

    it('não exibe caption quando caption=false', () => {
      render(<Card caption={false} captionText="Legenda do card" />);
      expect(screen.queryByText('Legenda do card')).not.toBeInTheDocument();
    });

    it('não exibe caption quando captionText ausente mesmo com caption=true', () => {
      render(<Card caption captionText={undefined} />);
      // Apenas título e subtítulo devem existir — sem elemento de caption
      expect(screen.queryAllByRole('paragraph')).toHaveLength(2);
    });
  });

  describe('Variant: slot', () => {
    it('exibe children no variant slot', () => {
      render(
        <Card content="slot">
          <span>Conteúdo customizado</span>
        </Card>
      );
      expect(screen.getByText('Conteúdo customizado')).toBeInTheDocument();
    });

    it('não exibe conteúdo simple quando content=slot', () => {
      render(<Card content="slot" titleText="Não aparece" />);
      expect(screen.queryByText('Não aparece')).not.toBeInTheDocument();
    });
  });

  describe('Media', () => {
    it('não exibe área de mídia quando media não fornecido', () => {
      const { container } = render(<Card />);
      expect(container.querySelector('[aria-hidden="true"]')).not.toBeInTheDocument();
    });

    it('exibe área de mídia quando media fornecido', () => {
      render(<Card media={<img src="test.jpg" alt="Imagem do card" />} />);
      expect(screen.getByAltText('Imagem do card')).toBeInTheDocument();
    });

    it('marca área de mídia como aria-hidden', () => {
      const { container } = render(
        <Card media={<img src="test.jpg" alt="" />} />
      );
      expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });
  });

  describe('Ações', () => {
    it('não exibe ações quando actions=false', () => {
      render(<Card actions={false} primaryLabel="Primário" />);
      expect(screen.queryByText('Primário')).not.toBeInTheDocument();
    });

    it('exibe botão primário quando actions=true', () => {
      render(<Card actions primaryLabel="Confirmar" />);
      expect(screen.getByRole('button', { name: 'Confirmar' })).toBeInTheDocument();
    });

    it('exibe botão secundário quando actions=true e secondaryButton=true', () => {
      render(<Card actions secondaryButton secondaryLabel="Cancelar" />);
      expect(screen.getByRole('button', { name: 'Cancelar' })).toBeInTheDocument();
    });

    it('não exibe botão secundário quando secondaryButton=false', () => {
      render(
        <Card actions secondaryButton={false} secondaryLabel="Cancelar" />
      );
      expect(screen.queryByText('Cancelar')).not.toBeInTheDocument();
    });

    it('chama onPrimaryAction ao clicar no botão primário', async () => {
      const handler = vi.fn();
      render(<Card actions primaryLabel="Salvar" onPrimaryAction={handler} />);
      await userEvent.click(screen.getByRole('button', { name: 'Salvar' }));
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('chama onSecondaryAction ao clicar no botão secundário', async () => {
      const handler = vi.fn();
      render(
        <Card
          actions
          secondaryButton
          secondaryLabel="Voltar"
          onSecondaryAction={handler}
        />
      );
      await userEvent.click(screen.getByRole('button', { name: 'Voltar' }));
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe('Acessibilidade', () => {
    it('área de mídia tem aria-hidden="true"', () => {
      const { container } = render(
        <Card media={<img src="x.jpg" alt="" />} />
      );
      expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });

    it('injeta ReactNode como media corretamente', () => {
      const mediaContent = <span data-testid="custom-media">Media</span>;
      render(<Card media={mediaContent} />);
      expect(screen.getByTestId('custom-media')).toBeInTheDocument();
    });
  });
});
