import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHdd: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,22H5c-1.65611-0.00181-2.99819-1.34389-3-3v-4c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v4C21.99819,20.65611,20.65611,21.99819,19,22z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.98553 14.85815c-.0011-.00763.00208-.01459.00079-.02222l-.00781-.04669C21.98016 14.81244 21.98438 14.83484 21.98553 14.85815zM2.02148 14.78925l-.00781.04669c-.00873.05273-.01288.10608-.01318.15948C2.00067 14.9248 2.01654 14.85864 2.02148 14.78925zM5 12h14c1.38409.00153 2.53711.94421 2.88348 2.21893l-1.61884-9.7121C20.02771 3.05798 18.77374 1.99561 17.30566 2H6.69434C5.22626 1.99561 3.97229 3.05798 3.73535 4.50684l-1.61884 9.7121C2.46289 12.94421 3.61591 12.00153 5 12z"
      ></path>
      <circle cx="17" cy="17" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MHdd;
