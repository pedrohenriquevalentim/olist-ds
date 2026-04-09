import React from "react";
import styles from "./Button.module.css";

const imgIconSecondaryEnabled = "https://www.figma.com/api/mcp/asset/c9cce515-7436-43f4-a3f1-6e09a5542e03";
const imgIconTertiaryEnabled = "https://www.figma.com/api/mcp/asset/64f7cb00-6efe-4f95-9eba-4b93b24f5512";
const imgIconPrimaryEnabled = "https://www.figma.com/api/mcp/asset/fe9c318c-df24-4768-a7d3-4408fe61c6e4";
const imgIconSecondaryHover = "https://www.figma.com/api/mcp/asset/837162ee-ef30-4aff-9d31-922f86307952";
const imgIconTertiaryHover = "https://www.figma.com/api/mcp/asset/46facc35-d988-4dda-abc1-e87299cd63fc";
const imgIconPrimaryHover = "https://www.figma.com/api/mcp/asset/0340a9d7-0d85-484f-905d-7827811dc2b4";
const imgIconSecondaryTertiaryPressed = "https://www.figma.com/api/mcp/asset/2da1f071-fc78-42fd-87df-28007827c0bc";
const imgIconPrimaryPressed = "https://www.figma.com/api/mcp/asset/488a97e0-c9b6-40b5-aecc-c57f1e0ba4f4";
const imgIconSecondaryDisabled = "https://www.figma.com/api/mcp/asset/8521c7a1-56c3-45a9-9e41-5adf921bb8de";
const imgIconTertiaryDisabled = "https://www.figma.com/api/mcp/asset/e5a0c676-31ff-4820-a547-d015975514b6";
const imgIconPrimaryDisabled = "https://www.figma.com/api/mcp/asset/906ad441-9b83-49f6-9c72-e2046a33ee82";

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

function getIconSrc(type: ButtonType, state: ButtonState) {
  if (state === "disabled") {
    if (type === "primary") return imgIconPrimaryDisabled;
    if (type === "secondary") return imgIconSecondaryDisabled;
    return imgIconTertiaryDisabled;
  }

  if (state === "pressed") {
    if (type === "primary") return imgIconPrimaryPressed;
    return imgIconSecondaryTertiaryPressed;
  }

  if (state === "hover") {
    if (type === "primary") return imgIconPrimaryHover;
    if (type === "secondary") return imgIconSecondaryHover;
    return imgIconTertiaryHover;
  }

  if (type === "primary") return imgIconPrimaryEnabled;
  if (type === "secondary") return imgIconSecondaryEnabled;
  return imgIconTertiaryEnabled;
}

export const Button = ({
  className,
  type = "primary",
  state = "enabled",
  icon = "lead",
  hasFocus = false,
  label = "placeholder Text",
  ariaLabel,
  onClick,
}: ButtonProps) => {
  const isDisabled = state === "disabled";
  const resolvedAria = ariaLabel ?? label;
  const showLeadIcon = icon === "lead";
  const showActionIcon = icon === "action";
  const showIcon = icon !== "none";

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
      {showLeadIcon ? (
        <span className={styles.icon} aria-hidden="true">
          <img alt="" src={getIconSrc(type, state)} />
        </span>
      ) : null}

      <span className={styles.label}>{label}</span>

      {showActionIcon ? (
        <span className={styles.icon} aria-hidden="true">
          <img alt="" src={getIconSrc(type, state)} />
        </span>
      ) : null}
    </button>
  );
};

