import React, { HTMLAttributes, useState } from 'react';
import './Avatar.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

interface AvatarColorScheme {
  bg: string;
  text: string;
}

function getColorFromName(name: string): AvatarColorScheme {
  // Use semantic color palette for variety
  // Each color has a paired text color for guaranteed contrast
  const colors: AvatarColorScheme[] = [
    { bg: 'var(--semantic-accent-primary)', text: 'var(--semantic-on-accent-primary)' },
    { bg: 'var(--semantic-accent-secondary)', text: 'var(--semantic-on-accent-secondary)' },
    { bg: 'var(--semantic-accent-tertiary)', text: 'var(--semantic-on-accent-tertiary)' },
    { bg: 'var(--semantic-action)', text: 'var(--semantic-on-accent-primary)' },
    { bg: 'var(--semantic-action-secondary)', text: 'var(--semantic-on-accent-secondary)' },
    { bg: 'var(--semantic-success)', text: 'var(--semantic-on-accent-primary)' },
    { bg: 'var(--semantic-warning)', text: 'var(--semantic-on-accent-primary)' },
    { bg: 'var(--semantic-info)', text: 'var(--semantic-on-accent-primary)' },
    { bg: 'var(--semantic-brand-primary)', text: 'var(--semantic-on-accent-primary)' },
    { bg: 'var(--semantic-brand-secondary)', text: 'var(--semantic-on-accent-secondary)' },
    { bg: 'var(--semantic-surface-tertiary)', text: 'var(--semantic-content-primary)' },
    { bg: 'var(--semantic-surface-quaternary)', text: 'var(--semantic-content-primary)' },
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  className = '',
  ...props
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;
  const initials = name ? getInitials(name) : '?';
  const colorScheme = name ? getColorFromName(name) : { bg: 'var(--semantic-action)', text: 'var(--semantic-on-accent-primary)' };

  return (
    <div
      className={`avatar avatar-${size} avatar-${shape} ${status ? 'avatar-has-status' : ''} ${className}`}
      {...props}
      style={{ 
        '--avatar-dynamic-bg': colorScheme.bg,
        '--avatar-dynamic-text': colorScheme.text,
      } as React.CSSProperties}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="avatar-image"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="avatar-initials">
          {initials}
        </span>
      )}
      {status && <span className={`avatar-status avatar-status-${status}`} />}
    </div>
  );
}

export function AvatarGroup({ max = 4, className = '', children, ...props }: AvatarGroupProps) {
  const childArray = React.Children.toArray(children);
  const visibleChildren = childArray.slice(0, max);
  const remainingCount = childArray.length - max;

  return (
    <div className={`avatar-group ${className}`} {...props}>
      {visibleChildren}
      {remainingCount > 0 && (
        <div className="avatar avatar-md avatar-circle avatar-overflow">
          <span className="avatar-initials">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
}
