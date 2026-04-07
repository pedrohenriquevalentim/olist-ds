import React from "react";
import styles from "./MenuErp.module.css";

type SideMenuKey =
  | "fechado"
  | "soluções da olist"
  | "vendas"
  | "produtos"
  | "suprimentos"
  | "serviços"
  | "finanças"
  | "clientes e fornecedores"
  | "relatórios"
  | "menu do usuário"
  | "menu de usuário"
  | "notificações"
  | "configurações"
  | "central de suporte";

interface MenuItem {
  key: SideMenuKey;
  label: string;
  iconSrc: string;
  hasNew?: boolean;
}

interface PanelItem {
  label: string;
  iconSrc?: string;
}

interface PanelSection {
  label?: string;
  items: PanelItem[];
}

interface PanelContent {
  title: string;
  sections: PanelSection[];
  footer?: React.ReactNode;
}

const imgToggle = "https://www.figma.com/api/mcp/asset/ec7a6bb1-38d0-4497-b2ff-29163d45c3f3";
const imgOlist = "https://www.figma.com/api/mcp/asset/30c02535-58e0-43bd-89bb-f680936c4829";
const imgToggleYellow = "https://www.figma.com/api/mcp/asset/039e8b83-e189-4c40-9d57-80d3422b415e";
const imgToggleYellowCircle = "https://www.figma.com/api/mcp/asset/c24fc679-a108-4f00-aade-8b6a87f282dc";

const NAV_ITEMS: MenuItem[] = [
  { key: "soluções da olist", label: "Soluções Olist", iconSrc: "https://www.figma.com/api/mcp/asset/e6a66632-bc79-4122-b54a-0ebaa54f4a9e" },
  { key: "vendas", label: "Vendas", iconSrc: "https://www.figma.com/api/mcp/asset/424c0c20-d5b3-4d0e-a40e-d15824e77cf3" },
  { key: "produtos", label: "Produtos", iconSrc: "https://www.figma.com/api/mcp/asset/22b20de7-562a-49ce-be1d-d3fa1ca3327c" },
  { key: "suprimentos", label: "Suprimentos", iconSrc: "https://www.figma.com/api/mcp/asset/4888e774-f947-41fb-9a9d-9b4e387b48a3" },
  { key: "serviços", label: "Serviços", iconSrc: "https://www.figma.com/api/mcp/asset/507cde7c-8f2c-4af2-843b-5f706b6a970e" },
  { key: "finanças", label: "Finanças", iconSrc: "https://www.figma.com/api/mcp/asset/0f8843df-0f65-4d78-a129-130b500295ec" },
  { key: "clientes e fornecedores", label: "Clientes e fornecedores", iconSrc: "https://www.figma.com/api/mcp/asset/d005b9eb-adaf-4490-8ead-7da2b576016b" },
  { key: "relatórios", label: "Relatórios", iconSrc: "https://www.figma.com/api/mcp/asset/7375783e-8364-4c95-a9cd-ca8fa667d792" },
  { key: "fechado", label: "Meus atalhos", iconSrc: "https://www.figma.com/api/mcp/asset/65c3fd0f-02ed-40b4-a313-5a461f4e3a4d" },
];

const USER_ROOT_ITEM: MenuItem = {
  key: "menu do usuário",
  label: "Menu do Usuário",
  iconSrc: "",
};

const USER_ITEMS: MenuItem[] = [
  { key: "notificações", label: "Notificações", iconSrc: "https://www.figma.com/api/mcp/asset/2fa32f67-7be2-4b01-bfc0-286959a04532" },
  { key: "configurações", label: "Configurações", iconSrc: "https://www.figma.com/api/mcp/asset/30b29f4b-3040-4364-915a-a45dd1bb83ba" },
  { key: "central de suporte", label: "Central de suporte", iconSrc: "https://www.figma.com/api/mcp/asset/45bbd5ae-1e83-4a2a-9ef9-1112146b647b" },
];

