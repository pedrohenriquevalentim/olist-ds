import React from 'react';
import styles from './ProdutosOlistIcons.module.css';

// ─── Assets: Hub de Integração ───────────────────────────────────────────────
import hubActiveLight1 from '../../assets/icons/produtos-olist/s00.svg';
import hubActiveLight2 from '../../assets/icons/produtos-olist/s01.svg';
import hubDefaultLight1 from '../../assets/icons/produtos-olist/s02.svg';
import hubDefaultLight2 from '../../assets/icons/produtos-olist/u00.svg';
import hubActiveDark1 from '../../assets/icons/produtos-olist/s03.svg';
import hubActiveDark2 from '../../assets/icons/produtos-olist/s04.svg';
import hubDefaultDark1 from '../../assets/icons/produtos-olist/s05.svg';
import hubDefaultDark2 from '../../assets/icons/produtos-olist/u01.svg';

// ─── Assets: Sistema PDV ─────────────────────────────────────────────────────
import pdvActiveLight1 from '../../assets/icons/produtos-olist/s06.svg';
import pdvActiveLight2 from '../../assets/icons/produtos-olist/s07.svg';
import pdvDefaultLight2 from '../../assets/icons/produtos-olist/u02.svg';
import pdvActiveDark1 from '../../assets/icons/produtos-olist/s08.svg';
import pdvActiveDark2 from '../../assets/icons/produtos-olist/s09.svg';
import pdvDefaultDark1 from '../../assets/icons/produtos-olist/s10.svg';
import pdvDefaultDark2 from '../../assets/icons/produtos-olist/u03.svg';

// ─── Assets: Envios ──────────────────────────────────────────────────────────
import enviosLightBase from '../../assets/icons/produtos-olist/s11.svg';
import enviosActiveLight2 from '../../assets/icons/produtos-olist/u04.svg';
import enviosDefaultLight2 from '../../assets/icons/produtos-olist/u05.svg';
import enviosActiveDark1 from '../../assets/icons/produtos-olist/s12.svg';
import enviosActiveDark2 from '../../assets/icons/produtos-olist/u06.svg';
import enviosDefaultDark1 from '../../assets/icons/produtos-olist/s13.svg';
import enviosDefaultDark2 from '../../assets/icons/produtos-olist/u07.svg';

// ─── Assets: Sistema ERP ─────────────────────────────────────────────────────
import erpLightBase from '../../assets/icons/produtos-olist/s14.svg';
import erpActiveLight2 from '../../assets/icons/produtos-olist/s15.svg';
import erpDefaultLight2 from '../../assets/icons/produtos-olist/u08.svg';
import erpActiveDark1 from '../../assets/icons/produtos-olist/s16.svg';
import erpActiveDark2 from '../../assets/icons/produtos-olist/s17.svg';
import erpDefaultDark2 from '../../assets/icons/produtos-olist/u18.svg';

// ─── Assets: Ecommerce ───────────────────────────────────────────────────────
import ecomLightBase from '../../assets/icons/produtos-olist/s18.svg';
import ecomActiveLight2 from '../../assets/icons/produtos-olist/s19.svg';
import ecomDefaultLight2 from '../../assets/icons/produtos-olist/u09.svg';
import ecomActiveDark1 from '../../assets/icons/produtos-olist/s20.svg';
import ecomActiveDark2 from '../../assets/icons/produtos-olist/s21.svg';
import ecomDefaultDark2 from '../../assets/icons/produtos-olist/u10.svg';

// ─── Assets: Agentes de IA ───────────────────────────────────────────────────
import iaActiveLight1 from '../../assets/icons/produtos-olist/s22.svg';
import iaActiveLight2 from '../../assets/icons/produtos-olist/s23.svg';
import iaDefaultLight1 from '../../assets/icons/produtos-olist/s24.svg';
import iaDefaultLight2 from '../../assets/icons/produtos-olist/u11.svg';
import iaDarkBase from '../../assets/icons/produtos-olist/s25.svg';
import iaActiveDark2 from '../../assets/icons/produtos-olist/s26.svg';
import iaDefaultDark2 from '../../assets/icons/produtos-olist/u12.svg';

