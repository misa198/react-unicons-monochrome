import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMicrosoft: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <rect
        width="9.503"
        height="9.503"
        x="2"
        y="2"
        className="uim-primary"
      ></rect>
      <rect
        width="9.503"
        height="9.503"
        x="12.493"
        y="2"
        className="uim-primary"
      ></rect>
      <rect
        width="9.503"
        height="9.503"
        x="2"
        y="12.497"
        className="uim-primary"
      ></rect>
      <rect
        width="9.503"
        height="9.503"
        x="12.493"
        y="12.497"
        className="uim-primary"
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

export default MMicrosoft;
