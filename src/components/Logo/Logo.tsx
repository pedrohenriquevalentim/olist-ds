import React from 'react';
import styles from './Logo.module.css';

/*
 * Assets exportados pelo Figma MCP.
 * Para produção, substituir pelas URLs locais em src/assets/logo/
 * após baixar os SVGs via: curl -o src/assets/logo/<nome>.svg "<url>"
 */
const ASSETS = {
  default: {
    toggle:   'https://www.figma.com/api/mcp/asset/88ed73b1-739b-4c5b-8324-5d845c8e609d',
    circle:   'https://www.figma.com/api/mcp/asset/b1744796-008f-4d3c-8b1a-6727e9ec10a4',
    wordmark: 'https://www.figma.com/api/mcp/asset/4762f43a-ab33-4a5a-93bc-f969ecf839ff',
  },
  simple: {
    toggle:   'https://www.figma.com/api/mcp/asset/bf4e94b6-6b76-425b-8e87-00a300d0f8ce',
    wordmark: 'https://www.figma.com/api/mcp/asset/1cc37aa2-026e-4df8-bdf8-1cbb24c82550',
  },
  symbol: {
    toggle: 'https://www.figma.com/api/mcp/asset/ffb39bed-c2bf-4e59-a694-d9fac1143cb4',
    circle: 'https://www.figma.com/api/mcp/asset/36ccb7a0-59de-42ec-9108-9d6fbc067285',
  },
} as const;

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variante de tamanho do logo. */
  size?: 'default' | 'simple' | 'symbol';
}

export const Logo = ({
  size = 'default',
  className,
  'aria-label': ariaLabel = 'Logo Olist',
  ...rest
}: LogoProps) => {
  const isSymbol = size === 'symbol';

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={[styles.logo, styles[size], className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className={[styles.inner, isSymbol ? styles.squareInner : styles.fullInner].join(' ')}>
        {!isSymbol && (
          <>
            <div className={styles.toggleWrapper}>
              <img
                alt=""
                className={styles.asset}
                src={size === 'default' ? ASSETS.default.toggle : ASSETS.simple.toggle}
              />
              {size === 'default' && (
                <div className={styles.circleWrapper}>
                  <img alt="" className={styles.asset} src={ASSETS.default.circle} />
                </div>
              )}
            </div>
            <div className={styles.wordmarkWrapper}>
              <img
                alt=""
                className={styles.asset}
                src={size === 'default' ? ASSETS.default.wordmark : ASSETS.simple.wordmark}
              />
            </div>
          </>
        )}

        {isSymbol && (
          <div className={styles.symbolWrapper}>
            <img alt="" className={styles.asset} src={ASSETS.symbol.toggle} />
            <div className={styles.circleWrapper}>
              <img alt="" className={styles.asset} src={ASSETS.symbol.circle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
