import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza com aria-label", () => {
    render(<Button ariaLabel="Salvar" label="placeholder Text" />);
    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("usa label como fallback de aria-label", () => {
    render(<Button label="Continuar" />);
    expect(screen.getByRole("button", { name: "Continuar" })).toBeInTheDocument();
  });

  it("fica disabled quando state=disabled", () => {
    render(<Button state="disabled" ariaLabel="Desabilitado" />);
    expect(screen.getByRole("button", { name: "Desabilitado" })).toBeDisabled();
  });

  it("chama onClick quando enabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button ariaLabel="Clicar" onClick={onClick} state="enabled" />);
    await user.click(screen.getByRole("button", { name: "Clicar" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("não chama onClick quando disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button ariaLabel="Clicar" onClick={onClick} state="disabled" />);
    await user.click(screen.getByRole("button", { name: "Clicar" }));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("renderiza ícone quando icon=lead e iconName fornecido", () => {
    const { container } = render(<Button icon="lead" iconName="bolt" ariaLabel="Com ícone" />);
    expect(container.querySelector('[aria-hidden="true"] span')).toBeTruthy();
  });

  it("não renderiza ícone quando icon=none", () => {
    const { container } = render(<Button icon="none" ariaLabel="Sem ícone" />);
    expect(container.querySelector(".withIcon")).toBeFalsy();
  });
});

