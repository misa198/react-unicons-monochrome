import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBrightnessLow: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="3" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="21" cy="12" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="3" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="21" r="1" className="uim-tertiary"></circle>
      <circle cx="18.364" cy="5.636" r="1" className="uim-tertiary"></circle>
      <circle cx="5.636" cy="18.364" r="1" className="uim-tertiary"></circle>
      <circle cx="5.636" cy="5.636" r="1" className="uim-tertiary"></circle>
      <circle cx="18.364" cy="18.364" r="1" className="uim-tertiary"></circle>
      <circle cx="12" cy="12" r="6" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MBrightnessLow;
