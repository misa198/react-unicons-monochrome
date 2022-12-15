import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDesktopAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15,22H9c-0.55197,0.00031-0.99969-0.44689-1-0.99886C8,21.00076,8,21.00038,8,21v-4c-0.00031-0.55197,0.44689-0.99969,0.99886-1C8.99924,16,8.99962,16,9,16h6c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v4c0.00031,0.55197-0.44689,0.99969-0.99886,1C15.00076,22,15.00038,22,15,22z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V5c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v10C21.99819,16.65611,20.65611,17.99819,19,18z"
      ></path>
      <path
        className="uim-primary"
        d="M19,18H5c-1.65685,0-3-1.34315-3-3v-2h20v2C22,16.65685,20.65685,18,19,18z M19,22H5c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h14c0.55228,0,1,0.44772,1,1S19.55228,22,19,22z"
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

export default MDesktopAlt;
