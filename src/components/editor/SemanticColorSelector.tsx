import React, { useState, useMemo } from 'react';
import { SemanticColorKey, SemanticColors } from '../../types/tokens';
import './SemanticColorSelector.css';

interface SemanticColorSelectorProps {
  label: string;
  value: SemanticColorKey;
  onChange: (semanticKey: SemanticColorKey) => void;
  currentTheme: SemanticColors;
  description?: string;
}

interface ColorOption {
  key: SemanticColorKey;
  label: string;
  category: string;
}

const colorOptions: ColorOption[] = [
  // Surface (4)
  { key: 'surfacePrimary', label: 'Surface Primary', category: 'Surface' },
  { key: 'surfaceSecondary', label: 'Surface Secondary', category: 'Surface' },
  { key: 'surfaceTertiary', label: 'Surface Tertiary', category: 'Surface' },
  { key: 'surfaceQuaternary', label: 'Surface Quaternary', category: 'Surface' },

  // Content (3)
  { key: 'contentPrimary', label: 'Content Primary', category: 'Content' },
  { key: 'contentSecondary', label: 'Content Secondary', category: 'Content' },
  { key: 'contentTertiary', label: 'Content Tertiary', category: 'Content' },

  // Accent (3)
  { key: 'accentPrimary', label: 'Accent Primary', category: 'Accent' },
  { key: 'accentSecondary', label: 'Accent Secondary', category: 'Accent' },
  { key: 'accentTertiary', label: 'Accent Tertiary', category: 'Accent' },

  // On Accent (3)
  { key: 'onAccentPrimary', label: 'On Accent Primary', category: 'On Accent' },
  { key: 'onAccentSecondary', label: 'On Accent Secondary', category: 'On Accent' },
  { key: 'onAccentTertiary', label: 'On Accent Tertiary', category: 'On Accent' },

  // Status (4)
  { key: 'success', label: 'Success', category: 'Status' },
  { key: 'fail', label: 'Fail', category: 'Status' },
  { key: 'warning', label: 'Warning', category: 'Status' },
  { key: 'info', label: 'Info', category: 'Status' },

  // Action (3)
  { key: 'action', label: 'Action', category: 'Action' },
  { key: 'actionSecondary', label: 'Action Secondary', category: 'Action' },
  { key: 'actionTertiary', label: 'Action Tertiary', category: 'Action' },

  // Utility (2)
  { key: 'shadow', label: 'Shadow', category: 'Utility' },
  { key: 'border', label: 'Border', category: 'Utility' },

  // Brand (2)
  { key: 'brandPrimary', label: 'Brand Primary', category: 'Brand' },
  { key: 'brandSecondary', label: 'Brand Secondary', category: 'Brand' },

  // Gradients (3)
  { key: 'gradientPrimary', label: 'Gradient Primary', category: 'Gradients' },
  { key: 'gradientSecondary', label: 'Gradient Secondary', category: 'Gradients' },
  { key: 'gradientTertiary', label: 'Gradient Tertiary', category: 'Gradients' },
];

export function SemanticColorSelector({
  label,
  value,
  onChange,
  currentTheme,
  description,
}: SemanticColorSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOptions = useMemo(() => {
    if (!searchQuery) return colorOptions;

    const query = searchQuery.toLowerCase();
    return colorOptions.filter(option =>
      option.label.toLowerCase().includes(query) ||
      option.category.toLowerCase().includes(query) ||
      option.key.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedOptions = useMemo(() => {
    const groups: Record<string, ColorOption[]> = {};
    filteredOptions.forEach(option => {
      if (!groups[option.category]) {
        groups[option.category] = [];
      }
      groups[option.category].push(option);
    });
    return groups;
  }, [filteredOptions]);

  const selectedOption = colorOptions.find(opt => opt.key === value);
  const selectedColor = currentTheme[value];

  const handleSelect = (key: SemanticColorKey) => {
    onChange(key);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="semantic-color-selector">
      <label className="semantic-color-selector-label">
        {label}
        {description && <span className="semantic-color-selector-description">{description}</span>}
      </label>

      <div className="semantic-color-selector-control">
        <button
          type="button"
          className="semantic-color-selector-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="semantic-color-selector-swatch" style={{ backgroundColor: selectedColor }} />
          <span className="semantic-color-selector-value">
            {selectedOption?.label || value}
          </span>
          <span className="semantic-color-selector-arrow">
            {isOpen ? '▲' : '▼'}
          </span>
        </button>

        {isOpen && (
          <>
            <div className="semantic-color-selector-overlay" onClick={() => setIsOpen(false)} />
            <div className="semantic-color-selector-dropdown">
              <div className="semantic-color-selector-search">
                <input
                  type="text"
                  placeholder="Search colors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="semantic-color-selector-options">
                {Object.entries(groupedOptions).map(([category, options]) => (
                  <div key={category} className="semantic-color-selector-group">
                    <div className="semantic-color-selector-group-label">{category}</div>
                    {options.map(option => (
                      <button
                        key={option.key}
                        type="button"
                        className={`semantic-color-selector-option ${option.key === value ? 'selected' : ''}`}
                        onClick={() => handleSelect(option.key)}
                      >
                        <span
                          className="semantic-color-selector-option-swatch"
                          style={{ backgroundColor: currentTheme[option.key] }}
                        />
                        <span className="semantic-color-selector-option-label">
                          {option.label}
                        </span>
                        {option.key === value && (
                          <span className="semantic-color-selector-option-check">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                ))}

                {filteredOptions.length === 0 && (
                  <div className="semantic-color-selector-empty">
                    No colors found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
