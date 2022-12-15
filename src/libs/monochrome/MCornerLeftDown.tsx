import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCornerLeftDown: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,4.31445H11.62842a5.00589,5.00589,0,0,0-5,5v6.957L3.707,13.3501A.99989.99989,0,0,0,2.293,14.76416l4.62811,4.62811a1.00349,1.00349,0,0,0,1.41467,0l4.62861-4.62811a.99989.99989,0,0,0-1.41407-1.41406L8.62842,16.27161V9.31445a3.00328,3.00328,0,0,1,3-3H21a1,1,0,0,0,0-2Z"
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

export default MCornerLeftDown;
