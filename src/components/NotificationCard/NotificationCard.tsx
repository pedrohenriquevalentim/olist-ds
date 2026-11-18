import React, { useEffect, useId, useRef, useState } from 'react';
import styles from './NotificationCard.module.css';
import { ButtonIcon } from '../ButtonIcon';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

export type NotificationSeverity = 'informative' | 'positive' | 'warning' | 'negative';

export interface NotificationCardMenuItem {
  id: string;
  label: string;
  onSelect?: () => void;
}

export interface NotificationCardProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  severity?: NotificationSeverity;
  isRead?: boolean;
  icon?: React.ReactNode;
  product?: string;
  user?: string;
  dateTime: string;
  title: string;
  body?: React.ReactNode;
  value?: string;
  valueDetail?: string;
  deadline?: string;
  status?: string;
  linkLabel?: string;
  linkHref?: string;
  onLinkClick?: React.MouseEventHandler<HTMLElement>;
  actions?: React.ReactNode;
  menuItems?: NotificationCardMenuItem[];
  isMenuOpen?: boolean;
  onMenuOpenChange?: (isOpen: boolean) => void;
  onToggleRead?: () => void;
  onDismiss?: () => void;
  menuLabel?: string;
}

const defaultIcons: Record<NotificationSeverity, IconName> = {
  informative: 'informative-circle',
  positive: 'check',
  warning: 'alert-triangle',
  negative: 'alert-circle',
};

export const NotificationCard = ({
  severity = 'informative',
  isRead = false,
  icon,
  product,
  user,
  dateTime,
  title,
  body,
  value,
  valueDetail,
  deadline,
  status,
  linkLabel,
  linkHref,
  onLinkClick,
  actions,
  menuItems,
  isMenuOpen,
  onMenuOpenChange,
  onToggleRead,
  onDismiss,
  menuLabel = 'Mais opções da notificação',
  className,
  ...rest
}: NotificationCardProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = isMenuOpen !== undefined;
  const open = isControlled ? isMenuOpen : internalOpen;
  const menuId = useId();
  const menuColumnRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const items: NotificationCardMenuItem[] = menuItems ?? [
    {
      id: 'toggle-read',
      label: isRead ? 'Marcar como não lida' : 'Marcar como lida',
      onSelect: onToggleRead,
    },
    { id: 'dismiss', label: 'Dispensar notificação', onSelect: onDismiss },
  ];

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onMenuOpenChange?.(next);
  };

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event: MouseEvent) => {
      if (!menuColumnRef.current?.contains(event.target as Node)) {
        if (!isControlled) setInternalOpen(false);
        onMenuOpenChange?.(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open, isControlled, onMenuOpenChange]);

  const focusItem = (index: number) => {
    const total = items.length;
    itemRefs.current[(index + total) % total]?.focus();
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => focusItem(event.key === 'ArrowDown' ? 0 : items.length - 1));
    } else if (event.key === 'Escape' && open) {
      setOpen(false);
    }
  };

  const handleItemKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusItem(index + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusItem(index - 1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      menuColumnRef.current?.querySelector('button')?.focus();
    }
  };

  const handleSelect = (item: NotificationCardMenuItem) => {
    item.onSelect?.();
    setOpen(false);
  };

  const hasValue = Boolean(value);
  const classes = [
    styles.card,
    styles[severity],
    isRead ? styles.read : styles.unread,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes} {...rest}>
      <div className={styles.row}>
        <div className={styles.iconColumn}>
          <div className={styles.iconTile} aria-hidden="true">
            {icon ?? <Icon name={defaultIcons[severity]} size={24} color="currentColor" />}
            {!isRead && <span className={styles.dot} data-testid="unread-dot" />}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.topLine}>
            <div className={styles.origin}>
              {product && <span className={styles.product}>{product}</span>}
              {user && <span className={styles.user}>{user}</span>}
            </div>
            {status && <span className={styles.status}>{status}</span>}
            <span className={styles.dateTime}>{dateTime}</span>
          </div>

          <div className={styles.textBlock}>
            <p className={styles.title}>{title}</p>
            {body && <div className={styles.body}>{body}</div>}
          </div>

          {hasValue && (
            <div className={styles.valueBlock}>
              <p className={styles.value}>{value}</p>
              {valueDetail && <p className={styles.valueDetail}>{valueDetail}</p>}
            </div>
          )}

          {deadline && (
            <div className={styles.deadlineRow}>
              <span className={styles.deadline}>
                <Icon name="clock" size={16} color="currentColor" />
                {deadline}
              </span>
            </div>
          )}

          {(linkLabel || actions) && (
            <div className={styles.actions}>
              {linkLabel &&
                (linkHref ? (
                  <a
                    className={styles.link}
                    href={linkHref}
                    onClick={onLinkClick as React.MouseEventHandler<HTMLAnchorElement>}
                  >
                    {linkLabel}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={styles.link}
                    onClick={onLinkClick as React.MouseEventHandler<HTMLButtonElement>}
                  >
                    {linkLabel}
                  </button>
                ))}
              {actions}
            </div>
          )}
        </div>

        <div className={styles.menuColumn} ref={menuColumnRef}>
          <ButtonIcon
            variant="secondary"
            className={styles.menuTrigger}
            icon={<Icon name="more-h" size={16} color="currentColor" />}
            aria-label={menuLabel}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls={open ? menuId : undefined}
            onClick={() => setOpen(!open)}
            onKeyDown={handleTriggerKeyDown}
          />
          {open && (
            <div className={styles.menu} role="menu" id={menuId} aria-label={menuLabel}>
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="menuitem"
                  className={styles.menuItem}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  onClick={() => handleSelect(item)}
                  onKeyDown={(event) => handleItemKeyDown(event, index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
