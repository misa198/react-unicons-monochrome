import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsLeftDown: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M7 11a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 7.707 4.707L5.41406 7 7.707 9.293A1 1 0 0 1 7 11zM17 21a.99676.99676 0 0 1-.707-.293l-3-3A.99989.99989 0 0 1 14.707 16.293L17 18.58594l2.293-2.293A.99989.99989 0 0 1 20.707 17.707l-3 3A.99676.99676 0 0 1 17 21z"
      ></path>
      <path
        className="uim-primary"
        d="M17,21a.99943.99943,0,0,1-1-1V9a1.00067,1.00067,0,0,0-1-1H4A1,1,0,0,1,4,6H15a3.00328,3.00328,0,0,1,3,3V20A.99943.99943,0,0,1,17,21Z"
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

export default MArrowsLeftDown;
