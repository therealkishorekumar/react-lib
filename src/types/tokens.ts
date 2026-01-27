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

export interface DesignTokens {
  lightTheme: ThemeColors;
  darkTheme: ThemeColors;
  typography: {
    fontFamily: string;
    fontFamilyMono: string;
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
  };
  patterns: {
    background: {
      type: 'none' | 'dots' | 'grid' | 'plus';
      opacity: number;
      size: number;
    };
    surface: {
      type: 'none' | 'dots' | 'grid' | 'plus';
      opacity: number;
      size: number;
    };
  };
  components: {
    button: {
      borderWidth: string;
      innerShadow: string;
      textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
      letterSpacing: string;
    };
    input: {
      borderWidth: string;
      focusRingWidth: string;
      focusRingAlpha: number;
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
    };
    alert: {
      iconSize: string;
      borderWidth: string;
    };
    tabs: {
      indicatorHeight: string;
      indicatorStyle: 'underline' | 'pill' | 'enclosed';
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
  };
}

export const defaultTokens: DesignTokens = {
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
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontFamilyMono: 'JetBrains Mono, monospace',
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
  components: {
    button: {
      borderWidth: '1px',
      innerShadow: 'none',
      textTransform: 'none',
      letterSpacing: 'normal',
    },
    input: {
      borderWidth: '1px',
      focusRingWidth: '3px',
      focusRingAlpha: 0.2,
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
      trackShadow: 'var(--shadow-control)',
      thumbBorderWidth: '0px',
      thumbShadow: 'var(--shadow-control)',
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
    },
    alert: {
      iconSize: '20px',
      borderWidth: '1px',
    },
    tabs: {
      indicatorHeight: '2px',
      indicatorStyle: 'underline',
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
  },
};

export type TokenCategory = keyof DesignTokens;
export type TokenKey<T extends TokenCategory> = keyof DesignTokens[T];
