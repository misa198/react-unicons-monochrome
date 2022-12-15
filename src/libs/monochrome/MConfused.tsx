import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MConfused: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M10.80371,17a1,1,0,0,1-.33691-1.94141l4.19629-1.5a.99988.99988,0,0,1,.67382,1.88282l-4.19629,1.5A.99528.99528,0,0,1,10.80371,17Z"
      ></path>
      <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
      <circle cx="9" cy="10" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MConfused;
