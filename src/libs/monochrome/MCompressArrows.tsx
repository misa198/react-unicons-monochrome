import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCompressArrows: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M3,22a1,1,0,0,1-.707-1.707l7-7A.99989.99989,0,0,1,10.707,14.707l-7,7A.99676.99676,0,0,1,3,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M10 19a.99943.99943 0 0 1-1-1V15H6a1 1 0 0 1 0-2h4a.99943.99943 0 0 1 1 1v4A.99943.99943 0 0 1 10 19zM10 11a.99676.99676 0 0 1-.707-.293l-7-7A.99989.99989 0 0 1 3.707 2.293l7 7A1 1 0 0 1 10 11z"
      ></path>
      <path
        className="uim-primary"
        d="M10 11H6A1 1 0 0 1 6 9H9V6a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 10 11zM14 11a1 1 0 0 1-.707-1.707l7-7A.99989.99989 0 1 1 21.707 3.707l-7 7A.99676.99676 0 0 1 14 11z"
      ></path>
      <path
        className="uim-primary"
        d="M18 11H14a.99943.99943 0 0 1-1-1V6a1 1 0 0 1 2 0V9h3a1 1 0 0 1 0 2zM21 22a.99676.99676 0 0 1-.707-.293l-7-7A.99989.99989 0 0 1 14.707 13.293l7 7A1 1 0 0 1 21 22z"
      ></path>
      <path
        className="uim-primary"
        d="M14,19a.99943.99943,0,0,1-1-1V14a.99943.99943,0,0,1,1-1h4a1,1,0,0,1,0,2H15v3A.99943.99943,0,0,1,14,19Z"
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

export default MCompressArrows;
