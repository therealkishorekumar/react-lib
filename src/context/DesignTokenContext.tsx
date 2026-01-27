import React, {
  createContext,
  useContext,
  useReducer,
  useLayoutEffect,
  useState,
  ReactNode,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { DesignTokens, defaultTokens, TokenCategory, TokenKey } from '../types/tokens';
import { buildGoogleFontsUrl } from '../utils/fonts';

type TokenAction =
  | { type: 'SET_TOKEN'; category: TokenCategory; key: string; value: string | number }
  | { type: 'SET_CATEGORY'; category: TokenCategory; values: Partial<DesignTokens[TokenCategory]> }
  | { type: 'RESET_TOKENS' }
  | { type: 'LOAD_PRESET'; tokens: DesignTokens };

export type ThemeMode = 'light' | 'dark';

interface DesignTokenContextType {
  tokens: DesignTokens;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  setToken: <T extends TokenCategory>(category: T, key: TokenKey<T>, value: string | number) => void;
  setCategory: <T extends TokenCategory>(category: T, values: Partial<DesignTokens[T]>) => void;
  resetTokens: () => void;
  loadPreset: (tokens: DesignTokens) => void;
}

const DesignTokenContext = createContext<DesignTokenContextType | null>(null);

function parseColorToRgb(value: string): { r: number; g: number; b: number } | null {
  const trimmed = value.trim();
  if (trimmed.startsWith('#')) {
    const hex = trimmed.slice(1);
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return { r, g, b };
    }
    if (hex.length === 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return { r, g, b };
    }
    return null;
  }

  const rgbMatch = trimmed.match(/^rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
  if (rgbMatch) {
    const r = Math.min(255, parseInt(rgbMatch[1], 10));
    const g = Math.min(255, parseInt(rgbMatch[2], 10));
    const b = Math.min(255, parseInt(rgbMatch[3], 10));
    return { r, g, b };
  }

  return null;
}

function getReadableTextColor(background: string, fallback: string): string {
  const rgb = parseColorToRgb(background);
  if (!rgb) return fallback;
  const { r, g, b } = rgb;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.5 ? '#111111' : '#ffffff';
}

function tokenReducer(state: DesignTokens, action: TokenAction): DesignTokens {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          [action.key]: action.value,
        },
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          ...action.values,
        },
      };
    case 'RESET_TOKENS':
      return defaultTokens;
    case 'LOAD_PRESET':
      return action.tokens;
    default:
      return state;
  }
}

