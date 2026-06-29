import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
};
export default meta;

// ─── Helpers ────────────────────────────────────────────────────────────────

function hexFromVar(varName: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

function ColorSwatch({ token, label }: { token: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const hex = hexFromVar(token);

  function handleClick() {
    navigator.clipboard.writeText(token).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const isDark = (() => {
    const h = hex.replace('#', '');
    if (h.length < 6) return false;
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 < 128;
  })();

  return (
    <button
      onClick={handleClick}
      title={`Copiar ${token}`}
      style={{
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 0.1s, box-shadow 0.1s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
      }}
    >
      <div style={{ background: `var(${token})`, height: 72, display: 'flex', alignItems: 'flex-end', padding: '8px 10px' }}>
        {copied && (
          <span style={{ fontSize: 10, fontFamily: 'monospace', color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.6)', background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.7)', padding: '2px 5px', borderRadius: 4 }}>
            Copiado!
          </span>
        )}
      </div>
      <div style={{ background: '#fff', padding: '8px 10px 10px' }}>
        <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#10100f', lineHeight: 1.4, wordBreak: 'break-all' }}>
          {token}
        </div>
        <div style={{ fontSize: 10, color: '#827f73', marginTop: 2 }}>{hex || '—'}</div>
        {label && <div style={{ fontSize: 10, color: '#615f56', marginTop: 2, lineHeight: 1.3 }}>{label}</div>}
      </div>
    </button>
  );
}

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 20, fontWeight: 700, color: '#10100f', margin: '0 0 4px', lineHeight: 1.3 }}>{title}</h2>
      {description && <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 13, color: '#615f56', margin: '0 0 20px', lineHeight: 1.5 }}>{description}</p>}
      {!description && <div style={{ marginBottom: 20 }} />}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
        {children}
      </div>
    </div>
  );
}