const PANEL_BY_KEY: Record<Exclude<SideMenuKey, "fechado">, PanelContent> = {
  "soluções da olist": {
    title: "Soluções da Olist",
    sections: [
      {
        items: [
          { label: "Conta Digital" },
          { label: "Envios" },
          { label: "E-commerce" },
        ],
      },
    ],
  },
  vendas: {
    title: "Vendas",
    sections: [
      {
        items: [
          { label: "Propostas comerciais" },
          { label: "Pedidos de venda" },
          { label: "PDV" },
          { label: "Nota fiscal (NF-e)" },
          { label: "Nota consumidor (NFC-e)" },
        ],
      },
      {
        label: "Ecommerce",
        items: [
          { label: "Google Shopping" },
          { label: "Pedidos no ecommerce" },
          { label: "Perguntas de pré-venda" },
          { label: "Pós-venda" },
        ],
      },
      {
        label: "Operação",
        items: [
          { label: "Separação" },
          { label: "Expedição" },
          { label: "Devolução" },
        ],
      },
      {
        label: "Relatórios",
        items: [
          { label: "Comissões" },
          { label: "Margem de contribuição" },
          { label: "Performance de vendas" },
        ],
      },
    ],
  },
  produtos: {
    title: "Produtos",
    sections: [
      {
        items: [
          { label: "Meus produtos" },
          { label: "Anúncios" },
          { label: "Categorias de produtos" },
          { label: "Embalagens" },
          { label: "Promoções" },
          { label: "Relatórios" },
        ],
      },
    ],
  },
  suprimentos: {
    title: "Suprimentos",
    sections: [
      {
        items: [
          { label: "Controle de estoque" },
          { label: "Giro de estoque" },
        ],
      },
      {
        label: "Compras",
        items: [
          { label: "Conferência de compra" },
          { label: "Ficha de importação (FCI)" },
          { label: "Necessidade de compra" },
          { label: "Ordem de compra" },
          { label: "Notas de entrada" },
        ],
      },
      {
        label: "Operação",
        items: [
          { label: "Ordens de produção" },
          { label: "Serviços tomados" },
          { label: "Envios fulfillment" },
          { label: "Relatórios" },
        ],
      },
    ],
  },
  serviços: {
    title: "Serviços",
    sections: [
      {
        items: [
          { label: "Cadastro de serviços" },
          { label: "Contratos" },
          { label: "Ordens de serviços" },
          { label: "Nota de serviço" },
          { label: "Cobranças" },
          { label: "Relatórios" },
        ],
      },
    ],
  },
  finanças: {
    title: "Finanças",
    sections: [
      {
        items: [
          { label: "Caixa" },
          { label: "Conta Digital" },
          { label: "Contas a pagar" },
          { label: "Contas a receber" },
          { label: "Cobranças bancárias" },
          { label: "Extratos bancários" },
          { label: "Pix" },
        ],
      },
    ],
  },
  "clientes e fornecedores": {
    title: "Clientes e fornecedores",
    sections: [
      {
        items: [
          { label: "CRM" },
          { label: "Agenda" },
          { label: "Clientes e fornecedores" },
        ],
      },
    ],
  },
  relatórios: {
    title: "Relatórios",
    sections: [
      {
        items: [
          { label: "Dashboard" },
          { label: "Vendas" },
          { label: "Finanças" },
        ],
      },
    ],
  },
  "menu do usuário": {
    title: "Menu do usuário",
    sections: [
      {
        items: [
          { label: "Dados do usuário" },
          { label: "Dados da empresa" },
        ],
      },
      {
        label: "Conta",
        items: [
          { label: "Minha conta" },
          { label: "Upgrade de plano" },
        ],
      },
      {
        label: "Ferramentas",
        items: [
          { label: "Shopping de serviços" },
          { label: "Ferramentas" },
        ],
      },
    ],
    footer: (
      <button type="button" className={styles.logoutButton} aria-label="Sair do sistema">
        <span className={styles.logoutIcon} aria-hidden="true" />
        <span className={styles.logoutText}>sair do sistema</span>
      </button>
    ),
  },
  "menu de usuário": {
    title: "Menu do usuário",
    sections: [
      {
        items: [
          { label: "Dados do usuário" },
          { label: "Dados da empresa" },
        ],
      },
      {
        label: "Conta",
        items: [
          { label: "Minha conta" },
          { label: "Upgrade de plano" },
        ],
      },
      {
        label: "Ferramentas",
        items: [
          { label: "Shopping de serviços" },
          { label: "Ferramentas" },
        ],
      },
    ],
    footer: (
      <button type="button" className={styles.logoutButton} aria-label="Sair do sistema">
        <span className={styles.logoutIcon} aria-hidden="true" />
        <span className={styles.logoutText}>sair do sistema</span>
      </button>
    ),
  },
  notificações: {
    title: "Notificações",
    sections: [
      {
        items: [
          { label: "Novos pedidos disponíveis para separação", iconSrc: "" },
          { label: "Não foi possível enviar o anúncio “Marcador Preview Teste (39_27)” para integração Amazon", iconSrc: "" },
          { label: "Anúncio “Túlo AMZ_Fabrica_Test_New” foi enviado para integração Amazon", iconSrc: "" },
          { label: "Ocorreu um erro ao atualizar o estoque do produto “Coca-cola Original 1,5l” com o ecommerce iFood", iconSrc: "" },
          { label: "Loja de guias de pagamento processado com erros. Clique aqui para acessar o módulo e conferir o resultado", iconSrc: "" },
        ],
      },
    ],
    footer: (
      <button type="button" className={styles.secondaryButton} aria-label="Ler todas as notificações">
        ler todas
      </button>
    ),
  },
  configurações: {
    title: "Configurações",
    sections: [
      {
        items: [
          { label: "Sistema" },
          { label: "Painel de automações" },
          { label: "Integrações" },
          { label: "Extensões" },
        ],
      },
      {
        label: "Preferências",
        items: [],
      },
    ],
    footer: (
      <div className={styles.preferences}>
        <div className={styles.prefRow}>
          <span className={styles.prefLabel}>Menu</span>
          <div className={styles.segmented} role="radiogroup" aria-label="Preferência de menu">
            <button type="button" className={styles.segment} aria-checked="false" role="radio">
              contraido
            </button>
            <button type="button" className={`${styles.segment} ${styles.segmentSelected}`} aria-checked="true" role="radio">
              expandido
            </button>
          </div>
        </div>
        <div className={styles.prefRow}>
          <span className={styles.prefLabel}>Tema</span>
          <div className={styles.segmented} role="radiogroup" aria-label="Preferência de tema">
            <button type="button" className={`${styles.segment} ${styles.segmentSelected}`} aria-checked="true" role="radio">
              padrão
            </button>
            <button type="button" className={styles.segment} aria-checked="false" role="radio">
              claro
            </button>
            <button type="button" className={styles.segment} aria-checked="false" role="radio">
              escuro
            </button>
          </div>
        </div>
      </div>
    ),
  },
  "central de suporte": {
    title: "Central de suporte",
    sections: [
      {
        items: [
          { label: "Central de ajuda" },
          { label: "Suporte" },
        ],
      },
      {
        label: "Outros recursos",
        items: [
          { label: "Novidades da versão" },
          { label: "Canal de ideias" },
          { label: "Atalhos do teclado" },
          { label: "Indique e ganhe" },
        ],
      },
    ],
  },
};

