import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCelsius: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M5,9A3,3,0,1,1,8,6,3.00328,3.00328,0,0,1,5,9ZM5,5A1,1,0,1,0,6,6,1.001,1.001,0,0,0,5,5Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,21H15a5.00588,5.00588,0,0,1-5-5V8a5.00588,5.00588,0,0,1,5-5h6a1,1,0,0,1,0,2H15a3.00328,3.00328,0,0,0-3,3v8a3.00328,3.00328,0,0,0,3,3h6a1,1,0,0,1,0,2Z"
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

export default MCelsius;
