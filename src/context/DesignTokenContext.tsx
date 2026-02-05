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
import { DesignTokens, defaultTokens, TokenCategory, TokenKey, SemanticColors } from '../types/tokens';
import { buildGoogleFontsUrl } from '../utils/fonts';

type TokenAction =
  | { type: 'SET_TOKEN'; category: TokenCategory; key: string; value: string | number }
  | { type: 'SET_CATEGORY'; category: TokenCategory; values: Partial<DesignTokens[TokenCategory]> }
  | { type: 'SET_COMPONENT_COLOR'; path: string[]; value: string | number | boolean }
  | { type: 'RESET_TOKENS' }
  | { type: 'LOAD_PRESET'; tokens: DesignTokens };

export type ThemeMode = 'light' | 'dark';

interface DesignTokenContextType {
  tokens: DesignTokens;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  setToken: <T extends TokenCategory>(category: T, key: TokenKey<T>, value: string | number) => void;
  setCategory: <T extends TokenCategory>(category: T, values: Partial<DesignTokens[T]>) => void;
  setComponentColor: (path: string[], value: string | number | boolean) => void;
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
    case 'SET_COMPONENT_COLOR': {
      // Handle nested updates for componentColors
      const [component, ...rest] = action.path;
      const updateNested = (obj: Record<string, unknown>, path: string[], value: string | number | boolean): Record<string, unknown> => {
        if (path.length === 1) {
          return { ...obj, [path[0]]: value };
        }
        const [first, ...remaining] = path;
        return {
          ...obj,
          [first]: updateNested(obj[first] as Record<string, unknown>, remaining, value),
        };
      };

      return {
        ...state,
        componentColors: {
          ...state.componentColors,
          [component]: updateNested(state.componentColors[component as keyof typeof state.componentColors], rest, action.value),
        },
      };
    }
    case 'RESET_TOKENS':
      return defaultTokens;
    case 'LOAD_PRESET':
      return action.tokens;
    default:
      return state;
  }
}

function generateShadowCSS(config: {
  type: 'none' | 'standard' | 'neumorphic' | 'elevated' | 'glow' | 'inset';
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
}, shadowColor: string, highlightColor: string): string {
  if (config.type === 'none') return 'none';

  const isInset = config.type === 'inset';
  const prefix = isInset ? 'inset ' : '';

  if (config.type === 'standard' || config.type === 'inset') {
    return `${prefix}${config.offsetX}px ${config.offsetY}px ${config.blur}px ${config.spread}px ${shadowColor}`;
  }

  if (config.type === 'neumorphic') {
    // Dual shadows: dark shadow + light highlight
    const darkShadow = `${prefix}${config.offsetX}px ${config.offsetY}px ${config.blur}px ${config.spread}px ${shadowColor}`;
    const lightShadow = `${prefix}${-config.offsetX}px ${-config.offsetY}px ${config.blur}px ${config.spread}px ${highlightColor}`;
    return `${darkShadow}, ${lightShadow}`;
  }

  if (config.type === 'elevated') {
    // Multiple layered shadows for depth
    const main = `${config.offsetX}px ${config.offsetY}px ${config.blur}px ${config.spread}px ${shadowColor}`;
    const secondary = `${config.offsetX * 0.5}px ${config.offsetY * 0.5}px ${config.blur * 0.5}px ${config.spread * 0.5}px color-mix(in srgb, ${shadowColor} 50%, transparent)`;
    return `${main}, ${secondary}`;
  }

  if (config.type === 'glow') {
    // Glowing effect using blur without offset
    return `0 0 ${config.blur}px ${config.spread}px ${shadowColor}`;
  }

  return 'none';
}

