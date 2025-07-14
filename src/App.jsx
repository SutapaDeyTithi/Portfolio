import React from 'react';
import { Box } from '@mui/material';
import Topbar from './components/Topbar';
import Landing from './components/Landing';
import Education from './components/Education';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import data from './data';

const App = () => {
  return (
    <Box>
      {/* Topbar */}
      <Topbar landingData={data.landingData} />

      {/* Sections */}
      <Box component="main" sx={{ pt: '80px' }}>
        <Landing landingData={data.landingData} />
        <Education education={data.education} />
        <Research research={data.research} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
      </Box>
    </Box>
  );
};

export default App;

  // "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build"
  // }