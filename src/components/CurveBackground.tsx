// CurveBackground.tsx
import React from 'react';
import './Components.css'; // Import the CSS file for styling

const CurveBackground: React.FC = () => {
  return (
    <div className="curve-background">
      <svg
        width="98.5vw"
        height="768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
