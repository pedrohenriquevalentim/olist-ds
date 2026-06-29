import React from 'react';
import styles from './Chip.module.css';
import { Icon } from '../Icon';

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onChange?: (isSelected: boolean) => void;
}


export const Chip = ({
  label,
  isSelected = false,
  isDisabled = false,
  onChange,
  className,
  onClick,
  ...rest
}: ChipProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      onChange?.(!isSelected);
      onClick?.(e);
    }
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isSelected}
      aria-label={label}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      data-selected={isSelected ? 'true' : undefined}
      className={[styles.chip, className].filter(Boolean).join(' ')}
      onClick={handleClick}
      {...rest}
    >
      {isSelected && (
        <span className={styles.checkIcon} aria-hidden="true">
          <Icon name="check" size={16} color="currentColor" />
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
