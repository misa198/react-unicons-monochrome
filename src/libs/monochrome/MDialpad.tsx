import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDialpad: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="9" r="2" className="uim-tertiary"></circle>
      <circle cx="12" cy="3" r="2" className="uim-tertiary"></circle>
      <circle cx="12" cy="15" r="2" className="uim-tertiary"></circle>
      <circle cx="6" cy="9" r="2" className="uim-tertiary"></circle>
      <circle cx="6" cy="3" r="2" className="uim-tertiary"></circle>
      <circle cx="6" cy="15" r="2" className="uim-tertiary"></circle>
      <circle cx="18" cy="9" r="2" className="uim-tertiary"></circle>
      <circle cx="18" cy="3" r="2" className="uim-tertiary"></circle>
      <circle cx="18" cy="15" r="2" className="uim-tertiary"></circle>
      <circle cx="12" cy="21" r="2" className="uim-tertiary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MDialpad;
