import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDiceFour: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,22H7a5.00588,5.00588,0,0,1-5-5V7A5.00588,5.00588,0,0,1,7,2H17a5.00588,5.00588,0,0,1,5,5V17A5.00588,5.00588,0,0,1,17,22Z"
      ></path>
      <circle cx="8" cy="8" r="1.5" className="uim-primary"></circle>
      <circle cx="16" cy="8" r="1.5" className="uim-primary"></circle>
      <circle cx="8" cy="16" r="1.5" className="uim-primary"></circle>
      <circle cx="16" cy="16" r="1.5" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MDiceFour;
