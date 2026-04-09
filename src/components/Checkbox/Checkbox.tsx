import React, { useEffect, useRef } from "react";
import styles from "./Checkbox.module.css";

const imgCheck = "https://www.figma.com/api/mcp/asset/a0e6777f-a80f-4a3d-b4e8-6824ac9daf4f";
const imgCheckDisabled = "https://www.figma.com/api/mcp/asset/2ab91ba1-924c-410b-b89f-9129f450d189";
const imgIndeterminate = "https://www.figma.com/api/mcp/asset/7a10f657-5557-4e80-a17c-5ba3f8714feb";
const imgIndeterminateDisabled = "https://www.figma.com/api/mcp/asset/20bedc62-29d9-44f9-8096-042f40402240";

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

  const checkSrc = isDisabled ? imgCheckDisabled : imgCheck;
  const indeterminateSrc = isDisabled ? imgIndeterminateDisabled : imgIndeterminate;

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
            <img
              alt=""
              src={checkSrc}
              className={cx(styles.icon, styles.checkIcon)}
            />
          )}
          {showIndeterminate && (
            <img
              alt=""
              src={indeterminateSrc}
              className={cx(styles.icon, styles.indeterminateIcon)}
            />
          )}
        </span>
      </span>

      {hasLabel && <span className={styles.label}>{label}</span>}
    </label>
  );
};
