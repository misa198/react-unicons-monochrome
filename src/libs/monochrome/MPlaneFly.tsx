import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPlaneFly: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17.66726,5.15768l-3.46375,1.9998L8.67137,3.99634a1,1,0,0,0-.99617.00225L6.46572,4.697a1,1,0,0,0-.093,1.67121L10.41484,9.345,6.64873,11.5194a2,2,0,0,1-1.09058.26589l-3.65914-.166a.5.5,0,0,0-.37033.85877L4.72705,15.5727a2,2,0,0,0,2.3907.29473l5.29706-3.05819,3.78881-2.18756,5.91251-3.41339a.99432.99432,0,0,0,.19092-1.59346A4.002,4.002,0,0,0,17.66726,5.15768Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
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

export default MPlaneFly;
