import React from 'react';
import './Components.css'; // Import the external CSS file

const CurveBackground: React.FC = () => {
  return (
    <div className="curve-background-container">
      {/* SVG background */}
      <svg
        width="1280"
        height="768"
        viewBox="0 0 1280 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="curve-background-svg"
      >
        <path
          id="curveBg"
          d="M0 0H1280V711C1001.5 669 494.5 887 0 669V0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default CurveBackground;
