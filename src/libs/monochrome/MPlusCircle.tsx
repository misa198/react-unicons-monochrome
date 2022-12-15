import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPlusCircle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
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
        d="M16,13H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,17a.99974.99974,0,0,1-1-1V8a1,1,0,0,1,2,0v8A.99974.99974,0,0,1,12,17Z"
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

export default MPlusCircle;
