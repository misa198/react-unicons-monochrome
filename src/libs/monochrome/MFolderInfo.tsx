import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFolderInfo: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859A2.99629,2.99629,0,0,1,12.4043,4.55078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 17.5a.99943.99943 0 0 1-1-1v-2a1 1 0 0 1 2 0v2A.99943.99943 0 0 1 12 17.5zM12 12.5a.99939.99939 0 0 1-.71-.2998A.95131.95131 0 0 1 11 11.5a1.04778 1.04778 0 0 1 .29-.71.93266.93266 0 0 1 .33008-.21 1.00157 1.00157 0 0 1 1.08984.21.93266.93266 0 0 1 .21.33008A.9994.9994 0 0 1 13 11.5a.95508.95508 0 0 1-.29.7002 1.01178 1.01178 0 0 1-.33008.21972A.9994.9994 0 0 1 12 12.5z"
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

export default MFolderInfo;
