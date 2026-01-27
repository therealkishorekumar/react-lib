import React from 'react';
import './SliderControl.css';

export interface SliderControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
}

export function SliderControl({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange,
}: SliderControlProps) {
  return (
    <div className="slider-control">
      <div className="slider-control-header">
        <label className="slider-control-label">{label}</label>
        <span className="slider-control-value">
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-control-input"
      />
    </div>
  );
}
