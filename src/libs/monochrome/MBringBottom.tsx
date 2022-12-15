import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBringBottom: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.00049,14.00684h-18c-0.55214-0.00015-0.99985,0.44732-1,0.99946c0,0.00018,0,0.00036,0,0.00054v6c-0.00014,0.55214,0.44734,0.99986,0.99948,1c0.00017,0,0.00035,0,0.00052,0h18c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-6c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00084,14.00684,21.00066,14.00684,21.00049,14.00684z"
      ></path>
      <path
        className="uim-quaternary"
        d="M3.00049,14.00684h7V8.99316c0-0.00018,0-0.00037,0-0.00055c-0.00012-0.55212-0.44788-0.99957-1-0.99945h-6c-0.00018,0-0.00037,0-0.00049,0c-0.55219,0.00012-0.99963,0.44788-0.99951,1v6c0,0.00018,0,0.00037,0,0.00055c0,0.00226,0.00128,0.00409,0.00128,0.00629C2.00555,14.45099,2.45062,14.00671,3.00049,14.00684z"
      ></path>
      <path
        className="uim-primary"
        d="M15.00049,18.00684c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-14c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v14c0.00014,0.55214-0.44734,0.99986-0.99948,1C15.00084,18.00684,15.00066,18.00684,15.00049,18.00684z"
      ></path>
      <path
        className="uim-primary"
        d="M18.002,6.99316c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.293-2.293l-2.293,2.293c-0.39048,0.39048-1.02358,0.39048-1.41406-0.00001c-0.39048-0.39048-0.39048-1.02358,0-1.41406l3-3c0.39029-0.39048,1.02322-0.39064,1.4137-0.00036c0.00012,0.00012,0.00024,0.00024,0.00036,0.00036l3,3c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421c-0.18748,0.18742-0.4417,0.29273-0.70679,0.29279L18.002,6.99316z"
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

export default MBringBottom;
