import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCameraChange: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Layer 1">
        <path
          className="uim-tertiary"
          d="M18,22H4a3.00328,3.00328,0,0,1-3-3V11A3.00328,3.00328,0,0,1,4,8H5.2793l.31591-.94922A2.99737,2.99737,0,0,1,8.44141,5h5.11718a2.99737,2.99737,0,0,1,2.8462,2.05078L16.7207,8H18a3.00328,3.00328,0,0,1,3,3v8A3.00328,3.00328,0,0,1,18,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M11,18a4,4,0,1,1,4-4A4.00427,4.00427,0,0,1,11,18Z"
        ></path>
      </g>
      <path
        className="uim-primary"
        d="M19 3.5H15.34454A.9856.9856 0 0 0 15.207 2.293a.99962.99962 0 0 0-1.41406 0l-1.5 1.5a.99962.99962 0 0 0 0 1.41406l1.5 1.5a.99963.99963 0 0 0 1.41406 0A.9856.9856 0 0 0 15.34454 5.5H19a1 1 0 0 0 0-2zM22.707 8.793l-1.5-1.5a.99962.99962 0 0 0-1.41406 0A.9856.9856 0 0 0 19.65546 8.5H16a1 1 0 0 0 0 2h3.65546a.9856.9856 0 0 0 .13751 1.207.99963.99963 0 0 0 1.41406 0l1.5-1.5A.99962.99962 0 0 0 22.707 8.793z"
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

export default MCameraChange;
