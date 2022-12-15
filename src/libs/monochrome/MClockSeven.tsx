import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MClockSeven: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,6a1.003,1.003,0,0,0-1,1v4.73L9.4,14.5a.99911.99911,0,1,0,1.73,1l1.69-2.93A.9986.9986,0,0,0,13,12V7A1.003,1.003,0,0,0,12,6Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,10a.99867.99867,0,0,1-.18.57L11.13,15.5a.99911.99911,0,1,1-1.73-1L11,11.73V7a1,1,0,0,1,2,0Z"
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

export default MClockSeven;
