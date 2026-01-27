import React, { HTMLAttributes, ReactNode } from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from 'lucide-react';
import './Alert.css';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const defaultIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

export function Alert({
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
  className = '',
  children,
  ...props
}: AlertProps) {
  const IconComponent = defaultIcons[variant];

  return (
    <div
      className={`alert alert-${variant} ${className}`}
      role="alert"
      {...props}
    >
      <span className="alert-icon">
        {icon || <IconComponent size={20} />}
      </span>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        {children && <div className="alert-message">{children}</div>}
      </div>
      {dismissible && (
        <button
          className="alert-dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
