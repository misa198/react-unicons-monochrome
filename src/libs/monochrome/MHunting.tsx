import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHunting: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,20a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM12,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12,6Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,15a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,12,15Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 22a.99943.99943 0 0 1-1-1V19a1 1 0 0 1 2 0v2A.99943.99943 0 0 1 12 22zM12 6a.99943.99943 0 0 1-1-1V3a1 1 0 0 1 2 0V5A.99943.99943 0 0 1 12 6zM5 13H3a1 1 0 0 1 0-2H5a1 1 0 0 1 0 2zM21 13H19a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
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

export default MHunting;
