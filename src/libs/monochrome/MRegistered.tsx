import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRegistered: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M12.5,14h-3a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3a3.00328,3.00328,0,0,1,3,3v1A3.00328,3.00328,0,0,1,12.5,14Zm-2-2h2a1.0013,1.0013,0,0,0,1-1V10a1.0013,1.0013,0,0,0-1-1h-2Z"
      ></path>
      <path
        className="uim-primary"
        d="M14.5,17a1,1,0,0,1-1-1V15a1.0013,1.0013,0,0,0-1-1h-2v2a1,1,0,0,1-2,0V13a1,1,0,0,1,1-1h3a3.00328,3.00328,0,0,1,3,3v1A1,1,0,0,1,14.5,17Z"
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

export default MRegistered;
