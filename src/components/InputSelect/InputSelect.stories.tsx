import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputSelect } from './InputSelect';
import type { InputSelectOption } from './InputSelect';

/* ============================
   Ícones de exemplo para Storybook
   ============================ */

const TooltipIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 7v4M8 5.5v.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 11V8M8 5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const iconOptions: Record<string, React.ReactNode> = {
  Nenhum: undefined,
  'Ícone de informação (i)': TooltipIcon,
  'Ícone de aviso (!)': InfoIcon,
};

/* ============================
   Dados de exemplo
   ============================ */

const mockEstados: InputSelectOption[] = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'ba', label: 'Bahia' },
  { value: 'pr', label: 'Paraná' },
  { value: 'sc', label: 'Santa Catarina' },
  { value: 'go', label: 'Goiás' },
  { value: 'pe', label: 'Pernambuco' },
  { value: 'ce', label: 'Ceará' },
];

const mockCategorias: InputSelectOption[] = [
  { value: 'eletronicos', label: 'Eletrônicos' },
  { value: 'moda', label: 'Moda e Acessórios' },
  { value: 'casa', label: 'Casa e Cozinha' },
  { value: 'esportes', label: 'Esportes e Lazer', disabled: true },
  { value: 'livros', label: 'Livros e Papelaria' },
  { value: 'brinquedos', label: 'Brinquedos', disabled: true },
  { value: 'beleza', label: 'Beleza e Cuidados Pessoais' },
  { value: 'automotivo', label: 'Automotivo' },
  { value: 'informatica', label: 'Informática' },
];

/* ============================
   Wrappers stateful
   ============================ */

const SingleWrapper = (args: React.ComponentProps<typeof InputSelect>) => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div style={{ minHeight: '18rem' }}>
      <InputSelect
        {...args}
        value={value}
        onChange={(v) => {
          setValue(v);
          (args as { onChange?: (v: string) => void }).onChange?.(v);
        }}
      />
    </div>
  );
};

const MultiWrapper = (args: React.ComponentProps<typeof InputSelect>) => {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <div style={{ minHeight: '18rem' }}>
      <InputSelect
        {...(args as object)}
        value={value}
        onChange={(v: string[]) => {
          setValue(v);
          (args as { onChange?: (v: string[]) => void }).onChange?.(v);
        }}
      />
    </div>
  );
};

/* ============================
   Meta
   ============================ */

const meta: Meta<typeof InputSelect> = {
  title: 'Components/InputSelect',
  component: InputSelect,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo de seleção do Olist Design System. Suporta seleção simples, múltipla, autocomplete e multi autocomplete. Implementa padrão ARIA combobox/listbox com navegação completa por teclado (ArrowUp, ArrowDown, Enter, Escape, Space).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectType: {
      control: 'select',
      options: ['single', 'multi', 'autocomplete', 'multi-autocomplete'],
      description: 'Modo de seleção do componente.',
      table: { defaultValue: { summary: 'single' } },
    },
    label: {
      control: 'text',
      description: 'Rótulo exibido acima do campo.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando nenhuma opção está selecionada.',
    },
    supportText: {
      control: 'text',
      description: 'Texto auxiliar exibido abaixo do campo.',
    },
    hasSupport: {
      control: 'boolean',
      description: 'Controla a visibilidade do texto de suporte.',
      table: { defaultValue: { summary: 'true' } },
    },
    hasTooltip: {
      control: 'boolean',
      description: 'Exibe ícone de tooltip ao lado do label.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo impedindo qualquer interação.',
      table: { defaultValue: { summary: 'false' } },
    },
    tooltipIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone de tooltip. Deve ser um SVG com currentColor.',
    },
    chevronIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone de seta de abrir/fechar. Usa SVG interno por padrão.',
    },
    checkIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone de seleção exibido nos itens escolhidos.',
    },
    removeIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: 'Ícone de remoção nos chips do multi select.',
    },
    options: {
      control: false,
      description: 'Array de opções disponíveis: `{ value, label, disabled? }`.',
    },
    value: {
      control: false,
      description: 'Valor controlado. `string` para single/autocomplete, `string[]` para multi.',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback disparado ao selecionar ou remover uma opção.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

/* ============================
   Stories
   ============================ */

export const Padrão: Story = {
  name: 'Padrão (single select)',
  render: (args) => <SingleWrapper {...args} />,
  args: {
    label: 'Estado',
    placeholder: 'Selecione um estado',
    supportText: 'Selecione o estado de origem do pedido',
    hasSupport: true,
    options: mockEstados,
    selectType: 'single',
  },
};

export const SeleçãoMúltipla: Story = {
  name: 'Multi select',
  render: (args) => <MultiWrapper {...args} />,
  args: {
    label: 'Categorias',
    placeholder: 'Selecione as categorias',
    supportText: 'Você pode selecionar mais de uma categoria',
    hasSupport: true,
    selectType: 'multi',
    options: mockCategorias,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Permite selecionar múltiplas opções. Os itens selecionados aparecem como chips dentro do trigger. Clique no "×" do chip ou na opção novamente para remover.',
      },
    },
  },
};

