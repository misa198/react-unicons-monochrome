import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MStopCircle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
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
        d="M15,16H9a.99974.99974,0,0,1-1-1V9A.99974.99974,0,0,1,9,8h6a.99974.99974,0,0,1,1,1v6A.99974.99974,0,0,1,15,16Z"
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

export default MStopCircle;
