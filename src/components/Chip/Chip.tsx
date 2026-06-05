import React from 'react';
import styles from './Chip.module.css';

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onChange?: (isSelected: boolean) => void;
}

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.187 3.650a.5.5 0 010 .721L6.354 11.82a.5.5 0 01-.708 0L2.146 8.255a.5.5 0 01.708-.722L6 10.735l6.48-7.085a.5.5 0 01.708 0z"
      fill="currentColor"
    />
  </svg>
);

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
          <CheckIcon />
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
