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

function getColorFromName(name: string): string {
  const colors = [
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-success)',
    'var(--color-warning)',
    'var(--color-error)',
    'var(--color-info)',
    'var(--color-text)',
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
  const bgColor = name ? getColorFromName(name) : 'var(--color-secondary)';

  return (
    <div
      className={`avatar avatar-${size} avatar-${shape} ${className}`}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="avatar-image"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="avatar-initials" style={{ backgroundColor: bgColor }}>
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
