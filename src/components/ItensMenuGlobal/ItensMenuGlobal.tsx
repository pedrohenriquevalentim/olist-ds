import React from 'react';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import { Logo } from '../Logo';
import styles from './ItensMenuGlobal.module.css';

export type EstadoMenu = 'fechado' | 'aberto' | 'fixo';

export type ModuloERP =
  | 'Vendas'
  | 'Produtos'
  | 'Suprimentos'
  | 'Servicos'
  | 'Financas'
  | 'Contatos'
  | 'Relatorios';

interface SubItem {
  label: string;
  icon: IconName;
}

interface Secao {
  titulo: string;
  itens: SubItem[];
}

const MODULOS: { key: ModuloERP; label: string; icon: IconName }[] = [
  { key: 'Vendas',     label: 'Vendas',     icon: 'shopping-cart' },
  { key: 'Produtos',   label: 'Produtos',   icon: 'package' },
  { key: 'Suprimentos',label: 'Suprimentos',icon: 'storage' },
  { key: 'Servicos',   label: 'Serviços',   icon: 'services' },
  { key: 'Financas',   label: 'Finanças',   icon: 'wallet' },
  { key: 'Contatos',   label: 'Contatos',   icon: 'profile' },
  { key: 'Relatorios', label: 'Relatórios', icon: 'chart-bar-up' },
];

const LABEL_MODULO: Record<ModuloERP, string> = {
  Vendas: 'Vendas',
  Produtos: 'Produtos',
  Suprimentos: 'Suprimentos',
  Servicos: 'Serviços',
  Financas: 'Finanças',
  Contatos: 'Contatos',
  Relatorios: 'Relatórios',
};

const SECOES: Record<ModuloERP, Secao[]> = {
  Vendas: [
    {
      titulo: 'Vendas',
      itens: [
        { label: 'Propostas comerciais', icon: 'file-text' },
        { label: 'Pedidos de venda',     icon: 'shopping-cart' },
        { label: 'Serviços do parceiro', icon: 'services' },
        { label: 'PDV',                  icon: 'bip' },
        { label: 'Nota fiscal (NF-e)',   icon: 'file-nf' },
        { label: 'Nota consumidor (NFC-e)', icon: 'file-nf' },
      ],
    },
    {
      titulo: 'Operação',
      itens: [
        { label: 'Separação', icon: 'package-check' },
        { label: 'Expedição', icon: 'truck' },
        { label: 'Devolução', icon: 'package-cancel' },
      ],
    },
    {
      titulo: 'Ecommerce',
      itens: [
        { label: 'Google Shopping',          icon: 'shopping-bag' },
        { label: 'Pedidos do ecommerce',     icon: 'sales-oms' },
        { label: 'Perguntas de pré-venda',   icon: 'chat' },
        { label: 'Pós-venda',                icon: 'support' },
        { label: 'Custos do ecommerce',      icon: 'calculator' },
      ],
    },
  ],
  Produtos: [
    {
      titulo: 'Catálogo',
      itens: [
        { label: 'Cadastro de produtos', icon: 'product-catalog' },
        { label: 'Categorias',           icon: 'apps' },
        { label: 'Variações',            icon: 'reorder' },
        { label: 'Kits',                 icon: 'package' },
      ],
    },
    {
      titulo: 'Estoque',
      itens: [
        { label: 'Movimentações',  icon: 'stock' },
        { label: 'Inventário',     icon: 'spreadsheet' },
        { label: 'Transferências', icon: 'reorder' },
      ],
    },
  ],
  Suprimentos: [
    {
      titulo: 'Compras',
      itens: [
        { label: 'Pedidos de compra', icon: 'file-check' },
        { label: 'Cotações',          icon: 'file-text' },
        { label: 'Fornecedores',      icon: 'wholesale' },
      ],
    },
    {
      titulo: 'Recebimento',
      itens: [
        { label: 'Notas de entrada',         icon: 'file-import' },
        { label: 'Conferência de mercadoria',icon: 'package-check' },
      ],
    },
  ],
  Servicos: [
    {
      titulo: 'Contratos',
      itens: [
        { label: 'Ordens de serviço', icon: 'tool' },
        { label: 'Contratos',         icon: 'file-sign' },
        { label: 'Garantias',         icon: 'verified' },
      ],
    },
    {
      titulo: 'Agendamento',
      itens: [
        { label: 'Agenda técnica', icon: 'calendar' },
        { label: 'Técnicos',       icon: 'profile-manage' },
      ],
    },
  ],
  Financas: [
    {
      titulo: 'Financeiro',
      itens: [
        { label: 'Contas a pagar',     icon: 'invoice' },
        { label: 'Contas a receber',   icon: 'file-money' },
        { label: 'Fluxo de caixa',     icon: 'chart-bar-up' },
        { label: 'Conciliação bancária', icon: 'bank' },
      ],
    },
    {
      titulo: 'Fiscal',
      itens: [
        { label: 'Emissão de NF-e',       icon: 'file-nf' },
        { label: 'Apuração de impostos',  icon: 'calculator' },
      ],
    },
  ],
  Contatos: [
    {
      titulo: 'Clientes',
      itens: [
        { label: 'Cadastro de clientes', icon: 'profile' },
        { label: 'Histórico',            icon: 'file-text' },
        { label: 'Segmentação',          icon: 'apps' },
      ],
    },
    {
      titulo: 'Fornecedores',
      itens: [
        { label: 'Cadastro de fornecedores', icon: 'profile-manage' },
        { label: 'Avaliações',               icon: 'star' },
      ],
    },
  ],
  Relatorios: [
    {
      titulo: 'Vendas',
      itens: [
        { label: 'Relatório de vendas',       icon: 'file-graph' },
        { label: 'Performance de vendedores', icon: 'chart-bar-up' },
        { label: 'Ranking de produtos',       icon: 'trophy' },
      ],
    },
    {
      titulo: 'Financeiro',
      itens: [
        { label: 'DRE',             icon: 'spreadsheet' },
        { label: 'Margem de lucro', icon: 'chart-pie' },
      ],
    },
    {
      titulo: 'Estoque',
      itens: [
        { label: 'Giro de estoque',    icon: 'chart-bar-variation' },
        { label: 'Produtos sem giro',  icon: 'alert-triangle' },
      ],
    },
  ],
};

