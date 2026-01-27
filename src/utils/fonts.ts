export function buildGoogleFontsUrl(families: string[]): string | null {
  const weights = '300;400;500;600;700';
  const set = new Set<string>();

  for (const family of families) {
    const name = family.split(',')[0]?.trim().replace(/["']/g, '');
    if (!name) continue;
    const encoded = name.replace(/\s+/g, '+');
    set.add(`family=${encoded}:wght@${weights}`);
  }

  if (set.size === 0) return null;
  return `https://fonts.googleapis.com/css2?${Array.from(set).join('&')}&display=swap`;
}
