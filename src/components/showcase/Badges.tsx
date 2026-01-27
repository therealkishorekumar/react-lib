import React from 'react';
import { Badge } from '../library';

export function Badges() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Badges</h2>
      <div className="showcase-row">
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </div>
      <div className="showcase-row">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
        <Badge rounded variant="primary">Rounded</Badge>
      </div>
    </section>
  );
}
