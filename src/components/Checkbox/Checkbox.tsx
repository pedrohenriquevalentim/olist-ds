import React, { useEffect, useRef } from "react";
import styles from "./Checkbox.module.css";
import { Icon } from "../Icon";

type CheckboxState = "enabled" | "hover" | "pressed" | "disabled";

export interface CheckboxProps {
  /** Estado visual do checkbox (conforme variantes do design). */
  state?: CheckboxState;
  /** Se está marcado. */
  isChecked?: boolean;
  /** Se está no estado indeterminado (sobrepõe isChecked visualmente). */
  isIndeterminate?: boolean;
  /** Se exibe o texto do label ao lado do checkbox. */
  hasLabel?: boolean;
  /** Texto do label. */
  label?: string;
  /** ID do input para associar ao label via htmlFor. */
  id?: string;
  /** Callback de mudança. Não é chamado quando state="disabled". */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const Checkbox = ({
  state = "enabled",
  isChecked = false,
  isIndeterminate = false,
  hasLabel = true,
  label = "Label text",
  id,
  onChange,
  className,
}: CheckboxProps) => {
  const isDisabled = state === "disabled";
  const showCheck = isChecked && !isIndeterminate;
  const showIndeterminate = isIndeterminate && !isChecked;
  const inputRef = useRef<HTMLInputElement>(null);

  // A propriedade `indeterminate` só pode ser definida via JS, não via atributo HTML
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = showIndeterminate;
    }
  }, [showIndeterminate]);

  return (
    <label
      htmlFor={id}
      className={cx(
        styles.checkbox,
        styles[`state_${state}`],
        showCheck && styles.isChecked,
        showIndeterminate && styles.isIndeterminate,
        className
      )}
    >
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        className={styles.input}
        checked={isChecked}
        disabled={isDisabled}
        aria-checked={showIndeterminate ? "mixed" : isChecked}
        onChange={isDisabled ? undefined : onChange}
        readOnly={!onChange || isDisabled}
      />

      {/* Área de clique — 40×40px — renderiza o quadrado visual de 16px */}
      <span className={styles.boxArea} aria-hidden="true">
        <span className={styles.box}>
          {showCheck && (
            <Icon name="check" size={12} className={cx(styles.icon, styles.checkIcon)} />
          )}
          {showIndeterminate && (
            <Icon name="remove" size={12} className={cx(styles.icon, styles.indeterminateIcon)} />
          )}
        </span>
      </span>

      {hasLabel && <span className={styles.label}>{label}</span>}
    </label>
  );
};
