import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { InputText } from './InputText';

describe('InputText', () => {
  it('renderiza o campo de texto com placeholder', () => {
    render(<InputText placeholder="Digite aqui" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite aqui')).toBeInTheDocument();
  });

  it('exibe o label quando fornecido', () => {
    render(<InputText label="Nome completo" placeholder="Digite seu nome" />);
    expect(screen.getByText('Nome completo')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome completo')).toBeInTheDocument();
  });

  it('exibe o texto de suporte quando hasSupport=true e supportText fornecido', () => {
    render(<InputText hasSupport supportText="Mínimo 3 caracteres" />);
    expect(screen.getByText('Mínimo 3 caracteres')).toBeInTheDocument();
  });

  it('não exibe texto de suporte quando hasSupport=false', () => {
    render(<InputText hasSupport={false} supportText="Não deve aparecer" />);
    expect(screen.queryByText('Não deve aparecer')).not.toBeInTheDocument();
  });

  it('chama onChange ao digitar', async () => {
    const handleChange = vi.fn();
    render(<InputText value="" onChange={handleChange} placeholder="Digite" />);
    await userEvent.type(screen.getByRole('textbox'), 'olist');
    expect(handleChange).toHaveBeenCalled();
  });

  it('desabilita o input quando isDisabled=true', () => {
    render(<InputText isDisabled placeholder="Campo desabilitado" />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('aplica aria-invalid quando isError=true', () => {
    render(<InputText isError placeholder="Campo com erro" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('não aplica aria-invalid quando isError=false', () => {
    render(<InputText placeholder="Campo normal" />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });

  it('associa o texto de suporte via aria-describedby', () => {
    render(<InputText hasSupport supportText="Campo obrigatório" placeholder="Digite" />);
    const input = screen.getByRole('textbox');
    const supportId = input.getAttribute('aria-describedby');
    expect(supportId).toBeTruthy();
    expect(document.getElementById(supportId!)).toHaveTextContent('Campo obrigatório');
  });

  it('renderiza o lead icon quando fornecido', () => {
    const icon = <svg data-testid="lead-icon" />;
    render(<InputText leadIcon={icon} placeholder="Com ícone" />);
    expect(screen.getByTestId('lead-icon')).toBeInTheDocument();
  });

  it('exibe o ícone de tooltip quando hasTooltip=true e label fornecido', () => {
    render(<InputText label="E-mail" hasTooltip tooltipText="Informe um e-mail válido" />);
    const tooltip = screen.getByRole('tooltip', { name: 'Informe um e-mail válido' });
    expect(tooltip).toBeInTheDocument();
  });

  it('possui aria-label correto quando sem label visível', () => {
    render(<InputText placeholder="Pesquisar produto" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-label', 'Pesquisar produto');
  });

  it('exibe role=alert no suporte quando isError=true', () => {
    render(<InputText isError hasSupport supportText="Valor inválido" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Valor inválido');
  });
});
