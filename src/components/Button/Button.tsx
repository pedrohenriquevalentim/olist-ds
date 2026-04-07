import React from "react";
import styles from "./Button.module.css";

const imgIconSecondaryEnabled = "https://www.figma.com/api/mcp/asset/9a9bb994-33a7-4ebc-a7b5-c4f53c43e6a9";
const imgIconTertiaryEnabled = "https://www.figma.com/api/mcp/asset/78b5ea49-d9ac-4f5d-97ee-dae1ff314354";
const imgIconPrimaryEnabled = "https://www.figma.com/api/mcp/asset/4f733dfc-074e-4a35-9a8e-7095531be208";
const imgIconSecondaryHover = "https://www.figma.com/api/mcp/asset/171d7845-9d87-4d47-8d96-2165da2ca38c";
const imgIconTertiaryHover = "https://www.figma.com/api/mcp/asset/f832bb74-33ff-4a4a-9739-d13481e86afa";
const imgIconPrimaryHover = "https://www.figma.com/api/mcp/asset/fe3d8839-5fa4-4018-a298-98204e75375a";
const imgIconSecondaryTertiaryPressed = "https://www.figma.com/api/mcp/asset/783ba3f3-31bf-4885-a36b-a8cef61ab46a";
const imgIconPrimaryPressed = "https://www.figma.com/api/mcp/asset/b8675deb-c653-43b9-9035-0964684d9932";
const imgIconSecondaryDisabled = "https://www.figma.com/api/mcp/asset/097875fe-1c9a-4269-a038-88c52debd212";
const imgIconTertiaryDisabled = "https://www.figma.com/api/mcp/asset/6f517949-9e8d-4786-aa07-7465c98d9228";
const imgIconPrimaryDisabled = "https://www.figma.com/api/mcp/asset/1e157eaf-79f7-4b0e-93ca-ced91329e8d4";

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

