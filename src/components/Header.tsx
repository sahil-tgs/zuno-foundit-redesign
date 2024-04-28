// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../public/logo.svg';

const buttonStyle = {
  color: 'black',
  fontWeight: 'bold', // Added bold font weight for buttons
};

const Header: React.FC = () => {
  return (
    <AppBar
    position="static"
    sx={{
      minWidth: '94vw', // Adjust the minimum width
      paddingTop: '10px', // Padding for the top
      paddingLeft: '10px', // Padding for the left
      paddingRight: '10px', // Padding for the right
      paddingBottom: '10px', // Padding for the bottom
      background: 'transparent',
      boxShadow: 'none',
    }}
  >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Foundit Logo" style={{ height: '20px' }} />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" style={buttonStyle}>Career Fair</Button>
          <Button color="inherit" style={buttonStyle}>Skill Tests</Button>
          <Button color="inherit" style={buttonStyle}>Premium Services</Button>
          <Button color="inherit" style={buttonStyle}>Resume Builder</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" style={buttonStyle}>Login</Button>
          <Button color="inherit" style={buttonStyle}>Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;