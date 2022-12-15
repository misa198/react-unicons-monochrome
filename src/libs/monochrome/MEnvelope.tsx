import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelope: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.7,5.71A2.99174,2.99174,0,0,0,19,4H5A2.99174,2.99174,0,0,0,2.3,5.71,2.94761,2.94761,0,0,0,2,7V17a3.00887,3.00887,0,0,0,3,3H19a3.00887,3.00887,0,0,0,3-3V7A2.94761,2.94761,0,0,0,21.7,5.71Z"
      ></path>
      <path
        className="uim-primary"
        d="M21.7,5.71,14.12,13.29a2.99392,2.99392,0,0,1-4.24,0L2.3,5.71A2.99174,2.99174,0,0,1,5,4H19A2.99174,2.99174,0,0,1,21.7,5.71Z"
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

export default MEnvelope;
