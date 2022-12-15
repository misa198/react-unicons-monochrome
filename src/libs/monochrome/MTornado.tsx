import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTornado: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M10 23H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM11 19H6a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM17 3H3A1 1 0 0 1 3 1H17a1 1 0 0 1 0 2zM21 7H6A1 1 0 0 1 6 5H21a1 1 0 0 1 0 2zM19 11H10a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2zM14 15H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
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

export default MTornado;
