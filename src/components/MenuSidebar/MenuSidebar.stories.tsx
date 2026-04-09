import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { MenuSidebar } from "./MenuSidebar";

const meta: Meta<typeof MenuSidebar> = {
  title: "components/MenuSidebar",
  component: MenuSidebar,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MenuSidebar>;

export const Expandido: Story = {
  args: {
    variant: "expanded",
    activeKey: "fechado",
    ariaLabel: "Menu principal",
  },
};

export const Contraido: Story = {
  args: {
    variant: "contracted",
    activeKey: "fechado",
    ariaLabel: "Menu principal",
  },
};

export const Vendas: Story = {
  args: {
    variant: "expanded",
    activeKey: "vendas",
    ariaLabel: "Menu principal",
  },
};

export const Produtos: Story = {
  args: {
    variant: "expanded",
    activeKey: "produtos",
    ariaLabel: "Menu principal",
  },
};

export const Configuracoes: Story = {
  args: {
    variant: "expanded",
    activeKey: "configurações",
    ariaLabel: "Menu principal",
  },
};

export const Playground: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey ?? "fechado");
    return (
      <MenuSidebar
        {...args}
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key)}
      />
    );
  },
  args: {
    variant: "expanded",
    activeKey: "vendas",
    ariaLabel: "Menu principal",
  },
};
