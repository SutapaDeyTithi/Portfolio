import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Education = ({ education }) => {
  return (
    <Box id="education" sx={{py: 8, backgroundColor: '#ffffff' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>Education</Typography>
        {education.map((data, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            {data.university2 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" component="h3">{data.university2}</Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>{data.degree2}</Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  CGPA: 3.93<br />
                  Research Area: AI in Education, Human-Computer Interaction<br />
                  Advisor: <a href="https://scholar.google.com/citations?hl=en&user=2hemeGMAAAAJ" target="_blank" rel="noreferrer">Dr. Tiffany Barnes</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.fromDate2} - {data.toDate2}
                </Typography>
              </Box>
            )}

            <Box>
              <Typography variant="h5" component="h3">{data.university}</Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>{data.degree}</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                CGPA: {3.62}<br />
                Research Area: Human-Computer Interaction, Health Informatics, Bioinformatics<br />
                Thesis Supervisor: <a href="https://scholar.google.com/citations?user=9d52x-cAAAAJ&hl=en" target="_blank" rel="noreferrer">Dr. Mohammad Saifur Rahman</a>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.fromDate} - {data.toDate}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Education;
