import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAngleDoubleLeft: React.FC<Props> = ({
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
        className="uim-primary"
        d="M16.25 16a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 16.957 9.707L14.66406 12l2.293 2.293A1 1 0 0 1 16.25 16zM10.75 16a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 11.457 9.707L9.16406 12l2.293 2.293A1 1 0 0 1 10.75 16z"
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

export default MAngleDoubleLeft;
