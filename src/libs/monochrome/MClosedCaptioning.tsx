import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MClosedCaptioning: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
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
        d="M9 16a3.01415 3.01415 0 0 1-3-3V11A3.00328 3.00328 0 0 1 9 8a2.94443 2.94443 0 0 1 2.126.8916 2.73487 2.73487 0 0 1 .46.59033A1.00011 1.00011 0 1 1 9.875 10.51807a.915.915 0 0 0-.14355-.19385A1.00928 1.00928 0 0 0 8 11v2a.9613.9613 0 0 0 .28711.69385 1.00762 1.00762 0 0 0 1.58008-.19824.99983.99983 0 1 1 1.72656 1.00878A2.97832 2.97832 0 0 1 9 16zM15 16a3.01415 3.01415 0 0 1-3-3V11a3.00328 3.00328 0 0 1 3-3 2.94443 2.94443 0 0 1 2.126.8916 2.73487 2.73487 0 0 1 .46.59033A1.00011 1.00011 0 1 1 15.875 10.51807a.915.915 0 0 0-.14355-.19385A1.00937 1.00937 0 0 0 14 11v2a.9613.9613 0 0 0 .28711.69385 1.00777 1.00777 0 0 0 1.58008-.19824.99983.99983 0 1 1 1.72656 1.00878A2.97832 2.97832 0 0 1 15 16z"
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

export default MClosedCaptioning;
