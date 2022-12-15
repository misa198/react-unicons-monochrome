import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MParking: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,22H5a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V19A3.00328,3.00328,0,0,1,19,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,14H9a.99974.99974,0,0,1-1-1V7A.99974.99974,0,0,1,9,6h3a4,4,0,0,1,0,8Zm-2-2h2a2,2,0,0,0,0-4H10Z"
      ></path>
      <path
        className="uim-primary"
        d="M9,18a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v8A.99974.99974,0,0,1,9,18Z"
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

export default MParking;
