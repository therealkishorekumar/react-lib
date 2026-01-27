import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, className = '', id, ...props }, ref) => {
    const checkboxId = useMemo(() => id || `checkbox-${generateShortId()}`, [id]);

    const handleRef = (element: HTMLInputElement | null) => {
      if (element) {
        element.indeterminate = indeterminate || false;
      }
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <label htmlFor={checkboxId} className={`checkbox-wrapper ${className}`}>
        <input
          ref={handleRef}
          type="checkbox"
          id={checkboxId}
          className="checkbox-input"
          {...props}
        />
        <span className="checkbox-box">
          <svg className="checkbox-check" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="checkbox-indeterminate" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 8H12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        </span>
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
