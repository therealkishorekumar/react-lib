# React Studio

> A visual design tool for customizing React component libraries. Design, preview, and export production-ready React components with your own design tokens.

**[Try React Studio Live →](https://therealkishorekumar.github.io/react-lib/)**

[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## What is React Studio?

React Studio is a browser-based design tool that lets you customize a complete React component library without writing CSS. Perfect for developers who want a consistent design system without the overhead of maintaining one from scratch.

**Key Features:**
- 🎨 **Visual Editor** — Customize colors, typography, spacing, shadows, and more
- 🌙 **Dark Mode Support** — Full light/dark theme system with automatic switching
- 📦 **One-Click Export** — Download a complete npm-ready component library
- 🎯 **9 Theme Presets** — Neobrutalism, Glassmorphism, Cyber Retro, and more
- ⚡ **Real-Time Preview** — See changes instantly as you design
- 🔧 **20+ Components** — Button, Card, Modal, Input, Select, Tabs, and more

---

## Quick Start

```bash
git clone https://github.com/therealkishorekumar/react-lib.git
cd react-studio
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## How It Works

### 1. Design Your Theme

Choose from 9 pre-built themes or start from scratch:
- Default (modern, clean)
- Neobrutalism (bold, thick borders)
- Glassmorphism (translucent, blurred)
- Claymorphism (soft, rounded)
- Cyber Retro (neon, glow effects)
- Editorial (serif fonts, classic)
- Dark Tech Minimal (clean, dark)
- Monochrome Maximal (black & white)

### 2. Customize Tokens

Adjust design tokens in the sidebar:
- **Colors** — Primary, secondary, semantic (success, warning, error)
- **Typography** — Font families, sizes, weights, line heights
- **Spacing** — 6-level scale from xs to xxl
- **Shadows** — 5 shadow types with customizable offsets
- **Borders** — Border radius and width controls
- **Effects** — Focus rings, backdrop blur, text glow

### 3. Export & Use

Click **Export** to download `component-library-2024-02-05.zip`:

```tsx
import { Button, Card, Input } from './component-library';
import './component-library/styles/tokens.css';

function App() {
  return (
    <Card variant="elevated">
      <Card.Header>
        <h2>Welcome</h2>
      </Card.Header>
      <Card.Body>
        <Input label="Email" type="email" />
        <Button variant="primary">Submit</Button>
      </Card.Body>
    </Card>
  );
}
```

---

## Exported Package Structure

```
component-library/
├── components/
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   └── ... (20 components)
├── styles/
│   ├── tokens.css      # CSS custom properties
│   └── reset.css       # Modern CSS reset
├── index.ts            # Barrel exports
├── package.json        # NPM configuration
├── vite.config.ts      # Build configuration
├── tsconfig.json       # TypeScript config
├── README.md           # Usage documentation
└── example.html        # Preview page
```

---

## Components Included

- **Forms** — Button, Input, Select, Checkbox, Radio, Toggle
- **Layout** — Card, Modal, Accordion, Tabs
- **Feedback** — Alert, Badge, Progress, Tooltip
- **Navigation** — Navbar, Sidebar, Dropdown, Breadcrumb
- **Data** — Table
- **Media** — Avatar

All components support:
- TypeScript types
- CSS custom properties theming
- Dark mode via `data-theme="dark"`
- Accessibility attributes (ARIA labels, focus states)

---

## Dark Mode

Toggle between light and dark themes:

```tsx
// Programmatically
document.documentElement.setAttribute('data-theme', 'dark');

// Or use the theme toggle in the header
// Theme preference is automatically applied via CSS
```

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Language | TypeScript 5.9 (strict mode) |
| Build Tool | Vite 7 |
| Styling | CSS Custom Properties |
| Icons | Lucide React |
| Export | JSZip + FileSaver |

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires support for CSS Custom Properties, CSS `color-mix()`, and modern ES2020 features.

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

---

## Customization Guide

### CSS Custom Properties

The exported library uses CSS variables for theming. Override them in your CSS:

```css
:root {
  /* Semantic colors */
  --semantic-accent-primary: #3b82f6;
  --semantic-surface-primary: #ffffff;
  --semantic-content-primary: #111827;
  
  /* Typography */
  --font-family: 'Inter', system-ui, sans-serif;
  --font-size-md: 1rem;
  
  /* Spacing */
  --spacing-md: 1rem;
  
  /* Border radius */
  --radius-control: 6px;
}

/* Dark theme override */
[data-theme="dark"] {
  --semantic-surface-primary: #0f172a;
  --semantic-content-primary: #f1f5f9;
}
```

### Component-Level Styling

Each component exposes CSS variables:

```css
/* Button customization */
.btn-primary {
  --button-primary-background: #your-color;
  --button-primary-text: #your-color;
  --button-border-width: 2px;
}
```

---

## Architecture

React Studio uses a **token-based design system**:

1. **DesignTokens** — Centralized theme configuration (colors, typography, spacing)
2. **CSS Custom Properties** — Runtime theming without recompilation
3. **Semantic Colors** — 27 color tokens organized by purpose (surface, content, accent, status)
4. **Component Colors** — Mapping semantic colors to component states

This approach ensures:
- ✅ Consistent theming across all components
- ✅ Real-time preview without rebuilds
- ✅ Exportable, standalone component library
- ✅ Type safety throughout

---

## Contributing

This project is currently maintained as a personal project. Issues and feature requests are welcome via GitHub Issues.

---

## License

MIT License — see [LICENSE](LICENSE) file for details.

---

## Related Keywords

react component library, design system generator, ui component builder, react theming tool, css custom properties, design tokens, visual editor react, component library exporter, react ui framework, theme generator

---

*Built with React, TypeScript, and questionable sleep schedules.*
