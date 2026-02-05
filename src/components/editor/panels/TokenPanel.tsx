import { useState, useCallback, memo, type ReactNode } from 'react';
import { ChevronDown, Palette, Type, Move, Square, Layers, Zap } from 'lucide-react';
import { ColorPicker } from '../ColorPicker';
import { GradientPicker } from '../GradientPicker';
import { SliderControl } from '../SliderControl';
import { FontSelector } from '../FontSelector';
import { ShadowEditor } from '../ShadowEditor';
import { useDesignTokens } from '../../../hooks/useDesignTokens';
import { sanitizeCSSValue } from '../../../utils/cssValidation';
import type { ThemeColors, SemanticColors, SemanticThemeKey } from '../../../types/tokens';
import './TokenPanel.css';

interface PanelSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

const PanelSection = memo(function PanelSection({ title, icon, children, defaultOpen = false }: PanelSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className={`panel-section ${isOpen ? 'panel-section-open' : ''}`}>
      <button
        className="panel-section-header"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span className="panel-section-icon">{icon}</span>
        <span className="panel-section-title">{title}</span>
        <ChevronDown className="panel-section-chevron" size={16} aria-hidden="true" />
      </button>
      {isOpen && <div className="panel-section-content" id={`panel-content-${title.toLowerCase().replace(/\s+/g, '-')}`}>{children}</div>}
    </div>
  );
});

type ThemeCategory = 'lightTheme' | 'darkTheme';
type ThemeKey = keyof ThemeColors;

