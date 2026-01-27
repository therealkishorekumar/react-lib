import React, { useState, useEffect } from 'react';
import { isValidColor, sanitizeCSSValue } from '../../utils/cssValidation';
import './ColorPicker.css';

export interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  showSync?: boolean;
  syncTitle?: string;
  syncAriaLabel?: string;
  onSync?: () => void;
}

export function ColorPicker({
  label,
  value,
  onChange,
  showSync = false,
  syncTitle,
  syncAriaLabel,
  onSync,
}: ColorPickerProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitized = sanitizeCSSValue(rawValue);
    setInputValue(sanitized);

    // Validate and update if valid
    if (sanitized && isValidColor(sanitized)) {
      onChange(sanitized);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Color input always returns valid hex color
    if (isValidColor(newValue)) {
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className="color-picker">
      <label className="color-picker-label">{label}</label>
      <div className="color-picker-controls">
        <input
          type="color"
          value={value}
          onChange={handleColorChange}
          className="color-picker-swatch"
        />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="color-picker-input"
          placeholder="#000000"
        />
        {showSync && onSync && (
          <button
            type="button"
            className="color-picker-sync"
            onClick={onSync}
            title={syncTitle}
            aria-label={syncAriaLabel || syncTitle || 'Sync theme color'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
