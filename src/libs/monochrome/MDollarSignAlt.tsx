import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDollarSignAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M14,11.0003H10a2,2,0,0,1,0-4h5a1.001,1.001,0,0,1,1,1,1,1,0,0,0,2,0,3.00328,3.00328,0,0,0-3-3H13v-2a1,1,0,1,0-2,0v2H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1.001,1.001,0,0,1-1-1,1,1,0,0,0-2,0,3.00328,3.00328,0,0,0,3,3h2v2a1,1,0,0,0,2,0v-2h1a4,4,0,0,0,0-8Z"
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

export default MDollarSignAlt;
