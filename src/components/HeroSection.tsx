// HeroSection.tsx
import React from 'react';
import { Container, Box } from '@mui/material';
import SearchSection from './SearchSection';
import CurveBackground from './CurveBackground'; // Import the CurveBackground component
import './Components.css'; // Import the CSS file for styling

const HeroSection: React.FC = () => {
  return (
    <Box className="hero-section"> {/* Add class name to the wrapping Box */}
      {/* SVG background */}
      <img
        src="/funditIconBig.svg" // Replace with the correct path to your SVG file
        alt="Fundit Icon Big"
        className="fundit-icon" // Add class name to apply styles
      />
      {/* Curve background (for blur effect) */}
      <div className="curve-background-container">
        <CurveBackground />
      </div>
      {/* Header and SearchSection */}
      <Container maxWidth="lg">
      </Container>
    </Box>
  );
};

export default HeroSection;
