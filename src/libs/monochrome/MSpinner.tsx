import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSpinner: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="3" r="1" className="uim-primary"></circle>
      <circle cx="12" cy="21" r="1" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M16 18.92786a1 1 0 1 0 1.366.366A1 1 0 0 0 16 18.92786zM20.29425 15.63361a1 1 0 1 0 .366 1.366A1 1 0 0 0 20.29425 15.63361z"
      ></path>
      <circle cx="3" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="21" cy="12" r="1" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M3.70575 15.63361a1 1 0 1 0 1.366.366A1 1 0 0 0 3.70575 15.63361zM20.29425 8.36566a1 1 0 1 0-1.366-.366A1 1 0 0 0 20.29425 8.36566zM8 18.92786a1 1 0 1 0 .366 1.366A1 1 0 0 0 8 18.92786z"
      ></path>
      <circle
        cx="16.5"
        cy="4.205"
        r="1"
        className="uim-primary"
        transform="rotate(-15 16.5 4.205)"
      ></circle>
      <path
        className="uim-primary"
        d="M4.70575,6.63361a1,1,0,1,0,.366,1.366A1.00005,1.00005,0,0,0,4.70575,6.63361Z"
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

export default MSpinner;
