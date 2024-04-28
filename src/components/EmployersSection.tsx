import React from 'react';
import { Box, Typography } from '@mui/material';

const EmployersSection: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Employers of Choice
      </Typography>
      {/* Add the logos of employers */}
    </Box>
  );
};

export default EmployersSection;