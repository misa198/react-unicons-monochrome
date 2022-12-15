import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MOperaAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M11.99628,2c-5.462,0-9.278,3.95813-9.278,9.899C2.71832,17.1889,6.4295,22,12.00378,22c5.56678,0,9.2779-4.8186,9.2779-10.101C21.28168,5.95813,17.45831,2,11.99628,2Zm-.0011,16c-2.39575,0-2.65967-3.53564-2.65967-6.14252v-.05273C9.33551,8.98682,9.75769,6,11.97937,6s2.67017,3.07648,2.67017,5.89441C14.64954,14.50128,14.39093,18,11.99518,18Z"
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

export default MOperaAlt;
