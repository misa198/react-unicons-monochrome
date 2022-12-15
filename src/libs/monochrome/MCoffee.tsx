import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCoffee: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M13,17H9c-2.8,0-5-2.2-5-5V4c0-0.6,0.4-1,1-1c0,0,0,0,0,0h12c0.6,0,1,0.4,1,1c0,0,0,0,0,0v8C18,14.8,15.8,17,13,17z"
      ></path>
      <path
        className="uim-primary"
        d="M18 7h1c.6 0 1 .4 1 1s-.4 1-1 1h-1v2h1c1.7 0 3-1.3 3-3s-1.3-3-3-3h-1V7zM21 19H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1S21.6 19 21 19z"
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

export default MCoffee;
