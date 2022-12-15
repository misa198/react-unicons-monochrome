import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDollarAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M14,11.0003H13v-4h2a1.001,1.001,0,0,1,1,1,1,1,0,0,0,2,0,3.00328,3.00328,0,0,0-3-3H13v-2a1,1,0,1,0-2,0v2H10a4,4,0,0,0,0,8h1v4H9a1.001,1.001,0,0,1-1-1,1,1,0,0,0-2,0,3.00328,3.00328,0,0,0,3,3h2v2a1,1,0,0,0,2,0v-2h1a4,4,0,0,0,0-8Zm-4,0a2,2,0,0,1,0-4h1v4Zm4,6H13v-4h1a2,2,0,0,1,0,4Z"
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

export default MDollarAlt;
