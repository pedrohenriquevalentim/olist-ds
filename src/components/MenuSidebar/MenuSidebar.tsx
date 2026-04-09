import React from "react";
import styles from "./MenuSidebar.module.css";

// ─── Asset URLs (Figma MCP) ───────────────────────────────────────────────

// Logo — expanded
const imgLogoToggle         = "https://www.figma.com/api/mcp/asset/accef28f-6f7c-4b3f-bc87-3b6b0b2e2f32";
const imgLogoOlist          = "https://www.figma.com/api/mcp/asset/9f214320-1213-4ab8-a54b-ff1c0c158505";
// Logo — contraído (amarelo)
const imgLogoContracted     = "https://www.figma.com/api/mcp/asset/2c4961d8-6100-444c-a021-461893c9718b";

// Ícones dos itens principais (estado padrão)
const imgIconSolucoes       = "https://www.figma.com/api/mcp/asset/992c0ca6-5e6d-4e6e-b7f6-b40c567d8de7";
const imgIconVendas         = "https://www.figma.com/api/mcp/asset/f8be069a-c622-4b9d-a2f4-58be585d92a7";
const imgIconVendasActive   = "https://www.figma.com/api/mcp/asset/ff62911a-7afe-446f-8aeb-b68d39c44708";
const imgIconProdutos       = "https://www.figma.com/api/mcp/asset/d38a0962-23b6-4c9a-8872-1a79b1ca652a";
const imgIconSuprimentos    = "https://www.figma.com/api/mcp/asset/4d4cbc60-f620-4889-a5a6-88b3118fca66";
const imgIconServicos       = "https://www.figma.com/api/mcp/asset/be62dabb-647e-4f20-ba81-3f1c089a5730";
const imgIconFinancas       = "https://www.figma.com/api/mcp/asset/5a61fbfa-e215-494f-8b42-f8263f49a337";
const imgIconClientes       = "https://www.figma.com/api/mcp/asset/0de167fe-182c-4645-826f-92c21ed51d8b";
const imgIconRelatorios     = "https://www.figma.com/api/mcp/asset/2c1e66fe-de20-49a3-b5a4-ce2216719692";
const imgIconAtalhos        = "https://www.figma.com/api/mcp/asset/194f241b-be9a-419c-b557-720c9f60285f";

// Ícones do rodapé
const imgIconNotificacoes   = "https://www.figma.com/api/mcp/asset/ed095f1b-ec2f-42a5-bd5c-50b2855ef4b3";
const imgIconConfiguracoes  = "https://www.figma.com/api/mcp/asset/394570e4-f587-48f9-a9b6-cc765460493e";
const imgIconSuporte        = "https://www.figma.com/api/mcp/asset/f04fd1aa-1cbb-48c7-9df8-45a9e0e866b3";

// Ícones do painel Vendas
const imgPanPropostas       = "https://www.figma.com/api/mcp/asset/3402bfde-4c43-4f0c-a9c0-53b9cc7b6037";
const imgPanPedidos         = "https://www.figma.com/api/mcp/asset/5a3f6e93-cb06-4c84-b826-863d5cc7e3d9";
const imgPanPdv             = "https://www.figma.com/api/mcp/asset/5cce8cff-562b-4e06-ade1-bf189ac25a91";
const imgPanNfe             = "https://www.figma.com/api/mcp/asset/fd38f367-d31b-415c-92ad-f4be88821257";
const imgPanGoogleShopping  = "https://www.figma.com/api/mcp/asset/569d4c02-d504-42ae-a668-42b5d792a653";
const imgPanPedidosEco      = "https://www.figma.com/api/mcp/asset/e5957202-1d8a-4822-bda7-c288bcbebc3d";
const imgPanPerguntas       = "https://www.figma.com/api/mcp/asset/b278bd71-cbe0-466d-8434-29e8f90632af";
const imgPanPosVenda        = "https://www.figma.com/api/mcp/asset/127241a0-6937-4565-9a62-02bd0aea615f";
const imgPanSeparacao       = "https://www.figma.com/api/mcp/asset/b6bdee0e-0925-4f80-ade9-745bc26b8951";
const imgPanExpedicao       = "https://www.figma.com/api/mcp/asset/70e49384-b7e9-48c6-a8da-dee092702be6";
const imgPanDevolucao       = "https://www.figma.com/api/mcp/asset/90fabd86-a0b2-4ffd-b055-d2591bddd6b3";
const imgPanComissoes       = "https://www.figma.com/api/mcp/asset/5a3f6e93-cb06-4c84-b826-863d5cc7e3d9";
const imgPanMargem          = "https://www.figma.com/api/mcp/asset/edaad5fe-ac91-4edc-a9dd-bd5decd0b2e7";
const imgPanPerformance     = "https://www.figma.com/api/mcp/asset/addfff07-7946-406f-9619-bacfda64fb65";

