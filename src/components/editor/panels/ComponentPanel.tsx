import { useState, type ReactNode } from 'react';
import { ChevronDown, Box, CheckSquare, Circle, ToggleLeft, CreditCard, Bell, Activity, Image, Layout, List, Menu, Navigation } from 'lucide-react';
import { SliderControl } from '../SliderControl';
import { ColorPicker } from '../ColorPicker';
import { GradientPicker } from '../GradientPicker';
import { SemanticColorSelector } from '../SemanticColorSelector';
import { useDesignTokens } from '../../../hooks/useDesignTokens';
import { parseCSSLength, formatCSSLength, isValidTextTransform, sanitizeCSSValue } from '../../../utils/cssValidation';
import type { SemanticColorKey } from '../../../types/tokens';
import './ComponentPanel.css';

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

export function ComponentPanel() {
  const { tokens, setCategory, setComponentColor, themeMode } = useDesignTokens();
  const currentTheme = themeMode === 'light' ? tokens.semanticLight : tokens.semanticDark;

  const parseValue = (value: string): number => {
    const parsed = parseCSSLength(value);
    return parsed ? parsed.value : 0;
  };

  const formatValue = (value: number, unit: string): string => {
    return formatCSSLength(value, unit);
  };

  const updateComponentColor = (component: string, path: string[], value: SemanticColorKey) => {
    setComponentColor([component, ...path], value);
  };

  return (
    <div className="component-panel">
      <PanelSection title="Button" icon={<Box size={16} />} defaultOpen>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <div className="color-variants-grid">
            <div className="color-variant-section">
              <span className="color-variant-label">Primary</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.button.primary.background}
                onChange={(val) => updateComponentColor('button', ['primary', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Hover"
                value={tokens.componentColors.button.primary.backgroundHover}
                onChange={(val) => updateComponentColor('button', ['primary', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.button.primary.text}
                onChange={(val) => updateComponentColor('button', ['primary', 'text'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Secondary</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.button.secondary.background}
                onChange={(val) => updateComponentColor('button', ['secondary', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Hover"
                value={tokens.componentColors.button.secondary.backgroundHover}
                onChange={(val) => updateComponentColor('button', ['secondary', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.button.secondary.text}
                onChange={(val) => updateComponentColor('button', ['secondary', 'text'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Danger</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.button.danger.background}
                onChange={(val) => updateComponentColor('button', ['danger', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Hover"
                value={tokens.componentColors.button.danger.backgroundHover}
                onChange={(val) => updateComponentColor('button', ['danger', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.button.danger.text}
                onChange={(val) => updateComponentColor('button', ['danger', 'text'], val)}
                currentTheme={currentTheme}
              />
            </div>
          </div>
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.button.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { button: { ...tokens.components.button, borderWidth: formatValue(v, 'px') } })}
        />
        <div className="control-group">
          <label className="control-label">Inner Shadow</label>
          <input
            type="text"
            value={tokens.components.button.innerShadow}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { button: { ...tokens.components.button, innerShadow: sanitized } });
            }}
            className="control-input"
            placeholder="none or inset 0 1px 2px rgba(0,0,0,0.1)"
          />
        </div>
        <div className="control-group">
          <label className="control-label">Text Transform</label>
          <select
            value={tokens.components.button.textTransform}
            onChange={(e) => {
              const validated = isValidTextTransform(e.target.value);
              if (validated) {
                setCategory('components', { button: { ...tokens.components.button, textTransform: validated } });
              }
            }}
            className="control-select"
          >
            <option value="none">None</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>
        </div>
        <div className="control-group">
          <label className="control-label">Letter Spacing</label>
          <input
            type="text"
            value={tokens.components.button.letterSpacing}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { button: { ...tokens.components.button, letterSpacing: sanitized } });
            }}
            className="control-input"
            placeholder="normal or 0.05em"
          />
        </div>
        <div className="control-group">
          <label className="control-label">Glow Effect</label>
          <input
            type="text"
            value={tokens.components.button.glowEffect}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { button: { ...tokens.components.button, glowEffect: sanitized } });
            }}
            className="control-input"
            placeholder="none or 0 0 10px rgba(0,255,255,0.6)"
          />
        </div>
        <div className="control-group">
          <label className="control-label">Gradient</label>
          <input
            type="text"
            value={tokens.components.button.gradient}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { button: { ...tokens.components.button, gradient: sanitized } });
            }}
            className="control-input"
            placeholder="none or linear-gradient(...)"
          />
        </div>
        </div>
      </PanelSection>

      <PanelSection title="Input" icon={<Box size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.input.background}
            onChange={(val) => updateComponentColor('input', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.input.text}
            onChange={(val) => updateComponentColor('input', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Placeholder"
            value={tokens.componentColors.input.placeholder}
            onChange={(val) => updateComponentColor('input', ['placeholder'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.input.border}
            onChange={(val) => updateComponentColor('input', ['border'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border Focus"
            value={tokens.componentColors.input.borderFocus}
            onChange={(val) => updateComponentColor('input', ['borderFocus'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border Error"
            value={tokens.componentColors.input.borderError}
            onChange={(val) => updateComponentColor('input', ['borderError'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.input.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { input: { ...tokens.components.input, borderWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Focus Ring Width"
          value={parseValue(tokens.components.input.focusRingWidth)}
          min={0}
          max={6}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { input: { ...tokens.components.input, focusRingWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Focus Ring Opacity"
          value={tokens.components.input.focusRingAlpha}
          min={0}
          max={1}
          step={0.05}
          onChange={(v) => setCategory('components', { input: { ...tokens.components.input, focusRingAlpha: v } })}
        />
        <div className="control-group">
          <label className="control-label">Inner Shadow</label>
          <input
            type="text"
            value={tokens.components.input.innerShadow}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { input: { ...tokens.components.input, innerShadow: sanitized } });
            }}
            className="control-input"
            placeholder="none or inset 2px 2px 4px rgba(0,0,0,0.1)"
          />
        </div>
        <div className="control-group">
          <label className="control-label">Glow on Focus</label>
          <input
            type="text"
            value={tokens.components.input.glowOnFocus}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { input: { ...tokens.components.input, glowOnFocus: sanitized } });
            }}
            className="control-input"
            placeholder="none or 0 0 12px rgba(0,255,255,0.8)"
          />
        </div>
        </div>
      </PanelSection>

      <PanelSection title="Avatar" icon={<Image size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.avatar.background}
            onChange={(val) => updateComponentColor('avatar', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.avatar.text}
            onChange={(val) => updateComponentColor('avatar', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.avatar.border}
            onChange={(val) => updateComponentColor('avatar', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.avatar.borderWidth)}
          min={0}
          max={8}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { avatar: { ...tokens.components.avatar, borderWidth: formatValue(v, 'px') } })}
        />
        <GradientPicker
          label="Border Color"
          value={tokens.components.avatar.borderColor.includes('var(') ? '#e5e7eb' : tokens.components.avatar.borderColor}
          onChange={(v) => setCategory('components', { avatar: { ...tokens.components.avatar, borderColor: v } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Checkbox" icon={<CheckSquare size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.checkbox.background}
            onChange={(val) => updateComponentColor('checkbox', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Background Checked"
            value={tokens.componentColors.checkbox.backgroundChecked}
            onChange={(val) => updateComponentColor('checkbox', ['backgroundChecked'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.checkbox.border}
            onChange={(val) => updateComponentColor('checkbox', ['border'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border Checked"
            value={tokens.componentColors.checkbox.borderChecked}
            onChange={(val) => updateComponentColor('checkbox', ['borderChecked'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Checkmark"
            value={tokens.componentColors.checkbox.checkmark}
            onChange={(val) => updateComponentColor('checkbox', ['checkmark'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Size"
          value={parseValue(tokens.components.checkbox.size)}
          min={14}
          max={28}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { checkbox: { ...tokens.components.checkbox, size: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.checkbox.borderWidth)}
          min={1}
          max={4}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { checkbox: { ...tokens.components.checkbox, borderWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Radius"
          value={parseValue(tokens.components.checkbox.borderRadius.includes('var(') ? '4px' : tokens.components.checkbox.borderRadius)}
          min={0}
          max={999}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { checkbox: { ...tokens.components.checkbox, borderRadius: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Radio" icon={<Circle size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.radio.background}
            onChange={(val) => updateComponentColor('radio', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Background Checked"
            value={tokens.componentColors.radio.backgroundChecked}
            onChange={(val) => updateComponentColor('radio', ['backgroundChecked'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.radio.border}
            onChange={(val) => updateComponentColor('radio', ['border'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border Checked"
            value={tokens.componentColors.radio.borderChecked}
            onChange={(val) => updateComponentColor('radio', ['borderChecked'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Dot"
            value={tokens.componentColors.radio.dot}
            onChange={(val) => updateComponentColor('radio', ['dot'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Size"
          value={parseValue(tokens.components.radio.size)}
          min={14}
          max={28}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { radio: { ...tokens.components.radio, size: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.radio.borderWidth)}
          min={1}
          max={4}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { radio: { ...tokens.components.radio, borderWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Dot Size"
          value={parseValue(tokens.components.radio.dotSize)}
          min={4}
          max={16}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { radio: { ...tokens.components.radio, dotSize: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Toggle" icon={<ToggleLeft size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Track Background"
            value={tokens.componentColors.toggle.trackBackground}
            onChange={(val) => updateComponentColor('toggle', ['trackBackground'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Track Background Active"
            value={tokens.componentColors.toggle.trackBackgroundActive}
            onChange={(val) => updateComponentColor('toggle', ['trackBackgroundActive'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Thumb"
            value={tokens.componentColors.toggle.thumb}
            onChange={(val) => updateComponentColor('toggle', ['thumb'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Thumb Border"
            value={tokens.componentColors.toggle.thumbBorder}
            onChange={(val) => updateComponentColor('toggle', ['thumbBorder'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Track Height"
          value={parseValue(tokens.components.toggle.trackHeight)}
          min={16}
          max={36}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { toggle: { ...tokens.components.toggle, trackHeight: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Thumb Size"
          value={parseValue(tokens.components.toggle.thumbSize)}
          min={12}
          max={32}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { toggle: { ...tokens.components.toggle, thumbSize: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.toggle.borderWidth)}
          min={0}
          max={4}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { toggle: { ...tokens.components.toggle, borderWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Thumb Border"
          value={parseValue(tokens.components.toggle.thumbBorderWidth)}
          min={0}
          max={4}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { toggle: { ...tokens.components.toggle, thumbBorderWidth: formatValue(v, 'px') } })}
        />
        <div className="control-group">
          <label className="control-label">Track Shadow</label>
          <input
            type="text"
            value={tokens.components.toggle.trackShadow}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { toggle: { ...tokens.components.toggle, trackShadow: sanitized } });
            }}
            className="control-input"
            placeholder="e.g. 4px 4px 0 0 var(--shadow-color)"
          />
        </div>
        <div className="control-group">
          <label className="control-label">Thumb Shadow</label>
          <input
            type="text"
            value={tokens.components.toggle.thumbShadow}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { toggle: { ...tokens.components.toggle, thumbShadow: sanitized } });
            }}
            className="control-input"
            placeholder="e.g. 2px 2px 0 0 var(--shadow-color)"
          />
        </div>
        </div>
      </PanelSection>

      <PanelSection title="Badge" icon={<Bell size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <div className="color-variants-grid">
            <div className="color-variant-section">
              <span className="color-variant-label">Primary</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.badge.primary.background}
                onChange={(val) => updateComponentColor('badge', ['primary', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.badge.primary.text}
                onChange={(val) => updateComponentColor('badge', ['primary', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.badge.primary.border}
                onChange={(val) => updateComponentColor('badge', ['primary', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Secondary</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.badge.secondary.background}
                onChange={(val) => updateComponentColor('badge', ['secondary', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.badge.secondary.text}
                onChange={(val) => updateComponentColor('badge', ['secondary', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.badge.secondary.border}
                onChange={(val) => updateComponentColor('badge', ['secondary', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Success</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.badge.success.background}
                onChange={(val) => updateComponentColor('badge', ['success', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.badge.success.text}
                onChange={(val) => updateComponentColor('badge', ['success', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.badge.success.border}
                onChange={(val) => updateComponentColor('badge', ['success', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Warning</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.badge.warning.background}
                onChange={(val) => updateComponentColor('badge', ['warning', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.badge.warning.text}
                onChange={(val) => updateComponentColor('badge', ['warning', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.badge.warning.border}
                onChange={(val) => updateComponentColor('badge', ['warning', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Error</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.badge.error.background}
                onChange={(val) => updateComponentColor('badge', ['error', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.badge.error.text}
                onChange={(val) => updateComponentColor('badge', ['error', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.badge.error.border}
                onChange={(val) => updateComponentColor('badge', ['error', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
          </div>
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <div className="control-group">
          <label className="control-label">Text Transform</label>
          <select
            value={tokens.components.badge.textTransform}
            onChange={(e) => {
              const validated = isValidTextTransform(e.target.value);
              if (validated) {
                setCategory('components', { badge: { ...tokens.components.badge, textTransform: validated } });
              }
            }}
            className="control-select"
          >
            <option value="none">None</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>
        </div>
        <div className="control-group">
          <label className="control-label">Letter Spacing</label>
          <input
            type="text"
            value={tokens.components.badge.letterSpacing}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { badge: { ...tokens.components.badge, letterSpacing: sanitized } });
            }}
            className="control-input"
            placeholder="normal or 0.05em"
          />
        </div>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.badge.borderWidth)}
          min={0}
          max={3}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { badge: { ...tokens.components.badge, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Card" icon={<CreditCard size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.card.background}
            onChange={(val) => updateComponentColor('card', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Background Elevated"
            value={tokens.componentColors.card.backgroundElevated}
            onChange={(val) => updateComponentColor('card', ['backgroundElevated'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.card.text}
            onChange={(val) => updateComponentColor('card', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text Muted"
            value={tokens.componentColors.card.textMuted}
            onChange={(val) => updateComponentColor('card', ['textMuted'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.card.border}
            onChange={(val) => updateComponentColor('card', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.card.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { card: { ...tokens.components.card, borderWidth: formatValue(v, 'px') } })}
        />
        <div className="control-group">
          <label className="control-label">
            <input
              type="checkbox"
              checked={tokens.components.card.elevatedBorderEnabled}
              onChange={(e) => setCategory('components', { card: { ...tokens.components.card, elevatedBorderEnabled: e.target.checked } })}
              style={{ marginRight: '8px' }}
            />
            Elevated Border
          </label>
        </div>
        <SliderControl
          label="Elevated Border Width"
          value={parseValue(tokens.components.card.elevatedBorderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { card: { ...tokens.components.card, elevatedBorderWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Header Border Width"
          value={parseValue(tokens.components.card.headerBorderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { card: { ...tokens.components.card, headerBorderWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Backdrop Blur"
          value={parseValue(tokens.components.card.backdropBlur)}
          min={0}
          max={30}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { card: { ...tokens.components.card, backdropBlur: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Surface Opacity"
          value={tokens.components.card.surfaceOpacity}
          min={0}
          max={1}
          step={0.05}
          onChange={(v) => setCategory('components', { card: { ...tokens.components.card, surfaceOpacity: v } })}
        />
        <div className="control-group">
          <label className="control-label">Inner Shadow</label>
          <input
            type="text"
            value={tokens.components.card.innerShadow}
            onChange={(e) => {
              const sanitized = sanitizeCSSValue(e.target.value);
              setCategory('components', { card: { ...tokens.components.card, innerShadow: sanitized } });
            }}
            className="control-input"
            placeholder="none or inset 1px 1px 4px rgba(0,0,0,0.08)"
          />
        </div>
        </div>
      </PanelSection>

      <PanelSection title="Alert" icon={<Bell size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <div className="color-variants-grid">
            <div className="color-variant-section">
              <span className="color-variant-label">Info</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.alert.info.background}
                onChange={(val) => updateComponentColor('alert', ['info', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.alert.info.text}
                onChange={(val) => updateComponentColor('alert', ['info', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.alert.info.border}
                onChange={(val) => updateComponentColor('alert', ['info', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Success</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.alert.success.background}
                onChange={(val) => updateComponentColor('alert', ['success', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.alert.success.text}
                onChange={(val) => updateComponentColor('alert', ['success', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.alert.success.border}
                onChange={(val) => updateComponentColor('alert', ['success', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Warning</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.alert.warning.background}
                onChange={(val) => updateComponentColor('alert', ['warning', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.alert.warning.text}
                onChange={(val) => updateComponentColor('alert', ['warning', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.alert.warning.border}
                onChange={(val) => updateComponentColor('alert', ['warning', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
            <div className="color-variant-section">
              <span className="color-variant-label">Error</span>
              <SemanticColorSelector
                label="Background"
                value={tokens.componentColors.alert.error.background}
                onChange={(val) => updateComponentColor('alert', ['error', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={tokens.componentColors.alert.error.text}
                onChange={(val) => updateComponentColor('alert', ['error', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={tokens.componentColors.alert.error.border}
                onChange={(val) => updateComponentColor('alert', ['error', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
          </div>
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Icon Size"
          value={parseValue(tokens.components.alert.iconSize)}
          min={16}
          max={32}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { alert: { ...tokens.components.alert, iconSize: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.alert.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { alert: { ...tokens.components.alert, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Tabs" icon={<Layout size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.tabs.background}
            onChange={(val) => updateComponentColor('tabs', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.tabs.text}
            onChange={(val) => updateComponentColor('tabs', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text Active"
            value={tokens.componentColors.tabs.textActive}
            onChange={(val) => updateComponentColor('tabs', ['textActive'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Indicator"
            value={tokens.componentColors.tabs.indicator}
            onChange={(val) => updateComponentColor('tabs', ['indicator'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.tabs.border}
            onChange={(val) => updateComponentColor('tabs', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Indicator Height"
          value={parseValue(tokens.components.tabs.indicatorHeight)}
          min={1}
          max={6}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { tabs: { ...tokens.components.tabs, indicatorHeight: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.tabs.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { tabs: { ...tokens.components.tabs, borderWidth: formatValue(v, 'px') } })}
        />
        <div className="control-group">
          <label className="control-label">Indicator Style</label>
          <select
            value={tokens.components.tabs.indicatorStyle}
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'underline' || value === 'pill' || value === 'enclosed') {
                setCategory('components', { tabs: { ...tokens.components.tabs, indicatorStyle: value } });
              }
            }}
            className="control-select"
          >
            <option value="underline">Underline</option>
            <option value="pill">Pill</option>
            <option value="enclosed">Enclosed</option>
          </select>
        </div>
        </div>
      </PanelSection>

      <PanelSection title="Progress" icon={<Activity size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Track"
            value={tokens.componentColors.progress.track}
            onChange={(val) => updateComponentColor('progress', ['track'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Fill"
            value={tokens.componentColors.progress.fill}
            onChange={(val) => updateComponentColor('progress', ['fill'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.progress.text}
            onChange={(val) => updateComponentColor('progress', ['text'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Track Height"
          value={parseValue(tokens.components.progress.trackHeight)}
          min={4}
          max={20}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { progress: { ...tokens.components.progress, trackHeight: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Radius"
          value={parseValue(tokens.components.progress.borderRadius.includes('var(') ? '9999px' : tokens.components.progress.borderRadius)}
          min={0}
          max={999}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { progress: { ...tokens.components.progress, borderRadius: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Modal" icon={<Box size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.modal.background}
            onChange={(val) => updateComponentColor('modal', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Backdrop"
            value={tokens.componentColors.modal.backdrop}
            onChange={(val) => updateComponentColor('modal', ['backdrop'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.modal.text}
            onChange={(val) => updateComponentColor('modal', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.modal.border}
            onChange={(val) => updateComponentColor('modal', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <ColorPicker
          label="Backdrop Color"
          value={tokens.components.modal.backdropColor}
          onChange={(v) => setCategory('components', { modal: { ...tokens.components.modal, backdropColor: v } })}
        />
        <SliderControl
          label="Backdrop Opacity"
          value={parseFloat(tokens.components.modal.backdropOpacity)}
          min={0}
          max={1}
          step={0.1}
          onChange={(v) => setCategory('components', { modal: { ...tokens.components.modal, backdropOpacity: v.toString() } })}
        />
        <SliderControl
          label="Backdrop Blur"
          value={parseValue(tokens.components.modal.backdropBlur)}
          min={0}
          max={20}
          step={2}
          unit="px"
          onChange={(v) => setCategory('components', { modal: { ...tokens.components.modal, backdropBlur: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.modal.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { modal: { ...tokens.components.modal, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Select" icon={<Box size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.select.background}
            onChange={(val) => updateComponentColor('select', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.select.text}
            onChange={(val) => updateComponentColor('select', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.select.border}
            onChange={(val) => updateComponentColor('select', ['border'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border Hover"
            value={tokens.componentColors.select.borderHover}
            onChange={(val) => updateComponentColor('select', ['borderHover'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border Focus"
            value={tokens.componentColors.select.borderFocus}
            onChange={(val) => updateComponentColor('select', ['borderFocus'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.select.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { select: { ...tokens.components.select, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Dropdown" icon={<Menu size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.dropdown.background}
            onChange={(val) => updateComponentColor('dropdown', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Item Hover"
            value={tokens.componentColors.dropdown.itemHover}
            onChange={(val) => updateComponentColor('dropdown', ['itemHover'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.dropdown.text}
            onChange={(val) => updateComponentColor('dropdown', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.dropdown.border}
            onChange={(val) => updateComponentColor('dropdown', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.dropdown.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { dropdown: { ...tokens.components.dropdown, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Accordion" icon={<List size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.accordion.background}
            onChange={(val) => updateComponentColor('accordion', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Background Hover"
            value={tokens.componentColors.accordion.backgroundHover}
            onChange={(val) => updateComponentColor('accordion', ['backgroundHover'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.accordion.text}
            onChange={(val) => updateComponentColor('accordion', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.accordion.border}
            onChange={(val) => updateComponentColor('accordion', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.accordion.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { accordion: { ...tokens.components.accordion, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Tooltip" icon={<Box size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.tooltip.background}
            onChange={(val) => updateComponentColor('tooltip', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.tooltip.text}
            onChange={(val) => updateComponentColor('tooltip', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.tooltip.border}
            onChange={(val) => updateComponentColor('tooltip', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
      </PanelSection>

      <PanelSection title="Table" icon={<Box size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.table.background}
            onChange={(val) => updateComponentColor('table', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Header Background"
            value={tokens.componentColors.table.headerBackground}
            onChange={(val) => updateComponentColor('table', ['headerBackground'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Header Text"
            value={tokens.componentColors.table.headerText}
            onChange={(val) => updateComponentColor('table', ['headerText'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Row Hover"
            value={tokens.componentColors.table.rowHover}
            onChange={(val) => updateComponentColor('table', ['rowHover'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.table.text}
            onChange={(val) => updateComponentColor('table', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.table.border}
            onChange={(val) => updateComponentColor('table', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.table.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { table: { ...tokens.components.table, borderWidth: formatValue(v, 'px') } })}
        />
        <SliderControl
          label="Header Border Width"
          value={parseValue(tokens.components.table.headerBorderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { table: { ...tokens.components.table, headerBorderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Navbar" icon={<Navigation size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.navbar.background}
            onChange={(val) => updateComponentColor('navbar', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.navbar.text}
            onChange={(val) => updateComponentColor('navbar', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text Hover"
            value={tokens.componentColors.navbar.textHover}
            onChange={(val) => updateComponentColor('navbar', ['textHover'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.navbar.border}
            onChange={(val) => updateComponentColor('navbar', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.navbar.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { navbar: { ...tokens.components.navbar, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Sidebar" icon={<Menu size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Background"
            value={tokens.componentColors.sidebar.background}
            onChange={(val) => updateComponentColor('sidebar', ['background'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.sidebar.text}
            onChange={(val) => updateComponentColor('sidebar', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text Active"
            value={tokens.componentColors.sidebar.textActive}
            onChange={(val) => updateComponentColor('sidebar', ['textActive'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Item Hover"
            value={tokens.componentColors.sidebar.itemHover}
            onChange={(val) => updateComponentColor('sidebar', ['itemHover'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Border"
            value={tokens.componentColors.sidebar.border}
            onChange={(val) => updateComponentColor('sidebar', ['border'], val)}
            currentTheme={currentTheme}
          />
        </div>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Styles</h4>
        <SliderControl
          label="Border Width"
          value={parseValue(tokens.components.sidebar.borderWidth)}
          min={0}
          max={5}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { sidebar: { ...tokens.components.sidebar, borderWidth: formatValue(v, 'px') } })}
        />
        </div>
      </PanelSection>

      <PanelSection title="Breadcrumb" icon={<Navigation size={16} />}>
        <div className="panel-subsection">
          <h4 className="panel-subsection-title">Colors</h4>
          <SemanticColorSelector
            label="Text"
            value={tokens.componentColors.breadcrumb.text}
            onChange={(val) => updateComponentColor('breadcrumb', ['text'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Text Active"
            value={tokens.componentColors.breadcrumb.textActive}
            onChange={(val) => updateComponentColor('breadcrumb', ['textActive'], val)}
            currentTheme={currentTheme}
          />
          <SemanticColorSelector
            label="Separator"
            value={tokens.componentColors.breadcrumb.separator}
            onChange={(val) => updateComponentColor('breadcrumb', ['separator'], val)}
            currentTheme={currentTheme}
          />
        </div>
      </PanelSection>

    </div>
  );
}
