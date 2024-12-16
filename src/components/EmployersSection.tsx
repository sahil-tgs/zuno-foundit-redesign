// src/components/EmployersSection.tsx
import React from 'react';
import CurveBackground2 from './CurveBackground2';
import FeatureCards from './FeatureCards';
import './CurveBackground2.css';

const EmployersSection: React.FC = () => {
  return (
    <div className="employers-section">
      <CurveBackground2 />
      <div className="employers-content">
        <h2 className="employers-title">Employers of Choice</h2>
        <div className="employer-logos">
          <img src="/companies/iciciBankLogo.png" alt="ICICI Bank" className="employer-logo" />
          <img src="/companies/cognizantLogo.png" alt="Cognizant" className="employer-logo" />
          <img src="/companies/harmanLogo.png" alt="Harman" className="employer-logo" />
          <img src="/companies/synopsysLogo.png" alt="Synopsys" className="employer-logo" />
          <img src="/companies/tcsLogo.png" alt="TCS" className="employer-logo" />
        </div>

        <div className="popular-searches">
          <h2 className="popular-searches-title">Popular Searches</h2>
          <div className="search-tags">
            <span className="search-tag">Fresher</span>
            <span className="search-tag">HR Executive</span>
            <span className="search-tag">Manual Testing</span>
            <span className="search-tag">Banking</span>
            <span className="search-tag">Work From Home</span>
            <span className="search-tag">IT</span>
            <span className="search-tag">Software Engineer</span>
            <span className="search-tag">Data Analyst</span>
            <span className="search-tag">Digital Marketing</span>
            <span className="search-tag">DevOps Engineer</span>
            <span className="search-tag">Accounting</span>
            <span className="search-tag">Java</span>
            <span className="search-tag">Business Analytics</span>
            <span className="search-tag">Sales</span>
          </div>
        </div>

        {/* Added Feature Cards */}
        <FeatureCards />
      </div>
    </div>
  );
};

export default EmployersSection;