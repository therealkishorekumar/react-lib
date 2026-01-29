import { useState } from 'react';
import { Palette, Boxes } from 'lucide-react';
import { TokenPanel } from './panels/TokenPanel';
import { ComponentPanel } from './panels/ComponentPanel';
import { ComponentColorsPanel } from './panels/ComponentColorsPanel';
import './EditorSidebar.css';

type EditorTab = 'design' | 'components';

export function EditorSidebar() {
  const [activeTab, setActiveTab] = useState<EditorTab>('design');

  return (
    <div className="editor-sidebar">
      <div className="editor-tabs">
        <button
          className={`editor-tab ${activeTab === 'design' ? 'editor-tab-active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          <Palette size={16} />
          <span>Design</span>
        </button>
        <button
          className={`editor-tab ${activeTab === 'components' ? 'editor-tab-active' : ''}`}
          onClick={() => setActiveTab('components')}
        >
          <Boxes size={16} />
          <span>Components</span>
        </button>
      </div>
      <div className="editor-content">
        {activeTab === 'design' ? <TokenPanel /> : <ComponentPanel />}
      </div>
    </div>
  );
}
