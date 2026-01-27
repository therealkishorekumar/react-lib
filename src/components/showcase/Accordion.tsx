import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../library';

export function AccordionShowcase() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Accordion</h2>
      <Accordion defaultValue={['item1']}>
        <AccordionItem value="item1">
          <AccordionTrigger>What is this component library?</AccordionTrigger>
          <AccordionContent>
            This is a customizable React component library with real-time theming capabilities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>How do I customize the theme?</AccordionTrigger>
          <AccordionContent>
            Use the editor panel on the left to modify colors, typography, spacing, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item3">
          <AccordionTrigger>Can I export the customized library?</AccordionTrigger>
          <AccordionContent>
            Yes! Click the Export button to download a zip file with all components and your custom theme.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
