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

// Constantes para cálculo de overflow — usadas pelo ResizeObserver
const ITEM_H_PX = 44;
const ITEM_GAP_PX = 8;
const ITEM_STEP = ITEM_H_PX + ITEM_GAP_PX; // 52px por slot
const LIST_PAD_PX = 8;
const MIN_FOOTER_GAP_PX = 80;

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
  /** Zera o border-radius do lado direito quando há painel lateral adjacente (ex: ItensMenuGlobal). */
  panelAdjacenteAberto?: boolean;
  /** Quando o painel adjacente está fixado no layout (não flyout), o pill logo (N0) volta a ficar visível. */
  panelFixado?: boolean;
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
  panelAdjacenteAberto = false,
  panelFixado = false,
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

  // Overflow: ResizeObserver na lista de produtos para detectar quando o viewport encolhe
  const productListRef = React.useRef<HTMLUListElement>(null);
  const solucoesBtnLiRef = React.useRef<HTMLLIElement>(null);
  const [listHeight, setListHeight] = React.useState(0);
  const [flyoutOpen, setFlyoutOpen] = React.useState(false);
  const [animatingSolucoes, setAnimatingSolucoes] = React.useState(false);

  React.useEffect(() => {
    const el = productListRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setListHeight(el.clientHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  React.useEffect(() => {
    if (!flyoutOpen) return;
    const onDown = (e: MouseEvent) => {
      if (solucoesBtnLiRef.current && !solucoesBtnLiRef.current.contains(e.target as Node)) {
        setFlyoutOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setFlyoutOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [flyoutOpen]);

  // Quantos produtos cabem respeitando o gap mínimo de 80px antes do rodapé
  const maxVisible = listHeight > 0
    ? Math.max(1, Math.floor((listHeight - LIST_PAD_PX * 2 - MIN_FOOTER_GAP_PX + ITEM_GAP_PX) / ITEM_STEP))
    : produtos.length;
  const hasOverflow = maxVisible < produtos.length;
  // Quando overflow: exibe maxVisible-1 produtos + 1 slot para o botão 9dots
  const visibleCount = hasOverflow ? Math.max(1, maxVisible - 1) : produtos.length;
  const visibleProdutos = produtos.slice(0, visibleCount);
  const overflowProdutos = hasOverflow ? produtos.slice(visibleCount) : [];
  const isSolucoesSel = overflowProdutos.some(p => isSel(p));

  // Ícones do rodapé: outline → fill em hover ou selecionado
  const bellIcon = (hovered === 'Notificacoes' || isSel('Notificacoes')) ? 'bell-fill' : 'bell';
  const helpIcon = (hovered === 'Central de Ajuda' || isSel('Central de Ajuda')) ? 'help-circle-fill' : 'help-circle';

  return (
    <nav
      className={[
        styles.container,
        panelAdjacenteAberto ? styles.containerComPanel : '',
        className,
      ].filter(Boolean).join(' ')}
      aria-label="Navegação global"
    >
      {/* Logo pill: opacity 0 no flyout (N1 watermark assume o papel), opacity 1 quando fixado ou sem painel. */}
      <div className={[styles.logoArea, panelAdjacenteAberto && !panelFixado ? styles.logoAreaHidden : ''].filter(Boolean).join(' ')}>
        <Logo size="symbol" />
      </div>

      <hr className={styles.divider} aria-hidden="true" />

      {/* Produtos */}
      <ul className={styles.productList} role="menu" aria-label="Produtos" ref={productListRef}>
        {visibleProdutos.map((produto) => {
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

        {/* Botão 9dots: agrupa produtos que não cabem no viewport */}
        {hasOverflow && (
          <li role="none" className={styles.solucoesBtnLi} ref={solucoesBtnLiRef}>
            <button
              type="button"
              role="menuitem"
              aria-label="Soluções Olist"
              aria-current={(flyoutOpen || isSolucoesSel) ? 'page' : undefined}
              aria-expanded={flyoutOpen}
              aria-haspopup="true"
              className={[
                styles.menuItemBtn,
                styles.iconBtn,
                (flyoutOpen || isSolucoesSel) ? styles.itemSelected : '',
              ].filter(Boolean).join(' ')}
              onClick={() => setFlyoutOpen(v => !v)}
              onMouseEnter={() => { if (!(flyoutOpen || isSolucoesSel)) setAnimatingSolucoes(true); }}
              onMouseLeave={() => {}}
            >
              <span
                className={[
                  styles.menuItemContent,
                  animatingSolucoes ? styles.n0HighlightEnter : '',
                ].filter(Boolean).join(' ')}
                onAnimationEnd={() => setAnimatingSolucoes(false)}
              >
                <span className={animatingSolucoes ? styles.n0IconEnter : ''}>
                  <Icon name="apps" size={16} color="currentColor" aria-hidden />
                </span>
              </span>
              <span className={styles.tooltipContainer} aria-hidden="true">
                <span className={styles.tooltipArrow} />
                <span className={styles.tooltipLabel}>Soluções Olist</span>
              </span>
            </button>

            {flyoutOpen && (
              <div className={styles.flyout} role="dialog" aria-label="Soluções Olist">
                <span className={styles.flyoutArrow} aria-hidden="true" />
                <div className={styles.flyoutContent}>
                  <div className={styles.flyoutGrid}>
                    {overflowProdutos.map(p => (
                      <button
                        key={p}
                        type="button"
                        role="menuitem"
                        aria-label={LABEL_PRODUTO[p]}
                        aria-current={isSel(p) ? 'page' : undefined}
                        className={[
                          styles.flyoutItem,
                          isSel(p) ? styles.flyoutItemSelected : '',
                        ].filter(Boolean).join(' ')}
                        onClick={() => { handle(p); setFlyoutOpen(false); }}
                      >
                        <ProdutosOlistIcons
                          product={p}
                          state={isSel(p) ? 'active' : 'default'}
                          theme="light"
                          aria-hidden
                        />
                        <span className={styles.flyoutItemLabel}>{LABEL_PRODUTO[p]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        )}
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
