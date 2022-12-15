import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFahrenheit: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M5.5,9a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,5.5,9Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,5.5,5Z"
      ></path>
      <path
        className="uim-primary"
        d="M11.5,21a.99974.99974,0,0,1-1-1V6a3.00328,3.00328,0,0,1,3-3h7a1,1,0,0,1,0,2h-7a1.001,1.001,0,0,0-1,1V20A.99974.99974,0,0,1,11.5,21Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.5,13h-7a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z"
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

export default MFahrenheit;