export const TokenPanel = memo(function TokenPanel() {
  const { tokens, setToken, setCategory } = useDesignTokens();
  const [semanticTheme, setSemanticTheme] = useState<'light' | 'dark'>('light');

  const parseValue = useCallback((value: string): number => {
    return parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  }, []);

  const formatValue = useCallback((value: number, unit: string): string => {
    return `${value}${unit}`;
  }, []);

  const currentSemanticTheme: SemanticColors = semanticTheme === 'light' ? tokens.semanticLight : tokens.semanticDark;
  const semanticThemeCategory: SemanticThemeKey = semanticTheme === 'light' ? 'semanticLight' : 'semanticDark';
  const otherSemanticThemeCategory: SemanticThemeKey = semanticThemeCategory === 'semanticLight' ? 'semanticDark' : 'semanticLight';
  const otherSemanticTheme: SemanticColors = tokens[otherSemanticThemeCategory];

  const shouldShowSemanticSync = (key: keyof SemanticColors) => currentSemanticTheme[key] !== otherSemanticTheme[key];
  const syncSemanticToken = (key: keyof SemanticColors) => {
    setCategory(otherSemanticThemeCategory, { [key]: currentSemanticTheme[key] } as Partial<SemanticColors>);
  };

  // Helper to update semantic color
  const updateSemanticColor = (key: keyof SemanticColors, value: string) => {
    setCategory(semanticThemeCategory, { ...tokens[semanticThemeCategory], [key]: value } as Partial<SemanticColors>);
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
            onChange={(v) => updateSemanticColor('surfacePrimary', v)}
            showSync={shouldShowSemanticSync('surfacePrimary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Surface Primary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('surfacePrimary')}
          />
          <ColorPicker
            label="Surface Secondary"
            value={currentSemanticTheme.surfaceSecondary}
            onChange={(v) => updateSemanticColor('surfaceSecondary', v)}
            showSync={shouldShowSemanticSync('surfaceSecondary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Surface Secondary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('surfaceSecondary')}
          />
          <ColorPicker
            label="Surface Tertiary"
            value={currentSemanticTheme.surfaceTertiary}
            onChange={(v) => updateSemanticColor('surfaceTertiary', v)}
            showSync={shouldShowSemanticSync('surfaceTertiary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Surface Tertiary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('surfaceTertiary')}
          />
          <ColorPicker
            label="Surface Quaternary"
            value={currentSemanticTheme.surfaceQuaternary}
            onChange={(v) => updateSemanticColor('surfaceQuaternary', v)}
            showSync={shouldShowSemanticSync('surfaceQuaternary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Surface Quaternary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('surfaceQuaternary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Content</h4>
          <ColorPicker
            label="Content Primary"
            value={currentSemanticTheme.contentPrimary}
            onChange={(v) => updateSemanticColor('contentPrimary', v)}
            showSync={shouldShowSemanticSync('contentPrimary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Content Primary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('contentPrimary')}
          />
          <ColorPicker
            label="Content Secondary"
            value={currentSemanticTheme.contentSecondary}
            onChange={(v) => updateSemanticColor('contentSecondary', v)}
            showSync={shouldShowSemanticSync('contentSecondary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Content Secondary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('contentSecondary')}
          />
          <ColorPicker
            label="Content Tertiary"
            value={currentSemanticTheme.contentTertiary}
            onChange={(v) => updateSemanticColor('contentTertiary', v)}
            showSync={shouldShowSemanticSync('contentTertiary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Content Tertiary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('contentTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Accent</h4>
          <ColorPicker
            label="Accent Primary"
            value={currentSemanticTheme.accentPrimary}
            onChange={(v) => updateSemanticColor('accentPrimary', v)}
            showSync={shouldShowSemanticSync('accentPrimary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Accent Primary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('accentPrimary')}
          />
          <ColorPicker
            label="Accent Secondary"
            value={currentSemanticTheme.accentSecondary}
            onChange={(v) => updateSemanticColor('accentSecondary', v)}
            showSync={shouldShowSemanticSync('accentSecondary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Accent Secondary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('accentSecondary')}
          />
          <ColorPicker
            label="Accent Tertiary"
            value={currentSemanticTheme.accentTertiary}
            onChange={(v) => updateSemanticColor('accentTertiary', v)}
            showSync={shouldShowSemanticSync('accentTertiary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Accent Tertiary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('accentTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">On Accent</h4>
          <ColorPicker
            label="On Accent Primary"
            value={currentSemanticTheme.onAccentPrimary}
            onChange={(v) => updateSemanticColor('onAccentPrimary', v)}
            showSync={shouldShowSemanticSync('onAccentPrimary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync On Accent Primary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('onAccentPrimary')}
          />
          <ColorPicker
            label="On Accent Secondary"
            value={currentSemanticTheme.onAccentSecondary}
            onChange={(v) => updateSemanticColor('onAccentSecondary', v)}
            showSync={shouldShowSemanticSync('onAccentSecondary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync On Accent Secondary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('onAccentSecondary')}
          />
          <ColorPicker
            label="On Accent Tertiary"
            value={currentSemanticTheme.onAccentTertiary}
            onChange={(v) => updateSemanticColor('onAccentTertiary', v)}
            showSync={shouldShowSemanticSync('onAccentTertiary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync On Accent Tertiary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('onAccentTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Status</h4>
          <ColorPicker
            label="Success"
            value={currentSemanticTheme.success}
            onChange={(v) => updateSemanticColor('success', v)}
            showSync={shouldShowSemanticSync('success')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Success color to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('success')}
          />
          <ColorPicker
            label="Fail"
            value={currentSemanticTheme.fail}
            onChange={(v) => updateSemanticColor('fail', v)}
            showSync={shouldShowSemanticSync('fail')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Fail color to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('fail')}
          />
          <ColorPicker
            label="Warning"
            value={currentSemanticTheme.warning}
            onChange={(v) => updateSemanticColor('warning', v)}
            showSync={shouldShowSemanticSync('warning')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Warning color to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('warning')}
          />
          <ColorPicker
            label="Info"
            value={currentSemanticTheme.info}
            onChange={(v) => updateSemanticColor('info', v)}
            showSync={shouldShowSemanticSync('info')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Info color to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('info')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Action</h4>
          <ColorPicker
            label="Action"
            value={currentSemanticTheme.action}
            onChange={(v) => updateSemanticColor('action', v)}
            showSync={shouldShowSemanticSync('action')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Action color to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('action')}
          />
          <ColorPicker
            label="Action Secondary"
            value={currentSemanticTheme.actionSecondary}
            onChange={(v) => updateSemanticColor('actionSecondary', v)}
            showSync={shouldShowSemanticSync('actionSecondary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Action Secondary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('actionSecondary')}
          />
          <ColorPicker
            label="Action Tertiary"
            value={currentSemanticTheme.actionTertiary}
            onChange={(v) => updateSemanticColor('actionTertiary', v)}
            showSync={shouldShowSemanticSync('actionTertiary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Action Tertiary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('actionTertiary')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Utility</h4>
          <ColorPicker
            label="Shadow"
            value={currentSemanticTheme.shadow}
            onChange={(v) => updateSemanticColor('shadow', v)}
            showSync={shouldShowSemanticSync('shadow')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Shadow color to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('shadow')}
          />
          <ColorPicker
            label="Border"
            value={currentSemanticTheme.border}
            onChange={(v) => updateSemanticColor('border', v)}
            showSync={shouldShowSemanticSync('border')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Border color to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('border')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Brand</h4>
          <ColorPicker
            label="Brand Primary"
            value={currentSemanticTheme.brandPrimary}
            onChange={(v) => updateSemanticColor('brandPrimary', v)}
            showSync={shouldShowSemanticSync('brandPrimary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Brand Primary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
            onSync={() => syncSemanticToken('brandPrimary')}
          />
          <ColorPicker
            label="Brand Secondary"
            value={currentSemanticTheme.brandSecondary}
            onChange={(v) => updateSemanticColor('brandSecondary', v)}
            showSync={shouldShowSemanticSync('brandSecondary')}
            syncTitle={semanticSyncTitle}
            syncAriaLabel={`Sync Brand Secondary to ${semanticTheme === 'light' ? 'dark' : 'light'} theme`}
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
              onChange={(e) => updateSemanticColor('gradientPrimary', sanitizeCSSValue(e.target.value))}
              className="control-input"
              placeholder="e.g., linear-gradient(...) or none"
            />
          </div>
          <div className="control-group">
            <label className="control-label">Gradient Secondary</label>
            <input
              type="text"
              value={currentSemanticTheme.gradientSecondary}
              onChange={(e) => updateSemanticColor('gradientSecondary', sanitizeCSSValue(e.target.value))}
              className="control-input"
              placeholder="e.g., linear-gradient(...) or none"
            />
          </div>
          <div className="control-group">
            <label className="control-label">Gradient Tertiary</label>
            <input
              type="text"
              value={currentSemanticTheme.gradientTertiary}
              onChange={(e) => updateSemanticColor('gradientTertiary', sanitizeCSSValue(e.target.value))}
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
          label="Highlight Color"
          value={tokens.effects.shadowHighlightColor}
          onChange={(v) => setToken('effects', 'shadowHighlightColor', v)}
        />

        {/* Control Shadow */}
        <div className="shadow-config-group">
          <label className="control-label">Control Shadow</label>
          <div className="control-group">
            <label className="control-label-sm">Type</label>
            <select
              value={tokens.shadowConfig.control.type}
              onChange={(e) => setCategory('shadowConfig', {
                control: { ...tokens.shadowConfig.control, type: e.target.value as 'none' | 'standard' | 'neumorphic' | 'elevated' | 'glow' }
              })}
              className="control-select"
            >
              <option value="none">None</option>
              <option value="standard">Standard</option>
              <option value="neumorphic">Neumorphic</option>
              <option value="elevated">Elevated</option>
              <option value="glow">Glow</option>
            </select>
          </div>
          {tokens.shadowConfig.control.type !== 'none' && (
            <>
              <SliderControl
                label="Offset X"
                value={tokens.shadowConfig.control.offsetX}
                onChange={(v) => setCategory('shadowConfig', {
                  control: { ...tokens.shadowConfig.control, offsetX: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Offset Y"
                value={tokens.shadowConfig.control.offsetY}
                onChange={(v) => setCategory('shadowConfig', {
                  control: { ...tokens.shadowConfig.control, offsetY: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Blur"
                value={tokens.shadowConfig.control.blur}
                onChange={(v) => setCategory('shadowConfig', {
                  control: { ...tokens.shadowConfig.control, blur: v }
                })}
                min={0}
                max={100}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Spread"
                value={tokens.shadowConfig.control.spread}
                onChange={(v) => setCategory('shadowConfig', {
                  control: { ...tokens.shadowConfig.control, spread: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
            </>
          )}
        </div>

        {/* Surface Shadow */}
        <div className="shadow-config-group">
          <label className="control-label">Surface Shadow</label>
          <div className="control-group">
            <label className="control-label-sm">Type</label>
            <select
              value={tokens.shadowConfig.surface.type}
              onChange={(e) => setCategory('shadowConfig', {
                surface: { ...tokens.shadowConfig.surface, type: e.target.value as 'none' | 'standard' | 'neumorphic' | 'elevated' | 'glow' }
              })}
              className="control-select"
            >
              <option value="none">None</option>
              <option value="standard">Standard</option>
              <option value="neumorphic">Neumorphic</option>
              <option value="elevated">Elevated</option>
              <option value="glow">Glow</option>
            </select>
          </div>
          {tokens.shadowConfig.surface.type !== 'none' && (
            <>
              <SliderControl
                label="Offset X"
                value={tokens.shadowConfig.surface.offsetX}
                onChange={(v) => setCategory('shadowConfig', {
                  surface: { ...tokens.shadowConfig.surface, offsetX: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Offset Y"
                value={tokens.shadowConfig.surface.offsetY}
                onChange={(v) => setCategory('shadowConfig', {
                  surface: { ...tokens.shadowConfig.surface, offsetY: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Blur"
                value={tokens.shadowConfig.surface.blur}
                onChange={(v) => setCategory('shadowConfig', {
                  surface: { ...tokens.shadowConfig.surface, blur: v }
                })}
                min={0}
                max={100}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Spread"
                value={tokens.shadowConfig.surface.spread}
                onChange={(v) => setCategory('shadowConfig', {
                  surface: { ...tokens.shadowConfig.surface, spread: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
            </>
          )}
        </div>

        {/* Overlay Shadow */}
        <div className="shadow-config-group">
          <label className="control-label">Overlay Shadow</label>
          <div className="control-group">
            <label className="control-label-sm">Type</label>
            <select
              value={tokens.shadowConfig.overlay.type}
              onChange={(e) => setCategory('shadowConfig', {
                overlay: { ...tokens.shadowConfig.overlay, type: e.target.value as 'none' | 'standard' | 'neumorphic' | 'elevated' | 'glow' }
              })}
              className="control-select"
            >
              <option value="none">None</option>
              <option value="standard">Standard</option>
              <option value="neumorphic">Neumorphic</option>
              <option value="elevated">Elevated</option>
              <option value="glow">Glow</option>
            </select>
          </div>
          {tokens.shadowConfig.overlay.type !== 'none' && (
            <>
              <SliderControl
                label="Offset X"
                value={tokens.shadowConfig.overlay.offsetX}
                onChange={(v) => setCategory('shadowConfig', {
                  overlay: { ...tokens.shadowConfig.overlay, offsetX: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Offset Y"
                value={tokens.shadowConfig.overlay.offsetY}
                onChange={(v) => setCategory('shadowConfig', {
                  overlay: { ...tokens.shadowConfig.overlay, offsetY: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Blur"
                value={tokens.shadowConfig.overlay.blur}
                onChange={(v) => setCategory('shadowConfig', {
                  overlay: { ...tokens.shadowConfig.overlay, blur: v }
                })}
                min={0}
                max={100}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Spread"
                value={tokens.shadowConfig.overlay.spread}
                onChange={(v) => setCategory('shadowConfig', {
                  overlay: { ...tokens.shadowConfig.overlay, spread: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
            </>
          )}
        </div>

        {/* Float Shadow */}
        <div className="shadow-config-group">
          <label className="control-label">Float Shadow</label>
          <div className="control-group">
            <label className="control-label-sm">Type</label>
            <select
              value={tokens.shadowConfig.float.type}
              onChange={(e) => setCategory('shadowConfig', {
                float: { ...tokens.shadowConfig.float, type: e.target.value as 'none' | 'standard' | 'neumorphic' | 'elevated' | 'glow' }
              })}
              className="control-select"
            >
              <option value="none">None</option>
              <option value="standard">Standard</option>
              <option value="neumorphic">Neumorphic</option>
              <option value="elevated">Elevated</option>
              <option value="glow">Glow</option>
            </select>
          </div>
          {tokens.shadowConfig.float.type !== 'none' && (
            <>
              <SliderControl
                label="Offset X"
                value={tokens.shadowConfig.float.offsetX}
                onChange={(v) => setCategory('shadowConfig', {
                  float: { ...tokens.shadowConfig.float, offsetX: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Offset Y"
                value={tokens.shadowConfig.float.offsetY}
                onChange={(v) => setCategory('shadowConfig', {
                  float: { ...tokens.shadowConfig.float, offsetY: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Blur"
                value={tokens.shadowConfig.float.blur}
                onChange={(v) => setCategory('shadowConfig', {
                  float: { ...tokens.shadowConfig.float, blur: v }
                })}
                min={0}
                max={100}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Spread"
                value={tokens.shadowConfig.float.spread}
                onChange={(v) => setCategory('shadowConfig', {
                  float: { ...tokens.shadowConfig.float, spread: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
            </>
          )}
        </div>

        {/* Inner Shadow */}
        <div className="shadow-config-group">
          <label className="control-label">Inner Shadow</label>
          <div className="control-group">
            <label className="control-label-sm">Type</label>
            <select
              value={tokens.shadowConfig.inner.type}
              onChange={(e) => setCategory('shadowConfig', {
                inner: { ...tokens.shadowConfig.inner, type: e.target.value as 'none' | 'inset' | 'neumorphic' }
              })}
              className="control-select"
            >
              <option value="none">None</option>
              <option value="inset">Inset</option>
              <option value="neumorphic">Neumorphic Inset</option>
            </select>
          </div>
          {tokens.shadowConfig.inner.type !== 'none' && (
            <>
              <SliderControl
                label="Offset X"
                value={tokens.shadowConfig.inner.offsetX}
                onChange={(v) => setCategory('shadowConfig', {
                  inner: { ...tokens.shadowConfig.inner, offsetX: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Offset Y"
                value={tokens.shadowConfig.inner.offsetY}
                onChange={(v) => setCategory('shadowConfig', {
                  inner: { ...tokens.shadowConfig.inner, offsetY: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Blur"
                value={tokens.shadowConfig.inner.blur}
                onChange={(v) => setCategory('shadowConfig', {
                  inner: { ...tokens.shadowConfig.inner, blur: v }
                })}
                min={0}
                max={100}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Spread"
                value={tokens.shadowConfig.inner.spread}
                onChange={(v) => setCategory('shadowConfig', {
                  inner: { ...tokens.shadowConfig.inner, spread: v }
                })}
                min={-50}
                max={50}
                step={1}
                unit="px"
              />
            </>
          )}
        </div>
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
});
