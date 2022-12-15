import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDraggabledots: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="8.5" cy="12" r="2" className="uim-primary"></circle>
      <circle cx="8.5" cy="5" r="2" className="uim-primary"></circle>
      <circle cx="8.5" cy="19" r="2" className="uim-primary"></circle>
      <circle cx="15.5" cy="12" r="2" className="uim-primary"></circle>
      <circle cx="15.5" cy="5" r="2" className="uim-primary"></circle>
      <circle cx="15.5" cy="19" r="2" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MDraggabledots;
