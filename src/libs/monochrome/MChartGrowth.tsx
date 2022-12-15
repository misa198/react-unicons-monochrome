import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MChartGrowth: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M7,22a.99943.99943,0,0,1-1-1V17a1,1,0,0,1,2,0v4A.99943.99943,0,0,1,7,22Z"
      ></path>
      <path
        className="uim-secondary"
        d="M15,22a.99943.99943,0,0,1-1-1V9a1,1,0,0,1,2,0V21A.99943.99943,0,0,1,15,22Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M11,22a.99943.99943,0,0,1-1-1V13a1,1,0,0,1,2,0v8A.99943.99943,0,0,1,11,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M19,22a.99943.99943,0,0,1-1-1V5a1,1,0,0,1,2,0V21A.99943.99943,0,0,1,19,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22H3a.99943.99943,0,0,1-1-1V3A1,1,0,0,1,4,3V20H21a1,1,0,0,1,0,2Z"
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

export default MChartGrowth;
