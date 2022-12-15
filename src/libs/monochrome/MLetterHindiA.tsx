import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLetterHindiA: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M20.02246,3h-5a1,1,0,0,0,0,2h1.5v6H11.57208a4.95124,4.95124,0,0,0,1.02558-3A4.99979,4.99979,0,0,0,3.26758,5.50049.99992.99992,0,1,0,5,6.49951,3,3,0,1,1,7.59766,11a1,1,0,0,0,0,2A3,3,0,1,1,5,17.50049a.99992.99992,0,1,0-1.73242.999A4.99979,4.99979,0,0,0,12.59766,16a4.95124,4.95124,0,0,0-1.02558-3h4.95038v7a1,1,0,0,0,2,0V5h1.5a1,1,0,0,0,0-2Z"
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

export default MLetterHindiA;
