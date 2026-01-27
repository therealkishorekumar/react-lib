import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  Button,
  Breadcrumb,
} from '../library';
import { Home, Layers } from 'lucide-react';

export function Navigation() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Navigation</h2>
      <Navbar>
        <NavbarBrand logo={<Layers size={24} />} name="Brand" />
        <NavbarLinks>
          <NavbarLink active>Home</NavbarLink>
          <NavbarLink>Products</NavbarLink>
          <NavbarLink>About</NavbarLink>
        </NavbarLinks>
        <NavbarActions>
          <Button size="sm" variant="outline">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </NavbarActions>
      </Navbar>
      <div className="showcase-spacer" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '#', icon: <Home size={14} /> },
          { label: 'Products', href: '#' },
          { label: 'Electronics', href: '#' },
          { label: 'Phones' },
        ]}
      />
    </section>
  );
}
