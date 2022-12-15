import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnter: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M8,17a.99676.99676,0,0,1-.707-.293l-3-3a.99962.99962,0,0,1,0-1.41406l3-3A.99989.99989,0,0,1,8.707,10.707L6.41406,13l2.293,2.293A1,1,0,0,1,8,17Z"
      ></path>
      <path
        className="uim-primary"
        d="M17,14H5a1,1,0,0,1,0-2H17a1.00067,1.00067,0,0,0,1-1V7a1,1,0,0,1,2,0v4A3.00328,3.00328,0,0,1,17,14Z"
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

export default MEnter;
