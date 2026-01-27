# Developer Guide - Production Features

## Quick Reference for New Production Features

### 🔔 Toast Notifications

Replace all `alert()` calls with elegant toast notifications:

```typescript
import { useToast } from './components/Toast';

function MyComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success('Operation completed!', 'Your changes have been saved.');
  };

  const handleError = () => {
    toast.error('Something went wrong', 'Please try again or contact support.');
  };

  const handleWarning = () => {
    toast.warning('Please note', 'This action cannot be undone.');
  };

  const handleInfo = () => {
    toast.info('Did you know?', 'You can export your library at any time.');
  };

  return <button onClick={handleSuccess}>Save</button>;
}
```

**Configuration:**
```typescript
<ToastProvider position="top-right" maxToasts={5}>
  <App />
</ToastProvider>
```

**Positions:** `top-right`, `top-left`, `bottom-right`, `bottom-left`, `top-center`, `bottom-center`

---

### 🔒 Secure ID Generation

Never use `Math.random()` for generating IDs. Use our secure utility:

```typescript
import { generateUUID, generateShortId } from './utils/uuid';

// For cryptographically secure IDs (recommended)
const uniqueId = generateUUID(); // "a3f2c4e5-..."

// For UI component IDs (non-cryptographic, but unique)
const componentId = generateShortId(); // "lq5z8-x3k9p"
```

**Best Practice in Components:**
```typescript
import { useMemo } from 'react';
import { generateShortId } from '../../../utils/uuid';

export function MyInput({ id, ...props }) {
  // Memoize to prevent regeneration on re-render
  const inputId = useMemo(() => id || `input-${generateShortId()}`, [id]);

  return <input id={inputId} {...props} />;
}
```

---

### ✅ CSS Validation

Always validate user CSS input before storage:

```typescript
import {
  isValidColor,
  isValidLength,
  isValidShadow,
  sanitizeCSSValue,
  parseCSSLength,
  formatCSSLength
} from './utils/cssValidation';

// Validate colors
if (isValidColor('#ff0000')) {
  // Safe to use
}

if (isValidColor('rgb(255, 0, 0)')) {
  // Also valid
}

// Validate lengths
if (isValidLength('16px')) {
  // Safe to use
}

// Sanitize user input
const userInput = '<script>alert("xss")</script>';
const safe = sanitizeCSSValue(userInput); // Script tags removed

// Parse and format lengths
const parsed = parseCSSLength('16px'); // { value: 16, unit: 'px' }
const formatted = formatCSSLength(20, 'em'); // "20em"
```

**In Form Handlers:**
```typescript
const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const rawValue = e.target.value;
  const sanitized = sanitizeCSSValue(rawValue);

  if (isValidColor(sanitized)) {
    onColorChange(sanitized);
  } else {
    toast.error('Invalid color', 'Please enter a valid CSS color value.');
  }
};
```

---

### 🛡️ Error Boundary Usage

Wrap components that might throw errors:

```typescript
import { ErrorBoundary } from './components/ErrorBoundary';

// Wrap entire app (already done in App.tsx)
<ErrorBoundary>
  <MyApp />
</ErrorBoundary>

// Wrap specific sections for granular error handling
<ErrorBoundary fallback={<div>Custom error UI</div>}>
  <RiskyComponent />
</ErrorBoundary>
```

**Custom Fallback:**
```typescript
<ErrorBoundary
  fallback={
    <div className="error-card">
      <h2>This feature is temporarily unavailable</h2>
      <p>Please try refreshing the page.</p>
    </div>
  }
>
  <FeatureComponent />
</ErrorBoundary>
```

---

### 📝 Type-Safe Validation

Use type guards instead of `as any`:

```typescript
import { isValidTextTransform } from './utils/cssValidation';

// BAD ❌
const value = e.target.value as any;

// GOOD ✅
const value = e.target.value;
const validated = isValidTextTransform(value);
if (validated) {
  // TypeScript knows this is 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  setTextTransform(validated);
}
```

**For Custom Enums:**
```typescript
function isValidSize(value: string): value is 'sm' | 'md' | 'lg' {
  return ['sm', 'md', 'lg'].includes(value);
}

const userInput = getUserInput();
if (isValidSize(userInput)) {
  // TypeScript knows userInput is 'sm' | 'md' | 'lg'
  setSize(userInput);
}
```

---

### 🎨 Gradient Parsing

The GradientPicker now handles complex gradients safely:

```typescript
// These all parse correctly now:
parseGradient('linear-gradient(180deg, #ff0000 0%, #00ff00 100%)');
parseGradient('radial-gradient(circle, rgb(255,0,0) 0%, rgb(0,255,0) 100%)');
parseGradient('linear-gradient(45deg, hsl(0, 100%, 50%), hsl(120, 100%, 50%))');

// Malformed gradients return solid color fallback
parseGradient('invalid'); // Returns: { isSolid: true, solidColor: '#3b82f6' }
```

**Validation:**
```typescript
import { isValidGradient } from './utils/cssValidation';

if (isValidGradient(userInput)) {
  // Safe to parse
  const parsed = parseGradient(userInput);
}
```

