import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCornerDownRight: React.FC<Props> = ({
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
        d="M14.05762,22a1,1,0,0,1-.707-1.707l3.92089-3.92139-3.92089-3.92187a.99989.99989,0,1,1,1.41406-1.41407l4.62793,4.62891a.99964.99964,0,0,1,0,1.41406L14.76465,21.707A.99676.99676,0,0,1,14.05762,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.68555,17.37158H9.31445a5.00589,5.00589,0,0,1-5-5V3a1,1,0,0,1,2,0v9.37158a3.00328,3.00328,0,0,0,3,3h9.3711a1,1,0,0,1,0,2Z"
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

export default MCornerDownRight;
