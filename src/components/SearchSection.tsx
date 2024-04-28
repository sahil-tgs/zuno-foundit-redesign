import React, { useState } from 'react';
import { Box, TextField, Button, InputAdornment, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const SearchSection: React.FC = () => {
  const inputHeight = '5vh'; // Define constant for height

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
      mb={4}
      width="100vw"
      sx={{
        '& > *': {
          m: 2, // Add space between each TextField
        },
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
            height: inputHeight, // Set height using constant
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'purple',
            },
            '&:hover fieldset': {
              borderColor: 'purple',
            },
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
            height: inputHeight, // Set height using constant
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'purple',
            },
            '&:hover fieldset': {
              borderColor: 'purple',
            },
          },
        }}
      />

      {/* Experience level dropdown */}
      <TextField
        select
        value={experience}
        onChange={handleExperienceChange}
        placeholder="Experience"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WorkHistoryIcon />
            </InputAdornment>
          ),
          style: {
            borderRadius: '0px',
            borderLeft: 'none',
            height: inputHeight, // Set height using constant
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'purple',
            },
            '&:hover fieldset': {
              borderColor: 'purple',
            },
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
          background: 'linear-gradient(45deg, #9b59b6, #8e44ad)',
          height: inputHeight, // Set height using constant
          minWidth: '150px', // Set min-width to ensure button size
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchSection;
