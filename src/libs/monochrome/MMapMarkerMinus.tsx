import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapMarkerMinus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
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
        d="M14,11.45312H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"
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

export default MMapMarkerMinus;
