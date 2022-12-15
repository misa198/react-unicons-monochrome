import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHospital: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM12.5 18.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM7.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM7.5 18.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM17.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM17.5 18.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M13.5,7H13V6.5a1,1,0,0,0-2,0V7h-.5a1,1,0,0,0,0,2H11v.5a1,1,0,0,0,2,0V9h.5a1,1,0,0,0,0-2Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.5,6.5h-3v-4a.99974.99974,0,0,0-1-1H6.5a.99974.99974,0,0,0-1,1v4h-3a.99974.99974,0,0,0-1,1v14a.99974.99974,0,0,0,1,1h19a.99974.99974,0,0,0,1-1V7.5A.99974.99974,0,0,0,21.5,6.5Zm-14,12h-1a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm0-4h-1a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm5,4h-1a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm0-4h-1a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm1-5.5H13v.5a1,1,0,0,1-2,0V9h-.5a1,1,0,0,1,0-2H11V6.5a1,1,0,0,1,2,0V7h.5a1,1,0,0,1,0,2Zm4,9.5h-1a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm0-4h-1a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"
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

export default MHospital;
