import React from "react";
import styles from "./Tag.module.css";
import { Icon, IconName } from "../Icon";

type TagContext = "neutral" | "accent" | "brand" | "informative" | "warning" | "error" | "success";

export interface TagProps {
  className?: string;
  /** Contexto visual do tag (conforme design). */
  context?: TagContext;
  /** Texto exibido no tag. */
  label?: string;
  /** Ícone do design system a exibir. */
  icon?: IconName;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const Tag = ({
  className,
  context = "neutral",
  label = "Placeholder text",
  icon,
}: TagProps) => {
  return (
    <span className={cx(styles.tag, styles[context], className)}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          <Icon name={icon} size={14} />
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </span>
  );
};