export const Autocomplete: Story = {
  name: 'Autocomplete (busca simples)',
  render: (args) => <SingleWrapper {...args} />,
  args: {
    label: 'Estado',
    placeholder: 'Busque e selecione',
    hasSupport: true,
    supportText: 'Digite para filtrar as opções disponíveis',
    selectType: 'autocomplete',
    options: mockEstados,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Abre um campo de busca ao abrir o dropdown. Filtra as opções em tempo real conforme o usuário digita.',
      },
    },
  },
};

export const MultiAutocomplete: Story = {
  name: 'Multi autocomplete',
  render: (args) => <MultiWrapper {...args} />,
  args: {
    label: 'Estados de entrega',
    placeholder: 'Busque e selecione estados',
    hasSupport: true,
    supportText: 'Digite para filtrar e selecione múltiplas opções',
    selectType: 'multi-autocomplete',
    options: mockEstados,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combina busca filtrada com seleção múltipla. Chips representam cada item selecionado.',
      },
    },
  },
};

export const ComTooltip: Story = {
  name: 'Com tooltip no label',
  render: (args) => <SingleWrapper {...args} />,
  args: {
    label: 'Estado de origem',
    placeholder: 'Selecione um estado',
    hasTooltip: true,
    tooltipIcon: TooltipIcon,
    hasSupport: true,
    supportText: 'O estado de onde o produto é despachado',
    options: mockEstados,
    selectType: 'single',
  },
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    label: 'Estado',
    placeholder: 'Campo indisponível',
    supportText: 'Este campo não está disponível no momento',
    hasSupport: true,
    disabled: true,
    options: mockEstados,
    value: 'sp',
    selectType: 'single',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Estado desabilitado. Impede qualquer interação e aplica visual apagado. Pode exibir um valor pré-selecionado.',
      },
    },
  },
};

export const SemLabel: Story = {
  name: 'Sem label (aria-label)',
  render: (args) => <SingleWrapper {...args} />,
  args: {
    placeholder: 'Selecione um estado',
    'aria-label': 'Estado de origem do pedido',
    options: mockEstados,
    selectType: 'single',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Quando sem label visual, use `aria-label` para garantir acessibilidade ao leitor de tela.',
      },
    },
  },
};

export const ComOpçõesDesabilitadas: Story = {
  name: 'Com opções desabilitadas',
  render: (args) => <SingleWrapper {...args} />,
  args: {
    label: 'Categoria',
    placeholder: 'Selecione uma categoria',
    hasSupport: true,
    supportText: 'Algumas categorias estão temporariamente indisponíveis',
    options: mockCategorias,
    selectType: 'single',
  },
};

export const MultiComValoresSelecionados: Story = {
  name: 'Multi select com valores pré-selecionados',
  render: () => {
    const [value, setValue] = React.useState<string[]>(['sp', 'rj', 'pr']);
    return (
      <div style={{ minHeight: '18rem' }}>
        <InputSelect
          selectType="multi"
          label="Estados selecionados"
          options={mockEstados}
          value={value}
          onChange={setValue}
          hasSupport
          supportText="Clique no × para remover um estado"
        />
      </div>
    );
  },
};

export const TodasVariantes: Story = {
  name: 'Todas as variantes',
  render: () => {
    const [single, setSingle] = React.useState('');
    const [multi, setMulti] = React.useState<string[]>([]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minHeight: '36rem' }}>
        <SingleWrapper
          label="Single select"
          placeholder="Selecionar"
          options={mockEstados}
          selectType="single"
          hasSupport
          supportText="Seleção de item único"
          value={single}
          onChange={setSingle}
        />
        <MultiWrapper
          label="Multi select"
          placeholder="Selecionar múltiplos"
          selectType="multi"
          options={mockCategorias}
          hasSupport
          supportText="Seleção múltipla com chips"
          value={multi}
          onChange={setMulti}
        />
        <SingleWrapper
          label="Autocomplete"
          placeholder="Buscar e selecionar"
          selectType="autocomplete"
          options={mockEstados}
          hasSupport
          supportText="Com busca integrada"
        />
        <InputSelect
          label="Desabilitado"
          placeholder="Campo desabilitado"
          options={mockEstados}
          value="sp"
          disabled
          hasSupport
          supportText="Indisponível no momento"
          selectType="single"
        />
      </div>
    );
  },
  parameters: { layout: 'padded' },
};
