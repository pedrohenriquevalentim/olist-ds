import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "components/RadioButton",
  component: RadioButton,
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
type Story = StoryObj<typeof RadioButton>;

export const Playground: Story = {
  args: {
    state: "enabled",
    isChecked: false,
    hasLabel: true,
    label: "Label text",
    id: "playground-rb",
    name: "playground",
    value: "1",
  },
};

export const TodasAsVariantes: Story = {
  render: () => {
    const states = ["enabled", "hover", "pressed", "disabled"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {states.map((state) => (
          <div key={state} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <p style={{ margin: "0 0 0.5rem", fontSize: "0.75rem", color: "#827f73", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {state}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <RadioButton
                id={`${state}-unchecked`}
                state={state}
                isChecked={false}
                label="Desmarcado"
                name={`group-${state}`}
                value="unchecked"
                onChange={() => {}}
              />
              <RadioButton
                id={`${state}-checked`}
                state={state}
                isChecked={true}
                label="Marcado"
                name={`group-${state}-checked`}
                value="checked"
                onChange={() => {}}
              />
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
    id: "sem-label-rb",
    name: "sem-label",
    value: "1",
  },
};
