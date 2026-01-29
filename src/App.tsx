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

// Theme presets - Each preset demonstrates a distinct design style
const presets: Record<string, DesignTokens> = {
  default: defaultTokens,

  // NEOBRUTALISM - Bold colors, thick borders, flat offset shadows
  neobrutalism: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#f59e0b',
      secondaryHover: '#d97706',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#06b6d4',
      background: '#ffffff',
      surface: '#fef3c7',
      text: '#0a0a0a',
      textMuted: '#525252',
      textOnAccent: '#ffffff',
      border: '#0a0a0a',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#60a5fa',
      primaryHover: '#3b82f6',
      secondary: '#fbbf24',
      secondaryHover: '#f59e0b',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff',
      textMuted: '#a3a3a3',
      border: '#ffffff',
    },
    semanticLight: {
      // Surface (4)
      surfacePrimary: '#ffffff',
      surfaceSecondary: '#fef3c7',
      surfaceTertiary: '#fde68a',
      surfaceQuaternary: '#fcd34d',
      // Content (3)
      contentPrimary: '#0a0a0a',
      contentSecondary: '#525252',
      contentTertiary: '#737373',
      // Accent (3)
      accentPrimary: '#3b82f6',
      accentSecondary: '#2563eb',
      accentTertiary: '#1d4ed8',
      // On Accent (3)
      onAccentPrimary: '#ffffff',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#f59e0b',
      info: '#06b6d4',
      // Action (3)
      action: '#f59e0b',
      actionSecondary: '#d97706',
      actionTertiary: '#b45309',
      // Utility (2)
      shadow: '#0a0a0a',
      border: '#0a0a0a',
      // Brand (2)
      brandPrimary: '#3b82f6',
      brandSecondary: '#f59e0b',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    semanticDark: {
      // Surface (4)
      surfacePrimary: '#0a0a0a',
      surfaceSecondary: '#1a1a1a',
      surfaceTertiary: '#2a2a2a',
      surfaceQuaternary: '#3a3a3a',
      // Content (3)
      contentPrimary: '#ffffff',
      contentSecondary: '#a3a3a3',
      contentTertiary: '#737373',
      // Accent (3)
      accentPrimary: '#60a5fa',
      accentSecondary: '#3b82f6',
      accentTertiary: '#2563eb',
      // On Accent (3)
      onAccentPrimary: '#0a0a0a',
      onAccentSecondary: '#0a0a0a',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#fbbf24',
      info: '#06b6d4',
      // Action (3)
      action: '#fbbf24',
      actionSecondary: '#f59e0b',
      actionTertiary: '#d97706',
      // Utility (2)
      shadow: '#000000',
      border: '#ffffff',
      // Brand (2)
      brandPrimary: '#60a5fa',
      brandSecondary: '#fbbf24',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    componentColors: defaultTokens.componentColors,
    borderRadius: {
      none: '0',
      control: '4px',
      surface: '8px',
      overlay: '8px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '4px 4px 0 0 #0a0a0a',
      surface: '6px 6px 0 0 #0a0a0a',
      overlay: '8px 8px 0 0 #0a0a0a',
      float: '10px 10px 0 0 #0a0a0a',
      inner: 'none',
      glow: 'none',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: '#0a0a0a',
      focusRingWidth: '3px',
      focusRingOffset: '2px',
      backdropBlur: '0px',
      backdropSaturation: '100%',
      textGlow: 'none',
      surfaceOpacity: 1,
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '3px',
        innerShadow: '5px 5px 0 0 rgba(0,0,0,0.25)',
        glowEffect: 'none',
        gradient: 'none',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '3px',
        focusRingWidth: '3px',
        focusRingAlpha: 0.3,
        innerShadow: 'none',
        glowOnFocus: 'none',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '3px',
        elevatedBorderWidth: '3px',
        elevatedBorderEnabled: true,
        backdropBlur: '0px',
        surfaceOpacity: 1,
        innerShadow: 'none',
      },
    },
  },

  // NEOSKEUOMORPHISM - Soft shadows, monochromatic, subtle depth
  neoskeuomorphism: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#6366f1',
      primaryHover: '#4f46e5',
      secondary: '#8b5cf6',
      secondaryHover: '#7c3aed',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#06b6d4',
      background: '#e0e5ec',
      surface: '#e0e5ec',
      text: '#2d3748',
      textMuted: '#718096',
      textOnAccent: '#ffffff',
      border: '#cbd5e0',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#818cf8',
      primaryHover: '#6366f1',
      secondary: '#a78bfa',
      secondaryHover: '#8b5cf6',
      background: '#1e293b',
      surface: '#1e293b',
      text: '#e2e8f0',
      textMuted: '#94a3b8',
      border: '#334155',
    },
    semanticLight: {
      // Surface (4)
      surfacePrimary: '#e0e5ec',
      surfaceSecondary: '#d9dfe8',
      surfaceTertiary: '#cbd5e0',
      surfaceQuaternary: '#b8c2d0',
      // Content (3)
      contentPrimary: '#2d3748',
      contentSecondary: '#4a5568',
      contentTertiary: '#718096',
      // Accent (3)
      accentPrimary: '#6366f1',
      accentSecondary: '#4f46e5',
      accentTertiary: '#4338ca',
      // On Accent (3)
      onAccentPrimary: '#ffffff',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#f59e0b',
      info: '#06b6d4',
      // Action (3)
      action: '#8b5cf6',
      actionSecondary: '#7c3aed',
      actionTertiary: '#6d28d9',
      // Utility (2)
      shadow: 'rgba(163, 177, 198, 0.6)',
      border: '#cbd5e0',
      // Brand (2)
      brandPrimary: '#6366f1',
      brandSecondary: '#8b5cf6',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(145deg, #e6ebf2, #d9dfe8)',
      gradientSecondary: 'linear-gradient(145deg, #6366f1, #4f46e5)',
      gradientTertiary: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
    },
    semanticDark: {
      // Surface (4)
      surfacePrimary: '#1e293b',
      surfaceSecondary: '#283548',
      surfaceTertiary: '#334155',
      surfaceQuaternary: '#475569',
      // Content (3)
      contentPrimary: '#e2e8f0',
      contentSecondary: '#cbd5e1',
      contentTertiary: '#94a3b8',
      // Accent (3)
      accentPrimary: '#818cf8',
      accentSecondary: '#6366f1',
      accentTertiary: '#4f46e5',
      // On Accent (3)
      onAccentPrimary: '#0a0a0a',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#f59e0b',
      info: '#06b6d4',
      // Action (3)
      action: '#a78bfa',
      actionSecondary: '#8b5cf6',
      actionTertiary: '#7c3aed',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.6)',
      border: '#334155',
      // Brand (2)
      brandPrimary: '#818cf8',
      brandSecondary: '#a78bfa',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(145deg, #283548, #1e293b)',
      gradientSecondary: 'linear-gradient(145deg, #818cf8, #6366f1)',
      gradientTertiary: 'linear-gradient(145deg, #a78bfa, #8b5cf6)',
    },
    componentColors: defaultTokens.componentColors,
    borderRadius: {
      none: '0',
      control: '12px',
      surface: '16px',
      overlay: '20px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '4px 4px 8px rgba(163, 177, 198, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.5)',
      surface: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5)',
      overlay: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.5)',
      float: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.5)',
      inner: 'inset 3px 3px 6px rgba(163, 177, 198, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.4)',
      glow: 'none',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: 'rgba(163, 177, 198, 0.6)',
      backdropBlur: '0px',
      backdropSaturation: '100%',
      textGlow: 'none',
      surfaceOpacity: 1,
    },
    gradients: {
      surface: 'linear-gradient(145deg, #e6ebf2, #d9dfe8)',
      accent: 'linear-gradient(145deg, #6366f1, #4f46e5)',
      primary: 'linear-gradient(145deg, #6366f1, #4f46e5)',
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '0px',
        innerShadow: 'inset 2px 2px 4px rgba(163, 177, 198, 0.3)',
        glowEffect: 'none',
        gradient: 'linear-gradient(145deg, #e6ebf2, #d9dfe8)',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '0px',
        focusRingWidth: '0px',
        focusRingAlpha: 0,
        innerShadow: 'inset 3px 3px 6px rgba(163, 177, 198, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.4)',
        glowOnFocus: 'none',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '0px',
        elevatedBorderWidth: '0px',
        elevatedBorderEnabled: false,
        backdropBlur: '0px',
        surfaceOpacity: 1,
        innerShadow: 'none',
      },
      toggle: {
        ...defaultTokens.components.toggle,
        trackShadow: 'inset 2px 2px 4px rgba(163, 177, 198, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.4)',
        thumbShadow: '2px 2px 4px rgba(163, 177, 198, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)',
      },
    },
  },

  // GLASSMORPHISM - Translucent, blurred backgrounds, light borders
  glassmorphism: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#8b5cf6',
      primaryHover: '#7c3aed',
      secondary: '#06b6d4',
      secondaryHover: '#0891b2',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#06b6d4',
      background: '#f0f4f8',
      surface: 'rgba(255, 255, 255, 0.25)',
      text: '#1e293b',
      textMuted: '#64748b',
      textOnAccent: '#ffffff',
      border: 'rgba(255, 255, 255, 0.5)',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#a78bfa',
      primaryHover: '#8b5cf6',
      secondary: '#22d3ee',
      secondaryHover: '#06b6d4',
      background: '#0f172a',
      surface: 'rgba(30, 41, 59, 0.4)',
      text: '#f1f5f9',
      textMuted: '#94a3b8',
      border: 'rgba(148, 163, 184, 0.3)',
    },
    semanticLight: {
      // Surface (4)
      surfacePrimary: 'rgba(255, 255, 255, 0.25)',
      surfaceSecondary: 'rgba(255, 255, 255, 0.35)',
      surfaceTertiary: 'rgba(255, 255, 255, 0.45)',
      surfaceQuaternary: 'rgba(255, 255, 255, 0.55)',
      // Content (3)
      contentPrimary: '#1e293b',
      contentSecondary: '#475569',
      contentTertiary: '#64748b',
      // Accent (3)
      accentPrimary: '#8b5cf6',
      accentSecondary: '#7c3aed',
      accentTertiary: '#6d28d9',
      // On Accent (3)
      onAccentPrimary: '#ffffff',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#f59e0b',
      info: '#06b6d4',
      // Action (3)
      action: '#06b6d4',
      actionSecondary: '#0891b2',
      actionTertiary: '#0e7490',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.1)',
      border: 'rgba(255, 255, 255, 0.5)',
      // Brand (2)
      brandPrimary: '#8b5cf6',
      brandSecondary: '#06b6d4',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.3))',
      gradientSecondary: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(8, 145, 178, 0.3))',
      gradientTertiary: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
    },
    semanticDark: {
      // Surface (4)
      surfacePrimary: 'rgba(30, 41, 59, 0.4)',
      surfaceSecondary: 'rgba(30, 41, 59, 0.5)',
      surfaceTertiary: 'rgba(30, 41, 59, 0.6)',
      surfaceQuaternary: 'rgba(30, 41, 59, 0.7)',
      // Content (3)
      contentPrimary: '#f1f5f9',
      contentSecondary: '#cbd5e1',
      contentTertiary: '#94a3b8',
      // Accent (3)
      accentPrimary: '#a78bfa',
      accentSecondary: '#8b5cf6',
      accentTertiary: '#7c3aed',
      // On Accent (3)
      onAccentPrimary: '#0a0a0a',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#f59e0b',
      info: '#22d3ee',
      // Action (3)
      action: '#22d3ee',
      actionSecondary: '#06b6d4',
      actionTertiary: '#0891b2',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.3)',
      border: 'rgba(148, 163, 184, 0.3)',
      // Brand (2)
      brandPrimary: '#a78bfa',
      brandSecondary: '#22d3ee',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(139, 92, 246, 0.3))',
      gradientSecondary: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(6, 182, 212, 0.3))',
      gradientTertiary: 'linear-gradient(135deg, rgba(30, 41, 59, 0.3), rgba(30, 41, 59, 0.1))',
    },
    componentColors: defaultTokens.componentColors,
    borderRadius: {
      none: '0',
      control: '12px',
      surface: '16px',
      overlay: '20px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '0 4px 6px rgba(0, 0, 0, 0.1)',
      surface: '0 8px 16px rgba(0, 0, 0, 0.15)',
      overlay: '0 20px 25px rgba(0, 0, 0, 0.2)',
      float: '0 25px 50px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
      glow: 'none',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      backdropBlur: '12px',
      backdropSaturation: '180%',
      textGlow: 'none',
      surfaceOpacity: 0.25,
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '1px',
        innerShadow: 'none',
        glowEffect: 'none',
        gradient: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '1px',
        focusRingWidth: '2px',
        focusRingAlpha: 0.3,
        innerShadow: 'none',
        glowOnFocus: 'none',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '1px',
        elevatedBorderWidth: '1px',
        elevatedBorderEnabled: true,
        backdropBlur: '12px',
        surfaceOpacity: 0.25,
        innerShadow: 'none',
      },
    },
  },

  // CLAYMORPHISM - Soft, rounded, matte finish with inner shadows
  claymorphism: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#ec4899',
      primaryHover: '#db2777',
      secondary: '#f59e0b',
      secondaryHover: '#d97706',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#06b6d4',
      background: '#fef5f0',
      surface: '#ffe5d9',
      text: '#4a2c2a',
      textMuted: '#92716f',
      textOnAccent: '#ffffff',
      border: '#f0d0c5',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#f472b6',
      primaryHover: '#ec4899',
      secondary: '#fbbf24',
      secondaryHover: '#f59e0b',
      background: '#2a1f1e',
      surface: '#3d302e',
      text: '#f5e8e5',
      textMuted: '#c7b8b6',
      border: '#6b5654',
    },
    semanticLight: {
      // Surface (4)
      surfacePrimary: '#fef5f0',
      surfaceSecondary: '#ffe5d9',
      surfaceTertiary: '#ffd5c2',
      surfaceQuaternary: '#ffc5ab',
      // Content (3)
      contentPrimary: '#4a2c2a',
      contentSecondary: '#6b4a48',
      contentTertiary: '#92716f',
      // Accent (3)
      accentPrimary: '#ec4899',
      accentSecondary: '#db2777',
      accentTertiary: '#be185d',
      // On Accent (3)
      onAccentPrimary: '#ffffff',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#f59e0b',
      info: '#06b6d4',
      // Action (3)
      action: '#f59e0b',
      actionSecondary: '#d97706',
      actionTertiary: '#b45309',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.12)',
      border: '#f0d0c5',
      // Brand (2)
      brandPrimary: '#ec4899',
      brandSecondary: '#f59e0b',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(135deg, #ec4899, #db2777)',
      gradientSecondary: 'linear-gradient(135deg, #f59e0b, #d97706)',
      gradientTertiary: 'linear-gradient(135deg, #ffe5d9, #ffd5c2)',
    },
    semanticDark: {
      // Surface (4)
      surfacePrimary: '#2a1f1e',
      surfaceSecondary: '#3d302e',
      surfaceTertiary: '#50413f',
      surfaceQuaternary: '#6b5654',
      // Content (3)
      contentPrimary: '#f5e8e5',
      contentSecondary: '#e0d0ce',
      contentTertiary: '#c7b8b6',
      // Accent (3)
      accentPrimary: '#f472b6',
      accentSecondary: '#ec4899',
      accentTertiary: '#db2777',
      // On Accent (3)
      onAccentPrimary: '#0a0a0a',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#10b981',
      fail: '#ef4444',
      warning: '#fbbf24',
      info: '#06b6d4',
      // Action (3)
      action: '#fbbf24',
      actionSecondary: '#f59e0b',
      actionTertiary: '#d97706',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.3)',
      border: '#6b5654',
      // Brand (2)
      brandPrimary: '#f472b6',
      brandSecondary: '#fbbf24',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(135deg, #f472b6, #ec4899)',
      gradientSecondary: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      gradientTertiary: 'linear-gradient(135deg, #3d302e, #50413f)',
    },
    componentColors: defaultTokens.componentColors,
    borderRadius: {
      none: '0',
      control: '20px',
      surface: '28px',
      overlay: '36px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '0 4px 10px rgba(0, 0, 0, 0.08)',
      surface: '0 8px 20px rgba(0, 0, 0, 0.12)',
      overlay: '0 12px 30px rgba(0, 0, 0, 0.15)',
      float: '0 16px 40px rgba(0, 0, 0, 0.18)',
      inner: 'inset 2px 2px 8px rgba(0, 0, 0, 0.15)',
      glow: 'none',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: 'rgba(0, 0, 0, 0.12)',
      backdropBlur: '0px',
      backdropSaturation: '100%',
      textGlow: 'none',
      surfaceOpacity: 1,
    },
    patterns: {
      background: {
        type: 'noise',
        opacity: 0.03,
        size: 100,
      },
      surface: {
        type: 'noise',
        opacity: 0.04,
        size: 80,
      },
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '0px',
        innerShadow: 'inset 2px 2px 8px rgba(0, 0, 0, 0.1)',
        glowEffect: 'none',
        gradient: 'none',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '0px',
        focusRingWidth: '0px',
        focusRingAlpha: 0,
        innerShadow: 'inset 2px 2px 8px rgba(0, 0, 0, 0.15)',
        glowOnFocus: 'none',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '0px',
        elevatedBorderWidth: '0px',
        elevatedBorderEnabled: false,
        backdropBlur: '0px',
        surfaceOpacity: 1,
        innerShadow: 'inset 1px 1px 4px rgba(0, 0, 0, 0.08)',
      },
      toggle: {
        ...defaultTokens.components.toggle,
        trackShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.12)',
        thumbShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
      },
    },
  },

  // CYBER RETRO - Neon colors, glow effects, grid patterns
  cyberRetro: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#00ffff',
      primaryHover: '#00cccc',
      secondary: '#ff00ff',
      secondaryHover: '#cc00cc',
      success: '#00ff00',
      warning: '#ffff00',
      error: '#ff0066',
      info: '#0099ff',
      background: '#0a0a14',
      surface: '#14141e',
      text: '#00ffff',
      textMuted: '#6666ff',
      textOnAccent: '#0a0a14',
      border: '#00ffff',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#00ffff',
      primaryHover: '#33ffff',
      secondary: '#ff00ff',
      secondaryHover: '#ff33ff',
      success: '#00ff00',
      warning: '#ffff00',
      error: '#ff0066',
      info: '#0099ff',
      background: '#0a0a14',
      surface: '#14141e',
      text: '#00ffff',
      textMuted: '#6666ff',
      textOnAccent: '#0a0a14',
      border: '#00ffff',
    },
    semanticLight: {
      // Surface (4)
      surfacePrimary: '#0a0a14',
      surfaceSecondary: '#14141e',
      surfaceTertiary: '#1e1e28',
      surfaceQuaternary: '#282832',
      // Content (3)
      contentPrimary: '#00ffff',
      contentSecondary: '#66ffff',
      contentTertiary: '#6666ff',
      // Accent (3)
      accentPrimary: '#00ffff',
      accentSecondary: '#00cccc',
      accentTertiary: '#009999',
      // On Accent (3)
      onAccentPrimary: '#0a0a14',
      onAccentSecondary: '#0a0a14',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#00ff00',
      fail: '#ff0066',
      warning: '#ffff00',
      info: '#0099ff',
      // Action (3)
      action: '#ff00ff',
      actionSecondary: '#cc00cc',
      actionTertiary: '#990099',
      // Utility (2)
      shadow: 'rgba(0, 255, 255, 0.5)',
      border: '#00ffff',
      // Brand (2)
      brandPrimary: '#00ffff',
      brandSecondary: '#ff00ff',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)',
      gradientSecondary: 'linear-gradient(135deg, #0099ff 0%, #00ffff 100%)',
      gradientTertiary: 'linear-gradient(135deg, #ff00ff 0%, #ff0066 100%)',
    },
    semanticDark: {
      // Surface (4)
      surfacePrimary: '#0a0a14',
      surfaceSecondary: '#14141e',
      surfaceTertiary: '#1e1e28',
      surfaceQuaternary: '#282832',
      // Content (3)
      contentPrimary: '#00ffff',
      contentSecondary: '#66ffff',
      contentTertiary: '#6666ff',
      // Accent (3)
      accentPrimary: '#00ffff',
      accentSecondary: '#33ffff',
      accentTertiary: '#66ffff',
      // On Accent (3)
      onAccentPrimary: '#0a0a14',
      onAccentSecondary: '#0a0a14',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#00ff00',
      fail: '#ff0066',
      warning: '#ffff00',
      info: '#0099ff',
      // Action (3)
      action: '#ff00ff',
      actionSecondary: '#ff33ff',
      actionTertiary: '#ff66ff',
      // Utility (2)
      shadow: 'rgba(0, 255, 255, 0.5)',
      border: '#00ffff',
      // Brand (2)
      brandPrimary: '#00ffff',
      brandSecondary: '#ff00ff',
      // Gradients (3)
      gradientPrimary: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)',
      gradientSecondary: 'linear-gradient(135deg, #0099ff 0%, #00ffff 100%)',
      gradientTertiary: 'linear-gradient(135deg, #ff00ff 0%, #ff0066 100%)',
    },
    componentColors: defaultTokens.componentColors,
    typography: {
      ...defaultTokens.typography,
      fontFamily: 'Share Tech Mono, monospace',
      fontFamilyMono: 'Share Tech Mono, monospace',
    },
    borderRadius: {
      none: '0',
      control: '2px',
      surface: '4px',
      overlay: '6px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '0 0 8px rgba(0, 255, 255, 0.5), 0 0 16px rgba(0, 255, 255, 0.3)',
      surface: '0 0 12px rgba(0, 255, 255, 0.6), 0 0 24px rgba(0, 255, 255, 0.4)',
      overlay: '0 0 16px rgba(0, 255, 255, 0.7), 0 0 32px rgba(0, 255, 255, 0.5)',
      float: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)',
      inner: 'inset 0 0 8px rgba(0, 255, 255, 0.3)',
      glow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: 'rgba(0, 255, 255, 0.5)',
      focusRingColor: '#00ffff',
      focusRingWidth: '2px',
      backdropBlur: '0px',
      backdropSaturation: '150%',
      textGlow: '0 0 8px currentColor, 0 0 16px currentColor',
      surfaceOpacity: 1,
    },
    patterns: {
      background: {
        type: 'grid',
        opacity: 0.15,
        size: 40,
      },
      surface: {
        type: 'grid',
        opacity: 0.1,
        size: 30,
      },
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '2px',
        innerShadow: 'none',
        glowEffect: '0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.4)',
        gradient: 'none',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '2px',
        focusRingWidth: '0px',
        focusRingAlpha: 0,
        innerShadow: 'none',
        glowOnFocus: '0 0 12px rgba(0, 255, 255, 0.8)',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '2px',
        elevatedBorderWidth: '2px',
        elevatedBorderEnabled: true,
        backdropBlur: '0px',
        surfaceOpacity: 1,
        innerShadow: 'none',
      },
      toggle: {
        ...defaultTokens.components.toggle,
        trackShadow: '0 0 8px rgba(0, 255, 255, 0.5)',
        thumbShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.4)',
        borderWidth: '1px',
        thumbBorderWidth: '1px',
      },
    },
  },

  // EDITORIAL / NEWSPAPER - Serif fonts, classic typography, minimal color
  editorial: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#1a1a1a',
      primaryHover: '#000000',
      secondary: '#4a4a4a',
      secondaryHover: '#2a2a2a',
      success: '#2d5a3d',
      warning: '#8b6914',
      error: '#8b2a2a',
      info: '#2a4a6b',
      background: '#fdfcfa',
      surface: '#f8f7f4',
      text: '#1a1a1a',
      textMuted: '#6b6b6b',
      textOnAccent: '#ffffff',
      border: '#d4d2cd',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#e8e6e1',
      primaryHover: '#ffffff',
      secondary: '#b8b6b1',
      secondaryHover: '#d8d6d1',
      background: '#1a1a1a',
      surface: '#2a2a2a',
      text: '#e8e6e1',
      textMuted: '#9a9894',
      textOnAccent: '#1a1a1a',
      border: '#4a4a4a',
    },
    semanticLight: {
      // Surface (4)
      surfacePrimary: '#fdfcfa',
      surfaceSecondary: '#f8f7f4',
      surfaceTertiary: '#f0eeea',
      surfaceQuaternary: '#e8e6e1',
      // Content (3)
      contentPrimary: '#1a1a1a',
      contentSecondary: '#4a4a4a',
      contentTertiary: '#6b6b6b',
      // Accent (3)
      accentPrimary: '#1a1a1a',
      accentSecondary: '#000000',
      accentTertiary: '#2a2a2a',
      // On Accent (3)
      onAccentPrimary: '#ffffff',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#2d5a3d',
      fail: '#8b2a2a',
      warning: '#8b6914',
      info: '#2a4a6b',
      // Action (3)
      action: '#4a4a4a',
      actionSecondary: '#2a2a2a',
      actionTertiary: '#1a1a1a',
      // Utility (2)
      shadow: 'rgba(26, 26, 26, 0.15)',
      border: '#d4d2cd',
      // Brand (2)
      brandPrimary: '#1a1a1a',
      brandSecondary: '#4a4a4a',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    semanticDark: {
      // Surface (4)
      surfacePrimary: '#1a1a1a',
      surfaceSecondary: '#2a2a2a',
      surfaceTertiary: '#3a3a3a',
      surfaceQuaternary: '#4a4a4a',
      // Content (3)
      contentPrimary: '#e8e6e1',
      contentSecondary: '#b8b6b1',
      contentTertiary: '#9a9894',
      // Accent (3)
      accentPrimary: '#e8e6e1',
      accentSecondary: '#ffffff',
      accentTertiary: '#d8d6d1',
      // On Accent (3)
      onAccentPrimary: '#1a1a1a',
      onAccentSecondary: '#1a1a1a',
      onAccentTertiary: '#1a1a1a',
      // Status (4)
      success: '#4a7a5d',
      fail: '#ab4a4a',
      warning: '#ab8934',
      info: '#4a6a8b',
      // Action (3)
      action: '#b8b6b1',
      actionSecondary: '#d8d6d1',
      actionTertiary: '#e8e6e1',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.5)',
      border: '#4a4a4a',
      // Brand (2)
      brandPrimary: '#e8e6e1',
      brandSecondary: '#b8b6b1',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    componentColors: defaultTokens.componentColors,
    typography: {
      ...defaultTokens.typography,
      fontFamily: 'Crimson Text, Georgia, serif',
      fontFamilySerif: 'Crimson Text, Georgia, serif',
      fontFamilyDisplay: 'Playfair Display, serif',
      fontFamilyMono: 'Courier Prime, monospace',
      lineHeightNormal: 1.75,
      lineHeightRelaxed: 1.9,
    },
    spacing: {
      ...defaultTokens.spacing,
      md: '1.25rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '4rem',
    },
    borderRadius: {
      none: '0',
      control: '2px',
      surface: '2px',
      overlay: '3px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '0 1px 2px rgba(0, 0, 0, 0.08)',
      surface: '0 2px 4px rgba(0, 0, 0, 0.10)',
      overlay: '0 4px 8px rgba(0, 0, 0, 0.12)',
      float: '0 8px 16px rgba(0, 0, 0, 0.14)',
      inner: 'none',
      glow: 'none',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      focusRingColor: '#1a1a1a',
      backdropBlur: '0px',
      backdropSaturation: '100%',
      textGlow: 'none',
      surfaceOpacity: 1,
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '1px',
        innerShadow: 'none',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        glowEffect: 'none',
        gradient: 'none',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '1px',
        focusRingWidth: '2px',
        focusRingAlpha: 0.15,
        innerShadow: 'none',
        glowOnFocus: 'none',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '1px',
        elevatedBorderWidth: '0px',
        elevatedBorderEnabled: false,
        backdropBlur: '0px',
        surfaceOpacity: 1,
        innerShadow: 'none',
      },
    },
  },

  // DARK TECH MINIMALISM - Very dark, subtle accents, clean
  darkTechMinimal: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#0ea5e9',
      primaryHover: '#0284c7',
      secondary: '#6366f1',
      secondaryHover: '#4f46e5',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#06b6d4',
      background: '#fafafa',
      surface: '#f5f5f5',
      text: '#0a0a0a',
      textMuted: '#525252',
      textOnAccent: '#ffffff',
      border: '#e5e5e5',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#38bdf8',
      primaryHover: '#0ea5e9',
      secondary: '#818cf8',
      secondaryHover: '#6366f1',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#22d3ee',
      background: '#0a0a0a',
      surface: '#141414',
      text: '#fafafa',
      textMuted: '#a3a3a3',
      textOnAccent: '#0a0a0a',
      border: '#262626',
    },
    semanticLight: {
      // Surface (4)
      surfacePrimary: '#fafafa',
      surfaceSecondary: '#f5f5f5',
      surfaceTertiary: '#e5e5e5',
      surfaceQuaternary: '#d4d4d4',
      // Content (3)
      contentPrimary: '#0a0a0a',
      contentSecondary: '#525252',
      contentTertiary: '#737373',
      // Accent (3)
      accentPrimary: '#0ea5e9',
      accentSecondary: '#0284c7',
      accentTertiary: '#0369a1',
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
      action: '#6366f1',
      actionSecondary: '#4f46e5',
      actionTertiary: '#4338ca',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.1)',
      border: '#e5e5e5',
      // Brand (2)
      brandPrimary: '#0ea5e9',
      brandSecondary: '#6366f1',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    semanticDark: {
      // Surface (4)
      surfacePrimary: '#0a0a0a',
      surfaceSecondary: '#141414',
      surfaceTertiary: '#1a1a1a',
      surfaceQuaternary: '#262626',
      // Content (3)
      contentPrimary: '#fafafa',
      contentSecondary: '#a3a3a3',
      contentTertiary: '#737373',
      // Accent (3)
      accentPrimary: '#38bdf8',
      accentSecondary: '#0ea5e9',
      accentTertiary: '#0284c7',
      // On Accent (3)
      onAccentPrimary: '#0a0a0a',
      onAccentSecondary: '#0a0a0a',
      onAccentTertiary: '#ffffff',
      // Status (4)
      success: '#34d399',
      fail: '#f87171',
      warning: '#fbbf24',
      info: '#22d3ee',
      // Action (3)
      action: '#818cf8',
      actionSecondary: '#6366f1',
      actionTertiary: '#4f46e5',
      // Utility (2)
      shadow: 'rgba(0, 0, 0, 0.6)',
      border: '#262626',
      // Brand (2)
      brandPrimary: '#38bdf8',
      brandSecondary: '#818cf8',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    componentColors: defaultTokens.componentColors,
    typography: {
      ...defaultTokens.typography,
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    borderRadius: {
      none: '0',
      control: '6px',
      surface: '8px',
      overlay: '10px',
      full: '999px',
    },
    shadows: {
      none: 'none',
      control: '0 1px 3px rgba(0, 0, 0, 0.5)',
      surface: '0 4px 8px rgba(0, 0, 0, 0.6)',
      overlay: '0 8px 16px rgba(0, 0, 0, 0.7)',
      float: '0 12px 24px rgba(0, 0, 0, 0.8)',
      inner: 'none',
      glow: 'none',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: 'rgba(0, 0, 0, 0.6)',
      focusRingColor: '#38bdf8',
      backdropBlur: '0px',
      backdropSaturation: '100%',
      textGlow: 'none',
      surfaceOpacity: 1,
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '0px',
        innerShadow: 'none',
        glowEffect: 'none',
        gradient: 'none',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '1px',
        focusRingWidth: '2px',
        focusRingAlpha: 0.3,
        innerShadow: 'none',
        glowOnFocus: 'none',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '1px',
        elevatedBorderWidth: '0px',
        elevatedBorderEnabled: false,
        backdropBlur: '0px',
        surfaceOpacity: 1,
        innerShadow: 'none',
      },
    },
  },

  // MONOCHROME MAXIMALISM - Pure B&W, bold patterns, high contrast
  monochromeMaximal: {
    ...defaultTokens,
    lightTheme: {
      ...defaultTokens.lightTheme,
      primary: '#000000',
      primaryHover: '#1a1a1a',
      secondary: '#333333',
      secondaryHover: '#4a4a4a',
      success: '#000000',
      warning: '#000000',
      error: '#000000',
      info: '#000000',
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#000000',
      textMuted: '#666666',
      textOnAccent: '#ffffff',
      border: '#000000',
    },
    darkTheme: {
      ...defaultTokens.darkTheme,
      primary: '#ffffff',
      primaryHover: '#e5e5e5',
      secondary: '#cccccc',
      secondaryHover: '#b5b5b5',
      success: '#ffffff',
      warning: '#ffffff',
      error: '#ffffff',
      info: '#ffffff',
      background: '#000000',
      surface: '#0a0a0a',
      text: '#ffffff',
      textMuted: '#999999',
      textOnAccent: '#000000',
      border: '#ffffff',
    },
    semanticLight: {
      // Surface (4) - Pure whites
      surfacePrimary: '#ffffff',
      surfaceSecondary: '#f5f5f5',
      surfaceTertiary: '#e5e5e5',
      surfaceQuaternary: '#d4d4d4',
      // Content (3) - Pure blacks
      contentPrimary: '#000000',
      contentSecondary: '#1a1a1a',
      contentTertiary: '#333333',
      // Accent (3) - Black
      accentPrimary: '#000000',
      accentSecondary: '#1a1a1a',
      accentTertiary: '#333333',
      // On Accent (3) - White on black
      onAccentPrimary: '#ffffff',
      onAccentSecondary: '#ffffff',
      onAccentTertiary: '#ffffff',
      // Status (4) - Grayscale
      success: '#333333',
      fail: '#000000',
      warning: '#666666',
      info: '#1a1a1a',
      // Action (3) - Dark grays
      action: '#1a1a1a',
      actionSecondary: '#333333',
      actionTertiary: '#4d4d4d',
      // Utility (2)
      shadow: '#000000',
      border: '#000000',
      // Brand (2)
      brandPrimary: '#000000',
      brandSecondary: '#ffffff',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    semanticDark: {
      // Surface (4) - Pure blacks
      surfacePrimary: '#000000',
      surfaceSecondary: '#0a0a0a',
      surfaceTertiary: '#1a1a1a',
      surfaceQuaternary: '#2a2a2a',
      // Content (3) - Pure whites
      contentPrimary: '#ffffff',
      contentSecondary: '#e5e5e5',
      contentTertiary: '#cccccc',
      // Accent (3) - White
      accentPrimary: '#ffffff',
      accentSecondary: '#e5e5e5',
      accentTertiary: '#cccccc',
      // On Accent (3) - Black on white
      onAccentPrimary: '#000000',
      onAccentSecondary: '#000000',
      onAccentTertiary: '#000000',
      // Status (4) - Grayscale
      success: '#cccccc',
      fail: '#ffffff',
      warning: '#999999',
      info: '#e5e5e5',
      // Action (3) - Light grays
      action: '#e5e5e5',
      actionSecondary: '#cccccc',
      actionTertiary: '#b3b3b3',
      // Utility (2)
      shadow: '#000000',
      border: '#ffffff',
      // Brand (2)
      brandPrimary: '#ffffff',
      brandSecondary: '#000000',
      // Gradients (3)
      gradientPrimary: 'none',
      gradientSecondary: 'none',
      gradientTertiary: 'none',
    },
    componentColors: defaultTokens.componentColors,
    typography: {
      ...defaultTokens.typography,
      fontFamily: 'Work Sans, sans-serif',
      fontWeightBold: 900,
      fontWeightSemibold: 700,
    },
    borderRadius: {
      none: '0',
      control: '0px',
      surface: '0px',
      overlay: '0px',
      full: '0px',
    },
    shadows: {
      none: 'none',
      control: '4px 4px 0 0 #000000',
      surface: '8px 8px 0 0 #000000',
      overlay: '12px 12px 0 0 #000000',
      float: '16px 16px 0 0 #000000',
      inner: 'none',
      glow: 'none',
    },
    effects: {
      ...defaultTokens.effects,
      shadowColor: '#000000',
      focusRingColor: '#000000',
      focusRingWidth: '4px',
      backdropBlur: '0px',
      backdropSaturation: '0%',
      textGlow: 'none',
      surfaceOpacity: 1,
    },
    patterns: {
      background: {
        type: 'dots',
        opacity: 0.2,
        size: 8,
      },
      surface: {
        type: 'grid',
        opacity: 0.15,
        size: 20,
      },
    },
    components: {
      ...defaultTokens.components,
      button: {
        ...defaultTokens.components.button,
        borderWidth: '4px',
        innerShadow: 'none',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        glowEffect: 'none',
        gradient: 'none',
      },
      input: {
        ...defaultTokens.components.input,
        borderWidth: '3px',
        focusRingWidth: '4px',
        focusRingAlpha: 1,
        innerShadow: 'none',
        glowOnFocus: 'none',
      },
      card: {
        ...defaultTokens.components.card,
        borderWidth: '4px',
        elevatedBorderWidth: '6px',
        elevatedBorderEnabled: true,
        backdropBlur: '0px',
        surfaceOpacity: 1,
        innerShadow: 'none',
      },
      badge: {
        ...defaultTokens.components.badge,
        borderWidth: '3px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
      },
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
