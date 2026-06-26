import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InputPassword } from './InputPassword';

describe('InputPassword', () => {
  it('renderiza com label e placeholder', () => {
    render(<InputPassword label="Senha" placeholder="Digite sua senha" />);
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
  });

  it('inicia com tipo password (senha oculta)', () => {
    render(<InputPassword label="Senha" />);
    expect(screen.getByLabelText('Senha')).toHaveAttribute('type', 'password');
  });

  it('alterna para tipo text ao clicar no toggle', () => {
    render(<InputPassword label="Senha" />);
    const toggle = screen.getByRole('button', { name: 'Mostrar senha' });
    fireEvent.click(toggle);
    expect(screen.getByLabelText('Senha')).toHaveAttribute('type', 'text');
  });

  it('alterna de volta para password ao clicar novamente', () => {
    render(<InputPassword label="Senha" />);
    const toggle = screen.getByRole('button', { name: 'Mostrar senha' });
    fireEvent.click(toggle);
    fireEvent.click(screen.getByRole('button', { name: 'Ocultar senha' }));
    expect(screen.getByLabelText('Senha')).toHaveAttribute('type', 'password');
  });

  it('chama onVisibilityToggle ao alternar', () => {
    const onToggle = vi.fn();
    render(<InputPassword label="Senha" onVisibilityToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar senha' }));
    expect(onToggle).toHaveBeenCalledWith(true);
  });

  it('respeita isPasswordVisible controlado externamente', () => {
    render(<InputPassword label="Senha" isPasswordVisible={true} />);
    expect(screen.getByLabelText('Senha')).toHaveAttribute('type', 'text');
  });

  it('chama onChange ao digitar', () => {
    const onChange = vi.fn();
    render(<InputPassword label="Senha" onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('Senha'), { target: { value: 'abc' } });
    expect(onChange).toHaveBeenCalledWith('abc');
  });

  it('desabilita input e toggle quando isDisabled=true', () => {
    render(<InputPassword label="Senha" isDisabled />);
    expect(screen.getByLabelText('Senha')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Mostrar senha' })).toBeDisabled();
  });

  it('exibe aria-invalid quando isError=true', () => {
    render(<InputPassword label="Senha" isError />);
    expect(screen.getByLabelText('Senha')).toHaveAttribute('aria-invalid', 'true');
  });

  it('associa aria-describedby ao support text quando hasSupport=true', () => {
    render(<InputPassword label="Senha" hasSupport supportText="Mínimo 8 caracteres" />);
    const input = screen.getByLabelText('Senha');
    const supportId = input.getAttribute('aria-describedby');
    expect(supportId).toBeTruthy();
    expect(screen.getByText('Mínimo 8 caracteres')).toBeInTheDocument();
  });

  it('renderiza ícone de lead quando fornecido', () => {
    const LeadIcon = () => <svg data-testid="lead-icon" />;
    render(<InputPassword label="Senha" leadIcon={<LeadIcon />} />);
    expect(screen.getByTestId('lead-icon')).toBeInTheDocument();
  });

  it('exibe tooltip quando hasTooltip=true', () => {
    render(<InputPassword label="Senha" hasTooltip tooltipText="Dica de senha" />);
    expect(screen.getByRole('tooltip', { name: 'Dica de senha' })).toBeInTheDocument();
  });
});
