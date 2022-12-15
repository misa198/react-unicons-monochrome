import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAutoFlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M6.0459,22a.99922.99922,0,0,1-.96582-1.25879L6.88672,14H3.0459a1.00068,1.00068,0,0,1-.96582-1.25879l2.67871-10A1,1,0,0,1,5.72461,2h7a1.00068,1.00068,0,0,1,.96582,1.25879L12.41992,8H16.9541a1.00064,1.00064,0,0,1,.74024,1.67285l-10.90821,12A1.00179,1.00179,0,0,1,6.0459,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M19,13H18a3.00328,3.00328,0,0,0-3,3v5a1,1,0,0,0,2,0V19h3v2a1,1,0,0,0,2,0V16A3.00328,3.00328,0,0,0,19,13Zm-2,4V16a1.00067,1.00067,0,0,1,1-1h1a1.00067,1.00067,0,0,1,1,1v1Z"
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

export default MAutoFlash;
