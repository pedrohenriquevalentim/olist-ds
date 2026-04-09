import React from "react";
import styles from "./Tag.module.css";

const imgIconNeutral = "https://www.figma.com/api/mcp/asset/ad51752d-0712-40ab-a7bf-ccdc03bf74b6";
const imgIconAccent = "https://www.figma.com/api/mcp/asset/194309ed-7cf5-4ce0-a2d5-d048f14849ac";
const imgIconBrand = "https://www.figma.com/api/mcp/asset/d5d9b2d3-e2d3-4129-9b19-611029a7288f";
const imgIconInformative = "https://www.figma.com/api/mcp/asset/537fd627-ed55-4299-a3b3-6af01d57fa12";
const imgIconSuccess = "https://www.figma.com/api/mcp/asset/3465957c-ed44-47a3-85e8-ad431c6b5e13";
const imgIconError = "https://www.figma.com/api/mcp/asset/26dc6b26-f4d8-4ece-b45e-34c86d71362e";
const imgIconWarning = "https://www.figma.com/api/mcp/asset/7dc78817-08e9-434e-8de5-a481edd3debb";

type TagContext = "neutral" | "accent" | "brand" | "informative" | "warning" | "error" | "success";

export interface TagProps {
  className?: string;
  /** Contexto visual do tag (conforme design). */
  context?: TagContext;
  /** Texto exibido no tag. */
  label?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function getIconSrc(context: TagContext): string {
  switch (context) {
    case "accent":      return imgIconAccent;
    case "brand":       return imgIconBrand;
    case "informative": return imgIconInformative;
    case "success":     return imgIconSuccess;
    case "error":       return imgIconError;
    case "warning":     return imgIconWarning;
    default:            return imgIconNeutral;
  }
}

export const Tag = ({
  className,
  context = "neutral",
  label = "Placeholder text",
}: TagProps) => {
  return (
    <span className={cx(styles.tag, styles[context], className)}>
      <span className={styles.icon} aria-hidden="true">
        <img alt="" src={getIconSrc(context)} />
      </span>
      <span className={styles.label}>{label}</span>
    </span>
  );
};
