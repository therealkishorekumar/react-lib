import React, { HTMLAttributes, ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  id?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}

export function Breadcrumb({
  items,
  separator = <ChevronRight size={14} />,
  maxItems,
  className = '',
  ...props
}: BreadcrumbProps) {
  let displayItems = items;

  if (maxItems && items.length > maxItems) {
    const firstItems = items.slice(0, 1);
    const lastItems = items.slice(-(maxItems - 2));
    displayItems = [
      ...firstItems,
      { label: '...' },
      ...lastItems,
    ];
  }

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb ${className}`} {...props}>
      <ol className="breadcrumb-list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === '...';
          // Use id if available, otherwise combine label and href, fallback to index
          const key = item.id || (item.href ? `${item.label}-${item.href}` : `${item.label}-${index}`);

          return (
            <li key={key} className="breadcrumb-item">
              {isEllipsis ? (
                <span className="breadcrumb-ellipsis">{item.label}</span>
              ) : item.href && !isLast ? (
                <a href={item.href} className="breadcrumb-link">
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              ) : (
                <span className={`breadcrumb-text ${isLast ? 'breadcrumb-current' : ''}`} aria-current={isLast ? 'page' : undefined}>
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}
              {!isLast && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
