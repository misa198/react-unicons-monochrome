import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLayout: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M10,14H3a.99974.99974,0,0,1-1-1V3A.99974.99974,0,0,1,3,2h7a.99974.99974,0,0,1,1,1V13A.99974.99974,0,0,1,10,14Z"
      ></path>
      <path
        className="uim-primary"
        d="M10,22H3a.99974.99974,0,0,1-1-1V17a.99974.99974,0,0,1,1-1h7a.99974.99974,0,0,1,1,1v4A.99974.99974,0,0,1,10,22Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21,22H14a.99974.99974,0,0,1-1-1V13a.99974.99974,0,0,1,1-1h7a.99974.99974,0,0,1,1,1v8A.99974.99974,0,0,1,21,22Z"
      ></path>
      <path
        className="uim-secondary"
        d="M21,10H14a.99974.99974,0,0,1-1-1V3a.99974.99974,0,0,1,1-1h7a.99974.99974,0,0,1,1,1V9A.99974.99974,0,0,1,21,10Z"
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

export default MLayout;
