import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MClouds: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.167,19H9c-1.93321-0.0003-3.50013-1.56772-3.49983-3.50093c0.00025-1.57211,1.04858-2.95121,2.56331-3.37207c0.48096-3.2774,3.52771-5.54437,6.80511-5.06341c2.02716,0.29748,3.76222,1.60917,4.60114,3.47841c2.28057,0.71708,3.54803,3.14716,2.83095,5.42774C21.73314,17.77469,20.05908,19.0019,18.167,19z"
      ></path>
      <path
        className="uim-primary"
        d="M8.06348,12.12701c0.36652-2.4975,2.22443-4.40393,4.53754-4.95905c-0.75555-1.09747-1.92084-1.86511-3.25867-2.09552C6.62421,4.60436,4.04132,6.4284,3.57325,9.14648C2.3371,9.54803,1.50006,10.69995,1.5,11.99969C1.49994,13.65662,2.84308,14.99994,4.5,15h1.04163C5.73737,13.64227,6.71198,12.5025,8.06348,12.12701z"
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

export default MClouds;
