import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    context: {
      control: "radio",
      options: ["neutral", "accent", "brand", "informative", "warning", "error", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    context: "neutral",
    label: "Placeholder text",
  },
};

export const AllVariants: Story = {
  render: () => {
    const contexts = [
      "neutral",
      "accent",
      "brand",
      "informative",
      "warning",
      "error",
      "success",
    ] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
        {contexts.map((context) => (
          <Tag key={context} context={context} label="Placeholder text" />
        ))}
      </div>
    );
  },
};
