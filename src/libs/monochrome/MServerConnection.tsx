import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MServerConnection: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M19,11H5c-1.65611-0.00181-2.99819-1.34389-3-3V6c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v2C21.99819,9.65611,20.65611,10.99819,19,11z"
      ></path>
      <circle cx="7" cy="7" r="1" className="uim-primary"></circle>
      <circle cx="11" cy="7" r="1" className="uim-primary"></circle>
      <path
        className="uim-tertiary"
        d="M19,19H5c-1.65611-0.00181-2.99819-1.34389-3-3v-2c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v2C21.99819,17.65611,20.65611,18.99819,19,19z"
      ></path>
      <path
        className="uim-primary"
        d="M21,21h-8v-2h-2v2H3c-0.55231,0-1,0.44769-1,1s0.44769,1,1,1h18c0.55231,0,1-0.44769,1-1S21.55231,21,21,21z"
      ></path>
      <circle cx="7" cy="15" r="1" className="uim-primary"></circle>
      <circle cx="11" cy="15" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MServerConnection;
