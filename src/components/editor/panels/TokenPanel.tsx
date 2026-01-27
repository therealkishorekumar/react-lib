import { useState, type ReactNode } from 'react';
import { ChevronDown, Palette, Type, Move, Square, Layers, Zap } from 'lucide-react';
import { ColorPicker } from '../ColorPicker';
import { GradientPicker } from '../GradientPicker';
import { SliderControl } from '../SliderControl';
import { FontSelector } from '../FontSelector';
import { ShadowEditor } from '../ShadowEditor';
import { useDesignTokens } from '../../../hooks/useDesignTokens';
import type { ThemeColors } from '../../../types/tokens';
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

  return (
    <div className="token-panel">
      <PanelSection title="Colors" icon={<Palette size={16} />} defaultOpen>
        <div className="theme-mode-toggle">
          <button
            className={`theme-toggle-btn ${colorTheme === 'light' ? 'active' : ''}`}
            onClick={() => setColorTheme('light')}
          >
            Light Theme
          </button>
          <button
            className={`theme-toggle-btn ${colorTheme === 'dark' ? 'active' : ''}`}
            onClick={() => setColorTheme('dark')}
          >
            Dark Theme
          </button>
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Brand Colors</h4>
          <ColorPicker
            label="Primary"
            value={currentTheme.primary}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], primary: v })}
            showSync={shouldShowSync('primary')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('primary')}
          />
          <ColorPicker
            label="Primary Hover"
            value={currentTheme.primaryHover}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], primaryHover: v })}
            showSync={shouldShowSync('primaryHover')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('primaryHover')}
          />
          <ColorPicker
            label="Secondary"
            value={currentTheme.secondary}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], secondary: v })}
            showSync={shouldShowSync('secondary')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('secondary')}
          />
          <ColorPicker
            label="Secondary Hover"
            value={currentTheme.secondaryHover}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], secondaryHover: v })}
            showSync={shouldShowSync('secondaryHover')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('secondaryHover')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Semantic Colors</h4>
          <ColorPicker
            label="Success"
            value={currentTheme.success}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], success: v })}
            showSync={shouldShowSync('success')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('success')}
          />
          <ColorPicker
            label="Warning"
            value={currentTheme.warning}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], warning: v })}
            showSync={shouldShowSync('warning')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('warning')}
          />
          <ColorPicker
            label="Error"
            value={currentTheme.error}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], error: v })}
            showSync={shouldShowSync('error')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('error')}
          />
          <ColorPicker
            label="Info"
            value={currentTheme.info}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], info: v })}
            showSync={shouldShowSync('info')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('info')}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Base Colors</h4>
          <ColorPicker
            label="Background"
            value={currentTheme.background}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], background: v })}
            showSync={shouldShowSync('background')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('background')}
          />
          <ColorPicker
            label="Surface"
            value={currentTheme.surface}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], surface: v })}
            showSync={shouldShowSync('surface')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('surface')}
          />
          <ColorPicker
            label="Primary Text"
            value={currentTheme.text}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], text: v })}
            showSync={shouldShowSync('text')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('text')}
          />
          <ColorPicker
            label="Text Muted"
            value={currentTheme.textMuted}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], textMuted: v })}
            showSync={shouldShowSync('textMuted')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('textMuted')}
          />
          <ColorPicker
            label="On Accent Text"
            value={currentTheme.textOnAccent}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], textOnAccent: v })}
            showSync={shouldShowSync('textOnAccent')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('textOnAccent')}
          />
          <ColorPicker
            label="Border"
            value={currentTheme.border}
            onChange={(v) => setCategory(themeCategory, { ...tokens[themeCategory], border: v })}
            showSync={shouldShowSync('border')}
            syncTitle={syncTitle}
            onSync={() => syncThemeToken('border')}
          />
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
                  background: { ...tokens.patterns.background, type: e.target.value as 'none' | 'dots' | 'grid' | 'plus' },
                })
              }
              className="control-select"
            >
              <option value="none">None</option>
              <option value="dots">Dots</option>
              <option value="grid">Grid</option>
              <option value="plus">Plus</option>
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
                  surface: { ...tokens.patterns.surface, type: e.target.value as 'none' | 'dots' | 'grid' | 'plus' },
                })
              }
              className="control-select"
            >
              <option value="none">None</option>
              <option value="dots">Dots</option>
              <option value="grid">Grid</option>
              <option value="plus">Plus</option>
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
