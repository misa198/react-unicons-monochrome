import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path className="uim-primary" d="M20,8.99969H15a2,2,0,0,1-2-2v-5Z"></path>
      <path
        className="uim-tertiary"
        d="M15,8.99969a2,2,0,0,1-2-2v-5H7a2.996,2.996,0,0,0-3,3v14a2.996,2.996,0,0,0,3,3H17a2.996,2.996,0,0,0,3-3v-10Z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
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

export default MFileSlash;
