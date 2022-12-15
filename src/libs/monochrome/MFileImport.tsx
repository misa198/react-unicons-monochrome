import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileImport: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M19 9H14a2 2 0 0 1-2-2V2zM19 15.00049H13.41406l1.293-1.293A.99989.99989 0 1 0 13.293 12.29346l-3 3a.99962.99962 0 0 0 0 1.41406l3 3A.99989.99989 0 0 0 14.707 18.29346l-1.293-1.293H19a1 1 0 0 0 0-2z"
      ></path>
      <path
        className="uim-tertiary"
        d="M14.707,18.29346A.99989.99989,0,1,1,13.293,19.70752l-3-3a.99962.99962,0,0,1,0-1.41406l3-3A.99989.99989,0,1,1,14.707,13.70752l-1.293,1.293H19V9H14a2,2,0,0,1-2-2V2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V17.00049H13.41406Z"
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

export default MFileImport;
