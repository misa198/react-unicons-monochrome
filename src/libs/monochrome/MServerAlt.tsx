import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MServerAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,9H6C4.89543,9,4,8.10457,4,7V5c0-1.10457,0.89543-2,2-2h12c1.10457,0,2,0.89543,2,2v2C20,8.10457,19.10457,9,18,9z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18,15H6c-1.10457,0-2-0.89543-2-2v-2c0-1.10457,0.89543-2,2-2h12c1.10457,0,2,0.89543,2,2v2C20,14.10457,19.10457,15,18,15z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18,21H6c-1.10457,0-2-0.89543-2-2v-2c0-1.10457,0.89543-2,2-2h12c1.10457,0,2,0.89543,2,2v2C20,20.10457,19.10457,21,18,21z"
      ></path>
      <circle cx="8" cy="6" r="1" className="uim-primary"></circle>
      <circle cx="8" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="8" cy="18" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MServerAlt;