// ─── Types ────────────────────────────────────────────────────────────────

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
  iconSrc?: string;
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

// ─── Itens de navegação principal ────────────────────────────────────────

interface NavItem {
  key: SidebarKey;
  label: string;
  iconSrc: string;
  iconActiveSrc?: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "soluções da olist",        label: "Soluções Olist",         iconSrc: imgIconSolucoes   },
  { key: "vendas",                   label: "Vendas",                  iconSrc: imgIconVendas, iconActiveSrc: imgIconVendasActive },
  { key: "produtos",                 label: "Produtos",                iconSrc: imgIconProdutos   },
  { key: "suprimentos",              label: "Suprimentos",             iconSrc: imgIconSuprimentos },
  { key: "serviços",                 label: "Serviços",                iconSrc: imgIconServicos   },
  { key: "finanças",                 label: "Finanças",                iconSrc: imgIconFinancas   },
  { key: "clientes e fornecedores",  label: "Clientes e fornecedores", iconSrc: imgIconClientes   },
  { key: "relatórios",               label: "Relatórios",              iconSrc: imgIconRelatorios },
  { key: "meus atalhos",             label: "Meus atalhos",            iconSrc: imgIconAtalhos    },
];

const FOOTER_ITEMS: NavItem[] = [
  { key: "notificações",       label: "Notificações",       iconSrc: imgIconNotificacoes  },
  { key: "configurações",      label: "Configurações",      iconSrc: imgIconConfiguracoes },
  { key: "central de suporte", label: "Central de suporte", iconSrc: imgIconSuporte       },
];

// ─── Conteúdo dos painéis ─────────────────────────────────────────────────

const PANELS: Partial<Record<SidebarKey, PanelContent>> = {
  vendas: {
    title: "Vendas",
    sections: [
      {
        label: "Vendas",
        items: [
          { label: "Propostas comerciais",    iconSrc: imgPanPropostas },
          { label: "Pedidos de venda",        iconSrc: imgPanPedidos, isNew: true },
          { label: "PDV",                     iconSrc: imgPanPdv      },
          { label: "Nota fiscal (NF-e)",      iconSrc: imgPanNfe      },
          { label: "Nota consumidor (NFC-e)", iconSrc: imgPanNfe      },
        ],
      },
      {
        label: "Ecommerce",
        items: [
          { label: "Google Shopping",         iconSrc: imgPanGoogleShopping },
          { label: "Pedidos no ecommerce",    iconSrc: imgPanPedidosEco     },
          { label: "Perguntas de pré-venda",  iconSrc: imgPanPerguntas      },
          { label: "Pós-venda",               iconSrc: imgPanPosVenda       },
        ],
      },
      {
        label: "Operação",
        items: [
          { label: "Separação", iconSrc: imgPanSeparacao },
          { label: "Expedição", iconSrc: imgPanExpedicao },
          { label: "Devolução", iconSrc: imgPanDevolucao },
        ],
      },
      {
        label: "Relatórios",
        items: [
          { label: "Comissões",              iconSrc: imgPanComissoes   },
          { label: "Margem de contribuição", iconSrc: imgPanMargem      },
          { label: "Performance de vendas",  iconSrc: imgPanPerformance },
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
          { label: "Minha conta"     },
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
          { label: "Novos pedidos disponíveis para separação"                  },
          { label: "Não foi possível enviar o anúncio para integração Amazon"  },
          { label: "Anúncio enviado para integração Amazon com sucesso"        },
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

// ─── Props ────────────────────────────────────────────────────────────────

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

// ─── Helper ───────────────────────────────────────────────────────────────

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

// ─── Componente principal ─────────────────────────────────────────────────

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
              <img alt="olist" className={styles.logoContractedImg} src={imgLogoContracted} />
            </div>
          ) : (
            <div className={styles.logoExpandedWrap} aria-hidden="true">
              <img alt="" className={styles.logoToggle} src={imgLogoToggle} />
              <img alt="olist" className={styles.logoWordmark} src={imgLogoOlist} />
            </div>
          )}
        </div>

        {/* Itens de navegação principais */}
        <div className={styles.navList} role="list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeKey === item.key;
            const iconSrc = isActive && item.iconActiveSrc ? item.iconActiveSrc : item.iconSrc;
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
                    <img alt="" className={styles.navIconImg} src={iconSrc} />
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
          {/* Botão principal do usuário */}
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

          {/* Ações do rodapé */}
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
                      <img alt="" className={styles.navIconImg} src={item.iconSrc} />
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
                        {panelItem.iconSrc ? (
                          <img alt="" className={styles.panelItemIconImg} src={panelItem.iconSrc} />
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
