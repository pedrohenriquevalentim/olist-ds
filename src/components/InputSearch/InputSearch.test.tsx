import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { InputSearch } from './InputSearch';

describe('InputSearch', () => {
  it('renderiza o campo de busca com placeholder', () => {
    render(<InputSearch placeholder="Buscar produtos" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar produtos')).toBeInTheDocument();
  });

  it('exibe o label quando fornecido', () => {
    render(<InputSearch label="Pesquisa" />);
    expect(screen.getByText('Pesquisa')).toBeInTheDocument();
    expect(screen.getByLabelText('Pesquisa')).toBeInTheDocument();
  });

  it('exibe o texto de suporte quando support=true e supportText fornecido', () => {
    render(<InputSearch support supportText="Digite para filtrar" />);
    expect(screen.getByText('Digite para filtrar')).toBeInTheDocument();
  });

  it('não exibe texto de suporte quando support=false', () => {
    render(<InputSearch support={false} supportText="Não deve aparecer" />);
    expect(screen.queryByText('Não deve aparecer')).not.toBeInTheDocument();
  });

  it('chama onChange ao digitar', async () => {
    const handleChange = vi.fn();
    render(<InputSearch value="" onChange={handleChange} />);
    await userEvent.type(screen.getByRole('searchbox'), 'olist');
    expect(handleChange).toHaveBeenCalled();
  });

  it('chama onSearch ao pressionar Enter', () => {
    const handleSearch = vi.fn();
    render(<InputSearch value="olist" onSearch={handleSearch} />);
    fireEvent.keyDown(screen.getByRole('searchbox'), { key: 'Enter' });
    expect(handleSearch).toHaveBeenCalledWith('olist');
  });

  it('renderiza botão "buscar" na variante button', () => {
    render(<InputSearch action="button" />);
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeInTheDocument();
  });

  it('chama onSearch ao clicar no botão de ação', () => {
    const handleSearch = vi.fn();
    render(<InputSearch action="button" value="tênis" onSearch={handleSearch} />);
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }));
    expect(handleSearch).toHaveBeenCalledWith('tênis');
  });

  it('renderiza botão ícone na variante button icon', () => {
    render(<InputSearch action="button icon" />);
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeInTheDocument();
  });

  it('desabilita o input e o botão quando isDisabled=true', () => {
    render(<InputSearch isDisabled action="button" />);
    expect(screen.getByRole('searchbox')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDisabled();
  });

  it('possui aria-label correto quando sem label visível', () => {
    render(<InputSearch placeholder="Pesquisar" />);
    expect(screen.getByRole('searchbox')).toHaveAttribute('aria-label', 'Pesquisar');
  });
});
