import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCarSideview: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,9.5h-6v-5h-2v5H5c-1.65613,0.00183-2.99817,1.34387-3,3v3c0,0.00018,0,0.00037,0,0.00055C2.00012,16.05267,2.44788,16.50012,3,16.5h18c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1v-3C21.99817,10.84387,20.65613,9.50183,19,9.5z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18.67719 9.5l-1.24603-3.11523C16.97839 5.24377 15.87354 4.49609 14.646 4.5H13v5H18.67719zM11 9.5v-5H8.63965C7.21075 4.50275 5.98108 5.51056 5.69775 6.91113L5.18018 9.5H11z"
      ></path>
      <path
        className="uim-primary"
        d="M7,19.5c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C9.99819,18.15611,8.65611,19.49819,7,19.5z M17,19.5c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C19.99819,18.15611,18.65611,19.49819,17,19.5z"
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

export default MCarSideview;
