import React from "react";
import styles from "./Button.module.css";
import { Icon, IconName } from "../Icon";

type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonState = "enabled" | "hover" | "pressed" | "disabled";
type ButtonIcon = "lead" | "action" | "none";

export interface ButtonProps {
  className?: string;
  /** Tipo visual do botão (conforme design). */
  type?: ButtonType;
  /** Estado visual do botão (conforme design). */
  state?: ButtonState;
  /** Posição do ícone (conforme variantes do design). */
  icon?: ButtonIcon;
  /** Ícone do design system a exibir. */
  iconName?: IconName;
  /** Exibe anel de foco (variante do design). */
  hasFocus?: boolean;
  /** Texto do botão. */
  label?: string;
  /** Texto de acessibilidade (se omitido, usa `label`). */
  ariaLabel?: string;
  /** Callback de clique. Não é chamado quando `state="disabled"`. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const Button = ({
  className,
  type = "primary",
  state = "enabled",
  icon = "lead",
  iconName,
  hasFocus = false,
  label = "placeholder Text",
  ariaLabel,
  onClick,
}: ButtonProps) => {
  const isDisabled = state === "disabled";
  const resolvedAria = ariaLabel ?? label;
  const showLeadIcon = icon === "lead";
  const showActionIcon = icon === "action";
  const showIcon = icon !== "none" && !!iconName;

  return (
    <button
      type="button"
      className={cx(
        styles.button,
        styles[type],
        styles[`state_${state}`],
        showIcon ? styles.withIcon : styles.noIcon,
        hasFocus && styles.hasFocus,
        className
      )}
      aria-label={resolvedAria}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
    >
      {showLeadIcon && showIcon ? (
        <span className={styles.icon} aria-hidden="true">
          <Icon name={iconName!} size={16} />
        </span>
      ) : null}

      <span className={styles.label}>{label}</span>

      {showActionIcon && showIcon ? (
        <span className={styles.icon} aria-hidden="true">
          <Icon name={iconName!} size={16} />
        </span>
      ) : null}
    </button>
  );
};
