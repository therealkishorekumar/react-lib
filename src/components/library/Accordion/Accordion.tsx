import React, { createContext, useContext, useState, ReactNode, HTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (id: string) => void;
  multiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion component');
  }
  return context;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string[];
  multiple?: boolean;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  disabled: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionTrigger/Content must be used within an AccordionItem');
  }
  return context;
}

export function Accordion({
  defaultValue = [],
  multiple = false,
  className = '',
  children,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return multiple ? [...prev, id] : [id];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiple }}>
      <div className={`accordion ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  disabled = false,
  className = '',
  children,
  ...props
}: AccordionItemProps) {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, disabled }}>
      <div
        className={`accordion-item ${isOpen ? 'accordion-item-open' : ''} ${className}`}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className = '',
  children,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext();
  const { value, isOpen, disabled } = useAccordionItemContext();

  return (
    <button
      className={`accordion-trigger ${className}`}
      aria-expanded={isOpen}
      disabled={disabled}
      onClick={() => toggleItem(value)}
      {...props}
    >
      <span className="accordion-trigger-text">{children}</span>
      <ChevronDown className={`accordion-icon ${isOpen ? 'accordion-icon-open' : ''}`} size={18} />
    </button>
  );
}

export function AccordionContent({
  className = '',
  children,
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordionItemContext();

  return (
    <div
      className={`accordion-content ${isOpen ? 'accordion-content-open' : ''} ${className}`}
      hidden={!isOpen}
      {...props}
    >
      <div className="accordion-content-inner">{children}</div>
    </div>
  );
}
