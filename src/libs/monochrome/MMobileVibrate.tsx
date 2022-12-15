import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMobileVibrate: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M9.87891,21.36426a2.97986,2.97986,0,0,1-2.1211-.87891h-.001L3.51465,16.24219a2.9989,2.9989,0,0,1,0-4.24219L12,3.51465a3.07372,3.07372,0,0,1,4.24316,0l4.24219,4.24316a2.9989,2.9989,0,0,1,0,4.24219L12,20.48535A2.98152,2.98152,0,0,1,9.87891,21.36426Z"
      ></path>
      <path
        className="uim-primary"
        d="M3.51465 8.75781a1 1 0 0 1-.707-1.707L7.05078 2.80762A.99989.99989 0 0 1 8.46484 4.22168L4.22168 8.46484A.99672.99672 0 0 1 3.51465 8.75781zM16.24219 21.48535a1 1 0 0 1-.707-1.707l4.24316-4.24316a.99989.99989 0 0 1 1.41406 1.41406l-4.24316 4.24316A.99672.99672 0 0 1 16.24219 21.48535z"
      ></path>
      <circle cx="9.172" cy="14.828" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MMobileVibrate;
