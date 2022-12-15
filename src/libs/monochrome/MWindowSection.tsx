import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWindowSection: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <rect width="6" height="12" x="9" y="10" className="uim-tertiary"></rect>
      <path
        className="uim-tertiary"
        d="M2,10v11c0,0.55228,0.44772,1,1,1h4V10H2z"
      ></path>
      <polygon
        className="uim-quaternary"
        points="22 8 2 8 2 10 7 10 7 22 9 22 9 10 15 10 15 22 17 22 17 10 22 10"
      ></polygon>
      <path
        className="uim-tertiary"
        d="M17,10v12h4c0.55228,0,1-0.44772,1-1V10H17z"
      ></path>
      <path
        className="uim-primary"
        d="M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z"
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

export default MWindowSection;
