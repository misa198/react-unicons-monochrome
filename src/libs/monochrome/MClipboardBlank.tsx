import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MClipboardBlank: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <rect
        width="8"
        height="6"
        x="8"
        y="2"
        className="uim-primary"
        rx="2"
      ></rect>
      <path
        className="uim-tertiary"
        d="M17,4H16V6a2.002,2.002,0,0,1-2,2H10A2.002,2.002,0,0,1,8,6V4H7A3.00328,3.00328,0,0,0,4,7V19a3.00328,3.00328,0,0,0,3,3H17a3.00328,3.00328,0,0,0,3-3V7A3.00328,3.00328,0,0,0,17,4Z"
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

export default MClipboardBlank;
