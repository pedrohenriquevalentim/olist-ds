import React from 'react';
import styles from './Toggle.module.css';

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Estado ligado/desligado (controlado externamente). */
  selected?: boolean;
  /** Callback disparado ao clicar. Recebe o próximo estado. */
  onToggle?: (nextSelected: boolean) => void;
}

export const Toggle = ({
  selected = false,
  disabled = false,
  onToggle,
  className,
  onClick,
  ...rest
}: ToggleProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onToggle?.(!selected);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={selected}
      disabled={disabled}
      className={[
        styles.toggle,
        selected ? styles.selected : '',
        disabled ? styles.disabled : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={handleClick}
      {...rest}
    >
      <span className={styles.control}>
        <span className={styles.dot} />
      </span>
      <span className={styles.focusRing} aria-hidden="true" />
    </button>
  );
};
