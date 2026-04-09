import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MenuErp } from "./MenuErp";
import type { MenuErpItemKey } from "./MenuErp";

const meta: Meta<typeof MenuErp> = {
  title: "components/MenuErp",
  component: MenuErp,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["expanded", "contracted"],
      description: "Estado expandido (248 px) ou contraído (56 px)",
    },
    activeKey: {
      control: "select",
      options: [
        null,
        "solucoes", "vendas", "produtos", "suprimentos",
        "servicos", "financas", "contatos", "relatorios", "atalhos",
        "menu-usuario", "notificacoes", "configuracoes", "suporte",
      ],
      description: "Item atualmente selecionado",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuErp>;

export const Expandido: Story = {
  args: {
    variant: "expanded",
    activeKey: null,
    userInitials: "PN",
    userName: "Menu do Usuário",
  },
};

export const Retraido: Story = {
  args: {
    variant: "contracted",
    activeKey: null,
    userInitials: "PN",
    userName: "Menu do Usuário",
  },
};

export const ItemAtivo: Story = {
  args: {
    variant: "expanded",
    activeKey: "vendas",
    userInitials: "PN",
    userName: "Menu do Usuário",
  },
};

export const RetraidoComItemAtivo: Story = {
  args: {
    variant: "contracted",
    activeKey: "configuracoes",
    userInitials: "PN",
    userName: "Menu do Usuário",
  },
};

export const Playground: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = useState<MenuErpItemKey | null>(
      args.activeKey ?? null
    );
    return (
      <MenuErp
        {...args}
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key)}
      />
    );
  },
  args: {
    variant: "expanded",
    activeKey: "vendas",
    userInitials: "AC",
    userName: "Acme Comércio",
  },
};
