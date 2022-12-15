import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const M21Plus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="11" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M17 18a.99943.99943 0 0 1-1-1V7a1 1 0 0 1 2 0V17A.99943.99943 0 0 1 17 18zM22 3H21V2a1 1 0 0 0-2 0V3H18a1 1 0 0 0 0 2h1V6a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2z"
      ></path>
      <path
        className="uim-primary"
        d="M12,23A11,11,0,0,1,12,1a11.12456,11.12456,0,0,1,2.19922.21973,1.0005,1.0005,0,1,1-.39844,1.96093,8.99273,8.99273,0,1,0,7.01856,7.01856,1.0005,1.0005,0,1,1,1.96093-.39844A11.12456,11.12456,0,0,1,23,12,11.01245,11.01245,0,0,1,12,23Z"
      ></path>
      <path
        className="uim-primary"
        d="M10,13h1a3.00328,3.00328,0,0,0,3-3V9a3.00328,3.00328,0,0,0-3-3H10A3.00328,3.00328,0,0,0,7,9,1,1,0,0,0,9,9a1.00067,1.00067,0,0,1,1-1h1a1.00067,1.00067,0,0,1,1,1v1a1.00067,1.00067,0,0,1-1,1H10a3.00328,3.00328,0,0,0-3,3v3a.99943.99943,0,0,0,1,1h5a1,1,0,0,0,0-2H9V14A1.00067,1.00067,0,0,1,10,13Z"
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

export default M21Plus;
