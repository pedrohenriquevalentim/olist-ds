import React from 'react';
import styles from './Logo.module.css';

import toggleDefaultSrc from '../../assets/logo/svgs/toggle-default.svg';
import circleDefaultSrc from '../../assets/logo/svgs/circle-default.svg';
import wordmarkDefaultSrc from '../../assets/logo/svgs/wordmark-default.svg';
import toggleSimpleSrc from '../../assets/logo/svgs/toggle-simple.svg';
import wordmarkSimpleSrc from '../../assets/logo/svgs/wordmark-simple.svg';
import toggleSymbolSrc from '../../assets/logo/svgs/toggle-symbol.svg';
import circleSymbolSrc from '../../assets/logo/svgs/circle-symbol.svg';

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
                src={size === 'default' ? toggleDefaultSrc : toggleSimpleSrc}
              />
              {size === 'default' && (
                <div className={styles.circleWrapper}>
                  <img alt="" className={styles.asset} src={circleDefaultSrc} />
                </div>
              )}
            </div>
            <div className={styles.wordmarkWrapper}>
              <img
                alt=""
                className={styles.asset}
                src={size === 'default' ? wordmarkDefaultSrc : wordmarkSimpleSrc}
              />
            </div>
          </>
        )}

        {isSymbol && (
          <div className={styles.symbolWrapper}>
            <img alt="" className={styles.asset} src={toggleSymbolSrc} />
            <div className={styles.circleWrapper}>
              <img alt="" className={styles.asset} src={circleSymbolSrc} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
