import React, { useState } from 'react';
import { useDesignTokens } from '../../../context/DesignTokenContext';
import { SemanticColorKey } from '../../../types/tokens';
import { SemanticColorSelector } from '../SemanticColorSelector';
import './ComponentColorsPanel.css';

type ComponentName =
  | 'button' | 'input' | 'card' | 'alert' | 'badge'
  | 'checkbox' | 'radio' | 'toggle' | 'select' | 'dropdown'
  | 'tabs' | 'accordion' | 'modal' | 'tooltip' | 'progress'
  | 'avatar' | 'table' | 'navbar' | 'sidebar' | 'breadcrumb';

interface ComponentInfo {
  name: ComponentName;
  label: string;
  description: string;
}

const components: ComponentInfo[] = [
  { name: 'button', label: 'Button', description: 'Primary action component' },
  { name: 'input', label: 'Input', description: 'Text input fields' },
  { name: 'card', label: 'Card', description: 'Content containers' },
  { name: 'alert', label: 'Alert', description: 'Notification messages' },
  { name: 'badge', label: 'Badge', description: 'Status indicators' },
  { name: 'checkbox', label: 'Checkbox', description: 'Selection controls' },
  { name: 'radio', label: 'Radio', description: 'Single choice selection' },
  { name: 'toggle', label: 'Toggle', description: 'On/off switches' },
  { name: 'select', label: 'Select', description: 'Dropdown selection' },
  { name: 'dropdown', label: 'Dropdown', description: 'Menu dropdowns' },
  { name: 'tabs', label: 'Tabs', description: 'Tab navigation' },
  { name: 'accordion', label: 'Accordion', description: 'Collapsible sections' },
  { name: 'modal', label: 'Modal', description: 'Dialog overlays' },
  { name: 'tooltip', label: 'Tooltip', description: 'Hover information' },
  { name: 'progress', label: 'Progress', description: 'Loading indicators' },
  { name: 'avatar', label: 'Avatar', description: 'User avatars' },
  { name: 'table', label: 'Table', description: 'Data tables' },
  { name: 'navbar', label: 'Navbar', description: 'Top navigation' },
  { name: 'sidebar', label: 'Sidebar', description: 'Side navigation' },
  { name: 'breadcrumb', label: 'Breadcrumb', description: 'Breadcrumb navigation' },
];

