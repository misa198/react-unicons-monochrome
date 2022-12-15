import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBorderRight: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M20.5,21a.99974.99974,0,0,1-1-1V4a1,1,0,0,1,2,0V20A.99974.99974,0,0,1,20.5,21Z"
      ></path>
      <circle cx="16.5" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="12.5" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="8.5" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="4.5" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="16.5" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="12.5" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="8.5" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="4.5" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="4.5" cy="16" r="1" className="uim-tertiary"></circle>
      <circle cx="4.5" cy="8" r="1" className="uim-tertiary"></circle>
      <circle cx="12.5" cy="16" r="1" className="uim-tertiary"></circle>
      <circle cx="12.5" cy="8" r="1" className="uim-tertiary"></circle>
      <circle cx="16.5" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="12.5" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="8.5" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="4.5" cy="4" r="1" className="uim-tertiary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MBorderRight;
