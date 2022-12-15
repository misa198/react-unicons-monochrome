import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFolderTimes: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859a2.99737,2.99737,0,0,1,2.8462,2.05078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M10,16.5a1,1,0,0,1-.707-1.707l4-4A.99989.99989,0,0,1,14.707,12.207l-4,4A.99676.99676,0,0,1,10,16.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M14,16.5a.99676.99676,0,0,1-.707-.293l-4-4A.99989.99989,0,0,1,10.707,10.793l4,4A1,1,0,0,1,14,16.5Z"
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

export default MFolderTimes;
