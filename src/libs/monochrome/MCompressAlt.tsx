import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCompressAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
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
        d="M17.5 11.5h-4a.99943.99943 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2zM10.5 18.5a.99943.99943 0 0 1-1-1v-3h-3a1 1 0 0 1 0-2h4a.99943.99943 0 0 1 1 1v4A.99943.99943 0 0 1 10.5 18.5z"
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

export default MCompressAlt;
