import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFilter: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M10,22a1.00061,1.00061,0,0,1-1-1V14.41406L2.87891,8.293A2.98152,2.98152,0,0,1,2,6.17188V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V6.17188A2.98152,2.98152,0,0,1,21.12109,8.293L15,14.41406V19a1.0004,1.0004,0,0,1-.55273.89453l-4,2A1.003,1.003,0,0,1,10,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M19,2H5A3.00879,3.00879,0,0,0,2,5V6.16992A2.82325,2.82325,0,0,0,2.12,7H21.88A2.82325,2.82325,0,0,0,22,6.16992V5A3.00879,3.00879,0,0,0,19,2Z"
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

export default MFilter;
