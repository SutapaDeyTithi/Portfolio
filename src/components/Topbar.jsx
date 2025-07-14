import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Link } from '@mui/material';
import { Facebook, LinkedIn, GitHub, FileDownload, School } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';


const Topbar = ({ landingData }) => {
  return (
    <AppBar position="fixed" color="primary">
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
      Sutapa Dey Tithi
    </Typography>
    <Box>
      {/* Navigation Links */}
      {['Home', 'Education', 'Research', 'Skills', 'Projects'].map((item) => (
        <Button
          key={item}
          href={`#${item.toLowerCase()}`}
          sx={{ color: '#FFFFFF', textTransform: 'none' }}
        >
          {item}
        </Button>
      ))}
    </Box>
    {/* Social Icons */}
    <Box>
      <IconButton href={landingData.scholar} target="_blank" sx={{ color: '#FFFFFF' }}>
        <SchoolIcon />
      </IconButton>
      <IconButton href={landingData.linkedIn} target="_blank" sx={{ color: '#FFFFFF' }}>
        <LinkedIn />
      </IconButton>
      <IconButton href={landingData.github} target="_blank" sx={{ color: '#FFFFFF' }}>
        <GitHub />
      </IconButton>
    </Box>
  </Toolbar>
</AppBar>
  );
};

export default Topbar;
