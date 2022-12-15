import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCropAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M19,18H7a.99974.99974,0,0,1-1-1V5A1,1,0,0,1,8,5V16H19a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M17,20a.99974.99974,0,0,1-1-1V8H5A1,1,0,0,1,5,6H17a.99974.99974,0,0,1,1,1V19A.99974.99974,0,0,1,17,20Z"
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

export default MCropAlt;
