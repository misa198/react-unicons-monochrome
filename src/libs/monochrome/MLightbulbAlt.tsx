import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLightbulbAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M18.1,3.9c-2.8-3.4-7.9-3.8-11.3-1c-3.4,2.8-3.8,7.9-1,11.3C6.6,14.9,7,15.9,7,17v1c0-0.6,0.4-1,1-1c0,0,0,0,0,0h8c0.6,0,1,0.4,1,1v-0.8c0-1.2,0.5-2.3,1.2-3.2C20.6,11,20.6,6.8,18.1,3.9z"
      ></path>
      <path
        className="uim-tertiary"
        d="M14,23h-4c-1.7,0-3-1.3-3-3v-2c0-0.6,0.4-1,1-1c0,0,0,0,0,0h8c0.6,0,1,0.4,1,1c0,0,0,0,0,0v2C17,21.7,15.7,23,14,23z"
      ></path>
      <path
        className="uim-primary"
        d="M13,17v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H13z"
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

export default MLightbulbAlt;
