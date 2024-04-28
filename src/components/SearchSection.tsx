import React, { useState } from 'react';
import { Box, TextField, Button, InputAdornment, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const SearchSection: React.FC = () => {
  const inputHeight = '6vh'; // Define constant for height
  
  // State to manage the selected experience level
  const [experience, setExperience] = useState('');
  
  // Handler function to update the selected experience level
  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
  };
  
  // Options for experience level dropdown
  const experienceOptions = [
    'Entry Level',
    'Associate',
    'Mid-Senior Level',
    'Director',
    'Executive',
  ];
  
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      my={4} // Add margin on y-axis for spacing
      width="100vw"
      sx={{
        margin: '8vh 0px 20vh 0px',
      }}
    >
      {/* Job title/role search TextField */}
      <TextField
        variant="outlined"
        placeholder="Search by job title/role"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            borderRadius: '20px 0 0 20px',
            borderRight: 'none',
            height: inputHeight,
            width: '30vw',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'purple' },
            '&:hover fieldset': { borderColor: 'purple' },
            backgroundColor: '#E7E7EA',
           
          },
        }}
      />
      
      {/* Location search TextField */}
      <TextField
        variant="outlined"
        placeholder="Location"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
          style: {
            borderRadius: 0,
            borderLeft: 'none',
            borderRight: 'none',
            height: inputHeight,
            width: '20vw',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'purple' },
            '&:hover fieldset': { borderColor: 'purple' },
            backgroundColor: '#E7E7EA',
            ml: 1,
            mr: 1,
          },
        }}
      />
      
      {/* Experience level dropdown */}
      <TextField
  variant="outlined"
  placeholder="Experience level"
  value={experience}
  onChange={handleExperienceChange}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <WorkHistoryIcon />
      </InputAdornment>
    ),
    style: {
      borderRadius: '0px',
      borderLeft: 'none',
      height: inputHeight,
      width: '20vw',
    },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'purple' },
      '&:hover fieldset': { borderColor: 'purple' },
      mr: 1,
      backgroundColor: '#E7E7EA',
    },
  }}
  select
  SelectProps={{
    displayEmpty: true,
    // renderValue: (selected) => selected || 'Experience level',
    MenuProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      // getContentAnchorEl: null,
    },
  }}
>
  {experienceOptions.map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ))}
</TextField>

      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        style={{
          borderRadius: '0px 20px 20px 0px',
          background: 'linear-gradient(93deg, #7C17C4 15.29%, #DAA6FF 111.34%)',
          height: inputHeight,
          minWidth: '150px',
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchSection;