import React from 'react';
import { Box, Typography} from '@mui/material';

const PopularSearches: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Popular Searches
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Add the popular search links */}
      </Box>
    </Box>
  );
};

export default PopularSearches;