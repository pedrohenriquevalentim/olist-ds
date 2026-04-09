import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "escuro",
      values: [
        { name: "escuro", value: "#201f1d" },
        { name: "claro", value: "#fcfbf8" },
      ],
    },
  },
  argTypes: {
    alt: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Padrao: Story = {
  args: {
    alt: "olist",
  },
};
