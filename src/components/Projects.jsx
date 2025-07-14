import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Link,
  Divider,
} from '@mui/material';

const Projects = ({ projects }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box id="projects" sx={{py: 8, backgroundColor: '#f9f9f9' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.details}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => toggleExpand(index)}
                    sx={{ ml: 1 }}
                  >
                    {expanded[index] ? 'Show Less' : 'See More'}
                  </Button>
                </CardActions>
                <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                  <Divider />
                  <CardContent>
                    {project.repo && (
                      <Box sx={{ mb: 1 }}>
                        <Link href={project.repo} target="_blank" underline="hover">
                          Repository
                        </Link>
                      </Box>
                    )}
                    {project.visit && (
                      <Box sx={{ mb: 1 }}>
                        <Link href={project.visit} target="_blank" underline="hover">
                          Website/Demo
                        </Link>
                      </Box>
                    )}
                    {project.link && (
                      <Box>
                        <Link href={project.link} target="_blank" underline="hover">
                          Demo Video
                        </Link>
                      </Box>
                    )}
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
