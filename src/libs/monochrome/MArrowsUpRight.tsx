import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsUpRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M17 21a1 1 0 0 1-.707-1.707L18.58594 17l-2.293-2.293A.99989.99989 0 0 1 17.707 13.293l3 3a.99962.99962 0 0 1 0 1.41406l-3 3A.99676.99676 0 0 1 17 21zM10 8a.99676.99676 0 0 1-.707-.293L7 5.41406 4.707 7.707A.99989.99989 0 0 1 3.293 6.293l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 10 8z"
      ></path>
      <path
        className="uim-primary"
        d="M20,18H9a3.00328,3.00328,0,0,1-3-3V4A1,1,0,0,1,8,4V15a1.00067,1.00067,0,0,0,1,1H20a1,1,0,0,1,0,2Z"
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

export default MArrowsUpRight;
