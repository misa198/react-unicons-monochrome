import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLottiefiles: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M7,18a1,1,0,0,1,0-2c1.65918,0,2.85645-2.17725,4.124-4.48193C12.61621,8.80518,14.15918,6,17,6a1,1,0,0,1,0,2c-1.65918,0-2.85645,2.17725-4.124,4.48193C11.38379,15.19482,9.84082,18,7,18Z"
      ></path>
      <path
        className="uim-primary"
        d="M19,2H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2ZM17,8c-1.65918,0-2.85645,2.17725-4.124,4.48193C11.38379,15.19482,9.84082,18,7,18a1,1,0,0,1,0-2c1.65918,0,2.85645-2.17725,4.124-4.48193C12.61621,8.80518,14.15918,6,17,6a1,1,0,0,1,0,2Z"
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

export default MLottiefiles;
