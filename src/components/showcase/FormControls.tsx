import React, { useState } from 'react';
import { Input, Select, Checkbox, RadioGroup, Toggle } from '../library';

export function FormControls() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');

  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Form Controls</h2>
      <div className="showcase-grid">
        <Input label="Text Input" placeholder="Enter text..." />
        <Input label="With Error" error="This field is required" />
        <Input label="Disabled" disabled placeholder="Disabled input" />
        <Select
          label="Select"
          placeholder="Choose option..."
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </div>
      <div className="showcase-row">
        <Checkbox
          label="Checkbox"
          checked={checkboxChecked}
          onChange={(e) => setCheckboxChecked(e.target.checked)}
        />
        <Checkbox label="Checked" checked readOnly />
        <Checkbox label="Indeterminate" indeterminate />
        <Checkbox label="Disabled" disabled />
      </div>
      <div className="showcase-row">
        <RadioGroup
          name="demo-radio"
          direction="horizontal"
          value={radioValue}
          onChange={setRadioValue}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
        />
      </div>
      <div className="showcase-row">
        <Toggle
          label="Toggle Switch"
          checked={toggleChecked}
          onChange={(e) => setToggleChecked(e.target.checked)}
        />
        <Toggle label="Small" size="sm" />
        <Toggle label="Large" size="lg" checked readOnly />
      </div>
    </section>
  );
}
