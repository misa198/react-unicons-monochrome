import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,18H6a4.00036,4.00036,0,0,1-.94385-7.8877A6.99757,6.99757,0,0,1,18.418,8.21484,4.99453,4.99453,0,0,1,17,18Z"
      ></path>
      <path
        className="uim-primary"
        d="M19,21a.99676.99676,0,0,1-.707-.293l-16-16A.99989.99989,0,0,1,3.707,3.293l16,16A1,1,0,0,1,19,21Z"
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

export default MCloudSlash;
