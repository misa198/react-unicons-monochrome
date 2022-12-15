import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentsAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M2.61719,17.92383A.99894.99894,0,0,1,2,17V5A3,3,0,0,1,5,2H15a3,3,0,0,1,3,3v6.8731a3,3,0,0,1-3,3H6.53828L3.707,17.707a.99976.99976,0,0,1-1.08984.2168Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22a.99976.99976,0,0,1-.707-.293l-2.374-2.374H11a3.00328,3.00328,0,0,1-3-3V11a3.00328,3.00328,0,0,1,3-3h8a3.00328,3.00328,0,0,1,3,3V21a1,1,0,0,1-1,1Z"
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

export default MCommentsAlt;
