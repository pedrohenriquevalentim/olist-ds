import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import styles from './InputSelect.module.css';
import { Icon } from '../Icon';

// ── Tipos públicos ─────────────────────────────────────────────────────────

export interface InputSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface InputSelectBase {
  /** Rótulo exibido acima do campo */
  label?: string;
  /** Texto auxiliar exibido abaixo do campo */
  supportText?: string;
  /** Controla a visibilidade do texto de suporte */
  hasSupport?: boolean;
  /** Exibe ícone de tooltip ao lado do label */
  hasTooltip?: boolean;
  /** Ícone de tooltip — SVG com currentColor */
  tooltipIcon?: React.ReactNode;
  /** Ícone de chevron (seta) — usa SVG interno por padrão */
  chevronIcon?: React.ReactNode;
  /** Ícone de checkmark nos itens selecionados */
  checkIcon?: React.ReactNode;
  /** Ícone de remoção dos chips (multi select) */
  removeIcon?: React.ReactNode;
  /** Texto exibido quando nenhum item está selecionado */
  placeholder?: string;
  /** Lista de opções */
  options?: InputSelectOption[];
  /** Desabilita o campo */
  disabled?: boolean;
  /** ID do elemento — gerado automaticamente se omitido */
  id?: string;
  /** Classe CSS adicional para o wrapper */
  className?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export interface InputSelectSingleProps extends InputSelectBase {
  selectType?: 'single' | 'autocomplete';
  value?: string;
  onChange?: (value: string) => void;
}

export interface InputSelectMultiProps extends InputSelectBase {
  selectType: 'multi' | 'multi-autocomplete';
  value?: string[];
  onChange?: (value: string[]) => void;
}

export type InputSelectProps = InputSelectSingleProps | InputSelectMultiProps;

// ── Helpers de tipo ────────────────────────────────────────────────────────

const isMultiType = (p: InputSelectProps): p is InputSelectMultiProps =>
  p.selectType === 'multi' || p.selectType === 'multi-autocomplete';

const isAutocompleteType = (p: InputSelectProps): boolean =>
  p.selectType === 'autocomplete' || p.selectType === 'multi-autocomplete';

// ── Sub-componente: RemovableChip ──────────────────────────────────────────
// Chip removível exibido dentro do trigger (multi select). Não confundir com
// o componente público Chip (selecionável) — semânticas diferentes.

interface RemovableChipProps {
  label: string;
  onRemove: () => void;
  removeIcon?: React.ReactNode;
  disabled?: boolean;
}

const RemovableChip = ({
  label,
  onRemove,
  removeIcon,
  disabled,
}: RemovableChipProps) => (
  <span className={styles.chip}>
    <span className={styles.chipLabel}>{label}</span>
    {!disabled && (
      // Botão real: legal dentro do trigger (que é um div role="combobox").
      // Fora do tab order para manter o combobox como tab stop único —
      // teclado remove via Backspace no trigger; leitores de tela ainda
      // alcançam e ativam o botão pelo cursor virtual.
      <button
        type="button"
        className={styles.chipRemove}
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        aria-label={`Remover ${label}`}
        tabIndex={-1}
      >
        {removeIcon ?? <Icon name="close" size={16} color="currentColor" />}
      </button>
    )}
  </span>
);

// ── Sub-componente: SelectTrigger ──────────────────────────────────────────
// Responsável apenas pela apresentação do campo (combobox): chips ou rótulo
// selecionado, placeholder e chevron. Estado e handlers vêm do pai.

interface SelectTriggerProps {
  triggerRef: React.RefObject<HTMLDivElement | null>;
  inputId: string;
  listboxId: string;
  isOpen: boolean;
  disabled: boolean;
  isMulti: boolean;
  activeOptionId?: string;
  className: string;
  labelId?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  selectedValues: string[];
  options: InputSelectOption[];
  triggerLabel: string | null;
  placeholder: string;
  chevronIcon?: React.ReactNode;
  removeIcon?: React.ReactNode;
  onToggle: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
  onRemoveChip: (value: string) => void;
}

const SelectTrigger = ({
  triggerRef,
  inputId,
  listboxId,
  isOpen,
  disabled,
  isMulti,
  activeOptionId,
  className,
  labelId,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  selectedValues,
  options,
  triggerLabel,
  placeholder,
  chevronIcon,
  removeIcon,
  onToggle,
  onKeyDown,
  onRemoveChip,
}: SelectTriggerProps) => (
  // Div em vez de <button>: o padrão W3C de combobox usa um elemento
  // genérico focável, e os chips removíveis precisam de botões reais
  // internos — interativos aninhados em <button> são HTML inválido.
  <div
    ref={triggerRef}
    id={inputId}
    role="combobox"
    tabIndex={disabled ? -1 : 0}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
    aria-controls={isOpen ? listboxId : undefined}
    aria-activedescendant={activeOptionId}
    aria-labelledby={labelId ?? ariaLabelledBy}
    aria-label={!labelId ? ariaLabel : undefined}
    aria-describedby={ariaDescribedBy}
    aria-disabled={disabled}
    className={className}
    onClick={onToggle}
    onKeyDown={onKeyDown}
  >
    <span className={styles.triggerContent}>
      {isMulti && selectedValues.length > 0 ? (
        <span className={styles.chipsContainer}>
          {selectedValues.map((v) => {
            const opt = options.find((o) => o.value === v);
            return opt ? (
              <RemovableChip
                key={v}
                label={opt.label}
                onRemove={() => onRemoveChip(v)}
                removeIcon={removeIcon}
                disabled={disabled}
              />
            ) : null;
          })}
        </span>
      ) : (
        <span
          className={
            triggerLabel ? styles.selectedText : styles.placeholderText
          }
        >
          {triggerLabel ?? placeholder}
        </span>
      )}
    </span>

    <span className={styles.chevron} aria-hidden="true">
      {chevronIcon ?? (
        <Icon
          name={isOpen ? 'chevron-top' : 'chevron-down'}
          size={16}
          color="currentColor"
        />
      )}
    </span>
  </div>
);

// ── Sub-componente: SelectListbox ──────────────────────────────────────────
// Responsável pelo popover: campo de busca (autocomplete) e lista de opções.

interface SelectListboxProps {
  listboxId: string;
  isMulti: boolean;
  isAutocomplete: boolean;
  listboxLabel: string;
  activeOptionId?: string;
  searchRef: React.RefObject<HTMLInputElement | null>;
  searchQuery: string;
  filteredOptions: InputSelectOption[];
  selectedValues: string[];
  focusedIndex: number;
  checkIcon?: React.ReactNode;
  onSearchChange: (query: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLUListElement | HTMLInputElement>) => void;
  onSelect: (option: InputSelectOption) => void;
  onFocusIndex: (index: number) => void;
}

const SelectListbox = ({
  listboxId,
  isMulti,
  isAutocomplete,
  listboxLabel,
  activeOptionId,
  searchRef,
  searchQuery,
  filteredOptions,
  selectedValues,
  focusedIndex,
  checkIcon,
  onSearchChange,
  onKeyDown,
  onSelect,
  onFocusIndex,
}: SelectListboxProps) => (
  <div className={styles.listboxWrapper}>
    {/* Campo de busca (autocomplete) */}
    {isAutocomplete && (
      <div className={styles.searchWrapper}>
        <input
          ref={searchRef}
          type="text"
          className={styles.searchInput}
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
          onKeyDown={onKeyDown}
          aria-label="Buscar opções"
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-activedescendant={activeOptionId}
        />
      </div>
    )}

    {/* Lista de opções */}
    <ul
      id={listboxId}
      role="listbox"
      aria-multiselectable={isMulti}
      aria-label={listboxLabel}
      className={styles.listbox}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      {filteredOptions.length === 0 && (
        <li className={styles.emptyMessage} role="presentation">
          Nenhuma opção encontrada
        </li>
      )}
      {filteredOptions.map((option, index) => {
        const isSelected = selectedValues.includes(option.value);
        const isFocusedItem = focusedIndex === index;

        return (
          <li
            key={option.value}
            id={`${listboxId}-option-${index}`}
            role="option"
            aria-selected={isSelected}
            aria-disabled={option.disabled}
            className={[
              styles.listItem,
              isSelected ? styles.listItemSelected : '',
              isFocusedItem ? styles.listItemFocused : '',
              option.disabled ? styles.listItemDisabled : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onSelect(option)}
            onMouseEnter={() => onFocusIndex(index)}
          >
            <span className={styles.listItemLabel}>{option.label}</span>
            {isMulti ? (
              // Indicador puramente visual: um <input> real aqui seria
              // focável dentro de aria-hidden (viola WCAG 4.1.2) — a
              // semântica de seleção já vem do role="option" + aria-selected.
              <span
                className={[
                  styles.checkboxVisual,
                  isSelected ? styles.checkboxVisualChecked : '',
                  option.disabled ? styles.checkboxVisualDisabled : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-hidden="true"
              >
                {isSelected && (
                  <Icon name="check" size={12} color="currentColor" />
                )}
              </span>
            ) : (
              isSelected && (
                <span className={styles.checkIcon} aria-hidden="true">
                  {checkIcon ?? (
                    <Icon name="check" size={16} color="currentColor" />
                  )}
                </span>
              )
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

// ── Componente principal ───────────────────────────────────────────────────
// Detém estado, navegação por teclado e ARIA; a apresentação fica nos
// sub-componentes SelectTrigger e SelectListbox.

export const InputSelect = (props: InputSelectProps) => {
  const {
    label,
    supportText,
    hasSupport = true,
    hasTooltip = false,
    tooltipIcon,
    chevronIcon,
    checkIcon,
    removeIcon,
    placeholder = 'Selecionar',
    options = [],
    disabled = false,
    id: externalId,
    className,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
  } = props;

  // Narrowing do union capturado uma única vez — evita casts espalhados
  const multiProps = isMultiType(props) ? props : undefined;
  const singleProps = isMultiType(props) ? undefined : props;
  const isMulti = multiProps !== undefined;
  const isAutocomplete = isAutocompleteType(props);

  const autoId = useId();
  const inputId = externalId ?? autoId;
  const labelId = `${inputId}-label`;
  const listboxId = `${inputId}-listbox`;
  const supportId = `${inputId}-support`;

  // ── Estado interno ───────────────────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // ── Valores selecionados ─────────────────────────────────────────────────
  const selectedValues: string[] = multiProps
    ? multiProps.value ?? []
    : singleProps?.value
      ? [singleProps.value]
      : [];

  // ── Opções filtradas ─────────────────────────────────────────────────────
  const filteredOptions =
    isAutocomplete && searchQuery
      ? options.filter((o) =>
          o.label.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : options;

  // ── Estado visual ────────────────────────────────────────────────────────
  const isFilled = selectedValues.length > 0;

  // ── Abrir / fechar ───────────────────────────────────────────────────────
  const openList = useCallback(() => {
    if (disabled) return;
    setIsOpen(true);
    setFocusedIndex(-1);
    if (isAutocomplete) {
      setTimeout(() => searchRef.current?.focus(), 0);
    }
  }, [disabled, isAutocomplete]);

  const closeList = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
    setSearchQuery('');
  }, []);

  const toggleList = useCallback(() => {
    if (disabled) return;
    if (isOpen) closeList();
    else openList();
  }, [disabled, isOpen, openList, closeList]);

  // ── Click-outside ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        closeList();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeList]);

  // ── Selecionar item ──────────────────────────────────────────────────────
  const handleSelect = useCallback(
    (option: InputSelectOption) => {
      if (option.disabled) return;

      if (multiProps) {
        const current = multiProps.value ?? [];
        const next = current.includes(option.value)
          ? current.filter((v) => v !== option.value)
          : [...current, option.value];
        multiProps.onChange?.(next);
      } else if (singleProps) {
        singleProps.onChange?.(option.value);
        closeList();
        triggerRef.current?.focus();
      }
    },
    [multiProps, singleProps, closeList],
  );

  const handleRemoveChip = useCallback(
    (value: string) => {
      if (!multiProps) return;
      const current = multiProps.value ?? [];
      multiProps.onChange?.(current.filter((v) => v !== value));
    },
    [multiProps],
  );

  // ── Teclado no trigger ───────────────────────────────────────────────────
  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleSelect(filteredOptions[focusedIndex]);
        } else {
          toggleList();
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) openList();
        setFocusedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) openList();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'Home':
        if (!isOpen) break;
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        if (!isOpen) break;
        e.preventDefault();
        setFocusedIndex(filteredOptions.length - 1);
        break;
      case 'Backspace':
        // Remoção por teclado do último chip (os botões de remover ficam
        // fora do tab order de propósito — ver RemovableChip acima).
        if (isMulti && selectedValues.length > 0) {
          e.preventDefault();
          handleRemoveChip(selectedValues[selectedValues.length - 1]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        closeList();
        break;
    }
  };

  // ── Teclado na lista / busca ─────────────────────────────────────────────
  const handleListKeyDown = (
    e: KeyboardEvent<HTMLUListElement | HTMLInputElement>,
  ) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) =>
          Math.min(prev + 1, filteredOptions.length - 1),
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleSelect(filteredOptions[focusedIndex]);
        }
        break;
      case 'Home':
      case 'End':
        // No input de busca, Home/End movem o cursor do texto (padrão W3C
        // de combobox editável) — só navegam a lista quando vêm do <ul>.
        if (e.currentTarget === searchRef.current) break;
        e.preventDefault();
        setFocusedIndex(e.key === 'Home' ? 0 : filteredOptions.length - 1);
        break;
      case 'Escape':
        e.preventDefault();
        closeList();
        triggerRef.current?.focus();
        break;
    }
  };

  // ── Item ativo (aria-activedescendant) ───────────────────────────────────
  // IDs por índice: option.value pode conter espaços, que são inválidos
  // em IDREFs como aria-activedescendant.
  const activeOptionId =
    isOpen && focusedIndex >= 0 && filteredOptions[focusedIndex]
      ? `${listboxId}-option-${focusedIndex}`
      : undefined;

  // Mantém o item focado visível em listas com scroll
  useEffect(() => {
    if (!activeOptionId) return;
    const el = document.getElementById(activeOptionId);
    // jsdom (ambiente de teste) não implementa scrollIntoView
    if (typeof el?.scrollIntoView === 'function') {
      el.scrollIntoView({ block: 'nearest' });
    }
  }, [activeOptionId]);

  // ── Rótulo do trigger (single) ───────────────────────────────────────────
  const triggerLabel = singleProps
    ? options.find((o) => o.value === singleProps.value)?.label ?? null
    : null;

  // ── Classes CSS do trigger ───────────────────────────────────────────────
  const inputBaseClass = [
    styles.inputBase,
    disabled ? styles.stateDisabled : '',
    isOpen ? styles.stateFocused : isFilled ? styles.stateFilled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={wrapperRef}
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
    >
      {/* Label */}
      {label && (
        <div className={styles.labelRow}>
          <label
            id={labelId}
            htmlFor={inputId}
            className={[
              styles.labelText,
              disabled ? styles.labelDisabled : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
          </label>
          {hasTooltip && (
            <span
              className={styles.tooltipIcon}
              role="img"
              aria-label="Informação adicional"
            >
              {tooltipIcon ?? (
                <Icon name="help-circle" size={16} color="currentColor" />
              )}
            </span>
          )}
        </div>
      )}

      {/* Trigger + Listbox — contexto de posicionamento isolado */}
      <div className={styles.triggerContainer}>
        <SelectTrigger
          triggerRef={triggerRef}
          inputId={inputId}
          listboxId={listboxId}
          isOpen={isOpen}
          disabled={disabled}
          isMulti={isMulti}
          activeOptionId={activeOptionId}
          className={inputBaseClass}
          labelId={label ? labelId : undefined}
          ariaLabel={ariaLabel}
          ariaLabelledBy={ariaLabelledBy}
          ariaDescribedBy={
            hasSupport && supportText ? supportId : ariaDescribedBy
          }
          selectedValues={selectedValues}
          options={options}
          triggerLabel={triggerLabel}
          placeholder={placeholder}
          chevronIcon={chevronIcon}
          removeIcon={removeIcon}
          onToggle={toggleList}
          onKeyDown={handleTriggerKeyDown}
          onRemoveChip={handleRemoveChip}
        />

        {isOpen && (
          <SelectListbox
            listboxId={listboxId}
            isMulti={isMulti}
            isAutocomplete={isAutocomplete}
            listboxLabel={label ?? ariaLabel ?? 'Opções disponíveis'}
            activeOptionId={activeOptionId}
            searchRef={searchRef}
            searchQuery={searchQuery}
            filteredOptions={filteredOptions}
            selectedValues={selectedValues}
            focusedIndex={focusedIndex}
            checkIcon={checkIcon}
            onSearchChange={(query) => {
              setSearchQuery(query);
              setFocusedIndex(-1);
            }}
            onKeyDown={handleListKeyDown}
            onSelect={handleSelect}
            onFocusIndex={setFocusedIndex}
          />
        )}
      </div>

      {/* Texto de suporte */}
      {hasSupport && supportText && (
        <span
          id={supportId}
          className={[
            styles.supportText,
            disabled ? styles.supportDisabled : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {supportText}
        </span>
      )}
    </div>
  );
};
