import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileDownloadAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,8.99969l-7-7H6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M19 8.99969H14a2 2 0 0 1-2-2v-5zM12 18H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM14 14H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM9 10H8A1 1 0 0 1 8 8H9a1 1 0 0 1 0 2zM18 22a.99943.99943 0 0 1-1-1V16a1 1 0 0 1 2 0v5A.99943.99943 0 0 1 18 22z"
      ></path>
      <path
        className="uim-primary"
        d="M18,22a.99676.99676,0,0,1-.707-.293l-2-2A.99989.99989,0,0,1,16.707,18.293L18,19.58594l1.293-1.293A.99989.99989,0,0,1,20.707,19.707l-2,2A.99676.99676,0,0,1,18,22Z"
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

export default MFileDownloadAlt;