export interface ItensMenuGlobalProps {
  /** Módulo ERP ativo — define a seleção no painel primário e o conteúdo do painel secundário. */
  moduloAtivo?: ModuloERP;
  /** Estado do painel lateral. Quando não fornecido, o componente gerencia internamente. */
  estado?: EstadoMenu;
  /** Callback acionado ao clicar em um módulo de 1º nível. */
  onModuloSelect?: (modulo: ModuloERP) => void;
  /** Callback acionado ao alternar o toggle "Fixar menu". */
  onFixarToggle?: (fixado: boolean) => void;
  /** Callback acionado ao clicar no botão voltar no estado fixo. */
  onVoltar?: () => void;
  className?: string;
}

export const ItensMenuGlobal = ({
  moduloAtivo: moduloAtivoProp = 'Vendas',
  estado: estadoProp,
  onModuloSelect,
  onFixarToggle,
  onVoltar,
  className,
}: ItensMenuGlobalProps) => {
  const [moduloSelecionado, setModuloSelecionado] = React.useState<ModuloERP>(moduloAtivoProp);
  const [fixado, setFixado] = React.useState(false);
  const [aberto, setAberto] = React.useState(true);

  // Sincroniza moduloAtivo prop sem useEffect
  const prevModuloProp = React.useRef(moduloAtivoProp);
  if (prevModuloProp.current !== moduloAtivoProp) {
    prevModuloProp.current = moduloAtivoProp;
    setModuloSelecionado(moduloAtivoProp);
  }

  // Sincroniza estado prop sem useEffect
  const prevEstadoProp = React.useRef(estadoProp);
  if (prevEstadoProp.current !== estadoProp && estadoProp !== undefined) {
    prevEstadoProp.current = estadoProp;
    if (estadoProp === 'fixo')    { setFixado(true);  setAberto(true); }
    if (estadoProp === 'aberto')  { setFixado(false); setAberto(true); }
    if (estadoProp === 'fechado') { setFixado(false); setAberto(false); }
  }

  const estadoEfetivo: EstadoMenu =
    estadoProp ?? (fixado ? 'fixo' : aberto ? 'aberto' : 'fechado');

  const handleModuloClick = (modulo: ModuloERP) => {
    setModuloSelecionado(modulo);
    if (!fixado) setAberto(true);
    onModuloSelect?.(modulo);
  };

  const handleFixarToggle = () => {
    const novoFixado = !fixado;
    setFixado(novoFixado);
    if (novoFixado) setAberto(true);
    onFixarToggle?.(novoFixado);
  };

  const handleVoltar = () => {
    setFixado(false);
    setAberto(true);
    onVoltar?.();
  };

  const secoes = SECOES[moduloSelecionado];
  const moduloLabel = LABEL_MODULO[moduloSelecionado];
  const mostrarPrimario = estadoEfetivo !== 'fixo';
  const mostrarSecundario = estadoEfetivo === 'aberto' || estadoEfetivo === 'fixo';

  return (
    <div
      className={[
        styles.container,
        estadoEfetivo !== 'fixo' ? styles.containerFlyout : '',
        className,
      ].filter(Boolean).join(' ')}
      data-testid="itens-menu-global"
    >
      {/*
        singleScroll é o único ponto de overflow/scroll do componente inteiro.
        panelsRow usa min-height: 100% para garantir que os painéis sempre
        preencham a altura do container, e os dois rolam juntos como um módulo único.
      */}
      <div className={styles.singleScroll}>
        <div className={styles.panelsRow}>

          {/* ─── Painel Primário ───────────────────────────────────────────── */}
          {mostrarPrimario && (
            <nav
              className={[
                styles.painelPrimario,
                estadoEfetivo === 'aberto' ? styles.painelPrimarioAberto : '',
              ].filter(Boolean).join(' ')}
              aria-label="Módulos do ERP"
            >
              <div className={styles.logoArea}>
                {/*
                  Logo a 128px de largura (Figma: instance 128×80.7px).
                  size="default" inclui o toggle + círculo laranja (watermark).
                  overflow:hidden na logoArea clipa os ~0.35px que extravasam.
                */}
                <Logo
                  size="default"
                  style={{
                    width: 'var(--shape-spacing-128px)',
                    minWidth: 'var(--shape-spacing-128px)',
                    maxWidth: 'var(--shape-spacing-128px)',
                  }}
                />
              </div>

              <div className={styles.sisErpHeader} aria-hidden="true">
                Sistema ERP
              </div>

              <ul
                className={styles.itemList}
                role="menu"
                aria-label="Módulos"
              >
                {MODULOS.map(({ key, label, icon }) => {
                  const selecionado = moduloSelecionado === key;
                  return (
                    <li key={key} role="none">
                      <button
                        type="button"
                        role="menuitem"
                        aria-current={selecionado ? 'page' : undefined}
                        className={[
                          styles.menuItem,
                          selecionado ? styles.menuItemSelecionado : '',
                        ].filter(Boolean).join(' ')}
                        onClick={() => handleModuloClick(key)}
                      >
                        <Icon name={icon} size={16} color="currentColor" aria-hidden />
                        <span className={styles.menuItemLabel}>{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <ul
                className={styles.itemListRodape}
                role="menu"
                aria-label="Configurações do sistema"
              >
                <li role="none">
                  <button type="button" role="menuitem" className={styles.menuItem}>
                    <Icon name="settings" size={16} color="currentColor" aria-hidden />
                    <span className={styles.menuItemLabel}>Configurações</span>
                  </button>
                </li>
              </ul>

              <div className={styles.actionArea}>
                <div className={styles.fixarMenuRow}>
                  <span className={styles.fixarMenuLabel}>Fixar menu</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={fixado}
                    aria-label="Fixar menu"
                    className={[styles.toggle, fixado ? styles.toggleLigado : ''].filter(Boolean).join(' ')}
                    onClick={handleFixarToggle}
                  >
                    <span className={styles.toggleDot} />
                  </button>
                </div>
              </div>
            </nav>
          )}

          {/* ─── Painel Secundário ─────────────────────────────────────────── */}
          {mostrarSecundario && (
            <nav
              className={styles.painelSecundario}
              aria-label={`Submenu ${moduloLabel}`}
            >
              <div className={styles.secundarioContent}>
                {secoes.map((secao, idx) => (
                  <React.Fragment key={secao.titulo}>
                    <div
                      className={[
                        styles.sectionDivider,
                        idx === 0 && estadoEfetivo === 'fixo' ? styles.sectionDividerComVoltar : '',
                      ].filter(Boolean).join(' ')}
                    >
                      {idx === 0 && estadoEfetivo === 'fixo' && (
                        <button
                          type="button"
                          className={styles.voltarBtn}
                          aria-label="Voltar ao menu principal"
                          onClick={handleVoltar}
                        >
                          <Icon name="arrow-left" size={16} color="currentColor" aria-hidden />
                        </button>
                      )}
                      <span className={styles.sectionDividerLabel}>{secao.titulo}</span>
                    </div>

                    <ul
                      className={styles.itemListSecundario}
                      role="menu"
                      aria-label={secao.titulo}
                    >
                      {secao.itens.map((item) => (
                        <li key={item.label} role="none">
                          <button
                            type="button"
                            role="menuitem"
                            className={styles.menuItem}
                          >
                            <Icon name={item.icon} size={16} color="currentColor" aria-hidden />
                            <span className={styles.menuItemLabel}>{item.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </div>
            </nav>
          )}

        </div>
      </div>
    </div>
  );
};
