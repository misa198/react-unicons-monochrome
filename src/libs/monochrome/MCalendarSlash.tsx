import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCalendarSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M3 18c0 1.65686 1.34314 3 3 3h12c1.65686 0 3-1.34314 3-3v-8H3V18zM16 3c-.55273 0-1 .44775-1 1v2c0 .55225.44727 1 1 1s1-.44775 1-1V4C17 3.44775 16.55273 3 16 3zM8 3C7.44775 3 7 3.44775 7 4v2c0 .55225.44775 1 1 1s1-.44775 1-1V4C9 3.44775 8.55225 3 8 3z"
      ></path>
      <path
        className="uim-secondary"
        d="M18,5h-1v1c0,0.55225-0.44727,1-1,1s-1-0.44775-1-1V5H9v1c0,0.55225-0.44775,1-1,1S7,6.55225,7,6V5H6C4.34314,5,3,6.34314,3,8v2h18V8C21,6.34314,19.65686,5,18,5z"
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

export default MCalendarSlash;
