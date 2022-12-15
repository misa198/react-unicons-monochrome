import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCameraPlus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,22.5H4a3.00328,3.00328,0,0,1-3-3v-8a3.00328,3.00328,0,0,1,3-3H5.2793l.31591-.94922A2.99737,2.99737,0,0,1,8.44141,5.5h5.11718a2.99737,2.99737,0,0,1,2.8462,2.05078L16.7207,8.5H18a3.00328,3.00328,0,0,1,3,3v8A3.00328,3.00328,0,0,1,18,22.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M11 18.5a4 4 0 1 1 4-4A4.00427 4.00427 0 0 1 11 18.5zM22 3.5H21v-1a1 1 0 0 0-2 0v1H18a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"
      ></path>
      <path
        className="uim-primary"
        d="M11,18.5a4,4,0,1,1,4-4A4.00427,4.00427,0,0,1,11,18.5Zm0-6a2,2,0,1,0,2,2A2.00229,2.00229,0,0,0,11,12.5Z"
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

export default MCameraPlus;
