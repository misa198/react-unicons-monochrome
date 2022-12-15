import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MNinja: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M22,12H2c0-2.2,0.7-4.3,2-6h16C21.3,7.7,22,9.8,22,12z"
      ></path>
      <path
        className="uim-primary"
        d="M20,6c-1.8-2.4-4.7-4-8-4S5.8,3.6,4,6H20z"
      ></path>
      <circle cx="14" cy="9" r="1" className="uim-primary"></circle>
      <circle cx="8" cy="9" r="1" className="uim-primary"></circle>
      <path
        className="uim-tertiary"
        d="M11.5,18.1c-0.6,0-1-0.4-1-1c0-0.2,0-0.3,0.1-0.5C11.5,15,13.2,14,15,14c0.6,0,1,0.4,1,1s-0.4,1-1,1c-1.1,0-2.1,0.6-2.6,1.5C12.2,17.9,11.9,18.1,11.5,18.1z"
      ></path>
      <path
        className="uim-primary"
        d="M2,12c0,5.5,4.5,10,10,10s10-4.5,10-10H2z M15,16c-1.1,0-2.1,0.6-2.6,1.5c-0.2,0.3-0.5,0.5-0.9,0.5c-0.6,0-1-0.4-1-1c0-0.2,0-0.3,0.1-0.5C11.5,15,13.2,14,15,14c0.6,0,1,0.4,1,1S15.6,16,15,16z"
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

export default MNinja;
