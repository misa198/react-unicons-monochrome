import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MNavigator: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M5,20.8c-1.7,0-3-1.4-3-3c0-0.3,0.1-0.6,0.1-0.9L3.7,12L2.1,7.2C1.6,5.6,2.5,3.9,4,3.4c0.7-0.2,1.4-0.2,2.1,0.1l14,5.8c1.5,0.6,2.3,2.4,1.6,3.9c-0.3,0.7-0.9,1.3-1.6,1.6l-14,5.8C5.8,20.7,5.4,20.8,5,20.8z"
      ></path>
      <path
        className="uim-primary"
        d="M21,13H4.8c-0.6,0-1-0.4-1-1s0.4-1,1-1H21c0.6,0,1,0.4,1,1S21.6,13,21,13z"
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

export default MNavigator;
