import React, { useId } from 'react';
import styles from './InputSearch.module.css';
import { Icon } from '../Icon';

export interface InputSearchProps {
  /** Variante da ação ao lado direito do campo */
  action?: 'button' | 'button icon';
  /** Texto do label acima do campo */
  label?: string;
  /** Placeholder exibido quando o campo está vazio */
  placeholder?: string;
  /** Exibe o texto de suporte abaixo do campo */
  support?: boolean;
  /** Texto de suporte */
  supportText?: string;
  /** Valor controlado do input */
  value?: string;
  /** Callback disparado ao digitar */
  onChange?: (value: string) => void;
  /** Callback disparado ao acionar a busca (botão ou Enter) */
  onSearch?: (value: string) => void;
  /** Desabilita o campo */
  isDisabled?: boolean;
  className?: string;
}

export const InputSearch = ({
  action = 'button',
  label,
  placeholder = 'Buscar',
  support = false,
  supportText,
  value = '',
  onChange,
  onSearch,
  isDisabled = false,
  className,
}: InputSearchProps) => {
  const inputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };

  const handleSearch = () => {
    onSearch?.(value);
  };

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label && (
        <label
          htmlFor={inputId}
          className={[styles.label, isDisabled ? styles.labelDisabled : ''].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}

      <div className={styles.inputBase}>
        <input
          id={inputId}
          type="search"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
          aria-label={label ?? placeholder}
          autoComplete="off"
        />

        {action === 'button' && (
          <button
            type="button"
            className={styles.actionButton}
            onClick={handleSearch}
            disabled={isDisabled}
            aria-label="Buscar"
          >
            <span className={styles.actionButtonLabel}>buscar</span>
            <span className={styles.iconWrapper} aria-hidden="true">
              <Icon name="search" size={16} color="currentColor" />
            </span>
          </button>
        )}

        {action === 'button icon' && (
          <button
            type="button"
            className={styles.actionButtonIcon}
            onClick={handleSearch}
            disabled={isDisabled}
            aria-label="Buscar"
          >
            <span className={styles.iconWrapper} aria-hidden="true">
              <Icon name="search" size={16} color="currentColor" />
            </span>
          </button>
        )}
      </div>

      {support && supportText && (
        <p className={[styles.supportText, isDisabled ? styles.supportTextDisabled : ''].filter(Boolean).join(' ')}>
          {supportText}
        </p>
      )}
    </div>
  );
};
