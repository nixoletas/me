import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Project } from './Project';
import { projects } from '../utils/data';

export default function PersonalTabs() {
  return (
    <div style={{display:"flex",flexDirection: "column",textAlign: "center", justifyContent:"center", width: "screen"}}>
      <h1>PROJECTS</h1>
      <p style={{width: "full", border: "1px solid"}}></p>
      {projects.map((props, idx) => (
          <Project key={idx} {...props} />
        ))}
    </div>
  );
};