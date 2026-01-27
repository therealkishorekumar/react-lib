import { useState } from 'react';
import './FontSelector.css';

export interface FontSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  fonts?: string[];
  showCategories?: boolean;
}

interface FontCategory {
  name: string;
  fonts: string[];
}

const fontCategories: FontCategory[] = [
  {
    name: 'Sans Serif',
    fonts: [
      'Inter',
      'Roboto',
      'JetBrains Mono',
      'Source Sans 3',
      'Noto Sans',
      'IBM Plex Sans',
      'Manrope',
      'Space Grotesk',
      'Rubik',
      'Work Sans',
      'Lato',
      'Poppins',
      'DM Sans',
      'Figtree',
      'Plus Jakarta Sans',
    ],
  },
  {
    name: 'Serif',
    fonts: [
      'Merriweather',
      'Playfair Display',
    ],
  },
  {
    name: 'Monospace',
    fonts: [
      'JetBrains Mono',
      'Fira Code',
      'Source Code Pro',
      'IBM Plex Mono',
    ],
  },
];

// Flatten all fonts for the default list
const allFonts = fontCategories.flatMap(cat =>
  cat.fonts.map(font => `${font}, ${getCategoryFallback(cat.name)}`)
);

function getCategoryFallback(category: string): string {
  switch (category) {
    case 'Sans Serif': return 'sans-serif';
    case 'Serif': return 'serif';
    case 'Display': return 'cursive';
    case 'Handwriting': return 'cursive';
    case 'Monospace': return 'monospace';
    default: return 'sans-serif';
  }
}

const monoFonts = fontCategories
  .find(cat => cat.name === 'Monospace')!
  .fonts.map(font => `${font}, monospace`);

export function FontSelector({ label, value, onChange, fonts, showCategories = true }: FontSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const isMono = label.toLowerCase().includes('mono');

  const fontOptions = fonts || (isMono ? monoFonts : allFonts);

  const filteredCategories = showCategories && !isMono
    ? fontCategories
        .filter(cat => cat.name !== 'Monospace')
        .map(cat => ({
          ...cat,
          fonts: cat.fonts.filter(font =>
            font.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }))
        .filter(cat => cat.fonts.length > 0)
    : [];

  const filteredFonts = fontOptions.filter(font =>
    font.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-selector">
      <label className="font-selector-label">{label}</label>
      <input
        type="text"
        placeholder="Search fonts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="font-selector-search"
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-selector-select"
        style={{ fontFamily: value }}
        size={8}
      >
        {showCategories && !isMono ? (
          filteredCategories.map(category => (
            <optgroup key={category.name} label={category.name}>
              {category.fonts.map(font => {
                const fullFont = `${font}, ${getCategoryFallback(category.name)}`;
                return (
                  <option key={font} value={fullFont} style={{ fontFamily: fullFont }}>
                    {font}
                  </option>
                );
              })}
            </optgroup>
          ))
        ) : (
          filteredFonts.map((font) => (
            <option key={font} value={font} style={{ fontFamily: font }}>
              {font.split(',')[0]}
            </option>
          ))
        )}
      </select>
      <div className="font-selector-preview" style={{ fontFamily: value }}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
}
