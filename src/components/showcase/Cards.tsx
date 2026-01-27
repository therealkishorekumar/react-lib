import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '../library';

export function Cards() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Cards</h2>
      <div className="showcase-grid-cards">
        <Card variant="outlined">
          <CardHeader title="Card Title" subtitle="Card subtitle" />
          <CardBody>
            This is the card body content. It can contain any text or elements.
          </CardBody>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
        <Card variant="elevated">
          <CardHeader title="Elevated Card" action={<Button size="sm" variant="ghost">Edit</Button>} />
          <CardBody>
            Cards can have different variants like outlined, elevated, or default.
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
