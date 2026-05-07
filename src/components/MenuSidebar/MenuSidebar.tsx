import React from "react";
import styles from "./MenuSidebar.module.css";
import { Icon, IconName } from "../Icon";
import { logoToggleSvg, logoSymbolSvg, logoWordmarkSvg } from "../../assets/logo";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SidebarKey =
  | "fechado"
  | "soluções da olist"
  | "vendas"
  | "produtos"
  | "suprimentos"
  | "serviços"
  | "finanças"
  | "clientes e fornecedores"
  | "relatórios"
  | "meus atalhos"
  | "menu de usuário"
  | "notificações"
  | "configurações"
  | "central de suporte";

interface PanelItem {
  label: string;
  iconName?: IconName;
  isNew?: boolean;
}

interface PanelSection {
  label?: string;
  items: PanelItem[];
}

interface PanelContent {
  title: string;
  sections: PanelSection[];
}

interface NavItem {
  key: SidebarKey;
  label: string;
  iconName: IconName;
}

// ─── Itens de navegação principal ────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { key: "soluções da olist",       label: "Soluções Olist",         iconName: "apps"            },
  { key: "vendas",                  label: "Vendas",                 iconName: "tag"             },
  { key: "produtos",                label: "Produtos",               iconName: "product-catalog" },
  { key: "suprimentos",             label: "Suprimentos",            iconName: "wholesale"       },
  { key: "serviços",                label: "Serviços",               iconName: "services"        },
  { key: "finanças",                label: "Finanças",               iconName: "wallet"          },
  { key: "clientes e fornecedores", label: "Clientes e fornecedores",iconName: "profile"         },
  { key: "relatórios",              label: "Relatórios",             iconName: "file-graph"      },
  { key: "meus atalhos",            label: "Meus atalhos",           iconName: "bookmark"        },
];

const FOOTER_ITEMS: NavItem[] = [
  { key: "notificações",       label: "Notificações",       iconName: "bell"     },
  { key: "configurações",      label: "Configurações",      iconName: "settings" },
  { key: "central de suporte", label: "Central de suporte", iconName: "support"  },
];

// ─── Conteúdo dos painéis ─────────────────────────────────────────────────────