// ─── Assets: Crédito ─────────────────────────────────────────────────────────
import creditoActiveLight1 from '../../assets/icons/produtos-olist/s27.svg';
import creditoActiveLight2 from '../../assets/icons/produtos-olist/u13.svg';
import creditoDefaultLight1 from '../../assets/icons/produtos-olist/s28.svg';
import creditoDefaultLight2 from '../../assets/icons/produtos-olist/u14.svg';
import creditoActiveDark1 from '../../assets/icons/produtos-olist/s29.svg';
import creditoActiveDark2 from '../../assets/icons/produtos-olist/u15.svg';
import creditoDefaultDark1 from '../../assets/icons/produtos-olist/s30.svg';
import creditoDefaultDark2 from '../../assets/icons/produtos-olist/u16.svg';

// ─── Assets: Conta Digital ───────────────────────────────────────────────────
import contaDefaultLight1 from '../../assets/icons/produtos-olist/s31.svg';
import contaDefaultLight2 from '../../assets/icons/produtos-olist/u17.svg';
import contaActiveLight2 from '../../assets/icons/produtos-olist/s32.svg';
import contaGuidelinesRebrand from '../../assets/icons/produtos-olist/guidelines-rebrand.svg';
import contaActiveDark2a from '../../assets/icons/produtos-olist/s33.svg';
import contaActiveDark2b from '../../assets/icons/produtos-olist/s34.svg';
import contaDefaultDark from '../../assets/icons/produtos-olist/icon-path-base.svg';

// ─────────────────────────────────────────────────────────────────────────────

export type ProdutoOlist =
  | 'Conta Digital'
  | 'Crédito'
  | 'Agentes de IA'
  | 'Ecommerce'
  | 'Sistema ERP'
  | 'Envios'
  | 'Sistema PDV'
  | 'Hub de Integração';

export interface ProdutosOlistIconsProps {
  product: ProdutoOlist;
  /** Estado do ícone. 'active' representa o estado ativo/hover no menu. */
  state?: 'default' | 'active';
  /** Tema de cor. 'dark' é usado na sidebar (fundo escuro); 'light' em fundos claros. */
  theme?: 'dark' | 'light';
  className?: string;
  'aria-label'?: string;
}

// ─── Helper: ícone de duas camadas absolutas ──────────────────────────────────

interface TwoLayerIconProps {
  part1: string;
  part2: string;
  containerW: number;
  containerH: number;
  p1Style: React.CSSProperties;
  p2Style: React.CSSProperties;
}

const TwoLayerIcon = ({ part1, part2, containerW, containerH, p1Style, p2Style }: TwoLayerIconProps) => (
  <div className={styles.iconContainer} style={{ width: containerW, height: containerH }}>
    <img alt="" className={styles.iconPart} style={p1Style} src={part1} />
    <img alt="" className={styles.iconPart} style={p2Style} src={part2} />
  </div>
);

// ─── Renderização por produto ─────────────────────────────────────────────────

