import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MClockFive: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,6a1.003,1.003,0,0,1,1,1v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.9986.9986,0,0,1,11,12V7A1.003,1.003,0,0,1,12,6Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.99867.99867,0,0,1,11,12Z"
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

export default MClockFive;
