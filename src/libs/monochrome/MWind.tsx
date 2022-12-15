import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWind: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="3.5" cy="8" r="1" className="uim-primary"></circle>
      <circle cx="20.5" cy="8" r="1" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M14.5 9H7.49414a1 1 0 0 1 0-2H14.5a1 1 0 1 0-.501-1.86621.99967.99967 0 1 1-.998-1.73242A3 3 0 1 1 14.5 9zM12.5 21a3.00814 3.00814 0 0 1-1.499-.40137.99967.99967 0 1 1 .998-1.73242A1.00027 1.00027 0 1 0 12.5 17H8.49414a1 1 0 0 1 0-2H12.5a3 3 0 0 1 0 6zM10.5 13H3.49414a1 1 0 0 1 0-2H10.5a1 1 0 0 1 0 2zM4.5 17H3.49414a1 1 0 0 1 0-2H4.5a1 1 0 0 1 0 2zM18.5 17a1 1 0 0 1 0-2 1 1 0 0 0 0-2H14.49414a1 1 0 0 1 0-2H18.5a3 3 0 0 1 0 6z"
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

export default MWind;
