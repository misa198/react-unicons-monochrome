import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsShrinkH: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M14.5 15.5a1 1 0 0 1-.707-1.707L15.58594 12l-1.793-1.793A.99989.99989 0 0 1 15.207 8.793l2.5 2.5a.99962.99962 0 0 1 0 1.41406l-2.5 2.5A.99676.99676 0 0 1 14.5 15.5zM9.5 15.5a.99676.99676 0 0 1-.707-.293l-2.5-2.5a.99962.99962 0 0 1 0-1.41406l2.5-2.5A.99989.99989 0 0 1 10.207 10.207L8.41406 12l1.793 1.793A1 1 0 0 1 9.5 15.5z"
      ></path>
      <path
        className="uim-primary"
        d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M3 18a.99974.99974 0 0 1-1-1V7A1 1 0 0 1 4 7V17A.99974.99974 0 0 1 3 18zM21 18a.99974.99974 0 0 1-1-1V7a1 1 0 0 1 2 0V17A.99974.99974 0 0 1 21 18z"
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

export default MArrowsShrinkH;
