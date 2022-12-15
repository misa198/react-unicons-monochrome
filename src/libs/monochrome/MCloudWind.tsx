import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudWind: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,16H6a4.00043,4.00043,0,0,1-.94434-7.8877A6.99789,6.99789,0,0,1,18.418,6.21484,4.99453,4.99453,0,0,1,17,16Z"
      ></path>
      <circle cx="5" cy="19" r="1" className="uim-primary"></circle>
      <circle cx="11" cy="11" r="1" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M16 22a.99943.99943 0 0 1-1-1 1.01348 1.01348 0 0 0-1-1H9a1 1 0 0 1 0-2h5a3.00328 3.00328 0 0 1 3 3A.99943.99943 0 0 1 16 22zM19 12H15a1 1 0 0 1 0-2h4a1.01348 1.01348 0 0 0 1-1 1 1 0 0 1 2 0A3.00328 3.00328 0 0 1 19 12z"
      ></path>
      <path
        className="uim-primary"
        d="M19,20a1,1,0,0,1,0-2,1,1,0,0,0,0-2H12a1,1,0,0,1,0-2h7a3,3,0,0,1,0,6Z"
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

export default MCloudWind;