export interface MenuErpProps {
  className?: string;
  /** Estado visual do menu no design. */
  variant?: "expanded" | "contracted";
  /** Item ativo no menu lateral (destaca e abre painel quando aplicável). */
  activeKey?: SideMenuKey;
  /** Callback para clique nos itens (menu principal e menu do usuário). */
  onSelect?: (key: SideMenuKey) => void;
  /** Texto de acessibilidade para o `<nav>`. */
  ariaLabel?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const MenuErp = ({
  className,
  variant = "expanded",
  activeKey = "fechado",
  onSelect,
  ariaLabel = "Menu principal",
}: MenuErpProps) => {
  const isContracted = variant === "contracted";
  const showPanel = activeKey !== "fechado";
  const activePanel = activeKey === "fechado" ? null : PANEL_BY_KEY[activeKey as Exclude<SideMenuKey, "fechado">];
  const isNotificationPanel = activeKey === "notificações";

  return (
    <nav className={cx(styles.root, isContracted ? styles.contracted : styles.expanded, className)} aria-label={ariaLabel}>
      <div className={styles.sidebar}>
        <div className={styles.logoArea} aria-hidden="true">
          {isContracted ? (
            <div className={styles.logoCompact}>
              <span className={styles.logoToggleWrap}>
                <img className={styles.logoToggle} alt="" src={imgToggleYellow} />
                <img className={styles.logoToggleCircle} alt="" src={imgToggleYellowCircle} />
              </span>
            </div>
          ) : (
            <div className={styles.logoFull}>
              <img className={styles.logoToggle} alt="" src={imgToggle} />
              <img className={styles.logoWordmark} alt="olist" src={imgOlist} />
            </div>
          )}
        </div>

        <div className={styles.navList} role="list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeKey === item.key;
            return (
              <button
                key={item.key}
                type="button"
                className={cx(styles.navItem, isActive && styles.navItemSelected, isContracted && styles.navItemIconOnly)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={() => onSelect?.(item.key)}
              >
                <span className={styles.navIcon} aria-hidden="true">
                  <img alt="" src={item.iconSrc} />
                </span>
                {!isContracted && <span className={cx(styles.navLabel, isActive && styles.navLabelSelected)}>{item.label}</span>}
                {!isContracted && item.hasNew && <span className={styles.tagNew} aria-label="novo" />}
                {isContracted && item.hasNew && <span className={styles.dotNew} aria-label="novo" />}
              </button>
            );
          })}
        </div>

