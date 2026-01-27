import React from 'react';
import { Dropdown } from '../library';
import { Edit, Trash, Copy } from 'lucide-react';

export function DropdownShowcase() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Dropdown</h2>
      <div className="showcase-row">
        <Dropdown
          trigger="Options"
          items={[
            { id: 'edit', label: 'Edit', icon: <Edit size={14} /> },
            { id: 'copy', label: 'Copy', icon: <Copy size={14} /> },
            { id: 'divider', label: '', divider: true },
            { id: 'delete', label: 'Delete', icon: <Trash size={14} /> },
          ]}
          onSelect={(item) => console.log('Selected:', item.id)}
        />
      </div>
    </section>
  );
}