---

### 📦 Export Error Handling

The export function now handles all errors gracefully:

```typescript
import { exportLibrary } from './utils/exportLibrary';

try {
  await exportLibrary(tokens);
  toast.success('Export successful!');
} catch (error) {
  // Error already logged to console
  const message = error instanceof Error ? error.message : 'Unknown error';
  toast.error('Export failed', message);
}
```

**Error Types:**
- Component files missing
- Zip generation failed
- CSS generation failed
- Timeout (30 seconds)

---

## 🏗️ Architecture Patterns

### Utility-First Approach

All validation logic is in utilities, not components:

```
src/utils/
├── uuid.ts              # Secure ID generation
├── cssValidation.ts     # CSS validation & sanitization
├── exportLibrary.ts     # Export with error handling
├── generateCSS.ts       # CSS generation
└── componentTemplates.ts # Export templates
```

### Context Pattern

Use hooks to access shared state:

```typescript
// Design tokens
const { tokens, setToken, setCategory } = useDesignTokens();

// Toast notifications
const toast = useToast();
```

### Component Composition

Build reusable components with forwardRef:

```typescript
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="input-wrapper">
        {label && <label>{label}</label>}
        <input ref={ref} {...props} />
        {error && <span>{error}</span>}
      </div>
    );
  }
);
```

---

## 🧪 Testing Patterns (Coming Soon)

### Unit Test Template

```typescript
import { describe, it, expect } from 'vitest';
import { isValidColor, sanitizeCSSValue } from '../cssValidation';

describe('cssValidation', () => {
  describe('isValidColor', () => {
    it('validates hex colors', () => {
      expect(isValidColor('#ff0000')).toBe(true);
      expect(isValidColor('#f00')).toBe(true);
      expect(isValidColor('invalid')).toBe(false);
    });

    it('validates RGB colors', () => {
      expect(isValidColor('rgb(255, 0, 0)')).toBe(true);
      expect(isValidColor('rgba(255, 0, 0, 0.5)')).toBe(true);
      expect(isValidColor('rgb(999, 0, 0)')).toBe(false);
    });
  });

  describe('sanitizeCSSValue', () => {
    it('removes script tags', () => {
      const result = sanitizeCSSValue('<script>alert("xss")</script>');
      expect(result).not.toContain('script');
    });

    it('removes javascript protocol', () => {
      const result = sanitizeCSSValue('javascript:alert(1)');
      expect(result).not.toContain('javascript:');
    });
  });
});
```

---

## 🚨 Common Pitfalls to Avoid

### ❌ Don't Use Math.random() for IDs

```typescript
// BAD
const id = `input-${Math.random().toString(36)}`;

// GOOD
const id = useMemo(() => `input-${generateShortId()}`, []);
```

### ❌ Don't Skip Input Validation

```typescript
// BAD
const handleChange = (e) => {
  setColor(e.target.value); // No validation!
};

// GOOD
const handleChange = (e) => {
  const value = sanitizeCSSValue(e.target.value);
  if (isValidColor(value)) {
    setColor(value);
  }
};
```

### ❌ Don't Use Index as Key

```typescript
// BAD
{items.map((item, index) => <Item key={index} />)}

// GOOD
{items.map((item) => <Item key={item.id} />)}
```

### ❌ Don't Type Cast with 'as any'

```typescript
// BAD
const value = e.target.value as any;

// GOOD
const value = e.target.value;
const validated = isValidTextTransform(value);
if (validated) {
  setTextTransform(validated);
}
```

### ❌ Don't Forget Error Handling

```typescript
// BAD
await exportLibrary(tokens);

// GOOD
try {
  await exportLibrary(tokens);
  toast.success('Export successful!');
} catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown error';
  toast.error('Export failed', message);
}
```

---

## 📊 Performance Tips

### 1. Memoize Generated Values

```typescript
const id = useMemo(() => generateShortId(), []); // Only once
const cssValue = useMemo(() => tokensToCSS(tokens), [tokens]); // When tokens change
```

### 2. Use Callback for Event Handlers

```typescript
const handleClick = useCallback(() => {
  doSomething();
}, [dependencies]);
```

### 3. Virtualize Long Lists

```typescript
// For lists with 100+ items, use react-window or react-virtualized
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={400}
  itemCount={items.length}
  itemSize={35}
>
  {({ index, style }) => (
    <div style={style}>{items[index]}</div>
  )}
</FixedSizeList>
```

---

## 🔐 Security Checklist

Before committing code:

- [ ] All user inputs validated
- [ ] CSS values sanitized
- [ ] No `Math.random()` for IDs
- [ ] Error handling in async operations
- [ ] No `as any` type casts
- [ ] Proper key props (not index)
- [ ] Event listeners cleaned up
- [ ] TypeScript strict mode passing

---

## 📚 Resources

### Internal Documentation
- `PRODUCTION_CHECKLIST.md` - Complete list of all fixes
- `SENIOR_ENGINEER_REVIEW.md` - Detailed review and sign-off

### External Resources
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** 2026-01-27
**Maintained by:** Development Team
