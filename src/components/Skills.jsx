import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import BuildIcon from '@mui/icons-material/Build';

const Skills = ({ skills }) => {
  const renderSkillChips = (skillArray) =>
    skillArray.map((skill, index) => (
      <Chip
        key={index}
        label={skill.name}
        variant="outlined"
        color="primary"
        sx={{ m: 0.5, fontSize: '0.9rem', fontWeight: 500 }}
      />
    ));

  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <CodeIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Programming Languages
              </Typography>
              <Box>{renderSkillChips(skills.Lang)}</Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <LayersIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Frameworks & Libraries
              </Typography>
              <Box>{renderSkillChips(skills.Frameworks)}</Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <BuildIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Developer Tools
              </Typography>
              <Box>{renderSkillChips(skills.Developer_Tools)}</Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
