import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRupeeSign: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M18,7H15.78674a5.48512,5.48512,0,0,0-1.07385-2H18a1,1,0,0,0,0-2H7A1,1,0,0,0,7,5h3.5a3.49523,3.49523,0,0,1,3.14893,2H7A1,1,0,0,0,7,9h6.94946A3.495,3.495,0,0,1,10.5,12H7a1.01678,1.01678,0,0,0-.75879,1.65137l6.00781,7a1,1,0,1,0,1.51758-1.30274L9.17609,14H10.5a5.506,5.506,0,0,0,5.47467-5H18a1,1,0,0,0,0-2Z"
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

export default MRupeeSign;
