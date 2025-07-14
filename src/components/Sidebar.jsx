import React from 'react';
import { Box, Avatar, Typography, Link, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';

const Sidebar = ({ landingData }) => {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: '#1e3a8a',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* Profile Picture */}
      <Avatar
        src="../Assets/profile.jpg"
        sx={{ width: 100, height: 100, border: '3px solid #ffffff', mb: 2 }}
      />
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Sutapa Dey Tithi
      </Typography>

      {/* Social Icons */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <IconButton href={landingData.fb} target="_blank" sx={{ color: '#ffffff' }}>
          <Facebook />
        </IconButton>
        <IconButton href={landingData.linkedIn} target="_blank" sx={{ color: '#ffffff' }}>
          <LinkedIn />
        </IconButton>
        <IconButton href={landingData.github} target="_blank" sx={{ color: '#ffffff' }}>
          <GitHub />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List sx={{ width: '100%' }}>
        {['Home', 'Education', 'Research', 'Skills', 'Projects'].map((item) => (
          <ListItem key={item} button component="a" href={`#${item.toLowerCase()}`}>
            <ListItemText primary={item} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>

      {/* Download CV */}
      <Link
        href="../Assets/SDT_CV.pdf"
        target="_blank"
        underline="hover"
        sx={{ color: '#ffffff', fontWeight: 'bold', mt: 'auto' }}
      >
        Download CV
      </Link>
    </Box>
  );
};

export default Sidebar;
