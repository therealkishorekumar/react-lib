import { useState, type ReactNode } from 'react';
import { ChevronDown, Box, CheckSquare, Circle, ToggleLeft, CreditCard, Bell, Activity, Image, Layout } from 'lucide-react';
import { SliderControl } from '../SliderControl';
import { ColorPicker } from '../ColorPicker';
import { GradientPicker } from '../GradientPicker';
import { useDesignTokens } from '../../../hooks/useDesignTokens';
import { parseCSSLength, formatCSSLength, isValidTextTransform, sanitizeCSSValue } from '../../../utils/cssValidation';
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
  const { tokens, setCategory } = useDesignTokens();

  const parseValue = (value: string): number => {
    const parsed = parseCSSLength(value);
    return parsed ? parsed.value : 0;
  };

  const formatValue = (value: number, unit: string): string => {
    return formatCSSLength(value, unit);
  };

  return (
    <div className="component-panel">
      <PanelSection title="Button" icon={<Box size={16} />} defaultOpen>
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
      </PanelSection>

      <PanelSection title="Input" icon={<Box size={16} />}>
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
      </PanelSection>

      <PanelSection title="Avatar" icon={<Image size={16} />}>
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
      </PanelSection>

      <PanelSection title="Checkbox" icon={<CheckSquare size={16} />}>
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
      </PanelSection>

      <PanelSection title="Radio" icon={<Circle size={16} />}>
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
      </PanelSection>

      <PanelSection title="Toggle" icon={<ToggleLeft size={16} />}>
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
      </PanelSection>

      <PanelSection title="Badge" icon={<Bell size={16} />}>
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
      </PanelSection>

      <PanelSection title="Card" icon={<CreditCard size={16} />}>
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
      </PanelSection>

      <PanelSection title="Alert" icon={<Bell size={16} />}>
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
      </PanelSection>

      <PanelSection title="Tabs" icon={<Layout size={16} />}>
        <SliderControl
          label="Indicator Height"
          value={parseValue(tokens.components.tabs.indicatorHeight)}
          min={1}
          max={6}
          step={1}
          unit="px"
          onChange={(v) => setCategory('components', { tabs: { ...tokens.components.tabs, indicatorHeight: formatValue(v, 'px') } })}
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
      </PanelSection>

      <PanelSection title="Progress" icon={<Activity size={16} />}>
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
      </PanelSection>

      <PanelSection title="Modal" icon={<Box size={16} />}>
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
      </PanelSection>

    </div>
  );
}
