import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowGrowth: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,6H16a1,1,0,0,0,0,2h2.58594L13,13.58594,9.707,10.293a.99962.99962,0,0,0-1.41406,0l-6,6A.99989.99989,0,1,0,3.707,17.707L9,12.41406l3.293,3.293a.99963.99963,0,0,0,1.41406,0L20,9.41406V12a1,1,0,0,0,2,0V7A.99943.99943,0,0,0,21,6Z"
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

export default MArrowGrowth;
