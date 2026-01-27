import React, { useState } from 'react';
import { Button, Modal } from '../library';

export function ModalShowcase() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Modal</h2>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Modal Title"
        footer={
          <>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>This is the modal content. You can put any content here including forms, text, or other components.</p>
      </Modal>
    </section>
  );
}
