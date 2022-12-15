import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAsterisk: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5.939,16.5a1,1,0,0,1-.501-1.86621l12.124-7a1.00016,1.00016,0,0,1,1,1.73242l-12.124,7A.99578.99578,0,0,1,5.939,16.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.061,16.5a.99711.99711,0,0,1-.499-.13379l-12.124-7a1.00016,1.00016,0,0,1,1-1.73242l12.124,7A1,1,0,0,1,18.061,16.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,20a.99974.99974,0,0,1-1-1V5a1,1,0,0,1,2,0V19A.99974.99974,0,0,1,12,20Z"
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

export default MAsterisk;
