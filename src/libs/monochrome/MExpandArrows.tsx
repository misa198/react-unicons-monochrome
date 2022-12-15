import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MExpandArrows: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M21 22H17a1 1 0 0 1 0-2h3V17a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 21 22zM3 8A.99943.99943 0 0 1 2 7V3A.99943.99943 0 0 1 3 2H7A1 1 0 0 1 7 4H4V7A.99943.99943 0 0 1 3 8zM3 22a1 1 0 0 1-.707-1.707l18-18A.99989.99989 0 1 1 21.707 3.707l-18 18A.99676.99676 0 0 1 3 22z"
      ></path>
      <path
        className="uim-primary"
        d="M7 22H3a.99943.99943 0 0 1-1-1V17a1 1 0 0 1 2 0v3H7a1 1 0 0 1 0 2zM21 8a.99943.99943 0 0 1-1-1V4H17a1 1 0 0 1 0-2h4a.99943.99943 0 0 1 1 1V7A.99943.99943 0 0 1 21 8z"
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

export default MExpandArrows;
