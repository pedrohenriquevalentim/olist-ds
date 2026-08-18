import React from 'react';
import styles from './MenuGlobal.module.css';
import { ProdutosOlistIcons } from '../ProdutosOlistIcons';
import type { ProdutoOlist } from '../ProdutosOlistIcons';
import { Icon } from '../Icon';
import { Logo } from '../Logo';

export type ProdutoSelecionado =
  | ProdutoOlist
  | 'Menu do Usuario'
  | 'Notificacoes'
  | 'Configuracoes'
  | 'Central de Ajuda';

const TODOS_PRODUTOS: ProdutoOlist[] = [
  'Sistema ERP',
  'Hub de Integração',
  'Sistema PDV',
  'Conta Digital',
  'Envios',
  'Ecommerce',
  'Crédito',
  'Agentes de IA',
];

const LABEL_PRODUTO: Record<ProdutoOlist, string> = {
  'Sistema ERP': 'Sistema ERP',
  'Hub de Integração': 'Hub de Integração',
  'Sistema PDV': 'Sistema PDV',
  'Conta Digital': 'Conta Digital',
  'Envios': 'Envios',
  'Ecommerce': 'Ecommerce',
  'Crédito': 'Crédito',
  'Agentes de IA': 'Agentes de IA',
};

const LABEL_FOOTER: Record<string, string> = {
  'Menu do Usuario': 'Menu do usuário',
  'Notificacoes': 'Notificações',
  'Configuracoes': 'Configurações',
  'Central de Ajuda': 'Central de Ajuda',
};

const getTooltipLabel = (item: ProdutoSelecionado): string =>
  (LABEL_PRODUTO[item as ProdutoOlist] ?? LABEL_FOOTER[item]) || item;

export interface MenuGlobalProps {
  /** Lista de produtos a exibir. Padrão: todos os 8 produtos Olist. */
  produtos?: ProdutoOlist[];
  /** Produto ou funcionalidade atualmente ativa (controlado externamente). */
  produtoSelecionado?: ProdutoSelecionado;
  /** Monograma de até 2 caracteres exibido no círculo do usuário. */
  avatarLabel?: string;
  /** URL da foto do usuário (círculo superior, 32×32). */
  avatarImageUrl?: string;
  /** URL do logo da empresa (círculo inferior, 28×28, sobreposto 7px ao do usuário). */
  companyLogoUrl?: string;
  /** Monograma de até 2 caracteres para o logo da empresa quando companyLogoUrl não fornecida. */
  companyLogoLabel?: string;
  /** Exibe badge de notificação no ícone de sino. */
  notificacoesPendentes?: boolean;
  /** Callback disparado ao clicar em qualquer item de navegação. */
  onNavigate?: (destino: ProdutoSelecionado) => void;
  className?: string;
}

