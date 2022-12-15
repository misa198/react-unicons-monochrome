import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWall: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <rect width="2" height="4" x="3" y="16" className="uim-quaternary"></rect>
      <rect width="6" height="4" x="5" y="16" className="uim-tertiary"></rect>
      <rect width="6" height="4" x="11" y="16" className="uim-secondary"></rect>
      <rect
        width="4"
        height="4"
        x="17"
        y="16"
        className="uim-quaternary"
      ></rect>
      <rect width="2" height="4" x="3" y="8" className="uim-quaternary"></rect>
      <rect width="6" height="4" x="5" y="8" className="uim-tertiary"></rect>
      <rect width="6" height="4" x="11" y="8" className="uim-secondary"></rect>
      <rect width="4" height="4" x="17" y="8" className="uim-quaternary"></rect>
      <rect width="4" height="4" x="3" y="4" className="uim-secondary"></rect>
      <rect width="6" height="4" x="7" y="4" className="uim-quaternary"></rect>
      <rect width="6" height="4" x="13" y="4" className="uim-tertiary"></rect>
      <rect width="2" height="4" x="19" y="4" className="uim-quaternary"></rect>
      <rect width="4" height="4" x="3" y="12" className="uim-secondary"></rect>
      <rect width="6" height="4" x="7" y="12" className="uim-quaternary"></rect>
      <rect width="6" height="4" x="13" y="12" className="uim-tertiary"></rect>
      <rect width="2" height="4" x="19" y="12" className="uim-secondary"></rect>
      <path
        className="uim-primary"
        d="M7 9A1 1 0 0 1 6 8V4A1 1 0 0 1 8 4V8A1 1 0 0 1 7 9zM13 9a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V8A1 1 0 0 1 13 9zM19 9a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V8A1 1 0 0 1 19 9zM5 13a1 1 0 0 1-1-1V8A1 1 0 0 1 6 8v4A1 1 0 0 1 5 13zM11 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4A1 1 0 0 1 11 13zM17 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4A1 1 0 0 1 17 13zM7 17a1 1 0 0 1-1-1V12a1 1 0 0 1 2 0v4A1 1 0 0 1 7 17zM13 17a1 1 0 0 1-1-1V12a1 1 0 0 1 2 0v4A1 1 0 0 1 13 17z"
      ></path>
      <path
        className="uim-primary"
        d="M7 17a1 1 0 0 1-1-1V12a1 1 0 0 1 2 0v4A1 1 0 0 1 7 17zM19 17a1 1 0 0 1-1-1V12a1 1 0 0 1 2 0v4A1 1 0 0 1 19 17zM11 21a1 1 0 0 1-1-1V16a1 1 0 0 1 2 0v4A1 1 0 0 1 11 21zM5 21a1 1 0 0 1-1-1V16a1 1 0 0 1 2 0v4A1 1 0 0 1 5 21zM17 21a1 1 0 0 1-1-1V16a1 1 0 0 1 2 0v4A1 1 0 0 1 17 21zM21 9H3A1 1 0 0 1 3 7H21a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M21 21H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 5H3A1 1 0 0 1 3 3H21a1 1 0 0 1 0 2zM21 13H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 17H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
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

export default MWall;
