import React from 'react';
import './Components.css';

const CurveBackground: React.FC = () => {
  return (
    <div className="curve-background">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1440V700C1161.5 658 494.5 876 0 658V0Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8F0FF" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CurveBackground;