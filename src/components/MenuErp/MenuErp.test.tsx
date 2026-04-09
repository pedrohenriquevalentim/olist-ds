import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MenuErp } from "./MenuErp";

describe("MenuErp", () => {
  it("renderiza o nav com aria-label padrão", () => {
    render(<MenuErp />);
    expect(screen.getByRole("navigation", { name: "Menu principal" })).toBeInTheDocument();
  });

  it("renderiza o nav com aria-label customizado", () => {
    render(<MenuErp ariaLabel="Navegação do sistema" />);
    expect(screen.getByRole("navigation", { name: "Navegação do sistema" })).toBeInTheDocument();
  });

  it("exibe todos os itens de navegação principal na variante expandida", () => {
    render(<MenuErp variant="expanded" />);
    expect(screen.getByRole("button", { name: "Soluções Olist" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Vendas" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Produtos" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Suprimentos" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Serviços" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Finanças" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Clientes e fornecedores" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Relatórios" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Meus atalhos" })).toBeInTheDocument();
  });

  it("exibe os itens de usuário na variante expandida", () => {
    render(<MenuErp variant="expanded" />);
    expect(screen.getByRole("button", { name: "Menu do Usuário" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Notificações" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Configurações" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Central de suporte" })).toBeInTheDocument();
  });

  it("os botões são acessíveis por aria-label na variante contraída", () => {
    render(<MenuErp variant="contracted" />);
    expect(screen.getByRole("button", { name: "Vendas" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Configurações" })).toBeInTheDocument();
  });

  it("chama onSelect com a chave correta ao clicar em um item", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<MenuErp variant="expanded" onSelect={onSelect} />);

    await user.click(screen.getByRole("button", { name: "Vendas" }));
    expect(onSelect).toHaveBeenCalledWith("vendas");
  });

  it("chama onSelect com 'configuracoes' ao clicar no item de configurações", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<MenuErp variant="expanded" onSelect={onSelect} />);

    await user.click(screen.getByRole("button", { name: "Configurações" }));
    expect(onSelect).toHaveBeenCalledWith("configuracoes");
  });

  it("chama onSelect com 'menu-usuario' ao clicar no botão do usuário", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<MenuErp variant="expanded" onSelect={onSelect} />);

    await user.click(screen.getByRole("button", { name: "Menu do Usuário" }));
    expect(onSelect).toHaveBeenCalledWith("menu-usuario");
  });

  it("marca o item ativo com aria-current='page'", () => {
    render(<MenuErp variant="expanded" activeKey="vendas" />);
    expect(screen.getByRole("button", { name: "Vendas" })).toHaveAttribute("aria-current", "page");
  });

  it("não marca nenhum item quando activeKey é null", () => {
    render(<MenuErp variant="expanded" activeKey={null} />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => {
      expect(btn).not.toHaveAttribute("aria-current");
    });
  });

  it("exibe o nome e iniciais do usuário customizados", () => {
    render(<MenuErp variant="expanded" userName="Pedro Santos" userInitials="PS" />);
    expect(screen.getByRole("button", { name: "Pedro Santos" })).toBeInTheDocument();
    expect(screen.getByText("PS")).toBeInTheDocument();
  });
});
