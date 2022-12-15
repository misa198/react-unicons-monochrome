import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPolygon: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M16.5,20.794h-9a.99983.99983,0,0,1-.86621-.5L2.13379,12.5a1.002,1.002,0,0,1,0-1l4.5-7.79395a.99983.99983,0,0,1,.86621-.5h9a.99987.99987,0,0,1,.86621.5l4.5,7.794a1.002,1.002,0,0,1,0,1l-4.5,7.79395A.99987.99987,0,0,1,16.5,20.794Z"
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

export default MPolygon;
