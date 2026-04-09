import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { MenuSidebar } from "./MenuSidebar";

describe("MenuSidebar", () => {
  it("renderiza o nav com aria-label", () => {
    render(<MenuSidebar ariaLabel="Menu principal" />);
    expect(screen.getByRole("navigation", { name: "Menu principal" })).toBeInTheDocument();
  });

  it("exibe os itens de nav no modo expandido", () => {
    render(<MenuSidebar variant="expanded" activeKey="fechado" />);
    expect(screen.getByRole("button", { name: "Vendas" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Produtos" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Configurações" })).toBeInTheDocument();
  });

  it("exibe os itens de nav no modo contraído", () => {
    render(<MenuSidebar variant="contracted" activeKey="fechado" />);
    expect(screen.getByRole("button", { name: "Vendas" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Configurações" })).toBeInTheDocument();
  });

  it("chama onSelect ao clicar em um item", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<MenuSidebar onSelect={onSelect} variant="expanded" activeKey="fechado" />);

    await user.click(screen.getByRole("button", { name: "Vendas" }));
    expect(onSelect).toHaveBeenCalledWith("vendas");
  });

  it("mostra painel quando activeKey não é fechado", () => {
    render(<MenuSidebar variant="expanded" activeKey="vendas" />);
    expect(screen.getByRole("region", { name: "Vendas" })).toBeInTheDocument();
  });

  it("não mostra painel quando activeKey é fechado", () => {
    render(<MenuSidebar variant="expanded" activeKey="fechado" />);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });

  it("destaca o item ativo com aria-current", () => {
    render(<MenuSidebar variant="expanded" activeKey="produtos" />);
    const btn = screen.getByRole("button", { name: "Produtos" });
    expect(btn).toHaveAttribute("aria-current", "page");
  });

  it("chama onSelect com 'configurações' ao clicar em Configurações", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<MenuSidebar onSelect={onSelect} variant="expanded" activeKey="fechado" />);

    await user.click(screen.getByRole("button", { name: "Configurações" }));
    expect(onSelect).toHaveBeenCalledWith("configurações");
  });

  it("exibe itens do painel de vendas com seções", () => {
    render(<MenuSidebar variant="expanded" activeKey="vendas" />);
    expect(screen.getByText("Propostas comerciais")).toBeInTheDocument();
    expect(screen.getByText("Pedidos de venda")).toBeInTheDocument();
    expect(screen.getByText("Google Shopping")).toBeInTheDocument();
  });
});
