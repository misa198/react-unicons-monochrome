import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFocus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M8 22H3a.99974.99974 0 0 1-1-1V16a1 1 0 0 1 2 0v4H8a1 1 0 0 1 0 2zM3 9A.99974.99974 0 0 1 2 8V3A.99974.99974 0 0 1 3 2H8A1 1 0 0 1 8 4H4V8A.99974.99974 0 0 1 3 9zM21 9a.99974.99974 0 0 1-1-1V4H16a1 1 0 0 1 0-2h5a.99974.99974 0 0 1 1 1V8A.99974.99974 0 0 1 21 9zM21 22H16a1 1 0 0 1 0-2h4V16a1 1 0 0 1 2 0v5A.99974.99974 0 0 1 21 22z"
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

export default MFocus;
