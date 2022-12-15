import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAbacus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21,2a.99974.99974,0,0,0-1,1V6H4V3A1,1,0,0,0,2,3V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V3A.99974.99974,0,0,0,21,2ZM20,8v6H4V8ZM19,20H5a1.001,1.001,0,0,1-1-1V16H20v3A1.001,1.001,0,0,1,19,20Z"
      ></path>
      <path
        className="uim-primary"
        d="M7 18a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 7 18zM11 18a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 11 18zM17 18a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 17 18zM7 10A.99974.99974 0 0 1 6 9V5A1 1 0 0 1 8 5V9A.99974.99974 0 0 1 7 10zM11 10a.99974.99974 0 0 1-1-1V5a1 1 0 0 1 2 0V9A.99974.99974 0 0 1 11 10zM15 10a.99974.99974 0 0 1-1-1V5a1 1 0 0 1 2 0V9A.99974.99974 0 0 1 15 10z"
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

export default MAbacus;
