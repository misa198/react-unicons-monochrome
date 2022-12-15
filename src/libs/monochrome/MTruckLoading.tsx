import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTruckLoading: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <rect
        width="10"
        height="9"
        x="9"
        y="7"
        className="uim-quaternary"
        rx="2"
      ></rect>
      <circle cx="9" cy="20" r="2" className="uim-primary"></circle>
      <circle cx="18" cy="20" r="2" className="uim-primary"></circle>
      <path
        className="uim-tertiary"
        d="M22,18H7a3.00328,3.00328,0,0,1-3-3V5A1.00067,1.00067,0,0,0,3,4H2A1,1,0,0,1,2,2H3A3.00328,3.00328,0,0,1,6,5V15a1.00067,1.00067,0,0,0,1,1H22a1,1,0,0,1,0,2Z"
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

export default MTruckLoading;
