import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCompactDisc: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,2A10,10,0,1,0,22,12,10.01177,10.01177,0,0,0,12,2Zm0,11a1,1,0,1,1,1-1A1.00067,1.00067,0,0,1,12,13Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,15a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,12,15Zm0-4a1,1,0,1,0,1,1A1.00067,1.00067,0,0,0,12,11Z"
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

export default MCompactDisc;
