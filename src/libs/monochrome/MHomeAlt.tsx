import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHomeAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,22H6a3.00328,3.00328,0,0,1-3-3V10.25A3.0002,3.0002,0,0,1,4.02344,7.99316l6.001-5.251a3.0124,3.0124,0,0,1,3.95118,0l6,5.25.001.001A3.0002,3.0002,0,0,1,21,10.25V19A3.00328,3.00328,0,0,1,18,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M16,22H8V15a3,3,0,0,1,3-3h2a3,3,0,0,1,3,3Z"
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

export default MHomeAlt;
