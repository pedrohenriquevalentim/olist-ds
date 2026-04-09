import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: "radio",
      options: ["enabled", "hover", "pressed", "disabled"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  args: {
    state: "enabled",
    isChecked: false,
    isIndeterminate: false,
    hasLabel: true,
    label: "Label text",
    id: "playground-cb",
  },
};

export const TodasAsVariantes: Story = {
  render: () => {
    const states = ["enabled", "hover", "pressed", "disabled"] as const;
    const variants = [
      { isChecked: false, isIndeterminate: false, desc: "Desmarcado" },
      { isChecked: true,  isIndeterminate: false, desc: "Marcado" },
      { isChecked: false, isIndeterminate: true,  desc: "Indeterminado" },
    ] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {states.map((state) => (
          <div key={state} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <p style={{ margin: "0 0 0.5rem", fontSize: "0.75rem", color: "#827f73", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {state}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              {variants.map(({ isChecked, isIndeterminate, desc }) => (
                <Checkbox
                  key={`${state}-${desc}`}
                  id={`${state}-${desc}`}
                  state={state}
                  isChecked={isChecked}
                  isIndeterminate={isIndeterminate}
                  label={desc}
                  onChange={() => {}}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const SemLabel: Story = {
  args: {
    state: "enabled",
    isChecked: false,
    hasLabel: false,
    id: "sem-label-cb",
  },
};
