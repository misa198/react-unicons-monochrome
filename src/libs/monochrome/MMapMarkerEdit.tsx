import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapMarkerEdit: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22.05957a.99676.99676,0,0,1-.707-.293L5.98975,16.46387h0a8.5,8.5,0,1,1,12.0205,0L12.707,21.7666A.99676.99676,0,0,1,12,22.05957Z"
      ></path>
      <path
        className="uim-primary"
        d="M11.91992,13.95312H9.5a.99973.99973,0,0,1-1-1V10.5332a.99928.99928,0,0,1,.293-.707L12.373,6.24609a.99964.99964,0,0,1,1.41406,0L16.207,8.666a.99962.99962,0,0,1,0,1.41406L12.627,13.66016A1.00011,1.00011,0,0,1,11.91992,13.95312Z"
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

export default MMapMarkerEdit;
