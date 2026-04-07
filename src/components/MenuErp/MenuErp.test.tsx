import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { MenuErp } from "./MenuErp";

describe("MenuErp", () => {
  it("renderiza o nav com aria-label", () => {
    render(<MenuErp ariaLabel="Menu principal" />);
    expect(screen.getByRole("navigation", { name: "Menu principal" })).toBeInTheDocument();
  });

  it("chama onSelect ao clicar em um item", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<MenuErp onSelect={onSelect} variant="expanded" activeKey="fechado" />);

    await user.click(screen.getByRole("button", { name: "Vendas" }));
    expect(onSelect).toHaveBeenCalledWith("vendas");
  });

  it("mostra painel quando activeKey não é fechado", () => {
    render(<MenuErp variant="expanded" activeKey="vendas" />);
    expect(screen.getByRole("region", { name: "Vendas" })).toBeInTheDocument();
  });

  it("não mostra painel quando activeKey é fechado", () => {
    render(<MenuErp variant="expanded" activeKey="fechado" />);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });
});

