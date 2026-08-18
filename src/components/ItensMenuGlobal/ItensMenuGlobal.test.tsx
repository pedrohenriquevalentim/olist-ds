import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ItensMenuGlobal } from './ItensMenuGlobal';

describe('ItensMenuGlobal', () => {
  // ── Renderização básica ──────────────────────────────────────────────────────

  it('renderiza o painel primário por padrão (estado fechado)', () => {
    render(<ItensMenuGlobal />);
    expect(screen.getByRole('navigation', { name: 'Módulos do ERP' })).toBeInTheDocument();
  });

  it('não exibe o painel secundário no estado fechado', () => {
    render(<ItensMenuGlobal />);
    expect(screen.queryByRole('navigation', { name: /Submenu/i })).not.toBeInTheDocument();
  });

  it('renderiza todos os 7 módulos de 1º nível', () => {
    render(<ItensMenuGlobal />);
    const nav = screen.getByRole('navigation', { name: 'Módulos do ERP' });
    expect(within(nav).getByRole('menuitem', { name: 'Vendas' })).toBeInTheDocument();
    expect(within(nav).getByRole('menuitem', { name: 'Produtos' })).toBeInTheDocument();
    expect(within(nav).getByRole('menuitem', { name: 'Suprimentos' })).toBeInTheDocument();
    expect(within(nav).getByRole('menuitem', { name: 'Serviços' })).toBeInTheDocument();
    expect(within(nav).getByRole('menuitem', { name: 'Finanças' })).toBeInTheDocument();
    expect(within(nav).getByRole('menuitem', { name: 'Contatos' })).toBeInTheDocument();
    expect(within(nav).getByRole('menuitem', { name: 'Relatórios' })).toBeInTheDocument();
  });

  it('renderiza o item Configurações no rodapé do painel primário', () => {
    render(<ItensMenuGlobal />);
    expect(screen.getByRole('menuitem', { name: 'Configurações' })).toBeInTheDocument();
  });

  it('renderiza o toggle Fixar menu com role=switch e aria-checked=false por padrão', () => {
    render(<ItensMenuGlobal />);
    const toggle = screen.getByRole('switch', { name: 'Fixar menu' });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });

  // ── Seleção de módulo e transição de estado ──────────────────────────────────

  it('marca Vendas como aria-current=page por padrão', () => {
    render(<ItensMenuGlobal />);
    const nav = screen.getByRole('navigation', { name: 'Módulos do ERP' });
    expect(within(nav).getByRole('menuitem', { name: 'Vendas' })).toHaveAttribute('aria-current', 'page');
  });

  it('ao clicar em um módulo, exibe o painel secundário com os sub-itens corretos', async () => {
    render(<ItensMenuGlobal />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Vendas' }));
    expect(screen.getByRole('navigation', { name: 'Submenu Vendas' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Pedidos de venda' })).toBeInTheDocument();
  });

  it('ao clicar em Produtos, exibe sub-itens de Produtos', async () => {
    render(<ItensMenuGlobal />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Produtos' }));
    expect(screen.getByRole('navigation', { name: 'Submenu Produtos' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Cadastro de produtos' })).toBeInTheDocument();
  });

  it('chama onModuloSelect com o módulo correto ao clicar', async () => {
    const onModuloSelect = vi.fn();
    render(<ItensMenuGlobal onModuloSelect={onModuloSelect} />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Finanças' }));
    expect(onModuloSelect).toHaveBeenCalledWith('Financas');
  });

  it('atualiza aria-current ao trocar de módulo', async () => {
    render(<ItensMenuGlobal />);
    const nav = screen.getByRole('navigation', { name: 'Módulos do ERP' });
    await userEvent.click(within(nav).getByRole('menuitem', { name: 'Produtos' }));
    expect(within(nav).getByRole('menuitem', { name: 'Produtos' })).toHaveAttribute('aria-current', 'page');
    expect(within(nav).getByRole('menuitem', { name: 'Vendas' })).not.toHaveAttribute('aria-current');
  });

  // ── Toggle Fixar menu ────────────────────────────────────────────────────────

  it('ao ativar o toggle, aria-checked muda para true', async () => {
    // Usa estado controlado para manter o painel primário visível após o clique
    // (sem estado controlado, o toggle desaparece ao entrar no estado fixo)
    render(<ItensMenuGlobal estado="fechado" />);
    const toggle = screen.getByRole('switch', { name: 'Fixar menu' });
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });

  it('ao ativar o toggle, chama onFixarToggle(true)', async () => {
    const onFixarToggle = vi.fn();
    render(<ItensMenuGlobal onFixarToggle={onFixarToggle} />);
    await userEvent.click(screen.getByRole('switch', { name: 'Fixar menu' }));
    expect(onFixarToggle).toHaveBeenCalledWith(true);
  });

  it('ao ativar o toggle, oculta o painel primário (estado fixo)', async () => {
    render(<ItensMenuGlobal />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Vendas' }));
    await userEvent.click(screen.getByRole('switch', { name: 'Fixar menu' }));
    expect(screen.queryByRole('navigation', { name: 'Módulos do ERP' })).not.toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Submenu Vendas' })).toBeInTheDocument();
  });

  // ── Estado fixo e botão voltar ───────────────────────────────────────────────

  it('estado fixo: exibe botão "Voltar ao menu principal"', async () => {
    render(<ItensMenuGlobal estado="fixo" />);
    expect(screen.getByRole('button', { name: 'Voltar ao menu principal' })).toBeInTheDocument();
  });

  it('estado fixo: ao clicar em voltar, chama onVoltar', async () => {
    const onVoltar = vi.fn();
    render(<ItensMenuGlobal estado="fixo" onVoltar={onVoltar} />);
    await userEvent.click(screen.getByRole('button', { name: 'Voltar ao menu principal' }));
    expect(onVoltar).toHaveBeenCalledTimes(1);
  });

  it('estado fixo: ao clicar em voltar, restaura o painel primário', async () => {
    render(<ItensMenuGlobal />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Vendas' }));
    await userEvent.click(screen.getByRole('switch', { name: 'Fixar menu' }));
    await userEvent.click(screen.getByRole('button', { name: 'Voltar ao menu principal' }));
    expect(screen.getByRole('navigation', { name: 'Módulos do ERP' })).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Submenu Vendas' })).not.toBeInTheDocument();
  });

  // ── Estado controlado via prop ───────────────────────────────────────────────

  it('prop estado=aberto exibe ambos os painéis', () => {
    render(<ItensMenuGlobal estado="aberto" moduloAtivo="Produtos" />);
    expect(screen.getByRole('navigation', { name: 'Módulos do ERP' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Submenu Produtos' })).toBeInTheDocument();
  });

  it('prop estado=fixo oculta o painel primário', () => {
    render(<ItensMenuGlobal estado="fixo" moduloAtivo="Contatos" />);
    expect(screen.queryByRole('navigation', { name: 'Módulos do ERP' })).not.toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Submenu Contatos' })).toBeInTheDocument();
  });

  // ── ARIA e acessibilidade ────────────────────────────────────────────────────

  it('listas de módulos têm role=menu com aria-label adequado', () => {
    render(<ItensMenuGlobal />);
    expect(screen.getByRole('menu', { name: 'Módulos' })).toBeInTheDocument();
    expect(screen.getByRole('menu', { name: 'Configurações do sistema' })).toBeInTheDocument();
  });

  it('aceita className customizado', () => {
    render(<ItensMenuGlobal className="minha-classe" />);
    expect(screen.getByTestId('itens-menu-global')).toHaveClass('minha-classe');
  });

  // ── Conteúdo do painel secundário ────────────────────────────────────────────

  it('painel secundário de Vendas exibe as 3 seções: Vendas, Operação, Ecommerce', async () => {
    render(<ItensMenuGlobal />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Vendas' }));
    const nav = screen.getByRole('navigation', { name: 'Submenu Vendas' });
    expect(within(nav).getByRole('menu', { name: 'Vendas' })).toBeInTheDocument();
    expect(within(nav).getByRole('menu', { name: 'Operação' })).toBeInTheDocument();
    expect(within(nav).getByRole('menu', { name: 'Ecommerce' })).toBeInTheDocument();
  });

  it('painel secundário de Relatórios exibe 3 seções', async () => {
    render(<ItensMenuGlobal />);
    const nav = screen.getByRole('navigation', { name: 'Módulos do ERP' });
    await userEvent.click(within(nav).getByRole('menuitem', { name: 'Relatórios' }));
    const secNav = screen.getByRole('navigation', { name: 'Submenu Relatórios' });
    expect(within(secNav).getByRole('menu', { name: 'Vendas' })).toBeInTheDocument();
    expect(within(secNav).getByRole('menu', { name: 'Financeiro' })).toBeInTheDocument();
    expect(within(secNav).getByRole('menu', { name: 'Estoque' })).toBeInTheDocument();
  });
});
