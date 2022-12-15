import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFolderSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,21H6a3.00328,3.00328,0,0,1-3-3V7A3.00328,3.00328,0,0,1,6,4h4.55859a2.99737,2.99737,0,0,1,2.8462,2.05078L13.7207,7H18a3.00328,3.00328,0,0,1,3,3v8A3.00328,3.00328,0,0,1,18,21Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
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

export default MFolderSlash;
