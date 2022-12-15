import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageAltSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M12.89,12.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L3,13.6V18c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L12.89,12.61z"
      ></path>
      <path
        className="uim-quaternary"
        d="M20.25,19.97009C20.7334,19.42773,21.00037,18.7265,21,18v-2.62l-3.47998-3.47009c-1.09967-1.04993-2.83038-1.04993-3.92999,0l-0.70001,0.70007l0,0L20.25,19.96997"
      ></path>
      <path
        className="uim-tertiary"
        d="M18,3H6C4.34515,3.00482,3.00482,4.34515,3,6v7.59998L6.47998,10.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L21,15.38V6C20.99518,4.34515,19.65485,3.00482,18,3z"
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

export default MImageAltSlash;
