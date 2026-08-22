import React from 'react';
import styles from './Card.module.css';
import { Button } from '../Button';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: 'simple' | 'slot';
  media?: React.ReactNode;
  titleText?: string;
  subtitle?: boolean;
  subtitleText?: string;
  paragraphText?: string;
  caption?: boolean;
  captionText?: string;
  actions?: boolean;
  secondaryButton?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export const Card = ({
  content = 'simple',
  media,
  titleText = 'Card Title',
  subtitle = true,
  subtitleText = 'Subtitle text',
  paragraphText,
  caption = false,
  captionText,
  actions = false,
  secondaryButton = false,
  primaryLabel = 'Ação principal',
  secondaryLabel = 'Ação secundária',
  onPrimaryAction,
  onSecondaryAction,
  children,
  className,
  ...rest
}: CardProps) => {
  return (
    <div
      className={[styles.card, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {media && (
        <div className={styles.media} aria-hidden="true">
          {media}
        </div>
      )}

      {content === 'simple' && (
        <div className={styles.content}>
          <div className={styles.titleSection}>
            <p className={styles.title}>{titleText}</p>
            {subtitle && <p className={styles.subtitle}>{subtitleText}</p>}
          </div>
          {paragraphText && <p className={styles.paragraph}>{paragraphText}</p>}
          {caption && captionText && (
            <p className={styles.caption}>{captionText}</p>
          )}
          {actions && (
            <div className={styles.actions}>
              {secondaryButton && (
                <Button
                  variant="secondary"
                  label={secondaryLabel}
                  onClick={onSecondaryAction}
                />
              )}
              <Button
                variant="primary"
                label={primaryLabel}
                onClick={onPrimaryAction}
              />
            </div>
          )}
        </div>
      )}

      {content === 'slot' && (
        <div className={styles.slot}>
          {children}
        </div>
      )}
    </div>
  );
};
