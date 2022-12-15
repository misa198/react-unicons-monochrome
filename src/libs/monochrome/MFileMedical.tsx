import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileMedical: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path className="uim-primary" d="M20,9H15a2,2,0,0,1-2-2V2Z"></path>
      <path
        className="uim-tertiary"
        d="M15,9a2,2,0,0,1-2-2V2H7A2.996,2.996,0,0,0,4,5V19a2.996,2.996,0,0,0,3,3H17a2.996,2.996,0,0,0,3-3V9Z"
      ></path>
      <path
        className="uim-primary"
        d="M14,14H13V13a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V16h1a1,1,0,0,0,0-2Z"
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

export default MFileMedical;
