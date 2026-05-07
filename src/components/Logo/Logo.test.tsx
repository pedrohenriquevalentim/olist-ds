import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renderiza com aria-label padrão 'olist'", () => {
    render(<Logo />);
    expect(screen.getByRole("img", { name: "olist" })).toBeInTheDocument();
  });

  it("aceita alt personalizado via prop", () => {
    render(<Logo alt="Logo da Olist" />);
    expect(screen.getByRole("img", { name: "Logo da Olist" })).toBeInTheDocument();
  });

  it("renderiza os três assets SVG internos", () => {
    const { container } = render(<Logo />);
    expect(container.querySelectorAll("span[aria-hidden='true']")).toHaveLength(3);
  });

  it("SVGs internos estão marcados como aria-hidden", () => {
    const { container } = render(<Logo />);
    container.querySelectorAll("span[aria-hidden='true']").forEach((span) => {
      expect(span.getAttribute("aria-hidden")).toBe("true");
    });
  });

  it("aceita className extra", () => {
    const { container } = render(<Logo className="extra" />);
    expect(container.firstChild).toHaveClass("extra");
  });
});
