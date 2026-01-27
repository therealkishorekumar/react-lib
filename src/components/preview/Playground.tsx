import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  Checkbox,
  Toggle,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Alert,
  Progress,
  Avatar,
} from '../library';
import './Playground.css';

type ComponentType = 'button' | 'input' | 'select' | 'checkbox' | 'toggle' | 'card' | 'badge' | 'alert' | 'progress' | 'avatar';

interface ComponentConfig {
  name: string;
  component: ComponentType;
}

const components: ComponentConfig[] = [
  { name: 'Button', component: 'button' },
  { name: 'Input', component: 'input' },
  { name: 'Select', component: 'select' },
  { name: 'Checkbox', component: 'checkbox' },
  { name: 'Toggle', component: 'toggle' },
  { name: 'Card', component: 'card' },
  { name: 'Badge', component: 'badge' },
  { name: 'Alert', component: 'alert' },
  { name: 'Progress', component: 'progress' },
  { name: 'Avatar', component: 'avatar' },
];

export function Playground() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType>('button');

  // Button state
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'>('primary');
  const [buttonSize, setButtonSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Input state
  const [inputValue, setInputValue] = useState('');
  const [inputLabel, setInputLabel] = useState('Label');
  const [inputError, setInputError] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);

  // Badge state
  const [badgeVariant, setBadgeVariant] = useState<'default' | 'primary' | 'success' | 'warning' | 'error'>('primary');
  const [badgeSize, setBadgeSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [badgeRounded, setBadgeRounded] = useState(false);

  // Alert state
  const [alertVariant, setAlertVariant] = useState<'info' | 'success' | 'warning' | 'error'>('info');
  const [alertTitle, setAlertTitle] = useState('Alert Title');
  const [alertDismissible, setAlertDismissible] = useState(false);

  // Progress state
  const [progressValue, setProgressValue] = useState(50);
  const [progressVariant, setProgressVariant] = useState<'default' | 'success' | 'warning' | 'error'>('default');
  const [progressAnimated, setProgressAnimated] = useState(false);

  // Avatar state
  const [avatarName, setAvatarName] = useState('John Doe');
  const [avatarSize, setAvatarSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  const [avatarStatus, setAvatarStatus] = useState<'online' | 'offline' | 'away' | 'busy' | ''>('');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'button':
        return (
          <Button
            variant={buttonVariant}
            size={buttonSize}
            disabled={buttonDisabled}
            loading={buttonLoading}
          >
            Button Text
          </Button>
        );
      case 'input':
        return (
          <Input
            label={inputLabel}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter text..."
            error={inputError}
            disabled={inputDisabled}
          />
        );
      case 'select':
        return (
          <Select
            label="Select Option"
            placeholder="Choose..."
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ]}
          />
        );
      case 'checkbox':
        return <Checkbox label="Checkbox Label" />;
      case 'toggle':
        return <Toggle label="Toggle Switch" />;
      case 'card':
        return (
          <Card variant="outlined" style={{ maxWidth: 300 }}>
            <CardHeader title="Card Title" subtitle="Card subtitle" />
            <CardBody>This is the card body content.</CardBody>
          </Card>
        );
      case 'badge':
        return (
          <Badge variant={badgeVariant} size={badgeSize} rounded={badgeRounded}>
            Badge
          </Badge>
        );
      case 'alert':
        return (
          <Alert
            variant={alertVariant}
            title={alertTitle}
            dismissible={alertDismissible}
            style={{ maxWidth: 400 }}
          >
            This is an alert message with additional details.
          </Alert>
        );
      case 'progress':
        return (
          <div style={{ width: 300 }}>
            <Progress
              value={progressValue}
              variant={progressVariant}
              animated={progressAnimated}
              showValue
            />
          </div>
        );
      case 'avatar':
        return (
          <Avatar
            name={avatarName}
            size={avatarSize}
            status={avatarStatus || undefined}
          />
        );
      default:
        return null;
    }
  };

  const renderControls = () => {
    switch (selectedComponent) {
      case 'button':
        return (
          <>
            <div className="playground-control">
              <label>Variant</label>
              <select value={buttonVariant} onChange={(e) => setButtonVariant(e.target.value as typeof buttonVariant)}>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
                <option value="danger">Danger</option>
              </select>
            </div>
            <div className="playground-control">
              <label>Size</label>
              <select value={buttonSize} onChange={(e) => setButtonSize(e.target.value as typeof buttonSize)}>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            <div className="playground-control">
              <label>
                <input type="checkbox" checked={buttonDisabled} onChange={(e) => setButtonDisabled(e.target.checked)} />
                Disabled
              </label>
            </div>
            <div className="playground-control">
              <label>
                <input type="checkbox" checked={buttonLoading} onChange={(e) => setButtonLoading(e.target.checked)} />
                Loading
              </label>
            </div>
          </>
        );
      case 'input':
        return (
          <>
            <div className="playground-control">
              <label>Label</label>
              <input type="text" value={inputLabel} onChange={(e) => setInputLabel(e.target.value)} />
            </div>
            <div className="playground-control">
              <label>Error</label>
              <input type="text" value={inputError} onChange={(e) => setInputError(e.target.value)} placeholder="Error message" />
            </div>
            <div className="playground-control">
              <label>
                <input type="checkbox" checked={inputDisabled} onChange={(e) => setInputDisabled(e.target.checked)} />
                Disabled
              </label>
            </div>
          </>
        );
      case 'badge':
        return (
          <>
            <div className="playground-control">
              <label>Variant</label>
              <select value={badgeVariant} onChange={(e) => setBadgeVariant(e.target.value as typeof badgeVariant)}>
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            <div className="playground-control">
              <label>Size</label>
              <select value={badgeSize} onChange={(e) => setBadgeSize(e.target.value as typeof badgeSize)}>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            <div className="playground-control">
              <label>
                <input type="checkbox" checked={badgeRounded} onChange={(e) => setBadgeRounded(e.target.checked)} />
                Rounded
              </label>
            </div>
          </>
        );
      case 'alert':
        return (
          <>
            <div className="playground-control">
              <label>Variant</label>
              <select value={alertVariant} onChange={(e) => setAlertVariant(e.target.value as typeof alertVariant)}>
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            <div className="playground-control">
              <label>Title</label>
              <input type="text" value={alertTitle} onChange={(e) => setAlertTitle(e.target.value)} />
            </div>
            <div className="playground-control">
              <label>
                <input type="checkbox" checked={alertDismissible} onChange={(e) => setAlertDismissible(e.target.checked)} />
                Dismissible
              </label>
            </div>
          </>
        );
      case 'progress':
        return (
          <>
            <div className="playground-control">
              <label>Value: {progressValue}%</label>
              <input type="range" min="0" max="100" value={progressValue} onChange={(e) => setProgressValue(Number(e.target.value))} />
            </div>
            <div className="playground-control">
              <label>Variant</label>
              <select value={progressVariant} onChange={(e) => setProgressVariant(e.target.value as typeof progressVariant)}>
                <option value="default">Default</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            <div className="playground-control">
              <label>
                <input type="checkbox" checked={progressAnimated} onChange={(e) => setProgressAnimated(e.target.checked)} />
                Animated
              </label>
            </div>
          </>
        );
      case 'avatar':
        return (
          <>
            <div className="playground-control">
              <label>Name</label>
              <input type="text" value={avatarName} onChange={(e) => setAvatarName(e.target.value)} />
            </div>
            <div className="playground-control">
              <label>Size</label>
              <select value={avatarSize} onChange={(e) => setAvatarSize(e.target.value as typeof avatarSize)}>
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
            <div className="playground-control">
              <label>Status</label>
              <select value={avatarStatus} onChange={(e) => setAvatarStatus(e.target.value as typeof avatarStatus)}>
                <option value="">None</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="away">Away</option>
                <option value="busy">Busy</option>
              </select>
            </div>
          </>
        );
      default:
        return <p className="playground-no-controls">No configurable options for this component.</p>;
    }
  };

  return (
    <div className="playground">
      <div className="playground-sidebar">
        <h3 className="playground-sidebar-title">Components</h3>
        <div className="playground-component-list">
          {components.map((comp) => (
            <button
              key={comp.component}
              className={`playground-component-item ${selectedComponent === comp.component ? 'active' : ''}`}
              onClick={() => setSelectedComponent(comp.component)}
            >
              {comp.name}
            </button>
          ))}
        </div>
      </div>
      <div className="playground-main">
        <div className="playground-preview">
          <h3 className="playground-section-title">Preview</h3>
          <div className="playground-preview-area">
            {renderComponent()}
          </div>
        </div>
        <div className="playground-controls">
          <h3 className="playground-section-title">Controls</h3>
          <div className="playground-controls-list">
            {renderControls()}
          </div>
        </div>
      </div>
    </div>
  );
}
