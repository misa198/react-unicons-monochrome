import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSpin: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M13,21A11.01245,11.01245,0,0,1,2,10a1,1,0,0,1,2,0,9.01016,9.01016,0,0,0,9,9A7,7,0,0,0,13,5a5,5,0,0,0,0,10,3,3,0,0,0,0-6,1,1,0,0,0,0,2,1,1,0,0,1,0,2,3,3,0,0,1,0-6,5,5,0,0,1,0,10A7,7,0,0,1,13,3a9,9,0,0,1,0,18Z"
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

export default MSpin;
