import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRedo: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M19.875,8.5h-4.5a1,1,0,0,1,0-2h3.5V3a1,1,0,0,1,2,0V7.5A.99974.99974,0,0,1,19.875,8.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,22A10,10,0,1,1,20.65137,6.999.99981.99981,0,0,1,18.9209,8.001,7.98928,7.98928,0,1,0,20,12a1,1,0,0,1,2,0A10.01146,10.01146,0,0,1,12,22Z"
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

export default MRedo;
