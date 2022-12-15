import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSignal: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M6 20a.99974.99974 0 0 1-1-1V16a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 6 20zM10 20a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v6A.99974.99974 0 0 1 10 20zM14 20a.99974.99974 0 0 1-1-1V9a1 1 0 0 1 2 0V19A.99974.99974 0 0 1 14 20zM18 20a.99974.99974 0 0 1-1-1V5a1 1 0 0 1 2 0V19A.99974.99974 0 0 1 18 20z"
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

export default MSignal;
