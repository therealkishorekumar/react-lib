import React from 'react';
import './ShadowEditor.css';

export interface ShadowEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const outerShadowPresets = [
  { label: 'None', value: 'none' },
  { label: 'Small', value: '0 1px 2px 0 color-mix(in srgb, var(--shadow-color) 30%, transparent)' },
  { label: 'Medium', value: '0 4px 6px -1px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--shadow-color) 40%, transparent)' },
  { label: 'Large', value: '0 10px 15px -3px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--shadow-color) 40%, transparent)' },
  { label: 'Extra Large', value: '0 20px 25px -5px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--shadow-color) 40%, transparent)' },
  { label: 'Hard Offset', value: '6px 6px 0 0 var(--shadow-color)' },
];

const innerShadowPresets = [
  { label: 'None', value: 'none' },
  { label: 'Small', value: 'inset 1px 1px 2px color-mix(in srgb, var(--shadow-color) 20%, transparent)' },
  { label: 'Medium', value: 'inset 2px 2px 4px color-mix(in srgb, var(--shadow-color) 25%, transparent)' },
  { label: 'Large', value: 'inset 3px 3px 6px color-mix(in srgb, var(--shadow-color) 30%, transparent)' },
  { label: 'Embossed', value: 'inset 2px 2px 4px color-mix(in srgb, var(--shadow-color) 25%, transparent), inset -2px -2px 4px color-mix(in srgb, var(--color-text-on-accent) 10%, transparent)' },
  { label: 'Deep', value: 'inset 4px 4px 8px color-mix(in srgb, var(--shadow-color) 35%, transparent)' },
];

export function ShadowEditor({ label, value, onChange }: ShadowEditorProps) {
  // Detect if this is for inner shadows based on current value or label
  const isInnerShadow = value.toLowerCase().includes('inset') || label.toLowerCase().includes('inner');
  const shadowPresets = isInnerShadow ? innerShadowPresets : outerShadowPresets;

  return (
    <div className="shadow-editor">
      <label className="shadow-editor-label">{label}</label>
      <div className="shadow-editor-presets">
        {shadowPresets.map((preset) => (
          <button
            key={preset.label}
            className={`shadow-editor-preset ${value === preset.value ? 'shadow-editor-preset-active' : ''}`}
            onClick={() => onChange(preset.value)}
            title={preset.label}
          >
            <div
              className="shadow-editor-preview"
              style={{ boxShadow: preset.value }}
            />
          </button>
        ))}
      </div>
      <input
        type="text"
        className="shadow-editor-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 6px 6px 0 0 var(--shadow-color)"
        aria-label={`${label} value`}
      />
    </div>
  );
}
