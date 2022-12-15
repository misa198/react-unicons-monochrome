import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWifi: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,21a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,12,21Z"
      ></path>
      <path
        className="uim-secondary"
        d="M16.24219,14.75781a.99672.99672,0,0,1-.707-.293,4.9982,4.9982,0,0,0-7.07032,0,.99989.99989,0,0,1-1.41406-1.41406,6.99745,6.99745,0,0,1,9.89844,0,1,1,0,0,1-.707,1.707Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.07129,11.92871a.99676.99676,0,0,1-.707-.293,9.00144,9.00144,0,0,0-12.72852,0,.99989.99989,0,0,1-1.41406-1.41406,11.0007,11.0007,0,0,1,15.55664,0,1,1,0,0,1-.707,1.707Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.89941,9.10059a.99678.99678,0,0,1-.707-.293,13,13,0,0,0-18.38476,0A.9999.9999,0,0,1,1.39355,7.39355a14.99927,14.99927,0,0,1,21.2129,0,1,1,0,0,1-.707,1.707Z"
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

export default MWifi;
