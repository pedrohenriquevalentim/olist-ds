import React from "react";
import styles from "./Logo.module.css";
import { logoToggleSvg, logoSymbolSvg, logoWordmarkSvg } from "../../assets/logo";

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
          <span
            className={styles.img}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: logoToggleSvg }}
          />
          <div className={styles.circle}>
            <span
              className={styles.img}
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: logoSymbolSvg }}
            />
          </div>
        </div>
        <div className={styles.wordmark}>
          <span
            className={styles.img}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: logoWordmarkSvg }}
          />
        </div>
      </div>
    </div>
  );
};
