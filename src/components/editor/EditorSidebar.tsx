import { useState } from 'react';
import { Palette, Boxes } from 'lucide-react';
import { TokenPanel } from './panels/TokenPanel';
import { ComponentPanel } from './panels/ComponentPanel';
import './EditorSidebar.css';

type EditorTab = 'tokens' | 'components';

export function EditorSidebar() {
  const [activeTab, setActiveTab] = useState<EditorTab>('tokens');

  return (
    <div className="editor-sidebar">
      <div className="editor-tabs">
        <button
          className={`editor-tab ${activeTab === 'tokens' ? 'editor-tab-active' : ''}`}
          onClick={() => setActiveTab('tokens')}
        >
          <Palette size={16} />
          <span>Design Tokens</span>
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
        {activeTab === 'tokens' ? <TokenPanel /> : <ComponentPanel />}
      </div>
    </div>
  );
}
