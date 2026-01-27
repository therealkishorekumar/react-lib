import React, { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ToastProvider, useToast } from './components/Toast';
import { DesignTokenProvider, useDesignTokens } from './context/DesignTokenContext';
import { EditorSidebar } from './components/editor';
import { Showcase, Playground, PreviewMode } from './components/preview';
import { Header } from './components/layout/Header';
import { exportLibrary } from './utils/exportLibrary';
import { defaultTokens, DesignTokens } from './types/tokens';
import './App.css';

// Theme presets
const presets: Record<string, DesignTokens> = {
  default: defaultTokens,
  nature: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#059669',
      primaryHover: '#047857',
      secondary: '#78716c',
      secondaryHover: '#57534e',
      success: '#10b981',
      background: '#fafaf9',
      surface: '#f5f5f4',
      text: '#1c1917',
      textMuted: '#78716c',
      border: '#e7e5e4',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#10b981',
      primaryHover: '#059669',
      secondary: '#a8a29e',
      secondaryHover: '#78716c',
      success: '#22c55e',
    },
  },
  ocean: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#0891b2',
      primaryHover: '#0e7490',
      secondary: '#64748b',
      secondaryHover: '#475569',
      info: '#22d3ee',
      background: '#f0f9ff',
      surface: '#e0f2fe',
      text: '#0c4a6e',
      textMuted: '#0369a1',
      border: '#bae6fd',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#22d3ee',
      primaryHover: '#06b6d4',
      info: '#0891b2',
    },
  },
  sunset: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#f97316',
      primaryHover: '#ea580c',
      secondary: '#a8a29e',
      secondaryHover: '#78716c',
      warning: '#fbbf24',
      error: '#dc2626',
      background: '#fffbeb',
      surface: '#fef3c7',
      text: '#78350f',
      textMuted: '#92400e',
      border: '#fcd34d',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#fb923c',
      primaryHover: '#f97316',
      warning: '#fde047',
    },
  },
  neon: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#ffd400', // taxi yellow
      primaryHover: '#ffc300',
      secondary: '#ff7a00',
      secondaryHover: '#ff9f1a',
      success: '#00cc44', // Improved contrast for success
      warning: '#ff9f1a',
      error: '#dd0000', // Improved contrast for error
      info: '#ff7a00',
      background: '#fff5b8', // Slightly darker for better text contrast
      surface: '#fffef5',
      text: '#0a0a0a',
      textMuted: '#3a3a3a', // Improved contrast from #2b2b2b
      textOnAccent: '#0a0a0a',
      border: '#0a0a0a',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#ffd400',
      primaryHover: '#ffe066',
      secondary: '#ff9933', // Improved contrast from #ff7a00
      secondaryHover: '#ffaa55',
      success: '#88ff77', // Improved brightness for dark bg
      warning: '#ffcc33', // Improved contrast
      error: '#ff5555', // Improved visibility from #ff3b3b
      info: '#ff9933',
      background: '#0b0b0b',
      surface: '#1a1a1a', // Improved contrast from #141414
      text: '#ffffff',
      textMuted: '#cccccc', // Improved readability from #d1d1d1
      textOnAccent: '#0b0b0b',
      border: '#ffffff',
    },
    borderRadius: {
      ...defaultTokens.borderRadius,
      control: '2px',
      surface: '4px',
      overlay: '6px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '3px 3px 0 0 var(--shadow-color)',
      surface: '5px 5px 0 0 var(--shadow-color)',
      overlay: '7px 7px 0 0 var(--shadow-color)',
      float: '9px 9px 0 0 var(--shadow-color)',
    },
    effects: {
      ...defaultTokens.effects,
      focusRingWidth: '3px',
      focusRingOffset: '2px',
      focusRingColor: '#ffd400',
      shadowColor: '#0a0a0a',
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '3px',
        innerShadow: '4px 4px 0 0 var(--color-text)',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '3px',
        focusRingWidth: '3px',
        focusRingAlpha: 0.6,
      },
      checkbox: {
        ...defaultTokens.components.checkbox,
        borderWidth: '3px',
        size: '20px',
      },
      radio: {
        ...defaultTokens.components.radio,
        borderWidth: '3px',
        size: '20px',
        dotSize: '10px',
      },
      toggle: {
        ...defaultTokens.components.toggle,
        borderWidth: '0px',
        trackHeight: '26px',
        thumbSize: '20px',
        thumbBorderWidth: '2px',
        trackShadow: '5px 5px 0 0 var(--shadow-color)',
        thumbShadow: '0 0 0 0 var(--shadow-color)',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '3px',
        headerBorderWidth: '3px',
        elevatedBorderEnabled: true,
        elevatedBorderWidth: '3px',
      },
      alert: {
        ...defaultTokens.components.alert,
        borderWidth: '3px',
      },
      modal: {
        ...defaultTokens.components.modal,
        borderWidth: '3px',
      },
      badge: {
        ...defaultTokens.components.badge,
        borderWidth: '2px',
      },
      tabs: {
        ...defaultTokens.components.tabs,
        indicatorHeight: '3px',
      },
      progress: {
        ...defaultTokens.components.progress,
        trackHeight: '10px',
      },
    },
  },
  modernRetro: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#b89830', // Darker brass for better contrast
      primaryHover: '#a38420',
      secondary: '#2d4a56', // Darker slate-teal for better contrast
      secondaryHover: '#1e3742',
      success: '#2d6647', // Improved contrast
      warning: '#c77a1f', // Improved contrast
      error: '#a02d2b', // Improved contrast
      info: '#476991', // Improved contrast
      background: '#f4f1ea',
      surface: '#faf7f0',
      text: '#1f1d1a',
      textMuted: '#4a4540', // Improved contrast from #5a554f
      textOnAccent: '#ffffff', // Changed from dark to white for better contrast
      border: '#2b2722',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#ddc466', // Brighter for better contrast
      primaryHover: '#d0b658',
      secondary: '#7a9faa', // Brighter for better contrast
      secondaryHover: '#6b8d98',
      success: '#5fa67a', // Improved brightness
      warning: '#edb55c', // Improved brightness
      error: '#d66663', // Improved visibility
      info: '#8bb3ca', // Improved brightness
      background: '#141210',
      surface: '#1f1d1a', // Better contrast from #1b1916
      text: '#f2eee6',
      textMuted: '#c7c1b8', // Improved readability from #bdb7ae
      textOnAccent: '#141210',
      border: '#f2eee6',
    },
    borderRadius: {
      ...defaultTokens.borderRadius,
      control: '4px',
      surface: '8px',
      overlay: '12px',
      full: '999px',
    },
    effects: {
      ...defaultTokens.effects,
      focusRingColor: '#c2a542',
      shadowColor: 'rgb(0 0 0 / 0.35)',
    },
    shadows: {
      none: 'none',
      control: '0 1px 2px 0 color-mix(in srgb, var(--shadow-color) 30%, transparent)',
      surface: '0 6px 16px -6px color-mix(in srgb, var(--shadow-color) 45%, transparent)',
      overlay: '0 14px 28px -10px color-mix(in srgb, var(--shadow-color) 45%, transparent)',
      float: '0 24px 48px -14px color-mix(in srgb, var(--shadow-color) 45%, transparent)',
    },
  },
};

function AppContent() {
  const { tokens, loadPreset } = useDesignTokens();
  const toast = useToast();
  const [previewMode, setPreviewMode] = useState<PreviewMode>('showcase');
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      await exportLibrary(tokens);
      toast.success(
        'Export successful!',
        'Your component library has been downloaded as component-library.zip'
      );
    } catch (error) {
      console.error('Export failed:', error);

      // Show user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(
        'Export failed',
        errorMessage
      );
    } finally {
      setExporting(false);
    }
  };

  const handlePresetChange = (preset: string) => {
    if (presets[preset]) {
      loadPreset(presets[preset]);
    }
  };

  return (
    <div className="app">
      <Header
        previewMode={previewMode}
        onPreviewModeChange={setPreviewMode}
        onExport={handleExport}
        exporting={exporting}
        onPresetChange={handlePresetChange}
      />
      <div className="app-body">
        <aside className="app-sidebar">
          <EditorSidebar />
        </aside>
        <main className="app-main">
          {previewMode === 'showcase' ? <Showcase /> : <Playground />}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider position="top-right">
        <DesignTokenProvider>
          <AppContent />
        </DesignTokenProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
