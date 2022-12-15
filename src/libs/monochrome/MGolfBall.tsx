import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGolfBall: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
      <circle cx="14" cy="7" r="1" className="uim-primary"></circle>
      <circle cx="14" cy="10" r="1" className="uim-primary"></circle>
      <circle cx="17" cy="9" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MGolfBall;
