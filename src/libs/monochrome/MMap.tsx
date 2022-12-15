import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMap: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M3.32,3.05005c-0.30498-0.10149-0.64021-0.04939-0.9,0.13989C2.15553,3.37466,1.99856,3.67741,2,4v14c0.00298,0.4286,0.27525,0.80898,0.68,0.95l6,2C8.78387,20.98125,8.89155,20.99807,9,21V4.93994L3.32,3.05005z"
      ></path>
      <path
        className="uim-primary"
        d="M14.68,3.05005L9,4.93994V21c0.10845-0.00193,0.21613-0.01875,0.32-0.05L15,19.06006V3C14.89148,3.00118,14.7837,3.01804,14.68,3.05005z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.32001,5.05005l-6-2C15.21594,3.01666,15.10797,3,15,3v16.06006l5.67999,1.88995C20.78387,20.98126,20.89154,20.99805,21,21c0.20911,0.00299,0.41321-0.06384,0.58002-0.18994C21.84448,20.62537,22.00146,20.32257,22,20V6C21.99701,5.57141,21.72473,5.19104,21.32001,5.05005z"
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

export default MMap;
