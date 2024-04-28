import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import GetStartedSection from './components/GetStartedSection';
import EmployersSection from './components/EmployersSection';
import PopularSearches from './components/PopularSearches';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <SearchSection />
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