function renderProductIcon(product: ProdutoOlist, state: 'default' | 'active', theme: 'dark' | 'light') {
  const isActive = state === 'active';
  const isDark = theme === 'dark';

  switch (product) {
    // ── Hub de Integração ──
    case 'Hub de Integração':
      if (isActive && !isDark)
        return <TwoLayerIcon part1={hubActiveLight1} part2={hubActiveLight2} containerW={19.997} containerH={22.005} p1Style={{ top: 0, left: 0, width: 19.997, height: 17.201 }} p2Style={{ top: 4.01, left: 1, width: 18, height: 18 }} />;
      if (!isActive && !isDark)
        return <TwoLayerIcon part1={hubDefaultLight1} part2={hubDefaultLight2} containerW={19.997} containerH={22.004} p1Style={{ top: 0, left: 0, width: 19.997, height: 17.2 }} p2Style={{ top: 4, left: 1, width: 18, height: 18 }} />;
      if (isActive && isDark)
        return <TwoLayerIcon part1={hubActiveDark1} part2={hubActiveDark2} containerW={19.997} containerH={22.005} p1Style={{ top: 0, left: 0, width: 19.997, height: 17.201 }} p2Style={{ top: 4.01, left: 1, width: 18, height: 18 }} />;
      // default + dark
      return <TwoLayerIcon part1={hubDefaultDark1} part2={hubDefaultDark2} containerW={19.997} containerH={22.004} p1Style={{ top: 0, left: 0, width: 19.997, height: 17.2 }} p2Style={{ top: 4, left: 1, width: 18, height: 18 }} />;

    // ── Sistema PDV ──
    case 'Sistema PDV':
      if (isActive && !isDark)
        return <TwoLayerIcon part1={pdvActiveLight1} part2={pdvActiveLight2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 10 }} p2Style={{ top: 4, left: 0, width: 20, height: 18 }} />;
      if (!isActive && !isDark)
        return <TwoLayerIcon part1={pdvActiveLight1} part2={pdvDefaultLight2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 10 }} p2Style={{ top: 4, left: 0, width: 20, height: 18 }} />;
      if (isActive && isDark)
        return <TwoLayerIcon part1={pdvActiveDark1} part2={pdvActiveDark2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 10 }} p2Style={{ top: 4, left: 0, width: 20, height: 18 }} />;
      // default + dark
      return <TwoLayerIcon part1={pdvDefaultDark1} part2={pdvDefaultDark2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 10 }} p2Style={{ top: 4, left: 0, width: 20, height: 18 }} />;

    // ── Envios ──
    case 'Envios':
      if (isActive && !isDark)
        return <TwoLayerIcon part1={enviosLightBase} part2={enviosActiveLight2} containerW={22} containerH={22.017} p1Style={{ top: 0, left: 1.2, width: 12.324, height: 5.439 }} p2Style={{ top: 5.02, left: 0, width: 22, height: 17 }} />;
      if (!isActive && !isDark)
        return <TwoLayerIcon part1={enviosLightBase} part2={enviosDefaultLight2} containerW={22} containerH={22.017} p1Style={{ top: 0, left: 1.2, width: 12.324, height: 5.439 }} p2Style={{ top: 5.02, left: 0, width: 22, height: 17 }} />;
      if (isActive && isDark)
        return <TwoLayerIcon part1={enviosActiveDark1} part2={enviosActiveDark2} containerW={22} containerH={22.004} p1Style={{ top: 0, left: 1.21, width: 12.322, height: 5.426 }} p2Style={{ top: 5, left: 0, width: 22, height: 17 }} />;
      // default + dark
      return <TwoLayerIcon part1={enviosDefaultDark1} part2={enviosDefaultDark2} containerW={22} containerH={22.002} p1Style={{ top: 0, left: 1.21, width: 12.323, height: 5.424 }} p2Style={{ top: 5, left: 0, width: 22, height: 17 }} />;

    // ── Sistema ERP ──
    case 'Sistema ERP':
      if (isActive && !isDark)
        return <TwoLayerIcon part1={erpLightBase} part2={erpActiveLight2} containerW={22.001} containerH={22} p1Style={{ top: 0, left: 0, width: 22.001, height: 16.627 }} p2Style={{ top: 6, left: 0, width: 22, height: 16 }} />;
      if (!isActive && !isDark)
        return <TwoLayerIcon part1={erpLightBase} part2={erpDefaultLight2} containerW={22.001} containerH={22} p1Style={{ top: 0, left: 0, width: 22.001, height: 16.627 }} p2Style={{ top: 6, left: 0, width: 22, height: 16 }} />;
      if (isActive && isDark)
        return <TwoLayerIcon part1={erpActiveDark1} part2={erpActiveDark2} containerW={22.001} containerH={22} p1Style={{ top: 0, left: 0, width: 22.001, height: 16.627 }} p2Style={{ top: 6, left: 0, width: 22, height: 16 }} />;
      // default + dark
      return <TwoLayerIcon part1={erpActiveDark1} part2={erpDefaultDark2} containerW={22.001} containerH={22} p1Style={{ top: 0, left: 0, width: 22.001, height: 16.627 }} p2Style={{ top: 6, left: 0, width: 22, height: 16 }} />;

    // ── Ecommerce ──
    case 'Ecommerce':
      if (isActive && !isDark)
        return <TwoLayerIcon part1={ecomLightBase} part2={ecomActiveLight2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 8 }} p2Style={{ top: 2, left: 0, width: 20, height: 20 }} />;
      if (!isActive && !isDark)
        return <TwoLayerIcon part1={ecomLightBase} part2={ecomDefaultLight2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 8 }} p2Style={{ top: 2, left: 0, width: 20, height: 20 }} />;
      if (isActive && isDark)
        return <TwoLayerIcon part1={ecomActiveDark1} part2={ecomActiveDark2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 8 }} p2Style={{ top: 2, left: 0, width: 20, height: 20 }} />;
      // default + dark
      return <TwoLayerIcon part1={ecomActiveDark1} part2={ecomDefaultDark2} containerW={20} containerH={22} p1Style={{ top: 0, left: 0, width: 20, height: 8 }} p2Style={{ top: 2, left: 0, width: 20, height: 20 }} />;

    // ── Agentes de IA ──
    case 'Agentes de IA':
      if (isActive && !isDark)
        return <TwoLayerIcon part1={iaActiveLight1} part2={iaActiveLight2} containerW={22} containerH={22.002} p1Style={{ top: 7.3, left: 8.01, width: 13.994, height: 14.702 }} p2Style={{ top: 0, left: 0, width: 16, height: 17.7 }} />;
      if (!isActive && !isDark)
        return <TwoLayerIcon part1={iaDefaultLight1} part2={iaDefaultLight2} containerW={22} containerH={22.002} p1Style={{ top: 7.3, left: 8.01, width: 13.994, height: 14.702 }} p2Style={{ top: 0, left: 0, width: 16, height: 17.7 }} />;
      if (isActive && isDark)
        return <TwoLayerIcon part1={iaDarkBase} part2={iaActiveDark2} containerW={22.001} containerH={21.759} p1Style={{ top: 7.3, left: 8, width: 13.994, height: 14.678 }} p2Style={{ top: 0, left: 0, width: 16, height: 17.7 }} />;
      // default + dark
      return <TwoLayerIcon part1={iaDarkBase} part2={iaDefaultDark2} containerW={22.001} containerH={21.759} p1Style={{ top: 7.3, left: 8, width: 13.994, height: 14.678 }} p2Style={{ top: 0, left: 0, width: 16, height: 17.7 }} />;

    // ── Crédito ──
    case 'Crédito':
      if (isActive && !isDark)
        return <TwoLayerIcon part1={creditoActiveLight1} part2={creditoActiveLight2} containerW={22} containerH={22} p1Style={{ top: 0, left: 0, width: 17.585, height: 17.585 }} p2Style={{ top: 4, left: 4, width: 18, height: 18 }} />;
      if (!isActive && !isDark)
        return <TwoLayerIcon part1={creditoDefaultLight1} part2={creditoDefaultLight2} containerW={22} containerH={22} p1Style={{ top: 0, left: 0, width: 17.585, height: 17.585 }} p2Style={{ top: 4, left: 4, width: 18, height: 18 }} />;
      if (isActive && isDark)
        return <TwoLayerIcon part1={creditoActiveDark1} part2={creditoActiveDark2} containerW={22} containerH={22} p1Style={{ top: 0, left: 0, width: 17.585, height: 17.585 }} p2Style={{ top: 4, left: 4, width: 18, height: 18 }} />;
      // default + dark
      return <TwoLayerIcon part1={creditoDefaultDark1} part2={creditoDefaultDark2} containerW={22} containerH={22} p1Style={{ top: 0, left: 0, width: 17.585, height: 17.585 }} p2Style={{ top: 4, left: 4, width: 18, height: 18 }} />;

    // ── Conta Digital ──
    case 'Conta Digital':
    default:
      if (isActive && isDark) {
        // 3 camadas: rebrand + path composto
        return (
          <div className={styles.iconContainer} style={{ width: 24, height: 24, borderRadius: 3, overflow: 'hidden' }}>
            <img alt="" className={styles.iconPart} style={{ inset: 0, width: 22, height: 22, top: 1, left: 1 }} src={contaGuidelinesRebrand} />
            <div className={styles.iconContainer} style={{ width: 22, height: 22.451, position: 'absolute', top: '1.05px', left: '0.5px' }}>
              <img alt="" className={styles.iconPart} style={{ top: 0, left: 2.23, width: 19.802, height: 8.653 }} src={contaActiveDark2a} />
              <img alt="" className={styles.iconPart} style={{ top: 5.45, left: 0, width: 23, height: 17 }} src={contaActiveDark2b} />
            </div>
          </div>
        );
      }
      if (!isActive && isDark) {
        // 1 camada
        return (
          <div className={styles.iconContainer} style={{ width: 22, height: 21.995 }}>
            <img alt="" className={styles.iconPart} style={{ inset: 0, width: '100%', height: '100%' }} src={contaDefaultDark} />
          </div>
        );
      }
      // light theme: rebrand base + overlay
      return (
        <div className={styles.iconContainer} style={{ width: 24, height: 24, borderRadius: 3, overflow: 'hidden' }}>
          <img alt="" className={styles.iconPart} style={{ inset: 0, width: 22, height: 22, top: 1, left: 1 }} src={contaGuidelinesRebrand} />
          <div className={styles.iconContainer} style={{ width: 23, height: 22.451, position: 'absolute', top: '1.05px', left: '0.5px' }}>
            <img alt="" className={styles.iconPart} style={{ top: 0, left: 2.23, width: 19.802, height: 8.653 }} src={contaDefaultLight1} />
            <img alt="" className={styles.iconPart} style={{ top: 5.45, left: 0, width: 23, height: 17 }} src={isActive ? contaActiveLight2 : contaDefaultLight2} />
          </div>
        </div>
      );
  }
}

// ─── Componente Principal ─────────────────────────────────────────────────────

const PRODUCT_LABELS: Record<ProdutoOlist, string> = {
  'Conta Digital': 'Conta Digital',
  'Crédito': 'Crédito',
  'Agentes de IA': 'Agentes de IA',
  'Ecommerce': 'Ecommerce',
  'Sistema ERP': 'Sistema ERP',
  'Envios': 'Envios',
  'Sistema PDV': 'Sistema PDV',
  'Hub de Integração': 'Hub de Integração',
};

export const ProdutosOlistIcons = ({
  product,
  state = 'default',
  theme = 'dark',
  className,
  'aria-label': ariaLabel,
}: ProdutosOlistIconsProps) => {
  const isActiveAndDark = state === 'active' && theme === 'dark';

  return (
    <div
      role="img"
      aria-label={ariaLabel ?? PRODUCT_LABELS[product]}
      data-state={state}
      data-theme={theme}
      className={[
        styles.pill,
        isActiveAndDark ? styles.pillActiveGradient : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {renderProductIcon(product, state, theme)}
    </div>
  );
};
