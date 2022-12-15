import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLeftIndentAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21 19H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 15H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 7H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 11H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M9 19a.99974.99974 0 0 1-1-1V6a1 1 0 0 1 2 0V18A.99974.99974 0 0 1 9 19zM4.99951 14.667a.99882.99882 0 0 1-.63965-.23144l-2-1.667a1.00062 1.00062 0 0 1 0-1.5371l2-1.667a1.00023 1.00023 0 0 1 1.28028 1.53711L4.562 12l1.07813.89844A1.00006 1.00006 0 0 1 4.99951 14.667z"
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

export default MLeftIndentAlt;
