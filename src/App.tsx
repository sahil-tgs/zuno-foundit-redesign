// App.tsx
import React from 'react';
import { Container } from '@mui/material';
import HeroSection from './components/HeroSection';
import GetStartedSection from './components/GetStartedSection';
import EmployersSection from './components/EmployersSection';
import PopularSearches from './components/PopularSearches';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import './App.css'; // Import the App.css file

const App: React.FC = () => {
  return (
    <div className="app-container"> {/* Add class name to the wrapping div */}
      <HeroSection />
      <Container maxWidth="lg">
        <GetStartedSection />
        <EmployersSection />
        <PopularSearches />
        <FeaturedSection />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
