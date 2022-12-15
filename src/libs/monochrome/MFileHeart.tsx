import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileHeart: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,9l-7-7H7C5.34315,2,4,3.34315,4,5v14c0,1.65685,1.34315,3,3,3h10c1.65685,0,3-1.34315,3-3V9z"
      ></path>
      <path
        className="uim-primary"
        d="M20 9h-5c-1.10457 0-2-.89543-2-2V2L20 9zM12 19.00031c-.26527.0003-.51971-.10515-.707-.293l-2.71878-2.71872c-1.14152-1.14087-1.14204-2.99111-.00117-4.13263C9.478 10.9505 10.86695 10.73946 12 11.33527c1.42871-.75109 3.1958-.20177 3.94689 1.22695.59553 1.13281.38476 2.52133-.52013 3.42637L12.707 18.70734C12.5197 18.89518 12.26526 19.00062 12 19.00031z"
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

export default MFileHeart;
