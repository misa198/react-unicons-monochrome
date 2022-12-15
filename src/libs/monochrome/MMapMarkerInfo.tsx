import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapMarkerInfo: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22.05957a.99676.99676,0,0,1-.707-.293L5.98926,16.46387h0a8.50043,8.50043,0,1,1,12.02148,0L12.707,21.7666A.99676.99676,0,0,1,12,22.05957Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 13.95312a.99942.99942 0 0 1-1-1v-2a1 1 0 1 1 2 0v2A.99942.99942 0 0 1 12 13.95312zM12 8.9502a.98972.98972 0 0 1-.37988-.07032A1.05527 1.05527 0 0 1 11.29 8.66016a1.11456 1.11456 0 0 1-.21-.32032A.87224.87224 0 0 1 11 7.9502a1.24712 1.24712 0 0 1 .01953-.19043.62058.62058 0 0 1 .06055-.19043.558.558 0 0 1 .08984-.16993A.99988.99988 0 0 1 11.29 7.25a1.77391 1.77391 0 0 1 .14941-.12988c.06055-.03028.12012-.06055.18067-.09082.05957-.01953.12011-.03907.17968-.05957A.98816.98816 0 0 1 12.71 7.25a.99988.99988 0 0 1 .12012.14941.58033.58033 0 0 1 .08984.16993.59384.59384 0 0 1 .05957.19043A1.136 1.136 0 0 1 13 7.9502a1.01 1.01 0 0 1-.08008.38964 1.11456 1.11456 0 0 1-.21.32032 1.195 1.195 0 0 1-.33008.21972A.98972.98972 0 0 1 12 8.9502z"
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

export default MMapMarkerInfo;
