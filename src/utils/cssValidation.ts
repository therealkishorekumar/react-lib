/**
 * CSS Validation Utilities
 * Provides secure validation for CSS values to prevent injection attacks
 */

/**
 * Validates a hex color value
 * Supports 3-digit (#RGB) and 6-digit (#RRGGBB) formats
 */
export function isValidHexColor(value: string): boolean {
  return /^#([0-9A-Fa-f]{3}){1,2}$/.test(value);
}

/**
 * Validates RGB/RGBA color format
 */
export function isValidRgbColor(value: string): boolean {
  const rgbRegex = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*([0-9.]+)\s*)?\)$/;
  const match = value.match(rgbRegex);

  if (!match) return false;

  const [, r, g, b, , a] = match;
  const isValidChannel = (val: string) => {
    const num = parseInt(val, 10);
    return num >= 0 && num <= 255;
  };

  if (!isValidChannel(r) || !isValidChannel(g) || !isValidChannel(b)) {
    return false;
  }

  if (a !== undefined) {
    const alpha = parseFloat(a);
    if (isNaN(alpha) || alpha < 0 || alpha > 1) {
      return false;
    }
  }

  return true;
}

/**
 * Validates HSL/HSLA color format
 */
export function isValidHslColor(value: string): boolean {
  const hslRegex = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(,\s*([0-9.]+)\s*)?\)$/;
  const match = value.match(hslRegex);

  if (!match) return false;

  const [, h, s, l, , a] = match;

  const hue = parseInt(h, 10);
  if (hue < 0 || hue > 360) return false;

  const sat = parseInt(s, 10);
  const light = parseInt(l, 10);
  if (sat < 0 || sat > 100 || light < 0 || light > 100) return false;

  if (a !== undefined) {
    const alpha = parseFloat(a);
    if (isNaN(alpha) || alpha < 0 || alpha > 1) {
      return false;
    }
  }

  return true;
}

/**
 * Validates any CSS color format
 */
export function isValidColor(value: string): boolean {
  if (!value || typeof value !== 'string') return false;

  // Check common formats
  if (isValidHexColor(value)) return true;
  if (isValidRgbColor(value)) return true;
  if (isValidHslColor(value)) return true;

  // Check CSS named colors
  const namedColors = [
    'transparent', 'currentcolor', 'inherit', 'initial', 'unset',
    'black', 'white', 'red', 'green', 'blue', 'yellow', 'orange',
    'purple', 'pink', 'gray', 'grey', 'cyan', 'magenta', 'lime',
    'navy', 'teal', 'aqua', 'maroon', 'olive', 'silver', 'fuchsia'
  ];

  return namedColors.includes(value.toLowerCase());
}

/**
 * Validates CSS length values (px, em, rem, %, etc.)
 */
export function isValidLength(value: string): boolean {
  if (!value || typeof value !== 'string') return false;

  // Allow 0 without unit
  if (value === '0') return true;

  const lengthRegex = /^-?\d+(\.\d+)?(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/;
  return lengthRegex.test(value.trim());
}

/**
 * Validates CSS shadow values
 */
export function isValidShadow(value: string): boolean {
  if (!value || typeof value !== 'string') return false;

  // Allow 'none'
  if (value.trim().toLowerCase() === 'none') return true;

  // Check for dangerous characters that could indicate injection
  const dangerousChars = /<|>|javascript:|expression\(|@import/i;
  if (dangerousChars.test(value)) return false;

  // Basic validation: should contain length values
  const hasLengthValues = /\d+(px|em|rem)/.test(value);
  return hasLengthValues;
}

/**
 * Sanitizes user input for CSS properties
 * Removes potentially dangerous characters
 */
export function sanitizeCSSValue(value: string): string {
  if (!value || typeof value !== 'string') return '';

  // Remove dangerous patterns
  return value
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/expression\(/gi, '')
    .replace(/@import/gi, '')
    .replace(/<!--/g, '')
    .replace(/-->/g, '')
    .trim();
}

/**
 * Validates CSS gradient syntax
 */
export function isValidGradient(value: string): boolean {
  if (!value || typeof value !== 'string') return false;

  const gradientRegex = /^(linear-gradient|radial-gradient|conic-gradient)\([^)]+\)$/;
  return gradientRegex.test(value.trim());
}

/**
 * Validates text transform values
 */
export function isValidTextTransform(value: string): 'none' | 'uppercase' | 'lowercase' | 'capitalize' | null {
  const validValues = ['none', 'uppercase', 'lowercase', 'capitalize'];
  return validValues.includes(value) ? value as 'none' | 'uppercase' | 'lowercase' | 'capitalize' : null;
}

/**
 * Parses a CSS length value and returns the numeric value and unit
 */
export function parseCSSLength(value: string): { value: number; unit: string } | null {
  if (!value || typeof value !== 'string') return null;

  const match = value.match(/^(-?\d+(?:\.\d+)?)(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)?$/);
  if (!match) return null;

  const [, numStr, unit = 'px'] = match;
  const numValue = parseFloat(numStr);

  if (isNaN(numValue) || !isFinite(numValue)) return null;

  return { value: numValue, unit };
}

/**
 * Formats a CSS length value
 */
export function formatCSSLength(value: number, unit: string): string {
  if (!isFinite(value)) return '0px';
  return `${value}${unit}`;
}
