import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Radio.css';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const radioId = useMemo(() => id || `radio-${generateShortId()}`, [id]);

    return (
      <label htmlFor={radioId} className={`radio-wrapper ${className}`}>
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className="radio-input"
          {...props}
        />
        <span className="radio-circle">
          <span className="radio-dot" />
        </span>
        {label && <span className="radio-label">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  direction = 'vertical',
  className = '',
}: RadioGroupProps) {
  return (
    <div className={`radio-group radio-group-${direction} ${className}`} role="radiogroup">
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          disabled={option.disabled}
          onChange={() => onChange?.(option.value)}
        />
      ))}
    </div>
  );
}
