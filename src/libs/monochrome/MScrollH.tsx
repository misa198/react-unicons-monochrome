import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MScrollH: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M4 18a1 1 0 0 1-.707-1.707L7.58594 12 3.293 7.707A.99989.99989 0 0 1 4.707 6.293l5 5a.99962.99962 0 0 1 0 1.41406l-5 5A.99676.99676 0 0 1 4 18zM20 18a.99676.99676 0 0 1-.707-.293l-5-5a.99962.99962 0 0 1 0-1.41406l5-5A.99989.99989 0 0 1 20.707 7.707L16.41406 12l4.293 4.293A1 1 0 0 1 20 18z"
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

export default MScrollH;
