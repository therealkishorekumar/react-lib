import React from 'react';
import { Tooltip, Button } from '../library';

export function TooltipShowcase() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Tooltip</h2>
      <div className="showcase-row">
        <Tooltip content="Top tooltip" position="top">
          <Button variant="outline">Top</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <Button variant="outline">Bottom</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <Button variant="outline">Left</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <Button variant="outline">Right</Button>
        </Tooltip>
      </div>
    </section>
  );
}
