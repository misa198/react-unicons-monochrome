import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTimesSquare: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M13.41406,12l2.293-2.293A.99989.99989,0,0,0,14.293,8.293L12,10.58594,9.707,8.293A.99989.99989,0,0,0,8.293,9.707L10.58594,12,8.293,14.293A.99989.99989,0,1,0,9.707,15.707L12,13.41406l2.293,2.293A.99989.99989,0,0,0,15.707,14.293Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,2H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2ZM15.707,14.293A.99989.99989,0,1,1,14.293,15.707L12,13.41406,9.707,15.707A.99989.99989,0,0,1,8.293,14.293L10.58594,12,8.293,9.707A.99989.99989,0,0,1,9.707,8.293L12,10.58594l2.293-2.293A.99989.99989,0,0,1,15.707,9.707L13.41406,12Z"
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

export default MTimesSquare;
