import React from 'react';
import styles from './ButtonIcon.module.css';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon: React.ReactNode;
}

export const ButtonIcon = ({
  variant = 'primary',
  icon,
  disabled = false,
  className,
  ...rest
}: ButtonIconProps) => (
  <button
    className={[styles.buttonIcon, styles[variant], className].filter(Boolean).join(' ')}
    disabled={disabled}
    {...rest}
  >
    <span className={styles.iconWrapper} aria-hidden="true">
      {icon}
    </span>
  </button>
);
