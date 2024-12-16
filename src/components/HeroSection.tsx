import React from 'react';
import CurveBackground from './CurveBackground';
import SearchSection from './SearchSection';
import Header from './Header';
import { ChevronDown } from 'lucide-react';
import './Components.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Header />
      <CurveBackground />
      <img
        src="/funditIconBig.svg"
        alt="Fundit Icon Big"
        className="fundit-icon"
      />
      
      <SearchSection />
      
      <div className="hero-content">
        {/* Left SVG */}
        <img 
          src="/leftSide.svg.svg" 
          alt="Job listings" 
          className="hero-image"
        />

        {/* Center text content */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Find the Job that is perfect for You
          </h1>
          <h2 className="hero-subtitle">
            Let's make your job hunt easier. Search, apply, and succeed with Foundit.
          </h2>
        </div>

        {/* Right SVG */}
        <img 
          src="/rightSide.svg.svg" 
          alt="Job seeker" 
          className="hero-image"
        />
      </div>

      <div className="scroll-down-arrow">
        <ChevronDown size={32} strokeWidth={1.5} color="#666666" />
      </div>
    </div>
  );
};

export default HeroSection;