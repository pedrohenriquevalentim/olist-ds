import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renderiza com label visível por padrão", () => {
    render(<Checkbox id="cb1" label="Aceito os termos" />);
    expect(screen.getByLabelText("Aceito os termos")).toBeInTheDocument();
  });

  it("não exibe label quando hasLabel=false", () => {
    render(<Checkbox id="cb2" label="Oculto" hasLabel={false} />);
    expect(screen.queryByText("Oculto")).not.toBeInTheDocument();
  });

  it("fica desabilitado quando state=disabled", () => {
    render(<Checkbox id="cb3" label="Desabilitado" state="disabled" />);
    expect(screen.getByRole("checkbox", { name: "Desabilitado" })).toBeDisabled();
  });

  it("reflete isChecked=true no input", () => {
    render(<Checkbox id="cb4" label="Marcado" isChecked onChange={vi.fn()} />);
    expect(screen.getByRole("checkbox", { name: "Marcado" })).toBeChecked();
  });

  it("aria-checked é 'mixed' quando isIndeterminate=true", () => {
    render(<Checkbox id="cb5" label="Indeterminado" isIndeterminate onChange={vi.fn()} />);
    expect(screen.getByRole("checkbox", { name: "Indeterminado" })).toHaveAttribute(
      "aria-checked",
      "mixed"
    );
  });

  it("chama onChange ao clicar quando enabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox id="cb6" label="Clicável" onChange={onChange} />);
    await user.click(screen.getByRole("checkbox", { name: "Clicável" }));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("não chama onChange quando state=disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox id="cb7" label="Bloqueado" state="disabled" onChange={onChange} />);
    await user.click(screen.getByLabelText("Bloqueado"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("exibe ícone de check quando isChecked=true", () => {
    const { container } = render(
      <Checkbox id="cb8" label="Com check" isChecked onChange={vi.fn()} />
    );
    expect(container.querySelector("img")).toBeTruthy();
  });

  it("não exibe ícone quando unchecked e não indeterminado", () => {
    const { container } = render(<Checkbox id="cb9" label="Sem check" />);
    expect(container.querySelector("img")).toBeFalsy();
  });
});
