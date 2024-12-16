import React from 'react';
import './Components.css';

const GetStartedSection: React.FC = () => {
  return (
    <div className="get-started-section">
      <div className="get-started-content">
        <div className="get-started-text">
          <h2 className="get-started-title">
            Get Started with Foundit Today
          </h2>
          <p className="get-started-subtitle">
            Create your profile, showcase your skills, and step into a world of opportunities.
          </p>
          <div className="get-started-buttons">
            <button className="register-button">Register</button>
            <button className="upload-resume-button">Upload Resume</button>
          </div>
        </div>
        <div className="get-started-image">
          <img src="/subHeroRight.svg" alt="Get Started Illustration" />
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;