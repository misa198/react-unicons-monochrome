import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAlignAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M10 5H7A1 1 0 0 1 7 3h3a1 1 0 0 1 0 2zM10 9H3A1 1 0 0 1 3 7h7a1 1 0 0 1 0 2zM10 13H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM10 17H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM10 21H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 5H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 9H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 13H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 17H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM17 21H14a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"
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

export default MAlignAlt;
