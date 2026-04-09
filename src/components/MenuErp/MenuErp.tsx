import styles from "./MenuErp.module.css";

// ─── Asset URLs (Figma MCP — válidos por 7 dias) ──────────────────────────────

// Logo — estado expandido
const imgLogoToggle    = "https://www.figma.com/api/mcp/asset/46df82dd-3cba-4104-a56a-c075b6fc0f00";
const imgLogoWordmark  = "https://www.figma.com/api/mcp/asset/8a55c0f0-e517-410d-bc9c-ddcdf121ef7c";
// Logo — estado contraído
const imgLogoCompact   = "https://www.figma.com/api/mcp/asset/64b7be96-f23e-448a-b8b7-56e2e1281d8a";

// Ícones — itens de navegação
const imgSolucoes      = "https://www.figma.com/api/mcp/asset/9e4bc884-dfe4-4fd2-8932-19a8b5aad114";
const imgVendas        = "https://www.figma.com/api/mcp/asset/6ac0e1f5-70b6-4fff-aa76-298806863111";
const imgProdutos      = "https://www.figma.com/api/mcp/asset/577c6ff0-bcaa-47b2-9bc7-5d83a34bad98";
const imgSuprimentos   = "https://www.figma.com/api/mcp/asset/6480d563-d8eb-4a7d-b57a-ed535a253536";
const imgServicos      = "https://www.figma.com/api/mcp/asset/642aca33-0801-450c-aa5b-05e24ad750cb";
const imgFinancas      = "https://www.figma.com/api/mcp/asset/76000550-7e3f-4161-acd4-48422e5f2715";
const imgContatos      = "https://www.figma.com/api/mcp/asset/ce9369c5-cd10-40af-9332-3086cd85294e";
const imgRelatorios    = "https://www.figma.com/api/mcp/asset/37008218-2b8d-4012-82af-ea97282387a4";
const imgAtalhos       = "https://www.figma.com/api/mcp/asset/19582f85-40a8-4f4e-9335-97a0296f17e8";

// Ícones — seção do usuário
const imgNotificacoes  = "https://www.figma.com/api/mcp/asset/621856e0-980f-481a-a6c3-774c2fd9b30c";
const imgConfiguracoes = "https://www.figma.com/api/mcp/asset/affde267-ebd6-4aed-b2f0-8fd5c6b11800";
const imgSuporte       = "https://www.figma.com/api/mcp/asset/5e2438b9-c957-4bce-af4f-5203b12823a2";

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
  iconSrc: string;
  isNew?: boolean;
}

// ─── Dados ────────────────────────────────────────────────────────────────────

const MAIN_ITEMS: MenuItem[] = [
  { key: "solucoes",    label: "Soluções Olist",           iconSrc: imgSolucoes    },
  { key: "vendas",      label: "Vendas",                   iconSrc: imgVendas      },
  { key: "produtos",    label: "Produtos",                 iconSrc: imgProdutos    },
  { key: "suprimentos", label: "Suprimentos",              iconSrc: imgSuprimentos },
  { key: "servicos",    label: "Serviços",                 iconSrc: imgServicos    },
  { key: "financas",    label: "Finanças",                 iconSrc: imgFinancas    },
  { key: "contatos",    label: "Clientes e fornecedores",  iconSrc: imgContatos    },
  { key: "relatorios",  label: "Relatórios",               iconSrc: imgRelatorios  },
  { key: "atalhos",     label: "Meus atalhos",             iconSrc: imgAtalhos     },
];

const USER_ITEMS: MenuItem[] = [
  { key: "notificacoes",  label: "Notificações",       iconSrc: imgNotificacoes  },
  { key: "configuracoes", label: "Configurações",      iconSrc: imgConfiguracoes },
  { key: "suporte",       label: "Central de suporte", iconSrc: imgSuporte       },
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
            <img alt="" className={styles.itemIconImg} src={item.iconSrc} />
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
          <img alt="olist" className={styles.logoCompact} src={imgLogoCompact} />
        ) : (
          <div className={styles.logoRow}>
            <div className={styles.logoMark}>
              <img alt="" className={styles.logoToggle} src={imgLogoToggle} />
            </div>
            <img alt="olist" className={styles.logoWordmark} src={imgLogoWordmark} />
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
        {/* Botão do perfil */}
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

        {/* Itens do usuário */}
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