export const MenuGlobal = ({
  produtos = TODOS_PRODUTOS,
  produtoSelecionado,
  avatarLabel = 'PN',
  avatarImageUrl,
  companyLogoUrl,
  companyLogoLabel,
  notificacoesPendentes = false,
  onNavigate,
  className,
}: MenuGlobalProps) => {
  // Estado interno: atualizado imediatamente no clique e sincronizado com a prop.
  // Padrão "derived state during render": chamamos setSelected durante o render quando a prop muda,
  // evitando useEffect + setState (que causaria cascata e viola react-hooks/set-state-in-effect).
  const [selected, setSelected] = React.useState<ProdutoSelecionado | undefined>(produtoSelecionado);
  const [prevProp, setPrevProp] = React.useState<ProdutoSelecionado | undefined>(produtoSelecionado);
  if (prevProp !== produtoSelecionado) {
    setPrevProp(produtoSelecionado);
    setSelected(produtoSelecionado);
  }

  // Rastreio de hover para icon-fill e tooltip
  const [hovered, setHovered] = React.useState<ProdutoSelecionado | null>(null);
  // Rastreio do item em animação (removido em onAnimationEnd para re-trigger no próximo hover)
  const [animating, setAnimating] = React.useState<ProdutoSelecionado | null>(null);

  const handle = (destino: ProdutoSelecionado) => {
    setSelected(destino);
    onNavigate?.(destino);
  };

  const isSel = (destino: ProdutoSelecionado) => selected === destino;

  const itemProps = (item: ProdutoSelecionado) => ({
    onMouseEnter: () => { setHovered(item); if (!isSel(item)) setAnimating(item); },
    onMouseLeave: () => setHovered(null),
  });

  const hasCompanyLogo = Boolean(companyLogoUrl || companyLogoLabel);

  // Ícones do rodapé: outline → fill em hover ou selecionado
  const bellIcon = (hovered === 'Notificacoes' || isSel('Notificacoes')) ? 'bell-fill' : 'bell';
  const helpIcon = (hovered === 'Central de Ajuda' || isSel('Central de Ajuda')) ? 'help-circle-fill' : 'help-circle';

  return (
    <nav
      className={[styles.container, className].filter(Boolean).join(' ')}
      aria-label="Navegação global"
    >
      {/* Logo */}
      <div className={styles.logoArea}>
        <Logo size="symbol" />
      </div>

      <hr className={styles.divider} aria-hidden="true" />

      {/* Produtos */}
      <ul className={styles.productList} role="menu" aria-label="Produtos">
        {produtos.map((produto) => {
          const sel = isSel(produto);
          const isHov = hovered === produto;
          return (
            <li key={produto} role="none">
              <button
                type="button"
                role="menuitem"
                aria-label={LABEL_PRODUTO[produto]}
                aria-current={sel ? 'page' : undefined}
                className={styles.menuItemBtn}
                onClick={() => handle(produto)}
                {...itemProps(produto)}
              >
                <span
                  className={[styles.menuItemContent, animating === produto ? styles.animPulse : ''].filter(Boolean).join(' ')}
                  onAnimationEnd={() => setAnimating(null)}
                >
                  <ProdutosOlistIcons
                    product={produto}
                    state={sel ? 'active' : 'default'}
                    hovered={isHov && !sel}
                    theme="dark"
                    aria-hidden
                  />
                </span>
                <span className={styles.tooltipContainer} aria-hidden="true">
                  <span className={styles.tooltipArrow} />
                  <span className={styles.tooltipLabel}>{getTooltipLabel(produto)}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <hr className={styles.divider} aria-hidden="true" />

      {/* Usuário */}
      <div className={styles.userSection}>
        <ul role="menu" aria-label="Configurações do usuário" className={styles.userList}>

          {/* Perfil */}
          <li role="none">
            <button
              type="button"
              role="menuitem"
              aria-label="Menu do usuário"
              aria-current={isSel('Menu do Usuario') ? 'page' : undefined}
              className={[
                styles.menuItemBtn,
                styles.avatarBtn,
                isSel('Menu do Usuario') ? styles.itemSelected : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handle('Menu do Usuario')}
              {...itemProps('Menu do Usuario')}
            >
              <span
                className={[styles.menuItemContent, animating === 'Menu do Usuario' ? styles.animPulse : ''].filter(Boolean).join(' ')}
                onAnimationEnd={() => setAnimating(null)}
              >
                {hasCompanyLogo ? (
                  <span className={styles.avatarProfile}>
                    {avatarImageUrl ? (
                      <img src={avatarImageUrl} alt="" className={styles.avatarImage} />
                    ) : (
                      <span className={styles.avatarInitials} aria-hidden="true">
                        {avatarLabel.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <span className={styles.companyLogo}>
                      {companyLogoUrl ? (
                        <img src={companyLogoUrl} alt="" className={styles.companyLogoImage} />
                      ) : (
                        <span className={styles.companyLogoInitials} aria-hidden="true">
                          {(companyLogoLabel ?? '').slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </span>
                  </span>
                ) : avatarImageUrl ? (
                  <img src={avatarImageUrl} alt="" className={styles.avatarImage} />
                ) : (
                  <span className={styles.avatarInitials} aria-hidden="true">
                    {avatarLabel.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </span>
              <span className={styles.tooltipContainer} aria-hidden="true">
                <span className={styles.tooltipArrow} />
                <span className={styles.tooltipLabel}>{LABEL_FOOTER['Menu do Usuario']}</span>
              </span>
            </button>
          </li>

          {/* Notificações */}
          <li role="none">
            <button
              type="button"
              role="menuitem"
              aria-label={notificacoesPendentes ? 'Notificações (pendentes)' : 'Notificações'}
              aria-current={isSel('Notificacoes') ? 'page' : undefined}
              className={[
                styles.menuItemBtn,
                styles.iconBtn,
                isSel('Notificacoes') ? styles.itemSelected : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handle('Notificacoes')}
              {...itemProps('Notificacoes')}
            >
              <span
                className={[styles.menuItemContent, animating === 'Notificacoes' ? styles.animPulse : ''].filter(Boolean).join(' ')}
                onAnimationEnd={() => setAnimating(null)}
              >
                <Icon name={bellIcon as 'bell' | 'bell-fill'} size={16} color="currentColor" aria-hidden />
                {notificacoesPendentes && (
                  <span className={styles.notificationDot} aria-hidden="true" />
                )}
              </span>
              <span className={styles.tooltipContainer} aria-hidden="true">
                <span className={styles.tooltipArrow} />
                <span className={styles.tooltipLabel}>{LABEL_FOOTER['Notificacoes']}</span>
              </span>
            </button>
          </li>

          {/* Central de Ajuda */}
          <li role="none">
            <button
              type="button"
              role="menuitem"
              aria-label="Central de Ajuda"
              aria-current={isSel('Central de Ajuda') ? 'page' : undefined}
              className={[
                styles.menuItemBtn,
                styles.iconBtn,
                isSel('Central de Ajuda') ? styles.itemSelected : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handle('Central de Ajuda')}
              {...itemProps('Central de Ajuda')}
            >
              <span
                className={[styles.menuItemContent, animating === 'Central de Ajuda' ? styles.animPulse : ''].filter(Boolean).join(' ')}
                onAnimationEnd={() => setAnimating(null)}
              >
                <Icon name={helpIcon as 'help-circle' | 'help-circle-fill'} size={16} color="currentColor" aria-hidden />
              </span>
              <span className={styles.tooltipContainer} aria-hidden="true">
                <span className={styles.tooltipArrow} />
                <span className={styles.tooltipLabel}>{LABEL_FOOTER['Central de Ajuda']}</span>
              </span>
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
};
