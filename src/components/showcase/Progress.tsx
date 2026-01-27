import React from 'react';
import { Progress, CircularProgress } from '../library';

export function ProgressShowcase() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Progress</h2>
      <div className="showcase-stack">
        <Progress value={25} showValue />
        <Progress value={50} variant="success" showValue />
        <Progress value={75} variant="warning" showValue animated />
        <Progress value={90} variant="error" showValue />
      </div>
      <div className="showcase-row">
        <CircularProgress value={25} showValue />
        <CircularProgress value={50} variant="success" showValue />
        <CircularProgress value={75} variant="warning" showValue />
        <CircularProgress value={100} variant="error" showValue />
      </div>
    </section>
  );
}
