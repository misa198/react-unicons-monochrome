import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCancel: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M16,19H5a3.00328,3.00328,0,0,1-3-3V8A3.00328,3.00328,0,0,1,5,5H16a1.00053,1.00053,0,0,1,.76807.35938l5,6a1.0011,1.0011,0,0,1,0,1.28124l-5,6A1.00053,1.00053,0,0,1,16,19Z"
      ></path>
      <path
        className="uim-primary"
        d="M8,15a1,1,0,0,1-.707-1.707l4-4A.99989.99989,0,0,1,12.707,10.707l-4,4A.99676.99676,0,0,1,8,15Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,15a.99676.99676,0,0,1-.707-.293l-4-4A.99989.99989,0,0,1,8.707,9.293l4,4A1,1,0,0,1,12,15Z"
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

export default MCancel;
