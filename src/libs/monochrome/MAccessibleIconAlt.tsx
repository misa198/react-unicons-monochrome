import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAccessibleIconAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19.5,20h-1v-5c0,0,0,0,0,0c0-0.6-0.4-1-1-1h-4.6l1.7-4.7c0.1-0.5,0-0.9-0.4-1.2L9.7,5.6c0,0,0,0,0,0c-0.3-0.2-0.7-0.2-1,0L6,7.1C5.7,7.3,5.5,7.6,5.5,8c0,0.6,0.4,1,1,1C6.7,9,6.8,9,7,8.9l2.2-1.3l3.2,1.9l-1.9,5.2c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0c0,0.4,0.2,0.7,0.5,0.9c0.1,0.1,0.3,0.1,0.5,0.1c0,0,0,0,0,0h5v5c0,0,0,0,0,0c0,0.1,0,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0.1,0.2,0.3,0.4,0.5,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.1,0.4,0.1h0h2c0.6,0,1-0.4,1-1S20.1,20,19.5,20z"
      ></path>
      <circle cx="16" cy="5" r="2" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M9.5,22c-3.3,0-6-2.7-6-6c0-3.1,2.3-5.6,5.3-6c0.5-0.1,1,0.3,1.1,0.9c0.1,0.5-0.3,1-0.9,1.1c0,0,0,0,0,0c-2.2,0.2-3.8,2.2-3.5,4.4c0.2,2,1.9,3.6,4,3.5c1.3,0,2.4-0.6,3.2-1.6c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4c0,0,0,0,0,0C13.2,21.1,11.4,22,9.5,22z"
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

export default MAccessibleIconAlt;
