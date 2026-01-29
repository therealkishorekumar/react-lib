// Legacy interface - kept for backwards compatibility during migration
export interface ThemeColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  textOnAccent: string;
  border: string;
}

// New semantic color system (27 colors)
export interface SemanticColors {
  // Surface (4) - backgrounds and layers
  surfacePrimary: string;
  surfaceSecondary: string;
  surfaceTertiary: string;
  surfaceQuaternary: string;

  // Content (3) - text hierarchy
  contentPrimary: string;
  contentSecondary: string;
  contentTertiary: string;

  // Accent (3) - primary brand/interactive
  accentPrimary: string;
  accentSecondary: string;
  accentTertiary: string;

  // On Accent (3) - text on colored backgrounds
  onAccentPrimary: string;
  onAccentSecondary: string;
  onAccentTertiary: string;

  // Status (4)
  success: string;
  fail: string;
  warning: string;
  info: string;

  // Action (3) - secondary interactive
  action: string;
  actionSecondary: string;
  actionTertiary: string;

  // Utility (2)
  shadow: string;
  border: string;

  // Brand (2)
  brandPrimary: string;
  brandSecondary: string;

  // Gradients (3) - store CSS strings directly
  gradientPrimary: string;
  gradientSecondary: string;
  gradientTertiary: string;
}

export type SemanticColorKey = keyof SemanticColors;

