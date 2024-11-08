import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import HeroSection from './components/HeroSection';
import GetStartedSection from './components/GetStartedSection';
import EmployersSection from './components/EmployersSection';
import PopularSearches from './components/PopularSearches';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import './App.css'; // Import the App.css file

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* <Header /> */}
      {/* <SearchSection /> */}
      <HeroSection />
      {/* <Container maxWidth="lg">
        <GetStartedSection />
        <EmployersSection />
        <PopularSearches />
        <FeaturedSection />
      </Container> */}
      <Footer />
    </Box>
  );
};

export default App;
