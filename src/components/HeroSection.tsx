import React from 'react';
import CurveBackground from './CurveBackground';
import SearchSection from './SearchSection';
import Header from './Header';
import './Components.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <Header />
      <CurveBackground />
      <img
        src="/funditIconBig.svg"
        alt="Fundit Icon Big"
        className="fundit-icon"
      />
      <div className="hero-content">
        <SearchSection />
        <h1 className="hero-title">Find the Job that is perfect for You</h1>
        <h2 className="hero-subtitle">
          Let's make your job hunt easier. Search, apply, and succeed with Foundit.
        </h2>
      </div>
      <img src="/leftSide.svg.svg" alt="Job listings" className="hero-image hero-image-left" />
      <img src="/rightSide.svg.svg" alt="Job seeker" className="hero-image hero-image-right" />
      <img src="/subHeroRight.svg" alt="Scroll down" className="scroll-down-arrow" />
    </div>
  );
};

export default HeroSection;