// Component color configurations - stores semantic color references (keys, not values)
export interface ComponentColorConfig {
  button: {
    primary: {
      background: SemanticColorKey;
      backgroundHover: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    secondary: {
      background: SemanticColorKey;
      backgroundHover: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    outline: {
      background: SemanticColorKey;
      backgroundHover: SemanticColorKey;
      text: SemanticColorKey;
      textHover: SemanticColorKey;
      border: SemanticColorKey;
      borderHover: SemanticColorKey;
    };
    ghost: {
      background: SemanticColorKey;
      backgroundHover: SemanticColorKey;
      text: SemanticColorKey;
      textHover: SemanticColorKey;
    };
    danger: {
      background: SemanticColorKey;
      backgroundHover: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
  };
  input: {
    background: SemanticColorKey;
    text: SemanticColorKey;
    placeholder: SemanticColorKey;
    border: SemanticColorKey;
    borderHover: SemanticColorKey;
    borderFocus: SemanticColorKey;
    borderError: SemanticColorKey;
  };
  card: {
    background: SemanticColorKey;
    backgroundElevated: SemanticColorKey;
    text: SemanticColorKey;
    textMuted: SemanticColorKey;
    border: SemanticColorKey;
  };
  alert: {
    info: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    success: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    warning: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    error: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
  };
  badge: {
    primary: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    secondary: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    success: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    warning: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
    error: {
      background: SemanticColorKey;
      text: SemanticColorKey;
      border: SemanticColorKey;
    };
  };
  checkbox: {
    background: SemanticColorKey;
    backgroundChecked: SemanticColorKey;
    border: SemanticColorKey;
    borderChecked: SemanticColorKey;
    checkmark: SemanticColorKey;
  };
  radio: {
    background: SemanticColorKey;
    backgroundChecked: SemanticColorKey;
    border: SemanticColorKey;
    borderChecked: SemanticColorKey;
    dot: SemanticColorKey;
  };
  toggle: {
    trackBackground: SemanticColorKey;
    trackBackgroundActive: SemanticColorKey;
    thumb: SemanticColorKey;
    thumbBorder: SemanticColorKey;
  };
  select: {
    background: SemanticColorKey;
    text: SemanticColorKey;
    border: SemanticColorKey;
    borderHover: SemanticColorKey;
    borderFocus: SemanticColorKey;
  };
  dropdown: {
    background: SemanticColorKey;
    itemHover: SemanticColorKey;
    text: SemanticColorKey;
    border: SemanticColorKey;
  };
  tabs: {
    background: SemanticColorKey;
    text: SemanticColorKey;
    textActive: SemanticColorKey;
    indicator: SemanticColorKey;
    border: SemanticColorKey;
  };
  accordion: {
    background: SemanticColorKey;
    backgroundHover: SemanticColorKey;
    text: SemanticColorKey;
    border: SemanticColorKey;
  };
  modal: {
    background: SemanticColorKey;
    backdrop: SemanticColorKey;
    text: SemanticColorKey;
    border: SemanticColorKey;
  };
  tooltip: {
    background: SemanticColorKey;
    text: SemanticColorKey;
    border: SemanticColorKey;
  };
  progress: {
    track: SemanticColorKey;
    fill: SemanticColorKey;
    text: SemanticColorKey;
  };
  avatar: {
    background: SemanticColorKey;
    text: SemanticColorKey;
    border: SemanticColorKey;
  };
  table: {
    background: SemanticColorKey;
    headerBackground: SemanticColorKey;
    headerText: SemanticColorKey;
    rowHover: SemanticColorKey;
    text: SemanticColorKey;
    border: SemanticColorKey;
  };
  navbar: {
    background: SemanticColorKey;
    text: SemanticColorKey;
    textHover: SemanticColorKey;
    border: SemanticColorKey;
  };
  sidebar: {
    background: SemanticColorKey;
    text: SemanticColorKey;
    textActive: SemanticColorKey;
    itemHover: SemanticColorKey;
    border: SemanticColorKey;
  };
  breadcrumb: {
    text: SemanticColorKey;
    textActive: SemanticColorKey;
    separator: SemanticColorKey;
  };
}

export interface DesignTokens {
  // Legacy color system (kept for backwards compatibility)
  lightTheme: ThemeColors;
  darkTheme: ThemeColors;
  // New semantic color system
  semanticLight: SemanticColors;
  semanticDark: SemanticColors;
  componentColors: ComponentColorConfig;
  typography: {
    fontFamily: string;
    fontFamilyMono: string;
    fontFamilySerif: string;
    fontFamilyDisplay: string;
    fontSizeXs: string;
    fontSizeSm: string;
    fontSizeMd: string;
    fontSizeLg: string;
    fontSizeXl: string;
    fontWeightNormal: number;
    fontWeightMedium: number;
    fontWeightSemibold: number;
    fontWeightBold: number;
    lineHeightTight: number;
    lineHeightNormal: number;
    lineHeightRelaxed: number;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  borderRadius: {
    none: string;
    control: string;
    surface: string;
    overlay: string;
    full: string;
  };
  shadows: {
    none: string;
    control: string;
    surface: string;
    overlay: string;
    float: string;
    inner: string;
    glow: string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  effects: {
    focusRingWidth: string;
    focusRingOffset: string;
    focusRingColor: string;
    shadowColor: string;
    backdropBlur: string;
    backdropSaturation: string;
    textGlow: string;
    surfaceOpacity: number;
  };
  patterns: {
    background: {
      type: 'none' | 'dots' | 'grid' | 'plus' | 'noise';
      opacity: number;
      size: number;
    };
    surface: {
      type: 'none' | 'dots' | 'grid' | 'plus' | 'noise';
      opacity: number;
      size: number;
    };
  };
  gradients: {
    surface: string;
    accent: string;
    primary: string;
  };
  components: {
    button: {
      borderWidth: string;
      innerShadow: string;
      textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
      letterSpacing: string;
      glowEffect: string;
      gradient: string;
    };
    input: {
      borderWidth: string;
      focusRingWidth: string;
      focusRingAlpha: number;
      innerShadow: string;
      glowOnFocus: string;
    };
    avatar: {
      borderWidth: string;
      borderColor: string;
    };
    checkbox: {
      borderRadius: string;
      borderWidth: string;
      size: string;
    };
    radio: {
      borderWidth: string;
      size: string;
      dotSize: string;
    };
    toggle: {
      trackHeight: string;
      thumbSize: string;
      borderWidth: string;
      trackShadow: string;
      thumbBorderWidth: string;
      thumbShadow: string;
    };
    badge: {
      textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
      letterSpacing: string;
      borderWidth: string;
    };
    card: {
      borderWidth: string;
      elevatedBorderWidth: string;
      elevatedBorderEnabled: boolean;
      headerBorderWidth: string;
      backdropBlur: string;
      surfaceOpacity: number;
      innerShadow: string;
    };
    alert: {
      iconSize: string;
      borderWidth: string;
    };
    tabs: {
      indicatorHeight: string;
      indicatorStyle: 'underline' | 'pill' | 'enclosed';
      borderWidth: string;
    };
    progress: {
      trackHeight: string;
      borderRadius: string;
    };
    modal: {
      backdropOpacity: string;
      backdropBlur: string;
      borderWidth: string;
      backdropColor: string;
    };
    select: {
      borderWidth: string;
    };
    dropdown: {
      borderWidth: string;
    };
    accordion: {
      borderWidth: string;
    };
    navbar: {
      borderWidth: string;
    };
    sidebar: {
      borderWidth: string;
    };
    table: {
      borderWidth: string;
      headerBorderWidth: string;
    };
  };
}

// Default semantic color mappings
const defaultSemanticLight: SemanticColors = {
  // Surface (4)
  surfacePrimary: '#ffffff',
  surfaceSecondary: '#f9fafb',
  surfaceTertiary: '#f3f4f6',
  surfaceQuaternary: '#e5e7eb',
  // Content (3)
  contentPrimary: '#111827',
  contentSecondary: '#4b5563',
  contentTertiary: '#9ca3af',
  // Accent (3)
  accentPrimary: '#3b82f6',
  accentSecondary: '#2563eb',
  accentTertiary: '#1d4ed8',
  // On Accent (3)
  onAccentPrimary: '#ffffff',
  onAccentSecondary: '#ffffff',
  onAccentTertiary: '#ffffff',
  // Status (4)
  success: '#22c55e',
  fail: '#ef4444',
  warning: '#f59e0b',
  info: '#06b6d4',
  // Action (3)
  action: '#6b7280',
  actionSecondary: '#4b5563',
  actionTertiary: '#374151',
  // Utility (2)
  shadow: 'rgb(0 0 0 / 0.2)',
  border: '#e5e7eb',
  // Brand (2)
  brandPrimary: '#3b82f6',
  brandSecondary: '#6366f1',
  // Gradients (3)
  gradientPrimary: 'none',
  gradientSecondary: 'none',
  gradientTertiary: 'none',
};

const defaultSemanticDark: SemanticColors = {
  // Surface (4)
  surfacePrimary: '#0f172a',
  surfaceSecondary: '#1e293b',
  surfaceTertiary: '#334155',
  surfaceQuaternary: '#475569',
  // Content (3)
  contentPrimary: '#f1f5f9',
  contentSecondary: '#cbd5e1',
  contentTertiary: '#94a3b8',
  // Accent (3)
  accentPrimary: '#6366f1',
  accentSecondary: '#4f46e5',
  accentTertiary: '#4338ca',
  // On Accent (3)
  onAccentPrimary: '#0b0b0b',
  onAccentSecondary: '#0b0b0b',
  onAccentTertiary: '#ffffff',
  // Status (4)
  success: '#22c55e',
  fail: '#ef4444',
  warning: '#f59e0b',
  info: '#22d3ee',
  // Action (3)
  action: '#94a3b8',
  actionSecondary: '#64748b',
  actionTertiary: '#475569',
  // Utility (2)
  shadow: 'rgb(0 0 0 / 0.4)',
  border: '#334155',
  // Brand (2)
  brandPrimary: '#6366f1',
  brandSecondary: '#8b5cf6',
  // Gradients (3)
  gradientPrimary: 'none',
  gradientSecondary: 'none',
  gradientTertiary: 'none',
};

// Default component color mappings - smart defaults
const defaultComponentColors: ComponentColorConfig = {
  button: {
    primary: {
      background: 'accentPrimary',
      backgroundHover: 'accentSecondary',
      text: 'onAccentPrimary',
      border: 'accentPrimary',
    },
    secondary: {
      background: 'action',
      backgroundHover: 'actionSecondary',
      text: 'onAccentPrimary',
      border: 'action',
    },
    outline: {
      background: 'surfacePrimary',
      backgroundHover: 'surfaceSecondary',
      text: 'contentPrimary',
      textHover: 'accentPrimary',
      border: 'border',
      borderHover: 'accentPrimary',
    },
    ghost: {
      background: 'surfacePrimary',
      backgroundHover: 'surfaceSecondary',
      text: 'contentPrimary',
      textHover: 'accentPrimary',
    },
    danger: {
      background: 'fail',
      backgroundHover: 'fail',
      text: 'onAccentPrimary',
      border: 'fail',
    },
  },
  input: {
    background: 'surfacePrimary',
    text: 'contentPrimary',
    placeholder: 'contentTertiary',
    border: 'border',
    borderHover: 'action',
    borderFocus: 'accentPrimary',
    borderError: 'fail',
  },
  card: {
    background: 'surfaceSecondary',
    backgroundElevated: 'surfaceTertiary',
    text: 'contentPrimary',
    textMuted: 'contentSecondary',
    border: 'border',
  },
  alert: {
    info: {
      background: 'accentTertiary',
      text: 'onAccentPrimary',
      border: 'accentPrimary',
    },
    success: {
      background: 'success',
      text: 'onAccentPrimary',
      border: 'success',
    },
    warning: {
      background: 'warning',
      text: 'onAccentPrimary',
      border: 'warning',
    },
    error: {
      background: 'fail',
      text: 'onAccentPrimary',
      border: 'fail',
    },
  },
  badge: {
    primary: {
      background: 'accentPrimary',
      text: 'onAccentPrimary',
      border: 'accentPrimary',
    },
    secondary: {
      background: 'action',
      text: 'onAccentPrimary',
      border: 'action',
    },
    success: {
      background: 'success',
      text: 'onAccentPrimary',
      border: 'success',
    },
    warning: {
      background: 'warning',
      text: 'onAccentPrimary',
      border: 'warning',
    },
    error: {
      background: 'fail',
      text: 'onAccentPrimary',
      border: 'fail',
    },
  },
  checkbox: {
    background: 'surfacePrimary',
    backgroundChecked: 'accentPrimary',
    border: 'border',
    borderChecked: 'accentPrimary',
    checkmark: 'onAccentPrimary',
  },
  radio: {
    background: 'surfacePrimary',
    backgroundChecked: 'accentPrimary',
    border: 'border',
    borderChecked: 'accentPrimary',
    dot: 'onAccentPrimary',
  },
  toggle: {
    trackBackground: 'surfaceTertiary',
    trackBackgroundActive: 'accentPrimary',
    thumb: 'surfacePrimary',
    thumbBorder: 'border',
  },
  select: {
    background: 'surfacePrimary',
    text: 'contentPrimary',
    border: 'border',
    borderHover: 'action',
    borderFocus: 'accentPrimary',
  },
  dropdown: {
    background: 'surfacePrimary',
    itemHover: 'surfaceSecondary',
    text: 'contentPrimary',
    border: 'border',
  },
  tabs: {
    background: 'surfacePrimary',
    text: 'contentSecondary',
    textActive: 'contentPrimary',
    indicator: 'accentPrimary',
    border: 'border',
  },
  accordion: {
    background: 'surfacePrimary',
    backgroundHover: 'surfaceSecondary',
    text: 'contentPrimary',
    border: 'border',
  },
  modal: {
    background: 'surfacePrimary',
    backdrop: 'shadow',
    text: 'contentPrimary',
    border: 'border',
  },
  tooltip: {
    background: 'contentPrimary',
    text: 'surfacePrimary',
    border: 'contentPrimary',
  },
  progress: {
    track: 'surfaceSecondary',
    fill: 'accentPrimary',
    text: 'contentPrimary',
  },
  avatar: {
    background: 'surfaceSecondary',
    text: 'contentPrimary',
    border: 'border',
  },
  table: {
    background: 'surfacePrimary',
    headerBackground: 'surfaceSecondary',
    headerText: 'contentPrimary',
    rowHover: 'surfaceSecondary',
    text: 'contentPrimary',
    border: 'border',
  },
  navbar: {
    background: 'surfacePrimary',
    text: 'contentPrimary',
    textHover: 'accentPrimary',
    border: 'border',
  },
  sidebar: {
    background: 'surfacePrimary',
    text: 'contentSecondary',
    textActive: 'accentPrimary',
    itemHover: 'surfaceSecondary',
    border: 'border',
  },
  breadcrumb: {
    text: 'contentSecondary',
    textActive: 'contentPrimary',
    separator: 'contentTertiary',
  },
};

export const defaultTokens: DesignTokens = {
  // Legacy color system
  lightTheme: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    secondary: '#6b7280',
    secondaryHover: '#4b5563',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textMuted: '#6b7280',
    textOnAccent: '#ffffff',
    border: '#e5e7eb',
  },
  darkTheme: {
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    secondary: '#94a3b8',
    secondaryHover: '#64748b',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#22d3ee',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    textOnAccent: '#0b0b0b',
    border: '#334155',
  },
  // New semantic color system
  semanticLight: defaultSemanticLight,
  semanticDark: defaultSemanticDark,
  componentColors: defaultComponentColors,
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontFamilyMono: 'JetBrains Mono, monospace',
    fontFamilySerif: 'Merriweather, Georgia, serif',
    fontFamilyDisplay: 'Playfair Display, serif',
    fontSizeXs: '0.75rem',
    fontSizeSm: '0.875rem',
    fontSizeMd: '1rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    lineHeightTight: 1.25,
    lineHeightNormal: 1.5,
    lineHeightRelaxed: 1.75,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    none: '0',
    control: '6px',
    surface: '10px',
    overlay: '14px',
    full: '999px',
  },
  shadows: {
    none: 'none',
    control: '0 1px 2px 0 color-mix(in srgb, var(--shadow-color) 30%, transparent)',
    surface: '0 4px 6px -1px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--shadow-color) 40%, transparent)',
    overlay: '0 10px 15px -3px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--shadow-color) 40%, transparent)',
    float: '0 20px 25px -5px color-mix(in srgb, var(--shadow-color) 45%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--shadow-color) 40%, transparent)',
    inner: 'inset 2px 2px 4px color-mix(in srgb, var(--shadow-color) 20%, transparent)',
    glow: '0 0 10px 2px color-mix(in srgb, var(--color-primary) 50%, transparent)',
  },
  transitions: {
    fast: '150ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
  },
  effects: {
    focusRingWidth: '2px',
    focusRingOffset: '2px',
    focusRingColor: '#3b82f6',
    shadowColor: 'rgb(0 0 0 / 0.2)',
    backdropBlur: '0px',
    backdropSaturation: '100%',
    textGlow: 'none',
    surfaceOpacity: 1,
  },
  patterns: {
    background: {
      type: 'none',
      opacity: 0.08,
      size: 16,
    },
    surface: {
      type: 'none',
      opacity: 0.06,
      size: 14,
    },
  },
  gradients: {
    surface: 'none',
    accent: 'none',
    primary: 'none',
  },
  components: {
    button: {
      borderWidth: '1px',
      innerShadow: 'none',
      textTransform: 'none',
      letterSpacing: 'normal',
      glowEffect: 'none',
      gradient: 'none',
    },
    input: {
      borderWidth: '1px',
      focusRingWidth: '3px',
      focusRingAlpha: 0.2,
      innerShadow: 'none',
      glowOnFocus: 'none',
    },
    avatar: {
      borderWidth: '0px',
      borderColor: 'var(--color-border)',
    },
    checkbox: {
      borderRadius: 'var(--radius-control)',
      borderWidth: '2px',
      size: '18px',
    },
    radio: {
      borderWidth: '2px',
      size: '18px',
      dotSize: '8px',
    },
    toggle: {
      trackHeight: '22px',
      thumbSize: '18px',
      borderWidth: '0px',
      trackShadow: 'none',
      thumbBorderWidth: '0px',
      thumbShadow: 'none',
    },
    badge: {
      textTransform: 'none',
      letterSpacing: 'normal',
      borderWidth: '0px',
    },
    card: {
      borderWidth: '1px',
      elevatedBorderWidth: '1px',
      elevatedBorderEnabled: false,
      headerBorderWidth: '1px',
      backdropBlur: '0px',
      surfaceOpacity: 1,
      innerShadow: 'none',
    },
    alert: {
      iconSize: '20px',
      borderWidth: '1px',
    },
    tabs: {
      indicatorHeight: '2px',
      indicatorStyle: 'underline',
      borderWidth: '1px',
    },
    progress: {
      trackHeight: '8px',
      borderRadius: 'var(--radius-full)',
    },
    modal: {
      backdropOpacity: '0.5',
      backdropBlur: '0px',
      borderWidth: '0px',
      backdropColor: 'var(--color-text)',
    },
    select: {
      borderWidth: '1px',
    },
    dropdown: {
      borderWidth: '1px',
    },
    accordion: {
      borderWidth: '1px',
    },
    navbar: {
      borderWidth: '1px',
    },
    sidebar: {
      borderWidth: '1px',
    },
    table: {
      borderWidth: '1px',
      headerBorderWidth: '2px',
    },
  },
};

export type TokenCategory = keyof DesignTokens;
export type TokenKey<T extends TokenCategory> = keyof DesignTokens[T];
