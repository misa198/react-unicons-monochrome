import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLinkH: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M10 17H7A5 5 0 0 1 7 7h3a1 1 0 0 1 0 2H7a3 3 0 0 0 0 6h3a1 1 0 0 1 0 2zM17 17H14a1 1 0 0 1 0-2h3a3 3 0 0 0 0-6H14a1 1 0 0 1 0-2h3a5 5 0 0 1 0 10z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15,13H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
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

export default MLinkH;
