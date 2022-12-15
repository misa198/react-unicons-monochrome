import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAngleDoubleUp: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M15 17.25a.99676.99676 0 0 1-.707-.293L12 14.66406 9.707 16.957A.99989.99989 0 0 1 8.293 15.543l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 15 17.25zM15 11.75a.99676.99676 0 0 1-.707-.293L12 9.16406 9.707 11.457A.99989.99989 0 0 1 8.293 10.043l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 15 11.75z"
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

export default MAngleDoubleUp;
