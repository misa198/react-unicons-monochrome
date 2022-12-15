import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBringFront: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.00049,1.99316h-18c-0.55214-0.00014-0.99986,0.44734-1,0.99948c0,0.00017,0,0.00035,0,0.00052v6c-0.00015,0.55214,0.44732,0.99985,0.99946,1c0.00018,0,0.00036,0,0.00054,0h18c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-6c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00084,1.99316,21.00066,1.99316,21.00049,1.99316z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.00049,9.99316h-7v5.01367c0,0.00018,0,0.00037,0,0.00055c0.00012,0.55212,0.44788,0.99957,1,0.99945h6c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1v-6c0-0.00018,0-0.00037,0-0.00049c0-0.00226-0.00128-0.00409-0.00128-0.00635C21.99542,9.54907,21.55035,9.99329,21.00049,9.99316z"
      ></path>
      <path
        className="uim-primary"
        d="M9.00049,21.99316c-0.55214,0.00015-0.99985-0.44732-1-0.99946c0-0.00018,0-0.00036,0-0.00054v-14c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v14c0.00014,0.55214-0.44734,0.99986-0.99948,1C9.00084,21.99316,9.00066,21.99316,9.00049,21.99316z"
      ></path>
      <path
        className="uim-primary"
        d="M8.99951,22.00684c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-3-3c-0.38824-0.39271-0.38462-1.02579,0.00809-1.41404c0.38953-0.3851,1.0164-0.3851,1.40594,0l2.293,2.293l2.293-2.293c0.39048-0.39048,1.02358-0.39048,1.41406,0.00001c0.39048,0.39048,0.39048,1.02358,0,1.41406l-3,3C9.51928,21.90173,9.2648,22.00717,8.99951,22.00684z"
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

export default MBringFront;
