import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSortAmountUp: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21 8H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 13H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M5,18a.99943.99943,0,0,1-1-1V7A1,1,0,0,1,6,7V17A.99943.99943,0,0,1,5,18Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21,18H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M7,10a.99676.99676,0,0,1-.707-.293L5,8.41406,3.707,9.707A.99989.99989,0,0,1,2.293,8.293l2-2a.99962.99962,0,0,1,1.41406,0l2,2A1,1,0,0,1,7,10Z"
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

export default MSortAmountUp;
