import React, { HTMLAttributes, ReactNode } from 'react';
import './Sidebar.css';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export interface SidebarItemProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  active?: boolean;
  badge?: string | number;
}

export function Sidebar({
  collapsed = false,
  className = '',
  children,
  ...props
}: SidebarProps) {
  return (
    <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${className}`} {...props}>
      {children}
    </aside>
  );
}

export function SidebarSection({ title, className = '', children, ...props }: SidebarSectionProps) {
  return (
    <div className={`sidebar-section ${className}`} {...props}>
      {title && <div className="sidebar-section-title">{title}</div>}
      <div className="sidebar-section-items">{children}</div>
    </div>
  );
}

export function SidebarItem({
  icon,
  active,
  badge,
  className = '',
  children,
  ...props
}: SidebarItemProps) {
  return (
    <button
      className={`sidebar-item ${active ? 'sidebar-item-active' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="sidebar-item-icon">{icon}</span>}
      <span className="sidebar-item-text">{children}</span>
      {badge !== undefined && <span className="sidebar-item-badge">{badge}</span>}
    </button>
  );
}
