import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MServicemark: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M7.5 17h-4a1 1 0 0 1 0-2h4a1 1 0 0 0 0-2h-2a3 3 0 0 1 0-6h4a1 1 0 0 1 0 2h-4a1 1 0 0 0 0 2h2a3 3 0 0 1 0 6zM21.42279 7.61786a1.00122 1.00122 0 0 0-1.63013-.32459L17 10.08594 14.20734 7.29327A1.00138 1.00138 0 0 0 12.5 8v8a1 1 0 0 0 2 0V10.41406l1.793 1.793a.99963.99963 0 0 0 1.41406 0l1.793-1.793V16a1 1 0 0 0 2 0V8A.99946.99946 0 0 0 21.42279 7.61786z"
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

export default MServicemark;
