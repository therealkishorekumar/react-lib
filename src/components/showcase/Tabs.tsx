import React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from '../library';

export function TabsShowcase() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Tabs</h2>
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">Overview</Tab>
          <Tab value="tab2">Features</Tab>
          <Tab value="tab3">Settings</Tab>
        </TabList>
        <TabPanel value="tab1">
          This is the overview tab content. It provides a general summary.
        </TabPanel>
        <TabPanel value="tab2">
          This is the features tab content. It lists all the key features.
        </TabPanel>
        <TabPanel value="tab3">
          This is the settings tab content. Configure your preferences here.
        </TabPanel>
      </Tabs>
    </section>
  );
}
