import React from "react";
import styles from "./MenuErp.module.css";
import { Icon, IconName } from "../Icon";
import { logoToggleSvg, logoSymbolSvg, logoWordmarkSvg } from "../../assets/logo";

// ─── Types ────────────────────────────────────────────────────────────────────

export type MenuErpItemKey =
  | "solucoes"
  | "vendas"
  | "produtos"
  | "suprimentos"
  | "servicos"
  | "financas"
  | "contatos"
  | "relatorios"
  | "atalhos"
  | "menu-usuario"
  | "notificacoes"
  | "configuracoes"
  | "suporte";

interface MenuItem {
  key: MenuErpItemKey;
  label: string;
  iconName: IconName;
  isNew?: boolean;
}

// ─── Dados ────────────────────────────────────────────────────────────────────

const MAIN_ITEMS: MenuItem[] = [
  { key: "solucoes",    label: "Soluções Olist",          iconName: "apps"            },
  { key: "vendas",      label: "Vendas",                  iconName: "tag"             },
  { key: "produtos",    label: "Produtos",                iconName: "product-catalog" },
  { key: "suprimentos", label: "Suprimentos",             iconName: "wholesale"       },
  { key: "servicos",    label: "Serviços",                iconName: "services"        },
  { key: "financas",    label: "Finanças",                iconName: "wallet"          },
  { key: "contatos",    label: "Clientes e fornecedores", iconName: "profile"         },
  { key: "relatorios",  label: "Relatórios",              iconName: "file-graph"      },
  { key: "atalhos",     label: "Meus atalhos",            iconName: "bookmark"        },
];

const USER_ITEMS: MenuItem[] = [
  { key: "notificacoes",  label: "Notificações",       iconName: "bell"     },
  { key: "configuracoes", label: "Configurações",      iconName: "settings" },
  { key: "suporte",       label: "Central de suporte", iconName: "support"  },
];

// ─── Props ────────────────────────────────────────────────────────────────────

export interface MenuErpProps {
  className?: string;
  /** Estado expandido (248 px) ou contraído (56 px). */
  variant?: "expanded" | "contracted";
  /** Chave do item atualmente selecionado. */
  activeKey?: MenuErpItemKey | null;
  /** Iniciais exibidas no avatar do usuário. */
  userInitials?: string;
  /** Nome/título exibido ao lado do avatar (variante expandida). */
  userName?: string;
  /** Callback acionado ao clicar em qualquer item. */
  onSelect?: (key: MenuErpItemKey) => void;
  /** aria-label para o elemento &lt;nav&gt;. */
  ariaLabel?: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

// ─── Componente ───────────────────────────────────────────────────────────────

export const MenuErp = ({
  className,
  variant = "expanded",
  activeKey = null,
  userInitials = "PN",
  userName = "Menu do Usuário",
  onSelect,
  ariaLabel = "Menu principal",
}: MenuErpProps) => {
  const isContracted = variant === "contracted";

  const renderItem = (item: MenuItem) => {
    const isActive = activeKey === item.key;
    return (
      <li key={item.key} role="none">
        <button
          type="button"
          className={cx(
            styles.item,
            isActive && styles.itemActive,
            isContracted && styles.itemContracted,
          )}
          aria-label={item.label}
          aria-current={isActive ? "page" : undefined}
          onClick={() => onSelect?.(item.key)}
        >
          <span className={styles.itemIcon} aria-hidden="true">
            <Icon name={item.iconName} size={20} />
          </span>
          {!isContracted && (
            <span className={styles.itemLabel}>{item.label}</span>
          )}
          {!isContracted && item.isNew && (
            <span className={styles.tagNew} aria-label="novo">novo</span>
          )}
        </button>
      </li>
    );
  };

  return (
    <nav
      className={cx(styles.root, isContracted && styles.rootContracted, className)}
      aria-label={ariaLabel}
    >
      {/* ── Área do logo ── */}
      <div
        className={cx(styles.logoArea, isContracted && styles.logoAreaContracted)}
        aria-hidden="true"
      >
        {isContracted ? (
          <span
            className={styles.logoCompact}
            dangerouslySetInnerHTML={{ __html: logoSymbolSvg }}
          />
        ) : (
          <div className={styles.logoRow}>
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

      {/* ── Lista de navegação principal ── */}
      <div className={styles.menuArea}>
        <ul
          className={styles.itemList}
          role="list"
          aria-label="Navegação principal"
        >
          {MAIN_ITEMS.map(renderItem)}
        </ul>
      </div>

      {/* ── Seção do usuário ── */}
      <div className={cx(styles.userSection, isContracted && styles.userSectionContracted)}>
        <button
          type="button"
          className={cx(
            styles.item,
            styles.userBtn,
            activeKey === "menu-usuario" && styles.itemActive,
            isContracted && styles.itemContracted,
          )}
          aria-label={userName}
          aria-current={activeKey === "menu-usuario" ? "page" : undefined}
          onClick={() => onSelect?.("menu-usuario")}
        >
          <span className={styles.avatar} aria-hidden="true">{userInitials}</span>
          {!isContracted && (
            <span className={styles.itemLabel}>{userName}</span>
          )}
        </button>

        <ul
          className={styles.itemList}
          role="list"
          aria-label="Menu do usuário"
        >
          {USER_ITEMS.map(renderItem)}
        </ul>
      </div>
    </nav>
  );
};
