import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowLeft: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
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
        d="M12,18a.99676.99676,0,0,1-.707-.293l-5-5a.99962.99962,0,0,1,0-1.41406l5-5A.99989.99989,0,0,1,12.707,7.707L8.41406,12l4.293,4.293A1,1,0,0,1,12,18Z"
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

export default MArrowLeft;
