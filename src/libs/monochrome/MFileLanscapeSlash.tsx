import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileLanscapeSlash: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,10.99969a2,2,0,0,1-2-2v-5H5a2.996,2.996,0,0,0-3,3v10a2.996,2.996,0,0,0,3,3H19a2.996,2.996,0,0,0,3-3v-6Z"
      ></path>
      <path
        className="uim-primary"
        d="M22 10.99969H17a2 2 0 0 1-2-2v-5zM21 22a.99676.99676 0 0 1-.707-.293l-18-18A.99989.99989 0 0 1 3.707 2.293l18 18A1 1 0 0 1 21 22z"
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

export default MFileLanscapeSlash;
