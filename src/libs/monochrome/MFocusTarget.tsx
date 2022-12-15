import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFocusTarget: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M8 22H5a3.00328 3.00328 0 0 1-3-3V16a1 1 0 0 1 2 0v3a1.00067 1.00067 0 0 0 1 1H8a1 1 0 0 1 0 2zM3 9A.99943.99943 0 0 1 2 8V5A3.00328 3.00328 0 0 1 5 2H8A1 1 0 0 1 8 4H5A1.00067 1.00067 0 0 0 4 5V8A.99943.99943 0 0 1 3 9z"
      ></path>
      <path
        className="uim-primary"
        d="M17,11H15.858A3.99336,3.99336,0,0,0,13,8.142V7a1,1,0,0,0-2,0V8.142A3.99336,3.99336,0,0,0,8.142,11H7a1,1,0,0,0,0,2H8.142A3.99336,3.99336,0,0,0,11,15.858V17a1,1,0,0,0,2,0V15.858A3.99336,3.99336,0,0,0,15.858,13H17a1,1,0,0,0,0-2Zm-5,3a2,2,0,1,1,2-2A2.0026,2.0026,0,0,1,12,14Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21 9a.99943.99943 0 0 1-1-1V5a1.00067 1.00067 0 0 0-1-1H16a1 1 0 0 1 0-2h3a3.00328 3.00328 0 0 1 3 3V8A.99943.99943 0 0 1 21 9zM19 22H16a1 1 0 0 1 0-2h3a1.00067 1.00067 0 0 0 1-1V16a1 1 0 0 1 2 0v3A3.00328 3.00328 0 0 1 19 22z"
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

export default MFocusTarget;
