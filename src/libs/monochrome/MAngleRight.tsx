import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAngleRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M9.87891,17.24268a1,1,0,0,1-.707-1.707L12.707,12,9.17188,8.46436a.99989.99989,0,0,1,1.41406-1.41407L14.82812,11.293a.99962.99962,0,0,1,0,1.41406l-4.24218,4.24268A.99678.99678,0,0,1,9.87891,17.24268Z"
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

export default MAngleRight;
