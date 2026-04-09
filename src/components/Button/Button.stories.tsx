import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: { control: "radio", options: ["primary", "secondary", "tertiary"] },
    state: { control: "radio", options: ["enabled", "hover", "pressed", "disabled"] },
    icon: { control: "radio", options: ["lead", "action", "none"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    type: "primary",
    state: "enabled",
    icon: "lead",
    hasFocus: false,
    label: "placeholder Text",
    ariaLabel: "Botão",
  },
};

export const AllVariants: Story = {
  render: () => {
    const types = ["primary", "secondary", "tertiary"] as const;
    const states = ["enabled", "hover", "pressed", "disabled"] as const;
    const icons = ["lead", "action", "none"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {states.map((state) => (
          <div key={state} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {types.map((type) => (
              <div key={type} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                {icons.map((icon) => (
                  <Button
                    key={`${state}-${type}-${icon}`}
                    type={type}
                    state={state}
                    icon={icon}
                    label="placeholder Text"
                    ariaLabel={`${type} ${state} ${icon}`}
                    hasFocus={state === "enabled" && type === "primary" && icon === "lead"}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

