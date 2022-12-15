import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const M17Plus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="11" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M8 18a.99974.99974 0 0 1-1-1V7A1 1 0 0 1 9 7V17A.99974.99974 0 0 1 8 18zM22 3H21V2a1 1 0 0 0-2 0V3H18a1 1 0 0 0 0 2h1V6a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2z"
      ></path>
      <path
        className="uim-primary"
        d="M12,23A11,11,0,0,1,12,1a11.11966,11.11966,0,0,1,2.19873.21973,1.0004,1.0004,0,0,1-.39746,1.96093,8.991,8.991,0,1,0,7.01855,7.01954,1.00023,1.00023,0,0,1,1.96-.4004A11.00925,11.00925,0,0,1,12,23Z"
      ></path>
      <path
        className="uim-primary"
        d="M15.001,18a.97569.97569,0,0,1-.19727-.01953.99968.99968,0,0,1-.78418-1.17676L15.78027,8H13V9a1,1,0,0,1-2,0V7a.99974.99974,0,0,1,1-1h5a1,1,0,0,1,.98047,1.19629l-2,10A.99958.99958,0,0,1,15.001,18Z"
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

export default M17Plus;
