import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,18a1,1,0,0,1-.707-1.707L15.58594,12,11.293,7.707A.99989.99989,0,0,1,12.707,6.293l5,5a.99962.99962,0,0,1,0,1.41406l-5,5A.99676.99676,0,0,1,12,18Z"
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

export default MArrowRight;
