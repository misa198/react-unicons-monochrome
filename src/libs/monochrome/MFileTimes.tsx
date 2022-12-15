import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileTimes: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M20 9H15a2 2 0 0 1-2-2V2zM10 18.00031a1 1 0 0 1-.707-1.707l4-4A.99989.99989 0 1 1 14.707 13.70734l-4 4A.99676.99676 0 0 1 10 18.00031z"
      ></path>
      <path
        className="uim-primary"
        d="M14,18.00031a.99676.99676,0,0,1-.707-.293l-4-4A.99989.99989,0,1,1,10.707,12.29328l4,4a1,1,0,0,1-.707,1.707Z"
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

export default MFileTimes;
