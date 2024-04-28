import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const GetStartedSection: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Get Started with Foundit Today
      </Typography>
      <Typography variant="body1" gutterBottom>
        Create your profile, showcase your skills, and step into a world of opportunities.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Register
        </Button>
        <Button variant="outlined" color="primary">
          Upload Resume
        </Button>
      </Box>
    </Box>
  );
};

export default GetStartedSection;