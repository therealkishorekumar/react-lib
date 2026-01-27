import React, { HTMLAttributes, ReactNode } from 'react';
import './Navbar.css';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

export interface NavbarBrandProps extends HTMLAttributes<HTMLDivElement> {
  logo?: ReactNode;
  name?: string;
}

export interface NavbarLinksProps extends HTMLAttributes<HTMLDivElement> {}

export interface NavbarLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  active?: boolean;
}

export interface NavbarActionsProps extends HTMLAttributes<HTMLDivElement> {}

export function Navbar({
  sticky = false,
  className = '',
  children,
  ...props
}: NavbarProps) {
  return (
    <nav className={`navbar ${sticky ? 'navbar-sticky' : ''} ${className}`} {...props}>
      <div className="navbar-container">
        {children}
      </div>
    </nav>
  );
}

export function NavbarBrand({ logo, name, className = '', children, ...props }: NavbarBrandProps) {
  return (
    <div className={`navbar-brand ${className}`} {...props}>
      {logo && <span className="navbar-logo">{logo}</span>}
      {name && <span className="navbar-name">{name}</span>}
      {children}
    </div>
  );
}

export function NavbarLinks({ className = '', children, ...props }: NavbarLinksProps) {
  return (
    <div className={`navbar-links ${className}`} {...props}>
      {children}
    </div>
  );
}

export function NavbarLink({
  href = '#',
  active,
  className = '',
  children,
  ...props
}: NavbarLinkProps) {
  return (
    <a
      href={href}
      className={`navbar-link ${active ? 'navbar-link-active' : ''} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function NavbarActions({ className = '', children, ...props }: NavbarActionsProps) {
  return (
    <div className={`navbar-actions ${className}`} {...props}>
      {children}
    </div>
  );
}
