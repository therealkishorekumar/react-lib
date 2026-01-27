import React from 'react';
import './PreviewToggle.css';

export type PreviewMode = 'showcase' | 'playground';

interface PreviewToggleProps {
  mode: PreviewMode;
  onChange: (mode: PreviewMode) => void;
}

export function PreviewToggle({ mode, onChange }: PreviewToggleProps) {
  return (
    <div className="preview-toggle">
      <button
        className={`preview-toggle-btn ${mode === 'showcase' ? 'active' : ''}`}
        onClick={() => onChange('showcase')}
      >
        Showcase
      </button>
      <button
        className={`preview-toggle-btn ${mode === 'playground' ? 'active' : ''}`}
        onClick={() => onChange('playground')}
      >
        Playground
      </button>
    </div>
  );
}
