import React from 'react';
import { Alert } from '../library';

export function Alerts() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Alerts</h2>
      <div className="showcase-stack">
        <Alert variant="info" title="Information">
          This is an informational alert message.
        </Alert>
        <Alert variant="success" title="Success">
          Your changes have been saved successfully.
        </Alert>
        <Alert variant="warning" title="Warning">
          Please review the changes before proceeding.
        </Alert>
        <Alert variant="error" title="Error" dismissible>
          An error occurred while processing your request.
        </Alert>
      </div>
    </section>
  );
}
