import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSliderH: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15,15a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,15,15Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21,11H17.81573a2.80554,2.80554,0,0,1,0,2H21a1,1,0,0,0,0-2Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,12a2.96457,2.96457,0,0,1,.18427-1H3a1,1,0,0,0,0,2h9.18433A2.96485,2.96485,0,0,1,12,12Z"
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

export default MSliderH;
