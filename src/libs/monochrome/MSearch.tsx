import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSearch: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M11,18c-3.86599,0-7-3.13401-7-7s3.13401-7,7-7s7,3.13401,7,7C17.99565,14.86419,14.86419,17.99565,11,18z"
      ></path>
      <path
        className="uim-tertiary"
        d="M11,2c-4.97058,0-9,4.02942-9,9s4.02942,9,9,9c4.96826-0.00562,8.99438-4.03174,9-9C20,6.02942,15.97058,2,11,2z M11,18c-3.86597,0-7-3.13403-7-7s3.13403-7,7-7s7,3.13403,7,7C17.99567,14.8642,14.8642,17.99567,11,18z"
      ></path>
      <path
        className="uim-primary"
        d="M21.70575,20.29187l-3.68091-3.68091c-0.41785,0.52228-0.89172,0.99615-1.414,1.414l3.68085,3.68097c0.00079,0.00079,0.00159,0.00159,0.00232,0.00238c0.39117,0.38983,1.02429,0.38879,1.41412-0.00238C22.09796,21.31482,22.09686,20.6817,21.70575,20.29187z"
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

export default MSearch;
