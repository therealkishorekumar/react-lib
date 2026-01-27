import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Toggle.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, size = 'md', className = '', id, ...props }, ref) => {
    const toggleId = useMemo(() => id || `toggle-${generateShortId()}`, [id]);

    return (
      <label htmlFor={toggleId} className={`toggle-wrapper toggle-${size} ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          id={toggleId}
          className="toggle-input"
          role="switch"
          {...props}
        />
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        {label && <span className="toggle-label">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';
