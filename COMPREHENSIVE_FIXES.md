# Comprehensive Fixes Required

## Issues Found

### 1. ✅ Checkbox Checkmark Too Small
- **File:** `src/components/library/Checkbox/Checkbox.css`
- **Issue:** SVG at 70% size is hard to see
- **Fix:** Increase to 85% for better visibility

### 2. ✅ Hardcoded Font in PreviewToggle
- **File:** `src/components/preview/PreviewToggle.css`
- **Issue:** `font-family: 'Inter', sans-serif;` hardcoded
- **Fix:** Use `var(--font-family)`

### 3. ✅ Export Missing Critical Features
- **File:** `src/utils/generateCSS.ts`
- **Missing:**
  - Focus ring alpha conversion logic
  - Elevated border conditional logic
  - Modal backdrop color mixing
  - Component-level special handling

### 4. ⚠️ Theme Contrast Issues
- Neon theme: Yellow on light yellow needs checking
- Some themes may have contrast issues with textOnAccent

### 5. ✅ Export Package.json Issues
- Missing lucide-react dependency
- Should specify repository, author, license
- Should include proper build scripts