export function ComponentColorsPanel() {
  const { tokens, setComponentColor, themeMode } = useDesignTokens();
  const [selectedComponent, setSelectedComponent] = useState<ComponentName>('button');
  const [searchQuery, setSearchQuery] = useState('');

  const currentTheme = themeMode === 'light' ? tokens.semanticLight : tokens.semanticDark;
  const componentConfig = tokens.componentColors[selectedComponent];

  const filteredComponents = components.filter(comp =>
    comp.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateComponentColor = (path: string[], value: SemanticColorKey) => {
    // Build the full path including the component name
    const fullPath = [selectedComponent, ...path];
    setComponentColor(fullPath, value);
  };

  const renderColorControls = () => {
    if (!componentConfig) return null;

    switch (selectedComponent) {
      case 'button': {
        const config = componentConfig as typeof tokens.componentColors.button;
        return (
          <div className="component-color-controls">
            <div className="component-color-section">
              <h4>Primary Variant</h4>
              <SemanticColorSelector
                label="Background"
                value={config.primary.background}
                onChange={(val) => updateComponentColor(['primary', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Background Hover"
                value={config.primary.backgroundHover}
                onChange={(val) => updateComponentColor(['primary', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={config.primary.text}
                onChange={(val) => updateComponentColor(['primary', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={config.primary.border}
                onChange={(val) => updateComponentColor(['primary', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>

            <div className="component-color-section">
              <h4>Secondary Variant</h4>
              <SemanticColorSelector
                label="Background"
                value={config.secondary.background}
                onChange={(val) => updateComponentColor(['secondary', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Background Hover"
                value={config.secondary.backgroundHover}
                onChange={(val) => updateComponentColor(['secondary', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={config.secondary.text}
                onChange={(val) => updateComponentColor(['secondary', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={config.secondary.border}
                onChange={(val) => updateComponentColor(['secondary', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>

            <div className="component-color-section">
              <h4>Outline Variant</h4>
              <SemanticColorSelector
                label="Background"
                value={config.outline.background}
                onChange={(val) => updateComponentColor(['outline', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Background Hover"
                value={config.outline.backgroundHover}
                onChange={(val) => updateComponentColor(['outline', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={config.outline.text}
                onChange={(val) => updateComponentColor(['outline', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text Hover"
                value={config.outline.textHover}
                onChange={(val) => updateComponentColor(['outline', 'textHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={config.outline.border}
                onChange={(val) => updateComponentColor(['outline', 'border'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border Hover"
                value={config.outline.borderHover}
                onChange={(val) => updateComponentColor(['outline', 'borderHover'], val)}
                currentTheme={currentTheme}
              />
            </div>

            <div className="component-color-section">
              <h4>Ghost Variant</h4>
              <SemanticColorSelector
                label="Background"
                value={config.ghost.background}
                onChange={(val) => updateComponentColor(['ghost', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Background Hover"
                value={config.ghost.backgroundHover}
                onChange={(val) => updateComponentColor(['ghost', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={config.ghost.text}
                onChange={(val) => updateComponentColor(['ghost', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text Hover"
                value={config.ghost.textHover}
                onChange={(val) => updateComponentColor(['ghost', 'textHover'], val)}
                currentTheme={currentTheme}
              />
            </div>

            <div className="component-color-section">
              <h4>Danger Variant</h4>
              <SemanticColorSelector
                label="Background"
                value={config.danger.background}
                onChange={(val) => updateComponentColor(['danger', 'background'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Background Hover"
                value={config.danger.backgroundHover}
                onChange={(val) => updateComponentColor(['danger', 'backgroundHover'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Text"
                value={config.danger.text}
                onChange={(val) => updateComponentColor(['danger', 'text'], val)}
                currentTheme={currentTheme}
              />
              <SemanticColorSelector
                label="Border"
                value={config.danger.border}
                onChange={(val) => updateComponentColor(['danger', 'border'], val)}
                currentTheme={currentTheme}
              />
            </div>
          </div>
        );
      }

      case 'input': {
        const config = componentConfig as typeof tokens.componentColors.input;
        return (
          <div className="component-color-controls">
            <SemanticColorSelector
              label="Background"
              value={config.background}
              onChange={(val) => updateComponentColor(['background'], val)}
              currentTheme={currentTheme}
            />
            <SemanticColorSelector
              label="Text"
              value={config.text}
              onChange={(val) => updateComponentColor(['text'], val)}
              currentTheme={currentTheme}
            />
            <SemanticColorSelector
              label="Placeholder"
              value={config.placeholder}
              onChange={(val) => updateComponentColor(['placeholder'], val)}
              currentTheme={currentTheme}
            />
            <SemanticColorSelector
              label="Border"
              value={config.border}
              onChange={(val) => updateComponentColor(['border'], val)}
              currentTheme={currentTheme}
            />
            <SemanticColorSelector
              label="Border Hover"
              value={config.borderHover}
              onChange={(val) => updateComponentColor(['borderHover'], val)}
              currentTheme={currentTheme}
            />
            <SemanticColorSelector
              label="Border Focus"
              value={config.borderFocus}
              onChange={(val) => updateComponentColor(['borderFocus'], val)}
              currentTheme={currentTheme}
            />
            <SemanticColorSelector
              label="Border Error"
              value={config.borderError}
              onChange={(val) => updateComponentColor(['borderError'], val)}
              currentTheme={currentTheme}
            />
          </div>
        );
      }

      // Add other components as needed
      default:
        return (
          <div className="component-color-placeholder">
            <p>Color customization for {selectedComponent} coming soon...</p>
            <p className="component-color-placeholder-note">
              This component uses the default semantic color mappings.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="component-colors-panel">
      <div className="component-colors-header">
        <h3>Component Colors</h3>
        <p className="component-colors-description">
          Customize which semantic colors each component uses
        </p>
      </div>

      <div className="component-colors-search">
        <input
          type="text"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="component-colors-layout">
        <div className="component-colors-list">
          {filteredComponents.map((comp) => (
            <button
              key={comp.name}
              className={`component-colors-item ${selectedComponent === comp.name ? 'active' : ''}`}
              onClick={() => setSelectedComponent(comp.name)}
            >
              <span className="component-colors-item-label">{comp.label}</span>
              <span className="component-colors-item-description">{comp.description}</span>
            </button>
          ))}
        </div>

        <div className="component-colors-editor">
          <div className="component-colors-editor-header">
            <h4>{components.find(c => c.name === selectedComponent)?.label}</h4>
            <p>{components.find(c => c.name === selectedComponent)?.description}</p>
          </div>

          <div className="component-colors-editor-content">
            {renderColorControls()}
          </div>
        </div>
      </div>
    </div>
  );
}
