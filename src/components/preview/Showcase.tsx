import React from 'react';
import {
  Buttons,
  FormControls,
  Badges,
  Alerts,
  Cards,
  ModalShowcase,
  TabsShowcase,
  AccordionShowcase,
  TableShowcase,
  DropdownShowcase,
  Navigation,
  TooltipShowcase,
  ProgressShowcase,
  AvatarShowcase,
} from '../showcase';
import './Showcase.css';

export function Showcase() {
  return (
    <div className="showcase">
      <Buttons />
      <FormControls />
      <Badges />
      <Alerts />
      <Cards />
      <ModalShowcase />
      <TabsShowcase />
      <AccordionShowcase />
      <TableShowcase />
      <DropdownShowcase />
      <Navigation />
      <TooltipShowcase />
      <ProgressShowcase />
      <AvatarShowcase />
    </div>
  );
}
