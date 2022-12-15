import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMouseAlt2: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M13,2.08008a6.2838,6.2838,0,0,0-2,0A6.9951,6.9951,0,0,0,5,9v6a7,7,0,0,0,14,0V9A6.9951,6.9951,0,0,0,13,2.08008Z"
      ></path>
      <path
        className="uim-primary"
        d="M13,2.08008V12a1,1,0,0,1-2,0V2.08008a6.2838,6.2838,0,0,1,2,0Z"
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

export default MMouseAlt2;
