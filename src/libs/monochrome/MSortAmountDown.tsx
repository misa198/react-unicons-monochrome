import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSortAmountDown: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20.99992 8h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM20.99992 13h-10a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M4.99992,18a.99942.99942,0,0,1-1-1V7a1,1,0,0,1,2,0V17A.99943.99943,0,0,1,4.99992,18Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M20.99992,18h-10a1,1,0,0,1,0-2h10a1,1,0,1,1,0,2Z"
      ></path>
      <path
        className="uim-primary"
        d="M4.99992,18a.9968.9968,0,0,1-.707-.293l-2-2A.99989.99989,0,0,1,3.707,14.293l1.293,1.293,1.293-1.293A.99989.99989,0,0,1,7.707,15.707l-2,2A.99678.99678,0,0,1,4.99992,18Z"
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

export default MSortAmountDown;
