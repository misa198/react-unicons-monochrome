import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPercentage: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M7.75781 10.75781a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 7.75781 10.75781zm0-4a1 1 0 1 0 1 1A1.00067 1.00067 0 0 0 7.75781 6.75781zM16.24219 19.24219a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 16.24219 19.24219zm0-4a1 1 0 1 0 1 1A1.00067 1.00067 0 0 0 16.24219 15.24219z"
      ></path>
      <path
        className="uim-primary"
        d="M5,20a1,1,0,0,1-.707-1.707l14-14A.99989.99989,0,0,1,19.707,5.707l-14,14A.99676.99676,0,0,1,5,20Z"
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

export default MPercentage;
