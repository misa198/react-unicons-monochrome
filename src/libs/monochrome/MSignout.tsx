import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSignout: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21.207,11.29346l-3-3A.99989.99989,0,1,0,16.793,9.70752l1.293,1.293H12.5a1,1,0,0,0,0,2h5.58594l-1.293,1.293A.99989.99989,0,1,0,18.207,15.70752l3-3A.99962.99962,0,0,0,21.207,11.29346Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12.5,13.00049a1,1,0,0,1,0-2h4V5a3.00328,3.00328,0,0,0-3-3h-8a3.00328,3.00328,0,0,0-3,3V19a3.00328,3.00328,0,0,0,3,3h8a3.00328,3.00328,0,0,0,3-3V13.00049Z"
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

export default MSignout;
