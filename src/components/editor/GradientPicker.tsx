import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import './GradientPicker.css';

export interface ColorStop {
  color: string;
  position: number; // 0-100
}

export interface GradientValue {
  type: 'linear' | 'radial';
  angle: number; // 0-360, only for linear
  stops: ColorStop[];
}

interface GradientPickerProps {
  label: string;
  value: string; // Can be solid color or gradient
  onChange: (value: string) => void;
}

function parseGradient(value: string): { isSolid: boolean; gradient?: GradientValue; solidColor?: string } {
  try {
    if (!value || typeof value !== 'string') {
      return { isSolid: true, solidColor: '#3b82f6' };
    }

    const trimmedValue = value.trim();

    if (trimmedValue.startsWith('linear-gradient') || trimmedValue.startsWith('radial-gradient')) {
      // Parse gradient
      const isLinear = trimmedValue.startsWith('linear-gradient');
      const match = trimmedValue.match(/gradient\((.*)\)/);

      if (!match || !match[1]) {
        console.warn('Invalid gradient format, falling back to solid color');
        return { isSolid: true, solidColor: '#3b82f6' };
      }

      // Split by comma but respect function calls like rgb()
      const parts: string[] = [];
      let currentPart = '';
      let depth = 0;

      for (const char of match[1]) {
        if (char === '(') depth++;
        if (char === ')') depth--;
        if (char === ',' && depth === 0) {
          parts.push(currentPart.trim());
          currentPart = '';
        } else {
          currentPart += char;
        }
      }
      if (currentPart) parts.push(currentPart.trim());

      let angle = 180;
      let stopsPart = parts;

      if (isLinear && parts.length > 0) {
        const anglePart = parts[0];
        if (anglePart.includes('deg')) {
          const parsedAngle = parseInt(anglePart, 10);
          if (!isNaN(parsedAngle) && isFinite(parsedAngle)) {
            angle = Math.max(0, Math.min(360, parsedAngle));
            stopsPart = parts.slice(1);
          }
        }
      }

      // Parse color stops with robust error handling
      const stops: ColorStop[] = [];
      for (const stop of stopsPart) {
        const stopMatch = stop.match(/(.*?)\s+(\d+)%/);
        if (stopMatch) {
          const color = stopMatch[1].trim();
          const position = parseInt(stopMatch[2], 10);

          if (color && !isNaN(position) && isFinite(position)) {
            stops.push({
              color,
              position: Math.max(0, Math.min(100, position))
            });
          }
        } else if (stop.trim()) {
          // Stop without explicit position
          stops.push({ color: stop.trim(), position: 0 });
        }
      }

      // Ensure we have at least 2 stops
      if (stops.length < 2) {
        return {
          isSolid: false,
          gradient: {
            type: isLinear ? 'linear' : 'radial',
            angle,
            stops: [
              { color: '#3b82f6', position: 0 },
              { color: '#8b5cf6', position: 100 }
            ]
          }
        };
      }

      return {
        isSolid: false,
        gradient: {
          type: isLinear ? 'linear' : 'radial',
          angle,
          stops
        }
      };
    }

    return { isSolid: true, solidColor: trimmedValue || '#3b82f6' };
  } catch (error) {
    console.error('Error parsing gradient:', error);
    return { isSolid: true, solidColor: '#3b82f6' };
  }
}

function gradientToCSS(gradient: GradientValue): string {
  const stops = gradient.stops
    .sort((a, b) => a.position - b.position)
    .map(stop => `${stop.color} ${stop.position}%`)
    .join(', ');

  if (gradient.type === 'linear') {
    return `linear-gradient(${gradient.angle}deg, ${stops})`;
  } else {
    return `radial-gradient(circle, ${stops})`;
  }
}

