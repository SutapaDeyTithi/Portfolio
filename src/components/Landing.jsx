import React from 'react';
import { Box, Typography, Avatar, Button, Stack, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';


const Landing = ({ landingData }) => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default', // Use theme background
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            src="/Portfolio/profile2.png"
            sx={{
              width: 150,
              height: 150,
              margin: '0 auto',
              mb: 2,
              border: '3px solid #00796B',
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
            Sutapa Dey Tithi (She/Her)
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            PhD Student | Researcher | Software Developer
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.primary' }}>
            Hi, I am a PhD student in the Game2Learn lab at North Carolina State University, where I am advised by Dr. Tiffany Barnes. I specialize in <strong>AI in Education</strong> and <strong>Human-Computer Interaction</strong>,
            focusing on adaptive learning technologies to enhance student learning outcomes.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SchoolIcon />}
              href={landingData.scholar}
              target="_blank"
            >
              Scholar
            </Button>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<LinkedInIcon />}
              href={landingData.linkedIn}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<GitHubIcon />}
              href={landingData.github}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EmailIcon />}
              href={`mailto:${landingData.email}`}
            >
              Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Landing;
