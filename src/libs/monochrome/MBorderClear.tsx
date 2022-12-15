import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBorderClear: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="16" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="8" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="4" cy="16" r="1" className="uim-tertiary"></circle>
      <circle cx="4" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="4" cy="8" r="1" className="uim-tertiary"></circle>
      <circle cx="4" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="8" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="16" cy="4" r="1" className="uim-tertiary"></circle>
      <circle cx="8" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="16" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="8" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="16" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="20" cy="16" r="1" className="uim-tertiary"></circle>
      <circle cx="20" cy="20" r="1" className="uim-tertiary"></circle>
      <circle cx="20" cy="8" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="4" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="20" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="20" cy="4" r="1" className="uim-tertiary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MBorderClear;
