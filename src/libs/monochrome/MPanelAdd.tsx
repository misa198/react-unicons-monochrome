import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPanelAdd: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z"
      ></path>
      <rect
        width="6"
        height="13"
        x="2"
        y="9"
        className="uim-quaternary"
        rx="1"
      ></rect>
      <rect
        width="6"
        height="20"
        x="8"
        y="2"
        className="uim-primary"
        rx="1"
      ></rect>
      <rect
        width="6"
        height="11"
        x="14"
        y="11"
        className="uim-tertiary"
        rx="1"
      ></rect>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MPanelAdd;
