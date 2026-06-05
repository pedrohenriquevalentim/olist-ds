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
import { Checkbox } from '../Checkbox';

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

// ── Sub-componente: Chip ───────────────────────────────────────────────────

interface ChipProps {
  label: string;
  onRemove: () => void;
  removeIcon?: React.ReactNode;
  disabled?: boolean;
}

const Chip = ({ label, onRemove, removeIcon, disabled }: ChipProps) => {
  const defaultRemoveIcon = (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <span className={styles.chip}>
      <span className={styles.chipLabel}>{label}</span>
      {!disabled && (
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
          {removeIcon ?? defaultRemoveIcon}
        </button>
      )}
    </span>
  );
};

// ── Componente principal ───────────────────────────────────────────────────

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

  const autoId = useId();
  const inputId = externalId ?? autoId;
  const labelId = `${inputId}-label`;
  const listboxId = `${inputId}-listbox`;
  const supportId = `${inputId}-support`;

  const isMulti = isMultiType(props);
  const isAutocomplete = isAutocompleteType(props);

  // ── Estado interno ───────────────────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // ── Valores selecionados ─────────────────────────────────────────────────
  const selectedValues: string[] = (() => {
    if (isMulti) {
      const v = (props as InputSelectMultiProps).value;
      return Array.isArray(v) ? v : [];
    }
    const v = (props as InputSelectSingleProps).value;
    return v ? [v] : [];
  })();

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
    if (isOpen) closeList();
    else openList();
  }, [isOpen, openList, closeList]);

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

      if (isMulti) {
        const current = (props as InputSelectMultiProps).value ?? [];
        const next = current.includes(option.value)
          ? current.filter((v) => v !== option.value)
          : [...current, option.value];
        (props as InputSelectMultiProps).onChange?.(next);
      } else {
        (props as InputSelectSingleProps).onChange?.(option.value);
        closeList();
        triggerRef.current?.focus();
      }
    },
    [isMulti, props, closeList],
  );

  const handleRemoveChip = useCallback(
    (value: string) => {
      if (!isMulti) return;
      const current = (props as InputSelectMultiProps).value ?? [];
      (props as InputSelectMultiProps).onChange?.(
        current.filter((v) => v !== value),
      );
    },
    [isMulti, props],
  );

  // ── Teclado no trigger ───────────────────────────────────────────────────
  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
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
      case 'Escape':
        e.preventDefault();
        closeList();
        triggerRef.current?.focus();
        break;
    }
  };

  // ── Rótulo do trigger (single) ───────────────────────────────────────────
  const triggerLabel = (() => {
    if (isMulti) return null;
    const selected = options.find(
      (o) => o.value === (props as InputSelectSingleProps).value,
    );
    return selected?.label ?? null;
  })();

  // ── Classes CSS do trigger ───────────────────────────────────────────────
  const inputBaseClass = [
    styles.inputBase,
    disabled ? styles.stateDisabled : '',
    isOpen ? styles.stateFocused : isFilled ? styles.stateFilled : '',
  ]
    .filter(Boolean)
    .join(' ');

  // ── Ícones padrão ────────────────────────────────────────────────────────
  const defaultChevron = (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={isOpen ? 'M12 10L8 6l-4 4' : 'M4 6l4 4 4-4'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const defaultCheck = (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8l4 4 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const defaultTooltip = (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 7v4M8 5.5v.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

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
              {tooltipIcon ?? defaultTooltip}
            </span>
          )}
        </div>
      )}

      {/* Trigger + Listbox — contexto de posicionamento isolado */}
      <div className={styles.triggerContainer}>
      <button
        ref={triggerRef}
        id={inputId}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-labelledby={label ? labelId : ariaLabelledBy}
        aria-label={!label ? ariaLabel : undefined}
        aria-describedby={
          hasSupport && supportText ? supportId : ariaDescribedBy
        }
        aria-disabled={disabled}
        disabled={disabled}
        className={inputBaseClass}
        onClick={toggleList}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className={styles.triggerContent}>
          {isMulti && selectedValues.length > 0 ? (
            <span className={styles.chipsContainer}>
              {selectedValues.map((v) => {
                const opt = options.find((o) => o.value === v);
                return opt ? (
                  <Chip
                    key={v}
                    label={opt.label}
                    onRemove={() => handleRemoveChip(v)}
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

        <span
          className={styles.chevron}
          aria-hidden="true"
        >
          {chevronIcon ?? defaultChevron}
        </span>
      </button>

      {/* Listbox */}
      {isOpen && (
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearchQuery(e.target.value);
                  setFocusedIndex(-1);
                }}
                onKeyDown={handleListKeyDown}
                aria-label="Buscar opções"
                aria-autocomplete="list"
                aria-controls={listboxId}
              />
            </div>
          )}

          {/* Lista de opções */}
          <ul
            id={listboxId}
            role="listbox"
            aria-multiselectable={isMulti}
            aria-label={label ?? ariaLabel ?? 'Opções disponíveis'}
            className={styles.listbox}
            onKeyDown={handleListKeyDown}
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
                  id={`${listboxId}-option-${option.value}`}
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
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  <span className={styles.listItemLabel}>{option.label}</span>
                  {isMulti ? (
                    <span className={styles.checkboxWrapper} aria-hidden="true">
                      <Checkbox
                        checked={isSelected}
                        disabled={option.disabled}
                        onChange={() => {}}
                        tabIndex={-1}
                      />
                    </span>
                  ) : (
                    isSelected && (
                      <span className={styles.checkIcon} aria-hidden="true">
                        {checkIcon ?? defaultCheck}
                      </span>
                    )
                  )}
                </li>
              );
            })}
          </ul>
        </div>
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
