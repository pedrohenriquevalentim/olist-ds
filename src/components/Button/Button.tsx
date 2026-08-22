import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'big' | 'medium' | 'small';
  label?: string;
  leadIcon?: React.ReactNode;
  actionIcon?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'big',
  label,
  leadIcon,
  actionIcon,
  children,
  disabled = false,
  className,
  ...rest
}: ButtonProps) => {
  const content = children ?? label;

  return (
    <button
      className={[styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')}
      disabled={disabled}
      {...rest}
    >
      {leadIcon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {leadIcon}
        </span>
      )}
      {content && <span className={styles.label}>{content}</span>}
      {actionIcon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {actionIcon}
        </span>
      )}
    </button>
  );
};
