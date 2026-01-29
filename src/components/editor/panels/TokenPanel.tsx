import { useState, type ReactNode } from 'react';
import { ChevronDown, Palette, Type, Move, Square, Layers, Zap } from 'lucide-react';
import { ColorPicker } from '../ColorPicker';
import { GradientPicker } from '../GradientPicker';
import { SliderControl } from '../SliderControl';
import { FontSelector } from '../FontSelector';
import { ShadowEditor } from '../ShadowEditor';
import { useDesignTokens } from '../../../hooks/useDesignTokens';
import type { ThemeColors, SemanticColors } from '../../../types/tokens';
import './TokenPanel.css';

interface PanelSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

function PanelSection({ title, icon, children, defaultOpen = false }: PanelSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`panel-section ${isOpen ? 'panel-section-open' : ''}`}>
      <button
        className="panel-section-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="panel-section-icon">{icon}</span>
        <span className="panel-section-title">{title}</span>
        <ChevronDown className="panel-section-chevron" size={16} />
      </button>
      {isOpen && <div className="panel-section-content">{children}</div>}
    </div>
  );
}

type ThemeCategory = 'lightTheme' | 'darkTheme';
type ThemeKey = keyof ThemeColors;

export function TokenPanel() {
  const { tokens, setToken, setCategory } = useDesignTokens();
  const [colorTheme, setColorTheme] = useState<'light' | 'dark'>('light');
  const [semanticTheme, setSemanticTheme] = useState<'light' | 'dark'>('light');

  const parseValue = (value: string): number => {
    return parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  };

  const formatValue = (value: number, unit: string): string => {
    return `${value}${unit}`;
  };

  const currentTheme: ThemeColors = colorTheme === 'light' ? tokens.lightTheme : tokens.darkTheme;
  const themeCategory: ThemeCategory = colorTheme === 'light' ? 'lightTheme' : 'darkTheme';
  const otherThemeCategory: ThemeCategory = themeCategory === 'lightTheme' ? 'darkTheme' : 'lightTheme';
  const otherTheme: ThemeColors = tokens[otherThemeCategory];

  const shouldShowSync = (key: ThemeKey) => currentTheme[key] !== otherTheme[key];
  const syncThemeToken = (key: ThemeKey) => {
    setCategory(otherThemeCategory, { [key]: currentTheme[key] } as Partial<ThemeColors>);
  };
  const syncTitle = colorTheme === 'light'
    ? 'Sync this token to dark theme'
    : 'Sync this token to light theme';

  const currentSemanticTheme: SemanticColors = semanticTheme === 'light' ? tokens.semanticLight : tokens.semanticDark;
  const semanticThemeCategory = semanticTheme === 'light' ? 'semanticLight' : 'semanticDark';
  const otherSemanticThemeCategory = semanticThemeCategory === 'semanticLight' ? 'semanticDark' : 'semanticLight';
  const otherSemanticTheme: SemanticColors = tokens[otherSemanticThemeCategory];

  const shouldShowSemanticSync = (key: keyof SemanticColors) => currentSemanticTheme[key] !== otherSemanticTheme[key];
  const syncSemanticToken = (key: keyof SemanticColors) => {
    setCategory(otherSemanticThemeCategory as any, { [key]: currentSemanticTheme[key] } as any);
  };
  const semanticSyncTitle = semanticTheme === 'light'
    ? 'Sync this token to dark theme'
    : 'Sync this token to light theme';

  return (
    <div className="token-panel">
      <PanelSection title="Colors" icon={<Palette size={16} />} defaultOpen>
        <div className="theme-mode-toggle">
          <button
            className={`theme-toggle-btn ${semanticTheme === 'light' ? 'active' : ''}`}
            onClick={() => setSemanticTheme('light')}
          >
            Light Theme
          </button>
          <button
            className={`theme-toggle-btn ${semanticTheme === 'dark' ? 'active' : ''}`}
            onClick={() => setSemanticTheme('dark')}
          >
            Dark Theme
          </button>
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Surface</h4>
          <ColorPicker
            label="Surface Primary"
            value={currentSemanticTheme.surfacePrimary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], surfacePrimary: v } as any)}
            showSync={shouldShowSemanticSync('surfacePrimary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('surfacePrimary')}
          />
          <ColorPicker
            label="Surface Secondary"
            value={currentSemanticTheme.surfaceSecondary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], surfaceSecondary: v } as any)}
            showSync={shouldShowSemanticSync('surfaceSecondary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('surfaceSecondary')}
          />
          <ColorPicker
            label="Surface Tertiary"
            value={currentSemanticTheme.surfaceTertiary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], surfaceTertiary: v } as any)}
            showSync={shouldShowSemanticSync('surfaceTertiary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('surfaceTertiary')}
          />
          <ColorPicker
            label="Surface Quaternary"
            value={currentSemanticTheme.surfaceQuaternary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], surfaceQuaternary: v } as any)}
            showSync={shouldShowSemanticSync('surfaceQuaternary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('surfaceQuaternary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Content</h4>
          <ColorPicker
            label="Content Primary"
            value={currentSemanticTheme.contentPrimary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], contentPrimary: v } as any)}
            showSync={shouldShowSemanticSync('contentPrimary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('contentPrimary')}
          />
          <ColorPicker
            label="Content Secondary"
            value={currentSemanticTheme.contentSecondary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], contentSecondary: v } as any)}
            showSync={shouldShowSemanticSync('contentSecondary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('contentSecondary')}
          />
          <ColorPicker
            label="Content Tertiary"
            value={currentSemanticTheme.contentTertiary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], contentTertiary: v } as any)}
            showSync={shouldShowSemanticSync('contentTertiary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('contentTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Accent</h4>
          <ColorPicker
            label="Accent Primary"
            value={currentSemanticTheme.accentPrimary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], accentPrimary: v } as any)}
            showSync={shouldShowSemanticSync('accentPrimary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('accentPrimary')}
          />
          <ColorPicker
            label="Accent Secondary"
            value={currentSemanticTheme.accentSecondary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], accentSecondary: v } as any)}
            showSync={shouldShowSemanticSync('accentSecondary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('accentSecondary')}
          />
          <ColorPicker
            label="Accent Tertiary"
            value={currentSemanticTheme.accentTertiary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], accentTertiary: v } as any)}
            showSync={shouldShowSemanticSync('accentTertiary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('accentTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">On Accent</h4>
          <ColorPicker
            label="On Accent Primary"
            value={currentSemanticTheme.onAccentPrimary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], onAccentPrimary: v } as any)}
            showSync={shouldShowSemanticSync('onAccentPrimary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('onAccentPrimary')}
          />
          <ColorPicker
            label="On Accent Secondary"
            value={currentSemanticTheme.onAccentSecondary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], onAccentSecondary: v } as any)}
            showSync={shouldShowSemanticSync('onAccentSecondary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('onAccentSecondary')}
          />
          <ColorPicker
            label="On Accent Tertiary"
            value={currentSemanticTheme.onAccentTertiary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], onAccentTertiary: v } as any)}
            showSync={shouldShowSemanticSync('onAccentTertiary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('onAccentTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Status</h4>
          <ColorPicker
            label="Success"
            value={currentSemanticTheme.success}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], success: v } as any)}
            showSync={shouldShowSemanticSync('success')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('success')}
          />
          <ColorPicker
            label="Fail"
            value={currentSemanticTheme.fail}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], fail: v } as any)}
            showSync={shouldShowSemanticSync('fail')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('fail')}
          />
          <ColorPicker
            label="Warning"
            value={currentSemanticTheme.warning}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], warning: v } as any)}
            showSync={shouldShowSemanticSync('warning')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('warning')}
          />
          <ColorPicker
            label="Info"
            value={currentSemanticTheme.info}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], info: v } as any)}
            showSync={shouldShowSemanticSync('info')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('info')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Action</h4>
          <ColorPicker
            label="Action"
            value={currentSemanticTheme.action}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], action: v } as any)}
            showSync={shouldShowSemanticSync('action')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('action')}
          />
          <ColorPicker
            label="Action Secondary"
            value={currentSemanticTheme.actionSecondary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], actionSecondary: v } as any)}
            showSync={shouldShowSemanticSync('actionSecondary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('actionSecondary')}
          />
          <ColorPicker
            label="Action Tertiary"
            value={currentSemanticTheme.actionTertiary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], actionTertiary: v } as any)}
            showSync={shouldShowSemanticSync('actionTertiary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('actionTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Utility</h4>
          <ColorPicker
            label="Shadow"
            value={currentSemanticTheme.shadow}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], shadow: v } as any)}
            showSync={shouldShowSemanticSync('shadow')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('shadow')}
          />
          <ColorPicker
            label="Border"
            value={currentSemanticTheme.border}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], border: v } as any)}
            showSync={shouldShowSemanticSync('border')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('border')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Brand</h4>
          <ColorPicker
            label="Brand Primary"
            value={currentSemanticTheme.brandPrimary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], brandPrimary: v } as any)}
            showSync={shouldShowSemanticSync('brandPrimary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('brandPrimary')}
          />
          <ColorPicker
            label="Brand Secondary"
            value={currentSemanticTheme.brandSecondary}
            onChange={(v) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], brandSecondary: v } as any)}
            showSync={shouldShowSemanticSync('brandSecondary')}
            syncTitle={semanticSyncTitle}
            onSync={() => syncSemanticToken('brandSecondary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Gradients</h4>
          <div className="control-group">
            <label className="control-label">Gradient Primary</label>
            <input
              type="text"
              value={currentSemanticTheme.gradientPrimary}
              onChange={(e) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], gradientPrimary: e.target.value } as any)}
              className="control-input"
              placeholder="e.g., linear-gradient(...) or none"
            />
          </div>
          <div className="control-group">
            <label className="control-label">Gradient Secondary</label>
            <input
              type="text"
              value={currentSemanticTheme.gradientSecondary}
              onChange={(e) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], gradientSecondary: e.target.value } as any)}
              className="control-input"
              placeholder="e.g., linear-gradient(...) or none"
            />
          </div>
          <div className="control-group">
            <label className="control-label">Gradient Tertiary</label>
            <input
              type="text"
              value={currentSemanticTheme.gradientTertiary}
              onChange={(e) => setCategory(semanticThemeCategory as any, { ...tokens[semanticThemeCategory], gradientTertiary: e.target.value } as any)}
              className="control-input"
              placeholder="e.g., linear-gradient(...) or none"
            />
          </div>
        </div>
      </PanelSection>

      <PanelSection title="Background Patterns" icon={<Square size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Background</h4>
          <div className="control-group">
            <label className="control-label">Pattern Type</label>
            <select
              value={tokens.patterns.background.type}
              onChange={(e) =>
                setCategory('patterns', {
                  ...tokens.patterns,
                  background: { ...tokens.patterns.background, type: e.target.value as 'none' | 'dots' | 'grid' | 'plus' | 'noise' },
                })
              }
              className="control-select"
            >
              <option value="none">None</option>
              <option value="dots">Dots</option>
              <option value="grid">Grid</option>
              <option value="plus">Plus</option>
              <option value="noise">Noise</option>
            </select>
          </div>
          <SliderControl
            label="Opacity"
            value={tokens.patterns.background.opacity}
            min={0}
            max={0.2}
            step={0.01}
            onChange={(v) =>
              setCategory('patterns', {
                ...tokens.patterns,
                background: { ...tokens.patterns.background, opacity: v },
              })
            }
          />
          <SliderControl
            label="Size"
            value={tokens.patterns.background.size}
            min={8}
            max={40}
            step={1}
            unit="px"
            onChange={(v) =>
              setCategory('patterns', {
                ...tokens.patterns,
                background: { ...tokens.patterns.background, size: v },
              })
            }
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Surface</h4>
          <div className="control-group">
            <label className="control-label">Pattern Type</label>
            <select
              value={tokens.patterns.surface.type}
              onChange={(e) =>
                setCategory('patterns', {
                  ...tokens.patterns,
                  surface: { ...tokens.patterns.surface, type: e.target.value as 'none' | 'dots' | 'grid' | 'plus' | 'noise' },
                })
              }
              className="control-select"
            >
              <option value="none">None</option>
              <option value="dots">Dots</option>
              <option value="grid">Grid</option>
              <option value="plus">Plus</option>
              <option value="noise">Noise</option>
            </select>
          </div>
          <SliderControl
            label="Opacity"
            value={tokens.patterns.surface.opacity}
            min={0}
            max={0.2}
            step={0.01}
            onChange={(v) =>
              setCategory('patterns', {
                ...tokens.patterns,
                surface: { ...tokens.patterns.surface, opacity: v },
              })
            }
          />
          <SliderControl
            label="Size"
            value={tokens.patterns.surface.size}
            min={8}
            max={40}
            step={1}
            unit="px"
            onChange={(v) =>
              setCategory('patterns', {
                ...tokens.patterns,
                surface: { ...tokens.patterns.surface, size: v },
              })
            }
          />
        </div>
      </PanelSection>

      <PanelSection title="Typography" icon={<Type size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Font Families</h4>
          <FontSelector
            label="Primary Font"
            value={tokens.typography.fontFamily}
            onChange={(v) => setToken('typography', 'fontFamily', v)}
          />
          <FontSelector
            label="Monospace Font"
            value={tokens.typography.fontFamilyMono}
            onChange={(v) => setToken('typography', 'fontFamilyMono', v)}
          />
          <FontSelector
            label="Serif Font"
            value={tokens.typography.fontFamilySerif}
            onChange={(v) => setToken('typography', 'fontFamilySerif', v)}
          />
          <FontSelector
            label="Display Font"
            value={tokens.typography.fontFamilyDisplay}
            onChange={(v) => setToken('typography', 'fontFamilyDisplay', v)}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Font Sizes</h4>
          <SliderControl
            label="Extra Small"
            value={parseValue(tokens.typography.fontSizeXs)}
            min={0.5}
            max={1}
            step={0.05}
            unit="rem"
            onChange={(v) => setToken('typography', 'fontSizeXs', formatValue(v, 'rem'))}
          />
          <SliderControl
            label="Small"
            value={parseValue(tokens.typography.fontSizeSm)}
            min={0.75}
            max={1}
            step={0.05}
            unit="rem"
            onChange={(v) => setToken('typography', 'fontSizeSm', formatValue(v, 'rem'))}
          />
          <SliderControl
            label="Medium"
            value={parseValue(tokens.typography.fontSizeMd)}
            min={0.875}
            max={1.25}
            step={0.05}
            unit="rem"
            onChange={(v) => setToken('typography', 'fontSizeMd', formatValue(v, 'rem'))}
          />
          <SliderControl
            label="Large"
            value={parseValue(tokens.typography.fontSizeLg)}
            min={1}
            max={1.5}
            step={0.05}
            unit="rem"
            onChange={(v) => setToken('typography', 'fontSizeLg', formatValue(v, 'rem'))}
          />
          <SliderControl
            label="Extra Large"
            value={parseValue(tokens.typography.fontSizeXl)}
            min={1.125}
            max={2}
            step={0.05}
            unit="rem"
            onChange={(v) => setToken('typography', 'fontSizeXl', formatValue(v, 'rem'))}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Font Weights</h4>
          <SliderControl
            label="Normal"
            value={tokens.typography.fontWeightNormal}
            min={300}
            max={500}
            step={100}
            onChange={(v) => setToken('typography', 'fontWeightNormal', v)}
          />
          <SliderControl
            label="Medium"
            value={tokens.typography.fontWeightMedium}
            min={400}
            max={600}
            step={100}
            onChange={(v) => setToken('typography', 'fontWeightMedium', v)}
          />
          <SliderControl
            label="Semibold"
            value={tokens.typography.fontWeightSemibold}
            min={500}
            max={700}
            step={100}
            onChange={(v) => setToken('typography', 'fontWeightSemibold', v)}
          />
          <SliderControl
            label="Bold"
            value={tokens.typography.fontWeightBold}
            min={600}
            max={900}
            step={100}
            onChange={(v) => setToken('typography', 'fontWeightBold', v)}
          />
        </div>
      </PanelSection>

      <PanelSection title="Spacing" icon={<Move size={16} />}>
        <SliderControl
          label="Extra Small"
          value={parseValue(tokens.spacing.xs)}
          min={0.125}
          max={0.5}
          step={0.05}
          unit="rem"
          onChange={(v) => setToken('spacing', 'xs', formatValue(v, 'rem'))}
        />
        <SliderControl
          label="Small"
          value={parseValue(tokens.spacing.sm)}
          min={0.25}
          max={1}
          step={0.05}
          unit="rem"
          onChange={(v) => setToken('spacing', 'sm', formatValue(v, 'rem'))}
        />
        <SliderControl
          label="Medium"
          value={parseValue(tokens.spacing.md)}
          min={0.5}
          max={1.5}
          step={0.05}
          unit="rem"
          onChange={(v) => setToken('spacing', 'md', formatValue(v, 'rem'))}
        />
        <SliderControl
          label="Large"
          value={parseValue(tokens.spacing.lg)}
          min={1}
          max={2}
          step={0.05}
          unit="rem"
          onChange={(v) => setToken('spacing', 'lg', formatValue(v, 'rem'))}
        />
        <SliderControl
          label="Extra Large"
          value={parseValue(tokens.spacing.xl)}
          min={1.5}
          max={3}
          step={0.05}
          unit="rem"
          onChange={(v) => setToken('spacing', 'xl', formatValue(v, 'rem'))}
        />
        <SliderControl
          label="2X Large"
          value={parseValue(tokens.spacing.xxl)}
          min={2}
          max={4}
          step={0.1}
          unit="rem"
          onChange={(v) => setToken('spacing', 'xxl', formatValue(v, 'rem'))}
        />
      </PanelSection>

      <PanelSection title="Border Radius" icon={<Square size={16} />}>
        <SliderControl
          label="Control"
          value={parseValue(tokens.borderRadius.control)}
          min={0}
          max={24}
          step={1}
          unit="px"
          onChange={(v) => setToken('borderRadius', 'control', formatValue(v, 'px'))}
        />
        <SliderControl
          label="Surface"
          value={parseValue(tokens.borderRadius.surface)}
          min={0}
          max={32}
          step={1}
          unit="px"
          onChange={(v) => setToken('borderRadius', 'surface', formatValue(v, 'px'))}
        />
        <SliderControl
          label="Overlay"
          value={parseValue(tokens.borderRadius.overlay)}
          min={0}
          max={48}
          step={1}
          unit="px"
          onChange={(v) => setToken('borderRadius', 'overlay', formatValue(v, 'px'))}
        />
        <SliderControl
          label="Full"
          value={parseValue(tokens.borderRadius.full)}
          min={0}
          max={200}
          step={1}
          unit="px"
          onChange={(v) => setToken('borderRadius', 'full', formatValue(v, 'px'))}
        />
      </PanelSection>

      <PanelSection title="Shadows" icon={<Layers size={16} />}>
        <ColorPicker
          label="Shadow Color"
          value={tokens.effects.shadowColor}
          onChange={(v) => setToken('effects', 'shadowColor', v)}
        />
        <ShadowEditor
          label="Control Shadow"
          value={tokens.shadows.control}
          onChange={(v) => setToken('shadows', 'control', v)}
        />
        <ShadowEditor
          label="Surface Shadow"
          value={tokens.shadows.surface}
          onChange={(v) => setToken('shadows', 'surface', v)}
        />
        <ShadowEditor
          label="Overlay Shadow"
          value={tokens.shadows.overlay}
          onChange={(v) => setToken('shadows', 'overlay', v)}
        />
        <ShadowEditor
          label="Float Shadow"
          value={tokens.shadows.float}
          onChange={(v) => setToken('shadows', 'float', v)}
        />
        <ShadowEditor
          label="Inner Shadow"
          value={tokens.shadows.inner}
          onChange={(v) => setToken('shadows', 'inner', v)}
        />
        <ShadowEditor
          label="Glow Shadow"
          value={tokens.shadows.glow}
          onChange={(v) => setToken('shadows', 'glow', v)}
        />
      </PanelSection>

      <PanelSection title="Transitions" icon={<Zap size={16} />}>
        <SliderControl
          label="Fast"
          value={parseInt(tokens.transitions.fast)}
          min={50}
          max={200}
          step={10}
          unit="ms"
          onChange={(v) => setToken('transitions', 'fast', `${v}ms ease`)}
        />
        <SliderControl
          label="Normal"
          value={parseInt(tokens.transitions.normal)}
          min={100}
          max={300}
          step={10}
          unit="ms"
          onChange={(v) => setToken('transitions', 'normal', `${v}ms ease`)}
        />
        <SliderControl
          label="Slow"
          value={parseInt(tokens.transitions.slow)}
          min={200}
          max={500}
          step={10}
          unit="ms"
          onChange={(v) => setToken('transitions', 'slow', `${v}ms ease`)}
        />
      </PanelSection>

      <PanelSection title="Advanced Effects" icon={<Zap size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Glassmorphism</h4>
          <SliderControl
            label="Backdrop Blur"
            value={parseValue(tokens.effects.backdropBlur)}
            min={0}
            max={30}
            step={1}
            unit="px"
            onChange={(v) => setToken('effects', 'backdropBlur', formatValue(v, 'px'))}
          />
          <SliderControl
            label="Backdrop Saturation"
            value={parseValue(tokens.effects.backdropSaturation)}
            min={0}
            max={200}
            step={10}
            unit="%"
            onChange={(v) => setToken('effects', 'backdropSaturation', formatValue(v, '%'))}
          />
          <SliderControl
            label="Surface Opacity"
            value={tokens.effects.surfaceOpacity}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => setToken('effects', 'surfaceOpacity', v)}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Glow Effects</h4>
          <div className="control-group">
            <label className="control-label">Text Glow</label>
            <input
              type="text"
              value={tokens.effects.textGlow}
              onChange={(e) => setToken('effects', 'textGlow', e.target.value)}
              className="control-input"
              placeholder="e.g., 0 0 10px currentColor"
            />
          </div>
        </div>
      </PanelSection>

      <PanelSection title="Gradients" icon={<Palette size={16} />}>
        <div className="control-group">
          <label className="control-label">Surface Gradient</label>
          <input
            type="text"
            value={tokens.gradients.surface}
            onChange={(e) => setToken('gradients', 'surface', e.target.value)}
            className="control-input"
            placeholder="e.g., linear-gradient(...) or none"
          />
        </div>
        <div className="control-group">
          <label className="control-label">Accent Gradient</label>
          <input
            type="text"
            value={tokens.gradients.accent}
            onChange={(e) => setToken('gradients', 'accent', e.target.value)}
            className="control-input"
            placeholder="e.g., linear-gradient(...) or none"
          />
        </div>
        <div className="control-group">
          <label className="control-label">Primary Gradient</label>
          <input
            type="text"
            value={tokens.gradients.primary}
            onChange={(e) => setToken('gradients', 'primary', e.target.value)}
            className="control-input"
            placeholder="e.g., linear-gradient(...) or none"
          />
        </div>
      </PanelSection>

      <PanelSection title="Focus Ring" icon={<Square size={16} />}>
        <ColorPicker
          label="Focus Color"
          value={tokens.effects.focusRingColor}
          onChange={(v) => setToken('effects', 'focusRingColor', v)}
        />
        <SliderControl
          label="Focus Width"
          value={parseValue(tokens.effects.focusRingWidth)}
          min={1}
          max={6}
          step={1}
          unit="px"
          onChange={(v) => setToken('effects', 'focusRingWidth', formatValue(v, 'px'))}
        />
        <SliderControl
          label="Focus Offset"
          value={parseValue(tokens.effects.focusRingOffset)}
          min={0}
          max={6}
          step={1}
          unit="px"
          onChange={(v) => setToken('effects', 'focusRingOffset', formatValue(v, 'px'))}
        />
      </PanelSection>

    </div>
  );
}
