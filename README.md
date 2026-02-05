# react-studio

> a visual design tool for react component libraries. customize 20+ components, preview in real-time, export a production-ready npm package.

**[try it live](https://therealkishorekumar.github.io/react-studio/)**

---

## what is this?

tired of writing the same button styles for the 47th time? same.

this tool lets you:
- pick from 9 theme presets (neobrutalism, glassmorphism, cyber retro, etc.)
- tweak colors, typography, spacing, shadows via a shiny ui
- preview everything instantly (no refresh button mashing)
- export a complete component library as a zip file
- use it in your react project immediately

---

## quick start

```bash
git clone https://github.com/therealkishorekumar/react-studio.git
cd react-studio
npm install
npm run dev
```

open http://localhost:5173 and start breaking things (creatively).

---

## usage

1. **pick a theme preset** from the dropdown
2. **tweak tokens** in the sidebar (colors, fonts, spacing)
3. **switch to components tab** for fine-grained control
4. **hit export** → get a `component-library-2024-02-05.zip`
5. **use it**:

```tsx
import { Button, Card, Input } from './component-library';
import './component-library/styles/tokens.css';

function App() {
  return (
    <Card>
      <Input label="email" type="email" />
      <Button variant="primary">let's go</Button>
    </Card>
  );
}
```

---

## dark mode?

yep. toggle in the header or set it manually:

```tsx
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## tech stack

- react 19 (hooks, not classes — we're not animals)
- typescript (strict mode because we have standards)
- vite (fast, like properly fast)
- css custom properties (theming without the tears)

---

## what's included?

20 components: button, input, select, checkbox, radio, toggle, card, modal, badge, alert, tabs, accordion, table, dropdown, navbar, sidebar, tooltip, progress, avatar, breadcrumb.

all themeable. all exportable. all typed.

---

## known quirks

- the exported zip includes an `example.html` for quick preview
- some themes (looking at you, cyber retro) use neon colors that may cause retina damage
- no tests yet (we're living dangerously)

---

## license

mit. do what you want. just don't blame me if your boss asks why the buttons are hot pink.

---

*made with questionable sleep schedules and excessive caffeine*
