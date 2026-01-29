import React from 'react';
import { Download, RotateCcw, Palette, Layers, Sun, Moon } from 'lucide-react';
import { PreviewToggle, PreviewMode } from '../preview';
import { useDesignTokens } from '../../context/DesignTokenContext';
import { DesignTokens } from '../../types/tokens';

import './Header.css';

interface HeaderProps {
  previewMode: PreviewMode;
  onPreviewModeChange: (mode: PreviewMode) => void;
  onExport: () => void;
  exporting: boolean;
  onPresetChange: (preset: string) => void;
}

export function Header({
  previewMode,
  onPreviewModeChange,
  onExport,
  exporting,
  onPresetChange,
}: HeaderProps) {
  const { themeMode, setThemeMode, resetTokens } = useDesignTokens();

  return (
    <header className="app-header">
      <div className="app-header-left">
        <div className="app-logo">
          <Layers size={24} />
          <span className="app-title">Component Library Customizer</span>
        </div>
      </div>
      <div className="app-header-center">
        <PreviewToggle mode={previewMode} onChange={onPreviewModeChange} />
        <div className="background-mode-toggle">
          <button
            className={`mode-btn ${themeMode === 'light' ? 'mode-btn-active' : ''}`}
            onClick={() => setThemeMode('light')}
            title="Light theme"
          >
            <Sun size={16} />
          </button>
          <button
            className={`mode-btn ${themeMode === 'dark' ? 'mode-btn-active' : ''}`}
            onClick={() => setThemeMode('dark')}
            title="Dark theme"
          >
            <Moon size={16} />
          </button>
        </div>
      </div>
      <div className="app-header-right">
        <div className="preset-selector">
          <Palette size={16} />
          <select
            onChange={(e) => {
              onPresetChange(e.target.value);
              e.target.value = "";
            }}
            value=""
          >
            <option value="" disabled>Theme Presets</option>
            <option value="default">Default</option>
            <option value="neobrutalism">Neobrutalism</option>
            <option value="neoskeuomorphism">Neoskeuomorphism</option>
            <option value="glassmorphism">Glassmorphism</option>
            <option value="claymorphism">Claymorphism</option>
            <option value="cyberRetro">Cyber Retro</option>
            <option value="editorial">Editorial</option>
            <option value="darkTechMinimal">Dark Tech Minimal</option>
            <option value="monochromeMaximal">Monochrome Maximal</option>
          </select>
        </div>
        <button className="header-btn" onClick={resetTokens} title="Reset to defaults">
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>
        <button
          className="header-btn header-btn-primary"
          onClick={onExport}
          disabled={exporting}
        >
          <Download size={16} />
          <span>{exporting ? 'Exporting...' : 'Export'}</span>
        </button>
      </div>
    </header>
  );
}
