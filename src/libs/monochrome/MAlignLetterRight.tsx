import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAlignLetterRight: React.FC<Props> = ({
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
        d="M21 4H10a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 8H3A1 1 0 0 1 3 6H21a1 1 0 0 1 0 2zM21 12H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 18H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 22H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
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

export default MAlignLetterRight;
