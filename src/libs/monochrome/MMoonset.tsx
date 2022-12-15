import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMoonset: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M16.68018,17h-9.25a1.00339,1.00339,0,0,1-.65186-.24121A8.04149,8.04149,0,0,1,9.49072,3.05273a.99941.99941,0,0,1,1.30762,1.09961A7.036,7.036,0,0,0,10.7002,5.2002,6.06148,6.06148,0,0,0,16.75977,11.25a5.97153,5.97153,0,0,0,1.91992-.31738.99988.99988,0,0,1,1.30566,1.11621,8.04476,8.04476,0,0,1-2.6499,4.707A1.00287,1.00287,0,0,1,16.68018,17Z"
      ></path>
      <path
        className="uim-primary"
        d="M11 21H8a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM16 21H15a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM20 17H4a1 1 0 0 1 0-2H20a1 1 0 0 1 0 2z"
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

export default MMoonset;
