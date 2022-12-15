import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMouseAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22a7.00818,7.00818,0,0,1-7-7V9A7,7,0,0,1,19,9v6A7.00818,7.00818,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,10.001a.99974.99974,0,0,1-1-1v-2a1,1,0,1,1,2,0v2A.99974.99974,0,0,1,12,10.001Z"
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

export default MMouseAlt;
