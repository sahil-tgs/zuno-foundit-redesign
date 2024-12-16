import React from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
  return (
    <div className="feature-cards">
      <div className="feature-card scammers">
        <div className="feature-card-image">
          <img src="/cardImages/scammers.png" alt="Scam Alert Icon" />
        </div>
        <div className="feature-card-content">
          <h3>Beware of Scammers</h3>
          <p>We don't charge any money for job offers</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-card-image">
          <img src="/cardImages/zuno.png" alt="Zuno Platform" />
        </div>
        <div className="feature-card-content">
          <h3>A Platform for Freshers</h3>
          <p>1000s of Internships & Fresher Jobs</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-card-image">
          <img src="/cardImages/createJob.png" alt="Job Alerts" />
        </div>
        <div className="feature-card-content">
          <h3>Create Job Alerts</h3>
          <p>Get Emails on New Jobs</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-card-image">
          <img src="/cardImages/boost.png" alt="Career Boost" />
        </div>
        <div className="feature-card-content">
          <h3>Give Your Job Hunt A Boost</h3>
          <p>Try out foundit Career Services</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-card-image">
          <img src="/cardImages/searchBetter.png" alt="Mobile App" />
        </div>
        <div className="feature-card-content">
          <h3>Search better with foundit App</h3>
          <div className="store-buttons">
            <img src="/googlePlay.png" alt="Get it on Google Play" className="store-button" />
            <img src="/appStore.png" alt="Download on App Store" className="store-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;