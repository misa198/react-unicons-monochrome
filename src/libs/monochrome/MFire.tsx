import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFire: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M14.46,23.12012a.9991.9991,0,0,1-.40723-.08692,9.004,9.004,0,0,1-4.3125-4.0166,6.977,6.977,0,0,0,.18995,2.58106,1.04987,1.04987,0,0,1,.0498.3125.99942.99942,0,0,1-1.37744.92578A8.98348,8.98348,0,0,1,4.94727,8.92773a8.51269,8.51269,0,0,1,1.9873-1.8623l.23047-.1875A7.017,7.017,0,0,0,9.63623,1.93555a1.00009,1.00009,0,0,1,1.49121-.80567,8.717,8.717,0,0,1,4.26709,9.0918,5.78155,5.78155,0,0,0,1.398-1.77734.99959.99959,0,0,1,1.39941-.41114,1.237,1.237,0,0,1,.23.17481,8.99474,8.99474,0,0,1-3.65381,14.86328A1.00594,1.00594,0,0,1,14.46,23.12012Zm-6.93017-15.25h0Z"
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

export default MFire;
