import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { MenuErp } from "./MenuErp";

const meta: Meta<typeof MenuErp> = {
  title: "components/MenuErp",
  component: MenuErp,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MenuErp>;

export const ExpandedClosed: Story = {
  args: {
    variant: "expanded",
    activeKey: "fechado",
    ariaLabel: "Menu principal",
  },
};

export const ContractedClosed: Story = {
  args: {
    variant: "contracted",
    activeKey: "fechado",
    ariaLabel: "Menu principal",
  },
};

export const Playground: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey ?? "fechado");
    return <MenuErp {...args} activeKey={activeKey} onSelect={setActiveKey} />;
  },
  args: {
    variant: "expanded",
    activeKey: "vendas",
    ariaLabel: "Menu principal",
  },
};

