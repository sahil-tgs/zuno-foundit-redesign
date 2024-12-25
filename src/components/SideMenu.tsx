// src/components/SideMenu.tsx
import React from 'react';
import {
 Drawer,
 Box,
 Button,
 List,
 ListItem,
 ListItemIcon,
 ListItemText,
 ListItemButton,
 Typography,
 IconButton
} from '@mui/material';
import {
 WorkspacePremium,
 ContentPaste,
 Psychology, 
 Work,
 TipsAndUpdates,
 SystemUpdateAlt,
 Login
} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import './SideMenu.css';

interface SideMenuProps {
 isOpen: boolean;
 onClose: () => void;
}

const menuItemStyle = {
 '& .MuiListItemText-primary': {
   color: '#6E00BE',
   fontWeight: 600
 }
};

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
 const menuItems = [
   { 
     text: 'Premium Services', 
     icon: <WorkspacePremium sx={{ color: '#6E00BE' }} />, 
     expandable: true 
   },
   { 
     text: 'Resume Builder', 
     icon: <ContentPaste sx={{ color: '#6E00BE' }} />
   },
   { 
     text: 'Career Fair', 
     icon: <img src="/Group 40460.svg" alt="" style={{ width: '24px', height: '24px' }} />
   },
   { 
     text: 'Skill Tests', 
     icon: <Psychology sx={{ color: '#6E00BE' }} />, 
     expandable: true 
   },
   { 
     text: 'Job Categories', 
     icon: <Work sx={{ color: '#6E00BE' }} />, 
     expandable: true 
   },
   { 
     text: 'Career Tips', 
     icon: <TipsAndUpdates sx={{ color: '#6E00BE' }} />, 
     expandable: true 
   },
   { 
     text: 'Download apps', 
     icon: <SystemUpdateAlt sx={{ color: '#6E00BE' }} />
   },
 ];

 return (
   <Drawer
     anchor="left"
     open={isOpen}
     onClose={onClose}
     disableScrollLock={true}
     sx={{
       '& .MuiDrawer-paper': {
         width: 'clamp(280px, 25vw, 400px)',
         overflow: 'hidden',
         transition: 'transform 0.3s ease-in-out'
       },
       '& .MuiBackdrop-root': {
         transition: 'opacity 0.3s ease-in-out'
       }
     }}
   >
     <div className="side-menu-wrapper">
       <div className="background-image-layer">
         <img src="/SideMenuBackground.png" alt="" />
       </div>

       <div className="blur-overlay-layer" />

       <div className="content-layer">
         <Box 
           className="header"
           sx={{
             display: 'flex',
             alignItems: 'center',
             height: '64px',
             padding: '10px',
             marginBottom: '24px'
           }}
         >
           <IconButton 
             onClick={onClose}
             sx={{ 
               mr: 2, 
               color: 'black',
               marginLeft: '10px'
             }}
             size="large"
           >
             <CloseIcon />
           </IconButton>
           <img 
             src="/logo.svg" 
             alt="Foundit Logo" 
             style={{ 
               height: '20px',
             }} 
           />
         </Box>

         <Box 
           className="login-section"
           sx={{
             background: 'linear-gradient(93.15deg, #7C17C4 3.98%, rgba(124, 23, 196, 0.51) 100%)',
             padding: '16px',
             borderRadius: '8px',
             marginBottom: '24px',
             color: 'white'
           }}
         >
           <Button 
             variant="contained" 
             fullWidth 
             sx={{
               background: 'white',
               color: '#7C17C4',
               marginBottom: '8px',
               '&:hover': {
                 background: 'rgba(255,255,255,0.9)'
               }
             }}
           >
             LOGIN
           </Button>
           <Button 
             variant="outlined" 
             fullWidth 
             sx={{
               color: 'white',
               borderColor: 'white',
               marginBottom: '16px',
               '&:hover': {
                 borderColor: 'white',
                 background: 'rgba(255,255,255,0.1)'
               }
             }}
           >
             REGISTER
           </Button>
           <Box 
             className="employer-login"
             sx={{
               display: 'flex',
               alignItems: 'center',
               gap: 1,
               cursor: 'pointer',
               '&:hover': { opacity: 0.9 }
             }}
           >
             <Login sx={{ fontSize: 20 }} />
             <Typography>Employer Login</Typography>
           </Box>
         </Box>

         <List>
           {menuItems.map((item, index) => (
             <ListItem key={index} disablePadding>
               <ListItemButton sx={menuItemStyle}>
                 <ListItemIcon>{item.icon}</ListItemIcon>
                 <ListItemText primary={item.text} />
                 {item.expandable && <span style={{ color: '#6E00BE' }}>›</span>}
               </ListItemButton>
             </ListItem>
           ))}
         </List>

         <Box className="app-store-buttons">
           <img src="/googlePlay.png" alt="Get it on Google Play" />
           <img src="/appStore.png" alt="Download on App Store" />
         </Box>
       </div>
     </div>
   </Drawer>
 );
};

export default SideMenu;