const PANELS: Partial<Record<SidebarKey, PanelContent>> = {
  vendas: {
    title: "Vendas",
    sections: [
      {
        label: "Vendas",
        items: [
          { label: "Propostas comerciais",    iconName: "invoice"          },
          { label: "Pedidos de venda",        iconName: "shopping-cart", isNew: true },
          { label: "PDV",                     iconName: "pay-machine-card" },
          { label: "Nota fiscal (NF-e)",      iconName: "file-nf"          },
          { label: "Nota consumidor (NFC-e)", iconName: "file-nf"          },
        ],
      },
      {
        label: "Ecommerce",
        items: [
          { label: "Google Shopping",         iconName: "shopping-bag"  },
          { label: "Pedidos no ecommerce",    iconName: "ecommerce"     },
          { label: "Perguntas de pré-venda",  iconName: "chat-bubbles"  },
          { label: "Pós-venda",               iconName: "reply"         },
        ],
      },
      {
        label: "Operação",
        items: [
          { label: "Separação", iconName: "package-manage" },
          { label: "Expedição", iconName: "truck"          },
          { label: "Devolução", iconName: "package-cancel" },
        ],
      },
      {
        label: "Relatórios",
        items: [
          { label: "Comissões",              iconName: "percentual"    },
          { label: "Margem de contribuição", iconName: "chart-bar-up"  },
          { label: "Performance de vendas",  iconName: "graph-desktop" },
        ],
      },
    ],
  },
  produtos: {
    title: "Produtos",
    sections: [
      {
        items: [
          { label: "Meus produtos"          },
          { label: "Anúncios"               },
          { label: "Categorias de produtos" },
          { label: "Embalagens"             },
          { label: "Promoções"              },
          { label: "Relatórios"             },
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
          { label: "Giro de estoque"     },
        ],
      },
      {
        label: "Compras",
        items: [
          { label: "Conferência de compra"     },
          { label: "Ficha de importação (FCI)" },
          { label: "Necessidade de compra"     },
          { label: "Ordem de compra"           },
          { label: "Notas de entrada"          },
        ],
      },
      {
        label: "Operação",
        items: [
          { label: "Ordens de produção" },
          { label: "Serviços tomados"   },
          { label: "Envios fulfillment" },
          { label: "Relatórios"         },
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
          { label: "Contratos"            },
          { label: "Ordens de serviços"   },
          { label: "Nota de serviço"      },
          { label: "Cobranças"            },
          { label: "Relatórios"           },
        ],
      },
    ],
  },
  finanças: {
    title: "Finanças",
    sections: [
      {
        items: [
          { label: "Caixa"               },
          { label: "Conta Digital"       },
          { label: "Contas a pagar"      },
          { label: "Contas a receber"    },
          { label: "Cobranças bancárias" },
          { label: "Extratos bancários"  },
          { label: "Pix"                 },
        ],
      },
    ],
  },
  "clientes e fornecedores": {
    title: "Clientes e fornecedores",
    sections: [
      {
        items: [
          { label: "CRM"                     },
          { label: "Agenda"                  },
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
          { label: "Vendas"    },
          { label: "Finanças"  },
        ],
      },
    ],
  },
  "meus atalhos": {
    title: "Meus atalhos",
    sections: [
      { items: [{ label: "Adicionar atalho" }] },
    ],
  },
  "menu de usuário": {
    title: "Menu do Usuário",
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
          { label: "Minha conta"      },
          { label: "Upgrade de plano" },
        ],
      },
    ],
  },
  notificações: {
    title: "Notificações",
    sections: [
      {
        items: [
          { label: "Novos pedidos disponíveis para separação"                   },
          { label: "Não foi possível enviar o anúncio para integração Amazon"   },
          { label: "Anúncio enviado para integração Amazon com sucesso"         },
          { label: "Erro ao atualizar estoque do produto com o ecommerce iFood" },
        ],
      },
    ],
  },
  configurações: {
    title: "Configurações",
    sections: [
      {
        items: [
          { label: "Sistema"              },
          { label: "Painel de automações" },
          { label: "Integrações"          },
          { label: "Extensões"            },
        ],
      },
    ],
  },
  "central de suporte": {
    title: "Central de suporte",
    sections: [
      {
        items: [
          { label: "Central de ajuda" },
          { label: "Suporte"          },
        ],
      },
      {
        label: "Outros recursos",
        items: [
          { label: "Novidades da versão" },
          { label: "Canal de ideias"     },
          { label: "Atalhos do teclado"  },
          { label: "Indique e ganhe"     },
        ],
      },
    ],
  },
  "soluções da olist": {
    title: "Soluções Olist",
    sections: [
      {
        items: [
          { label: "Sistema ERP"       },
          { label: "Hub de Integração" },
          { label: "Sistema PDV"       },
          { label: "Conta Digital"     },
          { label: "Envios"            },
          { label: "Ecommerce"         },
          { label: "Crédito"           },
          { label: "Agentes de IA"     },
        ],
      },
    ],
  },
};

// ─── Props ────────────────────────────────────────────────────────────────────