export function GradientPicker({ label, value, onChange }: GradientPickerProps) {
  const parsed = parseGradient(value);
  const [mode, setMode] = useState<'solid' | 'gradient'>(parsed.isSolid ? 'solid' : 'gradient');
  const [solidColor, setSolidColor] = useState(parsed.solidColor || '#3b82f6');
  const [gradient, setGradient] = useState<GradientValue>(
    parsed.gradient || {
      type: 'linear',
      angle: 180,
      stops: [
        { color: '#3b82f6', position: 0 },
        { color: '#8b5cf6', position: 100 }
      ]
    }
  );
  const [selectedStopIndex, setSelectedStopIndex] = useState(0);

  const handleModeChange = (newMode: 'solid' | 'gradient') => {
    setMode(newMode);
    if (newMode === 'solid') {
      onChange(solidColor);
    } else {
      onChange(gradientToCSS(gradient));
    }
  };

  const handleSolidColorChange = (color: string) => {
    setSolidColor(color);
    onChange(color);
  };

  const handleGradientChange = (newGradient: GradientValue) => {
    setGradient(newGradient);
    onChange(gradientToCSS(newGradient));
  };

  const handleStopColorChange = (index: number, color: string) => {
    const newStops = [...gradient.stops];
    newStops[index] = { ...newStops[index], color };
    handleGradientChange({ ...gradient, stops: newStops });
  };

  const handleStopPositionChange = (index: number, position: number) => {
    const newStops = [...gradient.stops];
    newStops[index] = { ...newStops[index], position };
    handleGradientChange({ ...gradient, stops: newStops });
  };

  const handleAddStop = () => {
    const newPosition = 50;
    const newColor = '#8b5cf6';
    const newStops = [...gradient.stops, { color: newColor, position: newPosition }];
    handleGradientChange({ ...gradient, stops: newStops });
    setSelectedStopIndex(newStops.length - 1);
  };

  const handleRemoveStop = (index: number) => {
    if (gradient.stops.length <= 2) return; // Minimum 2 stops
    const newStops = gradient.stops.filter((_, i) => i !== index);
    handleGradientChange({ ...gradient, stops: newStops });
    setSelectedStopIndex(Math.max(0, index - 1));
  };

  const gradientPreview = mode === 'solid' ? solidColor : gradientToCSS(gradient);

  return (
    <div className="gradient-picker">
      <label className="gradient-picker-label">{label}</label>

      <div className="gradient-mode-toggle">
        <button
          className={`mode-toggle-btn ${mode === 'solid' ? 'active' : ''}`}
          onClick={() => handleModeChange('solid')}
        >
          Solid
        </button>
        <button
          className={`mode-toggle-btn ${mode === 'gradient' ? 'active' : ''}`}
          onClick={() => handleModeChange('gradient')}
        >
          Gradient
        </button>
      </div>

      <div
        className="gradient-preview"
        style={{ background: gradientPreview }}
      />

      {mode === 'solid' ? (
        <div className="solid-color-control">
          <input
            type="color"
            value={solidColor}
            onChange={(e) => handleSolidColorChange(e.target.value)}
            className="color-input"
          />
          <input
            type="text"
            value={solidColor}
            onChange={(e) => handleSolidColorChange(e.target.value)}
            className="color-text-input"
          />
        </div>
      ) : (
        <div className="gradient-controls">
          <div className="gradient-type-control">
            <label className="control-label-sm">Type</label>
            <select
              value={gradient.type}
              onChange={(e) => handleGradientChange({ ...gradient, type: e.target.value as 'linear' | 'radial' })}
              className="gradient-select"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>

          {gradient.type === 'linear' && (
            <div className="gradient-angle-control">
              <label className="control-label-sm">Angle: {gradient.angle}°</label>
              <input
                type="range"
                min="0"
                max="360"
                value={gradient.angle}
                onChange={(e) => handleGradientChange({ ...gradient, angle: parseInt(e.target.value) })}
                className="gradient-slider"
              />
            </div>
          )}

          <div className="gradient-stops-bar">
            {gradient.stops.map((stop, index) => (
              <div
                key={index}
                className={`stop-marker ${selectedStopIndex === index ? 'selected' : ''}`}
                style={{
                  left: `${stop.position}%`,
                  backgroundColor: stop.color
                }}
                onClick={() => setSelectedStopIndex(index)}
              />
            ))}
          </div>

          <div className="gradient-stop-editor">
            <div className="stop-color-control">
              <label className="control-label-sm">Color</label>
              <div className="stop-color-inputs">
                <input
                  type="color"
                  value={gradient.stops[selectedStopIndex]?.color || '#000000'}
                  onChange={(e) => handleStopColorChange(selectedStopIndex, e.target.value)}
                  className="color-input-sm"
                />
                <input
                  type="text"
                  value={gradient.stops[selectedStopIndex]?.color || '#000000'}
                  onChange={(e) => handleStopColorChange(selectedStopIndex, e.target.value)}
                  className="color-text-input-sm"
                />
              </div>
            </div>

            <div className="stop-position-control">
              <label className="control-label-sm">Position: {gradient.stops[selectedStopIndex]?.position || 0}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={gradient.stops[selectedStopIndex]?.position || 0}
                onChange={(e) => handleStopPositionChange(selectedStopIndex, parseInt(e.target.value))}
                className="gradient-slider"
              />
            </div>

            <div className="stop-actions">
              <button
                onClick={handleAddStop}
                className="stop-action-btn"
                title="Add color stop"
              >
                <Plus size={14} />
              </button>
              <button
                onClick={() => handleRemoveStop(selectedStopIndex)}
                className="stop-action-btn"
                disabled={gradient.stops.length <= 2}
                title="Remove color stop"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
