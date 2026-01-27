import React from 'react';
import { Avatar, AvatarGroup } from '../library';

export function AvatarShowcase() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Avatar</h2>
      <div className="showcase-row">
        <Avatar name="John Doe" size="xs" />
        <Avatar name="Jane Smith" size="sm" />
        <Avatar name="Bob Johnson" size="md" />
        <Avatar name="Alice Brown" size="lg" />
        <Avatar name="Charlie Davis" size="xl" />
      </div>
      <div className="showcase-row">
        <Avatar name="John Doe" status="online" />
        <Avatar name="Jane Smith" status="offline" />
        <Avatar name="Bob Johnson" status="away" />
        <Avatar name="Alice Brown" status="busy" />
      </div>
      <div className="showcase-row">
        <AvatarGroup max={3}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar name="Bob Johnson" />
          <Avatar name="Alice Brown" />
          <Avatar name="Charlie Davis" />
        </AvatarGroup>
      </div>
    </section>
  );
}
