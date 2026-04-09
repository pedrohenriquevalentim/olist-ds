import React, { useCallback, useRef } from 'react';
import styles from './SegmentedButtons.module.css';

/**
 * Tooltip icon asset from Figma (expires in 7 days — replace with a
 * project-local SVG when integrating permanently).
 */
const imgTooltipIcon =
  'https://www.figma.com/api/mcp/asset/7313fa46-f349-4790-bc45-e483fd81ca98';

export interface SegmentedButtonsProps {
  /** Number of segments displayed in the control. */
  segments?: 2 | 3;
  /** 1-indexed segment that is currently active. */
  activeSegment?: 1 | 2 | 3;
  /** Positions the label beside the control (horizontal) or above it (vertical). */
  labelPosition?: 'horizontal' | 'vertical';
  /** Text shown in the label area. */
  labelText?: string;
  /**
   * Display label for each segment (index 0 = segment 1).
   * Defaults to "placeholder Text" for any unspecified entries.
   */
  segmentLabels?: string[];
  /**
   * Show an info icon next to the label.
   * Only visible when `labelPosition` is "vertical".
   */
  hasTooltip?: boolean;
  /** Called with the 1-indexed segment number when the user selects a segment. */
  onChange?: (segment: 1 | 2 | 3) => void;
  /** Additional CSS class applied to the root element. */
  className?: string;
  /** Accessible label for the radio group. Defaults to `labelText`. */
  ariaLabel?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export const SegmentedButtons = ({
  segments = 2,
  activeSegment = 1,
  labelPosition = 'horizontal',
  labelText = 'Label text',
  segmentLabels,
  hasTooltip = false,
  onChange,
  className,
  ariaLabel,
}: SegmentedButtonsProps) => {
  const isVertical = labelPosition === 'vertical';
  const segmentCount = segments === 3 ? 3 : 2;
  const segmentIndices = Array.from(
    { length: segmentCount },
    (_, i) => (i + 1) as 1 | 2 | 3
  );
  const controlRef = useRef<HTMLDivElement>(null);

  const getSegmentLabel = (n: 1 | 2 | 3) =>
    segmentLabels?.[n - 1] ?? 'placeholder Text';

  /** Arrow-key navigation within the radio group (ARIA radiogroup pattern). */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        e.key !== 'ArrowRight' &&
        e.key !== 'ArrowLeft' &&
        e.key !== 'ArrowDown' &&
        e.key !== 'ArrowUp'
      ) {
        return;
      }
      e.preventDefault();

      const buttons =
        controlRef.current?.querySelectorAll<HTMLButtonElement>(
          'button[role="radio"]'
        );
      if (!buttons || buttons.length === 0) return;

      const currentIdx = Array.from(buttons).findIndex(
        (b) => b.getAttribute('aria-checked') === 'true'
      );
      const delta =
        e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1;
      const nextIdx = (currentIdx + delta + buttons.length) % buttons.length;
      const nextSegment = (nextIdx + 1) as 1 | 2 | 3;

      onChange?.(nextSegment);
      buttons[nextIdx].focus();
    },
    [onChange]
  );

  return (
    <div
      className={cx(
        styles.root,
        isVertical ? styles.vertical : styles.horizontal,
        className
      )}
    >
      {/* Label */}
      <div
        className={cx(
          styles.labelRow,
          isVertical ? styles.labelRowVertical : styles.labelRowHorizontal
        )}
      >
        <span className={styles.labelText}>{labelText}</span>

        {isVertical && hasTooltip && (
          <button
            type="button"
            className={styles.tooltipButton}
            aria-label="Mais informações"
          >
            <img
              src={imgTooltipIcon}
              alt=""
              className={styles.tooltipIcon}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {/* Segmented control */}
      <div
        ref={controlRef}
        role="radiogroup"
        aria-label={ariaLabel ?? labelText}
        className={styles.control}
        onKeyDown={handleKeyDown}
      >
        {segmentIndices.map((n) => {
          const isActive = n === activeSegment;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={isActive}
              tabIndex={isActive ? 0 : -1}
              className={cx(
                styles.segment,
                isActive ? styles.segmentActive : styles.segmentEnabled
              )}
              onClick={isActive ? undefined : () => onChange?.(n)}
            >
              {getSegmentLabel(n)}
            </button>
          );
        })}
      </div>
    </div>
  );
};
