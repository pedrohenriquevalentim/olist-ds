import React from "react";
import styles from "./Logo.module.css";

const imgToggle = "https://www.figma.com/api/mcp/asset/469eabd5-1dbe-412b-bdb8-08ae90047cf5";
const imgCircle = "https://www.figma.com/api/mcp/asset/6b3ba8b9-983a-40aa-9b5f-8a6fe0ae0369";
const imgWordmark = "https://www.figma.com/api/mcp/asset/93b3749b-2e74-4e6b-9ab3-e94c54e00620";

export interface LogoProps {
  className?: string;
  /** Texto alternativo para leitores de tela. */
  alt?: string;
}

export const Logo = ({ className, alt = "olist" }: LogoProps) => {
  return (
    <div
      className={`${styles.logo}${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={alt}
    >
      <div className={styles.inner}>
        <div className={styles.toggle}>
          <img alt="" src={imgToggle} className={styles.img} />
          <div className={styles.circle}>
            <img alt="" src={imgCircle} className={styles.img} />
          </div>
        </div>
        <div className={styles.wordmark}>
          <img alt="" src={imgWordmark} className={styles.img} />
        </div>
      </div>
    </div>
  );
};
