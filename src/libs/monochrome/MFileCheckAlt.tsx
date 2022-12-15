import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileCheckAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M18.5,8.99969h-5a2,2,0,0,1-2-2v-5Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M2.5,4.99969v14a3,3,0,0,0,3,3h10a3,3,0,0,0,3-3v-10l-7-7h-6A3,3,0,0,0,2.5,4.99969Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.5 8.99969h-5a2 2 0 0 1-2-2v-5zM11.5 18h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM13.5 14h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM8.5 10h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM16.5 22a.99676.99676 0 0 1-.707-.293l-2-2A.99989.99989 0 0 1 15.207 18.293l1.293 1.293 3.293-3.293A.99989.99989 0 0 1 21.207 17.707l-4 4A.99676.99676 0 0 1 16.5 22z"
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

export default MFileCheckAlt;
