import React, { useId, useState } from 'react';
import styles from './NotificationStack.module.css';
import type { NotificationCardProps } from '../NotificationCard';

export interface NotificationStackProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'children'> {
  groupTitle: string;
  summary: React.ReactElement<NotificationCardProps>;
  children: React.ReactNode;
  isExpanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (isExpanded: boolean) => void;
  expandLabel?: string;
  collapseLabel?: string;
}

const hasReadItems = (items: React.ReactNode): boolean =>
  React.Children.toArray(items).some(
    (item) =>
      React.isValidElement<NotificationCardProps>(item) && Boolean(item.props.isRead),
  );

export const NotificationStack = ({
  groupTitle,
  summary,
  children,
  isExpanded,
  defaultExpanded = false,
  onExpandedChange,
  expandLabel = 'mostrar todos',
  collapseLabel = 'mostrar menos',
  className,
  ...rest
}: NotificationStackProps) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = isExpanded !== undefined;
  const expanded = isControlled ? isExpanded : internalExpanded;
  const listId = useId();
  const isMixed = hasReadItems(children);

  const setExpanded = (next: boolean) => {
    if (!isControlled) setInternalExpanded(next);
    onExpandedChange?.(next);
  };

  const summaryCard = React.cloneElement(summary, {
    linkLabel: summary.props.linkLabel ?? expandLabel,
    onLinkClick: summary.props.onLinkClick ?? (() => setExpanded(true)),
  });

  const classes = [
    styles.stack,
    expanded ? styles.expanded : styles.collapsed,
    isMixed ? styles.mixed : styles.unread,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} role="group" aria-label={groupTitle} {...rest}>
      {expanded ? (
        <>
          <div className={styles.header}>
            <h3 className={styles.groupTitle}>{groupTitle}</h3>
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={expanded}
              aria-controls={listId}
              onClick={() => setExpanded(false)}
            >
              {collapseLabel}
            </button>
          </div>
          <div className={styles.items} id={listId}>
            <span className={styles.guide} aria-hidden="true" data-testid="stack-guide" />
            {children}
          </div>
        </>
      ) : (
        <>
          <span className={styles.layerBack} aria-hidden="true" data-testid="stack-layer" />
          <span className={styles.layerFront} aria-hidden="true" data-testid="stack-layer" />
          <div className={styles.summary}>{summaryCard}</div>
        </>
      )}
    </section>
  );
};
