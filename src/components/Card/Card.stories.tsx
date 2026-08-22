import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: { type: 'select' },
      options: ['simple', 'slot'],
      description: 'Define a variante de conteúdo do card.',
      table: { defaultValue: { summary: 'simple' } },
    },
    titleText: {
      control: 'text',
      description: 'Texto do título principal (H3).',
    },
    subtitle: {
      control: 'boolean',
      description: 'Exibe ou oculta o subtítulo.',
      table: { defaultValue: { summary: 'true' } },
    },
    subtitleText: {
      control: 'text',
      description: 'Texto do subtítulo (H5).',
    },
    paragraphText: {
      control: 'text',
      description: 'Texto do parágrafo descritivo.',
    },
    caption: {
      control: 'boolean',
      description: 'Exibe ou oculta a legenda.',
      table: { defaultValue: { summary: 'false' } },
    },
    captionText: {
      control: 'text',
      description: 'Texto da legenda (caption).',
    },
    actions: {
      control: 'boolean',
      description: 'Exibe ou oculta a área de ações com botões.',
      table: { defaultValue: { summary: 'false' } },
    },
    secondaryButton: {
      control: 'boolean',
      description: 'Exibe o botão secundário na área de ações.',
      table: { defaultValue: { summary: 'false' } },
    },
    primaryLabel: {
      control: 'text',
      description: 'Rótulo do botão de ação primária.',
    },
    secondaryLabel: {
      control: 'text',
      description: 'Rótulo do botão de ação secundária.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const PLACEHOLDER_MEDIA = (
  <img
    src="https://placehold.co/480x200/e8e5de/8f8d85?text=Media"
    alt=""
    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
  />
);

export const Playground: Story = {
  args: {
    content: 'simple',
    titleText: 'Card Title',
    subtitle: true,
    subtitleText: 'Subtitle text',
    paragraphText:
      'Este é um parágrafo de texto que descreve o conteúdo do card. Ele usa o estilo de texto parágrafo e o token de cor de texto de contêiner adequado.',
    caption: true,
    captionText:
      'Esta é uma legenda de texto que descreve o conteúdo do card com mais detalhes complementares.',
    actions: true,
    secondaryButton: true,
    primaryLabel: 'Ação principal',
    secondaryLabel: 'Ação secundária',
    media: PLACEHOLDER_MEDIA,
  },
};

export const SemMidia: Story = {
  name: 'Sem mídia',
  args: {
    titleText: 'Card sem mídia',
    subtitleText: 'Subtítulo do card',
    paragraphText: 'Conteúdo do card sem a área de imagem no topo.',
    actions: true,
    primaryLabel: 'Confirmar',
  },
};

export const ComMidiaEAcoes: Story = {
  name: 'Com mídia e ações',
  args: {
    titleText: 'Card com mídia',
    subtitleText: 'Subtítulo do card',
    paragraphText:
      'Conteúdo do card com imagem no topo para destacar o item visualmente.',
    media: PLACEHOLDER_MEDIA,
    actions: true,
    secondaryButton: true,
    primaryLabel: 'Ver detalhes',
    secondaryLabel: 'Ignorar',
  },
};

export const VarianteSlot: Story = {
  name: 'Variante: slot',
  args: {
    content: 'slot',
    media: PLACEHOLDER_MEDIA,
  },
  render: (args) => (
    <Card {...args}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '2rem',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '0.875rem',
          color: '#8f8d85',
        }}
      >
        Conteúdo customizado via children
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Variant slot: substitui toda a área de conteúdo por children livre. Ideal para cards com layout totalmente personalizado.',
      },
    },
  },
};

export const GradeDeCards: Story = {
  name: 'Grade de cards',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 30rem)',
        gap: '1.5rem',
        alignItems: 'start',
      }}
    >
      <Card
        titleText="Plano Starter"
        subtitleText="Ideal para começar"
        paragraphText="Acesse os recursos essenciais para gerenciar sua operação com eficiência."
        media={PLACEHOLDER_MEDIA}
        actions
        primaryLabel="Assinar plano"
      />
      <Card
        titleText="Plano Pro"
        subtitleText="Para quem escala"
        paragraphText="Recursos avançados, integrações e suporte dedicado para sua empresa crescer."
        media={PLACEHOLDER_MEDIA}
        caption
        captionText="Mais popular entre lojistas com mais de 500 pedidos/mês."
        actions
        secondaryButton
        primaryLabel="Assinar plano"
        secondaryLabel="Comparar planos"
      />
    </div>
  ),
  parameters: { layout: 'padded' },
};
