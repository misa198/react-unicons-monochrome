import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBagSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M19,6H5C3.34389,6.00181,2.00181,7.34389,2,9v2c-0.00005,0.4304,0.2753,0.81255,0.68359,0.94873l6,2C8.78561,13.98275,8.89246,14.00006,9,14h6c0.10754,0.00006,0.21439-0.01725,0.31641-0.05127l6-2C21.7247,11.81255,22.00005,11.4304,22,11V9C21.99819,7.34389,20.65611,6.00181,19,6z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21.31641 11.94873l-6 2C15.21442 13.98273 15.10754 14.00006 15 14H9c-.10754.00006-.21442-.01727-.31641-.05127l-6-2C2.27533 11.81256 1.99994 11.43042 2 11v7c0 1.65686 1.34314 3 3 3h14c1.65686 0 3-1.34314 3-3v-7C22.00006 11.43042 21.72467 11.81256 21.31641 11.94873zM9.99951 6L9.99854 5H14v1h2V5c0-1.10303-.89746-2-2-2h-4C8.89697 3 8 3.89697 8 5v1H9.99951z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.90605,3.31302,1.91175,2.67995,2.30573,2.293c0.38897-0.38203,1.0123-0.38203,1.40127,0l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.51931,21.89463,21.26509,21.99994,21,22z"
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

export default MBagSlash;
