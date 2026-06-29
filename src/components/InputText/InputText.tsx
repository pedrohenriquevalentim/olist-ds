import React, { useId } from 'react';
import styles from './InputText.module.css';
import { Icon } from '../Icon';

export interface InputTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Texto do label acima do campo */
  label?: string;
  /** Placeholder exibido quando o campo está vazio */
  placeholder?: string;
  /** Ícone à esquerda dentro do campo */
  leadIcon?: React.ReactNode;
  /** Exibe o texto de suporte abaixo do campo */
  hasSupport?: boolean;
  /** Texto de suporte */
  supportText?: string;
  /** Exibe ícone de tooltip ao lado do label */
  hasTooltip?: boolean;
  /** Texto do tooltip */
  tooltipText?: string;
  /** Estado de sucesso — sobrepõe estilos de borda e suporte */
  isSuccess?: boolean;
  /** Estado de erro — sobrepõe estilos de borda e suporte */
  isError?: boolean;
  /** Desabilita o campo */
  isDisabled?: boolean;
  /** Valor controlado */
  value?: string;
  /** Callback disparado ao digitar */
  onChange?: (value: string) => void;
  className?: string;
}

export const InputText = ({
  label,
  placeholder = 'Placeholder text',
  leadIcon,
  hasSupport = false,
  supportText,
  hasTooltip = false,
  tooltipText = 'tooltip text',
  isSuccess = false,
  isError = false,
  isDisabled = false,
  value,
  onChange,
  className,
  id: externalId,
  ...rest
}: InputTextProps) => {
  const generatedId = useId();
  const inputId = externalId ?? generatedId;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const state = isDisabled ? 'disabled' : isError ? 'error' : isSuccess ? 'success' : 'default';

  return (
    <div
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
      data-state={state}
    >
      {label && (
        <div className={styles.labelRow}>
          <label
            htmlFor={inputId}
            className={styles.label}
          >
            {label}
          </label>
          {hasTooltip && (
            <div className={styles.tooltipWrapper} role="tooltip" aria-label={tooltipText}>
              <Icon name="help-circle" size={16} color="currentColor" />
            </div>
          )}
        </div>
      )}

      <div className={styles.inputBase}>
        {leadIcon && (
          <span className={styles.leadIcon} aria-hidden="true">
            {leadIcon}
          </span>
        )}
        <input
          id={inputId}
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={isDisabled}
          aria-label={label ?? placeholder}
          aria-invalid={isError ? true : undefined}
          aria-describedby={hasSupport && supportText ? `${inputId}-support` : undefined}
          {...rest}
        />
      </div>

      {hasSupport && supportText && (
        <p
          id={`${inputId}-support`}
          className={styles.supportText}
          role={isError ? 'alert' : undefined}
        >
          {supportText}
        </p>
      )}
    </div>
  );
};
