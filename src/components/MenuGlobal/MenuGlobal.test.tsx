import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MenuGlobal } from './MenuGlobal';
import type { ProdutoOlist } from '../ProdutosOlistIcons';

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
});
