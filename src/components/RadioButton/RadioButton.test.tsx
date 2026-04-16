import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  it("renderiza com label visível por padrão", () => {
    render(<RadioButton id="rb1" label="Opção A" />);
    expect(screen.getByLabelText("Opção A")).toBeInTheDocument();
  });

  it("não exibe label quando hasLabel=false", () => {
    render(<RadioButton id="rb2" label="Oculto" hasLabel={false} />);
    expect(screen.queryByText("Oculto")).not.toBeInTheDocument();
  });

  it("fica desabilitado quando state=disabled", () => {
    render(<RadioButton id="rb3" label="Desabilitado" state="disabled" />);
    expect(screen.getByRole("radio", { name: "Desabilitado" })).toBeDisabled();
  });

  it("reflete isChecked=true no input", () => {
    render(<RadioButton id="rb4" label="Marcado" isChecked onChange={vi.fn()} />);
    expect(screen.getByRole("radio", { name: "Marcado" })).toBeChecked();
  });

  it("chama onChange ao clicar quando enabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<RadioButton id="rb5" label="Clicável" onChange={onChange} />);
    await user.click(screen.getByRole("radio", { name: "Clicável" }));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("não chama onChange quando state=disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<RadioButton id="rb6" label="Bloqueado" state="disabled" onChange={onChange} />);
    await user.click(screen.getByLabelText("Bloqueado"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("exibe dot interno quando isChecked=true", () => {
    const { container } = render(
      <RadioButton id="rb7" label="Com dot" isChecked onChange={vi.fn()} />
    );
    expect(container.querySelector('[class*="dot"]')).toBeTruthy();
  });

  it("não exibe dot quando unchecked", () => {
    const { container } = render(<RadioButton id="rb8" label="Sem dot" />);
    expect(container.querySelector('[class*="dot"]')).toBeFalsy();
  });

  it("propaga name e value para o input", () => {
    render(
      <RadioButton id="rb9" label="Com grupo" name="grupo" value="opcao1" onChange={vi.fn()} />
    );
    const input = screen.getByRole("radio", { name: "Com grupo" });
    expect(input).toHaveAttribute("name", "grupo");
    expect(input).toHaveAttribute("value", "opcao1");
  });
});
