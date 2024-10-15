import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function PersonalTabs() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <Tabs>
      <TabItem value="projects" label="PROJECTS" default>
      </TabItem>
      <TabItem value="resume" label="RESUME">
        <h2>Experience</h2>
        <h2>Education</h2>
      </TabItem>
    </Tabs>
    </div>
  );
};