import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MStepForward: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M8 17a1 1 0 0 1-.707-1.707L10.58594 12 7.293 8.707A.99989.99989 0 0 1 8.707 7.293l4 4a.99962.99962 0 0 1 0 1.41406l-4 4A.99676.99676 0 0 1 8 17zM16 17a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v8A1 1 0 0 1 16 17z"
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

export default MStepForward;
