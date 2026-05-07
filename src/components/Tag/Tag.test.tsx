import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renderiza com texto padrão", () => {
    render(<Tag />);
    expect(screen.getByText("Placeholder text")).toBeInTheDocument();
  });

  it("renderiza com label personalizado", () => {
    render(<Tag label="Ativo" />);
    expect(screen.getByText("Ativo")).toBeInTheDocument();
  });

  it("não renderiza ícone quando prop icon não é fornecida", () => {
    const { container } = render(<Tag />);
    expect(container.querySelector(".icon")).toBeFalsy();
  });

  it("renderiza ícone quando prop icon é fornecida", () => {
    const { container } = render(<Tag icon="check" />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy();
  });

  it("aceita className personalizado", () => {
    const { container } = render(<Tag className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("renderiza cada contexto sem erros", () => {
    const contexts = [
      "neutral",
      "accent",
      "brand",
      "informative",
      "warning",
      "error",
      "success",
    ] as const;

    contexts.forEach((context) => {
      const { unmount } = render(<Tag context={context} label="Texto" />);
      expect(screen.getByText("Texto")).toBeInTheDocument();
      unmount();
    });
  });

  it("usa contexto neutral por padrão", () => {
    render(<Tag label="Padrão" />);
    expect(screen.getByText("Padrão")).toBeInTheDocument();
  });
});
