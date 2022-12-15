import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGoogleDrive: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M15.33353,14.88737H22L15.33353,3.33791H8.66662L15.33353,14.88737z"
      ></path>
      <polygon
        className="uim-primary"
        points="8.667 3.338 2 14.887 5.334 20.662 12 9.113"
      ></polygon>
      <polygon
        className="uim-tertiary"
        points="8.667 14.887 5.334 20.662 18.667 20.662 22 14.887"
      ></polygon>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MGoogleDrive;
