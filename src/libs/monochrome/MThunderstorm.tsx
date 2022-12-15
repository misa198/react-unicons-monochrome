import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MThunderstorm: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,17H6a4.00043,4.00043,0,0,1-.94434-7.8877A6.99789,6.99789,0,0,1,18.418,7.21484,4.99453,4.99453,0,0,1,17,17Z"
      ></path>
      <path
        className="uim-primary"
        d="M11.18945,21a.99991.99991,0,0,1-.86523-1.5L11.76758,17H9.5a1,1,0,0,1-.86621-1.5l2.30957-4a1.00016,1.00016,0,1,1,1.73242,1L11.23242,15H13.5a1,1,0,0,1,.86621,1.5l-2.30957,4A.99907.99907,0,0,1,11.18945,21Z"
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

export default MThunderstorm;
