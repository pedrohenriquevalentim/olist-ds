import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
};
export default meta;

function SpacingRow({ token, value, usage, isHighlight }: { token: string; value: number; usage?: string; isHighlight?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '10px 0', borderBottom: '1px solid #f2f0e8' }}>
      <div style={{ width: 180, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: value, background: '#e7edf8', borderRadius: 6, padding: '6px', width: 'fit-content' }}>
          <div style={{ width: 4, height: 20, background: '#0a4ee4', borderRadius: 2, opacity: 0.3 }} />
          <div style={{ width: value, height: 4, background: isHighlight ? '#0a4ee4' : '#6791ea', borderRadius: 2 }} />
          <div style={{ width: 4, height: 20, background: '#0a4ee4', borderRadius: 2, opacity: 0.3 }} />
        </div>
      </div>
      <div style={{ width: 56, flexShrink: 0, fontSize: 14, fontWeight: 700, color: '#10100f', fontVariantNumeric: 'tabular-nums' }}>
        {value}px
      </div>
      <div style={{ flex: 1 }}>
        <code style={{ fontSize: 12, color: '#403f3b', background: '#f2f0e8', padding: '2px 6px', borderRadius: 4 }}>{token}</code>
        {usage && <span style={{ fontSize: 12, color: '#827f73', marginLeft: 10 }}>{usage}</span>}
      </div>
      {isHighlight && <div style={{ fontSize: 10, fontWeight: 700, color: '#0a4ee4', background: '#e7edf8', padding: '2px 8px', borderRadius: 9999 }}>⭐ Comum</div>}
    </div>
  );
}

function RadiusCard({ token, value, label }: { token: string; value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ width: 80, height: 48, background: '#0a4ee4', borderRadius: value, opacity: 0.85 }} />
      <div>
        <code style={{ fontSize: 11, color: '#403f3b', display: 'block', background: '#f2f0e8', padding: '2px 5px', borderRadius: 4, width: 'fit-content' }}>{token}</code>
        <span style={{ fontSize: 11, color: '#827f73', display: 'block', marginTop: 3 }}>{value} — {label}</span>
      </div>
    </div>
  );
}

function LayoutToken({ label, token, value }: { label: string; token: string; value: string }) {
  return (
    <div style={{ padding: '10px 0', borderBottom: '1px solid #f2f0e8', display: 'grid', gridTemplateColumns: '160px 1fr 80px', gap: 16, alignItems: 'center' }}>
      <span style={{ fontSize: 13, color: '#10100f', fontWeight: 600 }}>{label}</span>
      <code style={{ fontSize: 12, color: '#403f3b', background: '#f2f0e8', padding: '2px 6px', borderRadius: 4 }}>{token}</code>
      <span style={{ fontSize: 13, color: '#827f73', textAlign: 'right' }}>{value}</span>
    </div>
  );
}

