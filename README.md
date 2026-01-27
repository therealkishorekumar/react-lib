# Component Library Customizer

> Visual design tool for customizing React component libraries with real-time preview and one-click export.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb)](https://react.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/therealkishorekumar/component-library-customizer)

A powerful visual tool that lets UX designers and developers customize comprehensive React component libraries without writing code. Adjust colors, typography, spacing, shadows, and more with real-time preview, then export a production-ready npm package.

## ✨ Features

### 🎨 Visual Customization
- **20+ Production-Ready Components** - Button, Input, Card, Modal, Table, and more
- **Real-Time Preview** - See changes instantly as you customize
- **Design Token System** - Comprehensive token-based theming
- **Light & Dark Modes** - Full theme support with automatic contrast handling
- **7 Built-in Theme Presets** - Default, Nature, Ocean, Sunset, Neon, Modern Retro

### 🎯 Design System
- **Colors** - Primary, secondary, semantic colors (success, warning, error, info)
- **Typography** - Font families, sizes, weights, line heights with Google Fonts integration
- **Spacing** - 6-level spacing scale (xs to xxl)
- **Border Radius** - 5-level radius system
- **Shadows** - 5-level elevation system
- **Effects** - Customizable focus rings and shadow colors
- **Patterns** - Optional dot/grid background patterns

### 📦 Component Customization
- **Button** - Border width, inner shadow, text transform, letter spacing
- **Input** - Border width, focus ring width & opacity
- **Checkbox/Radio** - Size, border width, border radius
- **Toggle** - Track height, thumb size, shadows
- **Card** - Border width, elevated borders (conditional)
- **Modal** - Backdrop color, opacity, blur
- **Avatar** - Border width, gradient border colors
- **Badge** - Text transform, letter spacing, border width
- **Alert** - Icon size, border width
- **Tabs** - Indicator height, style (underline/pill/enclosed)
- **Progress** - Track height, border radius

### 🚀 Export & Distribution
- **One-Click Export** - Download as complete npm package
- **Production-Ready** - TypeScript, proper dependencies, build scripts
- **Zero Setup Required** - Import and use immediately
- **Tree-Shakeable** - Optimized for modern bundlers
- **Fully Typed** - Complete TypeScript definitions

## 🖼️ Screenshots

### Main Interface
! Coming soon...

### Theme Presets
! Coming soon...

### Real-Time Preview
! Coming soon...

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/therealkishorekumar/component-library-customizer.git
cd component-library-customizer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

## 📖 Usage Guide

### 1. Choose a Theme Preset

Click the **Theme Presets** dropdown in the header to select from:
- **Default** - Clean, modern design
- **Nature** - Green tones, organic feel
- **Ocean** - Blue palette, calming
- **Sunset** - Warm oranges and yellows
- **Neon** - Bold, high-contrast, neo-brutalist
- **Modern Retro** - Sophisticated brass and teal

### 2. Customize Design Tokens

Use the **Editor Sidebar** to adjust:

#### Colors Panel
- Primary and secondary colors with hover states
- Semantic colors (success, warning, error, info)
- Background, surface, text colors
- Border colors
- Separate controls for light and dark themes

#### Typography Panel
- Font family (Google Fonts integration)
- Font sizes (xs, sm, md, lg, xl)
- Font weights (normal, medium, semibold, bold)
- Line heights (tight, normal, relaxed)

#### Spacing Panel
- 6-level spacing scale
- Visual slider with pixel preview

#### Borders Panel
- Border radius scale (none, control, surface, overlay, full)

#### Shadows Panel
- 5-level shadow system
- Custom shadow editor

#### Effects Panel
- Focus ring width, offset, and color
- Shadow color

### 3. Fine-Tune Components

Switch to the **Components** tab to customize individual component properties:
- Adjust borders, shadows, sizes
- Enable/disable optional features
- Set text transforms and letter spacing

### 4. Preview Your Design

Toggle between two preview modes:
- **Showcase** - See all components in various states
- **Playground** - Interactive component testing

### 5. Export Your Library

Click the **Export** button to download a zip file containing:

```
component-library/
├── components/           # All 20 components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   └── index.ts
│   ├── Input/
│   └── ...
├── styles/
│   ├── tokens.css       # Your custom design tokens
│   └── reset.css        # Minimal CSS reset
├── index.ts             # Barrel exports
├── package.json         # Ready to publish
├── tsconfig.json        # TypeScript configuration
└── README.md            # Usage instructions
```

## 🎨 Theme Presets

### Default Theme
Clean, modern design with blue primary colors and excellent contrast.

### Nature Theme
Green-focused palette inspired by natural environments. Perfect for eco-friendly brands.

### Ocean Theme
Calming blue tones with cyan accents. Ideal for productivity and wellness apps.

### Sunset Theme
Warm oranges and yellows with brown text. Great for creative and lifestyle brands.

### Neon Theme
Bold, high-contrast design with taxi yellow and black borders. Neo-brutalist aesthetic with flat shadows.

### Modern Retro Theme
Sophisticated brass and slate-teal palette. Vintage-inspired with modern shadows.

## 🔧 Using the Exported Library

After exporting, you can use the library in any React project:

```tsx
import { Button, Input, Card } from 'custom-component-library';
import 'custom-component-library/styles/tokens.css';
import 'custom-component-library/styles/reset.css';

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

### Available Components

- **Button** - Multiple variants (primary, secondary, outline, ghost, danger)
- **Input** - Form input with label, error states
- **Select** - Dropdown selection
- **Checkbox** - With indeterminate state
- **Radio** - Radio buttons and radio groups
- **Toggle** - Switch/toggle component
- **Card** - Container with header, body, footer
- **Modal** - Dialog with overlay
- **Badge** - Status indicators
- **Alert** - Info, success, warning, error alerts
- **Tabs** - Tab navigation
- **Accordion** - Collapsible sections
- **Table** - Data table
- **Navbar** - Top navigation
- **Sidebar** - Vertical navigation
- **Dropdown** - Click-triggered menu
- **Tooltip** - Hover tooltips
- **Progress** - Linear and circular progress
- **Avatar** - User avatars
- **Breadcrumb** - Navigation trail

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Strict mode, full type safety
- **Vite 7** - Lightning-fast build tool
- **CSS Custom Properties** - Real-time theming
- **Lucide React** - Beautiful icon system
- **JSZip** - Library export functionality
- **Modern CSS** - color-mix(), :has(), container queries

## 📂 Project Structure

```
src/
├── components/
│   ├── library/          # 20 customizable components
│   │   ├── Button/
│   │   ├── Input/
│   │   └── ...
│   ├── editor/           # Customization UI
│   │   ├── ColorPicker.tsx
│   │   ├── SliderControl.tsx
│   │   ├── GradientPicker.tsx
│   │   └── panels/
│   │       ├── TokenPanel.tsx
│   │       └── ComponentPanel.tsx
│   ├── preview/          # Preview components
│   │   ├── Showcase.tsx
│   │   └── Playground.tsx
│   ├── layout/
│   │   └── Header.tsx
│   └── Toast/            # Toast notification system
├── context/
│   └── DesignTokenContext.tsx  # Global state management
├── utils/
│   ├── exportLibrary.ts        # Export functionality
│   ├── generateCSS.ts          # CSS generation
│   ├── cssValidation.ts        # Input validation
│   ├── colorContrast.ts        # WCAG compliance
│   └── uuid.ts                 # Secure ID generation
├── types/
│   └── tokens.ts               # TypeScript definitions
└── App.tsx
```

## 🔒 Security Features

- **Input Sanitization** - All user inputs validated and sanitized
- **XSS Prevention** - Blocks `<script>`, `javascript:`, `expression()`
- **Secure IDs** - Cryptographic UUID generation
- **Type Safety** - TypeScript strict mode throughout
- **No eval()** - Zero dangerous patterns
- **CSS Validation** - Proper bounds checking

## ♿ Accessibility

- **WCAG 2.1 AA Compliant** - All themes meet contrast standards
- **Semantic HTML** - Proper element usage
- **ARIA Attributes** - Screen reader support
- **Keyboard Navigation** - Full keyboard support
- **Focus Management** - Visible focus indicators

## 🎯 Design Principles

1. **Token-Based** - Zero hardcoded values, 100% themeable
2. **Real-Time** - Instant preview with CSS variables
3. **Type-Safe** - TypeScript throughout
4. **Accessible** - WCAG AA+ compliance
5. **Modern CSS** - Uses latest CSS features
6. **Zero Dependencies** - Core components have minimal deps
7. **Tree-Shakeable** - Import only what you use

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use design tokens for all styling
- Add proper ARIA attributes
- Ensure WCAG AA compliance
- Write clear commit messages
- Update documentation

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Icons by [Lucide](https://lucide.dev/)

## 📧 Contact

- **GitHub Issues** - [Report bugs or request features](https://github.com/therealkishorekumar/component-library-customizer/issues)
- **Twitter** - [@therealkishorekumar](https://twitter.com/therealkishorekumar)
- **Email** - ksihorenkumar+github@gmail.com

---

**Made with ❤️ by [Kishore Kumar](https://github.com/therealkishorekumar)**

*Star ⭐ this repo if you find it useful!*
