import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGoogleDriveAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M6.00018,19.79588L9,14.59863h12l-3.00005,5.19725H6.00018z"
      ></path>
      <path
        className="uim-quaternary"
        d="M15.00018,14.59863H21L15.00018,4.20412H9L15.00018,14.59863z"
      ></path>
      <path
        className="uim-tertiary"
        d="M3,14.59863l3.00018,5.19725L12,9.40138L9,4.20412L3,14.59863z"
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

export default MGoogleDriveAlt;
