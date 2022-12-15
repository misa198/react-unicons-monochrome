import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MExpandAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M13.5,11.5a1,1,0,0,1-.707-1.707l7.5-7.5A.99989.99989,0,1,1,21.707,3.707l-7.5,7.5A.99676.99676,0,0,1,13.5,11.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M21 8a.99974.99974 0 0 1-1-1V4H17a1 1 0 0 1 0-2h4a.99974.99974 0 0 1 1 1V7A.99974.99974 0 0 1 21 8zM7 22H3a.99974.99974 0 0 1-1-1V17a1 1 0 0 1 2 0v3H7a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M3,22a1,1,0,0,1-.707-1.707l7.5-7.5A.99989.99989,0,0,1,11.207,14.207l-7.5,7.5A.99676.99676,0,0,1,3,22Z"
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

export default MExpandAlt;
