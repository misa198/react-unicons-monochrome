import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MChartGrowthAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M15,10H3A1,1,0,0,1,3,8H15a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M11,14H3a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M7,18H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22H3a.99943.99943,0,0,1-1-1V3A1,1,0,0,1,4,3V20H21a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M19,6H3A1,1,0,0,1,3,4H19a1,1,0,0,1,0,2Z"
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

export default MChartGrowthAlt;
