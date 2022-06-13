import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Sidebar = (props) => {
  return (
    <Container maxWidth="xs" sx={{ position: 'sticky', top: 30 }}>
      <Box sx={{ display: 'flex', bgcolor: '#DDDDDD', p: 2, mb: 2, borderRadius: 3 }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2">
              投稿日
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">
              {props.date}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Sidebar;
