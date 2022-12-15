import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileMinusAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,8.99969l-7-7H6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M19 8.99969H14a2 2 0 0 1-2-2v-5zM20 20H16a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM13 18H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM14 14H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM9 10H8A1 1 0 0 1 8 8H9a1 1 0 0 1 0 2z"
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

export default MFileMinusAlt;
