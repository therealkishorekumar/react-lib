import React from 'react';
import { Button } from '../library';

export function Buttons() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Buttons</h2>
      <div className="showcase-row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <div className="showcase-row">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </section>
  );
}