function SemanticTable({ rows }: { rows: { token: string; value: string; usage: string }[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 13, marginBottom: 32 }}>
      <thead>
        <tr style={{ background: '#f2f0e8' }}>
          <th style={{ textAlign: 'left', padding: '8px 12px', color: '#403f3b', fontWeight: 600, borderBottom: '1px solid #e7e4da' }}>Token semântico</th>
          <th style={{ textAlign: 'left', padding: '8px 12px', color: '#403f3b', fontWeight: 600, borderBottom: '1px solid #e7e4da' }}>Referência primitiva</th>
          <th style={{ textAlign: 'left', padding: '8px 12px', color: '#403f3b', fontWeight: 600, borderBottom: '1px solid #e7e4da' }}>Amostra</th>
          <th style={{ textAlign: 'left', padding: '8px 12px', color: '#403f3b', fontWeight: 600, borderBottom: '1px solid #e7e4da' }}>Uso</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ token, value, usage }) => (
          <tr key={token} style={{ borderBottom: '1px solid #f2f0e8' }}>
            <td style={{ padding: '8px 12px' }}><code style={{ fontSize: 11, color: '#10100f', background: '#f2f0e8', padding: '2px 5px', borderRadius: 4 }}>{token}</code></td>
            <td style={{ padding: '8px 12px' }}><code style={{ fontSize: 11, color: '#615f56' }}>{value}</code></td>
            <td style={{ padding: '8px 12px' }}><div style={{ width: 28, height: 28, borderRadius: 6, background: `var(${token})`, border: '1px solid rgba(0,0,0,0.1)' }} /></td>
            <td style={{ padding: '8px 12px', color: '#615f56', fontSize: 12 }}>{usage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ─── Story ──────────────────────────────────────────────────────────────────

export const Palette: StoryObj = {
  name: 'Paleta de cores',
  render: () => (
    <div style={{ padding: '40px 48px', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: 1200 }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#10100f', margin: '0 0 8px' }}>Cores</h1>
        <p style={{ fontSize: 15, color: '#615f56', margin: 0, lineHeight: 1.6 }}>
          Tokens primitivos organizados por escala cromática. Clique em qualquer swatch para copiar o nome do token.
          Todos os tokens estão em <code style={{ background: '#f2f0e8', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>src/generated/variables.css</code>.
        </p>
      </div>

      <Section title="Neutros — Gray" description="Base da interface. Cinzas com subtom quente (bege).">
        <ColorSwatch token="--color-gray-gray-0"   label="Fundo padrão, superfície" />
        <ColorSwatch token="--color-gray-gray-50"  label="Hover sutil, faixas alt." />
        <ColorSwatch token="--color-gray-gray-100" label="Bordas, divisores" />
        <ColorSwatch token="--color-gray-gray-200" label="Bordas fortes, disabled" />
        <ColorSwatch token="--color-gray-gray-300" label="Placeholder, ícone inativo" />
        <ColorSwatch token="--color-gray-gray-400" label="Ícones secundários" />
        <ColorSwatch token="--color-gray-gray-500" label="Texto secundário" />
        <ColorSwatch token="--color-gray-gray-600" label="Texto terciário" />
        <ColorSwatch token="--color-gray-gray-700" label="Labels de formulário" />
        <ColorSwatch token="--color-gray-gray-800" label="Texto enfatizado" />
        <ColorSwatch token="--color-gray-gray-900" label="Texto principal" />
        <ColorSwatch token="--color-gray-gray-950" label="Contraste máximo" />
      </Section>

      <Section title="Marca — Blue" description="Azul é a cor de ação primária. Sinaliza interatividade e foco.">
        <ColorSwatch token="--color-blue-blue-0"   label="Hover em linhas interativas" />
        <ColorSwatch token="--color-blue-blue-50"  label="Fundo de seleção/ativo" />
        <ColorSwatch token="--color-blue-blue-100" label="Selecionado + hover" />
        <ColorSwatch token="--color-blue-blue-200" label="Borda de chip selecionado" />
        <ColorSwatch token="--color-blue-blue-300" />
        <ColorSwatch token="--color-blue-blue-400" label="Hover em botão primário" />
        <ColorSwatch token="--color-blue-blue-500" label="⭐ Ação primária, links" />
        <ColorSwatch token="--color-blue-blue-600" label="Pressed botão primário" />
        <ColorSwatch token="--color-blue-blue-700" label="Active botão primário" />
        <ColorSwatch token="--color-blue-blue-800" label="Navy — sidebar escura" />
        <ColorSwatch token="--color-blue-blue-900" />
        <ColorSwatch token="--color-blue-blue-950" />
      </Section>

      <Section title="Feedback — Sucesso (Green)">
        <ColorSwatch token="--color-green-green-0"   label="Fundo de card com sucesso" />
        <ColorSwatch token="--color-green-green-50"  label="Fundo sutil de alerta positivo" />
        <ColorSwatch token="--color-green-green-100" />
        <ColorSwatch token="--color-green-green-200" />
        <ColorSwatch token="--color-green-green-300" />
        <ColorSwatch token="--color-green-green-400" />
        <ColorSwatch token="--color-green-green-500" label="⭐ Sucesso, despachado" />
        <ColorSwatch token="--color-green-green-600" />
        <ColorSwatch token="--color-green-green-700" />
        <ColorSwatch token="--color-green-green-800" />
      </Section>

      <Section title="Feedback — Erro (Red)">
        <ColorSwatch token="--color-red-red-0"   label="Fundo de card com erro" />
        <ColorSwatch token="--color-red-red-50"  label="Fundo sutil de erro" />
        <ColorSwatch token="--color-red-red-100" />
        <ColorSwatch token="--color-red-red-200" />
        <ColorSwatch token="--color-red-red-300" />
        <ColorSwatch token="--color-red-red-400" />
        <ColorSwatch token="--color-red-red-500" label="⭐ Erro, destrutivo" />
        <ColorSwatch token="--color-red-red-600" />
        <ColorSwatch token="--color-red-red-700" />
      </Section>

      <Section title="Feedback — Alerta (Yellow)">
        <ColorSwatch token="--color-yellow-yellow-0"   label="Fundo de card com alerta" />
        <ColorSwatch token="--color-yellow-yellow-50"  />
        <ColorSwatch token="--color-yellow-yellow-100" />
        <ColorSwatch token="--color-yellow-yellow-200" />
        <ColorSwatch token="--color-yellow-yellow-300" />
        <ColorSwatch token="--color-yellow-yellow-400" />
        <ColorSwatch token="--color-yellow-yellow-500" label="⭐ Alerta, pendente" />
        <ColorSwatch token="--color-yellow-yellow-600" />
      </Section>

      <Section title="Info — Cyan">
        <ColorSwatch token="--color-cyan-cyan-0"   />
        <ColorSwatch token="--color-cyan-cyan-50"  />
        <ColorSwatch token="--color-cyan-cyan-100" />
        <ColorSwatch token="--color-cyan-cyan-200" label="Gradiente (ponta teal)" />
        <ColorSwatch token="--color-cyan-cyan-300" />
        <ColorSwatch token="--color-cyan-cyan-400" />
        <ColorSwatch token="--color-cyan-cyan-500" label="⭐ Info, status neutro" />
        <ColorSwatch token="--color-cyan-cyan-600" />
        <ColorSwatch token="--color-cyan-cyan-700" />
        <ColorSwatch token="--color-cyan-cyan-800" label="Navy teal — bg escuro" />
      </Section>

      <Section title="Acento — Pink">
        <ColorSwatch token="--color-pink-pink-0"   />
        <ColorSwatch token="--color-pink-pink-50"  />
        <ColorSwatch token="--color-pink-pink-100" />
        <ColorSwatch token="--color-pink-pink-200" label="Gradiente navy-pink" />
        <ColorSwatch token="--color-pink-pink-300" />
        <ColorSwatch token="--color-pink-pink-400" label="⭐ Pink médio" />
        <ColorSwatch token="--color-pink-pink-500" />
        <ColorSwatch token="--color-pink-pink-700" />
        <ColorSwatch token="--color-pink-pink-800" />
      </Section>
    </div>
  ),
};

export const SemanticTokens: StoryObj = {
  name: 'Tokens semânticos',
  render: () => (
    <div style={{ padding: '40px 48px', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: 1100 }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#10100f', margin: '0 0 8px' }}>Tokens semânticos de cor</h1>
        <p style={{ fontSize: 15, color: '#615f56', margin: 0, lineHeight: 1.6 }}>
          Tokens de segundo nível que referenciam primitivos e carregam intenção semântica (background, border, text, shape).
          Use estes tokens — nunca os primitivos — ao estilizar componentes.
        </p>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#10100f', margin: '0 0 16px' }}>Background</h2>
      <SemanticTable rows={[
        { token: '--color-background-surface-system',       value: '--color-gray-gray-50',    usage: 'Fundo do sistema (body, app shell)' },
        { token: '--color-background-surface-container',    value: '--color-gray-gray-0',     usage: 'Fundo de card, modal, painel' },
        { token: '--color-background-surface-brand-01',     value: '--color-blue-blue-500',   usage: 'Superfície de marca primária' },
        { token: '--color-background-surface-brand-02',     value: '--color-blue-blue-800',   usage: 'Superfície de marca escura (sidebar navy)' },
        { token: '--color-background-enabled-full-brand',   value: '--color-blue-blue-500',   usage: 'Botão primário (enabled)' },
        { token: '--color-background-selected-neutral-brand', value: '--color-blue-blue-50',  usage: 'Item de lista selecionado' },
        { token: '--color-background-feedback-positive-colored', value: '--color-green-green-500', usage: 'Badge sucesso colorido' },
        { token: '--color-background-feedback-positive-subtle',  value: '--color-green-green-50',  usage: 'Badge sucesso sutil' },
        { token: '--color-background-feedback-negative-colored', value: '--color-red-red-500', usage: 'Badge erro colorido' },
        { token: '--color-background-feedback-negative-subtle',  value: '--color-red-red-50',  usage: 'Badge erro sutil / input erro' },
        { token: '--color-background-feedback-warning-colored', value: '--color-yellow-yellow-500', usage: 'Badge alerta colorido' },
        { token: '--color-background-feedback-warning-subtle',  value: '--color-yellow-yellow-50',  usage: 'Badge alerta sutil' },
        { token: '--color-background-disabled-default',     value: 'effects-disabled-gray',   usage: 'Qualquer elemento desabilitado' },
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#10100f', margin: '0 0 16px' }}>Border</h2>
      <SemanticTable rows={[
        { token: '--color-border-enabled-neutral',  value: '--color-gray-gray-300', usage: 'Input, card, divider (padrão)' },
        { token: '--color-border-hover-neutral',    value: '--color-gray-gray-500', usage: 'Input / card em hover' },
        { token: '--color-border-pressed-neutral',  value: '--color-gray-gray-800', usage: 'Input / card em pressed' },
        { token: '--color-border-selected-default', value: '--color-blue-blue-500', usage: 'Foco (outline de focus ring), item selecionado' },
        { token: '--color-border-enabled-brand',    value: '--color-blue-blue-200', usage: 'Chip selecionado (borda)' },
        { token: '--color-border-disabled-default', value: '--color-gray-gray-100', usage: 'Borda de elemento desabilitado' },
        { token: '--color-border-feedback-positive-subtle', value: '--color-green-green-800', usage: 'Borda de badge/input sucesso' },
        { token: '--color-border-feedback-negative-subtle', value: '--color-red-red-800',   usage: 'Borda de badge/input erro' },
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#10100f', margin: '0 0 16px' }}>Text</h2>
      <SemanticTable rows={[
        { token: '--color-text-container-title',   value: '--color-gray-gray-900', usage: 'Títulos de card, modais' },
        { token: '--color-text-container-label',   value: '--color-gray-gray-900', usage: 'Labels de campo' },
        { token: '--color-text-container-text',    value: '--color-gray-gray-700', usage: 'Texto de conteúdo' },
        { token: '--color-text-container-on-brand', value: '--color-gray-gray-0',  usage: 'Texto sobre fundo de marca' },
        { token: '--color-text-enabled-neutral',   value: '--color-gray-gray-600', usage: 'Texto de item habilitado (lista, menu)' },
        { token: '--color-text-enabled-brand',     value: '--color-blue-blue-600', usage: 'Links, ações de texto' },
        { token: '--color-text-hover-neutral',     value: '--color-gray-gray-900', usage: 'Texto em hover' },
        { token: '--color-text-disabled-default',  value: '--color-gray-gray-200', usage: 'Texto desabilitado' },
        { token: '--color-text-feedback-positive-subtle', value: '--color-green-green-800', usage: 'Texto de badge sucesso sutil' },
        { token: '--color-text-feedback-negative-subtle', value: '--color-red-red-800',     usage: 'Texto de badge erro sutil' },
        { token: '--color-text-feedback-warning-subtle',  value: '--color-yellow-yellow-800', usage: 'Texto de badge alerta sutil' },
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#10100f', margin: '0 0 16px' }}>Mapa de status (badges)</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {[
          { label: 'Pendente',   bg: '--color-background-feedback-warning-subtle',  text: '--color-text-feedback-warning-subtle' },
          { label: 'Aprovado',   bg: '--color-background-feedback-brand-subtle',     text: '--color-text-feedback-brand-subtle' },
          { label: 'Despachado', bg: '--color-background-feedback-positive-subtle',  text: '--color-text-feedback-positive-subtle' },
          { label: 'Cancelado',  bg: '--color-background-feedback-negative-subtle',  text: '--color-text-feedback-negative-subtle' },
          { label: 'Em análise', bg: '--color-background-feedback-informative-subtle', text: '--color-text-feedback-informative-subtle' },
          { label: 'Acento',     bg: '--color-background-feedback-accent-subtle',    text: '--color-text-feedback-accent-subtle' },
          { label: 'Neutro',     bg: '--color-background-feedback-neutral-subtle',   text: '--color-text-feedback-neutral-subtle' },
        ].map(({ label, bg, text }) => (
          <div key={label} style={{ background: `var(${bg})`, color: `var(${text})`, padding: '4px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 600, border: '1px solid rgba(0,0,0,0.08)' }}>
            {label}
          </div>
        ))}
      </div>
    </div>
  ),
};
