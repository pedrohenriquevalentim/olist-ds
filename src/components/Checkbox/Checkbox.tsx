import React, { useId, useRef, useEffect } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  isIndeterminate?: boolean;
}

export const Checkbox = ({
  label,
  isIndeterminate = false,
  checked,
  disabled = false,
  className,
  id,
  onChange,
  ...rest
}: CheckboxProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  return (
    <label
      className={[
        styles.wrapper,
        disabled ? styles.wrapperDisabled : undefined,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      htmlFor={inputId}
    >
      <span className={styles.boxArea}>
        {/* Input nativo visualmente oculto — mantém semântica e foco por teclado */}
        <input
          ref={inputRef}
          type="checkbox"
          id={inputId}
          className={styles.input}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          aria-checked={isIndeterminate ? 'mixed' : checked}
          {...rest}
        />

        {/* Caixa visual (16 × 16) com ícones SVG inline via currentColor */}
        <span className={styles.box} aria-hidden="true">
          <span className={styles.checkIcon}>
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 4.5L4 7.5L10 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.indeterminateIcon}>
            <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
      </span>

      {label !== undefined && (
        <span className={styles.labelText}>{label}</span>
      )}
    </label>
  );
};
