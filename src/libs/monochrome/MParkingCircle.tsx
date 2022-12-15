import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MParkingCircle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22A10,10,0,1,1,22,12,10.01146,10.01146,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M12.5,14H10a.99974.99974,0,0,1-1-1V8a.99974.99974,0,0,1,1-1h2.5a3.5,3.5,0,0,1,0,7ZM11,12h1.5a1.5,1.5,0,0,0,0-3H11Z"
      ></path>
      <path
        className="uim-primary"
        d="M10,17a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v7A.99974.99974,0,0,1,10,17Z"
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

export default MParkingCircle;