function tokensToCSS(tokens: DesignTokens, mode: 'light' | 'dark'): string {
  const cssVars: string[] = [];

  // Colors - use the appropriate theme based on mode
  const themeColors = mode === 'light' ? tokens.lightTheme : tokens.darkTheme;
  const platformText = getReadableTextColor(themeColors.background, themeColors.text);
  const platformTextOnPrimary = getReadableTextColor(themeColors.primary, themeColors.textOnAccent);
  Object.entries(themeColors).forEach(([key, value]) => {
    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`--color-${cssKey}: ${value}`);
  });

  // Platform UI inherits creator theme colors
  cssVars.push(`--platform-background: var(--color-background)`);
  cssVars.push(`--platform-surface: var(--color-surface)`);
  cssVars.push(`--platform-surface-elevated: var(--color-surface)`);
  cssVars.push(`--platform-surface-hover: color-mix(in srgb, var(--color-surface) 90%, var(--color-border))`);
  cssVars.push(`--platform-text: ${platformText}`);
  cssVars.push(`--platform-text-secondary: color-mix(in srgb, ${platformText} 75%, var(--color-background))`);
  cssVars.push(`--platform-text-muted: color-mix(in srgb, ${platformText} 60%, var(--color-background))`);
  cssVars.push(`--platform-text-on-primary: ${platformTextOnPrimary}`);
  cssVars.push(`--platform-border: var(--color-border)`);
  cssVars.push(`--platform-border-light: color-mix(in srgb, var(--color-border) 70%, transparent)`);
  cssVars.push(`--platform-border-hover: color-mix(in srgb, var(--color-border) 85%, var(--color-text))`);
  cssVars.push(`--platform-primary-solid: var(--color-primary)`);
  cssVars.push(`--platform-primary: var(--color-primary)`);
  cssVars.push(`--platform-primary-hover: var(--color-primary-hover)`);
  cssVars.push(`--platform-accent: var(--color-secondary)`);

  // Typography
  cssVars.push(`--font-family: ${tokens.typography.fontFamily}`);
  cssVars.push(`--font-family-mono: ${tokens.typography.fontFamilyMono}`);
  cssVars.push(`--font-size-xs: ${tokens.typography.fontSizeXs}`);
  cssVars.push(`--font-size-sm: ${tokens.typography.fontSizeSm}`);
  cssVars.push(`--font-size-md: ${tokens.typography.fontSizeMd}`);
  cssVars.push(`--font-size-lg: ${tokens.typography.fontSizeLg}`);
  cssVars.push(`--font-size-xl: ${tokens.typography.fontSizeXl}`);
  cssVars.push(`--font-weight-normal: ${tokens.typography.fontWeightNormal}`);
  cssVars.push(`--font-weight-medium: ${tokens.typography.fontWeightMedium}`);
  cssVars.push(`--font-weight-semibold: ${tokens.typography.fontWeightSemibold}`);
  cssVars.push(`--font-weight-bold: ${tokens.typography.fontWeightBold}`);
  cssVars.push(`--line-height-tight: ${tokens.typography.lineHeightTight}`);
  cssVars.push(`--line-height-normal: ${tokens.typography.lineHeightNormal}`);
  cssVars.push(`--line-height-relaxed: ${tokens.typography.lineHeightRelaxed}`);

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars.push(`--spacing-${key}: ${value}`);
  });

  // Border Radius
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    cssVars.push(`--radius-${key}: ${value}`);
  });

  // Shadows
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    cssVars.push(`--shadow-${key}: ${value}`);
  });

  // Transitions
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    cssVars.push(`--transition-${key}: ${value}`);
  });

  // Effects
  cssVars.push(`--focus-ring-width: ${tokens.effects.focusRingWidth}`);
  cssVars.push(`--focus-ring-offset: ${tokens.effects.focusRingOffset}`);
  cssVars.push(`--focus-ring-color: ${tokens.effects.focusRingColor}`);
  cssVars.push(`--shadow-color: ${tokens.effects.shadowColor}`);

  // Patterns
  const patternColor = `color-mix(in srgb, var(--color-text) ${Math.round(tokens.patterns.background.opacity * 100)}%, transparent)`;
  const surfacePatternColor = `color-mix(in srgb, var(--color-text) ${Math.round(tokens.patterns.surface.opacity * 100)}%, transparent)`;

  const patternImage = (type: 'none' | 'dots' | 'grid' | 'plus', color: string) => {
    if (type === 'dots') {
      return `radial-gradient(circle, ${color} 1px, transparent 1px)`;
    }
    if (type === 'grid') {
      return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;
    }
    if (type === 'plus') {
      return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px), radial-gradient(circle, ${color} 1px, transparent 1px)`;
    }
    return 'none';
  };

  cssVars.push(`--pattern-background-image: ${patternImage(tokens.patterns.background.type, patternColor)}`);
  cssVars.push(`--pattern-background-size: ${tokens.patterns.background.size}px ${tokens.patterns.background.size}px`);
  cssVars.push(`--pattern-surface-image: ${patternImage(tokens.patterns.surface.type, surfacePatternColor)}`);
  cssVars.push(`--pattern-surface-size: ${tokens.patterns.surface.size}px ${tokens.patterns.surface.size}px`);

  // Components
  Object.entries(tokens.components).forEach(([component, props]) => {
    Object.entries(props).forEach(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();

      // Special handling for focus ring alpha - convert to color-mix
      if (key === 'focusRingAlpha') {
        const percentage = Math.round((value as number) * 100);
        cssVars.push(`--${component}-focus-ring-color: color-mix(in srgb, var(--color-primary) ${percentage}%, transparent)`);
      } else if (key === 'elevatedBorderWidth') {
        const enabled = (tokens.components as DesignTokens['components']).card?.elevatedBorderEnabled;
        cssVars.push(`--card-elevated-border-width: ${enabled ? value : '0px'}`);
      } else {
        cssVars.push(`--${component}-${cssKey}: ${value}`);
      }
    });
  });

  return `.app {
  ${cssVars.join(';\n  ')}
}`;
}

export function DesignTokenProvider({ children }: { children: ReactNode }) {
  const [tokens, dispatch] = useReducer(tokenReducer, defaultTokens);
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const fontRef = useRef<HTMLLinkElement | null>(null);
  const platformTextRef = useRef<string | null>(null);

  const cssContent = useMemo(() => tokensToCSS(tokens, themeMode), [tokens, themeMode]);
  const fontUrl = useMemo(
    () => buildGoogleFontsUrl([tokens.typography.fontFamily, tokens.typography.fontFamilyMono]),
    [tokens.typography.fontFamily, tokens.typography.fontFamilyMono]
  );

  useLayoutEffect(() => {
    if (!styleRef.current) {
      const styleElement = document.createElement('style');
      styleElement.id = 'dynamic-styles';
      document.head.appendChild(styleElement);
      styleRef.current = styleElement;
    }
    styleRef.current.textContent = cssContent;
  }, [cssContent]);

  useLayoutEffect(() => {
    const appRoot = document.querySelector('.app') as HTMLElement | null;
    const target = appRoot || document.body;
    const background = getComputedStyle(target).backgroundColor;
    const readable = getReadableTextColor(background, 'var(--color-text)');

    if (platformTextRef.current === readable) return;
    platformTextRef.current = readable;

    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--platform-text', readable);
    rootStyle.setProperty('--platform-text-secondary', `color-mix(in srgb, ${readable} 75%, var(--color-background))`);
    rootStyle.setProperty('--platform-text-muted', `color-mix(in srgb, ${readable} 60%, var(--color-background))`);
  }, [cssContent]);

  useLayoutEffect(() => {
    if (!fontUrl) return;
    if (!fontRef.current) {
      const link = document.createElement('link');
      link.id = 'dynamic-fonts';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      fontRef.current = link;
    }
    fontRef.current.href = fontUrl;
  }, [fontUrl]);

  const setToken = useCallback(<T extends TokenCategory>(
    category: T,
    key: TokenKey<T>,
    value: string | number
  ) => {
    dispatch({ type: 'SET_TOKEN', category, key: key as string, value });
  }, []);

  const setCategory = useCallback(<T extends TokenCategory>(
    category: T,
    values: Partial<DesignTokens[T]>
  ) => {
    dispatch({ type: 'SET_CATEGORY', category, values });
  }, []);

  const resetTokens = useCallback(() => {
    dispatch({ type: 'RESET_TOKENS' });
  }, []);

  const loadPreset = useCallback((newTokens: DesignTokens) => {
    dispatch({ type: 'LOAD_PRESET', tokens: newTokens });
  }, []);

  const contextValue = useMemo(() => ({
    tokens,
    themeMode,
    setThemeMode,
    setToken,
    setCategory,
    resetTokens,
    loadPreset
  }), [tokens, themeMode, setToken, setCategory, resetTokens, loadPreset]);

  return (
    <DesignTokenContext.Provider value={contextValue}>
      {children}
    </DesignTokenContext.Provider>
  );
}

export function useDesignTokens() {
  const context = useContext(DesignTokenContext);
  if (!context) {
    throw new Error('useDesignTokens must be used within a DesignTokenProvider');
  }
  return context;
}
