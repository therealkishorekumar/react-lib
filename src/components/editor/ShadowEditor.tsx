import React from 'react';
import './ShadowEditor.css';

export interface ShadowEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const shadowPresets = [
  { label: 'None', value: 'none' },
  { label: 'Small', value: '0 1px 2px 0 color-mix(in srgb, var(--shadow-color) 30%, transparent)' },
  { label: 'Medium', value: '0 4px 6px -1px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--shadow-color) 40%, transparent)' },
  { label: 'Large', value: '0 10px 15px -3px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--shadow-color) 40%, transparent)' },
  { label: 'Extra Large', value: '0 20px 25px -5px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--shadow-color) 40%, transparent)' },
  { label: 'Hard Offset', value: '6px 6px 0 0 var(--shadow-color)' },
];

export function ShadowEditor({ label, value, onChange }: ShadowEditorProps) {
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
