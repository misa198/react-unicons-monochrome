import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsMaximize: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21 22H15a1 1 0 0 1 0-2h5V15a1 1 0 0 1 2 0v6A.99974.99974 0 0 1 21 22zM3 10A.99974.99974 0 0 1 2 9V3A.99974.99974 0 0 1 3 2H9A1 1 0 0 1 9 4H4V9A.99974.99974 0 0 1 3 10z"
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

export default MArrowsMaximize;
