import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWifiSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,22a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-secondary"
        d="M7.75977,15.75977a1,1,0,0,1-.71-1.70411A7.01118,7.01118,0,0,1,12,12a6.23757,6.23757,0,0,1,1.32227.13281,1.00025,1.00025,0,0,1-.42383,1.95508A4.17751,4.17751,0,0,0,12,14a4.99917,4.99917,0,0,0-3.53027,1.46387A.9951.9951,0,0,1,7.75977,15.75977Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.07031 12.92969a.99839.99839 0 0 1-.71-.2959A8.84206 8.84206 0 0 0 14.417 10.335a1 1 0 1 1 .52539-1.92969 10.85348 10.85348 0 0 1 4.83789 2.82032 1 1 0 0 1-.71 1.7041zM4.92969 12.92969a1 1 0 0 1-.71-1.7041A10.87486 10.87486 0 0 1 9.09961 8.39551a.99946.99946 0 1 1 .52148 1.92969 8.8867 8.8867 0 0 0-3.98144 2.30859A.99839.99839 0 0 1 4.92969 12.92969z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.90039 10.09961a.99436.99436 0 0 1-.70508-.291A13.01636 13.01636 0 0 0 10.5127 6.084a1.00046 1.00046 0 1 1-.22461-1.98828A15.03357 15.03357 0 0 1 22.60547 8.39062a1 1 0 0 1-.70508 1.709zM2.09961 10.09961a1 1 0 0 1-.7041-1.71A15.11465 15.11465 0 0 1 5.8291 5.32812a1.00049 1.00049 0 0 1 .82227 1.82422A13.1 13.1 0 0 0 2.80371 9.80957.99687.99687 0 0 1 2.09961 10.09961z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
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

export default MWifiSlash;
