import React, { HTMLAttributes } from 'react';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

export function Badge({
  variant = 'default',
  size = 'md',
  rounded = false,
  className = '',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`badge badge-${variant} badge-${size} ${rounded ? 'badge-rounded' : ''} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
