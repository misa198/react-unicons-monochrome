import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowResizeDiagonal: React.FC<Props> = ({
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
        className="uim-primary"
        d="M9 22H3a.99974.99974 0 0 1-1-1V15a1 1 0 0 1 2 0v5H9a1 1 0 0 1 0 2zM21 10a.99974.99974 0 0 1-1-1V4H15a1 1 0 0 1 0-2h6a.99974.99974 0 0 1 1 1V9A.99974.99974 0 0 1 21 10z"
      ></path>
      <path
        className="uim-primary"
        d="M3,22a1,1,0,0,1-.707-1.707l18-18A.99989.99989,0,1,1,21.707,3.707l-18,18A.99676.99676,0,0,1,3,22Z"
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

export default MArrowResizeDiagonal;
