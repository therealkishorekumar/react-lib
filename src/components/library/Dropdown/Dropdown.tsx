import React, { useState, useRef, useEffect, HTMLAttributes, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import './Dropdown.css';

export interface DropdownItem {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'> {
  trigger: ReactNode;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
  align?: 'left' | 'right';
}

export function Dropdown({
  trigger,
  items,
  onSelect,
  align = 'left',
  className = '',
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (item: DropdownItem) => {
    if (item.disabled || item.divider) return;
    onSelect?.(item);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`dropdown ${className}`} {...props}>
      <button
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDown className={`dropdown-icon ${isOpen ? 'dropdown-icon-open' : ''}`} size={16} />
      </button>
      {isOpen && (
        <div className={`dropdown-menu dropdown-align-${align}`} role="menu">
          {items.map((item, index) =>
            item.divider ? (
              <div key={index} className="dropdown-divider" role="separator" />
            ) : (
              <button
                key={item.id}
                className={`dropdown-item ${item.disabled ? 'dropdown-item-disabled' : ''}`}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleSelect(item)}
              >
                {item.icon && <span className="dropdown-item-icon">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
