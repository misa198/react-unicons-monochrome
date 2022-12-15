import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MModem: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.5,20.2h-13c-1.7,0-3-1.3-3-3v-4c0-0.6,0.4-1,1-1c0,0,0,0,0,0h17c0.6,0,1,0.4,1,1c0,0,0,0,0,0v4C21.5,18.9,20.2,20.2,18.5,20.2z"
      ></path>
      <path
        className="uim-primary"
        d="M5.3,5.6l11.5,6.6h4L6.3,3.9C5.8,3.6,5.2,3.8,4.9,4.2C4.6,4.7,4.8,5.3,5.3,5.6z"
      ></path>
      <circle cx="16.5" cy="16.2" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MModem;
