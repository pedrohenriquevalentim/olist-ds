import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { InputSelect } from './InputSelect';
import type { InputSelectOption } from './InputSelect';

const mockOptions: InputSelectOption[] = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais', disabled: true },
  { value: 'rs', label: 'Rio Grande do Sul' },
];

const TooltipIconMock = (
  <svg data-testid="tooltip-icon" viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="7" />
  </svg>
);

const ChevronIconMock = (
  <svg data-testid="chevron-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 6l4 4 4-4" />
  </svg>
);

const CheckIconMock = (
  <svg data-testid="check-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8l4 4 6-6" />
  </svg>
);

describe('InputSelect', () => {
  describe('Renderização básica', () => {
    it('renderiza o trigger com role="combobox"', () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('exibe o placeholder quando nenhum valor está selecionado', () => {
      render(
        <InputSelect
          options={mockOptions}
          placeholder="Selecione um estado"
          aria-label="Estado"
        />,
      );
      expect(screen.getByRole('combobox')).toHaveTextContent('Selecione um estado');
    });

    it('exibe o label quando fornecido', () => {
      render(<InputSelect options={mockOptions} label="Estado" />);
      expect(screen.getByLabelText('Estado')).toBeInTheDocument();
    });

    it('exibe o texto de suporte quando hasSupport=true e supportText fornecido', () => {
      render(
        <InputSelect
          options={mockOptions}
          hasSupport
          supportText="Selecione seu estado"
          aria-label="Estado"
        />,
      );
      expect(screen.getByText('Selecione seu estado')).toBeInTheDocument();
    });

    it('não exibe a lista por padrão (estado fechado)', () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('aplica className externo no wrapper', () => {
      const { container } = render(
        <InputSelect options={mockOptions} aria-label="Estado" className="minha-classe" />,
      );
      expect(container.firstChild).toHaveClass('minha-classe');
    });
  });

  describe('Abertura e fechamento', () => {
    it('abre a lista ao clicar no trigger', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('fecha a lista ao clicar no trigger novamente', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      const trigger = screen.getByRole('combobox');
      await userEvent.click(trigger);
      await userEvent.click(trigger);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('fecha a lista ao pressionar Escape', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.keyboard('{Escape}');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('fecha ao clicar fora do componente', async () => {
      render(
        <div>
          <InputSelect options={mockOptions} aria-label="Estado" />
          <button type="button">Fora</button>
        </div>,
      );
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      await userEvent.click(screen.getByText('Fora'));
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Single select', () => {
    it('exibe o texto do item selecionado no trigger', () => {
      render(<InputSelect options={mockOptions} value="sp" aria-label="Estado" />);
      expect(screen.getByRole('combobox')).toHaveTextContent('São Paulo');
    });

    it('chama onChange com o valor correto ao clicar em uma opção', async () => {
      const handleChange = vi.fn();
      render(<InputSelect options={mockOptions} onChange={handleChange} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Rio de Janeiro' }));
      expect(handleChange).toHaveBeenCalledWith('rj');
    });

    it('fecha a lista após selecionar uma opção', async () => {
      render(<InputSelect options={mockOptions} onChange={vi.fn()} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'São Paulo' }));
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('não chama onChange ao clicar em opção desabilitada', async () => {
      const handleChange = vi.fn();
      render(<InputSelect options={mockOptions} onChange={handleChange} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Minas Gerais' }));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Multi select', () => {
    it('mantém a lista aberta após selecionar uma opção', async () => {
      render(
        <InputSelect
          selectType="multi"
          options={mockOptions}
          onChange={vi.fn()}
          aria-label="Estados"
        />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'São Paulo' }));
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('chama onChange com array ao adicionar item', async () => {
      const handleChange = vi.fn();
      render(
        <InputSelect
          selectType="multi"
          options={mockOptions}
          value={['sp']}
          onChange={handleChange}
          aria-label="Estados"
        />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Rio de Janeiro' }));
      expect(handleChange).toHaveBeenCalledWith(['sp', 'rj']);
    });

    it('remove item ao clicar em opção já selecionada (toggle)', async () => {
      const handleChange = vi.fn();
      render(
        <InputSelect
          selectType="multi"
          options={mockOptions}
          value={['sp', 'rj']}
          onChange={handleChange}
          aria-label="Estados"
        />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'São Paulo' }));
      expect(handleChange).toHaveBeenCalledWith(['rj']);
    });

    it('exibe chips para cada valor selecionado', () => {
      render(
        <InputSelect
          selectType="multi"
          options={mockOptions}
          value={['sp', 'rj']}
          aria-label="Estados"
        />,
      );
      expect(screen.getByText('São Paulo')).toBeInTheDocument();
      expect(screen.getByText('Rio de Janeiro')).toBeInTheDocument();
    });

    it('chama onChange sem o item ao clicar no botão de remoção do chip', async () => {
      const handleChange = vi.fn();
      render(
        <InputSelect
          selectType="multi"
          options={mockOptions}
          value={['sp', 'rj']}
          onChange={handleChange}
          aria-label="Estados"
        />,
      );
      await userEvent.click(screen.getByRole('button', { name: 'Remover São Paulo' }));
      expect(handleChange).toHaveBeenCalledWith(['rj']);
    });
  });

  describe('Autocomplete', () => {
    it('exibe campo de busca quando aberto no modo autocomplete', async () => {
      render(
        <InputSelect selectType="autocomplete" options={mockOptions} aria-label="Estado" />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
    });

    it('filtra opções ao digitar na busca', async () => {
      render(
        <InputSelect selectType="autocomplete" options={mockOptions} aria-label="Estado" />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.type(screen.getByPlaceholderText('Buscar...'), 'Paulo');
      expect(screen.getAllByRole('option')).toHaveLength(1);
      expect(screen.getByRole('option', { name: 'São Paulo' })).toBeInTheDocument();
    });
  });

  describe('Estado desabilitado', () => {
    it('não abre a lista quando disabled=true', async () => {
      render(<InputSelect options={mockOptions} disabled aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('tem atributo disabled no trigger', () => {
      render(<InputSelect options={mockOptions} disabled aria-label="Estado" />);
      expect(screen.getByRole('combobox')).toBeDisabled();
    });
  });

  describe('Acessibilidade (ARIA)', () => {
    it('trigger tem aria-haspopup="listbox"', () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('trigger tem aria-expanded="false" quando fechado', () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false');
    });

    it('trigger tem aria-expanded="true" quando aberto', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true');
    });

    it('itens da lista têm role="option"', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getAllByRole('option')).toHaveLength(mockOptions.length);
    });

    it('item selecionado tem aria-selected="true"', async () => {
      render(<InputSelect options={mockOptions} value="sp" aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('option', { name: 'São Paulo' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
    });

    it('item desabilitado tem aria-disabled="true"', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('option', { name: 'Minas Gerais' })).toHaveAttribute(
        'aria-disabled',
        'true',
      );
    });

    it('listbox tem aria-multiselectable="true" no modo multi', async () => {
      render(
        <InputSelect selectType="multi" options={mockOptions} aria-label="Estados" />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true');
    });

    it('trigger é associado ao label via aria-labelledby', () => {
      render(<InputSelect options={mockOptions} label="Estado" />);
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('aria-labelledby');
    });

    it('trigger é focalizável por teclado', () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      const trigger = screen.getByRole('combobox');
      trigger.focus();
      expect(document.activeElement).toBe(trigger);
    });
  });

  describe('Navegação por teclado', () => {
    it('abre a lista com Enter no trigger', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{Enter}');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('abre a lista com Space no trigger', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard(' ');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('abre a lista com ArrowDown no trigger', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('navega e seleciona item com ArrowDown + Enter', async () => {
      const handleChange = vi.fn();
      render(
        <InputSelect options={mockOptions} onChange={handleChange} aria-label="Estado" />,
      );
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{Enter}');
      expect(handleChange).toHaveBeenCalledWith('rj');
    });

    it('fecha a lista com Escape após abrir com teclado', async () => {
      render(<InputSelect options={mockOptions} aria-label="Estado" />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      await userEvent.keyboard('{Escape}');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Ícones (ReactNode)', () => {
    it('renderiza tooltipIcon quando hasTooltip=true e tooltipIcon fornecido', () => {
      render(
        <InputSelect
          options={mockOptions}
          label="Estado"
          hasTooltip
          tooltipIcon={TooltipIconMock}
        />,
      );
      expect(screen.getByTestId('tooltip-icon')).toBeInTheDocument();
    });

    it('renderiza ícone de tooltip padrão quando hasTooltip=true sem tooltipIcon', () => {
      render(
        <InputSelect options={mockOptions} label="Estado" hasTooltip />,
      );
      expect(screen.getByRole('img', { name: 'Informação adicional' })).toBeInTheDocument();
    });

    it('renderiza chevronIcon personalizado no trigger', () => {
      render(
        <InputSelect
          options={mockOptions}
          aria-label="Estado"
          chevronIcon={ChevronIconMock}
        />,
      );
      expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
    });

    it('renderiza checkIcon personalizado no single select para item selecionado', async () => {
      render(
        <InputSelect
          options={mockOptions}
          value="sp"
          aria-label="Estado"
          checkIcon={CheckIconMock}
        />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    });

    it('renderiza checkbox em cada item da lista em modo multi select', async () => {
      const { container } = render(
        <InputSelect
          selectType="multi"
          options={mockOptions}
          value={['sp']}
          aria-label="Estados"
        />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      // Checkboxes ficam aria-hidden (decorativos) — estado real via aria-selected no <li>
      const checkboxInputs = container.querySelectorAll('input[type="checkbox"]');
      expect(checkboxInputs).toHaveLength(mockOptions.length);
    });

    it('checkbox do item selecionado está marcado em modo multi', async () => {
      const { container } = render(
        <InputSelect
          selectType="multi"
          options={mockOptions}
          value={['sp']}
          aria-label="Estados"
        />,
      );
      await userEvent.click(screen.getByRole('combobox'));
      const checkboxInputs = container.querySelectorAll('input[type="checkbox"]');
      expect(checkboxInputs[0]).toBeChecked();
      expect(checkboxInputs[1]).not.toBeChecked();
    });
  });
});
