import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWebGridAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <polygon
        className="uim-quaternary"
        points="22 8 2 8 2 10 11 10 11 22 13 22 13 10 22 10"
      ></polygon>
      <path
        className="uim-primary"
        d="M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z"
      ></path>
      <path
        className="uim-tertiary"
        d="M2,10h9l0,0v12l0,0H3c-0.55228,0-1-0.44772-1-1V10L2,10z M13,10h9l0,0v11c0,0.55228-0.44772,1-1,1h-8l0,0V10L13,10z"
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

export default MWebGridAlt;
