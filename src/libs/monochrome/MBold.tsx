import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBold: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M15.44171,12A3.49466,3.49466,0,0,0,13,6H8.5a.99943.99943,0,0,0-1,1V17a.99943.99943,0,0,0,1,1H13a3.49466,3.49466,0,0,0,2.44171-6ZM14.5,9.5A1.50164,1.50164,0,0,1,13,11H9.5V8H13A1.50164,1.50164,0,0,1,14.5,9.5ZM13,16H9.5V13H13a1.5,1.5,0,0,1,0,3Z"
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

export default MBold;