export const Espacamentos: StoryObj = {
  name: 'Espaçamentos',
  render: () => (
    <div style={{ padding: '40px 48px', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: 1000 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#10100f', margin: '0 0 8px' }}>Espaçamento</h1>
      <p style={{ fontSize: 15, color: '#615f56', margin: '0 0 40px', lineHeight: 1.6 }}>
        Grid base de <strong>4px</strong>. Todo valor de espaçamento é múltiplo de 4.
        Nunca use valores arbitrários (5px, 7px, 13px) — use sempre <code style={{ background: '#f2f0e8', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>var(--shape-spacing-*)</code>.
      </p>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#10100f', margin: '0 0 20px' }}>Escala de espaçamento</h2>

      <SpacingRow token="--shape-spacing-4px"  value={4}   usage="Gap ícone-texto, padding vertical de badge" />
      <SpacingRow token="--shape-spacing-8px"  value={8}   usage="Padding compacto, gap checkbox–label" />
      <SpacingRow token="--shape-spacing-12px" value={12}  usage="Padding horizontal de input, gaps internos" />
      <SpacingRow token="--shape-spacing-16px" value={16}  isHighlight usage="Padding padrão, gaps de seção" />
      <SpacingRow token="--shape-spacing-24px" value={24}  isHighlight usage="Padding de card padrão, entre seções" />
      <SpacingRow token="--shape-spacing-32px" value={32}  isHighlight usage="Padding da área de conteúdo da página" />
      <SpacingRow token="--shape-spacing-40px" value={40}  usage="Margens topo/base de página" />
      <SpacingRow token="--shape-spacing-48px" value={48}  usage="Divisões entre seções maiores" />
      <SpacingRow token="--shape-spacing-56px" value={56}  />
      <SpacingRow token="--shape-spacing-64px" value={64}  usage="Respiro de nível de página (raro)" />
      <SpacingRow token="--shape-spacing-72px" value={72}  />
      <SpacingRow token="--shape-spacing-80px" value={80}  />
      <SpacingRow token="--shape-spacing-88px" value={88}  />
      <SpacingRow token="--shape-spacing-96px" value={96}  />
      <SpacingRow token="--shape-spacing-104px" value={104} />
      <SpacingRow token="--shape-spacing-112px" value={112} />
      <SpacingRow token="--shape-spacing-120px" value={120} />
      <SpacingRow token="--shape-spacing-128px" value={128} />
      <SpacingRow token="--shape-spacing-160px" value={160} />
      <SpacingRow token="--shape-spacing-200px" value={200} />

      <div style={{ marginTop: 56 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#10100f', margin: '0 0 8px' }}>Border radius</h2>
        <p style={{ fontSize: 13, color: '#615f56', margin: '0 0 24px' }}>Cantos arredondados. Nunca use valores arbitrários.</p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <RadiusCard token="--shape-border-radius-0px"    value="0px"    label="Quadrado" />
          <RadiusCard token="--shape-border-radius-2px"    value="2px"    label="Mínimo" />
          <RadiusCard token="--shape-border-radius-4px"    value="4px"    label="Sutil" />
          <RadiusCard token="--shape-border-radius-8px"    value="8px"    label="⭐ Padrão" />
          <RadiusCard token="--shape-border-radius-12px"   value="12px"   label="Cards" />
          <RadiusCard token="--shape-border-radius-16px"   value="16px"   label="Modais" />
          <RadiusCard token="--shape-border-radius-20px"   value="20px"   label="Containers grandes" />
          <RadiusCard token="--shape-border-radius-24px"   value="24px"   label="Superfícies flutuantes" />
          <RadiusCard token="--shape-border-radius-9999px" value="9999px" label="⭐ Pill — chips, badges" />
        </div>
      </div>

      <div style={{ marginTop: 56 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#10100f', margin: '0 0 8px' }}>Espessura de borda</h2>
        <div style={{ display: 'flex', gap: 32, marginTop: 16 }}>
          {[
            { token: '--shape-border-width-1px', value: '1px', label: '⭐ Padrão', usage: 'Inputs, cards, divisores' },
            { token: '--shape-border-width-2px', value: '2px', label: 'Ênfase', usage: 'Focus ring, estados ativos' },
            { token: '--shape-border-width-4px', value: '4px', label: 'Destaque', usage: 'Borda lateral em linhas selecionadas' },
          ].map(({ token, value, label, usage }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 80, height: 40, border: `${value} solid #0a4ee4`, borderRadius: 8 }} />
              <div>
                <code style={{ fontSize: 11, color: '#403f3b', display: 'block', background: '#f2f0e8', padding: '2px 5px', borderRadius: 4 }}>{token}</code>
                <span style={{ fontSize: 11, color: '#827f73', display: 'block', marginTop: 3 }}>{value} — {label}</span>
                <span style={{ fontSize: 11, color: '#918e83', display: 'block', marginTop: 1 }}>{usage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 56 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#10100f', margin: '0 0 8px' }}>Tokens de layout fixo</h2>
        <p style={{ fontSize: 13, color: '#615f56', margin: '0 0 16px' }}>Dimensões definidas por token para estruturas de página.</p>
        <LayoutToken label="Largura da sidebar"      token="--shape-size-280px"             value="280px" />
        <LayoutToken label="Sidebar contraída"       token="--menu-container-size-width-contracted" value="56px" />
        <LayoutToken label="Altura do header"        token="--shape-size-64px"              value="64px" />
        <LayoutToken label="Padding conteúdo"        token="--shape-spacing-24px / 32px"    value="24–32px" />
        <LayoutToken label="Altura input/botão MD"   token="--shape-size-40px"              value="40px" />
        <LayoutToken label="Altura input/botão SM"   token="--shape-size-32px"              value="32px" />
        <LayoutToken label="Altura linha de tabela"  token="--shape-size-48px"              value="48px" />
      </div>
    </div>
  ),
};
