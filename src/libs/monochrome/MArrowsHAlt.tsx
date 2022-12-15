import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsHAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5.5,15.5a.99676.99676,0,0,1-.707-.293l-2.5-2.5a.99962.99962,0,0,1,0-1.41406l2.5-2.5A.99989.99989,0,0,1,6.207,10.207L4.41406,12l1.793,1.793A1,1,0,0,1,5.5,15.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M10 13H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM18.5 15.5a1 1 0 0 1-.707-1.707L19.58594 12l-1.793-1.793A.99989.99989 0 0 1 19.207 8.793l2.5 2.5a.99962.99962 0 0 1 0 1.41406l-2.5 2.5A.99676.99676 0 0 1 18.5 15.5z"
      ></path>
      <path
        className="uim-primary"
        d="M21,13H14a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z"
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

export default MArrowsHAlt;
