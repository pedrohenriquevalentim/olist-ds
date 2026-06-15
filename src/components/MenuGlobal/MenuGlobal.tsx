import React, { useState, useCallback } from 'react';
import styles from './MenuGlobal.module.css';

export interface MenuGlobalNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  hasNotification?: boolean;
  isDisabled?: boolean;
  children?: MenuGlobalNavItem[];
}

export interface MenuGlobalProduct {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: MenuGlobalNavItem[];
}

export interface MenuGlobalRailItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface MenuGlobalProps {
  products: MenuGlobalProduct[];
  activeProductId?: string;
  activeItemId?: string;
  railBottomItems?: MenuGlobalRailItem[];
  onProductChange?: (productId: string) => void;
  onItemSelect?: (itemId: string) => void;
  className?: string;
}

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuGlobal = ({
  products,
  activeProductId: controlledProductId,
  activeItemId,
  railBottomItems,
  onProductChange,
  onItemSelect,
  className,
}: MenuGlobalProps) => {
  const [internalProductId, setInternalProductId] = useState<string>(
    controlledProductId ?? products[0]?.id ?? ''
  );
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const activeProductId = controlledProductId ?? internalProductId;
  const activeProduct = products.find((p) => p.id === activeProductId);
  const expandedItem = activeProduct?.items.find((i) => i.id === expandedItemId);
  const hasLevel2 = !!(expandedItem?.children?.length);

  const handleProductSelect = useCallback(
    (productId: string) => {
      if (!controlledProductId) setInternalProductId(productId);
      setExpandedItemId(null);
      onProductChange?.(productId);
    },
    [controlledProductId, onProductChange]
  );

  const handleItemClick = useCallback(
    (item: MenuGlobalNavItem) => {
      if (item.isDisabled) return;
      if (item.children?.length) {
        setExpandedItemId((prev) => (prev === item.id ? null : item.id));
      } else {
        setExpandedItemId(null);
        onItemSelect?.(item.id);
      }
    },
    [onItemSelect]
  );

  const handleSubItemClick = useCallback(
    (item: MenuGlobalNavItem) => {
      if (item.isDisabled) return;
      onItemSelect?.(item.id);
    },
    [onItemSelect]
  );

  const handleRailKeyDown = useCallback(
    (e: React.KeyboardEvent, productId: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleProductSelect(productId);
      }
    },
    [handleProductSelect]
  );

  const handleItemKeyDown = useCallback(
    (e: React.KeyboardEvent, item: MenuGlobalNavItem) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleItemClick(item);
      } else if (e.key === 'Escape') {
        setExpandedItemId(null);
      }
    },
    [handleItemClick]
  );

  const handleSubItemKeyDown = useCallback(
    (e: React.KeyboardEvent, item: MenuGlobalNavItem) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSubItemClick(item);
      } else if (e.key === 'Escape') {
        setExpandedItemId(null);
      }
    },
    [handleSubItemClick]
  );

  const isLevel1ItemSelected = (item: MenuGlobalNavItem): boolean => {
    if (item.id === activeItemId) return true;
    if (item.children) return item.children.some((c) => c.id === activeItemId);
    return false;
  };

  return (
    <nav
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-label="Menu de navegação global"
    >
      {/* Level 0 — Rail */}
      <div className={styles.rail} role="tablist" aria-label="Produtos Olist">
        <div className={styles.railProducts}>
          {products.map((product) => {
            const isActive = product.id === activeProductId;
            return (
              <button
                key={product.id}
                role="tab"
                aria-selected={isActive}
                aria-label={product.label}
                className={[styles.railItem, isActive ? styles.railItemActive : '']
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleProductSelect(product.id)}
                onKeyDown={(e) => handleRailKeyDown(e, product.id)}
              >
                <span className={styles.railIcon} aria-hidden="true">
                  {product.icon}
                </span>
              </button>
            );
          })}
        </div>

        {railBottomItems && railBottomItems.length > 0 && (
          <div className={styles.railBottom}>
            {railBottomItems.map((item) => (
              <button
                key={item.id}
                aria-label={item.label}
                className={styles.railUtilItem}
                onClick={item.onClick}
              >
                <span className={styles.railIcon} aria-hidden="true">
                  {item.icon}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Level 1 — Agrupadores Panel */}
      {activeProduct && (
        <div
          className={[styles.panel1, hasLevel2 ? styles.panel1WithLevel2 : '']
            .filter(Boolean)
            .join(' ')}
          role="tabpanel"
          aria-label={`Navegação ${activeProduct.label}`}
        >
          {/* SectionDivider Tipo A — nome do produto, sem borda inferior */}
          <div className={styles.sectionDividerA}>
            <span className={styles.sectionDividerALabel}>{activeProduct.label}</span>
          </div>

          <ul className={styles.itemList} role="list">
            {activeProduct.items.map((item) => {
              const isExpanded = item.id === expandedItemId;
              const isSelected = isLevel1ItemSelected(item);
              return (
                <li key={item.id} role="listitem">
                  <button
                    className={[
                      styles.menuItem,
                      isSelected ? styles.menuItemSelected : '',
                      item.isDisabled ? styles.menuItemDisabled : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-label={item.label}
                    aria-expanded={item.children?.length ? isExpanded : undefined}
                    aria-disabled={item.isDisabled}
                    disabled={item.isDisabled}
                    onClick={() => handleItemClick(item)}
                    onKeyDown={(e) => handleItemKeyDown(e, item)}
                  >
                    {item.icon && (
                      <span className={styles.menuItemIcon} aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <span className={styles.menuItemLabel}>{item.label}</span>
                    {item.hasNotification && (
                      <span
                        className={styles.notificationDot}
                        role="status"
                        aria-label="Possui notificação"
                      />
                    )}
                    {item.children?.length ? (
                      <span
                        className={[styles.chevron, isExpanded ? styles.chevronOpen : '']
                          .filter(Boolean)
                          .join(' ')}
                        aria-hidden="true"
                      >
                        <ChevronRightIcon />
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Level 2 — Side Menu */}
      {hasLevel2 && expandedItem && (
        <div
          className={styles.panel2}
          role="region"
          aria-label={`Submenu ${expandedItem.label}`}
        >
          {/* SectionDivider Tipo B — nome do agrupador, com borda inferior */}
          <div className={styles.sectionDividerB}>
            <span className={styles.sectionDividerBLabel}>{expandedItem.label}</span>
          </div>

          <ul className={styles.itemList} role="list">
            {expandedItem.children!.map((item) => {
              const isSelected = item.id === activeItemId;
              return (
                <li key={item.id} role="listitem">
                  <button
                    className={[
                      styles.menuItem,
                      isSelected ? styles.menuItemSelected : '',
                      item.isDisabled ? styles.menuItemDisabled : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-label={item.label}
                    aria-disabled={item.isDisabled}
                    disabled={item.isDisabled}
                    onClick={() => handleSubItemClick(item)}
                    onKeyDown={(e) => handleSubItemKeyDown(e, item)}
                  >
                    {item.icon && (
                      <span className={styles.menuItemIcon} aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <span className={styles.menuItemLabel}>{item.label}</span>
                    {item.hasNotification && (
                      <span
                        className={styles.notificationDot}
                        role="status"
                        aria-label="Possui notificação"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
