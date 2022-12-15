import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowDownRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M17,18H7a1,1,0,0,1,0-2h9V7a1,1,0,0,1,2,0V17A1,1,0,0,1,17,18Z"
      ></path>
      <path
        className="uim-primary"
        d="M17,18a.99676.99676,0,0,1-.707-.293l-10-10A.99989.99989,0,0,1,7.707,6.293l10,10A1,1,0,0,1,17,18Z"
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

export default MArrowDownRight;
