import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPlayCircle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22A10,10,0,1,1,22,12,10.01177,10.01177,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M10,16.89062A2.00839,2.00839,0,0,1,8,14.8877V9.1123a2.00085,2.00085,0,0,1,3-1.73242l5,2.8877a2.00064,2.00064,0,0,1,0,3.46484l-5,2.8877A1.99618,1.99618,0,0,1,10,16.89062Z"
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

export default MPlayCircle;
