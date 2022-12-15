import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHistory: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,2A10.0165,10.0165,0,0,0,5.0061,4.87183V3a1,1,0,0,0-2,0V7.5a.99974.99974,0,0,0,1,1h4.5a1,1,0,0,0,0-2H6.21844A7.97907,7.97907,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M14,13H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,4A8.00807,8.00807,0,0,0,6.21844,6.5H8.5061a1,1,0,0,1,0,2h-4.5a.98918.98918,0,0,1-.9776-.889A9.92176,9.92176,0,0,0,2,12a1,1,0,0,1,2,0,8,8,0,1,0,8-8Zm2,9H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z"
      ></path>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MHistory;
