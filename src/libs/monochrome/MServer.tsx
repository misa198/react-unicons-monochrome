import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MServer: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <rect
        width="18"
        height="6"
        x="3"
        y="3"
        className="uim-quaternary"
        rx="2"
      ></rect>
      <rect
        width="18"
        height="6"
        x="3"
        y="9"
        className="uim-tertiary"
        rx="2"
      ></rect>
      <rect
        width="18"
        height="6"
        x="3"
        y="15"
        className="uim-quaternary"
        rx="2"
      ></rect>
      <circle cx="18" cy="6" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="18" r="1" className="uim-primary"></circle>
      <circle cx="15" cy="6" r="1" className="uim-primary"></circle>
      <circle cx="15" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="15" cy="18" r="1" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M9 7H6A1 1 0 0 1 6 5H9A1 1 0 0 1 9 7zM9 13H6a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2zM9 19H6a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2z"
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

export default MServer;
