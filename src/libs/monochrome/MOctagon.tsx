import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MOctagon: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293L2.293,16.43457a.99928.99928,0,0,1-.293-.707V8.27246a.99928.99928,0,0,1,.293-.707L7.56494,2.293A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.27246a.99928.99928,0,0,1,.293.707v7.45508a.99928.99928,0,0,1-.293.707l-5.272,5.27246A1.00014,1.00014,0,0,1,15.728,22Z"
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

export default MOctagon;
