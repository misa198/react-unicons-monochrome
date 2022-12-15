import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPuzzlePiece: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,22H5a3.00328,3.00328,0,0,1-3-3V9A3.00328,3.00328,0,0,1,5,6H6a4,4,0,0,1,8,0h3a.99943.99943,0,0,1,1,1v3a4,4,0,0,1,0,8v3A.99943.99943,0,0,1,17,22Z"
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

export default MPuzzlePiece;
