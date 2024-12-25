// src/components/Header.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from './SideMenu';
import logo from '../../public/logo.svg';

const buttonStyle = {
  color: 'black',
  fontWeight: 'bold',
};

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        minWidth: '94vw',
        paddingTop: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '10px',
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
            onClick={() => setIsDrawerOpen(true)}
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

      <SideMenu 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </AppBar>
  );
};

export default Header;