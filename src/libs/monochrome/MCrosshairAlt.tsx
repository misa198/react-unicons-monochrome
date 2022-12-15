import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCrosshairAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="1" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M12,22A10,10,0,1,1,22,12,10.01146,10.01146,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,12,4Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 22a.99974.99974 0 0 1-1-1V17a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 12 22zM12 8a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V7A.99974.99974 0 0 1 12 8zM7 13H3a1 1 0 0 1 0-2H7a1 1 0 0 1 0 2zM21 13H17a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
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

export default MCrosshairAlt;
