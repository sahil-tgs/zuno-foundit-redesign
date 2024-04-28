import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 2, bgcolor: 'grey.200' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2023 foundit | All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;