import React, { useId, useState } from 'react';
import styles from './InputPassword.module.css';

export interface InputPasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
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
  /** Visibilidade controlada externamente (senha visível = true) */
  isPasswordVisible?: boolean;
  /** Callback disparado ao alternar visibilidade */
  onVisibilityToggle?: (isVisible: boolean) => void;
  /** Valor controlado */
  value?: string;
  /** Callback disparado ao digitar */
  onChange?: (value: string) => void;
  className?: string;
}

export const InputPassword = ({
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
  isPasswordVisible,
  onVisibilityToggle,
  value,
  onChange,
  className,
  id: externalId,
  ...rest
}: InputPasswordProps) => {
  const generatedId = useId();
  const inputId = externalId ?? generatedId;

  const isControlled = isPasswordVisible !== undefined;
  const [internalVisible, setInternalVisible] = useState(false);
  const isVisible = isControlled ? isPasswordVisible : internalVisible;

  const handleToggle = () => {
    const next = !isVisible;
    if (!isControlled) setInternalVisible(next);
    onVisibilityToggle?.(next);
  };

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
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
          {hasTooltip && (
            <div className={styles.tooltipWrapper} role="tooltip" aria-label={tooltipText}>
              <TooltipIcon />
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
          type={isVisible ? 'text' : 'password'}
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

        <button
          type="button"
          className={styles.toggleButton}
          onClick={handleToggle}
          disabled={isDisabled}
          aria-label={isVisible ? 'Ocultar senha' : 'Mostrar senha'}
          aria-pressed={isVisible}
          tabIndex={isDisabled ? -1 : 0}
        >
          {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>
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

function TooltipIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7.25V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function EyeOpenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function EyeClosedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 2L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 6.6C6.19 6.9 6 7.33 6 7.8 6 8.79 6.9 9.6 8 9.6 8.5 9.6 8.95 9.42 9.27 9.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.14 4.25C2.68 5.18 1.5 7.5 1.5 7.5C1.5 7.5 3.73 12 8 12C9.46 12 10.73 11.44 11.74 10.68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.35 8.93C14.07 7.97 14.5 7.5 14.5 7.5C14.5 7.5 12.27 3 8 3C7.53 3 7.08 3.05 6.65 3.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
