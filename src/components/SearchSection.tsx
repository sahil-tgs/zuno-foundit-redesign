import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const SearchSection: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Find the job that is perfect for You
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Let's make your job hunt easier. Search, apply, and succeed with Foundit.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <TextField label="Search by job title/role" variant="outlined" />
        <TextField label="Location" variant="outlined" />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchSection;