import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAnalytics: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5 22a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v8A.99974.99974 0 0 1 5 22zM10 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 10 22zM15 22a.99974.99974 0 0 1-1-1V9a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 15 22zM20 22a.99974.99974 0 0 1-1-1V17a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 20 22z"
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

export default MAnalytics;
