import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MNotebooks: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V5c0.00181-1.65611,1.34389-2.99819,3-3h10c1.65611,0.00181,2.99819,1.34389,3,3v10C17.99819,16.65611,16.65611,17.99819,15,18z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18,5v10c-0.00183,1.65613-1.34387,2.99817-3,3H5c0.00183,1.65613,1.34387,2.99817,3,3h10c1.65613-0.00183,2.99817-1.34387,3-3V8C20.99817,6.34387,19.65613,5.00183,18,5z"
      ></path>
      <path
        className="uim-primary"
        d="M13,12c-0.23886,0.00022-0.46985-0.08538-0.65088-0.24121L11,10.62793l-1.354,1.13574c-0.42405,0.35563-1.0561,0.30017-1.41173-0.12387C8.08385,11.46044,8.00097,11.23408,8,11V2h6v9C13.9996,11.55212,13.55212,11.9996,13,12z"
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

export default MNotebooks;
