// src/components/CurveBackground2.tsx

import React from 'react';
import './CurveBackground2.css';

const CurveBackground2: React.FC = () => {
  return (
    <div className="curve-background-2">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1280 1026" 
        fill="none" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_82_150)">
          <path 
            d="M1280 1026L0 1026L0 75.5613C278.5 131.705 785.5 -159.709 1280 131.705V1026Z" 
            fill="url(#paint0_linear_82_150)"
          />
        </g>
        <defs>
          <filter 
            id="filter0_b_82_150" 
            x="-100" 
            y="-100" 
            width="1480" 
            height="1226" 
            filterUnits="userSpaceOnUse" 
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_82_150"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_82_150" result="shape"/>
          </filter>
          <linearGradient 
            id="paint0_linear_82_150" 
            x1="564.5" 
            y1="88.6561" 
            x2="541.075" 
            y2="840.831" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E2CCF2"/>
            <stop offset="1" stopColor="#E2CCF2" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CurveBackground2;