export interface MenuSidebarProps {
  className?: string;
  /** Exibição expandida (ícone + rótulo) ou contraída (só ícone). */
  variant?: "expanded" | "contracted";
  /** Item ativo; "fechado" = nenhum painel aberto. */
  activeKey?: SidebarKey;
  /** Iniciais exibidas no avatar do usuário. */
  userInitials?: string;
  /** Label do botão de usuário. */
  userName?: string;
  /** Callback acionado ao selecionar qualquer item. */
  onSelect?: (key: SidebarKey) => void;
  /** Aria-label para o elemento nav. */
  ariaLabel?: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

// ─── Componente principal ─────────────────────────────────────────────────────

export const MenuSidebar = ({
  className,
  variant = "expanded",
  activeKey = "fechado",
  userInitials = "PN",
  userName = "Menu do Usuário",
  onSelect,
  ariaLabel = "Menu principal",
}: MenuSidebarProps) => {
  const isContracted = variant === "contracted";
  const showPanel = activeKey !== "fechado";
  const activePanel = showPanel ? PANELS[activeKey] ?? null : null;

  return (
    <nav
      className={cx(styles.root, isContracted && styles.rootContracted, className)}
      aria-label={ariaLabel}
    >
      {/* ── Sidebar ── */}
      <div className={cx(styles.sidebar, isContracted && styles.sidebarContracted)}>

        {/* Logo */}
        <div className={styles.logoArea}>
          {isContracted ? (
            <div className={styles.logoContractedWrap} aria-hidden="true">
              <span
                className={styles.logoContractedImg}
                dangerouslySetInnerHTML={{ __html: logoSymbolSvg }}
              />
            </div>
          ) : (
            <div className={styles.logoExpandedWrap} aria-hidden="true">
              <span
                className={styles.logoToggle}
                dangerouslySetInnerHTML={{ __html: logoToggleSvg }}
              />
              <span
                className={styles.logoWordmark}
                dangerouslySetInnerHTML={{ __html: logoWordmarkSvg }}
              />
            </div>
          )}
        </div>

        {/* Itens de navegação principais */}
        <div className={styles.navList} role="list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeKey === item.key;
            return (
              <div key={item.key} role="listitem">
                <button
                  type="button"
                  className={cx(
                    styles.navItem,
                    isContracted && styles.navItemContracted,
                    isActive && styles.navItemActive,
                  )}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => onSelect?.(item.key)}
                >
                  <span className={styles.navIcon} aria-hidden="true">
                    <Icon name={item.iconName} size={20} />
                  </span>
                  {!isContracted && (
                    <span className={cx(styles.navLabel, isActive && styles.navLabelActive)}>
                      {item.label}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Menu do usuário (rodapé) */}
        <div className={styles.userSection}>
          <button
            type="button"
            className={cx(
              styles.navItem,
              isContracted && styles.navItemContracted,
              activeKey === "menu de usuário" && styles.navItemActive,
            )}
            aria-label={userName}
            aria-current={activeKey === "menu de usuário" ? "page" : undefined}
            onClick={() => onSelect?.("menu de usuário")}
          >
            <span className={styles.userAvatar} aria-hidden="true">
              {userInitials}
            </span>
            {!isContracted && (
              <span className={cx(styles.navLabel, activeKey === "menu de usuário" && styles.navLabelActive)}>
                {userName}
              </span>
            )}
          </button>

          <div role="list">
            {FOOTER_ITEMS.map((item) => {
              const isActive = activeKey === item.key;
              return (
                <div key={item.key} role="listitem">
                  <button
                    type="button"
                    className={cx(
                      styles.navItem,
                      isContracted && styles.navItemContracted,
                      isActive && styles.navItemActive,
                    )}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => onSelect?.(item.key)}
                  >
                    <span className={styles.navIcon} aria-hidden="true">
                      <Icon name={item.iconName} size={20} />
                    </span>
                    {!isContracted && (
                      <span className={cx(styles.navLabel, isActive && styles.navLabelActive)}>
                        {item.label}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Painel lateral ── */}
      {showPanel && activePanel && (
        <section className={styles.panel} aria-label={activePanel.title}>
          <header className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>{activePanel.title}</h2>
          </header>

          <div className={styles.panelBody}>
            {activePanel.sections.map((section, idx) => (
              <div key={idx} className={styles.panelSection}>
                {section.label && (
                  <div className={styles.sectionDivider}>
                    <span className={styles.sectionDividerText}>{section.label}</span>
                  </div>
                )}
                <div className={styles.panelItems} role="list">
                  {section.items.map((panelItem) => (
                    <button
                      key={panelItem.label}
                      type="button"
                      className={styles.panelItem}
                      aria-label={panelItem.label}
                      role="listitem"
                    >
                      <span className={styles.panelItemIcon} aria-hidden="true">
                        {panelItem.iconName ? (
                          <Icon name={panelItem.iconName} size={16} />
                        ) : (
                          <span className={styles.placeholderIcon} />
                        )}
                      </span>
                      <span className={styles.panelItemLabel}>{panelItem.label}</span>
                      {panelItem.isNew && (
                        <span className={styles.tagNew} aria-label="novo">
                          novo
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </nav>
  );
};
