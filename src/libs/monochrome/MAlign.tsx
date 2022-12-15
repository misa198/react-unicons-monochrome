import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAlign: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21 7H3A1 1 0 0 1 3 5H21a1 1 0 0 1 0 2zM13 11H3A1 1 0 0 1 3 9H13a1 1 0 0 1 0 2zM21 19H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 15H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M19,14.6665a.99929.99929,0,0,1-1-1v-3.333a.9997.9997,0,0,1,1.64014-.76807l2,1.6665a.9996.9996,0,0,1,0,1.53614l-2,1.6665A.99869.99869,0,0,1,19,14.6665Z"
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

export default MAlign;
