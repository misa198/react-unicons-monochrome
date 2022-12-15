import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MKeyholeSquare: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M14,10a2,2,0,1,0-3,1.7226V15a1,1,0,0,0,2,0V11.7226A1.99146,1.99146,0,0,0,14,10Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,2H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2Zm-6,9.7226V15a1,1,0,0,1-2,0V11.7226a2,2,0,1,1,2,0Z"
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

export default MKeyholeSquare;