function tokensToCSS(tokens: DesignTokens, mode: 'light' | 'dark'): string {
  const cssVars: string[] = [];

  // Legacy Colors - use the appropriate theme based on mode
  const themeColors = mode === 'light' ? tokens.lightTheme : tokens.darkTheme;
  const platformText = getReadableTextColor(themeColors.background, themeColors.text);
  const platformTextOnPrimary = getReadableTextColor(themeColors.primary, themeColors.textOnAccent);
  Object.entries(themeColors).forEach(([key, value]) => {
    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`--color-${cssKey}: ${value}`);
  });

  // Semantic Colors - Layer 1: Generate semantic color variables
  const semanticColors = mode === 'light' ? tokens.semanticLight : tokens.semanticDark;
  Object.entries(semanticColors).forEach(([key, value]) => {
    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`--semantic-${cssKey}: ${value}`);
  });

  // Helper function to resolve semantic color key to actual value
  const resolveSemanticColor = (key: string): string => {
    return semanticColors[key as keyof SemanticColors] || key;
  };

  // Helper to generate component color variables
  const genComponentVars = (prefix: string, mapping: Record<string, string>) => {
    Object.entries(mapping).forEach(([prop, semanticKey]) => {
      cssVars.push(`--${prefix}-${prop}: ${resolveSemanticColor(semanticKey)}`);
    });
  };

  // Component Colors - Layer 2: Generate component-specific variables
  // Button
  cssVars.push(`--button-primary-background: ${resolveSemanticColor(tokens.componentColors.button.primary.background)}`);
  cssVars.push(`--button-primary-background-hover: ${resolveSemanticColor(tokens.componentColors.button.primary.backgroundHover)}`);
  cssVars.push(`--button-primary-text: ${resolveSemanticColor(tokens.componentColors.button.primary.text)}`);
  cssVars.push(`--button-primary-border: ${resolveSemanticColor(tokens.componentColors.button.primary.border)}`);

  cssVars.push(`--button-secondary-background: ${resolveSemanticColor(tokens.componentColors.button.secondary.background)}`);
  cssVars.push(`--button-secondary-background-hover: ${resolveSemanticColor(tokens.componentColors.button.secondary.backgroundHover)}`);
  cssVars.push(`--button-secondary-text: ${resolveSemanticColor(tokens.componentColors.button.secondary.text)}`);
  cssVars.push(`--button-secondary-border: ${resolveSemanticColor(tokens.componentColors.button.secondary.border)}`);

  cssVars.push(`--button-outline-background: ${resolveSemanticColor(tokens.componentColors.button.outline.background)}`);
  cssVars.push(`--button-outline-background-hover: ${resolveSemanticColor(tokens.componentColors.button.outline.backgroundHover)}`);
  cssVars.push(`--button-outline-text: ${resolveSemanticColor(tokens.componentColors.button.outline.text)}`);
  cssVars.push(`--button-outline-text-hover: ${resolveSemanticColor(tokens.componentColors.button.outline.textHover)}`);
  cssVars.push(`--button-outline-border: ${resolveSemanticColor(tokens.componentColors.button.outline.border)}`);
  cssVars.push(`--button-outline-border-hover: ${resolveSemanticColor(tokens.componentColors.button.outline.borderHover)}`);

  cssVars.push(`--button-ghost-background: ${resolveSemanticColor(tokens.componentColors.button.ghost.background)}`);
  cssVars.push(`--button-ghost-background-hover: ${resolveSemanticColor(tokens.componentColors.button.ghost.backgroundHover)}`);
  cssVars.push(`--button-ghost-text: ${resolveSemanticColor(tokens.componentColors.button.ghost.text)}`);
  cssVars.push(`--button-ghost-text-hover: ${resolveSemanticColor(tokens.componentColors.button.ghost.textHover)}`);

  cssVars.push(`--button-danger-background: ${resolveSemanticColor(tokens.componentColors.button.danger.background)}`);
  cssVars.push(`--button-danger-background-hover: ${resolveSemanticColor(tokens.componentColors.button.danger.backgroundHover)}`);
  cssVars.push(`--button-danger-text: ${resolveSemanticColor(tokens.componentColors.button.danger.text)}`);
  cssVars.push(`--button-danger-border: ${resolveSemanticColor(tokens.componentColors.button.danger.border)}`);

  // Input - expanded variables
  const inputBg = resolveSemanticColor(tokens.componentColors.input.background);
  const inputText = resolveSemanticColor(tokens.componentColors.input.text);
  const inputPlaceholder = resolveSemanticColor(tokens.componentColors.input.placeholder);
  const inputBorder = resolveSemanticColor(tokens.componentColors.input.border);
  const inputBorderHover = resolveSemanticColor(tokens.componentColors.input.borderHover);
  const inputBorderFocus = resolveSemanticColor(tokens.componentColors.input.borderFocus);
  const inputBorderError = resolveSemanticColor(tokens.componentColors.input.borderError);

  cssVars.push(`--input-label-color: ${inputText}`);
  cssVars.push(`--input-text-color: ${inputText}`);
  cssVars.push(`--input-background: ${inputBg}`);
  cssVars.push(`--input-border-color: ${inputBorder}`);
  cssVars.push(`--input-placeholder-color: ${inputPlaceholder}`);
  cssVars.push(`--input-border-color-hover: ${inputBorderHover}`);
  cssVars.push(`--input-border-color-focus: ${inputBorderFocus}`);
  cssVars.push(`--input-background-disabled: ${resolveSemanticColor('surfaceSecondary')}`);
  cssVars.push(`--input-error-border-color: ${inputBorderError}`);
  cssVars.push(`--input-error-text-color: ${inputBorderError}`);
  cssVars.push(`--input-helper-text-color: ${resolveSemanticColor('contentSecondary')}`);
  cssVars.push(`--input-error-focus-ring-color: color-mix(in srgb, ${inputBorderError} 20%, transparent)`);

  // Card - expanded variables
  const cardBg = resolveSemanticColor(tokens.componentColors.card.background);
  const cardBgEl = resolveSemanticColor(tokens.componentColors.card.backgroundElevated);
  const cardText = resolveSemanticColor(tokens.componentColors.card.text);
  const cardTextMuted = resolveSemanticColor(tokens.componentColors.card.textMuted);
  const cardBorder = resolveSemanticColor(tokens.componentColors.card.border);

  cssVars.push(`--card-background: ${cardBg}`);
  cssVars.push(`--card-background-default: ${cardBg}`);
  cssVars.push(`--card-background-outlined: ${resolveSemanticColor('surfacePrimary')}`);
  cssVars.push(`--card-background-elevated: ${cardBgEl}`);
  cssVars.push(`--card-border-color: ${cardBorder}`);
  cssVars.push(`--card-header-border-color: ${cardBorder}`);
  cssVars.push(`--card-title-color: ${cardText}`);
  cssVars.push(`--card-subtitle-color: ${cardTextMuted}`);
  cssVars.push(`--card-text-color: ${cardText}`);

  // Alert - with icon colors
  const alertInfoBg = resolveSemanticColor(tokens.componentColors.alert.info.background);
  const alertInfoText = resolveSemanticColor(tokens.componentColors.alert.info.text);
  const alertInfoBorder = resolveSemanticColor(tokens.componentColors.alert.info.border);

  cssVars.push(`--alert-info-background: ${alertInfoBg}`);
  cssVars.push(`--alert-info-text: ${alertInfoText}`);
  cssVars.push(`--alert-info-border: ${alertInfoBorder}`);
  cssVars.push(`--alert-info-icon-color: ${alertInfoText}`);

  const alertSuccessBg = resolveSemanticColor(tokens.componentColors.alert.success.background);
  const alertSuccessText = resolveSemanticColor(tokens.componentColors.alert.success.text);
  const alertSuccessBorder = resolveSemanticColor(tokens.componentColors.alert.success.border);

  cssVars.push(`--alert-success-background: ${alertSuccessBg}`);
  cssVars.push(`--alert-success-text: ${alertSuccessText}`);
  cssVars.push(`--alert-success-border: ${alertSuccessBorder}`);
  cssVars.push(`--alert-success-icon-color: ${alertSuccessText}`);

  const alertWarningBg = resolveSemanticColor(tokens.componentColors.alert.warning.background);
  const alertWarningText = resolveSemanticColor(tokens.componentColors.alert.warning.text);
  const alertWarningBorder = resolveSemanticColor(tokens.componentColors.alert.warning.border);

  cssVars.push(`--alert-warning-background: ${alertWarningBg}`);
  cssVars.push(`--alert-warning-text: ${alertWarningText}`);
  cssVars.push(`--alert-warning-border: ${alertWarningBorder}`);
  cssVars.push(`--alert-warning-icon-color: ${alertWarningText}`);

  const alertErrorBg = resolveSemanticColor(tokens.componentColors.alert.error.background);
  const alertErrorText = resolveSemanticColor(tokens.componentColors.alert.error.text);
  const alertErrorBorder = resolveSemanticColor(tokens.componentColors.alert.error.border);

  cssVars.push(`--alert-error-background: ${alertErrorBg}`);
  cssVars.push(`--alert-error-text: ${alertErrorText}`);
  cssVars.push(`--alert-error-border: ${alertErrorBorder}`);
  cssVars.push(`--alert-error-icon-color: ${alertErrorText}`);

  // Badge - with default variant
  cssVars.push(`--badge-default-background: ${resolveSemanticColor('surfaceSecondary')}`);
  cssVars.push(`--badge-default-text: ${resolveSemanticColor('contentPrimary')}`);
  cssVars.push(`--badge-default-border: ${resolveSemanticColor('border')}`);

  cssVars.push(`--badge-primary-background: ${resolveSemanticColor(tokens.componentColors.badge.primary.background)}`);
  cssVars.push(`--badge-primary-text: ${resolveSemanticColor(tokens.componentColors.badge.primary.text)}`);

  cssVars.push(`--badge-secondary-background: ${resolveSemanticColor(tokens.componentColors.badge.secondary.background)}`);
  cssVars.push(`--badge-secondary-text: ${resolveSemanticColor(tokens.componentColors.badge.secondary.text)}`);

  cssVars.push(`--badge-success-background: ${resolveSemanticColor(tokens.componentColors.badge.success.background)}`);
  cssVars.push(`--badge-success-text: ${resolveSemanticColor(tokens.componentColors.badge.success.text)}`);

  cssVars.push(`--badge-warning-background: ${resolveSemanticColor(tokens.componentColors.badge.warning.background)}`);
  cssVars.push(`--badge-warning-text: ${resolveSemanticColor(tokens.componentColors.badge.warning.text)}`);

  cssVars.push(`--badge-error-background: ${resolveSemanticColor(tokens.componentColors.badge.error.background)}`);
  cssVars.push(`--badge-error-text: ${resolveSemanticColor(tokens.componentColors.badge.error.text)}`);

  cssVars.push(`--badge-info-background: ${resolveSemanticColor('info')}`);
  cssVars.push(`--badge-info-text: ${resolveSemanticColor('onAccentPrimary')}`);

  // Checkbox - expanded
  cssVars.push(`--checkbox-label-color: ${resolveSemanticColor('contentPrimary')}`);
  cssVars.push(`--checkbox-background: ${resolveSemanticColor(tokens.componentColors.checkbox.background)}`);
  cssVars.push(`--checkbox-background-checked: ${resolveSemanticColor(tokens.componentColors.checkbox.backgroundChecked)}`);
  cssVars.push(`--checkbox-border-color: ${resolveSemanticColor(tokens.componentColors.checkbox.border)}`);
  cssVars.push(`--checkbox-border-color-checked: ${resolveSemanticColor(tokens.componentColors.checkbox.borderChecked)}`);
  cssVars.push(`--checkbox-border-color-hover: ${resolveSemanticColor('action')}`);
  cssVars.push(`--checkbox-check-color: ${resolveSemanticColor(tokens.componentColors.checkbox.checkmark)}`);

  // Radio - expanded
  cssVars.push(`--radio-label-color: ${resolveSemanticColor('contentPrimary')}`);
  cssVars.push(`--radio-background: ${resolveSemanticColor(tokens.componentColors.radio.background)}`);
  cssVars.push(`--radio-background-checked: ${resolveSemanticColor(tokens.componentColors.radio.backgroundChecked)}`);
  cssVars.push(`--radio-border-color: ${resolveSemanticColor(tokens.componentColors.radio.border)}`);
  cssVars.push(`--radio-border-color-checked: ${resolveSemanticColor(tokens.componentColors.radio.borderChecked)}`);
  cssVars.push(`--radio-border-color-hover: ${resolveSemanticColor('action')}`);
  cssVars.push(`--radio-dot-color: ${resolveSemanticColor(tokens.componentColors.radio.dot)}`);

  // Toggle - expanded
  cssVars.push(`--toggle-label-color: ${resolveSemanticColor('contentPrimary')}`);
  cssVars.push(`--toggle-track-background: ${resolveSemanticColor(tokens.componentColors.toggle.trackBackground)}`);
  cssVars.push(`--toggle-track-background-checked: ${resolveSemanticColor(tokens.componentColors.toggle.trackBackgroundActive)}`);
  cssVars.push(`--toggle-thumb-color: ${resolveSemanticColor(tokens.componentColors.toggle.thumb)}`);
  cssVars.push(`--toggle-thumb-border-color: ${resolveSemanticColor(tokens.componentColors.toggle.thumbBorder)}`);

  // Select - expanded
  cssVars.push(`--select-label-color: ${resolveSemanticColor('contentPrimary')}`);
  cssVars.push(`--select-text-color: ${resolveSemanticColor(tokens.componentColors.select.text)}`);
  cssVars.push(`--select-background: ${resolveSemanticColor(tokens.componentColors.select.background)}`);
  cssVars.push(`--select-border-color: ${resolveSemanticColor(tokens.componentColors.select.border)}`);
  cssVars.push(`--select-border-color-hover: ${resolveSemanticColor(tokens.componentColors.select.borderHover)}`);
  cssVars.push(`--select-border-color-focus: ${resolveSemanticColor(tokens.componentColors.select.borderFocus)}`);
  cssVars.push(`--select-focus-ring-color: color-mix(in srgb, ${resolveSemanticColor(tokens.componentColors.select.borderFocus)} 20%, transparent)`);
  cssVars.push(`--select-background-disabled: ${resolveSemanticColor('surfaceSecondary')}`);
  cssVars.push(`--select-icon-color: ${resolveSemanticColor('contentSecondary')}`);
  cssVars.push(`--select-error-border-color: ${resolveSemanticColor('fail')}`);
  cssVars.push(`--select-error-text-color: ${resolveSemanticColor('fail')}`);

  // Dropdown - expanded
  cssVars.push(`--dropdown-trigger-text: ${resolveSemanticColor(tokens.componentColors.dropdown.text)}`);
  cssVars.push(`--dropdown-trigger-background: ${resolveSemanticColor(tokens.componentColors.dropdown.background)}`);
  cssVars.push(`--dropdown-trigger-border: ${resolveSemanticColor(tokens.componentColors.dropdown.border)}`);
  cssVars.push(`--dropdown-trigger-border-hover: ${resolveSemanticColor('action')}`);
  cssVars.push(`--dropdown-menu-background: ${resolveSemanticColor(tokens.componentColors.dropdown.background)}`);
  cssVars.push(`--dropdown-menu-border: ${resolveSemanticColor(tokens.componentColors.dropdown.border)}`);
  cssVars.push(`--dropdown-item-text: ${resolveSemanticColor(tokens.componentColors.dropdown.text)}`);
  cssVars.push(`--dropdown-item-background-hover: ${resolveSemanticColor(tokens.componentColors.dropdown.itemHover)}`);
  cssVars.push(`--dropdown-item-icon-color: ${resolveSemanticColor('contentSecondary')}`);
  cssVars.push(`--dropdown-divider-color: ${resolveSemanticColor('border')}`);

  // Tabs - expanded
  cssVars.push(`--tabs-border-color: ${resolveSemanticColor(tokens.componentColors.tabs.border)}`);
  cssVars.push(`--tabs-tab-text: ${resolveSemanticColor(tokens.componentColors.tabs.text)}`);
  cssVars.push(`--tabs-tab-text-hover: ${resolveSemanticColor('contentPrimary')}`);
  cssVars.push(`--tabs-tab-text-active: ${resolveSemanticColor(tokens.componentColors.tabs.textActive)}`);
  cssVars.push(`--tabs-indicator-color: ${resolveSemanticColor(tokens.componentColors.tabs.indicator)}`);
  cssVars.push(`--tabs-panel-text: ${resolveSemanticColor('contentPrimary')}`);

  // Accordion - expanded
  cssVars.push(`--accordion-border-color: ${resolveSemanticColor(tokens.componentColors.accordion.border)}`);
  cssVars.push(`--accordion-trigger-text: ${resolveSemanticColor(tokens.componentColors.accordion.text)}`);
  cssVars.push(`--accordion-trigger-background: ${resolveSemanticColor(tokens.componentColors.accordion.background)}`);
  cssVars.push(`--accordion-trigger-background-hover: ${resolveSemanticColor(tokens.componentColors.accordion.backgroundHover)}`);
  cssVars.push(`--accordion-icon-color: ${resolveSemanticColor('contentSecondary')}`);
  cssVars.push(`--accordion-content-background: ${resolveSemanticColor(tokens.componentColors.accordion.background)}`);
  cssVars.push(`--accordion-content-text: ${resolveSemanticColor(tokens.componentColors.accordion.text)}`);

  // Modal - expanded
  cssVars.push(`--modal-overlay-background: ${resolveSemanticColor(tokens.componentColors.modal.backdrop)}`);
  cssVars.push(`--modal-background: ${resolveSemanticColor(tokens.componentColors.modal.background)}`);
  cssVars.push(`--modal-border-color: ${resolveSemanticColor(tokens.componentColors.modal.border)}`);
  cssVars.push(`--modal-header-border-color: ${resolveSemanticColor(tokens.componentColors.modal.border)}`);
  cssVars.push(`--modal-title-color: ${resolveSemanticColor(tokens.componentColors.modal.text)}`);
  cssVars.push(`--modal-close-color: ${resolveSemanticColor('contentSecondary')}`);
  cssVars.push(`--modal-close-background-hover: ${resolveSemanticColor('surfaceSecondary')}`);
  cssVars.push(`--modal-close-color-hover: ${resolveSemanticColor('contentPrimary')}`);
  cssVars.push(`--modal-body-text: ${resolveSemanticColor(tokens.componentColors.modal.text)}`);
  cssVars.push(`--modal-footer-border-color: ${resolveSemanticColor(tokens.componentColors.modal.border)}`);

  // Tooltip - expanded
  cssVars.push(`--tooltip-text-color: ${resolveSemanticColor(tokens.componentColors.tooltip.text)}`);
  cssVars.push(`--tooltip-background: ${resolveSemanticColor(tokens.componentColors.tooltip.background)}`);
  cssVars.push(`--tooltip-arrow-color: ${resolveSemanticColor(tokens.componentColors.tooltip.background)}`);

  // Progress - expanded
  cssVars.push(`--progress-track-background: ${resolveSemanticColor(tokens.componentColors.progress.track)}`);
  cssVars.push(`--progress-bar-background: ${resolveSemanticColor(tokens.componentColors.progress.fill)}`);
  cssVars.push(`--progress-bar-background-success: ${resolveSemanticColor('success')}`);
  cssVars.push(`--progress-bar-background-warning: ${resolveSemanticColor('warning')}`);
  cssVars.push(`--progress-bar-background-error: ${resolveSemanticColor('fail')}`);
  cssVars.push(`--progress-value-text: ${resolveSemanticColor(tokens.componentColors.progress.text)}`);

  // Avatar - expanded
  cssVars.push(`--avatar-background: ${resolveSemanticColor(tokens.componentColors.avatar.background)}`);
  cssVars.push(`--avatar-border-color: ${tokens.components.avatar.borderColor}`);
  cssVars.push(`--avatar-initials-text: ${resolveSemanticColor(tokens.componentColors.avatar.text)}`);
  cssVars.push(`--avatar-initials-background: ${resolveSemanticColor(tokens.componentColors.avatar.background)}`);
  cssVars.push(`--avatar-inner-shadow: ${tokens.components.avatar.innerShadow}`);
  cssVars.push(`--avatar-backdrop-blur: ${tokens.components.avatar.backdropBlur}`);
  cssVars.push(`--avatar-surface-opacity: ${tokens.components.avatar.surfaceOpacity}`);
  cssVars.push(`--avatar-glow-effect: ${tokens.components.avatar.glowEffect}`);
  cssVars.push(`--avatar-status-border: ${resolveSemanticColor('surfacePrimary')}`);
  cssVars.push(`--avatar-status-border-width: ${tokens.components.avatar.statusBorderWidth}`);
  cssVars.push(`--avatar-status-online: ${resolveSemanticColor('success')}`);
  cssVars.push(`--avatar-status-offline: ${resolveSemanticColor('contentTertiary')}`);
  cssVars.push(`--avatar-status-away: ${resolveSemanticColor('warning')}`);
  cssVars.push(`--avatar-status-busy: ${resolveSemanticColor('fail')}`);
  cssVars.push(`--avatar-group-border: ${resolveSemanticColor('surfacePrimary')}`);
  cssVars.push(`--avatar-group-border-width: ${tokens.components.avatar.groupBorderWidth}`);

  // Table - expanded
  cssVars.push(`--table-text-color: ${resolveSemanticColor(tokens.componentColors.table.text)}`);
  cssVars.push(`--table-header-background: ${resolveSemanticColor(tokens.componentColors.table.headerBackground)}`);
  cssVars.push(`--table-border-color: ${resolveSemanticColor(tokens.componentColors.table.border)}`);
  cssVars.push(`--table-header-background-hover: color-mix(in srgb, ${resolveSemanticColor(tokens.componentColors.table.headerBackground)} 90%, ${resolveSemanticColor('contentPrimary')})`);
  cssVars.push(`--table-sort-icon-color: ${resolveSemanticColor('contentSecondary')}`);
  cssVars.push(`--table-row-selected-background: color-mix(in srgb, ${resolveSemanticColor('accentPrimary')} 15%, transparent)`);
  cssVars.push(`--table-row-striped-background: ${resolveSemanticColor('surfaceSecondary')}`);
  cssVars.push(`--table-row-hover-background: ${resolveSemanticColor(tokens.componentColors.table.rowHover)}`);

  // Navbar - expanded
  cssVars.push(`--navbar-background: ${resolveSemanticColor(tokens.componentColors.navbar.background)}`);
  cssVars.push(`--navbar-border-color: ${resolveSemanticColor(tokens.componentColors.navbar.border)}`);
  cssVars.push(`--navbar-brand-text: ${resolveSemanticColor(tokens.componentColors.navbar.text)}`);
  cssVars.push(`--navbar-link-text: ${resolveSemanticColor(tokens.componentColors.navbar.text)}`);
  cssVars.push(`--navbar-link-text-hover: ${resolveSemanticColor(tokens.componentColors.navbar.textHover)}`);
  cssVars.push(`--navbar-link-background-hover: ${resolveSemanticColor('surfaceSecondary')}`);
  cssVars.push(`--navbar-link-text-active: ${resolveSemanticColor(tokens.componentColors.navbar.textHover)}`);
  cssVars.push(`--navbar-link-background-active: ${resolveSemanticColor('surfaceSecondary')}`);

  // Sidebar - expanded
  cssVars.push(`--sidebar-background: ${resolveSemanticColor(tokens.componentColors.sidebar.background)}`);
  cssVars.push(`--sidebar-border-color: ${resolveSemanticColor(tokens.componentColors.sidebar.border)}`);
  cssVars.push(`--sidebar-section-border-color: ${resolveSemanticColor(tokens.componentColors.sidebar.border)}`);
  cssVars.push(`--sidebar-section-title-color: ${resolveSemanticColor('contentSecondary')}`);
  cssVars.push(`--sidebar-item-text: ${resolveSemanticColor(tokens.componentColors.sidebar.text)}`);
  cssVars.push(`--sidebar-item-text-hover: ${resolveSemanticColor(tokens.componentColors.sidebar.textActive)}`);
  cssVars.push(`--sidebar-item-background-hover: ${resolveSemanticColor(tokens.componentColors.sidebar.itemHover)}`);
  cssVars.push(`--sidebar-item-text-active: ${resolveSemanticColor(tokens.componentColors.sidebar.textActive)}`);
  cssVars.push(`--sidebar-item-background-active: ${resolveSemanticColor(tokens.componentColors.sidebar.itemHover)}`);
  cssVars.push(`--sidebar-badge-text: ${resolveSemanticColor('onAccentPrimary')}`);
  cssVars.push(`--sidebar-badge-background: ${resolveSemanticColor('accentPrimary')}`);

  // Breadcrumb - expanded
  cssVars.push(`--breadcrumb-text-color: ${resolveSemanticColor(tokens.componentColors.breadcrumb.text)}`);
  cssVars.push(`--breadcrumb-link-hover: ${resolveSemanticColor(tokens.componentColors.breadcrumb.textActive)}`);
  cssVars.push(`--breadcrumb-current-color: ${resolveSemanticColor(tokens.componentColors.breadcrumb.textActive)}`);
  cssVars.push(`--breadcrumb-separator-color: ${resolveSemanticColor(tokens.componentColors.breadcrumb.separator)}`);

  // Platform UI uses semantic colors directly for real-time updates
  const platformBg = resolveSemanticColor('surfacePrimary');
  const platformSurface = resolveSemanticColor('surfaceSecondary');
  const platformBorder = resolveSemanticColor('border');
  const platformPrimary = resolveSemanticColor('accentPrimary');
  const platformAccent = resolveSemanticColor('action');
  const platformTextColor = getReadableTextColor(platformBg, resolveSemanticColor('contentPrimary'));
  const platformTextOnPrimaryColor = getReadableTextColor(platformPrimary, resolveSemanticColor('onAccentPrimary'));

  cssVars.push(`--platform-background: ${platformBg}`);
  cssVars.push(`--platform-surface: ${platformSurface}`);
  cssVars.push(`--platform-surface-elevated: ${resolveSemanticColor('surfaceTertiary')}`);
  cssVars.push(`--platform-surface-hover: color-mix(in srgb, ${platformSurface} 90%, ${platformBorder})`);
  cssVars.push(`--platform-text: ${platformTextColor}`);
  cssVars.push(`--platform-text-secondary: color-mix(in srgb, ${platformTextColor} 75%, ${platformBg})`);
  cssVars.push(`--platform-text-muted: color-mix(in srgb, ${platformTextColor} 60%, ${platformBg})`);
  cssVars.push(`--platform-text-on-primary: ${platformTextOnPrimaryColor}`);
  cssVars.push(`--platform-border: ${platformBorder}`);
  cssVars.push(`--platform-border-light: color-mix(in srgb, ${platformBorder} 70%, transparent)`);
  cssVars.push(`--platform-border-hover: color-mix(in srgb, ${platformBorder} 85%, ${platformTextColor})`);
  cssVars.push(`--platform-primary-solid: ${platformPrimary}`);
  cssVars.push(`--platform-primary: ${platformPrimary}`);
  cssVars.push(`--platform-primary-hover: color-mix(in srgb, ${platformPrimary} 90%, ${platformTextColor})`);
  cssVars.push(`--platform-accent: ${platformAccent}`);
  cssVars.push(`--platform-shadow-sm: var(--shadow-control)`);
  cssVars.push(`--platform-shadow-md: var(--shadow-surface)`);
  cssVars.push(`--platform-shadow-lg: var(--shadow-overlay)`);
  cssVars.push(`--platform-shadow-xl: var(--shadow-float)`);
  cssVars.push(`--platform-transition: var(--transition-fast)`);

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

  // Shadows - dynamically generated from shadowConfig
  const shadowColor = resolveSemanticColor('shadow');
  const highlightColor = tokens.effects.shadowHighlightColor;

  cssVars.push(`--shadow-none: none`);
  cssVars.push(`--shadow-control: ${generateShadowCSS(tokens.shadowConfig.control, shadowColor, highlightColor)}`);
  cssVars.push(`--shadow-surface: ${generateShadowCSS(tokens.shadowConfig.surface, shadowColor, highlightColor)}`);
  cssVars.push(`--shadow-overlay: ${generateShadowCSS(tokens.shadowConfig.overlay, shadowColor, highlightColor)}`);
  cssVars.push(`--shadow-float: ${generateShadowCSS(tokens.shadowConfig.float, shadowColor, highlightColor)}`);
  cssVars.push(`--shadow-inner: ${generateShadowCSS(tokens.shadowConfig.inner, shadowColor, highlightColor)}`);
  cssVars.push(`--shadow-glow: ${generateShadowCSS({ type: 'glow', offsetX: 0, offsetY: 0, blur: 10, spread: 2 }, resolveSemanticColor('accentPrimary'), highlightColor)}`);

  // Transitions
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    cssVars.push(`--transition-${key}: ${value}`);
  });

  // Effects
  cssVars.push(`--focus-ring-width: ${tokens.effects.focusRingWidth}`);
  cssVars.push(`--focus-ring-offset: ${tokens.effects.focusRingOffset}`);
  cssVars.push(`--focus-ring-color: ${tokens.effects.focusRingColor}`);
  cssVars.push(`--shadow-highlight-color: ${tokens.effects.shadowHighlightColor}`);
  cssVars.push(`--backdrop-blur: ${tokens.effects.backdropBlur}`);
  cssVars.push(`--backdrop-saturation: ${tokens.effects.backdropSaturation}`);
  cssVars.push(`--text-glow: ${tokens.effects.textGlow}`);
  cssVars.push(`--surface-opacity: ${tokens.effects.surfaceOpacity}`);

  // Patterns
  const patternColor = `color-mix(in srgb, var(--color-text) ${Math.round(tokens.patterns.background.opacity * 100)}%, transparent)`;
  const surfacePatternColor = `color-mix(in srgb, var(--color-text) ${Math.round(tokens.patterns.surface.opacity * 100)}%, transparent)`;

  const patternImage = (type: 'none' | 'dots' | 'grid' | 'plus' | 'noise', color: string) => {
    if (type === 'dots') {
      return `radial-gradient(circle, ${color} 1px, transparent 1px)`;
    }
    if (type === 'grid') {
      return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;
    }
    if (type === 'plus') {
      return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px), radial-gradient(circle, ${color} 1px, transparent 1px)`;
    }
    if (type === 'noise') {
      // Simple noise pattern using multiple gradients
      return `repeating-linear-gradient(45deg, ${color} 0px, transparent 1px, transparent 2px, ${color} 3px), repeating-linear-gradient(-45deg, ${color} 0px, transparent 1px, transparent 2px, ${color} 3px)`;
    }
    return 'none';
  };

  cssVars.push(`--pattern-background-image: ${patternImage(tokens.patterns.background.type, patternColor)}`);
  cssVars.push(`--pattern-background-size: ${tokens.patterns.background.size}px ${tokens.patterns.background.size}px`);
  cssVars.push(`--pattern-surface-image: ${patternImage(tokens.patterns.surface.type, surfacePatternColor)}`);
  cssVars.push(`--pattern-surface-size: ${tokens.patterns.surface.size}px ${tokens.patterns.surface.size}px`);

  // Gradients
  cssVars.push(`--gradient-surface: ${tokens.gradients.surface}`);
  cssVars.push(`--gradient-accent: ${tokens.gradients.accent}`);
  cssVars.push(`--gradient-primary: ${tokens.gradients.primary}`);

  // Components
  Object.entries(tokens.components).forEach(([component, props]) => {
    Object.entries(props).forEach(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();

      // Special handling for shadowEnabled - generate component shadow variable
      if (key === 'shadowEnabled') {
        cssVars.push(`--${component}-shadow: ${value ? 'var(--shadow-control)' : 'none'}`);
      }
      // Special handling for focus ring alpha - convert to color-mix
      else if (key === 'focusRingAlpha') {
        const percentage = Math.round((value as number) * 100);
        cssVars.push(`--${component}-focus-ring-color: color-mix(in srgb, var(--color-primary) ${percentage}%, transparent)`);
      } else if (key === 'elevatedBorderWidth') {
        const enabled = (tokens.components as DesignTokens['components']).card?.elevatedBorderEnabled;
        cssVars.push(`--card-elevated-border-width: ${enabled ? value : '0px'}`);
      }
      // Special handling for Toggle shadows - respect shadowEnabled
      else if (component === 'toggle' && (key === 'trackShadow' || key === 'thumbShadow')) {
        const shadowEnabled = (tokens.components as DesignTokens['components']).toggle?.shadowEnabled;
        cssVars.push(`--${component}-${cssKey}: ${shadowEnabled ? value : 'none'}`);
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
    () => buildGoogleFontsUrl([
      tokens.typography.fontFamily,
      tokens.typography.fontFamilyMono
    ]),
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

  // Apply data-theme attribute for dark mode
  useLayoutEffect(() => {
    const appRoot = document.querySelector('.app') as HTMLElement | null;
    const target = appRoot || document.documentElement;
    target.setAttribute('data-theme', themeMode);
  }, [themeMode]);

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

  const setComponentColor = useCallback((path: string[], value: string | number | boolean) => {
    dispatch({ type: 'SET_COMPONENT_COLOR', path, value });
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
    setComponentColor,
    resetTokens,
    loadPreset
  }), [tokens, themeMode, setToken, setCategory, setComponentColor, resetTokens, loadPreset]);

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
