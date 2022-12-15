import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCheck: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M9.83984,17.08008a.99676.99676,0,0,1-.707-.293L5.293,12.94727A.99989.99989,0,1,1,6.707,11.5332L9.83984,14.666,17.293,7.21289A.99989.99989,0,0,1,18.707,8.627l-8.16015,8.16016A.9968.9968,0,0,1,9.83984,17.08008Z"
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

export default MCheck;
