import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowToRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M13,17a1,1,0,0,1-.707-1.707L15.58594,12,12.293,8.707A.99989.99989,0,0,1,13.707,7.293l4,4a.99962.99962,0,0,1,0,1.41406l-4,4A.99676.99676,0,0,1,13,17Z"
      ></path>
      <path
        className="uim-primary"
        d="M17,13H3a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21,20a.99974.99974,0,0,1-1-1V5a1,1,0,0,1,2,0V19A.99974.99974,0,0,1,21,20Z"
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

export default MArrowToRight;
