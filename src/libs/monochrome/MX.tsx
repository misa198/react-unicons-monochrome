import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MX: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M13.41406,12l2.293-2.293A.99989.99989,0,0,0,14.293,8.293L12,10.58594,9.707,8.293A.99989.99989,0,0,0,8.293,9.707L10.58594,12,8.293,14.293A.99989.99989,0,1,0,9.707,15.707L12,13.41406l2.293,2.293A.99989.99989,0,0,0,15.707,14.293Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M8 5A1 1 0 0 0 8 3 5.00588 5.00588 0 0 0 3 8v8a5.00588 5.00588 0 0 0 5 5 1 1 0 0 0 0-2 3.00328 3.00328 0 0 1-3-3V8A3.00328 3.00328 0 0 1 8 5zM16 3a1 1 0 0 0 0 2 3.00328 3.00328 0 0 1 3 3v8a3.00328 3.00328 0 0 1-3 3 1 1 0 0 0 0 2 5.00588 5.00588 0 0 0 5-5V8A5.00588 5.00588 0 0 0 16 3z"
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

export default MX;
