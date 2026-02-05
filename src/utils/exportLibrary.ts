import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { DesignTokens } from '../types/tokens';
import { generateTokensCSS, generateResetCSS } from './generateCSS';
import { generatePackageJson, generateReadme, generateIndexTs, generateViteConfig, generateGitIgnore, generateExampleHtml } from './componentTemplates';

const tsxFiles = import.meta.glob('../components/library/*/*.tsx', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const cssFiles = import.meta.glob('../components/library/*/*.css', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const indexFiles = import.meta.glob('../components/library/*/index.ts', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

// This object contains the source code for the components that will be exported.
// These are simplified versions that work standalone.
const componentFiles: Record<string, { tsx: string; css: string; index: string }> = Object.fromEntries(
  Object.entries(tsxFiles).map(([path, tsx]) => {
    const parts = path.split('/');
    const name = parts[parts.length - 2];
    const cssPath = path.replace('.tsx', '.css');
    const indexPath = path.replace(`${name}.tsx`, 'index.ts');
    return [
      name,
      {
        tsx,
        css: cssFiles[cssPath] || '',
        index: indexFiles[indexPath] || '',
      },
    ];
  })
);
export async function exportLibrary(tokens: DesignTokens): Promise<void> {
  try {
    // Validate we have components to export
    if (!componentFiles || Object.keys(componentFiles).length === 0) {
      throw new Error('No components found to export. Please check the component library structure.');
    }

    const zip = new JSZip();
    const componentNames = Object.keys(componentFiles);

    // Validate component names
    if (componentNames.length === 0) {
      throw new Error('Component list is empty. Cannot export empty library.');
    }

    // Create folder structure
    const componentsFolder = zip.folder('component-library/components');
    const stylesFolder = zip.folder('component-library/styles');
    const rootFolder = zip.folder('component-library');

    if (!componentsFolder || !stylesFolder || !rootFolder) {
      throw new Error('Failed to create zip folder structure.');
    }

    // Add styles with error handling
    try {
      const tokensCSS = generateTokensCSS(tokens);
      const resetCSS = generateResetCSS();

      if (!tokensCSS || tokensCSS.length < 100) {
        throw new Error('Failed to generate tokens CSS or CSS is incomplete.');
      }

      // Validate CSS contains required variables
      const requiredVars = ['--semantic-accent-primary', '--semantic-surface-primary', '--font-family'];
      const missingVars = requiredVars.filter(v => !tokensCSS.includes(v));
      if (missingVars.length > 0) {
        console.warn('Missing CSS variables:', missingVars);
      }

      stylesFolder.file('tokens.css', tokensCSS);
      stylesFolder.file('reset.css', resetCSS);
    } catch (error) {
      throw new Error(`Failed to generate CSS files: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Add components with validation
    for (const [name, files] of Object.entries(componentFiles)) {
      if (!name || !files) {
        console.warn(`Skipping invalid component: ${name}`);
        continue;
      }

      if (!files.tsx) {
        console.warn(`Component ${name} is missing TSX file, skipping.`);
        continue;
      }

      try {
        const componentFolder = componentsFolder.folder(name);
        if (!componentFolder) {
          throw new Error(`Failed to create folder for component: ${name}`);
        }

        componentFolder.file(`${name}.tsx`, files.tsx);
        componentFolder.file(`${name}.css`, files.css || '/* No styles */');
        componentFolder.file('index.ts', files.index || `export * from './${name}';\n`);
      } catch (error) {
        console.error(`Failed to add component ${name}:`, error);
        // Continue with other components
      }
    }

    // Add root files with error handling
    try {
      rootFolder.file('index.ts', generateIndexTs(componentNames));
      rootFolder.file('package.json', generatePackageJson());
      rootFolder.file('README.md', generateReadme(componentNames));
      rootFolder.file('vite.config.ts', generateViteConfig());
      rootFolder.file('.gitignore', generateGitIgnore());
      rootFolder.file('example.html', generateExampleHtml(componentNames));
    } catch (error) {
      throw new Error(`Failed to generate root files: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Add tsconfig
    rootFolder.file('tsconfig.json', JSON.stringify({
      compilerOptions: {
        target: 'ES2020',
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        module: 'ESNext',
        moduleResolution: 'bundler',
        jsx: 'react-jsx',
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        skipLibCheck: true,
        declaration: true,
      },
      include: ['**/*.ts', '**/*.tsx'],
    }, null, 2));
    
    // Add tsconfig.node.json for Vite
    rootFolder.file('tsconfig.node.json', JSON.stringify({
      compilerOptions: {
        composite: true,
        skipLibCheck: true,
        module: 'ESNext',
        moduleResolution: 'bundler',
        allowSyntheticDefaultImports: true,
        strict: true,
      },
      include: ['vite.config.ts'],
    }, null, 2));

    // Generate and download zip with timeout protection
    const timestamp = new Date().toISOString().split('T')[0];
    const content = await Promise.race([
      zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Export timed out after 30 seconds')), 30000)
      )
    ]);

    saveAs(content, `component-library-${timestamp}.zip`);
  } catch (error) {
    // Enhanced error logging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Export failed:', errorMessage, error);

    // Re-throw with user-friendly message
    throw new Error(`Failed to export library: ${errorMessage}`);
  }
}