        <div className={styles.userArea}>
          <button
            type="button"
            className={cx(styles.userRoot, isContracted && styles.navItemIconOnly, activeKey === USER_ROOT_ITEM.key && styles.navItemSelected)}
            aria-label={USER_ROOT_ITEM.label}
            aria-current={activeKey === USER_ROOT_ITEM.key ? "page" : undefined}
            onClick={() => onSelect?.(USER_ROOT_ITEM.key)}
          >
            <span className={styles.avatar} aria-hidden="true">
              <span className={styles.avatarCircle}>PN</span>
            </span>
            {!isContracted && <span className={cx(styles.navLabel, activeKey === USER_ROOT_ITEM.key && styles.navLabelSelected)}>{USER_ROOT_ITEM.label}</span>}
          </button>

          <div className={styles.userList} role="list">
            {USER_ITEMS.map((item) => {
              const isActive = activeKey === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  className={cx(styles.navItem, isActive && styles.navItemSelected, isContracted && styles.navItemIconOnly)}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => onSelect?.(item.key)}
                >
                  <span className={styles.navIcon} aria-hidden="true">
                    {item.iconSrc ? <img alt="" src={item.iconSrc} /> : null}
                  </span>
                  {!isContracted && <span className={cx(styles.navLabel, isActive && styles.navLabelSelected)}>{item.label}</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {showPanel && activePanel ? (
        <section className={styles.panel} aria-label={activePanel.title}>
          <header className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>{activePanel.title}</h2>
          </header>

          <div className={styles.panelBody}>
            {activePanel.sections.map((section, idx) => (
              <div key={idx} className={styles.panelSection}>
                {section.label ? (
                  <div className={styles.sectionDivider} role="heading" aria-level={3}>
                    <span className={styles.sectionDividerText}>{section.label}</span>
                  </div>
                ) : null}
                <div className={styles.panelItems} role="list">
                  {section.items.map((it) => (
                    <button key={it.label} type="button" className={styles.panelItem} aria-label={it.label}>
                      {it.iconSrc ? (
                        <span className={styles.panelItemIcon} aria-hidden="true">
                          <img alt="" src={it.iconSrc} />
                        </span>
                      ) : (
                        <span className={isNotificationPanel ? styles.bullet : styles.placeholderIcon} aria-hidden="true" />
                      )}
                      <span className={styles.panelItemLabel}>{it.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {activePanel.footer ? <footer className={styles.panelFooter}>{activePanel.footer}</footer> : null}
        </section>
      ) : null}
    </nav>
  );
};

