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
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DescriptionIcon from '@mui/icons-material/Description';

const Research = ({ research }) => {
  const [openId, setOpenId] = useState(null);   // null = no dialog open
  const handleOpen = (id) => setOpenId(id);
  const handleClose = () => setOpenId(null);

  return (
    <Box id="research" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Research
        </Typography>

        <Grid container spacing={4}>
          {research.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SupervisorAccountIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      Supervisor:&nbsp;
                      <Link href={item.supervisorLink} target="_blank" underline="hover">
                        {item.supervisorName}
                      </Link>
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.department}, {item.institution}
                  </Typography>

                  <Typography variant="body2">{item.blurb}</Typography>
                </CardContent>

                <CardActions>
                  <Button variant="contained" size="small" onClick={() => handleOpen(idx)}>
                    Read More
                  </Button>
                </CardActions>
              </Card>

              {/* -------- Dialog for this item -------- */}
              <Dialog open={openId === idx} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>{item.title}</DialogTitle>

                <DialogContent dividers>
                  <Typography gutterBottom>
                    <strong>Supervisor:&nbsp;</strong>
                    <Link href={item.supervisorLink} target="_blank" underline="hover">
                      {item.supervisorName}
                    </Link>
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Institution:&nbsp;</strong>{item.department}, {item.institution}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography gutterBottom>
                    <strong>Description</strong>
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {item.fullDescription}
                  </Typography>

                  {item.thesis && (
                    <>
                      <Typography gutterBottom sx={{ mt: 2 }}>
                        <strong>Thesis</strong>
                      </Typography>
                      <Link href={item.thesis} target="_blank">View Thesis</Link>
                    </>
                  )}

                  {item.papers?.length > 0 && (
                    <>
                      <Typography gutterBottom>
                        <strong>Papers</strong>
                      </Typography>
                      {item.papers.map((p, i) => (
                        <Typography key={i} variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <DescriptionIcon fontSize="small" sx={{ mr: 1 }} />
                          <Link href={p.link} target="_blank">{p.title}</Link>
                        </Typography>
                      ))}
                    </>
                  )}

                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose} variant="outlined">
                    Show Less
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Research;
