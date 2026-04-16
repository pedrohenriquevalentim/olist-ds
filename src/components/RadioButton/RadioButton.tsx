import React from "react";
import styles from "./RadioButton.module.css";

type RadioButtonState = "enabled" | "hover" | "pressed" | "disabled";

export interface RadioButtonProps {
  /** Estado visual do radio button (conforme variantes do design). */
  state?: RadioButtonState;
  /** Se está selecionado. */
  isChecked?: boolean;
  /** Se exibe o texto do label ao lado do radio. */
  hasLabel?: boolean;
  /** Texto do label. */
  label?: string;
  /** Nome do grupo de radio buttons. */
  name?: string;
  /** Valor do radio button. */
  value?: string;
  /** ID do input para associar ao label via htmlFor. */
  id?: string;
  /** Callback de mudança. Não é chamado quando state="disabled". */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const RadioButton = ({
  state = "enabled",
  isChecked = false,
  hasLabel = true,
  label = "Label text",
  name,
  value,
  id,
  onChange,
  className,
}: RadioButtonProps) => {
  const isDisabled = state === "disabled";

  return (
    <label
      htmlFor={id}
      className={cx(
        styles.radioButton,
        styles[`state_${state}`],
        isChecked && styles.isChecked,
        className
      )}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className={styles.input}
        checked={isChecked}
        disabled={isDisabled}
        aria-checked={isChecked}
        onChange={isDisabled ? undefined : onChange}
        readOnly={!onChange || isDisabled}
      />

      {/* Área de clique — 40×40px — renderiza o círculo visual de 16px */}
      <span className={styles.boxArea} aria-hidden="true">
        <span className={styles.box}>
          {isChecked && <span className={styles.dot} />}
        </span>
      </span>

      {hasLabel && <span className={styles.label}>{label}</span>}
    </label>
  );
};
