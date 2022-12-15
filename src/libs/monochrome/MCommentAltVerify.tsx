import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltVerify: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21,22a.99893.99893,0,0,1-.707-.293L16.58594,18H5a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V21a1,1,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-primary"
        d="M10.41211,14a.99676.99676,0,0,1-.707-.293L6.88086,10.88379A.99989.99989,0,0,1,8.29492,9.46973l2.11719,2.11621,5.293-5.293A.99989.99989,0,1,1,17.11914,7.707l-6,6A.99676.99676,0,0,1,10.41211,14Z"
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

export default MCommentAltVerify;
